/**
 * Builds every distributable from registry/catalog.ts:
 *  - lib/catalog.generated.json      (site + API: metadata + source code)
 *  - public/r/index.json, public/r/<slug>.json  (shadcn-compatible registry, FREE items only)
 *  - ../mcp/src/catalog.generated.json (MCP server)
 * Run: node scripts/build-registry.mts   (SITE_URL=https://… to set registry dependency URLs)
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { CATALOG, CATEGORIES, SYSTEMS } from "../registry/catalog.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = (process.env.SITE_URL ?? "https://foundry-ui.mitaly-website.workers.dev").replace(/\/$/, "");

const items = CATALOG.map((it) => ({
  ...it,
  dependencies: it.dependencies ?? [],
  registryDependencies: it.registryDependencies ?? [],
  code: Object.fromEntries(it.files.map((f) => [f, readFileSync(join(root, "registry", f), "utf8")])),
}));

const generated = { generatedAt: new Date().toISOString(), site: SITE, systems: SYSTEMS, categories: CATEGORIES, items };
writeFileSync(join(root, "lib/catalog.generated.json"), JSON.stringify(generated));

const mcpDir = join(root, "../mcp/src");
if (existsSync(mcpDir)) writeFileSync(join(mcpDir, "catalog.generated.json"), JSON.stringify(generated));

const outDir = join(root, "public/r");
mkdirSync(outDir, { recursive: true });
const index = [];
for (const it of items) {
  if (it.tier !== "free") continue;
  const files = it.files.map((f) => {
    const css = f.endsWith(".css");
    return {
      path: "registry/foundry/" + f,
      type: css ? "registry:file" : "registry:component",
      target: css ? "styles/foundry/" + basename(f) : "components/foundry/" + basename(f),
      content: it.code[f],
    };
  });
  const entry = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: it.slug,
    type: it.slug === "tokens" ? "registry:style" : "registry:component",
    title: it.name,
    description: it.description,
    dependencies: it.dependencies,
    registryDependencies: it.registryDependencies.map((d) => SITE + "/r/" + d + ".json"),
    files,
    meta: { system: "loopo", category: it.category, tier: it.tier },
  };
  writeFileSync(join(outDir, it.slug + ".json"), JSON.stringify(entry, null, 2));
  index.push({ name: it.slug, type: entry.type, title: it.name, description: it.description, category: it.category });
}
writeFileSync(
  join(outDir, "index.json"),
  JSON.stringify({ $schema: "https://ui.shadcn.com/schema/registry.json", name: "foundry-ui", homepage: SITE, items: index }, null, 2),
);
console.log("registry: " + items.length + " items, " + index.length + " public registry files → " + SITE);
