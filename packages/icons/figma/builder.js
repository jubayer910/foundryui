// Foundry Icons builder — runs inside the Figma Desktop Bridge via new Function("args", code).
// args: { names: string[], page: string }  → builds one component set per icon on that page.
const API = "http://localhost:9230/?f=";
const STYLES = [
  ["stroke-rounded", "Stroke Rounded"], ["stroke-sharp", "Stroke Sharp"], ["solid", "Solid"],
  ["duotone", "Duotone"], ["twotone", "Twotone"], ["bulk", "Bulk"],
];
const g = globalThis.__fuIcons || (globalThis.__fuIcons = {});
if (!g.data) {
  g.data = {};
  for (const [k] of STYLES) g.data[k] = await (await fetch(API + k + ".json")).json();
}

// ---------- variables (created once) ----------
async function vars() {
  if (g.vars) return g.vars;
  const cols = await figma.variables.getLocalVariableCollectionsAsync();
  let col = cols.find((c) => c.name === "Foundry Icons");
  if (!col) col = figma.variables.createVariableCollection("Foundry Icons");
  const all = await figma.variables.getLocalVariablesAsync();
  const get = (name, type, value, scopes) => {
    let v = all.find((x) => x.name === name && x.variableCollectionId === col.id);
    if (!v) { v = figma.variables.createVariable(name, col, type); v.setValueForMode(col.modes[0].modeId, value); v.scopes = scopes; }
    return v;
  };
  const ink = { r: 0.055, g: 0.063, b: 0.078, a: 1 };
  g.vars = {
    primary: get("icon/primary", "COLOR", ink, ["SHAPE_FILL", "STROKE_COLOR"]),
    secondary: get("icon/secondary", "COLOR", ink, ["SHAPE_FILL", "STROKE_COLOR"]),
    stroke: get("icon/stroke", "FLOAT", 1.5, ["STROKE_FLOAT"]),
  };
  g.vars.primary.description = "Main icon colour. Change it to recolour every icon.";
  g.vars.secondary.description = "Second colour for Duotone, Twotone and Bulk (drawn at 20–40% opacity).";
  g.vars.stroke.description = "Stroke weight of Stroke styles (default 1.5).";
  return g.vars;
}

// ---------- page + grid ----------
async function grid(pageName) {
  let page = figma.root.children.find((p) => p.name === pageName);
  if (!page) { page = figma.createPage(); page.name = pageName; }
  await page.loadAsync();
  let frame = page.children.find((n) => n.type === "FRAME" && n.name === "Icons");
  if (!frame) {
    frame = figma.createFrame();
    frame.name = "Icons";
    frame.layoutMode = "HORIZONTAL";
    page.appendChild(frame);
    frame.layoutWrap = "WRAP";
    frame.primaryAxisSizingMode = "FIXED";
    frame.counterAxisSizingMode = "AUTO";
    frame.resize(1760, 100);
    frame.itemSpacing = 24; frame.counterAxisSpacing = 24;
    frame.paddingTop = frame.paddingBottom = frame.paddingLeft = frame.paddingRight = 40;
    frame.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.976 } }];
    frame.cornerRadius = 24;
    frame.x = 0; frame.y = 240;
  }
  return { page, frame };
}

// ---------- one style variant ----------
const SVG = (body) => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' + body + "</svg>";
const vecs = (x) => (x.type === "VECTOR" || x.type === "BOOLEAN_OPERATION" ? [x] : (x.children || []).flatMap(vecs));
const center = (b) => [b.x + b.width / 2, b.y + b.height / 2];

function solidFromMask(frame) {
  const mg = frame.children.find((c) => c.type === "GROUP" && c.children.some((k) => k.isMask));
  if (!mg) return;
  const keep = (node, src) => { const [cx, cy] = center(src.absoluteBoundingBox); frame.appendChild(node); const [nx, ny] = center(node.absoluteBoundingBox); node.x += cx - nx; node.y += cy - ny; return node; };
  const maskLayer = mg.children.find((k) => k.isMask);
  const base = [];
  for (const v of mg.children.filter((k) => !k.isMask).flatMap(vecs)) {
    if (v.fills.length) { const c = v.clone(); c.strokes = []; base.push(keep(c, v)); }
    if (v.strokes.length) { const o = v.outlineStroke(); if (o) base.push(keep(o, v)); }
  }
  const shape = base.length > 1 ? figma.union(base, frame) : base[0];
  const cut = [];
  for (const v of vecs(maskLayer)) if (v.strokes.length) { const o = v.outlineStroke(); if (o) cut.push(keep(o, v)); }
  mg.remove();
  const res = cut.length ? figma.subtract([shape, ...cut], frame) : shape;
  res.name = "Shape";
  res.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  frame.insertChild(0, res);
}

