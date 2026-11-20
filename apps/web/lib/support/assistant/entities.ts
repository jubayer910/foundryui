/**
 * Entity extraction: design systems, component kinds, AI clients, plans, filters and dialogue moves.
 * Works on the cleaned, typo-repaired text and the concept terms. Pure.
 */
import { SYSTEM_NAMES, UI_NOUNS, categoryOf } from "./catalog";
import { editDistance, isStop, type Analysed } from "./text";
import type { Entities } from "./types";

export type Extracted = Entities & {
  /** content words left after removing cue words and entity words: the subject of a search */
  subject: string[];
  uiNoun: boolean;
  icon: boolean;
  /** how-to or yes/no question shape ("how do i", "can i", "why") */
  question: boolean;
  /** "do you have", "show me", "find", "looking for" */
  lookup: boolean;
  /** "install", "add to my project", "npx" */
  installCue: boolean;
  /** "my plan", "am i", "my usage" */
  selfCue: boolean;
  price?: number;
};

const CLIENTS: [RegExp, Entities["client"]][] = [
  [/\b(claude|claude code|claude desktop|anthropic)\b/, "claude"],
  [/\bcursor\b/, "cursor"],
  [/\b(vscode|vs code|visual studio|copilot|github copilot)\b/, "vscode"],
  [/\bcodex\b/, "codex"],
];

const AMBIGUOUS = new Set(["switch", "toggle", "select", "input", "list", "filter", "filters", "map", "feed", "progress", "state", "editor", "settings", "board", "screen", "layout", "chat", "tab", "bar", "row", "field", "palette", "legend", "page"]);

const SEARCH_CUES = new Set(
  "do you have got any show me find search looking look for need want get see browse list give is there are there exist exists available offer component components ui library kit please one ones some".split(
    " ",
  ),
);
const FILTER_WORDS = new Set("only just free pro paid code react figma ones one in from for the a an of with without system design both all which that those these".split(" "));

export function extract(a: Analysed): Extracted {
  const t = " " + a.fixed + " ";
  const e: Extracted = { subject: [], uiNoun: false, icon: false, question: false, lookup: false, installCue: false, selfCue: false };

  // design system by name (one edit allowed for names of 5+ letters)
  const words = a.fixed.split(" ").filter(Boolean);
  for (const s of SYSTEM_NAMES) {
    const n = s.name.toLowerCase();
    if (words.some((w) => w === n || w === s.slug || (n.length >= 5 && w.length >= 5 && w[0] === n[0] && editDistance(w, n, 1) <= 1))) {
      e.system = s.slug;
      break;
    }
  }
  for (const [re, id] of CLIENTS)
    if (re.test(t)) {
      e.client = id;
      break;
    }

  if (/\blifetime|one time|onetime|pay once\b/.test(t)) e.plan = "lifetime";
  else if (/\bteam (plan|seats?)|\bteam\b/.test(t)) e.plan = "team";
  else if (/\bpro\b/.test(t)) e.plan = "pro";
  else if (/\bfree plan\b/.test(t)) e.plan = "free";

  if (/\b(only|just)? ?(the )?free( ones?| only| components?)?\b/.test(t) && !/\bfree plan|for free\b/.test(t)) e.free = true;
  if (/\b(code|react|coded|jsx|tsx)( ones?| only| components?)?\b/.test(t) && !/\b(install|npx|cli)\b/.test(t)) e.codeOnly = true;
  if (/\bfigma (only|ones?)\b|\bonly figma\b/.test(t)) e.figmaOnly = true;
  const price = t.match(/\$\s?(\d+(?:\.\d+)?)/);
  if (price) e.price = Number(price[1]);

  e.icon = a.terms.includes("icon");
  e.question = /^(how|why|can|could|does|do i|is it|are|what happens|when|where|should|will|would)\b/.test(a.fixed) && !/^(do you have|is there|are there)\b/.test(a.fixed);
  e.lookup = /\b(do you have|have you got|got any|show me|find|search|looking for|look for|i need|need a|need an|want a|want an|is there|are there|any)\b/.test(t) || /\bshow\b(?! up)/.test(t);
  e.installCue = /\b(install|installing|npx|npm|cli|add it to|add to my|into my project|in my project|import)\b/.test(t);
  // first-person status questions only ("what plan am I on", "my usage"), not "delete my account"
  e.selfCue =
    (/\b(what|which|check|show|see|whats)\b.*\bmy (plan|account|usage|limits?|quota|keys?|api key|status)\b/.test(t) ||
      /\bam i (on|signed|logged|a pro|pro|paid|free)\b/.test(t) ||
      /\b(have i|did i) (used|use|made|copied)\b/.test(t) ||
      /\bdo i have (an? |any )?(api )?keys?\b/.test(t) ||
      /^(my )?(plan|account|usage|limits|quota|status|api key)( status| today)?$/.test(a.fixed) ||
      /^my (plan|account|usage|limits?|api key|keys?)\b/.test(a.fixed)) &&
    !/\b(delete|close|remove|cancel|change|reset|transfer|merge|rename|lost|forgot|revoke|share|bought|paid|purchased|charged|payment|refund|still)\b/.test(t);

  // component kind
  // words that are also everyday verbs or nouns ("switch to lifetime", "list all systems") need a lookup cue
  e.uiNoun = a.terms.some((x) => x !== "component" && UI_NOUNS.has(x) && (!AMBIGUOUS.has(x) || e.lookup)) || (a.terms.includes("component") && e.lookup);
  e.category = categoryOf(a.terms);

  // subject: raw content words minus cues, entity words and filter words
  const sysWords = new Set(SYSTEM_NAMES.flatMap((s) => [s.slug, s.name.toLowerCase()]));
  e.subject = a.words.filter((w) => !SEARCH_CUES.has(w) && !FILTER_WORDS.has(w) && !sysWords.has(w) && !isStop(w) && !(e.system && editDistance(w, e.system, 1) <= 1));
  if (e.subject.length) e.query = e.subject.join(" ");
  return e;
}

