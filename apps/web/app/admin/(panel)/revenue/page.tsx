import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { sp } from "@/components/admin/guard";
import { requireStaff } from "@/lib/admin";
import {
  AdminHead,
  Flash,
  Kpi,
  LinkTabs,
  Section,
  Table,
  Tag,
  cap,
  day,
  money,
  num,
  statusTone,
  td,
  when,
} from "@/components/admin/ui";
import { Delta } from "@/components/admin/charts";
import { Icon } from "@/registry/components/icons";
import {
  RANGES,
  loadRevenue,
  rangeOf,
  type Order,
  type Revenue,
  type Sub,
  PLAN_NAME,
} from "./data";
import { FlowBars, MoneyBars, MoneyList } from "./charts";
import { RIcon } from "./icons";
import { SyncButton } from "./sync-button";
import { syncNow } from "./actions";

export const metadata: Metadata = { title: "Revenue" };

const LS = "https://app.lemonsqueezy.com";
const n = (x: number, word: string) => `${num(x)} ${word}${x === 1 ? "" : "s"}`;
const CUR = "USD";

export default async function AdminRevenue({
  searchParams,
}: PageProps<"/admin/revenue">) {
  await requireStaff("revenue", "/admin/revenue");
  const q = await searchParams;
  const range = rangeOf(sp(q.range));
  const r = await loadRevenue(range);
  const here = `/admin/revenue?range=${range}`;
  const connected = r.keys.apiKey && r.keys.storeId;

  return (
    <div>
      <AdminHead
        title="Revenue"
        sub={`Earnings from Lemon Squeezy in ${CUR}, ${day(r.from)} to ${day(r.to)} (UTC).`}
      >
        <LinkTabs
          tabs={(Object.keys(RANGES) as (keyof typeof RANGES)[]).map((k) => ({
            href: `/admin/revenue?range=${k}`,
            label: RANGES[k],
            on: k === range,
          }))}
        />
      </AdminHead>
      <Flash ok={q.ok} err={q.err} />

      <Connection r={r} here={here} connected={connected} />

      <Section
        title="Earnings"
        sub={`${RANGES[range]}, net of refunds.`}
        action={
          <a
            href={`/admin/revenue/export?range=${range}`}
            className="btn-line !h-7 !px-3"
            download
          >
            <Icon name="download" size={14} />
            Orders CSV
          </a>
        }
      >
        <Kpis r={r} />
        {r.orderCount === 0 && (
          <p className="mt-2 text-[12px] text-faint">
            {connected
              ? "No orders yet. Press Sync now to pull them from Lemon Squeezy, or wait for the first webhook."
              : "No orders yet. Orders arrive once the Lemon Squeezy keys and webhook are set up."}
          </p>
        )}
        {r.unconverted.length > 0 && (
          <p className="mt-2 text-[12px] text-faint">
            Not in these totals (no USD amount on the order):{" "}
            {r.unconverted
              .map(
                (u) =>
                  `${money(u.cents, u.currency)} from ${n(u.orders, "order")}`,
              )
              .join(", ")}
            .
          </p>
        )}
      </Section>

      <Section
        title="Recurring"
        sub="Right now, from subscriptions that still bill."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <Kpi
            label="MRR"
            value={money(r.mrr, CUR)}
            hint={
              r.mrrFromSettings
                ? `${num(r.mrrFromSettings)} priced from settings`
                : "Monthly plus yearly / 12, before tax"
            }
          />
          <Kpi label="ARR" value={money(r.arr, CUR)} hint="MRR × 12" />
          <Kpi
            label="Active subscribers"
            value={num(r.activeSubs)}
            hint="Active, trial or past due"
          />
          <Kpi
            label="Lifetime buyers"
            value={num(r.lifetimeBuyers)}
            hint="Paid, not refunded"
          />
          <Kpi
            label="Deal spots"
            value={`${num(r.deal.sold)} / ${num(r.deal.total)}`}
            hint={
              <Link href="/admin/pricing" className="hover:underline">
                {r.deal.enabled
                  ? `${num(r.deal.left)} left${r.deal.soldOut ? ", sold out" : ""}`
                  : "Deal is off"}
              </Link>
            }
          />
        </div>
      </Section>

      <Section title="Revenue over time" sub="Net of refunds, by order date.">
        <div className="grid gap-3 lg:grid-cols-2">
          <MoneyBars
            data={r.daily}
            label={`Per day, last ${r.daily.length} days`}
          />
          <MoneyBars
            data={r.monthly}
            label={`Per month, last ${r.monthly.length} months`}
            every={r.monthly.length > 12 ? 6 : 2}
          />
        </div>
        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <MoneyList
            title={`By plan, ${RANGES[range].toLowerCase()}`}
            rows={r.byPlan.map((p) => ({
              label: p.label,
              cents: p.cents,
              sub: n(p.orders, "order"),
            }))}
            empty="No sales in this range yet."
          />
          <FlowBars data={r.subsFlow} />
        </div>
      </Section>

      <Section
        title="Latest orders"
        sub={`${RANGES[range]}.`}
        action={
          <Link
            href="/admin/orders"
            className="text-[13px] text-mute hover:text-ink hover:underline"
          >
            All orders
          </Link>
        }
      >
        <OrdersTable orders={r.latest} />
      </Section>

      <div className="grid gap-x-3 lg:grid-cols-2 [&>section]:min-w-0">
        <Section title="Upcoming renewals" sub="Next 30 days.">
          <SubsTable subs={r.renewals} kind="renewal" />
        </Section>
        <Section
          title="Needs attention"
          sub="Past-due or unpaid subscriptions, failed orders."
        >
          <SubsTable subs={r.trouble} kind="trouble" failed={r.failedOrders} />
        </Section>
      </div>

      <Section
        title="Lemon Squeezy store totals"
        sub="Their numbers next to ours, all time and last 30 days, in USD."
      >
        <StoreCompare r={r} />
      </Section>
    </div>
  );
}

