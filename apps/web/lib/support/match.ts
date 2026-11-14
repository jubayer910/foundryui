/** Knowledge-base matcher shared by the support widget (W2) and the admin test box (W3). Pure, no I/O. */
export type KbLike = { id: string; slug: string; question: string; answer: string; keywords: string; category: string };
export type KbMatch<T extends KbLike = KbLike> = { article: T; score: number };

/**
 * Score published articles against a free-text question and return the best `limit` with score > 0, best first.
 * STUB (simple token overlap): W2 replaces it with the real matcher (keyword weights, synonyms, stemming).
 */
export function matchArticles<T extends KbLike>(query: string, articles: T[], limit = 3): KbMatch<T>[] {
  const words = query.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2);
  return articles
    .map((a) => {
      const hay = (a.question + " " + a.keywords + " " + a.answer).toLowerCase();
      return { article: a, score: words.filter((w) => hay.includes(w)).length };
    })
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
