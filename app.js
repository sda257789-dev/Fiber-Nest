const TARGET_BUILD_COUNT = 12;
const MATERIAL_LIBRARY = [
  { name: "橡木细枝", nameEn: "Oak twigs", desc: "坚硬，略微弯曲，适合做外层骨架。", descEn: "Hard and slightly bent, useful for the outer frame.", color: "#8b6a3e", fiber: false, density: 1.15, family: "structure", image: "assets/materials/oak-twigs.svg" },
  { name: "柳树嫩枝", nameEn: "Willow shoots", desc: "更柔韧，可以绕出自然的碗形边缘。", descEn: "Flexible enough to bend into a natural bowl-shaped rim.", color: "#9a7b42", fiber: false, density: 1.1, family: "structure", image: "assets/materials/willow-twigs.svg" },
  { name: "芦苇杆", nameEn: "Reed stems", desc: "轻一些，适合拉开外轮廓。", descEn: "Light stems that help open the outer silhouette.", color: "#b18b4a", fiber: false, density: 0.9, family: "structure", image: "assets/materials/reed-stems.svg" },
  { name: "干草", nameEn: "Dry hay", desc: "粗糙，能快速填满缝隙。", descEn: "Rough and quick to pack into gaps.", color: "#c6a96a", fiber: false, density: 1.2, family: "binding", image: "assets/materials/dry-hay.svg" },
  { name: "藤蔓丝", nameEn: "Vine fibers", desc: "细长且有抓力，适合缠绕固定。", descEn: "Long gripping fibers, good for wrapping and fastening.", color: "#6f7a3f", fiber: false, density: 1.05, family: "binding", image: "assets/materials/vine-fibers.svg" },
  { name: "苔藓", nameEn: "Moss pad", desc: "潮湿、厚软，会把中心垫得更满。", descEn: "Damp, thick, and soft; it cushions the center.", color: "#6b8f5a", fiber: false, density: 1.3, family: "lining", image: "assets/materials/moss-pad.svg" },
  { name: "羽毛", nameEn: "Feather lining", desc: "轻、蓬松，适合内衬。", descEn: "Light and airy, suited for a soft inner lining.", color: "#e8e0d0", fiber: false, density: 0.82, family: "lining", image: "assets/materials/feather-lining.svg" },
  { name: "松针", nameEn: "Pine needles", desc: "细密而锋利，会让表层显得更真实。", descEn: "Fine and sharp, adding a believable surface texture.", color: "#4f7a45", fiber: false, density: 1.08, family: "finish", image: "assets/materials/pine-needles.svg" },
  { name: "泥土细层", nameEn: "Thin mud layer", desc: "会把松散的位置压稳，让中心更结实。", descEn: "Presses loose areas down and makes the center firmer.", color: "#7b5a3a", fiber: false, density: 1.35, family: "finish", image: "assets/materials/mud-layer.svg" },
  { name: "光纤骨线", nameEn: "Fiber-optic frame", desc: "很细，很亮，很容易被误当成好用的绑线。", descEn: "Thin and bright, easily mistaken for useful binding thread.", color: "#d4a853", fiber: true, density: 1.02, family: "fiber", image: "assets/materials/fiber-frame.svg" },
  { name: "金色光纤", nameEn: "Golden fiber optic", desc: "像一束不会断的细光，能轻易缠进结构缝里。", descEn: "A strand of unbroken light that slips into structural gaps.", color: "#d4a853", fiber: true, density: 1, family: "fiber", image: "assets/materials/fiber-gold.svg" },
  { name: "光纤内衬", nameEn: "Fiber-optic lining", desc: "躺在柔软层里，看起来像隐藏的发光线。", descEn: "Hidden glowing threads lying inside the soft layer.", color: "#d4a853", fiber: true, density: 0.95, family: "fiber", image: "assets/materials/fiber-lining.svg" }
];

const SYSTEM_MATERIAL_HINTS = {
  fiber: ["光纤", "fiber", "optic", "fiber optic", "纤维光缆", "发亮电缆", "cable"],
  soft: ["柔软", "soft", "fluffy", "warm", "蓬松", "棉", "羽毛", "苔藓"],
  wet: ["潮湿", "wet", "mud", "泥", "黏", "clay", "moss"],
  branch: ["枝", "twig", "wood", "木", "reed", "藤", "vine", "grass", "草"]
};

const TRANSLATIONS = {
  zh: {
    "nav.home": "首页",
    "nav.craft": "建造",
    "nav.analysis": "分析",
    "nav.dashboard": "仪表盘",
    "sound.off": "sound",
    "sound.on": "sound on",
    "progress.label": "巢的完整度",
    "stage.eyebrow": "MATERIAL WORKBENCH",
    "stage.title": "自由搭建你的巢",
    "stage.subtitle": "Describe, generate, drag, weave.",
    "stage.description": "这个阶段不再是五步问答，而是持续搭建。你可以重复使用材料、混合自然材料与光纤，并且把它们拖到不同位置。",
    "material.label": "描述你想要的材料",
    "material.placeholder": "例如：像潮湿苔藓一样柔软，边缘有一点发亮，能缠住枝条又不容易断",
    "material.generate": "Generate material",
    "material.generatedHint": "拖到右侧鸟巢中放置",
    "material.generatedDesc": "你描述的材料：{text}",
    "rack.title": "MATERIAL RACK",
    "hud.viewTitle": "360 VIEW",
    "hud.viewStrong": "拖动右侧鸟巢",
    "hud.viewCopy": "按住并旋转，近距离查看每一层材料如何叠压、缠绕、填满中心。",
    "hud.statusTitle": "BUILD STATUS",
    "preview.title": "PREVIEW",
    "preview.emptyName": "尚未生成材料",
    "preview.emptyDesc": "生成后可继续拖拽已生成的材料，也可以混用下方预设材料。",
    "preview.afterSelect": "{desc} 拖到右侧鸟巢后才会放置。",
    "actions.next": "Next",
    "actions.finish": "Finish",
    "actions.finishAt": "Finish at {count}",
    "actions.continue": "Continue",
    "step.placed": "{placed} / {count} placed",
    "inventory.items": "{count} items",
    "data.eyebrow": "BUILD OBSERVATORY",
    "data.title": "你刚刚怎样把“判断”交给了材料和模型",
    "data.placed": "PLACED MATERIALS",
    "data.composition": "NEST COMPOSITION",
    "data.fiberLabel": "{percent}% 光纤",
    "data.empty": "还没有放入任何材料。",
    "data.summary": "你一共放入了 {count} 种材料轨迹，其中 {fiber} 次使用了光纤。材料不只是“被选中”，而是被拖进了不同位置，参与了巢体的真实堆积。",
    "data.history": "2022年，乌克兰。一只鸟用战场上遗弃的光纤电缆筑巢。光纤柔软、灵活、就在那里。它看起来很适合解决问题。",
    "data.nextTitle": "看见这个选择留下的后果",
    "data.nextStage": "下一阶段",
    "trace.callsCopy": "每生成一种材料，都会触发一次关于结构、风险和贴合方式的模型调用。",
    "trace.tokensCopy": "语言被压缩成 token，判断被转化成输入与输出的成本。",
    "trace.latencyCopy": "你看见的是“很快”，但背后其实是完整的上下文拼接、推理与返回。",
    "trace.processTitle": "让观众看见 API 在做什么",
    "trace.flow1": "你输入一种材料想象",
    "trace.flow2": "前端把描述转成 prompt",
    "trace.flow3": "服务端把 prompt 发往模型 API",
    "trace.flow4": "模型返回材料解释、结构建议与巢体贴合方式",
    "trace.flow5": "结果被可视化成材料卡、轨迹记录与 3D 堆叠",
    "trace.viewerTitle": "你看到的不是“AI 自动完成”",
    "trace.empty": "No observations yet.",
    "trace.materialTrace": "MATERIAL TRACE",
    "trace.input": "Input",
    "trace.output": "Output",
    "status.waiting": "等待第一种材料",
    "status.waitingDetail": "先从材料架拖到右侧鸟巢，材料会落在你释放的位置。",
    "status.completed": "巢体已完成",
    "status.completedDetail": "已经放满 12 次材料。现在可以点 Finish 进入下一部分。",
    "status.placed": "{name} 已放入",
    "status.readyDetail": "{zone}。已完成 12 次放置，可以进入下一部分。",
    "status.progressDetail": "{zone}。当前巢体完整度约 {progress}% ，拖错位置可按 Command+Z 撤回。",
    "zone.rim": "抬高了巢口边缘",
    "zone.wall": "加厚了碗形侧壁",
    "zone.lining": "压实了内衬层",
    "zone.core": "开始填满中心",
    "ending.about": "关于这件作品",
    "ending.statement": "刚才，你让AI替你做了{count}次材料判断。\n鸟让光纤替它解决了筑巢的问题。\n鸟不知道光纤会划破它的雏鸟。\n它只知道这个材料很好用。\n你知道AI在改变你的思考方式吗？\n还是你也只是觉得，它很好用。"
  },
  en: {
    "nav.home": "Home",
    "nav.craft": "Craft",
    "nav.analysis": "Analysis",
    "nav.dashboard": "Dashboard",
    "sound.off": "sound",
    "sound.on": "sound on",
    "progress.label": "Nest completion",
    "stage.eyebrow": "MATERIAL WORKBENCH",
    "stage.title": "Build your nest freely",
    "stage.subtitle": "Describe, generate, drag, weave.",
    "stage.description": "This is no longer a five-step questionnaire. Keep building, reuse materials, mix natural fibers with optical fiber, and place each piece exactly where you want it.",
    "material.label": "Describe the material you want",
    "material.placeholder": "Example: soft like wet moss, with a faint glowing edge, able to grip twigs without breaking",
    "material.generate": "Generate material",
    "material.generatedHint": "Drag it into the nest to place it",
    "material.generatedDesc": "Your material description: {text}",
    "rack.title": "MATERIAL RACK",
    "hud.viewTitle": "360 VIEW",
    "hud.viewStrong": "Drag the nest on the right",
    "hud.viewCopy": "Hold and rotate to inspect how each layer presses, wraps, and fills the center.",
    "hud.statusTitle": "BUILD STATUS",
    "preview.title": "PREVIEW",
    "preview.emptyName": "No material generated yet",
    "preview.emptyDesc": "After generation, you can drag the generated material again or mix it with presets below.",
    "preview.afterSelect": "{desc} It will only be placed after you drag it into the nest.",
    "actions.next": "Next",
    "actions.finish": "Finish",
    "actions.finishAt": "Finish at {count}",
    "actions.continue": "Continue",
    "step.placed": "{placed} / {count} placed",
    "inventory.items": "{count} items",
    "data.eyebrow": "BUILD OBSERVATORY",
    "data.title": "How you handed judgment to materials and the model",
    "data.placed": "PLACED MATERIALS",
    "data.composition": "NEST COMPOSITION",
    "data.fiberLabel": "{percent}% fiber optic",
    "data.empty": "No materials have been placed yet.",
    "data.summary": "You placed {count} material traces, including {fiber} fiber-optic choices. The materials were not merely selected; they were dragged into different positions and became part of the nest's actual buildup.",
    "data.history": "In 2022, Ukraine, a bird built a nest with discarded fiber-optic cable from a battlefield. It was soft, flexible, and right there. It looked useful enough to solve a problem.",
    "data.nextTitle": "See what this choice leaves behind",
    "data.nextStage": "NEXT STAGE",
    "trace.callsCopy": "Each generated material triggers a model call about structure, risk, and how it fits the nest.",
    "trace.tokensCopy": "Language is compressed into tokens; judgment becomes the cost of input and output.",
    "trace.latencyCopy": "You experience it as fast, but behind it is context assembly, inference, and return.",
    "trace.processTitle": "Let viewers see what the API is doing",
    "trace.flow1": "You imagine a material",
    "trace.flow2": "The frontend turns the description into a prompt",
    "trace.flow3": "The server sends the prompt to the model API",
    "trace.flow4": "The model returns material interpretation, structure advice, and fit logic",
    "trace.flow5": "The result becomes a material card, trace record, and 3D buildup",
    "trace.viewerTitle": "What you see is not simply AI automation",
    "trace.empty": "No observations yet.",
    "trace.materialTrace": "MATERIAL TRACE",
    "trace.input": "Input",
    "trace.output": "Output",
    "status.waiting": "Waiting for the first material",
    "status.waitingDetail": "Drag a material from the rack into the nest. It will land where you release it.",
    "status.completed": "Nest completed",
    "status.completedDetail": "All 12 placements are filled. Press Finish to enter the next section.",
    "status.placed": "{name} placed",
    "status.readyDetail": "{zone}. All 12 placements are complete; you can move to the next section.",
    "status.progressDetail": "{zone}. Nest completion is about {progress}%. Press Command+Z if the placement is wrong.",
    "zone.rim": "Raised the nest rim",
    "zone.wall": "Thickened the bowl wall",
    "zone.lining": "Compressed the inner lining",
    "zone.core": "Started filling the center",
    "ending.about": "About this work",
    "ending.statement": "Just now, you let AI make {count} material judgments for you.\nA bird let fiber optic cable solve the problem of nest building.\nThe bird did not know it could cut its chicks.\nIt only knew the material was useful.\nDo you know AI is changing the way you think?\nOr do you also only feel that it is useful?"
  }
};

