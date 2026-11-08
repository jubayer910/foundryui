// Overlays, dashboard blocks and navigation. Composite blocks are made of sub-components whose
// nested instances are exposed, so every label/icon/state is editable from the top level.
const iconComp = async (name) => (await iconSet(name)).children.find((c) => c.name === "Style=Stroke Rounded");
const swapProp = async (set, propName, layer, iconName) => {
  const def = await iconComp(iconName);
  const key = set.addComponentProperty(propName, "INSTANCE_SWAP", def.id);
  const nodes = set.type === "COMPONENT_SET" ? set.children : [set];
  for (const v of nodes) for (const n of v.findAll((x) => x.name === layer && x.type === "INSTANCE")) n.componentPropertyReferences = { ...(n.componentPropertyReferences || {}), mainComponent: key };
  return key;
};
const propOn = (comp, name, type, def, layer, field) => {
  const key = comp.addComponentProperty(name, type, def);
  for (const n of comp.findAll((x) => x.name === layer && !inInstance(x, comp))) n.componentPropertyReferences = { ...(n.componentPropertyReferences || {}), [field]: key };
  return key;
};
const pk = (setOrComp, prefix) => Object.keys(setOrComp.componentPropertyDefinitions).find((k) => k.startsWith(prefix + "#") || k === prefix);
const card = (n) => { fill(n, "surface"); stroke(n, "line"); radius(n, "lg"); return n; };
const results = {};
const only = args.only ? [].concat(args.only) : null;
const want = (k) => !only || only.includes(k);
const O = null, D = null, N = null;

// ---------- Tooltip ----------
if (want("tooltip")) {
  const sec = await section(O, "Tooltip", "Short hint shown on hover.");
  const c = box({ component: true, name: "Tooltip", pad: [6, 10, 6, 10] });
  fill(c, "surface"); stroke(c, "line"); radius(c, "sm"); await c.setEffectStyleIdAsync(G.es.Overlay.id);
  await txt(c, "Export as CSV", "Caption/12 Medium", "ink", "Label");
  sec.appendChild(c);
  propOn(c, "Label", "TEXT", "Export as CSV", "Label", "characters");
  results.tooltip = c.id;
}

// ---------- Dropdown menu ----------
if (want("dropdown-menu")) {
  const sec = await section(O, "Dropdown menu", "Menu built from exposed Dropdown item instances. Each item has icon, label, shortcut and a danger tone.");
  const items = [];
  for (const tone of ["Default", "Danger"]) for (const st of ["Default", "Highlighted"]) {
    const c = box({ component: true, name: `Tone=${tone}, State=${st}`, gap: 8, pad: [8, 10, 8, 10], w: 220 });
    radius(c, "xs"); if (st === "Highlighted") fill(c, tone === "Danger" ? "negative-soft" : "hover");
    const col = tone === "Danger" ? "negative" : st === "Highlighted" ? "ink" : "body";
    c.appendChild(await icon(tone === "Danger" ? "trash" : "copy", 16, col));
    const l = await txt(c, tone === "Danger" ? "Delete" : "Duplicate", "Body/13 Regular", col, "Label"); l.layoutGrow = 1;
    await txt(c, "⌘D", "Mono/11 Regular", "faint", "Shortcut");
    items.push(c);
  }
  G.rowKey = (n) => n.split(",")[0];
  const iset = makeSet(items, "Dropdown item", sec, 2);
  propOn(iset, "Label", "TEXT", "Duplicate", "Label", "characters");
  propOn(iset, "Shortcut", "TEXT", "⌘D", "Shortcut", "characters");
  propOn(iset, "Show shortcut", "BOOLEAN", true, "Shortcut", "visible");
  propOn(iset, "Show icon", "BOOLEAN", true, "Icon", "visible");
  await swapProp(iset, "Icon", "Icon", "copy");
  const menu = box({ component: true, name: "Dropdown menu", dir: "v", gap: 0, pad: 4, align: "MIN" });
  fill(menu, "surface"); stroke(menu, "line"); radius(menu, "md"); await menu.setEffectStyleIdAsync(G.es.Overlay.id);
  const spec = [["edit", "Rename", "⌘R", "Default"], ["copy", "Duplicate", "⌘D", "Default"], ["download", "Export", "⌘E", "Default"], ["sep"], ["trash", "Delete", "⌫", "Danger"]];
  let i = 0;
  for (const s of spec) {
    if (s[0] === "sep") { const r = figma.createRectangle(); r.name = "Separator"; r.resize(212, 1); fill(r, "line"); menu.appendChild(r); continue; }
    const inst = iset.children.find((x) => x.name === `Tone=${s[3]}, State=${i === 1 ? "Highlighted" : "Default"}`).createInstance();
    menu.appendChild(inst); inst.name = "Item " + (++i); inst.isExposedInstance = true;
    inst.setProperties({ [pk(iset, "Label")]: s[1], [pk(iset, "Shortcut")]: s[2], [pk(iset, "Icon")]: (await iconComp(s[0])).id });
  }
  sec.appendChild(menu);
  results["dropdown-menu"] = [iset.id, menu.id];
}

