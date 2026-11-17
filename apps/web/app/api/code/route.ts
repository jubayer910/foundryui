import { getSessionUser } from "@/lib/auth";
import { systems } from "@/lib/catalog";
import { codePath } from "@/lib/code-paths";
import { getFigmaItem, isFreeTemplate } from "@/lib/library";
import { isPaid } from "@/lib/plans";

// Per-user answer: never cached.
export const dynamic = "force-dynamic";

/**
 * "View code" for a generated component. Free-system code is open to everyone; Pro-system code only to
 * paid plans (Pro, Team, Lifetime). Viewing doesn't count against the free copy limit; copying still goes
 * through /api/actions.
 */
export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get("slug") ?? "";
  const fig = getFigmaItem(slug);
  const url = fig && codePath(slug);
  if (!fig || !url) return Response.json({ error: "not_found" }, { status: 404, headers: { "cache-control": "no-store" } });
  const tier = isFreeTemplate(slug) ? "free" : systems.find((s) => s.slug === fig.system)?.tier ?? "pro";
  if (tier !== "free") {
    const user = await getSessionUser();
    if (!user) return Response.json({ locked: true, reason: "login_required" }, { headers: { "cache-control": "no-store" } });
    if (!isPaid(user.plan)) return Response.json({ locked: true, reason: "upgrade_required" }, { headers: { "cache-control": "no-store" } });
  }
  return Response.json({ codeUrl: url }, { headers: { "cache-control": "no-store" } });
}
