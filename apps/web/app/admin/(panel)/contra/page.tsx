import type { Metadata } from "next";
import Link from "next/link";
import { inArray } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { requireStaff } from "@/lib/admin";
import { productName } from "@/lib/activation";
import { getConnection, isConnected } from "@/lib/contra/oauth";
import { listSales, PRICE_MISMATCH, type Sale } from "@/lib/contra/sync";
import { AIcon } from "@/components/admin/admin-icons";
import { AdminHead, Empty, Flash, LinkTabs, Table, Tag, Toolbar, cap, money, td, tdNum, when } from "@/components/admin/ui";
import { sp } from "@/components/admin/guard";
import { SubmitButton } from "../activations/buttons";
import { ignore, matchToUser, syncNow } from "./actions";

export const metadata: Metadata = { title: "Contra sales" };

const buyer = (s: Sale) => [s.firstName, s.lastName].filter(Boolean).join(" ") || "Name not shared";
const how = (m: string | null) => (m === "email" ? "Email" : m === "name" ? "Name on Contra" : m === "manual" ? "By hand" : m === "claim" ? "Claim link" : "");
const tone = (s: string) => (s === "matched" ? "good" : s === "ignored" ? "plain" : "warn") as "good" | "plain" | "warn";

export default async function AdminContra({ searchParams }: PageProps<"/admin/contra">) {
  await requireStaff("orders", "/admin/contra");
  const q = await searchParams;
  const [conn, sales] = await Promise.all([getConnection(), listSales()]);
  const connected = isConnected(conn);
  const userIds = [...new Set(sales.map((s) => s.userId).filter((x): x is string => !!x))];
  const users = userIds.length ? await (await getDb()).select({ id: schema.user.id, email: schema.user.email }).from(schema.user).where(inArray(schema.user.id, userIds)) : [];
  const emailOf = new Map(users.map((u) => [u.id, u.email]));
  const unmatched = sales.filter((s) => s.status === "unmatched").length;
  const STATUS = ["unmatched", "matched", "ignored"];
  const filter = STATUS.includes(sp(q.status)) ? sp(q.status) : "";
  const shown = filter ? sales.filter((s) => s.status === filter) : sales;
  const countOf = (st: string) => sales.filter((s) => s.status === st).length;

  return (
    <div>
      <AdminHead title="Contra sales" sub={`${sales.length} sales, ${unmatched} unmatched`} info="Sales from your Contra payment links. Each one switches the buyer's plan on by itself when it matches an account or a request. Unmatched sales need you: match them to an account, or ignore them." />
      <Flash ok={q.ok} err={q.err} />

      <section className="card mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 p-4" aria-label="Contra connection">
        <div className="flex min-w-0 flex-1 basis-[320px] items-start gap-3">
          <AIcon name={connected && conn.lastError ? "alert-triangle" : "plug-connected"} size={18} className={"mt-px shrink-0 " + (connected && conn.lastError ? "text-[#9b1c1c]" : "text-mute")} />
          <div className="min-w-0 text-[13px]">
            <p className="font-medium">{connected ? "Connected to Contra" : "Contra is not connected"}</p>
            <p className="mt-0.5 text-mute">
              {connected
                ? `Last sync ${conn.lastSyncAt ? when(conn.lastSyncAt) : "not yet"}. Connected by ${conn.connectedBy ?? "unknown"}, ${when(conn.connectedAt)}.`
                : "Connect the Contra account that owns the payment links. Read only."}
            </p>
            {connected && conn.lastError && <p className="mt-0.5 text-[#9b1c1c]">{conn.lastError}</p>}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {connected && (
            <form action={syncNow}>
              <SubmitButton busy="Syncing…" className="btn-ink !h-8 !px-3">
                <AIcon name="refresh" size={15} />
                Sync now
              </SubmitButton>
            </form>
          )}
          {/* A full navigation: the route redirects to Contra's sign-in page. */}
          <a href="/api/admin/contra/connect" className={(connected ? "btn-line" : "btn-ink") + " !h-8 !px-3"}>
            <AIcon name="plug-connected" size={15} />
            {connected ? "Reconnect" : "Connect Contra"}
          </a>
        </div>
      </section>

      <Toolbar>
        <LinkTabs
          tabs={[
            { href: "/admin/contra", label: "All", count: sales.length, on: !filter },
            ...STATUS.map((st) => ({ href: `/admin/contra?status=${st}`, label: cap(st), count: countOf(st), on: filter === st })),
          ]}
        />
      </Toolbar>
      <div className="mt-4">
        {shown.length === 0 && sales.length > 0 ? (
          <Empty>No {filter} sales.</Empty>
        ) : sales.length === 0 ? (
          <div className="card flex flex-col items-start gap-1 p-5 text-[13px]">
            <AIcon name="receipt" size={20} className="text-faint" />
            <p className="mt-1 font-medium">No sales yet</p>
            <p className="text-mute">{connected ? "Paid sales show up here within a minute." : "Connect Contra to load your sales."}</p>
          </div>
        ) : (
          <>
            <ul className="grid gap-3 lg:hidden">
              {shown.map((s) => (
                <li key={s.id}>
                  <SaleCard s={s} account={s.userId ? emailOf.get(s.userId) : undefined} />
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <Table head={["Paid", "Product", "Buyer", "Email", "Amount", "Status", "Linked to", ""]} right={[4]}>
                {shown.map((s) => (
                  <tr key={s.id}>
                    <td className={td + " whitespace-nowrap text-mute tabular-nums"}>{s.paidOn ?? "Unknown"}</td>
                    <td className={td + " whitespace-nowrap"}>{productName(s.variantKey)}</td>
                    <td className={td}>{buyer(s)}</td>
                    <td className={td}>
                      <span className={"block max-w-[220px] truncate " + (s.payerEmail ? "" : "text-faint")}>{s.payerEmail ?? "Not shared"}</span>
                    </td>
                    <td className={tdNum}>{money(s.amountCents, s.currency)}</td>
                    <td className={td}>
                      <Tag tone={tone(s.status)}>{cap(s.status)}</Tag>
                      {s.note && <span className="mt-1 block max-w-[240px] text-[12px] text-faint" title={s.note}>{s.note}</span>}
                    </td>
                    <td className={td + " text-[12px]"}>
                      <Linked s={s} account={s.userId ? emailOf.get(s.userId) : undefined} />
                    </td>
                    <td className={td + " text-right"}>{s.status !== "matched" && <SaleActions s={s} />}</td>
                  </tr>
                ))}
              </Table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Linked({ s, account }: { s: Sale; account?: string }) {
  if (s.status !== "matched") return <span className="text-faint">Nothing yet</span>;
  return (
    <span className="flex flex-col gap-0.5">
      {s.userId && (
        <Link href={`/admin/users/${s.userId}`} className="max-w-[220px] truncate text-ink-2 underline-offset-2 hover:underline">
          {account ?? "Account"}
        </Link>
      )}
      {s.activationId ? (
        <Link href="/admin/activations?tab=approved" className="text-faint hover:text-ink">
          Activation {s.activationId.slice(4, 12)}
        </Link>
      ) : (
        <span className="text-faint">No activation (already had the plan)</span>
      )}
      <span className="text-faint">Matched by {how(s.matchedBy).toLowerCase()}</span>
    </span>
  );
}

function SaleCard({ s, account }: { s: Sale; account?: string }) {
  return (
    <article className="card p-4">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-medium">{buyer(s)}</p>
          <p className={"mt-0.5 truncate text-[13px] " + (s.payerEmail ? "text-mute" : "text-faint")}>{s.payerEmail ?? "Email not shared"}</p>
        </div>
        <Tag tone={tone(s.status)}>{cap(s.status)}</Tag>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-[17px] font-medium tracking-[-0.01em]">{productName(s.variantKey)}</span>
        <span className="text-[15px] tabular-nums text-ink-2">{money(s.amountCents, s.currency)}</span>
        <span className="ml-auto text-[12px] text-faint tabular-nums">{s.paidOn}</span>
      </div>
      {s.note && (
        <p className={"mt-2 flex items-start gap-1.5 text-[13px] " + (s.note.startsWith(PRICE_MISMATCH) ? "text-[#8a5a00]" : "text-mute")}>
          <AIcon name="alert-circle" size={14} className="mt-0.5 shrink-0" />
          {s.note}
        </p>
      )}
      {s.status === "matched" && (
        <div className="mt-2 text-[13px]">
          <Linked s={s} account={account} />
        </div>
      )}
      {s.status !== "matched" && (
        <div className="mt-4">
          <SaleActions s={s} big />
        </div>
      )}
    </article>
  );
}

/** "Match to user" (account email) and "Ignore", for unmatched and ignored sales. */
function SaleActions({ s, big = false }: { s: Sale; big?: boolean }) {
  const h = big ? "!h-11" : "!h-8";
  return (
    <div className={"flex gap-2 " + (big ? "flex-col" : "items-start justify-end")}>
      <details className="group">
        <summary className={"btn-ink cursor-pointer list-none [&::-webkit-details-marker]:hidden " + h + (big ? " w-full" : "")}>
          <AIcon name="user-check" size={15} />
          Match to user
        </summary>
        <form action={matchToUser} className="mt-2 flex w-[min(320px,calc(100vw-64px))] flex-col gap-2 rounded-[8px] bg-white p-3 text-left shadow-[0_0_0_1px_var(--color-hair-2),0_8px_24px_rgb(0_0_0/0.08)] max-lg:w-full lg:absolute lg:right-3 lg:z-10">
          <input type="hidden" name="id" value={s.id} />
          <label className="flex flex-col gap-1 text-[12px] text-mute">
            Buyer email
            <input
              name="email"
              type="email"
              required
              defaultValue={s.payerEmail ?? ""}
              placeholder="buyer@example.com"
              className="h-10 w-full rounded-[6px] bg-white px-2.5 text-[14px] text-ink shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none focus:shadow-[inset_0_0_0_1px_var(--color-ink)]"
            />
          </label>
          <p className="text-[12px] text-faint">With an account: switches the plan on and emails them. No account yet: emails them the purchase confirmation with a link to create one, and the plan switches on when they do. Find the buyer email on the Contra invoice.</p>
          <SubmitButton busy="Matching…" className={"btn-ink " + h}>
            Match and activate
          </SubmitButton>
        </form>
      </details>
      {s.status === "unmatched" && (
        <form action={ignore}>
          <input type="hidden" name="id" value={s.id} />
          <SubmitButton busy="Ignoring…" className={"btn-line " + h + (big ? " w-full" : "")}>
            <AIcon name="ban" size={15} />
            Ignore
          </SubmitButton>
        </form>
      )}
    </div>
  );
}