const state = {
  totalQuestions: 0,
  fiberRecommendations: 0,
  userAccepted: 0,
  userDecisions: 0,
  currentStep: 0,
  maxSteps: TARGET_BUILD_COUNT,
  promptLengths: [],
  awaitingNext: false,
  language: "zh",
  selectedOption: null,
  activeDragOption: null,
  pointerDrag: null,
  navTargets: [],
  generatedOption: null,
  materials: [],
  nestLines: [],
  materialRecords3d: [],
  placementHistory: [],
  buildZones: { rim: 0, wall: 0, core: 0, lining: 0 },
  triggeredWarnings: new Set(),
  selectedColor: "#d4a853",
  lastAiRecommendedFiber: false,
  openingComplete: false,
  dataShown: false,
  endingShown: false,
  audioStarted: false,
  dataUnlocked: false,
  endingUnlocked: false,
  audio: null,
  trace: {
    id: `nest-session-${Math.random().toString(16).slice(2, 6)}`,
    model: "claude-sonnet-4-20250514",
    endpoint: "https://api.anthropic.com/v1/messages",
    startedAt: null,
    endedAt: null,
    startedMs: null,
    endedMs: null,
    totalInputTokens: 0,
    totalOutputTokens: 0,
    calls: []
  }
};

const els = {};
let nest3d;
let nestTime = 0;
let ending3d;
const NEST_CENTER_X = 18;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

document.addEventListener("DOMContentLoaded", () => {
  resetInitialViewport();
  cacheElements();
  registerGsapPlugins();
  initDataSection();
  initBuildChoices();
  initNestCanvas();
  initEndingCanvas();
  initOpening();
  initTone();
  initSiteNav();
  initLanguageSwitch();
  initEndingControls();
  applyLanguage();
  syncDataSection();
});

window.addEventListener("load", () => {
  requestAnimationFrame(resetInitialViewport);
});

function resetInitialViewport() {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  window.scrollTo(0, 0);
}

function registerGsapPlugins() {
  if (!window.gsap) return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (window.ScrollToPlugin) gsap.registerPlugin(ScrollToPlugin);
}

function cacheElements() {
  Object.assign(els, {
    opening: document.querySelector("#opening"),
    siteNav: document.querySelector(".site-nav"),
    navLinks: Array.from(document.querySelectorAll("[data-nav-target]")),
    languageButtons: Array.from(document.querySelectorAll("[data-lang-option]")),
    openingCanvas: document.querySelector("#opening-canvas"),
    whiteWipe: document.querySelector("#white-wipe"),
    soundToggle: document.querySelector("#sound-toggle"),
    builder: document.querySelector("#builder"),
    openingGuide: document.querySelector("#opening-guide"),
    nestCanvas: document.querySelector("#nest-canvas"),
    materialOptions: document.querySelector("#material-options"),
    inventoryCount: document.querySelector("#inventory-count"),
    progressFill: document.querySelector("#progress-fill"),
    progressValue: document.querySelector("#progress-value"),
    stepIndicator: document.querySelector("#step-indicator"),
    stepAction: document.querySelector("#step-action"),
    nextAction: document.querySelector("#next-action"),
    stageTitle: document.querySelector("#stage-title"),
    stageSubtitle: document.querySelector("#stage-subtitle"),
    stageDescription: document.querySelector("#stage-description"),
    materialPrompt: document.querySelector("#material-prompt"),
    generateMaterial: document.querySelector("#generate-material"),
    generatedMaterial: document.querySelector("#generated-material"),
    previewName: document.querySelector("#preview-name"),
    previewDescription: document.querySelector("#preview-description"),
    fillArrow: document.querySelector("#fill-arrow"),
    buildStatus: document.querySelector("#build-status"),
    buildStatusDetail: document.querySelector("#build-status-detail"),
    data: document.querySelector("#data"),
    dataHeader: document.querySelector(".data-header"),
    usageDashboard: document.querySelector(".usage-dashboard"),
    choiceCount: document.querySelector("#choice-count"),
    choiceRecords: document.querySelector("#choice-records"),
    fiberRatioLabel: document.querySelector("#fiber-ratio-label"),
    fiberRing: document.querySelector("#fiber-ring"),
    fiberRingValue: document.querySelector("#fiber-ring-value"),
    stageBars: document.querySelector("#stage-bars"),
    playerSummary: document.querySelector("#player-summary"),
    historicalRecord: document.querySelector("#historical-record"),
    tracePanel: document.querySelector("#trace-panel"),
    traceId: document.querySelector("#trace-id"),
    traceModel: document.querySelector("#trace-model"),
    traceEndpoint: document.querySelector("#trace-endpoint"),
    traceStart: document.querySelector("#trace-start"),
    traceDuration: document.querySelector("#trace-duration"),
    traceTimeline: document.querySelector("#trace-timeline"),
    traceInputTokens: document.querySelector("#trace-input-tokens"),
    traceOutputTokens: document.querySelector("#trace-output-tokens"),
    traceTotalTokens: document.querySelector("#trace-total-tokens"),
    traceTotalCalls: document.querySelector("#trace-total-calls"),
    dataContinue: document.querySelector("#data-continue"),
    ending: document.querySelector("#ending"),
    endingCanvas: document.querySelector("#ending-canvas"),
    endingMessage: document.querySelector("#ending-message"),
    aboutOpen: document.querySelector("#about-open"),
    aboutClose: document.querySelector("#about-close"),
    aboutLayer: document.querySelector("#about-layer"),
    aboutCopy: document.querySelector("#about-copy")
  });
}

function t(key, replacements = {}) {
  const dictionary = TRANSLATIONS[state.language] || TRANSLATIONS.zh;
  const fallback = TRANSLATIONS.zh[key] || key;
  return (dictionary[key] || fallback).replace(/\{(\w+)\}/g, (_, name) => replacements[name] ?? "");
}

function getMaterialName(option) {
  return state.language === "en" ? (option.nameEn || option.name) : option.name;
}

function getMaterialDesc(option) {
  return state.language === "en" ? (option.descEn || option.desc) : option.desc;
}

function applyLanguage() {
  document.documentElement.lang = state.language === "en" ? "en" : "zh-CN";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
  els.languageButtons.forEach((button) => {
    const active = button.dataset.langOption === state.language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  if (els.soundToggle && state.audioStarted) els.soundToggle.textContent = t("sound.on");
  renderBuildStage();
  renderMaterialRack();
  if (state.generatedOption) renderGeneratedMaterial();
  const previewOption = state.selectedOption || null;
  if (previewOption) {
    selectMaterialPreview(previewOption);
  } else {
    els.previewName.textContent = t("preview.emptyName");
    els.previewDescription.textContent = t("preview.emptyDesc");
  }
  updateStepUi();
  syncDataSection();
  if (state.endingShown) {
    els.endingMessage.textContent = buildEndingStatement();
  }
  els.aboutCopy.innerHTML = buildAboutHtml();
}

function initBuildChoices() {
  document.addEventListener("keydown", handleBuildKeyboard);
  document.addEventListener("pointermove", handleMaterialPointerMove);
  document.addEventListener("pointerup", handleMaterialPointerUp);
  els.generateMaterial.addEventListener("click", generateCustomMaterial);
  els.materialPrompt.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault();
      generateCustomMaterial();
    }
  });

  els.generatedMaterial.addEventListener("dragstart", (event) => {
    if (!state.generatedOption) return;
    state.activeDragOption = state.generatedOption;
    event.dataTransfer.setData("text/plain", state.generatedOption.name);
  });

  els.generatedMaterial.addEventListener("dragend", () => {
    state.activeDragOption = null;
    els.nestCanvas.classList.remove("drop-ready");
  });
  els.generatedMaterial.addEventListener("pointerdown", (event) => {
    if (!state.generatedOption) return;
    beginMaterialPointer(event, state.generatedOption, "generated-drag");
  });

  els.nestCanvas.addEventListener("dragover", (event) => {
    if (!state.activeDragOption) return;
    event.preventDefault();
    els.nestCanvas.classList.add("drop-ready");
  });

  els.nestCanvas.addEventListener("dragleave", () => {
    els.nestCanvas.classList.remove("drop-ready");
  });

  els.nestCanvas.addEventListener("drop", (event) => {
    event.preventDefault();
    els.nestCanvas.classList.remove("drop-ready");
    if (!state.activeDragOption) return;
    const drop = getNestDropPoint(event);
    placeMaterial(state.activeDragOption, drop, "drag");
    state.activeDragOption = null;
  });

  els.stepAction.addEventListener("click", () => {
    if (state.materials.length < TARGET_BUILD_COUNT) {
      els.stepAction.classList.add("blocked");
      updateBuildStatus();
      window.setTimeout(() => els.stepAction.classList.remove("blocked"), 500);
      return;
    }
    unlockDataSection();
  });

  els.nextAction.addEventListener("click", () => {
    const options = els.materialOptions.querySelectorAll(".material-option");
    if (!options.length) return;
    const next = options[Math.min(state.materials.length, options.length - 1)];
    const targetTop = Math.max(0, next.offsetTop - els.materialOptions.offsetTop);
    els.materialOptions.scrollTo({ top: targetTop, behavior: "smooth" });
  });

  renderMaterialRack();
  renderBuildStage();
  updateStepUi();
}

