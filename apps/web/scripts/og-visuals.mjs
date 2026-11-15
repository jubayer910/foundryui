// Link-preview (Open Graph) visuals. Satori, which draws the OG images, cannot read WebP, so before each build
// this turns the library thumbnails (public/library/<system>/<id>.webp) into small flattened JPEGs in
// .og-cache/<system>/<id>.jpg (git-ignored). lib/og.tsx reads them while the OG images are prerendered.
import { readdir, stat, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const WEB = join(dirname(fileURLToPath(import.meta.url)), "..");
const sharp = createRequire(join(WEB, "package.json"))("sharp");
const SRC = join(WEB, "public/library");
const OUT = join(WEB, ".og-cache");

let made = 0, kept = 0, failed = 0;
const systems = await readdir(SRC).catch(() => []);
for (const sys of systems) {
  const files = (await readdir(join(SRC, sys)).catch(() => [])).filter((f) => f.endsWith(".webp"));
  await mkdir(join(OUT, sys), { recursive: true });
  for (const f of files) {
    const from = join(SRC, sys, f);
    const to = join(OUT, sys, f.replace(/\.webp$/, ".jpg"));
    const [a, b] = await Promise.all([stat(from), stat(to).catch(() => null)]);
    if (b && b.mtimeMs >= a.mtimeMs) { kept++; continue; }
    try {
      await sharp(from)
        .resize({ width: 960, height: 540, fit: "inside", withoutEnlargement: true })
        .flatten({ background: "#ffffff" })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(to);
      made++;
    } catch {
      failed++;
    }
  }
}
console.log(`og-visuals: ${made} made, ${kept} up to date, ${failed} failed`);
