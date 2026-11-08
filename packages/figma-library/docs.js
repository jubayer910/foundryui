// Docs kit: building blocks for documentation boards in every design-system file.
// Every option is a top-level property, so a board is assembled from instances and filled in from the right panel.
const P = await page("Docs kit");
const sec = await section(P, "Docs kit", "Building blocks for Overview, Guidelines, Examples and Blocks boards. Width 980 (guidelines) or 1440 (overview).");
const comps = {};
const add = (c, desc) => { sec.appendChild(c); c.description = desc; comps[c.name] = c; return c; };
const propOn = (comp, name, type, def, layer, field) => {
  const key = comp.addComponentProperty(name, type, def);
  for (const n of comp.findAll((x) => x.name === layer && !inInstance(x, comp))) n.componentPropertyReferences = { ...(n.componentPropertyReferences || {}), [field]: key };
  return key;
};

// Header
{
  const c = box({ component: true, name: "Docs/Header", gap: 12, pad: [24, 40, 24, 40], w: 980, justify: "SPACE_BETWEEN" });
  c.strokes = [solid(V().color.line)]; c.strokeTopWeight = 0; c.strokeLeftWeight = 0; c.strokeRightWeight = 0; c.strokeBottomWeight = 1;
  const l = box({ name: "Left", gap: 10 }); c.appendChild(l);
  const logo = box({ name: "Logo", w: 24, h: 24, justify: "CENTER" }); radius(logo, "sm"); fill(logo, "accent"); l.appendChild(logo);
  logo.appendChild(await icon("stack-2", 14, "surface"));
  await txt(l, "Loopo", "Body/14 Medium", "ink", "System");
  await txt(l, "Button", "Body/14 Regular", "muted", "Page");
  await txt(c, "v1.0", "Mono/11 Regular", "muted", "Version");
  add(c, "Board header: system name, page and version.");
  propOn(c, "System", "TEXT", "Loopo", "System", "characters");
  propOn(c, "Page", "TEXT", "Button", "Page", "characters");
  propOn(c, "Version", "TEXT", "v1.0", "Version", "characters");
}
// Footer
{
  const c = box({ component: true, name: "Docs/Footer", pad: [20, 40, 20, 40], w: 980, justify: "SPACE_BETWEEN" });
  c.strokes = [solid(V().color.line)]; c.strokeTopWeight = 1; c.strokeLeftWeight = 0; c.strokeRightWeight = 0; c.strokeBottomWeight = 0;
  await txt(c, "Foundry UI, Loopo design system", "Caption/12 Medium", "muted", "Left");
  await txt(c, "foundry-ui.mitaly-website.workers.dev", "Mono/11 Regular", "muted", "Right");
  add(c, "Board footer.");
  propOn(c, "Left", "TEXT", "Foundry UI, Loopo design system", "Left", "characters");
  propOn(c, "Right", "TEXT", "foundry-ui.mitaly-website.workers.dev", "Right", "characters");
}
// Hero
{
  const c = box({ component: true, name: "Docs/Hero", dir: "v", gap: 12, pad: [64, 40, 48, 40], w: 980, align: "MIN" });
  await txt(c, "COMPONENT", "Mono/11 Regular", "accent", "Eyebrow");
  const t = await txt(c, "Button", "Display/28 SemiBold", "ink", "Title"); t.fontSize = 56; t.lineHeight = { unit: "PERCENT", value: 100 }; t.letterSpacing = { unit: "PERCENT", value: -4 };
  const d = await txt(c, "The main way people act in a product: save, send, create, delete.", "Body/15 Medium", "muted", "Description"); d.textAutoResize = "HEIGHT"; d.resize(640, d.height);
  add(c, "Board hero: eyebrow, title, one-line purpose.");
  propOn(c, "Eyebrow", "TEXT", "COMPONENT", "Eyebrow", "characters");
  propOn(c, "Title", "TEXT", "Button", "Title", "characters");
  propOn(c, "Description", "TEXT", "The main way people act in a product: save, send, create, delete.", "Description", "characters");
}
// Section title
{
  const c = box({ component: true, name: "Docs/Section title", dir: "v", gap: 8, pad: [48, 40, 16, 40], w: 980, align: "MIN" });
  await txt(c, "01", "Mono/11 Regular", "muted", "Number");
  await txt(c, "Variants", "Title/18 SemiBold", "ink", "Title");
  const d = await txt(c, "Five variants carry different levels of emphasis. Use one Primary per view.", "Body/14 Regular", "muted", "Text"); d.textAutoResize = "HEIGHT"; d.resize(720, d.height);
  add(c, "Numbered section title with a paragraph.");
  propOn(c, "Number", "TEXT", "01", "Number", "characters");
  propOn(c, "Title", "TEXT", "Variants", "Title", "characters");
  propOn(c, "Text", "TEXT", "Five variants carry different levels of emphasis. Use one Primary per view.", "Text", "characters");
  propOn(c, "Show text", "BOOLEAN", true, "Text", "visible");
}
// Property row (+ header variant)
{
  const rows = [];
  for (const kind of ["Header", "Row"]) {
    const c = box({ component: true, name: "Kind=" + kind, gap: 0, pad: [0, 40, 0, 40], w: 980, h: kind === "Header" ? 36 : 48 });
    c.strokes = [solid(V().color.line)]; c.strokeTopWeight = 0; c.strokeLeftWeight = 0; c.strokeRightWeight = 0; c.strokeBottomWeight = 1;
    if (kind === "Header") fill(c, "sunken");
    const cols = kind === "Header" ? ["PROPERTY", "TYPE", "OPTIONS", "WHAT IT DOES"] : ["Variant", "Variant", "Primary, Accent, Secondary, Ghost, Danger", "Sets emphasis and colour."];
    const widths = [180, 120, 300, 300];
    for (let i = 0; i < 4; i++) {
      const t = await txt(c, cols[i], kind === "Header" ? "Caption/11 Medium" : i === 0 ? "Body/13 Medium" : i === 1 || i === 2 ? "Mono/11 Regular" : "Body/13 Regular", kind === "Header" ? "muted" : i === 0 ? "ink" : "body", ["Property", "Type", "Options", "Description"][i]);
      t.textAutoResize = "NONE"; t.resize(widths[i], 18); t.textTruncation = "ENDING";
    }
    rows.push(c);
  }
  // header labels stay fixed: rename them so the row's text properties don't touch them
  for (const t of rows[0].findAll((n) => n.type === "TEXT")) t.name = "Head " + t.name;
  const set = makeSet(rows, "Docs/Property row", sec, 1, "Row of a property table. Header and row variants.");
  set.name = "Docs/Property row";
  for (const n of ["Property", "Type", "Options", "Description"]) propOn(set, n, "TEXT", n, n, "characters");
}
// Do / Don't
{
  const cs = [];
  for (const kind of ["Do", "Dont"]) {
    const ok = kind === "Do";
    const c = box({ component: true, name: "Kind=" + (ok ? "Do" : "Don't"), dir: "v", gap: 12, w: 440, align: "MIN" }); c.primaryAxisSizingMode = "AUTO";
    const stage = box({ name: "Stage", w: 440, h: 220, justify: "CENTER" }); radius(stage, "lg"); fill(stage, "sunken"); stage.strokes = [solid(V().color.line)]; c.appendChild(stage);
    await txt(stage, "Place an example here", "Body/13 Regular", "faint", "Placeholder");
    const bar = figma.createRectangle(); bar.name = "Rule"; bar.resize(440, 3); bar.cornerRadius = 2; fill(bar, ok ? "positive" : "negative"); c.appendChild(bar);
    const lab = box({ name: "Label", gap: 6 }); c.appendChild(lab);
    lab.appendChild(await icon(ok ? "check" : "x", 14, ok ? "positive" : "negative"));
    await txt(lab, ok ? "Do" : "Don't", "Body/13 Medium", ok ? "positive" : "negative", "Verdict");
    const d = await txt(c, ok ? "Use one primary button for the main action." : "Don't place two primary buttons side by side.", "Body/13 Regular", "body", "Text"); d.textAutoResize = "HEIGHT"; d.resize(440, d.height);
    cs.push(c);
  }
  const set = makeSet(cs, "Docs/Do-Dont", sec, 2, "Do and don't pair for guidelines.");
  set.name = "Docs/Do-Dont"; set.resize(440 * 2 + 24 + 64, set.height); set.counterAxisSizingMode = "AUTO";
  propOn(set, "Text", "TEXT", "Use one primary button for the main action.", "Text", "characters");
}
// Panel shot
{
  const c = box({ component: true, name: "Docs/Panel shot", dir: "v", gap: 10, w: 440, align: "MIN" }); c.primaryAxisSizingMode = "AUTO";
  const st = box({ name: "Stage", w: 440, h: 280, justify: "CENTER" }); radius(st, "lg"); fill(st, "page"); st.strokes = [solid(V().color.line)]; c.appendChild(st);
  await txt(st, "Right-panel screenshot", "Body/13 Regular", "faint", "Placeholder");
  const cap = await txt(c, "Select an instance; every option sits in the right panel.", "Caption/12 Medium", "muted", "Caption"); cap.textAutoResize = "HEIGHT"; cap.resize(440, cap.height);
  add(c, "Frame for a right-panel screenshot with caption.");
  propOn(c, "Caption", "TEXT", "Select an instance; every option sits in the right panel.", "Caption", "characters");
}
folderNames(P);
return Object.keys(comps).concat(["Docs/Property row", "Docs/Do-Dont"]);
