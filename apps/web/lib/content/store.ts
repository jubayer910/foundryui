import "server-only";
import { eq } from "drizzle-orm";
import { getDb, getEnv, schema } from "../db";
import { CONTENT_KV, KEY_RE, type ContentMap } from "./edit";

const ROW = "content";

/** Every text override (key → text). KV first (the worker reads the same key), D1 is the source of truth. */
export async function getContent(): Promise<ContentMap> {
  try {
    const env = await getEnv();
    const kv = (await env.KV.get(CONTENT_KV, "json")) as ContentMap | null;
    if (kv) return kv;
    const db = await getDb();
    const [r] = await db.select().from(schema.setting).where(eq(schema.setting.key, ROW));
    const map = r ? (JSON.parse(r.value) as ContentMap) : {};
    await env.KV.put(CONTENT_KV, JSON.stringify(map));
    return map;
  } catch {
    return {};
  }
}

/** Plain text only: no control characters, trimmed, capped. */
export const cleanText = (s: string, max = 2000) => s.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").replace(/[ \t]+\n/g, "\n").trim().slice(0, max);

/** Apply changes (null = back to the default text). Returns the before and after of the keys that changed. */
export async function applyContent(changes: Record<string, string | null>) {
  const cur = { ...(await getContent()) };
  const before: Record<string, string | null> = {};
  const after: Record<string, string | null> = {};
  for (const [k, v] of Object.entries(changes)) {
    if (!KEY_RE.test(k)) continue;
    const next = v === null ? null : cleanText(v, k.startsWith("seo:") ? 400 : 2000) || null;
    const prev = cur[k] ?? null;
    if (prev === next) continue;
    before[k] = prev;
    after[k] = next;
    if (next === null) delete cur[k];
    else cur[k] = next;
  }
  if (!Object.keys(after).length) return { before, after };
  const db = await getDb();
  const env = await getEnv();
  const now = new Date();
  const value = JSON.stringify(cur);
  await db.insert(schema.setting).values({ key: ROW, value, updatedAt: now }).onConflictDoUpdate({ target: schema.setting.key, set: { value, updatedAt: now } });
  await env.KV.put(CONTENT_KV, value);
  return { before, after };
}
