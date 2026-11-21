import type { Metadata } from "next";
import Link from "next/link";
import { can, requireStaff } from "@/lib/admin";
import { changeOf, filterLines, headOf, show, stamp, tzLine } from "@/lib/reports/format";
import { loadReport } from "@/lib/reports/load";
import { rangeLabel, parseState, stateQuery } from "@/lib/reports/period";
import type { DatasetResult, MetricDef, Report } from "@/lib/reports/types";
import { RIcon } from "@/components/admin/reports/icons";
import { PrintButton } from "@/components/admin/reports/print-button";

export const metadata: Metadata = { title: "Report, print" };
export const dynamic = "force-dynamic";

/**
 * Printable report (A4 portrait). Lives outside the admin shell so the page prints without the sidebar; it
 * has its own staff guard. Wide period tables are split into groups of columns that fit the page width.
 */
export default async function PrintReport({ searchParams }: PageProps<"/admin/reports/print">) {
  const s = parseState(await searchParams);
  const { role } = await requireStaff("analytics", `/admin/reports?${stateQuery(s)}`);
  const r = await loadReport(s, { revenue: can(role, "revenue") });
  const filters = filterLines(s);
  return (
    <div data-admin="" className="report-print mx-auto max-w-[794px] bg-white px-6 py-8 text-[12px] leading-[1.45] text-ink max-md:px-4 max-md:py-5 print:max-w-none print:p-0">
      <style>{`
        @page { size: A4 portrait; margin: 14mm 12mm 16mm; }
        @media print {
          html, body { background: #fff !important; }
          .report-print table { font-size: 9.5px; }
          .report-print section { break-before: page; }
          .report-print section:first-of-type { break-before: auto; }
          .report-print .keep { break-inside: avoid; }
          .report-print thead { display: table-header-group; }
          .report-print tr { break-inside: avoid; }
        }
        /* On a phone screen (not on paper) wide tables scroll inside themselves and side-by-side blocks stack. */
        @media screen and (max-width: 767px) {
          .report-print table { display: block; max-width: 100%; overflow-x: auto; }
          .report-print .grid-cols-2 { grid-template-columns: minmax(0, 1fr); }
          .report-print dl { grid-template-columns: 110px minmax(0, 1fr); }
          .report-print { font-size: 13px; }
          .report-print .text-\\[11px\\], .report-print .text-\\[0\\.9em\\], .report-print dl, .report-print dl * { font-size: 12px; }
        }
      `}</style>
      <div className="mb-6 flex flex-wrap items-center gap-2 print:hidden">
        <Link href={`/admin/reports?${stateQuery(s)}`} className="btn-line !h-8 !px-3">
          <RIcon name="arrow-back-up" size={15} />
          Back to reports
        </Link>
        <PrintButton />
        <p className="text-[12px] text-mute">In the print dialog choose &ldquo;Save as PDF&rdquo; as the destination. Paper: A4.</p>
      </div>

      <header className="keep border-b border-ink pb-3">
        <p className="text-[11px] tracking-[0.04em] text-mute uppercase">Ingot UI report</p>
        <h1 className="mt-1 text-[22px] leading-[1.2] font-medium tracking-[-0.015em]">
          {r.sel.name} <span className="text-mute">({r.sel.dates})</span>
        </h1>
        <dl className="mt-3 grid grid-cols-[130px_1fr] gap-x-3 gap-y-0.5 text-[12px]">
          <dt className="text-mute">Time zone</dt>
          <dd>{tzLine(s)}. Weeks are ISO weeks (Monday to Sunday); quarters are calendar quarters.</dd>
          <dt className="text-mute">Compared with</dt>
          <dd>{r.cmp ? `${r.cmp.name} (${r.cmp.dates})` : "No comparison"}</dd>
          <dt className="text-mute">Trend range</dt>
          <dd>
            {rangeLabel(s.gran, s.range)}: {r.buckets[0].name} to {r.sel.name}
          </dd>
          <dt className="text-mute">Period status</dt>
          <dd>{s.partial ? `In progress: data up to ${stamp(r.generatedAt, s)}` : "Complete"}</dd>
          <dt className="text-mute">Filters</dt>
          <dd>{filters.length ? filters.join("; ") : "None"}</dd>
          <dt className="text-mute">Generated</dt>
          <dd>{stamp(r.generatedAt, s)}</dd>
        </dl>
      </header>

      {r.datasets.map((d) => (
        <PrintDataset key={d.id} d={d} r={r} />
      ))}
    </div>
  );
}

const th = "border-b border-ink/40 px-1.5 py-1 text-left font-medium align-bottom";
const tdc = "border-b border-hair-2 px-1.5 py-1 align-top tabular-nums";

