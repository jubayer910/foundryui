/**
 * Knowledge-base matcher shared by the support widget (W2) and the admin test box (W3). Pure, no I/O.
 *
 * Our own answer engine, not an LLM:
 *  1. Normalise: lowercase, fold multi-word phrases into one term ("money back" -> refund, "sign in" -> login).
 *  2. Tokenise, drop stop words, light stemming (plural, -ing, -ed).
 *  3. Map every term to a concept through the synonym table, on both the query and the articles.
 *  4. Score: per query concept, IDF x field weight (keywords 3 > question 2 > answer 1),
 *     plus a bonus for query bigrams found in order in the question or a keyword phrase.
 *  5. Normalise by the best possible score for that query, keep matches above the threshold.
 */
export type KbLike = { id: string; slug: string; question: string; answer: string; keywords: string; category: string };
export type KbMatch<T extends KbLike = KbLike> = { article: T; score: number };
export type MatchOptions = { threshold?: number };

/** Minimum normalised score (0..1) for an article to count as an answer. */
export const MATCH_THRESHOLD = 0.2;

const W = { keywords: 3, question: 2, answer: 1 } as const;
const PHRASE_BONUS = 0.6; // share of a term's weight added per matching bigram
const FOCUS = 0.3; // up to +30% for articles whose keywords and question are mostly the query's topic

/** Multi-word phrases folded to one term before tokenising. Longest first. */
const PHRASES: [RegExp, string][] = (
  [
    ["money back", "refund"],
    ["pay back", "refund"],
    ["charge back", "refund"],
    ["sign in", "login"],
    ["signin", "login"],
    ["log in", "login"],
    ["logged in", "login"],
    ["log on", "login"],
    ["sign up", "signup"],
    ["create an account", "signup"],
    ["create account", "signup"],
    ["register", "signup"],
    ["log out", "logout"],
    ["sign out", "logout"],
    ["dark mode", "darkmode"],
    ["dark theme", "darkmode"],
    ["night mode", "darkmode"],
    ["api key", "apikey"],
    ["api keys", "apikey"],
    ["access token", "apikey"],
    ["claude code", "claude"],
    ["claude desktop", "claude"],
    ["vs code", "vscode"],
    ["visual studio code", "vscode"],
    ["github copilot", "copilot"],
    ["design system", "system"],
    ["design systems", "system"],
    ["ui kit", "kit"],
    ["one time", "lifetime"],
    ["pay once", "lifetime"],
    ["for life", "lifetime"],
    ["per month", "monthly"],
    ["a month", "monthly"],
    ["per year", "yearly"],
    ["a year", "yearly"],
    ["annual", "yearly"],
    ["annually", "yearly"],
    ["credit card", "card"],
    ["debit card", "card"],
    ["open source", "opensource"],
    ["shadcn ui", "shadcn"],
    ["tailwind css", "tailwind"],
    ["next js", "nextjs"],
    ["next.js", "nextjs"],
    ["model context protocol", "mcp"],
    ["delete my account", "deleteaccount"],
    ["delete account", "deleteaccount"],
    ["close my account", "deleteaccount"],
    ["close account", "deleteaccount"],
    ["remove my account", "deleteaccount"],
    ["remove account", "deleteaccount"],
    ["free plan", "free"],
    ["for free", "free"],
    ["no account", "anonymous"],
    ["without an account", "anonymous"],
    ["without account", "anonymous"],
    ["copy limit", "limit"],
    ["client work", "commercial"],
    ["client project", "commercial"],
    ["client projects", "commercial"],
  ] as [string, string][]
)
  .sort((a, b) => b[0].length - a[0].length)
  .map(([p, t]) => [new RegExp("\\b" + p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "\\s+") + "\\b", "g"), " " + t + " "]);

