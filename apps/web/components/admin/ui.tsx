import type { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "@/registry/components/icons";

/** Shared admin building blocks. Server-safe (no client JS). */

export const money = (cents: number, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: cents % 100 === 0 ? 0 : 2 }).format(cents / 100);

export const num = (n: number) => new Intl.NumberFormat("en-US").format(n);

export const day = (d: Date | null | undefined) =>
  d ? d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }) : "–";

export const when = (d: Date | null | undefined) =>
  d ? d.toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "UTC" }) + " UTC" : "–";

export const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

const PLAN_LABEL: Record<string, string> = { free: "Free", pro: "Pro", lifetime: "Lifetime", proMonthly: "Pro monthly", proYearly: "Pro yearly", lifetimeDeal: "Lifetime deal", lifetimeAfter: "Lifetime" };
export const planLabel = (p: string) => PLAN_LABEL[p] ?? p;

/** Page header inside the admin panel. */
export function AdminHead({ title, sub, children }: { title: string; sub?: string; children?: ReactNode }) {
  return (
    <header className="flex flex-wrap items-center gap-x-2 gap-y-2">
      <h1 className="page-title">{title}</h1>
      {sub && <p className="page-sub">{sub}</p>}
      {children && <div className="ml-auto flex flex-wrap items-center gap-1.5">{children}</div>}
    </header>
  );
}

export function Section({ title, sub, children, action }: { title: string; sub?: string; children: ReactNode; action?: ReactNode }) {
  return (
    <section className="mt-8">
      <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h2 className="text-[13px] font-medium">{title}</h2>
        {sub && <p className="text-[13px] text-mute">{sub}</p>}
        {action && <div className="ml-auto">{action}</div>}
      </div>
      {children}
    </section>
  );
}

/** KPI tile: label, big number, optional hint line. */
export function Kpi({ label, value, hint }: { label: string; value: string; hint?: ReactNode }) {
  return (
    <div className="card p-4">
      <p className="text-[13px] text-mute">{label}</p>
      <p className="mt-1 text-[22px] font-medium tracking-[-0.02em] tabular-nums">{value}</p>
      {hint && <p className="mt-0.5 text-[12px] text-faint">{hint}</p>}
    </div>
  );
}

/** Flash line from ?ok= / ?err= after a server action redirect. */
export function Flash({ ok, err }: { ok?: string | string[]; err?: string | string[] }) {
  const o = Array.isArray(ok) ? ok[0] : ok;
  const e = Array.isArray(err) ? err[0] : err;
  if (!o && !e) return null;
  return (
    <p
      role="status"
      className={"mt-4 flex items-center gap-2 rounded-[8px] px-3 py-2 text-[13px] " + (e ? "bg-[#fdecec] text-[#9b1c1c]" : "bg-tile text-ink")}
    >
      <Icon name={e ? "x" : "check"} size={15} />
      {e || o}
    </p>
  );
}

/** Small status label. Tone only, no dot. */
export function Tag({ children, tone = "plain" }: { children: ReactNode; tone?: "plain" | "ink" | "good" | "warn" | "bad" }) {
  const t = {
    plain: "bg-chip text-ink-2",
    ink: "bg-ink text-white",
    good: "bg-[#e7f6ec] text-[#17663a]",
    warn: "bg-[#fff4dc] text-[#8a5a00]",
    bad: "bg-[#fdecec] text-[#9b1c1c]",
  }[tone];
  return <span className={"inline-flex h-5 items-center rounded-full px-2 text-[12px] whitespace-nowrap " + t}>{children}</span>;
}

export function statusTone(s: string): "plain" | "ink" | "good" | "warn" | "bad" {
  if (["paid", "active", "granted", "answered", "on_trial", "published"].includes(s)) return "good";
  if (["pending", "past_due", "paused", "open", "unpaid"].includes(s)) return "warn";
  if (["refunded", "revoked", "cancelled", "expired", "closed"].includes(s)) return s === "closed" ? "plain" : "bad";
  return "plain";
}

