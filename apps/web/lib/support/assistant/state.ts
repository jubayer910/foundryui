/** Validation of the client-held dialogue state and the chat request. Shared by the API route. */
import { z } from "zod";
import { EMPTY_STATE, type DialogState } from "./types";

const s = (n: number) => z.string().max(n);

const entities = z
  .object({
    system: s(40),
    category: s(40),
    query: s(120),
    client: z.enum(["claude", "cursor", "vscode", "codex"]),
    plan: z.enum(["free", "pro", "team", "lifetime"]),
    free: z.boolean(),
    codeOnly: z.boolean(),
    figmaOnly: z.boolean(),
    component: s(120),
  })
  .partial()
  .strip();

const stateSchema = z
  .object({
    v: z.literal(1),
    turn: z.number().int().min(0).max(10_000),
    intent: s(40).optional(),
    entities,
    page: z.number().int().min(0).max(100).optional(),
    list: z.enum(["components", "icons", "systems"]).optional(),
    article: s(120).optional(),
    pending: z
      .union([
        z.object({ kind: z.literal("confirm"), intent: s(40) }),
        z.object({ kind: z.literal("choose"), options: z.array(s(120)).max(5) }),
        z.object({ kind: z.literal("slot"), intent: s(40), slot: z.enum(["client", "query"]) }),
      ])
      .optional(),
    misses: z.number().int().min(0).max(100),
  })
  .strip();

export const chatRequest = z.object({
  message: z.string().trim().min(1).max(500),
  state: z.unknown().optional(),
  history: z.array(z.object({ role: z.enum(["user", "assistant"]), text: z.string().max(2000) })).max(20).optional(),
  mode: z.enum(["chat", "search"]).optional(),
});

/** A valid state or a fresh one: a tampered or oversized state just resets the conversation. */
export function parseState(raw: unknown): DialogState {
  if (raw == null) return { ...EMPTY_STATE, entities: {} };
  try {
    if (JSON.stringify(raw).length > 4000) return { ...EMPTY_STATE, entities: {} };
  } catch {
    return { ...EMPTY_STATE, entities: {} };
  }
  const r = stateSchema.safeParse(raw);
  return r.success ? (r.data as DialogState) : { ...EMPTY_STATE, entities: {} };
}
