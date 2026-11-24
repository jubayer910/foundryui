/**
 * Comparison pages (/compare/<slug>). Data only; rendered by app/compare/[slug]/page.tsx.
 *
 * Editorial rules (see /about#editorial):
 * - Ingot UI publishes these pages and says so at the top.
 * - Other tools are described only by what their own public pages state; every such claim
 *   carries a source number pointing at `sources` (the URL we read and the date we checked it).
 * - Each tool gets a "Best for" line that says where it is the better pick.
 * - No prices of other products: link to their page instead.
 *
 * Ingot UI numbers use the blog placeholders ({figma}, {code}, {cat:all:Charts} …) so they
 * are filled from the library data at build time and never go stale.
 * Copy may use the inline markup [text](href), **bold** and `code`.
 */

export type Source = { label: string; url: string };

/** One row of the "At a glance" table. `src` numbers are 1-based indexes into `sources`. */
export type Row = { aspect: string; ingot: string; other: string; src?: number[] };

export type Section = { id: string; h2: string; paras: string[]; src?: number[] };

export type Comparison = {
  slug: string;
  /** primary search phrase */
  keyword: string;
  /** full <title>, under 60 characters */
  title: string;
  /** meta description, 140–160 characters once filled */
  description: string;
  h1: string;
  /** the other tool, as named on its own site; logo in public/logos, used only to identify it (nominative use) */
  other: { name: string; url: string; logo: string };
  /** short line for the /compare index */
  card: string;
  /** answer-first paragraph */
  answer: string;
  rows: Row[];
  bestFor: { ingot: string[]; other: string[]; otherSrc?: number[] };
  sections: Section[];
  /** where to read the other tool's current prices */
  pricingUrl: string;
  faq: { q: string; a: string }[];
  /** blog slugs to link */
  guides: string[];
  /** category hub routes to link */
  categories: { label: string; href: string }[];
  sources: Source[];
  /** date the competitor facts were last read on their sites */
  checked: string;
};

const CHECKED = "2026-11-15";

