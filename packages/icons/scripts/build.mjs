/**
 * Builds the Foundry UI icon library from open-licence sources, normalised to one spec:
 * 24px grid, 1.5px live stroke, round caps and joins, currentColor.
 *
 *   Line style: Tabler outline (MIT) as the base, then Lucide (ISC) and Iconoir (MIT)
 *               for concepts Tabler doesn't have.
 *   Fill style: Tabler filled (MIT).
 *
 * The Hugeicons free set (MIT) is used only as a coverage checklist (names), never drawn from.
 *
 * Outputs:
 *   packages/icons/svg/{line,fill}/<name>.svg
 *   apps/web/public/icons/index.json   [{n,c,t,s}]  name, category, tags, styles
 *   apps/web/public/icons/line.json    {name: inner svg}
 *   apps/web/public/icons/fill.json    {name: inner svg}
 *   packages/icons/coverage.json       Hugeicons concept coverage report
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { STYLES, deriveStyles } from "./styles.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const nm = join(root, "node_modules");
const webOut = join(root, "../../apps/web/public/icons");
const read = (p) => readFileSync(p, "utf8");

/** Inner elements of an svg, with styling attributes stripped (root svg carries them). */
function inner(svg, { keepFill = false } = {}) {
  let body = svg.replace(/<!--[\s\S]*?-->/g, "").replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  body = body.replace(/<path stroke="none" d="M0 0h24v24H0z" fill="none"\s*\/>/g, ""); // tabler bounding box
  body = body.replace(/\s(stroke|stroke-width|stroke-linecap|stroke-linejoin|class)="[^"]*"/g, "");
  // Line style: drop fill="none" (the root already says it) but keep deliberate solid details such as dots.
  if (!keepFill) body = body.replace(/\sfill="none"/g, "");
  body = body.replace(/(fill|stroke)="(black|#000|#000000)"/g, '$1="currentColor"');
  return body.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim();
}

// Third-party trademarks stay out of the library.
const BRAND = /^(adobe-.*|apple-imac.*|apple-mac|apple-shortcuts|apple-swift|apple-wallet|asana|behance.*|bitbucket|chromecast.*|chrome|codepen|codesandbox|css3|discord|dribbble|ethereum-.*|facebook.*|figma|framer|github.*|gitlab.*|google.*|html5|instagram|linkedin|mastercard-card|mastodon|medium|nintendo-switch|npm.*|paypal|peerlist|pinterest|playstation-gamepad|pocket|safari|slack|snapchat|spotify|stackoverflow|telegram.*|threads|tiktok|trello|twitch|twitter|unity.*|vue-js|whatsapp|windows|youtube|dropbox|gitpull-request-draft-x)$/;
const line = new Map(); // name -> {svg, c, t, src}
const seenHash = new Set();
const add = (name, svg, c, t, src) => {
  if (!svg || line.has(name) || BRAND.test(name)) return false;
  const h = createHash("sha1").update(svg).digest("hex");
  if (seenHash.has(h)) return false;
  seenHash.add(h);
  line.set(name, { svg, c, t, src });
  return true;
};

// 1. Tabler outline (base)
const tMeta = JSON.parse(read(join(nm, "@tabler/icons/icons.json")));
for (const f of readdirSync(join(nm, "@tabler/icons/icons/outline"))) {
  const name = f.replace(/\.svg$/, "");
  const m = tMeta[name] ?? {};
  if (m.category === "Brand" || name.startsWith("brand-")) continue; // trademarks stay out
  add(name, inner(read(join(nm, "@tabler/icons/icons/outline", f))), m.category || "System", (m.tags ?? []).map(String), "tabler");
}
const nTabler = line.size;

// 2. Lucide for concepts Tabler lacks
const lTags = JSON.parse(read(join(nm, "lucide-static/tags.json")));
const allTags = new Set([...line.values()].flatMap((v) => v.t));
for (const f of readdirSync(join(nm, "lucide-static/icons"))) {
  const name = f.replace(/\.svg$/, "");
  add(name, inner(read(join(nm, "lucide-static/icons", f))), "", lTags[name] ?? [], "lucide");
}
const nLucide = line.size - nTabler;

// 3. Iconoir for what is still missing
const iDir = join(nm, "iconoir/icons/regular");
for (const f of readdirSync(iDir)) {
  const name = f.replace(/\.svg$/, "");
  add(name, inner(read(join(iDir, f))), "", [], "iconoir");
}
const nIconoir = line.size - nTabler - nLucide;

// Category for non-Tabler icons: borrow from a Tabler icon sharing the first name word.
const firstWordCat = new Map();
for (const [n, v] of line) if (v.src === "tabler" && !firstWordCat.has(n.split("-")[0])) firstWordCat.set(n.split("-")[0], v.c);
for (const [n, v] of line) if (!v.c) v.c = firstWordCat.get(n.split("-")[0]) || "General";

// Fill style: Tabler filled
const fill = new Map();
for (const f of readdirSync(join(nm, "@tabler/icons/icons/filled"))) {
  const name = f.replace(/\.svg$/, "");
  if (line.has(name)) fill.set(name, inner(read(join(nm, "@tabler/icons/icons/filled", f)), { keepFill: true }));
}

