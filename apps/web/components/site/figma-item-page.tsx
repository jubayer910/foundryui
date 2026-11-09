import Link from "next/link";
import { getSystem } from "@/lib/catalog";
import { entries, type FigmaItem } from "@/lib/library";
import { ItemCard } from "./item-card";
import { SaveButton } from "./save-button";

/** Page for a component that lives in a system's Figma library (code still in progress). */
export function FigmaItemPage({ item }: { item: FigmaItem }) {
  const sys = getSystem(item.system);
  const free = sys?.tier === "free";
  const rows: [string, string][] = [
    ["System", sys?.name ?? item.system],
    ["Category", item.category],
    ["Plan", free ? "Free" : "Pro"],
    ["Size", item.w + " × " + item.h],
    ["From screen", item.source.replace(/^\d+\.\d+ · /, "") || "Product screens"],
    ["Figma", "In the " + (sys?.name ?? "") + " Figma kit"],
    ["Code", "In progress"],
  ];
  const related = entries.filter((e) => e.slug !== item.slug && e.system === item.system && e.category === item.category).slice(0, 4);
  return (
    <div className="max-w-[1400px]">
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="flex flex-col gap-4 lg:sticky lg:top-5 lg:self-start">
          <div>
            <nav className="flex items-center gap-1 text-[12px] text-mute" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-ink">Components</Link>
              <span aria-hidden="true">/</span>
              <Link href={"/?c=" + encodeURIComponent(item.category)} className="hover:text-ink">{item.category}</Link>
            </nav>
            <h1 className="mt-2 text-[20px] font-medium tracking-[-0.02em]">{item.name}</h1>
            <p className="mt-1 text-[13px] leading-snug text-mute">
              A {item.category.toLowerCase()} component from the {sys?.name} design system, taken from a real product screen and kept in its Figma library.
            </p>
          </div>
          <dl className="border-t border-hair">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-hair py-1.5 text-[13px]">
                <dt className="shrink-0 text-mute">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-1.5">
            <SaveButton slug={item.slug} />
            <Link href={free ? "/sign-up?next=/components/" + item.slug : "/pricing?from=" + item.slug} className="btn-line w-full">
              {free ? "Get the free Loopo Figma kit" : "Unlock with Pro"}
            </Link>
          </div>
          <p className="text-[12px] leading-snug text-mute">Figma kit downloads open at launch. React code for this component is being converted and checked against the Figma original; save it to see it first when it lands.</p>
          {item.keywords && (
            <div>
              <p className="text-[12px] text-mute">What’s inside</p>
              <p className="mt-1 flex flex-wrap gap-1">
                {item.keywords.split(", ").filter(Boolean).slice(0, 10).map((k) => (
                  <span key={k} className="rounded-full bg-chip px-2 py-0.5 text-[12px]">{k}</span>
                ))}
              </p>
            </div>
          )}
        </aside>
        <div className="min-w-0">
          <div className="flex min-h-[520px] items-center justify-center rounded-[8px] bg-tile p-4 shadow-[inset_0_0_0_1px_var(--color-hair)] sm:p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.thumb} alt={item.name + " component"} width={Math.min(item.w, 960)} className="h-auto max-h-[80vh] w-auto max-w-full rounded-[6px] shadow-[0_1px_3px_rgb(0_0_0/0.08),0_8px_24px_-12px_rgb(0_0_0/0.18)]" />
          </div>
        </div>
      </div>
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
