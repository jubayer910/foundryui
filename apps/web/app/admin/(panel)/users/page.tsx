import type { Metadata } from "next";
import Link from "next/link";
import { and, count, desc, eq, inArray, like, or, sql, type SQL } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { sp } from "@/components/admin/guard";
import { requireStaff } from "@/lib/admin";
import { AdminHead, Pager, Table, Tag, Toolbar, cap, day, input, money, num, statusTone, td, tdNum, when } from "@/components/admin/ui";
import { AIcon } from "@/components/admin/admin-icons";
import { Drawer, Facts } from "@/components/admin/drawer";

export const metadata: Metadata = { title: "Users" };
const PER = 25;

export default async function AdminUsers({ searchParams }: PageProps<"/admin/users">) {
  await requireStaff("users", "/admin/users");
  const q = await searchParams;
  const search = sp(q.q).trim();
  const plan = sp(q.plan);
  const page = Math.max(1, Number(sp(q.page)) || 1);
  const db = await getDb();
  const U = schema.user;
  const w: SQL[] = [];
  if (search) w.push(or(like(U.email, `%${search}%`), like(U.name, `%${search}%`))!);
  if (plan) w.push(eq(U.plan, plan));
  const where = w.length ? and(...w) : undefined;
  const [[total], rows] = await Promise.all([
    db.select({ n: count() }).from(U).where(where),
    db
      .select({ id: U.id, name: U.name, email: U.email, plan: U.plan, role: U.role, createdAt: U.createdAt })
      .from(U)
      .where(where)
      .orderBy(desc(U.createdAt))
      .limit(PER)
      .offset((page - 1) * PER),
  ]);
  const ids = rows.map((r) => r.id);
  const usage = ids.length
    ? await db
        .select({ userId: schema.usageEvent.userId, n: count() })
        .from(schema.usageEvent)
        .where(inArray(schema.usageEvent.userId, ids))
        .groupBy(schema.usageEvent.userId)
    : [];
  const uses = new Map(usage.map((u) => [u.userId, u.n]));
  const pages = Math.max(1, Math.ceil((total?.n ?? 0) / PER));
  const link = (p: number, view?: string) => "/admin/users?" + new URLSearchParams(Object.entries({ q: search, plan, page: p > 1 ? String(p) : "", view: view ?? "" }).filter(([, v]) => v)).toString();
  const open = sp(q.view);

  return (
    <div>
      <AdminHead title="Users" sub={`${num(total?.n ?? 0)} ${search || plan ? "match" : "accounts"}`} />
      <Toolbar>
        <form method="get" className="flex w-full flex-wrap items-center gap-2" role="search">
          <label className="relative block w-full sm:w-[280px]">
            <span className="sr-only">Email or name</span>
            <AIcon name="search" size={15} className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-faint" />
            <input name="q" defaultValue={search} placeholder="Search email or name" className={input + " pl-8"} />
          </label>
          <label>
            <span className="sr-only">Plan</span>
            <select name="plan" defaultValue={plan} className={input + " !w-auto pr-7"}>
              <option value="">All plans</option>
              <option value="free">Free</option>
              <option value="pro">Pro</option>
              <option value="lifetime">Lifetime</option>
            </select>
          </label>
          <button className="btn-line !h-8 !px-3">Apply</button>
          {(search || plan) && (
            <Link href="/admin/users" className="text-[13px] text-mute hover:text-ink hover:underline">
              Clear
            </Link>
          )}
        </form>
      </Toolbar>
      <div className="mt-4">
        <Table head={["Name", "Email", "Plan", "Role", "Uses", "Joined"]} right={[4]} empty="No users match.">
          {rows.map((u) => (
            <tr key={u.id} aria-selected={u.id === open || undefined} className="aria-selected:bg-tile">
              <td className={td}>
                <Link href={link(page, u.id)} scroll={false} className="font-medium hover:underline">
                  {u.name || "No name"}
                </Link>
              </td>
              <td className={td}>{u.email}</td>
              <td className={td}><Tag tone={u.plan === "free" ? "plain" : "good"}>{u.plan}</Tag></td>
              <td className={td}>{u.role === "admin" ? <Tag tone="ink">admin</Tag> : <span className="text-faint">user</span>}</td>
              <td className={tdNum}>{num(uses.get(u.id) ?? 0)}</td>
              <td className={td + " whitespace-nowrap text-mute tabular-nums"}>{day(u.createdAt)}</td>
            </tr>
          ))}
        </Table>
        <Pager page={page} pages={pages} total={total?.n ?? 0} href={(n) => link(n)} unit="accounts" />
      </div>
      {open && <UserDrawer id={open} closeHref={link(page)} />}
    </div>
  );
}

/** Quick look at one account: plan, activity, money, tickets. Editing stays on the full page. */
async function UserDrawer({ id, closeHref }: { id: string; closeHref: string }) {
  const db = await getDb();
  const [u] = await db.select().from(schema.user).where(eq(schema.user.id, id)).limit(1);
  if (!u) return null;
  const email = u.email.toLowerCase();
  const P = schema.purchase;
  const T = schema.ticket;
  const [[uses], orders, tickets, [keys]] = await db.batch([
    db.select({ n: count() }).from(schema.usageEvent).where(eq(schema.usageEvent.userId, id)),
    db.select().from(P).where(or(eq(P.userId, id), sql`lower(${P.email}) = ${email}`)).orderBy(desc(P.createdAt)).limit(5),
    db.select().from(T).where(or(eq(T.userId, id), sql`lower(${T.email}) = ${email}`)).orderBy(desc(T.updatedAt)).limit(5),
    db.select({ n: count() }).from(schema.apiKey).where(eq(schema.apiKey.userId, id)),
  ]);
  return (
    <Drawer title={u.name || u.email} sub={u.email} closeHref={closeHref} full={`/admin/users/${u.id}`}>
      <Facts
        rows={[
          ["Plan", <Tag key="p" tone={u.plan === "free" ? "plain" : "good"}>{u.plan}</Tag>],
          ["Signed up", when(u.createdAt)],
          ["Email", u.emailVerified ? "Verified" : "Not verified"],
          ["Actions", <span key="a" className="tabular-nums">{num(uses?.n ?? 0)} copies, downloads and installs</span>],
          ["API keys", <span key="k" className="tabular-nums">{num(keys?.n ?? 0)}</span>],
        ]}
      />
      <h3 className="mt-6 mb-2 text-[13px] font-medium">Orders</h3>
      {orders.length ? (
        <ul className="divide-y divide-hair text-[13px]">
          {orders.map((o) => (
            <li key={o.id} className="flex items-center gap-2 py-2">
              <span className="min-w-0 flex-1 truncate">
                {cap(o.plan)} <span className="text-mute">{when(o.createdAt)}</span>
              </span>
              <span className="tabular-nums">{money(o.amountCents, o.currency)}</span>
              <Tag tone={statusTone(o.status)}>{o.status}</Tag>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[13px] text-mute">No orders.</p>
      )}
      <h3 className="mt-6 mb-2 text-[13px] font-medium">Tickets</h3>
      {tickets.length ? (
        <ul className="divide-y divide-hair text-[13px]">
          {tickets.map((t) => (
            <li key={t.id}>
              <Link href={`/admin/support/${t.id}`} className="flex items-center gap-2 py-2 hover:underline">
                <span className="min-w-0 flex-1 truncate">{t.subject}</span>
                <Tag tone={statusTone(t.status)}>{t.status}</Tag>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[13px] text-mute">No tickets.</p>
      )}
    </Drawer>
  );
}
