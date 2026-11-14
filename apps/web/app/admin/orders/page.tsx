import type { Metadata } from "next";
import Link from "next/link";
import { and, desc, eq, like, type SQL } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { adminOnly, sp } from "@/components/admin/guard";
import { AdminHead, Confirm, Field, Flash, Section, Table, Tag, cap, input, money, statusTone, td, when } from "@/components/admin/ui";
import { Icon } from "@/registry/components/icons";
import { grantPlan, revokePurchase } from "./actions";

export const metadata: Metadata = { title: "Orders" };

const PURCHASE_STATUS = ["paid", "pending", "granted", "refunded", "revoked"];
const SUB_STATUS = ["active", "on_trial", "past_due", "paused", "unpaid", "cancelled", "expired"];

export default async function AdminOrders({ searchParams }: PageProps<"/admin/orders">) {
  await adminOnly();
  const q = await searchParams;
  const plan = sp(q.plan);
  const status = sp(q.status);
  const search = sp(q.q).trim().toLowerCase();
  const db = await getDb();
  const P = schema.purchase;
  const S = schema.subscription;

  const pw: SQL[] = [];
  if (plan) pw.push(eq(P.plan, plan));
  if (status) pw.push(eq(P.status, status));
  if (search) pw.push(like(P.email, `%${search}%`));
  const sw: SQL[] = [];
  if (plan === "lifetime") sw.push(eq(S.plan, "__none__"));
  else if (plan) sw.push(eq(S.plan, plan));
  if (status) sw.push(eq(S.status, status));
  if (search) sw.push(like(S.email, `%${search}%`));

  const [purchases, subs] = await Promise.all([
    db.select().from(P).where(pw.length ? and(...pw) : undefined).orderBy(desc(P.createdAt)).limit(200),
    db.select().from(S).where(sw.length ? and(...sw) : undefined).orderBy(desc(S.updatedAt)).limit(200),
  ]);
  const here = "/admin/orders" + (Object.keys(q).length ? "?" + new URLSearchParams(Object.entries({ plan, status, q: search }).filter(([, v]) => v)).toString() : "");

  return (
    <div>
      <AdminHead title="Orders" sub="Purchases and subscriptions from Lemon Squeezy, plus manual grants.">
        <a href="https://app.lemonsqueezy.com/orders" target="_blank" rel="noreferrer" className="btn-line">
          Lemon Squeezy
          <Icon name="arrow-up-right" size={14} />
        </a>
      </AdminHead>
      <Flash ok={q.ok} err={q.err} />

      <form method="get" className="mt-5 flex flex-wrap items-end gap-2">
        <Field label="Email" className="w-full sm:w-[240px]">
          <input name="q" defaultValue={search} placeholder="Search email" className={input} />
        </Field>
        <Field label="Plan" className="w-[140px]">
          <select name="plan" defaultValue={plan} className={input}>
            <option value="">All plans</option>
            <option value="pro">Pro</option>
            <option value="lifetime">Lifetime</option>
          </select>
        </Field>
        <Field label="Status" className="w-[160px]">
          <select name="status" defaultValue={status} className={input}>
            <option value="">Any status</option>
            <optgroup label="Purchases">
              {PURCHASE_STATUS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </optgroup>
            <optgroup label="Subscriptions">
              {SUB_STATUS.map((s) => (
                <option key={s} value={s}>{s.replace("_", " ")}</option>
              ))}
            </optgroup>
          </select>
        </Field>
        <button className="btn-ink">Filter</button>
        {(plan || status || search) && (
          <Link href="/admin/orders" className="btn-line">
            Clear
          </Link>
        )}
      </form>

      <Section title="Purchases" sub={`${purchases.length} shown`}>
        <Table head={["Date", "Email", "Plan", "Amount", "Status", "Order", ""]} empty="No purchases match.">
          {purchases.map((p) => (
            <tr key={p.id}>
              <td className={td + " whitespace-nowrap text-mute"}>{when(p.createdAt)}</td>
              <td className={td}>
                {p.userId ? (
                  <Link href={`/admin/users/${p.userId}`} className="hover:underline">{p.email}</Link>
                ) : (
                  p.email
                )}
                {p.note && <span className="block max-w-[280px] truncate text-[12px] text-faint" title={p.note}>{p.note}</span>}
              </td>
              <td className={td}>{cap(p.plan)}{p.variant && <span className="text-faint"> {p.variant}</span>}</td>
              <td className={td + " tabular-nums"}>{money(p.amountCents, p.currency)}</td>
              <td className={td}><Tag tone={statusTone(p.status)}>{p.status}</Tag></td>
              <td className={td}>
                {p.provider === "lemonsqueezy" ? (
                  <a href={`https://app.lemonsqueezy.com/orders/${encodeURIComponent(p.providerOrderId)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                    {p.providerOrderId}
                    <Icon name="arrow-up-right" size={13} />
                  </a>
                ) : (
                  <span className="text-faint">Manual</span>
                )}
              </td>
              <td className={td + " text-right"}>
                {(p.status === "granted" || p.status === "paid") && (
                  <Confirm label="Revoke" tone="bad">
                    <form action={revokePurchase} className="flex flex-col gap-2 text-left">
                      <input type="hidden" name="id" value={p.id} />
                      <input type="hidden" name="back" value={here} />
                      <p className="text-[12px] text-mute">Removes the access this row gives. {p.status === "paid" ? "It does not refund: refund in Lemon Squeezy." : ""}</p>
                      <input name="note" required placeholder="Reason (saved in the audit log)" className={input} />
                      <button className="btn-ink !h-7">Revoke access</button>
                    </form>
                  </Confirm>
                )}
              </td>
            </tr>
          ))}
        </Table>
      </Section>

      <Section title="Subscriptions" sub={`${subs.length} shown`}>
        <Table head={["Updated", "Email", "Plan", "Status", "Renews", "Ends", "Subscription"]} empty="No subscriptions match.">
          {subs.map((s) => (
            <tr key={s.id}>
              <td className={td + " whitespace-nowrap text-mute"}>{when(s.updatedAt)}</td>
              <td className={td}>
                {s.userId ? <Link href={`/admin/users/${s.userId}`} className="hover:underline">{s.email}</Link> : s.email}
              </td>
              <td className={td}>{cap(s.plan)} <span className="text-faint">{s.interval}</span></td>
              <td className={td}><Tag tone={statusTone(s.status)}>{s.status.replace("_", " ")}</Tag></td>
              <td className={td + " whitespace-nowrap text-mute"}>{when(s.renewsAt)}</td>
              <td className={td + " whitespace-nowrap text-mute"}>{when(s.endsAt)}</td>
              <td className={td}>
                <a href={`https://app.lemonsqueezy.com/subscriptions/${encodeURIComponent(s.providerSubId)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                  {s.providerSubId}
                  <Icon name="arrow-up-right" size={13} />
                </a>
              </td>
            </tr>
          ))}
        </Table>
      </Section>

      <Section title="Grant a plan" sub="For press, giveaways or fixing a missed webhook. The customer needs an account.">
        <form action={grantPlan} className="card grid gap-3 p-4 sm:grid-cols-[minmax(0,1.2fr)_140px_minmax(0,1.5fr)_auto] sm:items-end">
          <input type="hidden" name="back" value="/admin/orders" />
          <Field label="Customer email">
            <input name="email" type="email" required placeholder="name@company.com" className={input} />
          </Field>
          <Field label="Plan">
            <select name="plan" defaultValue="lifetime" className={input}>
              <option value="pro">Pro</option>
              <option value="lifetime">Lifetime</option>
            </select>
          </Field>
          <Field label="Note">
            <input name="note" required placeholder="Why, for the audit log" className={input} />
          </Field>
          <button className="btn-ink">Grant plan</button>
        </form>
      </Section>
    </div>
  );
}
