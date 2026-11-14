import Link from "next/link";
import type { Block } from "@/lib/blog";
import { entries } from "@/lib/library";
import { getSystem } from "@/lib/catalog";
import { stat } from "@/lib/blog/stats";
import { fmt } from "@/lib/seo";
import { ItemCard } from "../item-card";
import { Rich } from "./rich";
import { basicBlock } from "./basic-blocks";

const bySlug = new Map(entries.map((e) => [e.slug, e]));

function Pack({ b }: { b: Extract<Block, { t: "pack" }> }) {
  const s = getSystem(b.system);
  if (!s) return null;
  const facts: [string, string][] = [
    ["In Figma", fmt(stat("figma:" + s.slug) ?? 0)],
    ["With React code", fmt(stat("code:" + s.slug) ?? 0)],
    ["Source screens", fmt(stat("screens:" + s.slug) ?? 0)],
    ["Charts", fmt(stat("cat:" + s.slug + ":Charts") ?? 0)],
    ["Plan", s.tier === "free" ? "Free" : "Pro"],
  ];
  const ex = b.examples.map((x) => bySlug.get(x)).filter(Boolean);
  return (
    <section className="card not-prose my-8 overflow-hidden" aria-labelledby={"pack-" + s.slug}>
      <div className="flex items-center gap-3 px-5 pt-5">
        <span className="size-9 shrink-0 rounded-[8px]" style={{ background: s.accent }} aria-hidden="true" />
        <div className="min-w-0">
          <h3 id={"pack-" + s.slug} className="text-[16px] font-medium tracking-[-0.01em]">{b.rank}. {s.name}</h3>
          <p className="text-[13px] text-mute">{s.tagline}</p>
        </div>
        <Link href={"/systems/" + s.slug} className="btn-line ml-auto shrink-0 max-sm:hidden">Open {s.name}</Link>
      </div>
      <dl className="mt-4 grid grid-cols-2 border-y border-hair sm:grid-cols-5">
        {facts.map(([k, v]) => (
          <div key={k} className="border-hair px-5 py-2.5 sm:border-r sm:last:border-r-0">
            <dt className="text-[12px] text-mute">{k}</dt>
            <dd className="text-[14px] font-medium tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="px-5 py-4">
        <p className="text-[14px] leading-relaxed text-ink-2"><strong className="font-medium text-ink">Best for:</strong> <Rich x={b.bestFor} /></p>
        <ul className="mt-3 border-t border-hair">
          {b.strengths.map((x) => (
            <li key={x} className="border-b border-hair py-2 text-[14px] leading-relaxed text-ink-2"><Rich x={x} /></li>
          ))}
        </ul>
        {ex.length > 0 && (
          <p className="mt-3 flex flex-wrap items-center gap-1.5 text-[13px]">
            <span className="text-mute">Try:</span>
            {ex.map((e) => (
              <Link key={e!.slug} href={"/components/" + e!.slug} className="rounded-full bg-chip px-2.5 py-0.5 hover:bg-chip-2">{e!.name}</Link>
            ))}
          </p>
        )}
        <Link href={"/systems/" + s.slug} className="btn-line mt-4 w-full sm:hidden">Open {s.name}</Link>
      </div>
    </section>
  );
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const basic = basicBlock(b, i);
        if (basic !== undefined) return basic;
        switch (b.t) {
          case "components": {
            const list = b.slugs.map((s) => bySlug.get(s)).filter((e): e is NonNullable<typeof e> => !!e);
            if (!list.length) return null;
            return (
              <figure key={i} className="mt-6">
                <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2">{list.map((e) => <ItemCard key={e.slug} item={e} />)}</div>
                {b.caption && <figcaption className="mt-2 text-[12px] text-mute"><Rich x={b.caption} /></figcaption>}
              </figure>
            );
          }
          case "pack":
            return <Pack key={i} b={b} />;
          case "cta":
            return (
              <aside key={i} className="mt-8 flex flex-col gap-3 rounded-[8px] bg-ink p-5 text-white sm:flex-row sm:items-center">
                <div className="flex-1">
                  <p className="text-[15px] font-medium">{b.h ?? "Build your dashboard from a finished system"}</p>
                  <p className="mt-1 text-[13px] leading-snug text-white/65">{b.x ?? "Browse the library free, copy five components without an account, or connect your AI agent through MCP."}</p>
                </div>
                <Link href={b.href ?? "/"} className="btn-line shrink-0 !bg-white">{b.label ?? "Browse components"}</Link>
              </aside>
            );
        }
      })}
    </>
  );
}