/** Concept groups: every listed (stemmed) term maps to the first one. */
const GROUPS: string[][] = [
  ["refund", "reimburse", "reimbursement", "chargeback"],
  ["cancel", "unsubscribe", "stop", "quit", "terminate"],
  ["invoice", "receipt", "bill", "vat", "tax"],
  ["mcp", "agent", "claude", "cursor", "codex", "vscode", "copilot", "windsurf", "ai", "llm", "assistant", "chatgpt", "gemini"],
  ["figma", "paste", "clipboard", "layer", "frame"],
  ["licence", "license", "licensing", "commercial", "legal", "terms", "allowed", "resell", "redistribute"],
  ["price", "cost", "plan", "pricing", "expensive", "cheap", "dollar", "usd", "fee", "much"],
  ["login", "password", "credential", "locked", "forgot", "reset"],
  ["pay", "payment", "checkout", "buy", "purchase", "card", "paypal", "order", "upgrade"],
  ["lifetime", "permanent"],
  ["monthly", "month"],
  ["yearly", "year"],
  ["install", "setup", "add", "npm", "npx", "cli", "command", "terminal", "init"],
  ["apikey", "key", "bearer", "authorization"],
  ["darkmode", "dark"],
  ["email", "mail", "contact", "reach", "human", "talk", "person"],
  ["free", "trial", "try", "gratis"],
  ["limit", "quota", "copies", "copy", "allowance", "cap"],
  ["anonymous", "guest"],
  ["component", "block", "element", "widget"],
  ["system", "theme", "kit", "library"],
  ["deleteaccount", "gdpr", "erase"],
  ["discount", "coupon", "promo", "deal", "sale", "student"],
  ["team", "seat", "seats", "colleague", "company", "organisation", "organization"],
  ["framework", "react", "nextjs", "vite", "remix", "vue", "svelte", "angular"],
  ["tailwind", "css", "variable"],
  ["shadcn", "registry"],
  ["update", "new", "roadmap", "upcoming", "soon", "release", "changelog"],
  ["broken", "bug", "error", "issue", "problem", "wrong", "fail", "crash"],
  ["icon", "icons", "svg"],
  ["chart", "graph"],
];

const CONCEPT = new Map<string, string>();
for (const g of GROUPS) for (const t of g) if (!CONCEPT.has(t)) CONCEPT.set(t, g[0]);

const STOP = new Set(
  (
    "a an the and or but if then so of to in on at by for with from as is are was were be been being am do does did done doing " +
    "i me my mine we us our you your yours it its this that these those there here what which who whom whose when where why how " +
    "can could would should will shall may might must just also very really please thanks thank hi hello hey there any some " +
    "get got have has had having need needs want wants like about into over out up down off than too not no yes ok okay " +
    "ingot ingotui ui site website app thing things way one use using used able possible still yet again let know tell find see show look" +
    " im ive id dont doesnt cant wont isnt"
  ).split(/\s+/),
);

/** Light stemmer: plural, -ing, -ed, with double consonant clean-up ("cancelled" -> "cancel"). */
export function stem(w: string): string {
  if (w.length <= 3 || CONCEPT.has(w)) return w;
  let s = w;
  if (s.endsWith("ies") && s.length > 4) s = s.slice(0, -3) + "y";
  else if (s.endsWith("sses")) s = s.slice(0, -2);
  else if (s.endsWith("ing") && s.length > 5) s = s.slice(0, -3);
  else if (s.endsWith("ed") && s.length > 4) s = s.slice(0, -2);
  else if (s.endsWith("es") && /(ch|sh|x|z)es$/.test(s)) s = s.slice(0, -2);
  else if (s.endsWith("s") && !s.endsWith("ss") && !s.endsWith("us") && !s.endsWith("is")) s = s.slice(0, -1);
  if (s !== w && /([b-df-hj-np-tv-z])\1$/.test(s) && !/(ll|ss)$/.test(s)) s = s.slice(0, -1);
  if (s !== w && s.endsWith("ll") && s.length > 5) s = s.slice(0, -1); // cancell -> cancel
  return s;
}

