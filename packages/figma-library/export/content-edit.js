// Content edits for a composed screen: change text by exact match inside one root, swap icons inside tiles.
//   await editTexts(root, { "Old": "New" })   ->  count of changed layers (fonts loaded from the layer itself)
//   await swapIcon(iconNode, svg, newName)   ->  keeps size, colour and position
const LOADED = new Set();
async function loadOnce(f) { const k = f.family + "|" + f.style; if (LOADED.has(k)) return; await figma.loadFontAsync(f); LOADED.add(k); }
async function editTexts(root, map, nth) {
  let n = 0;
  const seen = {};
  for (const t of root.findAll((x) => x.type === "TEXT")) {
    const k = t.characters;
    if (!(k in map)) continue;
    seen[k] = (seen[k] || 0) + 1;
    let v = map[k];
    if (Array.isArray(v)) { v = v[seen[k] - 1]; if (v === undefined) continue; }
    if (t.fontName !== figma.mixed) await loadOnce(t.fontName); else for (const s of t.getStyledTextSegments(["fontName"])) await loadOnce(s.fontName);
    t.characters = v; n++;
  }
  return n;
}
function iconColor(icon) {
  const v = icon.findOne ? icon.findOne((x) => x.type === "VECTOR" && ((x.strokes || []).length || (x.fills || []).length)) : null;
  const p = v && ((v.strokes || [])[0] || (v.fills || [])[0]);
  if (!p || p.type !== "SOLID") return "#000000";
  return "#" + [p.color.r, p.color.g, p.color.b].map((c) => Math.round(c * 255).toString(16).padStart(2, "0")).join("");
}
function swapIcon(icon, svg, name) {
  const col = iconColor(icon);
  const n = figma.createNodeFromSvg(svg.replace(/#000000/g, col).replace(/currentColor/g, col));
  n.name = "Icon/" + name; n.fills = []; n.clipsContent = false;
  n.resize(icon.width, icon.height);
  // house rule: stroke icons are 1.5px at any size
  for (const v of n.findAll((x) => x.type === "VECTOR")) if (v.strokes.length) v.strokeWeight = 1.5;
  const p = icon.parent, i = p.children.indexOf(icon);
  p.insertChild(i, n);
  if (p.layoutMode === "NONE" || icon.layoutPositioning === "ABSOLUTE") { n.x = icon.x; n.y = icon.y; }
  if (icon.layoutPositioning === "ABSOLUTE") n.layoutPositioning = "ABSOLUTE";
  icon.remove();
  return n;
}
