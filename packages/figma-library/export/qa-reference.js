// QA a composed dashboard against the system's own dashboards (data/shell/reference-<system>.json, measured from
// every template of that system). Nothing here is a new rule: each check compares to what our dashboards do.
//   const r = await qaReference(dashFrame, reference, palette)
// The dashboard must use the shell structure: Dashboard > [Sidebar, Main > [Top bar, Content > [Page header, Body > rows]]]

// house rule: every stroke icon renders at exactly 1.5px and stays inside its icon box
function iconChecks(dash, add) {
  const icons = dash.findAll((n) => /^Icon\//.test(n.name) && !/brand-/.test(n.name));
  const bad = new Set(), out = new Set();
  for (const ic of icons) {
    const it = ic.absoluteTransform;
    for (const v of ic.findAll((x) => x.type === "VECTOR")) {
      if (v.strokes.length && Math.abs(v.strokeWeight - 1.5) > 0.01) bad.add(ic.name + " " + Math.round(v.strokeWeight * 100) / 100);
      const t = v.absoluteTransform;
      if (t[0][2] < it[0][2] - 1 || t[1][2] < it[1][2] - 1 || t[0][2] + v.width > it[0][2] + ic.width + 1 || t[1][2] + v.height > it[1][2] + ic.height + 1) out.add(ic.name);
    }
  }
  add("Icons", "Stroke icons at 1.5px", bad.size === 0, bad.size ? [...bad].slice(0, 4).join(", ") : icons.length + " icons", "1.5");
  add("Icons", "Icons inside their box", out.size === 0, out.size ? [...out].slice(0, 4).join(", ") : "all", "all");
}
const near = (a, b, t) => Math.abs(a - b) <= (t ?? 2);
const hex6 = (c) => "#" + [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
const TEMPLATE_WORDS = /\b(Montra|Mercury|Stripe|WeWork|Gusto|Meta Ads|AWS|PayPal Business|Wise USD|Import CSV|Amex Business|Chase Business|Lorem)\b/;
async function qaReference(dash, ref, pal) {
  const checks = [];
  const add = (group, name, ok, got, want) => checks.push({ group, name, ok: !!ok, got, want });
  const [side, main] = dash.children;
  const top = main && main.children[0], content = main && main.children[1];
  const header = content && content.children[0], body = content && content.children[1];
  // 1. shell = the system's shell
  add("Shell", "Page width", near(dash.width, ref.shell.w), Math.round(dash.width), ref.shell.w);
  add("Shell", "Sidebar width", side && near(side.width, ref.shell.sidebar), side && Math.round(side.width), ref.shell.sidebar);
  add("Shell", "Sidebar runs full height", side && near(side.height, dash.height, 1), side && Math.round(side.height), Math.round(dash.height));
  add("Shell", "Top bar height", top && near(top.height, ref.shell.topbar, 1), top && Math.round(top.height), ref.shell.topbar);
  const bg = (dash.fills || [])[0];
  add("Shell", "Page background", bg && bg.type === "SOLID" && hex6(bg.color) === ref.shell.bg, bg && bg.color ? hex6(bg.color) : "none", ref.shell.bg);
  const tb = top && top.children.map((c) => c.y + c.height / 2);
  add("Shell", "Top bar items centred on one line", tb && tb.every((y) => near(y, tb[0], 1)), tb && tb.map((y) => Math.round(y)).join(" / "), "same");
  // 2. content area
  const cx = content ? content.absoluteTransform[0][2] - dash.absoluteTransform[0][2] + content.paddingLeft : 0;
  add("Grid", "Content starts at", near(cx, ref.shell.contentX), Math.round(cx), ref.shell.contentX);
  add("Grid", "Content width", body && near(body.width, ref.shell.contentW), body && Math.round(body.width), ref.shell.contentW);
  add("Grid", "Header to body gap", content && ref.headerGap.some((g) => near(content.itemSpacing, g, 1)), content && content.itemSpacing, ref.headerGap.join("/"));
  // 3. rows: every split must be one our dashboards use, with the same gaps
  const splits = Object.keys(ref.splits).map((k) => k.split("+").map(Number));
  for (const row of body ? body.children : []) {
    const items = /^Row\b/.test(row.name) && row.layoutMode === "HORIZONTAL" && row.children.length > 1 ? row.children : [row];
    const ws = items.map((i) => Math.round(i.width));
    const match = splits.find((s) => s.length === ws.length && s.every((w, i) => near(w, ws[i], 3)));
    add("Rows", row.name + ": split", !!match, ws.join(" + "), match ? match.join(" + ") : "one of " + Object.keys(ref.splits).join(", "));
    if (items.length > 1) {
      const key = match ? match.join("+") : null;
      const g = items[1].x - (items[0].x + items[0].width);
      if (key && ref.colGaps[key] !== undefined) add("Rows", row.name + ": column gap", near(g, ref.colGaps[key], 1), Math.round(g * 10) / 10, ref.colGaps[key]);
      const hs = items.map((i) => Math.round(i.height));
      add("Rows", row.name + ": equal heights", hs.every((h) => near(h, hs[0], 1)), hs.join(" / "), "equal");
    }
  }
  add("Rows", "Row gap", body && ref.rowGap.some((g) => near(body.itemSpacing, g, 1)), body && body.itemSpacing, ref.rowGap.join("/"));
  // 4. cards keep the system's radius
  const radii = new Set(Object.keys(ref.radii).map(Number));
  const cards = [];
  for (const row of body ? body.children : []) for (const i of (/^Row\b/.test(row.name) && row.layoutMode === "HORIZONTAL" && row.children.length > 1 ? row.children : [row])) if ((i.fills || []).length && typeof i.cornerRadius === "number") cards.push(i);
  const off = cards.filter((c) => ![...radii].some((r) => near(c.cornerRadius, r, 0.6)));
  add("System", "Card radius", off.length === 0, off.length ? off.map((c) => c.name + " " + c.cornerRadius).join(", ") : [...new Set(cards.map((c) => Math.round(c.cornerRadius)))].join("/"), [...radii].join("/"));
  // 5. one system: fonts and colours
  const sysFonts = new Set((pal.fonts || []).map((f) => f.split(":")[0]));
  const fonts = new Set(), colors = {};
  for (const n of dash.findAll(() => true)) {
    if (n.type === "TEXT" && n.characters.trim()) for (const s of n.getStyledTextSegments(["fontName"])) fonts.add(s.fontName.family);
    for (const k of ["fills", "strokes"]) if (Array.isArray(n[k])) for (const p of n[k]) if (p.type === "SOLID" && p.visible !== false) { const h = hex6(p.color); if (!pal.colors.includes(h)) colors[h] = (colors[h] || 0) + 1; }
  }
  const badFonts = [...fonts].filter((f) => !sysFonts.has(f));
  add("System", "Fonts from the system", badFonts.length === 0, [...fonts].join(", "), [...sysFonts].join(", "));
  const offc = Object.entries(colors).filter(([, c]) => c > 2);
  add("System", "Colours from the system palette", offc.length === 0, offc.length ? offc.map(([h, c]) => h + "×" + c).join(", ") : "all in palette", pal.colors.length + " colours");
  // 6. sanity: nothing cut, nothing left from the template's story
  let cut = 0; const left = [];
  for (const t of dash.findAll((n) => n.type === "TEXT")) {
    const p = t.parent;
    if (p && "layoutMode" in p && p.layoutMode !== "NONE" && t.width > p.width - p.paddingLeft - p.paddingRight + 1) cut++;
    if ((LEFTOVER[ref.system] || TEMPLATE_WORDS).test(t.characters)) left.push(t.characters);
  }
  add("Content", "No text cut off", cut === 0, cut, 0);
  add("Content", "No leftover template copy", left.length === 0, left.length ? left.slice(0, 6).join(" · ") : "none", "none");
  iconChecks(dash, add);
  const passed = checks.filter((c) => c.ok).length;
  return { passed, total: checks.length, failed: checks.filter((c) => !c.ok), checks };
}

// Panel layouts (Auton style): Dashboard > [Sidebar, Main > [Top bar, Panel area > Panel > [bands..., Section > [Header + table > [header, table], pager]]]]
const LEFTOVER = { axon: /\b(Axon|Acme)\b/, auton: /\b(Auton|agents?|polic(y|ies)|deploy|Scopara|PII|credentials?)\b/i, montra: TEMPLATE_WORDS };
async function qaPanel(dash, ref, pal) {
  const checks = [];
  const add = (group, name, ok, got, want) => checks.push({ group, name, ok: !!ok, got, want });
  const [side, main] = dash.children;
  const top = main.children[0], area = main.children[1], panel = area.children[0];
  const S = ref.shell;
  add("Shell", "Page width", near(dash.width, S.w), Math.round(dash.width), S.w);
  const bg = (dash.fills || [])[0];
  add("Shell", "Page background", bg && hex6(bg.color) === S.bg, bg ? hex6(bg.color) : "none", S.bg);
  add("Shell", "Sidebar width", near(side.width, S.sidebar), Math.round(side.width), S.sidebar);
  add("Shell", "Sidebar runs full height", near(side.height, dash.height, 1), Math.round(side.height), Math.round(dash.height));
  add("Shell", "Top bar height", near(top.height, S.topbar, 1), Math.round(top.height), S.topbar);
  add("Shell", "Content panel width", near(panel.width, S.panelW), Math.round(panel.width), S.panelW);
  const pf = (panel.fills || [])[0];
  add("Shell", "Content panel is white", pf && hex6(pf.color) === S.panelBg, pf ? hex6(pf.color) : "none", S.panelBg);
  add("Shell", "Margin right of the panel", near(area.paddingRight, S.rightMargin, 1), area.paddingRight, S.rightMargin);
  const bands = panel.children.filter((c) => c.name.startsWith("Band"));
  const section = panel.children.find((c) => c.name.startsWith("Section"));
  for (const b of bands) {
    const items = b.children.length === 1 ? b.children[0].children && b.name.includes("Chart") ? [b.children[0]] : b.children : b.children;
    const ws = items.map((i) => Math.round(i.width));
    if (b.name.includes("KPI")) {
      const ok = ref.bands.kpiSplits.some((s) => { const p = s.split("+").map(Number); return p.length === ws.length && p.every((w, i) => near(w, ws[i], 2)); });
      add("Bands", b.name + ": split", ok, ws.join(" + "), ref.bands.kpiSplits.join(" or "));
      const hs = items.map((i) => Math.round(i.height));
      add("Bands", b.name + ": height", hs.every((h) => ref.bands.kpiH.some((k) => near(h, k, 1))), hs.join(" / "), ref.bands.kpiH.join(" or "));
      add("Bands", b.name + ": flush (no gaps)", b.itemSpacing === 0 && b.paddingLeft === 0, b.itemSpacing, 0);
    } else add("Bands", b.name + ": full width", near(ws[0], ref.bands.chartW, 2), ws[0], ref.bands.chartW);
  }
  const C = ref.section;
  add("Section", "Inset", near(section.paddingLeft, C.inset, 0.5) && near(section.paddingRight, C.inset, 0.5), section.paddingLeft + " / " + section.paddingRight, C.inset);
  add("Section", "Space after the bands", near(section.paddingTop, C.afterBand, 0.5), section.paddingTop, C.afterBand);
  const ht = section.children[0], pager = section.children[1];
  const [hdr, table] = ht.children;
  add("Section", "Header height", near(hdr.height, C.headerH, 1), Math.round(hdr.height), C.headerH);
  add("Section", "Header to table", ht.itemSpacing >= C.headerToTable[0] - 0.5 && ht.itemSpacing <= C.headerToTable[1] + 0.5, ht.itemSpacing, C.headerToTable.join("–"));
  add("Section", "Table to pagination", section.itemSpacing >= C.tableToPager[0] - 0.5 && section.itemSpacing <= C.tableToPager[1] + 0.5, section.itemSpacing, C.tableToPager.join("–"));
  add("Section", "Table radius", near(table.cornerRadius, C.tableRadius, 0.6), Math.round(table.cornerRadius), C.tableRadius);
  add("Section", "Table width", near(table.width, S.panelW - 2 * C.inset, 2), Math.round(table.width), S.panelW - 2 * C.inset);
  add("Section", "Pagination height", near(pager.height, C.pagerH, 1), Math.round(pager.height), C.pagerH);
  // system and content checks shared with the rows layout
  const sysFonts = new Set((pal.fonts || []).map((f) => f.split(":")[0]));
  const fonts = new Set(), colors = {};
  let cut = 0; const left = [];
  const re = LEFTOVER[ref.system] || TEMPLATE_WORDS;
  for (const n of dash.findAll(() => true)) {
    if (n.type === "TEXT") {
      if (n.characters.trim()) for (const s of n.getStyledTextSegments(["fontName"])) fonts.add(s.fontName.family);
      const p = n.parent, t = n.absoluteTransform[0][2], pt = p.absoluteTransform[0][2];
      if (n.visible && n.characters.trim() && t + n.width > pt + p.width + 1 && !(p.layoutMode && p.layoutMode !== "NONE" && p.primaryAxisSizingMode === "AUTO")) cut++;
      if (re.test(n.characters)) left.push(n.characters);
    }
    for (const k of ["fills", "strokes"]) if (Array.isArray(n[k])) for (const p of n[k]) if (p.type === "SOLID" && p.visible !== false) { const h = hex6(p.color); if (!pal.colors.includes(h)) colors[h] = (colors[h] || 0) + 1; }
  }
  const badFonts = [...fonts].filter((f) => !sysFonts.has(f));
  add("System", "Fonts from the system", badFonts.length === 0, [...fonts].join(", "), [...sysFonts].join(", "));
  const offc = Object.entries(colors).filter(([, c]) => c > 2);
  add("System", "Colours from the system palette", offc.length === 0, offc.length ? offc.map(([h, c]) => h + "×" + c).join(", ") : "all in palette", pal.colors.length + " colours");
  add("Content", "No text past its box", cut === 0, cut, 0);
  add("Content", "No leftover template copy", left.length === 0, left.length ? left.slice(0, 6).join(" · ") : "none", "none");
  iconChecks(dash, add);
  const passed = checks.filter((c) => c.ok).length;
  return { passed, total: checks.length, failed: checks.filter((c) => !c.ok), checks };
}
