/**
 * Builds the Ingot UI icon library from open-licence sources, normalised to one spec:
 * 24px grid, 1.5px live stroke, round caps and joins, currentColor.
 *
 *   Line style: Tabler outline (MIT) as the base, then Lucide (ISC) and Iconoir (MIT)
 *               for concepts Tabler doesn't have, then the Hugeicons free set (MIT, via the
 *               Iconify JSON package) for everything still missing, AI icons first.
 *   Fill style: Tabler filled (MIT).
 *
 * Hugeicons is already drawn on this spec, so its icons are used as drawn; see scripts/hugeicons.mjs
 * for which ones join (no brand logos), under what name, category and tags.
 *
 * Outputs:
 *   packages/icons/svg/{line,fill}/<name>.svg
 *   apps/web/public/icons/index.json   [{n,c,t,s}]  name, category, tags, styles
 *   apps/web/public/icons/line.json    {name: inner svg}
 *   apps/web/public/icons/fill.json    {name: inner svg}
 *   (current) apps/web/public/icons/<stroke-rounded|stroke-sharp>.json: free styles, public
 *             apps/web/icons-pro/<solid|duotone|twotone|bulk>.json: paid styles, NOT public; served by
 *             /api/icons/<style> after the plan check (apps/web/scripts/code-gate.mjs puts them behind a token)
 *   packages/icons/coverage.json       Hugeicons concept coverage report
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { STYLES, deriveStyles } from "./styles.mjs";
import svgpath from "svgpath";
import { isBrand, rename, isAI, aiTags, wordCategory } from "./hugeicons.mjs";
import { SETS, isBrandName, fixName } from "./extra-sets.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const nm = join(root, "node_modules");
const webOut = join(root, "../../apps/web/public/icons");
// Paid icon styles stay out of public/ (Free = stroke styles only).
const proOut = join(root, "../../apps/web/icons-pro");
const FREE_STYLES = new Set(["stroke-rounded", "stroke-sharp"]);
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

// 4. Hugeicons free set (Iconify JSON) for what is still missing, AI icons first.
/** Hugeicons body -> library body: <g> wrappers unwrapped (their fill pushed down), stroke paint dropped
 *  (the style wrapper adds it), filled shapes kept as fills with no stroke on top. */
function hugeInner(body) {
  let b = body;
  for (let i = 0; i < 4 && /<g\b/.test(b); i++)
    b = b.replace(/<g\b([^>]*)>((?:(?!<g\b)[\s\S])*?)<\/g>/g, (_m, attrs, kids) => {
      const f = /\sfill="(currentColor)"/.exec(attrs);
      return f ? kids.replace(/<(path|circle|rect|ellipse|polygon)\b(?![^>]*\sfill=)/g, '<$1 fill="currentColor"') : kids;
    });
  b = b.replace(/\s(stroke-width|stroke-linecap|stroke-linejoin|stroke-miterlimit|class)="[^"]*"/g, "").replace(/\sfill="none"/g, "");
  // a filled shape without its own stroke must not pick up the style wrapper's stroke
  b = b.replace(/<(path|circle|rect|ellipse|polygon)\b([^>]*)>/g, (m, tag, a) => (/\sfill="currentColor"/.test(a) && !/\sstroke=/.test(a) ? `<${tag}${a.replace(/\s*\/$/, "")} stroke="none"/>` : m));
  b = b.replace(/\sstroke="currentColor"/g, "");
  return b.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim();
}
const hJson = JSON.parse(read(join(nm, "@iconify-json/hugeicons/icons.json")));
const hHidden = new Set(hJson.hidden ?? []);
const hNames = Object.keys(hJson.icons).filter((n) => !hHidden.has(n) && !isBrand(n) && !/transform=|<use\b|<defs\b/.test(hJson.icons[n].body));
hNames.sort((a, b) => Number(isAI(b)) - Number(isAI(a))); // stable: AI first, then upstream order
const hugeAdded = [];
const jsxId = (n) => (/^\d/.test(n) ? "I" : "") + n.replace(/(^|-)([a-z0-9])/g, (_m, _d, c) => c.toUpperCase());
const ids = new Set([...line.keys()].map(jsxId));
const taken = (n) => line.has(n) || ids.has(jsxId(n)); // a React export name must stay unique too
for (const up of hNames) {
  if (line.has(up)) continue; // same name already drawn by an earlier source
  let name = rename(up);
  if (taken(name)) name = name + "-alt";
  if (taken(name)) continue;
  const ai = isAI(up);
  const tags = ai ? aiTags(name) : [];
  if (name !== up) tags.push(up.replace(/-/g, " "));
  if (add(name, hugeInner(hJson.icons[up].body), ai ? "AI" : wordCategory(name) || "", tags, "hugeicons")) {
    hugeAdded.push(name);
    ids.add(jsxId(name));
  }
}
const nHuge = hugeAdded.length;

/** Scale a drawing from another grid to 24: path data and the geometry attributes of primitives. */
function scaleBody(body, k) {
  const num = (v) => String(+(Number(v) * k).toFixed(3));
  return body
    .replace(/\sd="([^"]*)"/g, (_m, d) => ` d="${svgpath(d).scale(k).round(3).toString()}"`)
    .replace(/\s(cx|cy|r|rx|ry|x|y|width|height|x1|y1|x2|y2)="([-\d.]+)"/g, (_m, a, v) => ` ${a}="${num(v)}"`)
    .replace(/\spoints="([^"]*)"/g, (_m, p) => ` points="${p.trim().split(/[\s,]+/).map(num).join(" ")}"`);
}

