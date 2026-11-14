import "server-only";
import { eq } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";
import { schema } from "./db";
import { upsertOrder, upsertSubscription, type CheckoutKeys } from "./lemonsqueezy";
import { variantKeyForId } from "./plans";
import type { Settings } from "./settings";

/**
 * Pulls orders, subscriptions and store stats from the Lemon Squeezy API (JSON:API, docs.lemonsqueezy.com/api)
 * and upserts them into purchase / subscription with the same helpers the webhook uses, so a row looks the
 * same whichever path wrote it. Idempotent: rows whose Lemon Squeezy `updated_at` and status are unchanged
 * are skipped without a write, so running it twice in a row writes nothing the second time.
 *
 * Limits: the API allows 300 requests a minute; requests here are sequential with a small gap, 429s are
 * retried after Retry-After, pages are capped, and the run stops at a deadline or a row-write budget
 * (D1 queries per request are limited too). A stopped run is marked `partial`; running it again continues,
 * because already-synced rows are skipped.
 */

type Db = DrizzleD1Database<typeof schema>;
type Attrs = Record<string, unknown>;
type Resource = { type: string; id: string; attributes: Attrs };
type Page = { data?: Resource[] | Resource; meta?: { page?: { lastPage?: number; total?: number }; test_mode?: boolean }; errors?: { detail?: string; title?: string }[] };

export const LS_API = "https://api.lemonsqueezy.com/v1";
/** Setting row that holds the last sync result (not part of Settings, read with getSyncState). */
export const SYNC_KEY = "lsSync";

export type StoreStats = {
  id: string;
  name: string;
  slug: string;
  url: string | null;
  currency: string;
  totalSales: number;
  /** cents, USD (Lemon Squeezy reports store revenue in USD whatever the store currency) */
  totalRevenue: number;
  thirtyDaySales: number;
  thirtyDayRevenue: number;
};

export type SyncState = {
  /** ISO time the run finished */
  at: string;
  ok: boolean;
  /** stopped early (deadline, page cap or write budget); run again to continue */
  partial: boolean;
  error: string | null;
  /** from GET /v1/users/me meta.test_mode: true = the API key is a test-mode key */
  testMode: boolean | null;
  store: StoreStats | null;
  orders: { seen: number; written: number; unchanged: number; unmatched: number; total: number | null };
  subscriptions: { seen: number; written: number; unchanged: number; unmatched: number; total: number | null };
  /** variant IDs seen on orders / subscriptions that are not in Pricing & deal (first few) */
  unmatchedVariants: string[];
  requests: number;
  ms: number;
};

export type SyncOptions = {
  /** API base, for tests against a local mock. Defaults to the real API. */
  base?: string;
  fetch?: typeof fetch;
  /** pages of 100 per resource (default 20 = 2,000 rows) */
  maxPages?: number;
  /** stop starting new requests after this many ms (default 20 s) */
  deadlineMs?: number;
  /** rows written per run (default 150); each write is a handful of D1 queries */
  maxWrites?: number;
  /** min gap between requests in ms (default 220, under 300 a minute) */
  gapMs?: number;
};

const str = (v: unknown) => (v === null || v === undefined ? null : String(v));
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const lsUpdated = (raw: string | null): { updated: string | null; status: string | null } => {
  try {
    const a = (JSON.parse(raw ?? "") as { attributes?: Attrs }).attributes ?? {};
    return { updated: str(a.updated_at), status: str(a.status) };
  } catch {
    return { updated: null, status: null };
  }
};

class Stop extends Error {}

/** Last sync result, or null when the sync has never run. */
export async function getSyncState(db: Db): Promise<SyncState | null> {
  try {
    const [row] = await db.select({ value: schema.setting.value }).from(schema.setting).where(eq(schema.setting.key, SYNC_KEY)).limit(1);
    return row ? (JSON.parse(row.value) as SyncState) : null;
  } catch {
    return null;
  }
}

/** Stored without touching the KV settings cache (KV writes are scarce; nothing reads this through getSettings). */
async function saveSyncState(db: Db, state: SyncState) {
  const now = new Date();
  const value = JSON.stringify(state);
  await db.insert(schema.setting).values({ key: SYNC_KEY, value, updatedAt: now }).onConflictDoUpdate({ target: schema.setting.key, set: { value, updatedAt: now } });
}

