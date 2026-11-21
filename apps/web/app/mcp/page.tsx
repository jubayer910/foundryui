import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, systems } from "@/lib/catalog";
import { JsonLd, abs, breadcrumbLd, faqLd, fmt, pageMeta, STATS, SITE_NAME, ORG_ID } from "@/lib/seo";
import { IlloTile } from "@/components/site/illo";
import { CopyBlock } from "@/components/site/copy-block";
import { ConnectAgent } from "@/components/site/connect-agent";
import { CLIENTS, configText, mcpUrlFor } from "@/components/site/connect-agent-config";
import { ClientLogo } from "@/components/site/client-logo";
import { ed } from "@/lib/content/edit";

export const metadata: Metadata = pageMeta({
  title: "MCP server for UI components: Claude Code, Cursor, Codex",
  description: "Connect Claude Code, Cursor, VS Code or Codex to the Ingot UI MCP server in one step. Your agent builds with checked React components and tokens, not guesses.",
  path: "/mcp", image: "/mcp/opengraph-image",
});

const MCP_URL = mcpUrlFor(SITE_URL);

const TOOLS: [string, string][] = [
  ["list_design_systems", "The systems with status, accent, font and tier"],
  ["get_design_system", "Foundations for one system: tokens CSS, rules, icon style"],
  ["get_tokens", "Tokens as CSS variables, a Tailwind v4 theme or JSON"],
  ["search_components", "Keyword search with category and tier filters"],
  ["get_component", "Metadata, dependencies and usage for one component"],
  ["get_component_code", "Every source file a component needs, dependencies included"],
  ["add_components", "A ready-to-write file set + npm install command for several components"],
  ["init_project", "Tokens, globals.css lines and rules files (CLAUDE.md, AGENTS.md, .cursor/rules) that keep later sessions on the system"],
  ["scaffold_screen", "Turns a screen description into a page assembled from library components"],
  ["get_figma_design", "Builds a component or a whole dashboard template in your Figma file as real, editable layers, through the Figma MCP"],
  ["get_chart", "Picks the right chart for a question and returns it wired to your data shape"],
  ["search_icons", "Find Ingot Icons by name and get the JSX"],
  ["audit_ui", "Checks your UI code for hard-coded colours and off-system patterns"],
  ["get_usage", "Your plan and limits"],
  ["send_feedback", "Request a component or report a problem"],
];

const FAQ = [
  {
    q: "Which AI agents work with the Ingot UI MCP server?",
    a: "Claude Code, Cursor, VS Code (GitHub Copilot agent mode) and Codex have ready configs on this page. Any other client that supports remote MCP servers over Streamable HTTP with an Authorization header works too, using the endpoint " + MCP_URL + ".",
  },
  {
    q: "Is the MCP server free?",
    a: "Yes, with a free account. The Free plan includes 50 MCP calls a day with the free components and the Loopo system. Pro or Lifetime removes the daily limit and unlocks every Pro component.",
  },
  {
    q: "What does the API key do?",
    a: "The key tells the MCP server which account is calling, so it can apply your plan and daily limit. It only reads the Ingot UI library: it cannot change your account, see your code or make payments. It is shown once and stored only as a SHA-256 hash.",
  },
  {
    q: "How do I revoke a key?",
    a: "Open Account, find the key under API keys and press Revoke. It stops working straight away. Then remove the ingot-ui server from your agent's config, or connect again to get a new key.",
  },
  {
    q: "How does my agent stay on the design system in later sessions?",
    a: "Ask it to run init_project once. It writes CLAUDE.md, AGENTS.md and .cursor/rules/ingot.mdc into your project with short rules: build from Ingot components, use the --fu-* tokens, never raw hex colours, and run audit_ui before finishing. Agents read those files at the start of every session.",
  },
];

const H2 = "text-[15px] font-medium tracking-[-0.01em]";

