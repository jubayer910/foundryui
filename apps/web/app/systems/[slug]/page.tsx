import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getSystem, items, systems } from "@/lib/catalog";
import { FIGMA_LIBRARY, figmaCount } from "@/lib/figma-library";
import { ItemCard } from "@/components/site/item-card";
import { Preview } from "@/components/site/preview";

export function generateStaticParams() {
  return systems.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/systems/[slug]">): Promise<Metadata> {
  const s = getSystem((await params).slug);
  return s ? { title: s.name + " design system", description: s.description } : {};
}

export default async function SystemPage({ params }: PageProps<"/systems/[slug]">) {
  const s = getSystem((await params).slug);
  if (!s) notFound();
  const live = s.status === "live";
  const lib = Object.entries(FIGMA_LIBRARY[s.slug] ?? {}).sort((a, b) => b[1] - a[1]);
  const rows: [string, string][] = [
    ["Status", live ? "Live in code and Figma" : "Figma library ready, code in progress"],
    ["Plan", s.tier === "free" ? "Free" : "Pro"],
    ["Components in Figma", String(figmaCount(s.slug))],
    ["Components in code", String(live ? items.length : 0)],
    ["Typeface", s.font],
    ["Accent", s.accent],
  ];
  return (
    <div className="grid max-w-[1400px] gap-6 lg:grid-cols-[300px_1fr]">
      <aside className="flex flex-col gap-4 lg:sticky lg:top-5 lg:self-start">
        <div>
          <nav className="flex items-center gap-1 text-[12px] text-mute" aria-label="Breadcrumb">
            <Link href="/systems" className="hover:text-ink">Systems</Link>
            <span aria-hidden="true">/</span>
            <span>{s.name}</span>
          </nav>
          <div className="mt-3 flex items-center gap-2.5">
            <span className="size-8 rounded-[8px]" style={{ background: s.accent }} />
            <div>
              <h1 className="text-[20px] font-medium tracking-[-0.02em]">{s.name}</h1>
              <p className="text-[12px] text-mute">{s.tagline}</p>
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-snug text-mute">{s.description}</p>
        </div>
        <dl className="border-t border-hair">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-hair py-1.5 text-[13px]">
              <dt className="text-mute">{k}</dt>
              <dd className="text-right tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>
        {live ? (
          <Link href="/" className="btn-ink w-full">Browse {s.name} components</Link>
        ) : (
          <Link href="/systems/loopo" className="btn-line w-full">Start with Loopo, it’s live now</Link>
        )}
        <div className="card p-3">
          <p className="text-[13px] font-medium">Use it with your AI agent</p>
          <p className="mt-1 rounded-[6px] bg-tile p-2 font-fu-mono text-[11.5px]">{"Build with the " + s.name + " system from Foundry UI."}</p>
        </div>
      </aside>

      <div className="min-w-0">
        {live && (
          <section>
            <h2 className="text-[13px] font-medium">Foundations</h2>
            <div className="mt-3 overflow-hidden rounded-[8px] shadow-[inset_0_0_0_1px_var(--color-hair)]">
              <Preview slug="tokens" />
            </div>
          </section>
        )}

        <section className={live ? "mt-10" : ""}>
          <h2 className="text-[13px] font-medium">
            In the Figma library <span className="text-mute">{figmaCount(s.slug)}</span>
          </h2>
          <p className="mt-1 text-[13px] text-mute">Every block from the {s.name} product screens, as named components you can search in Figma’s assets panel.</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
            {lib.map(([cat, n]) => (
              <div key={cat} className="card flex items-baseline justify-between gap-2 px-3 py-2.5">
                <span className="truncate text-[13px]">{cat}</span>
                <span className="text-[13px] font-medium tabular-nums">{n}</span>
              </div>
            ))}
          </div>
        </section>

        {live &&
          categories
            .filter((c) => c.slug !== "foundations")
            .map((c) => {
              const list = items.filter((i) => i.category === c.slug);
              if (!list.length) return null;
              return (
                <section key={c.slug} className="mt-10">
                  <h2 className="text-[13px] font-medium">
                    {c.name} <span className="text-mute">{list.length}</span>
                  </h2>
                  <p className="mt-1 text-[13px] text-mute">{c.blurb}</p>
                  <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
                    {list.map((i) => (
                      <ItemCard key={i.slug} item={i} system={s.name} />
                    ))}
                  </div>
                </section>
              );
            })}

        {!live && (
          <div className="mt-10 rounded-[8px] bg-tile px-6 py-10 text-center">
            <p className="text-[14px] font-medium">{s.name} in code is next</p>
            <p className="mx-auto mt-1 max-w-md text-[13px] leading-snug text-mute">
              The components are drawn and checked in Figma. They are being converted to React and compared against the Figma originals before they appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
