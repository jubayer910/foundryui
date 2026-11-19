// Serialized tree (serialize.js) -> ready-to-run Figma steps for get_figma_design (MCP).
// Each step is one plain-JS program for the official Figma MCP `use_figma` tool (50,000 character limit):
// the runtime (figma-runtime.js) followed by `return await runStep({...})`. Big designs are split: the first
// step creates the root and as many children as fit, later steps append the rest by child-index path; a child
// too big for one step becomes an empty shell whose own children come in later steps.
//   import { figmaSteps } from "./figma-steps.mjs"; figmaSteps(tree, { name, id }) -> string[]
import { readFileSync } from "node:fs";
import * as SI from "simple-icons";

const LIMIT = 47000;
export const RUNTIME = readFileSync(new URL("./figma-runtime.js", import.meta.url), "utf8")
  .split("\n").filter((l) => !/^\s*\/\//.test(l)).map((l) => l.trim()).filter(Boolean).join("\n");
const ICONS_DIR = new URL("../../../apps/web/public/icons/", import.meta.url);
const bodies = {};
const body = (style, name) => {
  try { return (bodies[style] ||= JSON.parse(readFileSync(new URL(style + ".json", ICONS_DIR), "utf8")))[name]; } catch { return undefined; }
};
const STYLE = { brand: null, Stroke: "stroke-rounded" };

/** Ingot icon SVG (24 px, black, recoloured at build time) for an icon node. */
function iconSvg(o) {
  // brand logos come from Simple Icons (CC0), like the icon swap in the Figma files
  if (o.istyle === "brand") {
    const slug = String(o.icon).replace(/^brand-/, "");
    const si = Object.values(SI).find((x) => x && x.slug === slug);
    return si ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="${si.path}" fill="#000000"/></svg>` : null;
  }
  const st = (o.istyle && STYLE[o.istyle] !== undefined ? STYLE[o.istyle] : o.istyle) || (o.fill ? "solid" : "stroke-rounded");
  const b = body(st, o.icon) || body("stroke-rounded", o.icon);
  if (!b) return null;
  // Figma does not scale strokes when a vector is resized: draw at the final size so the stroke stays as designed
  const sw = o.isw ? Math.round(((o.isw * 24) / Math.max(o.w, 1)) * 100) / 100 : null;
  const inner = sw ? b.replace(/stroke-width="[\d.]+"/g, `stroke-width="${sw}"`) : b;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">${inner.replace(/currentColor/g, "#000000")}</svg>`;
}
function collectIcons(nodes, out = {}) {
  for (const n of nodes) {
    if (n.icon) { const k = n.icon + "|" + (n.istyle || ""); if (!(k in out)) { const s = iconSvg(n); if (s) out[k] = s; } }
    if (n.k) collectIcons(n.k, out);
  }
  return out;
}
const size = (x) => JSON.stringify(x).length;
const shell = (n) => { const { k, ...rest } = n; return rest; };

// A drawing bigger than one step (dense charts, attack graphs) becomes an empty frame holding several vector
// pieces of the same size: each piece keeps the SVG header and defs plus a run of its elements, so they stack
// exactly where the one drawing was.
function splitDrawing(o, budget) {
  const m = o.svg.match(/^(<svg[^>]*>)(<defs>[\s\S]*?<\/defs>)?([\s\S]*)<\/svg>$/);
  if (!m) return o;
  const [, head, defs = "", body] = m;
  const parts = body.match(/<g\b[^>]*>[\s\S]*?<\/g>|<path\b[^>]*\/>|<[a-z]+\b[^>]*\/>/g) || [];
  const room = budget - head.length - defs.length - 400;
  const pieces = []; let cur = "";
  // one huge path (a dot grid is thousands of subpaths in one d): cut its d at subpath starts into several paths
  const cut = (p) => {
    const pm = p.length > room && p.match(/^(<path\b[^>]*?\sd=")([^"]*)("[^>]*\/>)$/);
    if (!pm) return [p];
    const subs = pm[2].split(/(?=M)/), out = []; let d = "";
    for (const sp of subs) { if (d && d.length + sp.length > room - pm[1].length - pm[3].length) { out.push(pm[1] + d + pm[3]); d = ""; } d += sp; }
    if (d) out.push(pm[1] + d + pm[3]);
    return out;
  };
  for (const p of parts.flatMap(cut)) { if (cur && cur.length + p.length > room) { pieces.push(cur); cur = ""; } cur += p; }
  if (cur) pieces.push(cur);
  if (pieces.length < 2) return o;
  const { svg, ...rest } = o;
  return { ...rest, t: "FRAME", k: pieces.map((p, i) => ({ t: "VECTOR", n: o.n + " " + (i + 1), w: o.w, h: o.h, x: 0, y: 0, svg: head + defs + p + "</svg>" })) };
}
function splitDrawings(o, budget) {
  if (o.svg && JSON.stringify(o).length > budget * 0.8) return splitDrawing(o, budget * 0.8);
  if (o.k) o.k = o.k.map((c) => splitDrawings(c, budget));
  return o;
}

export function figmaSteps(tree, { name, id, budget: forced, raw }) {
  const steps = [];
  const budget = forced || LIMIT - RUNTIME.length - 600;
  tree = splitDrawings(structuredClone(tree), budget);
  const emit = (path, nodes) => steps.push({ id, name, path: [...path], nodes, icons: collectIcons(nodes) });
  // pack the children of `node` (found at `path`) into steps; recurse into any child that does not fit
  function pack(node, path, startWith) {
    let batch = startWith ? [] : null;
    const flush = () => { if (batch && batch.length) emit(path, batch); batch = []; };
    if (!batch) batch = [];
    const kids = node.k || [];
    const deferred = [];
    kids.forEach((c, i) => {
      const s = size(c) + size(collectIcons([c]));
      if (s > budget) { flush(); emit(path, [shell(c)]); deferred.push([c, [...path, i]]); return; }
      if (size(batch) + s > budget) flush();
      batch.push(c);
    });
    flush();
    for (const [c, p] of deferred) pack(c, p);
  }
  // first step: the root with as many leading children as fit
  const root = shell(tree), first = [];
  let used = size(root);
  const kids = tree.k || [];
  let i = 0;
  for (; i < kids.length; i++) { const s = size(kids[i]) + size(collectIcons([kids[i]])); if (used + s > budget) break; first.push(kids[i]); used += s; }
  steps.push({ id, name, path: null, nodes: [{ ...root, k: first }], icons: collectIcons(first) });
  if (i < kids.length) {
    const rest = { k: kids.slice(i) };
    // children after the first step keep their real index in the root
    const startSteps = steps.length;
    pack(rest, [], true);
    for (const s of steps.slice(startSteps)) if (s.path && s.path.length) s.path[0] += i;
  }
  steps[steps.length - 1].last = true;
  if (raw) return steps;
  return steps.map((s) => RUNTIME + "\nreturn await runStep(" + JSON.stringify(s) + ");");
}
