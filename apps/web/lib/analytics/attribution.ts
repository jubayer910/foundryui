import "server-only";
import { eq, sql } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { FIRST_TOUCH, LAST_TOUCH, parseTouch, readTouch, touchJson, type Touch } from "./source";

/**
 * Copies the visitor's touch cookies (lib/analytics/source.ts) onto an account. At sign-up both are written;
 * at checkout the latest touch is refreshed and the first one filled in only when missing. Also counts the
 * checkout per source in stat_daily (kind "checkout", key "<source>\t<option>"), for guests too. Never throws.
 */
export async function saveTouch(userId: string | null, when: "signup" | "checkout", option?: string) {
  try {
    const { cookies, headers } = await import("next/headers");
    const jar = await cookies();
    const host = (await headers()).get("host")?.split(":")[0] ?? "ingotui.com";
    const first = parseTouch(jar.get(FIRST_TOUCH)?.value, host);
    const last = parseTouch(jar.get(LAST_TOUCH)?.value, host) ?? first;
    const db = await getDb();
    if (when === "checkout") {
      const day = new Date().toISOString().slice(0, 10);
      const key = `${(last ?? first)?.source ?? "unknown"}\t${(option ?? "").replace(/[^A-Za-z]/g, "").slice(0, 20)}`;
      const S = schema.statDaily;
      await db.insert(S).values({ day, kind: "checkout", key, n: 1 }).onConflictDoUpdate({ target: [S.day, S.kind, S.key], set: { n: sql`${S.n} + 1` } });
    }
    if (!userId || (!first && !last)) return;
    if (when === "signup") {
      await db.update(schema.user).set({ src: touchJson(first ?? last), srcLast: touchJson(last) }).where(eq(schema.user.id, userId));
      return;
    }
    const [u] = await db.select({ src: schema.user.src }).from(schema.user).where(eq(schema.user.id, userId)).limit(1);
    const set: { srcLast?: string | null; src?: string | null } = {};
    if (last && last.source !== "direct") set.srcLast = touchJson(last);
    if (!u?.src && (first ?? last)) set.src = touchJson(first ?? last);
    if (Object.keys(set).length) await db.update(schema.user).set(set).where(eq(schema.user.id, userId));
  } catch {
    // attribution must never break sign-up or checkout
  }
}

export type Attribution = { first: Touch | null; last: Touch | null };
export const attributionOf = (u: { src: string | null; srcLast: string | null }): Attribution => ({ first: readTouch(u.src), last: readTouch(u.srcLast) });
