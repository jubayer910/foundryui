// Review sheet: numbered tiles, each = Figma (left) | code render (right), 4 per row, 6 rows.
// node sheet.mjs <out.png> <sys:id> ...   prints the index -> slug list
import { createRequire } from "node:module";
const sharp = createRequire(new URL("../../../apps/web/package.json", import.meta.url))("sharp");
const [out, ...items] = process.argv.slice(2);
const TW = 230, TH = 150, COLS = 4, GAP = 10, LAB = 18;
const cellW = TW * 2 + 6, cellH = TH + LAB;
const rows = Math.ceil(items.length / COLS);
const comps = [];
let i = 0;
for (const it of items) {
  const [sys, id] = it.split(":");
  const dir = new URL("./data/" + sys + "/", import.meta.url).pathname;
  const x = (i % COLS) * (cellW + GAP), y = Math.floor(i / COLS) * (cellH + GAP);
  for (const [k, f] of [[0, id + ".png"], [1, id + ".render.png"]]) {
    const buf = await sharp(dir + f).flatten({ background: "#ffffff" }).resize(TW, TH, { fit: "contain", background: "#ffffff" }).png().toBuffer();
    comps.push({ input: buf, left: x + k * (TW + 6), top: y + LAB });
  }
  const svg = `<svg width="${cellW}" height="${LAB}"><rect width="100%" height="100%" fill="#222"/><text x="4" y="13" font-size="12" font-family="Helvetica" fill="#fff">${i + 1}  ${sys}</text></svg>`;
  comps.push({ input: Buffer.from(svg), left: x, top: y });
  i++;
}
await sharp({ create: { width: COLS * (cellW + GAP), height: rows * (cellH + GAP), channels: 3, background: "#bbbbbb" } }).composite(comps).png().toFile(out);
console.log(out);
