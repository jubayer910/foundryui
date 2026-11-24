/**
 * The Ingot UI help assistant: our own deterministic engine, no LLM and no AI API.
 *
 *   message ─ normalise (text.ts: phrases, typo repair, stemming, synonyms)
 *           ─ dialogue moves first (yes / no / show more / refinements like "only Loopo", "what about Cursor?")
 *           ─ intent classification (intents.ts: nearest-neighbour over example phrases) + keyword rules on entities
 *           ─ knowledge-base retrieval (kb.ts: BM25F + concept matcher) as the competing answer
 *           ─ decide: act on an intent, answer from an article, ask a clarifying question, or say we don't know
 *           ─ tools build the reply from live data only (catalog, price book, account, icons, KB text)
 *
 * Everything the reply states comes from KB text, catalog data or a live tool. The state round-trips through the
 * client, so the server stays stateless.
 */
import { SITE_URL } from "../../catalog";
import iconStats from "../../icon-stats.json";
import { CLIENTS, SETUP_PROMPT, TEST_PROMPT, configText, mcpUrlFor, type ClientId } from "../../../components/site/connect-agent-config";
import { getItem } from "../../catalog";
import { shortAnswer } from "../answer-text";
import type { KbLike } from "../match";
import { LIBRARY_TOTAL, allSystems, catalogVocabulary, registryMatch, searchComponents, systemInfo } from "./catalog";
import { extract, isAffirm, isBye, isDeny, isGreeting, isMore, isRefinement, isThanks, type Extracted } from "./entities";
import { INTENT_LABEL, IntentClassifier, canonicalIntent, isToolIntent, type IntentScore } from "./intents";
import { KbIndex, type KbResult } from "./kb";
import * as VOCAB from "../vocab";

const SYNONYMS = VOCAB.SYNONYMS;
/** The knowledge workstream's best article per intent, keyed by our intent ids. */
const INTENT_ARTICLE_BY_INTENT = new Map<string, string>();
for (const [id, slug] of Object.entries((VOCAB as { INTENT_ARTICLE?: Record<string, string | null> }).INTENT_ARTICLE ?? {})) if (slug) INTENT_ARTICLE_BY_INTENT.set(canonicalIntent(id), slug);
import { Vocabulary, analyse, type Analysed } from "./text";
import type { AccountInfo, Card, DialogState, Entities, IconHit, PricingInfo, Reply, Step } from "./types";
import { EMPTY_STATE } from "./types";

export type Tools = {
  pricing(): Promise<PricingInfo | null>;
  account(): Promise<AccountInfo>;
  icons(words: string[], limit: number): Promise<{ items: IconHit[]; total: number }>;
  iconWords(text: string): string[];
};

/** Decision thresholds (tuned with scripts/test-assistant.mts). */
export const T = {
  intent: 0.58,
  kb: 0.42,
  clarifyIntent: 0.36,
  clarifyKb: 0.3,
};

const PAGE = 6;
const ICON_STYLES = (iconStats as { styles: number }).styles;
const GREET_START = /^(hi|hello|hey|hiya|howdy|yo|salam|assalamu|assalamualaikum|as salamu|good (morning|afternoon|evening))\b/;
const GREET_FILLER = new Set(["anyone", "around", "there", "here", "alaikum", "alaikum", "walaikum", "team", "salam", "assalamu", "morning", "evening", "afternoon", "good", "question", "have", "help"]);
const THANKS_ANY = /\b(thanks|thank you|thx|dhonnobad|dhanyabad|shukriya|appreciate it|cheers)\b/;
const PROBLEM = new Set(["bug", "broken", "failed", "404", "401", "blocked", "slow", "error"]);
const KB_TOPICS = new Set(["refund", "cancel", "invoice", "licence", "commercial", "deleteaccount", "login", "bug", "discount", "resell", "vat", "tax"]);
/** words that are about installing, not the component's name */
const INSTALL_NOISE = new Set("install installing installed code cli npx npm pnpm yarn project app my add adding it into in to the react setup component components use using get".split(" "));
export const STARTERS = ["Find a component", "Set up MCP", "Pricing and Lifetime deal", "Install code", "Payment or activation", "Talk to a human"];
const CLIENT_CHIPS: Record<ClientId, string> = { claude: "Claude Code", cursor: "Cursor", vscode: "VS Code", codex: "Codex" };
const MCP_URL = mcpUrlFor(SITE_URL);

/** One engine per KB snapshot: indexes and vocabulary are built once and reused across requests. */
export class Assistant<A extends KbLike = KbLike> {
  readonly kb: KbIndex<A>;
  private classifier: IntentClassifier;
  readonly vocab: Vocabulary;

  constructor(articles: A[]) {
    this.kb = new KbIndex(articles);
    this.classifier = sharedClassifier();
    this.vocab = new Vocabulary();
    this.kb.addTo(this.vocab);
    this.classifier.addTo(this.vocab);
    for (const n of catalogVocabulary()) this.vocab.add(n, 1);
    for (const g of SYNONYMS) for (const w of g) this.vocab.add(w, 2);
    for (const c of ["claude", "cursor", "codex", "copilot", "vscode", "figma", "shadcn", "tailwind", "lifetime", "pricing", "refund", "invoice", "kanban", "component", "icon", "template", "activation", "install"]) this.vocab.add(c, 5);
  }

