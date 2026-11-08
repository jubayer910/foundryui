// Overview board generator for a design-system file (runs after core-ds.js).
// args.spec: { name, set, category, description:[p1,p2], codePath, features:[[icon,title,text]x3],
//   showcase:[inst...], variantsAxis, sizesAxis, rowsAxis, stateAxis, anatomy:{inst, parts:{layer:[title,text]}},
//   a11y:[[title,big,note,tone]], dos:[{ok,text,items:[inst]}], context:[{label,items:[inst],note}] }
// inst: { set, v:{Axis:Option}, p:{Prop:value}, icon:{Prop:iconName}, scale }
const S = args.spec;
const W = 1600, IN = W - 144;
const P = await page(S.name);
for (const n of [...P.children]) if (n.name === S.name + " — Overview") n.remove();
const setCache = {};
const getSet = async (name) => setCache[name] || (setCache[name] = await findSet(null, name));
const mainSet = await getSet(S.set || S.name);
const defs = (s) => (s.type === "COMPONENT_SET" ? s.componentPropertyDefinitions : s.componentPropertyDefinitions || {});
const keyOf = (s, prop) => Object.keys(defs(s)).find((k) => k.split("#")[0] === prop);
async function inst(spec) {
  const s = await getSet(spec.set || S.set || S.name);
  let comp = s;
  if (s.type === "COMPONENT_SET") {
    const d = defs(s); const want = {};
    for (const [k, def] of Object.entries(d)) if (def.type === "VARIANT") want[k] = (spec.v && spec.v[k]) || def.defaultValue;
    comp = s.children.find((c) => Object.entries(want).every(([k, val]) => c.variantProperties[k] === val)) || s.defaultVariant;
  }
  const i = comp.createInstance();
  const props = {};
  for (const [k, val] of Object.entries(spec.p || {})) { const key = keyOf(s, k); if (key) props[key] = val; }
  for (const [k, ic] of Object.entries(spec.icon || {})) { const key = keyOf(s, k); if (key) props[key] = (await iconSet(ic)).children.find((c) => c.name === "Style=Stroke Rounded").id; }
  if (Object.keys(props).length) i.setProperties(props);
  if (spec.scale) i.rescale(spec.scale);
  return i;
}
const rule = (f, side) => { f.strokes = [solid(V().color.line)]; f.strokeTopWeight = side === "top" ? 1 : 0; f.strokeBottomWeight = side === "bottom" ? 1 : 0; f.strokeLeftWeight = side === "left" ? 1 : 0; f.strokeRightWeight = side === "right" ? 1 : 0; };
const B = (o) => { const f = box(o); if (o.bg) fill(f, o.bg); if (o.r !== undefined) f.cornerRadius = o.r; if (o.line) stroke(f, o.line); return f; };
const stage = (name, h, gap = 48) => { const s = B({ name, gap, w: IN, h, justify: "CENTER", bg: "sunken", r: 16, line: "line" }); return s; };
const labelled = async (parent, node, text) => { const c = B({ name: text, dir: "v", gap: 14, align: "CENTER" }); parent.appendChild(c); c.appendChild(node); await txt(c, text, "Mono/11 Regular", "muted"); };
const title = async (parent, s, size) => { const t = await txt(parent, s, "Display/28 SemiBold"); t.fontSize = size; t.lineHeight = { unit: "PERCENT", value: size > 60 ? 95 : 105 }; t.letterSpacing = { unit: "PERCENT", value: -3.5 }; return t; };