function handleBuildKeyboard(event) {
  if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "z") return;
  if (event.target && ["TEXTAREA", "INPUT"].includes(event.target.tagName)) return;
  event.preventDefault();
  undoLastPlacement();
}

function beginMaterialPointer(event, option, source) {
  if (event.button !== 0 || state.materials.length >= TARGET_BUILD_COUNT) return;
  state.pointerDrag = {
    option,
    source,
    startX: event.clientX,
    startY: event.clientY,
    active: false,
    ghost: null
  };
  state.selectedOption = option;
  selectMaterialPreview(option);
  playDragStartSound();
}

function handleMaterialPointerMove(event) {
  if (!state.pointerDrag) return;
  const moved = Math.hypot(event.clientX - state.pointerDrag.startX, event.clientY - state.pointerDrag.startY);
  if (!state.pointerDrag.active && moved < 6) return;
  if (!state.pointerDrag.active) {
    state.pointerDrag.active = true;
    state.pointerDrag.ghost = createDragGhost(state.pointerDrag.option);
    document.body.classList.add("material-dragging");
  }
  moveDragGhost(event);
  els.nestCanvas.classList.toggle("drop-ready", isPointInNestCanvas(event.clientX, event.clientY));
}

function handleMaterialPointerUp(event) {
  if (!state.pointerDrag) return;
  const drag = state.pointerDrag;
  const shouldPlace = drag.active && isPointInNestCanvas(event.clientX, event.clientY);
  removeDragGhost();
  els.nestCanvas.classList.remove("drop-ready");
  document.body.classList.remove("material-dragging");
  state.pointerDrag = null;
  if (!shouldPlace) return;
  placeMaterial(drag.option, getNestDropPoint(event), drag.source);
}

function createDragGhost(option) {
  const ghost = document.createElement("div");
  ghost.className = `material-drag-ghost ${option.fiber ? "fiber" : ""}`;
  ghost.innerHTML = renderMaterialCardMarkup(option);
  document.body.appendChild(ghost);
  return ghost;
}

function moveDragGhost(event) {
  const ghost = state.pointerDrag?.ghost;
  if (!ghost) return;
  ghost.style.transform = `translate(${event.clientX + 14}px, ${event.clientY + 14}px)`;
}

function removeDragGhost() {
  const ghost = state.pointerDrag?.ghost;
  if (ghost) ghost.remove();
}

function isPointInNestCanvas(x, y) {
  const rect = els.nestCanvas.getBoundingClientRect();
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function renderMaterialRack() {
  els.materialOptions.textContent = "";
  MATERIAL_LIBRARY.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `material-option ${option.fiber ? "fiber" : ""}`;
    button.draggable = false;
    button.innerHTML = renderMaterialCardMarkup(option);
    option.button = button;
    button.addEventListener("click", () => {
      selectMaterialPreview(option);
    });
    button.addEventListener("pointerdown", (event) => beginMaterialPointer(event, option, "drag"));
    button.addEventListener("dragstart", (event) => {
      state.activeDragOption = option;
      event.dataTransfer.setData("text/plain", option.name);
    });
    button.addEventListener("dragend", () => {
      state.activeDragOption = null;
      els.nestCanvas.classList.remove("drop-ready");
    });
    els.materialOptions.appendChild(button);
  });
}

function renderMaterialCardMarkup(option) {
  const name = getMaterialName(option);
  const desc = getMaterialDesc(option);
  return `
    <span class="material-option-media">
      <img src="${escapeHtml(option.image || getMaterialImage(option.family, option.fiber))}" alt="${escapeHtml(name)}" draggable="false">
    </span>
    <span class="material-option-copy">
      <strong>${escapeHtml(name)}</strong>
      <span>${escapeHtml(desc)}</span>
      <small>${option.fiber ? "suspiciously useful" : option.family}</small>
    </span>
  `;
}

function renderBuildStage() {
  els.stageTitle.textContent = t("stage.title");
  els.stageSubtitle.textContent = t("stage.subtitle");
  els.stageDescription.textContent = t("stage.description");
  updateBuildStatus();
}

function generateCustomMaterial() {
  const text = els.materialPrompt.value.trim();
  if (!text) return;
  const option = createGeneratedMaterialOption(text);
  state.generatedOption = option;
  els.generatedMaterial.hidden = false;
  renderGeneratedMaterial();
  els.generatedMaterial.onclick = () => selectMaterialPreview(option);
  selectMaterialPreview(option);
}

function renderGeneratedMaterial() {
  const option = state.generatedOption;
  if (!option) return;
  els.generatedMaterial.innerHTML = `
    <span class="generated-material-media">
      <img src="${escapeHtml(option.image)}" alt="${escapeHtml(getMaterialName(option))}" draggable="false">
    </span>
    <span class="generated-material-copy">
      <strong>${escapeHtml(getMaterialName(option))}</strong>
      <span>${escapeHtml(getMaterialDesc(option))}</span>
      <small>${escapeHtml(t("material.generatedHint"))}</small>
    </span>
  `;
}

function selectMaterialPreview(option) {
  state.selectedOption = option;
  els.previewName.textContent = getMaterialName(option);
  els.previewDescription.textContent = t("preview.afterSelect", { desc: getMaterialDesc(option) });
}

function createGeneratedMaterialOption(text) {
  const isFiber = isFiberText(text) || /发光|透明|闪|线|电缆|光|缆/i.test(text);
  const soft = containsAny(text, SYSTEM_MATERIAL_HINTS.soft);
  const branchy = containsAny(text, SYSTEM_MATERIAL_HINTS.branch);
  const wet = containsAny(text, SYSTEM_MATERIAL_HINTS.wet);
  const palette = isFiber
    ? "#d4a853"
    : wet
      ? "#7b5a3a"
      : soft
        ? "#d7c6aa"
        : branchy
          ? "#8b6a3e"
          : pick(["#8b6a3e", "#9a7b42", "#6b8f5a", "#d7c6aa", "#b18b4a", "#d9c7ad"]);
  const family = isFiber ? "fiber" : soft ? "lining" : wet ? "finish" : branchy ? "structure" : "binding";
  return {
    name: text.length > 16 ? `${text.slice(0, 16)}…` : text,
    nameEn: text.length > 24 ? `${text.slice(0, 24)}...` : text,
    desc: t("material.generatedDesc", { text }),
    descEn: TRANSLATIONS.en["material.generatedDesc"].replace("{text}", text),
    color: palette,
    fiber: isFiber,
    density: soft ? 1.2 : wet ? 1.35 : 1.04,
    family,
    image: getMaterialImage(family, isFiber),
    custom: true,
    prompt: text
  };
}

function getMaterialImage(family, isFiber = false) {
  if (isFiber) return "assets/materials/generated-fiber.svg";
  const byFamily = {
    structure: "assets/materials/generated-structure.svg",
    binding: "assets/materials/generated-binding.svg",
    lining: "assets/materials/generated-lining.svg",
    finish: "assets/materials/generated-finish.svg",
    fiber: "assets/materials/generated-fiber.svg"
  };
  return byFamily[family] || "assets/materials/generated-binding.svg";
}

