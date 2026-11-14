import Link from "next/link";
import { items, systems, FIGMA_LIBRARY_COUNT } from "@/lib/catalog";
import { CODED_TOTAL, codeCount } from "@/lib/library";
import iconStats from "@/lib/icon-stats.json";
import { SHOWCASE } from "@/components/showcase/data";
import { BrowserFrame } from "@/components/showcase/browser-frame";
import { ScreenPreview } from "@/components/showcase/screen-preview";
import { ShowcaseSwitcher, type SwitcherSystem } from "./showcase/showcase-switcher";
import { CIcon } from "./chrome-icon";

const fmt = (n: number) => n.toLocaleString("en-US");

/** Same rule as /systems: a system counts as "in code" once it has at least one coded component. */
const codedSystems = () => systems.filter((s) => (s.status === "live" ? items.length : 0) + codeCount(s.slug) > 0).length;

/** "6 systems, all in code and Figma" when true; otherwise the honest split. */
export function systemsFact() {
  const n = systems.length;
  const coded = codedSystems();
  return coded === n ? { v: String(n), l: "systems, all in code and Figma" } : { v: String(n), l: `systems, ${coded} in code, all in Figma` };
}

/** Home only. One promise, two actions, four true facts, one real screen. Server-rendered;
 *  the screen's code chunk loads after hydration and has a fixed aspect ratio, so nothing shifts. */
export function HomeHero() {
  const free = SHOWCASE.find((s) => s.system === "loopo");
  const screen = free?.screens.find((x) => x.slug === "loopo-overview") ?? free?.screens[0];
  const sys = systemsFact();
  const facts = [
    sys,
    { v: fmt(CODED_TOTAL), l: "components in React code" },
    { v: fmt(FIGMA_LIBRARY_COUNT), l: "components in Figma" },
    { v: fmt(iconStats.line), l: "icons" },
  ];

  return (
    <section aria-labelledby="home-title" className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] xl:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
      <div className="min-w-0">
        <p className="eyebrow">Dashboard UI kit for React and Figma</p>
        <h1 id="home-title" className="mt-2 max-w-[18ch] text-balance text-[30px] font-medium leading-[1.1] tracking-[-0.025em] sm:text-[36px]">
          Dashboard components your AI agent builds with
        </h1>
        <p className="mt-3 max-w-[56ch] text-pretty text-[14px] leading-relaxed text-ink-2">
          {systems.length} complete design systems with real React components, each checked against its Figma original. Your agent uses them through MCP, so your product looks designed, not like every other AI-built app.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Link href="/mcp" className="btn-ink">
            <CIcon name="plug" size={15} />
            Connect your agent
          </Link>
          <Link href="/systems/loopo" className="btn-line">
            <CIcon name="dashboard" size={15} />
            Browse the free system
          </Link>
        </div>
        <p className="mt-2.5 text-[12px] text-mute">Loopo is free. Five copies of any Pro component free, no account needed.</p>
        <dl className="mt-5 grid max-w-[640px] grid-cols-2 gap-x-4 gap-y-3 border-t border-hair pt-4 sm:flex sm:flex-wrap sm:gap-x-8">
          {facts.map((f) => (
            <div key={f.l} className="flex min-w-0 flex-col-reverse justify-end">
              <dt className="mt-1 text-[12px] leading-snug text-mute sm:whitespace-nowrap">{f.l}</dt>
              <dd className="text-[18px] font-medium leading-none tracking-[-0.02em] tabular-nums">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {screen && (
        <figure className="min-w-0">
          <BrowserFrame address="app.yourproduct.com/overview">
            <ScreenPreview screen={screen} eager />
          </BrowserFrame>
          <figcaption className="mt-2 text-[12px] leading-snug text-mute">
            Loopo Overview, built from the free Loopo system
            {screen.kind === "code" && screen.qa ? `: React code, ${screen.qa.perceptual}% match with the Figma screen.` : "."}
          </figcaption>
        </figure>
      )}
    </section>
  );
}

/** "What your agent builds": the six real dashboards with the prompt and MCP tools behind each.
 *  Collapsed by default so the library grid stays in the first screen; the dashboards inside only
 *  load once it is opened (their previews wait for the viewport). */
export function ShowcaseBand() {
  const list: SwitcherSystem[] = SHOWCASE.map((s) => {
    const m = systems.find((x) => x.slug === s.system);
    return { ...s, name: m?.name ?? s.system, accent: m?.accent ?? "#0b0b0b" };
  });
  return (
    <details className="card group mt-5 [&_summary::-webkit-details-marker]:hidden">
      <summary className="relative flex cursor-pointer list-none flex-wrap items-center gap-x-3 gap-y-1 rounded-[8px] px-4 py-3 hover:bg-tile">
        <CIcon name="terminal" size={16} className="shrink-0" />
        <h2 className="text-[13px] font-medium max-md:pr-6">What your agent builds with Ingot UI</h2>
        <span className="text-[13px] text-mute max-md:basis-full max-md:pl-7">One prompt, one finished dashboard, in each of the {list.length} systems.</span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[13px] text-ink max-md:absolute max-md:right-4 max-md:top-3.5">
          <span className="group-open:hidden max-md:sr-only">See the prompts and screens</span>
          <span className="hidden group-open:inline max-md:sr-only">Hide</span>
          <CIcon name="arrow" size={14} className="rotate-[135deg] transition-transform group-open:-rotate-45 motion-reduce:transition-none" />
        </span>
      </summary>
      <div className="border-t border-hair px-4 pb-4">
        <ShowcaseSwitcher systems={list} />
      </div>
    </details>
  );
}
