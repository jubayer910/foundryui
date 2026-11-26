import type { Metadata } from "next";
import Link from "next/link";
import { NOINDEX } from "@/lib/seo";
import { optionName } from "@/lib/plans";
import { PageHead } from "@/components/site/page-head";
import { AIcon } from "@/components/admin/admin-icons";

export const metadata: Metadata = { title: "Thank you", robots: { ...NOINDEX, follow: false } };

/**
 * /thanks: where a signed-out buyer lands after paying on Creem (success_url from /api/checkout). No account is
 * needed to pay; the webhook matches the sale to an account by email and mails the buyer what to do next.
 */
export default async function ThanksPage({ searchParams }: PageProps<"/thanks">) {
  const sp = await searchParams;
  const paid = typeof sp.paid === "string" ? sp.paid : "";
  const product = paid ? optionName(paid) : "";
  return (
    <div className="mx-auto max-w-[560px]">
      <PageHead title="Thank you" sub="Your payment went through." />
      <div className="card mt-6 p-5" role="status">
        <span className="flex size-9 items-center justify-center rounded-full bg-tile text-ink">
          <AIcon name="user" size={18} />
        </span>
        <h2 className="mt-3 text-[15px] font-medium">Check your email</h2>
        <p className="mt-1 text-[13px] text-mute">
          {product && product !== "Free" ? `Thanks for buying ${product}. ` : "Thanks for your purchase. "}
          We sent an email from jubayer@ingotui.com to the address you paid with. If you already have an Ingot UI account with that email, your plan is on: just sign in.
          Otherwise the email has a link to create your free account with that same email, and the plan switches on right away.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href="/sign-in?next=%2Faccount%3Fwelcome%3D1" className="btn-ink !h-11 w-full !px-6 sm:w-auto">
          Sign in
        </Link>
        <Link href="/support" className="btn-line !h-11 w-full !px-5 sm:w-auto">
          No email after a few minutes?
        </Link>
      </div>
    </div>
  );
}