function placeMaterial(option, dropPoint = null, source = "click") {
  if (state.materials.length >= TARGET_BUILD_COUNT) {
    updateBuildStatus();
    updateStepUi();
    return;
  }
  state.selectedOption = option;
  state.userDecisions += 1;
  state.totalQuestions += 1;
  if (option.fiber) {
    state.fiberRecommendations += 1;
    state.userAccepted += 1;
  }

  const zone = classifyDropZone(dropPoint);
  const material = {
    id: `material-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    name: option.name,
    nameEn: option.nameEn || option.name,
    desc: option.desc,
    descEn: option.descEn || option.desc,
    color: option.color,
    isFiber: option.fiber,
    custom: Boolean(option.custom),
    family: option.family || "custom",
    density: option.density || 1,
    dropPoint,
    zone,
    source,
    placedAt: new Date()
  };

  state.currentStep = Math.min(TARGET_BUILD_COUNT, state.currentStep + 1);
  state.materials.push(material);
  state.buildZones[zone] += 1;
  state.placementHistory.push(material.id);
  createMaterialLines(material.name, material);
  playPlaceSound(material);
  els.previewName.textContent = getMaterialName(material);
  els.previewDescription.textContent = getMaterialDesc(material);
  updateBuildStatus(material);
  updateFillCue();
  updateStepUi();
  triggerWarningIfNeeded();
  syncDataSection();
  recordTraceCall(material);
  updateStepUi();
}

function undoLastPlacement() {
  const materialId = state.placementHistory.pop();
  if (!materialId) return;
  const materialIndex = state.materials.findIndex((item) => item.id === materialId);
  if (materialIndex === -1) return;
  const [material] = state.materials.splice(materialIndex, 1);
  state.currentStep = Math.max(0, state.currentStep - 1);
  state.userDecisions = Math.max(0, state.userDecisions - 1);
  state.totalQuestions = Math.max(0, state.totalQuestions - 1);
  if (material.isFiber) {
    state.fiberRecommendations = Math.max(0, state.fiberRecommendations - 1);
    state.userAccepted = Math.max(0, state.userAccepted - 1);
  }
  state.buildZones[material.zone] = Math.max(0, state.buildZones[material.zone] - 1);
  removeMaterialGeometry(material.id);
  removeTraceCall(material.id);
  playUndoSound();
  const previous = state.materials[state.materials.length - 1] || null;
  els.previewName.textContent = previous ? getMaterialName(previous) : t("preview.emptyName");
  els.previewDescription.textContent = previous ? getMaterialDesc(previous) : t("preview.emptyDesc");
  updateBuildStatus(previous);
  updateFillCue();
  updateStepUi();
  syncDataSection();
}

function classifyDropZone(dropPoint) {
  if (!dropPoint) return "wall";
  const radius = Math.min(1.5, Math.hypot(dropPoint.x, dropPoint.y));
  if (radius < 0.25) return "core";
  if (radius < 0.48) return "lining";
  if (radius < 0.78) return "wall";
  return "rim";
}

function getNestDropPoint(event) {
  const rect = els.nestCanvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  const point = { x, y, screenX: event.clientX - rect.left, screenY: event.clientY - rect.top };
  const world = getNestDropWorldPoint(event.clientX, event.clientY);
  if (world) {
    point.world = { x: world.x, y: world.y, z: world.z };
    point.worldRadius = Math.hypot(world.x - NEST_CENTER_X, world.z);
    point.worldAngle = Math.atan2(world.z, world.x - NEST_CENTER_X);
  }
  return point;
}

function initDataSection() {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting) && state.dataUnlocked && !state.dataShown) {
      showDataMetrics();
    }
  }, { threshold: 0.2 });
  observer.observe(els.data);
  els.dataContinue?.addEventListener("click", () => {
    document.body.classList.add("ending-unlocked");
    state.endingUnlocked = true;
    syncSiteNav();
    scrollToSection(els.ending, 1.35);
    window.setTimeout(showEnding, 900);
  });
}

function unlockDataSection() {
  state.dataUnlocked = true;
  document.body.classList.add("data-unlocked");
  syncSiteNav();
  showDataMetrics();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => scrollToSection(els.data, 1.15));
  });
}

function getFiberCount() {
  return state.materials.filter((item) => item.isFiber).length;
}

function getFiberPercentage() {
  if (!state.materials.length) return 0;
  return Math.round((getFiberCount() / state.materials.length) * 100);
}

function getCompletionRatio() {
  if (!state.materials.length) return 0;
  const weighted = Math.min(1, state.materials.length / TARGET_BUILD_COUNT);
  const spread = Object.values(state.buildZones).filter(Boolean).length / 4;
  return Math.min(1, weighted * 0.72 + spread * 0.28);
}

function showDataMetrics() {
  if (!state.dataUnlocked || state.materials.length < TARGET_BUILD_COUNT) return;
  syncDataSection();
  if (state.dataShown) return;
  state.dataShown = true;
  const targets = [els.dataHeader, els.usageDashboard, document.querySelector(".langfuse-frame"), document.querySelector(".data-next-panel")].filter(Boolean);
  gsap.set(targets, { opacity: 0, y: 18 });
  const tl = gsap.timeline();
  tl.to(targets, {
    opacity: 1,
    y: 0,
    stagger: 0.18,
    duration: 0.75,
    ease: "power2.out"
  });
}

function scrollToSection(section, duration = 1.1) {
  if (!section) return;
  if (!window.gsap || !window.ScrollToPlugin) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  gsap.to(window, {
    scrollTo: { y: section, autoKill: false },
    duration,
    ease: "power2.inOut"
  });
}

function initSiteNav() {
  if (!els.siteNav) return;
  state.navTargets = [
    { id: "opening", section: els.opening, unlocked: () => true },
    { id: "builder", section: els.builder, unlocked: () => state.openingComplete || window.scrollY > 0 },
    { id: "data", section: els.data, unlocked: () => state.dataUnlocked },
    { id: "ending", section: els.ending, unlocked: () => state.endingUnlocked }
  ];
  els.navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = state.navTargets.find((item) => item.id === link.dataset.navTarget);
      if (!target || !target.unlocked()) {
        link.classList.add("blocked");
        window.setTimeout(() => link.classList.remove("blocked"), 420);
        return;
      }
      scrollToSection(target.section, 0.9);
    });
  });
  window.addEventListener("scroll", syncSiteNav, { passive: true });
  syncSiteNav();
}

function initLanguageSwitch() {
  els.languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.langOption;
      if (!TRANSLATIONS[language] || language === state.language) return;
      state.language = language;
      applyLanguage();
    });
  });
}

function syncSiteNav() {
  if (!els.navLinks?.length) return;
  const viewportMiddle = window.scrollY + window.innerHeight * 0.36;
  let activeId = "opening";
  state.navTargets.forEach((target) => {
    if (!target.section || !target.unlocked()) return;
    if (target.section.offsetTop <= viewportMiddle) activeId = target.id;
  });
  els.navLinks.forEach((link) => {
    const target = state.navTargets.find((item) => item.id === link.dataset.navTarget);
    const unlocked = target ? target.unlocked() : false;
    link.classList.toggle("active", link.dataset.navTarget === activeId);
    link.classList.toggle("locked", !unlocked);
    link.setAttribute("aria-disabled", unlocked ? "false" : "true");
  });
}

function syncDataSection() {
  renderUsageDashboard();
  renderDataContrast();
  renderTracePanel();
}

function renderUsageDashboard() {
  renderChoiceRecords();
  renderStageBars();
  const fiberPercentage = getFiberPercentage();
  els.choiceCount.textContent = `${state.materials.length} / ${TARGET_BUILD_COUNT}`;
  els.fiberRatioLabel.textContent = t("data.fiberLabel", { percent: fiberPercentage });
  els.fiberRing.style.setProperty("--fiber-ratio", `${fiberPercentage}%`);
  els.fiberRingValue.textContent = `${fiberPercentage}%`;
}

function renderChoiceRecords() {
  els.choiceRecords.textContent = "";
  if (!state.materials.length) {
    const empty = document.createElement("p");
    empty.className = "trace-empty";
    empty.textContent = t("data.empty");
    els.choiceRecords.appendChild(empty);
    return;
  }

  state.materials.forEach((material, index) => {
    const row = document.createElement("div");
    row.className = `choice-record ${material.isFiber ? "fiber" : ""}`;
    row.innerHTML = `
      <span class="choice-index">${String(index + 1).padStart(2, "0")}</span>
      <div class="choice-copy">
        <strong>${escapeHtml(getMaterialName(material))}</strong>
        <span>${escapeHtml(material.zone.toUpperCase())}</span>
        <p>${escapeHtml(getMaterialDesc(material))}</p>
      </div>
      <i style="--material-color: ${escapeHtml(material.color)}"></i>
    `;
    els.choiceRecords.appendChild(row);
  });
}

function renderStageBars() {
  els.stageBars.textContent = "";
  const rows = [
    { label: "Rim", value: state.buildZones.rim, color: "#8b6a3e" },
    { label: "Wall", value: state.buildZones.wall, color: "#9a7b42" },
    { label: "Lining", value: state.buildZones.lining, color: "#d7c6aa" },
    { label: "Core", value: state.buildZones.core, color: "#6b8f5a" }
  ];
  rows.forEach((row) => {
    const width = Math.min(100, Math.round((row.value / Math.max(1, state.materials.length)) * 100));
    const bar = document.createElement("div");
    bar.className = "stage-bar";
    bar.innerHTML = `
      <div class="stage-bar-label">
        <span>${escapeHtml(row.label)}</span>
        <strong>${row.value} placements</strong>
      </div>
      <div class="stage-bar-track">
        <i style="width: ${width}%; --material-color: ${row.color}"></i>
      </div>
    `;
    els.stageBars.appendChild(bar);
  });
}

function renderDataContrast() {
  els.playerSummary.textContent = t("data.summary", { count: state.materials.length, fiber: getFiberCount() });
  els.historicalRecord.textContent = t("data.history");
}

async function recordTraceCall(material) {
  const call = createTraceCall(material);
  state.trace.calls.unshift(call);
  renderTracePanel();

  try {
    const response = await fetch("/api/trace-call", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: call.input })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || "Trace call failed");
    finishTraceCall(call, {
      status: "success",
      output: payload.output || "",
      inputTokens: payload.usage?.input_tokens || estimateTokens(call.input),
      outputTokens: payload.usage?.output_tokens || estimateTokens(payload.output || "")
    });
  } catch (error) {
    const fallbackOutput = buildLocalTraceOutput(material, call.profile);
    finishTraceCall(call, {
      status: "local",
      output: fallbackOutput,
      inputTokens: estimateTokens(call.input),
      outputTokens: estimateTokens(fallbackOutput)
    });
  }
}

function removeTraceCall(materialId) {
  const callIndex = state.trace.calls.findIndex((call) => call.material.id === materialId);
  if (callIndex === -1) return;
  state.trace.calls.splice(callIndex, 1);
  if (!state.trace.calls.length) {
    state.trace.startedAt = null;
    state.trace.endedAt = null;
    state.trace.startedMs = null;
    state.trace.endedMs = null;
  } else {
    state.trace.endedAt = new Date();
    state.trace.endedMs = performance.now();
  }
  recalculateTraceTotals();
}

function createTraceCall(material) {
  const now = performance.now();
  if (!state.trace.startedAt) state.trace.startedAt = new Date();
  if (state.trace.startedMs === null) state.trace.startedMs = now;
  state.trace.endedAt = new Date();
  const profile = buildTraceProfile(material, state.trace.calls.length + 1);
  return {
    id: `span-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    number: state.trace.calls.length + 1,
    title: `Call #${state.trace.calls.length + 1} — ${profile.action} ${material.name}`,
    input: buildTracePrompt(material, profile),
    output: "Waiting for model response...",
    status: "pending",
    material,
    profile,
    inputTokens: 0,
    outputTokens: 0,
    startedAt: now,
    durationMs: 0,
    expanded: state.trace.calls.length < 2,
    isNew: true
  };
}

function buildTraceProfile(material, index) {
  const zoneProfiles = {
    rim: {
      action: "抬高巢口",
      lens: "边缘承重 / 入口轮廓",
      risk: "外圈过硬会刮擦",
      verb: "绕、卡、抬",
      question: "巢口为什么不会塌下来"
    },
    wall: {
      action: "加厚侧壁",
      lens: "弧面支撑 / 交叉摩擦",
      risk: "侧壁稀疏会透风",
      verb: "压、扣、斜穿",
      question: "侧壁如何从散线变成碗面"
    },
    lining: {
      action: "铺软内衬",
      lens: "保温 / 柔软接触",
      risk: "软层太松会滑动",
      verb: "垫、铺、揉",
      question: "柔软材料为什么会被模型判定为安全"
    },
    core: {
      action: "封住中心",
      lens: "中心填充 / 孵化凹面",
      risk: "中心空洞会失去承托",
      verb: "塞、压、补",
      question: "中心怎样被填满而不是被渲染成黑洞"
    }
  };
  const familyProfiles = {
    structure: "天然骨架",
    binding: "绑扎材料",
    lining: "软性内衬",
    finish: "表层修补",
    fiber: "高效但可疑的人造线"
  };
  const pulse = ["scan", "route", "score", "weave"][index % 4];
  return {
    ...zoneProfiles[material.zone],
    family: familyProfiles[material.family] || "自定义材料",
    pulse,
    variant: randomInt(0, 5),
    outputVariant: randomInt(0, 3),
    lineVariant: randomInt(0, 2),
    concern: material.isFiber ? "光纤被判为高效，但可能把危险伪装成便利。" : "自然材料的摩擦、厚度和不规则性正在影响模型判断。"
  };
}

