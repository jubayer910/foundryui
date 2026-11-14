import { getDb, schema } from "@/lib/db";
import { isTeamActive, teamMember } from "@/lib/plans";
import { EMAIL_RE, ensureTeam, err, inviteLink, newToken, requireUser, seatRows } from "../_lib";

/**
 * POST /api/team/invite  { email }
 * Owner only, while their Team is active. Reserves a seat and returns the invite link to copy.
 * Seats count the owner, joined members and pending invites; 409 when all are used.
 */
export async function POST(req: Request) {
  const user = await requireUser();
  if (user instanceof Response) return user;
  if (!(await isTeamActive(user.id, user.plan))) return err("team_required", 403);

  const body = (await req.json().catch(() => ({}))) as { email?: unknown };
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) return err("invalid_email");
  if (email === user.email.toLowerCase()) return err("own_email");

  const t = await ensureTeam(user);
  const rows = await seatRows(t.id);
  if (rows.some((r) => r.email === email)) return err("already_invited", 409);
  if (rows.length >= t.seats) return err("seats_full", 409);

  const db = await getDb();
  const token = newToken();
  const now = new Date();
  const id = "tm_" + crypto.randomUUID();
  await db.insert(teamMember).values({ id, teamId: t.id, userId: null, email, role: "member", token, invitedAt: now, joinedAt: null });
  await db.insert(schema.auditLog).values({ actor: user.email, action: "team:invite", target: email, detail: JSON.stringify({ teamId: t.id }), createdAt: now });

  return Response.json({ ok: true, id, email, link: inviteLink(new URL(req.url).origin, token), used: rows.length + 1, seats: t.seats });
}
