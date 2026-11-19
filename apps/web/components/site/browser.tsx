"use client";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Entry } from "@/lib/library";
const coded = (e: Entry) => e.kind === "code" || !!e.qa;
import { ItemCard } from "./item-card";
import { Icon } from "@/registry/components/icons";

type Sys = { slug: string; name: string; accent: string; live: boolean };
type Sort = "featured" | "az" | "code";
const PAGE = 48;
const AUTO_PAGES = 3;

/** Rounds of the opening mix: each round takes one item per system, best first. `name` keeps out blocks that sit in a
 *  category but are not what the round promises (a large settings form filed under Charts, a lone table row). */
const CHART = /chart|trend|graph|revenue|volume|funnel|donut|traffic|growth|breakdown|analytics|performance|heatmap|retention|usage|spend|activity|cash/i;
const KPI = /kpi|metric|stat|summary|overview/i;
// Charts and KPIs lead (three chart rounds, two KPI rounds), then one round of tables, cards and overlays.
const SHOWCASE_ROUNDS: { cats: string[]; name: RegExp }[] = [
  { cats: ["Charts"], name: CHART },
  { cats: ["KPI and stats"], name: KPI },
  { cats: ["Charts"], name: CHART },
  { cats: ["Tables and lists"], name: /table|list|log|queue|history|ledger|directory|inbox/i },
  { cats: ["Charts"], name: CHART },
  { cats: ["KPI and stats", "Cards and panels"], name: /kpi|metric|stat|summary|overview|insight|leaderboard|pipeline/i },
  { cats: ["Modals", "Drawers"], name: /modal|drawer|dialog|detail|new|create|invite|connect/i },
];
/** Shown low in the unfiltered library: Vantage is a dark-only product, so its blocks wait below the mix. */
const LOW_SYSTEMS = new Set(["vantage"]);

/**
 * The opening of the unfiltered library: for every design system, its most detailed blocks (largest
 * chart, table, KPI, card and overlay; coded ones first, part-only pieces left out), interleaved system by
 * system so the first screens show all nine looks, free and Pro together.
 */
function showcase(list: Entry[], part: RegExp): Entry[] {
  const area = (e: Entry) => (e.w ?? 0) * (e.h ?? 0);
  const score = (e: Entry) => area(e) * (coded(e) ? 1.6 : 1);
  const order = [...new Set(list.map((e) => e.system))].filter((x) => !LOW_SYSTEMS.has(x));
  const used = new Set<string>();
  const out: Entry[] = [];
  for (const round of SHOWCASE_ROUNDS) {
    for (const system of order) {
      const pool = list.filter((e) => e.system === system && round.cats.includes(e.category) && !used.has(e.slug) && !part.test(e.name) && area(e) > 0);
      const best = (xs: Entry[]) => [...xs].sort((a, b) => score(b) - score(a))[0];
      // only blocks that are what the round promises; a system without one sits that round out
      const pick = best(pool.filter((e) => round.name.test(e.name) && !/\bform\b|settings/i.test(e.name)));
      if (pick) {
        used.add(pick.slug);
        out.push(pick);
      }
    }
  }
  return out;
}

