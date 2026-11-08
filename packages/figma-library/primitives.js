// Primitives: every component is a set whose variants + TEXT/BOOLEAN/INSTANCE_SWAP props sit at the top level.
const P = await page("Primitives");
const iconComp = async (name) => (await iconSet(name)).children.find((c) => c.name === "Style=Stroke Rounded");
const grad = (a, b) => ({ type: "GRADIENT_LINEAR", gradientTransform: [[0, 1, 0], [-1, 0, 1]], gradientStops: [{ position: 0, color: { ...rgb(a), a: 1 } }, { position: 1, color: { ...rgb(b), a: 1 } }] });
const swapProp = async (set, propName, layer, iconName) => {
  const def = await iconComp(iconName);
  const key = set.addComponentProperty(propName, "INSTANCE_SWAP", def.id);
  for (const v of set.children) for (const n of v.findAll((x) => x.name === layer && x.type === "INSTANCE")) n.componentPropertyReferences = { ...(n.componentPropertyReferences || {}), mainComponent: key };
  return key;
};
const results = {};
const only = args.only ? [].concat(args.only) : null;
const want = (k) => !only || only.includes(k);

// ---------- Button ----------
if (want("button")) {
  const sec = await section(P, "Button", "Variant × Size × State. Label, leading and trailing icons are top-level properties; icons swap from the Foundry icon library.");
  const SIZES = { SM: [32, 12, "Body/13 Medium", 14], MD: [36, 16, "Body/14 Medium", 16], LG: [44, 20, "Body/15 Medium", 18] };
  const VARS = {
    Primary: { def: () => [grad("#838383", "#2d2d2d")], hov: () => [grad("#959595", "#3a3a3a")], text: "#ffffff", fx: true },
    Accent: { def: () => [grad("#fd6a48", "#fd4b23")], hov: () => [grad("#fd7a5b", "#fd5733")], text: "#ffffff", fx: true },
    Secondary: { def: () => [solid(V().color.surface)], hov: () => [solid(V().color.hover)], text: "ink", line: true },
    Ghost: { def: () => [], hov: () => [solid(V().color.hover)], text: "body" },
    Danger: { def: () => [solid(V().color.negative)], hov: () => [solid("#ec5f63")], text: "#ffffff" },
  };
  const comps = [];
  for (const [vn, vs] of Object.entries(VARS)) for (const [sn, [h, px, ts, is]] of Object.entries(SIZES)) for (const st of ["Default", "Hover", "Disabled"]) {
    const c = box({ component: true, name: `Variant=${vn}, Size=${sn}, State=${st}`, gap: 6, pad: [0, px, 0, px], h, justify: "CENTER" });
    radius(c, "full");
    c.fills = st === "Hover" ? vs.hov() : vs.def();
    if (vs.line) stroke(c, "line-strong");
    if (vs.fx) await c.setEffectStyleIdAsync(G.es.Button.id);
    const tok = vs.text.startsWith("#") ? vs.text : vs.text;
    const li = await icon("plus", is, "ink"); li.name = "Leading icon"; c.appendChild(li);
    await txt(c, "Button", ts, vs.text.startsWith("#") ? vs.text : vs.text, "Label");
    const ti = await icon("arrow-right", is, "ink"); ti.name = "Trailing icon"; c.appendChild(ti);
    for (const i of [li, ti]) for (const n of i.findAll((x) => x.type === "VECTOR")) if (n.strokes.length) n.strokes = [vs.text.startsWith("#") ? solid(vs.text) : solid(V().color[vs.text])];
    ti.visible = false;
    if (st === "Disabled") c.opacity = 0.45;
    comps.push(c);
  }
  G.rowKey = (n) => n.split(",")[0];
  const set = makeSet(comps, "Button", sec, 9, "Primary action. Variant: Primary, Accent, Secondary, Ghost, Danger. Sizes 32/36/44.");
  prop(set, "Label", "TEXT", "Button", "Label", "characters");
  prop(set, "Show leading icon", "BOOLEAN", true, "Leading icon", "visible");
  prop(set, "Show trailing icon", "BOOLEAN", false, "Trailing icon", "visible");
  await swapProp(set, "Leading icon", "Leading icon", "plus");
  await swapProp(set, "Trailing icon", "Trailing icon", "arrow-right");
  results.button = { set: set.id, variants: comps.length };
}

