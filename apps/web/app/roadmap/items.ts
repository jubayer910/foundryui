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
  { id: "home-first-screen", column: "now", title: "A clearer first screen", body: "What Ingot UI is, and real dashboards built from it, before you scroll." },
  { id: "one-click-agent-connect", column: "now", title: "One-click agent connect", body: "A ready config with your key inside, plus one-click setup for Cursor and VS Code." },
  { id: "real-system-previews", column: "now", title: "Real screens on every system page", body: "Sharp previews of actual product screens, so you see what you get." },
  { id: "plain-licence", column: "now", title: "A plain-English licence", body: "One page that says what you can build, ship and sell with the kit." },
  { id: "figma-match-score", column: "now", title: "Figma match score on components", body: "The measured match between each component's code and its Figma original." },
  { id: "same-prompt-demo", column: "now", title: "Same prompt, three outputs", body: "A side-by-side demo: a plain agent, shadcn defaults and an agent using Ingot UI." },

  // Next: dark mode first
  { id: "dark-mode", column: "next", title: "Dark mode for all six systems", body: "Dark tokens, components and charts in code, with matching Figma variable modes." },
  { id: "team-agency-plans", column: "next", title: "Team and Agency plans", body: "Seats for your team, central billing and invoices, and a licence for client work." },
  { id: "audit-command", column: "next", title: "Keep your agent on the system", body: "npx ingotui audit and a GitHub Action that flag raw colours, off-scale spacing and stray components." },
  { id: "theme-generator", column: "next", title: "Brand theme generator", body: "Pick colour, radius, type and density; export CSS tokens, a Tailwind theme and Figma variables." },
  { id: "starter-kits", column: "next", title: "Starter kits per product type", body: "SaaS admin, analytics, billing and AI agent console screen sets, plus Next.js and Vite starters." },
  { id: "open-in-v0", column: "next", title: "Open in v0 and MCP directories", body: "Open any component in v0, and find the Ingot MCP server in the directories you already use." },
  { id: "table-chart-power", column: "next", title: "Tables and charts that scale", body: "Server-side pagination, filters in the URL, bulk select across pages and CSV export." },
  { id: "accessibility-checks", column: "next", title: "Accessibility statement and checks", body: "A WCAG 2.2 AA target, keyboard and ARIA notes per component, and automated checks." },
  { id: "guided-start", column: "next", title: "A guided start in your account", body: "Three steps from sign-up to your first screen: connect your agent, build, save a system." },

  // Later
  { id: "enterprise-sso", column: "later", title: "SSO and a private registry", body: "SAML sign-in, per-seat keys on a private registry, a custom licence and a support SLA." },
  { id: "vpat", column: "later", title: "Accessibility conformance report", body: "An ACR/VPAT for the core components, for teams that go through procurement." },
  { id: "code-connect", column: "later", title: "Figma Code Connect", body: "Figma Dev Mode shows the real Ingot UI code for each component." },
  { id: "versioned-packages", column: "later", title: "Storybook and versioned packages", body: "A Storybook per system, versioned packages and codemods when something breaks." },
  { id: "mcp-oauth", column: "later", title: "Sign in your agent without a key", body: "MCP OAuth: approve your agent in the browser instead of pasting an API key." },
  { id: "vue-port", column: "later", title: "Vue versions", body: "The most-used components for Vue, if enough of you ask for it." },
];

export const ROADMAP_IDS = new Set(ROADMAP.map((i) => i.id));
