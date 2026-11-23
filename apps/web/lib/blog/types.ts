/** Blog content model. Copy uses a tiny inline markup: [text](href), **bold**, `code`, and {stat} placeholders filled from the live catalogue. */
export type Block =
  | { t: "p"; x: string }
  | { t: "h2"; x: string; id?: string }
  | { t: "h3"; x: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "takeaway"; x: string }
  | { t: "table"; head: string[]; rows: string[][]; caption?: string }
  | { t: "code"; x: string; label?: string }
  | { t: "components"; slugs: string[]; caption?: string }
  | { t: "pack"; system: string; rank: number; bestFor: string; strengths: string[]; examples: string[] }
  /** one system's full dashboard screenshot, linked to its page */
  | { t: "shot"; system: string; caption?: string }
  /** a grid of system cards (screenshot, fit, counts), linked to their pages */
  | { t: "systems"; slugs: string[]; caption?: string }
  /** one ranked component in a "best examples" list: a large preview, why it works and when to use it */
  | { t: "pick"; slug: string; rank: number; title: string; why: string[]; use: string }
  | { t: "cta"; h?: string; x?: string; href?: string; label?: string };

export type Post = {
  slug: string;
  title: string;
  /** search-intent title for <title>, defaults to title */
  metaTitle?: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  updated?: string;
  category: "Guides" | "Lists" | "Comparisons" | "AI agents";
  /** primary keyword and search intent, kept for the SEO plan */
  keyword: string;
  intent: "informational" | "commercial" | "transactional";
  /** the answer-first opening paragraph */
  lede: string;
  body: Block[];
  faq: { q: string; a: string }[];
  /** component slugs shown as "Components in this guide" */
  related: string[];
  systems: string[];
  /** cover scene (key of SCENES in components/site/illo); unset = POST_SCENE[slug], then by category */
  cover?: string;
  /** "db" for posts written in the admin editor (D1), unset for code posts in lib/blog/posts */
  source?: "code" | "db";
  /** set on database posts that are not published (only shown to staff with ?preview=1) */
  draft?: boolean;
};

export const CATEGORIES = ["Guides", "Lists", "Comparisons", "AI agents"] as const satisfies readonly Post["category"][];
