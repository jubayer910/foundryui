/**
 * Intent classification: nearest neighbour over example phrases (BM25 over phrase "documents"), then keyword
 * rules from the extracted entities. Built-in phrases are merged with INTENT_PHRASES from vocab.ts. Pure.
 */
import { INTENT_PHRASES } from "../vocab";
import { Bm25 } from "./bm25";
import type { Vocabulary } from "./text";

/** Intents answered by a live tool or a dialogue move. Any other id is answered from the knowledge base. */
export const TOOL_INTENTS = [
  "greeting",
  "thanks",
  "goodbye",
  "find_component",
  "show_system",
  "list_systems",
  "find_icon",
  "pricing",
  "lifetime",
  "buy",
  "account_status",
  "setup_mcp",
  "install_code",
  "human",
] as const;
export type ToolIntent = (typeof TOOL_INTENTS)[number];
export const isToolIntent = (id: string): id is ToolIntent => (TOOL_INTENTS as readonly string[]).includes(id);

/** Other names the knowledge workstream might use for the same intents. */
const ALIASES: Record<string, string> = {
  hello: "greeting",
  greet: "greeting",
  thank_you: "thanks",
  bye: "goodbye",
  component_search: "find_component",
  search_components: "find_component",
  find_components: "find_component",
  components: "find_component",
  system: "show_system",
  design_system: "show_system",
  get_system: "show_system",
  systems: "list_systems",
  find_system: "list_systems",
  design_systems: "list_systems",
  icon_search: "find_icon",
  search_icons: "find_icon",
  icons: "find_icon",
  price: "pricing",
  prices: "pricing",
  plans: "pricing",
  pricing_plans: "pricing",
  lifetime_deal: "lifetime",
  deal: "lifetime",
  purchase: "buy",
  upgrade: "buy",
  checkout: "buy",
  account: "account_status",
  my_account: "account_status",
  usage: "account_status",
  plan_status: "account_status",
  mcp: "setup_mcp",
  mcp_setup: "setup_mcp",
  connect_mcp: "setup_mcp",
  install: "install_code",
  install_cli: "install_code",
  cli: "install_code",
  talk_to_human: "human",
  human_handoff: "human",
  contact: "human",
  contact_support: "human",
  handoff: "human",
};
export const canonicalIntent = (id: string) => ALIASES[id] ?? id;

/** Chip label per intent (the text a chip sends back). */
export const INTENT_LABEL: Record<string, string> = {
  find_component: "Find a component",
  show_system: "Show a design system",
  list_systems: "Browse design systems",
  find_icon: "Find an icon",
  pricing: "Pricing and Lifetime deal",
  lifetime: "Lifetime deal",
  buy: "Buy a plan",
  account_status: "My plan and usage",
  setup_mcp: "Set up MCP",
  install_code: "Install code",
  payment_activation: "Payment or activation",
  human: "Talk to a human",
};

