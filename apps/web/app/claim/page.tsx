import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NOINDEX } from "@/lib/seo";
import { getSessionUser } from "@/lib/auth";
import { productName } from "@/lib/activation";
import { checkClaim, claimSale } from "@/lib/contra/sync";
import { PageHead } from "@/components/site/page-head";
import { AIcon } from "@/components/admin/admin-icons";

export const metadata: Metadata = { title: "Activate your purchase", robots: { ...NOINDEX, follow: false } };
export const dynamic = "force-dynamic";

/**
 * /claim?t=<token>: the link in the "purchase confirmed" email. Opening it proves the buyer owns the inbox
 * the sale was paid with. Signed in with that email: the plan switches on and we go to /account?welcome=1.
 * Signed out: create an account (or log in) with that email, then come back here.
 */
export default async function ClaimPage({ searchParams }: PageProps<"/claim">) {
  const sp = await searchParams;
  const t = typeof sp.t === "string" ? sp.t.slice(0, 600) : "";
  const check = await checkClaim(t);
  if (!check.ok)
    return (
      <Shell>
        <Card icon="alert-circle" title={check.reason === "expired" ? "This link has expired" : "This link does not work"}>
          {check.message} Reply to your purchase email, or write to support, and we will switch your plan on by hand.
        </Card>
        <Actions>
          <Link href="/support" className="btn-ink !h-11 w-full !px-6 sm:w-auto">
            Contact support
          </Link>
        </Actions>
      </Shell>
    );

  const sale = check.sale;
  const payer = sale.payerEmail ?? "";
  const product = productName(sale.variantKey);
  const here = "/claim?t=" + encodeURIComponent(t);
  const user = await getSessionUser().catch(() => null);

  if (!user)
    return (
      <Shell>
        <Card icon="user" title={`Your ${product} purchase is confirmed`}>
          Create your free account with <strong className="font-medium text-ink">{payer}</strong>, the email you paid with, and it switches on right away.
        </Card>
        <Actions>
          <Link href={`/sign-up?email=${encodeURIComponent(payer)}&next=${encodeURIComponent(here)}`} className="btn-ink !h-11 w-full !px-6 sm:w-auto">
            Create account
          </Link>
          <Link href={`/sign-in?next=${encodeURIComponent(here)}`} className="btn-line !h-11 w-full !px-5 sm:w-auto">
            I already have an account
          </Link>
        </Actions>
      </Shell>
    );

  const r = await claimSale(t, user);
  if (r.ok) redirect("/account?welcome=1");
  return (
    <Shell>
      <Card icon="alert-circle" title={r.reason === "wrong_account" ? "Sign in with the email you paid with" : "We could not switch it on"}>
        {r.reason === "wrong_account" ? (
          <>
            This purchase was paid with <strong className="font-medium text-ink">{r.payerEmail}</strong>, and you are signed in as {user.email}. Sign in with {r.payerEmail} to switch it on, or reply to your purchase email if you want it on this account.
          </>
        ) : (
          r.message
        )}
      </Card>
      <Actions>
        {r.reason === "wrong_account" ? (
          <Link href={`/sign-in?next=${encodeURIComponent(here)}`} className="btn-ink !h-11 w-full !px-6 sm:w-auto">
            Sign in with {r.payerEmail}
          </Link>
        ) : null}
        <Link href="/support" className="btn-line !h-11 w-full !px-5 sm:w-auto">
          Contact support
        </Link>
      </Actions>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[560px]">
      <PageHead title="Activate your purchase" sub="Thanks for buying Ingot UI on Contra." />
      {children}
    </div>
  );
}

function Card({ icon, title, children }: { icon: "user" | "alert-circle"; title: string; children: React.ReactNode }) {
  return (
    <div className="card mt-6 p-5" role="status">
      <span className="flex size-9 items-center justify-center rounded-full bg-tile text-ink">
        <AIcon name={icon} size={18} />
      </span>
      <h2 className="mt-3 text-[15px] font-medium">{title}</h2>
      <p className="mt-1 text-[13px] text-mute">{children}</p>
    </div>
  );
}

function Actions({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 flex flex-wrap gap-2">{children}</div>;
}
