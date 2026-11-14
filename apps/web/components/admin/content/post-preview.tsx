"use client";
import { useMemo } from "react";
import { Icon } from "@/registry/components/icons";
import { PostCover } from "@/components/site/illo";
import { Rich } from "@/components/site/blog/rich";
import { BasicBlocks } from "@/components/site/blog/basic-blocks";
import { anchor, markdownToPost, safeInline } from "@/lib/blog/markdown";
import type { Block } from "@/lib/blog/types";

export type PreviewInput = { title: string; slug: string; category: string; scene: string; body: string; date: string | null; faq: { q: string; a: string }[] };

const fmt = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
const words = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").split(/\s+/).filter(Boolean).length;
const textOf = (b: Block) => ("x" in b ? b.x : "items" in b ? b.items.join(" ") : b.t === "table" ? [...b.head, ...b.rows.flat()].join(" ") : "");

/**
 * The article column of /blog/[slug], rendered in the browser from the editor's current values with the same
 * converter and block components the site uses. {stat} placeholders stay visible here and are filled on the site.
 */
export function PostPreview({ v }: { v: PreviewInput }) {
  const { lede, body, contents, minutes } = useMemo(() => {
    const r = markdownToPost(v.body);
    const blocks: Block[] = r.body.map((b) => (b.t === "h2" ? { ...b, id: anchor(b.x) } : b));
    const n = words([r.lede, ...blocks.map(textOf), ...v.faq.map((f) => f.q + " " + f.a)].join(" "));
    return { lede: r.lede, body: blocks, contents: blocks.flatMap((b) => (b.t === "h2" ? [{ id: b.id ?? "", x: b.x }] : [])), minutes: Math.max(1, Math.ceil(n / 230)) };
  }, [v.body, v.faq]);
  const faq = v.faq.filter((f) => f.q && f.a);
  const title = v.title || "Untitled post";
  return (
    <div className="min-w-0">
      <nav className="flex items-center gap-1 text-[12px] text-mute" aria-label="Breadcrumb">
        <span>Resources</span>
        <span aria-hidden="true">/</span>
        <span>{v.category}</span>
      </nav>
      <h1 className="mt-3 text-[30px] font-medium leading-[1.12] tracking-[-0.025em] sm:text-[34px]">{title}</h1>
      <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-mute">
        <span>By <span className="text-ink">Ingot UI</span></span>
        <span>{v.date ? fmt(v.date) : "Not published"}</span>
        <span>{minutes} min read</span>
      </p>
      <div className="mt-6">
        <PostCover slug={v.slug} category={v.category} title={title} size="hero" scene={v.scene || undefined} />
      </div>
      {lede ? (
        <p className="mt-6 text-[17px] leading-[1.6] text-ink"><Rich x={lede} /></p>
      ) : (
        <p className="mt-6 rounded-[8px] bg-tile px-3 py-2 text-[13px] text-mute">Start the body with a paragraph: it becomes this answer-first opening.</p>
      )}
      {contents.length > 0 && (
        <details className="card mt-6" open>
          <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[13px] font-medium">
            On this page
            <Icon name="plus" size={14} className="text-mute" />
          </summary>
          <ol className="border-t border-hair px-4 py-2">
            {contents.map((h, i) => <li key={i}><a href={"#" + h.id} className="block py-1 text-[13px] text-mute hover:text-ink">{h.x}</a></li>)}
          </ol>
        </details>
      )}
      <BasicBlocks blocks={body} />
      {faq.length > 0 && (
        <section className="mt-14">
          <h2 className="text-[20px] font-medium tracking-[-0.015em]">Frequently asked questions</h2>
          <div className="mt-4 border-t border-hair">
            {faq.map((f, i) => (
              <details key={i} className="group border-b border-hair">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3.5 text-[15px] font-medium">
                  <h3 className="font-medium">{safeInline(f.q)}</h3>
                  <Icon name="plus" size={14} className="shrink-0 text-mute transition-transform group-open:rotate-45" />
                </summary>
                <p className="pb-4 pr-8 text-[15px] leading-[1.65] text-ink-2"><Rich x={safeInline(f.a)} /></p>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