const board = B({ name: S.name + " — Overview", dir: "v", w: W, bg: "surface" }); board.primaryAxisSizingMode = "AUTO"; P.appendChild(board); board.x = 0; board.y = 0;
// header
const hd = B({ name: "Header", pad: [0, 72, 0, 72], w: W, h: 72, justify: "SPACE_BETWEEN" }); board.appendChild(hd); rule(hd, "bottom");
const hl = B({ name: "Brand", gap: 10 }); hd.appendChild(hl); const lg = B({ name: "Logo", w: 24, h: 24, bg: "accent", r: 8 }); hl.appendChild(lg);
await txt(hl, "Loopo", "Body/14 Medium"); await txt(hl, "Components", "Body/14 Regular", "muted"); hl.appendChild(await icon("arrow-right", 14, "faint")); await txt(hl, S.name, "Body/14 Regular", "muted");
await txt(hd, "Design system v1.0", "Mono/11 Regular", "muted");
// hero
const hero = B({ name: "Hero", w: W, h: 720, align: "MIN" }); board.appendChild(hero); rule(hero, "bottom");
const c1 = B({ name: "Description", dir: "v", pad: [72, 56, 56, 72], w: 440, h: 720, align: "MIN", justify: "SPACE_BETWEEN" }); hero.appendChild(c1); rule(c1, "right");
const c1t = B({ name: "Top", dir: "v", gap: 18, align: "MIN" }); c1.appendChild(c1t); await txt(c1t, "OVERVIEW", "Mono/11 Regular", "muted"); await title(c1t, "Description", 40);
for (const [i, p] of S.description.entries()) { const t = await txt(c1t, p, "Body/14 Regular", i ? "muted" : "body"); t.textAutoResize = "HEIGHT"; t.resize(312, t.height); }
const c1b = B({ name: "Bottom", gap: 8 }); c1.appendChild(c1b); c1b.appendChild(await icon("code", 16, "muted")); await txt(c1b, S.codePath, "Mono/11 Regular", "muted");
const c2 = B({ name: "Showcase", dir: "v", pad: [72, 56, 56, 56], w: 720, h: 720, align: "CENTER", justify: "SPACE_BETWEEN" }); hero.appendChild(c2); rule(c2, "right");
const c2t = B({ name: "Title", dir: "v", gap: 14, align: "CENTER" }); c2.appendChild(c2t); await txt(c2t, S.category, "Mono/11 Regular", "accent"); await title(c2t, S.name, S.name.length > 12 ? 64 : 88);
const show = B({ name: "Composition", dir: "v", gap: 18, pad: 40, w: 560, h: 420, bg: "page", r: 24, align: "CENTER", justify: "CENTER" }); c2.appendChild(show);
for (const row of S.showcase) { const r = B({ name: "Row", gap: 12 }); show.appendChild(r); for (const it of [].concat(row)) r.appendChild(await inst(it)); }
{ const rows = show.children; const mw = Math.max(...rows.map((r) => r.width)); const th = rows.reduce((a, r) => a + r.height, 0) + 18 * (rows.length - 1); const sc = Math.min(S.showScale || 2.2, 460 / mw, 330 / th); if (sc > 1.05) for (const r of [...rows]) r.rescale(sc); }
const nVar = mainSet.type === "COMPONENT_SET" ? mainSet.children.length : 1;
const nProp = Object.values(defs(mainSet)).filter((d) => d.type !== "VARIANT").length;
await txt(c2, nVar + " variants, " + nProp + " top-level properties", "Body/13 Regular", "muted");
const c3 = B({ name: "In code", dir: "v", pad: [72, 72, 56, 56], w: 440, h: 720, align: "MIN", justify: "SPACE_BETWEEN" }); hero.appendChild(c3);
const c3t = B({ name: "Top", dir: "v", gap: 18, align: "MIN" }); c3.appendChild(c3t); await txt(c3t, "IN CODE", "Mono/11 Regular", "muted"); await title(c3t, "Ships three ways", 40);
const slug = S.slug || S.name.toLowerCase().replace(/ /g, "-");
for (const [a, b] of [["React and Tailwind v4", "Plain TSX that reads the --fu-* tokens."], ["CLI", "npx foundryui add " + slug], ["MCP for AI agents", "Your agent pulls it with get_component_code."], ["Figma", "This component, every option in the right panel."]]) { const r = B({ name: a, dir: "v", gap: 4, align: "MIN" }); c3t.appendChild(r); await txt(r, a, "Body/14 Medium"); const t = await txt(r, b, a === "CLI" ? "Mono/11 Regular" : "Body/13 Regular", "muted"); t.textAutoResize = "HEIGHT"; t.resize(312, t.height); }
const code = B({ name: "Snippet", dir: "v", gap: 6, pad: 18, w: 312, bg: "ink", r: 14, align: "MIN" }); c3.appendChild(code);
for (const l of S.snippet || ["<" + S.name.replace(/ /g, "") + " />"]) { const t = await txt(code, l, "Mono/11 Regular", "surface"); t.opacity = 0.85; }
// features
const feat = B({ name: "Features", pad: [56, 72, 56, 72], w: W, align: "MIN" }); board.appendChild(feat); rule(feat, "bottom");
for (const [i, [ic, h, d]] of S.features.entries()) {
  const f = B({ name: h, dir: "v", gap: 14, pad: [0, i < 2 ? 40 : 0, 0, i ? 40 : 0], w: IN / 3, align: "MIN" }); feat.appendChild(f); if (i < 2) rule(f, "right");
  const tile = B({ name: "Icon", w: 44, h: 44, r: 12, line: "line", justify: "CENTER" }); f.appendChild(tile); tile.appendChild(await icon(ic, 20, "ink"));
  await txt(f, h, "Title/18 SemiBold"); const t = await txt(f, d, "Body/14 Regular", "muted"); t.textAutoResize = "HEIGHT"; t.resize(IN / 3 - 80, t.height);
}
let n = 0;
const docSection = async (t, text) => { n++; const s = B({ name: String(n).padStart(2, "0") + " " + t, dir: "v", gap: 24, pad: 72, w: W, align: "MIN" }); board.appendChild(s); rule(s, "bottom");
  const h = B({ name: "Head", w: IN, justify: "SPACE_BETWEEN", align: "MAX" }); s.appendChild(h); const l = B({ name: "Title", dir: "v", gap: 8, align: "MIN" }); h.appendChild(l);
  await txt(l, String(n).padStart(2, "0"), "Mono/11 Regular", "accent"); await txt(l, t, "Display/28 SemiBold");
  if (text) { const x = await txt(h, text, "Body/14 Regular", "muted"); x.textAutoResize = "HEIGHT"; x.resize(520, x.height); } return s; };
