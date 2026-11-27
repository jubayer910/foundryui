import "server-only";
import { and, desc, eq, gte, isNotNull } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { isPaid } from "@/lib/plans";
import { HEARD_FROM, userProfile } from "@/app/api/feedback/store";

/**
 * Insights > How they heard: the self-reported answer from the last /welcome step ("How did you hear about
 * Ingot UI?"), per source, with how many of those accounts pay now, plus the systems picked in step 1.
 * Complements Buyers (automatic first-touch source); this one is what people say themselves.
 */
export type HeardRow = { id: string; label: string; n: number; paid: number };
export type HeardReport = {
  signups: number;
  /** accounts created since the question went live (the first answer); the fair base for the answer rate */
  asked: number;
  /** of those, how many picked a system in step 1 */
  askedPicked: number;
  answered: number;
  pickedSystem: number;
  rows: HeardRow[];
  systems: { slug: string; n: number }[];
  others: { text: string; at: number; paid: boolean }[];
};

export async function loadHeard(days: number | null): Promise<HeardReport> {
  const db = await getDb();
  const since = days ? new Date(Date.now() - days * 86_400_000) : null;
  const users = await db
    .select({ id: schema.user.id, plan: schema.user.plan, createdAt: schema.user.createdAt, heardFrom: userProfile.heardFrom, other: userProfile.heardFromOther, heardAt: userProfile.heardAt, system: userProfile.system })
    .from(schema.user)
    .leftJoin(userProfile, eq(userProfile.userId, schema.user.id))
    .where(since ? gte(schema.user.createdAt, since) : undefined)
    .all()
    .catch(() => []); // columns missing (migration 0025 not applied yet): an empty report rather than a broken page

  const rows = new Map<string, HeardRow>(HEARD_FROM.map((h) => [h.id, { id: h.id, label: h.label, n: 0, paid: 0 }]));
  const systems = new Map<string, number>();
  let answered = 0, pickedSystem = 0;
  const firstAnswer = Math.min(...users.map((u) => (u.heardAt ? u.heardAt.getTime() : Infinity)));
  // anyone who signed up in the day before the first answer was already shown the question
  const newer = Number.isFinite(firstAnswer) ? users.filter((u) => u.createdAt.getTime() >= firstAnswer - 86_400_000) : [];
  const asked = newer.length;
  const askedPicked = newer.filter((u) => u.system).length;
  for (const u of users) {
    if (u.system) { pickedSystem++; systems.set(u.system, (systems.get(u.system) ?? 0) + 1); }
    if (!u.heardFrom) continue;
    answered++;
    const r = rows.get(u.heardFrom);
    if (!r) continue;
    r.n++;
    if (isPaid(u.plan)) r.paid++;
  }

  const others = await db
    .select({ text: userProfile.heardFromOther, at: userProfile.heardAt, plan: schema.user.plan })
    .from(userProfile)
    .innerJoin(schema.user, eq(schema.user.id, userProfile.userId))
    .where(and(eq(userProfile.heardFrom, "other"), isNotNull(userProfile.heardFromOther), since ? gte(userProfile.heardAt, since) : undefined))
    .orderBy(desc(userProfile.heardAt))
    .limit(30)
    .all()
    .catch(() => []);

  return {
    signups: users.length,
    asked,
    askedPicked,
    answered,
    pickedSystem,
    rows: [...rows.values()].sort((a, b) => b.n - a.n),
    systems: [...systems].map(([slug, n]) => ({ slug, n })).sort((a, b) => b.n - a.n),
    others: others.filter((o) => o.text).map((o) => ({ text: o.text!, at: o.at ? o.at.getTime() : 0, paid: isPaid(o.plan) })),
  };
}