// ---------- Dialog ----------
if (want("dialog")) {
  const sec = await section(O, "Dialog", "Modal with title, description, close button and action buttons (exposed Button instances).");
  const btn = await findSet("Primitives", "Primitives/Button");
  const c = box({ component: true, name: "Dialog", dir: "v", gap: 20, pad: 20, w: 440, align: "MIN" }); c.primaryAxisSizingMode = "AUTO";
  card(c); await c.setEffectStyleIdAsync(G.es.Overlay.id);
  const head = box({ name: "Header", gap: 16, align: "MIN", justify: "SPACE_BETWEEN" }); c.appendChild(head); head.layoutSizingHorizontal = "FILL";
  const tx = box({ name: "Text", dir: "v", gap: 4, align: "MIN" }); head.appendChild(tx); tx.layoutGrow = 1;
  await txt(tx, "Invite teammates", "Title/16 Medium", "ink", "Title");
  const d = await txt(tx, "They'll get an email with a link to join Loopo.", "Body/13 Regular", "muted", "Description"); d.textAutoResize = "HEIGHT"; d.layoutSizingHorizontal = "FILL";
  const x = await icon("x", 16, "muted"); x.name = "Close"; head.appendChild(x);
  const body = box({ name: "Body", h: 72, w: 400, justify: "CENTER" }); c.appendChild(body); body.layoutSizingHorizontal = "FILL";
  radius(body, "sm"); fill(body, "sunken"); body.strokes = [solid(V().color["line-strong"])]; body.dashPattern = [4, 4];
  await txt(body, "Content", "Body/13 Regular", "faint", "Slot label");
  const foot = box({ name: "Footer", gap: 8, justify: "MAX" }); c.appendChild(foot); foot.layoutSizingHorizontal = "FILL";
  for (const [vn, lab, name] of [["Secondary", "Cancel", "Cancel button"], ["Primary", "Send invites", "Confirm button"]]) {
    const b = btn.children.find((v) => v.name === `Variant=${vn}, Size=MD, State=Default`).createInstance();
    foot.appendChild(b); b.name = name; b.isExposedInstance = true;
    b.setProperties({ [pk(btn, "Label")]: lab, [pk(btn, "Show leading icon")]: false });
  }
  sec.appendChild(c);
  propOn(c, "Title", "TEXT", "Invite teammates", "Title", "characters");
  propOn(c, "Description", "TEXT", "They'll get an email with a link to join Loopo.", "Description", "characters");
  propOn(c, "Show close", "BOOLEAN", true, "Close", "visible");
  propOn(c, "Show body", "BOOLEAN", true, "Body", "visible");
  results.dialog = c.id;
}