/** Text -> concept terms, in order (stop words removed). */
export function terms(text: string): string[] {
  let t = " " + text.toLowerCase().replace(/[’']/g, "") + " ";
  for (const [re, rep] of PHRASES) t = t.replace(re, rep);
  const out: string[] = [];
  for (const raw of t.split(/[^a-z0-9]+/)) {
    if (!raw || STOP.has(raw)) continue;
    if (raw.length < 2 && !/\d/.test(raw)) continue;
    const s = stem(raw);
    if (STOP.has(s)) continue;
    out.push(CONCEPT.get(s) ?? CONCEPT.get(raw) ?? s);
  }
  return out;
}

type Indexed = { kw: Set<string>; q: Set<string>; a: Set<string>; qSeq: string[]; kwPhrases: string[][] };
type Index<T> = { docs: Indexed[]; df: Map<string, number>; n: number; src: T[] };

const cache = new WeakMap<object, Index<KbLike>>();

function bigrams(seq: string[]) {
  const out: string[] = [];
  for (let i = 0; i + 1 < seq.length; i++) if (seq[i] !== seq[i + 1]) out.push(seq[i] + " " + seq[i + 1]);
  return out;
}

function build<T extends KbLike>(articles: T[]): Index<T> {
  const hit = cache.get(articles);
  if (hit && hit.src.length === articles.length) return hit as unknown as Index<T>;
  const docs = articles.map((a) => {
    const kwPhrases = a.keywords.split(",").map((k) => terms(k)).filter((p) => p.length > 0);
    const qSeq = terms(a.question);
    return { kw: new Set(kwPhrases.flat()), q: new Set(qSeq), a: new Set(terms(a.answer)), qSeq, kwPhrases };
  });
  const df = new Map<string, number>();
  for (const d of docs) for (const t of new Set([...d.kw, ...d.q, ...d.a])) df.set(t, (df.get(t) ?? 0) + 1);
  const idx = { docs, df, n: articles.length, src: articles };
  cache.set(articles, idx as unknown as Index<KbLike>);
  return idx;
}

/**
 * Score published articles against a free-text question and return the best `limit` above the
 * threshold, best first. Scores are normalised to 0..1 (1 = every query concept in the keywords
 * with phrase matches).
 */
export function matchArticles<T extends KbLike>(query: string, articles: T[], limit = 3, opts: MatchOptions = {}): KbMatch<T>[] {
  const threshold = opts.threshold ?? MATCH_THRESHOLD;
  if (!articles.length) return [];
  const q = [...new Set(terms(query))].slice(0, 24);
  if (!q.length) return [];
  const idx = build(articles);
  const idf = (t: string) => Math.log(1 + idx.n / (idx.df.get(t) ?? 0.5));
  // Unknown words count half in the denominator: they dilute, but a typo does not sink a good match.
  const known = q.filter((t) => idx.df.has(t));
  if (!known.length) return [];
  const qBigrams = bigrams(terms(query));
  const max =
    known.reduce((s, t) => s + idf(t) * W.keywords, 0) +
    (q.length - known.length) * 0.5 * Math.log(1 + idx.n) +
    qBigrams.length * PHRASE_BONUS * W.keywords * 0.5;

  const scored: KbMatch<T>[] = [];
  idx.docs.forEach((d, i) => {
    let s = 0;
    let matched = 0;
    for (const t of known) {
      const w = d.kw.has(t) ? W.keywords : d.q.has(t) ? W.question : d.a.has(t) ? W.answer : 0;
      if (!w) continue;
      matched++;
      // a term found in more than one field earns a little extra
      const extra = (d.kw.has(t) ? 1 : 0) + (d.q.has(t) ? 1 : 0) + (d.a.has(t) ? 1 : 0) - 1;
      s += idf(t) * (w + extra * 0.25);
    }
    if (!matched) return;
    if (qBigrams.length) {
      const inQ = new Set(bigrams(d.qSeq));
      const inK = new Set(d.kwPhrases.flatMap(bigrams));
      for (const b of qBigrams) if (inQ.has(b) || inK.has(b)) s += PHRASE_BONUS * W.keywords * 0.5 * idf(b.split(" ")[1]);
    }
    // Focus: an article about exactly this topic beats one that mentions it among many others.
    const core = new Set([...d.kw, ...d.q]);
    let hits = 0;
    for (const t of known) if (core.has(t)) hits++;
    const base = s / max;
    if (base < threshold) return;
    const raw = base * (1 + FOCUS * (hits / Math.max(1, core.size)));
    scored.push({ article: articles[i], score: Math.round(Math.min(1, raw / (1 + FOCUS)) * 1000) / 1000, raw } as KbMatch<T> & { raw: number });
  });
  return (scored as (KbMatch<T> & { raw: number })[])
    .sort((a, b) => b.raw - a.raw || a.article.slug.localeCompare(b.article.slug))
    .slice(0, limit)
    .map(({ article, score }) => ({ article, score }));
}