  /** Analyse a message (exposed for the gap log key and tests). */
  analyse(text: string): Analysed {
    return analyse(text, this.vocab);
  }

  async respond(message: string, prev: DialogState | undefined, tools: Tools): Promise<{ reply: Reply; state: DialogState; gap: boolean }> {
    const st: DialogState = prev ? { ...prev, entities: { ...prev.entities } } : { ...EMPTY_STATE, entities: {} };
    st.turn = (st.turn ?? 0) + 1;
    const a = this.analyse(message);
    const e = extract(a);
    const c = a.clean;
    const run = (r: Reply, next: Partial<DialogState> = {}, gap = false) => {
      const state: DialogState = { ...st, ...next, v: 1, turn: st.turn };
      if (!("pending" in next)) delete state.pending;
      state.misses = gap ? (st.misses ?? 0) + 1 : 0;
      return { reply: r, state, gap };
    };

    if (!c) return run({ text: "Type a question, or pick a topic below.", chips: STARTERS, intent: "empty", confidence: 1 });

    /* ---- 1. dialogue moves ---- */
    const pending = st.pending;
    if (pending && isAffirm(c)) {
      if (pending.kind === "confirm") return this.act(pending.intent, st.entities, st, tools, run, a, e, 1);
    }
    if (pending && isDeny(c)) {
      return run({ text: "Okay. Tell me in other words what you need, or pick a topic.", chips: [...STARTERS.slice(0, 4), "Talk to a human"], intent: "deny", confidence: 1 });
    }
    if (isGreeting(c) || (GREET_START.test(c) && a.terms.every((x) => GREET_FILLER.has(x))))
      return run({ text: "Hi. I can find components, icons and design systems, set up MCP, explain pricing, or check your plan. What do you need?", chips: STARTERS, intent: "greeting", confidence: 1 });
    if (isThanks(c) || (THANKS_ANY.test(c) && a.words.length <= 5 && !e.question && !c.includes("?")))
      return run({ text: "Glad that helped. Anything else?", chips: STARTERS.slice(0, 4), intent: "thanks", confidence: 1 });
    if (/^(help|help me|i need help|need help|support|menu|options|start|start over|what can you do|what can you help with)$/.test(c))
      return run({ text: "I can find components, icons and design systems, set up MCP, explain pricing, or check your plan. Pick a topic or ask in your own words.", chips: STARTERS, intent: "help", confidence: 1 });
    if (/^(i have a |there is a |got a |theres a )?(problem|issue|bug|error|question)s?( please| here)?$/.test(c) || /^(it|this|something)( is|s)? (not working|broken)$/.test(c))
      return run(
        { text: "Sorry about that. What is it about?", chips: ["Payment or activation", "Copy to Figma not working", "MCP connection", "Install code", "Talk to a human"], intent: "clarify", confidence: 0.5 },
        { pending: { kind: "choose", options: ["Payment or activation", "Copy to Figma not working", "MCP connection", "Install code"] } },
      );
    if (isBye(c)) return run({ text: "Thanks for stopping by. The Help button stays here if you need it.", intent: "goodbye", confidence: 1 });
    if (isDeny(c) && st.intent) {
      return run({ text: "Sorry that missed. Say it another way and I’ll look again, or I can pass it to a person.", chips: ["Talk to a human", ...STARTERS.slice(0, 3)], intent: "deny", confidence: 1 });
    }
    if (isMore(c) && st.list) {
      const page = (st.page ?? 0) + 1;
      if (st.list === "components") return this.components(st.entities, page, st, run);
      if (st.list === "icons") return this.icons(st.entities.query ?? "", page, st, tools, run);
      if (st.list === "systems") return this.act("list_systems", st.entities, st, tools, run, a, e, 1);
    }

    // a slot we asked for: the next message fills it
    if (pending?.kind === "slot") {
      if (pending.slot === "client" && e.client) return this.act(pending.intent, { ...st.entities, client: e.client }, st, tools, run, a, e, 1);
      if (pending.slot === "query" && a.words.length && a.words.length <= 6 && !e.question) {
        const strong = this.topIntent(a, e);
        if (!strong || strong.score < T.intent || strong.id === "find_component")
          return this.components({ system: e.system ?? st.entities.system, free: e.free, codeOnly: e.codeOnly, query: e.query ?? a.words.join(" "), category: e.category }, 0, st, run);
      }
    }

    // refinements of the last request
    if (st.intent && isRefinement(a, e)) {
      const last = st.intent;
      if (e.client && (last === "setup_mcp" || last === "install_code" || !e.system)) return this.act("setup_mcp", { ...st.entities, client: e.client }, st, tools, run, a, e, 1);
      if (last === "find_component" || last === "show_system" || last === "list_systems") {
        const ent: Entities = { ...(last === "find_component" ? st.entities : {}), system: e.system ?? st.entities.system };
        if (e.free) ent.free = true;
        if (e.codeOnly) ent.codeOnly = true;
        if (e.figmaOnly) ent.figmaOnly = true;
        if (last !== "find_component" && !ent.query) return e.system ? this.act("show_system", ent, st, tools, run, a, e, 1) : this.components(ent, 0, st, run);
        return this.components(ent, 0, st, run);
      }
      if ((last === "pricing" || last === "lifetime" || last === "buy") && e.plan) return this.act(e.plan === "lifetime" ? "lifetime" : "pricing", { ...st.entities, plan: e.plan }, st, tools, run, a, e, 1);
    }

    /* ---- 2. classify ---- */
    const intents = this.scoreIntents(a, e);
    const top = intents[0];
    const kbHits = this.kb.search(a.terms, a.fixed, 3);
    const kbTop = kbHits[0];
    const kbConf = kbTop?.confidence ?? 0;

    if (top && top.score >= T.intent && (isToolIntent(top.id) || top.score >= kbConf - 0.05) && !(top.score < kbConf - 0.15 && !isToolIntent(top.id))) {
      // a tool intent wins unless the KB has a clearly better, specific answer to a how/why question
      if (!(isToolIntent(top.id) && e.question && kbConf >= T.kb + 0.2 && kbConf > top.score + 0.1 && !["setup_mcp", "install_code", "account_status", "find_component", "human"].includes(top.id))) {
        const ent = mergeEntities(st.entities, e, top.id, st.intent);
        // a real question that our docs answer beats asking for a missing detail ("what is mcp and why...")
        const wouldAsk = (top.id === "setup_mcp" && !ent.client) || (top.id === "find_component" && !ent.query && !ent.system && !ent.category);
        if (wouldAsk && kbConf >= T.kb && (e.question || a.words.length > 3)) return this.article(kbHits, st, run, top.id);
        const res = await this.act(top.id, ent, st, tools, run, a, e, top.score, kbHits);
        return this.withRelated(res, kbHits, top.id);
      }
    }
    if (kbTop && kbConf >= T.kb) return this.article(kbHits, st, run, top && !isToolIntent(top.id) && top.score >= T.clarifyIntent ? top.id : "kb");

    // a bare noun that names components ("settings", "file upload"): show them
    if (a.words.length && a.words.length <= 3 && !e.question && e.query) {
      const probe = searchComponents(e.query, { limit: 1 });
      if (probe.exact && probe.total) return this.components({ query: e.query, system: e.system, free: e.free, codeOnly: e.codeOnly }, 0, { ...st, intent: "find_component" }, run, 0.5);
    }

    /* ---- 3. clarify or admit we don't know ---- */
    const options: string[] = [];
    // repaired typos make a weak match weaker
    const kbFloor = T.clarifyKb + 0.08 * a.fixes.length;
    for (const i of intents.slice(0, 3)) if (i.score >= T.clarifyIntent && INTENT_LABEL[i.id]) options.push(INTENT_LABEL[i.id]);
    for (const k of kbHits) if (k.confidence >= kbFloor && k.article.question.length <= 70) options.push(k.article.question);
    const uniq = [...new Set(options)].slice(0, 3);
    if (uniq.length) {
      return run(
        { text: "I want to get this right. Did you mean one of these?", chips: [...uniq, "Talk to a human"], intent: "clarify", confidence: Math.max(top?.score ?? 0, kbConf), alternatives: kbHits.map((k) => k.article.slug) },
        { pending: { kind: "choose", options: uniq } },
        true,
      );
    }
    if ((st.misses ?? 0) >= 1) {
      return run(
        { text: "I still don’t have an answer for that. Shall I pass your question to a person? They reply by email, usually within a day.", chips: ["Yes, talk to a human", "No, ask something else"], intent: "unknown", confidence: 0 },
        { pending: { kind: "confirm", intent: "human" } },
        true,
      );
    }
    return run(
      {
        text: "I don’t have an answer for that in our docs or library yet. Try other words, pick a topic, or ask a person.",
        chips: [...STARTERS.slice(0, 4), "Talk to a human"],
        intent: "unknown",
        confidence: 0,
      },
      {},
      true,
    );
  }

