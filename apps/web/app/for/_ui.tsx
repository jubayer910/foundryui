import Link from "next/link";
import type { ReactNode } from "react";
import { Rich } from "@/components/site/blog/rich";

/** Shared, server-only building blocks for the /for and /compare landing pages. */

export const H2 = "page-title scroll-mt-6";
export const P = "mt-2 text-[14px] leading-relaxed text-ink-2";

export function Crumbs({ trail }: { trail: [string, string][] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] text-mute">
      <ol className="flex flex-wrap items-center gap-1">
        {trail.map(([name, href], i) => (
          <li key={href} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === trail.length - 1 ? <span aria-current="page" className="text-ink">{name}</span> : <Link href={href} className="hover:text-ink">{name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Section({ id, title, sub, children, className = "mt-14" }: { id: string; title: string; sub?: string; children: ReactNode; className?: string }) {
  return (
    <section aria-labelledby={id} className={className}>
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h2 id={id} className={H2}>{title}</h2>
        {sub && <p className="page-sub">{sub}</p>}
      </div>
      {children}
    </section>
  );
}

export function Faq({ id = "faq", title = "Questions", faq }: { id?: string; title?: string; faq: { q: string; a: string }[] }) {
  return (
    <Section id={id} title={title}>
      <div className="mt-3 max-w-3xl border-t border-hair">
        {faq.map((f) => (
          <div key={f.q} className="border-b border-hair py-3">
            <h3 className="text-[13px] font-medium">{f.q}</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-mute"><Rich x={f.a} /></p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** Grey number chip + bold lead + body, as used on /about. */
export function Steps({ steps }: { steps: [string, ReactNode][] }) {
  return (
    <ol className="mt-3 flex flex-col gap-3">
      {steps.map(([h, b], i) => (
        <li key={h} className="flex gap-3 text-[14px] leading-relaxed text-ink-2">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-chip text-[12px] font-medium text-ink tabular-nums">{i + 1}</span>
          <span><strong className="font-medium text-ink">{h}</strong> {b}</span>
        </li>
      ))}
    </ol>
  );
}

/** A row of card links ("Guides", "Comparisons"). */
export function LinkCards({ links }: { links: { href: string; title: string; note?: string }[] }) {
  return (
    <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="card block h-full p-4 transition-colors hover:bg-tile">
            <span className="block text-[13px] font-medium leading-snug">{l.title}</span>
            {l.note && <span className="mt-1 block text-[12.5px] leading-snug text-mute">{l.note}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Hairline list of text pills for internal links. */
export function PillLinks({ links, label }: { links: { href: string; label: string }[]; label: string }) {
  return (
    <ul aria-label={label} className="mt-3 flex flex-wrap gap-1.5">
      {links.map((l) => (
        <li key={l.href}><Link href={l.href} className="pill">{l.label}</Link></li>
      ))}
    </ul>
  );
}
