import type { Metadata } from "next";
import Link from "next/link";
import { and, count, desc, eq, inArray, like, or, type SQL } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { sp } from "@/components/admin/guard";
import { requireStaff } from "@/lib/admin";
import { AdminHead, Field, Table, Tag, day, input, num, td } from "@/components/admin/ui";

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
  const link = (p: number) => "/admin/users?" + new URLSearchParams(Object.entries({ q: search, plan, page: String(p) }).filter(([, v]) => v)).toString();

  return (
    <div>
      <AdminHead title="Users" sub={`${num(total?.n ?? 0)} ${search || plan ? "match" : "accounts"}`} />
      <form method="get" className="mt-5 flex flex-wrap items-end gap-2">
        <Field label="Email or name" className="w-full sm:w-[280px]">
          <input name="q" defaultValue={search} placeholder="Search" className={input} />
        </Field>
        <Field label="Plan" className="w-[140px]">
          <select name="plan" defaultValue={plan} className={input}>
            <option value="">All plans</option>
            <option value="free">Free</option>
            <option value="pro">Pro</option>
            <option value="lifetime">Lifetime</option>
          </select>
        </Field>
        <button className="btn-ink">Search</button>
        {(search || plan) && (
          <Link href="/admin/users" className="btn-line">
            Clear
          </Link>
        )}
      </form>
      <div className="mt-4">
        <Table head={["Name", "Email", "Plan", "Role", "Uses", "Joined"]} empty="No users match.">
          {rows.map((u) => (
            <tr key={u.id} className="hover:bg-wash">
              <td className={td}>
                <Link href={`/admin/users/${u.id}`} className="font-medium hover:underline">
                  {u.name || "No name"}
                </Link>
              </td>
              <td className={td}>{u.email}</td>
              <td className={td}><Tag tone={u.plan === "free" ? "plain" : "good"}>{u.plan}</Tag></td>
              <td className={td}>{u.role === "admin" ? <Tag tone="ink">admin</Tag> : <span className="text-faint">user</span>}</td>
              <td className={td + " tabular-nums"}>{num(uses.get(u.id) ?? 0)}</td>
              <td className={td + " whitespace-nowrap text-mute"}>{day(u.createdAt)}</td>
            </tr>
          ))}
        </Table>
      </div>
      {pages > 1 && (
        <nav aria-label="Pages" className="mt-3 flex items-center gap-2 text-[13px]">
          {page > 1 ? <Link href={link(page - 1)} className="btn-line !h-7">Previous</Link> : <span className="btn-line !h-7 opacity-40">Previous</span>}
          <span className="text-mute tabular-nums">Page {page} of {pages}</span>
          {page < pages ? <Link href={link(page + 1)} className="btn-line !h-7">Next</Link> : <span className="btn-line !h-7 opacity-40">Next</span>}
        </nav>
      )}
    </div>
  );
}
