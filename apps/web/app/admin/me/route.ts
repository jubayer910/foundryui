import { getSessionUser } from "@/lib/auth";
import { isAdmin } from "@/lib/admin";

export const dynamic = "force-dynamic";

/** Tells the rail account button whether to show the Admin link. No details beyond a boolean. */
export async function GET() {
  const admin = await isAdmin(await getSessionUser().catch(() => null));
  return Response.json({ admin }, { headers: { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" } });
}
