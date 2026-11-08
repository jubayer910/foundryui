// Index + Cover for the Components file. Re-run after every wave: it rebuilds both pages from what exists.
const CATS = ["Primitives", "Overlays", "Dashboard blocks", "Navigation", "Charts"];
// Keyword descriptions: Assets-panel search matches these, so every component carries its keywords.
const DESCRIPTIONS = {
  "Button": "Primary action. Keywords: button, cta, submit, action, primary, secondary, ghost, danger, delete.",
  "Icon button": "Square icon-only button with unread indicator. Keywords: icon button, toolbar, bell, notification, action.",
  "Badge": "Status label. Keywords: badge, tag, status, pill, chip, label, paid, pending, overdue.",
  "Delta chip": "Change vs previous period. Keywords: delta, trend, change, percent, growth, kpi.",
  "Input": "Text field with label, icon and hint. Keywords: input, text field, form, email, error, textbox.",
  "Search field": "Search box with shortcut hint. Keywords: search, find, command, cmd k, filter.",
  "Select": "Dropdown trigger. Keywords: select, dropdown, picker, combobox, period, date range.",
  "Menu item": "Option row for select menus. Keywords: menu item, option, list item, check.",
  "Switch": "On/off toggle. Keywords: switch, toggle, setting, on off, preference.",
  "Checkbox": "Checkbox with label. Keywords: checkbox, check, select, agree, indeterminate.",
  "Segment": "One option of a segmented control. Keywords: segment, toggle group, option.",
  "Segmented control": "Switch between 2–4 views. Keywords: segmented control, toggle group, tabs, day week month.",
  "Tab": "One tab. Keywords: tab, navigation, section.",
  "Tabs": "Tab bar. Keywords: tabs, tab bar, sections, navigation, overview.",
  "Avatar": "Initials avatar in five tints. Keywords: avatar, user, profile, initials, person.",
  "Avatar group": "Overlapping avatars with overflow count. Keywords: avatar group, team, members, people, stack.",
  "Tooltip": "Hover hint. Keywords: tooltip, hint, popover, hover, help.",
  "Dropdown item": "Menu row with icon, label, shortcut and danger tone. Keywords: dropdown item, menu, action, context menu.",
  "Dropdown menu": "Action menu. Keywords: dropdown, menu, context menu, actions, more, kebab.",
  "Dialog": "Modal with title, text and actions. Keywords: dialog, modal, popup, confirm, invite, overlay.",
  "KPI card": "Dashboard metric card with delta and sparkline. Keywords: kpi, metric, stat, card, revenue, mrr, sparkline.",
  "Ranked row": "Row with proportional bar. Keywords: ranked row, leaderboard, bar, top list.",
  "Ranked list": "Top-N list with bars. Keywords: ranked list, leaderboard, top countries, sources, bars.",
  "Empty state": "No-data placeholder with action. Keywords: empty state, no data, zero state, placeholder, onboarding.",
  "Cell": "Table cell: text, ID, badge, amount, checkbox. Keywords: cell, table cell, column.",
  "Header cell": "Table header cell with sort. Keywords: header cell, column header, sort.",
  "Row": "Table row with exposed cells. Keywords: row, table row, invoice row.",
  "Data table": "Invoices-style table with selection bar. Keywords: data table, table, grid, invoices, list, rows.",
  "Nav item": "Sidebar link with icon, count and state. Keywords: nav item, menu link, sidebar item, navigation.",
  "Sidebar": "App sidebar with groups. Keywords: sidebar, navigation, menu, app shell, nav.",
};
const rows = [];
for (const name of CATS) {
  const p = figma.root.children.find((x) => x.name === name);
  if (!p) continue;
  await p.loadAsync();
  for (const n of p.findAll((x) => x.type === "COMPONENT_SET" || (x.type === "COMPONENT" && x.parent.type !== "COMPONENT_SET"))) {
    const base = n.name.split("/").pop(); if (DESCRIPTIONS[base]) n.description = DESCRIPTIONS[base];
    const defs = n.type === "COMPONENT_SET" || !n.variantProperties ? (() => { try { return n.componentPropertyDefinitions; } catch { return {}; } })() : {};
    const props = Object.entries(defs).map(([k, d]) => k.split("#")[0] + (d.type === "VARIANT" ? " (" + d.variantOptions.length + ")" : ""));
    rows.push({ id: n.id, cat: name, name: n.name.split("/").pop(), variants: n.type === "COMPONENT_SET" ? n.children.length : 1, props, desc: (n.description || "").split(".")[0] });
  }
}

