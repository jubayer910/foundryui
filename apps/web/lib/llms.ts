import { SITE_URL, items, systems } from "./catalog";
import { CATEGORIES, codeCount, entries } from "./library";
import { figmaCount } from "./figma-library";
import { posts as codePosts, type Post } from "./blog";
import { STATS, abs, fmt } from "./seo";

export const MCP_URL = SITE_URL.replace("://", "://mcp.") + "/mcp";
const coded = (slug: string) => (systems.find((s) => s.slug === slug)?.status === "live" ? items.length : 0) + codeCount(slug);

const SUMMARY = `> Ingot UI (formerly Foundry UI) is a library of dashboard design systems for founders and developers. It has ${fmt(STATS.components)} components across ${STATS.systems} systems, ${fmt(STATS.coded)} of them with React 19 + Tailwind CSS v4 code that passed a visual check against the Figma original, ${fmt(STATS.icons)} icons, a CLI, a shadcn-compatible registry and an MCP server so AI coding agents (Claude Code, Cursor, Codex, VS Code) build with real components.`;

function systemLines() {
  return systems.map((s) => `- [${s.name}](${abs("/systems/" + s.slug)}): ${s.tagline}. ${fmt(figmaCount(s.slug))} components in Figma, ${fmt(coded(s.slug))} with React code. ${s.tier === "free" ? "Free" : "Pro"}.`).join("\n");
}

const guideLines = (posts: Post[]) => posts.map((p) => `- [${p.title}](${abs("/blog/" + p.slug)}): ${p.description}`).join("\n");

/**
 * `plans` is the line from pricingSentence(getPriceBook()) in lib/plans.ts, so prices follow the admin settings.
 * `posts` is every guide (code posts and published database posts, see allPosts() in lib/blog/db); defaults to the code posts.
 */
export function llmsTxt(plans: string, posts: Post[] = codePosts) {
  return `# Ingot UI

${SUMMARY}

Plans: ${plans} Current prices: ${abs("/pricing")}. Components may be used in unlimited personal and commercial projects; the library itself may not be resold.

## Design systems

${systemLines()}

## Use it

- [Component library](${abs("/")}): browse and search every component; each has a page with a preview, facts and, where available, code.
- [MCP server for AI agents](${abs("/mcp")}): connect Claude Code, Cursor, VS Code or Codex in one step, and the 14 tools.
- [Licence](${abs("/license")}): plain-English licence, use-case matrix by plan, full terms.
- [For founders](${abs("/for/founders")}): how a founder builds a finished-looking dashboard with an AI agent and Ingot UI.
- [Theme generator](${abs("/theme")}): free tool that turns a brand colour into a full, contrast-checked token set.
- [CLI and docs](${abs("/docs")}): \`npx ingotui init\`, \`npx ingotui add <component>\`, tokens and theming, licence.
- [Charts](${abs("/charts")}): chart components for dashboards.
- [Icons](${abs("/icons")}): ${fmt(STATS.icons)} icons, SVG and JSX, \`ingotui-icons\` package.
- [Pricing](${abs("/pricing")})

## Guides

${guideLines(posts)}

## Optional

- [Full reference for LLMs](${abs("/llms-full.txt")}): every system, category and component URL.
- [Changelog](${abs("/changelog")})
- [Sitemap](${abs("/sitemap.xml")})
`;
}

export function llmsFullTxt(posts: Post[] = codePosts) {
  const tools = ["list_design_systems", "get_design_system", "get_tokens", "search_components", "get_component", "get_component_code", "get_figma_design", "add_components", "init_project", "scaffold_screen", "get_chart", "search_icons", "audit_ui", "get_usage", "send_feedback"];
  const sections = systems.map((s) => {
    const own = entries.filter((e) => e.system === s.slug);
    const cats = CATEGORIES.map((c) => [c, own.filter((e) => e.category === c)] as const).filter(([, l]) => l.length);
    return `### ${s.name}

${s.description} Tagline: ${s.tagline}. Accent ${s.accent}, type ${s.font}. Plan: ${s.tier === "free" ? "Free" : "Pro"}. Page: ${abs("/systems/" + s.slug)}

${cats.map(([c, l]) => `#### ${c} (${l.length})\n\n${l.map((e) => `- [${e.name}](${abs("/components/" + e.slug)})${e.kind === "code" || e.qa ? " (React code)" : " (Figma)"}`).join("\n")}`).join("\n\n")}`;
  });
  return `# Ingot UI: full reference

${SUMMARY}

## How to use Ingot UI

### With an AI coding agent (MCP)

1. Create a free account and an API key at ${abs("/account")}.
2. Add the HTTP MCP server ${MCP_URL} with the header \`Authorization: Bearer YOUR_API_KEY\`. Claude Code: \`claude mcp add --transport http ingot-ui ${MCP_URL} --header "Authorization: Bearer YOUR_API_KEY"\`. Cursor: \`.cursor/mcp.json\`. VS Code: \`.vscode/mcp.json\`. Codex: \`~/.codex/config.toml\`.
3. Ask the agent to run \`init_project\` first. It writes tokens, the Tailwind theme bridge and an agent rules file.

Tools: ${tools.map((t) => "`" + t + "`").join(", ")}.

### With the CLI

\`\`\`
npx ingotui init                 # tokens + theme bridge
npx ingotui add kpi-card donut    # components + their dependencies
npx ingotui list                 # everything available
npx shadcn add ${SITE_URL}/r/kpi-card.json   # shadcn registry
\`\`\`

### Stack

React 19, Tailwind CSS v4, Base UI for interactive parts. Tokens are \`--fu-*\` CSS variables mapped to utilities such as \`bg-fu-surface\` and \`text-fu-ink\`; switch systems with \`data-system="<slug>"\`. Light mode now; dark mode is planned as the first update after launch.

## Guides

${guideLines(posts)}

## Components by system

${sections.join("\n\n")}
`;
}
