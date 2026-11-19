import { getEnv } from "@/lib/db";
import { syncContraSales } from "@/lib/contra/sync";
import { SYNC_HEADER, sameSecret, syncSecret } from "@/lib/contra/sync-secret";

/**
 * POST /api/internal/contra-sync: called every minute by the cron in worker.ts (scheduled handler), which
 * passes the request straight into this worker (no public network hop). Needs the x-contra-sync-secret
 * header: CONTRA_SYNC_SECRET, or the value derived from BETTER_AUTH_SECRET (lib/contra/sync-secret.ts).
 */
export async function POST(req: Request) {
  const env = await getEnv();
  const want = await syncSecret(env);
  const got = req.headers.get(SYNC_HEADER) ?? "";
  if (!want || !got || !sameSecret(got, want)) return Response.json({ error: "forbidden" }, { status: 403 });
  const r = await syncContraSales();
  return Response.json(r, { headers: { "cache-control": "no-store" } });
}
