import type { Metadata } from "next";
import Link from "next/link";
import { COMPARISONS } from "@/lib/compare";
import { getPost } from "@/lib/blog";
import { IlloTile } from "@/components/site/illo";
import { JsonLd, ORG_ID, abs, breadcrumbLd, faqLd, pageMeta } from "@/lib/seo";
import { Crumbs, Faq, LinkCards, Section } from "@/app/for/_ui";

export const metadata: Metadata = pageMeta({
  title: "Dashboard UI kit comparisons",
  description: "Honest comparisons of Ingot UI with shadcn/ui blocks, Untitled UI and Tremor, plus Tailwind Plus alternatives. Each with Best for lines and linked sources.",
  path: "/compare",
});

const faq = [
  { q: "Who writes these comparisons?", a: "Ingot UI does, and each page says so at the top. Other tools are described only from their own public pages, linked under Sources, and each gets a Best for line where it is the better pick." },
  { q: "Why are there no competitor prices?", a: "Prices change, so we link to each product's own site instead of quoting them." },
  { q: "How often are the facts checked?", a: "Each page shows the date its facts were last read on the other product's site. We update a page when those facts change." },
];

export default function CompareIndex() {
  const guides = ["shadcn-ui-alternatives", "untitled-ui-alternatives", "best-dashboard-ui-kits"].map((s) => getPost(s)).filter((p) => !!p).map((p) => ({ href: "/blog/" + p.slug, title: p.title }));
  return (
    <div className="max-w-[1100px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["Compare", "/compare"]]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Dashboard UI kit comparisons",
            url: abs("/compare"),
            publisher: { "@id": ORG_ID },
            mainEntity: { "@type": "ItemList", itemListElement: COMPARISONS.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: abs("/compare/" + c.slug), name: c.h1 })) },
          },
          faqLd(faq),
        ]}
      />
      <Crumbs trail={[["Ingot UI", "/"], ["Compare", "/compare"]]} />
      <header className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h1 className="page-title">Compare Ingot UI</h1>
        <p className="page-sub">Where each tool is the better pick, with sources.</p>
      </header>
      <IlloTile scene="podium" label="Three tools on a podium, compared side by side" className="mt-5 h-[160px] sm:h-[200px]" />
      <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-mute">
        Ingot UI publishes these pages. We describe other tools only by what their own sites state, link every source and don’t quote their prices. Read the <Link href="/about#editorial" className="font-medium text-ink underline underline-offset-2">editorial policy</Link>.
      </p>

      <Section id="comparisons" title="Comparisons" className="mt-10">
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {COMPARISONS.map((c) => (
            <li key={c.slug}>
              <Link href={"/compare/" + c.slug} className="card block h-full p-4 transition-colors hover:bg-tile">
                <h3 className="text-[14px] font-medium">{c.h1}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-mute">{c.card}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Faq faq={faq} />

      <Section id="guides" title="Longer guides">
        <LinkCards links={[...guides, { href: "/for/founders", title: "Ingot UI for founders", note: "How a founder goes from no designer to a finished dashboard." }]} />
      </Section>
    </div>
  );
}
