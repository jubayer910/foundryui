// Foundry component library — shared core (prepended to every builder script by serve.mjs).
// Runs in the Figma Desktop Bridge: new Function("args", "return (async () => {" + code + "})()").
const G = globalThis.__fuLib || (globalThis.__fuLib = {});

// ---------- Loopo tokens ----------
const HEX = {
  page: "#f5f5f5", surface: "#ffffff", sunken: "#fafafa", hover: "#f4f4f5", line: "#ececec", "line-strong": "#e1e1e1",
  ink: "#202020", body: "#2d2d2d", muted: "#747474", faint: "#a6a6a6",
  accent: "#fd4b23", "accent-soft": "#fff1ed", "accent-ink": "#ffffff",
  "series-2": "#4d98fe", "series-3": "#ff72ab", "series-4": "#f3c83d",
  positive: "#18b170", "positive-soft": "#ebf8f2", negative: "#e5484d", "negative-soft": "#fdeeee", warning: "#d99a06", "warning-soft": "#fdf6e3",
  // text tones: pass WCAG AA on their soft backgrounds and on white
  "positive-text": "#0f7d4f", "negative-text": "#c4282e", "warning-text": "#8a6000", "accent-text": "#c2361a",
};
const RADIUS = { xs: 6, sm: 8, md: 10, lg: 14, xl: 22, full: 999 };
const rgb = (h) => ({ r: parseInt(h.slice(1, 3), 16) / 255, g: parseInt(h.slice(3, 5), 16) / 255, b: parseInt(h.slice(5, 7), 16) / 255 });

