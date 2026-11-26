/**
 * The public changelog as data: /changelog renders it, /changelog/rss.xml publishes it.
 * Newest first. Only what actually shipped, written for the founder using the kit.
 *
 * Versions: 0.x for the preview builds, 1.0.0 for the Ingot UI launch build.
 * Minor = something new you can use, patch = polish and fixes only.
 * `components` are library slugs; the page links them to /components/<slug> when they exist.
 */

export type ChangeType = "new" | "improved" | "fixed";

export type ChangeItem = { type: ChangeType; text: string; components?: string[] };

export type Release = {
  version: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  title: string;
  /** isometric scene key (components/site/illo) */
  scene: string;
  summary: string;
  items: ChangeItem[];
};

export const CHANGE_TYPES: { type: ChangeType; label: string }[] = [
  { type: "new", label: "New" },
  { type: "improved", label: "Improved" },
  { type: "fixed", label: "Fixed" },
];

export const RELEASES: Release[] = [
  {
    version: "1.3.0",
    date: "2026-11-27",
    title: "Checkout moved to Creem: pay without an account, plan switches on automatically",
    scene: "key",
    summary: "Buy a plan in one step. No account needed to pay, and your plan is on within seconds.",
    items: [
      { type: "new", text: "Checkout moved to Creem, our Merchant of Record: cards, plus Apple Pay and Google Pay where offered, with sales tax and VAT handled at checkout" },
      { type: "new", text: "Pay without an account. Your plan switches on automatically: an account with the same email is upgraded, or we email you a link to create one" },
      { type: "improved", text: "Manage billing in your account opens the Creem customer portal to cancel Pro or see your billing history" },
      { type: "improved", text: "No more Activate step for new purchases. Bought on Contra earlier? A small link on Account still switches that plan on" },
    ],
  },
  {
    version: "1.2.0",
    date: "2026-11-15",
    title: "Built for founders: Team plan, one-click agent connect, theme generator",
    scene: "founders",
    summary: "Connect your agent in one step, bring your co-founder on a Team plan, and make any system look like your brand.",
    items: [
      { type: "new", text: "Team plan: 5 seats on one plan, invite teammates with a one-time link from your account" },
      { type: "new", text: "One-step agent connect on the MCP page: a ready config with your key inside for Claude Code, Cursor, VS Code and Codex" },
      { type: "new", text: "init_project now writes CLAUDE.md, AGENTS.md and .cursor/rules/ingot.mdc so your agent stays on the system in every session" },
      { type: "new", text: "Free theme generator: turn a brand colour into a full, contrast-checked token set and export CSS, a Tailwind theme or JSON" },
      { type: "new", text: "A plain-English licence page with a use-case matrix for your own SaaS, client work and teams" },
      { type: "new", text: "Figma match score on component pages, plus accessibility notes and a public accessibility statement" },
      { type: "new", text: "A guided start in your account: pick your system, connect your agent, build your first screen" },
      { type: "new", text: "Public roadmap you can vote on, and an RSS feed for this changelog" },
      { type: "improved", text: "A clearer home page for founders, with a real coded dashboard in the first screen" },
      { type: "improved", text: "System pages show sharp, real product screens and say which kind of product each system fits" },
      { type: "improved", text: "New pages for founders and agencies, and sourced comparisons with shadcn/ui blocks, Untitled UI, Tailwind Plus and Tremor" },
    ],
  },
  {
    version: "1.1.1",
    date: "2026-11-15",
    title: "New Ingot UI logo and link previews",
    scene: "ingots",
    summary: "The brand gets its final mark, and links you share now unfurl with a proper card.",
    items: [
      { type: "improved", text: "New Ingot UI logo in the sidebar and mobile bar, and a favicon that is the mark itself" },
      { type: "improved", text: "Link previews for every page: a clean card with the page title, a one-line summary and topic chips" },
      { type: "improved", text: "Our own page-view counter needs no cookies and stores no IP address or user agent" },
    ],
  },
  {
    version: "1.1.0",
    date: "2026-11-15",
    title: "Real dashboards built from the kit",
    scene: "screen",
    summary: "See full product screens made only from Ingot UI components before you buy.",
    items: [
      { type: "new", text: "Showcase on the home page and system pages: four full dashboards (Loopo analytics and overview, Veriq secrets and team access) built from library components" },
      { type: "new", text: "Each showcase screen is React code checked against its Figma original, at a 99.8 to 99.9% match" },
      { type: "fixed", text: "Generated code now handles rotated elements in auto layout, dashed borders and absolutely placed icons, so more screens convert cleanly" },
    ],
  },
  {
    version: "1.0.0",
    date: "2026-11-15",
    title: "Ingot UI launch: Pro, Lifetime and support",
    scene: "podium",
    summary: "Everything you need to buy, get help and manage your plan, on the site itself.",
    items: [
      { type: "new", text: "Pro monthly, Pro yearly and the Lifetime deal, paid through Lemon Squeezy checkout. The deal shows the real number of spots left" },
      { type: "new", text: "Billing in your account: plan status, Manage billing and receipts" },
      { type: "new", text: "Lifetime unlocks everything in Pro, on the site and in the MCP server" },
      { type: "new", text: "Support centre at /support: instant answers on billing, licence, install, MCP and Figma, plus a contact form" },
      { type: "new", text: "Help button on every page: ask a question, get a matching answer, or send it to us as a ticket. Replies come by email" },
      { type: "improved", text: "Site-wide announcement bar for deals and releases" },
      { type: "improved", text: "Mobile pass at 375px: a full menu with account and support, scrollable filter rows, and copy buttons that stay in view" },
    ],
  },
  {
    version: "0.6.0",
    date: "2026-11-13",
    title: "About page, new guides and illustrations",
    scene: "pipeline",
    summary: "Where the components come from, how we check them, and how we write about them.",
    items: [
      { type: "new", text: "About page: how components are taken from real product screens, converted and checked against Figma, and where our numbers come from" },
      { type: "new", text: "Editorial policy and corrections, so you know how our guides and comparisons are written" },
      { type: "new", text: "Two guides: designing an AI agent dashboard and an email marketing dashboard" },
      { type: "improved", text: "Original animated illustrations on guides, docs, pricing, sign-up and empty states. Motion stops when your system asks for reduced motion" },
    ],
  },
  {
    version: "0.5.0",
    date: "2026-11-11",
    title: "Live previews from real code",
    scene: "react",
    summary: "What you see on a component page is the code you copy, rendered.",
    items: [
      { type: "new", text: "Component pages show a live render of the published React code instead of a picture of the design", components: ["kpi-card", "data-table"] },
      { type: "improved", text: "Copied code compiles as pasted: the Ingot icons it uses are inlined, and all 1,708 code files pass strict TypeScript" },
      { type: "fixed", text: "Pages now load from a static cache, which ends the timeouts some visitors saw under load" },
      { type: "fixed", text: "The Ingot mark replaces the default browser-tab icon" },
    ],
  },
  {
    version: "0.4.0",
    date: "2026-11-10",
    title: "Foundry UI is now Ingot UI",
    scene: "ingots",
    summary: "New name and home at ingotui.com. Old links redirect automatically.",
    items: [
      { type: "improved", text: "New name and home: ingotui.com. Old links redirect automatically" },
      { type: "improved", text: "The CLI is now npx ingotui and the icon package is ingotui-icons" },
      { type: "improved", text: "Components install into components/ingot and styles/ingot; the agent rules file is INGOT.md" },
      { type: "improved", text: "The MCP server moves to mcp.ingotui.com. Update the URL in your agent config" },
      { type: "new", text: "14 category pages (KPI cards, tables, modals, drawers, forms and more) that list every matching component by system" },
      { type: "new", text: "Resources: guides on dashboard UI kits, Figma to React, KPI cards, charts, data tables, empty states, Cursor rules and building UI with Claude Code" },
      { type: "fixed", text: "Trend arrows no longer wrap and small icons keep a crisp stroke in generated code" },
    ],
  },
  {
    version: "0.3.0",
    date: "2026-11-10",
    title: "A library-first site and 1,852 Figma components",
    scene: "grid",
    summary: "All six systems in Figma, and a site where the home page is the library.",
    items: [
      { type: "new", text: "Figma libraries for all six systems: 1,852 components taken from the product screens and checked" },
      { type: "new", text: "The home page is the library, with quick copy and save on every card" },
      { type: "new", text: "Component pages with a facts panel, keyboard shortcuts (C, F, S) and a width switcher" },
      { type: "new", text: "Saved and recent lists, a visible free-copies meter, and a plan comparison on Pricing" },
      { type: "new", text: "React code for 1,506 Figma components, each published only after a visual check against Figma" },
    ],
  },
  {
    version: "0.2.0",
    date: "2026-11-09",
    title: "Icon library and a new look",
    scene: "icons",
    summary: "One icon set for the whole kit, in six styles.",
    items: [
      { type: "new", text: "Ingot Icons: 7,165 icons in six styles (Stroke, Sharp, Solid, Duotone, Twotone, Bulk) on one 24px grid", components: ["icons"] },
      { type: "new", text: "Icons page: search, 41 categories, stroke control, copy SVG or JSX, download" },
      { type: "new", text: "ingotui-icons package with a tree-shakeable React entry" },
      { type: "improved", text: "The MCP search_icons tool searches the whole library and returns JSX and SVG" },
      { type: "improved", text: "Status and accent text colours meet WCAG AA contrast" },
    ],
  },
  {
    version: "0.1.0",
    date: "2026-11-08",
    title: "Ingot UI preview",
    scene: "seed",
    summary: "The first public build: one free system, an MCP server and a CLI.",
    items: [
      { type: "new", text: "Loopo design system live: tokens and 30 components, including 7 charts", components: ["tokens", "capsule-bars", "line-highlight", "donut", "kpi-card", "data-table"] },
      { type: "new", text: "MCP server with 14 tools, a CLI and a shadcn-compatible registry" },
      { type: "new", text: "Free accounts, API keys and a 5-action guest limit" },
    ],
  },
];

/** "1.1.0" -> "v1-1-0", the anchor id on /changelog */
export const versionId = (v: string) => "v" + v.replace(/\./g, "-");

/** ISO date -> "Nov 15, 2026" (UTC, so build machines agree) */
export const showDate = (iso: string) => new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", timeZone: "UTC" });

/** Date of the newest release; use it as the sitemap lastmod for /changelog. */
export const CHANGELOG_UPDATED = RELEASES[0].date;
