"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Item } from "@/lib/catalog";
import { ItemCard } from "./item-card";
import { Icon } from "@/registry/components/icons";

type Sys = { slug: string; name: string; accent: string; live: boolean };
type Sort = "featured" | "az" | "free";

export function Browser({ items, categories, systems, initialCategory = "all", initialQuery = "" }: { items: Item[]; categories: { slug: string; name: string }[]; systems: Sys[]; initialCategory?: string; initialQuery?: string }) {
  const [q, setQ] = useState(initialQuery);
  const [cat, setCat] = useState(initialCategory);
  const [sort, setSort] = useState<Sort>("featured");
  const [sys, setSys] = useState(systems.find((s) => s.live)?.slug ?? "loopo");
  const input = useRef<HTMLInputElement>(null);

  // "/" and Cmd/Ctrl+K focus search from anywhere on the page
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input,textarea,[contenteditable]")) return;
      if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        input.current?.focus();
      }
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const matches = (i: Item, s: string) => !s || (i.name + " " + i.description + " " + i.tags.join(" ") + " " + i.category).toLowerCase().includes(s);
  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    const list = items.filter((i) => (cat === "all" || i.category === cat) && matches(i, s));
    if (sort === "az") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "free") return [...list].sort((a, b) => (a.tier === b.tier ? 0 : a.tier === "free" ? -1 : 1));
    // Featured: lead with what sells (finished blocks and charts), utilities last
    const rank = ["dashboard-blocks", "charts", "navigation", "overlays", "primitives", "foundations"];
    return [...list].sort((a, b) => rank.indexOf(a.category) - rank.indexOf(b.category));
  }, [items, q, cat, sort]);
  const count = (c: string) => items.filter((i) => (c === "all" || i.category === c) && matches(i, q.trim().toLowerCase())).length;
  const cats = [{ slug: "all", name: "All" }, ...categories].filter((c) => c.slug === "all" || items.some((i) => i.category === c.slug));
  const sysName = systems.find((s) => s.slug === sys)?.name ?? "Loopo";

  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <label className="flex h-9 items-center gap-2 rounded-full bg-chip px-3.5 focus-within:bg-white focus-within:shadow-[inset_0_0_0_1.5px_var(--color-ink)] lg:w-[340px]">
          <Icon name="search" size={15} className="text-mute" />
          <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search, e.g. revenue chart, invoice table" className="w-full bg-transparent text-[13px] outline-none placeholder:text-mute" aria-label="Search components" />
          <kbd className="rounded-[4px] bg-white px-1.5 text-[11px] text-mute">/</kbd>
        </label>
        <div className="flex items-center gap-1.5 overflow-x-auto" role="group" aria-label="Design system">
          {systems.map((s) => (
            <button
              key={s.slug}
              disabled={!s.live}
              onClick={() => setSys(s.slug)}
              data-on={sys === s.slug}
              title={s.live ? "Show previews in " + s.name : s.name + " is coming soon"}
              className="pill shrink-0 disabled:cursor-not-allowed disabled:opacity-45"
            >
              <span className="size-2.5 rounded-[3px]" style={{ background: s.accent }} />
              {s.name}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-1.5 text-[13px] text-mute lg:ml-auto">
          Sort
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="h-7 rounded-full bg-chip px-2.5 text-[13px] text-ink outline-none">
            <option value="featured">Featured</option>
            <option value="free">Free first</option>
            <option value="az">A to Z</option>
          </select>
        </label>
      </div>

      <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1" role="tablist" aria-label="Category">
        {cats.map((c) => (
          <button key={c.slug} role="tab" aria-selected={cat === c.slug} data-on={cat === c.slug} onClick={() => setCat(c.slug)} className="pill shrink-0">
            {c.name}
            <span className="text-[11px] opacity-55">{count(c.slug)}</span>
          </button>
        ))}
      </div>

      {shown.length ? (
        <div className="mt-4 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {shown.map((i) => (
            <ItemCard key={i.slug} item={i} system={sysName} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-[8px] bg-tile px-6 py-16 text-center">
          <p className="text-[14px] font-medium">Nothing matches “{q}” yet</p>
          <p className="mt-1 text-[13px] text-mute">Try a broader word such as chart, table or card. Searches are logged so we know what to build next.</p>
          <button onClick={() => { setQ(""); setCat("all"); }} className="btn-line mt-4">
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
}
