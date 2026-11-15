#!/usr/bin/env node
/**
 * Runs between `opennextjs-cloudflare build` and `deploy`: keeps the raw generated-code folder out of the
 * public static assets. Code is served only from the token paths written by scripts/code-gate.mjs.
 */
import { existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ASSETS = join(dirname(fileURLToPath(import.meta.url)), "../.open-next/assets");
if (!existsSync(ASSETS)) {
  console.error("assets-ignore: .open-next/assets not found; run the OpenNext build first");
  process.exit(1);
}
writeFileSync(join(ASSETS, ".assetsignore"), ["library-code", "library-code/**"].join("\n") + "\n");
console.log("assets-ignore: library-code excluded from upload");
