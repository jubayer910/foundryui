/**
 * Unit-style checks for lib/theme-gen.ts (the /theme generator).
 * Run: node scripts/theme-gen-check.mts
 */
import { contrast, normHex, hexToOklch, oklchToHex, generateTheme, fromQuery, toQuery, toCss, toTailwind, toJson, toPrompt, simulate, cvdDistance, DEFAULT_INPUT, LOOPO, FONTS, RADII, NEUTRALS, DENSITIES, type ThemeInput } from "../lib/theme-gen.ts";

let fails = 0;
let passes = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) passes++;
  else {
    fails++;
    console.error("FAIL  " + msg);
  }
};
const near = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol;

// 1. Contrast maths against known WCAG values.
ok(near(contrast("#ffffff", "#000000"), 21, 0.01), "white on black is 21:1");
ok(near(contrast("#777777", "#ffffff"), 4.48, 0.02), "#777 on white is 4.48:1");
ok(near(contrast("#747474", "#ffffff"), 4.68, 0.03), "Loopo muted on white ≈ 4.68:1");
ok(contrast("#ffffff", "#ffffff") === 1, "same colour is 1:1");

// 2. Hex parsing and OKLCH round trip.
ok(normHex("ABC") === "#aabbcc", "3-digit hex expands");
ok(normHex("#FD4B23") === "#fd4b23", "hex lower-cases");
ok(normHex("nope") === null, "rejects non-hex");
for (const hex of ["#fd4b23", "#2563eb", "#0f766e", "#f3c83d", "#111111", "#ffffff", "#7c53f9"]) {
  ok(oklchToHex(hexToOklch(hex)) === hex, "OKLCH round trip " + hex);
}

// 3. Colour-blind simulation behaves.
ok(simulate("#ffffff", "deutan") === "#ffffff", "white stays white under deutan");
ok(cvdDistance("#e5484d", "#18b170") < 25, "red vs green collapses under protan/deutan (as expected)");

// 4. "Neutral" reproduces Loopo's neutrals exactly.
const loopo = generateTheme(DEFAULT_INPUT);
for (const [k, v] of Object.entries(LOOPO)) if (k !== "muted") ok(loopo.tokens[k] === v, "neutral " + k + " = Loopo " + v);
// Loopo's muted grey is 4.27:1 on its page grey, so the generator darkens it just enough.
ok(contrast(LOOPO.muted, LOOPO.page) < 4.5 && contrast(loopo.tokens.muted, LOOPO.page) >= 4.5, "muted darkened to pass AA on the page grey");

// 5. Every check passes, for a spread of brands and every option combination.
const BRANDS = ["#fd4b23", "#2563eb", "#0f766e", "#e11d48", "#4f46e5", "#7c53f9", "#f3c83d", "#22c55e", "#06b6d4", "#000000", "#ffffff", "#ff00ff", "#808080", "#a3e635", "#8b5cf6", "#f97316"];
let combos = 0;
for (const brand of BRANDS)
  for (const neutral of NEUTRALS)
    for (const radius of RADII)
      for (const font of FONTS)
        for (const density of DENSITIES)
          for (const whiteText of [true, false]) {
            const input: ThemeInput = { ...DEFAULT_INPUT, brand, neutral: neutral.id, radius: radius.id, font: font.id, density: density.id, whiteText };
            const t = generateTheme(input);
            combos++;
            for (const c of t.checks) {
              // With dark button text a light brand stays light: the user's call, so it must be flagged, not hidden.
              if (c.id === "accent-ui" && !whiteText && !c.pass) {
                ok(t.notes.some((x) => x.includes("3:1")), brand + ": low-contrast accent is explained");
                continue;
              }
              ok(c.pass, `${brand} ${neutral.id} white=${whiteText}: ${c.label} ${c.ratio}:1 (needs ${c.min})`);
            }
            if (whiteText) ok(t.tokens["accent-ink"] === "#ffffff", brand + ": white text kept when asked");
            ok(t.series.length === 5 && new Set(t.series).size === 5, brand + ": five distinct chart colours");
            ok(t.series[0] === normHex(brand), brand + ": series 1 is the exact brand colour");
            ok(Object.values(t.tokens).every((v) => !/NaN|undefined/.test(v)), brand + ": no NaN tokens");
          }

