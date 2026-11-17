#!/usr/bin/env node
/**
 * Makes the coded dashboard templates copyable (runs from `npm run build`, before code-gate).
 *
 * The templates' React code lives in components/showcase/<slug>.tsx (written by
 * packages/figma-library/export/showcase.mjs, checked against the Figma screen). For each one this writes a
 * copy-ready file to public/library-code/<system>/<figma item slug>.txt, the same store as every generated
 * component, so the Figma item page shows Copy React code / View code behind the plan gate, code-gate.mjs
 * moves it to a token URL, and the MCP server can serve it. Scores go to lib/template-code.json (kept apart
 * from figma-code.json, which publish.mjs rewrites).
 *
 * Copy-ready means: the site-only font variable is dropped (the file falls back to Geist), and image paths
 * point at ingotui.com so the file works in any project. Nothing else changes: the markup is exactly the
 * code that was measured against Figma.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WEB = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://ingotui.com";
const generated = JSON.parse(readFileSync(join(WEB, "components/showcase/generated.json"), "utf8"));
const itemsRaw = JSON.parse(readFileSync(join(WEB, "lib/figma-items.json"), "utf8"));
const items = Array.isArray(itemsRaw) ? itemsRaw : itemsRaw.items ?? Object.values(itemsRaw);

const scores = {};
for (const g of generated) {
  const src = join(WEB, "components/showcase", g.slug + ".tsx");
  if (!existsSync(src)) continue;
  // Figma item slugs end in the source node id without the colon (189:43535 -> ...-18943535).
  const tail = "-" + String(g.source).replace(":", "");
  const item = items.find((f) => f.system === g.system && f.slug.endsWith(tail));
  if (!item) {
    console.warn("templates-export: no Figma item for", g.slug);
    continue;
  }
  let code = readFileSync(src, "utf8");
  code = code
    .replace(/^\/\/ .*\n\/\/ Do not edit by hand.*\n/, "")
    .replace(/var\(--font-showcase-geist\), /g, "")
    .replace(/(["'(])\/showcase\//g, "$1" + SITE + "/showcase/")
    // a named export (the site's preview renderer and most imports want one) plus the default export
    .replace(/^export default function (\w+)/m, "export function $1");
  const fn = code.match(/^export function (\w+)/m)?.[1];
  if (fn) code += "\nexport default " + fn + ";\n";
  const header = [
    `// ${item.name} (${g.system} dashboard template) from Ingot UI (ingotui.com).`,
    `// Generated from the Figma screen and checked against it: ${g.perceptual}% perceptual match, ${g.strict}% strict.`,
    `// React 19 + inline styles, no other packages. Fixed ${g.w} x ${g.h} px canvas, like the Figma frame; scale it or wrap it as you need.`,
    `// Fonts: Geist (load it in your app, e.g. next/font/google). Colours use the --fu-* tokens with the Figma values as fallback.`,
    "",
  ].join("\n");
  const out = join(WEB, "public/library-code", g.system, item.slug + ".txt");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, header + code);
  scores[item.slug] = { score: g.perceptual, strict: g.strict };
}
writeFileSync(join(WEB, "lib/template-code.json"), JSON.stringify(scores, null, 1) + "\n");
console.log("templates-export:", Object.keys(scores).length, "templates copyable");