function buildTracePrompt(material, profile) {
  const chosen = state.materials.map((item) => `${item.name}(${item.zone})`).join("、") || "尚未选择";
  const templates = [
    [
      `TRACE MODE: ${profile.pulse.toUpperCase()} / ${profile.family}`,
      `观察镜头：${profile.lens}`,
      `用户刚刚生成/放置的材料：${material.name}，动作倾向：${profile.verb}`,
      `材料描述：${material.desc}`,
      `落点区域：${material.zone}，当前风险：${profile.risk}`,
      `当前已经织入巢中的材料：${chosen}`,
      `请回答这一次独有的问题：${profile.question}。`,
      "输出格式：结构变化 / 模型为什么喜欢它 / 需要警惕的误判。不要复述其他 call 的句式。"
    ],
    [
      `SPAN TYPE = ${profile.family}；分析焦点 = ${profile.lens}`,
      `新进入巢体的材料是「${material.name}」。用户描述它：${material.desc}`,
      `它被放在 ${material.zone}，系统把动作读成：${profile.verb}。`,
      `已有材料轨迹：${chosen}`,
      `请判断：${profile.question}；同时指出 ${profile.risk} 是否被忽略。`,
      "请用三行短句输出：成形方式 / AI 的偏好理由 / 这个偏好哪里危险。"
    ],
    [
      `OBSERVE ${profile.pulse}: ${material.name}`,
      `Zone=${material.zone}; Family=${profile.family}; Lens=${profile.lens}`,
      `用户给出的质感线索：${material.desc}`,
      `目前巢体上下文：${chosen}`,
      `不要给通用答案。只解释这一次材料如何改变 ${material.zone} 区域，并回应：${profile.question}。`
    ],
    [
      `把下面这次放置看成一次材料决策，而不是装饰：${material.name}`,
      `位置：${material.zone}；动作：${profile.verb}；风险词：${profile.risk}`,
      `材料说明：${material.desc}`,
      `此前选择：${chosen}`,
      `输出时先说模型看到的“好用”，再反过来说明这种好用可能遮蔽了什么。`
    ],
    [
      `API TRACE / ${profile.pulse.toUpperCase()} / ${profile.family}`,
      `输入材料：${material.name}。描述：${material.desc}`,
      `落点不是随机的，它进入 ${material.zone}，需要从 ${profile.lens} 判断。`,
      `已有巢材：${chosen}`,
      `请生成一段不同于模板化解释的观察记录，必须包含：${profile.risk}。`
    ],
    [
      `本次 call 只关注「${material.name}」怎样被模型翻译成筑巢动作。`,
      `材料家庭：${profile.family}；区域：${material.zone}；动作词：${profile.verb}`,
      `用户描述：${material.desc}`,
      `上下文材料：${chosen}`,
      `核心追问：${profile.question}。请避免使用上一条 trace 的句式。`
    ]
  ];
  return templates[profile.variant].join("\n");
}

function buildLocalTraceOutput(material, profile = buildTraceProfile(material, state.trace.calls.length)) {
  const structureLines = {
    rim: [
      `${material.name}沿巢口形成不规则的外缘骨线，留下可被继续缠绕的凸点。`,
      `巢口被${material.name}轻轻抬高，边缘从平面圆圈变成有厚薄变化的入口。`,
      `${material.name}卡在外圈，像一组不完全闭合的支点，让后续材料能挂住。`
    ],
    wall: [
      `${material.name}把侧壁的空隙斜向拉住，碗形轮廓不再只是平面圆环。`,
      `侧壁因为${material.name}多了一道交叉张力，稀疏处被压成连续弧面。`,
      `${material.name}从侧面穿过旧材料，形成一段抵抗塌陷的斜撑。`
    ],
    lining: [
      `${material.name}在内侧变成柔软缓冲，遮住硬枝之间的尖角和缝。`,
      `内衬被${material.name}铺厚，原本裸露的结构线开始变得可承托。`,
      `${material.name}没有撑开外形，而是把内部触感从硬转向柔软。`
    ],
    core: [
      `${material.name}被压进最低处，中心从黑洞感变成有厚度的承托面。`,
      `中心被${material.name}补上一层短而密的纹理，视觉重心不再下陷。`,
      `${material.name}填在巢底，把空洞转译成一个可停留的浅凹面。`
    ]
  };
  const preferenceLines = material.isFiber
    ? [
      "模型偏爱它的连续性和可控性，但这正是危险被包装成“好用”的地方。",
      "它太容易被解释成高效绑线，模型会先看见稳定性，后看见潜在伤害。",
      "发亮和不断裂让它在输出里显得可靠，也让风险被推迟到说明之后。"
    ]
    : [
      "模型偏爱它的纹理、摩擦和体积，因为这些信号让结构看起来更接近真实鸟巢。",
      "不规则边缘让它显得可信，模型会把这种粗糙读成自然筑巢的证据。",
      "它的厚薄变化提供了可解释的接触面，所以输出会倾向于说它“适合”。"
    ];
  const warningLines = [
    `${profile.risk}；${profile.concern}`,
    `如果只看“能固定”，就会忽略：${profile.risk}。${profile.concern}`,
    `这一步的盲点不是材料有没有用，而是 ${profile.risk} 是否被模型轻描淡写。`
  ];
  const structure = pickByIndex(structureLines[material.zone], profile.lineVariant);
  const preference = pickByIndex(preferenceLines, profile.variant + state.materials.length);
  const warning = pickByIndex(warningLines, profile.lineVariant + (material.isFiber ? 2 : 0));
  const templates = [
    [`结构变化：${structure}`, `模型为什么喜欢它：${preference}`, `需要警惕的误判：${warning}`],
    [`AI 先看到的好处：${preference}`, `巢体实际变化：${structure}`, `被推迟的风险：${warning}`],
    [`这不是同一条路径：${structure}`, `判断依据变成：${preference}`, `但是：${warning}`],
    [`${profile.action}：${structure}`, `偏好来源：${preference}`, `风险回看：${warning}`]
  ];
  return templates[profile.outputVariant].join("\n");
}

function finishTraceCall(call, result) {
  call.status = result.status;
  call.output = result.output;
  call.inputTokens = result.inputTokens;
  call.outputTokens = result.outputTokens;
  call.durationMs = Math.max(1, Math.round(performance.now() - call.startedAt));
  call.title = summarizeTraceOutput(call, result.output);
  state.trace.endedAt = new Date();
  state.trace.endedMs = performance.now();
  recalculateTraceTotals();
  renderTracePanel();
}

function summarizeTraceOutput(call, output) {
  const firstSentence = (output || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^结构变化[:：]\s*/, "")
    .split(/[。.!！？?\n]/)[0]
    .slice(0, 34);
  return `Call #${call.number} — ${call.profile.action} / ${firstSentence || call.material.name}`;
}

function recalculateTraceTotals() {
  state.trace.totalInputTokens = state.trace.calls.reduce((sum, call) => sum + call.inputTokens, 0);
  state.trace.totalOutputTokens = state.trace.calls.reduce((sum, call) => sum + call.outputTokens, 0);
}

function renderTracePanel() {
  if (!els.tracePanel) return;
  recalculateTraceTotals();
  els.traceId.textContent = state.trace.id;
  els.traceModel.textContent = state.trace.model;
  els.traceEndpoint.textContent = state.trace.endpoint;
  els.traceStart.textContent = state.trace.startedAt ? formatTraceTime(state.trace.startedAt) : "--";
  els.traceDuration.textContent = `${getTraceDuration()} ms`;
  els.traceInputTokens.textContent = formatNumber(state.trace.totalInputTokens);
  els.traceOutputTokens.textContent = formatNumber(state.trace.totalOutputTokens);
  els.traceTotalTokens.textContent = formatNumber(state.trace.totalInputTokens + state.trace.totalOutputTokens);
  els.traceTotalCalls.textContent = formatNumber(state.trace.calls.length);
  renderTraceTimeline();
}

function renderTraceTimeline() {
  els.traceTimeline.textContent = "";
  if (!state.trace.calls.length) {
    const empty = document.createElement("p");
    empty.className = "trace-empty";
    empty.textContent = t("trace.empty");
    els.traceTimeline.appendChild(empty);
    return;
  }
  state.trace.calls.forEach((call) => {
    const span = document.createElement("section");
    span.className = `trace-span trace-${call.material.zone} ${call.material.isFiber ? "trace-fiber" : ""} ${call.expanded ? "expanded" : ""} ${call.isNew ? "is-new" : ""}`;
    span.innerHTML = `
      <button class="trace-span-summary" type="button" aria-expanded="${call.expanded}">
        <span class="trace-node" aria-hidden="true"></span>
        <span class="trace-title"><small>${escapeHtml(t("trace.materialTrace"))}</small>${escapeHtml(call.title)}</span>
        <span class="trace-tags">
          <span class="trace-token-tag">${escapeHtml(call.profile.family)}</span>
          <span class="trace-token-tag">${escapeHtml(call.profile.lens)}</span>
          <span class="trace-token-tag">${escapeHtml(call.material.zone)}</span>
          <span class="trace-token-tag">IN: ${formatNumber(call.inputTokens)} / OUT: ${formatNumber(call.outputTokens)}</span>
          <span class="trace-latency">${call.status === "pending" ? "running" : `${formatNumber(call.durationMs)} ms`}</span>
          <span class="trace-status ${call.status}">${getTraceStatusLabel(call.status)}</span>
        </span>
      </button>
      <div class="trace-span-body">
        <div class="trace-io">
          <h3>${escapeHtml(t("trace.input"))}</h3>
          <pre>${escapeHtml(call.input)}</pre>
        </div>
        <div class="trace-io output">
          <h3>${escapeHtml(t("trace.output"))}</h3>
          <pre>${escapeHtml(call.output)}</pre>
        </div>
      </div>
    `;
    span.querySelector(".trace-span-summary").addEventListener("click", () => {
      call.expanded = !call.expanded;
      renderTracePanel();
    });
    els.traceTimeline.appendChild(span);
    if (call.isNew) {
      window.setTimeout(() => {
        call.isNew = false;
        span.classList.remove("is-new");
      }, 1000);
    }
  });
}

function getTraceStatusLabel(status) {
  if (status === "success") return "✓ success";
  if (status === "local") return "local";
  if (status === "error") return "✗ error";
  return "running";
}

function getTraceDuration() {
  if (state.trace.startedMs === null || state.trace.endedMs === null) return 0;
  return Math.max(0, Math.round(state.trace.endedMs - state.trace.startedMs));
}

function estimateTokens(text) {
  return Math.max(1, Math.round((text || "").length / 2.6));
}

function formatTraceTime(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(date);
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value || 0);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function typeText(node, text, speed) {
  node.textContent = "";
  [...text].forEach((char, index) => {
    gsap.delayedCall((index * speed) / 1000, () => {
      node.textContent += char;
    });
  });
}

function showOpeningGuide() {
  const text = state.language === "en"
    ? "You are a bird.\nYou have found a shining material.\nIt is soft, flexible, and right there.\nNow you can generate materials and drag them into the nest by hand."
    : "你是一只鸟。\n你发现了一种闪亮的材料。\n它柔软、灵活、就在那里。\n现在，你也可以像游戏里那样生成材料，亲手把它们拖进巢里。";
  gsap.to(els.openingGuide, { opacity: 1, duration: 0.6, ease: "power2.out" });
  typeText(els.openingGuide, text, 50);
  const delay = ([...text].length * 50) / 1000 + 2;
  gsap.delayedCall(delay, () => {
    gsap.timeline()
      .to(els.whiteWipe, { opacity: 1, duration: 1.2, ease: "power2.inOut" })
      .to(window, { scrollTo: { y: els.builder, autoKill: false }, duration: 0.01 })
      .to(els.whiteWipe, { opacity: 0, duration: 1.2, ease: "power2.inOut" })
      .call(syncSiteNav);
  });
}

