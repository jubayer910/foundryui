import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPARISONS, getComparison, type Comparison } from "@/lib/compare";
import { fill } from "@/lib/blog/stats";
import { fmtDate, getPost } from "@/lib/blog";
import { Rich } from "@/components/site/blog/rich";
import { JsonLd, ORG_ID, abs, breadcrumbLd, faqLd, pageMeta, plain } from "@/lib/seo";
import { Crumbs, LinkCards, P, PillLinks, Section } from "@/app/for/_ui";
import { BrandTile, VsChip } from "@/components/site/compare-brand";

export const dynamicParams = false;
export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/compare/[slug]">): Promise<Metadata> {
  const c = getComparison((await params).slug);
  if (!c) return {};
  return pageMeta({ title: c.title, absoluteTitle: true, description: fill(c.description), path: "/compare/" + c.slug, type: "article", published: c.checked });
}

/** Superscript source links: [1] [2] → #source-1 */
function Refs({ src }: { src?: number[] }) {
  if (!src?.length) return null;
  return (
    <sup className="ml-0.5 whitespace-nowrap text-[10.5px]">
      {src.map((n) => (
        <a key={n} href={"#source-" + n} className="ml-0.5 text-mute underline-offset-2 hover:text-ink hover:underline" aria-label={"Source " + n}>[{n}]</a>
      ))}
    </sup>
  );
}

const R = ({ x }: { x: string }) => <Rich x={fill(x)} />;

