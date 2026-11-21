import type { Metadata } from "next";
import { count, desc, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { sp } from "@/components/admin/guard";
import { requireStaff } from "@/lib/admin";
import { AdminHead, LinkTabs, Pager, PhoneList, PhoneRow, Table, day, pageOf, planLabel, td, when } from "@/components/admin/ui";

const PER = 50;
import { Icon } from "@/registry/components/icons";

export const metadata: Metadata = { title: "Waitlist" };

export default async function AdminWaitlist({ searchParams }: PageProps<"/admin/waitlist">) {
  await requireStaff("waitlist", "/admin/waitlist");
  const q = await searchParams;
  const plan = sp(q.plan);
  const page = pageOf(q.page);
  const db = await getDb();
  const W = schema.waitlist;
  const [counts, rows] = await Promise.all([
    db.select({ plan: W.plan, n: count() }).from(W).groupBy(W.plan),
    db.select().from(W).where(plan ? eq(W.plan, plan) : undefined).orderBy(desc(W.createdAt)).limit(1000),
  ]);
  const total = counts.reduce((s, c) => s + c.n, 0);
  return (
    <div>
      <AdminHead title="Waitlist" info="Emails left on the buy buttons while checkout was closed.">
        <a href={"/admin/waitlist/csv" + (plan ? `?plan=${encodeURIComponent(plan)}` : "")} className="btn-line !h-8 !px-3" download>
          <Icon name="download" size={15} />
          Download CSV
        </a>
      </AdminHead>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <LinkTabs
          tabs={[
            { href: "/admin/waitlist", label: "All", count: total, on: !plan },
            ...counts.sort((a, b) => b.n - a.n).map((c) => ({ href: `/admin/waitlist?plan=${encodeURIComponent(c.plan)}`, label: planLabel(c.plan), count: c.n, on: plan === c.plan })),
          ]}
        />
      </div>
      <div className="mt-4">
        <Table
          head={["Email", "Plan", "Joined"]}
          empty="Nobody on the waitlist yet."
          mobile={
            <PhoneList label="Waitlist">
              {rows.slice((page - 1) * PER, page * PER).map((r) => (
                <PhoneRow key={r.email} title={r.email} meta={<span>{planLabel(r.plan)}</span>} valueSub={day(r.createdAt)} />
              ))}
            </PhoneList>
          }
        >
          {rows.slice((page - 1) * PER, page * PER).map((r) => (
            <tr key={r.email}>
              <td className={td}>{r.email}</td>
              <td className={td}>{planLabel(r.plan)}</td>
              <td className={td + " whitespace-nowrap text-mute"}>{when(r.createdAt)}</td>
            </tr>
          ))}
        </Table>
        <Pager page={page} pages={Math.max(1, Math.ceil(rows.length / PER))} total={rows.length} unit="emails" href={(n) => "/admin/waitlist?" + new URLSearchParams(Object.entries({ plan, page: n > 1 ? String(n) : "" }).filter(([, v]) => v)).toString()} />
      </div>
    </div>
  );
}
