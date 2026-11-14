import type { MetadataRoute } from "next";
import { SITE, abs } from "@/lib/seo";

/**
 * Crawl everything public. Private pages carry noindex instead of a Disallow,
 * so crawlers can see the noindex. AI answer engines are allowed on purpose:
 * being cited by them is part of the plan (see /llms.txt).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/library-preview/"] }],
    sitemap: [abs("/sitemap.xml"), abs("/sitemap-posts.xml")],
    host: SITE,
  };
}
