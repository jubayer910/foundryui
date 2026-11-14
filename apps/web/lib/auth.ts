import "server-only";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { headers } from "next/headers";
import { getDb, getEnv, schema } from "./db";
import { getEffectivePlan } from "./plans";

export async function getAuth() {
  const env = await getEnv();
  const db = await getDb();
  return betterAuth({
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema: { user: schema.user, session: schema.session, account: schema.account, verification: schema.verification },
    }),
    emailAndPassword: { enabled: true, minPasswordLength: 8 },
    user: { additionalFields: { plan: { type: "string", defaultValue: "free", input: false }, role: { type: "string", defaultValue: "user", input: false } } },
    plugins: [nextCookies()],
  });
}

export type SessionUser = { id: string; name: string; email: string; plan: string; role: string };

export async function getSessionUser(): Promise<SessionUser | null> {
  const auth = await getAuth();
  const s = await auth.api.getSession({ headers: await headers() });
  if (!s) return null;
  const u = s.user as typeof s.user & { plan?: string; role?: string };
  // Team members inherit "team" from their owner's live Team plan (one D1 lookup, free users only).
  const plan = await getEffectivePlan({ id: u.id, plan: u.plan ?? "free" });
  return { id: u.id, name: u.name, email: u.email, plan, role: u.role ?? "user" };
}
