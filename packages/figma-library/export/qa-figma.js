// Figma QA for screens assembled from Ingot UI components (runs inside the Desktop Bridge or use_figma).
//   const report = await qaFigma(rootNode, palette, { fix: true })
// palette = data/shell/palette-<system>.json ({ colors, fonts }).
// Checks: auto layout, text cut off, layers outside a clipping parent, uneven rows, default layer names,
// fractional spacing, colours outside the system palette, fonts outside the system, mixed card radius in a row.
// With fix: true the safe ones are repaired (hug the box that cuts text, round spacing, name layers, stretch rows).
const FR = (n) => n.type === "FRAME" || n.type === "COMPONENT" || n.type === "INSTANCE";
const GFX = /VECTOR|ELLIPSE|LINE|STAR|POLYGON|BOOLEAN_OPERATION/;
const DEFAULT_NAME = /^(Frame|Group|Rectangle|Ellipse|Vector|Line|Stack|Row|Column|Inset|Text stack) ?\d*$/;
const hex6 = (c) => "#" + [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
function box(n) { const t = n.absoluteTransform; return { x: t[0][2], y: t[1][2], r: t[0][2] + n.width, b: t[1][2] + n.height }; }
function graphic(n) {
  if (/chart|graph|plot|donut|pie|illustration|logo|avatar|^icon|sparkline|progress|^asset|^image|arrow/i.test(n.name)) return true;
  const k = n.children.filter((c) => c.visible);
  if (k.length && k.every((c) => GFX.test(c.type))) return true;
  return k.length > 3 && k.filter((c) => GFX.test(c.type) || c.type === "RECTANGLE").length >= k.length * 0.5;
}
function firstText(n) { const t = n.findOne ? n.findOne((c) => c.type === "TEXT" && c.characters.trim()) : null; return t ? t.characters.trim().replace(/\s+/g, " ").slice(0, 28) : null; }
async function qaFigma(root, palette, opt) {
  const fix = !!(opt && opt.fix);
  const R = { noAutoLayout: [], textCut: [], outside: [], unevenRow: [], defaultNames: 0, fractional: 0, offPalette: {}, fonts: {}, mixedRadius: [], fixed: [] };
  const pal = new Set((palette && palette.colors) || []);
  const sysFonts = new Set(((palette && palette.fonts) || []).map((f) => f.split(":")[0]));
  const clipAnc = (n) => { let p = n.parent; while (p && p !== root.parent) { if (FR(p) && p.clipsContent) return p; p = p.parent; } return null; };
  const all = root.findAll(() => true); all.unshift(root);
  for (const n of all) {
    if (!n.visible) continue;
    // colours and fonts
    for (const key of ["fills", "strokes"]) {
      const ps = n[key]; if (!Array.isArray(ps)) continue;
      for (const p of ps) if (p.type === "SOLID" && p.visible !== false) { const h = hex6(p.color); if (pal.size && !pal.has(h)) R.offPalette[h] = (R.offPalette[h] || 0) + 1; }
    }
    if (n.type === "TEXT") {
      for (const s of n.getStyledTextSegments(["fontName"])) R.fonts[s.fontName.family] = (R.fonts[s.fontName.family] || 0) + 1;
      // text cut by its box or by a clipping parent
      const tb = box(n), a = clipAnc(n);
      const p = n.parent;
      const cutByParent = p && FR(p) && p.layoutMode !== "NONE" && (n.width > p.width - p.paddingLeft - p.paddingRight + 1);
      const cutByClip = a && (() => { const ab = box(a); return tb.x < ab.x - 1 || tb.r > ab.r + 1 || tb.y < ab.y - 1 || tb.b > ab.b + 1; })();
      if (cutByParent || cutByClip) {
        R.textCut.push(n.characters.slice(0, 40));
        if (fix && cutByParent && p.layoutMode === "HORIZONTAL") {
          const gp = p.parent;
          // a cell in a table column keeps its width: let the text take its natural width and trim the padding instead
          const inColumn = gp && FR(gp) && gp.layoutMode === "HORIZONTAL" && gp.children.length > 2 && gp.children.filter((c) => c.name === p.name).length > 2;
          if (inColumn) {
            n.textAutoResize = "WIDTH_AND_HEIGHT";
            const over = n.width - (p.width - p.paddingLeft - p.paddingRight);
            if (over > 0) { const cut = Math.min(over, p.paddingLeft); p.paddingLeft -= cut; if (over - cut > 0) p.paddingRight = Math.max(0, p.paddingRight - (over - cut)); }
            R.fixed.push("fit text in column cell: " + n.characters.slice(0, 30));
          } else {
            p.primaryAxisSizingMode = "AUTO";
            if (gp && FR(gp) && gp.layoutMode !== "NONE" && gp.children.length === 1) { gp.primaryAxisAlignItems = "CENTER"; gp.counterAxisAlignItems = "CENTER"; }
            R.fixed.push("hug box around text: " + n.characters.slice(0, 30));
          }
        }
      }
      continue;
    }
    if (!FR(n)) continue;
    const kids = n.children.filter((c) => c.visible);
    // auto layout
    if (kids.length > 1 && n.layoutMode === "NONE" && !graphic(n)) R.noAutoLayout.push(n.name);
    // layers outside a clipping frame (cut content)
    if (n.clipsContent && !graphic(n)) { const nb = box(n); for (const k of kids) { if ((k.fills || []).some && Array.isArray(k.fills) && k.fills.some((f) => f.type === "IMAGE")) continue; /* cropped pictures are intended */ const kb = box(k); if (kb.r > nb.r + 1 || kb.b > nb.b + 1 || kb.x < nb.x - 1 || kb.y < nb.y - 1) R.outside.push(n.name + " > " + k.name); } }
    // default names
    if (DEFAULT_NAME.test(n.name) || /^Frame \d{5,}/.test(n.name)) {
      R.defaultNames++;
      if (fix && n.layoutMode !== "NONE") { const t = firstText(n); n.name = t ? t + (n.layoutMode === "HORIZONTAL" ? " · row" : " · stack") : n.layoutMode === "HORIZONTAL" ? "Row" : "Stack"; }
    }
    // fractional spacing
    if (n.layoutMode !== "NONE") {
      // rounding is only safe where the error cannot add up: never inside graphics or rows of many items
      const inGraphic = (() => { let q = n; while (q && q !== root) { if (FR(q) && graphic(q)) return true; q = q.parent; } return false; })();
      const dense = kids.length > 8;
      for (const k of ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "itemSpacing"]) {
        const v = n[k]; if (Math.abs(v - Math.round(v)) > 0.01) { R.fractional++; if (fix && !inGraphic && !(dense && k === "itemSpacing")) n[k] = Math.round(v); }
      }
      // rows of cards: equal heights and one radius
      const cards = kids.filter((k) => FR(k) && (k.fills || []).length && k.height > 60);
      if (n.layoutMode === "HORIZONTAL" && cards.length > 1 && cards.length === kids.length) {
        const hs = cards.map((k) => k.height);
        if (Math.max(...hs) - Math.min(...hs) > 1) { R.unevenRow.push(n.name); if (fix) { n.counterAxisAlignItems = "MIN"; for (const k of cards) k.layoutSizingVertical = "FILL"; R.fixed.push("stretch row: " + n.name); } }
        const rs = new Set(cards.map((k) => (typeof k.cornerRadius === "number" ? Math.round(k.cornerRadius) : "mixed")));
        if (rs.size > 1) R.mixedRadius.push(n.name + " (" + [...rs].join(", ") + ")");
      }
    }
  }
  const fontsOff = Object.keys(R.fonts).filter((f) => sysFonts.size && !sysFonts.has(f));
  const score = {
    autoLayout: R.noAutoLayout.length, textCut: R.textCut.length, outside: R.outside.length, unevenRows: R.unevenRow.length,
    defaultNames: R.defaultNames, fractional: R.fractional, offPaletteColors: Object.keys(R.offPalette).length, fontsOutsideSystem: fontsOff, mixedRadius: R.mixedRadius.length,
  };
  return { score, details: { noAutoLayout: R.noAutoLayout.slice(0, 20), textCut: R.textCut, outside: R.outside.slice(0, 20), unevenRow: R.unevenRow, offPalette: R.offPalette, fonts: R.fonts, mixedRadius: R.mixedRadius }, fixed: R.fixed };
}
