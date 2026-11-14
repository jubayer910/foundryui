import type { Metadata } from "next";
import { count, desc, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { adminOnly, sp } from "@/components/admin/guard";
import { AdminHead, LinkTabs, Table, planLabel, td, when } from "@/components/admin/ui";
import { Icon } from "@/registry/components/icons";

export const metadata: Metadata = { title: "Waitlist" };

export default async function AdminWaitlist({ searchParams }: PageProps<"/admin/waitlist">) {
  await adminOnly();
  const q = await searchParams;
  const plan = sp(q.plan);
  const db = await getDb();
  const W = schema.waitlist;
  const [counts, rows] = await Promise.all([
    db.select({ plan: W.plan, n: count() }).from(W).groupBy(W.plan),
    db.select().from(W).where(plan ? eq(W.plan, plan) : undefined).orderBy(desc(W.createdAt)).limit(1000),
  ]);
  const total = counts.reduce((s, c) => s + c.n, 0);
  return (
    <div>
      <AdminHead title="Waitlist" sub="Emails left on the buy buttons while checkout was closed.">
        <a href={"/admin/waitlist/csv" + (plan ? `?plan=${encodeURIComponent(plan)}` : "")} className="btn-ink" download>
          <Icon name="download" size={15} />
          Download CSV
        </a>
      </AdminHead>
      <div className="mt-5">
        <LinkTabs
          tabs={[
            { href: "/admin/waitlist", label: "All", count: total, on: !plan },
            ...counts.sort((a, b) => b.n - a.n).map((c) => ({ href: `/admin/waitlist?plan=${encodeURIComponent(c.plan)}`, label: planLabel(c.plan), count: c.n, on: plan === c.plan })),
          ]}
        />
      </div>
      <div className="mt-4">
        <Table head={["Email", "Plan", "Joined"]} empty="Nobody on the waitlist yet.">
          {rows.map((r) => (
            <tr key={r.email}>
              <td className={td}>{r.email}</td>
              <td className={td}>{planLabel(r.plan)}</td>
              <td className={td + " whitespace-nowrap text-mute"}>{when(r.createdAt)}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
