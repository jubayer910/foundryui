import type { MetadataRoute } from "next";
import { systems } from "@/lib/catalog";
import { entries } from "@/lib/library";
import { posts as codePosts } from "@/lib/blog";
import { CATALOG_UPDATED, abs, isPart } from "@/lib/seo";
import { HUBS } from "@/lib/hubs";
import { COMPARISONS } from "@/lib/compare";
import { CHANGELOG_UPDATED } from "@/lib/changelog";

/**
 * One sitemap: about 1,900 URLs, far below the 50,000 URL / 50 MB limit per file,
 * so a sitemap index would add a request without helping crawl. Split with
 * generateSitemaps if the library passes ~40,000 URLs.
 * Excluded on purpose: /components (canonical is /), filtered ?q= ?c= ?s= views,
 * account, auth, saved and welcome pages (noindex).
 *
 * Static on purpose (prerendered, served from the static-assets cache): building ~1,900 URLs per request risks
 * the Worker CPU limit. Posts written in the admin are listed in /sitemap-posts.xml (dynamic, small).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = codePosts;
  const lastPost = posts.reduce((d, p) => ((p.updated ?? p.date) > d ? p.updated ?? p.date : d), CATALOG_UPDATED);
  const core: MetadataRoute.Sitemap = [
    { url: abs("/"), lastModified: CATALOG_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: abs("/categories"), lastModified: CATALOG_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: abs("/systems"), lastModified: CATALOG_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: abs("/charts"), lastModified: CATALOG_UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: abs("/icons"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: abs("/mcp"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: abs("/docs"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: abs("/pricing"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: abs("/support"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.5 },
    { url: abs("/about"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.5 },
    { url: abs("/terms"), lastModified: CATALOG_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: abs("/privacy"), lastModified: CATALOG_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: abs("/refund"), lastModified: CATALOG_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: abs("/changelog"), lastModified: CHANGELOG_UPDATED, changeFrequency: "weekly", priority: 0.5 },
    { url: abs("/roadmap"), lastModified: CHANGELOG_UPDATED, changeFrequency: "weekly", priority: 0.5 },
    { url: abs("/for/founders"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: abs("/for/agencies"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: abs("/compare"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: abs("/theme"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: abs("/license"), lastModified: "2026-11-15", changeFrequency: "yearly", priority: 0.5 },
    { url: abs("/accessibility"), lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.4 },
    { url: abs("/blog"), lastModified: lastPost, changeFrequency: "weekly", priority: 0.8 },
  ];
  return [
    ...core,
    ...systems.map((s) => ({ url: abs("/systems/" + s.slug), lastModified: CATALOG_UPDATED, changeFrequency: "weekly" as const, priority: 0.9 })),
    ...posts.map((p) => ({ url: abs("/blog/" + p.slug), lastModified: p.updated ?? p.date, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...COMPARISONS.map((c) => ({ url: abs("/compare/" + c.slug), lastModified: c.checked, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...HUBS.map((h) => ({ url: abs("/categories/" + h.slug), lastModified: CATALOG_UPDATED, changeFrequency: "weekly" as const, priority: 0.8 })),
    // Sub-parts (a modal's header, a table's header row) are noindex, so they stay out.
    ...entries.filter((e) => !isPart(e.name)).map((e) => ({ url: abs("/components/" + e.slug), lastModified: CATALOG_UPDATED, changeFrequency: "monthly" as const, priority: e.kind === "code" || e.qa ? 0.6 : 0.5 })),
  ];
}
