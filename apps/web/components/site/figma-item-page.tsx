import Link from "next/link";
import { getSystem } from "@/lib/catalog";
import { entries, figmaQA, isFreeTemplate, type FigmaItem } from "@/lib/library";
import { FigmaCodePanel } from "./figma-code-panel";
import { FigmaCopy } from "./templates/figma-copy";
import { figmaPath } from "@/lib/code-paths";
import { ItemCard } from "./item-card";
import { SaveButton } from "./save-button";
import { categoryHref } from "@/lib/hubs";
import { GeneratedStage } from "./generated-stage";
import { ComponentSpecs } from "./component-specs";
import { getSpecs } from "@/lib/component-specs";
import { surfaceStyle } from "@/lib/system-surface";
import { QaBadge } from "./qa-badge";
import { A11yNotes } from "./a11y-notes";
import { PlanCta } from "./plan-cta";
import { AgentPrompts } from "./agent-prompts";
import { InstallLine } from "./install-line";
import { mcpUrlFor } from "./connect-agent-config";
import { SITE_URL } from "@/lib/catalog";
import figmaSteps from "@/lib/figma-steps.generated.json";

/** Page for a component that lives in a system's Figma library (code still in progress). */
export function FigmaItemPage({ item }: { item: FigmaItem }) {
  const sys = getSystem(item.system);
  const free = sys?.tier === "free" || isFreeTemplate(item.slug);
  const qa = figmaQA(item.slug);
  const specs = qa ? getSpecs(item.slug) : null;
  const rows: [string, string][] = [
    ["System", sys?.name ?? item.system],
    ["Category", item.category],
    ["Plan", free ? "Free" : "Pro"],
    ["Size", item.w + " × " + item.h],
    ["From screen", item.source.replace(/^\d+\.\d+ · /, "") || "Product screens"],
    ["Figma", "In the " + (sys?.name ?? "") + " Figma kit"],
    ["Code", qa ? "React (TSX), checked" : "In progress"],
  ];
  const related = entries.filter((e) => e.slug !== item.slug && e.system === item.system && e.category === item.category).slice(0, 4);
  return (
    <div className="max-w-[1400px]">
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="flex flex-col gap-4 lg:sticky lg:top-5 lg:self-start">
          <div>
            <nav className="flex items-center gap-1 text-[12px] text-mute" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-ink">Components</Link>
              <span aria-hidden="true">/</span>
              <Link href={"/systems/" + item.system} className="hover:text-ink">{sys?.name ?? item.system}</Link>
              <span aria-hidden="true">/</span>
              {categoryHref(item.category) ? <Link href={categoryHref(item.category)!} className="hover:text-ink">{item.category}</Link> : <span>{item.category}</span>}
            </nav>
            <h1 className="mt-2 text-[20px] font-medium tracking-[-0.02em]">{item.name}</h1>
            <p className="mt-1 text-[13px] leading-snug text-mute">
              A {item.category.toLowerCase()} component from the {sys?.name} design system, taken from a real product screen and kept in its Figma library.
            </p>
            <QaBadge slug={item.slug} className="mt-3" />
          </div>
          <dl className="border-t border-hair">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-hair py-1.5 text-[13px]">
                <dt className="shrink-0 text-mute">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-1.5">
            {qa && <FigmaCodePanel slug={item.slug} score={qa.score} compact />}
            {figmaPath(item.slug) && <FigmaCopy slug={item.slug} label={item.name} variant="wide" next={"/components/" + item.slug} />}
            <SaveButton slug={item.slug} quiet={!!qa} />
            {!free && <PlanCta pro href={"/pricing?from=" + item.slug} label="Unlock with Pro" />}
          </div>
          {qa && free && <InstallLine cmd={"npx ingotui add " + item.slug} />}
          <AgentPrompts menu slug={item.slug} name={item.name} systemName={sys?.name ?? item.system} category={item.category} template={item.category === "Templates"} hasCode={!!qa} hasFigma={item.slug in (figmaSteps as Record<string, number>)} mcpUrl={mcpUrlFor(SITE_URL)} />
          {!qa && <p className="text-[12px] leading-snug text-mute">React code for this component is being converted and checked against the Figma original; save it to see it first when it lands.</p>}
        </aside>
        <GeneratedStage
          slug={item.slug}
          src={qa ? `/library-preview/${item.system}/${item.slug}.html` : null}
          w={item.w}
          h={item.h}
          thumb={item.thumb}
          alt={qa ? item.name + ", rendered from its React code" : item.name + ", " + item.category.toLowerCase() + " component from the " + (sys?.name ?? item.system) + " design system"}
          hasCode={!!qa}
          interactive={!!specs?.interactive}
          surface={surfaceStyle(item.system)}
        />
      </div>
      {specs && <ComponentSpecs s={specs} name={item.name} w={item.w} h={item.h} system={sys?.name ?? item.system} />}
      <A11yNotes slug={item.slug} category={item.category} handBuilt={false} />
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-[13px] font-medium">More {item.category.toLowerCase()} in {sys?.name}</h2>
          <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((r) => (
              <ItemCard key={r.slug} item={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
