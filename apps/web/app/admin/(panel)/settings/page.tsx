import type { Metadata } from "next";
import { desc } from "drizzle-orm";
import { getDb, getEnv, schema } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { requireStaff } from "@/lib/admin";
import { AdminHead, Field, Flash, Section, Table, input, td, textarea, when } from "@/components/admin/ui";
import { Icon } from "@/registry/components/icons";
import { saveSettings } from "./actions";

export const metadata: Metadata = { title: "Settings" };

export default async function AdminSettings({ searchParams }: PageProps<"/admin/settings">) {
  await requireStaff("settings", "/admin/settings");
  const q = await searchParams;
  const [s, env, db] = await Promise.all([getSettings(), getEnv(), getDb()]);
  const log = await db.select().from(schema.auditLog).orderBy(desc(schema.auditLog.id)).limit(25);
  // Presence only. Values are never read into the page.
  const e = env as unknown as Record<string, unknown>;
  const has = (k: string) => {
    const v = e[k];
    return typeof v === "string" ? v.trim().length > 0 : v != null;
  };
  const status: { key: string; what: string }[] = [
    { key: "LEMONSQUEEZY_API_KEY", what: "Creates checkouts" },
    { key: "LEMONSQUEEZY_STORE_ID", what: "Which store checkouts use" },
    { key: "LEMONSQUEEZY_WEBHOOK_SECRET", what: "Verifies order webhooks" },
    { key: "SUPPORT_MAIL", what: "Sends ticket replies and alerts" },
    { key: "ADMIN_EMAILS", what: "Owner accounts (full access)" },
  ];
  const variants = Object.values(s.variants).filter(Boolean).length;

  return (
    <div>
      <AdminHead title="Settings" sub="Support addresses, admins and what is configured." />
      <Flash ok={q.ok} err={q.err} />
      <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <form action={saveSettings} className="card flex flex-col gap-3 p-4">
          <p className="text-[13px] font-medium">Support</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Support email" hint="Shown on /support. Replies go out with this reply-to.">
              <input name="supportEmail" type="email" required defaultValue={s.support.email} className={input} />
            </Field>
            <Field label="Contact email" hint="Where new-ticket alerts go.">
              <input name="contactEmail" type="email" required defaultValue={s.support.contactEmail} className={input} />
            </Field>
          </div>
          <label className="flex cursor-pointer items-center gap-2 text-[13px]">
            <input type="checkbox" name="notify" defaultChecked={s.support.notify} className="size-4 accent-[#0b0b0b]" />
            Email me when a new ticket comes in
          </label>
          <p className="mt-2 text-[13px] font-medium">Extra admins</p>
          <Field label="Admin emails" hint="One per line. They get the admin role when they sign in with this email. For moderators, use Team.">
            <textarea name="adminEmails" rows={4} defaultValue={s.adminEmails.join("\n")} placeholder="name@company.com" className={textarea + " font-fu-mono text-[12px]"} />
          </Field>
          <button className="btn-ink self-start">Save settings</button>
        </form>

        <div className="card p-4">
          <p className="text-[13px] font-medium">Status</p>
          <p className="mt-0.5 text-[12px] text-faint">Secrets and bindings on this deployment. Present or missing only, values are never shown.</p>
          <ul className="mt-3 divide-y divide-hair">
            {status.map((r) => {
              const ok = has(r.key);
              return (
                <li key={r.key} className="flex items-center gap-3 py-2">
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-fu-mono text-[12px]">{r.key}</span>
                    <span className="block text-[12px] text-faint">{r.what}</span>
                  </span>
                  <span className={"inline-flex items-center gap-1 text-[12px] " + (ok ? "text-[#17663a]" : "text-[#9b1c1c]")}>
                    <Icon name={ok ? "check" : "x"} size={14} />
                    {ok ? "Present" : "Missing"}
                  </span>
                </li>
              );
            })}
            <li className="flex items-center gap-3 py-2">
              <span className="min-w-0 flex-1">
                <span className="block text-[13px]">Lemon Squeezy variant IDs</span>
                <span className="block text-[12px] text-faint">Set on Pricing & deal</span>
              </span>
              <span className={"text-[12px] tabular-nums " + (variants === 4 ? "text-[#17663a]" : "text-mute")}>{variants} of 4</span>
            </li>
          </ul>
        </div>
      </div>

      <Section title="Audit log" sub="Last 25 admin changes.">
        <Table head={["When", "Who", "Action", "Target"]} empty="No admin changes yet.">
          {log.map((l) => (
            <tr key={l.id}>
              <td className={td + " whitespace-nowrap text-mute"}>{when(l.createdAt)}</td>
              <td className={td}>{l.actor}</td>
              <td className={td + " font-fu-mono text-[12px]"}>{l.action}</td>
              <td className={td + " max-w-[260px] truncate text-mute"} title={l.target ?? ""}>{l.target}</td>
            </tr>
          ))}
        </Table>
      </Section>
    </div>
  );
}