  /**
   * Tool answers carry the knowledge-base article that best matches the question (or the intent's own article),
   * shown as an expandable card under the live result.
   */
  private withRelated<R extends { reply: Reply; state: DialogState; gap: boolean }>(res: R, kbHits: KbResult<A>[], intent: string): R {
    const r = res.reply;
    if (r.article || ["greeting", "thanks", "goodbye", "account_status"].includes(intent)) return res;
    const floor = intent === "find_component" || intent === "find_icon" ? 0.5 : T.kb;
    let pick: A | undefined = kbHits[0] && kbHits[0].confidence >= floor ? kbHits[0].article : undefined;
    // the intent's own article wins when the search ranks it close to the top
    const ownSlug = INTENT_ARTICLE_BY_INTENT.get(intent);
    const own = ownSlug ? kbHits.find((h) => h.article.slug === ownSlug) : undefined;
    if (pick && own && own.confidence >= kbHits[0].confidence - 0.12) pick = own.article;
    if (!pick && intent !== "find_component" && intent !== "find_icon") {
      const slug = INTENT_ARTICLE_BY_INTENT.get(intent);
      pick = slug ? this.kb.bySlug.get(slug) : undefined;
    }
    if (!pick) return res;
    const cards = [...(r.cards ?? [])];
    cards.push({ type: "article", slug: pick.slug, question: pick.question, answer: ["pricing", "lifetime", "buy"].includes(intent) ? withoutPrices(pick.answer) : pick.answer, category: pick.category });
    return { ...res, reply: { ...r, cards, article: pick.slug, alternatives: kbHits.filter((h) => h.article.slug !== pick!.slug).map((h) => h.article.slug) } };
  }

