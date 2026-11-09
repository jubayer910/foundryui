import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getSystem, items, systems } from "@/lib/catalog";
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
  return (
    <div className="max-w-[1400px]">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-[13px] font-medium" style={{ color: s.accent }}>{s.tagline}</p>
          <h1 className="mt-1 page-title text-fu-ink">{s.name}</h1>
          <p className="mt-3 text-sm leading-relaxed text-fu-muted">{s.description}</p>
        </div>
        <div className="rounded-fu-lg border border-hair bg-fu-surface p-4 text-[13px]">
          <p className="text-fu-muted">Use with your agent</p>
          <code className="mt-1 block font-fu-mono text-xs text-fu-ink">{"“Build with the " + s.name + " system”"}</code>
        </div>
      </div>

      {live ? (
        <>
          <section className="mt-10">
            <h2 className="mb-3 text-lg font-medium tracking-[-0.02em] text-fu-ink">Foundations</h2>
            <div className="overflow-hidden rounded-[14px] border border-hair">
              <Preview slug="tokens" />
            </div>
          </section>
          {categories
            .filter((c) => c.slug !== "foundations")
            .map((c) => (
              <section key={c.slug} className="mt-12">
                <h2 className="text-lg font-medium tracking-[-0.02em] text-fu-ink">{c.name}</h2>
                <p className="mb-4 mt-1 text-[13px] text-fu-muted">{c.blurb}</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items
                    .filter((i) => i.category === c.slug)
                    .map((i) => (
                      <ItemCard key={i.slug} item={i} system={s.name} />
                    ))}
                </div>
              </section>
            ))}
        </>
      ) : (
        <div className="mt-10 rounded-[14px] border border-dashed border-hair-2 bg-fu-surface p-10 text-center">
          <p className="text-base font-medium text-fu-ink">{s.name} is being built</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-fu-muted">
            Tokens, components and screens are being extracted from the {s.name} source design. Every Loopo component will be available in {s.name} through the same token system.
          </p>
        </div>
      )}
    </div>
  );
}