// ---------- KPI card ----------
if (want("kpi-card")) {
  const sec = await section(D, "KPI card", "Metric card: icon, label, value, delta chip, period and a sparkline. Trend sets the line direction and colour.");
  const chip = await findSet("Primitives", "Primitives/Delta chip");
  const comps = [];
  for (const trend of ["Up", "Down"]) {
    const up = trend === "Up";
    const c = box({ component: true, name: "Trend=" + trend, dir: "v", gap: 12, pad: 12, w: 300, align: "MIN" }); c.primaryAxisSizingMode = "AUTO";
    card(c); await c.setEffectStyleIdAsync(G.es.Card.id);
    const head = box({ name: "Head", gap: 8, pad: [0, 4, 0, 4] }); c.appendChild(head);
    const ib = box({ name: "Icon wrap", w: 24, h: 24, justify: "CENTER" }); radius(ib, "xs"); fill(ib, "hover"); head.appendChild(ib);
    ib.appendChild(await icon(up ? "wallet" : "receipt", 14, "muted"));
    await txt(head, up ? "Gross volume" : "Refunds", "Body/13 Medium", "body", "Label");
    const inner = box({ name: "Inner", gap: 12, pad: 12, align: "MAX", justify: "SPACE_BETWEEN" }); c.appendChild(inner); inner.layoutSizingHorizontal = "FILL";
    radius(inner, "sm"); inner.fills = [solid("#ffffff", 0.9)]; inner.effects = [{ type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.25 }, offset: { x: 0, y: 0 }, radius: 1, spread: 0, visible: true, blendMode: "NORMAL" }];
    const left = box({ name: "Numbers", dir: "v", gap: 6, align: "MIN" }); inner.appendChild(left);
    await txt(left, up ? "$84,320" : "$1,204", "Display/28 SemiBold", "ink", "Value").then((t) => (t.fontSize = 20));
    const meta = box({ name: "Meta", gap: 6 }); left.appendChild(meta);
    const ch = chip.children.find((v) => v.name === "Direction=" + trend).createInstance(); meta.appendChild(ch); ch.name = "Delta"; ch.isExposedInstance = true;
    await txt(meta, "vs last month", "Caption/11 Medium", "muted", "Period");
    const pts = up ? [26, 24, 25, 20, 21, 16, 17, 12, 13, 8, 9, 4] : [6, 8, 7, 11, 10, 14, 13, 18, 17, 22, 21, 26];
    const d = pts.map((y, i) => (i ? "L" : "M") + (i * 112) / (pts.length - 1) + " " + (y + 4)).join(" ");
    const col = up ? HEX.positive : HEX.negative;
    const sv = figma.createNodeFromSvg(`<svg xmlns="http://www.w3.org/2000/svg" width="112" height="36" viewBox="0 0 112 36" fill="none"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${col}" stop-opacity="0.22"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></linearGradient></defs><path d="${d} L112 36 L0 36 Z" fill="url(#g)"/><path d="${d}" stroke="${col}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`);
    sv.name = "Sparkline"; inner.appendChild(sv);
    comps.push(c);
  }
  const set = makeSet(comps, "KPI card", sec, 2, "Dashboard metric card.");
  propOn(set, "Label", "TEXT", "Gross volume", "Label", "characters");
  propOn(set, "Value", "TEXT", "$84,320", "Value", "characters");
  propOn(set, "Period", "TEXT", "vs last month", "Period", "characters");
  propOn(set, "Show sparkline", "BOOLEAN", true, "Sparkline", "visible");
  await swapProp(set, "Icon", "Icon", "wallet");
  results["kpi-card"] = set.id;
}

// ---------- Ranked list ----------
if (want("ranked-list")) {
  const sec = await section(D, "Ranked list", "Rows with a proportional bar. Bar sets the fill width; rank, label and value are text properties.");
  const rows = [];
  for (const pct of [100, 80, 60, 40, 20]) {
    const c = box({ component: true, name: "Bar=" + pct + "%", gap: 0, pad: [0, 10, 0, 10], h: 36, w: 320 });
    radius(c, "sm"); c.clipsContent = true;
    const bar = figma.createRectangle(); bar.name = "Bar"; bar.resize(Math.max(8, (320 * pct) / 100), 36); bar.fills = [{ type: "SOLID", color: rgb(HEX.accent), opacity: 0.1 }]; radius(bar, "sm");
    c.appendChild(bar); bar.layoutPositioning = "ABSOLUTE"; bar.x = 0; bar.y = 0;
    const r = await txt(c, "01", "Mono/11 Regular", "muted", "Rank"); r.textAutoResize = "NONE"; r.resize(32, 14);
    const l = await txt(c, "United States", "Body/13 Regular", "body", "Label"); l.layoutGrow = 1;
    await txt(c, "18,620", "Body/13 Medium", "ink", "Value");
    rows.push(c);
  }
  const rset = makeSet(rows, "Ranked row", sec, 5);
  for (const [n, d] of [["Rank", "01"], ["Label", "United States"], ["Value", "18,620"]]) propOn(rset, n, "TEXT", d, n, "characters");
  const list = box({ component: true, name: "Ranked list", dir: "v", gap: 4, w: 320, align: "MIN" }); list.primaryAxisSizingMode = "AUTO";
  const hd = box({ name: "Header", pad: [0, 4, 4, 4], justify: "SPACE_BETWEEN" }); list.appendChild(hd); hd.layoutSizingHorizontal = "FILL";
  await txt(hd, "TOP COUNTRIES", "Caption/11 Medium", "faint", "Column 1"); await txt(hd, "VISITORS", "Caption/11 Medium", "faint", "Column 2");
  const data = [["United States", "18,620", 100], ["Germany", "9,310", 60], ["United Kingdom", "7,860", 40], ["Canada", "5,120", 40], ["Bangladesh", "3,940", 20]];
  data.forEach(([lab, val, pct], i) => {
    const inst = rset.children.find((x) => x.name === "Bar=" + pct + "%").createInstance(); list.appendChild(inst); inst.name = "Row " + (i + 1); inst.isExposedInstance = true;
    inst.setProperties({ [pk(rset, "Rank")]: "0" + (i + 1), [pk(rset, "Label")]: lab, [pk(rset, "Value")]: val });
  });
  sec.appendChild(list);
  propOn(list, "Title", "TEXT", "TOP COUNTRIES", "Column 1", "characters");
  propOn(list, "Metric", "TEXT", "VISITORS", "Column 2", "characters");
  results["ranked-list"] = [rset.id, list.id];
}

