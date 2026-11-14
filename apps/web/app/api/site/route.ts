import { getPriceBook } from "@/lib/plans";

// Live site-wide values for static pages (announcement bar, deal spots). Static pages are served from the
// static-assets cache and never revalidate, so anything an admin can change is read here instead.
export const dynamic = "force-dynamic";

export async function GET() {
  const book = await getPriceBook();
  const a = book.settings.announcement;
  return Response.json(
    {
      announcement: a.enabled && a.text ? { text: a.text, href: a.href || null } : null,
      deal: book.dealActive ? { price: book.settings.prices.lifetimeDeal, left: book.deal.left, total: book.deal.total } : null,
    },
    { headers: { "cache-control": "public, max-age=60, s-maxage=60" } },
  );
}
