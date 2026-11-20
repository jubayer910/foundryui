#!/usr/bin/env node
/**
 * Guard for the interaction roll-out: a component only becomes interactive when its new code is the live,
 * QA-checked code plus the interaction layer and nothing else. Every other component gets its live code back.
 *
 * Live code: public/c/<token>.txt from the last deploy (lib/code-paths.generated.json maps slug -> token).
 * New code: public/library-code/<sys>/<slug>.txt after regen + publish + library-finalize.
 * Writes the decision back to library-code (and to packages/figma-library/export/out for future publishes).
 *   node scripts/interact-guard.mjs [--dry]
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const WEB = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(WEB, "../../packages/figma-library/export/out");
const DRY = process.argv.includes("--dry");
const paths = JSON.parse(readFileSync(join(WEB, "lib/code-paths.generated.json"), "utf8"));
const strip = (s) =>
  s
    .replace(/^"use client";\n/, "")
    .replace(/\n\/\/ Interactions:[\s\S]*$/, "\n")
    .replace(/ data-fu="[a-z]+"/g, "")
    .replace(/ ref=\{fuRef\}/, "")
    .replace(/\n  const fuRef = useRef<any>\(null\);\n  useEffect\(\(\) => fuInteract\(fuRef\.current\), \[\]\);/, "")
    .replace(/import \{ useEffect, useRef \} from "react";\n/, "")
    .replace(/\n+/g, "\n")
    .trim();

// the component's JSX: from "export function X() {" to the first closing line of the function
const body = (code) => { const a = code.search(/^export function \w+\(\) \{$/m); if (a < 0) return null; const b = code.indexOf("\n}\n", a); return b < 0 ? null : [a, b]; };
const TAG = /(?<![\w)\]])<([A-Za-z][\w.]*)(?=[\s>\/])([^>]*?)(\/?>)/g;
function graft(now, live) {
  const bn = body(now), bl = body(live);
  if (!bn || !bl) return null;
  const nTags = [...now.slice(bn[0], bn[1]).matchAll(TAG)].map((m) => ({ name: m[1], fu: (m[2].match(/ data-fu="([a-z]+)"/) || [])[1] || "" }));
  const lBody = live.slice(bl[0], bl[1]);
  const lTags = [...lBody.matchAll(TAG)];
  if (nTags.length !== lTags.length || nTags.some((t, i) => t.name !== lTags[i][1])) return null;
  let i = 0, first = true;
  let out = lBody.replace(TAG, (m, name, attrs, end) => {
    const t = nTags[i++];
    let add = "";
    if (first && !/^(svg|path|g)$/.test(name) && /^[a-z]/.test(name)) { add += " ref={fuRef}"; first = false; }
    if (t.fu) add += ` data-fu="${t.fu}"`;
    return "<" + name + add + attrs + end;
  });
  if (first) return null;
  out = out.replace(/^(export function \w+\(\) \{\n)/, "$1  const fuRef = useRef<any>(null);\n  useEffect(() => fuInteract(fuRef.current), []);\n");
  const helper = now.slice(now.indexOf("\n// Interactions:"));
  let head = live.slice(0, bl[0]);
  head = '"use client";\n' + head.replace(/(\n?)(import type \{ SVGProps \} from "react";|$)/, (m0, nl, imp) => (imp ? nl + 'import { useEffect, useRef } from "react";\n' + imp : m0));
  if (!head.includes('import { useEffect, useRef } from "react";')) head = head.replace(/^("use client";\n(?:\/\/.*\n)*)/, '$1import { useEffect, useRef } from "react";\n');
  const result = head + out + live.slice(bl[1]).replace(/\n*$/, "\n") + helper.replace(/^\n*/, "\n");
  // the result must be the live code plus the interaction layer, nothing else
  return strip(result) === strip(live) ? result : null;
}

let kept = 0, restored = 0, nolive = 0, plain = 0, aligned = 0;
const restoredList = [];
for (const sys of readdirSync(join(WEB, "public/library-code"))) {
  const dir = join(WEB, "public/library-code", sys);
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".txt"))) {
    const slug = f.slice(0, -4);
    const now = readFileSync(join(dir, f), "utf8");
    const tok = paths[slug];
    const livePath = tok && join(WEB, "public/c", tok + ".txt");
    if (!livePath || !existsSync(livePath)) { nolive++; continue; }
    const live = readFileSync(livePath, "utf8");
    if (!now.includes("function fuInteract(")) {
      // not interactive: it must still be the live code
      if (strip(now) !== strip(live)) { if (!DRY) { writeFileSync(join(dir, f), live); if (existsSync(join(OUT, sys, slug + ".tsx"))) writeFileSync(join(OUT, sys, slug + ".tsx"), live); } restored++; restoredList.push(slug); } else plain++;
      continue;
    }
    if (strip(now) === strip(live)) { kept++; continue; }
    // same element tree, only styles differ (converter drift): put the roles onto the live code, element by element
    const grafted = graft(now, live);
    const next = grafted ?? live;
    if (!DRY) { writeFileSync(join(dir, f), next); if (existsSync(join(OUT, sys, slug + ".tsx"))) writeFileSync(join(OUT, sys, slug + ".tsx"), next); }
    if (grafted) { aligned++; continue; }
    restored++;
    restoredList.push(slug);
  }
}
writeFileSync(join(WEB, "../../packages/figma-library/export/data/interact-restored.json"), JSON.stringify(restoredList));
console.log(JSON.stringify({ interactiveKept: kept, interactiveOnLiveCode: aligned, staticUnchanged: plain, restoredToLive: restored, noLiveCopy: nolive, dry: DRY }));
