"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PostCover } from "@/components/site/illo";

type Item = { slug: string; title: string; description: string; category: string; date: string; minutes: number; cover: string | null };

const fmt = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

/** Posts written in the admin, shown above the static guides. Renders nothing until there are any. */
export function NewPosts({ exclude }: { exclude: string[] }) {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    let alive = true;
    fetch("/api/blog/posts")
      .then((r) => (r.ok ? r.json() : { posts: [] }))
      .then((d: { posts: Item[] }) => alive && setItems((d.posts ?? []).filter((p) => !exclude.includes(p.slug))))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [exclude]);
  if (!items.length) return null;
  return (
    <section aria-label="Latest posts" className="mt-6">
      <ul className="grid gap-3 md:grid-cols-2">
        {items.map((p) => (
          <li key={p.slug}>
            <Link href={"/blog/" + p.slug} className="card flex h-full flex-col p-3 transition-colors hover:bg-tile">
              <PostCover slug={p.slug} category={p.category} title={p.title} scene={p.cover ?? undefined} />
              <div className="px-2 pb-2 pt-4">
                <p className="flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-mute">
                  <span className="rounded-full bg-chip px-2 text-ink">{p.category}</span>
                  <time dateTime={p.date}>{fmt(p.date)}</time>
                  <span>{p.minutes} min read</span>
                </p>
                <h2 className="mt-3 text-[16px] font-medium leading-snug tracking-[-0.01em]">{p.title}</h2>
                <p className="mt-1.5 text-[13px] leading-relaxed text-mute">{p.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
