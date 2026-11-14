import type { ReactNode } from "react";
import type { Block } from "@/lib/blog/types";
import { Rich } from "./rich";

const P = "mt-4 text-[15px] leading-[1.7] text-ink-2";

/**
 * The text blocks of a post (everything markdown can express). No catalogue imports, so the admin editor's
 * live preview renders posts with exactly the markup the site uses. Returns undefined for the other block types.
 */
export function basicBlock(b: Block, i: number): ReactNode | undefined {
  switch (b.t) {
    case "p":
      return <p key={i} className={P}><Rich x={b.x} /></p>;
    case "h2":
      return <h2 key={i} id={b.id} className="mt-12 scroll-mt-6 text-[20px] font-medium leading-tight tracking-[-0.015em]">{b.x}</h2>;
    case "h3":
      return <h3 key={i} className="mt-8 text-[16px] font-medium tracking-[-0.01em]">{b.x}</h3>;
    case "ul":
      return (
        <ul key={i} className="mt-4 border-t border-hair">
          {b.items.map((x) => <li key={x} className="border-b border-hair py-2.5 text-[15px] leading-[1.6] text-ink-2"><Rich x={x} /></li>)}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-4 flex flex-col gap-3">
          {b.items.map((x, n) => (
            <li key={x} className="flex gap-3 text-[15px] leading-[1.6] text-ink-2">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-chip text-[12px] font-medium text-ink tabular-nums">{n + 1}</span>
              <span><Rich x={x} /></span>
            </li>
          ))}
        </ol>
      );
    case "takeaway":
      return (
        <aside key={i} className="mt-6 rounded-[8px] bg-tile px-5 py-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.04em] text-mute">Key takeaway</p>
          <p className="mt-1 text-[15px] font-medium leading-snug"><Rich x={b.x} /></p>
        </aside>
      );
    case "table":
      return (
        <div key={i} className="card mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-[13px]">
            {b.caption && <caption className="px-4 pt-3 text-left text-[12px] text-mute">{b.caption}</caption>}
            <thead>
              <tr>{b.head.map((h) => <th key={h} scope="col" className="px-4 py-2.5 font-medium">{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, ri) => (
                <tr key={ri} className="border-t border-hair align-top">
                  {r.map((c, ci) => (ci === 0 ? <th key={ci} scope="row" className="px-4 py-2.5 font-medium"><Rich x={c} /></th> : <td key={ci} className="px-4 py-2.5 text-ink-2"><Rich x={c} /></td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "code":
      return (
        <figure key={i} className="mt-5">
          {b.label && <figcaption className="mb-1.5 text-[12px] text-mute">{b.label}</figcaption>}
          <pre className="overflow-x-auto rounded-[8px] bg-tile p-4 font-fu-mono text-[12.5px] leading-relaxed"><code>{b.x}</code></pre>
        </figure>
      );
  }
  return undefined;
}

/** Text blocks only (used by the editor preview). */
export function BasicBlocks({ blocks }: { blocks: Block[] }) {
  return <>{blocks.map((b, i) => basicBlock(b, i) ?? null)}</>;
}
