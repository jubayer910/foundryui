import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every public page is prerendered at build time. Serve those pages straight from Workers static assets
// instead of re-rendering them on each request (re-rendering hit the Worker CPU limit and returned 5xx to Google).
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
