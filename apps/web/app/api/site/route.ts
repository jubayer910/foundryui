import { getPriceBook } from "@/lib/plans";

// Live site-wide values for static pages (announcement bar, deal spots, deal end). Static pages are served from the
// static-assets cache and never revalidate, so anything an admin can change is read here instead.
export const dynamic = "force-dynamic";

export async function GET() {
  const book = await getPriceBook();
  const a = book.settings.announcement;
  const d = book.deal;
  const c = book.settings.signupCard;
  return Response.json(
    {
      signupCard: c.enabled ? { title: c.title, note: c.note, button: c.button || "Sign up", avatars: c.avatars.slice(0, 5) } : null,
      announcement: a.enabled && a.text ? { text: a.text, href: a.href || null } : null,
      // Only while the deal is really on sale (enabled, spots left, before the end date).
      deal: book.dealActive
        ? { price: book.settings.prices.lifetimeDeal, left: d.left, total: d.total, endsAt: d.endsAt, showSpots: d.showSpots, showTimer: d.showTimer }
        : null,
    },
    // Short: a cached response can't outlive the end date by more than this, and the bar re-checks at zero.
    { headers: { "cache-control": "public, max-age=30, s-maxage=30" } },
  );
}