// ---------- Icon button ----------
if (want("icon-button")) {
  const sec = await section(P, "Icon button", "Square button with one icon and an optional unread indicator.");
  const comps = [];
  for (const [sn, s, is] of [["SM", 32, 16], ["MD", 36, 18]]) for (const st of ["Default", "Hover"]) {
    const c = box({ component: true, name: `Size=${sn}, State=${st}`, w: s, h: s, justify: "CENTER" });
    radius(c, "sm"); fill(c, st === "Hover" ? "hover" : "surface"); stroke(c, "line-strong");
    const i = await icon("bell", is, st === "Hover" ? "ink" : "body"); c.appendChild(i);
    const dot = figma.createEllipse(); dot.name = "Indicator"; dot.resize(6, 6); fill(dot, "accent"); dot.strokes = [solid(V().color.surface)]; dot.strokeWeight = 2; dot.strokeAlign = "OUTSIDE";
    c.appendChild(dot); dot.layoutPositioning = "ABSOLUTE"; dot.x = s - 14; dot.y = 8;
    comps.push(c);
  }
  G.rowKey = (n) => n.split(",")[0];
  const set = makeSet(comps, "Icon button", sec, 4);
  prop(set, "Show indicator", "BOOLEAN", true, "Indicator", "visible");
  await swapProp(set, "Icon", "Icon", "bell");
  results["icon-button"] = set.id;
}

// ---------- Badge ----------
if (want("badge")) {
  const sec = await section(P, "Badge", "Status label. Tone sets colour; icon is optional.");
  const TONES = { Neutral: ["hover", "body", "line"], Accent: ["accent-soft", "accent", "accent"], Positive: ["positive-soft", "positive", "positive"], Negative: ["negative-soft", "negative", "negative"], Warning: ["warning-soft", "warning", "warning"] };
  const comps = [];
  for (const [tn, [bg, fg, ln]] of Object.entries(TONES)) {
    const c = box({ component: true, name: "Tone=" + tn, gap: 4, pad: [0, 10, 0, 10], h: 24 });
    radius(c, "full"); fill(c, bg); c.strokeWeight = 1; c.strokeAlign = "INSIDE";
    // soft border = tone at 18% (raw colour: opacity on variable-bound paints is dropped in instances)
    c.strokes = tn === "Neutral" ? [solid(V().color.line)] : [{ type: "SOLID", color: rgb(HEX[ln]), opacity: 0.18 }];
    const i = await icon("check", 12, fg); i.visible = false; c.appendChild(i);
    await txt(c, tn === "Neutral" ? "Draft" : tn === "Positive" ? "Paid" : tn === "Negative" ? "Overdue" : tn === "Warning" ? "Pending" : "New", "Caption/12 Medium", fg, "Label");
    comps.push(c);
  }
  const set = makeSet(comps, "Badge", sec, 5);
  prop(set, "Label", "TEXT", "Status", "Label", "characters");
  prop(set, "Show icon", "BOOLEAN", false, "Icon", "visible");
  await swapProp(set, "Icon", "Icon", "check");
  results.badge = set.id;
}

// ---------- Delta chip ----------
if (want("delta-chip")) {
  const sec = await section(P, "Delta chip", "Change vs. previous period. Direction sets colour and arrow.");
  const comps = [];
  for (const d of ["Up", "Down"]) {
    const up = d === "Up";
    const c = box({ component: true, name: "Direction=" + d, gap: 4, pad: [0, 6, 0, 6], h: 20 });
    radius(c, "full"); fill(c, up ? "positive-soft" : "negative-soft");
    const tri = figma.createPolygon(); tri.name = "Arrow"; tri.pointCount = 3; tri.resize(7, 6); fill(tri, up ? "positive" : "negative"); if (!up) tri.rotation = 180; c.appendChild(tri);
    await txt(c, up ? "12.4%" : "3.1%", "Caption/11 Medium", up ? "positive" : "negative", "Value");
    comps.push(c);
  }
  const set = makeSet(comps, "Delta chip", sec, 2);
  prop(set, "Value", "TEXT", "12.4%", "Value", "characters");
  results["delta-chip"] = set.id;
}

