import { eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { memberTeam, teamMember } from "@/lib/plans";
import { err, requireUser } from "../_lib";

/** POST /api/team/leave  A member gives up their seat. Owners can't leave their own team. */
export async function POST() {
  const user = await requireUser();
  if (user instanceof Response) return user;
  const m = await memberTeam(user.id);
  if (!m) return err("not_a_member", 404);
  const db = await getDb();
  await db.delete(teamMember).where(eq(teamMember.id, m.memberId));
  await db.insert(schema.auditLog).values({ actor: user.email, action: "team:leave", target: m.teamId, detail: null, createdAt: new Date() });
  return Response.json({ ok: true });
}
