import type { Metadata } from "next";
import { AuthForm } from "@/components/site/auth-form";

export const metadata: Metadata = { title: "Create account" };

export default async function SignUp({ searchParams }: PageProps<"/sign-up">) {
  const sp = await searchParams;
  const next = typeof sp.next === "string" && sp.next.startsWith("/") ? sp.next : "/account";
  return (
    <div className="mx-auto max-w-sm px-4 pt-16">
      <h1 className="text-2xl font-medium tracking-[-0.03em] text-fu-ink">Create your free account</h1>
      <p className="mb-8 mt-2 text-sm text-fu-muted">Unlimited copies of free components, plus MCP access for your AI agent.</p>
      <AuthForm mode="sign-up" next={next} />
    </div>
  );
}