// ---------- Index ----------
const P = await page("Index");
P.children.forEach((c) => c.remove());
const wrap = box({ name: "Index", dir: "v", gap: 0, pad: 0, w: 1440, align: "MIN" }); wrap.primaryAxisSizingMode = "AUTO";
fill(wrap, "#fafaf9"); P.appendChild(wrap);
const head = box({ name: "Header", dir: "v", gap: 8, pad: [64, 64, 32, 64], align: "MIN" }); wrap.appendChild(head);
await txt(head, "COMPONENT INDEX", "Mono/11 Regular", "muted", "Eyebrow");
await txt(head, rows.length + " components, " + rows.reduce((a, r) => a + r.variants, 0) + " variants", "Display/28 SemiBold", "ink", "Title");
const how = await txt(head, "Find anything: open the Assets panel and type a name or keyword (descriptions carry keywords), or browse the folders (Primitives/, Overlays/, Dashboard blocks/, Navigation/, Charts/). Click a name below to jump to it.", "Body/14 Regular", "muted", "How"); how.textAutoResize = "HEIGHT"; how.resize(820, how.height);
const table = box({ name: "Table", dir: "v", gap: 0, pad: [0, 64, 64, 64], align: "MIN" }); wrap.appendChild(table); table.layoutSizingHorizontal = "FILL";
const COLS = [["Component", 260], ["Category", 160], ["Variants", 90], ["Top-level properties", 470], ["What it is", 330]];
const rowFrame = async (cells, header) => {
  const r = box({ name: header ? "Head" : cells[0], gap: 0, h: header ? 36 : 44 }); table.appendChild(r); r.layoutSizingHorizontal = "FILL";
  r.strokes = [solid(V().color.line)]; r.strokeTopWeight = 0; r.strokeLeftWeight = 0; r.strokeRightWeight = 0; r.strokeBottomWeight = 1;
  if (header) fill(r, "sunken");
  for (let i = 0; i < COLS.length; i++) {
    const c = box({ name: COLS[i][0], w: COLS[i][1], h: header ? 36 : 44, pad: [0, 12, 0, 12] }); r.appendChild(c); c.clipsContent = true;
    const t = await txt(c, String(cells[i] || "—"), header ? "Caption/11 Medium" : i === 0 ? "Body/13 Medium" : i === 3 ? "Mono/11 Regular" : "Body/13 Regular", header ? "muted" : i === 0 ? "ink" : "body");
    t.textAutoResize = "NONE"; t.resize(COLS[i][1] - 24, 18); t.textTruncation = "ENDING";
    if (!header && i === 0 && cells.link) t.hyperlink = { type: "NODE", value: cells.link };
  }
};
await rowFrame(COLS.map((c) => c[0].toUpperCase()), true);
for (const r of rows) { const cells = [r.name, r.cat, r.variants, r.props.join(", "), r.desc]; cells.link = r.id; await rowFrame(cells, false); }

// ---------- Cover ----------
const C = figma.root.children.find((x) => x.name === "Cover"); await C.loadAsync();
C.children.forEach((c) => c.remove());
const cv = box({ name: "Cover", dir: "v", gap: 28, pad: 96, w: 1600, h: 960, align: "MIN", justify: "SPACE_BETWEEN" }); fill(cv, "#fafaf9"); C.appendChild(cv);
const top = box({ name: "Top", dir: "v", gap: 16, align: "MIN" }); cv.appendChild(top);
await txt(top, "FOUNDRY UI", "Mono/11 Regular", "muted", "Eyebrow");
const h1 = await txt(top, "Components", "Display/28 SemiBold", "ink", "Title"); h1.fontSize = 96; h1.lineHeight = { unit: "PERCENT", value: 100 }; h1.letterSpacing = { unit: "PERCENT", value: -4 };
const sub = await txt(top, "Every Foundry UI component in one library: token-driven, built with auto layout, and every option is a top-level property in the right panel. Switch the System variable mode to restyle all of it.", "Body/15 Medium", "body", "Subtitle"); sub.textAutoResize = "HEIGHT"; sub.resize(860, sub.height);
const stats = box({ name: "Stats", gap: 48, align: "MIN" }); cv.appendChild(stats);
for (const [n, l] of [[rows.length, "components"], [rows.reduce((a, r) => a + r.variants, 0), "variants"], [CATS.length, "categories"], ["7,165", "icons via Platform · Icons"]]) {
  const s = box({ name: l, dir: "v", gap: 4, align: "MIN" }); stats.appendChild(s);
  const t = await txt(s, String(n), "Display/28 SemiBold", "ink", "Number"); t.fontSize = 40;
  await txt(s, l, "Body/13 Regular", "muted", "Label");
}
await txt(cv, "Light mode with the Loopo system. More systems and dark mode arrive as variable modes.", "Mono/11 Regular", "muted", "Footer");
return { components: rows.length, variants: rows.reduce((a, r) => a + r.variants, 0) };