export default function McpPage() {
  return (
    <div className="max-w-[1100px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["MCP server", "/mcp"]]),
          faqLd(FAQ),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: SITE_NAME + " MCP server",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            url: abs("/mcp"),
            description: "A remote MCP server that gives AI coding agents design tokens, React components checked against Figma, charts, icons and a UI audit.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            publisher: { "@id": ORG_ID },
          },
        ]}
      />

      <header className="max-w-[760px]">
        <p className="eyebrow" {...ed("mcp.hero.eyebrow")}>MCP server for UI components</p>
        <h1 className="display mt-1.5 text-[26px] md:text-[34px]" {...ed("mcp.hero.title")}>Your agent builds with real components instead of guessing</h1>
        <p className="mt-2.5 text-[14px] leading-relaxed text-ink-2" {...ed("mcp.hero.sub")}>
          {`Connect your AI agent once. It gets ${fmt(STATS.coded)} React components checked against Figma, the design tokens and an audit, so the screens it writes look like one product, not a template.`}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <a href="#connect" className="btn-ink">Connect your agent</a>
          <a href="#tools" className="btn-line">See what it can do</a>
          <span className="text-[12px] text-mute">Free account · 50 calls a day · no card</span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[12px] text-mute">Works with</span>
          {CLIENTS.map((c) => (
            <a key={c.id} href={"?client=" + c.id + "#connect"} className="flex items-center gap-1.5 text-[13px] font-medium text-ink-2 hover:text-ink">
              <ClientLogo id={c.id} size={18} />
              {c.name}
            </a>
          ))}
          <span className="text-[12px] text-mute">and any MCP client</span>
        </div>
      </header>

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <ConnectAgent siteUrl={SITE_URL} systemCount={systems.length} />
        <aside className="hidden lg:block">
          <IlloTile scene="plug" label="An AI agent plugged into the Ingot UI library" className="h-[170px]" />
          <ul className="mt-4 flex flex-col gap-3 text-[13px] text-ink-2">
            <li><span className="font-medium text-ink">Free to start.</span> 50 calls a day on a free account. <Link href="/pricing" className="underline underline-offset-2">Pro</Link> is unlimited.</li>
            <li><span className="font-medium text-ink">Read-only key.</span> It only reads the library. Revoke it any time in <Link href="/account" className="underline underline-offset-2">Account</Link>.</li>
            <li><span className="font-medium text-ink">Remembers the system.</span> init_project writes rules files, so every new session stays on your design system.</li>
            <li><span className="font-medium text-ink">No agent?</span> The <a href="#cli" className="underline underline-offset-2">CLI</a> adds the same components.</li>
          </ul>
        </aside>
      </div>

      <section id="tools" className="mt-14 scroll-mt-6" aria-labelledby="tools-h">
        <h2 id="tools-h" className={H2}>
          What your agent can do <span className="font-normal text-mute">{TOOLS.length} tools</span>
        </h2>
        <p className="mt-1 text-[13px] text-mute">You never call these yourself. Ask in plain words and the agent picks the right one.</p>
        <div className="mt-3 grid gap-px overflow-hidden rounded-[10px] border border-hair bg-hair sm:grid-cols-2">
          {TOOLS.map(([n, d]) => (
            <div key={n} className="bg-white px-4 py-3">
              <code className="font-fu-mono text-[12px]">{n}</code>
              <p className="mt-0.5 text-[13px] text-mute">{d}</p>
            </div>
          ))}
          {TOOLS.length % 2 === 1 && <div className="bg-white max-sm:hidden" aria-hidden="true" />}
        </div>
      </section>

      <section id="manual" className="mt-14 scroll-mt-6" aria-labelledby="manual-h">
        <h2 id="manual-h" className={H2} {...ed("mcp.manual.h")}>Set it up by hand</h2>
        <p className="mt-1 text-[13px] text-mute">
          Endpoint <code className="font-fu-mono text-[12px]">{MCP_URL}</code>, sent with <code className="font-fu-mono text-[12px]">Authorization: Bearer</code> and a key from <Link href="/account" className="underline underline-offset-2">Account</Link>. Replace YOUR_API_KEY below.
        </p>
        <div className="mt-3">
          <CopyBlock blocks={CLIENTS.map((c) => ({ label: c.name, icon: <ClientLogo id={c.id} size={13} />, code: configText(c.id, MCP_URL, "YOUR_API_KEY").code }))} />
        </div>
        <p className="mt-2 text-[12px] text-mute">Where it goes: {CLIENTS.map((c) => c.name + " → " + configText(c.id, MCP_URL, "").label).join(", ")}.</p>
      </section>

      <section id="cli" className="mt-14 scroll-mt-6" aria-labelledby="cli-h">
        <h2 id="cli-h" className={H2} {...ed("mcp.cli.h")}>Prefer a CLI?</h2>
        <p className="mt-1 text-[13px] text-mute" {...ed("mcp.cli.p")}>Same components, no agent needed.</p>
        <div className="mt-3">
          <CopyBlock blocks={[{ label: "ingotui", code: "npx ingotui init                 # tokens + theme bridge\nnpx ingotui add kpi-card donut    # components + their dependencies\nnpx ingotui list                 # everything available" }, { label: "shadcn", code: "npx shadcn add " + SITE_URL + "/r/kpi-card.json" }]} />
        </div>
      </section>

      <section className="mt-14 max-w-[760px]" aria-labelledby="faq-h">
        <h2 id="faq-h" className={H2}>Questions</h2>
        <div className="mt-3 flex flex-col gap-2">
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0} className="group rounded-[10px] bg-tile px-4 py-3 open:pb-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[13px] font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-mute transition-transform group-open:rotate-180"><path d="M6 9l6 6l6 -6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </summary>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="card mt-14 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
        <div className="flex-1">
          <h2 className="text-[16px] font-medium tracking-[-0.01em]">Give your agent a design system</h2>
          <p className="mt-1 text-[13px] text-mute">One minute to connect. Every screen after that is built from components that match.</p>
        </div>
        <div className="flex items-center gap-1.5">
          {CLIENTS.map((c) => (
            <ClientLogo key={c.id} id={c.id} size={20} />
          ))}
        </div>
        <a href="#connect" className="btn-ink">Connect your agent</a>
      </section>
    </div>
  );
}
