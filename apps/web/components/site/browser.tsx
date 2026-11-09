"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Entry } from "@/lib/library";
import { ItemCard } from "./item-card";
import { Icon } from "@/registry/components/icons";

type Sys = { slug: string; name: string; accent: string; live: boolean };
type Sort = "featured" | "az" | "code";
const PAGE = 48;

export function Browser({ entries, categories, systems, initialCategory = "all", initialQuery = "", initialSystem = "all" }: { entries: Entry[]; categories: string[]; systems: Sys[]; initialCategory?: string; initialQuery?: string; initialSystem?: string }) {
  const [q, setQ] = useState(initialQuery);
  const [cat, setCat] = useState(initialCategory);
  const [sys, setSys] = useState(initialSystem);
  const [kind, setKind] = useState<"all" | "code" | "figma">("all");
  const [sort, setSort] = useState<Sort>("featured");
  const [limit, setLimit] = useState(PAGE);
  const input = useRef<HTMLInputElement>(null);
  const more = useRef<HTMLDivElement>(null);

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
    () => entries.filter((e) => (sys === "all" || e.system === sys) && (kind === "all" || e.kind === kind) && words.every((w) => e.text.includes(w) || e.category.toLowerCase().includes(w))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries, sys, kind, q],
  );
  const shown = useMemo(() => {
    const list = base.filter((e) => cat === "all" || e.category === cat);
    if (sort === "az") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "code") return [...list].sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "code" ? -1 : 1));
    // Featured: lead with finished blocks, utilities last
    const rank = (e: Entry) => (e.category === "Foundations" ? 3 : e.category === "Atoms" ? 2 : e.kind === "code" ? 0 : 1);
    return [...list].sort((a, b) => rank(a) - rank(b));
  }, [base, cat, sort]);
  const count = (c: string) => (c === "all" ? base.length : base.filter((e) => e.category === c).length);
  const cats = ["all", ...categories.filter((c) => base.some((e) => e.category === c))];

  // load the next page when the sentinel scrolls into view
  useEffect(() => {
    const el = more.current;
    if (!el) return;
    const io = new IntersectionObserver((xs) => xs[0].isIntersecting && setLimit((l) => l + PAGE), { rootMargin: "800px" });
    io.observe(el);
    return () => io.disconnect();
  }, [shown.length]);

  const reset = (fn: () => void) => () => {
    fn();
    setLimit(PAGE);
  };

  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <label className="flex h-9 items-center gap-2 rounded-full bg-chip px-3.5 focus-within:bg-white focus-within:shadow-[inset_0_0_0_1.5px_var(--color-ink)] lg:w-[340px]">
          <Icon name="search" size={15} className="text-mute" />
          <input ref={input} value={q} onChange={(e) => { setQ(e.target.value); setLimit(PAGE); }} placeholder="Search, e.g. invoice table, add funds" className="w-full bg-transparent text-[13px] outline-none placeholder:text-mute" aria-label="Search components" />
          <kbd className="rounded-[4px] bg-white px-1.5 text-[11px] text-mute">/</kbd>
        </label>
        <div className="flex items-center gap-1.5 overflow-x-auto" role="group" aria-label="Design system">
          <button onClick={reset(() => setSys("all"))} data-on={sys === "all"} className="pill shrink-0">All systems</button>
          {systems.map((s) => (
            <button key={s.slug} onClick={reset(() => setSys(s.slug))} data-on={sys === s.slug} className="pill shrink-0">
              <span className="size-2.5 rounded-[3px]" style={{ background: s.accent }} />
              {s.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 lg:ml-auto">
          <select value={kind} onChange={(e) => { setKind(e.target.value as typeof kind); setLimit(PAGE); }} aria-label="Format" className="h-7 rounded-full bg-chip px-2.5 text-[13px] outline-none">
            <option value="all">Code and Figma</option>
            <option value="code">Code only</option>
            <option value="figma">Figma only</option>
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} aria-label="Sort" className="h-7 rounded-full bg-chip px-2.5 text-[13px] outline-none">
            <option value="featured">Featured</option>
            <option value="code">Code first</option>
            <option value="az">A to Z</option>
          </select>
        </div>
      </div>

      <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1" role="tablist" aria-label="Category">
        {cats.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} data-on={cat === c} onClick={reset(() => setCat(c))} className="pill shrink-0">
            {c === "all" ? "All" : c}
            <span className="text-[11px] opacity-55">{count(c).toLocaleString("en-US")}</span>
          </button>
        ))}
      </div>

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
