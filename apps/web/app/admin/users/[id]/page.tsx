import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { count, desc, eq, or, sql } from "drizzle-orm";
import { getDb, getEnv, schema } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { adminOnly } from "@/components/admin/guard";
import { AdminHead, Field, Flash, Kpi, Section, Table, Tag, cap, day, input, money, num, statusTone, td, when } from "@/components/admin/ui";
import { setUserPlan, setUserRole } from "../actions";

export const metadata: Metadata = { title: "User" };

export default async function AdminUser({ params, searchParams }: PageProps<"/admin/users/[id]">) {
  const me = await adminOnly();
  const { id } = await params;
  const q = await searchParams;
  const db = await getDb();
  const [u] = await db.select().from(schema.user).where(eq(schema.user.id, id)).limit(1);
  if (!u) notFound();
  const email = u.email.toLowerCase();
  const [usage, keys, purchases, subs, tickets, env, settings] = await Promise.all([
    db
      .select({ action: schema.usageEvent.action, client: schema.usageEvent.client, n: count() })
      .from(schema.usageEvent)
      .where(eq(schema.usageEvent.userId, id))
      .groupBy(schema.usageEvent.action, schema.usageEvent.client),
    db.select({ id: schema.apiKey.id, name: schema.apiKey.name, prefix: schema.apiKey.prefix, createdAt: schema.apiKey.createdAt, lastUsedAt: schema.apiKey.lastUsedAt }).from(schema.apiKey).where(eq(schema.apiKey.userId, id)).orderBy(desc(schema.apiKey.createdAt)),
    db.select().from(schema.purchase).where(or(eq(schema.purchase.userId, id), sql`lower(${schema.purchase.email}) = ${email}`)).orderBy(desc(schema.purchase.createdAt)),
    db.select().from(schema.subscription).where(or(eq(schema.subscription.userId, id), sql`lower(${schema.subscription.email}) = ${email}`)).orderBy(desc(schema.subscription.updatedAt)),
    db.select().from(schema.ticket).where(or(eq(schema.ticket.userId, id), sql`lower(${schema.ticket.email}) = ${email}`)).orderBy(desc(schema.ticket.updatedAt)),
    getEnv(),
    getSettings(),
  ]);
  const total = usage.reduce((s, r) => s + r.n, 0);
  const mcp = usage.filter((r) => r.client === "mcp").reduce((s, r) => s + r.n, 0);
  const byAction = new Map<string, number>();
  for (const r of usage) byAction.set(r.action, (byAction.get(r.action) ?? 0) + r.n);
  const envAdmin = (env.ADMIN_EMAILS ?? "").split(",").map((e) => e.trim().toLowerCase()).includes(email);
  const settingsAdmin = settings.adminEmails.map((e) => e.toLowerCase()).includes(email);
  const self = me.id === u.id;

  return (
    <div>
      <p className="mb-2 text-[12px] text-faint">
        <Link href="/admin/users" className="hover:text-ink">Users</Link>
      </p>
      <AdminHead title={u.name || u.email} sub={u.email}>
        <Tag tone={u.plan === "free" ? "plain" : "good"}>{u.plan}</Tag>
        {(u.role === "admin" || envAdmin || settingsAdmin) && <Tag tone="ink">admin</Tag>}
      </AdminHead>
      <Flash ok={q.ok} err={q.err} />

      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label="Plan" value={cap(u.plan)} hint={u.emailVerified ? "Email verified" : "Email not verified"} />
        <Kpi label="Signed up" value={day(u.createdAt)} hint={when(u.createdAt)} />
        <Kpi label="Copies & downloads" value={num(total - mcp)} hint="Web and CLI" />
        <Kpi label="MCP calls" value={num(mcp)} hint={`${keys.length} API key${keys.length === 1 ? "" : "s"}`} />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <form action={setUserPlan} className="card flex flex-col gap-3 p-4">
          <input type="hidden" name="id" value={u.id} />
          <p className="text-[13px] font-medium">Change plan</p>
          <p className="-mt-2 text-[12px] text-faint">Sets the plan directly. To leave a record with the order history, use Grant on the Orders page.</p>
          <div className="grid grid-cols-[140px_minmax(0,1fr)] gap-2">
            <Field label="Plan">
              <select name="plan" defaultValue={u.plan} className={input}>
                <option value="free">Free</option>
                <option value="pro">Pro</option>
                <option value="lifetime">Lifetime</option>
              </select>
            </Field>
            <Field label="Note">
              <input name="note" required placeholder="Why, for the audit log" className={input} />
            </Field>
          </div>
          <button className="btn-ink self-start">Save plan</button>
        </form>
        <div className="card flex flex-col gap-3 p-4">
          <p className="text-[13px] font-medium">Admin access</p>
          <p className="-mt-2 text-[12px] text-faint">
            Role: {u.role}.{envAdmin && " Also an admin through the ADMIN_EMAILS secret."}
            {settingsAdmin && " Also listed in Settings, extra admin emails."}
          </p>
          {self ? (
            <p className="text-[13px] text-mute">This is you. Another admin has to change your role.</p>
          ) : (
            <form action={setUserRole}>
              <input type="hidden" name="id" value={u.id} />
              <input type="hidden" name="role" value={u.role === "admin" ? "user" : "admin"} />
              <button className={u.role === "admin" ? "btn-line !text-[#9b1c1c]" : "btn-line"}>{u.role === "admin" ? "Remove admin" : "Make admin"}</button>
            </form>
          )}
        </div>
      </div>

      <Section title="Usage" sub={`${num(total)} events`}>
        <div className="flex flex-wrap gap-1.5">
          {[...byAction.entries()].sort((a, b) => b[1] - a[1]).map(([a, n]) => (
            <span key={a} className="pill !cursor-default">
              {a.replace(/_/g, " ")}
              <span className="text-faint tabular-nums">{num(n)}</span>
            </span>
          ))}
          {!byAction.size && <p className="text-[13px] text-mute">No usage yet.</p>}
        </div>
      </Section>

      <Section title="API keys" sub="Prefix only, keys are stored hashed.">
        <Table head={["Name", "Prefix", "Created", "Last used"]} empty="No API keys.">
          {keys.map((k) => (
            <tr key={k.id}>
              <td className={td}>{k.name}</td>
              <td className={td + " font-fu-mono text-[12px]"}>{k.prefix}…</td>
              <td className={td + " text-mute"}>{day(k.createdAt)}</td>
              <td className={td + " text-mute"}>{when(k.lastUsedAt)}</td>
            </tr>
          ))}
        </Table>
      </Section>

      <Section title="Purchases">
        <Table head={["Date", "Plan", "Amount", "Status", "Note"]} empty="No purchases.">
          {purchases.map((p) => (
            <tr key={p.id}>
              <td className={td + " whitespace-nowrap text-mute"}>{when(p.createdAt)}</td>
              <td className={td}>{cap(p.plan)} <span className="text-faint">{p.variant}</span></td>
              <td className={td + " tabular-nums"}>{money(p.amountCents, p.currency)}</td>
              <td className={td}><Tag tone={statusTone(p.status)}>{p.status}</Tag></td>
              <td className={td + " max-w-[320px] whitespace-pre-line text-[12px] text-mute"}>{p.note}</td>
            </tr>
          ))}
        </Table>
      </Section>

      <Section title="Subscriptions">
        <Table head={["Plan", "Status", "Renews", "Ends"]} empty="No subscriptions.">
          {subs.map((s) => (
            <tr key={s.id}>
              <td className={td}>{cap(s.plan)} <span className="text-faint">{s.interval}</span></td>
              <td className={td}><Tag tone={statusTone(s.status)}>{s.status.replace("_", " ")}</Tag></td>
              <td className={td + " text-mute"}>{when(s.renewsAt)}</td>
              <td className={td + " text-mute"}>{when(s.endsAt)}</td>
            </tr>
          ))}
        </Table>
      </Section>

      <Section title="Tickets">
        <Table head={["Subject", "Status", "Updated"]} empty="No tickets.">
          {tickets.map((t) => (
            <tr key={t.id}>
              <td className={td}><Link href={`/admin/support/${t.id}`} className="hover:underline">{t.subject}</Link></td>
              <td className={td}><Tag tone={statusTone(t.status)}>{t.status}</Tag></td>
              <td className={td + " text-mute"}>{when(t.updatedAt)}</td>
            </tr>
          ))}
        </Table>
      </Section>
    </div>
  );
}
