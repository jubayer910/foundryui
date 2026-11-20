import type { Metadata } from "next";
import { NOINDEX } from "@/lib/seo";
import { AuthForm } from "@/components/site/auth-form";
import { IlloTile } from "@/components/site/illo";
import { ed } from "@/lib/content/edit";

export const metadata: Metadata = { title: "Log in", robots: NOINDEX };

export default async function SignIn({ searchParams }: PageProps<"/sign-in">) {
  const sp = await searchParams;
  const next = typeof sp.next === "string" && sp.next.startsWith("/") ? sp.next : "/";
  return (
    <div className="mx-auto max-w-[340px] pt-12 lg:pt-20">
      <IlloTile scene="key" label="Your API key" className="mb-6 h-[130px]" />
      <h1 className="page-title" {...ed("signin.head.title")}>Welcome back</h1>
      <p className="page-sub mb-6 mt-1" {...ed("signin.head.sub")}>Log in to keep copying and to manage your API keys.</p>
      <AuthForm mode="sign-in" next={next} />
    </div>
  );
}
