import { listChangelog } from "../entries";
import { SITE_NAME, abs } from "@/lib/seo";

// Reads the same D1 entries as /changelog (edited at /admin/changelog), so the feed follows admin edits.
export const dynamic = "force-dynamic";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
const rfc822 = (iso: string) => new Date(iso + "T12:00:00Z").toUTCString();

export async function GET() {
  const self = abs("/changelog/rss.xml");
  const page = abs("/changelog");
  let log: Awaited<ReturnType<typeof listChangelog>> = [];
  try {
    log = await listChangelog();
  } catch {}
  const items = log
    .map((e) =>
      [
        "<item>",
        "<title>" + esc(e.title) + "</title>",
        "<link>" + esc(page) + "</link>",
        '<guid isPermaLink="false">ingotui-changelog-' + esc(e.id) + "</guid>",
        "<pubDate>" + rfc822(e.date) + "</pubDate>",
        "<description>" + esc("<ul>" + e.items.map((i) => "<li>" + esc(i) + "</li>").join("") + "</ul>") + "</description>",
        "</item>",
      ].join(""),
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${esc(SITE_NAME + " changelog")}</title>
<link>${esc(page)}</link>
<description>Every Ingot UI release: new components, design systems, MCP tools, fixes and site updates.</description>
<language>en</language>
${log[0] ? `<lastBuildDate>${rfc822(log[0].date)}</lastBuildDate>` : ""}
<atom:link href="${esc(self)}" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>
`;
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8", "cache-control": "public, max-age=900, s-maxage=900" } });
}
