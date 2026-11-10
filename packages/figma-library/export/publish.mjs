// Publishes QA-passed component code to the site (local build only; deploy is a separate, explicit step).
//   node publish.mjs [threshold=99]  -> apps/web/public/library-code/<sys>/<slug>.txt + apps/web/lib/figma-code.json
// Only items listed in data/<sys>/review.json as rejected are held back even if they pass the score.
import { readFile, writeFile, mkdir, copyFile, rm } from "node:fs/promises";
const TH = Number(process.argv[2] || 99);
const WEB = new URL("../../../apps/web/", import.meta.url).pathname;
const out = {};
let pass = 0, total = 0, held = 0;
// reviewed by eye and approved although the perceptual score is 98-99 (layout score >= 99)
const approved = new Set(JSON.parse(await readFile(new URL("./data/approved-extra.json", import.meta.url), "utf8").catch(() => "[]")));
await rm(WEB + "public/library-code", { recursive: true, force: true });
for (const sys of ["loopo", "auton", "mailpulse", "axon", "veriq", "vantage"]) {
  const qa = JSON.parse(await readFile(new URL(`./data/${sys}/qa.json`, import.meta.url), "utf8").catch(() => "[]"));
  const rejected = new Set(JSON.parse(await readFile(new URL(`./data/${sys}/review.json`, import.meta.url), "utf8").catch(() => "[]")));
  await mkdir(WEB + `public/library-code/${sys}`, { recursive: true });
  for (const r of qa) {
    total++;
    if (r.score === undefined || rejected.has(r.slug)) continue;
    if (r.score < TH && !approved.has(sys + ":" + r.id)) continue;
    // image fills are placeholders in generated code for now: hold those back (visual review found avatars rendering grey)
    const tree = await readFile(new URL(`./data/${sys}/${r.id}.json`, import.meta.url), "utf8");
    if (tree.includes('"k":"i"')) { held++; continue; }
    await copyFile(new URL(`./out/${sys}/${r.slug}.tsx`, import.meta.url), WEB + `public/library-code/${sys}/${r.slug}.txt`);
    out[r.slug] = { score: r.score, strict: r.strict };
    pass++;
  }
}
await writeFile(WEB + "lib/figma-code.json", JSON.stringify(out));
console.log(JSON.stringify({ threshold: TH, total, published: pass, heldForImages: held }));
