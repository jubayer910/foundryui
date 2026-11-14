import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { getDb, schema } from "@/lib/db";
import { systems } from "@/lib/catalog";
import { SEGMENTS, saveProfile, takeLimit } from "../store";

const Body = z
  .object({
    /** "What are you building?" */
    segment: z.enum(SEGMENTS.map((s) => s.id) as [string, ...string[]]).optional(),
    segmentOther: z
      .string()
      .max(80)
      .optional()
      .transform((s) => s?.replace(/\s+/g, " ").trim() || undefined),
    /** the system picked on /welcome (kept in this browser until now) */
    system: z.enum(systems.map((s) => s.slug) as [string, ...string[]]).optional(),
    /** items saved in this browser's library, copied into the account */
    saved: z.array(z.string().regex(/^[a-z0-9][a-z0-9:_./-]{0,119}$/i)).max(50).optional(),
    dismiss: z.enum(["survey", "feedback"]).optional(),
  })
  .refine((b) => b.segment || b.system || b.saved?.length || b.dismiss, { message: "empty" });

/** POST /api/feedback/profile: onboarding answers and dismissals for the signed-in user. */
export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return Response.json({ error: "login_required" }, { status: 401 });
  if (!(await takeLimit("profile", user.id, 30))) return Response.json({ error: "rate_limited", message: "Too many requests. Please wait an hour." }, { status: 429 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "invalid" }, { status: 400 });
  const b = parsed.data;
  const now = new Date();

  await saveProfile(user.id, {
    ...(b.segment ? { segment: b.segment, segmentOther: b.segment === "other" ? b.segmentOther ?? null : null, segmentAt: now } : {}),
    ...(b.system ? { system: b.system, systemAt: now } : {}),
    ...(b.dismiss === "survey" ? { surveyDismissedAt: now } : {}),
    ...(b.dismiss === "feedback" ? { feedbackDismissedAt: now } : {}),
  });
  if (b.saved?.length) {
    const db = await getDb();
    await db
      .insert(schema.favorite)
      .values(b.saved.map((target) => ({ userId: user.id, target, createdAt: now })))
      .onConflictDoNothing();
  }
  return Response.json({ ok: true });
}