// ---------- Input ----------
if (want("input")) {
  const sec = await section(P, "Input", "Text field with label, optional leading icon and hint. State covers focus, error and disabled.");
  const comps = [];
  for (const st of ["Default", "Focus", "Error", "Disabled"]) {
    const c = box({ component: true, name: "State=" + st, dir: "v", gap: 6, align: "MIN", w: 280 }); c.primaryAxisSizingMode = "AUTO";
    await txt(c, "Email", "Body/13 Medium", "ink", "Label");
    const field = box({ name: "Field", gap: 8, pad: [0, 10, 0, 10], h: 36, w: 280 }); c.appendChild(field); field.layoutSizingHorizontal = "FILL";
    radius(field, "sm"); fill(field, "surface"); stroke(field, st === "Error" ? "negative" : st === "Focus" ? "accent" : "line-strong");
    if (st === "Focus") field.effects = [{ type: "DROP_SHADOW", color: { ...rgb("#fd4b23"), a: 0.14 }, offset: { x: 0, y: 0 }, radius: 0, spread: 3, visible: true, blendMode: "NORMAL" }];
    const li = await icon("mail", 16, "muted"); li.name = "Leading icon"; field.appendChild(li);
    const val = await txt(field, st === "Default" ? "you@company.com" : "jordan@loopo.io", "Body/14 Regular", st === "Default" ? "faint" : "ink", "Value");
    val.layoutGrow = 1;
    await txt(c, st === "Error" ? "Enter a valid email address." : "We never share your email.", "Caption/12 Medium", st === "Error" ? "negative" : "muted", "Hint");
    if (st === "Disabled") c.opacity = 0.5;
    comps.push(c);
  }
  const set = makeSet(comps, "Input", sec, 4);
  prop(set, "Label", "TEXT", "Email", "Label", "characters");
  prop(set, "Value", "TEXT", "you@company.com", "Value", "characters");
  prop(set, "Hint", "TEXT", "We never share your email.", "Hint", "characters");
  prop(set, "Show label", "BOOLEAN", true, "Label", "visible");
  prop(set, "Show hint", "BOOLEAN", true, "Hint", "visible");
  prop(set, "Show leading icon", "BOOLEAN", true, "Leading icon", "visible");
  await swapProp(set, "Leading icon", "Leading icon", "mail");
  results.input = set.id;
}

// ---------- Search field ----------
if (want("search-field")) {
  const sec = await section(P, "Search field", "Search with a keyboard shortcut hint.");
  const comps = [];
  for (const st of ["Default", "Focus"]) {
    const c = box({ component: true, name: "State=" + st, gap: 8, pad: [0, 6, 0, 10], h: 36, w: 288 });
    radius(c, "sm"); fill(c, "surface"); stroke(c, st === "Focus" ? "accent" : "line-strong");
    c.appendChild(await icon("search", 16, "muted"));
    const t = await txt(c, "Search", "Body/14 Regular", "faint", "Placeholder"); t.layoutGrow = 1;
    const k = box({ name: "Shortcut", pad: [2, 6, 2, 6] }); radius(k, "xs"); fill(k, "sunken"); stroke(k, "line"); c.appendChild(k);
    await txt(k, "⌘K", "Mono/11 Regular", "muted", "Keys");
    comps.push(c);
  }
  const set = makeSet(comps, "Search field", sec, 2);
  prop(set, "Placeholder", "TEXT", "Search", "Placeholder", "characters");
  prop(set, "Shortcut", "TEXT", "⌘K", "Keys", "characters");
  prop(set, "Show shortcut", "BOOLEAN", true, "Shortcut", "visible");
  results["search-field"] = set.id;
}

// ---------- Select (trigger + menu item) ----------
if (want("select")) {
  const sec = await section(P, "Select", "Trigger and menu item. Build a menu by stacking Menu item instances in a surface with the Overlay shadow.");
  const comps = [];
  for (const st of ["Default", "Open"]) {
    const c = box({ component: true, name: "State=" + st, gap: 6, pad: [0, 8, 0, 10], h: 32 });
    radius(c, "sm"); fill(c, st === "Open" ? "hover" : "surface"); stroke(c, "line-strong");
    await txt(c, "This month", "Body/13 Medium", "ink", "Value");
    const ch = await icon("chevron-down", 14, "muted"); if (st === "Open") ch.rotation = 180; c.appendChild(ch);
    comps.push(c);
  }
  const set = makeSet(comps, "Select", sec, 2);
  prop(set, "Value", "TEXT", "This month", "Value", "characters");
  const items = [];
  for (const st of ["Default", "Highlighted", "Selected"]) {
    const c = box({ component: true, name: "State=" + st, gap: 24, pad: [8, 10, 8, 10], w: 200, justify: "SPACE_BETWEEN" });
    radius(c, "xs"); if (st === "Highlighted") fill(c, "hover");
    await txt(c, "Last 30 days", "Body/13 Regular", st === "Default" ? "body" : "ink", "Label");
    const ck = await icon("check", 14, "accent"); ck.name = "Check"; ck.visible = st === "Selected"; c.appendChild(ck);
    items.push(c);
  }
  const iset = makeSet(items, "Menu item", sec, 3);
  prop(iset, "Label", "TEXT", "Last 30 days", "Label", "characters");
  results.select = [set.id, iset.id];
}

