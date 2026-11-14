import { RELEASES, versionId } from "@/lib/changelog";
import { SITE_NAME, abs } from "@/lib/seo";

// Built once at deploy from lib/changelog.ts; a new release ships with a new build.
export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
const rfc822 = (iso: string) => new Date(iso + "T12:00:00Z").toUTCString();
const LABEL = { new: "New", improved: "Improved", fixed: "Fixed" } as const;

export function GET() {
  const self = abs("/changelog/rss.xml");
  const page = abs("/changelog");
  const items = RELEASES.map((r) => {
    const link = page + "#" + versionId(r.version);
    const html =
      "<p>" + esc(r.summary) + "</p><ul>" +
      r.items.map((i) => "<li><strong>" + LABEL[i.type] + ":</strong> " + esc(i.text) + (i.components?.length ? " (" + i.components.map((s) => '<a href="' + abs("/components/" + s) + '">' + esc(s) + "</a>").join(", ") + ")" : "") + "</li>").join("") +
      "</ul>";
    return [
      "<item>",
      "<title>" + esc("v" + r.version + ": " + r.title) + "</title>",
      "<link>" + esc(link) + "</link>",
      '<guid isPermaLink="false">ingotui-release-' + r.version + "</guid>",
      "<pubDate>" + rfc822(r.date) + "</pubDate>",
      "<description>" + esc(html) + "</description>",
      "</item>",
    ].join("");
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${esc(SITE_NAME + " changelog")}</title>
<link>${esc(page)}</link>
<description>Every Ingot UI release: new components, design systems, MCP tools, fixes and site updates.</description>
<language>en</language>
<lastBuildDate>${rfc822(RELEASES[0].date)}</lastBuildDate>
<atom:link href="${esc(self)}" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>
`;
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
