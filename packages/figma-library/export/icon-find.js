// Shared by collect-icons.js and swap-icons.js (prepended at load). Finds third-party icons on a page.
const VEC_ = /^(VECTOR|BOOLEAN_OPERATION|STAR|POLYGON|LINE|ELLIPSE)$/;
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*( · \d+)?$/;
function inInstance(n) { let p = n.parent; while (p) { if (p.type === "INSTANCE") return true; p = p.parent; } return false; }
async function findIcons(roots) {
  const out = [];
  for (const root of roots) {
    const cands = root.findAll((n) => (n.type === "INSTANCE" || n.type === "FRAME" || n.type === "GROUP") && n.width <= 48 && n.height <= 48);
    const skipInside = new Set();
    for (const n of cands) {
      if (skipInside.has(n.id)) continue;
      let info = null;
      if (n.type === "INSTANCE") {
        let mc; try { mc = await n.getMainComponentAsync(); } catch (e) {}
        if (!mc) continue;
        if (/^Foundry\//.test(mc.name)) { n.findAll(() => true).forEach((x) => skipInside.add(x.id)); continue; }
        const m = mc.name.match(/Style=([A-Za-z]+)(?:, Type=([A-Za-z]+))?/);
        const setName = mc.parent && mc.parent.type === "COMPONENT_SET" ? mc.parent.name : mc.name;
        // third-party icon sets use kebab-case names; product slots like "Company logo" are left alone
        if ((m && KEBAB.test(setName)) || /^icon\//i.test(n.name)) info = { set: m && KEBAB.test(setName) ? setName : n.name.replace(/^icon\//i, "").replace(/ · \d+$/, ""), style: m ? m[1] : "Stroke", type: m && m[2] ? m[2] : "Rounded", kind: "instance" };
        else {
          // other icon sets (Iconly, keyword-named glyphs): small, square, vector-only instances that are not logos or avatars
          const io = mc.name.match(/^Iconly\/([A-Za-z]+)\/(.+)$/);
          const plain = !/=/.test(mc.name) && n.width <= 32 && Math.abs(n.width - n.height) < 1.5 && !/logo|avatar|flag|photo|image|brand/i.test(n.name + " " + mc.name)
            && n.findAll((x) => x.type === "TEXT" || x.type === "INSTANCE").length === 0 && n.findAll((x) => VEC_.test(x.type)).length > 0;
          if (io || plain) {
            const STY = { Bulk: "Bulk", Bold: "Solid", Light: "Stroke", Broken: "Stroke", Curved: "Stroke", TwoTone: "Duotone" };
            const vs = n.findAll((x) => VEC_.test(x.type));
            const filled = vs.filter((x) => Array.isArray(x.fills) && x.fills.some((p) => p.visible !== false)).length, stroked = vs.filter((x) => Array.isArray(x.strokes) && x.strokes.some((p) => p.visible !== false)).length;
            const duo = vs.some((x) => x.opacity < 1 || (Array.isArray(x.fills) && x.fills.some((p) => p.visible !== false && (p.opacity ?? 1) < 1)));
            info = { set: io ? io[2] : mc.name.split(",")[0].replace(/^.*\//, ""), style: io ? STY[io[1]] || "Stroke" : filled > stroked ? (duo ? "Bulk" : "Solid") : "Stroke", type: "Rounded", kind: "instance" };
          }
        }
      } else if (KEBAB.test(n.name) && !inInstance(n) && Math.abs(n.width - n.height) < 1.5 && n.findAll((x) => x.type === "TEXT").length === 0) {
        const vs = n.findAll((x) => VEC_.test(x.type));
        if (vs.length && n.findAll((x) => x.type === "FRAME" || x.type === "RECTANGLE").length <= 1) {
          const filled = vs.filter((x) => Array.isArray(x.fills) && x.fills.some((p) => p.visible !== false)).length, stroked = vs.filter((x) => Array.isArray(x.strokes) && x.strokes.some((p) => p.visible !== false)).length;
          const duo = vs.some((x) => x.opacity < 1 || (Array.isArray(x.fills) && x.fills.some((p) => p.visible !== false && (p.opacity ?? 1) < 1)));
          info = { set: n.name.replace(/ · \d+$/, ""), style: filled > stroked ? (duo ? "Bulk" : "Solid") : "Stroke", type: "Rounded", kind: "frame" };
        }
      }
      if (info) { out.push([n, info]); n.findAll(() => true).forEach((x) => skipInside.add(x.id)); }
    }
  }
  return out;
}
