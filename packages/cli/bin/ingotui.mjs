#!/usr/bin/env node
/**
 * ingot-ui CLI — add Ingot UI components to your project.
 *   npx ingotui init                 tokens + theme bridge + cx + icons
 *   npx ingotui add kpi-card donut   components and their dependencies
 *   npx ingotui list                 everything available
 * Env: INGOT_URL (default https://ingotui.com), INGOT_DIR (default ".")
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { execSync } from "node:child_process";

const SITE = (process.env.INGOT_URL ?? "https://ingotui.com").replace(/\/$/, "");
const ROOT = process.env.INGOT_DIR ?? ".";
const [, , cmd, ...args] = process.argv;
const force = args.includes("--force");
const names = args.filter((a) => !a.startsWith("--"));

const c = { dim: (s) => "\x1b[2m" + s + "\x1b[0m", ok: (s) => "\x1b[32m" + s + "\x1b[0m", bold: (s) => "\x1b[1m" + s + "\x1b[0m", red: (s) => "\x1b[31m" + s + "\x1b[0m" };

async function get(path) {
  const r = await fetch(SITE + path);
  if (!r.ok) throw new Error(r.status === 404 ? "not found: " + path : "HTTP " + r.status + " for " + path);
  return r.json();
}

const exists = (p) => access(p).then(() => true, () => false);

async function add(slugs) {
  const seen = new Set();
  const deps = new Set();
  const queue = [...slugs];
  while (queue.length) {
    const s = queue.shift();
    const name = s.startsWith("http") ? s.split("/").pop().replace(/\.json$/, "") : s;
    if (seen.has(name)) continue;
    seen.add(name);
    let item;
    try {
      item = await get("/r/" + name + ".json");
    } catch (e) {
      console.log(c.red("✗ " + name) + c.dim(" — " + e.message + " (Pro components need the MCP server or the website)"));
      continue;
    }
    (item.dependencies ?? []).forEach((d) => deps.add(d));
    queue.push(...(item.registryDependencies ?? []));
    for (const f of item.files) {
      const out = join(ROOT, f.target);
      if ((await exists(out)) && !force) {
        console.log(c.dim("• skip " + f.target + " (exists, use --force)"));
        continue;
      }
      await mkdir(dirname(out), { recursive: true });
      await writeFile(out, f.content);
      console.log(c.ok("✓ ") + f.target);
    }
  }
  if (deps.size) {
    const list = [...deps].join(" ");
    console.log("\n" + c.bold("npm install " + list));
    if (args.includes("--install")) execSync("npm install " + list, { stdio: "inherit", cwd: ROOT });
  }
}

async function main() {
  if (cmd === "list") {
    const idx = await get("/r/index.json");
    for (const it of idx.items) console.log(c.bold(it.name.padEnd(20)) + c.dim(it.category.padEnd(18)) + it.description);
    return;
  }
  if (cmd === "init") {
    await add(["tokens", "cx", "icons"]);
    console.log("\nAdd to your global CSS (after @import \"tailwindcss\"):\n" + c.bold('@import "./styles/ingot/theme.css";\n@import "./styles/ingot/loopo.css";') + c.dim("\n(adjust the relative path to where your CSS lives)"));
    return;
  }
  if (cmd === "add" && names.length) return add(names);
  console.log(`${c.bold("ingot-ui")} — ${SITE}

  init                 tokens, theme bridge, cx and icons
  add <slug…>          components + their dependencies  [--force] [--install]
  list                 every free component`);
}

main().catch((e) => {
  console.error(c.red(e.message));
  process.exit(1);
});
