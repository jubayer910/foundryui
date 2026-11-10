import Link from "next/link";
import { Fragment, type ReactNode } from "react";

const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;

/** Renders the inline markup used in post copy: [text](href), **bold**, `code`. */
export function Rich({ x }: { x: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of x.matchAll(TOKEN)) {
    if (m.index! > last) out.push(x.slice(last, m.index));
    const k = i++;
    if (m[1]) {
      const href = m[2];
      out.push(
        href.startsWith("/") || href.startsWith("#") ? (
          <Link key={k} href={href} className="font-medium text-ink underline decoration-hair-2 underline-offset-[3px] hover:decoration-ink">{m[1]}</Link>
        ) : (
          <a key={k} href={href} rel="noopener" target="_blank" className="font-medium text-ink underline decoration-hair-2 underline-offset-[3px] hover:decoration-ink">{m[1]}</a>
        ),
      );
    } else if (m[3]) out.push(<strong key={k} className="font-medium text-ink">{m[3]}</strong>);
    else if (m[4]) out.push(<code key={k} className="rounded-[4px] bg-tile px-1 py-px font-fu-mono text-[0.88em] text-ink">{m[4]}</code>);
    last = m.index! + m[0].length;
  }
  if (last < x.length) out.push(x.slice(last));
  return <Fragment>{out}</Fragment>;
}