/* ------------------------------------------------------------------ connection */

function Connection({
  r,
  here,
  connected,
}: {
  r: Revenue;
  here: string;
  connected: boolean;
}) {
  const s = r.sync;
  const missing = [
    !r.keys.apiKey && "LEMONSQUEEZY_API_KEY",
    !r.keys.storeId && "LEMONSQUEEZY_STORE_ID",
  ].filter(Boolean) as string[];
  if (!connected) {
    return (
      <div className="card mt-5 p-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-mute">
            <RIcon name="plug-connected" size={18} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium">
              Lemon Squeezy is not connected yet
            </p>
            <p className="mt-1 text-[13px] text-mute">
              Missing {missing.length === 2 ? "both secrets" : "one secret"}:{" "}
              {missing.map((m, i) => (
                <span key={m}>
                  {i > 0 && " and "}
                  <code className="rounded-[4px] bg-chip px-1 font-mono text-[12px] text-ink">
                    {m}
                  </code>
                </span>
              ))}
              .{" "}
              {!r.keys.webhook &&
                "The webhook signing secret is missing too, so new orders won't arrive on their own."}
            </p>
            <p className="mt-2 text-[13px] text-mute">
              From apps/web, run each line and paste the value from Lemon
              Squeezy (Settings, API for the key; Settings, Stores for the store
              ID):
            </p>
            <pre className="mt-1.5 overflow-x-auto rounded-[6px] bg-tile px-3 py-2 font-mono text-[12px] leading-[1.6] text-ink">
              {missing.map((m) => `npx wrangler secret put ${m}`).join("\n")}
              {!r.keys.webhook
                ? "\nnpx wrangler secret put LEMONSQUEEZY_WEBHOOK_SECRET"
                : ""}
            </pre>
            <p className="mt-2 text-[12px] text-faint">
              The full steps are in the Lemon Squeezy owner checklist
              (LAUNCH-SYSTEM.md, steps 4 to 6). Variant IDs go in Pricing &
              deal. Until then the buy buttons collect waitlist emails.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Link href="/admin/settings" className="btn-line !h-7 !px-3">
                <RIcon name="key" size={14} />
                What is configured
              </Link>
              <Link href="/admin/pricing" className="btn-line !h-7 !px-3">
                Variant IDs
              </Link>
              <a
                href={`${LS}/settings/api`}
                target="_blank"
                rel="noreferrer"
                className="btn-line !h-7 !px-3"
              >
                Lemon Squeezy API keys
                <Icon name="arrow-up-right" size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 p-4">
      <div className="flex min-w-0 flex-1 basis-[300px] items-start gap-3">
        <span
          className={"mt-0.5 " + (s && !s.ok ? "text-[#9b1c1c]" : "text-mute")}
        >
          <RIcon
            name={s && !s.ok ? "alert-triangle" : "plug-connected"}
            size={18}
          />
        </span>
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium">
            {s?.store?.name ? s.store.name : "Lemon Squeezy"}
            <Tag tone="good">Keys set</Tag>
            {s?.testMode === true && <Tag tone="warn">Test mode</Tag>}
            {s?.testMode === false && <Tag tone="ink">Live mode</Tag>}
            {!r.keys.webhook && <Tag tone="warn">No webhook secret</Tag>}
          </p>
          <p className="mt-0.5 text-[13px] text-mute">
            {s ? (
              <>
                Last synced {when(new Date(s.at))}: {num(s.orders.seen)} orders
                and {num(s.subscriptions.seen)} subscriptions read,{" "}
                {num(s.orders.written + s.subscriptions.written)} updated
                {s.partial ? ", stopped early" : ""}.
              </>
            ) : (
              "Never synced. Webhooks keep orders current; a sync pulls everything that came before them."
            )}
          </p>
          {s?.error && (
            <p
              className={
                "mt-1 text-[12px] " + (s.ok ? "text-faint" : "text-[#9b1c1c]")
              }
            >
              {s.error}
            </p>
          )}
          {s && s.unmatchedVariants.length > 0 && (
            <p className="mt-1 text-[12px] text-faint">
              {n(s.orders.unmatched, "order")} {s.orders.unmatched === 1 ? "uses" : "use"} variant IDs that are not in{" "}
              <Link href="/admin/pricing" className="underline">
                Pricing & deal
              </Link>{" "}
              ({s.unmatchedVariants.join(", ")}), so they are not counted here.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <a
          href={`${LS}/settings/payouts`}
          target="_blank"
          rel="noreferrer"
          className="btn-line"
        >
          <RIcon name="building-bank" size={15} />
          Payouts
          <Icon name="arrow-up-right" size={13} />
        </a>
        <form action={syncNow}>
          <input type="hidden" name="back" value={here} />
          <SyncButton />
        </form>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ KPIs */

function Kpis({ r }: { r: Revenue }) {
  const period =
    r.range === "12m" ? "previous 12 months" : `previous ${RANGES[r.range]}`;
  const d = (cur: number, prev: number | undefined, invert = false) =>
    r.prev && prev !== undefined ? (
      <Delta cur={cur} prev={prev} period={period} invert={invert} />
    ) : undefined;
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      <Kpi
        label="Gross revenue"
        value={money(r.gross, CUR)}
        delta={d(r.gross, r.prev?.gross)}
        hint="Order totals, tax included"
      />
      <Kpi
        label="Refunds"
        value={money(r.refunds, CUR)}
        hint={
          r.gross
            ? `${((r.refunds / r.gross) * 100).toFixed(1).replace(/\.0$/, "")}% of gross`
            : "None"
        }
      />
      <Kpi
        label="Net revenue"
        value={money(r.net, CUR)}
        delta={d(r.net, r.prev?.net)}
        hint="Gross minus refunds"
      />
      <Kpi
        label="Paid orders"
        value={num(r.paidOrders)}
        delta={d(r.paidOrders, r.prev?.paidOrders)}
        hint={
          r.charged > r.paidOrders
            ? `${num(r.charged - r.paidOrders)} fully refunded`
            : "Not refunded"
        }
      />
      <Kpi
        label="Average order"
        value={money(r.aov, CUR)}
        hint={
          r.charged ? `Gross over ${n(r.charged, "order")}` : "No orders yet"
        }
      />
    </div>
  );
}

/* ------------------------------------------------------------------ tables */

const lsLink = (path: string, text: ReactNode) =>
  // Contra sales (ids from /admin/activations) have no Lemon Squeezy page.
  /\/act_/.test(path) ? (
    <Link href="/admin/activations?tab=approved" className="hover:underline">
      Contra
    </Link>
  ) : (
    <a href={`${LS}/${path}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
      {text}
      <Icon name="arrow-up-right" size={13} />
    </a>
  );

const who = (email: string, userId: string | null) =>
  userId ? (
    <Link href={`/admin/users/${userId}`} className="hover:underline">
      {email || "No email"}
    </Link>
  ) : (
    email || <span className="text-faint">No email</span>
  );

function OrdersTable({ orders }: { orders: Order[] }) {
  return (
    <Table
      head={["Date", "Customer", "Plan", "Amount", "Status", "Order"]}
      empty="No orders in this range."
    >
      {orders.map((o) => (
        <tr key={o.id}>
          <td className={td + " whitespace-nowrap text-mute"}>{when(o.at)}</td>
          <td className={td}>{who(o.email, o.userId)}</td>
          <td className={td + " whitespace-nowrap"}>{o.plan ? PLAN_NAME[o.plan] : "Unknown"}</td>
          <td className={td + " tabular-nums whitespace-nowrap"}>
            {money(o.amount, o.currency)}
            {o.refundUsd ? (
              <span className="text-faint">
                {" "}
                ({money(-o.refundUsd, CUR)} refunded)
              </span>
            ) : null}
          </td>
          <td className={td}>
            <span className="inline-flex gap-1">
              <Tag tone={statusTone(o.status)}>
                {o.status.replace("_", " ")}
              </Tag>
              {o.test && <Tag>test</Tag>}
            </span>
          </td>
          <td className={td + " whitespace-nowrap"}>
            {lsLink(
              `orders/${encodeURIComponent(o.orderId)}`,
              o.number ? `#${o.number}` : o.orderId,
            )}
          </td>
        </tr>
      ))}
    </Table>
  );
}

