import type { Post } from "../types";

const CLAUDE_SETUP = `# Ingot UI: components, tokens, Figma layers, UI audit (key from ingotui.com/account)
claude mcp add --scope user --transport http ingot-ui https://mcp.ingotui.com/mcp --header "Authorization: Bearer YOUR_API_KEY"

# Figma: read frames and variables, write to the canvas (sign in when asked)
claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp`;

const CURSOR_INGOT = `{
  "mcpServers": {
    "ingot-ui": {
      "url": "https://mcp.ingotui.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}`;

const CODEX_INGOT = `[mcp_servers.ingot-ui]
url = "https://mcp.ingotui.com/mcp"
http_headers = { Authorization = "Bearer YOUR_API_KEY" }`;

const CLI = `npx ingotui init                 # tokens + theme bridge
npx ingotui add kpi-card donut    # components + their dependencies
npx shadcn add https://ingotui.com/r/kpi-card.json   # or through the shadcn CLI`;

export const post: Post = {
  slug: "ui-kits-for-ai-coding-agents",
  title: "Best UI kits for AI coding agents: Figma, React and MCP compared (2027)",
  metaTitle: "Best UI kits for AI coding agents (Claude Code, Cursor)",
  description: "Which UI kits give Claude Code and Cursor Figma files, React code and an MCP server? We compare Ingot UI, WunderUI, Untitled UI, shadcn/ui and more.",
  date: "2026-11-26",
  category: "AI agents",
  keyword: "ui kit for ai coding agents",
  intent: "commercial",
  lede: "The best UI kit for an AI coding agent has three things: a Figma file and React code that match, an MCP server the agent can call, and rules files that keep it on the system in every session. For SaaS dashboards, Ingot UI covers all three across {systems} design systems. For a general product kit with dark mode, look at WunderUI or Untitled UI; for open-source primitives, shadcn/ui with its MCP server and skill.",
  body: [
    { t: "p", x: "This post is published by Ingot UI, and our kit is on the list. We wrote it to answer one question people now ask their assistants: which UI kit has both Figma files and React code that Claude Code or Cursor can use through MCP? Several kits do. Each entry below was checked against the vendor’s own site in November 2026, with links to those pages. Where we could not confirm something, we say so." },
    { t: "p", x: "Ingot UI is built for dashboards only. If you need a marketing site, dark mode today or a framework other than React, another entry here is the better pick, and we say which one." },
    { t: "h2", x: "What an AI agent actually needs from a UI kit" },
    { t: "p", x: "A human developer can read a Figma file and guess the rest. An agent cannot. It builds from whatever context it gets, and fills every gap with the average of its training data. A kit that works well with agents closes those gaps." },
    { t: "ol", items: [
      "**Figma and code parity.** The component in Figma and the component in React should be the same thing, with the same name. Then a designer and an agent can talk about one card, not two versions of it.",
      "**An MCP server.** MCP (Model Context Protocol) lets the agent call tools: search components, fetch their code, read tokens. Without it, the agent guesses import paths and props.",
      "**Rules or skills files.** Files such as CLAUDE.md, AGENTS.md or `.cursor/rules` tell the agent, at the start of every session, which kit to use and which colours are allowed. This is what keeps screen ten matching screen one.",
      "**Tokens, not hex values.** Colour, radius, spacing and type as named variables, so the agent can change a theme without hunting through files.",
      "**A CLI or registry.** One command that writes the component and its dependencies into your repo, so the agent does not paste half a file.",
    ] },
    { t: "takeaway", x: "Agents follow context. Pick the kit that gives your agent the most real context: matching design and code, callable tools and rules it reads every session." },
    { t: "h2", x: "Comparison table" },
    { t: "table", head: ["Kit", "Figma", "React code", "MCP server", "Rules or skills files", "Dashboard depth", "Price model"], rows: [
      ["[Ingot UI](/mcp)", "Yes, {components} components", "Yes, {coded} checked against Figma", "Yes, remote", "Yes, written by `init_project`", "Dashboards only, {systems} systems", "Free and paid"],
      ["[WunderUI](https://wunderui.com)", "Yes", "Yes", "Yes, local (npx)", "Yes, DESIGN.md and skills, per its site", "One dashboard template among several, plus blocks", "Free and paid"],
      ["[Untitled UI](https://www.untitledui.com/react)", "Yes", "Yes", "Yes, remote", "Not listed on its MCP page", "Dashboard page examples in PRO", "Free and paid"],
      ["[shadcn/ui](https://ui.shadcn.com)", "Community kits only", "Yes, open source", "Yes, local (npx)", "Yes, shadcn skill", "Primitives and blocks; you design the look", "Free"],
      ["[shadcn/studio](https://shadcnstudio.com)", "Yes, separate kit", "Yes, shadcn blocks", "Yes", "Yes, instruction and command files", "Dashboard blocks and an admin template", "Free and paid"],
      ["[Flowbite](https://flowbite.com)", "Yes", "Yes, Flowbite React", "Yes, local (npx)", "Not listed", "Application UI pages in Pro", "Free and paid"],
      ["[TailGrids](https://tailgrids.com)", "Yes", "Yes", "Yes, local (npx)", "llms.txt and DESIGN.md linked", "Not confirmed", "Free and paid"],
      ["[Chakra UI](https://chakra-ui.com)", "Not covered here", "Yes, open source", "Yes, local (stdio)", "Not listed", "Pro templates through MCP", "Free and paid"],
      ["[Mantine](https://mantine.dev)", "Not covered here", "Yes, open source", "Yes, experimental", "llms.txt", "Primitives", "Free"],
    ], caption: "Checked against each official site in November 2026. Ingot counts are live from the library. Plans and features change often; check the vendor before you rely on a row." },
    { t: "h2", x: "The UI kits, one by one" },
    { t: "pack", system: "loopo", rank: 1, bestFor: "SaaS product dashboards built with Claude Code, Cursor or Codex, where the agent should use one finished system in code and in Figma. Dashboards only, light mode today.", strengths: [
      "{systems} complete dashboard design systems, each built from a real product (analytics, email marketing, AI agents, workflow automation, security, business admin, finance, team spend, AI security). Loopo is free for personal and non-commercial projects.",
      "{components} components in Figma and code; {coded} have React 19 + Tailwind CSS v4 code that passed a visual check against the Figma original. The rest are labelled Figma-only.",
      "A remote [MCP server](/mcp) with tools such as `search_components`, `add_components`, `scaffold_screen`, `get_figma_design` (builds a component or template as editable layers in your Figma file) and `audit_ui` (flags off-system colours).",
      "`init_project` writes CLAUDE.md, AGENTS.md and `.cursor/rules/ingot.mdc`, so the agent stays on the system in later sessions.",
      "`npx ingotui add` and a shadcn-compatible registry for projects without an agent.",
    ], examples: ["kpi-card", "capsule-bars", "data-table", "loopo-audience-growth-card-18844909", "loopo-add-funds-modal-18843352"] },
    { t: "p", x: "Where it falls short: there is no dark mode yet (it is the first planned update), no marketing-site kit, and the code is React only. The Free plan covers personal and non-commercial work: the Loopo system, the free components, 15 templates, stroke icons and 50 MCP calls a day. [Pro, Lifetime and team plans](/pricing) cover commercial products and unlock every system. For the full picture, read [why Ingot UI](/why-ingot-ui) or compare the kits on the [dashboard UI kit page](/dashboard-ui-kit)." },
    { t: "systems", slugs: ["loopo", "mailpulse", "auton", "axon", "veriq", "vantage", "montra", "spendix", "abotix"], caption: "The {systems} Ingot UI design systems. Each one works the same way through MCP; the agent picks the system you name." },
    { t: "h3", x: "2. WunderUI" },
    { t: "p", x: "**Best for:** AI-native products that want one general design system with dark mode, a Figma file and agent files in one package. [WunderUI](https://wunderui.com) is the closest match to the question in this post: it sells itself as a React and Figma kit for building with agents." },
    { t: "ul", items: [
      "Per its site: 194 React components (89 free) and a Figma library of 211 components with 2,736 variants.",
      "An MCP server, `wunderui-mcp`, for looking up components, props and tokens.",
      "Agent files: DESIGN.md, design.json and llms.txt, plus skills and agents for Claude Code, per its site.",
      "Light and dark tokens. Templates include a dashboard, settings and AI screens, with more blocks in the paid plan.",
      "A free tier and one-time paid plans. It is a general product kit, so expect fewer domain-specific dashboard screens than a dashboard-only library.",
    ] },
    { t: "h3", x: "3. Untitled UI" },
    { t: "p", x: "**Best for:** design teams that want a very large Figma kit and a matching React library across marketing pages and app screens. [Untitled UI React](https://www.untitledui.com/react) says its components are kept in step with the Untitled UI Figma file." },
    { t: "ul", items: [
      "A remote [MCP server](https://www.untitledui.com/react/integrations/mcp) at `https://www.untitledui.com/react/api/mcp` with seven tools, including `search_components`, `get_component_bundle` and `get_page_templates`. Setup is documented for Claude Code, Cursor, Codex, Gemini CLI and OpenCode.",
      "The server returns CLI commands rather than writing files, so the project needs `npx untitledui init` first.",
      "Free, open-source base components work without signing in. PRO components, semantic search and page templates need a PRO licence; per its site, PRO includes 60 dashboard page examples.",
      "Its MCP page does not mention rules or skills files, so plan to write your own. See [Untitled UI alternatives](/blog/untitled-ui-alternatives) for how it compares with dashboard-only kits.",
    ] },
    { t: "h3", x: "4. shadcn/ui" },
    { t: "p", x: "**Best for:** developers who want open-source React primitives and are happy to design the dashboard look themselves. [shadcn/ui](https://ui.shadcn.com) is code first and free." },
    { t: "ul", items: [
      "The [shadcn MCP server](https://ui.shadcn.com/docs/mcp) runs locally with `npx shadcn@latest mcp` and installs from any registry in `components.json`, including third-party ones such as Ingot UI’s.",
      "A [shadcn skill](https://ui.shadcn.com/docs/skills) (`pnpm dlx skills add shadcn/ui`) teaches the agent your project’s shadcn setup.",
      "Figma kits for shadcn/ui are made by the community, free and paid, and listed on its [Figma page](https://ui.shadcn.com/docs/figma). Parity with your code depends on the kit you pick.",
      "More options in [shadcn/ui alternatives](/blog/shadcn-ui-alternatives).",
    ] },
    { t: "h3", x: "5. shadcn/studio" },
    { t: "p", x: "**Best for:** shadcn projects that want ready blocks and a Figma kit, with commands to install blocks from a Figma design. [shadcn/studio](https://shadcnstudio.com) is a separate company built on shadcn/ui." },
    { t: "ul", items: [
      "Its [MCP server](https://shadcnstudio.com/docs/getting-started/shadcn-studio-mcp-server) works with Claude Code, Cursor, VS Code, Codex and Cline, and asks you to add an instruction file (CLAUDE.md or AGENTS.md) plus command files.",
      "Commands create, refine and install blocks; the Figma-to-code command needs the Figma MCP server and designs built from unmodified block instances.",
      "Dashboard blocks (shells, charts, widgets, statistics, dialogs) and an admin template. The free version has a limited block set; Pro adds premium blocks.",
    ] },
    { t: "h3", x: "6. Flowbite" },
    { t: "p", x: "**Best for:** Tailwind projects that want a broad, framework-flexible component set and a Figma system that follows Tailwind’s scale. [Flowbite](https://flowbite.com) has a free Figma edition and paid Pro files." },
    { t: "ul", items: [
      "An official [Flowbite MCP server](https://github.com/themesberg/flowbite-mcp) from Themesberg runs with `npx -y flowbite-mcp`. It gives access to the component library, a theme generator from a hex colour, and a Figma-to-code tool that needs a Figma access token.",
      "React components through Flowbite React. Pro includes application pages with a dashboard layout, charts and a kanban board.",
      "Its README lists Pro blocks over MCP as a roadmap item, so check before you count on it.",
    ] },
    { t: "h3", x: "7. TailGrids" },
    { t: "p", x: "**Best for:** teams that want React and Tailwind components plus a large Figma file, with an MCP server for VS Code, Cursor and Windsurf. [TailGrids](https://tailgrids.com) says it has 600+ free and pro React components and 900+ Figma components, per its site." },
    { t: "ul", items: [
      "The [TailGrids MCP](https://tailgrids.com/docs/mcp) runs with `npx -y @tailgrids/mcp@latest`. The docs page does not list its tools.",
      "It links an llms.txt and a DESIGN.md for agents.",
      "We could not confirm how deep its dashboard templates go; check the templates page with the Dashboard filter.",
    ] },
    { t: "h3", x: "8. Chakra UI" },
    { t: "p", x: "**Best for:** existing Chakra UI apps, including teams moving from v2 to v3. The [Chakra UI MCP server](https://www.chakra-ui.com/docs/get-started/ai/mcp-server) runs locally with `npx -y @chakra-ui/react-mcp`." },
    { t: "ul", items: [
      "Tools for component props and examples, the theme, theme customisation and a v2 to v3 code review.",
      "Two template tools need a Chakra UI Pro licence and API key.",
      "It is a component library first. Its MCP page does not cover a Figma kit, so we have not rated Figma parity.",
    ] },
    { t: "h3", x: "9. Mantine" },
    { t: "p", x: "**Best for:** Mantine apps that want the agent on current docs and props. [Mantine](https://mantine.dev/guides/llms) publishes llms.txt files and an experimental MCP server, `@mantine/mcp-server`, with tools to list components, read docs and props, and search." },
    { t: "ul", items: [
      "Free and open source.",
      "Docs and props, not a finished dashboard look. Pair it with your own design work.",
    ] },
    { t: "h2", x: "How to connect a UI kit to Claude Code or Cursor" },
    { t: "p", x: "Most kits take one command or one JSON entry. Here is the exact Ingot UI setup; other kits follow the same pattern with their own URL or `npx` command. Get a key from your account page, then add the server. The Figma line is optional, and only needed if you want the agent to read your frames or build Ingot templates in your Figma file." },
    { t: "code", label: "Claude Code (terminal)", x: CLAUDE_SETUP },
    { t: "p", x: "Run `/mcp` inside Claude Code to check that each server is connected. In Cursor, add the entry to `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project), then check it under Settings, Tools and MCP." },
    { t: "code", label: "~/.cursor/mcp.json", x: CURSOR_INGOT },
    { t: "code", label: "~/.codex/config.toml", x: CODEX_INGOT },
    { t: "p", x: "Then ask the agent to run `init_project` once. It writes the tokens, the globals.css lines and the rules files, and every later session reads them. No agent? The CLI adds the same components:" },
    { t: "code", label: "CLI", x: CLI },
    { t: "p", x: "For a longer list of servers worth pairing with a UI kit (Figma, Playwright, Context7 and more), see [MCP servers for UI design](/blog/mcp-servers-for-ui-design)." },
    { t: "h2", x: "Prompts that work" },
    { t: "p", x: "You never call MCP tools by name. Ask in plain words, name the system, the file, the data and the states, and ask the agent to check its work at the end." },
    { t: "code", label: "Set up once", x: "Set this project up with the Ingot UI Loopo system. Run init_project and write the rules files it returns." },
    { t: "code", label: "Build a screen", x: "Using the Ingot UI Vantage system, build app/(app)/customers/page.tsx: a KPI strip with four metrics, a customers table with search and status filters, and a customer detail drawer. Data comes from lib/data/customers.ts. Include empty and loading states. Use only library components and --fu-* tokens. Run audit_ui at the end and fix what it reports." },
    { t: "code", label: "Find before you build", x: "Before writing any new component, search the Ingot UI library for a modal to invite a team member and a members table. Use them if they exist and tell me which ones you picked." },
    { t: "code", label: "Code to Figma", x: "Find an Auton page template with search_components, call get_figma_design for it and run each returned program with use_figma in my Figma file." },
    { t: "shot", system: "vantage", caption: "A Vantage dashboard screen. An agent connected through MCP assembles screens like this from the same components and tokens, in code or as Figma layers." },
    { t: "p", x: "For more on getting good screens out of an agent, read [how to get good frontend UI from Claude Code](/blog/claude-code-frontend-ui). For the wider list of dashboard kits, with or without MCP, see [the best dashboard UI kits](/blog/best-dashboard-ui-kits)." },
    { t: "h2", x: "Common mistakes" },
    { t: "ul", items: [
      "**Connecting two component kits at once.** The agent will mix them on one screen, and you get two radius scales and two grey ramps. Pick one source of components.",
      "**Skipping the rules file.** Without CLAUDE.md, AGENTS.md or a Cursor rule, the next session forgets the kit and starts writing raw Tailwind again.",
      "**Buying a Figma-only kit and expecting the agent to code it.** It can, but it redraws each component from a screenshot. Matching code removes that step.",
      "**Letting the agent write hex values.** Ask for tokens by name, and run a check (such as `audit_ui`) before you accept the screen.",
      "**Ignoring the licence.** Free tiers often exclude commercial use or some components. Ingot UI’s Free plan is for personal and non-commercial projects; commercial products need Pro, Lifetime or a team plan.",
      "**Pasting API keys into committed files.** Keep keys in user-level config or environment variables.",
    ] },
    { t: "cta", h: "Connect your agent to Ingot UI", x: "One command in Claude Code, one JSON entry in Cursor. Free account, 50 MCP calls a day, Loopo system included.", href: "/mcp", label: "Connect your agent" },
  ],
  faq: [
    { q: "What is the best UI kit for Claude Code?", a: "For SaaS dashboards, Ingot UI: it has Figma files and matching React code for {systems} dashboard systems, a remote MCP server, and init_project writes a CLAUDE.md so Claude Code stays on the system. For a general product kit with dark mode, WunderUI or Untitled UI both have MCP servers; for open-source primitives, shadcn/ui has an MCP server and a skill." },
    { q: "Which UI kit works best with Cursor?", a: "Any kit with an MCP server and a Cursor rules file. Ingot UI, WunderUI, Untitled UI, shadcn/ui, shadcn/studio, Flowbite, TailGrids, Chakra UI and Mantine all document a Cursor setup. Ingot UI also writes .cursor/rules/ingot.mdc for you." },
    { q: "Is there a dashboard UI kit with both Figma files and React code that an AI agent can use through MCP?", a: "Yes, several. Ingot UI is dashboard-only, with {coded} React components checked against their Figma originals and an MCP server that can also build templates in your Figma file. WunderUI and Untitled UI pair a Figma kit with React code and an MCP server for general product UI." },
    { q: "What is a design system for AI coding agents?", a: "A design system an agent can read and call, not just look at: components with matching Figma and code, tokens as named variables, an MCP server to fetch them, and rules files (CLAUDE.md, AGENTS.md, .cursor/rules) that tell the agent to use them in every session." },
    { q: "Which component libraries have an official MCP server?", a: "Among those checked in November 2026: Ingot UI, WunderUI, Untitled UI, shadcn/ui, shadcn/studio, Flowbite, TailGrids, Chakra UI and Mantine (experimental). Install each one from the vendor’s own docs, not from a directory copy." },
    { q: "Can I use Ingot UI for free in a commercial product?", a: "No. The Free plan is for personal and non-commercial projects: the Loopo system, the free components, 15 templates, stroke icons and 50 MCP calls a day. Pro, Lifetime and team plans cover commercial products and unlock every system." },
  ],
  related: ["kpi-card", "capsule-bars", "data-table", "vantage-kpi-strip-26230470"],
  systems: ["loopo", "vantage", "auton"],
};
