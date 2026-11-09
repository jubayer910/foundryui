// Run once after all harvest.js batches. QA removals, atoms from the "00" components section, naming, relayout.
const S = typeof args !== "undefined" && args.system ? args.system : "Loopo";
const LIB = figma.root.children.find((p) => p.name === "Foundry Library");
await figma.setCurrentPageAsync(LIB);
// 1. remove low-value pieces (plain buttons, text-only headings, repeated list items); atoms cover them
const REMOVE = /^(Tab|Button Primary|Button Secondary|View all|Back link|Change|Nav group label|H2 · .*|TOC · .*)$/;
for (const c of LIB.findAll((n) => n.type === "COMPONENT")) if (REMOVE.test(c.name.split("/").pop())) c.remove();
// 2. names: "Panel X" -> "X card", "Modal X" -> "X modal", duplicates get their first text
const nice = (short) => {
  let s = short.replace(/ — UX Improved/, "").replace(/^(\d+)\.0 · (.+)$/, "$2 page");
  s = s.replace(/^Panel (.+)$/, "$1 card").replace(/^Modal (.+)$/, "$1 modal").replace(/^Drawer (.+)$/, "$1 drawer").replace(/^Menu (.+)$/, "$1 menu").replace(/^Popover (.+)$/, "$1 popover").replace(/^Integration (.+)$/, "$1 integration card").replace(/^Shell /, "").replace(/ · /g, ", ");
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const firstText = (n) => n.findAll((x) => x.type === "TEXT").map((x) => x.characters.trim()).find((c) => c && c.length < 28) || "";
const seen = new Set();
for (const c of LIB.findAll((n) => (n.type === "COMPONENT" && n.parent.type === "SECTION") || n.type === "COMPONENT_SET")) {
  const cat = c.parent.name.split(" / ").slice(1).join(" / ");
  let nm = cat === "Atoms" ? c.name.split("/").pop() : nice(c.name.split("/").pop());
  if (seen.has(cat + "|" + nm)) nm += ", " + (firstText(c) || Math.round(c.width));
  seen.add(cat + "|" + nm);
  c.name = S + "/" + cat.replace("Overlays/", "Overlays - ") + "/" + nm;
}
// 3. light section backgrounds + shelf relayout, sections stacked in catalogue order
const order = ["Templates", "Navigation", "Headers", "KPI and stats", "Charts", "Tables and lists", "Cards and panels", "Forms", "Editors", "Overlays/Modals", "Overlays/Drawers", "Overlays/Menus", "Overlays/Popovers", "Feedback", "Atoms"];
const secs = LIB.children.filter((x) => x.type === "SECTION").sort((a, b) => order.indexOf(a.name.split(" / ").slice(1).join(" / ")) - order.indexOf(b.name.split(" / ").slice(1).join(" / ")));
let Y = 0; const counts = {};
for (const s of secs) {
  s.fills = [{ type: "SOLID", color: { r: 0.957, g: 0.957, b: 0.949 } }];
  const kids = [...s.children].sort((a, b) => b.height - a.height);
  let x = 80, y = 140, rowH = 0;
  for (const k of kids) { if (x + k.width > 6400 && x > 80) { x = 80; y += rowH + 64; rowH = 0; } k.x = x; k.y = y; x += k.width + 64; rowH = Math.max(rowH, k.height); }
  s.resizeWithoutConstraints(Math.max(...kids.map((k) => k.x + k.width)) + 80, y + rowH + 80); s.x = 0; s.y = Y; Y += s.height + 240;
  counts[s.name] = kids.length;
}
return counts;
