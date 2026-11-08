import Link from "next/link";
import type { Item } from "@/lib/catalog";
import { Preview } from "./preview";

export function ItemCard({ item }: { item: Item }) {
  return (
    <Link href={"/components/" + item.slug} className="group flex flex-col overflow-hidden rounded-fu-xl border border-fu-line bg-fu-surface shadow-fu-card transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-fu-overlay">
      <div className="h-48 border-b border-fu-line bg-fu-surface">
        <Preview slug={item.slug} size="card" />
      </div>
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="text-sm font-medium tracking-[-0.01em] text-fu-ink">{item.name}</p>
          <p className="mt-0.5 line-clamp-2 text-[13px] leading-relaxed text-fu-muted">{item.description}</p>
        </div>
        <span className={"shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium " + (item.tier === "free" ? "bg-fu-positive-soft text-fu-positive" : "bg-fu-accent-soft text-fu-accent")}>{item.tier === "free" ? "Free" : "Pro"}</span>
      </div>
    </Link>
  );
}
