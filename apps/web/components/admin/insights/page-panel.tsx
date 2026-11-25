"use client";
import type { InsightsData } from "@/lib/analytics/insights";
import { AIcon } from "../admin-icons";
import { cameFrom, clicksOn, pageStats, scrollOf, wentTo } from "./model";
import { MiniStats, Panel, PanelList, ScrollDepth, Spark, fmt } from "./parts";

const KIND: Record<string, string> = { button: "Button", link: "Link", out: "Outbound" };

/**
 * Everything about one page in the selected period: numbers, trend, scroll depth, where visitors came from,
 * where they went next and what they clicked. Previous and next pages open in the same panel, so the panel
 * doubles as a path explorer; Back returns to the page before.
 */
export function PagePanel({ d, path, onClose, onPage, onBack, canBack }: { d: InsightsData; path: string; onClose: () => void; onPage: (p: string) => void; onBack?: () => void; canBack?: boolean }) {
  const st = pageStats(d).find((p) => p.path === path);
  const versus = d.cmp?.name ?? null;
  const series = d.pageSeries[path];
  const clicks = clicksOn(d, path);
  const pick = (k: string) => k.startsWith("p:") && onPage(k.slice(2));
  return (
    <Panel
      title={path}
      sub={`${d.sel.name}${versus ? ` vs ${versus}` : ""}`}
      onClose={onClose}
      actions={
        <>
          {canBack && onBack && (
            <button type="button" onClick={onBack} className="btn-line !h-8 !px-2.5 max-md:!h-10" aria-label="Back to the previous page">
              <AIcon name="arrow-left" size={14} />
              <span className="max-md:hidden">Back</span>
            </button>
          )}
          <a href={path} target="_blank" rel="noreferrer" className="btn-line !h-8 !px-2.5 max-md:!h-10" aria-label={`Open ${path} on the site in a new tab`}>
            <AIcon name="external-link" size={14} />
            <span className="max-md:hidden">Open</span>
          </a>
        </>
      }
    >
      <MiniStats
        versus={versus}
        items={[
          { label: "Page views", unit: "count", cur: st?.views ?? 0, prev: st?.viewsPrev ?? null },
          { label: "Entrances", unit: "count", cur: st?.entrances ?? 0 },
          { label: "Exit rate", unit: "pct", cur: st?.exitRate ?? null },
          { label: "Avg. engaged time", unit: "secs", cur: st?.avgTime ?? null },
          { label: "Read to 75%", unit: "pct", cur: st?.read ?? null },
          { label: "Clicks", unit: "count", cur: clicks.reduce((s, c) => s + c.cur, 0) },
        ]}
      />
      {series && (
        <section className="mt-6">
          <h3 className="mb-1 text-[13px] font-medium">Page views over time</h3>
          <Spark values={series} labels={d.series.map((s) => s.name)} />
        </section>
      )}
      <section className="mt-6">
        <h3 className="mb-2 text-[13px] font-medium">How far people scroll</h3>
        <ScrollDepth buckets={scrollOf(d, path)} />
      </section>
      <PanelList title="Came from" rows={cameFrom(d, path).slice(0, 10)} empty="No arrivals recorded for this page in the period." onPick={pick} canPick={(k) => k.startsWith("p:")} />
      <PanelList title="Went next" rows={wentTo(d, path).slice(0, 10)} empty="No next steps recorded for this page in the period." onPick={pick} canPick={(k) => k.startsWith("p:")} />
      <PanelList
        title="Clicked on this page"
        rows={clicks.slice(0, 12).map((c) => ({ key: [c.kind, c.label, c.target].join("|"), label: c.label, n: c.cur, hint: `${KIND[c.kind]}${c.target ? ` to ${c.target}` : ""}` }))}
        empty="No clicks recorded on this page in the period."
      />
      <p className="mt-6 text-[12px] text-faint">
        {fmt(st?.measured ?? 0)} views had time and scroll measured. Pages viewed before the behaviour counters started have page views only.
      </p>
    </Panel>
  );
}
