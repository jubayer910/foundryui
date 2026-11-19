// Bridge: posts the Foundry Library item list (apps/web/lib/figma-items.json rows) for one system. args: {sys, file}
// Row: id, system, category, name, slug, w, h, keywords (from the description), source (screen), thumb.
if (figma.root.name.toLowerCase() !== args.file.toLowerCase()) throw new Error("wrong file " + figma.root.name);
const P = figma.root.children.find((p) => p.name === "Foundry Library");
await P.loadAsync();
const kebab = (s) => s.toLowerCase().replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
// the harvest counts icon-free vectors as chart geometry; names that are plainly something else win
const NOT_CHART = /\b(form|modal|drawer|menu|popover|settings|nav|header|footer|profile|search|filters?)\b/i;
const rows = [];
for (const s of P.children) {
  if (s.type !== "SECTION") continue;
  let category = s.name.split(" / ").slice(1).join(" / ").replace("Overlays/", "");
  for (const c of s.children) {
    if (c.type !== "COMPONENT" && c.type !== "COMPONENT_SET") continue;
    const name = c.name.split("/").pop();
    let cat = category;
    if (cat === "Charts" && NOT_CHART.test(name) && !/chart|trend|graph/i.test(name)) cat = /modal/i.test(name) ? "Modals" : /drawer/i.test(name) ? "Drawers" : /menu/i.test(name) ? "Menus" : /popover/i.test(name) ? "Popovers" : /form|settings|search|filter/i.test(name) ? "Forms" : /nav/i.test(name) ? "Navigation" : "Headers";
    const d = c.description || "";
    const src = (d.match(/screen "([^"]+)"/) || [])[1] || "";
    const kw = (d.match(/Content: (.*)$/) || [])[1] || "";
    const idd = c.id.replace(/[:;]/g, "-");
    rows.push({ id: c.id, system: args.sys, category: cat, name, slug: args.sys + "-" + kebab(name) + "-" + c.id.replace(/\D/g, ""), w: Math.round(c.width), h: Math.round(c.height), keywords: kw, source: src, thumb: "/library/" + args.sys + "/" + idd + ".webp" });
  }
}
const r = await fetch("http://localhost:9231/meta?system=" + args.sys, { method: "POST", body: JSON.stringify(rows) });
const by = {}; for (const x of rows) by[x.category] = (by[x.category] || 0) + 1;
return { rows: rows.length, by, status: r.status };
