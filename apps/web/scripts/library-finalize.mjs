#!/usr/bin/env node
/**
 * Finalises the generated component code before every build (runs from `npm run build`).
 *
 * 1. Copy-ready code: each public/library-code/<sys>/<slug>.txt imports icons from the
 *    icon package. That package is not on npm yet, so copied code would not compile.
 *    The icons a file uses are inlined as small SVG components, and leftover old-brand
 *    text is replaced. The file then needs nothing but React.
 * 2. Live previews: each file is compiled and rendered with React to static HTML at
 *    public/library-preview/<sys>/<slug>.html. Component pages show that page in an
 *    iframe, so visitors see the real code's output, not a Figma screenshot.
 *
 * Idempotent: already-finalised files are left as they are, and a preview is only
 * re-rendered when its code file is newer. Usage: node scripts/library-finalize.mjs [--force]
 */
import { readFile, writeFile, readdir, mkdir, stat, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { transform } from "esbuild";

const WEB = join(dirname(fileURLToPath(import.meta.url)), "..");
const CODE = join(WEB, "public/library-code");
const PREVIEW = join(WEB, "public/library-preview");
const ICONS = join(WEB, "../../packages/icons/react");
const TMP = join(WEB, "node_modules/.cache/ingot-preview");
const FORCE = process.argv.includes("--force");

if (!existsSync(CODE)) {
  console.log("library-finalize: no public/library-code, skipping");
  process.exit(0);
}

// --- icon bodies from the built icon package: export const Name = mk("<svg body>", "Name")
const bodies = {};
for (const style of ["stroke-rounded", "bulk", "solid", "duotone", "twotone", "stroke-sharp"]) {
  const f = join(ICONS, style + ".js");
  if (!existsSync(f)) continue;
  const src = await readFile(f, "utf8");
  const map = (bodies[style] = {});
  for (const m of src.matchAll(/export const (\w+) = \/\*#__PURE__\*\/ mk\(("(?:[^"\\]|\\.)*")/g)) map[m[1]] = JSON.parse(m[2]);
}

const IMPORT = /^import \{([^}]*)\} from "(?:foundryui|ingotui)-icons\/react\/([a-z-]+)";\n/gm;

/** Replace icon-package imports with inlined SVG components. Returns null if an icon is missing. */
function inlineIcons(code) {
  const used = [];
  let missing = null;
  const out = code.replace(IMPORT, (_, specs, style) => {
    for (const s of specs.split(",").map((x) => x.trim()).filter(Boolean)) {
      const [name, local = name] = s.split(/\s+as\s+/);
      const body = bodies[style]?.[name];
      if (body === undefined) missing = style + "/" + name;
      used.push({ local, body: body ?? "" });
    }
    return "";
  });
  if (missing) return { code, missing };
  if (!used.length) return { code };
  // An icon named like the component itself (e.g. icon Search in a component Search) would clash: rename the icon.
  const fn = out.match(/^export function (\w+)/m)?.[1];
  let body = out;
  for (const u of used) {
    if (u.local !== fn) continue;
    u.local = u.local + "Icon";
    body = body.replace(new RegExp("<" + fn + "(?=[\\s/>])", "g"), "<" + u.local);
  }
  const block = [
    "",
    "// Ingot Icons used here, inlined so this file needs no icon package.",
    "function icon(body: string) {",
    "  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {",
    "    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width=\"([\\d.]+)\"/g, (_, w) => `stroke-width=\"${(Number(w) * Number(strokeWidth)) / 1.5}\"`);",
    "    return <svg xmlns=\"http://www.w3.org/2000/svg\" width={size} height={size} viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;",
    "  };",
    "}",
    ...used.map((u) => `const ${u.local} = icon(${JSON.stringify(u.body)});`),
    "",
  ].join("\n");
  // after the header comments, before the component
  const at = body.search(/^export function /m);
  const head = body.slice(0, at).replace(/\n*$/, "\n");
  return { code: head + 'import type { SVGProps } from "react";\n' + block + "\n" + body.slice(at) };
}

const rebrand = (s) =>
  s
    .replace(/ from Foundry UI\./, " from Ingot UI (ingotui.com).")
    .replace(/Icons: Foundry Icons\./, "Icons: Ingot Icons.")
    .replace(/foundryui-icons/g, "ingotui-icons");

// --- preview page
const FONTS = "https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400..600&family=Inter:wght@300..700&display=swap";
const page = (title, body, script = "") => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">
<title>${title.replace(/[<&]/g, "")} preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="${FONTS}">
<style>html,body{margin:0;padding:0;background:transparent}body{font-family:'Geist',ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*::before,*::after{box-sizing:border-box}#c{display:inline-block;padding:32px}</style>
</head><body><div id="c">${body}</div>${script}</body></html>
`;

const React = await import(pathToFileURL(join(WEB, "node_modules/react/index.js")).href);
const { renderToStaticMarkup } = await import(pathToFileURL(join(WEB, "node_modules/react-dom/server.node.js")).href);
await mkdir(TMP, { recursive: true });

let finalized = 0, rendered = 0, skipped = 0;
const failed = [];
for (const sys of await readdir(CODE)) {
  const dir = join(CODE, sys);
  if (!(await stat(dir)).isDirectory()) continue;
  await mkdir(join(PREVIEW, sys), { recursive: true });
  for (const file of (await readdir(dir)).filter((f) => f.endsWith(".txt"))) {
    const slug = file.slice(0, -4);
    const path = join(dir, file);
    let code = await readFile(path, "utf8");

    // 1. copy-ready code
    if (/from "(?:foundryui|ingotui)-icons\/react\//.test(code) || /Foundry/.test(code.slice(0, 400))) {
      const r = inlineIcons(code);
      if (r.missing) { failed.push(slug + " (icon " + r.missing + ")"); continue; }
      code = rebrand(r.code);
      await writeFile(path, code);
      finalized++;
    }

    // 2. live preview
    const html = join(PREVIEW, sys, slug + ".html");
    if (!FORCE && existsSync(html) && (await stat(html)).mtimeMs >= (await stat(path)).mtimeMs) { skipped++; continue; }
    try {
      const fn = code.match(/^export function (\w+)/m)?.[1];
      if (!fn) throw new Error("no exported component");
      const { code: js } = await transform(code, { loader: "tsx", jsx: "automatic", format: "esm" });
      const tmp = join(TMP, sys + "-" + slug + ".mjs");
      await writeFile(tmp, js);
      const mod = await import(pathToFileURL(tmp).href + "?t=" + Date.now());
      const markup = renderToStaticMarkup(React.createElement(mod[fn]));
      const title = code.match(/^\/\/ (.+?) \(/m)?.[1] ?? slug;
      // interactive components: the same helper the copied code runs, attached to the rendered markup
      let script = "";
      const at = code.indexOf("function fuInteract(");
      if (at >= 0) {
        const { code: helper } = await transform(code.slice(at), { loader: "ts", minifyWhitespace: true });
        script = "<script>" + helper.replace(/<\/script/gi, "<\\/script") + ";(function(){var r=document.getElementById('c').firstElementChild;try{fuInteract(r)}catch(e){}})()</script>";
      }
      await writeFile(html, page(title, markup, script));
      rendered++;
    } catch (e) {
      failed.push(slug + " (" + String(e.message).slice(0, 80) + ")");
    }
  }
}
await rm(TMP, { recursive: true, force: true });

// 3. Specs for each component page, read from its finished code (lib/component-specs.generated.json).
//    Real, per-component facts (icons, type, colours, radii, size of the code) give every page its own text.
const words = (n) => n.replace(/(Bulk|Solid|Duotone|Twotone|Sharp|Icon)$/, "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase()).replace(/ ([A-Z])(?=[a-z])/g, (m) => m.toLowerCase());
const px = (v) => Math.round(parseFloat(v) * 2) / 2;
const top = (arr, n) => Object.entries(arr.reduce((m, x) => ((m[x] = (m[x] || 0) + 1), m), {})).sort((a, b) => b[1] - a[1]).slice(0, n);
const specs = {};
for (const sys of await readdir(CODE)) {
  const dir = join(CODE, sys);
  if (!(await stat(dir)).isDirectory()) continue;
  for (const file of (await readdir(dir)).filter((f) => f.endsWith(".txt"))) {
    const full = await readFile(join(dir, file), "utf8");
    const cut = full.indexOf("\n// Interactions:");
    const code = cut > 0 ? full.slice(0, cut) : full;
    const fn = code.match(/^export function (\w+)/m)?.[1];
    if (!fn) continue;
    const icons = [...new Set([...code.matchAll(/^const (\w+) = icon\(/gm)].map((m) => words(m[1])))];
    const fonts = (code.match(/Fonts: ([^.]+)\./)?.[1] ?? "").split(",").map((x) => x.trim()).filter((x) => x && x !== "none");
    const sizes = [...new Set([...code.matchAll(/fontSize: "([\d.]+)px"/g)].map((m) => px(m[1])))].sort((a, b) => a - b);
    const weights = [...new Set([...code.matchAll(/fontWeight: (\d{3})/g)].map((m) => +m[1]))].sort((a, b) => a - b);
    const colors = top([...code.matchAll(/#[0-9a-fA-F]{6}\b/g)].map((m) => m[0].toLowerCase()), 6).map(([c]) => c);
    const radii = [...new Set([...code.matchAll(/borderRadius: "([\d.]+)px"/g)].map((m) => px(m[1])).filter((r) => r > 0 && r < 999))].sort((a, b) => a - b).slice(0, 5);
    const lines = code.split("\n").length;
    specs[file.slice(0, -4)] = [fn, icons, fonts, sizes, weights, colors, radii, lines, cut > 0 ? 1 : 0];
  }
}
await writeFile(join(WEB, "lib/component-specs.generated.json"), JSON.stringify(specs));
console.log(`library-finalize: specs for ${Object.keys(specs).length} components`);
console.log(`library-finalize: ${finalized} code files made self-contained, ${rendered} previews rendered, ${skipped} up to date, ${failed.length} failed`);
if (failed.length) console.log("  failed: " + failed.slice(0, 20).join("; ") + (failed.length > 20 ? " …" : ""));
