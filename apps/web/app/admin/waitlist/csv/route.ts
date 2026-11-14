import { desc, eq } from "drizzle-orm";
import { getSessionUser } from "@/lib/auth";
import { isAdmin } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";

export const dynamic = "force-dynamic";

const cell = (s: string) => (/[",\n\r]/.test(s) || /^[=+\-@]/.test(s) ? `"${s.replace(/^([=+\-@])/, "'$1").replace(/"/g, '""')}"` : s);

/** Waitlist as CSV. Same guard as requireAdmin(): non-admins get a 404. */
export async function GET(req: Request) {
  if (!(await isAdmin(await getSessionUser()))) return new Response("Not found", { status: 404 });
  const plan = new URL(req.url).searchParams.get("plan") ?? "";
  const db = await getDb();
  const W = schema.waitlist;
  const rows = await db.select().from(W).where(plan ? eq(W.plan, plan) : undefined).orderBy(desc(W.createdAt));
  const csv = ["email,plan,joined_utc", ...rows.map((r) => [r.email, r.plan, r.createdAt.toISOString()].map(cell).join(","))].join("\r\n") + "\r\n";
  const date = new Date().toISOString().slice(0, 10);
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="ingot-waitlist${plan ? "-" + plan.replace(/[^a-z0-9]/gi, "") : ""}-${date}.csv"`,
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
