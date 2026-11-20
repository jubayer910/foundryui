import "server-only";
import { CONTRA, accessToken } from "./oauth";

/**
 * Minimal MCP client (Streamable HTTP, JSON-RPC 2.0) for Contra's read tools. One session per sync:
 * initialize (captures Mcp-Session-Id), notifications/initialized, then tools/call. Responses may be
 * application/json or a text/event-stream; both are handled. A 401 refreshes the token once and retries.
 * Only read tools are ever called (see READ_TOOLS); never a *_prepare / *_confirm or write tool.
 */

export type ToolCaller = (name: string, args: Record<string, unknown>) => Promise<unknown>;

const PROTOCOL = "2025-06-18";
export const READ_TOOLS = new Set(["list_payment_link_transactions", "list_payment_links", "list_products", "list_contractor_transactions", "get_invoice_status"]);
const TIMEOUT_MS = 15_000;

type RpcMessage = { jsonrpc: "2.0"; id?: number | string; result?: unknown; error?: { code: number; message: string }; method?: string };

class McpHttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

/** Reads one JSON-RPC response (matching `id`) from a JSON body or an SSE stream. */
async function readResponse(res: Response, id: number | null): Promise<RpcMessage | null> {
  const type = res.headers.get("content-type") ?? "";
  if (id === null) {
    await res.body?.cancel().catch(() => {});
    return null;
  }
  if (type.includes("text/event-stream")) {
    const text = await res.text();
    for (const block of text.split(/\r?\n\r?\n/)) {
      const data = block
        .split(/\r?\n/)
        .filter((l) => l.startsWith("data:"))
        .map((l) => l.slice(5).replace(/^ /, ""))
        .join("\n");
      if (!data) continue;
      try {
        const msgs = ([] as RpcMessage[]).concat(JSON.parse(data));
        const hit = msgs.find((m) => m.id === id && ("result" in m || "error" in m));
        if (hit) return hit;
      } catch {}
    }
    throw new Error("Contra MCP stream ended without a response");
  }
  const body = (await res.json().catch(() => null)) as RpcMessage | RpcMessage[] | null;
  if (!body) throw new Error("Contra MCP returned an empty response");
  const msgs = ([] as RpcMessage[]).concat(body);
  return msgs.find((m) => m.id === id) ?? msgs[0] ?? null;
}

/** Opens an MCP session with the stored token and returns a tool caller bound to it. */
export async function contraToolCaller(): Promise<ToolCaller> {
  let token = await accessToken();
  if (!token) throw new Error("Contra is not connected");
  let session: string | null = null;
  let nextId = 1;
  let refreshed = false;

  async function post(method: string, params: unknown, notify = false): Promise<unknown> {
    const id = notify ? null : nextId++;
    const body = JSON.stringify({ jsonrpc: "2.0", ...(id === null ? {} : { id }), method, ...(params === undefined ? {} : { params }) });
    for (;;) {
      const headers: Record<string, string> = {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
        accept: "application/json, text/event-stream",
      };
      if (session) headers["mcp-session-id"] = session;
      if (method !== "initialize") headers["mcp-protocol-version"] = PROTOCOL;
      const res = await fetch(CONTRA.resource, { method: "POST", headers, body, signal: AbortSignal.timeout(TIMEOUT_MS) });
      if (res.status === 401 && !refreshed) {
        await res.body?.cancel().catch(() => {});
        refreshed = true;
        token = await accessToken(true);
        if (!token) throw new McpHttpError(401, "Contra is not connected");
        continue;
      }
      if (!res.ok && res.status !== 202) {
        await res.body?.cancel().catch(() => {});
        throw new McpHttpError(res.status, `Contra MCP ${method} failed (${res.status})`);
      }
      const sid = res.headers.get("mcp-session-id");
      if (sid) session = sid;
      const msg = await readResponse(res, id);
      if (!msg) return null;
      if (msg.error) throw new Error(`Contra MCP ${method}: ${msg.error.message}`.slice(0, 300));
      return msg.result;
    }
  }

  await post("initialize", { protocolVersion: PROTOCOL, capabilities: {}, clientInfo: { name: "ingotui-sales-sync", version: "1.0.0" } });
  await post("notifications/initialized", undefined, true);

  return async (name, args) => {
    if (!READ_TOOLS.has(name)) throw new Error(`Refusing to call Contra tool ${name}: not a read tool`);
    const result = (await post("tools/call", { name, arguments: args })) as { content?: { type: string; text?: string }[]; structuredContent?: unknown; isError?: boolean } | null;
    if (result?.isError) throw new Error(`Contra tool ${name} failed: ${(result.content?.find((c) => c.type === "text")?.text ?? "").slice(0, 200)}`);
    if (result?.structuredContent !== undefined) return result.structuredContent;
    const text = result?.content?.find((c) => c.type === "text")?.text;
    if (text === undefined) return result;
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  };
}
