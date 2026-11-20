/**
 * Text normalisation for the help assistant. Pure, no I/O, no LLM.
 *
 *   raw text -> lowercase, fold apostrophes and punctuation
 *            -> fold multi-word phrases into one term ("money back" -> refund, "vs code" -> vscode)
 *            -> tokens, drop stop words
 *            -> typo repair against the known vocabulary (Damerau-Levenshtein, 1 edit for short words, 2 for long)
 *            -> light stemming (shared with the KB matcher)
 *            -> synonym groups map every term to one concept
 */
import { stem } from "../match";
import { STOP_WORDS, SYNONYMS } from "../vocab";

/** Built-in synonym groups (first = concept). vocab.ts SYNONYMS add to these. */
const BASE_SYNONYMS: string[][] = [
  ["refund", "money back", "pay back", "charge back", "chargeback", "reimburse", "reimbursement"],
  ["cancel", "unsubscribe", "terminate", "stop subscription", "stop my subscription"],
  ["invoice", "receipt", "bill", "vat", "tax invoice"],
  ["login", "sign in", "signin", "log in", "logged in", "log on", "password", "locked out"],
  ["signup", "sign up", "create an account", "create account", "register", "registration"],
  ["logout", "log out", "sign out"],
  ["darkmode", "dark mode", "dark theme", "night mode"],
  ["apikey", "api key", "api keys", "access token", "bearer token"],
  ["claude", "claude code", "claude desktop", "anthropic"],
  ["vscode", "vs code", "visual studio code", "copilot", "github copilot"],
  ["cursor", "cursor ide"],
  ["codex", "openai codex"],
  ["mcp", "model context protocol", "mcp server"],
  ["system", "design system", "design systems", "ui kit", "theme pack"],
  ["lifetime", "one time", "one-time", "onetime", "pay once", "for life", "forever", "lifetime deal", "ltd"],
  ["monthly", "per month", "a month", "month"],
  ["yearly", "per year", "a year", "annual", "annually", "year"],
  ["card", "credit card", "debit card"],
  ["shadcn", "shadcn ui"],
  ["tailwind", "tailwind css"],
  ["nextjs", "next js", "next.js"],
  ["deleteaccount", "delete my account", "delete account", "close my account", "close account", "remove my account", "remove account", "gdpr"],
  ["anonymous", "no account", "without an account", "without account", "guest"],
  ["commercial", "client work", "client project", "client projects", "commercial use"],
  ["price", "cost", "pricing", "how much", "expensive", "cheap", "fee", "fees", "usd", "dollar", "dollars"],
  ["pay", "payment", "checkout", "purchase", "paid", "charged", "charge"],
  ["activate", "activation", "activated", "unlock", "unlocked", "access"],
  ["install", "setup", "set up", "installation", "npm", "npx", "cli", "pnpm", "yarn"],
  ["human", "a human", "a person", "real person", "someone", "agent please", "support team", "live chat", "customer service", "operator"],
  ["email", "e-mail", "mail"],
  ["component", "components", "block", "blocks", "element", "elements", "widget", "widgets", "ui component"],
  ["template", "templates", "page template", "screen", "screens", "full page", "layout"],
  ["icon", "icons", "glyph", "glyphs", "svg icon", "pictogram"],
  ["figma", "figma file", "figma kit"],
  ["licence", "license", "licensing", "terms of use"],
  ["discount", "coupon", "promo", "promo code", "voucher", "student discount"],
  ["team", "seats", "seat", "colleagues", "my team"],
  ["bug", "broken", "error", "issue", "problem", "not working", "doesnt work", "does not work", "fails", "crash"],
  ["chart", "graph", "plot"],
  ["kanban", "kanban board", "task board", "trello"],
  ["login form", "sign in form", "signin form", "login page", "sign in page", "auth form", "auth page"],
  ["table", "data table", "datatable", "grid table"],
  ["modal", "dialog", "popup", "pop up"],
  ["sidebar", "side bar", "side nav", "sidenav", "side navigation"],
  ["navbar", "nav bar", "top bar", "topbar", "header bar", "app bar"],
  ["dropdown", "drop down", "dropdown menu"],
  ["kpi", "stat card", "stats card", "metric card", "kpi card"],
  ["pricing table", "pricing card", "pricing cards", "pricing section", "pricing page", "plans table", "price table"],
];

const BASE_STOP =
  "a an the and or but if then so of to in on at by for with from as is are was were be been being am do does did done doing " +
  "i me my mine we us our you your yours it its this that these those there here what which who whom whose when where why how " +
  "can could would should will shall may might must just also very really please there any some " +
  "get got have has had having need needs want wants like about into over out up down off than too not yes ok okay " +
  "ingot ingotui site website thing things way one use using used able possible still yet again let know tell find " +
  "im ive id dont doesnt cant wont isnt whats thats theres";

const STOP = new Set([...BASE_STOP.split(/\s+/), ...STOP_WORDS.map((w) => w.toLowerCase())]);
export const isStop = (w: string) => STOP.has(w);

const slugTerm = (p: string) => p.toLowerCase().replace(/[^a-z0-9]+/g, "");

/** phrase (normalised words joined by space) -> concept, longest first */
const PHRASES: [string, string][] = [];
/** single word -> concept */
const CONCEPT = new Map<string, string>();

