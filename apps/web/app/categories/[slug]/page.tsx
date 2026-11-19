import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { systems } from "@/lib/catalog";
import { entries, hasCode } from "@/lib/library";
import { HUBS, getHub } from "@/lib/hubs";
import { getPost, posts } from "@/lib/blog";
import { ItemCard } from "@/components/site/item-card";
import { JsonLd, ORG_ID, abs, breadcrumbLd, faqLd, fmt, isPart, pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return HUBS.map((h) => ({ slug: h.slug }));
}

const listFor = (category: string) => entries.filter((e) => e.category === category && !isPart(e.name));

export async function generateMetadata({ params }: PageProps<"/categories/[slug]">): Promise<Metadata> {
  const h = getHub((await params).slug);
  if (!h) return {};
  const list = listFor(h.category);
  return pageMeta({
    title: h.title,
    description: `${fmt(list.length)} ${h.h1.toLowerCase()} components from nine dashboard design systems, ${fmt(list.filter(hasCode).length)} with React + Tailwind code checked against Figma. ${h.intro.split(". ")[0]}.`,
    path: "/categories/" + h.slug,
  });
}

export default async function HubPage({ params }: PageProps<"/categories/[slug]">) {
  const h = getHub((await params).slug);
  if (!h) notFound();
  const list = listFor(h.category);
  const coded = list.filter(hasCode);
  // Coded first, then the rest, so the first screen shows copyable components.
  const featured = [...coded, ...list.filter((e) => !hasCode(e))].slice(0, 24);
  const bySystem = systems.map((s) => [s, list.filter((e) => e.system === s.slug).sort((a, b) => a.name.localeCompare(b.name))] as const).filter(([, l]) => l.length);
  const guide = h.guide ? getPost(h.guide) : undefined;
  const more = posts.filter((p) => p.slug !== h.guide).slice(0, 2);
  const url = "/categories/" + h.slug;

  return (
    <div className="max-w-[1400px]">
      <JsonLd
        data={[
          breadcrumbLd([["Components", "/"], ["Categories", "/categories"], [h.h1, url]]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: h.h1,
            description: h.intro,
            url: abs(url),
            publisher: { "@id": ORG_ID },
            mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: featured.map((e, i) => ({ "@type": "ListItem", position: i + 1, url: abs("/components/" + e.slug), name: e.name })) },
          },
          faqLd(h.faq),
        ]}
      />
      <nav className="flex items-center gap-1 text-[12px] text-mute" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-ink">Components</Link>
        <span aria-hidden="true">/</span>
        <Link href="/categories" className="hover:text-ink">Categories</Link>
      </nav>
      <header className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h1 className="page-title">{h.h1}</h1>
        <p className="page-sub">{fmt(list.length)} components, {fmt(coded.length)} with React code</p>
      </header>
      <p className="mt-3 max-w-2xl text-[13px] leading-snug text-mute">{h.intro}</p>
      <p className="mt-3 flex flex-wrap gap-1.5 text-[12px]">
        {h.uses.map((u) => (
          <span key={u} className="rounded-full bg-chip px-2.5 py-0.5">{u}</span>
        ))}
      </p>

      <section className="mt-6" aria-label={h.h1}>
        <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {featured.map((e) => <ItemCard key={e.slug} item={e} />)}
        </div>
        <Link href={"/?c=" + encodeURIComponent(h.category)} className="btn-line mt-6">Browse and filter all {fmt(list.length)}</Link>
      </section>

      <section className="mt-12" aria-labelledby="by-system">
        <h2 id="by-system" className="text-[13px] font-medium">Every {h.h1.toLowerCase()} component, by system</h2>
        <div className="mt-3 grid gap-x-6 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
          {bySystem.map(([s, l]) => (
            <div key={s.slug}>
              <h3 className="flex items-center gap-1.5 text-[12px] text-mute">
                <Link href={"/systems/" + s.slug} className="font-medium text-ink hover:underline">{s.name}</Link>
                <span className="tabular-nums">{l.length}</span>
              </h3>
              <ul className="mt-1">
                {l.map((e) => (
                  <li key={e.slug}><Link href={"/components/" + e.slug} className="block truncate py-0.5 text-[13px] hover:underline">{e.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl" aria-labelledby="hub-faq">
        <h2 id="hub-faq" className="text-[13px] font-medium">Questions</h2>
        <div className="mt-3 border-t border-hair">
          {h.faq.map((f) => (
            <div key={f.q} className="border-b border-hair py-3">
              <h3 className="text-[13px] font-medium">{f.q}</h3>
              <p className="mt-1 text-[13px] leading-snug text-mute">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {(guide || more.length > 0) && (
        <section className="mt-12" aria-labelledby="hub-guides">
          <h2 id="hub-guides" className="text-[13px] font-medium">Guides</h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-3">
            {[...(guide ? [guide] : []), ...more].slice(0, 3).map((p) => (
              <li key={p.slug}><Link href={"/blog/" + p.slug} className="card block h-full p-4 text-[13px] font-medium leading-snug hover:bg-tile">{p.title}</Link></li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