export function Browser({ entries, categories, systems, initialCategory = "all", initialQuery = "", initialSystem = "all" }: { entries: Entry[]; categories: string[]; systems: Sys[]; initialCategory?: string; initialQuery?: string; initialSystem?: string }) {
  const [q, setQ] = useState(initialQuery);
  const [cat, setCat] = useState(initialCategory);
  const [sys, setSys] = useState(initialSystem);
  const [kind, setKind] = useState<"all" | "code" | "figma">("all");
  const [plan, setPlan] = useState<"all" | "free" | "pro">("all");
  const [sort, setSort] = useState<Sort>("featured");
  const [limit, setLimit] = useState(PAGE);
  const input = useRef<HTMLInputElement>(null);
  const more = useRef<HTMLDivElement>(null);

  // the page is prerendered once (static HTML), so a filtered link (?q= ?c= ?s=) is applied after load
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    /* eslint-disable react-hooks/set-state-in-effect -- one-time sync from the URL of a static page */
    if (p.get("q")) setQ(p.get("q")!);
    if (p.get("c")) setCat(p.get("c")!);
    if (p.get("s")) setSys(p.get("s")!);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // "/" and Cmd/Ctrl+K focus search from anywhere on the page
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest("input,textarea,select,[contenteditable]")) return;
      if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        input.current?.focus();
      }
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const base = useMemo(
    () => entries.filter((e) => (sys === "all" || e.system === sys) && (plan === "all" || e.tier === plan) && (kind === "all" || (kind === "code" ? coded(e) : !coded(e))) && words.every((w) => e.text.includes(w) || e.category.toLowerCase().includes(w))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries, sys, kind, plan, q],
  );
  const shown = useMemo(() => {
    const list = base.filter((e) => cat === "all" || e.category === cat);
    if (sort === "az") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "code") return [...list].sort((a, b) => Number(coded(b)) - Number(coded(a)));
    // Featured: lead with finished blocks, utilities last
    // Featured: what sells first (charts, KPIs, tables, overlays), parts and utilities last
    const part = /^(header|body|footer) (modal|drawer|card)\b/i;
    const W: Record<string, number> = { Charts: 0, "KPI and stats": 1, "Tables and lists": 2, Modals: 3, Drawers: 4, "Cards and panels": 5, Templates: 6, Menus: 7, Popovers: 8, Editors: 9, Navigation: 10, Forms: 11, Headers: 12, Feedback: 13, Atoms: 14, Foundations: 15 };
    const rank = (e: Entry) => (part.test(e.name) ? 100 : 0) + (W[e.category] ?? 9) - (coded(e) ? 0.5 : 0);
    const ranked = [...list].sort((a, b) => rank(a) - rank(b));
    // "All" with no filters: open with the richest work of every system, mixed, instead of one system's list
    if (sys !== "all" || cat !== "all" || words.length) return ranked;
    const head = showcase(list, part);
    const taken = new Set(head.map((e) => e.slug));
    const rest = ranked.filter((e) => !taken.has(e.slug));
    return [...head, ...rest.filter((e) => !LOW_SYSTEMS.has(e.system)), ...rest.filter((e) => LOW_SYSTEMS.has(e.system))];
  }, [base, cat, sort, sys, words.length]);
  const count = (c: string) => (c === "all" ? base.length : base.filter((e) => e.category === c).length);
  const cats = ["all", ...categories.filter((c) => base.some((e) => e.category === c))];

  // load the next page when the sentinel scrolls into view, for the first few pages only;
  // after that the "Show more" button takes over so the sections below the grid stay reachable
  useEffect(() => {
    const el = more.current;
    if (!el || limit >= PAGE * AUTO_PAGES) return;
    const io = new IntersectionObserver((xs) => xs[0].isIntersecting && setLimit((l) => l + PAGE), { rootMargin: "800px" });
    io.observe(el);
    return () => io.disconnect();
  }, [shown.length, limit]);

  const reset = (fn: () => void) => () => {
    fn();
    setLimit(PAGE);
  };

  return (
    <div>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <label className="field-pill flex h-9 items-center gap-2 rounded-full bg-chip px-3.5 lg:w-[320px]">
          <Icon name="search" size={15} className="shrink-0 text-mute" />
          <input ref={input} type="search" value={q} onChange={(e) => { setQ(e.target.value); setLimit(PAGE); }} placeholder="Search, e.g. invoice table, add funds" className="min-w-0 flex-1 bg-transparent text-[13px] placeholder:text-mute" aria-label="Search components" />
          <kbd className="rounded-[4px] bg-white px-1.5 text-[11px] text-mute max-lg:hidden" aria-hidden="true">/</kbd>
        </label>
        <div className="flex flex-wrap items-center gap-1.5 lg:ml-auto lg:flex-nowrap">
          <PillSelect label="Design system" value={sys} onChange={(v) => { setSys(v); setLimit(PAGE); }} options={[["all", "All systems"], ...systems.map((x): [string, string] => [x.slug, x.name])]} />
          <PillSelect label="Plan" value={plan} onChange={(v) => { setPlan(v as typeof plan); setLimit(PAGE); }} options={[["all", "Free and Pro"], ["free", "Free"], ["pro", "Pro"]]} />
          <PillSelect label="Format" value={kind} onChange={(v) => { setKind(v as typeof kind); setLimit(PAGE); }} options={[["all", "Code and Figma"], ["code", "With code"], ["figma", "Figma only (code coming)"]]} />
          <PillSelect label="Sort" value={sort} onChange={(v) => setSort(v as Sort)} options={[["featured", "Featured"], ["code", "Code first"], ["az", "A to Z"]]} />
        </div>
      </div>

      {cats.length > 2 && (
        <Scroller label="Category" className="mt-2">
          {cats.map((c) => (
            <button key={c} aria-pressed={cat === c} data-on={cat === c} onClick={reset(() => setCat(c))} className="pill shrink-0">
              {c === "all" ? "All" : c}
              <span className="pill-count">{count(c).toLocaleString("en-US")}</span>
            </button>
          ))}
        </Scroller>
      )}

      {shown.length ? (
        <>
          <div className="mt-4 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {shown.slice(0, limit).map((e) => (
              <ItemCard key={e.slug} item={e} />
            ))}
          </div>
          {limit < shown.length && (
            <div ref={more} className="mt-6 flex justify-center">
              <button onClick={() => setLimit((l) => l + PAGE)} className="btn-line">
                Show more <span className="text-mute">{(shown.length - limit).toLocaleString("en-US")} left</span>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="mt-4 rounded-[8px] bg-tile px-6 py-16 text-center">
          <p className="text-[14px] font-medium">{q.trim() ? <>Nothing matches “{q.trim()}” yet</> : "Nothing matches these filters yet"}</p>
          <p className="mt-1 text-[13px] text-mute">Try a broader word such as chart, table or modal, or switch to all systems.</p>
          <button onClick={() => { setQ(""); setCat("all"); setSys("all"); setKind("all"); setPlan("all"); setLimit(PAGE); }} className="btn-line mt-4">
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
}

/** A native select dressed as a pill: same height as the search field, custom chevron, one focus ring. */
function PillSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: [string, string][] }) {
  const current = options.find(([v]) => v === value)?.[1] ?? options[0]?.[1];
  // The visible pill is just the current label and a chevron, so it is exactly as wide as its text.
  // The native select sits on top, invisible, so keyboard, screen readers and the OS picker still work.
  return (
    <span className="select-pill relative inline-flex items-center gap-1.5">
      <span className="truncate">{current}</span>
      <Icon name="chevron-down" size={14} strokeWidth={1.75} className="pointer-events-none shrink-0 text-mute" />
      <select value={value} onChange={(e) => onChange(e.target.value)} aria-label={label} className="absolute inset-0 h-full w-full cursor-pointer appearance-none rounded-full opacity-0">
        {options.map(([v, t]) => (
          <option key={v} value={v}>
            {t}
          </option>
        ))}
      </select>
    </span>
  );
}