// ---------- Empty state ----------
if (want("empty-state")) {
  const sec = await section(D, "Empty state", "Shown when a list has no data. Icon, title, description and action are top-level properties.");
  const btn = await findSet("Primitives", "Primitives/Button");
  const c = box({ component: true, name: "Empty state", dir: "v", gap: 0, pad: [40, 24, 40, 24], w: 420, align: "CENTER" }); c.primaryAxisSizingMode = "AUTO";
  radius(c, "lg"); fill(c, "sunken"); c.strokes = [solid(V().color["line-strong"])]; c.dashPattern = [4, 4];
  const ib = box({ name: "Icon wrap", w: 48, h: 48, justify: "CENTER" }); card(ib); radius(ib, "md"); await ib.setEffectStyleIdAsync(G.es.Card.id); c.appendChild(ib);
  ib.appendChild(await icon("file-invoice", 22, "ink"));
  const gap1 = box({ name: "Gap", h: 16, w: 1 }); c.appendChild(gap1);
  await txt(c, "No invoices yet", "Body/15 Medium", "ink", "Title");
  const d = await txt(c, "Create your first invoice and it will show up here.", "Body/13 Regular", "muted", "Description"); d.textAlignHorizontal = "CENTER"; d.textAutoResize = "HEIGHT"; d.resize(288, d.height);
  const gap2 = box({ name: "Gap", h: 20, w: 1 }); c.appendChild(gap2);
  const b = btn.children.find((v) => v.name === "Variant=Primary, Size=MD, State=Default").createInstance(); c.appendChild(b); b.name = "Action"; b.isExposedInstance = true;
  b.setProperties({ [pk(btn, "Label")]: "New invoice" });
  sec.appendChild(c);
  propOn(c, "Title", "TEXT", "No invoices yet", "Title", "characters");
  propOn(c, "Description", "TEXT", "Create your first invoice and it will show up here.", "Description", "characters");
  propOn(c, "Show action", "BOOLEAN", true, "Action", "visible");
  await swapProp(c, "Icon", "Icon", "file-invoice");
  results["empty-state"] = c.id;
}

