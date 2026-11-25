import type { Metadata } from "next";
import { PageHead } from "@/components/site/page-head";
import { ItemCard } from "@/components/site/item-card";
import { DropStage, MarkDropsSeen } from "@/components/site/drop-stage";
import { drops, dropEntries, dropKinds } from "@/lib/drops";
import { systems } from "@/lib/catalog";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "New drops: the latest components",
  description: "The newest Ingot UI components, drop by drop: sign in, sign up and password reset pages, wallet, credit card and payment method widgets, in all nine design systems.",
  path: "/new",
});

const fmt = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Static. Each drop: a one-component-across-nine-systems stage, then every item it added. */
export default function NewDrops() {
  const sys = systems.map((s) => ({ slug: s.slug, name: s.name }));
  return (
    <div className="max-w-[1200px]">
      <JsonLd data={[breadcrumbLd([["Ingot UI", "/"], ["New drops", "/new"]])]} />
      <MarkDropsSeen date={drops[0]?.date ?? ""} />
      <PageHead title="New drops" sub="What just landed in the library, drop by drop." />

      {drops.map((d, i) => {
        const items = dropEntries(d);
        const kinds = dropKinds(d);
        const inSystems = new Set(items.map((e) => e.system)).size;
        const coded = items.filter((e) => e.qa).length;
        return (
          <article key={d.id} className={i ? "mt-16 border-t border-hair pt-10" : "mt-6"} aria-labelledby={"drop-" + d.id}>
            <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
              <div className="min-w-0 max-w-2xl">
                <p className="eyebrow">
                  <time dateTime={d.date}>{fmt(d.date)}</time>
                  {i === 0 && <span className="ml-2 rounded-full bg-[#fde7f1] px-1.5 py-px text-[11px] font-medium normal-case tracking-normal text-[#b0105f]">Latest</span>}
                </p>
                <h2 id={"drop-" + d.id} className="mt-1 text-[22px] font-medium tracking-[-0.01em]">{d.title}</h2>
                <p className="mt-1.5 text-[13.5px] leading-snug text-mute">{d.blurb}</p>
              </div>
              <dl className="flex gap-6 text-[13px]">
                <div>
                  <dt className="text-mute">Components</dt>
                  <dd className="text-[20px] font-medium tabular-nums">{items.length}</dd>
                </div>
                <div>
                  <dt className="text-mute">Systems</dt>
                  <dd className="text-[20px] font-medium tabular-nums">{inSystems}</dd>
                </div>
                <div>
                  <dt className="text-mute">With React code</dt>
                  <dd className="text-[20px] font-medium tabular-nums">{coded}</dd>
                </div>
              </dl>
            </div>

            <DropStage items={items} kinds={kinds} systems={sys} />

            <h3 className="mt-10 text-[15px] font-medium">Everything in this drop</h3>
            {kinds.map((k) => (
              <section key={k} className="mt-5" aria-label={k}>
                <p className="eyebrow mb-2">{k}</p>
                <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {items.filter((e) => e.name === k).map((e) => (
                    <ItemCard key={e.slug} item={e} />
                  ))}
                </div>
              </section>
            ))}
          </article>
        );
      })}
    </div>
  );
}
