import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { desc, eq, sql } from "drizzle-orm";
import { getSessionUser } from "@/lib/auth";
import { getDb, schema } from "@/lib/db";
import { ApiKeys } from "@/components/site/api-keys";
import { SignOut } from "@/components/site/sign-out";

export const metadata: Metadata = { title: "Account" };

export default async function AccountPage() {
  const user = await getSessionUser();
  if (!user) redirect("/sign-in?next=/account");
  const db = await getDb();
  const keys = await db
    .select({ id: schema.apiKey.id, name: schema.apiKey.name, prefix: schema.apiKey.prefix, createdAt: schema.apiKey.createdAt, lastUsedAt: schema.apiKey.lastUsedAt })
    .from(schema.apiKey)
    .where(eq(schema.apiKey.userId, user.id))
    .orderBy(desc(schema.apiKey.createdAt));
  const usage = await db
    .select({ action: schema.usageEvent.action, client: schema.usageEvent.client, n: sql<number>`count(*)` })
    .from(schema.usageEvent)
    .where(eq(schema.usageEvent.userId, user.id))
    .groupBy(schema.usageEvent.action, schema.usageEvent.client);
  const total = usage.reduce((s, u) => s + Number(u.n), 0);
  const mcp = usage.filter((u) => u.client === "mcp").reduce((s, u) => s + Number(u.n), 0);
  return (
    <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-medium tracking-[-0.03em] text-fu-ink">Account</h1>
          <p className="mt-1 text-sm text-fu-muted">{user.email}</p>
        </div>
        <SignOut />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["Plan", user.plan === "free" ? "Free" : user.plan[0].toUpperCase() + user.plan.slice(1)],
          ["Copies & downloads", String(total - mcp)],
          ["MCP calls", String(mcp)],
        ].map(([k, v]) => (
          <div key={k} className="rounded-fu-lg border border-fu-line bg-fu-surface p-4">
            <p className="text-[13px] text-fu-muted">{k}</p>
            <p className="mt-1 text-2xl font-medium tracking-[-0.02em] tabular-nums text-fu-ink">{v}</p>
          </div>
        ))}
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-fu-ink">API keys</h2>
        <p className="mt-1 text-[13px] text-fu-muted">Use a key to connect the MCP server or the CLI. Keys are shown once and stored hashed.</p>
        <ApiKeys initial={keys.map((k) => ({ ...k, createdAt: k.createdAt.toISOString(), lastUsedAt: k.lastUsedAt?.toISOString() ?? null }))} />
      </section>
    </div>
  );
}
