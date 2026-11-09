import Link from "next/link";
import { Suspense } from "react";
import { systems } from "@/lib/catalog";
import { AccountLink } from "./account-link";
import { FreeMeter } from "./free-meter";
import { RailNav } from "./rail-nav";
import { Logo } from "./logo";

export const railSystems = systems.map((s) => ({ slug: s.slug, name: s.name, accent: s.accent, live: s.status === "live" }));

export function Rail() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-[232px] shrink-0 flex-col border-r border-hair px-3 py-4 lg:flex">
      <div className="mb-6 flex items-center justify-between px-2">
        <Link href="/" aria-label="Foundry UI home">
          <Logo />
        </Link>
        <Suspense fallback={<span className="h-7 w-16" />}>
          <AccountLink />
        </Suspense>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <RailNav systems={railSystems} />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <FreeMeter />
        <p className="flex gap-3 px-2 text-[12px] text-faint">
          <Link href="/changelog" className="hover:text-ink">Changelog</Link>
          <Link href="/docs#license" className="hover:text-ink">License</Link>
          <span>© 2026</span>
        </p>
      </div>
    </aside>
  );
}
