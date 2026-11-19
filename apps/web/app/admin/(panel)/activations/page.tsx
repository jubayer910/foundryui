import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq, sql } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { requireStaff } from "@/lib/admin";
import { clickSignals, productName, renewalsDue, type Activation, type ClickSignal, type Sub } from "@/lib/activation";
import { sp } from "@/components/admin/guard";
import { AIcon } from "@/components/admin/admin-icons";
import { AdminHead, Flash, LinkTabs, Section, Table, Tag, cap, day, money, td, when } from "@/components/admin/ui";
import { approve, end, reject, renewed } from "./actions";
import { SubmitButton } from "./buttons";

export const metadata: Metadata = { title: "Activations" };

const TABS = ["pending", "approved", "rejected"] as const;
type Tab = (typeof TABS)[number];

/** "4 min ago", "3 h ago", "2 days ago". */
function ago(d: Date, now: number) {
  const m = Math.max(0, Math.round((now - d.getTime()) / 60_000));
  if (m < 1) return "just now";
  if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} h ago`;
  const days = Math.round(h / 24);
  return days === 1 ? "1 day ago" : `${days} days ago`;
}

function gap(min: number) {
  if (min < 1) return "less than a minute before";
  if (min < 60) return `${min} min before`;
  const h = Math.round(min / 60);
  if (h < 48) return `${h} h before`;
  return `${Math.round(h / 24)} days before`;
}

async function load(tab: Tab) {
  const db = await getDb();
  const A = schema.activation;
  const [rows, counts, due] = await Promise.all([
    db
      .select()
      .from(A)
      .where(eq(A.status, tab))
      .orderBy(tab === "pending" ? A.createdAt : desc(A.decidedAt))
      .limit(100),
    db.select({ status: A.status, n: sql<number>`count(*)` }).from(A).groupBy(A.status),
    renewalsDue(3),
  ]);
  return { rows, counts, due, signals: await clickSignals(rows), now: Date.now() };
}

export default async function AdminActivations({ searchParams }: PageProps<"/admin/activations">) {
  await requireStaff("orders", "/admin/activations");
  const q = await searchParams;
  const tab: Tab = (TABS as readonly string[]).includes(sp(q.tab)) ? (sp(q.tab) as Tab) : "pending";
  const { rows, counts, due, signals, now } = await load(tab);
  const n = (s: string) => Number(counts.find((c) => c.status === s)?.n ?? 0);
  const here = `/admin/activations${tab === "pending" ? "" : "?tab=" + tab}`;

  return (
    <div>
      <AdminHead title="Activations" sub="Buyers who paid on Contra. Find the sale in Contra, then approve to switch their plan on." />
      <Flash ok={q.ok} err={q.err} />

      <div className="mt-5">
        <LinkTabs tabs={TABS.map((t) => ({ href: t === "pending" ? "/admin/activations" : `/admin/activations?tab=${t}`, label: cap(t), count: n(t), on: t === tab }))} />
      </div>

      {rows.length === 0 ? (
        <div className="card mt-4 flex flex-col items-start gap-1 p-5 text-[13px]">
          <AIcon name={tab === "pending" ? "circle-check" : "inbox"} size={20} className="text-faint" />
          <p className="mt-1 font-medium">{tab === "pending" ? "All caught up" : `No ${tab} requests yet`}</p>
          <p className="text-mute">{tab === "pending" ? "New requests from /activate show up here." : "Decided requests are listed here, newest first."}</p>
        </div>
      ) : (
        <>
          {/* Phones and tablets: one big card per request, buttons at the bottom for the thumb. */}
          <ul className="mt-4 grid gap-3 lg:hidden">
            {rows.map((a) => (
              <li key={a.id}>
                <RequestCard a={a} signal={signals.get(a.id)} now={now} back={here} />
              </li>
            ))}
          </ul>
          {/* Desktop: a table. */}
          <div className="mt-4 hidden lg:block">
            <RequestTable rows={rows} signals={signals} now={now} back={here} tab={tab} />
          </div>
        </>
      )}

      <Renewals due={due} now={now} back={here} />
    </div>
  );
}

const CONTRA_AUTO = "contra-auto";

/** Approved by the Contra sales sync, not by staff. */
function AutoTag() {
  return (
    <span className="inline-flex h-5 shrink-0 items-center gap-1 rounded-full bg-[#e7f6ec] px-2 text-[12px] whitespace-nowrap text-[#17663a]">
      <AIcon name="bolt" size={12} />
      Auto by Contra
    </span>
  );
}

function Signal({ s }: { s: ClickSignal | undefined }) {
  if (!s) return null;
  return (
    <span className={"inline-flex items-center gap-1.5 " + (s.clicked ? "text-[#17663a]" : "text-[#8a5a00]")}>
      <AIcon name="click" size={14} className="shrink-0" />
      {s.clicked ? `Clicked through to Contra: yes, ${gap(s.minutesBefore ?? 0)}` : "Clicked through to Contra: no click recorded"}
    </span>
  );
}

function RequestCard({ a, signal, now, back }: { a: Activation; signal?: ClickSignal; now: number; back: string }) {
  const pending = a.status === "pending";
  const other = a.accountEmail.toLowerCase() !== a.payerEmail.toLowerCase();
  return (
    <article className="card p-4">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-medium">{a.payerEmail}</p>
          {other && (
            <p className="mt-0.5 truncate text-[13px] text-mute">
              Account: <Link href={`/admin/users/${a.userId}`} className="text-ink-2 underline-offset-2 hover:underline">{a.accountEmail}</Link>
            </p>
          )}
        </div>
        <span className="shrink-0 text-[12px] text-faint tabular-nums">{ago(a.createdAt, now)}</span>
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-[17px] font-medium tracking-[-0.01em]">{productName(a.variantKey)}</span>
        <span className="text-[15px] tabular-nums text-ink-2">{money(a.amountCents)}</span>
      </div>

      <ul className="mt-2 flex flex-col gap-1 text-[13px]">
        <li className="flex items-center gap-1.5 text-mute">
          <AIcon name="receipt" size={14} className="shrink-0" />
          {a.reference ? <span className="truncate">Receipt {a.reference}</span> : "No receipt number given"}
        </li>
        <li className="flex items-center gap-1.5 text-mute">
          <AIcon name="user" size={14} className="shrink-0" />
          {a.contraName ? <span className="truncate">Name on Contra: {a.contraName}</span> : "No Contra name given"}
        </li>
        <li>
          <Signal s={signal} />
        </li>
        {!pending && (
          <li className="flex items-center gap-1.5 text-mute">
            <AIcon name={a.status === "approved" ? "circle-check" : "circle-x"} size={14} className="shrink-0" />
            <span className="truncate">
              {cap(a.status)} by {a.decidedBy}, {when(a.decidedAt)}
            </span>
            {a.decidedBy === CONTRA_AUTO && <AutoTag />}
          </li>
        )}
        {a.note && <li className="text-mute">Reason: {a.note}</li>}
      </ul>

      {pending && (
        <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2">
          <form action={approve}>
            <input type="hidden" name="id" value={a.id} />
            <input type="hidden" name="back" value={back} />
            <SubmitButton busy="Approving…" className="btn-ink !h-12 w-full !text-[15px]">
              <AIcon name="check" size={17} />
              Approve
            </SubmitButton>
          </form>
          <RejectForm id={a.id} back={back} big />
        </div>
      )}
    </article>
  );
}

/** Reject behind a disclosure, with an optional reason the buyer sees. */
function RejectForm({ id, back, big = false }: { id: string; back: string; big?: boolean }) {
  return (
    <details className="group">
      <summary className={"btn-line cursor-pointer list-none [&::-webkit-details-marker]:hidden group-open:!bg-tile " + (big ? "!h-12 !px-5 !text-[15px]" : "!h-8")}>Reject</summary>
      <form action={reject} className="col-span-2 mt-2 flex w-[min(320px,calc(100vw-64px))] flex-col gap-2 rounded-[8px] bg-white p-3 shadow-[0_0_0_1px_var(--color-hair-2),0_8px_24px_rgb(0_0_0/0.08)] max-lg:fixed max-lg:inset-x-4 max-lg:bottom-4 max-lg:z-40 max-lg:w-auto">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="back" value={back} />
        <label className="flex flex-col gap-1 text-[12px] text-mute">
          Reason, shown to the buyer (optional)
          <textarea name="note" rows={2} maxLength={500} placeholder="For example: no Contra payment found for this email." className="w-full rounded-[6px] bg-white px-2.5 py-2 text-[14px] leading-[1.5] text-ink shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none focus:shadow-[inset_0_0_0_1px_var(--color-ink)]" />
        </label>
        <SubmitButton busy="Rejecting…" className={"btn-ink !bg-[#9b1c1c] " + (big ? "!h-11" : "!h-8")}>
          Reject request
        </SubmitButton>
      </form>
    </details>
  );
}

function RequestTable({ rows, signals, now, back, tab }: { rows: Activation[]; signals: Map<string, ClickSignal>; now: number; back: string; tab: Tab }) {
  return (
    <Table head={["Requested", "Paid as", "Plan", "Price", "Receipt", "Contra click", tab === "pending" ? "" : "Decided"]}>
      {rows.map((a) => {
        const s = signals.get(a.id);
        const other = a.accountEmail.toLowerCase() !== a.payerEmail.toLowerCase();
        return (
          <tr key={a.id}>
            <td className={td + " whitespace-nowrap text-mute"} title={when(a.createdAt)}>{ago(a.createdAt, now)}</td>
            <td className={td}>
              <span className="block max-w-[240px] truncate">{a.payerEmail}</span>
              {other && (
                <Link href={`/admin/users/${a.userId}`} className="block max-w-[240px] truncate text-[12px] text-faint hover:text-ink">
                  Account {a.accountEmail}
                </Link>
              )}
            </td>
            <td className={td + " whitespace-nowrap"}>{productName(a.variantKey)}</td>
            <td className={td + " tabular-nums"}>{money(a.amountCents)}</td>
            <td className={td + " text-mute"}>{a.reference ?? "None"}</td>
            <td className={td}>
              {s?.clicked ? <Tag tone="good">Yes, {gap(s.minutesBefore ?? 0)}</Tag> : <Tag tone="warn">No click recorded</Tag>}
            </td>
            <td className={td + " text-right"}>
              {tab === "pending" ? (
                <div className="flex items-start justify-end gap-1.5">
                  <form action={approve}>
                    <input type="hidden" name="id" value={a.id} />
                    <input type="hidden" name="back" value={back} />
                    <SubmitButton busy="Approving…" className="btn-ink !h-8">
                      <AIcon name="check" size={15} />
                      Approve
                    </SubmitButton>
                  </form>
                  <div className="relative text-left [&_form]:absolute [&_form]:right-0 [&_form]:z-10">
                    <RejectForm id={a.id} back={back} />
                  </div>
                </div>
              ) : (
                <span className="block text-left text-[12px] text-mute">
                  {when(a.decidedAt)}, {a.decidedBy}
                  {a.decidedBy === CONTRA_AUTO && (
                    <span className="ml-1.5 align-middle">
                      <AutoTag />
                    </span>
                  )}
                  {a.note && <span className="block max-w-[260px] truncate text-faint" title={a.note}>{a.note}</span>}
                </span>
              )}
            </td>
          </tr>
        );
      })}
    </Table>
  );
}

function Renewals({ due, now, back }: { due: Sub[]; now: number; back: string }) {
  return (
    <Section title="Renewals due" sub="Contra subscriptions renewing in the next 3 days or overdue. Check Contra for the payment, then mark it.">
      {due.length === 0 ? (
        <div className="card flex items-center gap-2 p-4 text-[13px] text-mute">
          <AIcon name="calendar-repeat" size={16} className="shrink-0 text-faint" />
          No renewals due in the next 3 days.
        </div>
      ) : (
        <ul className="grid gap-3 lg:grid-cols-2">
          {due.map((s) => {
            const overdue = !!s.renewsAt && s.renewsAt.getTime() < now;
            return (
              <li key={s.id} className="card p-4">
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-medium">{s.email}</p>
                    <p className="mt-0.5 text-[13px] text-mute">
                      {cap(s.plan)} {s.interval}, renews {day(s.renewsAt)}
                    </p>
                  </div>
                  <Tag tone={overdue ? "bad" : "warn"}>{overdue ? "Overdue" : "Due soon"}</Tag>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <form action={renewed}>
                    <input type="hidden" name="id" value={s.id} />
                    <input type="hidden" name="back" value={back} />
                    <SubmitButton busy="Saving…" className="btn-ink !h-11 w-full">
                      <AIcon name="calendar-repeat" size={16} />
                      Renewed
                    </SubmitButton>
                  </form>
                  <form action={end}>
                    <input type="hidden" name="id" value={s.id} />
                    <input type="hidden" name="back" value={back} />
                    <SubmitButton busy="Ending…" className="btn-line !h-11 w-full">
                      <AIcon name="calendar-x" size={16} />
                      End
                    </SubmitButton>
                  </form>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}