  /** Top intent only (used for slot answers). */
  private topIntent(a: Analysed, e: Extracted): IntentScore | undefined {
    return this.scoreIntents(a, e)[0];
  }

  /** Phrase similarity plus keyword rules on entities. */
  scoreIntents(a: Analysed, e: Extracted): IntentScore[] {
    const base = this.classifier.classify(a.terms);
    const s = new Map(base.map((x) => [x.id, x.score]));
    const bump = (id: string, v: number) => s.set(id, Math.max(s.get(id) ?? 0, v));
    const words = a.words.length;
    // component kinds: "do you have a kanban board", "pricing table", "login form"
    if (e.uiNoun && !e.icon) {
      if (e.installCue) bump("install_code", 0.7);
      else if (e.lookup && !e.question) bump("find_component", 0.82);
      else if (!e.question) bump("find_component", words <= 3 ? 0.66 : 0.55);
    }
    // "design system" questions and problem reports are for the docs, not a catalog search
    const problem = a.terms.some((x) => PROBLEM.has(x));
    if ((a.terms.includes("system") && !e.system) || problem || a.terms.includes("request")) for (const k of ["find_component", "find_icon"]) s.set(k, Math.min(s.get(k) ?? 0, 0.5));
    // a named system is about that system, not the list
    if (e.system && words <= 5 && (s.get("list_systems") ?? 0) >= T.intent) {
      bump("show_system", s.get("list_systems") ?? 0);
      s.set("list_systems", (s.get("show_system") ?? 0) - 0.05);
    }
    if (e.icon && !e.question) bump("find_icon", e.lookup || words <= 4 ? 0.85 : 0.6);
    else if (!e.icon) s.set("find_icon", Math.min(s.get("find_icon") ?? 0, 0.45));
    if (/\bhow (many|big)\b.*\b(components?|systems?|library|templates?)\b/.test(a.clean)) {
      bump("list_systems", 0.9);
      s.set("find_component", Math.min(s.get("find_component") ?? 0, 0.5));
    }
    // small talk only from the whole-message patterns, never from a shared word
    for (const k of ["greeting", "thanks", "goodbye"]) s.delete(k);
    if (e.system && !e.uiNoun && words <= 4 && !e.question) bump("show_system", 0.8);
    if (e.system && e.uiNoun) bump("find_component", 0.85);
    if (e.client && !e.icon && !e.uiNoun) bump("setup_mcp", e.question || words <= 4 ? 0.7 : 0.6);
    // account questions need a first-person cue ("my plan", "am I on"); otherwise they are general questions
    // support topics (refunds, invoices, licence...) are questions for the docs, not the price list
    if (a.terms.some((x) => KB_TOPICS.has(x))) for (const k of ["pricing", "lifetime", "buy"]) s.set(k, Math.min(s.get(k) ?? 0, 0.5));
    if (e.selfCue) {
      bump("account_status", 0.9);
      for (const k of ["pricing", "lifetime", "buy"]) s.set(k, Math.min(s.get(k) ?? 0, 0.5));
    } else s.set("account_status", Math.min(s.get("account_status") ?? 0, 0.5));
    if (a.terms.includes("human") && words <= 6) bump("human", 0.8);
    // "pricing table" is a component, not a price question
    if (e.uiNoun && a.terms.includes("pricingtable")) s.set("pricing", Math.min(s.get("pricing") ?? 0, 0.3));
    return [...s.entries()].map(([id, score]) => ({ id, score: Math.min(1, score) })).sort((x, y) => y.score - x.score);
  }

  /* ---------- actions ---------- */

