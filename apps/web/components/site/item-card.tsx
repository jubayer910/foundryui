import Link from "next/link";
import type { Item } from "@/lib/catalog";
import { Preview } from "./preview";

/** Gallery tile: live preview on paper, mono index + name underneath. */
export function ItemCard({ item, index }: { item: Item; index?: number }) {
  return (
    <Link href={"/components/" + item.slug} className="group relative flex flex-col bg-paper transition-colors hover:bg-card">
      <div className="h-52 overflow-hidden">
        <Preview slug={item.slug} size="card" />
      </div>
      <div className="flex items-center justify-between gap-3 px-3.5 pb-3">
        <p className="truncate font-fu-mono text-[11px] text-ink-2">
          {index !== undefined && <span className="text-faint">#{String(index + 1).padStart(4, "0")} </span>}
          {item.name}
        </p>
        {item.tier === "pro" && <span className="shrink-0 rounded-[5px] bg-ink px-1.5 py-0.5 font-fu-mono text-[10px] text-white">PRO</span>}
      </div>
    </Link>
  );
}
