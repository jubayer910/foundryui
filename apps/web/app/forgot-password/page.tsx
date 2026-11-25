import type { Metadata } from "next";
import { NOINDEX } from "@/lib/seo";
import { ForgotForm } from "@/components/site/password-reset";

export const metadata: Metadata = { title: "Reset your password", robots: NOINDEX };

export default async function ForgotPassword({ searchParams }: PageProps<"/forgot-password">) {
  const sp = await searchParams;
  const next = typeof sp.next === "string" && sp.next.startsWith("/") && !sp.next.startsWith("//") ? sp.next : "/";
  const email = typeof sp.email === "string" ? sp.email.slice(0, 200) : undefined;
  return (
    <div className="mx-auto max-w-[340px] pt-12 lg:pt-20">
      <h1 className="page-title">Forgot your password?</h1>
      <p className="page-sub mb-6 mt-1">Enter the email you signed up with. We&apos;ll send a link to choose a new password.</p>
      <ForgotForm email={email} next={next} />
    </div>
  );
}
