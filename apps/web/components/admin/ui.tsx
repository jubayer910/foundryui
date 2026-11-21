import type { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "@/registry/components/icons";
import { AIcon } from "./admin-icons";
import { Info } from "./reports/info";

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

/**
 * Page header inside the admin shell: title (the page's h1), at most one line under it, and the primary
 * action on the right. Every admin page starts with one (app/admin/DESIGN.md, "Page pattern"). `PageHeader`
 * is the same component. Longer help goes in an Info popover (`info`), never in the body.
 */
export function AdminHead({ title, sub, info, children }: { title: string; sub?: string; info?: string; children?: ReactNode }) {
  return (
    <header className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <div className="min-w-0 flex-1 basis-[240px]">
        <h1 className="flex items-center gap-1 text-[22px] leading-[28px] font-medium tracking-[-0.015em] text-ink md:text-[20px]">
          {title}
          {info && <Info label={title} text={info} />}
        </h1>
        {sub && <p className="mt-0.5 text-[13px] text-mute">{sub}</p>}
      </div>
      {children && <div className="flex flex-wrap items-center gap-2 max-md:w-full">{children}</div>}
    </header>
  );
}
export const PageHeader = AdminHead;

/** Toolbar row under the page header: search, filter pills, period, export. Wraps on small screens. */
export function Toolbar({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={"mt-5 flex flex-wrap items-center gap-2 " + className}>{children}</div>;
}

/**
 * A titled block on a page. `sub` is one short line; definitions go in `info` (an Info popover next to the
 * title) instead of body text.
 */
export function Section({ title, sub, info, children, action }: { title: string; sub?: string; info?: string; children: ReactNode; action?: ReactNode }) {
  return (
    <section className="mt-8">
      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1">
        <h2 className="text-[15px] font-medium tracking-[-0.01em]">{title}</h2>
        {info && <Info label={title} text={info} />}
        {sub && <p className="text-[13px] text-mute">{sub}</p>}
        {action && <div className="ml-auto flex max-w-full min-w-0 items-center gap-2">{action}</div>}
      </div>
      {children}
    </section>
  );
}

/**
 * KPI card: label, big number, change. Nothing else on the card; a plain-text `hint` becomes the label's info
 * popover, other hints are dropped.
 */
export function Kpi({ label, value, hint, delta }: { label: string; value: string; hint?: ReactNode; delta?: ReactNode }) {
  return (
    <div className={kpiCard}>
      <p className="flex min-w-0 items-center gap-0.5 text-[13px] text-mute">
        <span className="truncate">{label}</span>
        {typeof hint === "string" && <Info label={label} text={hint} />}
      </p>
      <div className={kpiRow}>
        <p className={kpiValue}>{value}</p>
        {delta}
      </div>
    </div>
  );
}

/** KPI layout shared with MetricKpi: on phones the change sits under the number and the number never truncates. */
export const kpiCard = "card min-w-0 p-3 md:p-4";
export const kpiRow = "mt-1 flex flex-col items-start gap-0.5 md:flex-row md:flex-wrap md:items-baseline md:gap-x-2 md:gap-y-0";
export const kpiValue = "text-[clamp(17px,5.3vw,22px)] leading-[28px] font-medium tracking-[-0.02em] tabular-nums [overflow-wrap:anywhere] md:text-[22px] md:leading-[30px]";

/** Empty state: one line and at most one action. */
export function Empty({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="card flex flex-wrap items-center justify-center gap-3 px-4 py-8 text-center text-[13px] text-mute">
      <span>{children}</span>
      {action}
    </div>
  );
}

/** Previous / Next for a paged list. `href(n)` builds the link for page n (1-based). */
export function Pager({ page, pages, total, href, unit = "rows" }: { page: number; pages: number; total: number; href: (n: number) => string; unit?: string }) {
  if (pages <= 1) return null;
  return (
    <nav aria-label="Pages" className="mt-3 flex items-center gap-2 text-[13px]">
      <p className="text-mute tabular-nums">
        Page {num(page)} of {num(pages)}, {num(total)} {unit}
      </p>
      <span className="ml-auto flex gap-2">
        {page > 1 ? (
          <Link href={href(page - 1)} className="btn-line !h-8 !px-3" rel="prev">
            Previous
          </Link>
        ) : (
          <span className="btn-line !h-8 !px-3 opacity-40" aria-disabled="true">
            Previous
          </span>
        )}
        {page < pages ? (
          <Link href={href(page + 1)} className="btn-line !h-8 !px-3" rel="next">
            Next
          </Link>
        ) : (
          <span className="btn-line !h-8 !px-3 opacity-40" aria-disabled="true">
            Next
          </span>
        )}
      </span>
    </nav>
  );
}

/** 1-based page number from a search param, clamped to at least 1. */
export const pageOf = (v: string | string[] | undefined) => Math.max(1, Math.floor(Number(Array.isArray(v) ? v[0] : v) || 1));

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
  // Status codes read as words: "partial_refund" shows as "partial refund".
  return <span className={"inline-flex h-5 items-center rounded-[5px] px-1.5 text-[12px] whitespace-nowrap " + t}>{typeof children === "string" ? children.replace(/_/g, " ") : children}</span>;
}

export function statusTone(s: string): "plain" | "ink" | "good" | "warn" | "bad" {
  if (["paid", "active", "granted", "answered", "on_trial", "published"].includes(s)) return "good";
  if (["pending", "past_due", "paused", "open", "unpaid"].includes(s)) return "warn";
  if (["refunded", "revoked", "cancelled", "expired", "closed"].includes(s)) return s === "closed" ? "plain" : "bad";
  return "plain";
}

/**
 * Data table in a card. From md up: sticky header under the top bar, row hover, columns listed in `right`
 * right-aligned (use `tdNum` on their cells). Below md, `mobile` (a `PhoneList` of `PhoneRow`s) replaces the
 * table: one tappable row per item, who or what first, the key number on the right. Without `mobile` the header
 * hides and each row stacks its cells, so there is never a sideways scroll on a phone.
 */
export function Table({ head, children, empty, right = [], mobile }: { head: string[]; children: ReactNode; empty?: string; right?: number[]; mobile?: ReactNode }) {
  const rows = Array.isArray(children) ? children.filter(Boolean) : children ? [children] : [];
  return (
    <>
    {mobile !== undefined && (
      <div className="md:hidden">{rows.length ? mobile : <p className="card px-4 py-8 text-center text-[13px] text-mute">{empty ?? "Nothing here yet."}</p>}</div>
    )}
    <div className={"card relative " + (mobile !== undefined ? "max-md:hidden" : "")}>
      <table className="admin-table w-full border-collapse text-left text-[13px]">
        <thead className="max-md:sr-only">
          <tr className="text-[12px] text-faint">
            {head.map((h, i) => (
              <th
                key={i}
                scope="col"
                className={
                  "sticky top-[var(--admin-top,57px)] z-[2] border-b border-hair bg-white/95 px-3 py-2 font-normal whitespace-nowrap backdrop-blur first:rounded-tl-[8px] last:rounded-tr-[8px] " +
                  (right.includes(i) ? "text-right" : "")
                }
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr:not(:last-child)]:border-b [&>tr]:border-hair md:[&>tr:hover]:bg-wash">
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
    </>
  );
}

/** Phone list (below md): a card of `PhoneRow`s. Pass it to Table as `mobile`, or use it on its own. */
export function PhoneList({ children, label, className = "" }: { children: ReactNode; label?: string; className?: string }) {
  return (
    <ul aria-label={label} className={"card divide-y divide-hair overflow-hidden " + className}>
      {children}
    </ul>
  );
}

/**
 * One phone row: `title` (who or what) over `meta` (status, date, plan), `value` (the key number) and `valueSub`
 * on the right, a chevron when it opens something. With `href` the whole row is the link (detail drawer or page).
 * `actions` render under the text, outside the link (approve / reject buttons).
 */
export function PhoneRow({
  href,
  title,
  meta,
  value,
  valueSub,
  lead,
  actions,
  selected,
  scroll = true,
  external,
}: {
  href?: string;
  title: ReactNode;
  meta?: ReactNode;
  value?: ReactNode;
  valueSub?: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  selected?: boolean;
  scroll?: boolean;
  external?: boolean;
}) {
  const body = (
    <>
      {lead && <span className="shrink-0">{lead}</span>}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] leading-5 text-ink">{title}</span>
        {meta && <span className="mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[13px] leading-[18px] text-mute">{meta}</span>}
      </span>
      {(value !== undefined || valueSub) && (
        <span className="flex shrink-0 flex-col items-end gap-1 text-right">
          {value !== undefined && <span className="text-[15px] leading-5 whitespace-nowrap tabular-nums">{value}</span>}
          {valueSub && <span className="text-[13px] leading-[18px] whitespace-nowrap text-mute">{valueSub}</span>}
        </span>
      )}
      {href && <AIcon name={external ? "arrow-up-right" : "chevron-right"} size={16} className="-mr-1 shrink-0 text-faint" />}
    </>
  );
  const row = "flex min-h-[60px] items-center gap-3 px-4 py-3";
  return (
    <li aria-current={selected || undefined} className="aria-[current]:bg-tile">
      {href ? (
        external ? (
          <a href={href} target="_blank" rel="noreferrer" className={row + " transition-colors duration-150 active:bg-wash"}>
            {body}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          <Link href={href} scroll={scroll} className={row + " transition-colors duration-150 active:bg-wash"}>
            {body}
          </Link>
        )
      ) : (
        <div className={row}>{body}</div>
      )}
      {actions && <div className="-mt-1 flex flex-wrap gap-2 px-4 pb-3">{actions}</div>}
    </li>
  );
}

/**
 * Save row of a form card on phones: sticks to the bottom (above the tab bar, or the keyboard), full bleed inside
 * the card (which has 16px padding), hairline on top. From md up it is an ordinary row. Put it last in the form.
 */
export const saveBar =
  "max-md:sticky max-md:bottom-[var(--admin-bottom,0px)] max-md:z-10 max-md:-mx-4 max-md:-mb-4 max-md:rounded-b-[8px] max-md:border-t max-md:border-hair max-md:bg-white max-md:px-4 max-md:py-3 max-md:shadow-[0_-8px_16px_rgb(255_255_255/0.9)]";

/** Save row of a form that is not a card (page-level forms): sticky above the tab bar on phones, full bleed. */
export const pageSaveBar =
  "max-md:sticky max-md:bottom-[var(--admin-bottom,0px)] max-md:z-10 max-md:-mx-4 max-md:border-t max-md:border-hair max-md:bg-white/95 max-md:px-4 max-md:py-3 max-md:backdrop-blur";

export const td = "px-3 py-2 align-middle";
/** Cell for a number: right-aligned, tabular figures. Pair with `right` on Table. */
export const tdNum = "px-3 py-2 align-middle text-right tabular-nums whitespace-nowrap";

/** Field label wrapper for forms. */
export function Field({ label, hint, children, className }: { label: string; hint?: string; children: ReactNode; className?: string }) {
  return (
    <label className={"flex flex-col gap-1 " + (className ?? "")}>
      <span className="text-[13px] text-mute md:text-[12px]">{label}</span>
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
    <div className="flex flex-wrap gap-1.5 max-md:max-w-full max-md:flex-nowrap max-md:overflow-x-auto max-md:[scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist">
      {tabs.map((t) => (
        <Link key={t.href} href={t.href} role="tab" aria-selected={t.on} data-on={t.on} className="pill shrink-0">
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
  const gap = data.length > 40 ? 1.5 : 4;
  const max = Math.max(1, ...data.map((d) => d.n));
  const bw = (W - gap * (data.length - 1)) / Math.max(1, data.length);
  const total = data.reduce((s, d) => s + d.n, 0);
  return (
    <figure className="card p-4">
      <figcaption className="flex items-baseline gap-2">
        <span className="text-[13px] text-mute">{label}</span>
        <span className="ml-auto text-[13px] tabular-nums">{num(total)} total</span>
      </figcaption>
      {total === 0 && <p className="mt-3 -mb-[132px] flex h-[120px] items-center justify-center text-[13px] text-mute">Nothing in this range yet.</p>}
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
      <div className="mt-1.5 flex justify-between text-[12px] text-faint tabular-nums md:text-[11px]">
        <span>{data[0]?.day.slice(5)}</span>
        <span>{total ? `peak ${num(max)} / day` : "no data"}</span>
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
      <div className="mt-1.5 w-[260px] max-w-[calc(100vw-32px)] rounded-[8px] bg-white p-3 shadow-[0_0_0_1px_var(--color-hair-2),0_8px_24px_rgb(0_0_0/0.06)]">{children}</div>
    </details>
  );
}
