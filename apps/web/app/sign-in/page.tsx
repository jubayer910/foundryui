import type { Metadata } from "next";
import { AuthForm } from "@/components/site/auth-form";

export const metadata: Metadata = { title: "Sign in" };

export default async function SignIn({ searchParams }: PageProps<"/sign-in">) {
  const sp = await searchParams;
  const next = typeof sp.next === "string" && sp.next.startsWith("/") ? sp.next : "/account";
  return (
    <div className="mx-auto max-w-sm px-4 pt-16">
      <h1 className="text-2xl font-medium tracking-[-0.03em] text-fu-ink">Welcome back</h1>
      <p className="mb-8 mt-2 text-sm text-fu-muted">Sign in to copy components and manage your API keys.</p>
      <AuthForm mode="sign-in" next={next} />
    </div>
  );
}
