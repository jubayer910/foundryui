import "server-only";
import { cookies, headers } from "next/headers";
import { getEnv, getDb, schema } from "./db";
import { getSessionUser, type SessionUser } from "./auth";
import { getItem, systems } from "./catalog";
import { getFigmaItem, figmaQA } from "./library";

export const ANON_LIMIT = 5;
export const ACTIONS = ["copy_code", "copy_figma", "download_png", "download_svg", "download_jpeg", "install"] as const;
export type Action = (typeof ACTIONS)[number];

export type GateResult =
  | { ok: true; user: SessionUser | null; remaining: number | null }
  | { ok: false; reason: "login_required" | "upgrade_required" | "not_found"; remaining: number };

async function anonId() {
  const jar = await cookies();
  let id = jar.get("fu_anon")?.value;
  if (!id) {
    id = crypto.randomUUID();
    jar.set("fu_anon", id, { httpOnly: true, sameSite: "lax", secure: true, path: "/", maxAge: 60 * 60 * 24 * 365 });
  }
  return id;
}

/** Anonymous usage = max(counter for this browser, soft counter for this IP). Honest-user nudge, not DRM. */
export async function anonUsage() {
  const env = await getEnv();
  const id = await anonId();
  const ip = (await headers()).get("cf-connecting-ip") ?? "local";
  const [a, b] = await Promise.all([env.KV.get("anon:" + id), env.KV.get("ip:" + ip)]);
  return { id, ip, used: Math.max(Number(a ?? 0), Math.floor(Number(b ?? 0) / 2)), byId: Number(a ?? 0), byIp: Number(b ?? 0) };
}

export async function checkAndRecord(slug: string, action: Action, client = "web"): Promise<GateResult> {
  const fig = getFigmaItem(slug);
  const item = slug.startsWith("icon:") ? { tier: "free" as const } : getItem(slug) ?? (fig && (action !== "copy_code" || figmaQA(slug)) ? { tier: (systems.find((s) => s.slug === fig.system)?.tier ?? "pro") as "free" | "pro" } : undefined);
  if (!item) return { ok: false, reason: "not_found", remaining: 0 };
  const user = await getSessionUser();
  const db = await getDb();
  if (user) {
    if (item.tier === "pro" && user.plan === "free") return { ok: false, reason: "upgrade_required", remaining: 0 };
    await db.insert(schema.usageEvent).values({ userId: user.id, action, target: slug, client, createdAt: new Date() });
    return { ok: true, user, remaining: null };
  }
  const env = await getEnv();
  const u = await anonUsage();
  if (u.used >= ANON_LIMIT) return { ok: false, reason: "login_required", remaining: 0 };
  const ttl = { expirationTtl: 60 * 60 * 24 * 90 };
  await Promise.all([env.KV.put("anon:" + u.id, String(u.byId + 1), ttl), env.KV.put("ip:" + u.ip, String(u.byIp + 1), ttl)]);
  await db.insert(schema.usageEvent).values({ anonId: u.id, action, target: slug, client, createdAt: new Date() });
  return { ok: true, user: null, remaining: ANON_LIMIT - u.used - 1 };
}
