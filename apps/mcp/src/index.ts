/**
 * Ingot UI — remote MCP server (Streamable HTTP, stateless) on Cloudflare Workers.
 * Auth: `Authorization: Bearer fu_…` API key created at <site>/account. Usage is logged to D1.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { z } from "zod";
import catalog from "./catalog.generated.json";
import library from "./library.generated.json";
// slug -> token of the code file at <site>/c/<token>.txt (git-ignored; written by apps/web/scripts/code-gate.mjs)
import codePaths from "./code-paths.generated.json";
// Figma build runtime + steps per slug (written by apps/web/scripts/figma-steps-export.mjs)
import figmaBuild from "./figma-runtime.generated.json";

interface Env {
  DB: D1Database;
  SITE_URL: string;
  SITE: Fetcher;
}

type Item = {
  slug: string; name: string; category: string; tier: "free" | "pro"; description: string; files: string[];
  dependencies: string[]; registryDependencies: string[]; tags: string[]; code: Record<string, string>;
};
type User = { id: string; email: string; plan: string };

const ITEMS = catalog.items as unknown as Item[];

/** Generated components (Figma → React, checked against Figma), one self-contained file each, served from the site. */
type Lib = { slug: string; name: string; system: string; category: string; keywords: string; score: number; free?: boolean };
const LIB = (library as { items: Lib[] }).items;
const getLib = (s: string) => LIB.find((i) => i.slug === s);
/** A system is live as soon as it has published code. */
const SYSTEMS = catalog.systems.map((s) => ({ ...s, status: s.status === "live" || LIB.some((i) => i.system === s.slug) ? "live" : s.status, components: LIB.filter((i) => i.system === s.slug).length }));
/** Dashboard templates are free for everyone; other components follow their system's tier. */
const libTier = (l: Lib) => (l.free ? "free" : SYSTEMS.find((s) => s.slug === l.system)?.tier ?? "pro") as "free" | "pro";
const pascal = (name: string) => name.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join("") || "Component";
const libTarget = (l: Lib) => "components/ingot/" + l.system + "/" + pascal(l.name) + ".tsx";
function libScore(l: Lib, q: string) {
  const words = q.toLowerCase().split(/\W+/).filter((w) => w.length > 1);
  const name = l.name.toLowerCase();
  const hay = (l.name + " " + l.category + " " + l.keywords + " " + l.system).toLowerCase();
  return words.reduce((s, w) => s + (name.includes(w) ? 3 : 0) + (l.category.toLowerCase().includes(w) ? 2 : 0) + (hay.includes(w) ? 1 : 0), 0);
}
async function libCode(env: Env, l: Lib) {
  const token = (codePaths as Record<string, string>)[l.slug];
  if (!token) return null;
  const r = await env.SITE.fetch(env.SITE_URL + "/c/" + token + ".txt");
  return r.ok ? r.text() : null;
}
const FREE_DAILY_CALLS = 50;
/** Same rule as apps/web lib/plans.ts isPaid(): Pro, Team and Lifetime all unlock everything. */
const isPaid = (plan: string | null | undefined) => plan === "pro" || plan === "team" || plan === "lifetime";

/** Same rule as apps/web lib/plans.ts getEffectivePlan(): a joined Team member gets "team" while the owner's Team is live. */
async function effectivePlan(env: Env, userId: string, plan: string) {
  if (isPaid(plan)) return plan;
  try {
    const r = await env.DB.prepare(
      `SELECT 1 AS ok FROM team_member m JOIN team t ON t.id = m.teamId JOIN user o ON o.id = t.ownerId
       WHERE m.userId = ? AND m.role = 'member' AND m.joinedAt IS NOT NULL AND (
         o.plan = 'team'
         OR EXISTS (SELECT 1 FROM subscription s WHERE s.userId = t.ownerId AND s.plan = 'team' AND (s.status IN ('active','on_trial','past_due') OR (s.status = 'cancelled' AND (s.endsAt IS NULL OR s.endsAt > ?))))
         OR EXISTS (SELECT 1 FROM purchase p WHERE p.userId = t.ownerId AND p.plan = 'team' AND p.status = 'granted')
       ) LIMIT 1`,
    )
      .bind(userId, Math.floor(Date.now() / 1000))
      .first<{ ok: number }>();
    return r ? "team" : plan;
  } catch {
    return plan; // team tables not migrated yet
  }
}