function SubsTable({
  subs,
  kind,
  failed = [],
}: {
  subs: Sub[];
  kind: "renewal" | "trouble";
  failed?: Order[];
}) {
  const head =
    kind === "renewal"
      ? ["Renews", "Customer", "Plan", "Amount", ""]
      : ["Since", "Customer", "Plan", "Status", ""];
  return (
    <Table
      head={head}
      empty={
        kind === "renewal"
          ? "No renewals in the next 30 days."
          : "Nothing needs attention."
      }
    >
      {[
        ...subs.map((s) => (
          <tr key={s.id}>
            <td className={td + " whitespace-nowrap text-mute"}>
              {kind === "renewal"
                ? day(s.renewsAt)
                : day(s.renewsAt ?? s.createdAt)}
            </td>
            <td className={td}>{who(s.email, s.userId)}</td>
            <td className={td + " whitespace-nowrap"}>Pro {s.interval}</td>
            <td className={td + " tabular-nums whitespace-nowrap"}>
              {kind === "renewal" ? (
                <>
                  {money(s.priceUsd, CUR)}
                  {s.priceFrom === "settings" && (
                    <span
                      className="text-faint"
                      title="No synced order for this subscription; the price comes from Pricing & deal"
                    >
                      {" "}
                      est.
                    </span>
                  )}
                </>
              ) : (
                <Tag tone={statusTone(s.status)}>
                  {s.status.replace("_", " ")}
                </Tag>
              )}
            </td>
            <td className={td + " text-right whitespace-nowrap"}>
              {lsLink(`subscriptions/${encodeURIComponent(s.subId)}`, "Open")}
            </td>
          </tr>
        )),
        ...failed.map((o) => (
          <tr key={o.id}>
            <td className={td + " whitespace-nowrap text-mute"}>{day(o.at)}</td>
            <td className={td}>{who(o.email, o.userId)}</td>
            <td className={td + " whitespace-nowrap"}>
              {o.plan ? PLAN_NAME[o.plan] : "Order"}
            </td>
            <td className={td}>
              <Tag tone="bad">{cap(o.status)}</Tag>
            </td>
            <td className={td + " text-right whitespace-nowrap"}>
              {lsLink(`orders/${encodeURIComponent(o.orderId)}`, "Open")}
            </td>
          </tr>
        )),
      ]}
    </Table>
  );
}

