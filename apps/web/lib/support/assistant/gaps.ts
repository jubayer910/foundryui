import "server-only";
import { sql } from "drizzle-orm";
import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { getDb } from "../../db";

/** Unanswered help-assistant questions (migrations/0014_bot_gaps.sql). */
export const botGap = sqliteTable("bot_gap", {
  id: text("id").primaryKey(),
  question: text("question").notNull(),
  intent: text("intent").notNull().default("unknown"),
  confidence: real("confidence").notNull().default(0),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull(),
  count: integer("count").notNull().default(1),
  lastAt: integer("lastAt", { mode: "timestamp" }).notNull(),
  dismissed: integer("dismissed", { mode: "boolean" }).notNull().default(false),
});

/** Dedupe key: the analysed concept terms, sorted, so "Weather in Paris?" and "paris weather" are one gap. */
export const gapKey = (terms: string[], fallback: string) => {
  const k = [...new Set(terms)].sort().join(" ").slice(0, 160);
  return "g:" + (k || fallback.toLowerCase().replace(/\s+/g, " ").trim().slice(0, 160));
};

/** One upsert per unanswered question. Never throws. */
export async function logGap(key: string, question: string, intent: string, confidence: number) {
  try {
    const db = await getDb();
    const now = new Date();
    await db
      .insert(botGap)
      .values({ id: key, question: question.slice(0, 300), intent: intent.slice(0, 40), confidence, createdAt: now, count: 1, lastAt: now })
      .onConflictDoUpdate({ target: botGap.id, set: { count: sql`${botGap.count} + 1`, lastAt: now, confidence: sql`min(${botGap.confidence}, ${confidence})` } });
  } catch {}
}
