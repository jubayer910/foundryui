// Builds src/library.generated.json: the generated (Figma → React) components the MCP server can serve.
// Only items whose code file is published (apps/web/public/library-code/<system>/<slug>.txt) are listed.
// Run after the web library changes: node scripts/build-library.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
const web = new URL("../../web/", import.meta.url);
const items = JSON.parse(readFileSync(new URL("lib/figma-items.json", web), "utf8"));
const qa = JSON.parse(readFileSync(new URL("lib/figma-code.json", web), "utf8"));
const list = (Array.isArray(items) ? items : items.items ?? Object.values(items))
  .filter((f) => qa[f.slug] && existsSync(fileURLToPath(new URL(`public/library-code/${f.system}/${f.slug}.txt`, web))))
  .map((f) => ({ slug: f.slug, name: f.name, system: f.system, category: f.category, keywords: String(f.keywords ?? "").slice(0, 160), score: qa[f.slug].score }));
writeFileSync(new URL("../src/library.generated.json", import.meta.url), JSON.stringify({ generatedAt: new Date().toISOString(), items: list }));
const by = list.reduce((m, i) => ((m[i.system] = (m[i.system] ?? 0) + 1), m), {});
console.log(list.length, "library components", by);
