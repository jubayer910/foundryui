// Native Figma chart kit (runs after core-ds.js). Every chart is real geometry: rectangles, vectors,
// arcs and text, in the Loopo finish: gradient fills, inside strokes, highlight bands, hatch tracks.
const CK = {};
CK.lin = (stops, angle = "v") => ({ type: "GRADIENT_LINEAR", gradientTransform: angle === "v" ? [[0, 1, 0], [-1, 0, 1]] : [[1, 0, 0], [0, 1, 0]], gradientStops: stops.map(([p, h, a = 1]) => ({ position: p, color: { ...rgb(h), a } })) });
CK.frame = (name, w, h) => { const f = figma.createFrame(); f.name = name; f.resize(w, h); f.fills = []; f.clipsContent = false; return f; };
CK.text = async (parent, s, style, color, x, y, align) => { const t = await txt(parent, s, style, color); t.x = x; t.y = y; if (align === "center") t.x = x - t.width / 2; if (align === "right") t.x = x - t.width; return t; };
// Catmull-Rom to cubic Bezier path through points
CK.smooth = (pts) => { let d = "M " + pts[0][0] + " " + pts[0][1]; for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2; const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]; d += " C " + c1.join(" ") + " " + c2.join(" ") + " " + p2.join(" "); } return d; };
CK.vec = (parent, name, d, o = {}) => { const v = figma.createVector(); v.name = name; parent.appendChild(v); v.vectorPaths = [{ windingRule: o.fill ? "NONZERO" : "NONE", data: d }]; if (o.x !== undefined) v.x = o.x; if (o.y !== undefined) v.y = o.y; if (o.fill) v.fills = [o.fill]; else v.fills = []; if (o.stroke) { v.strokes = [o.stroke]; v.strokeWeight = o.w || 1.5; v.strokeCap = "ROUND"; v.strokeJoin = "ROUND"; if (o.dash) v.dashPattern = o.dash; } else v.strokes = []; return v; };
CK.rect = (parent, name, x, y, w, h, r, paint, strokeP) => { const n = figma.createRectangle(); n.name = name; parent.appendChild(n); n.x = x; n.y = y; n.resize(Math.max(0.01, w), Math.max(0.01, h)); n.cornerRadius = r; n.fills = paint ? [].concat(paint) : []; if (strokeP) { n.strokes = [strokeP]; n.strokeWeight = 1; n.strokeAlign = "INSIDE"; } return n; };
CK.grid = async (f, x0, x1, ys, labels) => { for (let i = 0; i < ys.length; i++) { CK.vec(f, "Grid", "M " + x0 + " " + ys[i] + " L " + x1 + " " + ys[i], { stroke: solid(V().color.line), w: 1, dash: [3, 4] }); if (labels) await CK.text(f, labels[i], "Caption/11 Medium", "muted", x0 - 8, ys[i] - 7, "right"); } };
CK.tooltip = async (f, x, y, title, rows) => { const t = box({ name: "Tooltip", dir: "v", gap: 6, pad: [10, 12, 10, 12], align: "MIN" }); fill(t, "surface"); stroke(t, "line"); t.cornerRadius = 10; await t.setEffectStyleIdAsync(G.es.Overlay.id); f.appendChild(t); await txt(t, title, "Caption/11 Medium", "muted", "Title");
  for (const [dot, label, val] of rows) { const r = box({ name: label, gap: 8 }); t.appendChild(r); const sw = figma.createRectangle(); sw.resize(8, 8); sw.cornerRadius = 2; sw.fills = [solid(dot)]; sw.name = "Key"; r.appendChild(sw); const l = await txt(r, label, "Caption/12 Medium", "body", "Label"); const v = await txt(r, val, "Caption/12 Medium", "ink", "Value"); v.textAlignHorizontal = "RIGHT"; }
  t.x = x; t.y = y; return t; };
CK.legend = async (parent, items) => { const l = box({ name: "Legend", gap: 16 }); parent.appendChild(l); for (const [h, label] of items) { const r = box({ name: label, gap: 6 }); l.appendChild(r); const sw = figma.createRectangle(); sw.name = "Key"; sw.resize(4, 12); sw.cornerRadius = 2; sw.fills = [solid(h)]; r.appendChild(sw); await txt(r, label, "Caption/12 Medium", "body", "Label"); } return l; };

