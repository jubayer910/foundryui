import type { Metadata } from "next";
import { PageHead } from "@/components/site/page-head";
import { MoreSoonCard, TemplateCard } from "@/components/site/templates/template-card";
import { TEMPLATES, isCoded } from "@/components/site/templates/data";
import { JsonLd, abs, breadcrumbLd, pageMeta, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Free dashboard templates in React and Figma",
  description: "Free dashboard templates: 10 complete screens (analytics, campaigns, agents, customers, security) as React code checked against Figma and as editable Figma layers.",
  path: "/templates", image: "/templates/opengraph-image",
});

const WORDS: Record<number, string> = { 4: "Four", 5: "Five", 6: "Six" };

/** Static (prerendered). Coded previews load their React chunk only when they come near the viewport. */
export default function Templates() {
  const coded = TEMPLATES.filter(isCoded).length;
  return (
    <div className="max-w-[1100px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["Templates", "/templates"]]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Dashboard templates",
            url: abs("/templates"),
            description: "Complete dashboard screens built from the Ingot UI design systems.",
            isPartOf: { "@id": abs("/#website") },
            publisher: { "@id": abs("/#organization") },
            mainEntity: {
              "@type": "ItemList",
              name: SITE_NAME + " dashboard templates",
              numberOfItems: TEMPLATES.length,
              itemListElement: TEMPLATES.map((t, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: `${t.systemName} ${t.title}`,
                url: abs("/components/" + t.slug),
              })),
            },
          },
        ]}
      />
      <PageHead edit="templates" title="Free templates" sub="Full dashboard screens to start from, free with an account." />
      <p className="mt-3 max-w-2xl text-[13px] leading-snug text-mute">
        Complete dashboard screens built from the nine Ingot UI systems, each made from that system&rsquo;s own components, charts and tokens.{" "}
        {coded === TEMPLATES.length
          ? "Every one is free: copy it as React code checked against its Figma screen, or paste it into Figma as editable layers."
          : `${WORDS[coded] ?? coded} already ship as React code checked against Figma; the rest are Figma screens, with their code in progress.`}{" "}
        More templates are being added soon.
      </p>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {TEMPLATES.map((t, i) => (
          <li key={t.screen.slug} className="min-w-0">
            <TemplateCard t={t} eager={i < 2} />
          </li>
        ))}
        <li className="min-w-0">
          <MoreSoonCard />
        </li>
      </ul>
    </div>
  );
}
