import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { getDb, schema } from "@/lib/db";
import { sha256Hex } from "@/lib/hash";

/** Create an MCP / CLI API key. The raw key is returned once; only its SHA-256 is stored. */
export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return Response.json({ error: "login_required" }, { status: 401 });
  const body = z.object({ name: z.string().min(1).max(60) }).safeParse(await req.json().catch(() => ({})));
  const name = body.success ? body.data.name : "My agent";
  const raw = "fu_" + Array.from(crypto.getRandomValues(new Uint8Array(24)), (b) => b.toString(16).padStart(2, "0")).join("");
  const db = await getDb();
  const id = crypto.randomUUID();
  await db.insert(schema.apiKey).values({ id, userId: user.id, name, prefix: raw.slice(0, 10), hash: await sha256Hex(raw), createdAt: new Date() });
  return Response.json({ id, name, key: raw });
}

export async function DELETE(req: Request) {
  const user = await getSessionUser();
  if (!user) return Response.json({ error: "login_required" }, { status: 401 });
  const id = new URL(req.url).searchParams.get("id") ?? "";
  const db = await getDb();
  await db.delete(schema.apiKey).where(and(eq(schema.apiKey.id, id), eq(schema.apiKey.userId, user.id)));
  return Response.json({ ok: true });
}
