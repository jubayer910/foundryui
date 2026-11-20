import { getDb, schema } from "@/lib/db";
import { optoutToken } from "@/lib/emails/welcome";

/**
 * Unsubscribe from offer emails (the welcome email's footer link and its List-Unsubscribe header).
 * GET from the link shows a short confirmation page; POST is Gmail/Apple one-click (List-Unsubscribe-Post).
 * The token is an HMAC of the address, so only links we sent work. Transactional mail is not affected.
 */
async function optout(req: Request) {
  const u = new URL(req.url);
  const email = (u.searchParams.get("e") || "").trim().toLowerCase();
  const t = u.searchParams.get("t") || "";
  if (!email || !t || t !== (await optoutToken(email))) return false;
  const db = await getDb();
  await db.insert(schema.emailOptout).values({ email, createdAt: new Date() }).onConflictDoNothing();
  return true;
}

const page = (ok: boolean) =>
  new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${ok ? "Unsubscribed" : "Link not valid"} | Ingot UI</title><meta name="robots" content="noindex"></head>` +
      `<body style="margin:0;background:#f4f3ef;font-family:Inter,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0b0b0b">` +
      `<main style="max-width:440px;margin:12vh auto;padding:32px;background:#fff;border:1px solid #e7e5df;border-radius:16px">` +
      `<h1 style="margin:0;font-size:22px;font-weight:600;letter-spacing:-0.4px">${ok ? "You're unsubscribed from offers" : "This link is not valid"}</h1>` +
      `<p style="margin:12px 0 0;font-size:14px;line-height:22px;color:#4a4a4a">${ok ? "We won't send you offer emails again. Account emails, like purchase confirmations, still reach you." : "Use the unsubscribe link from the email itself, or write to support@ingotui.com and we'll take you off the list."}</p>` +
      `<p style="margin:20px 0 0"><a href="https://ingotui.com" style="color:#4b55e6;font-size:14px">Back to Ingot UI</a></p></main></body></html>`,
    { status: ok ? 200 : 400, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } },
  );

export async function GET(req: Request) {
  return page(await optout(req).catch(() => false));
}
export async function POST(req: Request) {
  const ok = await optout(req).catch(() => false);
  return new Response(ok ? "ok" : "invalid", { status: ok ? 200 : 400 });
}