  private async act(
    intent: string,
    ent: Entities,
    st: DialogState,
    tools: Tools,
    run: (r: Reply, next?: Partial<DialogState>, gap?: boolean) => { reply: Reply; state: DialogState; gap: boolean },
    a: Analysed,
    e: Extracted,
    confidence: number,
    kbHits: KbResult<A>[] = [],
  ): Promise<{ reply: Reply; state: DialogState; gap: boolean }> {
    const base = { intent, confidence: round(confidence) };
    switch (intent) {
      case "greeting":
        return run({ ...base, text: "Hi. I can find components, icons and design systems, set up MCP, explain pricing, or check your plan. What do you need?", chips: STARTERS });
      case "thanks":
        return run({ ...base, text: "Glad that helped. Anything else?", chips: STARTERS.slice(0, 4) });
      case "goodbye":
        return run({ ...base, text: "Thanks for stopping by. The Help button stays here if you need it." });
      case "human":
        return run({ ...base, text: "Sure. Leave your email and a person will reply, usually within a day. Our conversation is attached, so you won’t have to repeat yourself.", handoff: true }, { intent: "human" });
      case "find_component": {
        if (!ent.query && !ent.system && !ent.category) {
          return run(
            { ...base, text: "What kind of component are you looking for?", chips: ["Kanban board", "Data table", "Charts", "Modals", "Sidebar", "Dashboard templates"] },
            { intent, entities: ent, pending: { kind: "slot", intent, slot: "query" } },
          );
        }
        return this.components(ent, 0, { ...st, intent }, run, confidence);
      }
      case "show_system": {
        const slug = ent.system;
        const sys = slug ? systemInfo(slug) : null;
        if (!sys) return this.act("list_systems", ent, st, tools, run, a, e, confidence);
        const kind = sys.tier === "free" ? "free" : "Pro";
        return run(
          {
            ...base,
            text: `**${sys.name}**: ${sys.tagline}. ${sys.description} It has ${sys.components.toLocaleString("en-US")} components (${sys.coded.toLocaleString("en-US")} with React code) and ${sys.templates} full-page templates, and it is a ${kind} system.`,
            cards: [{ type: "system", system: sys }],
            chips: [`Show ${sys.name} components`, `${sys.name} templates`, "Browse design systems", sys.tier === "free" ? "Install code" : "Pricing and Lifetime deal"],
            feedback: true,
          },
          { intent, entities: { system: sys.slug }, list: undefined, page: 0 },
        );
      }
      case "list_systems": {
        const list = allSystems();
        const free = list.filter((s) => s.tier === "free").map((s) => s.name);
        return run(
          {
            ...base,
            text: `There are ${list.length} design systems with ${LIBRARY_TOTAL.toLocaleString("en-US")} components in all. ${free.join(" and ")} ${free.length === 1 ? "is" : "are"} free; the others come with Pro or Lifetime.`,
            cards: [{ type: "systems", systems: list }],
            chips: list.slice(0, 3).map((s) => "Tell me about " + s.name).concat(["Pricing and Lifetime deal"]),
            feedback: true,
          },
          { intent, entities: {}, list: undefined },
        );
      }
      case "find_icon":
        return this.icons(tools.iconWords(a.fixed).join(" ") || ent.query || "", 0, { ...st, intent }, tools, run, confidence);
      case "pricing":
      case "lifetime":
      case "buy": {
        const p = await tools.pricing();
        if (!p) return this.article(kbHits.length ? kbHits : this.kb.search(a.terms, a.fixed, 3), st, run, intent);
        const focus = intent === "lifetime" ? "lifetime" : intent === "pricing" && ent.plan === "team" ? "team" : undefined;
        const text = pricingText(p, intent, focus, /^(is|does|do|can|will|are)\b/.test(a.clean));
        const chips =
          intent === "buy"
            ? ["Payment or activation", "Is there a refund?", "Talk to a human"]
            : focus === "lifetime"
              ? ["What’s in Pro?", "Is there a refund?", "Buy a plan"]
              : ["Is it one time?", "Team plan", "Buy a plan", "Is there a refund?"];
        const actions = intent === "buy" ? [{ label: "Open pricing", href: "/pricing" }] : [{ label: "See all plans", href: "/pricing" }];
        // a matching article (team seats, refunds of Lifetime...) rides along under the live prices
        const rel = kbHits[0] && kbHits[0].confidence >= T.kb ? kbHits[0].article : undefined;
        const cards: Card[] = [{ type: "pricing", pricing: p, focus }];
        // the live card is the source of prices: drop sentences with a price from the article excerpt
        if (rel) cards.push({ type: "article", slug: rel.slug, question: rel.question, answer: shortAnswer(withoutPrices(rel.answer), 160), category: rel.category });
        return run({ ...base, text, cards, chips, actions, feedback: true, article: rel?.slug, alternatives: kbHits.slice(rel ? 1 : 0).map((h) => h.article.slug) }, { intent, entities: { plan: ent.plan } });
      }
      case "account_status": {
        const acc = await tools.account();
        if (!acc.signedIn)
          return run(
            {
              ...base,
              text: "You’re not signed in on this browser, so I can’t see a plan. Sign in and ask again, and I’ll show your plan, today’s usage and whether you have an API key.",
              cards: [{ type: "account", account: acc }],
              actions: [
                { label: "Sign in", href: "/sign-in" },
                { label: "Create a free account", href: "/sign-up" },
              ],
              chips: ["Pricing and Lifetime deal", "Set up MCP"],
            },
            { intent },
          );
        const mcp = acc.mcpLimit === null ? `${acc.mcpToday} MCP calls today, with no daily limit` : `${acc.mcpToday} of ${acc.mcpLimit} MCP calls used today`;
        return run(
          {
            ...base,
            text: `You’re on **${acc.planLabel}**. ${mcp}. ${acc.apiKeys ? `You have ${acc.apiKeys} API key${acc.apiKeys === 1 ? "" : "s"}.` : "You don’t have an API key yet: make one on [Account](/account) to connect MCP."}`,
            cards: [{ type: "account", account: acc }],
            actions: [{ label: "Open account", href: "/account" }],
            chips: acc.paid ? ["Set up MCP", "Find a component"] : ["Pricing and Lifetime deal", "Set up MCP"],
            feedback: true,
          },
          { intent },
        );
      }
      case "setup_mcp": {
        const client = ent.client as ClientId | undefined;
        if (!client)
          return run(
            { ...base, text: "Which AI agent do you use? I’ll give you the exact setup.", chips: Object.values(CLIENT_CHIPS) },
            { intent, entities: {}, pending: { kind: "slot", intent, slot: "client" } },
          );
        const info = CLIENTS.find((x) => x.id === client)!;
        const cfg = configText(client, MCP_URL, "YOUR_API_KEY");
        const card: Card = {
          type: "steps",
          title: `Connect ${info.name} to Ingot UI`,
          steps: [
            { title: "Get an API key", text: "Create a free account, then make a key on [Account](/account). The one-step connect on [MCP setup](/mcp) fills the key in for you." },
            { title: `Add the server to ${info.name}`, text: info.where + " Replace YOUR_API_KEY with your key.", code: cfg },
            { title: "Check it works", text: "Ask your agent:", code: { label: "Prompt", code: TEST_PROMPT } },
            { title: "Set up your project", text: "Then ask it to write the rules files, so later sessions stay on the system:", code: { label: "Prompt", code: SETUP_PROMPT } },
          ],
          link: { label: "Open MCP setup", href: "/mcp" },
        };
        const others = (Object.keys(CLIENT_CHIPS) as ClientId[]).filter((x) => x !== client).map((x) => "What about " + CLIENT_CHIPS[x] + "?");
        return run(
          { ...base, text: `Here’s how to connect ${info.name}. It takes about a minute.`, cards: [card], chips: [...others.slice(0, 2), "Where is my API key?", "MCP limits"], feedback: true },
          { intent, entities: { client } },
        );
      }
      case "install_code": {
        const regHit = ent.query ? registryMatch(ent.query) : null;
        const hit = ent.query && !regHit ? searchComponents(ent.query, { codeOnly: true, limit: 1 }) : null;
        const comp = regHit ? { name: regHit.name, url: "/components/" + regHit.slug, slug: regHit.slug } : hit?.exact ? hit.items[0] : undefined;
        const reg = comp && getItem(comp.slug) ? comp.slug : undefined;
        // Facts from the KB (install-cli, shadcn-registry): free components install with the shadcn CLI from our
        // registry; Pro components come from the website or the MCP server. `npx ingotui` is not on npm yet.
        const pro = comp && "tier" in comp && comp.tier === "pro";
        const steps: Step[] = [
          reg
            ? { title: `Add ${comp!.name}`, text: "With the shadcn CLI, from our registry. Its dependencies come along.", code: { label: "Terminal", code: `npx shadcn add ${SITE_URL}/r/${reg}.json` } }
            : comp
              ? { title: `Copy ${comp.name}`, text: `Open [${comp.name}](${comp.url}) and press Copy React code.${pro ? " It is a Pro component, so sign in with a paid plan." : ""}` }
              : { title: "Add a free component", text: "With the shadcn CLI, from our registry. Its dependencies come along.", code: { label: "Terminal", code: `npx shadcn add ${SITE_URL}/r/button.json` } },
          { title: "Import the theme", text: "Import the tokens and the theme bridge after Tailwind in your global CSS, as shown in [Docs](/docs#tokens)." },
          { title: "Or let your agent do it", text: "Connect the [MCP server](/mcp) and ask your agent to install components with `add_components`. Pro components come this way or from the website." },
        ];
        return run(
          {
            ...base,
            text: comp ? `Here’s how to get **${comp.name}** into your React + Tailwind CSS v4 project.` : "Here’s how to install Ingot UI components in a React + Tailwind CSS v4 project.",
            cards: [{ type: "steps", title: "Install components", steps, link: { label: "Read the docs", href: "/docs" } }],
            chips: ["Does it work with shadcn?", "Set up MCP", "Find a component"],
            feedback: true,
          },
          { intent, entities: comp ? { component: comp.slug } : {} },
        );
      }
      default: {
        // knowledge-base intents (refunds, licence, activation, ...): answer from the best article
        let hits = kbHits.length ? kbHits : this.kb.search(a.terms, a.fixed, 3);
        const own = INTENT_ARTICLE_BY_INTENT.get(intent);
        const ownArticle = own ? this.kb.bySlug.get(own) : undefined;
        const ownHit = hits.find((h) => h.article.slug === own);
        if (ownArticle && (!hits[0] || hits[0].confidence < T.kb)) hits = [{ article: ownArticle, confidence: round(confidence) }, ...hits.filter((h) => h.article.slug !== own)];
        else if (ownHit && ownHit !== hits[0] && ownHit.confidence >= hits[0].confidence - 0.12) hits = [ownHit, ...hits.filter((h) => h !== ownHit)];
        if (!hits.length) {
          return run(
            { ...base, text: "I don’t have a saved answer for that yet. A person can help.", chips: ["Talk to a human", ...STARTERS.slice(0, 3)], intent, confidence: round(confidence) },
            { intent },
            true,
          );
        }
        return this.article(hits, { ...st, intent }, run, intent);
      }
    }
  }

