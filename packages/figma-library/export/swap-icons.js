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
// components only: the Templates section holds whole dashboard screens, which stay as designed for now
const all = [];
for (const sec of LIB.children) if (sec.type === "SECTION" && !/\/ Templates$/.test(sec.name)) all.push(...sec.findAll((n) => n.type === "INSTANCE" && /^icon\//i.test(n.name)));
const t0 = Date.now(); let done = 0, skipped = 0; const err = [];
// 1) read what each instance is
const jobs = [];
for (const n of all.slice(args.off, args.off + args.lim)) {
  const mc = await n.getMainComponentAsync();
  if (mc && /^Foundry\//.test(mc.name)) { skipped++; continue; }
  const set = mc && mc.parent && mc.parent.type === "COMPONENT_SET" ? mc.parent.name : n.name.replace(/^icon\//i, "");
  const m = ((mc && mc.name) || "").match(/Style=([A-Za-z]+)(?:, Type=([A-Za-z]+))?/);
  const key = set + "|" + (m ? m[1] : "Stroke") + "|" + (m && m[2] ? m[2] : "Rounded");
  if (!MAP[key]) { err.push("nomap " + key); continue; }
  jobs.push([n, MAP[key]]);
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
for (const [n, entry] of jobs) {
  if (Date.now() - t0 > 25000) break;
  try {
    let color = null;
    const vs = n.findAll((x) => VEC.test(x.type));
    for (const pass of [true, false]) {
      for (const v of vs) { for (const ps of [v.strokes, v.fills]) if (Array.isArray(ps)) for (const p of ps) if (p.visible !== false && p.type === "SOLID" && (!pass || ((v.opacity ?? 1) >= 0.99 && (p.opacity ?? 1) >= 0.99))) { color = p.color; break; } if (color) break; }
      if (color) break;
    }
    const w = n.width, h = n.height, vis = n.visible, op = n.opacity;
    n.swapComponent(comps.get(entry.ours + entry.style));
    n.resize(w, h);
    n.visible = vis; n.opacity = op;
    n.name = "Icon/" + entry.ours;
    if (color) recolor(n, color, comps.get(entry.ours + entry.style));
    done++;
  } catch (e) { err.push(n.id + ":" + String(e).slice(0, 80)); done++; }
  if (done % 25 === 0) await new Promise((r) => setTimeout(r, 0));
}
return { total: all.length, from: args.off, jobs: jobs.length, swapped: done, made, skipped, err: err.slice(0, 6), ms: Date.now() - t0 };
