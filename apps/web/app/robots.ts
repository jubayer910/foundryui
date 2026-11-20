import type { MetadataRoute } from "next";
import { SITE, abs } from "@/lib/seo";

/**
 * Crawl everything public. Private pages carry noindex instead of a Disallow,
 * so crawlers can see the noindex. AI answer engines are allowed on purpose:
 * being cited by them is part of the plan (see /llms.txt).
 */
const AI_BOTS = ["OAI-SearchBot", "ChatGPT-User", "GPTBot", "Claude-SearchBot", "Claude-User", "ClaudeBot", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "bingbot", "DuckAssistBot", "meta-externalagent", "MistralAI-User"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/library-preview/"] },
      // Named so the intent is explicit: AI search and assistant crawlers are welcome on every public page.
      { userAgent: AI_BOTS, allow: "/", disallow: ["/api/", "/library-preview/"] },
    ],
    sitemap: [abs("/sitemap.xml"), abs("/sitemap-posts.xml")],
    host: SITE,
  };
}
