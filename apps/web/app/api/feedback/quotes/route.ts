import { publicQuotes } from "../store";

/**
 * GET /api/feedback/quotes: the only public read of feedback.
 * Returns quotes whose author ticked consent AND the owner approved. Empty list = keep the ProofStrip hidden.
 * Shape: { quotes: { quote, name, company | null, nps, date "YYYY-MM-DD" }[] }
 */
export async function GET() {
  try {
    const quotes = await publicQuotes(12);
    return Response.json({ quotes }, { headers: { "cache-control": "public, max-age=300, s-maxage=300" } });
  } catch {
    return Response.json({ quotes: [] }, { headers: { "cache-control": "public, max-age=60" } });
  }
}