  private article(hits: KbResult<A>[], st: DialogState, run: (r: Reply, next?: Partial<DialogState>, gap?: boolean) => { reply: Reply; state: DialogState; gap: boolean }, intent: string) {
    const [first, ...rest] = hits;
    const a = first.article;
    const related = rest.filter((h) => h.confidence >= T.clarifyKb && h.article.question.length <= 70).map((h) => h.article.question);
    return run(
      {
        text: a.answer,
        chips: related.slice(0, 2).concat(["Talk to a human"]),
        actions: [{ label: "Open in Support", href: "/support#" + a.slug }],
        intent,
        confidence: first.confidence,
        article: a.slug,
        alternatives: rest.map((h) => h.article.slug),
        feedback: true,
      },
      { intent: intent === "kb" ? "kb" : intent, article: a.slug, list: undefined },
    );
  }

  private components(ent: Entities, page: number, st: DialogState, run: (r: Reply, next?: Partial<DialogState>, gap?: boolean) => { reply: Reply; state: DialogState; gap: boolean }, confidence = 1) {
    const q = ent.query ?? "";
    const res = searchComponents(q, { system: ent.system, free: ent.free, codeOnly: ent.codeOnly, figmaOnly: ent.figmaOnly, category: ent.category, offset: page * PAGE, limit: PAGE });
    const sys = ent.system ? systemInfo(ent.system) : null;
    const where = sys ? ` in ${sys.name}` : "";
    const filt = [ent.free ? "free" : "", ent.codeOnly ? "with React code" : "", ent.figmaOnly ? "Figma-only" : ""].filter(Boolean).join(", ");
    const label = q || (ent.category ? ent.category.toLowerCase() : "components");
    const next: Partial<DialogState> = { intent: "find_component", entities: ent, list: "components", page };
    if (!res.total) {
      // nothing at all: honest, with a way forward
      const loose = q ? searchComponents(q, { limit: 1 }).total : 0;
      return run(
        {
          text: loose && (ent.system || ent.free || ent.codeOnly)
            ? `No ${label} matches${where}${filt ? " (" + filt + ")" : ""}. There ${loose === 1 ? "is 1 match" : `are ${loose} matches`} without those filters.`
            : `I couldn’t find a ${label} in the library${where}. I can pass a request to the team, or you can browse by category.`,
          chips: loose ? [`Show all ${label}`, "Talk to a human"] : ["Request this component", "Browse design systems", "Charts", "Data table"],
          actions: [{ label: "Browse components", href: "/components" }],
          intent: "find_component",
          confidence: round(confidence),
        },
        { ...next, entities: loose ? { query: q } : ent, list: undefined, pending: loose ? undefined : { kind: "confirm", intent: "human" } },
        !loose,
      );
    }
    if (page * PAGE >= res.total) {
      return run({ text: `That’s all ${res.total} I have for ${label}${where}.`, chips: ["Find a component", "Browse design systems"], intent: "find_component", confidence: 1 }, { ...next, page: page - 1 });
    }
    const shown = Math.min(res.total, (page + 1) * PAGE);
    const closest = !res.exact && q ? `No exact “${q}”${where}, but these are the closest matches:` : "";
    const head =
      page > 0
        ? `More ${label}${where} (${page * PAGE + 1} to ${shown} of ${res.total}):`
        : closest || `${res.total === 1 ? "1 match" : `${res.total.toLocaleString("en-US")} matches`} for ${label}${where}${filt ? " (" + filt + ")" : ""}:`;
    const chips: string[] = [];
    if (shown < res.total) chips.push("Show more");
    if (!ent.free) chips.push("Only free ones");
    if (!ent.codeOnly) chips.push("Only with React code");
    if (!ent.system) {
      const sysOf = [...new Set(res.items.map((i) => i.systemName))];
      if (sysOf[0]) chips.push("Only " + sysOf[0]);
    }
    chips.push("Install code");
    return run({ text: head, cards: [{ type: "components", query: q, items: res.items, total: res.total, page }], chips: chips.slice(0, 4), actions: [{ label: "Browse all components", href: "/components" + (q ? "?q=" + encodeURIComponent(q) : "") }], intent: "find_component", confidence: round(confidence), feedback: page === 0 }, next);
  }

