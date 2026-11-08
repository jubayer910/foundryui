/**
 * Foundry UI — remote MCP server (Streamable HTTP, stateless) on Cloudflare Workers.
 * Auth: `Authorization: Bearer fu_…` API key created at <site>/account. Usage is logged to D1.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { z } from "zod";
import catalog from "./catalog.generated.json";

interface Env {
  DB: D1Database;
  SITE_URL: string;
}

type Item = {
  slug: string; name: string; category: string; tier: "free" | "pro"; description: string; files: string[];
  dependencies: string[]; registryDependencies: string[]; tags: string[]; code: Record<string, string>;
};
type User = { id: string; email: string; plan: string };

const ITEMS = catalog.items as unknown as Item[];
const SYSTEMS = catalog.systems;
const FREE_DAILY_CALLS = 50;

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
  return path.startsWith("tokens/") ? "styles/foundry/" + path.slice(7) : "components/foundry/" + path.split("/").pop();
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
  return { id: row.id, email: row.email, plan: row.plan };
}

async function callsToday(env: Env, user: User) {
  const start = Math.floor(new Date().setUTCHours(0, 0, 0, 0) / 1000);
  const r = await env.DB.prepare("SELECT count(*) AS n FROM usage_event WHERE userId = ? AND client = 'mcp' AND createdAt >= ?").bind(user.id, start).first<{ n: number }>();
  return Number(r?.n ?? 0);
}

function buildServer(env: Env, user: User) {
  const server = new McpServer({ name: "foundry-ui", version: "0.1.0" }, { instructions: "Foundry UI: design systems, React + Tailwind v4 components and charts. Call init_project once per project, then add_components or scaffold_screen. Write files to the paths given; never invent colours — use the --fu-* tokens." });
  const site = env.SITE_URL;

  /** wraps every tool: quota + usage log */
  const guard = <A,>(tool: string, fn: (a: A) => Promise<ReturnType<typeof text>> | ReturnType<typeof text>) => async (a: A) => {
    if (user.plan === "free" && (await callsToday(env, user)) >= FREE_DAILY_CALLS)
      return text("Daily limit reached (" + FREE_DAILY_CALLS + " MCP calls on the Free plan). Upgrade for unlimited calls: " + site + "/pricing");
    await env.DB.prepare("INSERT INTO usage_event (userId, action, target, client, createdAt) VALUES (?, 'mcp_call', ?, 'mcp', ?)").bind(user.id, tool, Math.floor(Date.now() / 1000)).run();
    return fn(a);
  };
  const locked = (it: Item) => it.tier === "pro" && user.plan === "free";

  server.registerTool("list_design_systems", { description: "List the Foundry UI design systems with status (live / in-progress), tier, accent colour and font." }, guard("list_design_systems", async () => json(SYSTEMS)));

  server.registerTool(
    "get_design_system",
    { description: "Foundations of one design system: token CSS, theme bridge, typography, icon rules and usage rules for agents.", inputSchema: { system: z.string().describe("system slug, e.g. loopo") } },
    guard("get_design_system", async ({ system }: { system: string }) => {
      const s = SYSTEMS.find((x) => x.slug === system);
      if (!s) return text("Unknown system. Available: " + SYSTEMS.map((x) => x.slug).join(", "));
      if (s.status !== "live") return text(s.name + " is still being built. Use loopo for now; every component is token-driven and will adapt when " + s.name + " ships.");
      const tokens = getItem("tokens")!;
      return json({ ...s, tokens: tokens.code, rules: ["Use only --fu-* tokens (bg-fu-surface, text-fu-ink, border-fu-line, rounded-fu-md …); no hard-coded hex colours.", "Icons: Foundry Icons via <Icon name=… /> (1.5px stroke). No decorative dots before labels or as bullets.", "Charts: never a plain single-series bar or smooth line; use capsule-bars, stacked-blocks, line-highlight, donut, pill-meter, hatch-track-list.", "Light mode only for now."] });
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
    { description: "Search components by meaning, e.g. 'card that shows MRR with a trend', 'transactions table', 'donut for traffic sources'.", inputSchema: { query: z.string(), category: z.string().optional(), limit: z.number().int().min(1).max(30).default(8) } },
    guard("search_components", async ({ query, category, limit }: { query: string; category?: string; limit: number }) => {
      const hits = ITEMS.filter((i) => !category || i.category === category)
        .map((i) => ({ i, s: score(i, query) }))
        .filter((x) => x.s > 0)
        .sort((a, b) => b.s - a.s)
        .slice(0, limit)
        .map(({ i }) => ({ slug: i.slug, name: i.name, category: i.category, tier: i.tier, description: i.description, url: site + "/components/" + i.slug }));
      return hits.length ? json(hits) : text("No match. Categories: " + catalog.categories.map((c) => c.slug).join(", ") + ". Use send_feedback to request it.");
    }),
  );

  server.registerTool(
    "get_component",
    { description: "Metadata, dependencies and usage notes for one component.", inputSchema: { slug: z.string() } },
    guard("get_component", async ({ slug }: { slug: string }) => {
      const it = getItem(slug);
      if (!it) return text("Unknown component: " + slug);
      const { code: _code, ...meta } = it;
      return json({ ...meta, url: site + "/components/" + slug, install: "npx foundry-ui add " + slug, files: it.files.map(target) });
    }),
  );

  server.registerTool(
    "get_component_code",
    { description: "All source files a component needs (registry dependencies included), with the target path to write each file to.", inputSchema: { slug: z.string() } },
    guard("get_component_code", async ({ slug }: { slug: string }) => {
      const it = getItem(slug);
      if (!it) return text("Unknown component: " + slug);
      if (locked(it)) return text(it.name + " is a Pro component. Upgrade: " + site + "/pricing");
      return json(resolveFiles(slug).map((f) => ({ path: target(f.path), content: f.content })));
    }),
  );

  server.registerTool(
    "add_components",
    { description: "Everything needed to add several components: deduped files with target paths plus the npm install command. Write every file, then run the command.", inputSchema: { slugs: z.array(z.string()).min(1) } },
    guard("add_components", async ({ slugs }: { slugs: string[] }) => {
      const seen = new Set<string>();
      const missing = slugs.filter((s) => !getItem(s));
      const blocked = slugs.map(getItem).filter((i): i is Item => !!i && locked(i)).map((i) => i.slug);
      const files = slugs.filter((s) => !missing.includes(s) && !blocked.includes(s)).flatMap((s) => resolveFiles(s, seen));
      const deps = [...new Set(files.flatMap((f) => getItem(f.slug)?.dependencies ?? []))];
      return json({ files: files.map((f) => ({ path: target(f.path), content: f.content })), install: deps.length ? "npm install " + deps.join(" ") : null, missing, blocked });
    }),
  );

  server.registerTool(
    "init_project",
    { description: "Set up a project for a Foundry system: token files, the globals.css imports, required packages and an agent rules file (FOUNDRY.md) so later sessions keep using the system.", inputSchema: { system: z.string().default("loopo"), framework: z.enum(["next", "vite", "remix", "other"]).default("next") } },
    guard("init_project", async ({ system, framework }: { system: string; framework: string }) => {
      const t = getItem("tokens")!.code;
      const css = framework === "next" ? "app/globals.css" : "src/index.css";
      return json({
        files: [
          { path: "styles/foundry/theme.css", content: t["tokens/theme.css"] },
          { path: "styles/foundry/loopo.css", content: t["tokens/loopo.css"] },
          { path: "components/foundry/cx.ts", content: getItem("cx")!.code["components/cx.ts"] },
          { path: "components/foundry/icons.tsx", content: getItem("icons")!.code["components/icons.tsx"] },
          { path: "FOUNDRY.md", content: "# UI rules (Foundry UI · " + system + ")\n\n- Build UI only from components in components/foundry (add more with the Foundry MCP add_components tool).\n- Colours, radii and shadows come from --fu-* tokens via Tailwind utilities (bg-fu-surface, text-fu-ink, rounded-fu-lg). Never hard-code hex values.\n- Icons: <Icon name=… /> from components/foundry/icons. Every icon must depict its label.\n- No decorative dots (no dot bullets, no dot before badge text).\n- Charts: use Foundry chart components; never a plain bar or smooth line.\n- Light mode only for now.\n" },
        ],
        editFile: { path: css, prepend: '@import "tailwindcss";\n@import "../styles/foundry/theme.css";\n@import "../styles/foundry/loopo.css";' },
        install: "npm install @base-ui/react",
        requires: "React 19 + Tailwind CSS v4",
        next: "Reference FOUNDRY.md from CLAUDE.md / AGENTS.md / .cursor/rules so the rules persist.",
      });
    }),
  );

  server.registerTool(
    "scaffold_screen",
    { description: "Turn a screen description into a page component assembled from Foundry components. Returns the page file plus the components it needs.", inputSchema: { description: z.string(), name: z.string().default("Dashboard") } },
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
        ...[...want].map((s) => "import { " + comp(s) + " } from \"@/components/foundry/" + s + "\";"),
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
    { description: "Pick the right Foundry chart for a question and return its code plus how to pass data.", inputSchema: { question: z.string().describe("what the reader should learn, e.g. 'monthly revenue', 'share of traffic sources'"), series: z.number().int().min(1).max(3).default(1) } },
    guard("get_chart", async ({ question, series }: { question: string; series: number }) => {
      const q = question.toLowerCase();
      const slug = /share|split|source|breakdown|composition of one/.test(q) ? "donut" : /capacity|quota|progress|limit/.test(q) ? "pill-meter" : /rank|top|country|countries/.test(q) ? "ranked-list" : /method|percent of total|share of total/.test(q) ? "hatch-track-list" : series > 1 || /new vs|stack|parts/.test(q) ? "stacked-blocks" : /trend|daily|weekly|over time|users|line/.test(q) ? "line-highlight" : "capsule-bars";
      const it = getItem(slug)!;
      return json({ chart: slug, why: it.description, props: it.code[it.files[0]].match(/export interface \w+Props[\s\S]*?\n}/)?.[0] ?? null, files: resolveFiles(slug).map((f) => ({ path: target(f.path), content: f.content })) });
    }),
  );

  server.registerTool(
    "search_icons",
    { description: "Find Foundry Icons by name or meaning and get the JSX to use.", inputSchema: { query: z.string() } },
    guard("search_icons", async ({ query }: { query: string }) => {
      const names = [...getItem("icons")!.code["components/icons.tsx"].matchAll(/^\s+"?([a-z-]+)"?: \{ body/gm)].map((m) => m[1]);
      const q = query.toLowerCase();
      const hits = names.filter((n) => q.split(/\W+/).some((w) => w && (n.includes(w) || w.includes(n))));
      return json({ matches: (hits.length ? hits : names).map((n) => ({ name: n, jsx: '<Icon name="' + n + '" size={20} />' })), all: names.length, note: hits.length ? undefined : "No direct match; full list returned." });
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
        if (/from ["'](recharts|chart\.js|react-chartjs-2)["']/.test(l)) findings.push(at + " generic chart library → use a Foundry chart (get_chart)");
        if (/rounded-(sm|md|lg|xl|2xl)\b/.test(l) && !/rounded-fu-/.test(l)) findings.push(at + " raw radius → use rounded-fu-sm/md/lg/xl");
      });
      return json({ ok: findings.length === 0, count: findings.length, findings: findings.slice(0, 100) });
    }),
  );

  server.registerTool("get_usage", { description: "Your plan, today's MCP calls and limits." }, async () => {
    const n = await callsToday(env, user);
    return json({ email: user.email, plan: user.plan, mcpCallsToday: n, dailyLimit: user.plan === "free" ? FREE_DAILY_CALLS : "unlimited", upgrade: site + "/pricing" });
  });

  server.registerTool(
    "send_feedback",
    { description: "Request a component or report a problem to the Foundry team.", inputSchema: { message: z.string().min(3).max(2000) } },
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
    if (url.pathname === "/" || url.pathname === "/health") return Response.json({ name: "foundry-ui-mcp", ok: true, endpoint: "/mcp", tools: 14, docs: env.SITE_URL + "/mcp" });
    if (url.pathname !== "/mcp") return new Response("Not found", { status: 404 });
    const user = await authenticate(req, env);
    if (!user)
      return Response.json(
        { jsonrpc: "2.0", error: { code: -32001, message: "Missing or invalid API key. Create one at " + env.SITE_URL + "/account and send it as 'Authorization: Bearer fu_…'." }, id: null },
        { status: 401, headers: { ...CORS, "www-authenticate": 'Bearer realm="foundry-ui"' } },
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
