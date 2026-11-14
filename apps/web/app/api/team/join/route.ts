import { and, eq, isNull } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { isTeamActive, memberTeam, team, teamMember } from "@/lib/plans";
import { err, ownerOf, requireUser } from "../_lib";

/**
 * POST /api/team/join  { token }
 * Accepts an invite link. The signed-in email must be the invited email (a forwarded link can't take
 * a seat), the owner's Team must be active, and a user can sit in one team at a time.
 */
export async function POST(req: Request) {
  const user = await requireUser();
  if (user instanceof Response) return user;
  const body = (await req.json().catch(() => ({}))) as { token?: unknown };
  const token = typeof body.token === "string" ? body.token.trim() : "";
  if (!token || token.length > 64) return err("invalid_invite");

  const db = await getDb();
  const [row] = await db
    .select({ id: teamMember.id, email: teamMember.email, teamId: teamMember.teamId, ownerId: team.ownerId })
    .from(teamMember)
    .innerJoin(team, eq(team.id, teamMember.teamId))
    .where(and(eq(teamMember.token, token), isNull(teamMember.joinedAt)))
    .limit(1);
  if (!row) return err("invalid_invite", 404);
  if (row.ownerId === user.id) return err("own_team");
  if (row.email !== user.email.toLowerCase()) return err("email_mismatch", 403);
  const owner = await ownerOf(row.ownerId);
  if (!(await isTeamActive(row.ownerId, owner?.plan))) return err("team_inactive", 409);
  if (await memberTeam(user.id)) return err("already_in_team", 409);

  const now = new Date();
  await db.update(teamMember).set({ userId: user.id, joinedAt: now, token: null }).where(eq(teamMember.id, row.id));
  await db.insert(schema.auditLog).values({ actor: user.email, action: "team:join", target: row.teamId, detail: null, createdAt: now });
  return Response.json({ ok: true, ownerEmail: owner?.email ?? null });
}
