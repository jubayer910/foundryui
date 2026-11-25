"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Entry } from "@/lib/library";
import { surfaceStyle } from "@/lib/system-surface";
import { CardLive } from "./card-live";
import { DROPS_SEEN_KEY } from "./rail-nav";

type Sys = { slug: string; name: string };

/**
 * One component, every system: pick a kind (Sign in page, Wallet card…) and flip through the nine systems.
 * Until the visitor touches it, the stage moves to the next system every few seconds (not with reduced motion),
 * which shows at a glance that each system got its own layout, not a recolour.
 */
export function DropStage({ items, kinds, systems }: { items: Entry[]; kinds: string[]; systems: Sys[] }) {
  const [kind, setKind] = useState(kinds[0]);
  const inKind = useMemo(() => systems.filter((s) => items.some((e) => e.name === kind && e.system === s.slug)), [items, kind, systems]);
  const [sys, setSys] = useState(inKind[0]?.slug ?? "");
  const [auto, setAuto] = useState(true);
  const item = items.find((e) => e.name === kind && e.system === sys) ?? items.find((e) => e.name === kind)!;
  const stage = useRef<HTMLDivElement>(null);
  // one stage shape per kind (the tallest system's), so the page does not jump while it plays through the systems
  const shape = useMemo(() => {
    const xs = items.filter((e) => e.name === kind);
    const tall = xs.reduce((a, e) => (((e.h ?? 300) + 64) / ((e.w ?? 400) + 64) > ((a.h ?? 300) + 64) / ((a.w ?? 400) + 64) ? e : a), xs[0]);
    return `${(tall?.w ?? 400) + 64} / ${(tall?.h ?? 300) + 64}`;
  }, [items, kind]);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setSys((cur) => {
        const i = inKind.findIndex((s) => s.slug === cur);
        return inKind[(i + 1) % inKind.length].slug;
      });
    }, 3200);
    return () => clearInterval(t);
  }, [auto, inKind]);

  const pickKind = (k: string) => { setKind(k); setAuto(false); };
  const pickSys = (s: string) => { setSys(s); setAuto(false); };
  const step = (d: number) => {
    const i = inKind.findIndex((s) => s.slug === sys);
    pickSys(inKind[(i + d + inKind.length) % inKind.length].slug);
  };

  return (
    <section aria-label="Compare across systems" className="mt-6 overflow-hidden rounded-[12px] bg-tile shadow-[inset_0_0_0_1px_var(--color-hair)]">
      <div className="flex flex-col gap-3 border-b border-hair bg-white px-4 py-3">
        <div role="tablist" aria-label="Component" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 [scrollbar-width:none]">
          {kinds.map((k) => (
            <button key={k} role="tab" aria-selected={kind === k} data-on={kind === k} onClick={() => pickKind(k)} className="pill shrink-0">
              {k.replace(/ (page|card|widget)$/i, "")}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div role="tablist" aria-label="Design system" className="-mx-1 flex min-w-0 flex-1 gap-1 overflow-x-auto px-1 [scrollbar-width:none]">
            {inKind.map((s) => (
              <button
                key={s.slug}
                role="tab"
                aria-selected={sys === s.slug}
                onClick={() => pickSys(s.slug)}
                className={"h-7 shrink-0 rounded-full px-3 text-[12.5px] transition-colors " + (sys === s.slug ? "bg-ink text-white" : "text-mute hover:bg-chip hover:text-ink")}
              >
                {s.name}
              </button>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button onClick={() => step(-1)} aria-label="Previous system" className="flex size-7 items-center justify-center rounded-full bg-chip text-mute hover:text-ink">
              <Chevron dir="left" />
            </button>
            <button onClick={() => step(1)} aria-label="Next system" className="flex size-7 items-center justify-center rounded-full bg-chip text-mute hover:text-ink">
              <Chevron dir="right" />
            </button>
          </div>
        </div>
      </div>

      {/* the stage takes the component's own shape (a wide page stays short on a phone), capped on large screens */}
      <div
        ref={stage}
        className="relative max-h-[620px] min-h-[240px] w-full p-3 sm:p-6"
        style={{ ...surfaceStyle(item.system), aspectRatio: shape }}
      >
        <CardLive
          key={item.slug}
          src={`/library-preview/${item.system}/${item.slug}.html`}
          w={item.w ?? 400}
          h={item.h ?? 300}
          thumb={item.thumb ?? ""}
          alt={`${item.name} in ${systems.find((s) => s.slug === item.system)?.name}`}
        />
        {auto && (
          <button onClick={() => setAuto(false)} className="absolute bottom-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11.5px] text-mute shadow-[0_0_0_1px_rgb(0_0_0/0.06)] backdrop-blur hover:text-ink motion-reduce:hidden">
            Playing through the systems, tap to stop
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-hair bg-white px-4 py-3">
        <p className="text-[13px]">
          <span className="font-medium">{item.name}</span> <span className="text-mute">in {systems.find((s) => s.slug === item.system)?.name}</span>
        </p>
        <span className="text-[12px] text-mute">{item.qa ? `${item.qa.score}% match with Figma` : "Figma"}</span>
        <Link href={"/components/" + item.slug} className="btn-line ml-auto">
          Open component
        </Link>
      </div>
    </section>
  );
}

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
  </svg>
);

/** Opening /new counts as having seen every drop up to the newest: the sidebar badge clears. */
export function MarkDropsSeen({ date }: { date: string }) {
  useEffect(() => {
    try { localStorage.setItem(DROPS_SEEN_KEY, date); } catch {}
    window.dispatchEvent(new Event("fu-drops-seen"));
  }, [date]);
  return null;
}
