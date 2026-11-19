interface CloudflareEnv {
  DB: D1Database;
  KV: KVNamespace;
  ASSETS: Fetcher;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL?: string;
  /** Comma-separated emails that are always admins (bootstraps the first admin). */
  ADMIN_EMAILS?: string;
  /** Lemon Squeezy (set by the owner with `wrangler secret put`). Checkout falls back to a waitlist when missing. */
  LEMONSQUEEZY_API_KEY?: string;
  LEMONSQUEEZY_STORE_ID?: string;
  LEMONSQUEEZY_WEBHOOK_SECRET?: string;
  /** "1" lets test-mode webhook events grant plans (local testing only; never set on the live site). */
  LEMONSQUEEZY_ALLOW_TEST?: string;
  /** Resend API key: lib/mail.ts sends every email through Resend when set. */
  RESEND_API_KEY?: string;
  /** Local testing only: point the revenue sync at a mock API on localhost. Ignored in production. */
  LEMONSQUEEZY_API_BASE?: string;
  /** Cloudflare Email Routing send_email binding, present once the owner enables Email Routing. */
  SUPPORT_MAIL?: { send(message: unknown): Promise<void> };
}