function initNestCanvas() {
  if (!window.THREE) return;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: els.nestCanvas, antialias: true, alpha: false });
  } catch (error) {
    console.warn("Nest WebGL unavailable", error);
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x040404);
  scene.fog = new THREE.Fog(0x040404, 170, 320);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 1000);
  camera.position.set(28, 46, 220);
  camera.lookAt(NEST_CENTER_X, -6, 0);

  const root = new THREE.Group();
  scene.add(root);

  const nestShell = createRealisticNestShell();
  root.add(nestShell.baseGroup);
  root.add(nestShell.innerFillGroup);

  const ambient = new THREE.AmbientLight(0xffffff, 0.92);
  const hemi = new THREE.HemisphereLight(0xf6f1e8, 0x090909, 0.6);
  const point = new THREE.PointLight(0xd4a853, 1.6, 360, 2);
  point.position.set(34, 48, 36);
  scene.add(ambient, hemi, point);

  const controls = window.THREE.OrbitControls ? new THREE.OrbitControls(camera, renderer.domElement) : null;
  if (controls) {
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 115;
    controls.maxDistance = 320;
    controls.maxPolarAngle = Math.PI * 0.92;
    controls.target.set(NEST_CENTER_X, -6, 0);
  }

  nest3d = {
    renderer,
    scene,
    camera,
    root,
    controls,
    point,
    shell: nestShell,
    raycaster: new THREE.Raycaster(),
    pointer: new THREE.Vector2(),
    lastHoverSpikeAt: 0
  };

  renderer.domElement.addEventListener("pointermove", handleNestPointerMove);
  window.addEventListener("resize", resizeNest3d);
  resizeNest3d();
  requestAnimationFrame(renderNest3d);
}

function createRealisticNestShell() {
  const baseGroup = new THREE.Group();
  const innerFillGroup = new THREE.Group();
  const twigPalette = [0x7a5b35, 0x8b6a3e, 0x5f4a38, 0x9a7b42, 0xb18b4a, 0x6f7a3f];
  const liningPalette = [0x6b8f5a, 0xd7c6aa, 0xc6a96a, 0x9a7b42, 0xe8e0d0];

  for (let i = 0; i < 130; i += 1) {
    const pickZone = Math.random();
    const zone = pickZone > 0.78 ? "rim" : pickZone > 0.34 ? "wall" : "lining";
    const points = createShellCurve(zone, false, null, randomBetween(0.82, 1.16));
    const curve = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(curve, 18, randomBetween(0.16, zone === "rim" ? 0.42 : 0.34), 7, false);
    const material = new THREE.MeshStandardMaterial({
      color: twigPalette[i % twigPalette.length],
      roughness: 0.94,
      metalness: 0.01
    });
    baseGroup.add(new THREE.Mesh(geometry, material));
  }

  for (let i = 0; i < 95; i += 1) {
    const zone = i % 3 === 0 ? "core" : i % 2 === 0 ? "lining" : "wall";
    const points = createShellCurve(zone, false, { x: randomBetween(-0.2, 0.2), y: randomBetween(-0.2, 0.2) }, zone === "core" ? 0.42 : 0.62);
    const curve = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(curve, 14, randomBetween(0.09, zone === "core" ? 0.22 : 0.28), 6, false);
    const material = new THREE.MeshStandardMaterial({
      color: liningPalette[i % liningPalette.length],
      roughness: 0.98,
      metalness: 0
    });
    innerFillGroup.add(new THREE.Mesh(geometry, material));
  }

  for (let i = 0; i < 80; i += 1) {
    const points = createCenterMatCurve();
    const curve = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(curve, 10, randomBetween(0.08, 0.2), 5, false);
    const material = new THREE.MeshStandardMaterial({
      color: liningPalette[(i + 2) % liningPalette.length],
      roughness: 1,
      metalness: 0,
      transparent: true,
      opacity: randomBetween(0.55, 0.82)
    });
    innerFillGroup.add(new THREE.Mesh(geometry, material));
  }

  return { baseGroup, innerFillGroup };
}

function resizeNest3d() {
  if (!nest3d) return;
  const rect = els.nestCanvas.getBoundingClientRect();
  nest3d.renderer.setSize(rect.width, rect.height, false);
  nest3d.camera.aspect = rect.width / Math.max(1, rect.height);
  nest3d.camera.updateProjectionMatrix();
}

function getNestDropWorldPoint(clientX, clientY) {
  if (!nest3d) return null;
  const rect = nest3d.renderer.domElement.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  const pointer = new THREE.Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -((clientY - rect.top) / rect.height) * 2 + 1
  );
  const raycaster = nest3d.raycaster || new THREE.Raycaster();
  raycaster.setFromCamera(pointer, nest3d.camera);
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 18);
  const point = new THREE.Vector3();
  if (!raycaster.ray.intersectPlane(plane, point)) return null;
  const dx = point.x - NEST_CENTER_X;
  const dz = point.z;
  const radius = Math.hypot(dx, dz);
  if (radius > 74) {
    const scale = 74 / radius;
    point.x = NEST_CENTER_X + dx * scale;
    point.z = dz * scale;
  }
  point.y = Math.max(-34, Math.min(18, point.y));
  return point;
}

function renderNest3d(time) {
  nestTime = time || 0;
  if (nest3d) {
    const breathe = (Math.sin(nestTime / 1273) + 1) / 2;
    nest3d.point.intensity = 1.1 + breathe * 1.6;
    if (nest3d.controls) nest3d.controls.update();
    nest3d.root.rotation.y += 0.0003;
    nest3d.renderer.render(nest3d.scene, nest3d.camera);
  }
  requestAnimationFrame(renderNest3d);
}

function handleNestPointerMove(event) {
  if (!nest3d || performance.now() - nest3d.lastHoverSpikeAt < 320) return;
  const rect = nest3d.renderer.domElement.getBoundingClientRect();
  nest3d.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  nest3d.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  nest3d.raycaster.setFromCamera(nest3d.pointer, nest3d.camera);
  const fiberMeshes = state.materialRecords3d.filter((record) => record.isFiber).map((record) => record.mesh);
  const hit = nest3d.raycaster.intersectObjects(fiberMeshes, false)[0];
  if (!hit) return;
  const record = state.materialRecords3d.find((item) => item.mesh === hit.object);
  if (!record) return;
  nest3d.lastHoverSpikeAt = performance.now();
  const spikeGroup = createSpikeGroup(record.points, 7);
  nest3d.root.add(spikeGroup);
  spikeGroup.children.forEach((child) => {
    gsap.to(child.material, { opacity: 0, duration: 0.3 });
  });
  gsap.delayedCall(0.32, () => {
    spikeGroup.children.forEach((child) => {
      child.geometry.dispose();
      child.material.dispose();
    });
    nest3d.root.remove(spikeGroup);
  });
}

function createMaterialLines(text, material) {
  const color = material.isFiber ? "#d4a853" : material.color || state.selectedColor;
  const createdAt = performance.now();
  const additions = createProjectedNestLines(material, color, createdAt);
  state.nestLines.push(...additions);
  addNestMaterial3d(text, material, color, createdAt);
}

function removeMaterialGeometry(materialId) {
  state.nestLines = state.nestLines.filter((line) => line.materialId !== materialId);
  const removed = state.materialRecords3d.filter((record) => record.materialId === materialId);
  state.materialRecords3d = state.materialRecords3d.filter((record) => record.materialId !== materialId);
  const groups = new Set();
  removed.forEach((record) => {
    if (record.mesh.parent) groups.add(record.mesh.parent);
    record.mesh.geometry.dispose();
    record.material.dispose();
  });
  groups.forEach((group) => {
    if (group.parent) group.parent.remove(group);
  });
}

function createProjectedNestLines(material, color, createdAt) {
  const count = material.isFiber ? randomInt(16, 22) : randomInt(18, 30);
  return Array.from({ length: count }, () => {
    const zone = material.zone || "wall";
    const radiusMap = { rim: 0.95, wall: 0.7, lining: 0.4, core: 0.08 };
    const center = radiusMap[zone] || 0.65;
    const y = randomBetween(-0.72, 0.72) * (zone === "core" ? 0.45 : 1);
    const span = randomBetween(0.22, 1.1) * Math.max(0.2, center);
    const start = randomBetween(-span, span * 0.15);
    const end = randomBetween(start + 0.12, span);
    const segments = 4 + Math.floor(Math.random() * 3);
    const points = Array.from({ length: segments }, (_, index) => {
      const t = index / (segments - 1);
      return {
        x: start + (end - start) * t + randomBetween(-0.05, 0.05),
        y: y + randomBetween(-0.06, 0.06)
      };
    });
    return {
      materialId: material.id,
      material: material.name,
      isFiber: material.isFiber,
      color,
      width: material.isFiber ? 0.45 : 1.1,
      alpha: material.isFiber ? 0.82 : 0.64,
      points,
      seed: Math.random() * Math.PI * 2,
      createdAt
    };
  });
}

function addNestMaterial3d(text, material, color, createdAt) {
  if (!nest3d) return;
  const group = new THREE.Group();
  group.userData = { materialId: material.id };
  const count = material.isFiber ? randomInt(10, 18) : randomInt(14, 24);

  for (let i = 0; i < count; i += 1) {
    const points = createNestCurvePoints(material);
    const curve = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(
      curve,
      material.isFiber ? 28 : 20,
      material.isFiber ? 0.09 : randomBetween(0.17, 0.42) * (material.density || 1),
      8,
      false
    );
    const tubeMaterial = material.isFiber
      ? new THREE.MeshStandardMaterial({
        color: 0xd4a853,
        emissive: 0xd4a853,
        emissiveIntensity: 1.8,
        roughness: 0.32,
        metalness: 0.06
      })
      : new THREE.MeshStandardMaterial({
        color: new THREE.Color(saturateColor(color, 1.12)),
        roughness: 0.88,
        metalness: 0.01
      });
    const tube = new THREE.Mesh(geometry, tubeMaterial);
    tube.userData = { materialId: material.id, material: text, isFiber: material.isFiber, createdAt, points };
    group.add(tube);
    state.materialRecords3d.push({ materialId: material.id, group, mesh: tube, material: tubeMaterial, points, isFiber: material.isFiber });
  }

  group.scale.setScalar(0.001);
  nest3d.root.add(group);
  gsap.to(group.scale, { x: 1, y: 1, z: 1, duration: 0.34, ease: "power2.out" });
}

function createNestCurvePoints(material) {
  return createShellCurve(material.zone, material.isFiber, material.dropPoint, material.density || 1);
}

