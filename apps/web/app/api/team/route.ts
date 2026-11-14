import { requireUser, teamState } from "./_lib";

export const dynamic = "force-dynamic";

/**
 * GET /api/team[?invite=<token>]
 * The signed-in user's seats panel: the team they own (seats, members, pending invites with links),
 * the team they joined, and, with ?invite, what that invite link would do for them.
 */
export async function GET(req: Request) {
  const user = await requireUser();
  if (user instanceof Response) return user;
  const url = new URL(req.url);
  const token = url.searchParams.get("invite")?.trim() || null;
  const state = await teamState(user, url.origin, token && token.length <= 64 ? token : null);
  return Response.json(state, { headers: { "cache-control": "no-store" } });
}
