/**
 * Knowledge-base retrieval for the assistant: BM25F over published articles (keywords and question weigh most),
 * blended with the existing concept matcher (lib/support/match.ts) as a second opinion and a fallback. Pure.
 */
import { matchArticles, type KbLike } from "../match";
import { Bm25 } from "./bm25";
import { Vocabulary, rawTermsOf } from "./text";

export type KbResult<T extends KbLike = KbLike> = { article: T; confidence: number };

export class KbIndex<T extends KbLike = KbLike> {
  readonly articles: T[];
  private bm: Bm25;
  /** same fields on raw stems (no synonym folding), so "vite" and "vue" or "cursor" and "codex" stay apart */
  private raw: Bm25;
  readonly bySlug: Map<string, T>;

  constructor(articles: T[]) {
    this.articles = articles;
    this.bySlug = new Map(articles.map((a) => [a.slug, a]));
    const fields = (a: T) => [
      { text: a.question, weight: 3, core: true },
      { text: a.keywords.replace(/,/g, " . "), weight: 2.5, core: true },
      { text: a.answer, weight: 1 },
    ];
    this.raw = new Bm25(articles.map(fields), rawTermsOf);
    this.bm = new Bm25(
      articles.map((a) => [
        { text: a.question, weight: 3, core: true },
        { text: a.keywords.replace(/,/g, " . "), weight: 2.5, core: true },
        { text: a.answer, weight: 1 },
        { text: a.category, weight: 0.5 },
      ]),
    );
  }

  /** Feed the article words to a typo-repair vocabulary. */
  addTo(v: Vocabulary) {
    for (const a of this.articles) {
      v.add(a.question, 3);
      v.add(a.keywords, 3);
      v.add(a.answer, 1);
    }
  }

  /**
   * Best articles for a question. `terms` are the analysed concept terms; `text` the repaired raw text for the
   * matcher. confidence (0..1) mixes how much of the question the article covers, how focused the article is on
   * it, and the matcher's normalised score.
   */
  search(terms: string[], text: string, limit = 3, filter?: (a: T) => boolean): KbResult<T>[] {
    if (!this.articles.length) return [];
    const pool = filter ? this.articles.filter(filter) : this.articles;
    const ok = filter ? new Set(pool) : null;
    const hits = this.bm.search(terms, 12, ok ? (i) => ok.has(this.articles[i]) : undefined, 0.9);
    const matched = matchArticles(text, pool, 6, { threshold: 0.12 });
    const mScore = new Map(matched.map((m) => [m.article.slug, m.score]));
    const top = hits[0]?.score ?? 1;
    const rawHits = this.raw.search(rawTermsOf(text), 12, ok ? (i) => ok.has(this.articles[i]) : undefined, 0.9);
    const rawTop = rawHits[0]?.score ?? 1;
    const rawScore = new Map(rawHits.map((h) => [this.articles[h.i].slug, h.score / rawTop]));
    const out = new Map<string, { article: T; rank: number; confidence: number }>();
    for (const h of hits) {
      const a = this.articles[h.i];
      const m = mScore.get(a.slug) ?? 0;
      const confidence = Math.min(1, 0.55 * h.coverage + 0.15 * Math.min(1, h.focus * 2) + 0.3 * m);
      const rank = 0.4 * (h.score / top) + 0.3 * h.coverage + 0.15 * m + 0.25 * (rawScore.get(a.slug) ?? 0);
      out.set(a.slug, { article: a, rank, confidence });
    }
    for (const m of matched) {
      if (out.has(m.article.slug)) continue;
      out.set(m.article.slug, { article: m.article, rank: 0.2 * m.score + 0.1, confidence: 0.6 * m.score });
    }
    return [...out.values()]
      .sort((a, b) => b.rank - a.rank || a.article.slug.localeCompare(b.article.slug))
      .slice(0, limit)
      .map(({ article, confidence }) => ({ article, confidence: Math.round(confidence * 1000) / 1000 }));
  }
}
