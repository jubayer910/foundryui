"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useId, useState, useTransition, type ReactNode } from "react";
import {
  COMPARES,
  DATASET_LABEL,
  DATASETS,
  GRANS,
  GRAN_LABEL,
  RANGE_OPTIONS,
  TZS,
  parseState,
  periodOfInstant,
  rangeLabel,
  shift,
  stateQuery,
  type Compare,
  type DatasetId,
  type Filters,
  type Gran,
  type TzId,
} from "@/lib/reports/period";
import { RIcon } from "./icons";

export type FilterChoice = { key: keyof Filters; label: string; ds: DatasetId[]; options: { v: string; label: string }[] };

const sel = "h-8 w-full appearance-none rounded-[6px] bg-white pr-7 pl-2.5 text-[13px] text-ink shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none hover:bg-tile focus-visible:shadow-[inset_0_0_0_1px_var(--color-ink),0_0_0_2px_rgb(11_11_11/0.15)]";

function Select({ label, value, onChange, children, className }: { label: string; value: string; onChange: (v: string) => void; children: ReactNode; className?: string }) {
  return (
    <label className={"flex min-w-0 flex-col gap-0.5 " + (className ?? "")}>
      <span className="text-[11px] text-faint">{label}</span>
      <span className="relative block">
        <select value={value} onChange={(e) => onChange(e.target.value)} className={sel}>
          {children}
        </select>
        <RIcon name="chevron-down" size={14} className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-mute" />
      </span>
    </label>
  );
}

/**
 * The sticky selection bar for /admin/reports. Everything lives in the URL, so a view can be shared or
 * bookmarked; links work without JavaScript and the selects navigate on change.
 */
