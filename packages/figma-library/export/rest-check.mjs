// Interaction safety check: every interactive preview must look identical with and without its script.
// Renders public/library-preview/<sys>/<slug>.html twice (JavaScript off, then on), compares pixels.
//   node rest-check.mjs [limit]
import puppeteer from "puppeteer-core";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
const sharp = createRequire(new URL("../../../apps/web/package.json", import.meta.url))("sharp");
const PREVIEW = new URL("../../../apps/web/public/library-preview/", import.meta.url).pathname;
const limit = Number(process.argv[2] || 1e9);
const files = [];
for (const sys of readdirSync(PREVIEW)) for (const f of readdirSync(PREVIEW + sys)) if (f.endsWith(".html") && readFileSync(PREVIEW + sys + "/" + f, "utf8").includes("fuInteract(")) files.push(PREVIEW + sys + "/" + f);
const launch = () => puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--font-render-hinting=none"] });
const shot = async (browser, file, js) => {
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(js);
  await page.setViewport({ width: 1600, height: 1200, deviceScaleFactor: 1 });
  await page.goto("file://" + file, { waitUntil: "load", timeout: 20000 });
  const cap = (p, ms) => Promise.race([p, new Promise((_, no) => setTimeout(() => no(new Error("timeout")), ms))]);
  await cap(page.evaluate(() => document.fonts && document.fonts.ready.then(() => 1)), 5000).catch(() => {});
  await new Promise((r) => setTimeout(r, 400));
  try {
    const el = await page.$("#c");
    return await cap(el.screenshot(), 15000);
  } finally { await page.close().catch(() => {}); }
};
const bad = [];
let done = 0;
const compare = async (browser, f) => {
  const [a, b] = [await shot(browser, f, false), await shot(browser, f, true)];
  const A = await sharp(a).raw().toBuffer({ resolveWithObject: true }), B = await sharp(b).raw().toBuffer({ resolveWithObject: true });
  if (A.info.width !== B.info.width || A.info.height !== B.info.height) return -1;
  let diff = 0;
  for (let i = 0; i < A.data.length; i += A.info.channels) if (Math.abs(A.data[i] - B.data[i]) + Math.abs(A.data[i + 1] - B.data[i + 1]) + Math.abs(A.data[i + 2] - B.data[i + 2]) > 24) diff++;
  return diff;
};
// random sample (seeded by position) so every system is covered when a limit is given
const queue = limit < files.length ? files.map((f, i) => [f, (i * 2654435761) % 4294967296]).sort((a, b) => a[1] - b[1]).slice(0, limit).map((x) => x[0]) : files;
const worker = async () => {
  let browser = await launch();
  while (queue.length) {
    const f = queue.shift();
    try {
      let d = await compare(browser, f);
      if (d !== 0) d = await compare(browser, f); // a second look rules out fonts or pictures still loading
      if (d !== 0) bad.push([f.split("/library-preview/")[1], d]);
    } catch (e) { bad.push([f.split("/library-preview/")[1], "error " + String(e.message).slice(0, 60)]); }
    if (++done % 100 === 0) { console.log("checked", done, "bad", bad.length); writeFileSync(new URL("./data/rest-check.json", import.meta.url), JSON.stringify(bad, null, 1)); }
  }
  await browser.close().catch(() => {});
};
await worker();
writeFileSync(new URL("./data/rest-check.json", import.meta.url), JSON.stringify(bad, null, 1));
console.log(JSON.stringify({ checked: done, bad: bad.length, sample: bad.slice(0, 10) }));
