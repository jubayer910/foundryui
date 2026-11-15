import Link from "next/link";
import { CATEGORIES, entries } from "@/lib/library";
import { railSystems } from "./rail";
import { Browser } from "./browser";
import { IlloTile, PostCover } from "./illo";
import { ShowcaseBand } from "./home-hero";
import { HomeHeroV2 } from "./hero/home-hero-v2";
import { ProofStrip, HOME_PROOF } from "./proof-strip";
import { posts, readingTime } from "@/lib/blog";
import { clientEntries } from "@/lib/seo-entries";
import { HUBS } from "@/lib/hubs";

const EXITS = [
  { scene: "react", h: "React code", b: "Plain TSX on Tailwind v4, one command to add." },
  { scene: "figmalayer", h: "Figma layer", b: "Paste into Figma and keep designing." },
  { scene: "agent", h: "Your AI agent", b: "Claude Code, Cursor or Codex pull it through MCP." },
];

const MORE = [
  { href: "/mcp", scene: "server", h: "Connect your AI agent", b: "One line in Claude Code or Cursor, and your agent builds with the system." },
  { href: "/systems", scene: "six", h: "Six design systems", b: "Each one complete: tokens, components, charts and screens in one look." },
  { href: "/pricing", scene: "ingots", h: "Free, Pro or Lifetime", b: "Start free with Loopo, or get the Lifetime launch deal while it lasts." },
];

/** The home page: a compact founder hero, the agent showcase (collapsed), three output cards, then the library.
 *  Other routes (/components) get the plain title row and the grid. */
export function LibraryPage({ q = "", c = "all", s = "all", intro = true, home = false }: { q?: string; c?: string; s?: string; intro?: boolean; home?: boolean }) {
  return (
    <div>
      {home ? (
        <HomeHeroV2 />
      ) : (
        <header className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h1 className="page-title">Components</h1>
          <p className="page-sub">Dashboard components that look finished, in code, Figma and for your AI agent.</p>
        </header>
      )}

      {home && <ProofStrip {...HOME_PROOF} />}
      {home && <ShowcaseBand />}

      {intro && (
        <section aria-label="Three ways to use a component" className="mt-3 grid gap-3 md:grid-cols-3">
          {EXITS.map((e) => (
            <div key={e.h} className="card flex items-center gap-3 p-2">
              <IlloTile scene={e.scene} label="" className="h-[64px] w-[92px] shrink-0" />
              <div className="min-w-0 pr-2">
                <p className="text-[13px] font-medium">{e.h}</p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-mute">{e.b}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      <div className="mt-5">
        <Browser entries={clientEntries(entries)} categories={CATEGORIES} systems={railSystems} initialQuery={q} initialCategory={c} initialSystem={s} />
      </div>
      {intro && (
        <section className="mt-16 grid gap-3 md:grid-cols-3" aria-label="More">
          {MORE.map((m) => (
            <Link key={m.href} href={m.href} className="card group flex items-center gap-3 p-2 transition-colors hover:bg-tile">
              <IlloTile scene={m.scene} label="" className="h-[76px] w-[104px] shrink-0" />
              <span className="min-w-0 pr-2">
                <span className="block text-[13px] font-medium">{m.h}</span>
                <span className="mt-1 block text-[12.5px] leading-snug text-mute">{m.b}</span>
              </span>
            </Link>
          ))}
        </section>
      )}

      {intro && (
        <nav className="mt-10" aria-labelledby="home-categories">
          <h2 id="home-categories" className="text-[13px] font-medium">Browse by category</h2>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {[...HUBS.map((h) => ({ href: "/categories/" + h.slug, name: h.h1 })), { href: "/charts", name: "Charts" }].map((l) => (
              <li key={l.href}><Link href={l.href} className="pill">{l.name}</Link></li>
            ))}
          </ul>
        </nav>
      )}

      {intro && posts.length > 0 && (
        <section className="mt-10" aria-labelledby="home-resources">
          <div className="flex items-baseline gap-2">
            <h2 id="home-resources" className="text-[13px] font-medium">Resources</h2>
            <p className="text-[13px] text-mute max-sm:hidden">Guides for founders building dashboards.</p>
            <Link href="/blog" className="ml-auto shrink-0 text-[13px] text-mute hover:text-ink">All guides</Link>
          </div>
          <ul className="mt-3 grid gap-3 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link href={"/blog/" + p.slug} className="card flex h-full flex-col p-2 transition-colors hover:bg-tile">
                  <PostCover slug={p.slug} category={p.category} title={p.title} size="small" />
                  <span className="px-2 pb-2 pt-3">
                    <span className="block text-[12px] text-mute">{p.category}, {readingTime(p)} min read</span>
                    <span className="mt-1 block text-[13px] font-medium leading-snug">{p.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
