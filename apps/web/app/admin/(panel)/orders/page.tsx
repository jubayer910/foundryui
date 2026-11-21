import type { Metadata } from "next";
import Link from "next/link";
import { and, count, desc, eq, like, type SQL } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { sp } from "@/components/admin/guard";
import { requireStaff } from "@/lib/admin";
import { AIcon } from "@/components/admin/admin-icons";
import { Drawer, Facts } from "@/components/admin/drawer";
import { AdminHead, Field, Flash, LinkTabs, Pager, PhoneList, PhoneRow, Section, Table, Tag, Toolbar, cap, day, input, money, pageOf, statusTone, td, tdNum, when } from "@/components/admin/ui";
import { FilterSheet } from "@/components/admin/filter-sheet";
import { Icon } from "@/registry/components/icons";
import { grantPlan, revokePurchase } from "./actions";
import { syncNow } from "../revenue/actions";
import { sourceOf } from "../revenue/data";
import { SyncButton } from "../revenue/sync-button";
import { getSyncState } from "@/lib/lemonsqueezy-sync";
import { checkoutKeys } from "@/lib/lemonsqueezy";
import { getEnv } from "@/lib/db";

export const metadata: Metadata = { title: "Orders" };

const PURCHASE_STATUS = ["paid", "pending", "granted", "refunded", "revoked"];
const SOURCE_HINT = { webhook: "Written by a Lemon Squeezy webhook", sync: "Written by Sync now (Lemon Squeezy API)", manual: "Granted by hand in admin", contra: "Paid on Contra, approved in Activations", unknown: "Source not recorded" } as const;
const SUB_STATUS = ["active", "on_trial", "past_due", "paused", "unpaid", "cancelled", "expired"];
const PER_PAGE = 50;
const sel = input + " !w-auto appearance-none pr-7";

