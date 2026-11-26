import { iconStylePath, isProIconStyle } from "@/lib/code-paths";
import { getEnv } from "@/lib/db";

export const dynamic = "force-dynamic";

const NO_STORE = { "cache-control": "no-store" };

/**
 * GET /api/icons/<style>: the icon bodies of a paid style (solid, duotone, twotone, bulk) as JSON, for viewing.
 * Everyone may look at every style in the icon browser. Copy, JSX and download of these styles are
 * Pro, Team or Lifetime only: the browser hides them on Free and /api/actions refuses them.
 * The file streams from its token path (scripts/code-gate.mjs), so the token never reaches the browser.
 */
export async function GET(req: Request, ctx: RouteContext<"/api/icons/[style]">) {
  const { style } = await ctx.params;
  if (!isProIconStyle(style)) return Response.json({ error: "not_found" }, { status: 404, headers: NO_STORE });
  const path = iconStylePath(style);
  if (!path) return Response.json({ error: "not_ready" }, { status: 503, headers: NO_STORE });
  let r: Response | null = null;
  try {
    const assets = ((await getEnv()) as unknown as { ASSETS?: { fetch(u: string): Promise<Response> } }).ASSETS;
    if (assets) r = await assets.fetch(new URL(path, "https://assets.local").toString());
  } catch {}
  // next dev has no ASSETS binding: the dev server serves public/c itself.
  if (!r?.ok) r = await fetch(new URL(path, req.url)).catch(() => null);
  if (!r?.ok || !r.body) return Response.json({ error: "unavailable" }, { status: 502, headers: NO_STORE });
  return new Response(r.body, { headers: { "content-type": "application/json", "cache-control": "public, max-age=3600" } });
}
