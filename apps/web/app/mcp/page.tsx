import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/catalog";
import { PageHead } from "@/components/site/page-head";
import { CopyBlock } from "@/components/site/copy-block";

export const metadata: Metadata = { title: "MCP & CLI", description: "Connect the Foundry UI MCP server to Claude Code, Cursor, Codex, Windsurf or VS Code and let your agent build with the library." };

const MCP_URL = SITE_URL.replace("://foundry-ui.", "://foundry-ui-mcp.") + "/mcp";

const CLIENTS = [
  { name: "Claude Code", code: "claude mcp add --transport http foundry-ui " + MCP_URL + ' --header "Authorization: Bearer YOUR_API_KEY"' },
  { name: "Cursor", code: JSON.stringify({ mcpServers: { "foundry-ui": { url: MCP_URL, headers: { Authorization: "Bearer YOUR_API_KEY" } } } }, null, 2) },
  { name: "VS Code", code: JSON.stringify({ servers: { "foundry-ui": { type: "http", url: MCP_URL, headers: { Authorization: "Bearer YOUR_API_KEY" } } } }, null, 2) },
  { name: "Codex", code: '[mcp_servers.foundry-ui]\nurl = "' + MCP_URL + '"\nhttp_headers = { Authorization = "Bearer YOUR_API_KEY" }' },
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

const FILES: Record<string, string> = { Cursor: ".cursor/mcp.json", "VS Code": ".vscode/mcp.json", Codex: "~/.codex/config.toml", "Claude Code": "Terminal" };

export default function McpPage() {
  const step = (n: number, h: string, body: React.ReactNode) => (
    <li className="grid gap-3 md:grid-cols-[220px_1fr]">
      <div className="flex gap-3">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-medium text-white">{n}</span>
        <p className="pt-0.5 text-[13px] font-medium">{h}</p>
      </div>
      <div className="min-w-0">{body}</div>
    </li>
  );
  return (
    <div className="max-w-[1100px]">
      <PageHead title="MCP for AI agents" sub="Your agent picks components, writes the code and stays on the system." />

      <ol className="mt-6 flex flex-col gap-6">
        {step(1, "Create an API key", (
          <p className="text-[13px] text-mute">
            Free account needed. Open <Link href="/account" className="font-medium text-ink underline underline-offset-2">Account</Link> and create a key. It is shown once, so keep it somewhere safe.
          </p>
        ))}
        {step(2, "Add the server to your agent", (
          <>
            <CopyBlock blocks={CLIENTS.map((c) => ({ label: c.name, code: c.code }))} />
            <p className="mt-2 text-[12px] text-mute">Replace YOUR_API_KEY with your key. Where it goes: {Object.entries(FILES).map(([k, v]) => k + " → " + v).join(", ")}.</p>
          </>
        ))}
        {step(3, "Ask for a screen", (
          <CopyBlock blocks={[{ label: "Prompt", code: "Set this project up with the Foundry UI Loopo system, then build an analytics overview page with KPI cards, a capsule bar chart for monthly revenue and a transactions table." }]} />
        ))}
      </ol>

      <section className="mt-12">
        <h2 className="text-[13px] font-medium">
          Tools your agent gets <span className="text-mute">{TOOLS.length}</span>
        </h2>
        <div className="card mt-3">
          {TOOLS.map(([n, d]) => (
            <div key={n} className="flex flex-col gap-1 border-b border-hair px-4 py-2.5 last:border-0 sm:flex-row sm:gap-6">
              <code className="w-52 shrink-0 font-fu-mono text-[12px]">{n}</code>
              <span className="text-[13px] text-mute">{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="cli" className="mt-12 scroll-mt-6">
        <h2 className="text-[13px] font-medium">Prefer a CLI?</h2>
        <p className="mt-1 text-[13px] text-mute">Same components, no agent needed.</p>
        <div className="mt-3">
          <CopyBlock blocks={[{ label: "foundryui", code: "npx foundryui init                 # tokens + theme bridge\nnpx foundryui add kpi-card donut    # components + their dependencies\nnpx foundryui list                 # everything available" }, { label: "shadcn", code: "npx shadcn add " + SITE_URL + "/r/kpi-card.json" }]} />
        </div>
      </section>
    </div>
  );
}
