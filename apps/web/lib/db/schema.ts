import { sqliteTable, text, integer, index, primaryKey } from "drizzle-orm/sqlite-core";

const ts = (name: string) => integer(name, { mode: "timestamp" });

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("emailVerified", { mode: "boolean" }).notNull().default(false),
  image: text("image"),
  plan: text("plan").notNull().default("free"),
  /** "user" | "admin" */
  role: text("role").notNull().default("user"),
  createdAt: ts("createdAt").notNull(),
  updatedAt: ts("updatedAt").notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: ts("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: ts("createdAt").notNull(),
  updatedAt: ts("updatedAt").notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: ts("accessTokenExpiresAt"),
  refreshTokenExpiresAt: ts("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: ts("createdAt").notNull(),
  updatedAt: ts("updatedAt").notNull(),
});

export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: ts("expiresAt").notNull(),
  createdAt: ts("createdAt"),
  updatedAt: ts("updatedAt"),
});

export const apiKey = sqliteTable("api_key", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  prefix: text("prefix").notNull(),
  hash: text("hash").notNull().unique(),
  createdAt: ts("createdAt").notNull(),
  lastUsedAt: ts("lastUsedAt"),
});

export const usageEvent = sqliteTable(
  "usage_event",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: text("userId"),
    anonId: text("anonId"),
    action: text("action").notNull(),
    target: text("target").notNull(),
    client: text("client").notNull().default("web"),
    createdAt: ts("createdAt").notNull(),
  },
  (t) => [index("usage_user_idx").on(t.userId), index("usage_anon_idx").on(t.anonId)],
);

export const favorite = sqliteTable(
  "favorite",
  {
    userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
    target: text("target").notNull(),
    createdAt: ts("createdAt").notNull(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.target] })],
);

/* ---- Launch foundation (migrations/0001_launch.sql) ---- */

/** Admin-controlled values (JSON). Read through lib/settings.ts, never directly. */
export const setting = sqliteTable("setting", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedAt: ts("updatedAt").notNull(),
});

/** One row per Lemon Squeezy order (one-time Lifetime purchases and first subscription payments). */
export const purchase = sqliteTable(
  "purchase",
  {
    id: text("id").primaryKey(),
    provider: text("provider").notNull().default("lemonsqueezy"),
    providerOrderId: text("providerOrderId").notNull(),
    userId: text("userId"),
    email: text("email").notNull(),
    /** "pro" | "lifetime" */
    plan: text("plan").notNull(),
    /** "monthly" | "yearly" | "lifetime" | "manual" */
    variant: text("variant"),
    amountCents: integer("amountCents").notNull().default(0),
    currency: text("currency").notNull().default("USD"),
    /** "paid" | "refunded" | "pending" | "granted" | "revoked" */
    status: text("status").notNull(),
    note: text("note"),
    raw: text("raw"),
    createdAt: ts("createdAt").notNull(),
    updatedAt: ts("updatedAt").notNull(),
  },
  (t) => [index("purchase_user_idx").on(t.userId)],
);

export const subscription = sqliteTable(
  "subscription",
  {
    id: text("id").primaryKey(),
    provider: text("provider").notNull().default("lemonsqueezy"),
    providerSubId: text("providerSubId").notNull(),
    userId: text("userId"),
    email: text("email").notNull(),
    plan: text("plan").notNull(),
    /** "monthly" | "yearly" */
    interval: text("interval").notNull(),
    /** Lemon Squeezy status: on_trial | active | paused | past_due | unpaid | cancelled | expired */
    status: text("status").notNull(),
    renewsAt: ts("renewsAt"),
    endsAt: ts("endsAt"),
    portalUrl: text("portalUrl"),
    raw: text("raw"),
    createdAt: ts("createdAt").notNull(),
    updatedAt: ts("updatedAt").notNull(),
  },
  (t) => [index("subscription_user_idx").on(t.userId)],
);

export const ticket = sqliteTable(
  "ticket",
  {
    id: text("id").primaryKey(),
    userId: text("userId"),
    email: text("email").notNull(),
    name: text("name"),
    subject: text("subject").notNull(),
    /** "open" | "answered" | "closed" */
    status: text("status").notNull().default("open"),
    /** "widget" | "form" | "email" */
    source: text("source").notNull().default("form"),
    createdAt: ts("createdAt").notNull(),
    updatedAt: ts("updatedAt").notNull(),
  },
  (t) => [index("ticket_status_idx").on(t.status)],
);

export const ticketMessage = sqliteTable(
  "ticket_message",
  {
    id: text("id").primaryKey(),
    ticketId: text("ticketId").notNull().references(() => ticket.id, { onDelete: "cascade" }),
    /** "customer" | "admin" | "bot" */
    author: text("author").notNull(),
    body: text("body").notNull(),
    createdAt: ts("createdAt").notNull(),
  },
  (t) => [index("ticket_message_ticket_idx").on(t.ticketId)],
);

export const kbArticle = sqliteTable("kb_article", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  /** comma-separated extra match terms and synonyms */
  keywords: text("keywords").notNull().default(""),
  category: text("category").notNull().default("General"),
  published: integer("published", { mode: "boolean" }).notNull().default(true),
  updatedAt: ts("updatedAt").notNull(),
});

export const waitlist = sqliteTable("waitlist", {
  email: text("email").primaryKey(),
  plan: text("plan").notNull(),
  createdAt: ts("createdAt").notNull(),
});

/* ---- First-party analytics (migrations/0003_analytics.sql). Aggregates only, written by app/api/track. ---- */

/** Page views per UTC day ("YYYY-MM-DD") and path. */
export const pageviewDaily = sqliteTable(
  "pageview_daily",
  { day: text("day").notNull(), path: text("path").notNull(), views: integer("views").notNull().default(0) },
  (t) => [primaryKey({ columns: [t.day, t.path] })],
);

/** Page views per UTC day and traffic source (utm_source, else referrer host, else "direct"). */
export const referrerDaily = sqliteTable(
  "referrer_daily",
  { day: text("day").notNull(), source: text("source").notNull(), views: integer("views").notNull().default(0) },
  (t) => [primaryKey({ columns: [t.day, t.source] })],
);

/** Estimated unique visitors per UTC day. A daily-salted hash in KV decides "first visit today"; the hash never reaches D1. */
export const visitorDaily = sqliteTable("visitor_daily", { day: text("day").primaryKey(), visitors: integer("visitors").notNull().default(0) });

export const auditLog = sqliteTable("audit_log", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  actor: text("actor").notNull(),
  action: text("action").notNull(),
  target: text("target"),
  detail: text("detail"),
  createdAt: ts("createdAt").notNull(),
});
