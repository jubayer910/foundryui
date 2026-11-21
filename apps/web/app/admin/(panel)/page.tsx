import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { and, count, desc, eq, gte, inArray } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { can, requireStaff, type Role } from "@/lib/admin";
import { pendingCount } from "@/lib/activation";
import { botGap } from "@/lib/support/assistant/gaps";
import { loadReport } from "@/lib/reports/load";
import { parseState, rangeLabel, type DatasetId } from "@/lib/reports/period";
import type { DatasetResult, MetricDef } from "@/lib/reports/types";
import { AIcon, type AdminIconName } from "@/components/admin/admin-icons";
import { PeriodBar } from "@/components/admin/reports/period-bar";
import { Trend } from "@/components/admin/reports/trend";
import { MetricKpi, periodText } from "@/components/admin/reports/view";
import { AdminHead, Kpi, Tag, cap, money, num, statusTone, when } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Home" };

const DAY = 86_400_000;

/**
 * Home, the "Today" cockpit (app/admin/DESIGN.md): four headline numbers for the period (a day by default),
 * one trend, what needs attention, and recent activity. Numbers come from the report engine; the queue counts
 * and the feed are one D1 batch.
 */
export default async function Home({ searchParams }: PageProps<"/admin">) {
  const { role } = await requireStaff("overview", "/admin");
  const s = parseState(await searchParams, undefined, { gran: "day" });
  const ds: DatasetId[] = ["traffic", "audience", "revenue"];
  // Home has always shown revenue to everyone who can open it, so the revenue dataset is loaded for all staff.
  const [r, q] = await Promise.all([loadReport(s, { revenue: true }, ds), loadQueues(role)]);
  const pick = (id: DatasetId, m: string): { d: DatasetResult; m: MetricDef } | null => {
    const d = r.datasets.find((x) => x.id === id);
    const def = d?.metrics.find((x) => x.id === m);
    return d && def && !d.error ? { d, m: def } : null;
  };
  const kpis = [pick("revenue", "net"), pick("audience", "signups"), pick("traffic", "visitors")].filter((x) => !!x);
  const trend = kpis;
  const rows = r.buckets.map((p, i) => ({ key: p.key, name: p.name, dates: p.dates, tick: p.tick, v: Object.fromEntries(trend.map((t) => [t.m.id, t.d.rows[i]?.v[t.m.id] ?? null])) }));
  const isToday = s.gran === "day" && s.current;

  return (
    <div>
      <AdminHead title={isToday ? "Today" : "Home"} sub={`${periodText(r.sel)}${r.cmp ? ` vs ${r.cmp.name}` : ""}, ${s.tz === "UTC" ? "UTC" : "Dhaka time"}`} />
      <Suspense>
        <PeriodBar defaultGran="day" compact />
      </Suspense>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {kpis.map((k) => (
          <MetricKpi key={k.m.id} m={k.m} d={k.d} r={r} />
        ))}
        <Kpi label="Paying customers" value={num(q.paying)} hint="Accounts on Pro or Lifetime right now. A level, so it has no change." />
      </div>

      <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1fr)_380px]">
        <Trend title={rangeLabel(s.gran, s.range)} metrics={trend.map((t) => ({ id: t.m.id, label: t.m.label, unit: t.m.unit }))} rows={rows} selected={r.sel.key} compare={r.cmp?.key ?? null} />
        <Attention items={q.attention} />
      </div>

      <section className="mt-8" aria-labelledby="recent">
        <h2 id="recent" className="mb-3 text-[15px] font-medium tracking-[-0.01em]">
          Recent activity
        </h2>
        {q.feed.length ? (
          <ol className="card divide-y divide-hair">
            {q.feed.map((f) => (
              <li key={f.key}>
                <FeedRow f={f} />
              </li>
            ))}
          </ol>
        ) : (
          <p className="card px-4 py-8 text-center text-[13px] text-mute">Nothing has happened yet.</p>
        )}
      </section>
    </div>
  );
}

type AttentionItem = { label: string; n: number; href: string; icon: AdminIconName };
type FeedItem = { key: string; at: Date; icon: AdminIconName; title: string; sub: string; href?: string; tag: string; tone: ReturnType<typeof statusTone> };