/** Bordered table wrapper that scrolls sideways on small screens. */
export function Table({ head, children, empty }: { head: string[]; children: ReactNode; empty?: string }) {
  const rows = Array.isArray(children) ? children.filter(Boolean) : children ? [children] : [];
  return (
    <div className="card overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-[13px]">
        <thead>
          <tr className="border-b border-hair text-[12px] text-faint">
            {head.map((h, i) => (
              <th key={i} className="px-3 py-2 font-normal whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr:not(:last-child)]:border-b [&>tr]:border-hair">
          {rows.length ? (
            children
          ) : (
            <tr>
              <td colSpan={head.length} className="px-3 py-6 text-center text-mute">
                {empty ?? "Nothing here yet."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export const td = "px-3 py-2 align-middle";

/** Field label wrapper for forms. */
export function Field({ label, hint, children, className }: { label: string; hint?: string; children: ReactNode; className?: string }) {
  return (
    <label className={"flex flex-col gap-1 " + (className ?? "")}>
      <span className="text-[12px] text-mute">{label}</span>
      {children}
      {hint && <span className="text-[12px] text-faint">{hint}</span>}
    </label>
  );
}

export const input =
  "h-8 w-full rounded-[6px] bg-white px-2.5 text-[13px] shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none placeholder:text-faint focus:shadow-[inset_0_0_0_1px_var(--color-ink)]";
export const textarea =
  "w-full rounded-[6px] bg-white px-2.5 py-2 text-[13px] leading-[1.5] shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none placeholder:text-faint focus:shadow-[inset_0_0_0_1px_var(--color-ink)]";

/** Pill tabs rendered as links (no client JS). */
export function LinkTabs({ tabs }: { tabs: { href: string; label: string; count?: number; on: boolean }[] }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="tablist">
      {tabs.map((t) => (
        <Link key={t.href} href={t.href} role="tab" aria-selected={t.on} data-on={t.on} className="pill">
          {t.label}
          {t.count !== undefined && <span className={"tabular-nums " + (t.on ? "text-white/70" : "text-faint")}>{num(t.count)}</span>}
        </Link>
      ))}
    </div>
  );
}

/**
 * Simple daily bar chart in inline SVG. `data` is oldest first; each bar has a native tooltip.
 */
export function Bars({ data, label }: { data: { day: string; n: number }[]; label: string }) {
  const W = 600;
  const H = 120;
  const gap = 4;
  const max = Math.max(1, ...data.map((d) => d.n));
  const bw = (W - gap * (data.length - 1)) / Math.max(1, data.length);
  const total = data.reduce((s, d) => s + d.n, 0);
  return (
    <figure className="card p-4">
      <figcaption className="flex items-baseline gap-2">
        <span className="text-[13px] text-mute">{label}</span>
        <span className="ml-auto text-[13px] tabular-nums">{num(total)} total</span>
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-[120px] w-full" preserveAspectRatio="none" role="img" aria-label={`${label}: ${num(total)} in ${data.length} days, peak ${num(max)} a day`}>
        <line x1="0" x2={W} y1={H - 0.5} y2={H - 0.5} stroke="var(--color-hair-2)" />
        {data.map((d, i) => {
          const h = d.n === 0 ? 2 : Math.max(3, (d.n / max) * (H - 8));
          return (
            <rect key={d.day} x={i * (bw + gap)} y={H - h} width={bw} height={h} rx={2} fill={i === data.length - 1 ? "var(--color-ink)" : d.n === 0 ? "var(--color-chip-2)" : "rgb(0 0 0 / 0.28)"}>
              <title>{`${d.day}: ${d.n}`}</title>
            </rect>
          );
        })}
      </svg>
      <div className="mt-1.5 flex justify-between text-[11px] text-faint tabular-nums">
        <span>{data[0]?.day.slice(5)}</span>
        <span>peak {num(max)} / day</span>
        <span>{data[data.length - 1]?.day.slice(5)}</span>
      </div>
    </figure>
  );
}

/** "Are you sure" disclosure for destructive buttons, no client JS. */
export function Confirm({ label, children, tone = "line" }: { label: string; children: ReactNode; tone?: "line" | "bad" }) {
  return (
    <details className="group inline-block text-left">
      <summary className={"btn-line !h-7 cursor-pointer list-none !px-3 [&::-webkit-details-marker]:hidden group-open:!bg-tile " + (tone === "bad" ? "!text-[#9b1c1c]" : "")}>{label}</summary>
      <div className="mt-1.5 w-[260px] rounded-[8px] bg-white p-3 shadow-[0_0_0_1px_var(--color-hair-2),0_8px_24px_rgb(0_0_0/0.06)]">{children}</div>
    </details>
  );
}
