import { and, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { teamMember } from "@/lib/plans";
import { err, ownedTeam, requireUser } from "../../_lib";

/**
 * DELETE /api/team/members/<id>
 * Owner only: removes a member (their Team access ends on their next request) or cancels a pending
 * invite (its link stops working). Works even after the Team ended, so the owner can tidy up.
 */
export async function DELETE(_req: Request, ctx: RouteContext<"/api/team/members/[id]">) {
  const user = await requireUser();
  if (user instanceof Response) return user;
  const { id } = await ctx.params;
  const t = await ownedTeam(user.id);
  if (!t) return err("team_required", 403);
  const db = await getDb();
  const [row] = await db
    .select({ id: teamMember.id, role: teamMember.role, email: teamMember.email, joinedAt: teamMember.joinedAt })
    .from(teamMember)
    .where(and(eq(teamMember.id, id), eq(teamMember.teamId, t.id)))
    .limit(1);
  if (!row) return err("not_found", 404);
  if (row.role === "owner") return err("cannot_remove_owner");
  await db.delete(teamMember).where(eq(teamMember.id, row.id));
  await db.insert(schema.auditLog).values({ actor: user.email, action: row.joinedAt ? "team:remove" : "team:revoke", target: row.email, detail: JSON.stringify({ teamId: t.id }), createdAt: new Date() });
  return Response.json({ ok: true });
}
