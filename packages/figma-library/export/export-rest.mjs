// Exports every component on each system file's "Foundry Library" page:
//   thumbnails -> apps/web/public/library/<system>/<id>.webp (git-ignored, deployed as static assets)
//   metadata   -> apps/web/lib/figma-items.json
// Needs FIGMA_TOKEN (read-only file scope) in ~/Documents/FoundryUI/.env.local. Run from apps/web so sharp resolves:
//   cd apps/web && node ../../packages/figma-library/export/export-rest.mjs [system...]
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { join } from "node:path";
import { createRequire } from "node:module";

const ROOT = new URL("../../../", import.meta.url).pathname;
const WEB = join(ROOT, "apps/web");
const sharp = createRequire(join(WEB, "package.json"))("sharp");
const env = await readFile(join(ROOT, ".env.local"), "utf8").catch(() => "");
const TOKEN = process.env.FIGMA_TOKEN || (env.match(/^FIGMA_TOKEN=(.+)$/m) || [])[1]?.trim();
if (!TOKEN) throw new Error("FIGMA_TOKEN missing in .env.local");

const FILES = { loopo: "lBBGdEStjKRYnwrTdJs1T3", auton: "Q7K7Ix4KwJryX5XvLhaCZg", mailpulse: "HO8FIKAQjZlHdfM65hYYis", axon: "s8dzTyDpYzwDoDkqPekxXk", veriq: "PB3XpCt9pnD9EiJfqXAiN3", vantage: "nG9LOj0Kw0l4iD7sSXFmc9" };
const only = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(path, tries = 5) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch("https://api.figma.com/v1" + path, { headers: { "X-Figma-Token": TOKEN } });
    if (r.ok) return r.json();
    if (r.status === 429 || r.status >= 500) { await sleep(Number(r.headers.get("retry-after") || 0) * 1000 || 4000 * (i + 1)); continue; }
    throw new Error(r.status + " " + path + " " + (await r.text()).slice(0, 200));
  }
  throw new Error("gave up " + path);
}
const exists = (p) => access(p).then(() => true, () => false);
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);

const outFile = join(WEB, "lib/figma-items.json");
const all = (await exists(outFile)) ? JSON.parse(await readFile(outFile, "utf8")) : [];
for (const [system, key] of Object.entries(FILES)) {
  if (only.length && !only.includes(system)) continue;
  const file = await api(`/files/${key}?depth=1`);
  const page = file.document.children.find((p) => p.name === "Foundry Library");
  if (!page) { console.log(system, "no Foundry Library page"); continue; }
  const nodes = await api(`/files/${key}/nodes?ids=${page.id}&depth=2`);
  const doc = nodes.nodes[page.id];
  const meta = doc.components || {};
  const items = [];
  for (const sec of doc.document.children.filter((n) => n.type === "SECTION")) {
    const category = sec.name.split(" / ").slice(1).join(" / ").replace(/^Overlays\//, "");
    for (const c of sec.children.filter((n) => n.type === "COMPONENT" || n.type === "COMPONENT_SET")) {
      const bb = c.absoluteBoundingBox || { width: 0, height: 0 };
      const name = c.name.split("/").pop().trim();
      const desc = meta[c.id]?.description || "";
      items.push({ id: c.id, system, category, name, slug: system + "-" + slugify(name) + "-" + c.id.replace(/[^0-9]/g, ""), w: Math.round(bb.width), h: Math.round(bb.height), keywords: (desc.split("Content: ")[1] || "").slice(0, 200), source: (desc.match(/screen "([^"]+)"/) || [])[1] || "", thumb: `/library/${system}/${c.id.replace(/[:;]/g, "-")}.webp` });
    }
  }
  console.log(system, items.length, "components");
  const dir = join(WEB, "public/library", system);
  await mkdir(dir, { recursive: true });
  // render each at a scale that keeps the long edge near 1100px, in batches grouped by scale
  const scaleOf = (it) => [1, 0.75, 0.5, 0.33, 0.25, 0.15].find((s) => Math.max(it.w, it.h) * s <= 1400) ?? 0.1;
  const todo = [];
  for (const it of items) if (!(await exists(join(WEB, "public", it.thumb)))) todo.push(it);
  const groups = {};
  for (const it of todo) (groups[scaleOf(it)] ||= []).push(it);
  for (const [scale, list] of Object.entries(groups)) {
    for (let i = 0; i < list.length; i += 40) {
      const batch = list.slice(i, i + 40);
      const res = await api(`/images/${key}?ids=${batch.map((b) => b.id).join(",")}&format=png&scale=${scale}`);
      await Promise.all(batch.map(async (it) => {
        const url = res.images?.[it.id];
        if (!url) return console.log("  no image", it.id, it.name);
        const png = Buffer.from(await (await fetch(url)).arrayBuffer());
        await sharp(png).resize({ width: 960, height: 1400, fit: "inside", withoutEnlargement: true }).flatten({ background: "#ffffff" }).webp({ quality: 80 }).toFile(join(WEB, "public", it.thumb));
      }));
      process.stdout.write(`  ${system} ${Math.min(i + 40, list.length)}/${list.length} @${scale}\n`);
      await sleep(400);
    }
  }
  const keep = all.filter((x) => x.system !== system);
  all.length = 0; all.push(...keep, ...items);
  await writeFile(outFile, JSON.stringify(all));
}
console.log("total", all.length);