export default async function AdminOrders({ searchParams }: PageProps<"/admin/orders">) {
  await requireStaff("orders", "/admin/orders");
  const q = await searchParams;
  const plan = sp(q.plan);
  const status = sp(q.status);
  const search = sp(q.q).trim().toLowerCase();
  const view = sp(q.view) === "subs" ? "subs" : "purchases";
  const page = pageOf(q.page);
  const open = sp(q.order);
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
  const pWhere = pw.length ? and(...pw) : undefined;
  const sWhere = sw.length ? and(...sw) : undefined;
  const off = (page - 1) * PER_PAGE;

  const [[pc], [sc], purchases, subs, picked, sync, env] = await Promise.all([
    db.select({ n: count() }).from(P).where(pWhere),
    db.select({ n: count() }).from(S).where(sWhere),
    view === "purchases" ? db.select().from(P).where(pWhere).orderBy(desc(P.createdAt)).limit(PER_PAGE).offset(off) : Promise.resolve([]),
    view === "subs" ? db.select().from(S).where(sWhere).orderBy(desc(S.updatedAt)).limit(PER_PAGE).offset(off) : Promise.resolve([]),
    open ? db.select().from(P).where(eq(P.id, open)).limit(1) : Promise.resolve([]),
    getSyncState(db),
    getEnv(),
  ]);
  const canSync = !!checkoutKeys(env);
  const total = view === "subs" ? (sc?.n ?? 0) : (pc?.n ?? 0);
  const pages = Math.max(1, Math.ceil(total / PER_PAGE));
  const qs = (over: Record<string, string | undefined>) => {
    const o = { q: search, plan, status, view: view === "subs" ? "subs" : "", page: page > 1 ? String(page) : "", ...over };
    const u = new URLSearchParams(Object.entries(o).filter(([, v]) => v !== undefined && v !== "") as [string, string][]);
    return "/admin/orders" + (u.size ? "?" + u.toString() : "");
  };
  const here = qs({});
  const o = picked[0];

  return (
    <div>
      <AdminHead title="Orders" sub={sync ? `Last synced ${when(new Date(sync.at))}` : "Never synced with Lemon Squeezy"} info="Purchases and subscriptions from Lemon Squeezy and Contra, plus plans granted by staff.">
        <a href="#grant" className="btn-line !h-8 !px-3">
          <AIcon name="user-plus" size={15} />
          Grant a plan
        </a>
        {canSync && (
          <form action={syncNow}>
            <input type="hidden" name="back" value={here} />
            <SyncButton tone="line" />
          </form>
        )}
        <a href="https://app.lemonsqueezy.com/orders" target="_blank" rel="noreferrer" className="btn-line !h-8 !px-3">
          Lemon Squeezy
          <Icon name="arrow-up-right" size={14} />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </AdminHead>
      <Flash ok={q.ok} err={q.err} />

      <Toolbar>
        <LinkTabs
          tabs={[
            { href: qs({ view: "", page: "" }), label: "Purchases", count: pc?.n ?? 0, on: view === "purchases" },
            { href: qs({ view: "subs", page: "" }), label: "Subscriptions", count: sc?.n ?? 0, on: view === "subs" },
          ]}
        />
        <form method="get" className="flex w-full flex-wrap items-center gap-2 sm:ml-auto sm:w-auto" role="search">
          {view === "subs" && <input type="hidden" name="view" value="subs" />}
          <label className="relative block min-w-0 flex-1 sm:w-[220px] sm:flex-none">
            <span className="sr-only">Search by email</span>
            <AIcon name="search" size={15} className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-faint" />
            <input name="q" defaultValue={search} placeholder="Search email" className={input + " pl-8"} />
          </label>
          <FilterSheet active={(plan ? 1 : 0) + (status ? 1 : 0)} clearHref={view === "subs" ? "/admin/orders?view=subs" : "/admin/orders"}>
          <label>
            <span className="sr-only">Plan</span>
            <select name="plan" defaultValue={plan} className={sel}>
              <option value="">All plans</option>
              <option value="pro">Pro</option>
              <option value="team">Team</option>
              <option value="lifetime">Lifetime</option>
            </select>
          </label>
          <label>
            <span className="sr-only">Status</span>
            <select name="status" defaultValue={status} className={sel}>
              <option value="">Any status</option>
              {(view === "subs" ? SUB_STATUS : PURCHASE_STATUS).map((s) => (
                <option key={s} value={s}>
                  {s.replace("_", " ")}
                </option>
              ))}
            </select>
          </label>
          </FilterSheet>
          <button className="btn-line !h-8 !px-3 max-md:!hidden">Apply</button>
          {(plan || status || search) && (
            <Link href={view === "subs" ? "/admin/orders?view=subs" : "/admin/orders"} className="text-[13px] text-mute hover:text-ink hover:underline max-md:hidden">
              Clear
            </Link>
          )}
        </form>
      </Toolbar>

      <div className="mt-4">
        {view === "purchases" ? (
          <Table
            head={["Date", "Email", "Plan", "Amount", "Status", "Source"]}
            right={[3]}
            empty="No purchases match."
            mobile={
              <PhoneList label="Purchases">
                {purchases.map((p) => (
                  <PhoneRow
                    key={p.id}
                    href={qs({ order: p.id })}
                    scroll={false}
                    selected={p.id === open}
                    title={p.email}
                    meta={
                      <>
                        <span>{cap(p.plan)}</span>
                        <span className="tabular-nums">{day(p.createdAt)}</span>
                        <span>{cap(sourceOf(p))}</span>
                      </>
                    }
                    value={money(p.amountCents, p.currency)}
                    valueSub={<Tag tone={statusTone(p.status)}>{p.status.replace("_", " ")}</Tag>}
                  />
                ))}
              </PhoneList>
            }
          >
            {purchases.map((p) => (
              <tr key={p.id} aria-selected={p.id === open || undefined} className="aria-selected:bg-tile">
                <td className={td + " whitespace-nowrap text-mute tabular-nums"}>
                  <Link href={qs({ order: p.id })} scroll={false} className="hover:text-ink hover:underline">
                    {when(p.createdAt)}
                  </Link>
                </td>
                <td className={td}>
                  <Link href={qs({ order: p.id })} scroll={false} className="hover:underline">
                    {p.email}
                  </Link>
                </td>
                <td className={td}>{cap(p.plan)}</td>
                <td className={tdNum}>{money(p.amountCents, p.currency)}</td>
                <td className={td}>
                  <Tag tone={statusTone(p.status)}>{p.status.replace("_", " ")}</Tag>
                </td>
                <td className={td + " text-mute"} title={SOURCE_HINT[sourceOf(p)]}>
                  {cap(sourceOf(p))}
                </td>
              </tr>
            ))}
          </Table>
        ) : (
          <Table
            head={["Updated", "Email", "Plan", "Status", "Renews", "Ends", "Subscription"]}
            empty="No subscriptions match."
            mobile={
              <PhoneList label="Subscriptions">
                {subs.map((s) => (
                  <PhoneRow
                    key={s.id}
                    href={s.userId ? `/admin/users/${s.userId}` : s.provider === "contra" ? "/admin/activations" : `https://app.lemonsqueezy.com/subscriptions/${encodeURIComponent(s.providerSubId)}`}
                    external={!s.userId && s.provider !== "contra"}
                    title={s.email}
                    meta={
                      <>
                        <span>
                          {cap(s.plan)} {s.interval}
                        </span>
                        <span className="tabular-nums">{s.endsAt ? `Ends ${day(s.endsAt)}` : s.renewsAt ? `Renews ${day(s.renewsAt)}` : `Updated ${day(s.updatedAt)}`}</span>
                      </>
                    }
                    valueSub={<Tag tone={statusTone(s.status)}>{s.status.replace("_", " ")}</Tag>}
                  />
                ))}
              </PhoneList>
            }
          >
            {subs.map((s) => (
              <tr key={s.id}>
                <td className={td + " whitespace-nowrap text-mute tabular-nums"}>{when(s.updatedAt)}</td>
                <td className={td}>{s.userId ? <Link href={`/admin/users/${s.userId}`} className="hover:underline">{s.email}</Link> : s.email}</td>
                <td className={td}>
                  {cap(s.plan)} <span className="text-faint">{s.interval}</span>
                </td>
                <td className={td}>
                  <Tag tone={statusTone(s.status)}>{s.status.replace("_", " ")}</Tag>
                </td>
                <td className={td + " whitespace-nowrap text-mute tabular-nums"}>{when(s.renewsAt)}</td>
                <td className={td + " whitespace-nowrap text-mute tabular-nums"}>{when(s.endsAt)}</td>
                <td className={td}>
                  {s.provider === "contra" ? (
                    <Link href="/admin/activations" className="text-mute hover:underline" title="Renewals are checked by hand in Activations">
                      Contra
                    </Link>
                  ) : (
                    <a href={`https://app.lemonsqueezy.com/subscriptions/${encodeURIComponent(s.providerSubId)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono text-[12px] hover:underline">
                      {s.providerSubId}
                      <Icon name="arrow-up-right" size={13} />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </Table>
        )}
        <Pager page={page} pages={pages} total={total} href={(n) => qs({ page: n > 1 ? String(n) : "" })} unit={view === "subs" ? "subscriptions" : "purchases"} />
      </div>

      <section id="grant" className="mt-10 scroll-mt-32">
        <Section title="Grant a plan" info="For press, giveaways or fixing a missed webhook. The customer needs an account. Every grant is saved in the audit log.">
          <form action={grantPlan} className="card grid gap-4 p-4 sm:gap-3 sm:grid-cols-[minmax(0,1.2fr)_140px_minmax(0,1.5fr)_auto] sm:items-end">
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
            <button className="btn-ink max-sm:mt-1">Grant plan</button>
          </form>
        </Section>
      </section>

      {o && (
        <Drawer title={o.email} sub={`${cap(o.plan)} order, ${when(o.createdAt)}`} closeHref={qs({ order: undefined })} full={o.userId ? `/admin/users/${o.userId}` : undefined}>
          <Facts
            rows={[
              ["Amount", <span key="a" className="tabular-nums">{money(o.amountCents, o.currency)}</span>],
              ["Status", <Tag key="s" tone={statusTone(o.status)}>{o.status.replace("_", " ")}</Tag>],
              ["Plan", <span key="p">{cap(o.plan)}{o.variant && <span className="text-faint"> {o.variant}</span>}</span>],
              ["Customer", o.userId ? <Link key="c" href={`/admin/users/${o.userId}`} className="hover:underline">{o.email}</Link> : o.email],
              ["Source", SOURCE_HINT[sourceOf(o)]],
              [
                "Order",
                o.provider === "lemonsqueezy" ? (
                  <a key="o" href={`https://app.lemonsqueezy.com/orders/${encodeURIComponent(o.providerOrderId)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono text-[12px] hover:underline max-md:-my-3 max-md:min-h-11 max-md:text-[13px]">
                    {o.providerOrderId}
                    <Icon name="arrow-up-right" size={13} />
                  </a>
                ) : o.provider === "contra" ? (
                  <Link key="o" href="/admin/activations?tab=approved" className="hover:underline">Contra, see Activations</Link>
                ) : (
                  "Manual grant"
                ),
              ],
              ["Created", when(o.createdAt)],
              ["Updated", when(o.updatedAt)],
              ...(o.note ? ([["Note", o.note]] as [string, string][]) : []),
            ]}
          />
          {(o.status === "granted" || o.status === "paid") && (
            <form action={revokePurchase} className="mt-6 flex flex-col gap-2 border-t border-hair pt-4">
              <input type="hidden" name="id" value={o.id} />
              <input type="hidden" name="back" value={here} />
              <p className="text-[13px] font-medium">Revoke access</p>
              <p className="text-[12px] text-mute">Removes the access this order gives. {o.status === "paid" ? "It does not refund: refund in Lemon Squeezy." : ""}</p>
              <input name="note" required placeholder="Reason (saved in the audit log)" className={input} />
              <button className="btn-line !h-8 self-start !px-3 !text-[#9b1c1c]">Revoke access</button>
            </form>
          )}
        </Drawer>
      )}
    </div>
  );
}
