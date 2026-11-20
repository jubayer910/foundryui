// Runs inside Figma (the official Figma MCP `use_figma`, or any plugin context). Prepended to every step that
// get_figma_design returns. Builds real, editable layers from the serialized tree (serialize.js schema):
// auto layout, text with its fonts, fills, strokes, radii, effects, drawings as vectors, Ingot icons as vectors.
// A step is: STEP = { id, name, path, nodes, icons, last } — `path` is the child-index path of the parent
// inside the root (null for the first step, which creates the root on the current page).
const H = (h) => { const n = parseInt(h.slice(1), 16); return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 }; };
const FONTS = {};
async function font(ff, fw, it) {
  const key = ff + "|" + fw + "|" + (it ? 1 : 0);
  if (FONTS[key]) return FONTS[key];
  if (!FONTS._list) FONTS._list = await figma.listAvailableFontsAsync();
  const W = { 100: ["Thin"], 200: ["ExtraLight", "Extra Light"], 300: ["Light"], 400: ["Regular"], 500: ["Medium"], 600: ["SemiBold", "Semi Bold"], 700: ["Bold"], 800: ["ExtraBold", "Extra Bold"], 900: ["Black"] };
  const want = (W[Math.round((fw || 400) / 100) * 100] || ["Regular"]).map((s) => (it ? (s === "Regular" ? "Italic" : s + " Italic") : s));
  const fam = FONTS._list.filter((f) => f.fontName.family === ff);
  const pick = (fam.find((f) => want.includes(f.fontName.style)) || fam.find((f) => f.fontName.style === "Regular") || null);
  let fn = pick ? pick.fontName : { family: "Inter", style: want[0].replace("SemiBold", "Semi Bold").replace("ExtraBold", "Extra Bold") };
  try { await figma.loadFontAsync(fn); } catch (e) { fn = { family: "Inter", style: "Regular" }; await figma.loadFontAsync(fn); }
  FONTS[key] = fn;
  return fn;
}
function paint(p) {
  if (p.k === "s") return { type: "SOLID", color: H(p.c), opacity: p.a ?? 1 };
  if (p.k === "l" || p.k === "r") return { type: p.k === "l" ? "GRADIENT_LINEAR" : "GRADIENT_RADIAL", gradientTransform: p.gt, opacity: p.a ?? 1, gradientStops: p.st.map(([c, a, pos]) => ({ color: { ...H(c), a }, position: pos })) };
  // pictures are not copied: a neutral placeholder keeps the layout
  if (p.k === "i") return { type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.91 } };
  return null;
}
const paints = (ps) => (ps || []).map(paint).filter(Boolean);
function boxProps(f, o) {
  if (o.f) f.fills = paints(o.f); else f.fills = [];
  if (o.s) {
    f.strokes = paints(o.s);
    if (Array.isArray(o.sw)) { [f.strokeTopWeight, f.strokeRightWeight, f.strokeBottomWeight, f.strokeLeftWeight] = o.sw; } else if (o.sw !== undefined) f.strokeWeight = o.sw;
    if (o.sa) f.strokeAlign = o.sa;
    if (o.dash) f.dashPattern = o.dash;
  }
  if (Array.isArray(o.r)) { [f.topLeftRadius, f.topRightRadius, f.bottomRightRadius, f.bottomLeftRadius] = o.r; } else if (o.r) f.cornerRadius = o.r;
  if (o.fx) f.effects = o.fx.map((e) => (e[0] === "LAYER_BLUR" || e[0] === "BACKGROUND_BLUR" ? { type: e[0], radius: e[1], visible: true } : { type: e[0], offset: { x: e[1], y: e[2] }, radius: e[3], spread: e[4], color: { ...H(e[5]), a: e[6] }, visible: true, blendMode: "NORMAL" }));
  if (o.clip) f.clipsContent = true; else if ("clipsContent" in f) f.clipsContent = false;
}
function layout(f, o) {
  if (!o.lm) return;
  f.layoutMode = o.lm === "H" ? "HORIZONTAL" : "VERTICAL";
  [f.paddingTop, f.paddingRight, f.paddingBottom, f.paddingLeft] = o.pad;
  f.itemSpacing = o.gap;
  if (o.pa) f.primaryAxisAlignItems = o.pa;
  if (o.ca) f.counterAxisAlignItems = o.ca;
  if (o.wrap) { f.layoutWrap = "WRAP"; if (o.cgap !== undefined) f.counterAxisSpacing = o.cgap; }
  if (o.sil) f.strokesIncludedInLayout = true;
}
function sizing(n, o, parent) {
  const auto = parent && "layoutMode" in parent && parent.layoutMode !== "NONE";
  if (auto && o.abs) n.layoutPositioning = "ABSOLUTE";
  if (!auto || o.abs) { n.x = o.x || 0; n.y = o.y || 0; }
  if (auto && !o.abs && o.sh) { try { n.layoutSizingHorizontal = o.sh; } catch (e) {} try { n.layoutSizingVertical = o.sv; } catch (e) {} }
  if (n.type === "FRAME" && o.lm) { try { n.primaryAxisSizingMode = o.psm || "FIXED"; n.counterAxisSizingMode = o.csm || "FIXED"; } catch (e) {} }
}
async function text(o) {
  const t = figma.createText();
  const segs = o.seg || [];
  const first = segs[0] || { ff: "Inter", fw: 400 };
  t.fontName = await font(first.ff, first.fw, first.it);
  t.characters = segs.map((s) => s.c).join("") || " ";
  let i = 0;
  for (const s of segs) {
    const j = i + s.c.length;
    if (j > i) {
      t.setRangeFontName(i, j, await font(s.ff, s.fw, s.it));
      t.setRangeFontSize(i, j, s.fs);
      if (s.f) { const p = paint(s.f); if (p) t.setRangeFills(i, j, [p]); }
      if (s.lh !== undefined) t.setRangeLineHeight(i, j, typeof s.lh === "number" ? { unit: "PIXELS", value: s.lh } : { unit: "PERCENT", value: parseFloat(s.lh) });
      if (s.ls !== undefined) t.setRangeLetterSpacing(i, j, typeof s.ls === "number" ? { unit: "PIXELS", value: s.ls } : { unit: "PERCENT", value: parseFloat(s.ls) });
      if (s.td) t.setRangeTextDecoration(i, j, s.td);
      if (s.tc) t.setRangeTextCase(i, j, s.tc);
    }
    i = j;
  }
  if (o.ta) t.textAlignHorizontal = o.ta;
  if (o.tv) t.textAlignVertical = o.tv;
  t.textAutoResize = o.ar === "WIDTH_AND_HEIGHT" ? "WIDTH_AND_HEIGHT" : "NONE";
  if (o.ar !== "WIDTH_AND_HEIGHT") t.resize(Math.max(o.w, 1), Math.max(o.h, 1));
  if (o.ar === "HEIGHT") t.textAutoResize = "HEIGHT";
  // text box trim (cap height): the source saved a single line shorter than its line height
  const lhPx = typeof first.lh === "number" ? first.lh : first.lh ? (first.fs * parseFloat(first.lh)) / 100 : first.fs * 1.2;
  if (first.fs && o.h > 0 && !t.characters.includes("\n") && o.h < lhPx * 0.8) { try { t.leadingTrim = "CAP_HEIGHT"; } catch (e) {} }
  if (o.ar === "TRUNCATE" || o.trunc) { try { t.textTruncation = "ENDING"; } catch (e) {} }
  return t;
}
function svgNode(svg, o, color) {
  const s = color ? svg.replace(/#000000/g, color) : svg;
  const n = figma.createNodeFromSvg(s);
  n.name = o.n;
  if (Math.abs(n.width - o.w) > 0.01 || Math.abs(n.height - o.h) > 0.01) n.resize(Math.max(o.w, 0.01), Math.max(o.h, 0.01));
  // hairlines (dividers) are drawn as a stroke-shaped path just outside a 0-wide box: never clip them away
  if (o.w < 1 || o.h < 1) n.clipsContent = false;
  return n;
}
async function build(o, parent, icons) {
  let n;
  if (o.icon) {
    const svg = icons[(o.icon || "") + "|" + (o.istyle || "")] || icons[o.icon + "|"];
    n = svg ? svgNode(svg, o, o.ic) : figma.createFrame();
    if (!svg) { n.resize(o.w, o.h); n.fills = []; }
    // house rule: every stroke icon renders at exactly 1.5px, whatever size it is drawn at
    if (svg && !/solid|bulk|brand/.test(o.istyle || "")) for (const v of n.findAll((x) => x.type === "VECTOR")) if (v.strokes.length) v.strokeWeight = 1.5;
    n.name = "Icon/" + o.icon;
  } else if (o.svg) n = svgNode(o.svg, o);
  else if (o.t === "TEXT") n = await text(o);
  else {
    n = figma.createFrame();
    n.resize(Math.max(o.w, 0.01), Math.max(o.h, 0.01));
    boxProps(n, o);
    layout(n, o);
  }
  if (!o.icon) n.name = o.n;
  if (o.op !== undefined) n.opacity = o.op;
  if (o.rot) n.rotation = o.rot;
  if (parent) parent.appendChild(n);
  sizing(n, o, parent);
  if (o.t !== "TEXT" && n.type === "FRAME" && !o.icon) {
    if (!o.lm || o.psm === "FIXED") n.resize(Math.max(o.w, 0.01), Math.max(o.h, 0.01));
    for (const c of o.k || []) await build(c, n, icons);
    if (o.lm) { try { n.primaryAxisSizingMode = o.psm || "FIXED"; n.counterAxisSizingMode = o.csm || "FIXED"; } catch (e) {} if ((o.psm || "FIXED") === "FIXED" && (o.csm || "FIXED") === "FIXED") n.resize(Math.max(o.w, 0.01), Math.max(o.h, 0.01)); }
  }
  return n;
}
async function runStep(S) {
  const tag = "Ingot UI · " + S.name + " · building " + S.id;
  if (!S.path) {
    // first step: the root, placed to the right of everything on the page, without its children
    const root = await build({ ...S.nodes[0], k: [] }, null, S.icons);
    root.name = tag;
    const right = figma.currentPage.children.filter((c) => c !== root).reduce((m, c) => Math.max(m, c.x + c.width), 0);
    root.x = Math.round(right + 160); root.y = 0;
    for (const c of S.nodes[0].k || []) await build(c, root, S.icons);
    if (S.nodes[0].lm) { root.primaryAxisSizingMode = S.nodes[0].psm || "FIXED"; root.counterAxisSizingMode = S.nodes[0].csm || "FIXED"; }
    if (S.last) root.name = "Ingot UI · " + S.name;
    return { root: root.id, done: !!S.last };
  }
  const root = figma.currentPage.findOne((n) => n.name === tag);
  if (!root) throw new Error("Run the earlier steps of this design first, on the same page.");
  let p = root; for (const i of S.path) p = p.children[i];
  for (const c of S.nodes) await build(c, p, S.icons);
  if (S.last) { root.name = "Ingot UI · " + S.name; figma.viewport.scrollAndZoomIntoView([root]); }
  return { root: root.id, done: !!S.last };
}
