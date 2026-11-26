import Link from "next/link";
import { desc, inArray } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { PhoneList, Table, Tag, td, when } from "@/components/admin/ui";

type Row = { email: string; name: string | null; tries: number; first: Date; last: Date; codes: string[]; userId: string | null; userAt: Date | null };

/** Sign-ups the server failed, one row per email: how often, which error, and whether they have an account now. */
export async function loadFailedSignups(): Promise<Row[]> {
  try {
    const db = await getDb();
    const F = schema.signupFailure;
    const rows = await db.select().from(F).orderBy(desc(F.createdAt)).limit(2000);
    const by = new Map<string, Row>();
    for (const r of rows) {
      const x = by.get(r.email) ?? { email: r.email, name: r.name, tries: 0, first: r.createdAt, last: r.createdAt, codes: [], userId: null, userAt: null };
      x.tries += 1;
      if (r.createdAt < x.first) x.first = r.createdAt;
      if (!x.name && r.name) x.name = r.name;
      if (!x.codes.includes(r.code)) x.codes.push(r.code);
      by.set(r.email, x);
    }
    const list = [...by.values()];
    const emails = list.map((r) => r.email);
    if (emails.length) {
      const U = schema.user;
      const users = await db.select({ id: U.id, email: U.email, at: U.createdAt }).from(U).where(inArray(U.email, emails.slice(0, 90)));
      const m = new Map(users.map((u) => [u.email.toLowerCase(), u]));
      for (const r of list) {
        const u = m.get(r.email);
        if (u) {
          r.userId = u.id;
          r.userAt = u.at;
        }
      }
    }
    return list;
  } catch {
    return []; // table not migrated yet
  }
}

export async function FailedSignups({ rows }: { rows: Row[] }) {
  const waiting = rows.filter((r) => !r.userId);
  const status = (r: Row) => (r.userId ? <Tag tone="good">Has an account now</Tag> : <Tag tone="warn">No account yet</Tag>);
  const tries = (r: Row) => `${r.tries} ${r.tries === 1 ? "try" : "tries"}, last ${when(r.last)}`;
  return (
    <div className="mt-4">
      <p className="mb-3 text-[13px] text-mute">
        Sign-ups that failed on our side (not a taken email or a short password). The email and name they typed are kept so you can tell them once it works. Support gets an alert email when one happens, at most every 30 minutes.
      </p>
      {waiting.length > 0 && (
        <details className="card mb-3 px-4 py-3 text-[13px]">
          <summary className="cursor-pointer font-medium max-md:py-2">Emails with no account yet ({waiting.length})</summary>
          <textarea readOnly aria-label="Emails with no account yet" className="mt-2 h-28 w-full resize-y rounded-[8px] p-2 text-[13px] shadow-[inset_0_0_0_1px_var(--color-hair-2)] max-md:text-[16px]" value={waiting.map((r) => r.email).join(", ")} />
        </details>
      )}
      <Table
        head={["Email", "Name", "Status", "Error", "Attempts"]}
        empty="No failed sign-ups. They are recorded from the day this list was added."
        mobile={
          <PhoneList label="Failed sign-ups">
            {rows.map((r) => (
              <li key={r.email} className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="min-w-0 flex-1 truncate text-[15px] font-medium">{r.email}</span>
                  {status(r)}
                </div>
                <p className="mt-0.5 text-[13px] text-mute">
                  {r.name ? `${r.name}, ` : ""}
                  {tries(r)}, {r.codes.join(", ")}
                </p>
              </li>
            ))}
          </PhoneList>
        }
      >
        {rows.map((r) => (
          <tr key={r.email}>
            <td className={td + " whitespace-nowrap"}>{r.userId ? <Link href={`/admin/users/${r.userId}`} className="font-medium hover:underline">{r.email}</Link> : <span className="font-medium">{r.email}</span>}</td>
            <td className={td + " text-mute"}>{r.name || <span className="text-faint">None</span>}</td>
            <td className={td}>{status(r)}</td>
            <td className={td + " text-mute"}>{r.codes.join(", ")}</td>
            <td className={td + " whitespace-nowrap text-mute tabular-nums"}>{tries(r)}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