export default async function ComparePage({ params }: PageProps<"/compare/[slug]">) {
  const c: Comparison | undefined = getComparison((await params).slug);
  if (!c) notFound();
  const url = "/compare/" + c.slug;
  const other = c.other.name;
  const guides = c.guides.map((s) => getPost(s)).filter((p) => !!p).map((p) => ({ href: "/blog/" + p.slug, title: p.title }));
  const more = COMPARISONS.filter((x) => x.slug !== c.slug);

  return (
    <div className="max-w-[1100px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["Compare", "/compare"], [c.h1, url]]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.h1,
            description: plain(fill(c.description)),
            url: abs(url),
            datePublished: c.checked,
            dateModified: c.checked,
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            citation: c.sources.map((s) => s.url),
          },
          faqLd(c.faq.map((f) => ({ q: f.q, a: plain(fill(f.a)) }))),
        ]}
      />
      <Crumbs trail={[["Ingot UI", "/"], ["Compare", "/compare"], [c.h1, url]]} />

      <header className="mt-6 max-w-[820px]">
        <VsChip name={other} logo={c.other.logo} size={44} />
        <h1 className="display mt-5 text-[28px] sm:text-[36px]">{c.h1}</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-2"><R x={c.answer} /></p>
        <div className="mt-5 flex flex-wrap items-center gap-1.5">
          <Link href="/sign-up" className="btn-ink">Start for free</Link>
          <Link href="/systems" className="btn-line">See the nine systems</Link>
        </div>
        <p className="mt-5 text-[12px] leading-relaxed text-mute">
          <span className="font-medium text-ink-2">Ingot UI publishes this page</span> and makes one of the products compared. {other} is described only from its own public pages, linked under <a href="#sources" className="underline underline-offset-2 hover:text-ink">Sources</a>; we don’t quote its prices. Facts checked {fmtDate(c.checked)}. <Link href="/about#editorial" className="underline underline-offset-2 hover:text-ink">Editorial policy</Link>.
        </p>
      </header>

      <Section id="best-for" title="Which one to pick" className="mt-12">
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {([[other, c.other.logo, c.bestFor.other, c.bestFor.otherSrc], ["Ingot UI", undefined, c.bestFor.ingot, undefined]] as const).map(([name, logo, list, src]) => (
            <div key={name} className={"rounded-[12px] p-5 " + (logo ? "card" : "bg-tile shadow-[inset_0_0_0_1px_var(--color-hair)]")}>
              <div className="flex items-center gap-2.5">
                <BrandTile name={name} logo={logo} size={30} />
                <h3 className="text-[14px] font-medium">Pick {name} if…<Refs src={src ? [...src] : undefined} /></h3>
              </div>
              <ul className="mt-3 flex flex-col gap-2.5">
                {list.map((x) => (
                  <li key={x} className="flex gap-2 text-[13px] leading-relaxed text-ink-2">
                    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" className="mt-[3px] shrink-0 text-ink"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span><R x={x} /></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="at-a-glance" title="Side by side" className="mt-12">
        <div className="mt-3 overflow-hidden rounded-[12px] shadow-[inset_0_0_0_1px_var(--color-hair)]" role="table" aria-label={"Ingot UI and " + other + " compared"}>
          <div role="row" className="hidden grid-cols-[170px_1fr_1fr] border-b border-hair sm:grid">
            <span role="columnheader" className="px-4 py-3" />
            <span role="columnheader" className="flex items-center gap-2 bg-tile px-4 py-3 text-[13px] font-medium"><BrandTile name="Ingot UI" size={26} /> Ingot UI</span>
            <span role="columnheader" className="flex items-center gap-2 px-4 py-3 text-[13px] font-medium"><BrandTile name={other} logo={c.other.logo} size={26} /> {other}</span>
          </div>
          {c.rows.map((r) => (
            <div role="row" key={r.aspect} className="grid border-b border-hair last:border-b-0 sm:grid-cols-[170px_1fr_1fr]">
              <span role="rowheader" className="px-4 pt-3 text-[13px] font-medium sm:py-3.5">{r.aspect}</span>
              <span role="cell" className="px-4 py-2 text-[13px] leading-relaxed text-ink-2 sm:bg-tile sm:py-3.5"><span className="mr-1 text-[11px] font-medium text-mute sm:hidden">Ingot UI:</span><R x={r.ingot} /></span>
              <span role="cell" className="px-4 pt-1 pb-3 text-[13px] leading-relaxed text-ink-2 sm:py-3.5"><span className="mr-1 text-[11px] font-medium text-mute sm:hidden">{other}:</span><R x={r.other} /><Refs src={r.src} /></span>
            </div>
          ))}
        </div>
      </Section>

      {c.sections.map((s) => (
        <Section key={s.id} id={s.id} title={s.h2} className="mt-12">
          <div className="max-w-3xl">
            {s.paras.map((p, i) => (
              <p key={i} className={P}><R x={p} />{i === s.paras.length - 1 && <Refs src={s.src} />}</p>
            ))}
          </div>
        </Section>
      ))}

      <Section id="pricing" title="Pricing" className="mt-12">
        <p className={P + " max-w-3xl"}>
          We don’t quote {other}’s prices because they change. See <a href={c.pricingUrl} rel="noopener" target="_blank" className="font-medium text-ink underline underline-offset-2">{other}’s own site</a>. Ingot UI starts free with the Loopo system; Pro unlocks all nine systems. Current prices are on <Link href="/pricing" className="font-medium text-ink underline underline-offset-2">our pricing page</Link> and the terms on the <Link href="/license" className="font-medium text-ink underline underline-offset-2">licence page</Link>.
        </p>

      </Section>

      <Section id="faq" title="Questions" className="mt-12">
        <div className="mt-3 flex max-w-3xl flex-col gap-2">
          {c.faq.map((f, i) => (
            <details key={f.q} open={i === 0} className="group rounded-[10px] bg-tile px-4 py-3 open:pb-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[13px] font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-mute transition-transform group-open:rotate-180"><path d="M6 9l6 6l6 -6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </summary>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-2"><R x={f.a} /></p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="sources" title="Sources" sub={"Read " + fmtDate(c.checked)} className="mt-12">
        <ol className="mt-3 max-w-3xl border-t border-hair">
          {c.sources.map((s, i) => (
            <li key={s.url} id={"source-" + (i + 1)} className="flex scroll-mt-6 gap-2 border-b border-hair py-2 text-[13px]">
              <span className="w-6 shrink-0 tabular-nums text-mute">[{i + 1}]</span>
              <a href={s.url} rel="noopener" target="_blank" className="min-w-0 break-words font-medium text-ink underline decoration-hair-2 underline-offset-[3px] hover:decoration-ink">{s.label}</a>
            </li>
          ))}
        </ol>
        <p className="mt-2 text-[12px] text-mute">{other} and its logo belong to their owners and are used only to identify the product. Ingot UI is not affiliated with or endorsed by {other}.</p>
        <p className="mt-1 text-[12px] text-mute">Something out of date? Tell us through the feedback tool on the <Link href="/mcp" className="underline underline-offset-2 hover:text-ink">MCP server</Link> and we will correct it.</p>
      </Section>

      <section className="card mt-12 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
        <div className="flex-1">
          <h2 className="text-[16px] font-medium tracking-[-0.01em]">Try Ingot UI free</h2>
          <p className="mt-1 text-[13px] text-mute">The Loopo system and the free components cost nothing. Upgrade when you want all nine.</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Link href="/sign-up" className="btn-ink">Start for free</Link>
          <Link href="/mcp" className="btn-line">Connect your agent</Link>
        </div>
      </section>

      <Section id="related" title="Related" className="mt-12">
        <LinkCards links={[...guides, ...more.map((x) => ({ href: "/compare/" + x.slug, title: x.h1, note: x.card }))]} />
        <PillLinks label="Component categories" links={[...c.categories.map((x) => ({ href: x.href, label: x.label })), { href: "/for/founders", label: "Ingot UI for founders" }]} />
      </Section>
    </div>
  );
}