async function tokens() {
  if (G.vars) return G.vars;
  const cols = await figma.variables.getLocalVariableCollectionsAsync();
  const COL = (typeof args !== "undefined" && args.collection) || "System";
  let col = cols.find((c) => c.name === COL);
  if (!col) { col = figma.variables.createVariableCollection(COL); col.renameMode(col.modes[0].modeId, COL === "System" ? "Loopo" : "Light"); }
  const mode = col.modes[0].modeId;
  const all = (await figma.variables.getLocalVariablesAsync()).filter((v) => v.variableCollectionId === col.id);
  const mk = (name, type, val, scopes) => {
    let v = all.find((x) => x.name === name);
    if (!v) { v = figma.variables.createVariable(name, col, type); v.scopes = scopes; }
    v.setValueForMode(mode, val);
    return v;
  };
  const vars = { color: {}, radius: {} };
  for (const [k, h] of Object.entries(HEX)) vars.color[k] = mk("color/" + k, "COLOR", { ...rgb(h), a: 1 }, k.includes("line") ? ["STROKE_COLOR", "FRAME_FILL", "SHAPE_FILL"] : ["FRAME_FILL", "SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]);
  for (const [k, r] of Object.entries(RADIUS)) vars.radius[k] = mk("radius/" + k, "FLOAT", r, ["CORNER_RADIUS"]);
  G.vars = vars;
  return vars;
}

// ---------- styles ----------
async function fonts() {
  if (G.fonts) return;
  for (const s of ["Regular", "Medium", "SemiBold", "Bold"]) await figma.loadFontAsync({ family: "Geist", style: s }).catch(() => {});
  for (const s of ["Regular", "Medium"]) await figma.loadFontAsync({ family: "Geist Mono", style: s }).catch(() => {});
  G.fonts = true;
}
const TEXT_STYLES = {
  "Caption/11 Medium": ["Geist", "Medium", 11, 14, 0],
  "Caption/12 Medium": ["Geist", "Medium", 12, 16, 0],
  "Body/13 Regular": ["Geist", "Regular", 13, 18, -0.5],
  "Body/13 Medium": ["Geist", "Medium", 13, 18, -0.5],
  "Body/14 Regular": ["Geist", "Regular", 14, 20, -0.5],
  "Body/14 Medium": ["Geist", "Medium", 14, 20, -1],
  "Body/15 Medium": ["Geist", "Medium", 15, 20, -1],
  "Title/16 Medium": ["Geist", "Medium", 16, 22, -1],
  "Title/18 SemiBold": ["Geist", "SemiBold", 18, 24, -2],
  "Display/28 SemiBold": ["Geist", "SemiBold", 28, 32, -3],
  "Mono/11 Regular": ["Geist Mono", "Regular", 11, 14, 0],
};
async function textStyles() {
  if (G.ts) return G.ts;
  await fonts();
  const existing = await figma.getLocalTextStylesAsync();
  G.ts = {};
  for (const [name, [fam, st, size, lh, ls]] of Object.entries(TEXT_STYLES)) {
    let s = existing.find((x) => x.name === "Loopo/" + name);
    if (!s) { s = figma.createTextStyle(); s.name = "Loopo/" + name; }
    s.fontName = { family: fam, style: st }; s.fontSize = size; s.lineHeight = { unit: "PIXELS", value: lh }; s.letterSpacing = { unit: "PERCENT", value: ls };
    G.ts[name] = s;
  }
  return G.ts;
}
async function effectStyles() {
  if (G.es) return G.es;
  const existing = await figma.getLocalEffectStylesAsync();
  const sh = (y, r, a, spread = 0, col = 0) => ({ type: "DROP_SHADOW", color: { r: col, g: col, b: col * 1.4 > 1 ? 1 : col * 1.4, a }, offset: { x: 0, y }, radius: r, spread, visible: true, blendMode: "NORMAL" });
  const defs = {
    "Loopo/Card": [sh(1, 4, 0.05)],
    "Loopo/Overlay": [sh(16, 32, 0.12, -12, 0.05), sh(1, 2, 0.05, 0, 0.05)],
    "Loopo/Button": [sh(9, 8, 0.04), { type: "INNER_SHADOW", color: { r: 1, g: 1, b: 1, a: 0.18 }, offset: { x: 0, y: 1 }, radius: 0, spread: 0, visible: true, blendMode: "NORMAL" }],
  };
  G.es = {};
  for (const [name, effects] of Object.entries(defs)) {
    let s = existing.find((x) => x.name === name);
    if (!s) { s = figma.createEffectStyle(); s.name = name; }
    s.effects = effects;
    G.es[name.split("/")[1]] = s;
  }
  return G.es;
}

// ---------- node helpers ----------
const V = () => G.vars;
function solid(varOrHex, opacity) {
  const p = { type: "SOLID", color: typeof varOrHex === "string" ? rgb(varOrHex) : { r: 0, g: 0, b: 0 }, opacity: opacity ?? 1 };
  return typeof varOrHex === "string" ? p : figma.variables.setBoundVariableForPaint(p, "color", varOrHex);
}
const fill = (node, token, opacity) => { node.fills = [solid(V().color[token] || token, opacity)]; if (opacity !== undefined && opacity < 1) node.opacity = 1; return node; };
const stroke = (node, token, w = 1, align = "INSIDE") => { node.strokes = [solid(V().color[token] || token)]; node.strokeWeight = w; node.strokeAlign = align; return node; };
const radius = (node, key) => { node.cornerRadius = RADIUS[key]; for (const c of ["topLeftRadius", "topRightRadius", "bottomLeftRadius", "bottomRightRadius"]) node.setBoundVariable(c, V().radius[key]); return node; };

/** Auto-layout frame. o: {dir, gap, pad:[t,r,b,l]|n, align, justify, w, h, name, wrap} */
function box(o = {}) {
  const f = o.component ? figma.createComponent() : figma.createFrame();
  f.name = o.name || "Frame";
  f.layoutMode = o.dir === "v" ? "VERTICAL" : "HORIZONTAL";
  f.itemSpacing = o.gap ?? 0;
  const p = Array.isArray(o.pad) ? o.pad : [o.pad ?? 0, o.pad ?? 0, o.pad ?? 0, o.pad ?? 0];
  [f.paddingTop, f.paddingRight, f.paddingBottom, f.paddingLeft] = p;
  f.counterAxisAlignItems = o.align || "CENTER";
  f.primaryAxisAlignItems = o.justify || "MIN";
  f.fills = [];
  if (o.w || o.h) f.resize(o.w || 100, o.h || 100);
  f.primaryAxisSizingMode = (f.layoutMode === "HORIZONTAL" ? o.w : o.h) ? "FIXED" : "AUTO";
  f.counterAxisSizingMode = (f.layoutMode === "HORIZONTAL" ? o.h : o.w) ? "FIXED" : "AUTO";
  f.clipsContent = false;
  return f;
}
async function txt(parent, chars, style, color = "ink", name) {
  const t = figma.createText();
  await t.setTextStyleIdAsync(G.ts[style].id);
  t.characters = chars;
  // status colours on text always use their accessible text tone
  fill(t, ["positive", "negative", "warning", "accent"].includes(color) ? color + "-text" : color);
  t.name = name || chars;
  if (parent) parent.appendChild(t);
  return t;
}

// ---------- icons (from the icon library pages in this file) ----------
const ICON_KEYS = {"plus": "fdcc531c29137ce2e256fe211f387ba989493e2f", "arrow-right": "49150d35fdd857aa20592f4d146627f6aa9fa3f9", "bell": "8415f18a0de3507971e99e6ed16cac457ce895c6", "check": "51914927e997e77bfec5dce3fe7f769f78e69c8d", "mail": "147503bec8288ab0332d1b08922ff02866d9efc3", "search": "3b96cf96ad6e2fe4181c02f313b0b68d392dff19", "chevron-down": "f52a2a11dac3d92b8c9b4eddaf079fcd1d1bfb08", "copy": "7ea40e0cc1c838870d15137eb1ff1af8be295a74", "trash": "a25cfe45c6c19a2103a36cf004175dc0837a70bb", "edit": "1a23a6ad882308e8d1eb47c7d6223e636de4261e", "download": "5e594823b9ad31adb14634b7ea7837cf1004072c", "x": "380dab84b9f420fc3e3aa4d628bd06cdb45b33ec", "wallet": "b32774ae7cf6d18504b33ec11d45b36b6cb8294f", "receipt": "f2ba93c749b6db2979a17a9d075403e78b8e533d", "file-invoice": "a3287e2427a4eda4c30c0d003be2b2e4021dd9d3", "home": "fc9e3f6834b5babb6663c7bec2f82e10e044041a", "chart-bar": "902c028c9433c6359d1c5dfa1760eafd42b97abd", "users": "e1cb4dad008833cb6846827e1842264fc4028349", "settings": "da93c62b0cd44f5e976f279d0d45e1b928ff08eb", "help": "eeed6871fb5b7541f5eeb1efa994948aeb673e86", "stack-2": "10bd2bdc0b596918fca2dff40dc1a73b2cee3890", "sparkles": "0871cad8b537344eca224b4f4e6f247d22d9a9c3", "keyboard": "55e4b35df11473773e04fbb3656ba191b5cfc30e", "accessible": "908a354fd512bc049ee345bfcea2bd59a71c2192", "code": "f8029bd73c3bcc07fb136dbd464d42da518876ae", "send": "420fcdceb42a1159d336d1e4194461fbff12e172", "layout-grid": "5788bbbefaed76399141b484741558880886d812", "eye": "b5e325484e7f9adb82dede913c2c106fa0da44e1", "adjustments": "2b9055aeb852e076cd7811bd220be8f7611106a2", "info-circle": "252001cb5d31843e5377f24dd08b77ac11a55f60", "alert-triangle": "36e76e01340d5147760c0f9736ce20dd5a5896fa", "circle-check": "f49c039cd60651d640ff37dc21f2c6f5ff78a0de", "hand-click": "723ee19e3df945309217f21011b56936fb4e364a", "list-details": "0c0070c3a2a4a4fa907582f0c8c9af5d8d686697", "table": "a6b301558a038e11353c5af1aa5dc86876e6a057", "chart-pie": "8b17dd82532a3b27e302235ce2d5a349883e1a55", "menu-2": "dc01e8c4bd3902633df5edb94db55ce21e363e31", "user": "a6996bd51605cfab7bcc8815127c06d095b53e6c"};
async function iconSet(name) {
  G.icons = G.icons || {};
  if (G.icons[name]) return G.icons[name];
  if (!ICON_KEYS[name]) throw new Error("No icon key for " + name);
  return (G.icons[name] = await figma.importComponentSetByKeyAsync(ICON_KEYS[name]));
}
/** Icon instance (Stroke Rounded), sized and tinted. */
async function icon(name, size = 16, token = "ink", style = "Stroke Rounded") {
  const set = await iconSet(name);
  const v = set.children.find((c) => c.name === "Style=" + style);
  const i = v.createInstance();
  i.name = "Icon";
  if (size !== 24) i.rescale(size / 24);
  tintIcon(i, token);
  return i;
}
function tintIcon(inst, token) {
  for (const n of inst.findAll((x) => x.type === "VECTOR" || x.type === "BOOLEAN_OPERATION")) {
    if (n.strokes && n.strokes.length) n.strokes = [solid(V().color[token])];
    if (n.fills && n.fills.length) n.fills = [solid(V().color[token])];
  }
}

// ---------- pages / placement ----------
async function page(name) {
  G.category = name;
  let p = figma.root.children.find((x) => x.name === name);
  if (!p) { p = figma.createPage(); p.name = name; figma.root.appendChild(p); }
  await p.loadAsync();
  return p;
}
/** A titled section on a page that holds component sets in a vertical stack. */
async function section(p, title, note) {
  const cp = await page(title);
  G.category = G.groupOf ? G.groupOf(title) : "Components";
  let s = cp.children.find((n) => n.name === "Component sets" && n.type === "FRAME");
  if (s) s.remove();
  s = box({ name: "Component sets", dir: "v", gap: 32, pad: 48, align: "MIN" });
  fill(s, "#fafaf9"); s.cornerRadius = 24;
  const head = box({ name: "Header", dir: "v", gap: 6, align: "MIN" });
  s.appendChild(head);
  await txt(head, title + " components", "Title/18 SemiBold", "ink", "Title");
  if (note) { const t = await txt(head, note, "Body/13 Regular", "muted", "Note"); t.textAutoResize = "HEIGHT"; t.resize(640, t.height); }
  cp.appendChild(s); s.x = 1760; s.y = 0;
  return s;
}
/** Combine variant components into a set, lay it out, add to section. */
function makeSet(components, name, sectionFrame, cols, description) {
  for (const c of components) sectionFrame.appendChild(c);
  const set =figma.combineAsVariants(components, sectionFrame);
  const cat = G.category;
  set.name = (cat ? cat + "/" : "") + name;
  set.layoutMode = "HORIZONTAL"; set.layoutWrap = "WRAP";
  set.itemSpacing = 24; set.counterAxisSpacing = 24;
  set.paddingTop = set.paddingBottom = set.paddingLeft = set.paddingRight = 32;
  set.primaryAxisSizingMode = "FIXED"; set.counterAxisSizingMode = "AUTO";
  const widest = Math.max(...components.map((c) => c.width));
  set.resize(Math.max(320, 64 + cols * widest + (cols - 1) * 24), 100);
  set.counterAxisSizingMode = "AUTO";
  if (G.rowKey) {
    // Grid: one row per rowKey value (e.g. Variant), columns in creation order.
    const rows = new Map();
    for (const c of components) { const k = G.rowKey(c.name); if (!rows.has(k)) rows.set(k, []); rows.get(k).push(c); }
    set.layoutMode = "NONE";
    const colW = Math.max(...components.map((c) => c.width));
    let y = 32, maxX = 0;
    for (const list of rows.values()) {
      const h = Math.max(...list.map((c) => c.height));
      list.forEach((c, i) => { c.x = 32 + i * (colW + 24); c.y = y + (h - c.height) / 2; maxX = Math.max(maxX, c.x + c.width); });
      y += h + 24;
    }
    set.resize(maxX + 32, y + 8);
    G.rowKey = null;
  }
  set.fills = [solid("#ffffff")]; set.cornerRadius = 16;
  set.strokes = [solid("#e6e6e4")]; set.strokeWeight = 1; set.dashPattern = [];
  if (description) set.description = description;
  return set;
}
/** True when node sits inside a nested instance (those layers can't take property references). */
function inInstance(n, stop) { for (let p = n.parent; p && p !== stop; p = p.parent) if (p.type === "INSTANCE") return true; return false; }
/** Add component properties on a set and wire layers in every variant by layer name. */
function prop(set, name, type, def, layerName, field) {
  const key = set.addComponentProperty(name, type, def);
  for (const v of set.children) {
    const nodes = v.findAll((n) => n.name === layerName && !inInstance(n, v));
    for (const n of nodes) {
      const refs = { ...(n.componentPropertyReferences || {}) };
      refs[field] = key;
      n.componentPropertyReferences = refs;
    }
  }
  return key;
}
/** Give standalone components on a page the folder path "<Category>/<Name>". */
function folderNames(p) {
  for (const n of p.findAll((x) => (x.type === "COMPONENT" && x.parent.type !== "COMPONENT_SET") || x.type === "COMPONENT_SET"))
    if (!n.name.includes("/")) n.name = p.name + "/" + n.name;
}
async function findSet(_pageName, name) {
  const short = name.split("/").pop();
  for (const p of figma.root.children) { await p.loadAsync(); const n = p.findOne((x) => (x.type === "COMPONENT_SET" || (x.type === "COMPONENT" && x.parent.type !== "COMPONENT_SET")) && x.name.split("/").pop() === short); if (n) return n; }
  return null;
}
const GROUPS = { Primitives: ["Button","Icon button","Badge","Delta chip","Input","Search field","Select","Switch","Checkbox","Segmented control","Tabs","Avatar group"], Overlays: ["Tooltip","Dropdown menu","Dialog"], "Dashboard blocks": ["KPI card","Ranked list","Empty state","Data table"], Navigation: ["Sidebar navigation"], Charts: [] };
G.groupOf = (t) => Object.keys(GROUPS).find((g) => GROUPS[g].includes(t)) || "Components";
await tokens(); await textStyles(); await effectStyles();