// ---------- Data table ----------
if (want("data-table")) {
  const sec = await section(D, "Data table", "Table from Header cell, Cell and Row components. Cell types: Text, ID, Badge, Amount, Checkbox. Rows expose every cell.");
  const badge = await findSet("Primitives", "Primitives/Badge");
  const cb = await findSet("Primitives", "Primitives/Checkbox");
  const W = { Checkbox: 40, ID: 104, Text: 200, Badge: 120, Amount: 120 };
  const cells = [];
  for (const [type, w] of Object.entries(W)) {
    const c = box({ component: true, name: "Type=" + type, pad: [0, type === "Checkbox" || type === "Amount" ? 16 : 0, 0, type === "Checkbox" ? 16 : 0], h: 48, w, justify: type === "Amount" ? "MAX" : "MIN" });
    if (type === "Checkbox") { const i = cb.children.find((v) => v.name === "Checked=Off").createInstance(); i.setProperties({ [pk(cb, "Show label")]: false }); c.appendChild(i); i.name = "Checkbox"; i.isExposedInstance = true; }
    else if (type === "Badge") { const i = badge.children.find((v) => v.name === "Tone=Positive").createInstance(); i.setProperties({ [pk(badge, "Label")]: "Paid" }); c.appendChild(i); i.name = "Status"; i.isExposedInstance = true; }
    else await txt(c, type === "ID" ? "INV-2836" : type === "Amount" ? "$4,820.00" : "Halcyon Bank", type === "ID" ? "Mono/11 Regular" : type === "Amount" ? "Body/13 Medium" : "Body/13 Regular", type === "ID" ? "muted" : type === "Amount" ? "ink" : "body", "Text");
    cells.push(c);
  }
  const cset = makeSet(cells, "Cell", sec, 5);
  propOn(cset, "Text", "TEXT", "Halcyon Bank", "Text", "characters");
  const hc = box({ component: true, name: "Header cell", gap: 4, h: 36, w: 200 }); await txt(hc, "CUSTOMER", "Caption/11 Medium", "muted", "Label"); const sort = await icon("chevron-down", 12, "faint"); sort.name = "Sort"; hc.appendChild(sort); sec.appendChild(hc);
  propOn(hc, "Label", "TEXT", "CUSTOMER", "Label", "characters"); propOn(hc, "Show sort", "BOOLEAN", false, "Sort", "visible"); sort.visible = false;
  const rowComp = box({ component: true, name: "Row", h: 48 }); rowComp.strokes = [solid(V().color.line)]; rowComp.strokeTopWeight = 0; rowComp.strokeLeftWeight = 0; rowComp.strokeRightWeight = 0; rowComp.strokeBottomWeight = 1; fill(rowComp, "surface");
  for (const [t, nm] of [["Checkbox", "Select"], ["ID", "Invoice"], ["Text", "Customer"], ["Badge", "Status"], ["Amount", "Amount"]]) { const i = cset.children.find((v) => v.name === "Type=" + t).createInstance(); rowComp.appendChild(i); i.name = nm; i.isExposedInstance = true; }
  sec.appendChild(rowComp);
  const table = box({ component: true, name: "Data table", dir: "v", gap: 0, align: "MIN" }); card(table); table.clipsContent = true;
  const bar = box({ name: "Selection bar", pad: [8, 16, 8, 16], justify: "SPACE_BETWEEN", w: 584 }); fill(bar, "sunken"); bar.strokes = [solid(V().color.line)]; bar.strokeTopWeight = 0; bar.strokeLeftWeight = 0; bar.strokeRightWeight = 0; bar.strokeBottomWeight = 1; table.appendChild(bar);
  await txt(bar, "2 selected", "Body/13 Regular", "body", "Selection"); await txt(bar, "Export", "Body/13 Medium", "accent", "Bulk action");
  const header = box({ name: "Header", h: 36 }); fill(header, "sunken"); table.appendChild(header);
  for (const [lab, w] of [["", 40], ["INVOICE", 104], ["CUSTOMER", 200], ["STATUS", 120], ["AMOUNT", 120]]) { const i = hc.createInstance(); header.appendChild(i); i.resize(w, 36); i.setProperties({ [pk(hc, "Label")]: lab || " " }); i.name = lab ? lab[0] + lab.slice(1).toLowerCase() : "Select"; if (lab === "AMOUNT") { i.primaryAxisAlignItems = "MAX"; i.paddingRight = 16; } }
  const rowsData = [["INV-2836", "Halcyon Bank", "Positive", "Paid", "$4,820.00"], ["INV-2837", "Northwind Labs", "Warning", "Pending", "$1,240.00"], ["INV-2838", "Orbit Freight", "Negative", "Overdue", "$9,310.50"], ["INV-2839", "Acme Robotics", "Positive", "Paid", "$620.00"]];
  for (const [i, r] of rowsData.entries()) {
    const ri = rowComp.createInstance(); table.appendChild(ri); ri.name = "Row " + (i + 1); ri.isExposedInstance = true;
    const set = (name, val) => { const c = ri.findOne((n) => n.name === name); c.setProperties({ [pk(cset, "Text")]: val }); };
    set("Invoice", r[0]); set("Customer", r[1]); set("Amount", r[4]);
    const st = ri.findOne((n) => n.name === "Status").findOne((n) => n.name === "Status");
    st.swapComponent(badge.children.find((v) => v.name === "Tone=" + r[2])); st.setProperties({ [pk(badge, "Label")]: r[3] });
  }
  sec.appendChild(table);
  propOn(table, "Show selection bar", "BOOLEAN", true, "Selection bar", "visible");
  results["data-table"] = [cset.id, hc.id, rowComp.id, table.id];
}

