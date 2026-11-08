interface CloudflareEnv {
  DB: D1Database;
  KV: KVNamespace;
  ASSETS: Fetcher;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL?: string;
}