// ---------- Switch ----------
if (want("switch")) {
  const sec = await section(P, "Switch", "On/off toggle with optional label.");
  const comps = [];
  for (const on of ["Off", "On"]) {
    const c = box({ component: true, name: "Checked=" + on, gap: 10 });
    const track = box({ name: "Track", w: 36, h: 20, pad: 2, justify: on === "On" ? "MAX" : "MIN" }); radius(track, "full"); fill(track, on === "On" ? "accent" : "line-strong"); c.appendChild(track);
    const th = figma.createEllipse(); th.name = "Thumb"; th.resize(16, 16); fill(th, "surface"); th.effects = [{ type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.2 }, offset: { x: 0, y: 1 }, radius: 2, spread: 0, visible: true, blendMode: "NORMAL" }]; track.appendChild(th);
    await txt(c, "Email alerts", "Body/14 Regular", "body", "Label");
    comps.push(c);
  }
  const set = makeSet(comps, "Switch", sec, 2);
  prop(set, "Label", "TEXT", "Email alerts", "Label", "characters");
  prop(set, "Show label", "BOOLEAN", true, "Label", "visible");
  results.switch = set.id;
}

// ---------- Checkbox ----------
if (want("checkbox")) {
  const sec = await section(P, "Checkbox", "Checked, unchecked or indeterminate, with optional label.");
  const comps = [];
  for (const st of ["Off", "On", "Indeterminate"]) {
    const c = box({ component: true, name: "Checked=" + st, gap: 10 });
    const b = box({ name: "Box", w: 18, h: 18, justify: "CENTER" }); b.cornerRadius = 5; c.appendChild(b);
    if (st === "Off") { fill(b, "surface"); stroke(b, "line-strong"); }
    else {
      fill(b, "ink");
      if (st === "On") { const i = await icon("check", 13, "surface"); for (const n of i.findAll((x) => x.type === "VECTOR")) n.strokeWeight = 2; b.appendChild(i); }
      else { const r = figma.createRectangle(); r.name = "Dash"; r.resize(8, 2); r.cornerRadius = 1; fill(r, "surface"); b.appendChild(r); }
    }
    await txt(c, "Remember me", "Body/14 Regular", "body", "Label");
    comps.push(c);
  }
  const set = makeSet(comps, "Checkbox", sec, 3);
  prop(set, "Label", "TEXT", "Remember me", "Label", "characters");
  prop(set, "Show label", "BOOLEAN", true, "Label", "visible");
  results.checkbox = set.id;
}

// ---------- Segmented control (Segment + control) ----------
if (want("segmented-control")) {
  const sec = await section(P, "Segmented control", "Built from Segment instances, each exposed: pick which segment is selected and edit labels from the top level.");
  const segs = [];
  for (const st of ["Default", "Selected"]) {
    const c = box({ component: true, name: "State=" + st, pad: [0, 12, 0, 12], h: 28, justify: "CENTER" });
    c.cornerRadius = 6;
    if (st === "Selected") { fill(c, "surface"); stroke(c, "line"); await c.setEffectStyleIdAsync(G.es.Card.id); }
    await txt(c, "Week", "Body/13 Medium", st === "Selected" ? "ink" : "muted", "Label");
    segs.push(c);
  }
  const sset = makeSet(segs, "Segment", sec, 2);
  prop(sset, "Label", "TEXT", "Week", "Label", "characters");
  const ctrls = [];
  for (const n of [2, 3, 4]) {
    const c = box({ component: true, name: "Options=" + n, pad: 2, h: 32 });
    radius(c, "sm"); fill(c, "hover");
    const labels = ["Day", "Week", "Month", "Year"];
    for (let i = 0; i < n; i++) {
      const inst = sset.children.find((x) => x.name === (i === 1 ? "State=Selected" : "State=Default")).createInstance();
      c.appendChild(inst); inst.name = "Segment " + (i + 1); inst.isExposedInstance = true;
      inst.setProperties({ [Object.keys(sset.componentPropertyDefinitions).find((k) => k.startsWith("Label"))]: labels[i] });
    }
    ctrls.push(c);
  }
  const cset = makeSet(ctrls, "Segmented control", sec, 3);
  results["segmented-control"] = [sset.id, cset.id];
}

