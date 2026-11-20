import { headers } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { gapKey, logGap } from "@/lib/support/assistant/gaps";
import { chatRequest, parseState } from "@/lib/support/assistant/state";
import { getAssistant, lazyUser, requestTools } from "@/lib/support/assistant/tools";
import type { ChatResponse } from "@/lib/support/assistant/types";

/**
 * POST /api/support/chat { message, state?, history?, mode? } -> { reply, state }
 * The help assistant: our own engine (lib/support/assistant), no LLM. Stateless: the dialogue state round-trips
 * through the client and is validated here. One D1 read a minute for the KB (isolate memory), no KV writes;
 * one D1 upsert only when a question goes unanswered.
 */

const WINDOW = 5 * 60_000;
const MAX_PER_WINDOW = 40;
const hits = new Map<string, { n: number; at: number }>();

/** Cheap per-isolate limiter: 40 messages per 5 minutes per IP. */
function allow(ip: string) {
  const now = Date.now();
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v.at > WINDOW) hits.delete(k);
  const h = hits.get(ip);
  if (!h || now - h.at > WINDOW) {
    hits.set(ip, { n: 1, at: now });
    return true;
  }
  h.n++;
  return h.n <= MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  const raw = await req.text().catch(() => "");
  if (raw.length > 24_000) return Response.json({ error: "too_large" }, { status: 413 });
  let body: unknown = null;
  try {
    body = JSON.parse(raw);
  } catch {}
  const parsed = chatRequest.safeParse(body ?? {});
  if (!parsed.success) return Response.json({ error: "invalid", message: "Type a question (up to 500 characters)." }, { status: 400 });
  const { message, mode = "chat" } = parsed.data;

  const ip = (await headers()).get("cf-connecting-ip") ?? "local";
  if (!allow(ip + "|" + mode)) {
    return Response.json(
      {
        reply: { text: "That’s a lot of questions in a short time. Give it a few minutes, or write to support@ingotui.com.", intent: "rate_limited", confidence: 1, chips: ["Talk to a human"] },
        state: parseState(parsed.data.state),
      } satisfies ChatResponse,
      { status: 429 },
    );
  }

  const engine = await getAssistant();
  const user = lazyUser();
  const origin = new URL(req.url).origin;
  const { reply, state, gap } = await engine.respond(message, parseState(parsed.data.state), requestTools(origin, user));

  if (reply.handoff) {
    const u = await user();
    if (u) reply.prefill = { email: u.email, name: u.name };
  }
  // Unanswered questions feed /admin/kb/gaps. Typing in the /support search box never logs.
  if (gap && mode === "chat") {
    const key = gapKey(engine.analyse(message).terms, message);
    const write = logGap(key, message, reply.intent, reply.confidence);
    try {
      getCloudflareContext().ctx.waitUntil(write);
    } catch {
      await write;
    }
  }
  return Response.json({ reply, state } satisfies ChatResponse, { headers: { "Cache-Control": "no-store" } });
}