/* ------------------------------------------------------------------ store compare */

function StoreCompare({ r }: { r: Revenue }) {
  const st = r.sync?.store ?? null;
  const rows: {
    label: string;
    theirs: number | null;
    ours: number;
    isMoney: boolean;
  }[] = [
    {
      label: "Sales, all time",
      theirs: st?.totalSales ?? null,
      ours: r.ours.totalSales,
      isMoney: false,
    },
    {
      label: "Revenue, all time",
      theirs: st?.totalRevenue ?? null,
      ours: r.ours.totalRevenue,
      isMoney: true,
    },
    {
      label: "Sales, last 30 days",
      theirs: st?.thirtyDaySales ?? null,
      ours: r.ours.thirtyDaySales,
      isMoney: false,
    },
    {
      label: "Revenue, last 30 days",
      theirs: st?.thirtyDayRevenue ?? null,
      ours: r.ours.thirtyDayRevenue,
      isMoney: true,
    },
  ];
  const fmt = (v: number, m: boolean) => (m ? money(v, CUR) : num(v));
  const off = st
    ? rows.filter((x) => x.theirs !== null && x.theirs !== x.ours)
    : [];
  return (
    <div className="card overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse text-left text-[13px]">
        <thead>
          <tr className="border-b border-hair text-[12px] text-faint">
            <th className="px-3 py-2 font-normal" />
            <th className="px-3 py-2 text-right font-normal">Lemon Squeezy</th>
            <th className="px-3 py-2 text-right font-normal">Ingot ledger</th>
            <th className="px-3 py-2 text-right font-normal">Difference</th>
          </tr>
        </thead>
        <tbody className="[&>tr:not(:last-child)]:border-b [&>tr]:border-hair">
          {rows.map((x) => (
            <tr key={x.label}>
              <td className={td + " text-mute"}>{x.label}</td>
              <td className={td + " text-right tabular-nums"}>
                {x.theirs === null ? (
                  <span className="text-faint">–</span>
                ) : (
                  fmt(x.theirs, x.isMoney)
                )}
              </td>
              <td className={td + " text-right tabular-nums"}>
                {fmt(x.ours, x.isMoney)}
              </td>
              <td
                className={
                  td +
                  " text-right tabular-nums " +
                  (x.theirs !== null && x.theirs !== x.ours
                    ? "text-[#8a5a00]"
                    : "text-faint")
                }
              >
                {x.theirs === null
                  ? "–"
                  : x.theirs === x.ours
                    ? "Match"
                    : (x.ours > x.theirs ? "+" : "") +
                      fmt(x.ours - x.theirs, x.isMoney)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border-t border-hair px-3 py-2.5 text-[12px] text-faint">
        {!st ? (
          "Lemon Squeezy's own totals appear after the first sync."
        ) : off.length ? (
          <span className="inline-flex items-start gap-1.5 text-[#8a5a00]">
            <RIcon name="alert-triangle" size={14} className="mt-px" />
            <span>
              The numbers differ. Usual reasons: subscription renewals (Lemon
              Squeezy counts them; this ledger stores orders only), orders for
              variants not in Pricing & deal
              {r.sync?.orders.unmatched
                ? ` (${num(r.sync.orders.unmatched)} at the last sync)`
                : ""}
              , refunds, or orders newer than the last sync (
              {when(new Date(r.sync!.at))}).
            </span>
          </span>
        ) : (
          `Matches Lemon Squeezy as of ${when(new Date(r.sync!.at))}.`
        )}
      </div>
    </div>
  );
}
