// Components with picture fills (avatars, logos, photos) were held back because generated code showed grey boxes.
// Their pictures were exported with serialize (data/<sys>/img/<hash>.bin) and QA already rendered them for real.
// This writes copy-ready TSX for them with the pictures hosted on the site:
//   apps/web/public/library-img/<hash>.<ext>  ->  https://ingotui.com/library-img/<hash>.<ext>
// Only items whose every picture was exported qualify; publish.mjs then lets them through (see imagesReady there).
//   node publish-images.mjs
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { toTSX, setAbsStroke, setImageUrl } from "./convert.mjs";

const HERE = new URL("./", import.meta.url).pathname;
const WEB = new URL("../../../apps/web/", import.meta.url).pathname;
const SITE = "https://ingotui.com";
const ABS = new Set(JSON.parse(readFileSync(HERE + "data/abs-stroke.json", "utf8")));
const items = JSON.parse(readFileSync(WEB + "lib/figma-items.json", "utf8"));
mkdirSync(WEB + "public/library-img", { recursive: true });

const ext = (b) => (b[0] === 0x89 ? "png" : b[0] === 0xff ? "jpg" : b[0] === 0x47 ? "gif" : "webp");
const ready = [];
let skipped = 0;
for (const sys of ["loopo", "auton", "mailpulse", "axon", "veriq", "vantage", "montra", "spendix", "abotix"]) {
  const qa = JSON.parse(readFileSync(HERE + `data/${sys}/qa.json`, "utf8"));
  for (const r of qa) {
    if (r.score === undefined) continue;
    const file = HERE + `data/${sys}/${r.id}.json`;
    if (!existsSync(file)) continue;
    const raw = readFileSync(file, "utf8");
    if (!raw.includes('"k":"i"')) continue;
    const tree = JSON.parse(raw);
    // every image paint must carry a hash whose bytes were exported
    const paints = [];
    (function walk(n) {
      for (const p of [...(n.f || []), ...(n.s || [])]) if (p && p.k === "i") paints.push(p);
      for (const c of n.k || []) walk(c);
    })(tree);
    if (!paints.length || paints.some((p) => !p.h || !existsSync(HERE + `data/${sys}/img/${p.h}.bin`))) { skipped++; continue; }
    const urls = {};
    for (const p of paints) {
      if (urls[p.h]) continue;
      const bin = readFileSync(HERE + `data/${sys}/img/${p.h}.bin`);
      const name = `${p.h}.${ext(bin)}`;
      copyFileSync(HERE + `data/${sys}/img/${p.h}.bin`, WEB + "public/library-img/" + name);
      urls[p.h] = `'${SITE}/library-img/${name}'`;
    }
    const m = items.find((i) => i.system === sys && i.id.replace(/[:;]/g, "-") === r.id);
    if (!m) continue;
    setImageUrl((h) => urls[h] || null);
    setAbsStroke(ABS.has(sys + ":" + r.id));
    writeFileSync(HERE + `out/${sys}/${r.slug}.tsx`, toTSX(tree, {}, m));
    ready.push(sys + ":" + r.id);
  }
}
writeFileSync(HERE + "data/images-ready.json", JSON.stringify(ready));
console.log(JSON.stringify({ ready: ready.length, skippedMissingPictures: skipped }));
