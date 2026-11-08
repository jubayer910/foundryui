import { sqliteTable, text, integer, index, primaryKey } from "drizzle-orm/sqlite-core";

const ts = (name: string) => integer(name, { mode: "timestamp" });

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("emailVerified", { mode: "boolean" }).notNull().default(false),
  image: text("image"),
  plan: text("plan").notNull().default("free"),
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