// ---------- charts ----------
// Capsule bars: tracks + gradient fills, highlighted last bar
CK.capsuleBars = async ({ w = 560, h = 240, values, labels, highlight = values.length - 1, tooltip }) => {
  const f = CK.frame("Capsule bars", w, h); const n = values.length, gap = 10, bw = (w - gap * (n - 1)) / n, ph = h - 26, max = Math.max(...values);
  for (let i = 0; i < n; i++) { const x = i * (bw + gap); CK.rect(f, "Track", x, 0, bw, ph, bw / 2, solid("#f4f4f5"));
    const bh = Math.max(bw, (values[i] / max) * ph); const hi = i === highlight;
    CK.rect(f, hi ? "Bar (current)" : "Bar", x, ph - bh, bw, bh, bw / 2, hi ? CK.lin([[0, "#fd6a48"], [1, "#fd4b23"]]) : CK.lin([[0, "#ffd9cd"], [1, "#ffc8b8"]]), { type: "SOLID", color: rgb(hi ? "#e8401a" : "#fdb8a4"), opacity: hi ? 0.6 : 0.5 });
    CK.rect(f, "Highlight", x + 3, ph - bh + 3, bw - 6, Math.min(6, bh / 4), bw / 2, { type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.22 });
    await CK.text(f, labels[i], "Caption/11 Medium", hi ? "ink" : "muted", x + bw / 2, ph + 10, "center"); }
  if (tooltip) await CK.tooltip(f, Math.max(0, highlight * (bw + gap) - 150), 6, tooltip[0], tooltip[1]);
  return f; };
// Stacked blocks: two series, selected column
CK.stacked = async ({ w = 560, h = 220, a, b, labels, sel }) => {
  const f = CK.frame("Stacked blocks", w, h); const n = a.length, gap = 8, bw = (w - gap * (n - 1)) / n, ph = h - 24, max = Math.max(...a.map((v, i) => v + b[i]));
  if (sel !== undefined) CK.rect(f, "Selected column", sel * (bw + gap) - 3, 0, bw + 6, ph, 8, solid("#f4f4f5"));
  for (let i = 0; i < n; i++) { const x = i * (bw + gap); const ha = (a[i] / max) * (ph - 10), hb = (b[i] / max) * (ph - 10);
    CK.rect(f, "Series A", x, ph - ha, bw, ha, 6, CK.lin([[0, "#fd6a48"], [1, "#fd4b23"]]), { type: "SOLID", color: rgb("#e8401a"), opacity: 0.5 });
    CK.rect(f, "Series B", x, ph - ha - hb - 3, bw, hb, 6, CK.lin([[0, "#ffd9cd"], [1, "#ffc8b8"]]), { type: "SOLID", color: rgb("#fdb8a4"), opacity: 0.6 });
    await CK.text(f, labels[i], "Caption/11 Medium", i === sel ? "ink" : "muted", x + bw / 2, ph + 8, "center"); }
  return f; };
// Line chart with optional comparison, band, annotation and gradient area
CK.line = async ({ w = 640, h = 260, series, compare, color = "#fd4b23", band, annotation, xlabels, ylabels, area = true }) => {
  const f = CK.frame("Line chart", w, h); const left = ylabels ? 34 : 0, ph = h - 24, pw = w - left; const all = series.concat(compare || []); const mn = Math.min(...all), mx = Math.max(...all);
  const Y = (v) => 8 + (1 - (v - mn) / (mx - mn || 1)) * (ph - 16); const X = (i, n) => left + (i / (n - 1)) * pw;
  if (ylabels) await CK.grid(f, left, w, ylabels.map((_, i) => 8 + (i / (ylabels.length - 1)) * (ph - 16)), ylabels);
  if (band) { CK.rect(f, "Highlight band", X(band[0], series.length), 0, X(band[1], series.length) - X(band[0], series.length), ph, 0, { type: "SOLID", color: rgb(color), opacity: 0.06 }); }
  const pts = series.map((v, i) => [X(i, series.length), Y(v)]);
  if (area) CK.vec(f, "Area", CK.smooth(pts) + " L " + pts[pts.length - 1][0] + " " + ph + " L " + pts[0][0] + " " + ph + " Z", { fill: CK.lin([[0, color, 0.16], [1, color, 0]]) });
  if (compare) CK.vec(f, "Comparison", CK.smooth(compare.map((v, i) => [X(i, compare.length), Y(v)])), { stroke: solid("#a6a6a6"), w: 1.5, dash: [2, 3] });
  CK.vec(f, "Line", CK.smooth(pts), { stroke: solid(color), w: 2 });
  if (annotation) { const [i, label] = annotation; const x = X(i, series.length), y = Y(series[i]);
    CK.vec(f, "Marker line", "M " + x + " " + y + " L " + x + " " + ph, { stroke: { type: "SOLID", color: rgb(color), opacity: 0.6 }, w: 1, dash: [2, 2] });
    const dot = figma.createEllipse(); dot.name = "Point"; f.appendChild(dot); dot.resize(8, 8); dot.x = x - 4; dot.y = y - 4; dot.fills = [solid("#ffffff")]; dot.strokes = [solid(color)]; dot.strokeWeight = 2;
    const pill = box({ name: "Annotation", pad: [6, 10, 6, 10] }); fill(pill, "ink"); pill.cornerRadius = 999; f.appendChild(pill); await txt(pill, label, "Caption/12 Medium", "surface"); pill.x = Math.min(w - pill.width, Math.max(left, x - pill.width / 2)); pill.y = Math.max(0, y - 38); }
  if (xlabels) for (let i = 0; i < xlabels.length; i++) await CK.text(f, xlabels[i], "Caption/11 Medium", "muted", left + (i / (xlabels.length - 1)) * pw, ph + 8, i === 0 ? "left" : i === xlabels.length - 1 ? "right" : "center");
  return f; };
