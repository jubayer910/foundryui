// Figma node tree (from serialize.js) -> intermediate DOM -> HTML (for visual QA) and TSX (what users copy).
// Auto layout becomes flexbox, fixed frames become relative boxes with absolute children.
// Icons are swapped for Ingot Icons (ingotui-icons) matched by name; third-party icon drawings are never copied.
import { readFileSync } from "node:fs";
import * as SI from "simple-icons";

const ICON_DIR = new URL("../../../apps/web/public/icons/", import.meta.url);
const INDEX = JSON.parse(readFileSync(new URL("index.json", ICON_DIR), "utf8"));
const NAMES = new Set(INDEX.map((i) => i.n));
const BODIES = {};
const brandPath = (name) => { const slug = name.replace(/^brand-/, ""); const k = Object.keys(SI).find((x) => SI[x] && SI[x].slug === slug); return k ? SI[k].path : ""; };
// paid styles (solid, duotone, twotone, bulk) live in apps/web/icons-pro since the free/paid icon split
const PRO_DIR = new URL("../../../apps/web/icons-pro/", import.meta.url);
const styleFile = (style) => { try { return readFileSync(new URL(style + ".json", ICON_DIR), "utf8"); } catch { return readFileSync(new URL(style + ".json", PRO_DIR), "utf8"); } };
const body = (style, name) => (style === "brand" ? `<path d="${brandPath(name)}" fill="currentColor"/>` : (BODIES[style] ||= JSON.parse(styleFile(style)))[name] || "");
const swBody = (b, sw) => (sw ? b.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${Math.round((Number(w) * sw) / 1.5 * 100) / 100}"`) : b);
// common dashboard icon names -> Foundry names
const ALIAS = {
  // Abotix sidebar icons are named after their page: map each to the Ingot icon closest to the Figma drawing
  overview: "file-shield", "threat-monitor": "gauge", vulnerabilities: "bug", "attack-paths": "route", "ai-pentests": "target",
  "fix-requests": "hammer", "applications-apis": "layout-grid", "data-sources": "database", "tools-plugins": "puzzle", secrets: "key",
  policies: "file-text", compliance: "certificate", integrations: "plug-connected", "team-access": "users", "knowledge-base": "book",
  spinner: "loader", buy: "shopping-cart", "ai-chat-02": "message-chatbot", "ai-chat": "message-chatbot",
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
// image fills: the caller decides where picture bytes live (data URI for QA, a public path for site code)
let imageUrl = () => null;
export function setImageUrl(fn) { imageUrl = fn; }
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
  if (p.k === "i") {
    const url = p.h && imageUrl(p.h);
    if (!url) return { solid: "#e5e7eb" };
    // CROP: the node box shows the part [tx, tx + sx] x [ty, ty + sy] of the picture (unrotated crops only)
    if (p.sm === "CROP" && p.it && !p.it[0][1] && !p.it[1][0] && p.it[0][0] > 0 && p.it[1][1] > 0) {
      const [[sx, , tx], [, sy, ty]] = p.it, r = (v) => Math.round(v * 100) / 100;
      return { layer: `url(${url}) ${r((-tx / sx) * w)}px ${r((-ty / sy) * h)}px / ${r(w / sx)}px ${r(h / sy)}px no-repeat` };
    }
    const size = p.sm === "FIT" ? "contain" : p.sm === "TILE" ? "auto" : p.sm === "STRETCH" ? "100% 100%" : "cover";
    return { layer: `url(${url}) center / ${size} ${p.sm === "TILE" ? "repeat" : "no-repeat"}` };
  }
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
    // dashed strokes: an outline drawn inside (or centred on) the box keeps the dashes and leaves layout alone
    if (n.dash && n.dash.length && t === r && r === b && b === l) { st.outline = `${px(t)} dashed ${c}`; st.outlineOffset = px(n.sa === "OUTSIDE" ? 0 : n.sa === "CENTER" ? -t / 2 : -t); }
    else if (t === r && r === b && b === l) out.push(`${inset ? "inset " : ""}0 0 0 ${px(t)} ${c}`);
    else {
      if (t) out.push(`inset 0 ${px(t)} 0 0 ${c}`);
      if (b) out.push(`inset 0 ${px(-b)} 0 0 ${c}`);
      if (l) out.push(`inset ${px(l)} 0 0 0 ${c}`);
      if (r) out.push(`inset ${px(-r)} 0 0 0 ${c}`);
    }
  }
  // a frame with no fill and no stroke casts its drop shadow from its content (Figma), not from its box
  const contentShadow = n.t !== "TEXT" && !(n.f && n.f.length) && !(n.s && n.s.length);
  const drops = [];
  for (const e of n.fx || []) {
    if (e[0] === "DROP_SHADOW" && contentShadow) drops.push(`drop-shadow(${px(e[1])} ${px(e[2])} ${px(e[3] / 2)} ${rgba(e[5], e[6])})`);
    else if (e[0] === "DROP_SHADOW") out.push(`${px(e[1])} ${px(e[2])} ${px(e[3])} ${px(e[4])} ${rgba(e[5], e[6])}`);
    // ...and its inner shadow falls inside the glyphs, not along the box edge: no box ring
    else if (e[0] === "INNER_SHADOW" && contentShadow) continue;
    else if (e[0] === "INNER_SHADOW") out.push(`inset ${px(e[1])} ${px(e[2])} ${px(e[3])} ${px(e[4])} ${rgba(e[5], e[6])}`);
    else if (e[0] === "LAYER_BLUR") st.filter = `blur(${px(e[1] / 2)})`;
    else if (e[0] === "BACKGROUND_BLUR") st.backdropFilter = `blur(${px(e[1] / 2)})`;
  }
  if (out.length) st.boxShadow = out.join(", ");
  if (drops.length) st.filter = (st.filter ? st.filter + " " : "") + drops.join(" ");
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
// files whose small icons keep a 1.5px stroke (measured by QA): set per component with setAbsStroke()
let ABS_STROKE = false;
export const setAbsStroke = (v) => { ABS_STROKE = !!v; };
export function build(n, parentLm = null, root = true, parent = null) {
  const el = buildRaw(n, parentLm, root, parent);
  if (n && n._fu && el) el.role = n._fu;
  return el;
}
function buildRaw(n, parentLm = null, root = true, parent = null) {
  // a rotated child inside auto layout takes the space of its rotated bounding box (e.g. vertical grid lines drawn as
  // rotated lines): lay out a wrapper of that size and rotate the real node inside it
  if (!root && parentLm && !n.abs && n.rot) {
    const a = (-n.rot * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
    const pts = [[0, 0], [n.w, 0], [0, n.h], [n.w, n.h]].map(([x, y]) => [x * c - y * s, x * s + y * c]);
    const mx = Math.min(...pts.map((p) => p[0])), my = Math.min(...pts.map((p) => p[1]));
    const bw = Math.max(...pts.map((p) => p[0])) - mx, bh = Math.max(...pts.map((p) => p[1])) - my;
    // cross axis: Figma reports where the rotated node really sits; pin the wrapper there instead of trusting align-items
    let ix = -mx, iy = -my;
    const wst = { position: "relative", flexShrink: 0 };
    if (parent && parent.pad) {
      const [pt, pr, pb, pl] = parent.pad;
      if (parentLm === "V" && n.sh !== "FILL") { wst.alignSelf = "flex-start"; wst.marginLeft = px(Math.round((n.x + mx - pl) * 100) / 100); }
      if (parentLm === "H" && n.sv !== "FILL") { wst.alignSelf = "flex-start"; wst.marginTop = px(Math.round((n.y + my - pt) * 100) / 100); }
    }
    const inner = buildNode({ ...n, abs: 1, x: ix, y: iy }, null, false);
    const fillW = n.sh === "FILL", fillH = n.sv === "FILL";
    if (fillW) { if (parentLm === "H") { wst.flex = "1 1 0"; wst.minWidth = 0; } else wst.alignSelf = "stretch"; } else wst.width = px(Math.round(bw * 100) / 100);
    if (fillH) { if (parentLm === "V") { wst.flex = "1 1 0"; wst.minHeight = 0; } else wst.alignSelf = "stretch"; } else wst.height = px(Math.round(bh * 100) / 100);
    return { tag: "div", st: wst, name: n.n, kids: [inner] };
  }
  return buildNode(n, parentLm, root);
}
function buildNode(n, parentLm = null, root = true) {
  const st = {};
  const el = { tag: "div", st, name: n.n, kids: [] };
  // position and size
  if (!root && (parentLm === null || n.abs)) {
    st.position = "absolute"; st.left = px(n.x); st.top = px(n.y);
  }
  const inFlow = !root && parentLm && !n.abs;
  const fillW = inFlow && n.sh === "FILL", fillH = inFlow && n.sv === "FILL";
  const hugW = inFlow ? n.sh === "HUG" : false, hugH = inFlow ? n.sv === "HUG" : false;
  if (fillW) { if (parentLm === "H") { st.flex = n._hugMain ? "1 1 auto" : "1 1 0"; st.minWidth = 0; } else st.alignSelf = "stretch"; } else if (!hugW || n.t !== "TEXT") st.width = px(n.w);
  if (fillH) { if (parentLm === "V") { st.flex = n._hugMain ? "1 1 auto" : "1 1 0"; st.minHeight = 0; } else st.alignSelf = "stretch"; } else if (!hugH && !(n.t === "TEXT" && n.ar !== "NONE")) st.height = px(n.h);
  // a rotated child makes Figma hug differently from CSS: keep the measured size
  const rotKid = (n.k || []).some((k) => k.rot && !k.abs);
  if (hugW && n.t !== "TEXT" && n.lm && !rotKid) delete st.width;
  if (hugH && n.lm && !rotKid) delete st.height;
  if (inFlow) st.flexShrink = 0;
  // an empty text layer (a blank line in a code block) still takes its line in Figma; an empty <p> collapses
  if (n.t === "TEXT" && !(n.seg || []).some((g) => g.c)) st.height = px(n.h);
  if (n.op !== undefined) st.opacity = n.op;
  if (n.rot) {
    st.transform = `rotate(${-n.rot}deg)`;
    if (inFlow) {
      // in auto layout Figma lays out the rotated bounding box: spin in place, and for quarter turns swap the box with margins
      st.transformOrigin = "center";
      const q = Math.abs(((n.rot % 180) + 180) % 180 - 90) < 1;
      if (q && n.w !== n.h) { const dx = (n.h - n.w) / 2, dy = (n.w - n.h) / 2; st.margin = `${px(dy)} ${px(dx)}`; }
    } else st.transformOrigin = "top left";
  }

  if (n.icon) {
    // match the source glyph style: filled + soft layer = bulk, filled = solid, outline + soft fill = duotone, outline = stroke
    const style = n.istyle || (n.fill ? (n.duo ? "bulk" : "solid") : n.duo ? "duotone" : "stroke-rounded");
    el.icon = { name: n.istyle ? n.icon : mapIcon(n.icon), style, size: Math.round(Math.min(n.w, n.h) * 10) / 10 };
    // stroke weight in px from Figma (resized instances keep 1.5px): express it in the 24-unit viewBox
    if (n.isw && el.icon.size) { const sw = Math.round(((n.isw * 24) / el.icon.size) * 100) / 100; if (Math.abs(sw - 1.5) > 0.01) el.icon.sw = sw; }
    else
    // some files keep a resized icon's 1.5px stroke; below 16px scale the 24-grid stroke so the drawn line stays 1.5px
    if (ABS_STROKE && el.icon.size < 16 && /stroke|duotone/.test(style)) el.icon.sw = Math.round((1.5 * 24 / el.icon.size) * 100) / 100;
    if (n.ic) st.color = n.ic;
    st.display = "block"; st.flexShrink = 0;
    return el;
  }
  if (n.svg) {
    // a single vector node: serialize.js writes its opacity on the paths as well as on the node; apply it once
    const own = n.op !== undefined && /^(VECTOR|BOOLEAN_OPERATION|STAR|POLYGON|LINE|ELLIPSE|RECTANGLE)$/.test(n.t);
    const svg0 = own ? n.svg.split(` opacity="${n.op}"`).join("") : n.svg;
    // hairlines (0px tall or wide) must keep a 1px box or Chrome paints nothing
    el.svg = svg0.replace(/^<svg([^>]*?) width="([\d.]+)" height="([\d.]+)" viewBox="0 0 ([\d.]+) ([\d.]+)"/, (m, a, w, h, vw, vh) => {
      const W = Math.max(Number(w), 1), H = Math.max(Number(h), 1);
      return `<svg${a} width="${W}" height="${H}" viewBox="0 0 ${Math.max(Number(vw), Number(vw) < 1 ? 1 : 0)} ${Math.max(Number(vh), Number(vh) < 1 ? 1 : 0)}"`;
    });
    st.display = "block"; st.lineHeight = 0; st.overflow = "visible";
    if (n.fx && n.fx.length) shadows(n, st);
    // a frame or instance holding a sprite (e.g. a logo sheet where only one logo sits in the box) clips in Figma:
    // when shapes start well outside the box, clip the drawing to its box
    if ((n.t === "INSTANCE" || n.t === "FRAME") && [...el.svg.matchAll(/matrix\(1 0 0 1 (-?[\d.]+) (-?[\d.]+)\)/g)].some(([, x, y]) => Number(x) < -n.w || Number(y) < -n.h || Number(x) > 2 * n.w || Number(y) > 2 * n.h)) {
      st.overflow = "hidden";
      el.svg = el.svg.replace(/^(<svg[^>]*?) overflow="visible"/, '$1 overflow="hidden"');
    }
    // a 0px CSS box scales the drawing to nothing: give hairlines 1px and take the pixel back from the layout
    // (anything under 1px, e.g. a baked rotated line 0.01px tall, scales the same way)
    const thin = (v) => typeof v === "string" && /px$/.test(v) && parseFloat(v) < 1;
    if (thin(st.height)) { const h = parseFloat(st.height); st.height = "1px"; if (inFlow && parentLm === "V") st.marginBottom = px(h - 1); }
    if (thin(st.width)) { const w = parseFloat(st.width); st.width = "1px"; if (inFlow && parentLm === "H") st.marginRight = px(w - 1); }
    return el;
  }

  if (n.r) st.borderRadius = Array.isArray(n.r) ? n.r.map(px).join(" ") : px(n.r);
  background(n.f, st, n.w, n.h);
  shadows(n, st);
  if (n.clip) st.overflow = "hidden";

  if (n.t === "TEXT") {
    el.tag = "p"; st.margin = 0;
    st.textAlign = { LEFT: "left", CENTER: "center", RIGHT: "right", JUSTIFIED: "justify" }[n.ta] || "left";
    // auto-width text: Figma's box is the truth (Chrome measures the same glyphs up to ~1px narrower, which adds up
    // along a hugging row), so keep it as a minimum width
    if (n.ar === "WIDTH_AND_HEIGHT") { st.whiteSpace = "pre"; delete st.width; st.minWidth = px(n.w); }
    else st.whiteSpace = "pre-wrap";
    if (n.trunc) {
      st.overflow = "hidden"; st.textOverflow = "ellipsis"; st.whiteSpace = "nowrap";
      // truncation after several lines (Figma max lines): a box taller than one line clamps to that many lines
      const g0 = (n.seg || []).find((g) => g && g.fs) || {};
      const lhPx = typeof g0.lh === "number" ? g0.lh : typeof g0.lh === "string" && g0.lh.endsWith("%") ? (parseFloat(g0.lh) / 100) * g0.fs : (g0.fs || 14) * 1.2;
      const lines = lhPx ? Math.round(n.h / lhPx) : 1;
      if (lines >= 2) { st.whiteSpace = "pre-wrap"; st.display = "-webkit-box"; st.WebkitLineClamp = String(lines); st.WebkitBoxOrient = "vertical"; }
    }
    const segs = (n.seg || []).filter((g) => g && g.ff);
    if (!segs.length) { el.text = ""; return el; }
    // "auto" line height differs between Figma and browsers: pin it to Figma's box height per line
    const maxFs = Math.max(...segs.map((g) => g.fs), 1);
    const lines = Math.max(1, Math.round(n.h / (maxFs * 1.22)));
    // Figma "leading trim" (cap height): the text box is shorter than the font size; CSS text-box does the same trim
    // multi-line text with a set line height is trimmed too when its box is not a whole number of lines
    const lhPx = (g) => (typeof g.lh === "number" ? g.lh : g.lh !== undefined ? (parseFloat(g.lh) / 100) * g.fs : null);
    const lh0 = lhPx(segs[0]);
    const evenLh = lh0 && segs.every((g) => Math.abs((lhPx(g) || 0) - lh0) < 0.01);
    const nLines = evenLh ? n.h / lh0 : 0;
    const trimmedMulti = evenLh && n.ar !== "NONE" && nLines > 1 && Math.abs(nLines - Math.round(nLines)) > 0.2;
    const trimmed = (!segs.some((g) => g.c.includes("\n")) && n.h < maxFs * 0.98) || trimmedMulti;
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
    // a lone child under SPACE_BETWEEN: follow where Figma actually put it (start, centre or end)
    const flow = (n.k || []).filter((k) => !k.abs);
    if (n.pa === "SPACE_BETWEEN" && flow.length === 1 && n.pad && !flow[0].icon) {
      const c = flow[0], [pt, pr, pb, pl] = n.pad, H = n.lm === "H";
      const pos = H ? c.x : c.y, size = H ? c.w : c.h, inner = (H ? n.w - pl - pr : n.h - pt - pb), lead = H ? pl : pt;
      const centre = lead + (inner - size) / 2, end = lead + inner - size;
      if (Math.abs(pos - centre) < 1 && Math.abs(pos - lead) > 1) st.justifyContent = "center";
      else if (Math.abs(pos - end) < 1 && Math.abs(pos - lead) > 1) st.justifyContent = "flex-end";
    }
    st.alignItems = ALIGN[n.ca] || "flex-start";
    st.boxSizing = "border-box";
    if ((n.k || []).some((k) => k.abs)) st.position = st.position || "relative";
  } else if (n.k && n.k.length) {
    st.position = st.position || "relative";
  }
  // a FILL child of a parent that hugs on that axis has nothing to fill: it keeps its content size (Figma), so its
  // flex basis must be auto, not 0 (a 0 basis collapses it, e.g. a truncated title becoming invisible)
  // serialize.js records child x/y as the world-space offset from this node; inside a rotated node CSS positions
  // children in its rotated local frame, so turn the offset back by the node's rotation
  const local = (k) => {
    if (!n.rot || k.rot || k.x === undefined || k.y === undefined) return k;
    const a = (n.rot * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
    return { ...k, x: Math.round((c * k.x - s * k.y) * 100) / 100, y: Math.round((s * k.x + c * k.y) * 100) / 100 };
  };
  for (const k0 of n.k || []) { const k = local(k0); el.kids.push(build(n.psm === "AUTO" ? { ...k, _hugMain: 1 } : k, n.lm || null, false, n)); }
  // negative spacing (overlapping items) is not valid CSS gap: pull every later item back with a negative margin
  if (n.lm && n.gap < 0 && n.pa !== "SPACE_BETWEEN" && !n.wrap) {
    let first = true;
    (n.k || []).forEach((k, i) => {
      if (k.abs) return;
      if (first) { first = false; return; }
      el.kids[i].st[n.lm === "H" ? "marginLeft" : "marginTop"] = px(n.gap);
    });
  }
  return el;
}

// ---------- printers ----------
const kebab = (k) => k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()).replace(/^webkit/, "-webkit");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const cssText = (st) => Object.entries(st).map(([k, v]) => kebab(k) + ":" + (typeof v === "number" && !/^(opacity|fontWeight|flexShrink|minWidth|minHeight|lineHeight)$/.test(k) ? v + "px" : v)).join(";");

export const iconBody = (ic) => swBody(body(ic.style, ic.name), ic.sw);
export function toHTML(el, icons = {}) {
  if (el.icon) return `<svg data-fu-icon="1" xmlns="http://www.w3.org/2000/svg" width="${el.icon.size}" height="${el.icon.size}" viewBox="0 0 24 24" style="${cssText(el.st).replace(/"/g, "'")}">${swBody(body(el.icon.style, el.icon.name), el.icon.sw)}</svg>`;
  const svg = el.svg ? (el.svg.startsWith("@") ? icons[el.svg.slice(1)] || "" : el.svg) : "";
  // the styled box is the <svg> itself, exactly as in the TSX (a wrapping div would put the drawing on a text baseline)
  if (el.svg) return svg.replace(/^<svg/, `<svg style="${cssText(el.st).replace(/"/g, "'")}"`);
  const inner = el.text !== undefined ? esc(el.text) : el.kids.map((k) => toHTML(k, icons)).join("");
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
    return `${pad}<${C} size={${el.icon.size}}${el.icon.sw ? ` strokeWidth={${el.icon.sw}}` : ""} style=${jsStyle(el.st)} />`;
  }
  const fu = el.role ? ` data-fu="${el.role}"` : "";
  if (el.svg) {
    const raw = el.svg.startsWith("@") ? icons[el.svg.slice(1)] || "" : el.svg;
    return pad + jsxAttr(raw).replace(/^<svg/, `<svg${fu} style=${jsStyle(el.st)}`);
  }
  const open = `${pad}<${el.tag}${fu} style=${jsStyle(el.st)}>`;
  if (el.text !== undefined) return `${open}${jsxText(el.text)}</${el.tag}>`;
  if (!el.kids.length) return `${pad}<${el.tag}${fu} style=${jsStyle(el.st)} />`;
  return `${open}\n${el.kids.map((k) => toJSX(k, icons, depth + 2, used)).join("\n")}\n${pad}</${el.tag}>`;
}

export function componentName(name) {
  const base = name.split("/").pop().replace(/[^A-Za-z0-9 ]+/g, " ").trim().split(/\s+/).map((w) => w[0].toUpperCase() + w.slice(1)).join("");
  return /^[A-Z]/.test(base) ? base : "Component" + base;
}

// ---------- interactions ----------
// Roles for hover and click behaviour, read from the Figma tree: names plus geometry. Invisible at rest.
const INTERACT_SRC = readFileSync(new URL("./interact.ts", import.meta.url), "utf8");
const hasTextNode = (n) => !!n && (n.t === "TEXT" || (n.k || []).some(hasTextNode));
const isIconNode = (n) => !!n && (!!n.icon || /^(icon|logo|avatar)\b/i.test(n.n || ""));
const baseName = (s) => (s || "").replace(/\s*[·/]\s*(on|off|active|inactive|selected|default|hover)\b.*$/i, "").replace(/\s+(on|off|active|inactive|selected)$/i, "").replace(/\d+/g, "#").trim().toLowerCase();
const spread = (xs) => Math.max(...xs) - Math.min(...xs);
const NOT_MARK = /grid|divider|line|tick|guide|track|hatch|label|legend|dot|avatar|axis|gap|spacer|bg|background|shadow|border/i;
const NOT_ROW = /cell|label|tick|legend|value|chip|tab|pill|segment|option|menu|nav|key|axis|grid|day|week|month|hour/i;
const TAB = /\b(tab|tabs|segment|option|pill|chip|toggle|filter|period|range)\b/i;
const FIELD = /\b(input|search|field|textarea|text area|combobox|search field|search bar)\b/i;
const BTN = /button|\bbtn\b|\bcta\b|menu item|menu\/item|nav item|\bselect\b|dropdown|\blink\b|^action/i;
// a group of marks that are all one pale grey is a skeleton or placeholder, not data
const fillOf = (k) => (k.f || []).find((p) => p && p.k === "s")?.c?.toLowerCase() || (k.k || []).map(fillOf).find(Boolean) || "";
const paleGrey = (c) => { if (!/^#[0-9a-f]{6}$/.test(c)) return false; const [r, g, b] = [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)); return Math.max(r, g, b) - Math.min(r, g, b) < 14 && r > 190; };
const skeleton = (g) => g.map(fillOf).every(paleGrey);
export function assignRoles(n, depth = 0, parent = null) {
  if (!n || isIconNode(n) || n.svg && depth > 0 && !(n.w >= 120 && n.h >= 40)) return 0;
  let count = 0;
  const ks = (n.k || []).filter(Boolean);
  // one plotted line per chart: wide vector drawings, preferring the series line over area fills and comparisons
  const plots = ks.filter((k) => k.svg && k.w >= 120 && k.h >= 30 && /<path/.test(k.svg) && !/^(icon|logo|grid|guide|axis)/i.test(k.n || ""));
  if (plots.length) {
    const score = (k) => (/line|period|series|trend|current|this|revenue|value/i.test(k.n || "") ? 3 : 0) - (/area|fill|gradient|shade|band|previous|prior|compare|last|baseline/i.test(k.n || "") ? 2 : 0) + (/stroke="(?!none)/.test(k.svg) ? 1 : 0);
    const best = plots.reduce((a, b) => (score(b) > score(a) ? b : a));
    best._fu = "plot"; count++;
  }
  const groups = {};
  for (const k of ks) (groups[baseName(k.n)] ||= []).push(k);
  for (const [name, g] of Object.entries(groups)) {
    const ws = g.map((k) => k.w || 0), hs = g.map((k) => k.h || 0);
    if (g.length >= 4 && (hasTextNode(n) || hasTextNode(parent)) && !skeleton(g) && !NOT_MARK.test(name) && g.every((k) => !hasTextNode(k) && !isIconNode(k) && k.w > 0 && k.h > 0)) {
      if (Math.max(...ws) <= 64 && spread(hs) > 1 && Math.max(...ws) / Math.max(0.1, Math.min(...ws)) <= 1.6) { for (const k of g) k._fu = "bar"; count += g.length; continue; }
      if (Math.max(...hs) <= 40 && Math.min(...hs) >= 6 && spread(ws) > 1 && spread(g.map((k) => k.x || 0)) <= 3 && spread(hs) <= 2) { for (const k of g) k._fu = "hbar"; count += g.length; continue; }
    }
    if (g.length >= 2 && g.length <= 10 && TAB.test(name) && g.every((k) => (hasTextNode(k) || (k.k || []).some(isIconNode)) && (k.h || 0) <= 48)) { for (const k of g) k._fu = "tab"; count += g.length; continue; }
    if (g.length >= 3 && !NOT_ROW.test(name) && g.every(hasTextNode) && spread(ws) <= 2 && Math.min(...ws) >= 0.55 * (n.w || 0) && new Set(g.map((k) => Math.round(k.y || 0))).size === g.length) { for (const k of g) k._fu = "row"; count += g.length; continue; }
  }
  // more roles for components without marks or lists: card groups, heatmap/calendar cells, fields, donuts
  for (const [name, g] of Object.entries(groups)) {
    if (g.some((k) => k._fu)) continue;
    const ws = g.map((k) => k.w || 0), hs = g.map((k) => k.h || 0);
    if (g.length >= 6 && !NOT_MARK.test(name) && !/swatch|key|chip|badge|tag|pill|status|avatar|logo|star/i.test(name) && Math.min(...ws) >= 12 && Math.min(...hs) >= 12 && Math.max(...ws) <= 80 && Math.max(...hs) <= 80 && g.every((k) => k.w > 0 && k.h > 0 && k.w / k.h <= 3 && k.h / k.w <= 3 && !isIconNode(k) && !(k.k || []).some(isIconNode))) { for (const k of g) k._fu = "cell"; count += g.length; continue; }
    if (g.length >= 2 && g.every((k) => (k.f?.length || k.s?.length) && (typeof k.r === "number" ? k.r > 0 : Array.isArray(k.r)) && (k.w || 0) >= 120 && (k.h || 0) >= 56 && hasTextNode(k))) { for (const k of g) k._fu = "card"; count += g.length; continue; }
  }
  // donut and pie charts drawn as one vector per arc
  const arcs = ks.filter((k) => !k._fu && k.svg && /arc|segment|slice|ring|donut|pie|sector/i.test(k.n || "") && !/track|bg|background/i.test(k.n || ""));
  if (arcs.length >= 2) { for (const k of arcs) k._fu = "arc"; count += arcs.length; }
  for (const k of ks) {
    if (!k._fu && FIELD.test(k.n || "") && (k.h || 0) >= 24 && (k.h || 0) <= 56 && (k.f?.length || k.s?.length)) { k._fu = "field"; count++; }
    if (!k._fu && k.svg && k.w >= 60 && k.h >= 60 && k.w / k.h <= 1.5 && k.h / k.w <= 1.5 && new Set([...k.svg.matchAll(/<path[^>]*fill="(#[0-9a-fA-F]{3,8})"/g)].map((m) => m[1].toLowerCase())).size >= 3 && !/^(icon|logo|avatar|illustration|art|image)/i.test(k.n || "")) { k._fu = "donut"; count++; }
  }
  for (const k of ks) {
    if (!k._fu && BTN.test(k.n || "") && (k.h || 0) <= 56 && (k.f?.length || k.s?.length) && (hasTextNode(k) || (k.k || []).some(isIconNode))) { k._fu = "btn"; count++; }
    count += assignRoles(k, depth + 1, n);
  }
  return count;
}

const CARD_CATS = /^(cards and panels|kpi and stats|charts|tables and lists)$/i;
export function toTSX(tree, icons, meta) {
  // Guessed roles are off: interactions are now written per component (FU_GUESS_ROLES=1 brings the old guesser back).
  const guess = process.env.FU_GUESS_ROLES === "1";
  let roles = guess ? assignRoles(tree) : 0;
  // a component that is one card lifts a little on hover
  if (guess && !tree._fu && CARD_CATS.test(meta.category || "") && (tree.f?.length || tree.s?.length) && (typeof tree.r === "number" ? tree.r > 0 : Array.isArray(tree.r)) && (tree.w || 0) <= 900) { tree._fu = "card"; roles++; }
  const el = build(tree);
  const fonts = [...new Set(JSON.stringify(tree).match(/"ff":"[^"]+"/g)?.map((m) => m.slice(6, -1)) || [])];
  const name = componentName(meta.name);
  const used = new Map();
  let jsx = toJSX(el, icons, 4, used);
  const byStyle = {};
  for (const [C, ic] of used) (byStyle[ic.style] ||= []).push(C !== pascal(ic.name) ? pascal(ic.name) + " as " + C : C);
  const imports = Object.entries(byStyle).map(([style, cs]) => `import { ${[...new Set(cs)].sort().join(", ")} } from "ingotui-icons/react/${style}";`).join("\n");
  const head = `// ${meta.name} (${meta.system}, ${meta.category}) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: ${fonts.join(", ") || "none"}. Icons: Ingot Icons.
`;
  if (!roles) return `${head}${imports}${imports ? "\n\n" : ""}export function ${name}() {
  return (
${jsx}
  );
}
`;
  // interactive: hover and click states live in a small helper at the end of the file, nothing changes at rest
  jsx = jsx.replace(/^(\s*<[A-Za-z]+)/, "$1 ref={fuRef}");
  return `"use client";
${head}import { useEffect, useRef } from "react";
${imports}${imports ? "\n" : ""}
export function ${name}() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
${jsx}
  );
}

// Interactions: hover and click states. Remove this function and the two lines above to get a static component.
${INTERACT_SRC.replace(/^\/\*[\s\S]*?\*\/\n/, "").trim()}
`;
}
