import { eq } from "drizzle-orm";
import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { feedback, takeLimit, userProfile } from "./store";

const text = (max: number) =>
  z
    .string()
    .max(max)
    .optional()
    .transform((s) => s?.replace(/\s+/g, " ").trim() || undefined);

const Body = z
  .object({
    nps: z.number().int().min(0).max(10),
    quote: text(600),
    name: text(80),
    company: text(80),
    consent: z.boolean().default(false),
    website: z.string().max(0).optional(), // honeypot: only bots fill it
  })
  .refine((b) => !b.consent || (b.quote && b.name), { message: "To show your words on ingotui.com we need the quote and your name.", path: ["consent"] });

/**
 * POST /api/feedback {nps 0–10, quote?, name?, company?, consent}
 * One answer per user, editable from Account → Feedback (any signed-in member; the automatic ask still waits for 3+ copies).
 * Nothing is public until the owner approves a quote that has consent = true.
 */
export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return Response.json({ error: "login_required" }, { status: 401 });
  if (!(await takeLimit("answer", user.id, 5))) return Response.json({ error: "rate_limited", message: "Too many tries. Please wait an hour and try again." }, { status: 429 });

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    const field = String(issue?.path[0] ?? "");
    const message = field === "consent" ? issue.message : field === "nps" ? "Pick a score from 0 to 10." : "Keep the quote under 600 characters and names under 80.";
    return Response.json({ error: "invalid", field, message }, { status: 400 });
  }

  const b = parsed.data;
  const db = await getDb();
  const profile = await db.select({ segment: userProfile.segment }).from(userProfile).where(eq(userProfile.userId, user.id)).get();
  const fields = {
    nps: b.nps,
    quote: b.quote ?? null,
    name: b.name ?? null,
    company: b.company ?? null,
    consent: b.consent,
    approved: false, // a new or edited answer waits for the owner again before anything is public
    segment: profile?.segment ?? null,
    plan: user.plan,
  };
  // one answer per member: Account → Feedback edits it in place
  const prev = await db.select({ id: feedback.id }).from(feedback).where(eq(feedback.userId, user.id)).get();
  if (prev) await db.update(feedback).set({ ...fields, createdAt: new Date() }).where(eq(feedback.id, prev.id));
  else await db.insert(feedback).values({ id: crypto.randomUUID(), userId: user.id, ...fields, createdAt: new Date() });
  return Response.json({ ok: true });
}
