import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { desc, eq, sql } from "drizzle-orm";
import { getSessionUser } from "@/lib/auth";
import { getDb, schema } from "@/lib/db";
import { ApiKeys } from "@/components/site/api-keys";
import { SignOut } from "@/components/site/sign-out";
import { PageHead } from "@/components/site/page-head";
import Link from "next/link";

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
    <div className="max-w-4xl">
      <PageHead title="Account" sub={user.email}>
        <SignOut />
      </PageHead>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Plan", user.plan === "free" ? "Free" : user.plan[0].toUpperCase() + user.plan.slice(1)],
          ["Copies & downloads", String(total - mcp)],
          ["MCP calls", String(mcp)],
        ].map(([k, v]) => (
          <div key={k} className="card p-4">
            <p className="text-[13px] text-mute">{k}</p>
            <p className="mt-1 text-[22px] font-medium tracking-[-0.02em] tabular-nums">{v}</p>
          </div>
        ))}
      </div>
      {user.plan === "free" && (
        <div className="mt-3 flex flex-wrap items-center gap-3 rounded-[8px] bg-tile p-4">
          <p className="text-[13px]">
            <span className="font-medium">You’re on Free.</span> <span className="text-mute">Pro unlocks all six systems and every component in code and Figma.</span>
          </p>
          <Link href="/pricing" className="btn-ink ml-auto">See plans</Link>
        </div>
      )}
      <section className="mt-10">
        <h2 className="text-[13px] font-medium">API keys</h2>
        <p className="mt-1 text-[13px] text-mute">Use a key to connect the MCP server or the CLI. Keys are shown once and stored hashed.</p>
        <ApiKeys initial={keys.map((k) => ({ ...k, createdAt: k.createdAt.toISOString(), lastUsedAt: k.lastUsedAt?.toISOString() ?? null }))} />
      </section>
    </div>
  );
}
