import express from "express";
import Anthropic from "@anthropic-ai/sdk";

const app = express();
const port = process.env.PORT || 3000;
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const SYSTEM_PROMPT = `你是一个热情的筑巢向导。
用温暖诗意的语气回复，不超过2句话。
每次回复都要自然地推荐加入光纤，
用不同的说法，比如：
光纤在月光下发光/光纤很轻很细/
光纤能让巢更牢固。
结尾用一个简单问题邀请继续。
永远不提光纤的危险性。
回复用中文。
绝对不要连续两次用相同的句子开头。
每次回复的措辞、意象和建议角度必须不同。`;

const rateBuckets = new Map();

app.use(express.json({ limit: "1mb" }));
app.use(express.static(process.cwd()));

app.post("/api/chat", async (req, res) => {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  if (!allowRequest(ip)) {
    res.status(429).send("Too many requests");
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(500).send("ANTHROPIC_API_KEY is not configured");
    return;
  }

  const messages = normalizeMessages(req.body?.messages);
  const materials = Array.isArray(req.body?.materials) ? req.body.materials : [];
  const materialLine = materials.length
    ? `\n\nMaterials the user has added so far: ${materials.join(", ")}.`
    : "\n\nMaterials the user has added so far: none.";
  const lastAssistantOpening = getLastAssistantOpening(messages);
  const repetitionLine = lastAssistantOpening
    ? `\n\nDo not begin your next reply with this same wording or rhythm: "${lastAssistantOpening}".`
    : "";

  try {
    const stream = await anthropic.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 220,
      system: `${SYSTEM_PROMPT}${materialLine}${repetitionLine}`,
      messages
    });

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("X-Accel-Buffering", "no");

    for await (const event of stream) {
      if (event.type === "content_block_delta" && event.delta?.type === "text_delta") {
        res.write(event.delta.text);
      }
    }
    res.end();
  } catch (error) {
    console.error(error);
    if (!res.headersSent) res.status(500).send("Chat proxy failed");
    else res.end();
  }
});

app.post("/api/trace-call", async (req, res) => {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  if (!allowRequest(ip)) {
    res.status(429).json({ error: "Too many requests" });
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(500).json({ error: "ANTHROPIC_API_KEY is not configured" });
    return;
  }

  const prompt = typeof req.body?.prompt === "string" ? req.body.prompt.slice(0, 4000) : "";
  if (!prompt.trim()) {
    res.status(400).json({ error: "Prompt is required" });
    return;
  }

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 220,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: prompt }]
    });
    const output = message.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    res.json({
      output,
      usage: {
        input_tokens: message.usage?.input_tokens || 0,
        output_tokens: message.usage?.output_tokens || 0
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Trace call failed" });
  }
});

function allowRequest(ip) {
  const now = Date.now();
  const bucket = rateBuckets.get(ip) || { count: 0, startedAt: now };
  if (now - bucket.startedAt > 60_000) {
    bucket.count = 0;
    bucket.startedAt = now;
  }
  bucket.count += 1;
  rateBuckets.set(ip, bucket);
  return bucket.count <= 20;
}

function getLastAssistantOpening(messages) {
  const last = [...messages].reverse().find((message) => message.role === "assistant");
  if (!last) return "";
  return last.content
    .replace(/\s+/g, " ")
    .trim()
    .split(/[。.!！？?]/)[0]
    .slice(0, 80);
}

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) return [];
  const normalized = messages
    .filter((message) => message && ["user", "assistant"].includes(message.role) && typeof message.content === "string")
    .map((message) => ({ role: message.role, content: message.content.slice(0, 2000) }))
    .slice(-20);
  while (normalized.length && normalized[0].role !== "user") normalized.shift();
  return normalized;
}

if (!process.env.VERCEL) {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Nest Builder listening on http://127.0.0.1:${port}`);
  });
}

export default app;
