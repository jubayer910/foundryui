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
const MAPS = [join(WEB, "lib/code-paths.generated.json"), join(WEB, "../mcp/src/code-paths.generated.json")];

if (!existsSync(SALT_FILE)) writeFileSync(SALT_FILE, randomBytes(32).toString("hex") + "\n", { mode: 0o600 });
const salt = readFileSync(SALT_FILE, "utf8").trim();

const map = {};
if (existsSync(SRC)) {
  mkdirSync(OUT, { recursive: true });
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
      const ext = figma ? ".html" : steps ? ".json" : ".txt";
      const token = createHash("sha256").update(salt + ":" + key).digest("hex").slice(0, 32);
      map[key] = token;
      const from = join(dir, f);
      const to = join(OUT, token + ext);
      if (!existsSync(to) || statSync(to).mtimeMs < statSync(from).mtimeMs) copyFileSync(from, to);
    }
  }
  // drop copies whose slug is gone or whose salt changed
  const keep = new Set(Object.entries(map).map(([k, t]) => t + (k.startsWith("figma:") ? ".html" : k.startsWith("steps:") ? ".json" : ".txt")));
  for (const f of readdirSync(OUT)) if (!keep.has(f)) rmSync(join(OUT, f));
}
const json = JSON.stringify(map);
for (const m of MAPS) if (existsSync(dirname(m))) writeFileSync(m, json);
console.log("code-gate:", Object.keys(map).length, "files behind tokens");
