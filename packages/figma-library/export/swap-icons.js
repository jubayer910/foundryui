// Runs in the Figma Desktop Bridge. args: {sys, file, off, lim}
// Replaces every third-party icon instance on the "Foundry Library" page with a Foundry Icon component
// (built locally on a "Foundry Icons" page from our SVGs), keeping size and colour.
if (figma.root.name.toLowerCase() !== args.file.toLowerCase()) throw new Error("wrong file " + figma.root.name);
const MAP = await (await fetch("http://localhost:9231/data/" + args.sys + "/icon-map.json")).json();
let IP = figma.root.children.find((p) => p.name === "Foundry Icons");
if (!IP) { IP = figma.createPage(); IP.name = "Foundry Icons"; }
await figma.setCurrentPageAsync(IP);
const have = new Map(IP.children.filter((n) => n.type === "COMPONENT").map((c) => [c.name, c]));
let made = 0;
async function comp(entry) {
  const nm = "Foundry/" + entry.ours + "/" + entry.style;
  if (have.has(nm)) return have.get(nm);
  const f = figma.createNodeFromSvg(entry.svg);
  const c = figma.createComponentFromNode(f);
  c.name = nm; c.description = "Foundry Icons, " + entry.style + (entry.style === "brand" ? " (Simple Icons, CC0)" : "");
  c.fills = [];
  const i = have.size; c.x = (i % 30) * 40; c.y = Math.floor(i / 30) * 40;
  have.set(nm, c); made++;
  return c;
}
const LIB = figma.root.children.find((p) => p.name === "Foundry Library");
await figma.setCurrentPageAsync(LIB);
const VEC = /^(VECTOR|BOOLEAN_OPERATION|STAR|POLYGON|LINE|ELLIPSE)$/;
// args.templates: false = components, true = the Templates section (whole screens)
const secs = LIB.children.filter((sec) => sec.type === "SECTION" && (args.templates ? /\/ Templates$/.test(sec.name) : !/\/ Templates$/.test(sec.name)));
const t0 = Date.now(); let done = 0, skipped = 0; const err = [];
const found = await findIcons(secs);
const jobs = [];
for (const [n, i] of found) {
  if (jobs.length >= (args.max || 220)) break;
  const key = i.set + "|" + i.style + "|" + i.type;
  if (!MAP[key]) { err.push("nomap " + key); continue; }
  jobs.push([n, MAP[key], i.kind]);
}
// 2) make the Foundry components we need (one page switch)
await figma.setCurrentPageAsync(IP);
const comps = new Map();
for (const [, e] of jobs) if (!comps.has(e.ours + e.style)) comps.set(e.ours + e.style, await comp(e));
await figma.setCurrentPageAsync(LIB);
// fresh paints (no variable binding) with the opacity taken from the Foundry component, so soft layers stay soft
function recolor(inst, color, main) {
  const mv = main.findAll((x) => VEC.test(x.type)), iv = inst.findAll((x) => VEC.test(x.type));
  iv.forEach((v, i) => {
    const m = mv[i] || v;
    const fresh = (ps) => ps.filter((p) => p.type === "SOLID").map((p) => ({ type: "SOLID", color, opacity: p.opacity ?? 1, visible: p.visible !== false }));
    if (Array.isArray(m.fills) && m.fills.length) v.fills = fresh(m.fills);
    if (Array.isArray(m.strokes) && m.strokes.length) v.strokes = fresh(m.strokes);
  });
}
// 3) swap, keep size and colour
for (const [n, entry, kind] of jobs) {
  if (Date.now() - t0 > (args.budget || 25000)) break;
  try {
    let color = null;
    const vs = n.findAll((x) => VEC.test(x.type));
    for (const pass of [true, false]) {
      for (const v of vs) { for (const ps of [v.strokes, v.fills]) if (Array.isArray(ps)) for (const p of ps) if (p.visible !== false && p.type === "SOLID" && (!pass || ((v.opacity ?? 1) >= 0.99 && (p.opacity ?? 1) >= 0.99))) { color = p.color; break; } if (color) break; }
      if (color) break;
    }
    const w = n.width, h = n.height, vis = n.visible, op = n.opacity;
    const main = comps.get(entry.ours + entry.style);
    let target = n;
    if (kind === "frame") {
      const inst = main.createInstance();
      const parent = n.parent, idx = parent.children.indexOf(n);
      parent.insertChild(idx, inst);
      if ("layoutPositioning" in n) inst.layoutPositioning = n.layoutPositioning;
      inst.x = n.x; inst.y = n.y;
      if ("constraints" in n) inst.constraints = n.constraints;
      if ("layoutAlign" in n) inst.layoutAlign = n.layoutAlign;
      if ("layoutGrow" in n) inst.layoutGrow = n.layoutGrow;
      n.remove();
      target = inst;
    } else n.swapComponent(main);
    target.resize(w, h);
    target.visible = vis; target.opacity = op;
    target.name = "Icon/" + entry.ours;
    target.setPluginData("fu-icon", "1");
    if (color) recolor(target, color, main);
    done++;
  } catch (e) { err.push(n.id + ":" + String(e).slice(0, 80)); done++; }
  if (done % 25 === 0) await new Promise((r) => setTimeout(r, 0));
}
globalThis.__fuSwap = { sys: args.sys, templates: !!args.templates, jobs: jobs.length, swapped: done, err: err.slice(0, 6), ms: Date.now() - t0, finished: true };
globalThis.__fuSwap = { sys: args.sys, templates: !!args.templates, jobs: jobs.length, swapped: done, err: err.slice(0, 6), ms: Date.now() - t0 };
return { total: found.length, from: args.off, jobs: jobs.length, swapped: done, made, skipped, err: err.slice(0, 6), ms: Date.now() - t0 };
