// Figma node tree (from serialize.js) -> intermediate DOM -> HTML (for visual QA) and TSX (what users copy).
// Auto layout becomes flexbox, fixed frames become relative boxes with absolute children.
// Icons are swapped for Foundry Icons (foundryui-icons) matched by name; third-party icon drawings are never copied.
import { readFileSync } from "node:fs";
import * as SI from "simple-icons";

const ICON_DIR = new URL("../../../apps/web/public/icons/", import.meta.url);
const INDEX = JSON.parse(readFileSync(new URL("index.json", ICON_DIR), "utf8"));
const NAMES = new Set(INDEX.map((i) => i.n));
const BODIES = {};
const brandPath = (name) => { const slug = name.replace(/^brand-/, ""); const k = Object.keys(SI).find((x) => SI[x] && SI[x].slug === slug); return k ? SI[k].path : ""; };
const body = (style, name) => (style === "brand" ? `<path d="${brandPath(name)}" fill="currentColor"/>` : (BODIES[style] ||= JSON.parse(readFileSync(new URL(style + ".json", ICON_DIR), "utf8")))[name] || "");
// common dashboard icon names -> Foundry names
const ALIAS = {
  "arrow-right": "chevron-right", "arrow-left": "chevron-left", "arrow-down": "chevron-down", "arrow-up": "chevron-up",
  "arrow-up-right": "arrow-up-right", "arrow-down-right": "arrow-down-right", add: "plus", "plus-sign": "plus", cancel: "x", "multiplication-sign": "x",
  tick: "check", "checkmark-circle": "circle-check", "more-horizontal": "dots", "more-vertical": "dots-vertical", "more-horizontal-circle": "dots-circle-horizontal",
  notification: "bell", search: "search", settings: "settings", delete: "trash", edit: "pencil", link: "link", calendar: "calendar",
  "calendar-add": "calendar-plus", filter: "filter", "filter-horizontal": "adjustments-horizontal", download: "download", upload: "upload", mail: "mail",
  home: "home", analytics: "chart-line", "chart-line-data": "chart-line", "chart-histogram": "chart-bar", chart: "chart-bar", "pie-chart": "chart-pie",
  "dashboard-square": "layout-dashboard", "credit-card": "credit-card", wallet: "wallet", csv: "file-type-csv", pdf: "file-type-pdf", "google-sheet": "table",
  copy: "copy", view: "eye", "view-off": "eye-off", "square-lock": "lock", "lock-password": "lock", "information-circle": "info-circle", "alert-circle": "alert-circle",
  alert: "alert-triangle", "help-circle": "help-circle", logout: "logout", menu: "menu-2", "sidebar-left": "layout-sidebar", sort: "arrows-sort",
  "sorting": "arrows-sort", refresh: "refresh", clock: "clock", time: "clock", globe: "world", "global": "world", bank: "building-bank", money: "cash",
  "money-bag": "moneybag", "wallet-add": "wallet", bank: "building-bank", "mail-block": "mail-x", flowchart: "hierarchy", layers: "stack-2",
  "web-design": "layout", "mail-secure": "mail-check", "license-draft": "license", "minus-sign": "minus", "mail-add": "mail-plus", "workflow-circle": "git-merge",
  unavailable: "ban", audit: "clipboard-list", "alert-diamond": "alert-octagon", "database-sync": "database-export", record: "player-record",
  energy: "bolt", blocked: "ban", "server-stack": "server-2", "mail-validation": "mail-check", "quote-down": "quote", "quote-up": "quote",
  "ai-brain": "brain", "analytics-up": "trending-up", "user-6-line": "user", mortarboard: "school", champion: "trophy", "expand-up-down-fill": "selector", "expand-up-down": "selector", "checkmark-badge": "rosette-discount-check", "toggle-on": "toggle-right", "toggle-off": "toggle-left", "folder-view": "folder-search", connect: "plug-connected", "notification-off": "bell-off", "volume-mute": "volume-off", "2-user": "users", "3-user": "users", paper: "file", category: "category", graph: "chart-bar", danger: "alert-triangle",
  setting: "settings", profile: "user", "dots-horizontal": "dots", "dots-vertical": "dots-vertical", "share-square": "share", "filter-2": "filter",
  "arrow-right-2": "chevron-right", "arrow-left-2": "chevron-left", "arrow-down-2": "chevron-down", "arrow-up-2": "chevron-up", "time-circle": "clock",
  "tick-square": "square-check", "close-square": "square-x", "more-circle": "dots-circle-horizontal", document: "file-text", "add-user": "user-plus", "folder-library": "folders", "ai-scan": "scan", danger: "alert-triangle", microsoft: "layout-grid", "square-arrow-up-right": "external-link", "text-underline": "underline", "bubble-chat": "message-circle", "text-font": "typography", "sort-by-down": "sort-descending", "sort-by-up": "sort-ascending", "image-upload": "photo-up", loading: "loader-2", "dashboard-circle": "layout-dashboard", invoice: "file-invoice", "user-group": "users", "user-multiple": "users", "user-add": "user-plus", "user-circle": "user-circle",
  message: "message", "message-multiple": "messages", chatting: "message-circle", send: "send", "sent": "send", share: "share", bookmark: "bookmark",
  tag: "tag", folder: "folder", file: "file", image: "photo", play: "player-play", pause: "player-pause", flash: "bolt", zap: "bolt",
  shield: "shield", "security-check": "shield-check", key: "key", plug: "plug", cloud: "cloud", database: "database", "source-code": "code",
  "computer-terminal": "terminal", "git-branch": "git-branch", "task-done": "checklist", task: "checkbox", "check-list": "list-check", target: "target",
  "rocket": "rocket", star: "star", "favourite": "heart", flag: "flag", "location": "map-pin", "maps-location": "map-pin", call: "phone",
  "smart-phone": "device-mobile", laptop: "device-laptop", "ai-magic": "sparkles", sparkles: "sparkles", "magic-wand": "wand", robot: "robot",
  workflow: "git-merge", "workflow-square": "git-merge", "flow": "git-merge", grid: "layout-grid", "grid-view": "layout-grid", "list-view": "list",
  "left-to-right-list-bullet": "list", "text-align-left": "align-left", "drag-drop-vertical": "grip-vertical", "drag-drop": "grip-vertical",
  "arrow-reload-horizontal": "refresh", "reload": "reload", "repeat": "repeat", "loading": "loader", "package": "package", "shopping-cart": "shopping-cart",
  "shopping-bag": "shopping-bag", "store": "building-store", "percent": "percentage", "discount": "discount", "coins": "coins", "dollar-circle": "currency-dollar",
  "trending-up": "trending-up", "trending-down": "trending-down", "chart-up": "trending-up", "chart-down": "trending-down", "activity": "activity",
  "pulse": "activity", "mouse-left-click": "click", "cursor": "pointer", "external-link": "external-link", "link-square": "external-link",
  "share-knowledge": "share", "inbox": "inbox", "archive": "archive", "attachment": "paperclip", "note": "note", "note-edit": "edit", "license": "license",
  "building": "building", "office": "building", "briefcase": "briefcase", "school": "school", "book-open": "book", "book": "book", "idea": "bulb",
  "bulb": "bulb", "fire": "flame", "thumbs-up": "thumb-up", "thumbs-down": "thumb-down", "smile": "mood-smile", "sad": "mood-sad",
  "volume-high": "volume", "mic": "microphone", "camera": "camera", "video": "video", "wifi": "wifi", "bluetooth": "bluetooth", "battery": "battery",
  "sun": "sun", "moon": "moon", "keyboard": "keyboard", "command": "command", "pin": "pin", "unlink": "unlink", "qr-code": "qrcode", "scan": "scan",
};
const mapCache = new Map();
export function mapIcon(raw) {
  if (mapCache.has(raw)) return mapCache.get(raw);
  const base = raw.toLowerCase().split(",")[0].replace(/\s*·\s*\d+$/, "").trim().replace(/\s+-\s+/g, "-").replace(/\s+/g, "-").replace(/-(\d+|duotone|stroke|solid|bulk|twotone|rounded|sharp)$/g, "").replace(/-\d+$/, "");
  let hit = ALIAS[base] && NAMES.has(ALIAS[base]) ? ALIAS[base] : NAMES.has(base) ? base : null;
  if (!hit) {
    const words = base.split("-").filter((w) => w.length > 2);
    let best = null, bestScore = 0;
    for (const i of INDEX) {
      const hay = " " + i.n.replace(/-/g, " ") + " " + (i.t || []).join(" ") + " ";
      const sc = words.filter((w) => hay.includes(" " + w)).length * 2 - i.n.split("-").length * 0.1 - (i.n.endsWith("-off") ? 1 : 0);
      if (sc > bestScore) { best = i.n; bestScore = sc; }
    }
    hit = bestScore >= 2 ? best : "circle";
  }
  mapCache.set(raw, hit);
  return hit;
}
const pascal = (n) => n.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");

