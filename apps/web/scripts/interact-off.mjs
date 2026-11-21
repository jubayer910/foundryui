#!/usr/bin/env node
/**
 * Takes the guessed interaction layer (data-fu roles + fuInteract helper) off every generated component,
 * leaving the exact static code that was QA'd against Figma. Writes library-code and the export out/ copy.
 *   node scripts/interact-off.mjs [--dry]
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const WEB = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(WEB, "../../packages/figma-library/export/out");
const DRY = process.argv.includes("--dry");
const unInteract = (code) => {
  let c = code.replace(/^"use client";\n/, "").replace(/import \{ useEffect, useRef \} from "react";\n/, "");
  c = c.replace(/\n  const fuRef = useRef<any>\(null\);\n  useEffect\(\(\) => fuInteract\(fuRef\.current\), \[\]\);/, "");
  c = c.replace(/ data-fu="[a-z]+"/g, "").replace(/ ref=\{fuRef\}/, "");
  const at = c.indexOf("\n// Interactions:");
  if (at >= 0) c = c.slice(0, at).replace(/\n*$/, "\n");
  return c;
};
let n = 0, left = 0;
for (const sys of readdirSync(join(WEB, "public/library-code"))) {
  for (const f of readdirSync(join(WEB, "public/library-code", sys)).filter((x) => x.endsWith(".txt"))) {
    const p = join(WEB, "public/library-code", sys, f);
    const code = readFileSync(p, "utf8");
    if (!code.includes("function fuInteract(")) continue;
    const off = unInteract(code);
    if (/fuInteract|data-fu=|fuRef/.test(off)) { left++; console.log("still has layer:", f); continue; }
    n++;
    if (DRY) continue;
    writeFileSync(p, off);
    const o = join(OUT, sys, f.replace(/\.txt$/, ".tsx"));
    if (existsSync(o)) writeFileSync(o, off);
  }
}
console.log(JSON.stringify({ static: n, failed: left, dry: DRY }));