  private async icons(query: string, page: number, st: DialogState, tools: Tools, run: (r: Reply, next?: Partial<DialogState>, gap?: boolean) => { reply: Reply; state: DialogState; gap: boolean }, confidence = 1) {
    const words = query ? query.split(" ").filter(Boolean) : [];
    if (!words.length)
      return run({ text: "Which icon do you need? Name the thing it should show, like arrow, calendar or trash.", chips: ["Arrow icons", "Calendar icon", "User icon"], intent: "find_icon", confidence: round(confidence) }, { intent: "find_icon", entities: {}, list: undefined });
    const limit = 12;
    const res = await tools.icons(words, (page + 1) * limit);
    const items = res.items.slice(page * limit);
    const next: Partial<DialogState> = { intent: "find_icon", entities: { query: words.join(" ") }, list: "icons", page };
    if (!res.total)
      return run(
        { text: `No icon matches “${words.join(" ")}”. Try a simpler word for what it shows, or browse the icon library.`, actions: [{ label: "Browse icons", href: "/icons" }], chips: ["Arrow icons", "Talk to a human"], intent: "find_icon", confidence: round(confidence) },
        { ...next, list: undefined },
        true,
      );
    if (!items.length) return run({ text: `That’s all ${res.total} icons for “${words.join(" ")}”.`, actions: [{ label: "Open the icon library", href: "/icons?q=" + encodeURIComponent(words.join(" ")) }], intent: "find_icon", confidence: 1 }, { ...next, page: page - 1 });
    return run(
      {
        text: `${res.total.toLocaleString("en-US")} icon${res.total === 1 ? "" : "s"} for “${words.join(" ")}”. The stroke styles are free; all ${ICON_STYLES} styles come with Pro and Lifetime:`,
        cards: [{ type: "icons", query: words.join(" "), items, total: res.total }],
        chips: (res.total > (page + 1) * limit ? ["Show more"] : []).concat(["Install code", "Find a component"]),
        actions: [{ label: "Open in the icon library", href: "/icons?q=" + encodeURIComponent(words.join(" ")) }],
        intent: "find_icon",
        confidence: round(confidence),
        feedback: page === 0,
      },
      next,
    );
  }
}