const px = (v) => (Math.round(v * 100) / 100) + "px";
const rgba = (hex, a = 1) => {
  if (a >= 0.999) return hex;
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${Math.round(a * 100) / 100})`;
};
// Figma gradientTransform -> CSS angle and stop positions for a w x h box
function linear(p, w = 100, h = 100) {
  if (!p.gt) return `linear-gradient(${(p.ang + 90 + 360) % 360}deg, ${p.st.map(([c, a, pos]) => rgba(c, a * p.a) + " " + Math.round(pos * 100) + "%").join(", ")})`;
  const [[a, b, c], [d, e, f]] = p.gt;
  const det = a * e - b * d || 1;
  const ia = e / det, ib = -b / det, id = -d / det, ie = a / det;
  const ic = -(ia * c + ib * f), iff = -(id * c + ie * f);
  const pt = (u, v) => [(ia * u + ib * v + ic) * w, (id * u + ie * v + iff) * h];
  const [x0, y0] = pt(0, 0.5), [x1, y1] = pt(1, 0.5);
  const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const deg = (Math.atan2(ux, -uy) * 180) / Math.PI;
  // CSS gradient line passes through the centre with length |w*sin|+|h*cos|
  const L = Math.abs(w * ux) + Math.abs(h * uy);
  const cx = w / 2, cy = h / 2;
  const startProj = (x0 - cx) * ux + (y0 - cy) * uy;
  const at = (t) => Math.round(((startProj + t * len + L / 2) / L) * 1000) / 10;
  return `linear-gradient(${Math.round(deg * 10) / 10}deg, ${p.st.map(([col, al, pos]) => rgba(col, al * p.a) + " " + at(pos) + "%").join(", ")})`;
}
const paintCss = (p, w, h) => {
  if (p.k === "s") return { solid: rgba(p.c, p.a) };
  if (p.k === "l") return { layer: linear(p, w, h) };
  if (p.k === "r") return { layer: `radial-gradient(${p.st.map(([c, a, pos]) => rgba(c, a * p.a) + " " + Math.round(pos * 100) + "%").join(", ")})` };
  if (p.k === "i") return { solid: "#e5e7eb" };
  return null;
};
function background(fills, st, w, h) {
  if (!fills || !fills.length) return;
  const ps = fills.map((p) => paintCss(p, w, h)).filter(Boolean);
  if (ps.length === 1 && ps[0].solid) return (st.background = ps[0].solid);
  // CSS lists the top layer first; Figma lists bottom first
  st.background = ps.reverse().map((p) => p.layer || `linear-gradient(${p.solid}, ${p.solid})`).join(", ");
}
function shadows(n, st) {
  const out = [];
  if (n.s && n.s.length && n.s[0].k === "s") {
    const c = rgba(n.s[0].c, n.s[0].a);
    const [t, r, b, l] = Array.isArray(n.sw) ? n.sw : [n.sw, n.sw, n.sw, n.sw];
    const inset = n.sa !== "OUTSIDE";
    if (t === r && r === b && b === l) out.push(`${inset ? "inset " : ""}0 0 0 ${px(t)} ${c}`);
    else {
      if (t) out.push(`inset 0 ${px(t)} 0 0 ${c}`);
      if (b) out.push(`inset 0 ${px(-b)} 0 0 ${c}`);
      if (l) out.push(`inset ${px(l)} 0 0 0 ${c}`);
      if (r) out.push(`inset ${px(-r)} 0 0 0 ${c}`);
    }
  }
  for (const e of n.fx || []) {
    if (e[0] === "DROP_SHADOW") out.push(`${px(e[1])} ${px(e[2])} ${px(e[3])} ${px(e[4])} ${rgba(e[5], e[6])}`);
    else if (e[0] === "INNER_SHADOW") out.push(`inset ${px(e[1])} ${px(e[2])} ${px(e[3])} ${px(e[4])} ${rgba(e[5], e[6])}`);
    else if (e[0] === "LAYER_BLUR") st.filter = `blur(${px(e[1] / 2)})`;
    else if (e[0] === "BACKGROUND_BLUR") st.backdropFilter = `blur(${px(e[1] / 2)})`;
  }
  if (out.length) st.boxShadow = out.join(", ");
}
const JUST = { MIN: "flex-start", CENTER: "center", MAX: "flex-end", SPACE_BETWEEN: "space-between" };
const ALIGN = { MIN: "flex-start", CENTER: "center", MAX: "flex-end", BASELINE: "baseline" };

function textStyle(seg) {
  const st = { fontFamily: `'${seg.ff}'`, fontSize: px(seg.fs), fontWeight: seg.fw };
  if (seg.f && seg.f.k === "s") st.color = rgba(seg.f.c, seg.f.a);
  else if (seg.f && seg.f.k === "l") { st.background = paintCss(seg.f, 100, 20).layer; st.WebkitBackgroundClip = "text"; st.color = "transparent"; }
  if (seg.lh !== undefined) st.lineHeight = typeof seg.lh === "number" ? px(seg.lh) : String(parseFloat(seg.lh) / 100);
  if (seg.ls !== undefined) st.letterSpacing = typeof seg.ls === "number" ? px(seg.ls) : Math.round(parseFloat(seg.ls)) / 100 + "em";
  if (seg.tc) st.textTransform = { UPPER: "uppercase", LOWER: "lowercase", TITLE: "capitalize" }[seg.tc];
  if (seg.td) st.textDecoration = seg.td === "UNDERLINE" ? "underline" : "line-through";
  return st;
}

/** Build the intermediate tree. parentLm: "H" | "V" | null */
export function build(n, parentLm = null, root = true) {
  const st = {};
  const el = { tag: "div", st, name: n.n, kids: [] };
  // position and size
  if (!root && (parentLm === null || n.abs)) {
    st.position = "absolute"; st.left = px(n.x); st.top = px(n.y);
  }
  const inFlow = !root && parentLm && !n.abs;
  const fillW = inFlow && n.sh === "FILL", fillH = inFlow && n.sv === "FILL";
  const hugW = inFlow ? n.sh === "HUG" : false, hugH = inFlow ? n.sv === "HUG" : false;
  if (fillW) { if (parentLm === "H") { st.flex = "1 1 0"; st.minWidth = 0; } else st.alignSelf = "stretch"; } else if (!hugW || n.t !== "TEXT") st.width = px(n.w);
  if (fillH) { if (parentLm === "V") { st.flex = "1 1 0"; st.minHeight = 0; } else st.alignSelf = "stretch"; } else if (!hugH && !(n.t === "TEXT" && n.ar !== "NONE")) st.height = px(n.h);
  if (hugW && n.t !== "TEXT" && n.lm) delete st.width;
  if (hugH && n.lm) delete st.height;
  if (inFlow) st.flexShrink = 0;
  if (n.op !== undefined) st.opacity = n.op;
  if (n.rot) st.transform = `rotate(${-n.rot}deg)`, (st.transformOrigin = "top left");

  if (n.icon) {
    // match the source glyph style: filled + soft layer = bulk, filled = solid, outline + soft fill = duotone, outline = stroke
    const style = n.istyle || (n.fill ? (n.duo ? "bulk" : "solid") : n.duo ? "duotone" : "stroke-rounded");
    el.icon = { name: n.istyle ? n.icon : mapIcon(n.icon), style, size: Math.round(Math.min(n.w, n.h) * 10) / 10 };
    if (n.ic) st.color = n.ic;
    st.display = "block"; st.flexShrink = 0;
    return el;
  }
  if (n.svg) {
    // hairlines (0px tall or wide) must keep a 1px box or Chrome paints nothing
    el.svg = n.svg.replace(/^<svg([^>]*?) width="([\d.]+)" height="([\d.]+)" viewBox="0 0 ([\d.]+) ([\d.]+)"/, (m, a, w, h, vw, vh) => {
      const W = Math.max(Number(w), 1), H = Math.max(Number(h), 1);
      return `<svg${a} width="${W}" height="${H}" viewBox="0 0 ${Math.max(Number(vw), Number(vw) < 1 ? 1 : 0)} ${Math.max(Number(vh), Number(vh) < 1 ? 1 : 0)}"`;
    });
    st.display = "block"; st.lineHeight = 0; st.overflow = "visible";
    return el;
  }

  if (n.r) st.borderRadius = Array.isArray(n.r) ? n.r.map(px).join(" ") : px(n.r);
  background(n.f, st, n.w, n.h);
  shadows(n, st);
  if (n.clip) st.overflow = "hidden";

  if (n.t === "TEXT") {
    el.tag = "p"; st.margin = 0;
    st.textAlign = { LEFT: "left", CENTER: "center", RIGHT: "right", JUSTIFIED: "justify" }[n.ta] || "left";
    if (n.ar === "WIDTH_AND_HEIGHT") { st.whiteSpace = "pre"; delete st.width; }
    else st.whiteSpace = "pre-wrap";
    if (n.trunc) { st.overflow = "hidden"; st.textOverflow = "ellipsis"; st.whiteSpace = "nowrap"; }
    const segs = (n.seg || []).filter((g) => g && g.ff);
    if (!segs.length) { el.text = ""; return el; }
    // "auto" line height differs between Figma and browsers: pin it to Figma's box height per line
    const maxFs = Math.max(...segs.map((g) => g.fs), 1);
    const lines = Math.max(1, Math.round(n.h / (maxFs * 1.22)));
    // Figma "leading trim" (cap height): the text box is shorter than the font size; CSS text-box does the same trim
    const trimmed = !segs.some((g) => g.c.includes("\n")) && n.h < maxFs * 0.98;
    const autoLh = !trimmed && segs.every((g) => g.lh === undefined) ? px(n.h / lines) : null;
    if (autoLh) st.lineHeight = autoLh;
    if (segs.length === 1) { Object.assign(st, textStyle(segs[0])); if (autoLh) st.lineHeight = autoLh; el.text = segs[0].c; }
    else { Object.assign(st, textStyle(segs[0])); if (autoLh) st.lineHeight = autoLh; el.kids = segs.map((s) => ({ tag: "span", st: textStyle(s), text: s.c, kids: [] })); }
    if (trimmed) { st.textBox = "trim-both cap alphabetic"; st.height = px(n.h); }
    return el;
  }

  if (n.lm) {
    st.display = "flex"; st.flexDirection = n.lm === "H" ? "row" : "column";
    if (n.wrap) { st.flexWrap = "wrap"; if (n.cgap) st.rowGap = px(n.cgap); }
    let [t, r, b, l] = n.pad || [0, 0, 0, 0];
    if (n.sil && n.s && n.s.length) { const [st_, sr, sb, sl] = Array.isArray(n.sw) ? n.sw : [n.sw, n.sw, n.sw, n.sw]; t += st_; r += sr; b += sb; l += sl; }
    if (t || r || b || l) st.padding = [t, r, b, l].map(px).join(" ");
    if (n.gap && n.pa !== "SPACE_BETWEEN") st[n.wrap ? "columnGap" : "gap"] = px(n.gap);
    st.justifyContent = JUST[n.pa] || "flex-start";
    st.alignItems = ALIGN[n.ca] || "flex-start";
    st.boxSizing = "border-box";
    if ((n.k || []).some((k) => k.abs)) st.position = st.position || "relative";
  } else if (n.k && n.k.length) {
    st.position = st.position || "relative";
  }
  for (const k of n.k || []) el.kids.push(build(k, n.lm || null, false));
  return el;
}

// ---------- printers ----------
const kebab = (k) => k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()).replace(/^webkit/, "-webkit");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const cssText = (st) => Object.entries(st).map(([k, v]) => kebab(k) + ":" + (typeof v === "number" && !/^(opacity|fontWeight|flexShrink|minWidth|minHeight|lineHeight)$/.test(k) ? v + "px" : v)).join(";");

export function toHTML(el, icons = {}) {
  if (el.icon) return `<svg data-fu-icon="1" xmlns="http://www.w3.org/2000/svg" width="${el.icon.size}" height="${el.icon.size}" viewBox="0 0 24 24" style="${cssText(el.st).replace(/"/g, "'")}">${body(el.icon.style, el.icon.name)}</svg>`;
  const svg = el.svg ? (el.svg.startsWith("@") ? icons[el.svg.slice(1)] || "" : el.svg) : "";
  const inner = el.svg ? svg : el.text !== undefined ? esc(el.text) : el.kids.map((k) => toHTML(k, icons)).join("");
  return `<${el.tag} style="${cssText(el.st).replace(/"/g, "'")}">${inner}</${el.tag}>`;
}

