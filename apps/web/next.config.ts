import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Slugs of the code posts in lib/blog/posts (read from the files, since file names and slugs differ).
 * /blog/<code slug> is the prerendered app/blog/[slug] route; every other /blog/<slug> is rewritten to
 * app/blog-db/[slug], which renders database posts per request and 404s unknown slugs.
 */
function codePostSlugs(): string[] {
  const dir = join(process.cwd(), "lib/blog/posts");
  const files = readdirSync(dir).filter((f) => f.endsWith(".ts") && f !== "index.ts");
  const slugs = files.map((f) => readFileSync(join(dir, f), "utf8").match(/^ {2}slug: "([a-z0-9-]+)",?$/m)?.[1]);
  if (slugs.some((s) => !s)) throw new Error("next.config: a lib/blog/posts file has no `slug: \"...\"` line");
  return slugs as string[];
}
// One path segment that is not a code post (or the /blog share image): a database post, or a 404.
const DB_SLUG = `(?!(?:${[...codePostSlugs(), "opengraph-image", "twitter-image"].join("|")})$)[a-z0-9-]{1,100}`;

const nextConfig: NextConfig = {
  cacheComponents: false,
  partialPrefetching: false,
  // Permanent redirects for likely and legacy URL shapes, so links never 404.
  async redirects() {
    return [
      // One canonical host: www and the old workers.dev URL go to https://ingotui.com, path kept.
      { source: "/:path*", has: [{ type: "host", value: "www.ingotui.com" }], destination: "https://ingotui.com/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "foundry-ui.mitaly-website.workers.dev" }], destination: "https://ingotui.com/:path*", permanent: true },
      { source: "/new", destination: "/categories/auth-and-payments", permanent: false },
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/blogs/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/resources", destination: "/blog", permanent: true },
      { source: "/resources/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/component/:slug", destination: "/components/:slug", permanent: true },
      { source: "/system/:slug", destination: "/systems/:slug", permanent: true },
      { source: "/cli", destination: "/mcp#cli", permanent: true },
      { source: "/llm.txt", destination: "/llms.txt", permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      // afterFiles, not fallback: OpenNext turns an unbuilt path of a dynamicParams = false route into /404 before
      // fallback rewrites run.
      afterFiles: [
        { source: `/blog/:slug(${DB_SLUG})`, destination: "/blog-db/:slug" },
        { source: `/blog/:slug(${DB_SLUG})/opengraph-image`, destination: "/blog-db/:slug/og" },
      ],
      fallback: [],
    };
  },
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
};

export default nextConfig;
initOpenNextCloudflareForDev();