export async function runSync(db: Db, settings: Settings, keys: CheckoutKeys, opts: SyncOptions = {}): Promise<SyncState> {
  const t0 = Date.now();
  const base = (opts.base ?? LS_API).replace(/\/+$/, "");
  const doFetch = opts.fetch ?? fetch;
  const maxPages = opts.maxPages ?? 20;
  const deadline = t0 + (opts.deadlineMs ?? 20_000);
  const maxWrites = opts.maxWrites ?? 150;
  const gap = opts.gapMs ?? 220;
  const state: SyncState = {
    at: new Date().toISOString(),
    ok: false,
    partial: false,
    error: null,
    testMode: null,
    store: null,
    orders: { seen: 0, written: 0, unchanged: 0, unmatched: 0, total: null },
    subscriptions: { seen: 0, written: 0, unchanged: 0, unmatched: 0, total: null },
    unmatchedVariants: [],
    requests: 0,
    ms: 0,
  };
  let last = 0;
  let writes = 0;
  const unmatched = new Set<string>();

  /** GET one JSON:API document. Paths are built here, never taken from the response, so the key only goes to `base`. */
  async function get(path: string, params: Record<string, string> = {}): Promise<Page> {
    for (let attempt = 0; attempt < 3; attempt++) {
      if (Date.now() > deadline) throw new Stop("deadline");
      const wait = last + gap - Date.now();
      if (wait > 0) await sleep(wait);
      last = Date.now();
      state.requests++;
      const url = base + path + (Object.keys(params).length ? "?" + new URLSearchParams(params).toString() : "");
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), Math.max(1000, Math.min(10_000, deadline - Date.now())));
      let res: Response;
      try {
        res = await doFetch(url, { headers: { Accept: "application/vnd.api+json", Authorization: "Bearer " + keys.apiKey }, signal: ctl.signal });
      } catch (e) {
        throw new Error(ctl.signal.aborted ? "Lemon Squeezy did not answer in time" : "Could not reach Lemon Squeezy: " + (e instanceof Error ? e.message : String(e)));
      } finally {
        clearTimeout(timer);
      }
      if (res.status === 429) {
        const after = Math.min(30, Number(res.headers.get("retry-after")) || 5) * 1000;
        if (Date.now() + after > deadline) throw new Stop("rate limited");
        await sleep(after);
        continue;
      }
      const json = (await res.json().catch(() => null)) as Page | null;
      if (res.status === 401) throw new Error("Lemon Squeezy rejected the API key (401). Create a new key and run wrangler secret put LEMONSQUEEZY_API_KEY.");
      if (res.status === 404 && path.startsWith("/stores/")) throw new Error(`Store ${keys.storeId} was not found for this API key (404). Check LEMONSQUEEZY_STORE_ID, and that the key and store are both test or both live.`);
      if (!res.ok || !json) throw new Error(`Lemon Squeezy ${path} failed (${res.status}): ${json?.errors?.[0]?.detail ?? json?.errors?.[0]?.title ?? "no body"}`);
      return json;
    }
    throw new Stop("rate limited");
  }

  /** Every page of a list endpoint for this store, page size 100, up to maxPages. */
  async function* list(path: string, setTotal: (n: number | null) => void): AsyncGenerator<Resource> {
    for (let page = 1; page <= maxPages; page++) {
      const doc = await get(path, { "filter[store_id]": String(keys.storeId), "page[number]": String(page), "page[size]": "100" });
      const rows = Array.isArray(doc.data) ? doc.data : [];
      if (page === 1) setTotal(typeof doc.meta?.page?.total === "number" ? doc.meta.page.total : null);
      for (const r of rows) yield r;
      const lastPage = doc.meta?.page?.lastPage ?? page;
      if (page >= lastPage || rows.length === 0) return;
      if (page === maxPages) throw new Stop("page cap");
    }
  }

  try {
    // Key mode (test / live) and store stats.
    const me = await get("/users/me");
    state.testMode = typeof me.meta?.test_mode === "boolean" ? me.meta.test_mode : null;
    const st = await get("/stores/" + encodeURIComponent(String(keys.storeId)));
    const s = (!Array.isArray(st.data) ? st.data : null) ?? null;
    if (s) {
      const a = s.attributes;
      state.store = {
        id: String(s.id),
        name: str(a.name) ?? "",
        slug: str(a.slug) ?? "",
        url: str(a.url),
        currency: str(a.currency) ?? "USD",
        totalSales: Number(a.total_sales) || 0,
        totalRevenue: Number(a.total_revenue) || 0,
        thirtyDaySales: Number(a.thirty_day_sales) || 0,
        thirtyDayRevenue: Number(a.thirty_day_revenue) || 0,
      };
    }

    // What we already hold: skip unchanged rows, and keep the user a webhook matched by custom user_id
    // (the API's order object has no custom data, so the sync can only match by email).
    const [pRows, sRows] = await Promise.all([
      db.select({ id: schema.purchase.providerOrderId, userId: schema.purchase.userId, raw: schema.purchase.raw }).from(schema.purchase).where(eq(schema.purchase.provider, "lemonsqueezy")),
      db.select({ id: schema.subscription.providerSubId, userId: schema.subscription.userId, raw: schema.subscription.raw }).from(schema.subscription).where(eq(schema.subscription.provider, "lemonsqueezy")),
    ]);
    const havePurchase = new Map(pRows.map((r) => [r.id, { userId: r.userId, ...lsUpdated(r.raw) }]));
    const haveSub = new Map(sRows.map((r) => [r.id, { userId: r.userId, ...lsUpdated(r.raw) }]));

    for await (const o of list("/orders", (n) => (state.orders.total = n))) {
      state.orders.seen++;
      const a = o.attributes;
      const item = (a.first_order_item ?? {}) as Attrs;
      if (!variantKeyForId(settings, str(item.variant_id))) {
        state.orders.unmatched++;
        unmatched.add(String(item.variant_id ?? "none"));
        continue;
      }
      const prev = havePurchase.get(String(o.id));
      if (prev && prev.updated && prev.updated === str(a.updated_at) && prev.status === str(a.status)) {
        state.orders.unchanged++;
        continue;
      }
      if (writes >= maxWrites) throw new Stop("write budget");
      await upsertOrder(db, settings, { orderId: String(o.id), attrs: a, customUserId: prev?.userId, testMode: a.test_mode === true, origin: { source: "sync" } });
      writes++;
      state.orders.written++;
    }

    for await (const sub of list("/subscriptions", (n) => (state.subscriptions.total = n))) {
      state.subscriptions.seen++;
      const a = sub.attributes;
      if (!variantKeyForId(settings, str(a.variant_id))) {
        // Same rule as the webhook would apply: still stored (interval from the variant name), but flagged.
        state.subscriptions.unmatched++;
        unmatched.add(String(a.variant_id ?? "none"));
      }
      const prev = haveSub.get(String(sub.id));
      if (prev && prev.updated && prev.updated === str(a.updated_at) && prev.status === str(a.status)) {
        state.subscriptions.unchanged++;
        continue;
      }
      if (writes >= maxWrites) throw new Stop("write budget");
      await upsertSubscription(db, settings, { subId: String(sub.id), attrs: a, customUserId: prev?.userId, testMode: a.test_mode === true, origin: { source: "sync" } });
      writes++;
      state.subscriptions.written++;
    }
    state.ok = true;
  } catch (e) {
    if (e instanceof Stop) {
      state.ok = true;
      state.partial = true;
      state.error = e.message === "write budget" ? `Stopped after ${maxWrites} changed rows. Run Sync again to continue.` : e.message === "page cap" ? `Stopped at ${maxPages} pages. Run Sync again to continue.` : `Stopped early (${e.message}). Run Sync again to continue.`;
    } else {
      state.ok = false;
      state.error = e instanceof Error ? e.message : String(e);
    }
  }
  state.unmatchedVariants = [...unmatched].slice(0, 6);
  state.ms = Date.now() - t0;
  state.at = new Date().toISOString();
  await saveSyncState(db, state);
  await db.insert(schema.auditLog).values({
    actor: "lemonsqueezy",
    action: "sync",
    target: keys.storeId,
    detail: JSON.stringify({ ok: state.ok, partial: state.partial, error: state.error, orders: state.orders, subscriptions: state.subscriptions, testMode: state.testMode, requests: state.requests, ms: state.ms }),
    createdAt: new Date(),
  });
  return state;
}

/** Optional API base override for local testing only; ignored in production builds. */
export function syncBase(env: CloudflareEnv): string | undefined {
  if (process.env.NODE_ENV === "production") return undefined;
  const b = env.LEMONSQUEEZY_API_BASE?.trim();
  return b && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/.test(b) ? b : undefined;
}