// ---------- Sidebar navigation ----------
if (want("sidebar-nav")) {
  const sec = await section(N, "Sidebar navigation", "Sidebar from exposed Nav item instances. Each item: icon, label, count and state.");
  const items = [];
  for (const st of ["Default", "Hover", "Active"]) {
    const c = box({ component: true, name: "State=" + st, gap: 10, pad: [0, 10, 0, 10], h: 34, w: 216 });
    radius(c, "sm"); if (st === "Hover") fill(c, "hover"); if (st === "Active") { fill(c, "surface"); stroke(c, "line"); await c.setEffectStyleIdAsync(G.es.Card.id); }
    c.appendChild(await icon("home", 18, st === "Default" ? "muted" : "ink"));
    const l = await txt(c, "Overview", "Body/13 Medium", st === "Default" ? "body" : "ink", "Label"); l.layoutGrow = 1;
    const cnt = box({ name: "Count", pad: [0, 6, 0, 6], h: 18 }); radius(cnt, "full"); fill(cnt, "surface"); stroke(cnt, "line"); c.appendChild(cnt);
    await txt(cnt, "12", "Caption/11 Medium", "muted", "Count label");
    items.push(c);
  }
  const iset = makeSet(items, "Nav item", sec, 3);
  propOn(iset, "Label", "TEXT", "Overview", "Label", "characters");
  propOn(iset, "Count", "TEXT", "12", "Count label", "characters");
  propOn(iset, "Show count", "BOOLEAN", false, "Count", "visible");
  await swapProp(iset, "Icon", "Icon", "home");
  const side = box({ component: true, name: "Sidebar", dir: "v", gap: 20, pad: 12, w: 240, align: "MIN" }); side.primaryAxisSizingMode = "AUTO";
  fill(side, "page"); stroke(side, "line"); radius(side, "lg");
  const brand = box({ name: "Brand", gap: 8, pad: [4, 8, 0, 8] }); side.appendChild(brand);
  const logo = box({ name: "Logo", w: 28, h: 28, justify: "CENTER" }); radius(logo, "sm"); logo.fills = [{ type: "GRADIENT_LINEAR", gradientTransform: [[0, 1, 0], [-1, 0, 1]], gradientStops: [{ position: 0, color: { ...rgb("#fd6a48"), a: 1 } }, { position: 1, color: { ...rgb("#fd4b23"), a: 1 } }] }]; brand.appendChild(logo);
  logo.appendChild(await icon("stack-2", 16, "surface"));
  await txt(brand, "Loopo", "Body/15 Medium", "ink", "Product name");
  const groups = [["MAIN", [["home", "Overview", "Active"], ["chart-bar", "Analytics"], ["file-invoice", "Invoices", null, "12"], ["users", "Customers"]]], ["WORKSPACE", [["settings", "Settings"], ["help", "Help center"]]]];
  let n = 0;
  for (const [gname, list] of groups) {
    const g = box({ name: gname[0] + gname.slice(1).toLowerCase(), dir: "v", gap: 2, align: "MIN" }); side.appendChild(g); g.layoutSizingHorizontal = "FILL";
    const gl = await txt(g, gname, "Caption/11 Medium", "faint", "Group label"); gl.letterSpacing = { unit: "PERCENT", value: 5 };
    for (const [ic, lab, st, count] of list) {
      const inst = iset.children.find((x) => x.name === "State=" + (st || "Default")).createInstance(); g.appendChild(inst); inst.name = "Item " + (++n); inst.isExposedInstance = true;
      const pr = { [pk(iset, "Label")]: lab, [pk(iset, "Icon")]: (await iconComp(ic)).id };
      if (count) { pr[pk(iset, "Count")] = count; pr[pk(iset, "Show count")] = true; }
      inst.setProperties(pr);
    }
  }
  sec.appendChild(side);
  propOn(side, "Product name", "TEXT", "Loopo", "Product name", "characters");
  results["sidebar-nav"] = [iset.id, side.id];
}
return results;
