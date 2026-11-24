import type { MetadataRoute } from "next";
import { SITE, abs } from "@/lib/seo";

/**
 * Crawl everything public. Private pages carry noindex instead of a Disallow,
 * so crawlers can see the noindex. AI answer engines are allowed on purpose:
 * being cited by them is part of the plan (see /llms.txt).
 */
/**
 * Crawl budget: Search Console (2026-11-24) showed Google spending most crawls on URLs that are not pages:
 * per-page share images, the git-ignored /library-code/ files (404 on purpose), /pricing?from=<component>
 * duplicates, login redirects with ?next= and the shadcn registry JSON. Those are kept out so the crawl goes to
 * components, systems and guides. Share images stay open to the link-preview bots, which need them.
 */
const NOT_PAGES = ["/api/", "/blog-db/", "/library-preview/", "/library-code/", "/r/", "/*?from=", "/*?next=", "/*&next=", "/*/opengraph-image", "/*/twitter-image"];
const PREVIEW_BOTS = ["Twitterbot", "facebookexternalhit", "Facebot", "LinkedInBot", "Slackbot", "Slackbot-LinkExpanding", "WhatsApp", "TelegramBot", "Discordbot", "Pinterestbot", "redditbot", "Applebot"];

const AI_BOTS = ["OAI-SearchBot", "ChatGPT-User", "GPTBot", "Claude-SearchBot", "Claude-User", "ClaudeBot", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "bingbot", "DuckAssistBot", "meta-externalagent", "MistralAI-User"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: NOT_PAGES },
      // Named so the intent is explicit: AI search and assistant crawlers are welcome on every public page.
      { userAgent: AI_BOTS, allow: "/", disallow: NOT_PAGES },
      // Link previews (X, Facebook, LinkedIn, Slack, WhatsApp...) fetch the share images.
      { userAgent: PREVIEW_BOTS, allow: "/", disallow: ["/api/", "/library-preview/", "/library-code/"] },
    ],
    sitemap: [abs("/sitemap.xml"), abs("/sitemap-posts.xml")],
    host: SITE,
  };
}
