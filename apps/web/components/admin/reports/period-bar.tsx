"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition, type ReactNode } from "react";
import {
  GRANS,
  GRAN_LABEL,
  RANGE_OPTIONS,
  TZS,
  comparesFor,
  isoDay,
  parseState,
  periodOfInstant,
  rangeLabel,
  shift,
  stateQuery,
  type Compare,
  type Gran,
  type TzId,
} from "@/lib/reports/period";
import { RIcon } from "./icons";

const sel =
  "h-8 min-w-0 appearance-none rounded-[6px] bg-white pr-7 pl-2.5 text-[13px] text-ink shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none hover:bg-tile focus-visible:shadow-[inset_0_0_0_1px_var(--color-ink),0_0_0_2px_rgb(11_11_11/0.15)]";

function Select({ label, value, onChange, children, className = "" }: { label: string; value: string; onChange: (v: string) => void; children: ReactNode; className?: string }) {
  return (
    <span className={"relative inline-flex " + className}>
      <select aria-label={label} title={label} value={value} onChange={(e) => onChange(e.target.value)} className={sel + " w-full"}>
        {children}
      </select>
      <RIcon name="chevron-down" size={14} className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-mute" />
    </span>
  );
}

/**
 * The period toolbar shared by Home, Insights and Reports. Granularity (Day to Year), previous / next, a date
 * picker on Day and a period menu otherwise, a jump to the current period, then comparison, trend range and
 * time zone. Everything lives in the URL; links work without JavaScript and the menus navigate on change.
 * `defaultGran` must match the page's parseState default. `compact` hides range and time zone (Home).
 */
export function PeriodBar({ defaultGran = "month", compact = false, children }: { defaultGran?: Gran; compact?: boolean; children?: ReactNode }) {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();
  const [pending, start] = useTransition();
  const s = parseState(params, undefined, { gran: defaultGran });
  const go = (q: string) => start(() => router.push(`${path}?${q}`, { scroll: false }));
  const href = (over: Parameters<typeof stateQuery>[1]) => `${path}?${stateQuery(s, over)}`;

  const cur = periodOfInstant(s.gran, s.now, s.offset);
  const prev = shift(s.period, -1, s.offset);
  const next = shift(s.period, 1, s.offset);
  const canNext = next.start <= cur.start;
  const options = Array.from({ length: s.gran === "year" ? 8 : s.gran === "quarter" ? 16 : s.gran === "month" ? 36 : 60 }, (_, i) => shift(cur, -i, s.offset));
  if (!options.some((p) => p.key === s.period.key)) options.push(s.period);
  const today = isoDay(s.now + s.offset * 1000);

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2 print:hidden" aria-busy={pending}>
      <div className="flex rounded-[7px] bg-chip p-0.5" role="group" aria-label="Granularity">
        {GRANS.map((g: Gran) => (
          <Link
            key={g}
            href={href({ gran: g })}
            scroll={false}
            aria-current={g === s.gran ? "true" : undefined}
            className={
              "flex h-7 items-center rounded-[5px] px-2.5 text-[13px] transition-colors duration-150 " +
              (g === s.gran ? "bg-white text-ink shadow-[0_0_0_1px_var(--color-hair-2),0_1px_2px_rgb(0_0_0/0.05)]" : "text-mute hover:text-ink")
            }
          >
            {GRAN_LABEL[g]}
          </Link>
        ))}
      </div>

      <div className="flex min-w-0 items-center gap-1">
        <Link href={href({ p: prev.key })} scroll={false} className="btn-line !size-8 shrink-0 !p-0" aria-label={`Previous: ${prev.name}`}>
          <RIcon name="chevron-left" size={16} />
        </Link>
        {s.gran === "day" ? (
          <label className="relative inline-flex">
            <span className="sr-only">Day</span>
            <input
              type="date"
              value={s.period.key}
              max={today}
              onChange={(e) => e.target.value && go(stateQuery(s, { p: e.target.value }))}
              className="h-8 rounded-[6px] bg-white px-2.5 text-[13px] text-ink tabular-nums shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none hover:bg-tile focus-visible:shadow-[inset_0_0_0_1px_var(--color-ink),0_0_0_2px_rgb(11_11_11/0.15)]"
            />
          </label>
        ) : (
          <Select label="Period" value={s.period.key} onChange={(v) => go(stateQuery(s, { p: v }))} className="w-[200px] max-w-[52vw]">
            {options.map((p) => (
              <option key={p.key} value={p.key}>
                {p.name}
                {p.key === cur.key ? " (current)" : ""}
              </option>
            ))}
          </Select>
        )}
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
          {s.gran === "day" ? "Today" : "Current"}
        </Link>
      </div>

      <Select label="Compare to" value={s.compare} onChange={(v) => go(stateQuery(s, { compare: v as Compare }))}>
        {comparesFor(s.gran).map((c) => (
          <option key={c.id} value={c.id}>
            {c.id === "none" ? c.label : `vs ${c.label.toLowerCase()}`}
          </option>
        ))}
      </Select>
      {!compact && (
        <>
          <Select label="Trend range" value={String(s.range)} onChange={(v) => go(stateQuery(s, { range: Number(v) }))}>
            {RANGE_OPTIONS[s.gran].map((n) => (
              <option key={n} value={n}>
                {rangeLabel(s.gran, n)}
              </option>
            ))}
          </Select>
          <Select label="Time zone" value={s.tz} onChange={(v) => go(stateQuery(s, { tz: v as TzId }))}>
            {(Object.keys(TZS) as TzId[]).map((t) => (
              <option key={t} value={t}>
                {t === "UTC" ? "UTC" : "Dhaka (UTC+6)"}
              </option>
            ))}
          </Select>
        </>
      )}
      {children && <div className="ml-auto flex flex-wrap items-center gap-2">{children}</div>}
    </div>
  );
}