const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });
const json = (v: unknown) => text(JSON.stringify(v, null, 2));
const getItem = (s: string) => ITEMS.find((i) => i.slug === s);

function resolveFiles(slug: string, seen = new Set<string>()): { slug: string; path: string; content: string }[] {
  if (seen.has(slug)) return [];
  seen.add(slug);
  const it = getItem(slug);
  if (!it) return [];
  return [...it.registryDependencies.flatMap((d) => resolveFiles(d, seen)), ...it.files.map((f) => ({ slug, path: f, content: it.code[f] }))];
}

/** Where each registry file should be written in the user's project. */
function target(path: string) {
  return path.startsWith("tokens/") ? "styles/ingot/" + path.slice(7) : "components/ingot/" + path.split("/").pop();
}

function score(it: Item, q: string) {
  const words = q.toLowerCase().split(/\W+/).filter((w) => w.length > 1);
  const hay = (it.name + " " + it.description + " " + it.tags.join(" ") + " " + it.category).toLowerCase();
  return words.reduce((s, w) => s + (it.tags.some((t) => t.includes(w)) ? 3 : 0) + (it.name.toLowerCase().includes(w) ? 3 : 0) + (hay.includes(w) ? 1 : 0), 0);
}

async function sha256Hex(input: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

async function authenticate(req: Request, env: Env): Promise<User | null> {
  const raw = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "").trim() || (req.headers.get("x-api-key") ?? "").trim();
  if (!raw.startsWith("fu_")) return null;
  const row = await env.DB.prepare("SELECT u.id, u.email, u.plan, k.id AS keyId FROM api_key k JOIN user u ON u.id = k.userId WHERE k.hash = ?")
    .bind(await sha256Hex(raw))
    .first<{ id: string; email: string; plan: string; keyId: string }>();
  if (!row) return null;
  await env.DB.prepare("UPDATE api_key SET lastUsedAt = ? WHERE id = ?").bind(Math.floor(Date.now() / 1000), row.keyId).run();
  return { id: row.id, email: row.email, plan: await effectivePlan(env, row.id, row.plan) };
}

async function callsToday(env: Env, user: User) {
  const start = Math.floor(new Date().setUTCHours(0, 0, 0, 0) / 1000);
  const r = await env.DB.prepare("SELECT count(*) AS n FROM usage_event WHERE userId = ? AND client = 'mcp' AND createdAt >= ?").bind(user.id, start).first<{ n: number }>();
  return Number(r?.n ?? 0);
}

/** Markers around the Ingot block in shared files (CLAUDE.md, AGENTS.md) so re-running init_project replaces it in place. */
const RULES_START = "<!-- ingot-ui:start -->";
const RULES_END = "<!-- ingot-ui:end -->";

/** Short, concrete rules every agent reads at the start of a session. */
function rulesBody(system: string, site: string) {
  return [
    "## UI: Ingot UI (" + system + " system)",
    "",
    "This project's UI is built with the Ingot UI design system, served by the `ingot-ui` MCP server.",
    "",
    "- Build every screen from Ingot components in `components/ingot/`. Before writing a new component, call `search_components`; add what you need with `add_components`, or start a page with `scaffold_screen`.",
    "- Colours, radii and shadows come only from the `--fu-*` tokens through Tailwind utilities (`bg-fu-surface`, `text-fu-ink`, `border-fu-line`, `rounded-fu-lg`). Never write raw hex, rgb() or Tailwind palette colours (`bg-blue-500`), and never raw radii (`rounded-lg`).",
    "- Charts: use `get_chart` and the Ingot chart components. No recharts or chart.js, no plain single-series bar or smooth line.",
    "- Icons: `<Icon name=… />` from `components/ingot/icons`, or `search_icons`. Every icon must depict its label. No decorative dots before labels or as bullets.",
    "- Before you finish any UI change, run `audit_ui` on each file you touched and fix every finding.",
    "- Missing a component? Use `send_feedback` instead of inventing one with custom styles.",
    "",
    "Docs: " + site + "/mcp",
  ].join("\n");
}

