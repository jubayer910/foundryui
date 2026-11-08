// Foundations page: Loopo colour, radius, type and shadow specimens, all bound to the real variables/styles.
const p = await page("Foundations");
const sec = await section(p, "Foundations", "Every value here is a variable or style. Components use these, so changing a variable updates the whole library. Light mode only for now; dark mode is the first update after launch.");

const colors = box({ name: "Colour", dir: "v", gap: 12, align: "MIN" }); sec.appendChild(colors);
await txt(colors, "Colour", "Title/16 Medium");
const groups = [["Surfaces", ["page", "surface", "sunken", "hover", "line", "line-strong"]], ["Text", ["ink", "body", "muted", "faint"]], ["Accent & series", ["accent", "accent-soft", "series-2", "series-3", "series-4"]], ["Status", ["positive", "positive-soft", "negative", "negative-soft", "warning", "warning-soft"]]];
for (const [g, keys] of groups) {
  const row = box({ name: g, gap: 12, align: "MIN" }); colors.appendChild(row);
  for (const k of keys) {
    const card = box({ name: k, dir: "v", gap: 8, align: "MIN", w: 132 }); row.appendChild(card); card.primaryAxisSizingMode = "AUTO";
    const sw = figma.createRectangle(); sw.name = "Swatch"; sw.resize(132, 72); fill(sw, k); stroke(sw, "line"); radius(sw, "md"); card.appendChild(sw);
    await txt(card, "color/" + k, "Mono/11 Regular", "ink"); await txt(card, HEX[k].toUpperCase(), "Mono/11 Regular", "muted");
  }
}

const rad = box({ name: "Radius", dir: "v", gap: 12, align: "MIN" }); sec.appendChild(rad);
await txt(rad, "Radius", "Title/16 Medium");
const rrow = box({ name: "Radii", gap: 16, align: "MIN" }); rad.appendChild(rrow);
for (const k of ["xs", "sm", "md", "lg", "xl", "full"]) {
  const c = box({ name: k, dir: "v", gap: 8, align: "MIN" }); rrow.appendChild(c);
  const r = figma.createRectangle(); r.resize(96, 64); fill(r, "accent-soft"); stroke(r, "accent"); radius(r, k); c.appendChild(r);
  await txt(c, "radius/" + k + " · " + (k === "full" ? "999" : RADIUS[k]), "Mono/11 Regular", "muted");
}

const type = box({ name: "Type", dir: "v", gap: 10, align: "MIN" }); sec.appendChild(type);
await txt(type, "Type · Geist", "Title/16 Medium");
for (const name of Object.keys(TEXT_STYLES)) {
  const row = box({ name, gap: 24, align: "CENTER" }); type.appendChild(row);
  const l = await txt(row, name, "Mono/11 Regular", "muted"); l.textAutoResize = "NONE"; l.resize(180, 14);
  await txt(row, "Revenue grew 12.4% this month", name, "ink");
}

const fx = box({ name: "Shadows", dir: "v", gap: 12, align: "MIN" }); sec.appendChild(fx);
await txt(fx, "Shadows", "Title/16 Medium");
const frow = box({ name: "Effects", gap: 32, pad: 24, align: "MIN" }); fx.appendChild(frow);
for (const k of ["Card", "Overlay", "Button"]) {
  const c = box({ name: k, dir: "v", gap: 10, align: "MIN" }); frow.appendChild(c);
  const r = figma.createRectangle(); r.resize(160, 96); fill(r, "surface"); radius(r, "lg"); await r.setEffectStyleIdAsync(G.es[k].id); c.appendChild(r);
  await txt(c, "Loopo/" + k, "Mono/11 Regular", "muted");
}
return { section: sec.id, vars: Object.keys(G.vars.color).length + Object.keys(G.vars.radius).length, textStyles: Object.keys(G.ts).length };
