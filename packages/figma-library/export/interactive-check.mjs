// Rest check for one hand-written interactive component: it must look exactly like the QA'd static original.
//   node interactive-check.mjs <sys>/<slug>
// 1. renders the generated original (out/) as the baseline, JS off
// 2. puts interactive/<sys>/<slug>.tsx in place, renders its preview with React running
// 3. compares: no pixel may differ by more than 40 (sum of RGB), i.e. only anti-aliasing noise is allowed
import { copyFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { createRequire } from "node:module";
const id = process.argv[2];
const HERE = new URL(".", import.meta.url).pathname;
const WEB = HERE + "../../../apps/web/";
const sharp = createRequire(WEB + "package.json")("sharp");
const src = HERE + "interactive/" + id + ".tsx";
if (!existsSync(src)) throw new Error("no " + src);
const tmp = "/tmp/ic-" + id.replace("/", "_");
copyFileSync(HERE + "out/" + id + ".tsx", WEB + "public/library-code/" + id + ".txt");
execSync("node scripts/library-finalize.mjs", { cwd: WEB });
execSync(`node shot.mjs ${id} ${tmp}-a.png 0`, { cwd: HERE, stdio: "inherit" });
copyFileSync(src, WEB + "public/library-code/" + id + ".txt");
execSync("node scripts/library-finalize.mjs", { cwd: WEB });
execSync(`node shot.mjs ${id} ${tmp}-b.png 1`, { cwd: HERE, stdio: "inherit" });
const A = await sharp(tmp + "-a.png").raw().toBuffer({ resolveWithObject: true });
const B = await sharp(tmp + "-b.png").raw().toBuffer({ resolveWithObject: true });
if (A.info.width !== B.info.width || A.info.height !== B.info.height) { console.log("FAIL size", A.info.width, A.info.height, B.info.width, B.info.height); process.exit(1); }
let noise = 0, bad = 0, max = 0;
for (let i = 0; i < A.data.length; i += A.info.channels) {
  const x = Math.abs(A.data[i] - B.data[i]) + Math.abs(A.data[i + 1] - B.data[i + 1]) + Math.abs(A.data[i + 2] - B.data[i + 2]);
  if (x > 40) bad++; else if (x > 0) noise++;
  max = Math.max(max, x);
}
console.log(JSON.stringify({ id, rest: bad === 0 ? "PASS" : "FAIL", differingPixels: bad, antialiasNoise: noise, max }));
process.exit(bad === 0 ? 0 : 1);
