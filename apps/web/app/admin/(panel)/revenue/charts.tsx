import { money, num } from "@/components/admin/ui";

/** Revenue charts in the admin style: cards, hairlines, inline SVG with native tooltips, no client JS. Values are cents. */

type Point = { key: string; label: string; n: number };

/** Net revenue bars (cents). Negative days (refunds bigger than sales) draw below the base line. */
export function MoneyBars({
  data,
  label,
  currency = "USD",
  every,
}: {
  data: Point[];
  label: string;
  currency?: string;
  every?: number;
}) {
  const W = 600;
  const H = 140;
  const n = data.length;
  const gap = n > 40 ? 1.5 : n > 16 ? 3 : 6;
  const max = Math.max(1, ...data.map((d) => d.n));
  const min = Math.min(0, ...data.map((d) => d.n));
  const span = max - min || 1;
  const base = H - 1 - ((0 - min) / span) * (H - 10);
  const bw = (W - gap * (n - 1)) / Math.max(1, n);
  const total = data.reduce((s, d) => s + d.n, 0);
  const peak = data.reduce(
    (p, d) => (d.n > p.n ? d : p),
    data[0] ?? { key: "", label: "", n: 0 },
  );
  const step = every ?? Math.max(1, Math.ceil(n / 6));
  return (
    <figure className="card min-w-0 p-4">
      <figcaption className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-[13px] text-mute">{label}</span>
        <span className="ml-auto text-[13px] tabular-nums">
          {money(total, currency)} net
        </span>
      </figcaption>
      <div className="relative">
        {total === 0 && data.every((d) => d.n === 0) && (
          <p className="absolute inset-0 flex items-center justify-center text-[13px] text-mute">
            No revenue in this range yet.
          </p>
        )}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mt-3 h-[140px] w-full"
          preserveAspectRatio="none"
          role="img"
          aria-label={`${label}: ${money(total, currency)} net over ${n} bars, best ${peak.label} at ${money(peak.n, currency)}`}
        >
          {data.some((d) => d.n !== 0) &&
            [0.5, 1].map((f) => (
              <line
                key={f}
                x1="0"
                x2={W}
                y1={base - f * (base - 9)}
                y2={base - f * (base - 9)}
                stroke="var(--color-hair)"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          {data.map((d, i) => {
            const h =
              d.n === 0 ? 2 : Math.max(3, (Math.abs(d.n) / span) * (H - 10));
            const y = d.n >= 0 ? base - h : base;
            return (
              <rect
                key={d.key}
                x={i * (bw + gap)}
                y={y}
                width={bw}
                height={h}
                rx={2}
                fill={
                  d.n === 0
                    ? "var(--color-chip)"
                    : d.n < 0
                      ? "#e8a5a5"
                      : i === n - 1
                        ? "var(--color-ink)"
                        : "rgb(0 0 0 / 0.28)"
                }
              >
                <title>{`${d.label}: ${money(d.n, currency)}`}</title>
              </rect>
            );
          })}
          <line
            x1="0"
            x2={W}
            y1={base + 0.5}
            y2={base + 0.5}
            stroke="var(--color-hair-2)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="mt-1.5 flex justify-between gap-1 overflow-hidden text-[11px] whitespace-nowrap text-faint tabular-nums">
        {data.map((d, i) =>
          i % step === 0 || i === n - 1 ? (
            <span key={d.key}>{d.label}</span>
          ) : null,
        )}
      </div>
    </figure>
  );
}

/** New against churned subscriptions per month: paired bars, new in ink, churned in red. */
export function FlowBars({
  data,
}: {
  data: { key: string; label: string; added: number; churned: number }[];
}) {
  const W = 600;
  const H = 120;
  const n = data.length;
  const gap = n > 16 ? 6 : 10;
  const max = Math.max(1, ...data.flatMap((d) => [d.added, d.churned]));
  const gw = (W - gap * (n - 1)) / Math.max(1, n);
  const bw = Math.max(1, (gw - 2) / 2);
  const added = data.reduce((s, d) => s + d.added, 0);
  const churned = data.reduce((s, d) => s + d.churned, 0);
  const step = Math.max(1, Math.ceil(n / 6));
  return (
    <figure className="card min-w-0 p-4">
      <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
        <span className="text-mute">New and churned subscriptions</span>
        <span className="ml-auto inline-flex items-center gap-1.5 tabular-nums">
          <svg width="10" height="10" aria-hidden="true">
            <rect width="10" height="10" rx="2" fill="var(--color-ink)" />
          </svg>
          New {num(added)}
        </span>
        <span className="inline-flex items-center gap-1.5 tabular-nums">
          <svg width="10" height="10" aria-hidden="true">
            <rect width="10" height="10" rx="2" fill="#d46a6a" />
          </svg>
          Churned {num(churned)}
        </span>
      </figcaption>
      <div className="relative">
        {added + churned === 0 && (
          <p className="absolute inset-0 flex items-center justify-center text-[13px] text-mute">
            No subscriptions yet.
          </p>
        )}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mt-3 h-[120px] w-full"
          preserveAspectRatio="none"
          role="img"
          aria-label={`${num(added)} new and ${num(churned)} churned subscriptions over ${n} months`}
        >
          <line
            x1="0"
            x2={W}
            y1={H - 0.5}
            y2={H - 0.5}
            stroke="var(--color-hair-2)"
            vectorEffect="non-scaling-stroke"
          />
          {data.map((d, i) => {
            const x = i * (gw + gap);
            const ha = d.added ? Math.max(3, (d.added / max) * (H - 8)) : 2;
            const hc = d.churned ? Math.max(3, (d.churned / max) * (H - 8)) : 2;
            return (
              <g key={d.key}>
                <title>{`${d.label}: ${d.added} new, ${d.churned} churned`}</title>
                <rect
                  x={x}
                  y={H - ha}
                  width={bw}
                  height={ha}
                  rx={2}
                  fill={d.added ? "var(--color-ink)" : "var(--color-chip)"}
                />
                <rect
                  x={x + bw + 2}
                  y={H - hc}
                  width={bw}
                  height={hc}
                  rx={2}
                  fill={d.churned ? "#d46a6a" : "var(--color-chip)"}
                />
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-1.5 flex justify-between gap-1 overflow-hidden text-[11px] whitespace-nowrap text-faint tabular-nums">
        {data.map((d, i) =>
          i % step === 0 || i === n - 1 ? (
            <span key={d.key}>{d.label}</span>
          ) : null,
        )}
      </div>
    </figure>
  );
}

/** Ranked money list (revenue by plan) with proportional bars. */
export function MoneyList({
  title,
  rows,
  currency = "USD",
  empty,
}: {
  title: string;
  rows: { label: string; cents: number; sub?: string }[];
  currency?: string;
  empty: string;
}) {
  const max = Math.max(1, ...rows.map((r) => r.cents));
  const sum = rows.reduce((s, r) => s + Math.max(0, r.cents), 0);
  return (
    <div className="card min-w-0 px-4 py-3">
      <p className="text-[13px] text-mute">{title}</p>
      {sum > 0 ? (
        <ol className="mt-2 flex flex-col gap-1 text-[13px]">
          {rows.map((r) => (
            <li
              key={r.label}
              className="relative flex h-7 items-center gap-3 px-2"
            >
              <span
                className="absolute inset-y-0 left-0 rounded-[5px] bg-wash"
                style={{
                  width: `${Math.max(r.cents > 0 ? 2 : 0, (Math.max(0, r.cents) / max) * 100)}%`,
                }}
                aria-hidden="true"
              />
              <span className="relative min-w-0 flex-1 truncate">
                {r.label}
                {r.sub && <span className="text-faint">, {r.sub}</span>}
              </span>
              <span className="relative tabular-nums">
                {money(r.cents, currency)}
              </span>
              <span className="relative w-10 text-right text-[12px] text-faint tabular-nums">
                {sum ? Math.round((Math.max(0, r.cents) / sum) * 100) : 0}%
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="flex min-h-[120px] items-center justify-center text-[13px] text-mute">
          {empty}
        </p>
      )}
    </div>
  );
}