const jsxAttr = (svg) =>
  svg
    .replace(/<\?xml[^>]*>/g, "")
    .replace(/\s(class)=/g, " className=")
    .replace(/\s([a-z]+(?:-[a-z]+)+)=/g, (_, a) => " " + a.replace(/-([a-z])/g, (m, c) => c.toUpperCase()) + "=")
    .replace(/\sxmlns:xlink="[^"]*"/g, "")
    .replace(/xlink:href/g, "href");
const jsVal = (v) => (typeof v === "number" ? String(v) : JSON.stringify(v));
const jsStyle = (st) => "{{ " + Object.entries(st).map(([k, v]) => k + ": " + jsVal(v)).join(", ") + " }}";
const jsxText = (s) => (/[{}<>]/.test(s) || s.includes("\n") || /^\s|\s$/.test(s) ? "{" + JSON.stringify(s) + "}" : s);

export function toJSX(el, icons = {}, depth = 2, used = new Map()) {
  const pad = " ".repeat(depth);
  if (el.icon && el.icon.style === "brand") {
    return `${pad}<svg width={${el.icon.size}} height={${el.icon.size}} viewBox="0 0 24 24" style=${jsStyle(el.st)}><path d="${brandPath(el.icon.name)}" fill="currentColor" /></svg>`;
  }
  if (el.icon) {
    const C = pascal(el.icon.name) + ({ duotone: "Duo", bulk: "Bulk", solid: "Solid" }[el.icon.style] || "");
    used.set(C, el.icon);
    return `${pad}<${C} size={${el.icon.size}} style=${jsStyle(el.st)} />`;
  }
  if (el.svg) {
    const raw = el.svg.startsWith("@") ? icons[el.svg.slice(1)] || "" : el.svg;
    return pad + jsxAttr(raw).replace(/^<svg/, `<svg style=${jsStyle(el.st)}`);
  }
  const open = `${pad}<${el.tag} style=${jsStyle(el.st)}>`;
  if (el.text !== undefined) return `${open}${jsxText(el.text)}</${el.tag}>`;
  if (!el.kids.length) return `${pad}<${el.tag} style=${jsStyle(el.st)} />`;
  return `${open}\n${el.kids.map((k) => toJSX(k, icons, depth + 2, used)).join("\n")}\n${pad}</${el.tag}>`;
}

export function componentName(name) {
  const base = name.split("/").pop().replace(/[^A-Za-z0-9 ]+/g, " ").trim().split(/\s+/).map((w) => w[0].toUpperCase() + w.slice(1)).join("");
  return /^[A-Z]/.test(base) ? base : "Component" + base;
}

export function toTSX(tree, icons, meta) {
  const el = build(tree);
  const fonts = [...new Set(JSON.stringify(tree).match(/"ff":"[^"]+"/g)?.map((m) => m.slice(6, -1)) || [])];
  const name = componentName(meta.name);
  const used = new Map();
  const jsx = toJSX(el, icons, 4, used);
  const byStyle = {};
  for (const [C, ic] of used) (byStyle[ic.style] ||= []).push(C !== pascal(ic.name) ? pascal(ic.name) + " as " + C : C);
  const imports = Object.entries(byStyle).map(([style, cs]) => `import { ${[...new Set(cs)].sort().join(", ")} } from "foundryui-icons/react/${style}";`).join("\n");
  return `// ${meta.name} (${meta.system}, ${meta.category}) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: ${fonts.join(", ") || "none"}. Icons: Foundry Icons.
${imports}${imports ? "\n\n" : ""}export function ${name}() {
  return (
${jsx}
  );
}
`;
}
