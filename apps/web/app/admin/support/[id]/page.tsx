import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { asc, eq, sql } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { adminOnly, sp } from "@/components/admin/guard";
import { AdminHead, Flash, Tag, cap, statusTone, textarea, when } from "@/components/admin/ui";
import { mailtoLink, quotedBody, replySubject, ticketRef } from "@/components/admin/thread";
import { Icon } from "@/registry/components/icons";
import { replyTicket, setTicketStatus } from "../actions";

export const metadata: Metadata = { title: "Ticket" };

export default async function AdminTicket({ params, searchParams }: PageProps<"/admin/support/[id]">) {
  await adminOnly();
  const { id } = await params;
  const q = await searchParams;
  const db = await getDb();
  const [t] = await db.select().from(schema.ticket).where(eq(schema.ticket.id, id)).limit(1);
  if (!t) notFound();
  const [msgs, settings, [customer]] = await Promise.all([
    db.select().from(schema.ticketMessage).where(eq(schema.ticketMessage.ticketId, id)).orderBy(asc(schema.ticketMessage.createdAt)),
    getSettings(),
    db
      .select({ id: schema.user.id, plan: schema.user.plan })
      .from(schema.user)
      .where(t.userId ? eq(schema.user.id, t.userId) : sql`lower(${schema.user.email}) = ${t.email.toLowerCase()}`)
      .limit(1),
  ]);

  // Mail fallback: the reply just saved could not be emailed.
  let fallback: string | null = null;
  if (sp(q.sent) === "0") {
    const mid = sp(q.m);
    const i = msgs.findIndex((m) => m.id === mid);
    const reply = i >= 0 ? msgs[i] : [...msgs].reverse().find((m) => m.author === "admin");
    if (reply) {
      const earlier = msgs.slice(0, i >= 0 ? i : msgs.length).filter((m) => m.id !== reply.id);
      fallback = mailtoLink(t.email, replySubject(t.subject, t.id), quotedBody(reply.body, earlier, t.name || t.email, 1500));
    }
  }
  const lastAdmin = [...msgs].reverse().find((m) => m.author === "admin");
  const closed = t.status === "closed";

  return (
    <div className="max-w-[820px]">
      <p className="mb-2 text-[12px] text-faint">
        <Link href={`/admin/support?status=${t.status}`} className="hover:text-ink">Support inbox</Link>
      </p>
      <AdminHead title={t.subject} sub={`Ticket ${ticketRef(t.id)}`}>
        <Tag tone={statusTone(t.status)}>{t.status}</Tag>
        <form action={setTicketStatus}>
          <input type="hidden" name="id" value={t.id} />
          <input type="hidden" name="status" value={closed ? "open" : "closed"} />
          <button className="btn-line !h-7 !px-3">{closed ? "Reopen" : "Close"}</button>
        </form>
      </AdminHead>
      <Flash ok={q.ok} err={q.err} />

      {fallback && (
        <div role="status" className="mt-4 flex flex-col items-start gap-3 rounded-[8px] bg-[#fff4dc] sm:flex-row sm:items-center px-4 py-3 text-[13px] text-[#5c3d00]">
          <Icon name="mail" size={16} />
          <p className="min-w-0 flex-1">
            <span className="font-medium">Email not configured: reply in Gmail.</span> Your reply is saved here. Open it in your mail app to send it to {t.email}.
          </p>
          <a href={fallback} className="btn-ink">
            Reply in Gmail
            <Icon name="arrow-up-right" size={14} />
          </a>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-mute">
        <span>
          From <span className="text-ink">{t.name ? `${t.name} <${t.email}>` : t.email}</span>
        </span>
        <span>Via {t.source}</span>
        <span>Opened {when(t.createdAt)}</span>
        {customer ? (
          <Link href={`/admin/users/${customer.id}`} className="inline-flex items-center gap-1 text-ink hover:underline">
            <Icon name="user" size={13} />
            Account, {cap(customer.plan)}
          </Link>
        ) : (
          <span>No account</span>
        )}
      </div>

      <ol className="mt-4 flex flex-col gap-3">
        {msgs.map((m) => {
          const mine = m.author === "admin";
          return (
            <li key={m.id} className={"rounded-[8px] p-4 " + (mine ? "bg-tile" : m.author === "bot" ? "card border-l-0 opacity-90" : "card")}>
              <p className="flex items-center gap-2 text-[12px] text-mute">
                <Icon name={mine ? "user-check" : m.author === "bot" ? "sparkle" : "user"} size={14} />
                <span className="font-medium text-ink">{mine ? "Support" : m.author === "bot" ? "Help bot" : t.name || t.email}</span>
                <span className="ml-auto text-faint">{when(m.createdAt)}</span>
              </p>
              <div className="mt-2 text-[13px] leading-[1.55] whitespace-pre-wrap">{m.body}</div>
            </li>
          );
        })}
        {!msgs.length && <li className="card p-4 text-[13px] text-mute">This ticket has no messages.</li>}
      </ol>

      <form action={replyTicket} className="card mt-4 flex flex-col gap-3 p-4">
        <input type="hidden" name="id" value={t.id} />
        <label className="flex flex-col gap-1">
          <span className="text-[12px] text-mute">
            Reply to {t.email}, sent from {settings.support.email}
          </span>
          <textarea name="body" required rows={6} placeholder="Write your answer" className={textarea} />
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <button className="btn-ink">
            <Icon name="mail" size={15} />
            Send reply
          </button>
          <span className="text-[12px] text-faint">Marks the ticket answered.</span>
          {lastAdmin && (
            <Link href={`/admin/kb?from=${t.id}`} className="btn-line ml-auto">
              <Icon name="plus" size={15} />
              Save as KB answer
            </Link>
          )}
        </div>
      </form>
    </div>
  );
}
