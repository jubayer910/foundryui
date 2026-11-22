#!/usr/bin/env node
/**
 * Runs between `opennextjs-cloudflare build` and `deploy`: keeps the stylesheets and fonts of every earlier
 * deploy online. Next gives each build's CSS a new hashed name, and Cloudflare serves only the files of the
 * current upload, so a Microsoft Clarity recording or heatmap made before a deploy would ask for a CSS file
 * that is gone and replay as bare HTML. Each build's CSS and fonts are saved to .static-archive/ (git-ignored),
 * and every archived file missing from this upload is copied back in. The files are hashed, so old and new
 * never clash, and they are small (about 70 KB of CSS per build).
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WEB = join(dirname(fileURLToPath(import.meta.url)), "..");
const STATIC = join(WEB, ".open-next/assets/_next/static");
const ARCHIVE = join(WEB, ".static-archive");
if (!existsSync(STATIC)) {
  console.error("keep-old-css: .open-next/assets/_next/static not found; run the OpenNext build first");
  process.exit(1);
}

let saved = 0, restored = 0;
for (const [dir, keep] of [["chunks", (f) => f.endsWith(".css")], ["media", () => true]]) {
  const live = join(STATIC, dir), arch = join(ARCHIVE, dir);
  mkdirSync(arch, { recursive: true });
  const here = new Set(existsSync(live) ? readdirSync(live) : []);
  for (const f of here) if (keep(f) && !existsSync(join(arch, f))) { copyFileSync(join(live, f), join(arch, f)); saved++; }
  for (const f of readdirSync(arch)) if (!here.has(f)) { mkdirSync(live, { recursive: true }); copyFileSync(join(arch, f), join(live, f)); restored++; }
}
console.log(`keep-old-css: ${saved} new files archived, ${restored} earlier files kept online`);
