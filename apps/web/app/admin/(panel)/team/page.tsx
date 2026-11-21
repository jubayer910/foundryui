import type { Metadata } from "next";
import Link from "next/link";
import { requireStaff } from "@/lib/admin";
import { AdminHead, Confirm, Flash, Section, Table, Tag, day, input, td, when } from "@/components/admin/ui";
import { RoleTag } from "@/components/admin/shell/role-tag";
import { InviteDialog } from "@/components/admin/shell/invite-dialog";
import { inviteState, invitableRoles, listStaff, manageError, recentInvites, type InviteState } from "@/components/admin/team";
import { changeRole, createInvite, removeStaff, revokeInvite } from "./actions";

export const metadata: Metadata = { title: "Team" };

const STATE_TONE: Record<InviteState, "warn" | "good" | "bad" | "plain"> = { pending: "warn", accepted: "good", revoked: "bad", expired: "plain" };
const ago = (d: Date | null) => {
  if (!d) return "Never";
  const m = Math.round((Date.now() - d.getTime()) / 60000);
  if (m < 2) return "Just now";
  if (m < 60) return `${m} min ago`;
  if (m < 48 * 60) return `${Math.round(m / 60)} h ago`;
  return day(d);
};

export default async function AdminTeam({ searchParams }: PageProps<"/admin/team">) {
  const me = await requireStaff("team", "/admin/team");
  const q = await searchParams;
  const [staff, invites] = await Promise.all([listStaff(), recentInvites(30)]);
  const now = new Date();
  const roles = invitableRoles(me.role);
  const pending = invites.filter((i) => inviteState(i, now) === "pending");
  const past = invites.filter((i) => inviteState(i, now) !== "pending").slice(0, 10);

  return (
    <div>
      <AdminHead title="Team" info="Who can open the admin panel, and what each role can do.">
        <InviteDialog roles={roles} action={createInvite} />
      </AdminHead>
      <Flash ok={q.ok} err={q.err} />

      <Section title="Staff" sub={`${staff.length} ${staff.length === 1 ? "person" : "people"}`}>
        <Table head={["Name", "Email", "Role", "Joined", "Last active", ""]} empty="Nobody yet.">
          {staff.map((m) => {
            const self = m.id === me.user.id;
            const roleErr = m.id ? manageError(me, m, m.role === "admin" ? "moderator" : "admin") : "No account yet.";
            const removeErr = m.id ? manageError(me, m, "user") : "No account yet.";
            const note = self ? "You" : m.source === "secret" ? (m.id ? "Owner, from the ADMIN_EMAILS secret" : "Owner, no account yet") : m.source === "settings" ? "From Settings, extra admin emails" : null;
            return (
              <tr key={m.id ?? m.email}>
                <td className={td}>
                  {m.id ? (
                    <Link href={`/admin/users/${m.id}`} className="font-medium hover:underline">
                      {m.name || "No name"}
                    </Link>
                  ) : (
                    <span className="text-mute">No account</span>
                  )}
                  {note && <span className="block text-[12px] text-faint">{note}</span>}
                </td>
                <td className={td}>{m.email}</td>
                <td className={td}>
                  <RoleTag role={m.role} />
                </td>
                <td className={td + " whitespace-nowrap text-mute"}>{day(m.joinedAt)}</td>
                <td className={td + " whitespace-nowrap text-mute"} title={m.lastActive ? when(m.lastActive) : undefined}>
                  {ago(m.lastActive)}
                </td>
                <td className={td + " text-right"}>
                  <div className="flex items-center justify-end gap-1.5">
                    {!roleErr && (
                      <form action={changeRole} className="flex items-center gap-1.5">
                        <input type="hidden" name="id" value={m.id!} />
                        <label className="sr-only" htmlFor={`role-${m.id}`}>
                          Role for {m.email}
                        </label>
                        <select id={`role-${m.id}`} name="role" defaultValue={m.role} className={input + " !h-7 !w-[118px]"}>
                          <option value="moderator">Moderator</option>
                          {me.role === "owner" && <option value="admin">Admin</option>}
                        </select>
                        <button className="btn-line !h-7 !px-3">Save</button>
                      </form>
                    )}
                    {!removeErr && (
                      <Confirm label="Remove" tone="bad">
                        <p className="text-[13px]">Remove {m.email} from the team?</p>
                        <p className="mt-1 text-[12px] text-mute">They lose admin access at once. Their site account and plan stay.</p>
                        <form action={removeStaff} className="mt-2.5">
                          <input type="hidden" name="id" value={m.id!} />
                          <button className="btn-ink !h-7 !bg-[#9b1c1c] !px-3">Remove access</button>
                        </form>
                      </Confirm>
                    )}
                    {roleErr && removeErr && <span className="text-[12px] text-faint">{self ? "You" : m.role === "owner" ? "Owner" : m.source === "settings" ? "Managed in Settings" : "Owner only"}</span>}
                  </div>
                </td>
              </tr>
            );
          })}
        </Table>
      </Section>

      <Section title="Pending invites" info="Single use, valid for 7 days.">
        <Table head={["Email", "Role", "Invited by", "Expires", ""]} empty="No pending invites.">
          {pending.map((i) => (
            <tr key={i.id}>
              <td className={td}>{i.email}</td>
              <td className={td}>
                <RoleTag role={i.role} />
              </td>
              <td className={td + " text-mute"}>{i.invitedBy}</td>
              <td className={td + " whitespace-nowrap text-mute"}>{when(i.expiresAt)}</td>
              <td className={td + " text-right"}>
                {i.role === "admin" && me.role !== "owner" ? (
                  <span className="text-[12px] text-faint">Owner only</span>
                ) : (
                  <Confirm label="Revoke" tone="bad">
                    <p className="text-[13px]">Revoke the invite for {i.email}?</p>
                    <p className="mt-1 text-[12px] text-mute">The link stops working. You can invite them again later.</p>
                    <form action={revokeInvite} className="mt-2.5">
                      <input type="hidden" name="id" value={i.id} />
                      <button className="btn-ink !h-7 !bg-[#9b1c1c] !px-3">Revoke invite</button>
                    </form>
                  </Confirm>
                )}
              </td>
            </tr>
          ))}
        </Table>
      </Section>

      {past.length > 0 && (
        <Section title="Earlier invites" sub="Last 10">
          <Table head={["Email", "Role", "Invited by", "Created", "Status"]}>
            {past.map((i) => {
              const s = inviteState(i, now);
              return (
                <tr key={i.id}>
                  <td className={td}>{i.email}</td>
                  <td className={td}>
                    <RoleTag role={i.role} />
                  </td>
                  <td className={td + " text-mute"}>{i.invitedBy}</td>
                  <td className={td + " whitespace-nowrap text-mute"}>{when(i.createdAt)}</td>
                  <td className={td}>
                    <Tag tone={STATE_TONE[s]}>{s}</Tag>
                  </td>
                </tr>
              );
            })}
          </Table>
        </Section>
      )}

      <Section title="Roles">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { r: "owner", t: "Everything, including the team and changing roles. Set by the ADMIN_EMAILS secret; nobody can remove the owner." },
            { r: "admin", t: "Everything except managing the owner and other admins. Can invite and remove moderators." },
            { r: "moderator", t: "Overview, Analytics (read), Support inbox, Knowledge base and Content. No pricing, revenue, orders, users, settings or team." },
          ].map((x) => (
            <div key={x.r} className="card p-4">
              <RoleTag role={x.r} />
              <p className="mt-2 text-[13px] text-ink-2">{x.t}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
