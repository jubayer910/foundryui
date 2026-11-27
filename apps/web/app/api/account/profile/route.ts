import { eq } from "drizzle-orm";
import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { getDb, getEnv, schema } from "@/lib/db";
import { takeLimit } from "@/app/api/feedback/store";

/**
 * Account → Profile.
 *   POST   {name}                    change the display name
 *   PUT    image/webp|png|jpeg body  set the profile photo (resized to 256px in the browser, max 200 KB)
 *   DELETE                           remove the photo (back to initials)
 * The photo lives in KV (avatar:<userId>) and is served by /api/avatar/<userId>; user.image points there.
 */
const Name = z.object({ name: z.string().transform((s) => s.replace(/\s+/g, " ").trim()).pipe(z.string().min(1, "Add your name.").max(60, "Keep it under 60 characters.")) });
const MAX = 200 * 1024;
const TYPES = ["image/webp", "image/png", "image/jpeg"];

async function me() {
  const user = await getSessionUser();
  if (!user) return { error: Response.json({ error: "login_required" }, { status: 401 }) } as const;
  if (!(await takeLimit("profile-edit", user.id, 40))) return { error: Response.json({ error: "rate_limited", message: "Too many changes. Please wait an hour." }, { status: 429 }) } as const;
  return { user } as const;
}

export async function POST(req: Request) {
  const m = await me();
  if ("error" in m) return m.error;
  const parsed = Name.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "invalid", message: parsed.error.issues[0]?.message ?? "Check your name." }, { status: 400 });
  const db = await getDb();
  await db.update(schema.user).set({ name: parsed.data.name, updatedAt: new Date() }).where(eq(schema.user.id, m.user.id));
  return Response.json({ ok: true, name: parsed.data.name });
}

export async function PUT(req: Request) {
  const m = await me();
  if ("error" in m) return m.error;
  const type = (req.headers.get("content-type") ?? "").split(";")[0].trim();
  if (!TYPES.includes(type)) return Response.json({ error: "invalid", message: "Use a PNG, JPG or WebP image." }, { status: 400 });
  const bytes = new Uint8Array(await req.arrayBuffer());
  if (!bytes.length || bytes.length > MAX) return Response.json({ error: "invalid", message: "The photo is too large. Pick one under 5 MB." }, { status: 400 });
  const env = await getEnv();
  await env.KV.put("avatar:" + m.user.id, bytes, { metadata: { type } });
  const image = `/api/avatar/${m.user.id}?v=${Date.now().toString(36)}`;
  const db = await getDb();
  await db.update(schema.user).set({ image, updatedAt: new Date() }).where(eq(schema.user.id, m.user.id));
  return Response.json({ ok: true, image });
}

export async function DELETE() {
  const m = await me();
  if ("error" in m) return m.error;
  const env = await getEnv();
  await env.KV.delete("avatar:" + m.user.id);
  const db = await getDb();
  await db.update(schema.user).set({ image: null, updatedAt: new Date() }).where(eq(schema.user.id, m.user.id));
  return Response.json({ ok: true });
}
