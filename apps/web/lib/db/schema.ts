import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, index, primaryKey, uniqueIndex } from "drizzle-orm/sqlite-core";

const ts = (name: string) => integer(name, { mode: "timestamp" });

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("emailVerified", { mode: "boolean" }).notNull().default(false),
  image: text("image"),
  plan: text("plan").notNull().default("free"),
  /** "user" | "moderator" | "admin" | "owner" (see lib/admin.ts Role) */
  role: text("role").notNull().default("user"),
  createdAt: ts("createdAt").notNull(),
  updatedAt: ts("updatedAt").notNull(),
}, (t) => [index("user_role_idx").on(t.role)]);

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

/* ---- Admin team (migrations/0004_staff.sql) ---- */

/** Single-use invite to the admin team. Only the SHA-256 hash of the token is stored; the link is shown once. */
export const staffInvite = sqliteTable(
  "staff_invite",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    /** "moderator" | "admin" */
    role: text("role").notNull(),
    tokenHash: text("tokenHash").notNull().unique(),
    /** email of the staff member who created it */
    invitedBy: text("invitedBy").notNull(),
    expiresAt: ts("expiresAt").notNull(),
    acceptedAt: ts("acceptedAt"),
    revokedAt: ts("revokedAt"),
    createdAt: ts("createdAt").notNull(),
  },
  (t) => [index("staff_invite_email_idx").on(t.email)],
);

/* ---- Content (migrations/0006_content.sql) ---- */

/**
 * Blog post written in the admin editor. `body` is markdown (lib/blog/markdown.ts turns it into the same Block[]
 * the code posts use). JSON columns: faq [{q,a}], related and systems (string arrays).
 */
export const post = sqliteTable(
  "post",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull(),
    metaTitle: text("metaTitle"),
    description: text("description").notNull().default(""),
    /** "Guides" | "Lists" | "Comparisons" | "AI agents" */
    category: text("category").notNull().default("Guides"),
    keyword: text("keyword").notNull().default(""),
    body: text("body").notNull().default(""),
    faq: text("faq").notNull().default("[]"),
    related: text("related").notNull().default("[]"),
    systems: text("systems").notNull().default("[]"),
    /** key of SCENES in components/site/illo; null = picked by category */
    coverScene: text("coverScene"),
    /** "draft" | "published" */
    status: text("status").notNull().default("draft"),
    publishedAt: ts("publishedAt"),
    createdAt: ts("createdAt").notNull(),
    updatedAt: ts("updatedAt").notNull(),
    authorId: text("authorId"),
  },
  (t) => [index("post_status_idx").on(t.status, t.publishedAt)],
);

/** One changelog entry. `date` is "YYYY-MM-DD"; `items` is a JSON string array (one line each). */
export const changelogEntry = sqliteTable(
  "changelog_entry",
  {
    id: text("id").primaryKey(),
    date: text("date").notNull(),
    title: text("title").notNull(),
    items: text("items").notNull().default("[]"),
    scene: text("scene").notNull().default("stack"),
    published: integer("published", { mode: "boolean" }).notNull().default(true),
    createdAt: ts("createdAt").notNull(),
    updatedAt: ts("updatedAt").notNull(),
  },
  (t) => [index("changelog_date_idx").on(t.date)],
);

/* ---- Contra purchase activation (migrations/0010_activation.sql, lib/activation.ts) ---- */

/**
 * A buyer's "I paid on Contra" request. Contra has no API or webhook, so staff approve it in
 * /admin/activations (later, the Contra sale email matcher can too). Approve writes the purchase row.
 */
export const activation = sqliteTable(
  "activation",
  {
    id: text("id").primaryKey(),
    userId: text("userId").notNull(),
    /** the Ingot UI account that gets the plan */
    accountEmail: text("accountEmail").notNull(),
    /** the email used to pay on Contra (defaults to the account email) */
    payerEmail: text("payerEmail").notNull(),
    /** "proMonthly" | "proYearly" | "teamMonthly" | "teamYearly" | "lifetime" */
    option: text("option").notNull(),
    /** key into settings.prices: "lifetimeDeal" | "lifetimeAfter" | "proMonthly" | ... */
    variantKey: text("variantKey").notNull(),
    /** price from the price book when the request was made */
    amountCents: integer("amountCents").notNull().default(0),
    provider: text("provider").notNull().default("contra"),
    /** optional Contra receipt or order number */
    reference: text("reference"),
    /** "pending" | "approved" | "rejected" */
    status: text("status").notNull().default("pending"),
    decidedBy: text("decidedBy"),
    decidedAt: ts("decidedAt"),
    /** rejection reason shown to the buyer */
    note: text("note"),
    /** first and last name as on the Contra receipt (optional; matches sales whose buyer hid their email) */
    contraName: text("contraName"),
    createdAt: ts("createdAt").notNull(),
  },
  (t) => [
    index("activation_status_idx").on(t.status, t.createdAt),
    index("activation_user_idx").on(t.userId),
    uniqueIndex("activation_pending_unique").on(t.userId, t.variantKey).where(sql`status = 'pending'`),
    index("activation_payer_idx").on(t.payerEmail, t.status),
  ],
);

/** Contra OAuth connection (single row, id "default"). Tokens and the client secret are AES-GCM encrypted (lib/contra/crypto.ts). */
export const contraConnection = sqliteTable("contra_connection", {
  id: text("id").primaryKey(),
  clientId: text("clientId").notNull(),
  clientSecret: text("clientSecret"),
  redirectUri: text("redirectUri").notNull(),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  expiresAt: ts("expiresAt"),
  connectedBy: text("connectedBy"),
  connectedAt: ts("connectedAt"),
  lastSyncAt: ts("lastSyncAt"),
  lastError: text("lastError"),
  /** JSON { at, links }: payment links found on Contra (old and new slugs per product), refreshed every 5 minutes */
  linkMap: text("linkMap"),
});

/** One Contra payment-link sale (id = Contra transaction id). See lib/contra/sync.ts. */
export const contraSale = sqliteTable(
  "contra_sale",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    option: text("option").notNull(),
    variantKey: text("variantKey").notNull(),
    amountCents: integer("amountCents").notNull().default(0),
    currency: text("currency").notNull().default("USD"),
    /** YYYY-MM-DD from Contra */
    paidOn: text("paidOn"),
    /** null when the buyer did not share their email with the seller */
    payerEmail: text("payerEmail"),
    firstName: text("firstName"),
    lastName: text("lastName"),
    contraProfileId: text("contraProfileId"),
    invoiceStatus: text("invoiceStatus"),
    /** "unmatched" | "matched" | "ignored" */
    status: text("status").notNull().default("unmatched"),
    userId: text("userId"),
    activationId: text("activationId"),
    /** "email" | "name" | "manual" */
    matchedBy: text("matchedBy"),
    /** why it stayed unmatched (price mismatch, several name matches), or what matching did */
    note: text("note"),
    /** when the "create your account with this email" mail went out (once per sale) */
    invitedAt: ts("invitedAt"),
    createdAt: ts("createdAt").notNull(),
    updatedAt: ts("updatedAt").notNull(),
  },
  (t) => [
    index("contra_sale_status_idx").on(t.status, t.paidOn),
    index("contra_sale_payer_idx").on(t.payerEmail),
    uniqueIndex("contra_sale_activation_unique").on(t.activationId).where(sql`"activationId" IS NOT NULL`),
  ],
);

/* ---- Offer-email opt-outs (migrations/0012_email_optout.sql, lib/emails/welcome.ts) ---- */
export const emailOptout = sqliteTable("email_optout", {
  email: text("email").primaryKey(),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull(),
});
