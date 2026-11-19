#!/usr/bin/env node
/**
 * Figma build steps for every component and template that has code (runs from `npm run build`, before code-gate).
 *
 * For each published item this reads its serialized Figma tree (packages/figma-library/export/data/<sys>/<id>.json,
 * the same tree the React code was generated and checked from) and writes
 * public/library-code/<sys>/<slug>.steps.json: the steps of packages/figma-library/export/figma-steps.mjs, without
 * the runtime. code-gate.mjs moves the file behind a token URL like the code; the MCP tool get_figma_design adds
 * the runtime (apps/mcp/src/figma-runtime.generated.json, written here) and hands the steps to the agent after
 * the plan check. The agent runs them with the Figma MCP `use_figma` tool to get real, editable layers.
 * Items whose tree is not on this machine are skipped (the tool then answers that the Figma build is not ready).
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WEB = join(dirname(fileURLToPath(import.meta.url)), "..");
const EXPORT = join(WEB, "../../packages/figma-library/export");
const DATA = join(EXPORT, "data");
const { figmaSteps, RUNTIME } = await import(join(EXPORT, "figma-steps.mjs"));

const items = JSON.parse(readFileSync(join(WEB, "lib/figma-items.json"), "utf8"));
const bySlug = new Map(items.map((i) => [i.slug, i]));
const published = new Set([
  ...Object.keys(JSON.parse(readFileSync(join(WEB, "lib/figma-code.json"), "utf8"))),
  ...Object.keys(JSON.parse(readFileSync(join(WEB, "lib/template-code.json"), "utf8").replace(/^\s*$/, "{}"))),
]);

let written = 0, missing = 0, bytes = 0;
const index = {};
for (const slug of published) {
  const it = bySlug.get(slug);
  if (!it) { missing++; continue; }
  const file = join(DATA, it.system, it.id.replace(/[:;]/g, "-") + ".json");
  if (!existsSync(file)) { missing++; continue; }
  const tree = JSON.parse(readFileSync(file, "utf8"));
  const steps = figmaSteps(tree, { name: it.name, id: it.id.replace(/[:;]/g, "-"), raw: true });
  const dir = join(WEB, "public/library-code", it.system);
  mkdirSync(dir, { recursive: true });
  const body = JSON.stringify(steps);
  writeFileSync(join(dir, slug + ".steps.json"), body);
  index[slug] = steps.length;
  written++; bytes += body.length;
}
const MCP = join(WEB, "../mcp/src");
if (existsSync(MCP)) writeFileSync(join(MCP, "figma-runtime.generated.json"), JSON.stringify({ runtime: RUNTIME, steps: index }));
writeFileSync(join(WEB, "lib/figma-steps.generated.json"), JSON.stringify(index));
console.log(`figma-steps: ${written} designs buildable in Figma (${(bytes / 1e6).toFixed(1)} MB), ${missing} without a local tree`);
