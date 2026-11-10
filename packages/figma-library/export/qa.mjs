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
const onlySet = process.env.ONLY_FILE ? new Set(JSON.parse(await readFile(process.env.ONLY_FILE, "utf8")).filter((k) => k.startsWith(sys + ":")).map((k) => k.split(":")[1])) : null;
const ids = (await readdir(DATA)).filter((f) => /^\d+-\d+\.json$/.test(f)).map((f) => f.slice(0, -5)).filter((id) => (!only || id === only) && (!onlySet || onlySet.has(id))).slice(0, limit);

const FONTS = { Geist: "Geist:wght@300..800", "Geist Mono": "Geist+Mono:wght@400..600", Inter: "Inter:wght@300..800", "Inter Display": "Inter:wght@300..800", "DM Sans": "DM+Sans:wght@300..800", Manrope: "Manrope:wght@300..800", "Plus Jakarta Sans": "Plus+Jakarta+Sans:wght@300..800", Poppins: "Poppins:wght@300;400;500;600;700", "IBM Plex Mono": "IBM+Plex+Mono:wght@400;500;600", "JetBrains Mono": "JetBrains+Mono:wght@400..700", "Space Grotesk": "Space+Grotesk:wght@300..700", Outfit: "Outfit:wght@300..800" };
const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--font-render-hinting=none"] });
const page = await browser.newPage();
const results = [];
let PAD = 40, EXP = [40, 40];
// Figma PNG exports include drop-shadow bleed: expect the box at (blur + spread - offset) inside the image
function expectedBleed(tree) {
  let l = 0, t = 0;
  for (const e of tree.fx || []) if (e[0] === "DROP_SHADOW") { const [, ox, oy, blur, spread] = e; l = Math.max(l, blur + spread - ox); t = Math.max(t, blur + spread - oy); }
  return [Math.max(0, Math.round(l)), Math.max(0, Math.round(t))];
}
// best whole-component offset between the Figma PNG (whose bounds include glyph and shadow bleed) and the render
// mean SSIM over 8x8 blocks on luminance (structure similarity; tolerant of anti-aliasing, strict on layout)
function ssim(a, b) {
  const W = a.width, H = a.height, L = (d, i) => 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
  const C1 = (0.01 * 255) ** 2, C2 = (0.03 * 255) ** 2;
  let sum = 0, n = 0;
  for (let by = 0; by + 8 <= H; by += 8) for (let bx = 0; bx + 8 <= W; bx += 8) {
    let ma = 0, mb = 0;
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { const i = ((by + y) * W + bx + x) * 4; ma += L(a.data, i); mb += L(b.data, i); }
    ma /= 64; mb /= 64;
    let va = 0, vb = 0, cov = 0;
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { const i = ((by + y) * W + bx + x) * 4; const da = L(a.data, i) - ma, db = L(b.data, i) - mb; va += da * da; vb += db * db; cov += da * db; }
    va /= 63; vb /= 63; cov /= 63;
    if (va < 1 && vb < 1 && Math.abs(ma - mb) < 1) continue; // flat identical blocks say nothing
    sum += ((2 * ma * mb + C1) * (2 * cov + C2)) / ((ma * ma + mb * mb + C1) * (va + vb + C2)); n++;
  }
  return n ? Math.round((sum / n) * 10000) / 10000 : 1;
}
function align(ref, big) {
  // align on edges (text, borders, marks); soft shadows have almost none, so they can't pull the result
  const edges = (img) => {
    const { width: w, height: h, data: d } = img;
    const g = new Float32Array(w * h);
    for (let i = 0; i < w * h; i++) g[i] = d[i * 4] + d[i * 4 + 1] + d[i * 4 + 2];
    const e = new Uint8Array(w * h);
    for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) { const i = y * w + x; const m = Math.abs(g[i + 1] - g[i - 1]) + Math.abs(g[i + w] - g[i - w]); e[i] = m > 120 ? 1 : 0; }
    return e;
  };
  const half = (img) => {
    const w = Math.floor(img.width / 2), h = Math.floor(img.height / 2), d = Buffer.alloc(w * h * 4);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) for (let c = 0; c < 3; c++) {
      const i = (2 * y * img.width + 2 * x) * 4 + c;
      d[(y * w + x) * 4 + c] = (img.data[i] + img.data[i + 4] + img.data[i + img.width * 4] + img.data[i + img.width * 4 + 4]) >> 2;
    }
    return { width: w, height: h, data: d };
  };
  const cmp = (eA, wA, hA, eBig, wBig, ox, oy, step, limit) => {
    let err = 0;
    for (let y = 0; y < hA; y += step) { for (let x = 0; x < wA; x += step) err += eA[y * wA + x] !== eBig[(y + oy) * wBig + x + ox] ? 1 : 0; if (err > limit) return err; }
    return err;
  };
  // 1) every offset at half resolution
  const rH = half(ref), bH = half(big), eRH = edges(rH), eBH = edges(bH), P2 = PAD;
  let best = [PAD, PAD], bestErr = Infinity;
  const W2 = 8; // +-16px at full size around the expected place
  const ex = Math.round(EXP[0] / 2), ey = Math.round(EXP[1] / 2);
  for (let oy = Math.max(0, ey - W2); oy <= Math.min(P2, ey + W2); oy++) for (let ox = Math.max(0, ex - W2); ox <= Math.min(P2, ex + W2); ox++) {
    if (oy + rH.height > bH.height || ox + rH.width > bH.width) continue;
    const e = cmp(eRH, rH.width, rH.height, eBH, bH.width, ox, oy, 1, bestErr);
    if (e < bestErr) { bestErr = e; best = [ox * 2, oy * 2]; }
  }
  // 2) refine at full resolution
  const eR = edges(ref), eB = edges(big);
  const [cx, cy] = best; bestErr = Infinity;
  for (let oy = Math.max(0, cy - 2); oy <= Math.min(2 * PAD, cy + 2); oy++) for (let ox = Math.max(0, cx - 2); ox <= Math.min(2 * PAD, cx + 2); ox++) {
    const e = cmp(eR, ref.width, ref.height, eB, big.width, ox, oy, 1, bestErr);
    if (e < bestErr) { bestErr = e; best = [ox, oy]; }
  }
  return best;
}
for (const id of ids) {
  const m = byId.get(id);
  if (!m) continue;
  try {
    const tree = JSON.parse(await readFile(join(DATA, id + ".json"), "utf8"));
    const fonts = [...new Set((JSON.stringify(tree).match(/"ff":"[^"]+"/g) || []).map((s) => s.slice(6, -1)))];
    const links = fonts.filter((f) => FONTS[f]).map((f) => `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${FONTS[f]}&display=block">`).join("");
    const bl = expectedBleed(tree);
    PAD = Math.max(bl[0], bl[1]) + 16;
    EXP = [PAD - bl[0], PAD - bl[1]];
    const html = `<!doctype html><html><head><meta charset="utf-8">${links}<style>*{box-sizing:border-box}html,body{margin:0;background:#fff;-webkit-font-smoothing:antialiased}#root{display:inline-block}</style></head><body><div id="root" style="padding:${PAD}px">${toHTML(build(tree))}</div></body></html>`;
    const ref = PNG.sync.read(await readFile(join(DATA, id + ".png")));
    await page.setViewport({ width: Math.max(ref.width + 2 * PAD, 50), height: Math.max(ref.height + 2 * PAD, 50), deviceScaleFactor: 1 });
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
    const big = PNG.sync.read(await page.screenshot({ clip: { x: 0, y: 0, width: ref.width + 2 * PAD, height: ref.height + 2 * PAD }, omitBackground: false }));
    // flatten the Figma PNG first so alignment compares like with like
    for (let i = 0; i < ref.data.length; i += 4) { const a = ref.data[i + 3] / 255; for (let c = 0; c < 3; c++) ref.data[i + c] = Math.round(ref.data[i + c] * a + 255 * (1 - a)); ref.data[i + 3] = 255; }
    const [ox, oy] = align(ref, big);
    const shot = new PNG({ width: ref.width, height: ref.height });
    PNG.bitblt(big, shot, ox, oy, ref.width, ref.height, 0, 0);
    // icons are Foundry Icons by design (not the source drawings): leave their boxes out of the score
    await writeFile(join(DATA, id + ".render.png"), PNG.sync.write(shot));
    const iconRects = await page.$$eval("[data-fu-icon]", (els) => els.map((e) => { const r = e.getBoundingClientRect(); return [r.x, r.y, r.width, r.height]; }));
    for (const r of iconRects) { r[0] -= ox; r[1] -= oy; }
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
    const ss = ssim(ref, shot);
    // layout score: one-third size, light blur: anti-aliasing vanishes, wrong position, size or colour does not
    const third = async (png) => {
      const { data, info } = await sharp(PNG.sync.write(png)).resize(Math.max(1, Math.round(png.width / 3)), Math.max(1, Math.round(png.height / 3))).blur(0.6).removeAlpha().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
      return { data, w: info.width, h: info.height };
    };
    const A3 = await third(ref), B3 = await third(shot);
    const bad3 = pixelmatch(A3.data, B3.data, null, A3.w, A3.h, { threshold: 0.1, includeAA: false });
    let ink3 = 0;
    for (let i = 0; i < A3.data.length; i += 4) if (A3.data[i] + A3.data[i + 1] + A3.data[i + 2] < 750 || B3.data[i] + B3.data[i + 1] + B3.data[i + 2] < 750) ink3++;
    const layout = Math.round((1 - bad3 / Math.max(ink3, 1)) * 1000) / 10;
    await writeFile(join(DATA, id + ".diff.png"), PNG.sync.write(diff));
    await writeFile(join(OUT, m.slug + ".tsx"), toTSX(tree, {}, m));
    results.push({ id, slug: m.slug, name: m.name, category: m.category, w: ref.width, h: ref.height, score, strict, layout, icons: iconRects.length, offset: [ox - PAD, oy - PAD] });
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
for (const r of results.slice(0, 40)) console.log((r.score ?? "ERR") + "\t" + (r.strict ?? "") + "\t" + (r.layout ?? "") + "\t" + r.name + (r.error ? "\t" + r.error : ""));
process.exit(0);