/* ---------- helpers ---------- */

const round = (n: number) => Math.round(n * 1000) / 1000;
const withoutPrices = (s: string) => s.split(/(?<=[.!?])\s+/).filter((x) => !/\$\s?\d/.test(x)).join(" ") || "Prices are on the card above.";
const usd = (n: number) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));

function mergeEntities(prev: Entities, e: Extracted, intent: string, lastIntent?: string): Entities {
  const out: Entities = {};
  if (intent === "find_component") {
    out.query = e.query;
    out.category = e.category;
    out.system = e.system ?? (lastIntent === "find_component" || lastIntent === "show_system" ? undefined : undefined);
    if (e.free) out.free = true;
    if (e.codeOnly) out.codeOnly = true;
    if (e.figmaOnly) out.figmaOnly = true;
    // a bare system follow-up keeps the last subject
    if (!out.query && !out.category && prev.query && lastIntent === "find_component") out.query = prev.query;
  } else if (intent === "setup_mcp") {
    out.client = e.client ?? (lastIntent === "setup_mcp" ? prev.client : undefined);
  } else if (intent === "show_system") {
    out.system = e.system ?? prev.system;
  } else if (intent === "install_code") {
    const q = e.subject.filter((w) => !INSTALL_NOISE.has(w));
    out.query = q.length ? q.join(" ") : undefined;
  } else if (intent === "pricing" || intent === "lifetime" || intent === "buy") {
    out.plan = e.plan;
  } else {
    out.query = e.query;
  }
  return out;
}

function pricingText(p: PricingInfo, intent: string, focus?: "lifetime" | "team" | "pro", yesNo = false): string {
  const pro = (p.monthly ? `${usd(p.proMonthly)} a month or ` : "") + `${usd(p.proYearly)} a year`;
  const team = (p.monthly ? `${usd(p.teamMonthly)} a month or ` : "") + `${usd(p.teamYearly)} a year for ${p.teamSeats} people`;
  const life = p.lifetime === null ? "Lifetime is closed right now." : `**Lifetime** is one payment of ${usd(p.lifetime)}${p.dealActive && p.lifetimeAfter !== p.lifetime ? ` (launch deal, normally ${usd(p.lifetimeAfter)})` : ""}: every system and every future update, forever.`;
  const deal = p.dealRule ? " " + p.dealRule : "";
  if (focus === "lifetime") {
    if (p.lifetime === null) return "Lifetime is closed right now." + deal + ` **Pro** is ${pro}.`;
    return `${yesNo ? "Yes, " : ""}Lifetime is one payment, not a subscription: ${usd(p.lifetime)}${p.dealActive && p.lifetimeAfter !== p.lifetime ? ` during the launch deal (normally ${usd(p.lifetimeAfter)})` : ""}, with every system and every future update, forever.${deal}`;
  }
  if (focus === "team") return `**Team** is ${team}, on one bill: everything in Pro for each person.` + ` **Pro** for one person is ${pro}.`;
  const lead = intent === "buy" ? "Pick a plan on [Pricing](/pricing) and pay with the same email you use here, so the plan lands on your account. Live prices:" : "Live prices:";
  return `${lead} **Free** is $0 for personal and non-commercial projects, with the Loopo system and the stroke icons. **Pro** is ${pro}. **Team** is ${team}. ${life}${deal} Paid plans have a 7-day refund.`;
}

let classifierSingleton: IntentClassifier | null = null;
function sharedClassifier() {
  if (!classifierSingleton) classifierSingleton = new IntentClassifier();
  return classifierSingleton;
}