/** Queue counts and the feed, filtered by what the role can open. One D1 batch plus the pending-activation count. */
async function loadQueues(role: Role) {
  const db = await getDb();
  const since = new Date(Date.now() - 30 * DAY);
  const P = schema.purchase;
  const U = schema.user;
  const T = schema.ticket;
  const [open, gaps, unmatched, trouble, failed, paying, recentP, recentU, recentT] = await db.batch([
    db.select({ n: count() }).from(T).where(eq(T.status, "open")),
    db.select({ n: count() }).from(botGap).where(eq(botGap.dismissed, false)),
    db.select({ n: count() }).from(schema.contraSale).where(eq(schema.contraSale.status, "unmatched")),
    db.select({ n: count() }).from(schema.subscription).where(inArray(schema.subscription.status, ["past_due", "unpaid"])),
    db.select({ n: count() }).from(P).where(and(inArray(P.status, ["failed", "fraudulent"]), gte(P.createdAt, since))),
    db.select({ n: count() }).from(U).where(inArray(U.plan, ["pro", "lifetime"])),
    db.select().from(P).orderBy(desc(P.createdAt)).limit(6),
    db.select({ id: U.id, name: U.name, email: U.email, plan: U.plan, createdAt: U.createdAt }).from(U).orderBy(desc(U.createdAt)).limit(6),
    db.select().from(T).orderBy(desc(T.updatedAt)).limit(6),
  ]);
  const pending = can(role, "orders") ? await pendingCount() : 0;
  const n = (x: { n: number }[]) => Number(x[0]?.n ?? 0);
  const attention: AttentionItem[] = [];
  if (can(role, "orders")) attention.push({ label: "Activations to approve", n: pending, href: "/admin/activations", icon: "rosette-discount-check" });
  if (can(role, "support")) attention.push({ label: "Open tickets", n: n(open), href: "/admin/support", icon: "inbox" });
  if (can(role, "kb")) attention.push({ label: "Unanswered bot questions", n: n(gaps), href: "/admin/kb/gaps", icon: "message-question" });
  if (can(role, "orders")) attention.push({ label: "Unmatched Contra sales", n: n(unmatched), href: "/admin/contra?status=unmatched", icon: "plug-connected" });
  if (can(role, "revenue")) {
    attention.push({ label: "Past-due subscriptions", n: n(trouble), href: "/admin/revenue#attention", icon: "credit-card" });
    attention.push({ label: "Failed payments, 30 days", n: n(failed), href: "/admin/revenue#attention", icon: "alert-triangle" });
  }
  const orders = can(role, "orders");
  const feed: FeedItem[] = [
    ...recentP.map((p) => ({ key: "p" + p.id, at: p.createdAt, icon: "receipt" as const, title: p.email, sub: `${cap(p.plan)} order, ${money(p.amountCents, p.currency)}`, href: orders ? `/admin/orders?q=${encodeURIComponent(p.email)}` : undefined, tag: p.status.replace(/_/g, " "), tone: statusTone(p.status) })),
    ...recentU.map((u) => ({ key: "u" + u.id, at: u.createdAt, icon: "user-plus" as const, title: u.name || u.email, sub: `Signed up, ${u.email}`, href: can(role, "users") ? `/admin/users/${u.id}` : undefined, tag: u.plan, tone: (u.plan === "free" ? "plain" : "good") as FeedItem["tone"] })),
    ...recentT.map((t) => ({ key: "t" + t.id, at: t.updatedAt, icon: "message" as const, title: t.subject, sub: `Ticket from ${t.email}`, href: can(role, "support") ? `/admin/support/${t.id}` : undefined, tag: t.status, tone: statusTone(t.status) })),
  ]
    .sort((a, b) => b.at.getTime() - a.at.getTime())
    .slice(0, 8);
  return { attention, paying: n(paying), feed };
}

function Attention({ items }: { items: AttentionItem[] }) {
  const due = items.filter((i) => i.n > 0);
  return (
    <section className="card flex flex-col p-4" aria-labelledby="attention">
      <h2 id="attention" className="text-[13px] font-medium">
        Needs attention
      </h2>
      {due.length ? (
        <ul className="mt-2 -mx-2 flex flex-col">
          {due.map((i) => (
            <li key={i.label}>
              <Link href={i.href} className="flex h-10 items-center gap-2.5 rounded-[6px] px-2 text-[13px] transition-colors duration-150 hover:bg-tile">
                <AIcon name={i.icon} size={16} className="text-mute" />
                <span className="min-w-0 flex-1 truncate">{i.label}</span>
                <span className="font-medium tabular-nums">{num(i.n)}</span>
                <AIcon name="chevron-right" size={14} className="text-faint" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 flex flex-1 items-center gap-2 text-[13px] text-mute">
          <AIcon name="circle-check" size={16} />
          All clear. Nothing is waiting on you.
        </p>
      )}
    </section>
  );
}

function FeedRow({ f }: { f: FeedItem }) {
  const inner = (
    <>
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-tile text-mute">
        <AIcon name={f.icon} size={15} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate">{f.title}</span>
        <span className="block truncate text-[12px] text-mute">{f.sub}</span>
      </span>
      <Tag tone={f.tone}>{f.tag}</Tag>
      <time dateTime={f.at.toISOString()} className="hidden w-[132px] shrink-0 text-right text-[12px] text-mute tabular-nums sm:block">
        {when(f.at)}
      </time>
    </>
  );
  const cls = "flex items-center gap-3 px-4 py-2.5 text-[13px]";
  return f.href ? (
    <Link href={f.href} className={cls + " transition-colors duration-150 hover:bg-wash"}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