function PrintDataset({ d, r }: { d: DatasetResult; r: Report }) {
  if (d.error) {
    return (
      <section className="mt-8">
        <h2 className="text-[16px] font-medium">{d.title}</h2>
        <p className="mt-1 text-[#9b1c1c]">{d.error}</p>
      </section>
    );
  }
  const kpis = d.metrics.filter((m) => m.kpi);
  const numeric = d.metrics;
  const groups: MetricDef[][] = [];
  for (let i = 0; i < numeric.length; i += 6) groups.push(numeric.slice(i, i + 6));
  const rows = [...d.rows].reverse();
  return (
    <section className="mt-8">
      <h2 className="text-[16px] font-medium tracking-[-0.01em]">{d.title}</h2>
      <p className="text-mute">
        {d.intro}
        {d.filters.length ? ` Filtered: ${d.filters.map((f) => `${f.label} ${f.value}`).join(", ")}.` : ""}
      </p>
      {!d.since ? (
        <p className="mt-3">{d.notes[0] ?? "No data yet."}</p>
      ) : (
        <>
          <table className="keep mt-3 w-full border-collapse">
            <caption className="mb-1 text-left text-[12px] font-medium">Key numbers, {r.sel.name}</caption>
            <thead>
              <tr>
                <th className={th}>Metric</th>
                <th className={th + " text-right"}>{r.sel.name}</th>
                {r.cmp && <th className={th + " text-right"}>{r.cmp.name}</th>}
                {r.cmp && <th className={th + " text-right"}>Change</th>}
              </tr>
            </thead>
            <tbody>
              {kpis.map((m) => {
                const c = r.cmp ? changeOf(m, d.selected[m.id], d.compare?.[m.id], r.cmp.name) : null;
                return (
                  <tr key={m.id}>
                    <td className={tdc}>{headOf(m)}</td>
                    <td className={tdc + " text-right font-medium"}>{show(m.unit, d.selected[m.id])}</td>
                    {r.cmp && <td className={tdc + " text-right"}>{show(m.unit, d.compare?.[m.id])}</td>}
                    {r.cmp && (
                      <td className={tdc + " text-right"}>
                        {c ? `${c.dir === "up" ? "Up" : c.dir === "down" ? "Down" : ""} ${c.text}`.trim() : "–"}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {groups.map((g, gi) => (
            <table key={gi} className="mt-4 w-full border-collapse">
              <caption className="mb-1 text-left text-[12px] font-medium">
                Per {r.state.gran}, newest first{groups.length > 1 ? ` (${gi + 1} of ${groups.length})` : ""}
              </caption>
              <thead>
                <tr>
                  <th className={th}>Period</th>
                  {g.map((m) => (
                    <th key={m.id} className={th + (m.unit === "text" ? "" : " text-right")}>
                      {headOf(m)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.period.key} className={row.period.key === r.sel.key ? "bg-tile print:bg-[#f2f2f2]" : ""}>
                    <td className={tdc + " whitespace-nowrap"}>
                      {row.period.name}
                      <span className="block text-[0.9em] text-mute">{row.period.dates}</span>
                    </td>
                    {g.map((m) => (
                      <td key={m.id} className={tdc + (m.unit === "text" ? " max-w-[120px] break-words" : " text-right whitespace-nowrap")}>
                        {show(m.unit, row.v[m.id])}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className={tdc + " font-medium"}>Range total</td>
                  {g.map((m) => (
                    <td key={m.id} className={tdc + " font-medium" + (m.unit === "text" ? "" : " text-right whitespace-nowrap")}>
                      {m.total === "none" ? "" : show(m.unit, d.totals[m.id])}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          ))}

          <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4">
            {d.breakdowns.map((b) => (
              <table key={b.id} className="keep w-full border-collapse">
                <caption className="mb-1 text-left text-[12px] font-medium">
                  {b.title}
                  <span className="block text-[11px] font-normal text-mute">{b.scope === "now" ? "Snapshot as of now" : `${r.sel.name}${r.cmp ? ` vs ${r.cmp.name}` : ""}`}</span>
                </caption>
                <thead>
                  <tr>
                    <th className={th}>{b.head}</th>
                    <th className={th + " text-right"}>{r.sel.tick}</th>
                    {b.scope === "selected" && r.cmp && <th className={th + " text-right"}>{r.cmp.tick}</th>}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.length ? (
                    b.rows.slice(0, 10).map((x, i) => (
                      <tr key={x.label + i}>
                        <td className={tdc + " max-w-[180px] truncate"}>{x.label}</td>
                        <td className={tdc + " text-right"}>{show(b.unit, x.cur)}</td>
                        {b.scope === "selected" && r.cmp && <td className={tdc + " text-right text-mute"}>{show(b.unit, x.prev)}</td>}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className={tdc + " text-mute"} colSpan={3}>
                        {b.empty}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            ))}
          </div>
        </>
      )}

      {d.notes.length > 0 && d.since && (
        <ul className="keep mt-4 list-none text-[11px] text-mute">
          {d.notes.map((n) => (
            <li key={n}>Note: {n}</li>
          ))}
        </ul>
      )}
      <div className="keep mt-4">
        <p className="text-[12px] font-medium">Definitions</p>
        <dl className="mt-1 grid grid-cols-[150px_1fr] gap-x-3 gap-y-1 text-[11px]">
          {d.metrics.map((m) => (
            <div key={m.id} className="contents">
              <dt className="font-medium">{headOf(m)}</dt>
              <dd className="text-mute">{m.def}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
