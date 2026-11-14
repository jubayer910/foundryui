import type { Metadata } from "next";
import Link from "next/link";
import { and, count, desc, eq, inArray, like, or, type SQL } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { adminOnly, sp } from "@/components/admin/guard";
import { AdminHead, Field, Flash, LinkTabs, Tag, input, when } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Support inbox" };
const STATUSES = ["open", "answered", "closed"] as const;

export default async function AdminSupport({ searchParams }: PageProps<"/admin/support">) {
  await adminOnly();
  const q = await searchParams;
  const status = (STATUSES as readonly string[]).includes(sp(q.status)) ? sp(q.status) : "open";
  const search = sp(q.q).trim();
  const db = await getDb();
  const T = schema.ticket;
  const w: SQL[] = [eq(T.status, status)];
  if (search) w.push(or(like(T.email, `%${search}%`), like(T.subject, `%${search}%`), like(T.name, `%${search}%`))!);
  const [counts, tickets] = await Promise.all([
    db.select({ status: T.status, n: count() }).from(T).groupBy(T.status),
    db.select().from(T).where(and(...w)).orderBy(status === "open" ? T.createdAt : desc(T.updatedAt)).limit(200),
  ]);
  const ids = tickets.map((t) => t.id);
  const M = schema.ticketMessage;
  const msgs = ids.length ? await db.select({ ticketId: M.ticketId, author: M.author, body: M.body, createdAt: M.createdAt }).from(M).where(inArray(M.ticketId, ids)).orderBy(desc(M.createdAt)) : [];
  const last = new Map<string, (typeof msgs)[number]>();
  const nMsg = new Map<string, number>();
  for (const m of msgs) {
    if (!last.has(m.ticketId)) last.set(m.ticketId, m);
    nMsg.set(m.ticketId, (nMsg.get(m.ticketId) ?? 0) + 1);
  }
  const c = Object.fromEntries(counts.map((r) => [r.status, r.n]));

  return (
    <div>
      <AdminHead title="Support inbox" sub="Tickets from the widget, the contact form and email." />
      <Flash ok={q.ok} err={q.err} />
      <div className="mt-5 flex flex-wrap items-end gap-3">
        <LinkTabs tabs={STATUSES.map((s) => ({ href: `/admin/support?status=${s}`, label: s[0].toUpperCase() + s.slice(1), count: c[s] ?? 0, on: s === status }))} />
        <form method="get" className="ml-auto flex items-end gap-2">
          <input type="hidden" name="status" value={status} />
          <Field label="Search" className="w-[220px]">
            <input name="q" defaultValue={search} placeholder="Email, name or subject" className={input} />
          </Field>
        </form>
      </div>

      <ul className="card mt-4 divide-y divide-hair">
        {tickets.map((t) => {
          const m = last.get(t.id);
          return (
            <li key={t.id}>
              <Link href={`/admin/support/${t.id}`} className="flex flex-col gap-1 px-4 py-3 hover:bg-wash sm:flex-row sm:items-center sm:gap-4">
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="truncate font-medium">{t.subject}</span>
                    <Tag>{t.source}</Tag>
                  </span>
                  <span className="mt-0.5 block truncate text-[12px] text-mute">{t.name ? `${t.name}, ${t.email}` : t.email}</span>
                  {m && (
                    <span className="mt-0.5 block truncate text-[12px] text-faint">
                      {m.author === "admin" ? "You: " : m.author === "bot" ? "Bot: " : ""}
                      {m.body.slice(0, 140)}
                    </span>
                  )}
                </span>
                <span className="flex shrink-0 items-center gap-3 text-[12px] text-faint tabular-nums">
                  <span>{nMsg.get(t.id) ?? 0} msg</span>
                  <span>{when(status === "open" ? t.createdAt : t.updatedAt)}</span>
                </span>
              </Link>
            </li>
          );
        })}
        {!tickets.length && <li className="px-4 py-8 text-center text-[13px] text-mute">{search ? "No tickets match." : `No ${status} tickets.`}</li>}
      </ul>
    </div>
  );
}
