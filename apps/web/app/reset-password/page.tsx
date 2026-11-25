import type { Metadata } from "next";
import Link from "next/link";
import { NOINDEX } from "@/lib/seo";
import { ResetForm } from "@/components/site/password-reset";

export const metadata: Metadata = { title: "Choose a new password", robots: NOINDEX };
export const dynamic = "force-dynamic";

/** The reset email's link goes through /api/auth/reset-password/<token> and lands here with ?token= (or ?error=INVALID_TOKEN). */
export default async function ResetPassword({ searchParams }: PageProps<"/reset-password">) {
  const sp = await searchParams;
  const token = typeof sp.token === "string" ? sp.token.slice(0, 200) : "";
  const next = typeof sp.next === "string" && sp.next.startsWith("/") && !sp.next.startsWith("//") ? sp.next : "/";
  const bad = !token || typeof sp.error === "string";
  return (
    <div className="mx-auto max-w-[340px] pt-12 lg:pt-20">
      <h1 className="page-title">{bad ? "This link no longer works" : "Choose a new password"}</h1>
      {bad ? (
        <>
          <p className="page-sub mb-6 mt-1">Reset links work once and expire after one hour. Ask for a new one and use the latest email.</p>
          <Link href={"/forgot-password" + (next !== "/" ? "?next=" + encodeURIComponent(next) : "")} className="btn-ink !h-9 w-full max-md:!h-11">
            Send a new link
          </Link>
        </>
      ) : (
        <>
          <p className="page-sub mb-6 mt-1">Pick a password with at least 8 characters.</p>
          <ResetForm token={token} next={next} />
        </>
      )}
    </div>
  );
}