export function Controls({ datasets, filters }: { datasets: DatasetId[]; filters: FilterChoice[] }) {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();
  const [pending, start] = useTransition();
  const s = parseState(params);
  const [showFilters, setShowFilters] = useState(() => filters.some((f) => s.filters[f.key]));
  const filtersId = useId();
  const go = (q: string) => start(() => router.push(`${path}?${q}`, { scroll: false }));
  const href = (over: Parameters<typeof stateQuery>[1]) => `${path}?${stateQuery(s, over)}`;

  const cur = periodOfInstant(s.gran, s.now, s.offset);
  const prev = shift(s.period, -1, s.offset);
  const next = shift(s.period, 1, s.offset);
  const canNext = next.start <= cur.start;
  // Period picker: the 60 periods up to the current one, plus the selected one if it is older.
  const options = Array.from({ length: s.gran === "year" ? 8 : s.gran === "quarter" ? 16 : s.gran === "month" ? 36 : 60 }, (_, i) => shift(cur, -i, s.offset));
  if (!options.some((p) => p.key === s.period.key)) options.push(s.period);
  const active = s.datasets.filter((d) => datasets.includes(d));
  const toggle = (d: DatasetId) => {
    const on = active.includes(d);
    const list = on ? active.filter((x) => x !== d) : DATASETS.filter((x) => active.includes(x) || x === d);
    return list.length ? list : active;
  };
  const shown = filters.filter((f) => f.ds.some((d) => active.includes(d)));
  const activeFilters = filters.filter((f) => s.filters[f.key]);

  return (
    <div id="report-controls" tabIndex={-1} className="relative z-20 -mx-4 mt-4 lg:sticky lg:top-14 border-b border-hair bg-white/95 px-4 py-3 outline-none backdrop-blur sm:-mx-6 sm:px-6 print:hidden" aria-busy={pending}>
      <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] text-faint" id={`${filtersId}-g`}>
            Granularity
          </span>
          <div className="flex gap-1" role="group" aria-labelledby={`${filtersId}-g`}>
            {GRANS.map((g: Gran) => (
              <Link key={g} href={href({ gran: g })} scroll={false} aria-current={g === s.gran ? "true" : undefined} data-on={g === s.gran} className="pill !h-8">
                {GRAN_LABEL[g]}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-[2] basis-[440px] items-end gap-1.5">
          <Link href={href({ p: prev.key })} scroll={false} className="btn-line !size-8 shrink-0 !p-0" aria-label={`Previous: ${prev.name}`}>
            <RIcon name="chevron-left" size={16} />
          </Link>
          <Select label="Period" value={s.period.key} onChange={(v) => go(stateQuery(s, { p: v }))} className="min-w-0 flex-1">
            {options.map((p) => (
              <option key={p.key} value={p.key}>
                {p.name} ({p.dates}){p.key === cur.key ? ", current" : ""}
              </option>
            ))}
          </Select>
          {canNext ? (
            <Link href={href({ p: next.key })} scroll={false} className="btn-line !size-8 shrink-0 !p-0" aria-label={`Next: ${next.name}`}>
              <RIcon name="chevron-right" size={16} />
            </Link>
          ) : (
            <span className="btn-line !size-8 shrink-0 !p-0 opacity-40" aria-disabled="true" title="No later period yet">
              <RIcon name="chevron-right" size={16} />
              <span className="sr-only">No later period yet</span>
            </span>
          )}
          <Link href={href({ p: "current" })} scroll={false} className="btn-line !h-8 shrink-0 !px-3" aria-current={s.current ? "true" : undefined} data-on={s.current}>
            Current
          </Link>
        </div>

        <div className="grid min-w-0 flex-1 basis-[460px] grid-cols-2 gap-2 sm:grid-cols-3">
          <Select label="Trend range" value={String(s.range)} onChange={(v) => go(stateQuery(s, { range: Number(v) }))}>
            {RANGE_OPTIONS[s.gran].map((n) => (
              <option key={n} value={n}>
                {rangeLabel(s.gran, n)}
              </option>
            ))}
          </Select>
          <Select label="Compare to" value={s.compare} onChange={(v) => go(stateQuery(s, { compare: v as Compare }))}>
            {COMPARES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </Select>
          <Select label="Time zone" className="col-span-2 sm:col-span-1" value={s.tz} onChange={(v) => go(stateQuery(s, { tz: v as TzId }))}>
            {(Object.keys(TZS) as TzId[]).map((t) => (
              <option key={t} value={t}>
                {TZS[t].label}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[11px] text-faint">Datasets</span>
        {datasets.map((d) => {
          const on = active.includes(d);
          return (
            <Link key={d} href={href({ datasets: toggle(d) })} scroll={false} aria-pressed={on} role="button" data-on={on} className="pill !h-7 !px-2.5 text-[12px]">
              {on && <RIcon name="check" size={13} />}
              {DATASET_LABEL[d]}
            </Link>
          );
        })}
        {active.length < datasets.length && (
          <Link href={href({ datasets: [...DATASETS] })} scroll={false} className="text-[12px] text-mute underline-offset-2 hover:text-ink hover:underline">
            Show all
          </Link>
        )}
        {shown.length > 0 && (
          <button type="button" onClick={() => setShowFilters((x) => !x)} aria-expanded={showFilters} aria-controls={filtersId} className="ml-auto inline-flex h-7 items-center gap-1.5 rounded-[6px] px-2 text-[12px] text-mute hover:bg-tile hover:text-ink aria-expanded:text-ink">
            <RIcon name="filter" size={14} />
            Filters{activeFilters.length ? ` (${activeFilters.length} on)` : ""}
          </button>
        )}
      </div>

      {showFilters && shown.length > 0 && (
        <div id={filtersId} className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
          {shown.map((f) => (
            <Select key={f.key} label={`${f.label} (${f.ds.map((d) => DATASET_LABEL[d]).join(", ")})`} value={s.filters[f.key]} onChange={(v) => go(stateQuery(s, { filters: { [f.key]: v } }))}>
              <option value="">All</option>
              {f.options.map((o) => (
                <option key={o.v} value={o.v}>
                  {o.label}
                </option>
              ))}
              {s.filters[f.key] && !f.options.some((o) => o.v === s.filters[f.key]) && <option value={s.filters[f.key]}>{s.filters[f.key]}</option>}
            </Select>
          ))}
          {activeFilters.length > 0 && (
            <div className="flex items-end">
              <Link href={href({ filters: Object.fromEntries(filters.map((f) => [f.key, ""])) })} scroll={false} className="btn-line !h-8 !px-3">
                <RIcon name="x" size={14} />
                Clear filters
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** "Custom": scrolls the selection bar into view, opens it for the keyboard and says so. */
export function CustomExport() {
  return (
    <button
      type="button"
      className="btn-line !h-8 !px-3"
      onClick={() => {
        const el = document.getElementById("report-controls");
        el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
        (el?.querySelector("select, a") as HTMLElement | null)?.focus();
      }}
    >
      <RIcon name="adjustments" size={15} />
      Custom
    </button>
  );
}
