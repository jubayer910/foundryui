"use client";
import { useMemo, useState } from "react";
import type { Item } from "@/lib/catalog";
import { ItemCard } from "./item-card";
import { Icon } from "@/registry/components/icons";

export function Browser({ items, categories, initialCategory = "all" }: { items: Item[]; categories: { slug: string; name: string }[]; initialCategory?: string }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(initialCategory);
  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return items.filter((i) => (cat === "all" || i.category === cat) && (!s || (i.name + " " + i.description + " " + i.tags.join(" ")).toLowerCase().includes(s)));
  }, [items, q, cat]);
  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="flex h-10 flex-1 items-center gap-2 rounded-full border border-fu-line-strong bg-fu-surface px-4 focus-within:border-fu-accent sm:max-w-sm">
          <Icon name="search" size={16} className="text-fu-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search: “card that shows MRR”, table, donut…" className="w-full bg-transparent text-sm outline-none placeholder:text-fu-faint" />
        </label>
        <div className="flex gap-1 overflow-x-auto">
          {[{ slug: "all", name: "All" }, ...categories].map((c) => (
            <button key={c.slug} onClick={() => setCat(c.slug)} className={"h-8 shrink-0 rounded-full px-3 text-[13px] font-medium transition-colors " + (cat === c.slug ? "bg-fu-ink text-white" : "text-fu-muted hover:bg-fu-hover hover:text-fu-ink")}>
              {c.name}
            </button>
          ))}
        </div>
      </div>
      <p className="mb-4 text-[13px] text-fu-muted">{shown.length} components</p>
      {shown.length ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((i) => (
            <ItemCard key={i.slug} item={i} />
          ))}
        </div>
      ) : (
        <p className="rounded-fu-lg border border-dashed border-fu-line-strong p-10 text-center text-sm text-fu-muted">Nothing matches “{q}” yet. We log every search to decide what to build next.</p>
      )}
    </div>
  );
}
