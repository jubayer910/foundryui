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

export function Browser({ entries, categories, systems, initialCategory = "all", initialQuery = "", initialSystem = "all" }: { entries: Entry[]; categories: string[]; systems: Sys[]; initialCategory?: string; initialQuery?: string; initialSystem?: string }) {
  const [q, setQ] = useState(initialQuery);
  const [cat, setCat] = useState(initialCategory);
  const [sys, setSys] = useState(initialSystem);
  const [kind, setKind] = useState<"all" | "code" | "figma">("all");
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
    () => entries.filter((e) => (sys === "all" || e.system === sys) && (kind === "all" || (kind === "code" ? coded(e) : !coded(e))) && words.every((w) => e.text.includes(w) || e.category.toLowerCase().includes(w))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries, sys, kind, q],
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
    return [...list].sort((a, b) => rank(a) - rank(b));
  }, [base, cat, sort]);
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
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
        <label className="field-pill flex h-9 items-center gap-2 rounded-full bg-chip px-3.5 lg:w-[340px]">
          <Icon name="search" size={15} className="shrink-0 text-mute" />
          <input ref={input} type="search" value={q} onChange={(e) => { setQ(e.target.value); setLimit(PAGE); }} placeholder="Search, e.g. invoice table, add funds" className="min-w-0 flex-1 bg-transparent text-[13px] placeholder:text-mute" aria-label="Search components" />
          <kbd className="rounded-[4px] bg-white px-1.5 text-[11px] text-mute max-lg:hidden" aria-hidden="true">/</kbd>
        </label>
        <div className="grid grid-cols-2 gap-1.5 lg:ml-auto lg:flex lg:items-center">
          <PillSelect label="Format" value={kind} onChange={(v) => { setKind(v as typeof kind); setLimit(PAGE); }} options={[["all", "Code and Figma"], ["code", "With code"], ["figma", "Figma only (code coming)"]]} />
          <PillSelect label="Sort" value={sort} onChange={(v) => setSort(v as Sort)} options={[["featured", "Featured"], ["code", "Code first"], ["az", "A to Z"]]} />
        </div>
      </div>

      <Scroller label="Design system" className="mt-3">
        <button onClick={reset(() => setSys("all"))} data-on={sys === "all"} aria-pressed={sys === "all"} className="pill shrink-0">All systems</button>
        {systems.map((s) => (
          <button key={s.slug} onClick={reset(() => setSys(s.slug))} data-on={sys === s.slug} aria-pressed={sys === s.slug} className="pill shrink-0">
            <span className="size-2.5 rounded-[3px]" style={{ background: s.accent }} aria-hidden="true" />
            {s.name}
          </button>
        ))}
      </Scroller>

      <Scroller label="Category" className="mt-1.5">
        {cats.map((c) => (
          <button key={c} aria-pressed={cat === c} data-on={cat === c} onClick={reset(() => setCat(c))} className="pill shrink-0">
            {c === "all" ? "All" : c}
            <span className="pill-count">{count(c).toLocaleString("en-US")}</span>
          </button>
        ))}
      </Scroller>

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
          <p className="text-[14px] font-medium">Nothing matches “{q}” yet</p>
          <p className="mt-1 text-[13px] text-mute">Try a broader word such as chart, table or modal, or switch to all systems.</p>
          <button onClick={() => { setQ(""); setCat("all"); setSys("all"); setKind("all"); setLimit(PAGE); }} className="btn-line mt-4">
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
}

/** A native select dressed as a pill: same height as the search field, custom chevron, one focus ring. */
function PillSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: [string, string][] }) {
  return (
    <span className="relative inline-flex min-w-0">
      <select value={value} onChange={(e) => onChange(e.target.value)} aria-label={label} className="select-pill w-full">
        {options.map(([v, t]) => (
          <option key={v} value={v}>
            {t}
          </option>
        ))}
      </select>
      <Icon name="chevron-down" size={14} strokeWidth={1.75} className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-mute" />
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