// Six styles per icon (see scripts/styles.mjs). Solid prefers Tabler's hand-drawn filled version.
const styled = Object.fromEntries(STYLES.map((st) => [st, new Map()]));
let containers = 0;
for (const [n, v] of line) {
  const r = deriveStyles(n, v.svg);
  if (r.analysis.container) containers++;
  for (const st of STYLES) styled[st].set(n, r.svg[st]);
  if (fill.has(n)) styled.solid.set(n, `<g fill="currentColor">${fill.get(n)}</g>`);
}
const ROOT = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">';
rmSync(join(root, "svg"), { recursive: true, force: true });
for (const st of STYLES) {
  mkdirSync(join(root, "svg", st), { recursive: true });
  for (const [n, body] of styled[st]) writeFileSync(join(root, "svg", st, n + ".svg"), ROOT + body + "</svg>\n");
}

// Site / MCP data
mkdirSync(webOut, { recursive: true });
writeFileSync(join(root, "../../apps/web/lib/icon-stats.json"), JSON.stringify({ line: line.size, styles: STYLES.length, total: line.size * STYLES.length, handSolid: fill.size }));
const index = [...line].map(([n, v]) => ({ n, c: v.c, t: v.t.slice(0, 8) }));
writeFileSync(join(webOut, "index.json"), JSON.stringify(index));
for (const st of STYLES) writeFileSync(join(webOut, st + ".json"), JSON.stringify(Object.fromEntries(styled[st])));
for (const old of ["line.json", "fill.json"]) rmSync(join(webOut, old), { force: true });
console.log(`styles ${STYLES.join(", ")} · ${containers} icons with a container shape`);

// Coverage against the Hugeicons free name list (concepts only)
const hugeNames = readdirSync(join(nm, "@hugeicons/core-free-icons/dist/esm"))
  .filter((f) => f.endsWith("Icon.js"))
  .map((f) => f.replace(/Icon\.js$/, "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase().replace(/-?\d+$/, ""));
const concepts = [...new Set(hugeNames)];
const words = new Set([...line.keys()].flatMap((n) => n.split("-")).concat([...line.values()].flatMap((v) => v.t.flatMap((t) => String(t).split(/[-\s]/)))));
const exact = concepts.filter((c) => line.has(c));
const byWords = concepts.filter((c) => !line.has(c) && c.split("-").every((w) => words.has(w)));
const missing = concepts.filter((c) => !line.has(c) && !c.split("-").every((w) => words.has(w)));
writeFileSync(join(root, "coverage.json"), JSON.stringify({ concepts: concepts.length, exactName: exact.length, coveredByParts: byWords.length, missing }, null, 1));

const cats = [...new Set(index.map((i) => i.c))];
console.log(`line ${line.size} (tabler ${nTabler}, lucide ${nLucide}, iconoir ${nIconoir}) · fill ${fill.size} · ${cats.length} categories`);
console.log(`hugeicons concepts ${concepts.length}: exact ${exact.length}, by parts ${byWords.length}, missing ${missing.length}`);

// React entries: foundryui-icons/react/<style> (tree-shakeable), and /react = stroke-rounded.
const pascal = (n) => n.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
const esc = (s) => JSON.stringify(s);
const head = [
  'import { createElement as h, forwardRef } from "react";',
  "const mk = (body, name) => { const C = forwardRef(function Icon({ size = 24, strokeWidth = 1.5, ...p }, ref) {",
  '  const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);',
  '  return h("svg", Object.assign({ ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", "aria-hidden": p["aria-label"] ? undefined : true }, p, { dangerouslySetInnerHTML: { __html: html } }));',
  "}); C.displayName = name; return C; };",
];
const dtsHead = ['import type { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";', "type P = Omit<SVGProps<SVGSVGElement>, 'ref'> & { size?: number | string; strokeWidth?: number | string };", "type I = ForwardRefExoticComponent<P & RefAttributes<SVGSVGElement>>;"];
rmSync(join(root, "react"), { recursive: true, force: true });
mkdirSync(join(root, "react"), { recursive: true });
for (const st of STYLES) {
  const js = [...head], dts = [...dtsHead], used = new Set();
  for (const [n, body] of styled[st]) {
    let id = pascal(n);
    if (/^\d/.test(id)) id = "I" + id;
    if (used.has(id)) continue;
    used.add(id);
    js.push(`export const ${id} = /*#__PURE__*/ mk(${esc(body)}, ${esc(id)});`);
    dts.push(`export declare const ${id}: I;`);
  }
  writeFileSync(join(root, "react", st + ".js"), js.join("\n") + "\n");
  writeFileSync(join(root, "react", st + ".d.ts"), dts.join("\n") + "\n");
}
writeFileSync(join(root, "react/index.js"), 'export * from "./stroke-rounded.js";\n');
writeFileSync(join(root, "react/index.d.ts"), 'export * from "./stroke-rounded.js";\n');
console.log("react: " + STYLES.length + " style entries");
