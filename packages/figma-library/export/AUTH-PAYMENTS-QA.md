# Design QA: auth + payments sets (owner request 2026-11-26)

Owner: "arekbar QA kor design principal sob thik ase kina dekh, jemon alignment, hierarchy, contrast, everything."

You QA and FIX the "<System> / Auth and payments" section in each assigned file. Edit only nodes inside that
section (and never the original library nodes it was cloned from). Keep every layout decision and Rule zero of
AUTH-PAYMENTS-BRIEF.md (same folder): no invented elements, no dot separators, icons stroke 1.5.

| System | File key | Section |
|---|---|---|
| Loopo | lBBGdEStjKRYnwrTdJs1T3 | 250:66748 |
| MailPulse | HO8FIKAQjZlHdfM65hYYis | 192:46753 |
| Auton | Q7K7Ix4KwJryX5XvLhaCZg | 240:41742 |
| Axon | s8dzTyDpYzwDoDkqPekxXk | 809:54818 |
| Veriq | PB3XpCt9pnD9EiJfqXAiN3 | 143:26940 |
| Vantage (dark) | nG9LOj0Kw0l4iD7sSXFmc9 | 308:10507 |
| Montra | toYI6MQsdYYU5sQvHPWTdY | 64:27261 |
| Spendix | LIk6T8Wj1vA1m7P3xSNCl5 | 62:30050 |
| Abotix | Wbmq8H1cYhZN0uX1YdppR2 | 23:22589 |

## 1. Scripted pass (run per component, fix, rerun until clean)