function addGroup(g: string[]) {
  const words = g.map((w) => w.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9.\- ]+/g, " ").trim()).filter(Boolean);
  if (!words.length) return;
  const head = slugTerm(words[0]);
  for (const w of words) {
    const clean = w.replace(/[.\-]/g, " ").replace(/\s+/g, " ").trim();
    if (clean.includes(" ")) PHRASES.push([clean, head]);
    else {
      const s = stem(clean);
      if (!CONCEPT.has(clean)) CONCEPT.set(clean, head);
      if (!CONCEPT.has(s)) CONCEPT.set(s, head);
    }
  }
}
for (const g of BASE_SYNONYMS) addGroup(g);
for (const g of SYNONYMS) addGroup(g);
PHRASES.sort((a, b) => b[0].length - a[0].length);
const PHRASE_RE: [RegExp, string][] = PHRASES.map(([p, t]) => [new RegExp("(^| )" + p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?= |$)", "g"), "$1" + t]);

/** Lowercase, drop apostrophes, punctuation to spaces, collapse spaces. Keeps $ and digits. */
export function clean(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’'`]/g, "")
    .replace(/\$(\d)/g, " $$$1")
    .replace(/[^a-z0-9$ ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Fold multi-word phrases into their concept term. */
export function foldPhrases(cleaned: string): string {
  let t = cleaned;
  for (const [re, rep] of PHRASE_RE) t = t.replace(re, rep);
  return t;
}

/* ---------- typo repair ---------- */

/** Optimal string alignment distance (Damerau-Levenshtein with adjacent transpositions), capped. */
export function editDistance(a: string, b: string, max = 2): number {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const n = a.length;
  const m = b.length;
  let prev2 = new Array<number>(m + 1).fill(0);
  let prev = Array.from({ length: m + 1 }, (_, j) => j);
  for (let i = 1; i <= n; i++) {
    const cur = new Array<number>(m + 1);
    cur[0] = i;
    let rowMin = cur[0];
    for (let j = 1; j <= m; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur[j] = v;
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    prev2 = prev;
    prev = cur;
  }
  return prev[m];
}

/** Known words (raw, unstemmed) with a weight (how often they appear). Filled by the engine's indexes. */
export class Vocabulary {
  private words = new Map<string, number>();
  private byLen = new Map<number, string[]>();
  private dirty = true;
  add(text: string, weight = 1) {
    for (const w of clean(text).split(" ")) {
      if (w.length < 3 || /\d/.test(w)) continue;
      this.words.set(w, (this.words.get(w) ?? 0) + weight);
    }
    this.dirty = true;
  }
  has(w: string) {
    return this.words.has(w);
  }
  get size() {
    return this.words.size;
  }
  private index() {
    if (!this.dirty) return;
    this.byLen.clear();
    for (const w of this.words.keys()) {
      const l = this.byLen.get(w.length) ?? [];
      l.push(w);
      this.byLen.set(w.length, l);
    }
    this.dirty = false;
  }
  /** Closest known word for an unknown one, or null. 1 edit up to 6 letters, 2 edits from 7. */
  correct(w: string): string | null {
    if (w.length < 4 || this.words.has(w) || /\d/.test(w)) return null;
    this.index();
    const max = w.length >= 7 ? 2 : 1;
    let best: string | null = null;
    let bestD = max + 1;
    let bestW = -1;
    for (let l = w.length - max; l <= w.length + max; l++) {
      for (const c of this.byLen.get(l) ?? []) {
        // cheap filter: share the first letter or the second (most typos keep one of them)
        if (c[0] !== w[0] && c[1] !== w[1]) continue;
        const d = editDistance(w, c, max);
        if (d > max) continue;
        const weight = this.words.get(c) ?? 0;
        if (d < bestD || (d === bestD && weight > bestW)) {
          best = c;
          bestD = d;
          bestW = weight;
        }
      }
    }
    return best;
  }
}

export type Analysed = {
  /** cleaned text (lowercase, punctuation stripped) */
  clean: string;
  /** cleaned text with typos repaired (still raw words, no stemming) */
  fixed: string;
  /** raw content words after typo repair, stop words removed */
  words: string[];
  /** concept terms in order (phrases folded, stemmed, synonyms mapped) */
  terms: string[];
  /** words that were repaired, for debugging */
  fixes: [string, string][];
};

/** Word -> concept term (stem + synonym). */
export function concept(w: string): string {
  return CONCEPT.get(w) ?? CONCEPT.get(stem(w)) ?? stem(w);
}

/** Full pipeline. Pass a vocabulary to repair typos. */
export function analyse(text: string, vocab?: Vocabulary): Analysed {
  const c = clean(text).slice(0, 400);
  const fixes: [string, string][] = [];
  const fixedWords = c.split(" ").map((w) => {
    if (!vocab || !w || isStop(w)) return w;
    if (vocab.has(w) || CONCEPT.has(w) || CONCEPT.has(stem(w))) return w;
    const r = vocab.correct(w);
    if (r) fixes.push([w, r]);
    return r ?? w;
  });
  const fixed = fixedWords.join(" ");
  const folded = foldPhrases(fixed);
  const terms: string[] = [];
  for (const raw of folded.split(" ")) {
    if (!raw || isStop(raw)) continue;
    if (raw.length < 2 && !/\d/.test(raw)) continue;
    const t = concept(raw);
    if (isStop(t)) continue;
    terms.push(t);
  }
  return { clean: c, fixed, words: fixedWords.filter((w) => w && !isStop(w)), terms, fixes };
}

/** Concept terms of a text without typo repair (for indexing documents). */
export const termsOf = (text: string) => analyse(text).terms;

/** Raw stems without phrase folding or synonyms (a second, literal view of the text). */
export function rawTermsOf(text: string): string[] {
  return clean(text)
    .split(" ")
    .filter((w) => w && !isStop(w) && (w.length > 1 || /\d/.test(w)))
    .map((w) => stem(w));
}