/** A horizontal chip row: no visible scrollbar, edge fades only where there is more to scroll,
    and arrow buttons on wider screens. Keyboard users tab through the chips, which scroll into view. */
function Scroller({ label, className = "", children }: { label: string; className?: string; children: ReactNode }) {
  const row = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ l: false, r: false });
  useEffect(() => {
    const el = row.current;
    if (!el) return;
    const upd = () => {
      const l = el.scrollLeft > 2;
      const r = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
      setEdge((e) => (e.l === l && e.r === r ? e : { l, r }));
    };
    upd();
    el.addEventListener("scroll", upd, { passive: true });
    const ro = new ResizeObserver(upd);
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);
    const mo = new MutationObserver(upd);
    mo.observe(el, { childList: true, subtree: true, characterData: true });
    return () => {
      el.removeEventListener("scroll", upd);
      ro.disconnect();
      mo.disconnect();
    };
  }, []);
  const by = (d: number) => row.current?.scrollBy({ left: d * row.current.clientWidth * 0.7, behavior: "smooth" });
  return (
    <div className={"scroller relative " + className} data-l={edge.l} data-r={edge.r}>
      <div ref={row} className="scroll-row" role="group" aria-label={label}>
        {children}
      </div>
      {(["l", "r"] as const).map((side) => (
        <button
          key={side}
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => by(side === "l" ? -1 : 1)}
          className={"scroll-btn " + (side === "l" ? "left-0" : "right-0")}
          data-show={edge[side]}
        >
          <Icon name="chevron-right" size={14} strokeWidth={1.75} className={side === "l" ? "rotate-180" : ""} />
        </button>
      ))}
    </div>
  );
}