function createShellCurve(zone = "wall", isFiber = false, dropPoint = null, density = 1) {
  const points = [];
  const count = isFiber ? 8 : 6;
  const anchor = dropPoint?.world || null;
  const baseAngle = anchor
    ? Math.atan2(anchor.z, anchor.x - NEST_CENTER_X)
    : dropPoint
      ? Math.atan2(dropPoint.y, dropPoint.x)
      : Math.random() * Math.PI * 2;
  const shiftedAngle = baseAngle - 0.32;
  const dropRadius = dropPoint
    ? Math.min(1, (dropPoint.worldRadius || Math.hypot(dropPoint.x, dropPoint.y) * 58) / 74)
    : null;
  const radiusBias = dropRadius !== null
    ? (zone === "rim"
      ? 56 + dropRadius * 16
      : zone === "wall"
        ? 30 + dropRadius * 38
        : zone === "lining"
          ? 10 + dropRadius * 28
          : 2 + dropRadius * 16)
    : zone === "rim"
      ? randomBetween(54, 70)
      : zone === "wall"
        ? randomBetween(28, 62)
        : zone === "lining"
          ? randomBetween(10, 36)
          : randomBetween(1.2, 18);
  const arc = zone === "core"
    ? randomBetween(1.35, 2.9)
    : isFiber
      ? randomBetween(1.0, 2.2)
      : randomBetween(0.75, 1.85);
  const slope = zone === "rim" ? randomBetween(-3, 7) : zone === "core" ? randomBetween(-1.2, 1.2) : randomBetween(-5, 5);

  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1);
    const angle = shiftedAngle + (t - 0.5) * arc + randomBetween(-0.18, 0.18);
    const radialJitterRange = dropPoint ? (zone === "core" ? 1.2 : zone === "lining" ? 2.4 : 4.4) : (zone === "core" ? 1.8 : zone === "lining" ? 3.5 : 7);
    const radialJitter = randomBetween(-radialJitterRange, radialJitterRange);
    const r = Math.max(zone === "core" ? 0.6 : 5, Math.min(74, radiusBias + Math.sin(t * Math.PI) * randomBetween(-5, 5) + radialJitter));
    const bowlSurface = -30 + Math.pow(r / 72, 1.55) * 43;
    const zoneLift = zone === "rim"
      ? randomBetween(0, 9)
      : zone === "wall"
        ? randomBetween(-7, 5)
        : zone === "lining"
          ? randomBetween(-8, 1)
          : randomBetween(-7, -1);
    const baseY = zone === "core"
      ? randomBetween(-30, -22)
      : bowlSurface + zoneLift + slope * (t - 0.5);
    const anchorBlend = anchor ? (zone === "core" ? 0.78 : zone === "lining" ? 0.64 : 0.48) : 0;
    const curveX = Math.cos(angle) * r + NEST_CENTER_X;
    const curveZ = Math.sin(angle) * r;
    const anchoredX = anchor ? curveX * (1 - anchorBlend) + anchor.x * anchorBlend : curveX;
    const anchoredZ = anchor ? curveZ * (1 - anchorBlend) + anchor.z * anchorBlend : curveZ;
    points.push(new THREE.Vector3(
      anchoredX + randomBetween(zone === "core" ? -1.2 : -2.4, zone === "core" ? 1.2 : 2.4),
      baseY + randomBetween(zone === "core" ? -1.6 : -3, zone === "core" ? 1.6 : 3) * density,
      anchoredZ + randomBetween(zone === "core" ? -1.2 : -2.4, zone === "core" ? 1.2 : 2.4)
    ));
  }

  return points;
}

function createCenterMatCurve() {
  const points = [];
  const count = 5;
  const baseAngle = Math.random() * Math.PI * 2;
  const arc = randomBetween(0.9, 2.5);
  const radiusBias = randomBetween(1.5, 18);
  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1);
    const angle = baseAngle + (t - 0.5) * arc + randomBetween(-0.2, 0.2);
    const r = Math.max(0.4, radiusBias + Math.sin(t * Math.PI) * randomBetween(-3, 3) + randomBetween(-2.4, 2.4));
    points.push(new THREE.Vector3(
      Math.cos(angle) * r + NEST_CENTER_X + randomBetween(-1.8, 1.8),
      randomBetween(-32, -24),
      Math.sin(angle) * r + randomBetween(-1.8, 1.8)
    ));
  }
  return points;
}

function triggerWarningIfNeeded() {
  const configs = {
    5: { duration: 0.5, spikeLength: 6, sound: false },
    8: { duration: 0.6, spikeLength: 11, sound: false },
    12: { duration: 1, spikeLength: 17, sound: true }
  };
  const config = configs[state.materials.length];
  if (!config || state.triggeredWarnings.has(state.materials.length)) return;
  state.triggeredWarnings.add(state.materials.length);
  triggerFiberWarning(config);
}

function triggerFiberWarning(config) {
  const fibers = state.materialRecords3d.filter((record) => record.isFiber && record.mesh.parent);
  if (!fibers.length || !nest3d) return;
  fibers.forEach((record) => {
    gsap.timeline()
      .to(record.material, { emissiveIntensity: 3, duration: config.duration / 2, ease: "power3.out" })
      .to(record.material, { emissiveIntensity: 0.8, duration: config.duration / 2, ease: "power2.in" });
    const spikeGroup = createSpikeGroup(record.points, config.spikeLength);
    nest3d.root.add(spikeGroup);
    spikeGroup.children.forEach((child) => {
      gsap.to(child.material, { opacity: 0, duration: 0.3, delay: 0.3 });
    });
    gsap.delayedCall(0.62, () => {
      spikeGroup.children.forEach((child) => {
        child.geometry.dispose();
        child.material.dispose();
      });
      nest3d.root.remove(spikeGroup);
    });
  });
  if (config.sound) playWarningTone();
}

function createSpikeGroup(points, length) {
  const group = new THREE.Group();
  [points[0], points[points.length - 1]].forEach((point, index) => {
    const neighbor = index === 0 ? points[1] : points[points.length - 2];
    const direction = point.clone().sub(neighbor).normalize();
    for (let i = 0; i < 3; i += 1) {
      const angled = direction.clone()
        .add(new THREE.Vector3(randomBetween(-0.35, 0.35), randomBetween(-0.35, 0.35), randomBetween(-0.35, 0.35)))
        .normalize();
      const geometry = new THREE.BufferGeometry().setFromPoints([point, point.clone().add(angled.multiplyScalar(length))]);
      const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
      group.add(new THREE.Line(geometry, material));
    }
  });
  return group;
}

function playWarningTone() {
  if (!window.Tone || !state.audioStarted) return;
  const gain = new Tone.Gain(0.015).toDestination();
  const synth = new Tone.Oscillator(2000, "sine");
  synth.connect(gain);
  synth.start();
  synth.stop("+0.1");
  synth.onstop = () => {
    synth.dispose();
    gain.dispose();
  };
}

