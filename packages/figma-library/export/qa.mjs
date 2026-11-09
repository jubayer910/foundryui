// Visual QA: convert each exported tree, render it in headless Chrome, and diff against the Figma 1x PNG.
// Usage: node qa.mjs <system> [limit]   -> data/<system>/qa.json, out/<system>/<id>.tsx, data/<system>/<id>.diff.png
import { readFile, writeFile, readdir, mkdir } from "node:fs/promises";
import { join } from "node:path";
import puppeteer from "puppeteer-core";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import { build, toHTML, toTSX } from "./convert.mjs";
import { createRequire } from "node:module";
const sharp = createRequire(new URL("../../../apps/web/package.json", import.meta.url))("sharp");

const sys = process.argv[2];
const limit = Number(process.argv[3] || 1e9);
const only = process.argv[4];
const DATA = new URL("./data/" + sys + "/", import.meta.url).pathname;
const OUT = new URL("./out/" + sys + "/", import.meta.url).pathname;
await mkdir(OUT, { recursive: true });
const meta = JSON.parse(await readFile(new URL("../../../apps/web/lib/figma-items.json", import.meta.url), "utf8")).filter((m) => m.system === sys);
const byId = new Map(meta.map((m) => [m.id.replace(/[:;]/g, "-"), m]));
const ids = (await readdir(DATA)).filter((f) => f.endsWith(".json") && f !== "qa.json").map((f) => f.slice(0, -5)).filter((id) => !only || id === only).slice(0, limit);

