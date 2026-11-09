import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/catalog";

export const metadata: Metadata = { title: "MCP & CLI", description: "Connect the Foundry UI MCP server to Claude Code, Cursor, Codex, Windsurf or VS Code and let your agent build with the library." };

const MCP_URL = SITE_URL.replace("://foundry-ui.", "://foundry-ui-mcp.") + "/mcp";

const CLIENTS = [
  { name: "Claude Code", code: "claude mcp add --transport http foundry-ui " + MCP_URL + ' --header "Authorization: Bearer YOUR_API_KEY"' },
  { name: "Cursor (.cursor/mcp.json)", code: JSON.stringify({ mcpServers: { "foundry-ui": { url: MCP_URL, headers: { Authorization: "Bearer YOUR_API_KEY" } } } }, null, 2) },
  { name: "VS Code (.vscode/mcp.json)", code: JSON.stringify({ servers: { "foundry-ui": { type: "http", url: MCP_URL, headers: { Authorization: "Bearer YOUR_API_KEY" } } } }, null, 2) },
  { name: "Codex (~/.codex/config.toml)", code: '[mcp_servers.foundry-ui]\nurl = "' + MCP_URL + '"\nhttp_headers = { Authorization = "Bearer YOUR_API_KEY" }' },
];

const TOOLS: [string, string][] = [
  ["list_design_systems", "The systems with status, accent, font and tier"],
  ["get_design_system", "Foundations for one system: tokens CSS, rules, icon style"],
  ["get_tokens", "Tokens as CSS variables, a Tailwind v4 theme or JSON"],
  ["search_components", "Keyword search with category and tier filters"],
  ["get_component", "Metadata, dependencies and usage for one component"],
  ["get_component_code", "Every source file a component needs, dependencies included"],
  ["add_components", "A ready-to-write file set + npm install command for several components"],
  ["init_project", "Tokens, theme bridge, globals.css lines and an agent rules file for a new project"],
  ["scaffold_screen", "Turns a screen description into a page assembled from library components"],
  ["get_chart", "Picks the right chart for a question and returns it wired to your data shape"],
  ["search_icons", "Find Foundry Icons by name and get the JSX"],
  ["audit_ui", "Checks your UI code for hard-coded colours and off-system patterns"],
  ["get_usage", "Your plan and limits"],
  ["send_feedback", "Request a component or report a problem"],
];

export default function McpPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="page-title">MCP &amp; CLI</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fu-muted">
        Connect your AI agent to the library. It can read the systems, pick components, write the code into your project and keep using the right tokens. Requires a free account and an API key.
      </p>
      <ol className="mt-8 flex flex-col gap-4">
        <li className="rounded-fu-lg border border-hair bg-fu-surface p-5">
          <p className="text-sm font-medium text-fu-ink">1. Create an API key</p>
          <p className="mt-1 text-[13px] text-fu-muted">
            <Link href="/account" className="font-medium text-fu-ink underline underline-offset-2">Account → API keys</Link>. The key is shown once; keep it secret.
          </p>
        </li>
        <li className="rounded-fu-lg border border-hair bg-fu-surface p-5">
          <p className="text-sm font-medium text-fu-ink">2. Add the server to your agent</p>
          <div className="mt-3 flex flex-col gap-3">
            {CLIENTS.map((c) => (
              <div key={c.name}>
                <p className="mb-1 text-[13px] text-fu-muted">{c.name}</p>
                <pre className="overflow-x-auto rounded-fu-sm bg-fu-sunken p-3 font-fu-mono text-xs leading-relaxed text-fu-body">{c.code}</pre>
              </div>
            ))}
          </div>
        </li>
        <li className="rounded-fu-lg border border-hair bg-fu-surface p-5">
          <p className="text-sm font-medium text-fu-ink">3. Ask for what you want</p>
          <pre className="mt-2 whitespace-pre-wrap rounded-fu-sm bg-fu-sunken p-3 font-fu-mono text-xs text-fu-body">{"Set this project up with the Foundry UI Loopo system, then build an analytics overview page with KPI cards, a capsule bar chart for monthly revenue and a transactions table."}</pre>
        </li>
      </ol>

      <h2 className="mt-12 text-lg font-medium tracking-[-0.02em] text-fu-ink">Tools</h2>
      <div className="mt-3 overflow-hidden rounded-fu-lg border border-hair bg-fu-surface">
        {TOOLS.map(([n, d]) => (
          <div key={n} className="flex flex-col gap-1 border-b border-hair px-4 py-3 last:border-0 sm:flex-row sm:gap-6">
            <code className="w-48 shrink-0 font-fu-mono text-xs text-fu-ink">{n}</code>
            <span className="text-[13px] text-fu-muted">{d}</span>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-lg font-medium tracking-[-0.02em] text-fu-ink">CLI</h2>
      <pre className="mt-3 overflow-x-auto rounded-fu-lg border border-hair bg-fu-surface p-4 font-fu-mono text-xs leading-loose text-fu-body">
        {"npx foundryui init                 # tokens + theme bridge into your project\nnpx foundryui add kpi-card donut    # components + their dependencies\nnpx foundryui list                 # everything available\n\n# or with the shadcn CLI\nnpx shadcn add " + SITE_URL + "/r/kpi-card.json"}
      </pre>
    </div>
  );
}
