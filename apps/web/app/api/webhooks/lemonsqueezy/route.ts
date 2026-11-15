import { getDb, getEnv } from "@/lib/db";
import { handleEvent, verifySignature, type LsEvent } from "@/lib/lemonsqueezy";
import { getSettings } from "@/lib/settings";
import { audit } from "@/lib/admin";

/**
 * Lemon Squeezy webhook. Verifies X-Signature (HMAC-SHA256 of the raw body), then upserts
 * purchase / subscription rows and user.plan. 401 on a bad signature; 500 on a storage error
 * so Lemon Squeezy retries (every write is idempotent).
 */
export async function POST(req: Request) {
  const env = await getEnv();
  const body = await req.text();
  if (!(await verifySignature(body, req.headers.get("x-signature"), env.LEMONSQUEEZY_WEBHOOK_SECRET))) {
    return Response.json({ error: "bad_signature" }, { status: 401 });
  }
  let ev: LsEvent;
  try {
    ev = JSON.parse(body) as LsEvent;
    if (!ev?.meta?.event_name || !ev?.data?.id) throw new Error("shape");
  } catch {
    return Response.json({ error: "bad_payload" }, { status: 400 });
  }
  // Test-mode events (Lemon Squeezy test mode, test cards) never grant plans on the live site: anyone can find the
  // public test card numbers. They are only logged. Set LEMONSQUEEZY_ALLOW_TEST=1 to process them while testing.
  if (ev.meta.test_mode && env.LEMONSQUEEZY_ALLOW_TEST !== "1") {
    try {
      await audit("lemonsqueezy", "webhook.test_mode_ignored", ev.meta.event_name, { id: ev.data.id, type: ev.data.type });
    } catch {}
    return Response.json({ ok: true, ignored: "test_mode" });
  }
  try {
    const result = await handleEvent(await getDb(), await getSettings(), ev);
    return Response.json(result);
  } catch (e) {
    console.error("lemonsqueezy webhook", ev.meta.event_name, e instanceof Error ? e.message : e);
    return Response.json({ error: "retry" }, { status: 500 });
  }
}