const D = defs(mainSet);
const axis = (name) => name && D[name] && D[name].type === "VARIANT" ? D[name].variantOptions : null;
// variants
if (axis(S.variantsAxis)) { const s = await docSection(S.variantsTitle || "Variants", S.variantsText); const st = stage("Variants", 220, 56); s.appendChild(st); for (const o of axis(S.variantsAxis)) await labelled(st, await inst({ ...(S.variantBase || {}), v: { ...((S.variantBase || {}).v || {}), [S.variantsAxis]: o }, p: { ...((S.variantBase || {}).p || {}), ...((S.optionProps || {})[o] || {}) } }), o); }
if (axis(S.sizesAxis)) { const s = await docSection("Sizes", S.sizesText); const st = stage("Sizes", 200, 72); s.appendChild(st); for (const o of axis(S.sizesAxis)) await labelled(st, await inst({ ...(S.variantBase || {}), v: { ...((S.variantBase || {}).v || {}), [S.sizesAxis]: o } }), o); }
if (axis(S.stateAxis)) {
  const s = await docSection("States", S.statesText);
  const rowsOpts = axis(S.rowsAxis) || [null]; const cols = axis(S.stateAxis);
  const mat = B({ name: "States matrix", dir: "v", w: IN, r: 16, line: "line", align: "MIN" }); s.appendChild(mat); mat.clipsContent = true;
  const cw = Math.floor((IN - 216) / cols.length);
  const hr = B({ name: "Head", w: IN, h: 44, bg: "sunken" }); mat.appendChild(hr); rule(hr, "bottom"); const h0 = B({ name: "Corner", w: 216, h: 44 }); hr.appendChild(h0);
  for (const c of cols) { const x = B({ name: c, w: cw, h: 44, pad: [0, 24, 0, 24] }); hr.appendChild(x); await txt(x, c.toUpperCase(), "Caption/11 Medium", "muted"); }
  for (const [ri, ro] of rowsOpts.entries()) { const r = B({ name: ro || "Row", w: IN, h: 96 }); mat.appendChild(r); if (ri < rowsOpts.length - 1) rule(r, "bottom"); const x0 = B({ name: "Name", w: 216, h: 96, pad: [0, 24, 0, 24] }); r.appendChild(x0); await txt(x0, ro || S.name, "Body/14 Medium");
    for (const c of cols) { const x = B({ name: c, w: cw, h: 96, pad: [0, 24, 0, 24] }); r.appendChild(x); const v = { ...((S.variantBase || {}).v || {}), [S.stateAxis]: c }; if (ro) v[S.rowsAxis] = ro; x.appendChild(await inst({ ...(S.variantBase || {}), v })); } }
}
// anatomy
if (S.anatomy) {
  const s = await docSection("Anatomy", S.anatomy.text);
  const an = B({ name: "Anatomy", gap: 64, w: IN, align: "CENTER" }); s.appendChild(an);
  const st = figma.createFrame(); st.name = "Stage"; st.resize(760, 380); fill(st, "sunken"); st.cornerRadius = 16; stroke(st, "line"); an.appendChild(st);
  const big = await inst(S.anatomy.inst); const sc = Math.min((S.anatomy && S.anatomy.scale) || 4, 600 / big.width, 240 / big.height); big.rescale(sc); st.appendChild(big); big.x = (760 - big.width) / 2; big.y = (380 - big.height) / 2;
  const sb = st.absoluteBoundingBox; const parts = Object.entries(S.anatomy.parts);
  const leg = B({ name: "Legend", dir: "v", gap: 18, align: "MIN" }); an.appendChild(leg);
  let k = 0; const laneUp = [], laneDn = [];
  for (const [layer, [h, d]] of parts) {
    k++; const node = layer === "_root" ? big : big.findOne((x) => x.name === layer); if (!node) continue;
    const b = node.absoluteBoundingBox; const cx = b.x - sb.x + b.width / 2, top = b.y - sb.y;
    const up = k % 2 === 1; const my = up ? Math.max(20, top - 56) : Math.min(360, top + b.height + 56);
    let mx = cx; const lane = up ? laneUp : laneDn; for (const px of lane) if (Math.abs(px - mx) < 36) mx = px + 36; lane.push(mx);
    const y0 = up ? top : top + b.height, y1 = up ? my + 13 : my - 13;
    const ln = figma.createVector(); ln.name = "Leader " + k; st.appendChild(ln); ln.vectorPaths = [{ windingRule: "NONE", data: "M " + cx + " " + y0 + " L " + mx + " " + y1 }]; ln.x = Math.min(cx, mx); ln.y = Math.min(y0, y1); ln.strokes = [solid(V().color.accent)]; ln.strokeWeight = 1.5;
    const m = B({ name: "Marker " + k, w: 26, h: 26, r: 13, bg: "accent", justify: "CENTER" }); st.appendChild(m); m.x = mx - 13; m.y = my - 13; await txt(m, String(k), "Caption/12 Medium", "accent-ink");
    const r = B({ name: h, gap: 14, align: "MIN" }); leg.appendChild(r); const mm = B({ name: "Marker", w: 22, h: 22, r: 11, bg: "ink", justify: "CENTER" }); r.appendChild(mm); await txt(mm, String(k), "Caption/11 Medium", "surface");
    const tx = B({ name: "Text", dir: "v", gap: 4, align: "MIN" }); r.appendChild(tx); await txt(tx, h, "Body/14 Medium"); const t = await txt(tx, d, "Body/13 Regular", "muted"); t.textAutoResize = "HEIGHT"; t.resize(420, t.height);
  }
}
// properties (auto)
{
  const s = await docSection("Properties", "Every option is a top-level property: select an instance and change it in the right panel.");
  const tb = B({ name: "Properties", dir: "v", w: IN, r: 16, line: "line", align: "MIN" }); s.appendChild(tb); tb.clipsContent = true;
  const TYPE = { VARIANT: "Variant", TEXT: "Text", BOOLEAN: "Boolean", INSTANCE_SWAP: "Instance swap" };
  const rows = [["PROPERTY", "TYPE", "OPTIONS OR DEFAULT"]].concat(Object.entries(D).map(([k, d]) => [k.split("#")[0], TYPE[d.type] || d.type, d.type === "VARIANT" ? d.variantOptions.join(", ") : d.type === "INSTANCE_SWAP" ? "Any Foundry icon" : String(d.defaultValue)]));
  for (const [ri, r] of rows.entries()) { const row = B({ name: r[0], w: IN, h: ri ? 52 : 44, bg: ri ? undefined : "sunken" }); tb.appendChild(row); if (ri < rows.length - 1) rule(row, "bottom");
    for (const [ci, w] of [320, 220, IN - 540].entries()) { const c = B({ name: "c" + ci, w, h: ri ? 52 : 44, pad: [0, 24, 0, 24] }); row.appendChild(c); const t = await txt(c, r[ci], ri ? (ci === 0 ? "Body/14 Medium" : ci === 1 ? "Mono/11 Regular" : "Body/13 Regular") : "Caption/11 Medium", ri ? (ci === 0 ? "ink" : "body") : "muted"); t.textAutoResize = "NONE"; t.resize(w - 48, 18); t.textTruncation = "ENDING"; } }
}
// accessibility
if (S.a11y) {
  const s = await docSection("Accessibility", S.a11yText || "Measured, not assumed.");
  const ac = B({ name: "Cards", gap: 16, w: IN, align: "MIN" }); s.appendChild(ac); const cw = (IN - 16 * (S.a11y.length - 1)) / S.a11y.length;
  for (const [h, big, note, tone] of S.a11y) { const c = B({ name: h, dir: "v", gap: 10, pad: 24, w: cw, bg: "sunken", r: 16, align: "MIN" }); ac.appendChild(c); await txt(c, h, "Body/13 Medium", "muted"); await txt(c, big, "Display/28 SemiBold", tone || "ink"); const t = await txt(c, note, "Body/13 Regular", "muted"); t.textAutoResize = "HEIGHT"; t.resize(cw - 48, t.height); }
}
// do and don't
if (S.dos) {
  const s = await docSection("Do and don't", null);
  const dd = B({ name: "Pairs", gap: 24, w: IN, align: "MIN" }); s.appendChild(dd); const cw = (IN - 24) / 2;
  for (const d of S.dos) { const c = B({ name: d.ok ? "Do" : "Don't", dir: "v", gap: 14, w: cw, align: "MIN" }); dd.appendChild(c);
    const sg = B({ name: "Stage", dir: d.dir || "h", gap: 12, w: cw, h: 260, justify: "CENTER", bg: "sunken", r: 16, line: "line" }); c.appendChild(sg); for (const it of d.items) sg.appendChild(await inst(it));
    const bar = figma.createRectangle(); bar.name = "Rule"; bar.resize(cw, 3); bar.cornerRadius = 2; fill(bar, d.ok ? "positive" : "negative"); c.appendChild(bar);
    const l = B({ name: "Verdict", gap: 8 }); c.appendChild(l); l.appendChild(await icon(d.ok ? "check" : "x", 16, d.ok ? "positive-text" : "negative-text")); await txt(l, d.ok ? "Do" : "Don't", "Body/14 Medium", d.ok ? "positive" : "negative");
    const t = await txt(c, d.text, "Body/14 Regular", "body"); t.textAutoResize = "HEIGHT"; t.resize(cw - 40, t.height); }
}
// in context
if (S.context) {
  const s = await docSection("In context", S.contextText || "How it sits inside real Loopo surfaces.");
  const ctx = B({ name: "Examples", gap: 24, w: IN, align: "MIN" }); s.appendChild(ctx); const cw = (IN - 24 * (S.context.length - 1)) / S.context.length;
  for (const ex of S.context) { const c = B({ name: ex.label, dir: "v", gap: 16, pad: 24, w: cw, bg: "page", r: 16, align: "MIN" }); ctx.appendChild(c); await txt(c, ex.label.toUpperCase(), "Mono/11 Regular", "muted");
    const card = B({ name: "Card", dir: ex.dir || "v", gap: 12, pad: 20, w: cw - 48, bg: "surface", r: 12, line: "line", align: ex.align || "MIN" }); c.appendChild(card);
    if (ex.title) await txt(card, ex.title, "Body/14 Medium"); for (const it of ex.items) card.appendChild(await inst(it)); }
}
const ft = B({ name: "Footer", pad: [0, 72, 0, 72], w: W, h: 64, justify: "SPACE_BETWEEN" }); board.appendChild(ft); await txt(ft, "Foundry UI, Loopo design system", "Caption/12 Medium", "muted"); await txt(ft, "Light mode. Dark mode is the first update after launch.", "Caption/12 Medium", "muted");
const sets = P.children.find((x) => x.name === "Component sets"); if (sets) { sets.x = W + 160; sets.y = 0; }
return { page: P.name, board: board.id, h: Math.round(board.height) };