function rulesFiles(system: string, site: string, want: Set<string>) {
  const body = rulesBody(system, site);
  const block = RULES_START + "\n" + body + "\n" + RULES_END + "\n";
  const files: { path: string; content: string; mode: "create" | "merge"; markers?: { start: string; end: string } }[] = [
    // kept for projects set up before the rules files existed
    { path: "INGOT.md", content: "# " + body.slice(3) + "\n", mode: "create" },
  ];
  if (want.has("claude")) files.push({ path: "CLAUDE.md", content: block, mode: "merge", markers: { start: RULES_START, end: RULES_END } });
  if (want.has("codex")) files.push({ path: "AGENTS.md", content: block, mode: "merge", markers: { start: RULES_START, end: RULES_END } });
  if (want.has("cursor"))
    files.push({ path: ".cursor/rules/ingot.mdc", content: "---\ndescription: Ingot UI design system rules for all UI code\nglobs:\nalwaysApply: true\n---\n\n" + body + "\n", mode: "create" });
  return files;
}

function buildServer(env: Env, user: User) {
  const server = new McpServer({ name: "ingot-ui", version: "0.1.0" }, { instructions: "Ingot UI: design systems, React + Tailwind v4 components and charts, and real Figma layers. To design in Figma, call get_figma_design for a component or template slug (find them with search_components; templates are the \"<system>-<screen>-page-<id>\" items) and run each returned program, in order, with the Figma MCP tool use_figma on the user's Figma file. Call init_project once per project and write the rules files it returns (CLAUDE.md, AGENTS.md, .cursor/rules/ingot.mdc), then add_components or scaffold_screen. Write files to the paths given; never invent colours — use the --fu-* tokens. Run audit_ui before finishing UI work." });
  const site = env.SITE_URL;

  /** wraps every tool: quota + usage log */
  const guard = <A,>(tool: string, fn: (a: A) => Promise<ReturnType<typeof text>> | ReturnType<typeof text>) => async (a: A) => {
    if (!isPaid(user.plan) && (await callsToday(env, user)) >= FREE_DAILY_CALLS)
      return text("Daily limit reached (" + FREE_DAILY_CALLS + " MCP calls on the Free plan). Upgrade for unlimited calls: " + site + "/pricing");
    await env.DB.prepare("INSERT INTO usage_event (userId, action, target, client, createdAt) VALUES (?, 'mcp_call', ?, 'mcp', ?)").bind(user.id, tool, Math.floor(Date.now() / 1000)).run();
    return fn(a);
  };
  const locked = (it: Item) => it.tier === "pro" && !isPaid(user.plan);

  server.registerTool("list_design_systems", { description: "List the Ingot UI design systems with status (live / in-progress), tier, accent colour and font." }, guard("list_design_systems", async () => json(SYSTEMS)));

  server.registerTool(
    "get_design_system",
    { description: "Foundations of one design system: token CSS, theme bridge, typography, icon rules and usage rules for agents.", inputSchema: { system: z.string().describe("system slug, e.g. loopo") } },
    guard("get_design_system", async ({ system }: { system: string }) => {
      const s = SYSTEMS.find((x) => x.slug === system);
      if (!s) return text("Unknown system. Available: " + SYSTEMS.map((x) => x.slug).join(", "));
      if (s.status !== "live") return text(s.name + " is still being built. Use loopo for now; every component is token-driven and will adapt when " + s.name + " ships.");
      if (s.slug !== "loopo")
        return json({ ...s, howToBuild: "Every " + s.name + " component is a self-contained React + Tailwind file with the system's own colours, type and Ingot icons baked in. Find them with search_components (system: '" + s.slug + "'), then get_component_code or add_components. Use init_project for the base tokens and rules files.", rules: ["Build screens from " + s.name + " components; don't restyle them with other colours.", "Icons: Ingot Icons only. No decorative dots before labels or as bullets.", "Light mode only for now."] });
      const tokens = getItem("tokens")!;
      return json({ ...s, tokens: tokens.code, rules: ["Use only --fu-* tokens (bg-fu-surface, text-fu-ink, border-fu-line, rounded-fu-md …); no hard-coded hex colours.", "Icons: Ingot Icons via <Icon name=… /> (1.5px stroke). No decorative dots before labels or as bullets.", "Charts: never a plain single-series bar or smooth line; use capsule-bars, stacked-blocks, line-highlight, donut, pill-meter, hatch-track-list.", "Light mode only for now."] });
    }),
  );

  server.registerTool(
    "get_tokens",
    { description: "Design tokens for a system in a chosen format.", inputSchema: { system: z.string().default("loopo"), format: z.enum(["css", "tailwind", "json"]).default("css") } },
    guard("get_tokens", async ({ format }: { system: string; format: "css" | "tailwind" | "json" }) => {
      const t = getItem("tokens")!.code;
      if (format === "tailwind") return text(t["tokens/theme.css"]);
      if (format === "json") {
        const vars = Object.fromEntries([...t["tokens/loopo.css"].matchAll(/--fu-([\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
        return json(vars);
      }
      return text(t["tokens/loopo.css"]);
    }),
  );

  server.registerTool(
    "search_components",
    {
      description: "Search components by meaning across all six systems, e.g. 'card that shows MRR with a trend', 'transactions table', 'agents list page'. Filter by system to keep a product in one look.",
      inputSchema: { query: z.string(), system: z.string().optional().describe("system slug: loopo, mailpulse, auton, axon, veriq, vantage, montra, spendix or abotix"), category: z.string().optional(), limit: z.number().int().min(1).max(30).default(8) },
    },
    guard("search_components", async ({ query, system, category, limit }: { query: string; system?: string; category?: string; limit: number }) => {
      const cat = category?.toLowerCase();
      const core = (system && system !== "loopo" ? [] : ITEMS)
        .filter((i) => !cat || i.category.toLowerCase() === cat)
        .map((i) => ({ s: score(i, query), r: { slug: i.slug, name: i.name, system: "loopo", category: i.category, tier: i.tier, description: i.description, url: site + "/components/" + i.slug } }));
      const lib = LIB.filter((l) => (!system || l.system === system) && (!cat || l.category.toLowerCase().includes(cat)))
        .map((l) => ({ s: libScore(l, query), r: { slug: l.slug, name: l.name, system: l.system, category: l.category, tier: libTier(l), figmaMatch: l.score + "%", url: site + "/components/" + l.slug } }));
      const hits = [...core, ...lib]
        .filter((x) => x.s > 0)
        .sort((a, b) => b.s - a.s)
        .slice(0, limit)
        .map((x) => x.r);
      return hits.length ? json(hits) : text("No match. Categories: " + catalog.categories.map((c) => c.slug).join(", ") + ". Use send_feedback to request it.");
    }),
  );

  server.registerTool(
    "get_component",
    { description: "Metadata, dependencies and usage notes for one component.", inputSchema: { slug: z.string() } },
    guard("get_component", async ({ slug }: { slug: string }) => {
      const it = getItem(slug);
      if (!it) {
        const l = getLib(slug);
        if (!l) return text("Unknown component: " + slug);
        return json({ ...l, tier: libTier(l), figmaMatch: l.score + "%", url: site + "/components/" + slug, file: libTarget(l), note: "Self-contained file: React + Tailwind v4, Ingot icons inlined, no extra packages." });
      }
      const { code: _code, ...meta } = it;
      return json({ ...meta, url: site + "/components/" + slug, install: "npx ingotui add " + slug, files: it.files.map(target) });
    }),
  );

  server.registerTool(
    "get_component_code",
    { description: "All source files a component needs (registry dependencies included), with the target path to write each file to.", inputSchema: { slug: z.string() } },
    guard("get_component_code", async ({ slug }: { slug: string }) => {
      const it = getItem(slug);
      if (!it) {
        const l = getLib(slug);
        if (!l) return text("Unknown component: " + slug);
        if (libTier(l) === "pro" && !isPaid(user.plan)) return text(l.name + " is in a Pro system. Pro, Team or Lifetime unlocks it: " + site + "/pricing");
        const code = await libCode(env, l);
        return code ? json([{ path: libTarget(l), content: code }]) : text("Could not load " + slug + " right now. Try again.");
      }
      if (locked(it)) return text(it.name + " is a Pro component. Pro or Lifetime unlocks it: " + site + "/pricing");
      return json(resolveFiles(slug).map((f) => ({ path: target(f.path), content: f.content })));
    }),
  );

  server.registerTool(
    "get_figma_design",
    {
      description:
        "Build a component or a whole dashboard template in Figma as real, editable layers (auto layout, text, colours, Ingot icons). Returns one JavaScript program per step: run each, in order, with the Figma MCP tool use_figma (pass the user's fileKey), all on the same Figma page. Small designs are one step; full dashboards take several. Call with step = 1, then step = 2, and so on until done is true.",
      inputSchema: { slug: z.string().describe("component or template slug, from search_components"), step: z.number().int().min(1).optional().describe("1-based step, default 1") },
    },
    guard("get_figma_design", async ({ slug, step }: { slug: string; step?: number }) => {
      const l = getLib(slug);
      if (!l) return text("Unknown component: " + slug + ". Use search_components to find Ingot slugs.");
      if (libTier(l) === "pro" && !isPaid(user.plan)) return text(l.name + " is in a Pro system. Pro, Team or Lifetime unlocks Figma builds: " + site + "/pricing");
      const total = (figmaBuild.steps as Record<string, number>)[slug];
      const token = (codePaths as Record<string, string>)["steps:" + slug];
      if (!total || !token) return text("The Figma build for " + l.name + " is not ready yet. Its React code is available with get_component_code.");
      const n = Math.min(Math.max(step ?? 1, 1), total);
      const r = await env.SITE.fetch(env.SITE_URL + "/c/" + token + ".json");
      if (!r.ok) return text("Could not load the Figma build for " + slug + " right now. Try again.");
      const steps = (await r.json()) as unknown[];
      const program = figmaBuild.runtime + "\nreturn await runStep(" + JSON.stringify(steps[n - 1]) + ");";
      return json({
        slug,
        name: l.name,
        system: l.system,
        step: n,
        steps: total,
        done: n === total,
        run: "Pass `program` unchanged as the code argument of the Figma MCP tool use_figma on the user's file" + (n < total ? ", then call get_figma_design again with step " + (n + 1) + "." : ". The design is then complete and selected on the current page."),
        program,
      });
    }),
  );

  server.registerTool(
    "add_components",
    { description: "Everything needed to add several components: deduped files with target paths plus the npm install command. Write every file, then run the command.", inputSchema: { slugs: z.array(z.string()).min(1) } },
    guard("add_components", async ({ slugs }: { slugs: string[] }) => {
      const seen = new Set<string>();
      const libs = slugs.map(getLib).filter((l): l is Lib => !!l && !getItem(l.slug));
      const missing = slugs.filter((s) => !getItem(s) && !getLib(s));
      const blocked = [
        ...slugs.map(getItem).filter((i): i is Item => !!i && locked(i)).map((i) => i.slug),
        ...libs.filter((l) => libTier(l) === "pro" && !isPaid(user.plan)).map((l) => l.slug),
      ];
      const files = slugs.filter((s) => getItem(s) && !blocked.includes(s)).flatMap((s) => resolveFiles(s, seen));
      const deps = [...new Set(files.flatMap((f) => getItem(f.slug)?.dependencies ?? []))];
      const libFiles = (await Promise.all(libs.filter((l) => !blocked.includes(l.slug)).map(async (l) => ({ l, code: await libCode(env, l) }))))
        .filter((x) => x.code)
        .map((x) => ({ path: libTarget(x.l), content: x.code as string }));
      return json({ files: [...files.map((f) => ({ path: target(f.path), content: f.content })), ...libFiles], install: deps.length ? "npm install " + deps.join(" ") : null, missing, blocked });
    }),
  );

  server.registerTool(
    "init_project",
    {
      description:
        "Set up a project for an Ingot system: token files, the globals.css imports, required packages and agent rules files (CLAUDE.md, AGENTS.md, .cursor/rules/ingot.mdc, plus INGOT.md) so every later session keeps using the system. Write every file; for files with mode 'merge', keep the existing content and replace or append only the block between the ingot-ui markers.",
      inputSchema: {
        system: z.string().default("loopo"),
        framework: z.enum(["next", "vite", "remix", "other"]).default("next"),
        agents: z.array(z.enum(["claude", "codex", "cursor"])).optional().describe("which agent rules files to return; default all three"),
      },
    },
    guard("init_project", async ({ system, framework, agents }: { system: string; framework: string; agents?: ("claude" | "codex" | "cursor")[] }) => {
      const t = getItem("tokens")!.code;
      const css = framework === "next" ? "app/globals.css" : "src/index.css";
      const sys = SYSTEMS.find((x) => x.slug === system) ? system : "loopo";
      const want = new Set(agents?.length ? agents : ["claude", "codex", "cursor"]);
      return json({
        files: [
          { path: "styles/ingot/theme.css", content: t["tokens/theme.css"], mode: "create" },
          { path: "styles/ingot/loopo.css", content: t["tokens/loopo.css"], mode: "create" },
          { path: "components/ingot/cx.ts", content: getItem("cx")!.code["components/cx.ts"], mode: "create" },
          { path: "components/ingot/icons.tsx", content: getItem("icons")!.code["components/icons.tsx"], mode: "create" },
          ...rulesFiles(sys, site, want),
        ],
        editFile: { path: css, prepend: '@import "tailwindcss";\n@import "../styles/ingot/theme.css";\n@import "../styles/ingot/loopo.css";' },
        install: "npm install @base-ui/react",
        requires: "React 19 + Tailwind CSS v4",
        next: "Write the files above (mode 'merge': keep what is already in the file and put the ingot-ui block in place of any older one). Then run audit_ui on the screens you build before you finish.",
      });
    }),
  );

  server.registerTool(
    "scaffold_screen",
    { description: "Turn a screen description into a page component assembled from Ingot components. Returns the page file plus the components it needs.", inputSchema: { description: z.string(), name: z.string().default("Dashboard") } },
    guard("scaffold_screen", async ({ description, name }: { description: string; name: string }) => {
      const d = description.toLowerCase();
      const want = new Set<string>(["sidebar-nav", "kpi-card"]);
      if (/revenue|month|sales|growth|bar/.test(d)) want.add("capsule-bars");
      if (/trend|users|traffic|over time|line|active/.test(d)) want.add("line-highlight");
      if (/source|share|split|breakdown|channel/.test(d)) want.add("donut");
      if (/table|transaction|invoice|orders|payments|list of/.test(d)) want.add("data-table");
      if (/country|countries|top|rank/.test(d)) want.add("ranked-list");
      if (/capacity|quota|usage|limit/.test(d)) want.add("pill-meter");
      if (/weekly|stack|new vs|returning/.test(d)) want.add("stacked-blocks");
      if (want.size === 2) ["capsule-bars", "data-table"].forEach((s) => want.add(s));
      const comp = (s: string) => s.split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join("");
      const has = (s: string) => want.has(s);
      const page = [
        '"use client";',
        ...[...want].map((s) => "import { " + comp(s) + " } from \"@/components/ingot/" + s + "\";"),
        "",
        "export default function " + name.replace(/\W/g, "") + "Page() {",
        "  return (",
        '    <div className="flex min-h-screen gap-4 bg-fu-page p-4 font-fu">',
        "      <SidebarNav />",
        '      <main className="flex flex-1 flex-col gap-4 rounded-fu-xl border border-fu-line bg-fu-surface p-6">',
        '        <h1 className="text-2xl font-medium tracking-[-0.02em] text-fu-ink">' + name + "</h1>",
        '        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">',
        '          <KpiCard label="Gross volume" value="$84,320" delta={12.4} icon="wallet" />',
        '          <KpiCard label="Active customers" value="2,184" delta={4.2} icon="user" />',
        '          <KpiCard label="Refunds" value="$1,204" delta={-3.1} icon="invoice" />',
        "        </div>",
        '        <div className="grid gap-4 lg:grid-cols-2">',
        has("capsule-bars") ? '          <section className="rounded-fu-lg border border-fu-line p-5"><h2 className="mb-3 text-sm font-medium text-fu-ink">Monthly revenue</h2><CapsuleBars /></section>' : "",
        has("line-highlight") ? '          <section className="rounded-fu-lg border border-fu-line p-5"><h2 className="mb-3 text-sm font-medium text-fu-ink">Active users</h2><LineHighlight /></section>' : "",
        has("stacked-blocks") ? '          <section className="rounded-fu-lg border border-fu-line p-5"><h2 className="mb-3 text-sm font-medium text-fu-ink">New vs returning</h2><StackedBlocks /></section>' : "",
        has("donut") ? '          <section className="rounded-fu-lg border border-fu-line p-5"><h2 className="mb-3 text-sm font-medium text-fu-ink">Traffic sources</h2><Donut /></section>' : "",
        has("ranked-list") ? '          <section className="rounded-fu-lg border border-fu-line p-5"><RankedList /></section>' : "",
        has("pill-meter") ? '          <section className="rounded-fu-lg border border-fu-line p-5"><PillMeter value={68} /></section>' : "",
        "        </div>",
        has("data-table") ? "        <DataTable />" : "",
        "      </main>",
        "    </div>",
        "  );",
        "}",
      ].filter((l) => l !== "").join("\n");
      const seen = new Set<string>();
      const files = [...want].flatMap((s) => resolveFiles(s, seen));
      return json({ page: { path: "app/" + name.toLowerCase().replace(/\W+/g, "-") + "/page.tsx", content: page }, files: files.map((f) => ({ path: target(f.path), content: f.content })), install: "npm install @base-ui/react", note: "Replace demo values with real data; every chart accepts its data via props." });
    }),
  );

  server.registerTool(
    "get_chart",
    { description: "Pick the right Ingot chart for a question and return its code plus how to pass data.", inputSchema: { question: z.string().describe("what the reader should learn, e.g. 'monthly revenue', 'share of traffic sources'"), series: z.number().int().min(1).max(3).default(1) } },
    guard("get_chart", async ({ question, series }: { question: string; series: number }) => {
      const q = question.toLowerCase();
      const slug = /share|split|source|breakdown|composition of one/.test(q) ? "donut" : /capacity|quota|progress|limit/.test(q) ? "pill-meter" : /rank|top|country|countries/.test(q) ? "ranked-list" : /method|percent of total|share of total/.test(q) ? "hatch-track-list" : series > 1 || /new vs|stack|parts/.test(q) ? "stacked-blocks" : /trend|daily|weekly|over time|users|line/.test(q) ? "line-highlight" : "capsule-bars";
      const it = getItem(slug)!;
      return json({ chart: slug, why: it.description, props: it.code[it.files[0]].match(/export interface \w+Props[\s\S]*?\n}/)?.[0] ?? null, files: resolveFiles(slug).map((f) => ({ path: target(f.path), content: f.content })) });
    }),
  );

  server.registerTool(
    "search_icons",
    {
      description: "Search the Ingot icon library (16,000+ icons, AI icons included, on a 24px grid, each in six styles: stroke-rounded, stroke-sharp, solid, duotone, twotone, bulk) by name or meaning. Returns names, JSX from ingotui-icons/react/<style>, and the SVG.",
      inputSchema: { query: z.string(), style: z.enum(["stroke-rounded", "stroke-sharp", "solid", "duotone", "twotone", "bulk"]).optional(), limit: z.number().int().min(1).max(50).optional() },
    },
    guard("search_icons", async ({ query, style = "stroke-rounded", limit = 12 }: { query: string; style?: string; limit?: number }) => {
      const [index, bodies] = (await Promise.all([env.SITE.fetch(site + "/icons/index.json").then((r) => r.json()), env.SITE.fetch(site + "/icons/" + style + ".json").then((r) => r.json())])) as [
        { n: string; c: string; t: string[] }[],
        Record<string, string>,
      ];
      const words = query.toLowerCase().split(/\W+/).filter(Boolean);
      const score = (i: { n: string; t: string[] }) =>
        words.reduce((s, w) => s + (i.n === w ? 5 : i.n.split("-").includes(w) ? 3 : w.length > 3 && i.n.includes(w) ? 2 : i.t.some((t) => t === w || (w.length > 3 && t.includes(w))) ? 1 : 0), 0);
      const hits = index
        .map((i) => ({ i, s: score(i) }))
        .filter((x) => x.s > 0)
        .sort((a, b) => b.s - a.s || a.i.n.length - b.i.n.length)
        .slice(0, limit);
      const pascal = (n: string) => (/^\d/.test(n) ? "I" : "") + n.replace(/(^|-)([a-z0-9])/g, (_m, _d, c: string) => c.toUpperCase());
      const root = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">';
      return json({
        install: "npm i ingotui-icons",
        matches: hits.map(({ i }) => ({ name: i.n, category: i.c, jsx: `import { ${pascal(i.n)} } from "ingotui-icons/react/${style}";  <${pascal(i.n)} size={20} />`, svg: root + bodies[i.n] + "</svg>" })),
        total: index.length,
        note: hits.length ? undefined : "No match. Try a simpler word (e.g. 'invoice', 'upload', 'chart').",
      });
    }),
  );

  server.registerTool(
    "audit_ui",
    { description: "Check UI code for off-system patterns: hard-coded colours, arbitrary values, decorative dots, plain chart libraries.", inputSchema: { code: z.string(), path: z.string().optional() } },
    guard("audit_ui", async ({ code, path }: { code: string; path?: string }) => {
      const findings: string[] = [];
      const lines = code.split("\n");
      lines.forEach((l, i) => {
        const at = (path ?? "file") + ":" + (i + 1);
        if (/#[0-9a-fA-F]{3,8}\b/.test(l) && !/--fu-/.test(l)) findings.push(at + " hard-coded colour → use a --fu-* token utility");
        if (/\b(bg|text|border)-(red|blue|green|gray|slate|zinc|neutral|purple|indigo)-\d{2,3}\b/.test(l)) findings.push(at + " Tailwind palette colour → use bg-fu-* / text-fu-* tokens");
        if (/list-disc|•|·\s/.test(l)) findings.push(at + " decorative dot / bullet → remove or use a meaningful icon");
        if (/from ["'](recharts|chart\.js|react-chartjs-2)["']/.test(l)) findings.push(at + " generic chart library → use a Ingot chart (get_chart)");
        if (/rounded-(sm|md|lg|xl|2xl)\b/.test(l) && !/rounded-fu-/.test(l)) findings.push(at + " raw radius → use rounded-fu-sm/md/lg/xl");
      });
      return json({ ok: findings.length === 0, count: findings.length, findings: findings.slice(0, 100) });
    }),
  );

  server.registerTool("get_usage", { description: "Your plan, today's MCP calls and limits." }, async () => {
    const n = await callsToday(env, user);
    return json({ email: user.email, plan: user.plan, mcpCallsToday: n, dailyLimit: !isPaid(user.plan) ? FREE_DAILY_CALLS : "unlimited", upgrade: site + "/pricing" });
  });

  server.registerTool(
    "send_feedback",
    { description: "Request a component or report a problem to the Ingot team.", inputSchema: { message: z.string().min(3).max(2000) } },
    guard("send_feedback", async ({ message }: { message: string }) => {
      await env.DB.prepare("INSERT INTO usage_event (userId, action, target, client, createdAt) VALUES (?, 'feedback', ?, 'mcp', ?)").bind(user.id, message.slice(0, 2000), Math.floor(Date.now() / 1000)).run();
      return text("Thanks — logged. Requests with the most votes are built first.");
    }),
  );

  return server;
}

const CORS = { "access-control-allow-origin": "*", "access-control-allow-headers": "authorization, content-type, mcp-session-id, mcp-protocol-version, x-api-key", "access-control-allow-methods": "GET, POST, DELETE, OPTIONS" };

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
    if (url.pathname === "/" || url.pathname === "/health") return Response.json({ name: "ingot-ui-mcp", ok: true, endpoint: "/mcp", tools: 14, docs: env.SITE_URL + "/mcp" });
    if (url.pathname !== "/mcp") return new Response("Not found", { status: 404 });
    const user = await authenticate(req, env);
    if (!user)
      return Response.json(
        { jsonrpc: "2.0", error: { code: -32001, message: "Missing or invalid API key. Create one at " + env.SITE_URL + "/account and send it as 'Authorization: Bearer fu_…'." }, id: null },
        { status: 401, headers: { ...CORS, "www-authenticate": 'Bearer realm="ingot-ui"' } },
      );
    const server = buildServer(env, user);
    const transport = new WebStandardStreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
    await server.connect(transport);
    const res = await transport.handleRequest(req);
    const headers = new Headers(res.headers);
    Object.entries(CORS).forEach(([k, v]) => headers.set(k, v));
    return new Response(res.body, { status: res.status, headers });
  },
};
