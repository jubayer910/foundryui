import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/catalog";
import { PageHead } from "@/components/site/page-head";

export const metadata: Metadata = { title: "Docs", description: "Install Foundry UI, wire the tokens, theme a system and use it with Figma and AI agents." };

const H = "mt-10 text-[14px] font-medium scroll-mt-6";
const P = "mt-2 text-[13px] leading-relaxed text-mute";
const C = "card mt-3 overflow-x-auto p-3 font-fu-mono text-[12px] leading-relaxed";

export default function DocsPage() {
  return (
    <div className="max-w-[1100px]">
      <PageHead title="CLI and docs" sub="Install, theme and use Foundry UI in your project." />
      <div className="mt-6 grid gap-10 lg:grid-cols-[180px_1fr]">
      <aside className="hidden lg:block">
        <nav className="sticky top-5 flex flex-col text-[13px]" aria-label="On this page">
          {[["install", "Install"], ["tokens", "Tokens & theming"], ["figma", "Figma"], ["agents", "AI agents"], ["license", "License"]].map(([id, l]) => (
            <a key={id} href={"#" + id} className="flex h-7 items-center rounded-[6px] px-2 text-mute hover:bg-tile hover:text-ink">{l}</a>
          ))}
        </nav>
      </aside>
      <article className="min-w-0 max-w-2xl">
        <p className={P + " !mt-0"}>Foundry UI components are plain React 19 + Tailwind CSS v4 files you own. Interactive parts use Base UI for accessibility.</p>

        <h2 id="install" className={H}>Install</h2>
        <p className={P}>In a Next.js, Vite or Remix project with Tailwind v4:</p>
        <pre className={C}>{"npx foundryui init\nnpx foundryui add button kpi-card capsule-bars"}</pre>
        <p className={P}>Prefer shadcn? Every free component is a shadcn registry item:</p>
        <pre className={C}>{"npx shadcn add " + SITE_URL + "/r/button.json"}</pre>

        <h2 id="tokens" className={H}>Tokens &amp; theming</h2>
        <p className={P}>Each system is a set of <code className="font-fu-mono text-xs">--fu-*</code> CSS variables. The theme bridge maps them to Tailwind utilities like <code className="font-fu-mono text-xs">bg-fu-surface</code> and <code className="font-fu-mono text-xs">text-fu-ink</code>. Import both in your global CSS:</p>
        <pre className={C}>{'@import "tailwindcss";\n@import "./styles/foundry/theme.css";\n@import "./styles/foundry/loopo.css";'}</pre>
        <p className={P}>Switch systems by swapping the token file, or scope one per area with <code className="font-fu-mono text-xs">data-system=&quot;loopo&quot;</code>. Light mode ships at launch; dark mode is the first update.</p>

        <h2 id="figma" className={H}>Figma</h2>
        <p className={P}>On any component page, “Copy to Figma” puts the component on your clipboard (charts and icons as editable vectors). Pro plans include the full Figma kit for each system with variables, components and screens.</p>

        <h2 id="agents" className={H}>AI agents</h2>
        <p className={P}>
          Connect the MCP server (see <Link href="/mcp" className="font-medium text-ink underline underline-offset-2">MCP &amp; CLI</Link>). Ask your agent to run <code className="font-fu-mono text-xs">init_project</code> first: it writes the tokens and a rules file so later sessions keep using the system.
        </p>

        <h2 id="license" className={H}>License</h2>
        <p className={P}>Use components in unlimited personal and commercial projects. Free components are free forever. Pro components need an active Pro or Lifetime plan when you copy them; what you shipped stays yours. You may not resell or redistribute the library itself as a UI kit.</p>
      </article>
      </div>
    </div>
  );
}
