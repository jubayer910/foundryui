import { getStaff } from "@/lib/admin";

export const dynamic = "force-dynamic";

/**
 * Tells the rail account button whether to show the Admin link, and the admin login page whether the
 * signed-in account is staff. `admin` is true for any staff role (moderator, admin, owner).
 */
export async function GET() {
  const staff = await getStaff().catch(() => null);
  return Response.json({ admin: !!staff, role: staff?.role ?? null }, { headers: { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" } });
}
