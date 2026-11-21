import type { Metadata } from "next";
import Link from "next/link";
import { and, asc, count, desc, eq, inArray, like, or, type SQL } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { sp } from "@/components/admin/guard";
import { requireStaff } from "@/lib/admin";
import { AdminHead, Flash, LinkTabs, Tag, Toolbar, day, input, statusTone, when } from "@/components/admin/ui";
import { AIcon } from "@/components/admin/admin-icons";
import { Drawer, Facts } from "@/components/admin/drawer";
import { ticketRef } from "@/components/admin/thread";

export const metadata: Metadata = { title: "Support inbox" };
const STATUSES = ["open", "answered", "closed"] as const;

export default async function AdminSupport({ searchParams }: PageProps<"/admin/support">) {
  await requireStaff("support", "/admin/support");
  const q = await searchParams;
  const status = (STATUSES as readonly string[]).includes(sp(q.status)) ? sp(q.status) : "open";
  const search = sp(q.q).trim();
  const open = sp(q.view);
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
      <AdminHead title="Inbox" info="Tickets from the widget, the contact form and email." />
      <Flash ok={q.ok} err={q.err} />
      <Toolbar>
        <LinkTabs tabs={STATUSES.map((s) => ({ href: `/admin/support?status=${s}`, label: s[0].toUpperCase() + s.slice(1), count: c[s] ?? 0, on: s === status }))} />
        <form method="get" className="w-full sm:ml-auto sm:w-auto max-sm:order-first" role="search">
          <input type="hidden" name="status" value={status} />
          <label className="relative block w-full sm:w-[260px]">
            <span className="sr-only">Search tickets</span>
            <AIcon name="search" size={15} className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-faint" />
            <input name="q" defaultValue={search} placeholder="Email, name or subject" className={input + " pl-8"} />
          </label>
        </form>
      </Toolbar>

      <ul className="card mt-4 divide-y divide-hair">
        {tickets.map((t) => {
          const m = last.get(t.id);
          return (
            <li key={t.id}>
              <Link
                href={`/admin/support?${new URLSearchParams({ status, ...(search ? { q: search } : {}), view: t.id }).toString()}`}
                scroll={false}
                aria-current={t.id === open ? "true" : undefined}
                className="flex flex-col gap-1 px-4 py-3 transition-colors duration-150 hover:bg-wash active:bg-wash aria-[current]:bg-tile sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="truncate font-medium max-sm:text-[15px]">{t.subject}</span>
                    <span className="shrink-0 text-[12px] text-faint max-sm:hidden">{t.source}</span>
                    <span className="ml-auto shrink-0 text-[13px] text-mute tabular-nums sm:hidden">{day(status === "open" ? t.createdAt : t.updatedAt).replace(/, \d{4}$/, "")}</span>
                  </span>
                  <span className="mt-0.5 block truncate text-[12px] text-mute max-sm:text-[13px]">{t.name ? `${t.name}, ${t.email}` : t.email}</span>
                  {m && (
                    <span className="mt-0.5 block truncate text-[12px] text-faint max-sm:line-clamp-2 max-sm:text-[13px] max-sm:whitespace-normal max-sm:text-mute">
                      {m.author === "admin" ? "You: " : m.author === "bot" ? "Bot: " : ""}
                      {m.body.slice(0, 140)}
                    </span>
                  )}
                </span>
                <span className="flex shrink-0 items-center gap-3 text-[12px] text-faint tabular-nums max-sm:hidden">
                  <span>{nMsg.get(t.id) ?? 0} msg</span>
                  <span>{when(status === "open" ? t.createdAt : t.updatedAt)}</span>
                </span>
              </Link>
            </li>
          );
        })}
        {!tickets.length && <li className="px-4 py-8 text-center text-[13px] text-mute">{search ? "No tickets match." : `No ${status} tickets.`}</li>}
      </ul>
      {open && <TicketDrawer id={open} closeHref={`/admin/support?${new URLSearchParams({ status, ...(search ? { q: search } : {}) }).toString()}`} />}
    </div>
  );
}

/** The thread at a glance; replying, closing and the mail fallback stay on the ticket page. */
async function TicketDrawer({ id, closeHref }: { id: string; closeHref: string }) {
  const db = await getDb();
  const [t] = await db.select().from(schema.ticket).where(eq(schema.ticket.id, id)).limit(1);
  if (!t) return null;
  const msgs = await db.select().from(schema.ticketMessage).where(eq(schema.ticketMessage.ticketId, id)).orderBy(asc(schema.ticketMessage.createdAt));
  return (
    <Drawer title={t.subject} sub={`Ticket ${ticketRef(t.id)}`} closeHref={closeHref} full={`/admin/support/${t.id}`}>
      <Facts
        rows={[
          ["Status", <Tag key="s" tone={statusTone(t.status)}>{t.status}</Tag>],
          ["From", t.name ? `${t.name} <${t.email}>` : t.email],
          ["Via", t.source],
          ["Opened", when(t.createdAt)],
        ]}
      />
      <ol className="mt-5 flex flex-col gap-2">
        {msgs.map((m) => (
          <li key={m.id} className={"rounded-[8px] p-3 max-md:max-w-[88%] max-md:rounded-[14px] " + (m.author === "admin" ? "bg-tile max-md:self-end" : "card max-md:self-start")}>
            <p className="flex items-center gap-2 text-[12px] text-mute">
              <span className="font-medium text-ink">{m.author === "admin" ? "Support" : m.author === "bot" ? "Help bot" : t.name || t.email}</span>
              <span className="ml-auto tabular-nums">{when(m.createdAt)}</span>
            </p>
            <div className="mt-1.5 text-[13px] leading-[1.55] whitespace-pre-wrap [overflow-wrap:anywhere] max-md:text-[15px] max-md:leading-[1.45]">{m.body}</div>
          </li>
        ))}
        {!msgs.length && <li className="text-[13px] text-mute">This ticket has no messages.</li>}
      </ol>
      <Link href={`/admin/support/${t.id}`} className="btn-ink mt-4 max-md:w-full">
        <AIcon name="message" size={15} />
        Reply
      </Link>
    </Drawer>
  );
}