Run `qa-check.js` (below) via use_figma on the section. It reports:
- **contrast**: text vs. the nearest opaque ancestor fill (alpha-composited). Body text and labels need ≥ 4.5:1,
  text ≥ 18px (or ≥ 14px bold/medium-600+) ≥ 3:1. Placeholder/hint/disabled may be ≥ 3:1. Badge text vs badge fill too.
  Decorative faded background clones (e.g. MailPulse's faded issue cards, Montra peeking carousel cards) are exempt
  ONLY if their parent frame name contains "faded", "peek", "ghost" or opacity ≤ 0.6 — say which in the report.
- **overflow**: a child's bounds extend outside a clipping parent, or text whose box is wider than its parent's inner width.
- **overlap**: two visible siblings overlapping in a non-auto-layout frame (excluding intentional stacks: names
  containing "stack", "fan", "carousel", "overlay", "peek", "Brand ·", or absolute-positioned decoration).
- **offgrid**: x/y/width/height with fractional noise not on the file's scale (e.g. 37.4999 where 37.5 intended) —
  only report when |v - round(v*2)/2| > 0.05 for scale-1 files; for 0.9139-scale files skip this check.
- **text truncation**: TEXT with textTruncation ENDING or fixed height smaller than its content.

## 2. Visual pass (screenshot every component at 2x zoom, then crops of dense areas)

Check and fix:
- **Alignment**: left edges of label / input / button / helper line up; icon-text pairs vertically centred;
  numbers right-aligned in tables and amount columns; header rows align with their column cells; card paddings equal
  on all sides; equal gaps between repeated rows; buttons in a row share height and baseline.
- **Hierarchy**: one clear H1 per page (largest weight/size); section titles > labels > hints in a consistent step;
  primary action visually dominant, only ONE primary button per view; amounts/balances are the focal numbers.
- **Contrast**: see scripted pass; also states (focused input ring visible, selected vs unselected readable,
  disabled clearly lighter but still legible).
- **Spacing rhythm**: gaps come from the system's own scale; no cramped (text touching edges) or orphaned whitespace
  (big empty areas inside templates — e.g. a form floating with huge empty space above it should be vertically
  balanced/centred against its column, footer pinned at bottom).
- **Consistency within the system**: same radius family, same input height, same button height, same icon size per
  context, same font family; badge styles consistent.
- **Data sanity**: numbers add up, dates plausible, no lorem, no repeated placeholder names that look off.
- **Dark (Vantage)**: no pure-black text on dark, borders visible but subtle, focus rings visible.

## 3. Report

Per system: list of issues found → fix applied (node ids), anything intentionally left and why, final qa-check result
(must be [] or only documented exemptions), and the brief's original audit (must still be []).

## qa-check.js

```js
figma.skipInvisibleInstanceChildren = false;
const SECTION_ID = "__SECTION__";
const sec = await figma.getNodeByIdAsync(SECTION_ID);
const lum = (c) => { const f = (v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)); return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const mix = (top, a, bot) => ({ r: top.r * a + bot.r * (1 - a), g: top.g * a + bot.g * (1 - a), b: top.b * a + bot.b * (1 - a) });
const solid = (n) => (Array.isArray(n.fills) ? n.fills.filter((f) => f.visible !== false && f.type === "SOLID") : []);
const grad = (n) => (Array.isArray(n.fills) ? n.fills.find((f) => f.visible !== false && f.type.startsWith("GRADIENT")) : null);
function bgOf(node) {
  const chain = []; let p = node.parent;
  while (p && p.type !== "PAGE") { chain.push(p); p = p.parent; }
  let col = { r: 1, g: 1, b: 1 };
  for (const a of chain.reverse()) {
    const g = grad(a); if (g) { const s = g.gradientStops; const avg = s.reduce((m, q) => ({ r: m.r + q.color.r / s.length, g: m.g + q.color.g / s.length, b: m.b + q.color.b / s.length }), { r: 0, g: 0, b: 0 }); col = mix(avg, (g.opacity ?? 1) * (a.opacity ?? 1), col); }
    for (const f of solid(a)) col = mix(f.color, (f.opacity ?? 1) * (a.opacity ?? 1), col);
  }
  return col;
}
const exempt = (n) => { let p = n; while (p && p !== sec) { if (/faded|peek|ghost|Brand ·/i.test(p.name || "") || (p.opacity ?? 1) <= 0.6) return true; p = p.parent; } return false; };
const out = [];
for (const comp of sec.children.filter((c) => c.type === "COMPONENT" || c.type === "FRAME")) {
  const cn = comp.name.split("/").pop();
  for (const t of comp.findAll((n) => n.type === "TEXT" && n.visible)) {
    if (exempt(t)) continue;
    const f = solid(t)[0]; if (!f) continue;
    const bg = bgOf(t); const fg = mix(f.color, (f.opacity ?? 1) * (t.opacity ?? 1), bg);
    const r = ratio(fg, bg); const size = typeof t.fontSize === "number" ? t.fontSize : 14;
    const w = typeof t.fontWeight === "number" ? t.fontWeight : 400;
    const need = size >= 18 || (size >= 14 && w >= 600) ? 3 : /hint|placeholder|disabled|muted/i.test(t.name) ? 3 : 4.5;
    if (r < need) out.push(`${cn}: contrast ${r.toFixed(2)} < ${need} "${t.characters.slice(0, 30)}" ${t.id}`);
    if (t.textTruncation === "ENDING") out.push(`${cn}: truncated "${t.characters.slice(0, 30)}" ${t.id}`);
    const par = t.parent; if (par && "width" in par && par.type !== "GROUP") { const pad = (par.paddingLeft || 0) + (par.paddingRight || 0); if (t.width > par.width - pad + 0.5 && par.layoutMode !== "NONE") out.push(`${cn}: text wider than parent "${t.characters.slice(0, 30)}" ${t.id}`); }
  }
  for (const fr of comp.findAll((n) => (n.type === "FRAME" || n.type === "COMPONENT" || n.type === "INSTANCE") && n.visible && n.clipsContent && "children" in n)) {
    if (exempt(fr) || /carousel|peek|stack|fan/i.test(fr.name)) continue;
    for (const c of fr.children) { if (!c.visible || c.layoutPositioning === "ABSOLUTE") continue; if (c.x < -0.5 || c.y < -0.5 || c.x + c.width > fr.width + 0.5 || c.y + c.height > fr.height + 0.5) out.push(`${cn}: clipped ${c.name} in ${fr.name} ${c.id}`); }
  }
  for (const fr of comp.findAll((n) => (n.type === "FRAME") && n.visible && n.layoutMode === "NONE" && "children" in n)) {
    if (/stack|fan|carousel|overlay|peek|Brand ·|chart|graph|ring|gauge|face/i.test(fr.name) || exempt(fr)) continue;
    const ch = fr.children.filter((c) => c.visible && c.type !== "VECTOR" && c.type !== "LINE");
    for (let i = 0; i < ch.length; i++) for (let j = i + 1; j < ch.length; j++) { const a = ch[i], b = ch[j]; if (a.x < b.x + b.width - 1 && b.x < a.x + a.width - 1 && a.y < b.y + b.height - 1 && b.y < a.y + a.height - 1) out.push(`${cn}: overlap ${a.name} / ${b.name} in ${fr.name} ${fr.id}`); }
  }
}
return [...new Set(out)].slice(0, 120);
```
