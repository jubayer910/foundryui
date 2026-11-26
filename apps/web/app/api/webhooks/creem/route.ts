import { getDb, getEnv } from "@/lib/db";
import { receiveWebhook } from "@/lib/creem";
import { getSettings } from "@/lib/settings";

/**
 * Creem webhook (register https://ingotui.com/api/webhooks/creem in Creem → Developers → Webhooks).
 * lib/creem.ts receiveWebhook: 401 on a bad creem-signature, 400 on a bad payload, test-mode events only
 * logged (unless CREEM_ALLOW_TEST=1), a retried evt id answers 200 without doing anything, 500 on a storage
 * error so Creem retries.
 */
export async function POST(req: Request) {
  const body = await req.text();
  const r = await receiveWebhook({ env: await getEnv(), db: await getDb(), settings: getSettings, body, signature: req.headers.get("creem-signature") });
  return Response.json(r.json, { status: r.status });
}
