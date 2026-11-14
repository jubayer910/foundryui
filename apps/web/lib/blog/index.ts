import type { Block, Post } from "./types";
import { fill } from "./stats";
import { plain } from "../seo";
import { entries } from "../library";
import { POSTS as RAW } from "./posts";

export type { Block, Post };
export { CATEGORIES } from "./types";
export const slugify = (s: string) => plain(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const known = new Set(entries.map((e) => e.slug));
/** Drop component slugs that no longer exist so a post never links to a 404. */
const live = (slugs: string[]) => slugs.filter((s) => known.has(s));

/** Fill {stat} placeholders, add h2 anchor ids and drop links to components that no longer exist. */
export function prepare(p: Post): Post {
  const f = (s: string) => fill(s);
  const body: Block[] = p.body.map((b): Block => {
    switch (b.t) {
      case "p": case "takeaway": return { ...b, x: f(b.x) };
      case "h2": return { ...b, x: f(b.x), id: b.id ?? slugify(f(b.x)) };
      case "h3": case "code": return { ...b, x: f(b.x) };
      case "ul": case "ol": return { ...b, items: b.items.map(f) };
      case "table": return { ...b, head: b.head.map(f), rows: b.rows.map((r) => r.map(f)), caption: b.caption && f(b.caption) };
      case "components": return { ...b, slugs: live(b.slugs), caption: b.caption && f(b.caption) };
      case "pack": return { ...b, bestFor: f(b.bestFor), strengths: b.strengths.map(f), examples: live(b.examples) };
      case "cta": return { ...b, h: b.h && f(b.h), x: b.x && f(b.x) };
      default: return b;
    }
  });
  return { ...p, title: f(p.title), metaTitle: p.metaTitle && f(p.metaTitle), description: f(p.description), lede: f(p.lede), body, faq: p.faq.map((q) => ({ q: f(q.q), a: f(q.a) })), related: live(p.related) };
}

export const posts: Post[] = RAW.map(prepare).sort((a, b) => b.date.localeCompare(a.date));
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
/** Slugs taken by code posts. Database posts can't use them. */
export const codeSlugs = new Set(posts.map((p) => p.slug));

const textOf = (b: Block): string => {
  switch (b.t) {
    case "p": case "takeaway": case "h2": case "h3": case "code": return b.x;
    case "ul": case "ol": return b.items.join(" ");
    case "table": return [...b.head, ...b.rows.flat()].join(" ");
    case "pack": return [b.bestFor, ...b.strengths].join(" ");
    default: return "";
  }
};
export const wordCount = (p: Post) => plain([p.lede, ...p.body.map(textOf), ...p.faq.map((q) => q.q + " " + q.a)].join(" ")).split(/\s+/).filter(Boolean).length;
/** Minutes at 230 words a minute, rounded up. */
export const readingTime = (p: Post) => Math.max(1, Math.ceil(wordCount(p) / 230));
export const toc = (p: Post) => p.body.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2").map((h) => ({ id: h.id!, label: h.x }));

/** Same category first, then shared systems, then newest. `pool` defaults to the code posts. */
export function relatedPosts(p: Post, n = 3, pool: Post[] = posts) {
  const score = (o: Post) => (o.category === p.category ? 2 : 0) + o.systems.filter((s) => p.systems.includes(s)).length;
  return pool.filter((o) => o.slug !== p.slug).sort((a, b) => score(b) - score(a) || b.date.localeCompare(a.date)).slice(0, n);
}

/** Posts that mention a component or its system, for component and system pages. */
export const postsFor = ({ slug, system }: { slug?: string; system?: string }, n = 3) =>
  posts.filter((p) => (slug && (p.related.includes(slug) || p.body.some((b) => (b.t === "components" && b.slugs.includes(slug)) || (b.t === "pack" && b.examples.includes(slug))))) || (system && p.systems.includes(system))).slice(0, n);

export const fmtDate = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
