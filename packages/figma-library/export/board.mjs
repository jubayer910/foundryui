// Side-by-side QA board: Figma | code render | diff, for the given ids (or the worst N).
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
const sharp = createRequire(new URL("../../../apps/web/package.json", import.meta.url))("sharp");
const [sys, out, ...ids] = process.argv.slice(2);
const dir = new URL("./data/" + sys + "/", import.meta.url).pathname;
const rows = [];
let y = 0, W = 0;
for (const id of ids) {
  const parts = [id + ".png", id + ".render.png", id + ".diff.png"];
  const metas = await Promise.all(parts.map((p) => sharp(dir + p).metadata()));
  const h = metas[0].height, w = metas[0].width;
  parts.forEach((p, i) => rows.push({ input: dir + p, left: i * (w + 24), top: y }));
  W = Math.max(W, 3 * (w + 24)); y += h + 24;
}
await sharp({ create: { width: W, height: y, channels: 3, background: "#d4d4d4" } }).composite(rows).png().toFile(out);
console.log(out, W, y);
