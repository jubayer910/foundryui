"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useId, useState, useTransition, type ReactNode } from "react";
import { DATASET_LABEL, DATASETS, parseState, stateQuery, type DatasetId, type Filters } from "@/lib/reports/period";
import { RIcon } from "./icons";

export type FilterChoice = { key: keyof Filters; label: string; ds: DatasetId[]; options: { v: string; label: string }[] };

const sel =
  "h-8 w-full appearance-none rounded-[6px] bg-white pr-7 pl-2.5 text-[13px] text-ink shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none hover:bg-tile focus-visible:shadow-[inset_0_0_0_1px_var(--color-ink),0_0_0_2px_rgb(11_11_11/0.15)]";

function Select({ label, value, onChange, children }: { label: string; value: string; onChange: (v: string) => void; children: ReactNode }) {
  return (
    <label className="flex min-w-0 flex-col gap-0.5">
      <span className="text-[12px] text-mute">{label}</span>
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
 * Reports: which datasets to show (pills) and their filters (behind a Filters toggle). The period itself is the
 * PeriodBar above. Everything lives in the URL, so a view can be shared or bookmarked.
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
  const active = s.datasets.filter((d) => datasets.includes(d));
  const toggle = (d: DatasetId) => {
    const on = active.includes(d);
    const list = on ? active.filter((x) => x !== d) : DATASETS.filter((x) => active.includes(x) || x === d);
    return list.length ? list : active;
  };
  const shown = filters.filter((f) => f.ds.some((d) => active.includes(d)));
  const activeFilters = filters.filter((f) => s.filters[f.key]);

  return (
    <div id="report-controls" className="mt-3 print:hidden" aria-busy={pending}>
      <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Datasets shown">
        {datasets.map((d) => {
          const on = active.includes(d);
          return (
            <Link key={d} href={href({ datasets: toggle(d) })} scroll={false} aria-pressed={on} role="button"
              className={
                "inline-flex h-7 items-center gap-1 rounded-full px-2.5 text-[12px] transition-colors duration-150 " +
                (on ? "bg-chip text-ink hover:bg-chip-2" : "text-mute shadow-[inset_0_0_0_1px_var(--color-hair-2)] hover:text-ink")
              }
            >
              {on && <RIcon name="check" size={13} />}
              {DATASET_LABEL[d]}
            </Link>
          );
        })}
        {active.length < datasets.length && (
          <Link href={href({ datasets: [...DATASETS] })} scroll={false} className="px-1 text-[12px] text-mute underline-offset-2 hover:text-ink hover:underline">
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
        <div id={filtersId} className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {shown.map((f) => (
            <Select key={f.key} label={f.label} value={s.filters[f.key]} onChange={(v) => go(stateQuery(s, { filters: { [f.key]: v } }))}>
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
