/**
 * Shared shapes of the help assistant: what POST /api/support/chat returns and the dialogue state that
 * round-trips through the client. Client-safe (no server imports).
 */

export type ComponentHit = {
  slug: string;
  name: string;
  system: string;
  systemName: string;
  accent: string;
  category: string;
  tier: "free" | "pro";
  /** "code" when it can be copied as React code, "figma" when it is a Figma component only */
  kind: "code" | "figma";
  thumb?: string;
  url: string;
};

export type SystemInfo = {
  slug: string;
  name: string;
  accent: string;
  tagline: string;
  description: string;
  tier: "free" | "pro";
  font: string;
  components: number;
  coded: number;
  templates: number;
  url: string;
};

export type IconHit = { name: string; category: string; svg: string | null; url: string };

export type PricingInfo = {
  monthly: boolean;
  proMonthly: number;
  proYearly: number;
  teamMonthly: number;
  teamYearly: number;
  teamSeats: number;
  lifetime: number | null;
  lifetimeAfter: number;
  dealActive: boolean;
  dealSpotsLeft: number | null;
  dealEndsAt: string | null;
  /** the one honest sentence about what happens when the deal ends ("" when no deal) */
  dealRule: string;
};

export type AccountInfo =
  | { signedIn: false }
  | {
      signedIn: true;
      name: string;
      plan: string;
      planLabel: string;
      paid: boolean;
      /** library actions (copies, downloads, installs) today, UTC day */
      actionsToday: number;
      /** MCP calls today, UTC day */
      mcpToday: number;
      /** null = unlimited */
      mcpLimit: number | null;
      apiKeys: number;
    };

export type Step = { title: string; text?: string; code?: { label: string; code: string } };

export type Card =
  | { type: "components"; query: string; items: ComponentHit[]; total: number; page: number }
  | { type: "system"; system: SystemInfo }
  | { type: "systems"; systems: SystemInfo[] }
  | { type: "icons"; query: string; items: IconHit[]; total: number }
  | { type: "pricing"; pricing: PricingInfo; focus?: "lifetime" | "team" | "pro" }
  | { type: "steps"; title: string; steps: Step[]; link?: { label: string; href: string } }
  | { type: "account"; account: AccountInfo }
  | { type: "article"; slug: string; question: string; answer: string; category: string };

export type Action = { label: string; href: string };

export type Reply = {
  /** KB markup: [text](/path), **bold**, `code` */
  text: string;
  cards?: Card[];
  chips?: string[];
  actions?: Action[];
  /** the intent the engine acted on, for analytics and the eval */
  intent: string;
  confidence: number;
  /** primary KB article shown (eval top-1) and runner-ups (top-3) */
  article?: string;
  alternatives?: string[];
  /** ask "Helpful?" under this answer */
  feedback?: boolean;
  /** open the inline ticket form */
  handoff?: boolean;
  /** prefill for the ticket form when signed in */
  prefill?: { email: string; name: string };
};

export type Entities = {
  system?: string;
  category?: string;
  /** free-text subject of a component or icon search */
  query?: string;
  client?: "claude" | "cursor" | "vscode" | "codex";
  plan?: "free" | "pro" | "team" | "lifetime";
  free?: boolean;
  codeOnly?: boolean;
  figmaOnly?: boolean;
  component?: string;
};

/** Dialogue state, held by the client and validated on every request. */
export type DialogState = {
  v: 1;
  turn: number;
  intent?: string;
  entities: Entities;
  /** paging for list results */
  page?: number;
  /** what the last answer listed, so "show more" knows what to page */
  list?: "components" | "icons" | "systems";
  /** last KB article shown */
  article?: string;
  /** a question we asked: a yes/no confirmation, or a choice between intents */
  pending?: { kind: "confirm"; intent: string } | { kind: "choose"; options: string[] } | { kind: "slot"; intent: string; slot: "client" | "query" };
  /** consecutive turns without an answer */
  misses: number;
};

export const EMPTY_STATE: DialogState = { v: 1, turn: 0, entities: {}, misses: 0 };

export type ChatTurn = { role: "user" | "assistant"; text: string };
export type ChatRequest = { message: string; state?: DialogState; history?: ChatTurn[]; mode?: "chat" | "search" };
export type ChatResponse = { reply: Reply; state: DialogState };
