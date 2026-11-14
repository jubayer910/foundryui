import "server-only";
import { asc, eq } from "drizzle-orm";
import { getSessionUser, type SessionUser } from "@/lib/auth";
import { getDb, schema } from "@/lib/db";
import { TEAM_SEATS, isTeamActive, memberTeam, team, teamMember } from "@/lib/plans";

export const err = (error: string, status = 400) => Response.json({ error }, { status });

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Invite link the owner copies. /account handles ?invite=<token> (sign in first, then join). */
export const inviteLink = (origin: string, token: string) => origin + "/account?invite=" + encodeURIComponent(token);

/** 24 random bytes, base64url. */
export function newToken() {
  const b = crypto.getRandomValues(new Uint8Array(24));
  return btoa(String.fromCharCode(...b)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function requireUser(): Promise<SessionUser | Response> {
  const user = await getSessionUser().catch(() => null);
  return user ?? err("login_required", 401);
}

/** The owner's team row, or null. */
export async function ownedTeam(ownerId: string) {
  const db = await getDb();
  const [t] = await db.select().from(team).where(eq(team.ownerId, ownerId)).limit(1);
  return t ?? null;
}

/** Creates the owner's team (and the owner's own seat) the first time it is needed. Only for an active Team. */
export async function ensureTeam(owner: SessionUser) {
  const existing = await ownedTeam(owner.id);
  if (existing) return existing;
  const db = await getDb();
  const now = new Date();
  const id = "team_" + crypto.randomUUID();
  await db.insert(team).values({ id, ownerId: owner.id, name: null, seats: TEAM_SEATS, createdAt: now, updatedAt: now }).onConflictDoNothing();
  const t = (await ownedTeam(owner.id))!;
  await db
    .insert(teamMember)
    .values({ id: "tm_" + crypto.randomUUID(), teamId: t.id, userId: owner.id, email: owner.email.toLowerCase(), role: "owner", token: null, invitedAt: now, joinedAt: now })
    .onConflictDoNothing();
  return t;
}

export async function seatRows(teamId: string) {
  const db = await getDb();
  return db.select().from(teamMember).where(eq(teamMember.teamId, teamId)).orderBy(asc(teamMember.invitedAt));
}

/** Everything /account needs to draw the seats panel. */
export async function teamState(user: SessionUser, origin: string, inviteToken: string | null) {
  const db = await getDb();
  const active = await isTeamActive(user.id, user.plan);
  const own = active ? await ensureTeam(user) : await ownedTeam(user.id);
  let owner = null;
  if (own) {
    const rows = await seatRows(own.id);
    owner = {
      active,
      seats: own.seats,
      used: rows.length,
      members: rows.map((r) => ({
        id: r.id,
        email: r.email,
        role: r.role,
        status: r.joinedAt ? "joined" : "pending",
        invitedAt: r.invitedAt.toISOString(),
        joinedAt: r.joinedAt?.toISOString() ?? null,
        link: !r.joinedAt && r.token ? inviteLink(origin, r.token) : null,
      })),
    };
  }
  const m = await memberTeam(user.id);
  const member = m ? { memberId: m.memberId, ownerEmail: m.ownerEmail, ownerName: m.ownerName, active: await isTeamActive(m.ownerId, m.ownerPlan) } : null;

  let invite = null;
  if (inviteToken) {
    const [row] = await db
      .select({ id: teamMember.id, email: teamMember.email, teamId: teamMember.teamId, joinedAt: teamMember.joinedAt, ownerId: team.ownerId })
      .from(teamMember)
      .innerJoin(team, eq(team.id, teamMember.teamId))
      .where(eq(teamMember.token, inviteToken))
      .limit(1);
    if (!row || row.joinedAt) invite = { valid: false as const };
    else {
      const o = await ownerOf(row.ownerId);
      invite = {
        valid: true as const,
        email: row.email,
        ownerEmail: o?.email ?? "",
        ownerName: o?.name ?? "",
        emailMatches: row.email === user.email.toLowerCase(),
        ownTeam: row.ownerId === user.id,
        teamActive: await isTeamActive(row.ownerId, o?.plan),
        alreadyInTeam: !!m,
      };
    }
  }
  return { email: user.email, owner, member, invite };
}

export async function ownerOf(ownerId: string) {
  const db = await getDb();
  const [o] = await db.select({ email: schema.user.email, name: schema.user.name, plan: schema.user.plan }).from(schema.user).where(eq(schema.user.id, ownerId)).limit(1);
  return o ?? null;
}
