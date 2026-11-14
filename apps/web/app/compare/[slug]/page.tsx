import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPARISONS, getComparison, type Comparison } from "@/lib/compare";
import { fill } from "@/lib/blog/stats";
import { fmtDate, getPost } from "@/lib/blog";
import { Rich } from "@/components/site/blog/rich";
import { JsonLd, ORG_ID, abs, breadcrumbLd, faqLd, pageMeta, plain } from "@/lib/seo";
import { Crumbs, Faq, LinkCards, P, PillLinks, Section } from "@/app/for/_ui";

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

      <header className="mt-3">
        <h1 className="display text-[26px] sm:text-[32px]">{c.h1}</h1>
        <p className="mt-3 rounded-[8px] bg-tile px-4 py-3 text-[13px] leading-relaxed text-ink-2">
          <strong className="font-medium text-ink">Ingot UI publishes this page.</strong> We make one of the products compared. {other} is described only from its own public pages, linked under Sources; we do not quote its prices. Facts checked {fmtDate(c.checked)}. Our <Link href="/about#editorial" className="font-medium text-ink underline underline-offset-2">editorial policy</Link>.
        </p>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-ink-2"><R x={c.answer} /></p>
      </header>

      <Section id="at-a-glance" title="At a glance" className="mt-10">
        <div className="mt-3 card overflow-hidden" role="table" aria-label={"Ingot UI and " + other + " compared"}>
          <div role="row" className="hidden grid-cols-[160px_1fr_1fr] gap-4 border-b border-hair bg-tile px-4 py-2 text-[12px] font-medium sm:grid">
            <span role="columnheader">&nbsp;</span>
            <span role="columnheader">Ingot UI</span>
            <span role="columnheader">{other}</span>
          </div>
          {c.rows.map((r) => (
            <div role="row" key={r.aspect} className="grid gap-1.5 border-b border-hair px-4 py-3 last:border-b-0 sm:grid-cols-[160px_1fr_1fr] sm:gap-4">
              <span role="rowheader" className="text-[13px] font-medium">{r.aspect}</span>
              <span role="cell" className="text-[13px] leading-relaxed text-ink-2"><span className="mr-1 text-[11px] font-medium text-mute sm:hidden">Ingot UI:</span><R x={r.ingot} /></span>
              <span role="cell" className="text-[13px] leading-relaxed text-ink-2"><span className="mr-1 text-[11px] font-medium text-mute sm:hidden">{other}:</span><R x={r.other} /><Refs src={r.src} /></span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="best-for" title="Which one to pick" className="mt-12">
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {([[other, c.bestFor.other, c.bestFor.otherSrc], ["Ingot UI", c.bestFor.ingot, undefined]] as const).map(([name, list, src]) => (
            <div key={name} className="card p-4">
              <h3 className="text-[13px] font-medium">Best for: {name}<Refs src={src ? [...src] : undefined} /></h3>
              <ul className="mt-2 border-t border-hair">
                {list.map((x) => (
                  <li key={x} className="border-b border-hair py-2 text-[13px] leading-relaxed text-ink-2 last:border-b-0"><R x={x} /></li>
                ))}
              </ul>
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
          We don’t quote {other}’s prices because they change. See <a href={c.pricingUrl} rel="noopener" target="_blank" className="font-medium text-ink underline underline-offset-2">{other}’s own site</a>. Ingot UI starts free with the Loopo system; Pro unlocks all six systems. Current prices are on <Link href="/pricing" className="font-medium text-ink underline underline-offset-2">our pricing page</Link> and the terms on the <Link href="/license" className="font-medium text-ink underline underline-offset-2">licence page</Link>.
        </p>
        <p className="mt-4 flex flex-wrap gap-1.5">
          <Link href="/systems" className="btn-ink">See the six systems</Link>
          <Link href="/mcp" className="btn-line">Connect your agent</Link>
        </p>
      </Section>

      <Faq faq={c.faq.map((f) => ({ q: f.q, a: fill(f.a) }))} />

      <Section id="sources" title="Sources" sub={"Read " + fmtDate(c.checked)} className="mt-12">
        <ol className="mt-3 max-w-3xl border-t border-hair">
          {c.sources.map((s, i) => (
            <li key={s.url} id={"source-" + (i + 1)} className="flex scroll-mt-6 gap-2 border-b border-hair py-2 text-[13px]">
              <span className="w-6 shrink-0 tabular-nums text-mute">[{i + 1}]</span>
              <a href={s.url} rel="noopener" target="_blank" className="min-w-0 break-words font-medium text-ink underline decoration-hair-2 underline-offset-[3px] hover:decoration-ink">{s.label}</a>
            </li>
          ))}
        </ol>
        <p className="mt-2 text-[12px] text-mute">Something out of date? Tell us through the feedback tool on the <Link href="/mcp" className="underline underline-offset-2 hover:text-ink">MCP server</Link> and we will correct it.</p>
      </Section>

      <Section id="related" title="Related" className="mt-12">
        <LinkCards links={[...guides, ...more.map((x) => ({ href: "/compare/" + x.slug, title: x.h1, note: x.card }))]} />
        <PillLinks label="Component categories" links={[...c.categories.map((x) => ({ href: x.href, label: x.label })), { href: "/for/founders", label: "Ingot UI for founders" }]} />
      </Section>
    </div>
  );
}