// 5. More open-licence line sets (scripts/extra-sets.mjs), in priority order, for names still missing.
const EXTRA_CAP = 5000; // how many the extra sets add, at most
const extraAdded = [];
const bySource = {};
const cands = [];
for (const set of SETS) {
  const j = JSON.parse(read(join(nm, "@iconify-json", set.prefix, "icons.json")));
  const W = j.width ?? j.height ?? 16;
  const hidden = new Set(j.hidden ?? []);
  for (const [up, ic] of Object.entries(j.icons)) {
    const grid = set.size ?? 24;
    if (hidden.has(up) || (ic.width ?? W) !== grid || (ic.height ?? j.height ?? W) !== grid) continue;
    if (set.keep && !set.keep.test(up)) continue;
    if (!/stroke=/.test(ic.body) || /fill="currentColor"|transform=|<use\b|<defs\b|mask=|clip-path=|opacity=/.test(ic.body)) continue; // line drawings only
    const raw = set.strip ? up.replace(set.strip, "") : up;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(raw) || isBrand(raw) || isBrandName(raw)) continue;
    const name = fixName(raw);
    cands.push({ name, set, body: grid === 24 ? ic.body : scaleBody(ic.body, 24 / grid) });
  }
}
// AI first, then concepts the library has no icon for at all (new first word), then the rest; set order within each.
const firstWords = new Set([...line.keys()].map((n) => n.split("-")[0]));
const rank = (c) => (isAI(c.name) ? 0 : firstWords.has(c.name.split("-")[0]) ? 2 : 1);
cands.forEach((c, i) => (c.i = i));
cands.sort((x, y) => rank(x) - rank(y) || x.i - y.i);
for (const c of cands) {
  if (extraAdded.length >= EXTRA_CAP) break;
  if (taken(c.name)) continue;
  const ai = isAI(c.name);
  if (add(c.name, hugeInner(c.body), ai ? "AI" : wordCategory(c.name) || "", ai ? aiTags(c.name) : [], c.set.prefix)) {
    extraAdded.push(c.name);
    ids.add(jsxId(c.name));
    bySource[c.set.prefix] = (bySource[c.set.prefix] ?? 0) + 1;
  }
}
const nExtra = extraAdded.length;

// Category for non-Tabler icons: borrow from a Tabler icon sharing the first name word.
const firstWordCat = new Map();
for (const [n, v] of line) if (v.src === "tabler" && !firstWordCat.has(n.split("-")[0])) firstWordCat.set(n.split("-")[0], v.c);
for (const [n, v] of line) if (!v.c) v.c = firstWordCat.get(n.split("-")[0]) || (!["tabler", "lucide", "iconoir"].includes(v.src) && n.split("-").map((w) => firstWordCat.get(w)).find(Boolean)) || "General";

// Fill style: Tabler filled
const fill = new Map();
for (const f of readdirSync(join(nm, "@tabler/icons/icons/filled"))) {
  const name = f.replace(/\.svg$/, "");
  if (line.get(name)?.src === "tabler") fill.set(name, inner(read(join(nm, "@tabler/icons/icons/filled", f)), { keepFill: true }));
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
mkdirSync(proOut, { recursive: true });
writeFileSync(join(root, "../../apps/web/lib/icon-stats.json"), JSON.stringify({ line: line.size, styles: STYLES.length, total: line.size * STYLES.length, handSolid: fill.size }));
const index = [...line].map(([n, v]) => ({ n, c: v.c, t: v.t.slice(0, 8) }));
writeFileSync(join(webOut, "index.json"), JSON.stringify(index));
for (const st of STYLES) {
  writeFileSync(join(FREE_STYLES.has(st) ? webOut : proOut, st + ".json"), JSON.stringify(Object.fromEntries(styled[st])));
  if (!FREE_STYLES.has(st)) rmSync(join(webOut, st + ".json"), { force: true });
}
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
const catCount = (names) => {
  const m = {};
  for (const n of names) m[line.get(n).c] = (m[line.get(n).c] ?? 0) + 1;
  return Object.fromEntries(Object.entries(m).sort((a, b) => b[1] - a[1]));
};
writeFileSync(join(root, "added-icons.json"), JSON.stringify({ hugeicons: { total: nHuge, byCategory: catCount(hugeAdded) }, extraSets: { total: nExtra, bySource, byCategory: catCount(extraAdded) }, names: { hugeicons: hugeAdded, extraSets: extraAdded } }, null, 1));
writeFileSync(join(root, "coverage.json"), JSON.stringify({ concepts: concepts.length, exactName: exact.length, coveredByParts: byWords.length, missing }, null, 1));

const cats = [...new Set(index.map((i) => i.c))];
console.log(`line ${line.size} (tabler ${nTabler}, lucide ${nLucide}, iconoir ${nIconoir}, hugeicons ${nHuge}, more sets ${nExtra}) · fill ${fill.size} · ${cats.length} categories`);
console.log(`hugeicons concepts ${concepts.length}: exact ${exact.length}, by parts ${byWords.length}, missing ${missing.length}`);

// React entries: ingotui-icons/react/<style> (tree-shakeable), and /react = stroke-rounded.
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
