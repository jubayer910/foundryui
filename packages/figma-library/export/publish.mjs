// Publishes QA-passed component code to the site (local build only; deploy is a separate, explicit step).
//   node publish.mjs [threshold=99]  -> apps/web/public/library-code/<sys>/<slug>.txt + apps/web/lib/figma-code.json
// Only items listed in data/<sys>/review.json as rejected are held back even if they pass the score.
import { readFile, writeFile, mkdir, copyFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
const TH = Number(process.argv[2] || 99);
const WEB = new URL("../../../apps/web/", import.meta.url).pathname;
const out = {};
let pass = 0, total = 0, held = 0;
// reviewed by eye and approved although the perceptual score is 98-99 (layout score >= 99)
// components with picture fills whose code points at hosted copies of every picture (publish-images.mjs)
const imagesReady = new Set(JSON.parse(await readFile(new URL("./data/images-ready.json", import.meta.url), "utf8").catch(() => "[]")));
const approved = new Set(JSON.parse(await readFile(new URL("./data/approved-extra.json", import.meta.url), "utf8").catch(() => "[]")));
// only the published code files are rebuilt; Figma clipboard payloads (*.figma.html, captured from Figma desktop)
// and Figma build steps live in the same folders and must survive a republish
import { readdir } from "node:fs/promises";
for (const sys of await readdir(WEB + "public/library-code").catch(() => [])) {
  for (const f of await readdir(WEB + "public/library-code/" + sys).catch(() => [])) if (f.endsWith(".txt")) await rm(WEB + "public/library-code/" + sys + "/" + f, { force: true });
}
for (const sys of ["loopo", "auton", "mailpulse", "axon", "veriq", "vantage", "montra", "spendix", "abotix"]) {
  const qa = JSON.parse(await readFile(new URL(`./data/${sys}/qa.json`, import.meta.url), "utf8").catch(() => "[]"));
  const rejected = new Set(JSON.parse(await readFile(new URL(`./data/${sys}/review.json`, import.meta.url), "utf8").catch(() => "[]")));
  await mkdir(WEB + `public/library-code/${sys}`, { recursive: true });
  for (const r of qa) {
    total++;
    if (r.score === undefined || rejected.has(r.slug)) continue;
    if (r.score < TH && !approved.has(sys + ":" + r.id)) continue;
    // image fills are placeholders in generated code for now: hold those back (visual review found avatars rendering grey)
    const tree = await readFile(new URL(`./data/${sys}/${r.id}.json`, import.meta.url), "utf8");
    // ...unless publish-images.mjs rewrote the code with every picture hosted on the site
    if (tree.includes('"k":"i"') && !imagesReady.has(sys + ":" + r.id)) { held++; continue; }
    // a hand-written interactive version (interactive/<sys>/<slug>.tsx, checked to look the same at rest) wins over the generated code
    const hand = new URL(`./interactive/${sys}/${r.slug}.tsx`, import.meta.url);
    await copyFile(existsSync(hand) ? hand : new URL(`./out/${sys}/${r.slug}.tsx`, import.meta.url), WEB + `public/library-code/${sys}/${r.slug}.txt`);
    out[r.slug] = { score: r.score, strict: r.strict };
    pass++;
  }
}
await writeFile(WEB + "lib/figma-code.json", JSON.stringify(out));
console.log(JSON.stringify({ threshold: TH, total, published: pass, heldForImages: held }));
