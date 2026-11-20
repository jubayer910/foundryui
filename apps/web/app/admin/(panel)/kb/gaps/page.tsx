import type { Metadata } from "next";
import Link from "next/link";
import { count, desc, eq } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { requireStaff } from "@/lib/admin";
import { botGap } from "@/lib/support/assistant/gaps";
import { AdminHead, Flash, LinkTabs, Table, Tag, td, when } from "@/components/admin/ui";
import { dismissGap } from "./actions";

export const metadata: Metadata = { title: "Unanswered questions" };

/** Questions the help assistant could not answer, most asked first. */
export default async function AdminKbGaps({ searchParams }: PageProps<"/admin/kb/gaps">) {
  await requireStaff("kb", "/admin/kb/gaps");
  const q = await searchParams;
  const db = await getDb();
  let rows: (typeof botGap.$inferSelect)[] = [];
  let open = 0;
  try {
    [rows, [{ n: open }]] = await Promise.all([
      db.select().from(botGap).where(eq(botGap.dismissed, false)).orderBy(desc(botGap.count), desc(botGap.lastAt)).limit(200),
      db.select({ n: count() }).from(botGap).where(eq(botGap.dismissed, false)),
    ]);
  } catch {
    // table not migrated yet: show the empty state
  }
  return (
    <div>
      <AdminHead title="Unanswered questions" sub="What visitors asked the help assistant that it could not answer. Write an article and the assistant answers it from then on." />
      <div className="mt-5">
        <LinkTabs
        tabs={[
          { href: "/admin/kb", label: "Articles", on: false },
          { href: "/admin/kb/gaps", label: "Unanswered", count: open, on: true },
        ]}
        />
      </div>
      <Flash ok={q.ok} err={q.err} />
      <div className="mt-5">
        <Table head={["Question", "Asked", "Best guess", "Last asked", ""]} empty="No unanswered questions. The assistant answered everything so far.">
          {rows.map((g) => (
            <tr key={g.id}>
              <td className={td + " max-w-[420px]"}>{g.question}</td>
              <td className={td + " tabular-nums"}>{g.count}</td>
              <td className={td}>
                <Tag>{g.intent}</Tag> <span className="text-[12px] tabular-nums text-mute">{g.confidence.toFixed(2)}</span>
              </td>
              <td className={td + " whitespace-nowrap text-mute"}>{when(g.lastAt)}</td>
              <td className={td + " whitespace-nowrap text-right"}>
                <Link href={`/admin/kb?new=1&q=${encodeURIComponent(g.question)}&gap=${encodeURIComponent(g.id)}`} className="btn-ink !h-7 !px-3">
                  Write answer
                </Link>{" "}
                <form action={dismissGap} className="inline">
                  <input type="hidden" name="id" value={g.id} />
                  <button className="btn-line !h-7 !px-3">Dismiss</button>
                </form>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
