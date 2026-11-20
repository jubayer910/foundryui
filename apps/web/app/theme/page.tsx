import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { CIcon } from "@/components/site/chrome-icon";
import { Icon } from "@/registry/components/icons";
import { ThemeGeneratorIsland } from "@/components/site/theme-generator/lazy";
import { systems } from "@/lib/catalog";
import { JsonLd, ORG_ID, abs, breadcrumbLd, faqLd, fmt, pageMeta, STATS } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Dashboard theme generator for React and Tailwind",
  description: "Make a dashboard design system match your brand in a minute: colour, greys, corners, font and density. WCAG AA contrast checked. Export CSS, Tailwind or JSON.",
  path: "/theme",
});

const H = "mt-10 scroll-mt-6 text-[15px] font-medium";
const P = "mt-2 text-[14px] leading-relaxed text-ink-2";
const A = "font-medium text-ink underline underline-offset-2";

const FAQ: { q: string; a: string }[] = [
  { q: "Is the theme generator free?", a: "Yes. It runs in your browser, needs no account, and the files it exports are yours to use in any project." },
  { q: "Can I use the export without Ingot UI components?", a: "Yes. The CSS file is plain CSS variables and the Tailwind v4 block gives you utilities such as bg-fu-surface, text-fu-ink and rounded-fu-md in any Tailwind v4 project. Ingot components read the same variables, so they pick the theme up with no changes." },
  { q: "How are the contrast checks done?", a: "With the WCAG 2.2 contrast formula: text needs 4.5:1 and shapes such as switches need 3:1. If white text fails on your brand colour, buttons use the nearest deeper shade that passes, and your exact colour stays in charts and tints. Muted text and accent text are darkened just enough to pass on every background they sit on." },
  { q: "How are the chart colours picked?", a: "Series 1 is your brand colour. The next four come from a colour-blind-safe set (Okabe–Ito plus a few product hues), each chosen to be the furthest from the colours already picked when seen with protanopia or deuteranopia (Machado 2009 simulation). The preview can show the whole dashboard through those simulations." },
  { q: "What does density change?", a: "It sets Tailwind v4's --spacing base: 0.25rem for comfortable, 0.225rem for compact. Every padding, gap and height utility scales from it, so the same components get about 10% tighter without any code change." },
  { q: "How do I get my AI agent to use the theme?", a: "Copy the Prompt for your agent tab into Claude Code, Cursor, Codex or VS Code with the Ingot UI MCP server connected. It calls init_project, saves your theme file after the base tokens, loads the font and adds a rule to INGOT.md so later sessions keep using it." },
  { q: "Is there a dark mode?", a: "Not yet. The Ingot systems are light mode today, and dark mode is the first planned update. The generator will get a dark theme output when the systems do." },
];

