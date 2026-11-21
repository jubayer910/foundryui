import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { asc, eq, sql } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { sp } from "@/components/admin/guard";
import { requireStaff } from "@/lib/admin";
import { AdminHead, Flash, Tag, cap, statusTone, textarea, when } from "@/components/admin/ui";
import { mailtoLink, quotedBody, replySubject, ticketRef } from "@/components/admin/thread";
import { Icon } from "@/registry/components/icons";
import { replyTicket, setTicketStatus } from "../actions";

export const metadata: Metadata = { title: "Ticket" };

export default async function AdminTicket({ params, searchParams }: PageProps<"/admin/support/[id]">) {
  const { id } = await params;
  await requireStaff("support", `/admin/support/${encodeURIComponent(id)}`);
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
      <p className="mb-2 text-[12px] text-faint max-md:hidden">
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

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-mute max-md:gap-x-4 max-md:text-[13px]">
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

      {/* Phones: a chat thread, the customer and the bot on the left, support's replies on the right. */}
      <ol className="mt-4 flex flex-col gap-3 max-md:gap-2.5" aria-label="Messages">
        {msgs.map((m) => {
          const mine = m.author === "admin";
          return (
            <li
              key={m.id}
              className={
                "rounded-[8px] p-4 max-md:max-w-[88%] max-md:rounded-[16px] max-md:px-3.5 max-md:py-2.5 " +
                (mine ? "bg-tile max-md:self-end max-md:rounded-br-[6px]" : (m.author === "bot" ? "card border-l-0 opacity-90" : "card") + " max-md:self-start max-md:rounded-bl-[6px]")
              }
            >
              <p className="flex items-center gap-2 text-[12px] text-mute">
                <Icon name={mine ? "user-check" : m.author === "bot" ? "sparkle" : "user"} size={14} />
                <span className="min-w-0 truncate font-medium text-ink">{mine ? "Support" : m.author === "bot" ? "Help bot" : t.name || t.email}</span>
                <span className="ml-auto shrink-0 text-faint">{when(m.createdAt)}</span>
              </p>
              <div className="mt-2 text-[13px] leading-[1.55] whitespace-pre-wrap [overflow-wrap:anywhere] max-md:mt-1 max-md:text-[15px] max-md:leading-[1.45]">{m.body}</div>
            </li>
          );
        })}
        {!msgs.length && <li className="card p-4 text-[13px] text-mute">This ticket has no messages.</li>}
      </ol>

      {/* Phones: the reply box is pinned to the bottom, above the tab bar, and above the keyboard while typing. */}
      <form
        action={replyTicket}
        className="card mt-4 flex flex-col gap-3 p-4 max-md:sticky max-md:bottom-[var(--admin-bottom,0px)] max-md:z-10 max-md:-mx-4 max-md:mt-5 max-md:gap-2 max-md:rounded-none max-md:border-t max-md:border-hair max-md:bg-white/95 max-md:px-4 max-md:py-3 max-md:shadow-none max-md:backdrop-blur"
      >
        <input type="hidden" name="id" value={t.id} />
        <label className="flex flex-col gap-1">
          <span className="text-[12px] text-mute max-md:truncate">
            Reply to {t.email}, sent from {settings.support.email}
          </span>
          <textarea
            name="body"
            required
            rows={6}
            placeholder="Write your answer"
            className={textarea + " max-md:h-[88px] max-md:resize-none max-md:rounded-[12px] max-md:transition-[height] max-md:duration-200 max-md:focus:h-[min(180px,32dvh)]"}
          />
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <button className="btn-ink max-md:flex-1">
            <Icon name="mail" size={15} />
            Send reply
          </button>
          <span className="text-[12px] text-faint max-md:hidden">Marks the ticket answered.</span>
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