export const COMPARISONS: Comparison[] = [
  {
    slug: "ingot-ui-vs-shadcn-ui-blocks",
    keyword: "shadcn ui blocks alternative",
    title: "Ingot UI vs shadcn/ui blocks for dashboards",
    description:
      "Ingot UI vs shadcn/ui blocks: what each gives a founder building a dashboard, where shadcn/ui is the better pick, and how to use both. Sources linked.",
    h1: "Ingot UI vs shadcn/ui blocks",
    other: { name: "shadcn/ui", url: "https://ui.shadcn.com", logo: "/logos/shadcn-ui.svg" },
    card: "Free open-source base and blocks, or nine finished dashboard systems on top of the same stack.",
    answer:
      "Choose **shadcn/ui** when you want a free, open-source base and are happy to design the look yourself. Choose **Ingot UI** when you want a finished dashboard look across every screen, with Figma files that match the code and an agent that stays on one system. They are not rivals: Ingot UI's free components install with the shadcn CLI, so you can use both.",
    rows: [
      { aspect: "What it is", ingot: "{systems} dashboard design systems, each drawn from a complete product: tokens, components, charts and page templates.", other: "Describes itself as “a set of beautifully-designed, accessible components and a code distribution platform”, and as “not a component library” but how you build yours.", src: [1] },
      { aspect: "Blocks and screens", ingot: "{figma} components taken from {screens} real product screens, including full page templates.", other: "Blocks for dashboards, sidebars and logins; the dashboard block has a sidebar, charts and a data table.", src: [2] },
      { aspect: "Look", ingot: "{systems} distinct looks (Loopo, MailPulse, Auton, Axon, Veriq, Vantage, Montra, Spendix, Abotix), so your product does not look like the default.", other: "One set of default styles you are expected to edit, since you own the code.", src: [1] },
      { aspect: "Code", ingot: "React 19 and Tailwind CSS v4. {code} components have code, each checked against its Figma original before it is published.", other: "Copy-paste code that works with all React frameworks, added with `npx shadcn add`.", src: [2] },
      { aspect: "Charts", ingot: "{cat:all:Charts} chart components styled per system.", other: "Ready-to-use chart components built with Recharts.", src: [3] },
      { aspect: "Figma", ingot: "Every component lives in its system's Figma library; “Copy to Figma” on any component page.", other: "Not covered on the pages we read." },
      { aspect: "AI agents", ingot: "An MCP server with tools that scaffold whole screens (`scaffold_screen`), return tokens and audit output (`audit_ui`).", other: "An MCP server to browse, search and install components from registries, with setup for Claude Code, Cursor, VS Code and Codex.", src: [4] },
      { aspect: "Cost", ingot: "Loopo system and free components cost nothing; the other eight systems are in Pro. See [pricing](/pricing).", other: "Blocks are listed as “Open Source. Free forever.”", src: [2] },
    ],
    bestFor: {
      ingot: [
        "Founders without a designer who want the whole dashboard to look finished on day one.",
        "Products where Figma and code must match, for example when a designer joins later.",
        "Teams whose AI agent builds most screens and should stay on one system.",
      ],
      other: [
        "A free, open-source base you will style yourself.",
        "Apps beyond dashboards: marketing pages, forms-heavy flows, anything general.",
        "Teams that want to own and change every line from the start.",
      ],
      otherSrc: [1, 2],
    },
    sections: [
      {
        id: "same-stack",
        h2: "Same stack, different job",
        paras: [
          "shadcn/ui gives you the parts and leaves the look to you. That is its strength, and it is also why so many AI-built apps look alike: agents reach for the same defaults. Our guide on [why AI-built dashboards look generic](/blog/ai-generated-dashboard-design) covers this in detail.",
          "Ingot UI starts one step later. Each system is a complete product look, so a KPI card, a table and a drawer already agree on spacing, colour and type. You pick the look once, then build.",
        ],
      },
      {
        id: "use-both",
        h2: "Can you use shadcn/ui and Ingot UI together?",
        paras: [
          "Yes. Every free Ingot UI component is a shadcn registry item, so `npx shadcn add` works with it, and the code is plain React and Tailwind you own. A common setup is shadcn/ui primitives for general UI and an Ingot UI system for the dashboard. See [Docs](/docs) for the install commands and the [shadcn dashboard guide](/blog/shadcn-dashboard).",
        ],
      },
      {
        id: "where-ingot-falls-short",
        h2: "Where Ingot UI falls short today",
        paras: [
          "Ingot UI is dashboard-only: no marketing sites. It ships light mode today; dark mode is the first update. It is React and Tailwind CSS v4 only. And eight of the nine systems are paid, where shadcn/ui is free.",
        ],
      },
    ],
    pricingUrl: "https://ui.shadcn.com",
    faq: [
      { q: "Is Ingot UI built on shadcn/ui?", a: "It uses the same stack (React and Tailwind CSS) and the same registry format, so free Ingot UI components install with the shadcn CLI. The look and the components are Ingot UI's own." },
      { q: "Are shadcn/ui blocks free?", a: "The shadcn/ui blocks page lists them as open source and free. Check ui.shadcn.com for the current terms." },
      { q: "Which is better for an AI coding agent?", a: "Both have an MCP server. shadcn/ui's lets an agent browse, search and install registry items. Ingot UI's also scaffolds full screens from one system and audits the result for off-system colours and spacing." },
      { q: "Does Ingot UI have a free plan?", a: "Yes. The Loopo system and the free components are free, with the MCP server on a daily call limit. Pro unlocks all nine systems." },
    ],
    guides: ["shadcn-ui-alternatives", "shadcn-dashboard", "ai-generated-dashboard-design"],
    categories: [{ label: "Tables and lists", href: "/categories/tables" }, { label: "KPI cards", href: "/categories/kpi-cards" }, { label: "Charts", href: "/charts" }],
    sources: [
      { label: "shadcn/ui: Introduction", url: "https://ui.shadcn.com/docs" },
      { label: "shadcn/ui: Blocks", url: "https://ui.shadcn.com/blocks" },
      { label: "shadcn/ui: Charts", url: "https://ui.shadcn.com/charts" },
      { label: "shadcn/ui: MCP Server", url: "https://ui.shadcn.com/docs/mcp" },
    ],
    checked: CHECKED,
  },
  {
    slug: "ingot-ui-vs-untitled-ui",
    keyword: "untitled ui alternative",
    title: "Ingot UI vs Untitled UI: dashboard kits compared",
    description:
      "Ingot UI vs Untitled UI for a product dashboard: Figma, React code, AI agents and licence, where Untitled UI is the better pick, with every source linked.",
    h1: "Ingot UI vs Untitled UI",
    other: { name: "Untitled UI", url: "https://www.untitledui.com", logo: "/logos/untitled-ui.png" },
    card: "A very broad Figma kit and React library, or nine focused dashboard systems with checked code.",
    answer:
      "Choose **Untitled UI** for breadth: a very large Figma kit, a React library built on React Aria, dark mode and marketing pages as well as app UI. Choose **Ingot UI** when you only need the dashboard and want it to look like one finished product, with code checked against Figma and an MCP server that builds whole screens on one system.",
    rows: [
      { aspect: "What it is", ingot: "{systems} dashboard design systems, each drawn from a complete product.", other: "Calls its Figma file “the world’s largest Figma UI kit and design system”, with 10,000+ components and variants.", src: [1] },
      { aspect: "React code", ingot: "React 19 and Tailwind CSS v4; {code} components have code checked against Figma.", other: "An open-source React library built with React Aria and Tailwind CSS (v4.3); PRO adds hundreds more components.", src: [1, 2] },
      { aspect: "Pages and screens", ingot: "{screens} real product screens across {systems} dashboards, with page templates per system.", other: "PRO lists 250+ page examples.", src: [2] },
      { aspect: "Dark mode", ingot: "Light mode today; dark mode is the first update.", other: "Light and dark modes with CSS variables.", src: [1] },
      { aspect: "Icons", ingot: "{icons} icons in the Ingot icon set.", other: "4,600+ icons in the Figma library, plus a free SVG icon package.", src: [1] },
      { aspect: "AI agents", ingot: "MCP server with `scaffold_screen`, `get_tokens` and `audit_ui` alongside component search.", other: "An MCP server for AI assistants with semantic component and template search.", src: [1] },
      { aspect: "Licence model", ingot: "Free plan, Pro by month or year, and Lifetime. See [pricing](/pricing) and [licence](/license).", other: "PRO tiers are one-time payments with lifetime updates; client work is allowed, and multi-user licences exist for one organisation.", src: [1, 3] },
    ],
    bestFor: {
      ingot: [
        "A founder's product dashboard that should look like one finished product, not a kit.",
        "Teams that want the published match between code and Figma for each component.",
        "Agents that build whole screens and should stay inside one system.",
      ],
      other: [
        "Design teams that want one very large Figma kit for app and marketing work.",
        "Products that need dark mode today.",
        "Teams that prefer a one-time purchase and React Aria accessibility primitives.",
      ],
      otherSrc: [1, 2],
    },
    sections: [
      {
        id: "breadth-vs-depth",
        h2: "Breadth or depth",
        paras: [
          "Untitled UI covers a lot of ground in one kit. Ingot UI goes deep on one job: the dashboard. Each of its nine systems comes from a real product, so the overview, tables, drawers, settings and charts were designed together. If your product is mostly dashboard, depth means fewer screens you have to design yourself.",
        ],
      },
      {
        id: "proof",
        h2: "How the code is checked",
        paras: [
          "Every Ingot UI component with code was rendered and compared with its Figma original before it was published; the match score shows on the showcase screens. Only components that pass get code: {code} so far. How we do it is on the [about page](/about).",
        ],
      },
    ],
    pricingUrl: "https://www.untitledui.com",
    faq: [
      { q: "Is Untitled UI free?", a: "Untitled UI says a large part of its React library is free and open source, and PRO adds more components and page examples. See untitledui.com for current plans." },
      { q: "Does Ingot UI have dark mode?", a: "Not yet. Light mode ships today and dark mode for all nine systems is the first update." },
      { q: "Can I use Ingot UI for client projects?", a: "Yes, with Pro, Lifetime or a team deal: Ingot UI's licence then covers unlimited commercial projects. The Free plan is for personal and non-commercial projects. The licence page sets out client work, teams and agencies in plain English." },
      { q: "Which one works better with Claude Code or Cursor?", a: "Both have an MCP server. Ingot UI's server also scaffolds complete screens from one system and audits agent output for off-system values." },
    ],
    guides: ["untitled-ui-alternatives", "best-dashboard-ui-kits", "free-figma-dashboard-ui-kit"],
    categories: [{ label: "Page templates", href: "/categories/page-templates" }, { label: "Drawers", href: "/categories/drawers" }, { label: "Forms", href: "/categories/forms" }],
    sources: [
      { label: "Untitled UI: home", url: "https://www.untitledui.com" },
      { label: "Untitled UI: React", url: "https://www.untitledui.com/react" },
      { label: "Untitled UI: License", url: "https://www.untitledui.com/license" },
    ],
    checked: CHECKED,
  },
  {
    slug: "tailwind-plus-alternative",
    keyword: "tailwind plus alternative",
    title: "Tailwind Plus alternative for dashboards (2026)",
    description:
      "Tailwind Plus closed to new customers in September 2026. What that means, and the dashboard alternatives worth a look, each with a Best for line and source.",
    h1: "A Tailwind Plus alternative for dashboards",
    other: { name: "Tailwind Plus", url: "https://tailwindcss.com/plus", logo: "/logos/tailwind.svg" },
    card: "Tailwind Plus closed to new customers in September 2026. Options for dashboard work.",
    answer:
      "On 9 September 2026 Tailwind Labs announced it is joining Shopify and closing sign-ups for new Tailwind Plus customers; existing customers keep their access. If you already own Tailwind Plus, keep using it. If you are new and need dashboard UI, look at **Ingot UI** for complete dashboard systems, **shadcn/ui** for a free base, **Tremor** for free chart-first components or **Untitled UI** for a broad kit.",
    rows: [
      { aspect: "Status", ingot: "Open to new customers, with a free plan.", other: "Sign-ups for new customers are closed; existing customers keep access.", src: [1] },
      { aspect: "What it was", ingot: "{systems} dashboard design systems with tokens, components, charts and page templates.", other: "UI blocks, templates and the Catalyst UI kit, sold as a one-time purchase with lifetime access and no subscription.", src: [2] },
      { aspect: "Framework", ingot: "React 19 and Tailwind CSS v4.", other: "The March 2025 post said plain HTML versions of the templates were being prototyped for people who don’t use React.", src: [2] },
      { aspect: "Dashboard depth", ingot: "{figma} components from {screens} real product screens.", other: "UI blocks, templates and the Catalyst UI kit.", src: [2] },
      { aspect: "AI agents", ingot: "MCP server that scaffolds screens on one system and audits the output.", other: "Not covered on the pages we read." },
    ],
    bestFor: {
      ingot: [
        "New buyers who need a finished-looking dashboard, in code and Figma.",
        "Founders whose AI agent builds the screens.",
      ],
      other: [
        "Existing customers: keep using what you bought; Tailwind Labs says access stays.",
      ],
      otherSrc: [1],
    },
    sections: [
      {
        id: "what-happened",
        h2: "What happened to Tailwind Plus",
        paras: [
          "In a post dated 9 September 2026, Tailwind Labs announced it is joining Shopify. It said existing customers keep access to products like Tailwind Plus, that sign-ups for new customers are closing, and that it will no longer try to grow the commercial business. Tailwind CSS itself and the other open-source projects are unchanged, according to the same post.",
        ],
        src: [1],
      },
      {
        id: "what-to-look-for",
        h2: "What to look for in a replacement for dashboard work",
        paras: [
          "**Whole screens, not only blocks.** A dashboard needs an overview, tables with filters, detail drawers, create flows and settings that look like they belong together.",
          "**Figma and code that match.** If a designer joins later, they should open the same components you shipped.",
          "**Agent support.** Most new screens are now written with an AI coding agent. A design system it can read through MCP keeps it on your look instead of the defaults.",
          "**A business that is still selling.** Check that the product is open to new customers and shipping updates; a public [changelog](/changelog) helps.",
        ],
      },
      {
        id: "options",
        h2: "Alternatives for dashboards",
        paras: [
          "**Ingot UI** (us). Best for complete dashboard systems with code checked against Figma and an MCP server. Compare the [systems](/systems).",
          "**shadcn/ui.** Best for a free, open-source base you style yourself. See [Ingot UI vs shadcn/ui blocks](/compare/ingot-ui-vs-shadcn-ui-blocks).",
          "**Tremor.** Best for free, chart-first React components. See [Ingot UI vs Tremor](/compare/ingot-ui-vs-tremor).",
          "**Untitled UI.** Best for a very broad Figma kit with dark mode. See [Ingot UI vs Untitled UI](/compare/ingot-ui-vs-untitled-ui).",
        ],
      },
    ],
    pricingUrl: "https://tailwindcss.com/blog/tailwind-is-joining-shopify",
    faq: [
      { q: "Can I still buy Tailwind Plus?", a: "Tailwind Labs said on 9 September 2026 that it is closing sign-ups for new customers. Check tailwindcss.com for the current status." },
      { q: "Do existing Tailwind Plus customers lose access?", a: "No. The announcement says all existing customers keep their access to products like Tailwind Plus." },
      { q: "Is Tailwind CSS itself affected?", a: "The same post says nothing changes with Tailwind CSS or the other open-source projects." },
      { q: "Does Ingot UI work with Tailwind CSS v4?", a: "Yes. Every Ingot UI component is React 19 and Tailwind CSS v4, themed with CSS variables." },
    ],
    guides: ["tailwind-dashboard-components", "admin-dashboard-templates-nextjs", "best-dashboard-ui-kits"],
    categories: [{ label: "Page templates", href: "/categories/page-templates" }, { label: "Tables and lists", href: "/categories/tables" }, { label: "Navigation", href: "/categories/navigation" }],
    sources: [
      { label: "Tailwind Labs: Tailwind Labs is joining Shopify (9 Sep 2026)", url: "https://tailwindcss.com/blog/tailwind-is-joining-shopify" },
      { label: "Tailwind Labs: Tailwind UI is now Tailwind Plus (4 Mar 2025)", url: "https://tailwindcss.com/blog/tailwind-plus" },
    ],
    checked: CHECKED,
  },
  {
    slug: "ingot-ui-vs-tremor",
    keyword: "tremor alternative",
    title: "Ingot UI vs Tremor: React dashboard components",
    description:
      "Ingot UI vs Tremor for React dashboards: charts, blocks, Figma and AI agents, where Tremor is the better pick and how the two differ. Every source is linked.",
    h1: "Ingot UI vs Tremor",
    other: { name: "Tremor", url: "https://www.tremor.so", logo: "/logos/tremor.png" },
    card: "Free, MIT chart-first components, or nine full dashboard systems with charts included.",
    answer:
      "Choose **Tremor** when you mainly need charts and want free, open-source React components under MIT. Choose **Ingot UI** when you need the whole dashboard, not only the charts: tables, drawers, forms, settings and page templates in one finished look, in code and Figma, with an MCP server for your agent.",
    rows: [
      { aspect: "What it is", ingot: "{systems} dashboard design systems drawn from complete products.", other: "“React components to build charts and dashboards”, built with React, Tailwind CSS and Radix UI.", src: [1] },
      { aspect: "Size", ingot: "{figma} components, {code} with checked code, {cat:all:Charts} of them charts.", other: "35+ components and 300+ block examples.", src: [1] },
      { aspect: "Install", ingot: "`npx ingotui add`, the shadcn CLI, or the MCP server.", other: "Copy and paste, or an npm package.", src: [1] },
      { aspect: "Figma", ingot: "A Figma library per system; “Copy to Figma” on every component page.", other: "A Tremor Figma UI kit is listed on its site.", src: [1] },
      { aspect: "Licence", ingot: "Free plan and Pro; see [pricing](/pricing) and [licence](/license).", other: "Vercel acquired Tremor in January 2025 and made Tremor Blocks free and open source under MIT.", src: [2] },
      { aspect: "AI agents", ingot: "MCP server that scaffolds screens, returns tokens and audits output.", other: "Not covered on the pages we read." },
    ],
    bestFor: {
      ingot: [
        "Founders who need the full product look, not only the charts.",
        "Teams that want Figma and code to match component for component.",
        "Agent-built dashboards that should stay on one system.",
      ],
      other: [
        "Chart-heavy pages where you will design the rest yourself.",
        "Teams that want free, MIT-licensed code or an npm package.",
      ],
      otherSrc: [1, 2],
    },
    sections: [
      {
        id: "charts-or-whole-product",
        h2: "Charts, or the whole product",
        paras: [
          "A dashboard is more than its charts. Most of the screens a founder ships are lists, detail views, create flows and settings. Tremor focuses on charts and dashboard blocks. Ingot UI systems include {cat:all:Charts} chart components, but also the [tables](/categories/tables), [drawers](/categories/drawers) and [forms](/categories/forms) those screens need, all in the same look.",
          "If you are choosing a chart library first, our guide to [React chart libraries](/blog/best-react-chart-libraries) compares Tremor, Recharts and others.",
        ],
      },
    ],
    pricingUrl: "https://www.tremor.so",
    faq: [
      { q: "Is Tremor free?", a: "Vercel's announcement says Tremor Blocks became free and open source for all users under an MIT license." },
      { q: "Does Ingot UI use Tremor for its charts?", a: "No. Ingot UI's charts are its own React and Tailwind components, styled per system and checked against Figma." },
      { q: "Can I use Tremor charts inside an Ingot UI dashboard?", a: "Yes. Both are React and Tailwind CSS. Map Tremor's colours to the system's --fu-* tokens so the charts match the rest of the screen." },
      { q: "Which is better for a SaaS metrics dashboard?", a: "If you need only a few charts, Tremor is a good free start. If you need the whole admin around them, an Ingot UI system such as Vantage saves you designing the other screens." },
    ],
    guides: ["best-react-chart-libraries", "dashboard-chart-types-react", "kpi-card-design"],
    categories: [{ label: "Charts", href: "/charts" }, { label: "KPI cards", href: "/categories/kpi-cards" }, { label: "Tables and lists", href: "/categories/tables" }],
    sources: [
      { label: "Tremor: home", url: "https://www.tremor.so" },
      { label: "Vercel: Vercel acquires Tremor (22 Jan 2025)", url: "https://vercel.com/blog/vercel-acquires-tremor" },
    ],
    checked: CHECKED,
  },
];

export const getComparison = (slug: string) => COMPARISONS.find((c) => c.slug === slug);
