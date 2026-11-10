import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  cacheComponents: false,
  partialPrefetching: false,
  // Permanent redirects for likely and legacy URL shapes, so links never 404.
  async redirects() {
    return [
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
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
};

export default nextConfig;
initOpenNextCloudflareForDev();
