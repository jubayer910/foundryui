"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useId, useState, useTransition, type ReactNode } from "react";
import { DATASET_LABEL, DATASETS, parseState, stateQuery, type DatasetId, type Filters } from "@/lib/reports/period";
import { RIcon } from "./icons";
import { Sheet, isPhone } from "../sheet";
import { SheetSelect } from "./period-bar";

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
 * PeriodBar above. Everything lives in the URL, so a view can be shared or bookmarked. On phones the dataset
 * pills scroll in one row and the filters open in a sheet with Apply / Clear.
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
  const [sheet, setSheet] = useState(false);
  const [draft, setDraft] = useState<Partial<Filters>>({});
  const openFilters = () => {
    if (isPhone()) {
      setDraft(Object.fromEntries(shown.map((f) => [f.key, s.filters[f.key]])));
      setSheet(true);
    } else setShowFilters((x) => !x);
  };

  return (
    <div id="report-controls" className="mt-3 print:hidden" aria-busy={pending}>
      <div className="flex items-center gap-1.5 max-md:-mx-4 max-md:overflow-x-auto max-md:px-4 max-md:[scrollbar-width:none] md:flex-wrap [&::-webkit-scrollbar]:hidden" role="group" aria-label="Datasets shown">
        {datasets.map((d) => {
          const on = active.includes(d);
          return (
            <Link key={d} href={href({ datasets: toggle(d) })} scroll={false} aria-pressed={on} role="button"
              className={
                "inline-flex h-7 shrink-0 items-center gap-1 rounded-full px-2.5 text-[12px] whitespace-nowrap transition-colors duration-150 max-md:h-10 max-md:px-3.5 max-md:text-[14px] " +
                (on ? "bg-chip text-ink hover:bg-chip-2" : "text-mute shadow-[inset_0_0_0_1px_var(--color-hair-2)] hover:text-ink")
              }
            >
              {on && <RIcon name="check" size={13} />}
              {DATASET_LABEL[d]}
            </Link>
          );
        })}
        {active.length < datasets.length && (
          <Link href={href({ datasets: [...DATASETS] })} scroll={false} className="tap inline-flex shrink-0 items-center px-1 text-[12px] whitespace-nowrap text-mute underline-offset-2 hover:text-ink hover:underline max-md:text-[14px]">
            Show all
          </Link>
        )}
        {shown.length > 0 && (
          <button type="button" onClick={openFilters} aria-expanded={showFilters || sheet} aria-controls={filtersId} className="ml-auto inline-flex h-7 shrink-0 items-center gap-1.5 rounded-[6px] px-2 text-[12px] whitespace-nowrap text-mute hover:bg-tile hover:text-ink aria-expanded:text-ink max-md:sticky max-md:right-0 max-md:h-10 max-md:rounded-full max-md:bg-white max-md:px-3.5 max-md:text-[14px] max-md:text-ink max-md:shadow-[inset_0_0_0_1px_var(--color-hair-2),-12px_0_12px_#fff]">
            <RIcon name="filter" size={14} />
            Filters{activeFilters.length ? ` (${activeFilters.length} on)` : ""}
          </button>
        )}
      </div>

      <Sheet
        open={sheet}
        onClose={() => setSheet(false)}
        title="Filters"
        footer={
          <>
            <button type="button" className="btn-line flex-1" onClick={() => setDraft(Object.fromEntries(shown.map((f) => [f.key, ""])))}>
              Clear
            </button>
            <button
              type="button"
              className="btn-ink flex-[2]"
              onClick={() => {
                setSheet(false);
                go(stateQuery(s, { filters: draft }));
              }}
            >
              Apply
            </button>
          </>
        }
      >
        <div className="flex flex-col gap-4 pt-1">
          {shown.map((f) => {
            const v = draft[f.key] ?? "";
            return (
              <SheetSelect key={f.key} label={f.label} value={v} onChange={(x) => setDraft((d) => ({ ...d, [f.key]: x }))}>
                <option value="">All</option>
                {f.options.map((o) => (
                  <option key={o.v} value={o.v}>
                    {o.label}
                  </option>
                ))}
                {v && !f.options.some((o) => o.v === v) && <option value={v}>{v}</option>}
              </SheetSelect>
            );
          })}
        </div>
      </Sheet>

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
