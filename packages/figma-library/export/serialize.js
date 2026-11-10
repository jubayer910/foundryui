// Runs inside the Figma Desktop Bridge (via new Function). args: {sys, file, off, lim}
// For each Foundry Library component: posts a compact node tree (/node) and a 1x PNG (/png) to the local receiver.
if (figma.root.name.toLowerCase() !== args.file.toLowerCase()) throw new Error("wrong file " + figma.root.name);
const P = figma.root.children.find((p) => p.name === "Foundry Library");
await figma.setCurrentPageAsync(P);
const L = [];
for (const s of P.children) if (s.type === "SECTION" && !/\/ (Templates)$/.test(s.name)) for (const c of s.children) if (c.type === "COMPONENT" || c.type === "COMPONENT_SET") L.push(c);
const U = "http://localhost:9231";
const hex = (c) => "#" + [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
const r2 = (v) => Math.round(v * 100) / 100;
const paint = (p) => {
  if (p.visible === false) return null;
  if (p.type === "SOLID") return { k: "s", c: hex(p.color), a: r2(p.opacity ?? 1) };
  if (p.type === "GRADIENT_LINEAR" || p.type === "GRADIENT_RADIAL") {
    const t = p.gradientTransform; const ang = Math.round((Math.atan2(t[1][0], t[0][0]) * 180) / Math.PI);
    return { k: p.type === "GRADIENT_LINEAR" ? "l" : "r", ang, gt: t.map((row) => row.map((v) => Math.round(v * 10000) / 10000)), a: r2(p.opacity ?? 1), st: p.gradientStops.map((s) => [hex(s.color), r2(s.color.a), r2(s.position)]) };
  }
  if (p.type === "IMAGE") return { k: "i" };
  return null;
};
const paints = (ps) => (Array.isArray(ps) ? ps.map(paint).filter(Boolean) : []);
const VEC = /^(VECTOR|BOOLEAN_OPERATION|STAR|POLYGON|LINE|ELLIPSE)$/;
// inside a drawing group, rectangles are shapes too (chart bars, masks)
const SHAPE = /^(VECTOR|BOOLEAN_OPERATION|STAR|POLYGON|LINE|ELLIPSE|RECTANGLE)$/;
const paintsOn = (n) => ["fills", "strokes"].some((k) => Array.isArray(n[k]) && n[k].some((p) => p.visible !== false)) || (n.effects && n.effects.length);
// a pure drawing: only vectors inside, no own paint, and no icon instances (those map to Foundry Icons)
const allVec = (n) => "children" in n && n.children.length > 0 && !/^icon\//i.test(n.name) && n.children.every((c) => (SHAPE.test(c.type) && !/^icon\//i.test(c.name)) || (!paintsOn(c) && allVec(c))) && n.findAll((x) => VEC.test(x.type) || x.isMask).length > 0;

// ---- vector geometry -> SVG ----
const inv = (m) => { const [[a, c, e], [b, d, f]] = m; const det = a * d - b * c || 1; return [[d / det, -c / det, (c * f - d * e) / det], [-b / det, a / det, (b * e - a * f) / det]]; };
const mul = (m, n2) => [[m[0][0] * n2[0][0] + m[0][1] * n2[1][0], m[0][0] * n2[0][1] + m[0][1] * n2[1][1], m[0][0] * n2[0][2] + m[0][1] * n2[1][2] + m[0][2]], [m[1][0] * n2[0][0] + m[1][1] * n2[1][0], m[1][0] * n2[0][1] + m[1][1] * n2[1][1], m[1][0] * n2[0][2] + m[1][1] * n2[1][2] + m[1][2]]];
const colOf_unused = (ps) => { if (!Array.isArray(ps)) return null; for (const p of ps) { if (p.visible === false) continue; if (p.type === "SOLID") return { c: hex(p.color), a: p.opacity ?? 1 }; if (p.type.startsWith("GRADIENT")) { const st = p.gradientStops[Math.floor(p.gradientStops.length / 2)]; return { c: hex(st.color), a: (st.color.a ?? 1) * (p.opacity ?? 1) }; } } return null; };
let GID = 0;
function gradDef(p, w, h, defs) {
  const t = p.gradientTransform; const [[a, b, c], [d, e, f]] = t; const det = a * e - b * d || 1;
  const ia = e / det, ib = -b / det, id = -d / det, ie = a / det, ic = -(ia * c + ib * f), iff = -(id * c + ie * f);
  const pt = (u, v) => [(ia * u + ib * v + ic) * w, (id * u + ie * v + iff) * h];
  const gid = "g" + (++GID) + "_" + Date.now().toString(36).slice(-4);
  const stops = p.gradientStops.map((s) => `<stop offset="${Math.round(s.position * 1000) / 1000}" stop-color="${hex(s.color)}"${s.color.a < 1 ? ` stop-opacity="${Math.round(s.color.a * (p.opacity ?? 1) * 1000) / 1000}"` : (p.opacity ?? 1) < 1 ? ` stop-opacity="${p.opacity}"` : ""}/>`).join("");
  if (p.type === "GRADIENT_LINEAR") {
    const [x1, y1] = pt(0, 0.5), [x2, y2] = pt(1, 0.5);
    defs.push(`<linearGradient id="${gid}" gradientUnits="userSpaceOnUse" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}">${stops}</linearGradient>`);
  } else {
    const [cx, cy] = pt(0.5, 0.5), [rx, ry] = pt(1, 0.5);
    defs.push(`<radialGradient id="${gid}" gradientUnits="userSpaceOnUse" cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${Math.hypot(rx - cx, ry - cy).toFixed(2)}">${stops}</radialGradient>`);
  }
  return `url(#${gid})`;
}
function paintAttr(ps, w, h, defs) {
  if (!Array.isArray(ps)) return null;
  for (const p of ps) {
    if (p.visible === false) continue;
    if (p.type === "SOLID") { const a = p.opacity ?? 1; return `="${hex(p.color)}"` + (a < 1 ? `|${Math.round(a * 100) / 100}` : ""); }
    if (p.type === "GRADIENT_LINEAR" || p.type === "GRADIENT_RADIAL") return `="${gradDef(p, w, h, defs)}"`;
  }
  return null;
}
function shapes(n, rootInv, out, defs) {
  if (n.visible === false) return;
  if ("fillGeometry" in n && SHAPE.test(n.type)) {
    const m = mul(rootInv, n.absoluteTransform);
    const tr = `matrix(${[m[0][0], m[1][0], m[0][1], m[1][1], m[0][2], m[1][2]].map((v) => Math.round(v * 1000) / 1000).join(" ")})`;
    const op = n.opacity !== undefined && n.opacity < 1 ? ` opacity="${Math.round(n.opacity * 100) / 100}"` : "";
    const put = (geo, paint) => {
      const [val, alpha] = paint.split("|");
      for (const g of geo) out.push(`<path transform="${tr}" d="${g.data}" fill${val}${alpha ? ` fill-opacity="${alpha}"` : ""}${g.windingRule === "EVENODD" ? ' fill-rule="evenodd"' : ""}${op}/>`);
    };
    const f = paintAttr(n.fills, n.width, n.height, defs), k = paintAttr(n.strokes, n.width, n.height, defs);
    if (f) put(n.fillGeometry, f);
    if (k && n.dashPattern && n.dashPattern.length && n.strokeWeight !== figma.mixed) {
      // dashed strokes: Figma's stroke geometry ignores dashes, so draw the centre line with a real dash array
      const [val, alpha] = k.split("|");
      const ds = n.type === "LINE" ? [{ data: `M0 0L${n.width} 0` }] : n.vectorPaths || [];
      for (const g of ds) out.push(`<path transform="${tr}" d="${g.data}" fill="none" stroke${val}${alpha ? ` stroke-opacity="${alpha}"` : ""} stroke-width="${n.strokeWeight}" stroke-dasharray="${n.dashPattern.join(" ")}" stroke-linecap="${String(n.strokeCap || "NONE") === "ROUND" ? "round" : "butt"}"${op}/>`);
    } else if (k && n.strokeGeometry) put(n.strokeGeometry, k);
    return;
  }
  if ("children" in n) {
    // Figma masks: a child with isMask clips every later sibling in the same parent
    let clipId = null, group = null;
    for (const c of n.children) {
      if (c.visible === false) continue;
      if (c.isMask && "fillGeometry" in c) {
        const m = mul(rootInv, c.absoluteTransform);
        const tr = `matrix(${[m[0][0], m[1][0], m[0][1], m[1][1], m[0][2], m[1][2]].map((v) => Math.round(v * 1000) / 1000).join(" ")})`;
        clipId = "m" + (++GID) + "_" + Date.now().toString(36).slice(-4);
        defs.push(`<clipPath id="${clipId}">${c.fillGeometry.map((g) => `<path transform="${tr}" d="${g.data}"${g.windingRule === "EVENODD" ? ' clip-rule="evenodd"' : ""}/>`).join("")}</clipPath>`);
        group = [];
        out.push({ clip: clipId, items: group });
        continue;
      }
      shapes(c, rootInv, group || out, defs);
    }
  }
}
const flat = (arr) => arr.map((x) => (typeof x === "string" ? x : `<g clip-path="url(#${x.clip})">${flat(x.items)}</g>`)).join("");
function svgOf(n) {
  const out = [], defs = [];
  shapes(n, inv(n.absoluteTransform), out, defs);
  if (!out.length) return null;
  const w = Math.max(n.width, 0.01), h = Math.max(n.height, 0.01);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${Math.round(w * 100) / 100}" height="${Math.round(h * 100) / 100}" viewBox="0 0 ${Math.round(w * 100) / 100} ${Math.round(h * 100) / 100}" fill="none" overflow="visible">${defs.length ? "<defs>" + defs.join("") + "</defs>" : ""}${flat(out)}</svg>`;
}
async function ser(n, parent) {
  if (n.visible === false) return null;
  const o = { t: n.type, n: n.name, w: r2(n.width), h: r2(n.height) };
  if (parent) { o.x = r2(n.absoluteTransform[0][2] - parent.absoluteTransform[0][2]); o.y = r2(n.absoluteTransform[1][2] - parent.absoluteTransform[1][2]); }
  if (n.opacity !== undefined && n.opacity < 1) o.op = r2(n.opacity);
  if (n.rotation) o.rot = r2(n.rotation);
  // icons: record name, size and colour only (the converter swaps in Foundry Icons; third-party icon drawings are never copied)
  if (/^icon\//i.test(n.name)) {
    o.icon = n.name.replace(/^icon\//i, "").replace(/^Icon\//, "").replace(/ · \d+$/, "");
    // swapped Foundry Icons carry their exact name and style in the main component: Foundry/<name>/<style>
    try { const mc = n.type === "INSTANCE" ? await n.getMainComponentAsync() : null; const fm = mc && mc.name.match(/^Foundry\/([^/]+)\/([^/]+)$/); if (fm) { o.icon = fm[1]; o.istyle = fm[2]; } } catch (e) {}
    const v = "findAll" in n ? n.findAll((x) => VEC.test(x.type)) : [n];
    const col = (x) => { for (const ps of [x.strokes, x.fills]) if (Array.isArray(ps)) for (const p of ps) if (p.visible !== false && p.type === "SOLID") return hex(p.color); return null; };
    for (const x of v) { const c = col(x); if (c) { o.ic = c; break; } }
    if (v.some((x) => x.opacity < 1 || (Array.isArray(x.fills) && x.fills.some((p) => p.visible !== false && (p.opacity ?? 1) < 1)))) o.duo = 1;
    // filled glyphs (solid shapes) vs outlined glyphs (strokes)
    const filled = v.filter((x) => Array.isArray(x.fills) && x.fills.some((p) => p.visible !== false)).length, stroked = v.filter((x) => Array.isArray(x.strokes) && x.strokes.some((p) => p.visible !== false)).length;
    if (filled > stroked) o.fill = 1;
    return o;
  }
  // drawn shapes (chart marks, illustrations) become one SVG built from Figma's own geometry (no export calls)
  if (VEC.test(n.type) || ((n.type === "GROUP" || n.type === "FRAME" || n.type === "INSTANCE") && !paintsOn(n) && allVec(n))) {
    const s = svgOf(n);
    if (s) { o.svg = s; return o; }
  }
  if ("fills" in n && n.fills !== figma.mixed && n.type !== "TEXT") { const f = paints(n.fills); if (f.length) o.f = f; }
  if ("strokes" in n && n.strokes.length) { const s = paints(n.strokes); if (s.length) { o.s = s; o.sw = n.strokeWeight === figma.mixed ? [n.strokeTopWeight, n.strokeRightWeight, n.strokeBottomWeight, n.strokeLeftWeight] : n.strokeWeight; o.sa = n.strokeAlign; if (n.dashPattern && n.dashPattern.length) o.dash = n.dashPattern; } }
  if ("cornerRadius" in n) o.r = n.cornerRadius === figma.mixed ? [n.topLeftRadius, n.topRightRadius, n.bottomRightRadius, n.bottomLeftRadius] : n.cornerRadius || undefined;
  if ("effects" in n && n.effects.length) o.fx = n.effects.filter((e) => e.visible !== false).map((e) => (e.type === "LAYER_BLUR" || e.type === "BACKGROUND_BLUR" ? [e.type, e.radius] : [e.type, e.offset.x, e.offset.y, e.radius, e.spread || 0, hex(e.color), r2(e.color.a)]));
  if (n.layoutPositioning === "ABSOLUTE") o.abs = 1;
  if ("layoutSizingHorizontal" in n && parent && parent.layoutMode && parent.layoutMode !== "NONE") { o.sh = n.layoutSizingHorizontal; o.sv = n.layoutSizingVertical; }
  if ("clipsContent" in n && n.clipsContent) o.clip = 1;
  if ("layoutMode" in n && n.layoutMode !== "NONE") {
    o.lm = n.layoutMode[0]; o.pad = [n.paddingTop, n.paddingRight, n.paddingBottom, n.paddingLeft]; o.gap = n.itemSpacing;
    o.pa = n.primaryAxisAlignItems; o.ca = n.counterAxisAlignItems; if (n.layoutWrap === "WRAP") { o.wrap = 1; o.cgap = n.counterAxisSpacing; }
    o.psm = n.primaryAxisSizingMode; o.csm = n.counterAxisSizingMode;
    if (n.strokesIncludedInLayout) o.sil = 1;
  }
  if (n.type === "TEXT") {
    o.ta = n.textAlignHorizontal; o.tv = n.textAlignVertical; o.ar = n.textAutoResize; if (n.textTruncation === "ENDING") o.trunc = 1;
    o.seg = n.getStyledTextSegments(["fontName", "fontSize", "fontWeight", "fills", "lineHeight", "letterSpacing", "textDecoration", "textCase"]).map((s) => ({ c: s.characters, ff: s.fontName.family, fw: s.fontWeight, it: /italic/i.test(s.fontName.style) ? 1 : undefined, fs: s.fontSize, f: paints(s.fills)[0], lh: s.lineHeight.unit === "AUTO" ? undefined : s.lineHeight.unit === "PIXELS" ? r2(s.lineHeight.value) : s.lineHeight.value + "%", ls: s.letterSpacing.value ? (s.letterSpacing.unit === "PIXELS" ? r2(s.letterSpacing.value) : s.letterSpacing.value + "%") : undefined, td: s.textDecoration !== "NONE" ? s.textDecoration : undefined, tc: s.textCase !== "ORIGINAL" ? s.textCase : undefined }));
    return o;
  }
  if ("children" in n) { const k = []; for (const c of n.children) { const r = await ser(c, n); if (r) k.push(r); } if (k.length) o.k = k; }
  return o;
}
let ok = 0; const err = []; const t0 = Date.now();
const LIST = args.ids ? await Promise.all(args.ids.map((i) => figma.getNodeByIdAsync(i))) : L.slice(args.off, args.off + args.lim);
const timing = [];
for (const c of LIST) {
  const tc = Date.now();
  if (Date.now() - t0 > (args.budget || 30000)) break;
  globalThis.__fuSer = { sys: args.sys, done: ok + err.length, of: LIST.length };
  try {
    const id = c.id.replace(/[:;]/g, "-");
    if (c.findAll(() => true).length > 1200) { err.push(id + ":too-large"); continue; }
    const tree = await ser(c, null);
    // the PNG export includes shadow bleed: remember where the box sits inside it
    const rb = c.absoluteRenderBounds, bb = c.absoluteBoundingBox;
    if (rb && bb) tree.rb = [Math.round(bb.x - rb.x), Math.round(bb.y - rb.y)];
    const r1 = await fetch(U + "/node?system=" + args.sys + "&id=" + id, { method: "POST", body: JSON.stringify(tree) });
    const png = await Promise.race([c.exportAsync({ format: "PNG", constraint: { type: "SCALE", value: 1 } }), new Promise((_, rej) => setTimeout(() => rej(new Error("png timeout")), 8000))]);
    const r2_ = await fetch(U + "/png?system=" + args.sys + "&id=" + id, { method: "POST", body: figma.base64Encode(png) });
    if (r1.ok && r2_.ok) ok++; else err.push(id);
    timing.push(c.name.split("/").pop() + ":" + (Date.now() - tc));
  } catch (e) { err.push(c.id + ":" + String(e).slice(0, 80)); }
  if ((ok + err.length) % (args.yieldEvery || 50) === 0) await new Promise((r) => setTimeout(r, 0));
  args.done = (args.done || 0) + 1;
}
globalThis.__fuSer = { sys: args.sys, done: ok + err.length, of: LIST.length, finished: true, ok, err: err.slice(0, 8) };
return { total: L.length, from: args.off, done: args.done || 0, ok, err: err.slice(0, 5), ms: Date.now() - t0, timing: timing.slice(0, 12) };