export default function ThemePage() {
  const bases = systems.map((s) => ({ slug: s.slug, name: s.name, accent: s.accent, font: s.font }));
  return (
    <div className="max-w-[1320px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["Theme generator", "/theme"]]),
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Ingot UI dashboard theme generator",
            url: abs("/theme"),
            applicationCategory: "DesignApplication",
            operatingSystem: "Any (web browser)",
            browserRequirements: "Requires JavaScript",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            publisher: { "@id": ORG_ID },
            featureList: ["Brand colour to accent scale", "WCAG AA contrast checks with ratios", "Colour-blind-aware chart palette", "Radius, font and density settings", "Export as CSS variables, Tailwind v4 @theme and DTCG JSON tokens", "Prompt for AI coding agents via MCP"],
          },
          faqLd(FAQ),
        ]}
      />
      <PageHead edit="theme" title="Dashboard theme generator" sub="Make an Ingot system look like your product, not like every other AI-built app." />
      <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-mute">
        Pick your brand colour, greys, corners, font and density. The preview below is built from real Ingot components, so what you see is what your app gets. Every text colour is checked to WCAG AA, then you export the tokens or hand them to your agent. Free, no account.
      </p>

      <div className="mt-5">
        <ThemeGeneratorIsland systems={bases} />
      </div>

      <aside className="card mt-6 flex flex-wrap items-center gap-4 p-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-chip">
          <CIcon name="plug" size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-medium">Let your agent build with this theme</p>
          <p className="text-[13px] text-mute">Connect the Ingot UI MCP server and your agent writes screens from {fmt(STATS.coded)} checked components in your colours. The free plan includes the Loopo system and 50 MCP calls a day.</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Link href="/sign-up" className="btn-ink">Create a free account</Link>
          <Link href="/mcp" className="btn-line">Connect your agent</Link>
        </div>
      </aside>

      <div className="mt-4 grid gap-10 lg:grid-cols-[180px_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-5 flex flex-col text-[13px]" aria-label="On this page">
            {[["what", "What it does"], ["use", "Use the export"], ["checks", "How it checks"], ["faq", "FAQ"]].map(([id, l]) => (
              <a key={id} href={"#" + id} className="rounded-[6px] px-2 py-1 leading-snug text-mute hover:bg-tile hover:text-ink">{l}</a>
            ))}
          </nav>
        </aside>
        <article className="min-w-0 max-w-2xl">
          <h2 id="what" className={H}>What it does</h2>
          <p className={P}>
            Most apps built with an AI agent share one look: the same grey cards, the same blue button, the same radius. Ingot UI already gives your agent {systems.length} complete dashboard systems instead of improvised markup. This tool takes one of them and makes it yours. From a brand colour and four choices it writes the whole <code className="font-fu-mono text-[12px]">--fu-*</code> token set the components read:
          </p>
          <ul className="mt-3 border-t border-hair">
            {[
              ["Accent", "an 11-step scale, the button fill and its text colour, a soft tint, and an accent text colour that passes AA on white and on the tint."],
              ["Neutrals", "page, surface, lines and text greys, neutral or tinted warm, cool or toward your brand."],
              ["Charts", "five series colours led by your brand, ordered so neighbours stay apart for colour-blind readers."],
              ["Shape and type", "five corner radii, one of four widely used sans fonts, and a spacing base for compact or comfortable layouts."],
            ].map(([h, b]) => (
              <li key={h} className="border-b border-hair py-2.5 text-[14px] leading-relaxed text-ink-2">
                <strong className="font-medium text-ink">{h}:</strong> {b}
              </li>
            ))}
          </ul>

          <h2 id="use" className={H}>How to use the export</h2>
          <ol className="mt-3 flex flex-col gap-3">
            {[
              ["CSS variables.", "Save the file as styles/ingot/<name>.css and import it after your base Ingot token file. Its values win, and it is also scoped to data-system=\"<name>\" if you want it on one area only."],
              ["Tailwind v4.", "A standalone @theme block with resolved values. Use it when you want the fu-* utilities in a Tailwind project without the Ingot theme bridge."],
              ["JSON tokens.", "W3C design tokens (DTCG) grouped into colour, radius, font, spacing and shadow, the format Figma variable import plugins such as Tokens Studio read."],
              ["Prompt for your agent.", "A ready message that tells your agent to run init_project through the Ingot MCP server, add the theme file and record it in INGOT.md."],
            ].map(([h, b], i) => (
              <li key={h} className="flex gap-3 text-[14px] leading-relaxed text-ink-2">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-chip text-[12px] font-medium text-ink tabular-nums">{i + 1}</span>
                <span><strong className="font-medium text-ink">{h}</strong> {b}</span>
              </li>
            ))}
          </ol>
          <p className={P}>
            Every file starts with a link back to your settings, and the address bar always holds a shareable link to the current theme. New to the setup? The <Link href="/docs" className={A}>docs</Link> cover installing tokens by hand, and the <Link href="/mcp" className={A}>MCP page</Link> shows how to connect Claude Code, Cursor, Codex or VS Code.
          </p>

          <h2 id="checks" className={H}>How it checks your theme</h2>
          <p className={P}>
            The contrast panel shows the real ratio for each pairing a dashboard uses: button text on the accent, accent text on white and on its tint, headings, body and muted text on the page and surface, and accent shapes on white. Text must reach 4.5:1 and shapes 3:1 (WCAG 2.2 AA). When a value would fail, the generator moves only its lightness, keeping hue and saturation, until it passes, and tells you what it changed. The chart colours can be previewed through protanopia, deuteranopia and tritanopia simulations.
          </p>
          <p className={P}>
            Read more about how token-based theming works in the guide to <Link href="/blog/dashboard-design-system-tailwind-tokens" className={A}>dashboard design system tokens</Link>, or start from a finished look on the <Link href="/systems" className={A}>systems page</Link>.
          </p>

          <h2 id="faq" className={H}>FAQ</h2>
          <div className="mt-3 border-t border-hair">
            {FAQ.map((f) => (
              <details key={f.q} className="group border-b border-hair py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[14px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[14px] font-medium">{f.q}</h3>
                  <Icon name="chevron-down" size={14} className="shrink-0 text-mute transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-10 flex flex-wrap gap-1.5">
            <Link href="/systems/loopo" className="btn-ink">Browse the free Loopo system</Link>
            <Link href="/pricing" className="btn-line">See plans</Link>
          </p>
        </article>
      </div>
    </div>
  );
}
