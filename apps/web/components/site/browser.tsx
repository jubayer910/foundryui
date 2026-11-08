"use client";
import { useMemo, useState } from "react";
import type { Item } from "@/lib/catalog";
import { ItemCard } from "./item-card";
import { Icon } from "@/registry/components/icons";

export function Browser({ items, categories, initialCategory = "all", initialQuery = "" }: { items: Item[]; categories: { slug: string; name: string }[]; initialCategory?: string; initialQuery?: string }) {
  const [q, setQ] = useState(initialQuery);
  const [cat, setCat] = useState(initialCategory);
  const [tier, setTier] = useState<"all" | "free">("all");
  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return items.filter(
      (i) => (cat === "all" || i.category === cat) && (tier === "all" || i.tier === "free") && (!s || (i.name + " " + i.description + " " + i.tags.join(" ")).toLowerCase().includes(s)),
    );
  }, [items, q, cat, tier]);
  const count = (c: string) => items.filter((i) => c === "all" || i.category === c).length;
  const cats = [{ slug: "all", name: "All" }, ...categories];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
      <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <p className="eyebrow mb-3 hidden lg:block">Categories</p>
        <ul className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
          {cats.map((c) => (
            <li key={c.slug} className="shrink-0">
              <button
                onClick={() => setCat(c.slug)}
                className={"flex h-8 w-full items-center justify-between gap-4 rounded-[8px] px-2.5 text-left text-[13px] transition-colors " + (cat === c.slug ? "bg-card text-ink shadow-[inset_0_0_0_1px_var(--color-hair-2)]" : "text-ink-2 hover:bg-wash")}
              >
                {c.name}
                <span className={"rounded-[5px] px-1.5 font-fu-mono text-[10px] " + (cat === c.slug ? "bg-ink text-white" : "text-faint")}>{count(c.slug)}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <div>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex h-11 flex-1 items-center gap-2.5 rounded-[12px] bg-card px-3.5 shadow-[inset_0_0_0_1px_var(--color-hair-2)] focus-within:shadow-[inset_0_0_0_1.5px_var(--color-ink)]">
            <Icon name="search" size={16} className="text-mute" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search components, e.g. card that shows MRR" className="w-full bg-transparent text-[14px] outline-none placeholder:text-faint" />
            <kbd className="rounded-[5px] px-1.5 font-fu-mono text-[10px] text-faint shadow-[inset_0_0_0_1px_var(--color-hair-2)]">/</kbd>
          </label>
          <div className="flex h-11 items-center gap-0.5 rounded-[12px] bg-card p-1 shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
            {(["all", "free"] as const).map((t) => (
              <button key={t} onClick={() => setTier(t)} className={"h-9 rounded-[9px] px-3 text-[13px] " + (tier === t ? "bg-ink text-white" : "text-ink-2 hover:bg-wash")}>
                {t === "all" ? "All" : "Free"}
                <span className="ml-1.5 font-fu-mono text-[10px] opacity-60">{t === "all" ? items.length : items.filter((i) => i.tier === "free").length}</span>
              </button>
            ))}
          </div>
        </div>
        {shown.length ? (
          <div className="hairgrid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {shown.map((i) => (
              <ItemCard key={i.slug} item={i} index={items.indexOf(i)} />
            ))}
          </div>
        ) : (
          <p className="border border-dashed border-hair-2 p-12 text-center text-sm text-mute">Nothing matches “{q}” yet. Every search is logged so we know what to build next.</p>
        )}
      </div>
    </div>
  );
}
