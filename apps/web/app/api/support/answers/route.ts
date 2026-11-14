import { getPublishedArticles } from "@/lib/support/kb";
import { matchArticles } from "@/lib/support/match";

/** GET /api/support/answers?q=... → the best 1–3 published KB answers for a question (our matcher, no LLM). */
export async function GET(req: Request) {
  const q = (new URL(req.url).searchParams.get("q") ?? "").slice(0, 300).trim();
  const limit = Math.min(5, Math.max(1, Number(new URL(req.url).searchParams.get("limit")) || 3));
  if (q.length < 2) return Response.json({ q, answers: [] });
  const articles = await getPublishedArticles();
  const answers = matchArticles(q, articles, limit).map(({ article: a, score }) => ({ slug: a.slug, question: a.question, answer: a.answer, category: a.category, score }));
  return Response.json({ q, answers }, { headers: { "Cache-Control": "public, max-age=60" } });
}