// Donut with centre total
CK.donut = async ({ size = 180, segments, total, caption }) => {
  const f = CK.frame("Donut", size, size); let a = -Math.PI / 2; const sum = segments.reduce((s, x) => s + x[1], 0); const gapA = 0.035;
  for (const [h, v, name] of segments) { const e = figma.createEllipse(); e.name = name; f.appendChild(e); e.resize(size, size); const sweep = (v / sum) * Math.PI * 2; e.arcData = { startingAngle: a + gapA / 2, endingAngle: a + sweep - gapA / 2, innerRadius: 0.74 }; e.fills = [solid(h)]; a += sweep; }
  const c = await CK.text(f, total, "Display/28 SemiBold", "ink", size / 2, size / 2 - 22, "center"); const cc = await CK.text(f, caption, "Caption/11 Medium", "muted", size / 2, size / 2 + 12, "center");
  return f; };
// Pill meter
CK.pills = async ({ count = 30, filled = 20, w = 4, h = 18, gap = 3, color = "#fd4b23", soft = "#ffd9cd" }) => { const f = CK.frame("Pill meter", count * (w + gap) - gap, h); for (let i = 0; i < count; i++) CK.rect(f, i < filled ? "Filled" : "Empty", i * (w + gap), 0, w, h, w / 2, i < filled ? CK.lin([[0, color, 0.75], [1, color]]) : solid(soft)); return f; };
// Hatch track: filled part + hatched remainder
CK.hatch = async ({ w = 300, h = 22, pct = 0.5, color = "#fd4b23" }) => {
  const f = CK.frame("Hatch track", w, h); f.clipsContent = true; f.cornerRadius = 6;
  const bg = CK.rect(f, "Track", 0, 0, w, h, 6, solid("#f6f6f6")); let d = ""; for (let x = -h; x < w + h; x += 6) d += "M " + x + " " + h + " L " + (x + h) + " 0 "; CK.vec(f, "Hatch", d, { stroke: { type: "SOLID", color: rgb("#e6e6e6") }, w: 1 });
  CK.rect(f, "Fill", 0, 0, w * pct, h, 6, CK.lin([[0, color, 0.85], [1, color]], "h")); CK.rect(f, "Cap", w * pct - 4, 0, 4, h, 2, solid("#ffffff")).opacity = 0.7;
  return f; };
// Diverging bars (inflow up, outflow down)
CK.diverging = async ({ w = 520, h = 220, up, down, colorUp = "#fd4b23", colorDown = "#4d98fe", sel }) => {
  const f = CK.frame("Diverging bars", w, h); const n = up.length, gap = 4, bw = (w - gap * (n - 1)) / n, mid = h / 2, max = Math.max(...up, ...down);
  for (let i = 0; i < n; i++) { const x = i * (bw + gap); const hu = (up[i] / max) * (mid - 6), hd = (down[i] / max) * (mid - 6);
    CK.rect(f, "Inflow", x, mid - hu, bw, hu, bw / 2, CK.lin([[0, colorUp], [1, colorUp, 0.35]])); CK.rect(f, "Outflow", x, mid + 2, bw, hd, bw / 2, CK.lin([[0, colorDown, 0.35], [1, colorDown]])); }
  CK.vec(f, "Zero line", "M 0 " + (mid + 1) + " L " + w + " " + (mid + 1), { stroke: solid(V().color["line-strong"]), w: 1 });
  if (sel !== undefined) { const x = sel * (bw + gap) + bw / 2; CK.vec(f, "Selection", "M " + x + " 0 L " + x + " " + h, { stroke: solid("#18b170"), w: 1, dash: [2, 2] }); }
  return f; };
