import type { ReactNode } from "react";
import Link from "next/link";
import { PageHead } from "./page-head";

export const LEGAL_UPDATED = "2026-11-15";
const H = "mt-10 scroll-mt-6 text-[15px] font-medium";
export const LP = "mt-2 text-[14px] leading-relaxed text-ink-2";

/** Shared shell for Terms, Privacy and Refund: title row, on-this-page nav, readable column. */
export function LegalPage({ title, sub, sections }: { title: string; sub: string; sections: { id: string; h: string; body: ReactNode }[] }) {
  const date = new Date(LEGAL_UPDATED + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  return (
    <div className="max-w-[1100px]">
      <PageHead title={title} sub={sub} />
      <div className="mt-6 grid gap-10 lg:grid-cols-[180px_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-5 flex flex-col text-[13px]" aria-label="On this page">
            {sections.map((s) => (
              <a key={s.id} href={"#" + s.id} className="rounded-[6px] px-2 py-1 leading-snug text-mute hover:bg-tile hover:text-ink">{s.h}</a>
            ))}
          </nav>
        </aside>
        <article className="min-w-0 max-w-2xl">
          <p className="text-[13px] text-mute">Last updated {date}</p>
          {sections.map((s, i) => (
            <section key={s.id}>
              <h2 id={s.id} className={H + (i === 0 ? " !mt-6" : "")}>{s.h}</h2>
              {s.body}
            </section>
          ))}
          <p className="mt-10 border-t border-hair pt-5 text-[13px] text-mute">
            Questions about this page? Write to <a href="mailto:support@ingotui.com" className="font-medium text-ink underline underline-offset-2">support@ingotui.com</a>. See also the <Link href="/terms" className="underline underline-offset-2">Terms</Link>, <Link href="/privacy" className="underline underline-offset-2">Privacy Policy</Link> and <Link href="/refund" className="underline underline-offset-2">Refund Policy</Link>.
          </p>
        </article>
      </div>
    </div>
  );
}

export const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="mt-3 border-t border-hair">
    {items.map((x, i) => (
      <li key={i} className="border-b border-hair py-2.5 text-[14px] leading-relaxed text-ink-2">{x}</li>
    ))}
  </ul>
);