const FONTS = { Geist: "Geist:wght@300..800", "Geist Mono": "Geist+Mono:wght@400..600", Inter: "Inter:wght@300..800", "Inter Display": "Inter:wght@300..800", "DM Sans": "DM+Sans:wght@300..800", Manrope: "Manrope:wght@300..800", "Plus Jakarta Sans": "Plus+Jakarta+Sans:wght@300..800", Poppins: "Poppins:wght@300;400;500;600;700", "IBM Plex Mono": "IBM+Plex+Mono:wght@400;500;600", "JetBrains Mono": "JetBrains+Mono:wght@400..700", "Space Grotesk": "Space+Grotesk:wght@300..700", Outfit: "Outfit:wght@300..800" };
const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--font-render-hinting=none"] });
const page = await browser.newPage();
const results = [];
for (const id of ids) {
  const m = byId.get(id);
  if (!m) continue;
  try {
    const tree = JSON.parse(await readFile(join(DATA, id + ".json"), "utf8"));
    const fonts = [...new Set((JSON.stringify(tree).match(/"ff":"[^"]+"/g) || []).map((s) => s.slice(6, -1)))];
    const links = fonts.filter((f) => FONTS[f]).map((f) => `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${FONTS[f]}&display=block">`).join("");
    const html = `<!doctype html><html><head><meta charset="utf-8">${links}<style>*{box-sizing:border-box}html,body{margin:0;background:#fff;-webkit-font-smoothing:antialiased}#root{display:inline-block}</style></head><body><div id="root" style="padding:${(tree.rb || [0, 0])[1]}px 0 0 ${(tree.rb || [0, 0])[0]}px">${toHTML(build(tree))}</div></body></html>`;
    const ref = PNG.sync.read(await readFile(join(DATA, id + ".png")));
    await page.setViewport({ width: Math.max(ref.width, 50), height: Math.max(ref.height, 50), deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: "load", timeout: 20000 });
    // wait until every family is really loaded (a fallback font would fail the comparison for the wrong reason)
    await page.evaluate(async (fams) => {
      const t0 = Date.now();
      while (Date.now() - t0 < 10000) {
        await document.fonts.ready;
        if (fams.every((f) => document.fonts.check(`16px "${f}"`))) return;
        await new Promise((r) => setTimeout(r, 150));
      }
    }, fonts.filter((f) => FONTS[f]));
    const shot = PNG.sync.read(await page.screenshot({ clip: { x: 0, y: 0, width: ref.width, height: ref.height }, omitBackground: false }));
    // icons are Foundry Icons by design (not the source drawings): leave their boxes out of the score
    await writeFile(join(DATA, id + ".render.png"), PNG.sync.write(shot));
    const iconRects = await page.$$eval("[data-fu-icon]", (els) => els.map((e) => { const r = e.getBoundingClientRect(); return [r.x, r.y, r.width, r.height]; }));
    for (let i = 0; i < ref.data.length; i += 4) { const a = ref.data[i + 3] / 255; for (let c = 0; c < 3; c++) ref.data[i + c] = Math.round(ref.data[i + c] * a + 255 * (1 - a)); ref.data[i + 3] = 255; }
    // icons are now the same Foundry Icons in Figma and code, so they count; MASK=1 restores the old behaviour
    if (process.env.MASK === "1") for (const [x, y, w, h] of iconRects) for (let yy = Math.max(0, Math.floor(y) - 1); yy < Math.min(ref.height, Math.ceil(y + h) + 1); yy++) for (let xx = Math.max(0, Math.floor(x) - 1); xx < Math.min(ref.width, Math.ceil(x + w) + 1); xx++) { const i = (yy * ref.width + xx) * 4; for (const img of [ref, shot]) { img.data[i] = img.data[i + 1] = img.data[i + 2] = 255; } }
    const diff = new PNG({ width: ref.width, height: ref.height });
    const bad = pixelmatch(ref.data, shot.data, diff.data, ref.width, ref.height, { threshold: 0.2, includeAA: false });
    let ink = 0;
    for (let i = 0; i < ref.data.length; i += 4) { const a = ref.data[i] + ref.data[i + 1] + ref.data[i + 2], b = shot.data[i] + shot.data[i + 1] + shot.data[i + 2]; if (a < 750 || b < 750) ink++; }
    const strict = Math.round((1 - bad / Math.max(ink, 1)) * 1000) / 10;
    // perceptual score: half size + slight blur on both, so 1px text shifts don't count as errors
    const soft = async (png) => {
      const { data, info } = await sharp(PNG.sync.write(png)).resize(Math.max(1, Math.round(png.width / 2)), Math.max(1, Math.round(png.height / 2))).blur(0.8).removeAlpha().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
      return { data, w: info.width, h: info.height };
    };
    const A = await soft(ref), B = await soft(shot);
    const badSoft = pixelmatch(A.data, B.data, null, A.w, A.h, { threshold: 0.12, includeAA: false });
    let inkSoft = 0;
    for (let i = 0; i < A.data.length; i += 4) { if (A.data[i] + A.data[i + 1] + A.data[i + 2] < 750 || B.data[i] + B.data[i + 1] + B.data[i + 2] < 750) inkSoft++; }
    const score = Math.round((1 - badSoft / Math.max(inkSoft, 1)) * 1000) / 10;
    await writeFile(join(DATA, id + ".diff.png"), PNG.sync.write(diff));
    await writeFile(join(OUT, m.slug + ".tsx"), toTSX(tree, {}, m));
    results.push({ id, slug: m.slug, name: m.name, category: m.category, w: ref.width, h: ref.height, score, strict, icons: iconRects.length });
  } catch (e) {
    results.push({ id, slug: m.slug, name: m.name, error: String(e).slice(0, 160) });
  }
}
await browser.close();
const prev = JSON.parse(await readFile(join(DATA, "qa.json"), "utf8").catch(() => "[]")).filter((r) => !results.some((x) => x.id === r.id));
await writeFile(join(DATA, "qa.json"), JSON.stringify([...prev, ...results], null, 1));
const ok = results.filter((r) => r.score !== undefined);
const avg = ok.reduce((a, r) => a + r.score, 0) / Math.max(ok.length, 1);
console.log(JSON.stringify({ sys, n: results.length, avg: Math.round(avg * 10) / 10, pass90: ok.filter((r) => r.score >= 90).length, pass80: ok.filter((r) => r.score >= 80).length, errors: results.filter((r) => r.error).length }));
for (const r of results.slice(0, 40)) console.log((r.score ?? "ERR") + "\t" + (r.strict ?? "") + "\t" + r.name + (r.error ? "\t" + r.error : ""));
