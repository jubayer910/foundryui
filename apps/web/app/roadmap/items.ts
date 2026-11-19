/**
 * The public roadmap, from section 4 of PRODUCT-STRATEGY.md, worded for founders.
 * Item ids are stored with votes in D1 (roadmap_vote.item_id): never rename an id, add a new one.
 * When an item ships, move it to lib/changelog.ts and drop it here (its votes stay in D1, harmless).
 */

export type Column = "now" | "next" | "later";

export type RoadmapItem = { id: string; column: Column; title: string; body: string };

export const COLUMNS: { id: Column; title: string; sub: string }[] = [
  { id: "now", title: "Now", sub: "Being built for the launch" },
  { id: "next", title: "Next", sub: "The next few weeks" },
  { id: "later", title: "Later", sub: "On the list, not started" },
];

export const ROADMAP: RoadmapItem[] = [
  // Now
  { id: "same-prompt-demo", column: "now", title: "Same prompt, three outputs", body: "A side-by-side demo: a plain agent, shadcn defaults and an agent using Ingot UI." },

  // Next: dark mode first
  { id: "dark-mode", column: "next", title: "Dark mode for all nine systems", body: "Dark tokens, components and charts in code, with matching Figma variable modes." },
  { id: "team-agency-plans", column: "next", title: "Agency plan and invoices", body: "An Agency tier with a licence for many people doing client work, plus invoices with your company details." },
  { id: "audit-command", column: "next", title: "Keep your agent on the system", body: "npx ingotui audit and a GitHub Action that flag raw colours, off-scale spacing and stray components." },
  { id: "starter-kits", column: "next", title: "Starter kits per product type", body: "SaaS admin, analytics, billing and AI agent console screen sets, plus Next.js and Vite starters." },
  { id: "open-in-v0", column: "next", title: "Open in v0 and MCP directories", body: "Open any component in v0, and find the Ingot MCP server in the directories you already use." },
  { id: "table-chart-power", column: "next", title: "Tables and charts that scale", body: "Server-side pagination, filters in the URL, bulk select across pages and CSV export." },

  // Later
  { id: "enterprise-sso", column: "later", title: "SSO and a private registry", body: "SAML sign-in, per-seat keys on a private registry, a custom licence and a support SLA." },
  { id: "vpat", column: "later", title: "Accessibility conformance report", body: "An ACR/VPAT for the core components, for teams that go through procurement." },
  { id: "code-connect", column: "later", title: "Figma Code Connect", body: "Figma Dev Mode shows the real Ingot UI code for each component." },
  { id: "versioned-packages", column: "later", title: "Storybook and versioned packages", body: "A Storybook per system, versioned packages and codemods when something breaks." },
  { id: "mcp-oauth", column: "later", title: "Sign in your agent without a key", body: "MCP OAuth: approve your agent in the browser instead of pasting an API key." },
  { id: "vue-port", column: "later", title: "Vue versions", body: "The most-used components for Vue, if enough of you ask for it." },
];

export const ROADMAP_IDS = new Set(ROADMAP.map((i) => i.id));