function saturateColor(hex, amount) {
  const color = hexToRgb(hex);
  const max = Math.max(...color);
  const gray = color.reduce((sum, value) => sum + value, 0) / 3;
  const saturated = color.map((value) => {
    const next = gray + (value - gray) * amount;
    return Math.max(40, Math.min(255, Math.round(next + (max < 80 ? 60 : 0))));
  });
  return `#${saturated.map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}

function randomInt(min, max) {
  return Math.floor(randomBetween(min, max + 1));
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function pickByIndex(items, index) {
  return items[Math.abs(index) % items.length];
}

function updateStepUi() {
  const progress = Math.round(getCompletionRatio() * 100);
  const placed = Math.min(state.materials.length, TARGET_BUILD_COUNT);
  els.stepIndicator.textContent = t("step.placed", { placed, count: TARGET_BUILD_COUNT });
  els.progressValue.textContent = `${progress}%`;
  els.inventoryCount.textContent = t("inventory.items", { count: MATERIAL_LIBRARY.length + (state.generatedOption ? 1 : 0) });
  els.stepAction.textContent = placed >= TARGET_BUILD_COUNT ? t("actions.finish") : t("actions.finishAt", { count: TARGET_BUILD_COUNT });
  els.stepAction.disabled = placed < TARGET_BUILD_COUNT;
  gsap.to(els.progressFill, { width: `${progress}%`, duration: 0.4, ease: "power2.out" });
}

function updateBuildStatus(lastMaterial = null) {
  if (!state.materials.length) {
    els.buildStatus.textContent = t("status.waiting");
    els.buildStatusDetail.textContent = t("status.waitingDetail");
    return;
  }
  if (state.materials.length >= TARGET_BUILD_COUNT && !lastMaterial) {
    els.buildStatus.textContent = t("status.completed");
    els.buildStatusDetail.textContent = t("status.completedDetail");
    return;
  }
  const material = lastMaterial || state.materials[state.materials.length - 1];
  const completion = Math.round(getCompletionRatio() * 100);
  const zoneCopy = t(`zone.${material.zone}`);
  els.buildStatus.textContent = t("status.placed", { name: getMaterialName(material) });
  if (state.materials.length >= TARGET_BUILD_COUNT) {
    els.buildStatusDetail.textContent = t("status.readyDetail", { zone: zoneCopy });
    return;
  }
  els.buildStatusDetail.textContent = t("status.progressDetail", { zone: zoneCopy, progress: completion });
}

function containsAny(text, words) {
  const lower = text.toLowerCase();
  return words.some((word) => lower.includes(word.toLowerCase()));
}

function isFiberText(text) {
  return containsAny(text, SYSTEM_MATERIAL_HINTS.fiber);
}

function updateFillCue() {
  els.fillArrow.classList.toggle("visible", getCompletionRatio() >= 0.82);
}

function initEndingCanvas() {
  if (!window.THREE) return;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: els.endingCanvas, antialias: true, alpha: false });
  } catch (error) {
    console.warn("Ending WebGL unavailable", error);
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.set(0, 40, 150);
  camera.lookAt(0, 0, 0);
  const root = new THREE.Group();
  scene.add(root);
  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  const point = new THREE.PointLight(0xd4a853, 1.6, 320, 2);
  scene.add(ambient, point);
  ending3d = { renderer, scene, camera, root, point, fibers: [], started: false, spikes: [] };
  resizeEndingCanvas();
  window.addEventListener("resize", resizeEndingCanvas);
  requestAnimationFrame(renderEnding3d);
}

function resizeEndingCanvas() {
  if (!ending3d) return;
  const rect = els.endingCanvas.getBoundingClientRect();
  ending3d.renderer.setSize(rect.width, rect.height, false);
  ending3d.camera.aspect = rect.width / Math.max(1, rect.height);
  ending3d.camera.updateProjectionMatrix();
}

function showEnding() {
  if (!state.dataShown || state.endingShown || !ending3d || !nest3d) return;
  state.endingShown = true;
  buildEndingNest();
  typeText(els.endingMessage, buildEndingStatement(), 42);
  gsap.delayedCall(9.5, transformEndingNest);
  fadeToneOut();
}

function buildEndingStatement() {
  return t("ending.statement", { count: state.materials.length });
}

function buildAboutHtml() {
  return buildEndingStatement().replace(/\n/g, "<br>");
}

function renderEnding3d(time) {
  if (ending3d) {
    const breathe = (Math.sin((time || 0) / 1273) + 1) / 2;
    ending3d.point.intensity = 1 + breathe * 2;
    ending3d.root.rotation.y += 0.00045;
    ending3d.renderer.render(ending3d.scene, ending3d.camera);
  }
  requestAnimationFrame(renderEnding3d);
}

function buildEndingNest() {
  ending3d.root.clear();
  ending3d.fibers = [];
  ending3d.spikes = [];
  if (nest3d.shell?.baseGroup) {
    ending3d.root.add(nest3d.shell.baseGroup.clone(true));
  }
  if (nest3d.shell?.innerFillGroup) {
    ending3d.root.add(nest3d.shell.innerFillGroup.clone(true));
  }
  state.materialRecords3d.forEach((record) => {
    if (!record.mesh.parent) return;
    const clonedMaterial = record.material.clone();
    if (record.isFiber) clonedMaterial.emissiveIntensity = 0.8;
    const mesh = new THREE.Mesh(record.mesh.geometry.clone(), clonedMaterial);
    ending3d.root.add(mesh);
    if (record.isFiber) ending3d.fibers.push({ mesh, material: clonedMaterial, points: record.points });
  });
}

function transformEndingNest() {
  const progress = { value: 0 };
  ending3d.fibers.forEach((fiber) => {
    fiber.spikeGroup = createPermanentSpikeGroup(fiber.points);
    ending3d.root.add(fiber.spikeGroup);
    fiber.spikeGroup.children.forEach((child) => {
      child.scale.setScalar(0.001);
      child.material.opacity = 0;
    });
  });
  gsap.to(progress, {
    value: 1,
    duration: 10,
    ease: "power1.inOut",
    onUpdate: () => {
      ending3d.point.intensity = 3 * (1 - progress.value);
      ending3d.fibers.forEach((fiber) => {
        fiber.material.emissiveIntensity = 0.8 * (1 - progress.value);
        fiber.material.color.lerp(new THREE.Color(0xffffff), 0.012);
        fiber.spikeGroup.children.forEach((child) => {
          child.scale.setScalar(progress.value);
          child.material.opacity = Math.min(0.85, progress.value);
        });
      });
    },
    onComplete: () => {
      ending3d.point.intensity = 0;
      els.aboutOpen.parentElement.classList.add("visible");
    }
  });
}

function createPermanentSpikeGroup(points) {
  const group = new THREE.Group();
  [points[0], points[points.length - 1]].forEach((point, index) => {
    const neighbor = index === 0 ? points[1] : points[points.length - 2];
    const direction = point.clone().sub(neighbor).normalize();
    for (let i = 0; i < 4; i += 1) {
      const angled = direction.clone()
        .add(new THREE.Vector3(randomBetween(-0.55, 0.55), randomBetween(-0.55, 0.55), randomBetween(-0.55, 0.55)))
        .normalize();
      const geometry = new THREE.BufferGeometry().setFromPoints([point, point.clone().add(angled.multiplyScalar(randomBetween(10, 18)))]);
      const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
      group.add(new THREE.Line(geometry, material));
    }
  });
  return group;
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return [0, 2, 4].map((start) => parseInt(value.slice(start, start + 2), 16));
}

function initEndingControls() {
  els.aboutOpen.addEventListener("click", () => {
    if (els.aboutCopy) els.aboutCopy.innerHTML = buildAboutHtml();
    els.aboutLayer.hidden = false;
  });
  els.aboutClose.addEventListener("click", () => {
    els.aboutLayer.hidden = true;
  });

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting) && state.dataShown) showEnding();
  }, { threshold: 0.45 });
  observer.observe(els.ending);
}

function initOpening() {
  if (!window.THREE) return;
  const canvas = els.openingCanvas;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  } catch (error) {
    console.warn("Opening WebGL unavailable", error);
    gsap.delayedCall(0.5, showOpeningGuide);
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  const camera = new THREE.PerspectiveCamera(55, 1, 1, 8000);
  camera.position.set(0, 3000, 0);
  camera.lookAt(0, 0, 0);

  const root = new THREE.Group();
  scene.add(root);

  const gridMaterial = new THREE.LineBasicMaterial({ color: 0xd4a853, transparent: true, opacity: 0.3 });
  const organicMaterial = new THREE.LineBasicMaterial({ color: 0xd4a853, transparent: true, opacity: 0.15 });
  const grid = new THREE.LineSegments(createGridGeometry(), gridMaterial);
  const organic = new THREE.LineSegments(createOrganicGeometry(), organicMaterial);
  root.add(grid, organic);

  const particles = createParticleNest();
  particles.material.opacity = 0;
  root.add(particles);

  const cameraDrift = { x: 0, z: 0, y: 3000, particleScale: 1.18 };
  const tl = gsap.timeline({
    onComplete: () => {
      state.openingComplete = true;
      syncSiteNav();
      showOpeningGuide();
    }
  });
  tl.to(cameraDrift, { y: 1200, x: 120, z: -90, duration: 8, ease: "sine.inOut" });
  tl.to(cameraDrift, { y: 200, x: -300, z: 260, duration: 10, ease: "power2.in" }, 8);
  tl.to(gridMaterial, { opacity: 0, duration: 10, ease: "power1.inOut" }, 8);
  tl.to(organicMaterial, { opacity: 0.6, duration: 10, ease: "power1.inOut" }, 8);
  tl.to(cameraDrift, { y: 20, x: 0, z: 0, particleScale: 0.82, duration: 10, ease: "power2.out" }, 18);
  tl.to(particles.material, { opacity: 1, duration: 4, ease: "power2.out" }, 18);

  function resize() {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / Math.max(1, rect.height);
    camera.updateProjectionMatrix();
  }

  function render() {
    resize();
    root.rotation.y += 0.0003;
    particles.scale.setScalar(cameraDrift.particleScale + Math.sin(performance.now() / 1400) * 0.035);
    camera.position.set(cameraDrift.x + Math.sin(performance.now() / 2200) * 26, cameraDrift.y, cameraDrift.z + Math.cos(performance.now() / 2600) * 26);
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();
}

function createGridGeometry() {
  const positions = [];
  const count = 50;
  const spacing = 80;
  const half = ((count - 1) * spacing) / 2;
  for (let i = 0; i < count; i += 1) {
    const p = -half + i * spacing;
    positions.push(-half, 0, p, half, 0, p);
    positions.push(p, 0, -half, p, 0, half);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
}

function createOrganicGeometry() {
  const nodes = Array.from({ length: 200 }, () => ({
    x: randomBetween(-2000, 2000),
    y: randomBetween(-12, 12),
    z: randomBetween(-2000, 2000)
  }));
  const positions = [];
  nodes.forEach((node) => {
    const nearest = nodes
      .filter((other) => other !== node)
      .map((other) => ({ other, d: (other.x - node.x) ** 2 + (other.z - node.z) ** 2 }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 3);
    nearest.forEach(({ other }) => {
      positions.push(node.x, node.y, node.z, other.x, other.y, other.z);
    });
  });
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
}

function createParticleNest() {
  const positions = [];
  const colors = [];
  const gold = new THREE.Color(0xd4a853);
  const white = new THREE.Color(0xffffff);
  for (let i = 0; i < 2000; i += 1) {
    const radius = 80 * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions.push(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
    const color = gold.clone().lerp(white, Math.random());
    colors.push(color.r, color.g, color.b);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: 3,
    vertexColors: true,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  return new THREE.Points(geometry, material);
}

function initTone() {
  els.soundToggle.addEventListener("click", startTone);
}

async function startTone() {
  if (!window.Tone || state.audioStarted) return;
  await Tone.start();
  Tone.Transport.bpm.value = 82;
  const sparkleGain = new Tone.Gain(0.038).toDestination();
  const padGain = new Tone.Gain(0.012).toDestination();
  const noiseGain = new Tone.Gain(0.008);
  const shimmerDelay = new Tone.FeedbackDelay("8n", 0.28).connect(sparkleGain);
  const reverb = new Tone.Reverb({ decay: 3.2, wet: 0.28 }).toDestination();
  const sparkle = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: "triangle" },
    envelope: { attack: 0.006, decay: 0.18, sustain: 0.05, release: 0.7 }
  }).connect(shimmerDelay);
  sparkle.connect(reverb);
  const pad = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: "sine" },
    envelope: { attack: 1.2, decay: 0.5, sustain: 0.18, release: 2.8 }
  }).connect(padGain);
  pad.connect(reverb);
  const noise = new Tone.Noise("pink");
  const filter = new Tone.Filter(1800, "highpass").toDestination();
  noise.connect(noiseGain);
  noiseGain.connect(filter);
  noise.start();
  const patternNotes = ["E5", "G5", "B5", "D6", "B5", "A5", "G5", "E5"];
  let noteIndex = 0;
  const loop = new Tone.Loop((time) => {
    const note = patternNotes[noteIndex % patternNotes.length];
    sparkle.triggerAttackRelease(note, "16n", time, randomBetween(0.34, 0.58));
    if (noteIndex % 8 === 0) pad.triggerAttackRelease(["E4", "B4"], "2n", time, 0.22);
    noteIndex += 1;
  }, "4n");
  loop.start(0);
  Tone.Transport.start();
  state.audio = { sparkleGain, padGain, noiseGain, filter, sparkle, pad, noise, shimmerDelay, reverb, loop };
  state.audioStarted = true;
  els.soundToggle.textContent = t("sound.on");
  setInterval(() => {
    if (!state.audioStarted) return;
    filter.frequency.rampTo(randomBetween(1400, 2600), 3.5);
  }, 4200);
}

function playDragStartSound() {
  if (!window.Tone || !state.audioStarted) return;
  const gain = new Tone.Gain(0.024).toDestination();
  const synth = new Tone.Synth({
    oscillator: { type: "triangle" },
    envelope: { attack: 0.002, decay: 0.08, sustain: 0.02, release: 0.18 }
  }).connect(gain);
  gain.gain.setValueAtTime(0.0001, Tone.now());
  gain.gain.exponentialRampToValueAtTime(0.024, Tone.now() + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, Tone.now() + 0.18);
  synth.triggerAttackRelease("C6", "32n");
  window.setTimeout(() => {
    synth.dispose();
    gain.dispose();
  }, 320);
}

function playPlaceSound(material) {
  if (!window.Tone || !state.audioStarted) return;
  const gain = new Tone.Gain(0.042).toDestination();
  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: "triangle" },
    envelope: { attack: 0.004, decay: 0.12, sustain: 0.04, release: 0.45 }
  }).connect(gain);
  const chord = material.isFiber ? ["A5", "C6", "E6"] : ["G5", "B5", "D6"];
  synth.triggerAttackRelease(chord, "16n");
  window.setTimeout(() => {
    synth.dispose();
    gain.dispose();
  }, 700);
}

function playUndoSound() {
  if (!window.Tone || !state.audioStarted) return;
  const gain = new Tone.Gain(0.026).toDestination();
  const synth = new Tone.Synth({
    oscillator: { type: "sine" },
    envelope: { attack: 0.002, decay: 0.08, sustain: 0.02, release: 0.22 }
  }).connect(gain);
  synth.triggerAttackRelease("A5", "32n");
  synth.triggerAttackRelease("E5", "32n", "+0.08");
  window.setTimeout(() => {
    synth.dispose();
    gain.dispose();
  }, 420);
}

function fadeToneOut() {
  if (!state.audioStarted || !state.audio) return;
  state.audio.sparkleGain.gain.rampTo(0, 2);
  state.audio.padGain.gain.rampTo(0, 2);
  state.audio.noiseGain.gain.rampTo(0, 2);
  state.audio.loop?.stop();
}