// ---------- Tabs (Tab + bar) ----------
if (want("tabs")) {
  const sec = await section(P, "Tabs", "Tab bar from exposed Tab instances. Set which tab is selected from the top level.");
  const tabs = [];
  for (const st of ["Default", "Hover", "Selected"]) {
    const c = box({ component: true, name: "State=" + st, dir: "v", gap: 0, h: 37, justify: "MAX", align: "CENTER" });
    const t = await txt(c, "Overview", "Body/13 Medium", st === "Selected" ? "ink" : st === "Hover" ? "body" : "muted", "Label");
    const spacer = box({ name: "Gap", h: 10, w: 10 }); c.insertChild(0, spacer); spacer.layoutGrow = 1;
    const bar = figma.createRectangle(); bar.name = "Indicator"; bar.resize(10, 2); bar.cornerRadius = 1; fill(bar, "ink"); c.appendChild(bar); bar.layoutSizingHorizontal = "FILL"; bar.visible = st === "Selected";
    const pad = box({ name: "Pad", h: 9, w: 10 }); c.insertChild(2, pad);
    tabs.push(c);
  }
  const tset = makeSet(tabs, "Tab", sec, 3);
  prop(tset, "Label", "TEXT", "Overview", "Label", "characters");
  const bar = box({ component: true, name: "Tabs", gap: 20, align: "MAX" });
  bar.strokes = [solid(V().color.line)]; bar.strokeBottomWeight = 1; bar.strokeTopWeight = 0; bar.strokeLeftWeight = 0; bar.strokeRightWeight = 0; bar.strokeAlign = "INSIDE";
  const names = ["Overview", "Revenue", "Customers", "Settings"];
  const lk = Object.keys(tset.componentPropertyDefinitions).find((k) => k.startsWith("Label"));
  for (let i = 0; i < 4; i++) {
    const inst = tset.children.find((x) => x.name === (i === 0 ? "State=Selected" : "State=Default")).createInstance();
    bar.appendChild(inst); inst.name = "Tab " + (i + 1); inst.isExposedInstance = true; inst.setProperties({ [lk]: names[i] });
  }
  sec.appendChild(bar);
  results.tabs = [tset.id, bar.id];
}

// ---------- Avatar + group ----------
if (want("avatar-group")) {
  const sec = await section(P, "Avatar group", "Avatar with initials and five tints; the group exposes each avatar plus an overflow count.");
  const TINTS = { Peach: "#ffe3d9", Sky: "#dce9ff", Rose: "#ffe1ee", Sand: "#fdf1c9", Mint: "#dff5ea", Overflow: "#f4f4f5" };
  const av = [];
  for (const [tn, hex] of Object.entries(TINTS)) {
    const c = box({ component: true, name: "Tint=" + tn, w: 28, h: 28, justify: "CENTER" });
    c.cornerRadius = 14; c.fills = [solid(hex)]; c.strokes = [solid(V().color.surface)]; c.strokeWeight = 2; c.strokeAlign = "OUTSIDE";
    await txt(c, tn === "Overflow" ? "+3" : "JD", "Caption/11 Medium", tn === "Overflow" ? "muted" : "body", "Initials");
    av.push(c);
  }
  const aset = makeSet(av, "Avatar", sec, 6);
  prop(aset, "Initials", "TEXT", "JD", "Initials", "characters");
  const g = box({ component: true, name: "Avatar group", gap: -8 });
  const ik = Object.keys(aset.componentPropertyDefinitions).find((k) => k.startsWith("Initials"));
  const people = [["Peach", "AK"], ["Sky", "MR"], ["Rose", "SL"], ["Sand", "TN"], ["Overflow", "+3"]];
  for (let i = 0; i < people.length; i++) {
    const inst = aset.children.find((x) => x.name === "Tint=" + people[i][0]).createInstance();
    g.appendChild(inst); inst.name = i === 4 ? "Overflow" : "Avatar " + (i + 1); inst.isExposedInstance = true; inst.setProperties({ [ik]: people[i][1] });
  }
  sec.appendChild(g);
  const ok = g.addComponentProperty("Show overflow", "BOOLEAN", true);
  g.findOne((n) => n.name === "Overflow").componentPropertyReferences = { visible: ok };
  results["avatar-group"] = [aset.id, g.id];
}
folderNames(P);
return results;