// 6. Chart palettes stay apart under colour-blind vision for typical brand colours.
for (const brand of ["#fd4b23", "#2563eb", "#0f766e", "#7c53f9", "#e11d48"]) {
  const t = generateTheme({ ...DEFAULT_INPUT, brand });
  ok(t.seriesMinDistance >= 8, `${brand}: chart colours ≥ 8 ΔE apart under protan/deutan (got ${t.seriesMinDistance})`);
}

// 7. Brand that fails white text gets a darker fill but keeps the brand in charts.
const orange = generateTheme({ ...DEFAULT_INPUT, brand: "#fd4b23", whiteText: true });
ok(orange.tokens.accent !== "#fd4b23" && contrast("#ffffff", orange.tokens.accent) >= 4.5, "orange fill darkened for white text");
ok(orange.notes.length > 0, "adjustment explained in notes");
const blue = generateTheme({ ...DEFAULT_INPUT, brand: "#1d4ed8" });
ok(blue.tokens.accent === "#1d4ed8", "a brand that already passes is left exact");

// 8. Radius and density map through.
ok(generateTheme({ ...DEFAULT_INPUT, radius: "square" }).tokens["radius-xs"] === "0px", "square radius xs = 0px");
ok(generateTheme({ ...DEFAULT_INPUT, density: "compact" }).spacing === "0.225rem", "compact spacing");

// 9. URL state round-trips and rejects junk.
const sample: ThemeInput = { name: "Northwind Labs", brand: "#0f766e", neutral: "cool", radius: "sharp", font: "plex", density: "compact", base: "axon", whiteText: false };
ok(JSON.stringify(fromQuery(toQuery(sample))) === JSON.stringify(sample), "query string round trip");
const junk = fromQuery("c=zzz&t=pink&r=<script>&f=comic&d=huge&s=../../x&n=%3Cimg%3E");
ok(junk.brand === DEFAULT_INPUT.brand && junk.neutral === "neutral" && junk.radius === "soft" && junk.font === "geist" && junk.density === "comfortable" && junk.base === "loopo", "bad query values fall back to defaults");
ok(!/[<>]/.test(junk.name), "name is stripped of markup");

// 10. Exports are well formed.
const t = generateTheme(sample);
const link = "https://ingotui.com/theme?" + toQuery(sample);
const css = toCss(t, link);
ok(css.includes('[data-system="northwind-labs"]') && css.includes("--fu-accent:") && css.includes("--spacing: 0.225rem"), "CSS export scoped and complete");
ok((css.match(/\{/g) ?? []).length === (css.match(/\}/g) ?? []).length, "CSS braces balance");
const tw = toTailwind(t, link);
ok(tw.includes("@theme {") && tw.includes("--color-fu-accent:") && tw.includes("--radius-fu-md:") && tw.includes('--font-fu: "IBM Plex Sans"'), "Tailwind export has colours, radii, font");
const json = JSON.parse(toJson(t));
ok(json.color.accent.accent.$type === "color" && json.color.accent.scale["500"].$value.startsWith("#"), "JSON export is DTCG-shaped");
const prompt = toPrompt(t, link);
ok(prompt.includes("init_project") && prompt.includes('system "axon"') && prompt.includes("styles/ingot/northwind-labs.css"), "agent prompt names init_project, base system and file");

console.log(`${passes} checks passed, ${fails} failed (${combos} option combinations generated).`);
console.log("Default theme checks:");
for (const c of generateTheme(DEFAULT_INPUT).checks) console.log(`  ${c.pass ? "pass" : "FAIL"}  ${c.label.padEnd(28)} ${c.ratio.toFixed(2)}:1  (${c.fg} on ${c.bg}, needs ${c.min})`);
process.exit(fails ? 1 : 0);
