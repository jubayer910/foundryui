"use client";
import Link from "next/link";
import type { Item } from "@/lib/catalog";
import { useLibrary } from "@/lib/local-library";
import { ItemCard } from "./item-card";

export function SavedList({ items }: { items: Item[] }) {
  const lists = { saved: useLibrary("saved"), recent: useLibrary("recent") };
  const pick = (slugs: string[]) => slugs.map((s) => items.find((i) => i.slug === s)).filter((i): i is Item => !!i);
  const block = (h: string, list: Item[], empty: string) => (
    <section className="mt-6">
      <h2 className="text-[13px] font-medium">
        {h} <span className="text-mute">{list.length}</span>
      </h2>
      {list.length ? (
        <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {list.map((i) => (
            <ItemCard key={i.slug} item={i} />
          ))}
        </div>
      ) : (
        <div className="mt-3 rounded-[8px] bg-tile px-6 py-10 text-center">
          <p className="text-[13px] text-mute">{empty}</p>
          <Link href="/" className="btn-line mt-3">
            Browse components
          </Link>
        </div>
      )}
    </section>
  );
  return (
    <>
      {block("Saved", pick(lists.saved), "Nothing saved yet. Use the bookmark on any card to build a shortlist.")}
      {block("Recently copied", pick(lists.recent), "Components you copy show up here.")}
    </>
  );
}
