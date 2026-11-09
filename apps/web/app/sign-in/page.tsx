import type { Metadata } from "next";
import { AuthForm } from "@/components/site/auth-form";

export const metadata: Metadata = { title: "Log in" };

export default async function SignIn({ searchParams }: PageProps<"/sign-in">) {
  const sp = await searchParams;
  const next = typeof sp.next === "string" && sp.next.startsWith("/") ? sp.next : "/";
  return (
    <div className="mx-auto max-w-[340px] pt-12 lg:pt-20">
      <h1 className="page-title">Welcome back</h1>
      <p className="page-sub mb-6 mt-1">Log in to keep copying and to manage your API keys.</p>
      <AuthForm mode="sign-in" next={next} />
    </div>
  );
}
