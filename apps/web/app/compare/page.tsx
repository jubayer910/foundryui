import type { Metadata } from "next";
import Link from "next/link";
import { COMPARISONS } from "@/lib/compare";
import { getPost } from "@/lib/blog";
import { JsonLd, ORG_ID, abs, breadcrumbLd, faqLd, pageMeta } from "@/lib/seo";
import { Crumbs, Faq, LinkCards, Section } from "@/app/for/_ui";
import { ed } from "@/lib/content/edit";
import { BrandTile, VsChip } from "@/components/site/compare-brand";

export const metadata: Metadata = pageMeta({
  title: "Dashboard UI kit comparisons",
  description: "Honest comparisons of Ingot UI with shadcn/ui blocks, Untitled UI and Tremor, plus Tailwind Plus alternatives. Each with Best for lines and linked sources.",
  path: "/compare", image: "/compare/opengraph-image",
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
      <header className="mt-6 max-w-[760px]">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <BrandTile name="Ingot UI" size={36} />
          {COMPARISONS.map((c) => (
            <BrandTile key={c.slug} name={c.other.name} logo={c.other.logo} size={36} />
          ))}
        </div>
        <h1 className="display mt-5 text-[28px] sm:text-[34px]" {...ed("compare.head.title")}>Compare Ingot UI</h1>
        <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2" {...ed("compare.head.sub")}>Where each tool is the better pick, with sources. Every page tells you when the other product suits you better.</p>
        <p className="mt-3 text-[12px] leading-relaxed text-mute">
          Ingot UI publishes these pages. We describe other tools only by what their own sites state, link every source and don’t quote their prices. Read the <Link href="/about#editorial" className="underline underline-offset-2 hover:text-ink">editorial policy</Link>.
        </p>
      </header>

      <Section id="comparisons" title="Comparisons" className="mt-10">
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {COMPARISONS.map((c) => (
            <li key={c.slug}>
              <Link href={"/compare/" + c.slug} className="card group flex h-full flex-col p-5 transition-colors hover:bg-tile">
                <VsChip name={c.other.name} logo={c.other.logo} size={34} />
                <h3 className="mt-4 text-[15px] font-medium">{c.h1}</h3>
                <p className="mt-1 flex-1 text-[13px] leading-relaxed text-mute">{c.card}</p>
                <span className="mt-4 text-[13px] font-medium text-ink">Read the comparison <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">→</span></span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[12px] text-mute">Product names and logos belong to their owners and are used only to identify them. Ingot UI is not affiliated with or endorsed by them.</p>
      </Section>

      <Faq faq={faq} />

      <Section id="guides" title="Longer guides">
        <LinkCards links={[...guides, { href: "/for/founders", title: "Ingot UI for founders", note: "How a founder goes from no designer to a finished dashboard." }]} />
      </Section>
    </div>
  );
}
