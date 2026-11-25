import "server-only";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";
import { getDb, getEnv, schema } from "./db";
import { getEffectivePlan } from "./plans";

async function contraMatch(email: string) {
  try {
    const { matchForEmail } = await import("./contra/sync");
    await matchForEmail(email);
  } catch {}
}

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
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 8,
      // Forgot password (/forgot-password → email → /reset-password). One-hour link; a reset signs out every other device.
      resetPasswordTokenExpiresIn: 3600,
      revokeSessionsOnPasswordReset: true,
      sendResetPassword: async ({ user, url }) => {
        const { sendResetPasswordEmail } = await import("./emails/reset-password");
        await sendResetPasswordEmail(user, url);
      },
    },
    user: { additionalFields: { plan: { type: "string", defaultValue: "free", input: false }, role: { type: "string", defaultValue: "user", input: false } } },
    plugins: [nextCookies()],
    // Contra sales paid with this email switch the plan on as soon as the buyer signs up or signs in
    // (lib/contra/sync.ts matchForEmail: local D1 only, never throws, never blocks the sign-up).
    databaseHooks: {
      // new account: match a Contra sale, then the welcome email (never blocks or fails the sign-up)
      user: {
        create: {
          after: async (u) => {
            await creditRef(u.id);
            await contraMatch(u.email);
            try { const { sendWelcome } = await import("./emails/welcome"); await sendWelcome(u); } catch {}
          },
        },
      },
      session: {
        create: {
          after: async (s) => {
            const [u] = await db.select({ email: schema.user.email }).from(schema.user).where(eq(schema.user.id, s.userId)).limit(1);
            if (u) await contraMatch(u.email);
          },
        },
      },
    },
  });
}

/** Credit the new account to the referral link in the ingot_ref cookie, if any (lib/ref.ts). Never throws. */
async function creditRef(userId: string) {
  try {
    const { cookies } = await import("next/headers");
    const { REF_COOKIE, cleanRef } = await import("./ref");
    const ref = cleanRef((await cookies()).get(REF_COOKIE)?.value);
    if (!ref) return;
    const db = await getDb();
    await db.update(schema.user).set({ ref }).where(eq(schema.user.id, userId));
  } catch {}
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