/* ---------- dialogue moves ---------- */

export const isAffirm = (c: string) => /^(yes|yeah|yep|yup|ya|sure|ok|okay|please|please do|yes please|do it|go ahead|sounds good|correct|right|y|that one|definitely|absolutely)( please| thanks| thank you)?$/.test(c);
export const isDeny = (c: string) => /^(no|nope|nah|not really|no thanks|no thank you|n|wrong|not that|thats not it|that is not it|neither|none of these|none)$/.test(c);
export const isMore = (c: string) => /^(show |give |load )?(me )?(some )?(more|next|next page|next ones|others|other ones|more please|more of them|anything else|what else)( please| ones| results)?$/.test(c);
export const isGreeting = (c: string) => /^(hi|hello|hey|hiya|howdy|yo|good (morning|afternoon|evening)|hey there|hello there|hi there)( team| there| ingot| ingot ui)?$/.test(c);
export const isThanks = (c: string) => /^(thanks|thank you|thx|ty|cheers|thanks a lot|thank you so much|great thanks|perfect|awesome|great|cool|nice|got it|perfect thanks|that helped|that helps|helpful)( thanks| thank you)?$/.test(c);
export const isBye = (c: string) => /^(bye|goodbye|see you|see ya|thats all|that is all|nothing else|im done|all good|no more questions)$/.test(c);

/** A short follow-up made only of refinements ("only Loopo", "what about Cursor?", "free ones"). */
export function isRefinement(a: Analysed, e: Extracted): boolean {
  const words = a.clean.split(" ").filter(Boolean);
  if (words.length > 7) return false;
  const hasEntity = !!(e.system || e.client || e.free || e.codeOnly || e.figmaOnly || e.plan);
  if (!hasEntity) return false;
  const filler = new Set(
    "what about how about and also only just in for from the a an of with ones one those these them show me please instead then ok okay so but same thing it what if is there do you have any system design".split(" "),
  );
  const ent = new Set(["free", "pro", "code", "react", "figma", "lifetime", "team", "claude", "cursor", "vscode", "vs", "codex", "copilot", "visual", "studio", "desktop"]);
  return words.every((w) => filler.has(w) || ent.has(w) || (e.system && (w === e.system || editDistance(w, e.system, 1) <= 1)) || SYSTEM_NAMES.some((s) => s.name.toLowerCase() === w));
}
