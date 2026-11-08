import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/catalog";

export const metadata: Metadata = { title: "Docs", description: "Install Foundry UI, wire the tokens, theme a system and use it with Figma and AI agents." };

const H = "mt-12 text-lg font-medium tracking-[-0.02em] text-fu-ink scroll-mt-20";
const P = "mt-2 text-sm leading-relaxed text-fu-muted";
const C = "mt-3 overflow-x-auto rounded-fu-lg border border-hair bg-fu-surface p-4 font-fu-mono text-xs leading-relaxed text-fu-body";

export default function DocsPage() {
  return (
    <div className="mx-auto grid max-w-[1180px] gap-10 px-4 pt-12 sm:px-6 lg:grid-cols-[200px_1fr]">
      <aside className="hidden lg:block">
        <nav className="sticky top-24 flex flex-col gap-1 text-[13px]">
          {[["install", "Install"], ["tokens", "Tokens & theming"], ["figma", "Figma"], ["agents", "AI agents"], ["license", "License"]].map(([id, l]) => (
            <a key={id} href={"#" + id} className="rounded-fu-xs px-2 py-1 text-fu-muted hover:bg-fu-hover hover:text-fu-ink">{l}</a>
          ))}
        </nav>
      </aside>
      <article className="max-w-2xl">
        <h1 className="display text-[40px] sm:text-[52px] text-ink">Docs</h1>
        <p className={P}>Foundry UI components are plain React 19 + Tailwind CSS v4 files you own. Interactive parts use Base UI for accessibility.</p>

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
          Connect the MCP server (see <Link href="/mcp" className="font-medium text-fu-ink underline underline-offset-2">MCP &amp; CLI</Link>). Ask your agent to run <code className="font-fu-mono text-xs">init_project</code> first: it writes the tokens and a rules file so later sessions keep using the system.
        </p>

        <h2 id="license" className={H}>License</h2>
        <p className={P}>Use components in unlimited personal and commercial projects. Free components are free forever. Pro components need an active Pro or Lifetime plan when you copy them; what you shipped stays yours. You may not resell or redistribute the library itself as a UI kit.</p>
      </article>
    </div>
  );
}
