// Rewrites out/<sys>/<slug>.tsx from the saved Figma trees with the current converter, without re-rendering QA.
// Use after a converter change that cannot alter the look at rest (e.g. interaction roles).
//   node regen.mjs [systems=all] [category filter regex]
// Pictures point at their hosted copies (public/library-img), exactly as publish-images.mjs writes them.
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { toTSX, setAbsStroke, setImageUrl, assignRoles } from "./convert.mjs";

const HERE = new URL("./", import.meta.url).pathname;
const WEB = new URL("../../../apps/web/", import.meta.url).pathname;
const SITE = "https://ingotui.com";
const ALL = ["loopo", "auton", "mailpulse", "axon", "veriq", "vantage", "montra", "spendix", "abotix"];
const systems = process.argv[2] && process.argv[2] !== "all" ? process.argv[2].split(",") : ALL;
const cat = process.argv[3] ? new RegExp(process.argv[3], "i") : null;
const ABS = new Set(JSON.parse(readFileSync(HERE + "data/abs-stroke.json", "utf8")));
const items = JSON.parse(readFileSync(WEB + "lib/figma-items.json", "utf8"));
const showcase = JSON.parse(readFileSync(HERE + "showcase.json", "utf8"));
const hosted = new Map(readdirSync(WEB + "public/library-img").map((f) => [f.split(".")[0], f]));
setImageUrl((h) => (hosted.has(h) ? `'${SITE}/library-img/${hosted.get(h)}'` : null));

let written = 0, interactive = 0;
const byRole = {};
for (const sys of systems) {
  const qa = JSON.parse(readFileSync(HERE + `data/${sys}/qa.json`, "utf8"));
  for (const r of qa) {
    if (r.score === undefined) continue;
    const m = items.find((i) => i.system === sys && i.id.replace(/[:;]/g, "-") === r.id) || showcase.find((i) => i.system === sys && i.id.replace(/[:;]/g, "-") === r.id);
    if (!m || (cat && !cat.test(m.category))) continue;
    const file = HERE + `data/${sys}/${r.id}.json`;
    if (!existsSync(file)) continue;
    const tree = JSON.parse(readFileSync(file, "utf8"));
    setAbsStroke(ABS.has(sys + ":" + r.id));
    const code = toTSX(tree, {}, m);
    if (code.includes("function fuInteract(")) {
      interactive++;
      for (const x of code.matchAll(/data-fu="(\w+)"/g)) byRole[x[1]] = (byRole[x[1]] || 0) + 1;
    }
    writeFileSync(HERE + `out/${sys}/${r.slug}.tsx`, code);
    written++;
  }
}
console.log(JSON.stringify({ written, interactive, byRole }));
