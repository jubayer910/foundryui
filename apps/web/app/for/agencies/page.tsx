import type { Metadata } from "next";
import Link from "next/link";
import { systems } from "@/lib/catalog";
import { stat } from "@/lib/blog/stats";
import { getPost } from "@/lib/blog";
import { IlloTile } from "@/components/site/illo";
import { JsonLd, ORG_ID, abs, breadcrumbLd, faqLd, fmt, pageMeta } from "@/lib/seo";
import { Crumbs, Faq, LinkCards, PillLinks, Section } from "../_ui";
import { ed } from "@/lib/content/edit";

const PATH = "/for/agencies";

export const metadata: Metadata = pageMeta({
  title: "Dashboard UI kit for agencies and client work",
  absoluteTitle: true,
  description: `Build client dashboards faster: ${systems.length} complete design systems you can rebrand with tokens, React code checked against Figma, and seats for your team.`,
  path: PATH,
});

const A = "font-medium text-ink underline decoration-hair-2 underline-offset-[3px] hover:decoration-ink";
const mono = "rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]";

export default function ForAgencies() {
  const figma = stat("figma") ?? 0;
  const code = stat("code") ?? 0;

  const faq = [
    { q: "Can I use Ingot UI in client projects?", a: "The licence covers unlimited personal and commercial projects. The [licence page](/license) sets out client work, teams and agencies in plain English, so check it before you quote a project." },
    { q: "How do I rebrand a system for a client?", a: "Each system is a set of --fu-* CSS variables. Change the colour, radius and type tokens in one file and every component follows. [Docs](/docs#tokens) shows the setup." },
    { q: "Can my whole team use one account?", a: "Team seats are set out on the [pricing page](/pricing)." },
    { q: "Can clients review in Figma?", a: "Yes. Every component is in its system's Figma library, and “Copy to Figma” works from any component page, so design reviews use the same parts you ship." },
    { q: "Can I resell the components as my own kit?", a: "No. You can ship them inside client products, but not redistribute the library itself as a UI kit." },
  ];

  const guides = ["dashboard-design-system-tailwind-tokens", "figma-to-react-code", "admin-dashboard-templates-nextjs"]
    .map((s) => getPost(s))
    .filter((p) => !!p)
    .map((p) => ({ href: "/blog/" + p.slug, title: p.title }));

  return (
    <div className="max-w-[1200px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["For agencies", PATH]]),
          { "@context": "https://schema.org", "@type": "WebPage", name: "Ingot UI for agencies", url: abs(PATH), publisher: { "@id": ORG_ID }, about: { "@id": ORG_ID } },
          faqLd(faq.map((f) => ({ q: f.q, a: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") }))),
        ]}
      />
      <Crumbs trail={[["Ingot UI", "/"], ["For agencies", PATH]]} />

      <header className="mt-3 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div>
          <p className="eyebrow" {...ed("agencies.hero.eyebrow")}>For agencies</p>
          <h1 className="display mt-1 text-[28px] sm:text-[36px]" {...ed("agencies.hero.title")}>Client dashboards that don’t look like the last one</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-2" {...ed("agencies.hero.sub")}>
            {`Start each client on one of ${systems.length} complete dashboard systems, rebrand it with tokens, and ship React code that matches the Figma file your client signed off.`}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            <Link href="/license" className="btn-ink">Read the licence</Link>
            <Link href="/pricing" className="btn-line">See team pricing</Link>
          </div>
        </div>
        <IlloTile scene="six" label="Nine design systems, one per client look" className="h-[200px] sm:h-[240px]" />
      </header>

      <Section edit="agencies" id="why" title="Why agencies use Ingot UI">
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {[
            ["tokens", "Rebrand with tokens", <>Every system is a set of <code className={mono}>--fu-*</code> CSS variables. Swap colour, radius and type in one file and the whole product follows. <Link href="/docs#tokens" className={A}>How tokens work</Link>.</>],
            ["figmalayer", "Figma and code that match", <>{fmt(figma)} components in Figma, {fmt(code)} with React code checked against the Figma original. What the client approves is what you ship.</>],
            ["hub", "Your team's agents stay on brand", <>Connect the <Link href="/mcp" className={A}>MCP server</Link> per project. <code className={mono}>init_project</code> writes a rules file so every developer's agent builds on the same system.</>],
          ].map(([scene, h, b]) => (
            <div key={h as string} className="card overflow-hidden">
              <IlloTile scene={scene as string} label={h as string} className="h-[120px] rounded-none" />
              <div className="p-4">
                <h3 className="text-[13px] font-medium">{h}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-mute">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section edit="agencies" id="licence-and-seats" title="Licence and team seats">
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <Link href="/license" className="card block p-4 transition-colors hover:bg-tile">
            <h3 className="text-[13px] font-medium">Client work licence</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-mute">Unlimited personal and commercial projects. What is covered for client work, teams and agencies, in plain English.</p>
          </Link>
          <Link href="/pricing" className="card block p-4 transition-colors hover:bg-tile">
            <h3 className="text-[13px] font-medium">Team plan</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-mute">Seats for your designers and developers. What each plan includes and costs is on the pricing page.</p>
          </Link>
        </div>
      </Section>

      <Section edit="agencies" id="systems" title="Pick a starting look per client">
        <PillLinks label="Design systems" links={systems.map((s) => ({ href: "/systems/" + s.slug, label: s.name + ": " + s.tagline }))} />
      </Section>

      <Faq faq={faq} title="Questions agencies ask" />

      <Section edit="agencies" id="guides" title="Guides">
        <LinkCards links={[...guides, { href: "/for/founders", title: "Ingot UI for founders", note: "The full story: problem, how it works, proof." }, { href: "/compare", title: "Compare Ingot UI", note: "Against shadcn/ui, Untitled UI, Tremor and Tailwind Plus." }]} />
      </Section>
    </div>
  );
}
