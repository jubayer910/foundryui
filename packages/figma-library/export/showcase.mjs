// Emits the QA-passed whole screens of the site showcase ("What your agent builds") as React components.
//   node showcase.mjs  -> apps/web/components/showcase/<slug>.tsx, apps/web/public/showcase/<hash>.webp,
//                         apps/web/components/showcase/generated.json (size + QA scores per screen)
// Input: showcase.json (copies of Template screens on each file's Foundry Library page),
// serialized with serialize.js {ids, maxNodes, images} and scored with qa.mjs.
// Output rules: Ingot icons inlined as SVG (no third-party drawings), colours mapped to the system tokens where the
// system has a token file (var(--fu-*, <figma value>)), styles deduplicated into one table so the file stays small.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { build, setImageUrl, iconBody } from "./convert.mjs";

const WEB = new URL("../../../apps/web/", import.meta.url).pathname;
const sharp = createRequire(WEB + "package.json")("sharp");
const TH = Number(process.env.TH || 99);
const SYSTEMS = ["loopo", "mailpulse", "auton", "axon", "veriq", "vantage"];

// token files: hex -> var(--fu-name, hex)
async function tokenMap(sys) {
  const f = WEB + "registry/tokens/" + sys + ".css";
  if (!existsSync(f)) return new Map();
  const css = await readFile(f, "utf8");
  const m = new Map();
  for (const [, name, hex] of css.matchAll(/--(fu-[a-z0-9-]+):\s*(#[0-9a-f]{6})\s*;/gi)) if (!m.has(hex.toLowerCase())) m.set(hex.toLowerCase(), name);
  return m;
}
const FONT = { Geist: "var(--font-showcase-geist), 'Geist', ui-sans-serif, system-ui, sans-serif", "Geist Mono": "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", Inter: "var(--font-inter), 'Inter', ui-sans-serif, system-ui, sans-serif" };

const pascal = (s) => s.split(/[^a-z0-9]+/i).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join("");
const jsxAttr = (svg) => svg
  .replace(/<\?xml[^>]*>/g, "")
  .replace(/\s(class)=/g, " className=")
  .replace(/\s([a-z]+(?:-[a-z]+)+)=/g, (_, a) => " " + a.replace(/-([a-z])/g, (m, c) => c.toUpperCase()) + "=")
  .replace(/\sxmlns:xlink="[^"]*"/g, "").replace(/xlink:href/g, "href");
const jsxText = (s) => (/[{}<>]/.test(s) || s.includes("\n") || /^\s|\s$/.test(s) ? "{" + JSON.stringify(s) + "}" : s);

function emit(tree, tokens) {
  const styles = new Map();
  const sref = (st) => {
    const o = {};
    for (const [k, v] of Object.entries(st)) {
      let val = v;
      if (typeof val === "string") {
        if (k === "fontFamily") { const fam = val.replace(/'/g, ""); val = FONT[fam] || val; }
        val = val.replace(/#[0-9a-f]{6}\b/gi, (h) => (tokens.has(h.toLowerCase()) ? `var(--${tokens.get(h.toLowerCase())}, ${h})` : h));
      }
      o[k] = val;
    }
    const key = JSON.stringify(o);
    if (!styles.has(key)) styles.set(key, styles.size);
    return "s[" + styles.get(key) + "]";
  };
  const out = [];
  const walk = (el, d) => {
    const pad = " ".repeat(d);
    if (el.icon) {
      // Ingot icon, inlined (same drawing the Figma copy uses)
      out.push(`${pad}<svg width={${el.icon.size}} height={${el.icon.size}} viewBox="0 0 24 24" style={${sref(el.st)}}>${jsxAttr(iconBody(el.icon))}</svg>`);
      return;
    }
    if (el.svg) { out.push(pad + jsxAttr(el.svg).replace(/^<svg/, `<svg style={${sref(el.st)}}`)); return; }
    const open = `${pad}<${el.tag} style={${sref(el.st)}}`;
    if (el.text !== undefined) { out.push(`${open}>${jsxText(el.text)}</${el.tag}>`); return; }
    if (!el.kids.length) { out.push(open + " />"); return; }
    out.push(open + ">");
    for (const k of el.kids) walk(k, d + 1);
    out.push(`${pad}</${el.tag}>`);
  };
  walk(build(tree), 2);
  const table = [...styles.keys()].map((k) => "  " + k.replace(/"([a-zA-Z]+)":/g, "$1: ")).join(",\n");
  return { jsx: out.join("\n"), table };
}

await mkdir(WEB + "components/showcase", { recursive: true });
await mkdir(WEB + "public/showcase", { recursive: true });
const manifest = [];
const ALL = JSON.parse(await readFile(new URL("./showcase.json", import.meta.url), "utf8"));
for (const sys of SYSTEMS) {
  const dir = new URL("./data/" + sys + "/", import.meta.url).pathname;
  const metas = ALL.filter((m) => m.system === sys);
  if (!metas.length) continue;
  const qa = JSON.parse(await readFile(dir + "qa.json", "utf8").catch(() => "[]"));
  const tokens = await tokenMap(sys);
  for (const m of metas) {
    const id = m.id.replace(/[:;]/g, "-");
    const r = qa.find((x) => x.id === id);
    if (!r || r.score === undefined || r.score < TH) { console.log("skip", m.slug, r && r.score); continue; }
    const tree = JSON.parse(await readFile(dir + id + ".json", "utf8"));
    // pictures: webp files under /showcase/
    const hashes = [...new Set((JSON.stringify(tree).match(/"h":"[0-9a-f]+"/g) || []).map((x) => x.slice(5, -1)))];
    for (const h of hashes) {
      const src = dir + "img/" + h + ".bin";
      if (existsSync(src)) await sharp(src).resize({ width: 192, height: 192, fit: "inside", withoutEnlargement: true }).webp({ quality: 85 }).toFile(WEB + "public/showcase/" + h + ".webp");
    }
    setImageUrl((h) => (hashes.includes(h) && existsSync(dir + "img/" + h + ".bin") ? `'/showcase/${h}.webp'` : null));
    const { jsx, table } = emit(tree, tokens);
    const name = pascal(m.slug.replace(/^showcase-/, "")) + "Screen";
    const file = m.slug.replace(/^showcase-/, "");
    const src = `// ${m.name} (${sys}), generated from the Figma screen and checked against it (perceptual ${r.score}%, strict ${r.strict}%).
// Do not edit by hand: packages/figma-library/export/showcase.mjs writes this file. Icons: Ingot icons. ${tokens.size ? "Colours: " + sys + " tokens." : "Colours: Figma values (no token file for " + sys + " yet)."}
import type { CSSProperties } from "react";

const s: CSSProperties[] = [
${table}
];

export default function ${name}() {
  return (
${jsx}
  );
}
`;
    await writeFile(WEB + "components/showcase/" + file + ".tsx", src);
    manifest.push({ slug: file, system: sys, name: m.name, w: Math.round(tree.w), h: Math.round(tree.h), perceptual: r.score, strict: r.strict, layout: r.layout, figma: m.id, source: m.source });
    console.log(file, (src.length / 1024).toFixed(0) + " KB", "styles", table.split("\n").length);
  }
}
await writeFile(WEB + "components/showcase/generated.json", JSON.stringify(manifest, null, 1) + "\n");