const BUILT_IN: Record<string, string[]> = {
  greeting: ["hi", "hello", "hey", "hey there", "good morning", "good afternoon", "good evening", "hiya", "yo", "howdy", "hello there", "hi team"],
  thanks: ["thanks", "thank you", "thank you so much", "cheers", "that helped", "great thanks", "perfect thanks", "awesome", "got it thanks", "nice one"],
  goodbye: ["bye", "goodbye", "see you", "thats all", "that is all", "nothing else", "im done", "all good"],
  find_component: [
    "find a component",
    "do you have a kanban board",
    "do you have a pricing table",
    "do you have a login form",
    "show me components",
    "show me a data table",
    "i need a sidebar",
    "looking for a chart component",
    "search the library",
    "is there a modal component",
    "component for a dashboard",
    "show me templates",
    "browse components",
    "any table components",
    "do you have charts",
  ],
  show_system: ["tell me about the montra system", "show me the loopo design system", "what is loopo", "what does axon look like", "show a design system", "open the vantage system", "details of the spendix system"],
  list_systems: [
    "browse design systems",
    "which design systems do you have",
    "list the design systems",
    "what systems are included",
    "show all systems",
    "how many design systems are there",
    "what themes do you have",
    "all design systems",
    "how many components are there",
    "how big is the library",
  ],
  find_icon: ["find an icon", "do you have an arrow icon", "search icons", "icon for settings", "show me icons", "is there a calendar icon", "i need a trash icon", "user icon"],
  pricing: [
    "pricing and lifetime deal",
    "how much does it cost",
    "pricing",
    "what are the prices",
    "how much is pro",
    "plans and pricing",
    "price of the team plan",
    "what does pro cost",
    "how much per month",
    "is it expensive",
    "compare plans",
    "what plans do you have",
    "difference between pro and lifetime",
    "pro vs lifetime",
    "which plan should i choose",
    "monthly or yearly",
  ],
  lifetime: [
    "lifetime deal",
    "is it one time",
    "is it a one time payment",
    "pay once",
    "how many lifetime spots are left",
    "when does the deal end",
    "is lifetime forever",
    "lifetime price",
    "launch deal",
  ],
  buy: ["buy a plan", "i want to buy", "how do i buy pro", "upgrade to pro", "purchase lifetime", "where do i pay", "take my money", "how do i upgrade", "buy lifetime", "get pro"],
  account_status: [
    "my plan and usage",
    "what plan am i on",
    "my account",
    "my usage",
    "how many copies have i used",
    "do i have an api key",
    "am i on pro",
    "check my plan",
    "my limits today",
    "how many mcp calls have i used today",
    "am i signed in",
  ],
  setup_mcp: [
    "set up mcp",
    "connect mcp to claude code",
    "how do i connect cursor",
    "install the mcp server",
    "use it with claude code",
    "connect my ai agent",
    "mcp setup",
    "add ingot to vs code",
    "codex config",
    "connect to my agent",
    "mcp config for cursor",
    "how to use with copilot",
  ],
  install_code: [
    "install code",
    "how do i install it",
    "install a component",
    "npx command",
    "use the cli",
    "add components to my project",
    "how do i add it to my react app",
    "install with npm",
    "get the code into my project",
    "set up tokens in my project",
  ],
  payment_activation: [
    "payment or activation",
    "i paid but i dont have access",
    "my payment went through but i am still on free",
    "activate my purchase",
    "payment failed",
    "activation link",
    "bought lifetime but still free",
    "charged but no pro",
  ],
  human: [
    "talk to a human",
    "contact support",
    "speak to a person",
    "i need a real person",
    "email support",
    "open a ticket",
    "contact you",
    "can i talk to someone",
    "get help from your team",
    "live agent",
  ],
};

export type IntentDef = { id: string; phrases: string[] };

/** All intents: built-in phrases plus vocab.ts phrases (aliases folded onto our ids). */
export function intentDefs(): IntentDef[] {
  const map = new Map<string, Set<string>>();
  const add = (id: string, ps: string[]) => {
    const k = canonicalIntent(id);
    const s = map.get(k) ?? new Set<string>();
    for (const p of ps) if (p && p.trim()) s.add(p.trim().toLowerCase());
    map.set(k, s);
  };
  for (const [id, ps] of Object.entries(BUILT_IN)) add(id, ps);
  for (const [id, ps] of Object.entries(INTENT_PHRASES)) add(id, ps);
  for (const [id, label] of Object.entries(INTENT_LABEL)) add(id, [label]);
  return [...map.entries()].map(([id, s]) => ({ id, phrases: [...s] }));
}

export type IntentScore = { id: string; score: number };

export class IntentClassifier {
  private defs: IntentDef[];
  private owner: number[] = [];
  private bm: Bm25;
  constructor(defs = intentDefs()) {
    this.defs = defs;
    const docs = defs.flatMap((d, di) =>
      d.phrases.map((p) => {
        this.owner.push(di);
        return [{ text: p, weight: 1, core: true }];
      }),
    );
    this.bm = new Bm25(docs);
  }
  addTo(v: Vocabulary) {
    for (const d of this.defs) for (const p of d.phrases) v.add(p, 2);
  }
  ids() {
    return this.defs.map((d) => d.id);
  }
  /** Score every intent: best phrase similarity (coverage of the query and of the phrase), 0..1. */
  classify(terms: string[]): IntentScore[] {
    const best = new Map<string, number>();
    for (const h of this.bm.search(terms, 80, undefined, 0.7)) {
      const id = this.defs[this.owner[h.i]].id;
      // both sides must be covered: one shared word with a long phrase is weak
      const sim = h.coverage * (0.45 + 0.55 * h.focus);
      if (sim > (best.get(id) ?? 0)) best.set(id, sim);
    }
    return [...best.entries()].map(([id, score]) => ({ id, score })).sort((a, b) => b.score - a.score);
  }
}
