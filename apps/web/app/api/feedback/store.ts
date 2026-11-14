import "server-only";
import { and, count, desc, eq, inArray, isNotNull, or, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { getDb, getEnv, schema } from "@/lib/db";
import { isPaid } from "@/lib/plans";

/* Tables from migrations/0007_feedback.sql. Kept here so this workstream doesn't edit lib/db/schema.ts;
   the lead can move them into the shared schema at merge. */
const ts = (name: string) => integer(name, { mode: "timestamp" });

export const userProfile = sqliteTable("user_profile", {
  userId: text("userId").primaryKey(),
  segment: text("segment"),
  segmentOther: text("segmentOther"),
  segmentAt: ts("segmentAt"),
  system: text("system"),
  systemAt: ts("systemAt"),
  surveyDismissedAt: ts("surveyDismissedAt"),
  feedbackDismissedAt: ts("feedbackDismissedAt"),
  updatedAt: ts("updatedAt").notNull(),
});

export const feedback = sqliteTable("feedback", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  nps: integer("nps").notNull(),
  quote: text("quote"),
  name: text("name"),
  company: text("company"),
  consent: integer("consent", { mode: "boolean" }).notNull().default(false),
  approved: integer("approved", { mode: "boolean" }).notNull().default(false),
  segment: text("segment"),
  plan: text("plan"),
  createdAt: ts("createdAt").notNull(),
});

export const SEGMENTS = [
  { id: "saas", label: "A SaaS product" },
  { id: "internal", label: "An internal tool" },
  { id: "client", label: "A client project" },
  { id: "ai_agent", label: "An AI agent product" },
  { id: "other", label: "Something else" },
] as const;
export type Segment = (typeof SEGMENTS)[number]["id"];

/** Usage actions that count as "built something": a code copy, a Figma copy or a CLI install. */
export const BUILD_ACTIONS = ["copy_code", "copy_figma", "install"] as const;
/** MCP tools that put real components or a screen into the user's project. */
export const BUILD_TOOLS = ["scaffold_screen", "add_components", "get_component_code", "get_chart"] as const;
/** The feedback ask appears after this many copies/downloads (or on any paid plan). */
export const FEEDBACK_MIN_COPIES = 3;
/** "Not now" hides the feedback ask for this long. */
const SNOOZE_DAYS = 30;

export type Onboarding = {
  steps: { system: boolean; agent: boolean; build: boolean };
  system: string | null;
  segment: string | null;
  showSurvey: boolean;
  /** already sent an NPS answer */
  answered: boolean;
  /** active enough to be asked: FEEDBACK_MIN_COPIES+ copies or a paid plan */
  eligible: boolean;
  showFeedback: boolean;
};

export async function getOnboarding(user: { id: string; plan: string }): Promise<Onboarding> {
  const db = await getDb();
  const [profile, favs, keysUsed, usage, answered] = await Promise.all([
    db.select().from(userProfile).where(eq(userProfile.userId, user.id)).get(),
    db.select({ n: count() }).from(schema.favorite).where(eq(schema.favorite.userId, user.id)).get(),
    db
      .select({ n: count() })
      .from(schema.apiKey)
      .where(and(eq(schema.apiKey.userId, user.id), isNotNull(schema.apiKey.lastUsedAt)))
      .get(),
    db
      .select({
        mcp: sql<number>`sum(case when ${schema.usageEvent.client} = 'mcp' then 1 else 0 end)`,
        copies: sql<number>`sum(case when ${schema.usageEvent.client} != 'mcp' then 1 else 0 end)`,
      })
      .from(schema.usageEvent)
      .where(eq(schema.usageEvent.userId, user.id))
      .get(),
    db.select({ n: count() }).from(feedback).where(eq(feedback.userId, user.id)).get(),
  ]);
  const built = await db
    .select({ n: count() })
    .from(schema.usageEvent)
    .where(
      and(
        eq(schema.usageEvent.userId, user.id),
        or(
          inArray(schema.usageEvent.action, [...BUILD_ACTIONS]),
          and(eq(schema.usageEvent.action, "mcp_call"), inArray(schema.usageEvent.target, [...BUILD_TOOLS])),
        ),
      ),
    )
    .get();

  const copies = Number(usage?.copies ?? 0);
  const snoozed = profile?.feedbackDismissedAt && Date.now() - profile.feedbackDismissedAt.getTime() < SNOOZE_DAYS * 864e5;
  return {
    steps: {
      system: Boolean(profile?.system) || Number(favs?.n ?? 0) > 0,
      agent: Number(keysUsed?.n ?? 0) > 0 || Number(usage?.mcp ?? 0) > 0,
      build: Number(built?.n ?? 0) > 0,
    },
    system: profile?.system ?? null,
    segment: profile?.segment ?? null,
    showSurvey: !profile?.segment && !profile?.surveyDismissedAt,
    answered: Number(answered?.n ?? 0) > 0,
    eligible: copies >= FEEDBACK_MIN_COPIES || isPaid(user.plan),
    showFeedback: Number(answered?.n ?? 0) === 0 && !snoozed && (copies >= FEEDBACK_MIN_COPIES || isPaid(user.plan)),
  };
}

/** Upsert part of a user's profile row. */
export async function saveProfile(userId: string, patch: Partial<Omit<typeof userProfile.$inferInsert, "userId" | "updatedAt">>) {
  const db = await getDb();
  const now = new Date();
  await db
    .insert(userProfile)
    .values({ userId, ...patch, updatedAt: now })
    .onConflictDoUpdate({ target: userProfile.userId, set: { ...patch, updatedAt: now } });
}

/** Fixed-window limit per key per hour, in KV. Returns false when the caller is over the limit. */
export async function takeLimit(bucket: string, id: string, max: number): Promise<boolean> {
  try {
    const env = await getEnv();
    const key = "fb:rl:" + bucket + ":" + id + ":" + Math.floor(Date.now() / 3_600_000);
    const used = Number((await env.KV.get(key)) ?? 0);
    if (used >= max) return false;
    await env.KV.put(key, String(used + 1), { expirationTtl: 3600 + 60 });
    return true;
  } catch {
    return true; // KV down: accept the answer rather than lose it
  }
}

/** Public shape for the home ProofStrip: consented AND owner-approved quotes only. */
export type PublicQuote = { quote: string; name: string; company: string | null; nps: number; date: string };

export async function publicQuotes(limit = 12): Promise<PublicQuote[]> {
  const db = await getDb();
  const rows = await db
    .select({ quote: feedback.quote, name: feedback.name, company: feedback.company, nps: feedback.nps, createdAt: feedback.createdAt })
    .from(feedback)
    .where(and(eq(feedback.consent, true), eq(feedback.approved, true), isNotNull(feedback.quote), isNotNull(feedback.name)))
    .orderBy(desc(feedback.createdAt))
    .limit(limit);
  return rows.map((r) => ({ quote: r.quote!, name: r.name!, company: r.company, nps: r.nps, date: r.createdAt.toISOString().slice(0, 10) }));
}