function ungroupAll(node) {
  let again = true;
  while (again) {
    again = false;
    for (const c of [...node.children]) if (c.type === "GROUP" && !c.children.some((k) => k.isMask)) { figma.ungroup(c); again = true; }
  }
}

function bind(node, v) {
  for (const n of vecs(node).concat(node.findAll ? node.findAll((x) => x.type === "VECTOR" || x.type === "BOOLEAN_OPERATION") : [])) {
    if (n.__done) continue;
    const role = (paints) => (paints.some((p) => p.opacity !== undefined && p.opacity < 0.99) ? "secondary" : "primary");
    if (n.fills && n.fills.length) {
      const r = role(n.fills);
      const ops = n.fills.map((p) => p.opacity ?? 1);
      n.fills = n.fills.map((p) => figma.variables.setBoundVariableForPaint(p, "color", v[r]));
      n.fills = n.fills.map((p, i) => ({ ...p, opacity: ops[i] })); // binding resets opacity: re-apply
      if (n.name === "Vector") n.name = r === "secondary" ? "Secondary" : "Shape";
    }
    if (n.strokes && n.strokes.length) {
      const r = role(n.strokes);
      const sops = n.strokes.map((p) => p.opacity ?? 1);
      n.strokes = n.strokes.map((p) => figma.variables.setBoundVariableForPaint(p, "color", v[r]));
      n.strokes = n.strokes.map((p, i) => ({ ...p, opacity: sops[i] }));
      if (Math.abs(n.strokeWeight - 1.5) < 0.01) n.setBoundVariable("strokeWeight", v.stroke);
      if (n.name === "Vector") n.name = r === "secondary" ? "Secondary" : "Stroke";
    }
    n.constraints = { horizontal: "SCALE", vertical: "SCALE" };
  }
}

async function variant(name, key, label, v) {
  let frame;
  try {
    frame = figma.createNodeFromSvg(SVG(g.data[key][name]));
  } catch (e) {
    (g.fallbacks = g.fallbacks || []).push(name + "/" + key);
    frame = figma.createNodeFromSvg(SVG(g.data["stroke-rounded"][name]));
  }
  if (key === "solid") {
    try { solidFromMask(frame); } catch (e) { (g.fallbacks = g.fallbacks || []).push(name + "/solid-boolean"); }
  }
  ungroupAll(frame);
  const comp = figma.createComponent();
  comp.resize(24, 24);
  comp.name = "Style=" + label;
  comp.fills = [];
  comp.clipsContent = false;
  for (const c of [...frame.children]) { const x = c.x, y = c.y; comp.appendChild(c); c.x = x; c.y = y; }
  frame.remove();
  bind(comp, v);
  return comp;
}

// ---------- build ----------
if (!g.index) g.index = await (await fetch(API + "index.json")).json();
if (args.category) {
  const list = g.index.filter((i) => i.c === args.category);
  args.names = list.slice(args.offset || 0, (args.offset || 0) + (args.limit || 60)).map((i) => i.n);
  args.page = args.page || "Icons · " + args.category;
  args.meta = Object.fromEntries(list.map((i) => [i.n, i.t.join(", ")]));
}
const t0 = Date.now();
const v = await vars();
const { page, frame } = await grid(args.page);
const existing = new Set(frame.children.map((c) => c.name));
const made = [], skipped = [], failed = [];
for (const name of args.names) {
  if (existing.has(name)) { skipped.push(name); continue; }
  if (made.length % 10 === 0) await new Promise((r) => setTimeout(r, 0)); // yield so the bridge heartbeat stays alive
  try {
    const comps = [];
    for (const [key, label] of STYLES) comps.push(await variant(name, key, label, v));
    for (const c of comps) page.appendChild(c);
    const set = figma.combineAsVariants(comps, page);
    set.name = name;
    set.layoutMode = "HORIZONTAL";
    set.itemSpacing = 16;
    set.paddingTop = set.paddingBottom = set.paddingLeft = set.paddingRight = 16;
    set.primaryAxisSizingMode = "AUTO"; set.counterAxisSizingMode = "AUTO";
    set.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    set.cornerRadius = 12;
    set.description = (args.meta && args.meta[name]) || "";
    frame.appendChild(set);
    made.push(set.id);
  } catch (e) {
    failed.push(name + ": " + ((e && e.message) || e));
  }
}
return { page: page.name, made: made.length, skipped: skipped.length, failed, first: made[0], ms: Date.now() - t0, total: args.category ? g.index.filter((i) => i.c === args.category).length : undefined };
