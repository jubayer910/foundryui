import Link from "next/link";
import { systems } from "@/lib/catalog";
import { codeCount, entries } from "@/lib/library";
import { HUBS } from "@/lib/hubs";
import { TEMPLATES } from "./templates/data";
import iconStats from "@/lib/icon-stats.json";
import { AccountLink } from "./account-link";
import { FreeMeter } from "./free-meter";
import { SignupCard } from "./signup-card";
import { RailNav, type RailCounts, type RailDrop } from "./rail-nav";
import { dropSummary } from "@/lib/drops";
import { Logo } from "./logo";
import { FollowX } from "./follow-x";

export const railSystems = systems.map((s) => ({ slug: s.slug, name: s.name, accent: s.accent, live: s.status === "live" || codeCount(s.slug) > 0 }));

/** Sidebar counts: same sources as the pages they link to (library, /templates, /categories rows, /charts, /icons). */
export const railCounts: RailCounts = {
  "/": entries.length,
  "/templates": TEMPLATES.length,
  "/categories": HUBS.length + 1,
  "/charts": entries.filter((e) => e.category === "Charts").length,
  "/icons": iconStats.line,
  "/new": dropSummary[0]?.n ?? 0,
};

/** Drop dates and sizes for the sidebar's "New drops" badge. */
export const railDrops: RailDrop[] = dropSummary;

export function Rail() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-[232px] shrink-0 flex-col border-r border-hair px-3 py-4 lg:flex">
      <div className="mb-6 flex items-center justify-between px-2">
        <Link href="/" aria-label="Ingot UI home">
          <Logo />
        </Link>
        <AccountLink />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <RailNav systems={railSystems} counts={railCounts} drops={railDrops} />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <SignupCard />
        <div className="flex items-center gap-3 border-t border-hair px-2 pt-3">
          <FollowX />
          <FreeMeter />
        </div>
        <p className="flex flex-wrap gap-x-3 px-2 text-[12px] text-mute">
          <Link href="/about" className="inline-flex min-h-6 items-center hover:text-ink">About</Link>
          <Link href="/changelog" className="inline-flex min-h-6 items-center hover:text-ink">Changelog</Link>
          <Link href="/roadmap" className="inline-flex min-h-6 items-center hover:text-ink">Roadmap</Link>
          <Link href="/support" className="inline-flex min-h-6 items-center hover:text-ink">Support</Link>
          <Link href="/license" className="inline-flex min-h-6 items-center hover:text-ink">License</Link>
          <Link href="/accessibility" className="inline-flex min-h-6 items-center hover:text-ink">Accessibility</Link>
          <Link href="/terms" className="inline-flex min-h-6 items-center hover:text-ink">Terms</Link>
          <Link href="/privacy" className="inline-flex min-h-6 items-center hover:text-ink">Privacy</Link>
          <span className="inline-flex min-h-6 items-center whitespace-nowrap">© 2026</span>
        </p>
      </div>
    </aside>
  );
}
