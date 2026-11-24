#!/usr/bin/env node
/**
 * Puts generated component code behind unguessable URLs (runs from `npm run build`, after library-finalize).
 *
 * The finalised code lives in public/library-code/<sys>/<slug>.txt. That folder is NOT deployed
 * (scripts/assets-ignore.mjs lists it in .assetsignore), so its predictable paths answer 404 live.
 * Instead each file is copied to public/c/<token>.txt, where token = sha256(salt:slug).slice(0, 32).
 * The salt lives only in apps/web/.library-salt (git-ignored), so nobody can derive a token from a slug.
 * Servers learn the tokens from the generated maps (git-ignored too):
 *   - apps/web/lib/code-paths.generated.json  → /api/actions and /api/code hand a URL out only after the plan check
 *   - apps/mcp/src/code-paths.generated.json  → the MCP server fetches code for entitled agents
 *
 * Paid icon styles (apps/web/icons-pro/<style>.json: solid, duotone, twotone, bulk) go behind tokens the same way,
 * under the key "icons:<style>" (public/c/<token>.json). /api/icons/<style> and the MCP tool search_icons fetch
 * them only for paid plans. The free stroke styles stay public at /icons/<style>.json.
 *
 * Rotate every URL at once: delete apps/web/.library-salt and rebuild + redeploy web and MCP.
 */
import { createHash, randomBytes } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WEB = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(WEB, "public/library-code");
const OUT = join(WEB, "public/c");
const SALT_FILE = join(WEB, ".library-salt");
const ICONS_PRO = join(WEB, "icons-pro");
const MAPS = [join(WEB, "lib/code-paths.generated.json"), join(WEB, "../mcp/src/code-paths.generated.json")];

if (!existsSync(SALT_FILE)) writeFileSync(SALT_FILE, randomBytes(32).toString("hex") + "\n", { mode: 0o600 });
const salt = readFileSync(SALT_FILE, "utf8").trim();

const map = {};
const tokenOf = (key) => createHash("sha256").update(salt + ":" + key).digest("hex").slice(0, 32);
const extOf = (key) => (key.startsWith("figma:") ? ".html" : key.startsWith("steps:") || key.startsWith("icons:") ? ".json" : ".txt");
const copyNewer = (from, to) => {
  if (!existsSync(to) || statSync(to).mtimeMs < statSync(from).mtimeMs) copyFileSync(from, to);
};
mkdirSync(OUT, { recursive: true });
if (existsSync(ICONS_PRO)) {
  for (const f of readdirSync(ICONS_PRO)) {
    if (!f.endsWith(".json")) continue;
    const key = "icons:" + f.slice(0, -5);
    map[key] = tokenOf(key);
    copyNewer(join(ICONS_PRO, f), join(OUT, map[key] + ".json"));
  }
}
if (existsSync(SRC)) {
  for (const sys of readdirSync(SRC)) {
    const dir = join(SRC, sys);
    if (!statSync(dir).isDirectory()) continue;
    for (const f of readdirSync(dir)) {
      // <slug>.txt = React code, <slug>.figma.html = Figma clipboard payload (captured from Figma desktop)
      // <slug>.steps.json = Figma build steps for the MCP tool get_figma_design (scripts/figma-steps-export.mjs)
      const figma = f.endsWith(".figma.html"), steps = f.endsWith(".steps.json");
      if (!figma && !steps && !f.endsWith(".txt")) continue;
      const slug = figma ? f.slice(0, -".figma.html".length) : steps ? f.slice(0, -".steps.json".length) : f.slice(0, -4);
      const key = figma ? "figma:" + slug : steps ? "steps:" + slug : slug;
      map[key] = tokenOf(key);
      copyNewer(join(dir, f), join(OUT, map[key] + extOf(key)));
    }
  }
}
// drop copies whose slug is gone or whose salt changed
const keep = new Set(Object.entries(map).map(([k, t]) => t + extOf(k)));
for (const f of readdirSync(OUT)) if (!keep.has(f)) rmSync(join(OUT, f));
const json = JSON.stringify(map);
for (const m of MAPS) if (existsSync(dirname(m))) writeFileSync(m, json);
// Which slugs have a Copy to Figma payload: slugs only, no tokens, so library cards (client side) can show the button.
const figmaSlugs = Object.keys(map).filter((k) => k.startsWith("figma:")).map((k) => k.slice(6)).sort();
writeFileSync(join(WEB, "lib/figma-paste.generated.json"), JSON.stringify(figmaSlugs) + "\n");
console.log("code-gate:", Object.keys(map).length, "files behind tokens");
