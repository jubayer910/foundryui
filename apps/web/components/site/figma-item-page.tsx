import Link from "next/link";
import { getSystem } from "@/lib/catalog";
import { entries, figmaQA, type FigmaItem } from "@/lib/library";
import { FigmaCodePanel } from "./figma-code-panel";
import { ItemCard } from "./item-card";
import { SaveButton } from "./save-button";
import { categoryHref } from "@/lib/hubs";
import { LivePreview } from "./live-preview";
import { QaBadge } from "./qa-badge";
import { A11yNotes } from "./a11y-notes";

/** Page for a component that lives in a system's Figma library (code still in progress). */
export function FigmaItemPage({ item }: { item: FigmaItem }) {
  const sys = getSystem(item.system);
  const free = sys?.tier === "free";
  const qa = figmaQA(item.slug);
  const rows: [string, string][] = [
    ["System", sys?.name ?? item.system],
    ["Category", item.category],
    ["Plan", free ? "Free" : "Pro"],
    ["Size", item.w + " × " + item.h],
    ["From screen", item.source.replace(/^\d+\.\d+ · /, "") || "Product screens"],
    ["Figma", "In the " + (sys?.name ?? "") + " Figma kit"],
    ["Code", qa ? "React (TSX), checked" : "In progress"],
  ];
  // layer text worth showing: words, not axis ticks, amounts or month labels
  const MONTH = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*$/i;
  const inside = (item.keywords ?? "").split(", ").filter((k) => /[a-z]{3}/i.test(k) && !MONTH.test(k.trim())).slice(0, 10);
  const related = entries.filter((e) => e.slug !== item.slug && e.system === item.system && e.category === item.category).slice(0, 4);
  return (
    <div className="max-w-[1400px]">
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="flex flex-col gap-4 lg:sticky lg:top-5 lg:self-start">
          <div>
            <nav className="flex items-center gap-1 text-[12px] text-mute" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-ink">Components</Link>
              <span aria-hidden="true">/</span>
              <Link href={"/systems/" + item.system} className="hover:text-ink">{sys?.name ?? item.system}</Link>
              <span aria-hidden="true">/</span>
              {categoryHref(item.category) ? <Link href={categoryHref(item.category)!} className="hover:text-ink">{item.category}</Link> : <span>{item.category}</span>}
            </nav>
            <h1 className="mt-2 text-[20px] font-medium tracking-[-0.02em]">{item.name}</h1>
            <p className="mt-1 text-[13px] leading-snug text-mute">
              A {item.category.toLowerCase()} component from the {sys?.name} design system, taken from a real product screen and kept in its Figma library.
            </p>
            <QaBadge slug={item.slug} className="mt-3" />
          </div>
          <dl className="border-t border-hair">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-hair py-1.5 text-[13px]">
                <dt className="shrink-0 text-mute">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
          {qa && <FigmaCodePanel slug={item.slug} codeUrl={`/library-code/${item.system}/${item.slug}.txt`} score={qa.score} />}
          <div className="flex flex-col gap-1.5">
            <SaveButton slug={item.slug} quiet={!!qa} />
            <Link href={free ? "/sign-up?next=/components/" + item.slug : "/pricing?from=" + item.slug} className="btn-line w-full">
              {free ? "Get the free Loopo Figma kit" : "Unlock with Pro"}
            </Link>
          </div>
          <p className="text-[12px] leading-snug text-mute">
            {qa ? "Figma kit downloads open at launch." : "Figma kit downloads open at launch. React code for this component is being converted and checked against the Figma original; save it to see it first when it lands."}
          </p>
          {inside.length > 0 && (
            <div>
              <p className="text-[12px] text-mute">What’s inside</p>
              <p className="mt-1 flex flex-wrap gap-1">
                {inside.map((k) => (
                  <span key={k} className="rounded-full bg-chip px-2 py-0.5 text-[12px]">{k}</span>
                ))}
              </p>
            </div>
          )}
        </aside>
        <div className="min-w-0">
          <div className="flex min-h-[520px] items-center justify-center rounded-[8px] bg-tile p-4 shadow-[inset_0_0_0_1px_var(--color-hair)] sm:p-8">
            {qa ? (
              <LivePreview src={`/library-preview/${item.system}/${item.slug}.html`} w={item.w} h={item.h} thumb={item.thumb} alt={item.name + ", rendered from its React code"} />
            ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.thumb} alt={item.name + ", " + item.category.toLowerCase() + " component from the " + (sys?.name ?? item.system) + " design system"} width={Math.min(item.w, 960)} className="h-auto max-h-[80vh] w-auto max-w-full rounded-[6px] shadow-[0_1px_3px_rgb(0_0_0/0.08),0_8px_24px_-12px_rgb(0_0_0/0.18)]" />
            )}
          </div>
        </div>
      </div>
      <A11yNotes slug={item.slug} category={item.category} handBuilt={false} />
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-[13px] font-medium">More {item.category.toLowerCase()} in {sys?.name}</h2>
          <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((r) => (
              <ItemCard key={r.slug} item={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
