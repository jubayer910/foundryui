import type { Metadata } from "next";
import Link from "next/link";
import { NOINDEX } from "@/lib/seo";
import { getSessionUser } from "@/lib/auth";
import { lookupGift } from "@/lib/gift";
import { PageHead } from "@/components/site/page-head";
import { AIcon } from "@/components/admin/admin-icons";
import { claimAction } from "./actions";

export const metadata: Metadata = { title: "Your Lifetime gift", robots: { ...NOINDEX, follow: false } };
export const dynamic = "force-dynamic";

const SUB = "Every system, every component and every future update, on your account.";

/** /gift/<token>: the invite link from a gifted Lifetime (lib/gift.ts). Signed out: create an account or sign in, then back here. */
export default async function GiftPage({ params, searchParams }: PageProps<"/gift/[token]">) {
  const { token } = await params;
  const e = (await searchParams).e;
  const error = typeof e === "string" ? e.slice(0, 200) : null;
  const user = await getSessionUser().catch(() => null);
  const gift = await lookupGift(token, user?.id);
  const here = "/gift/" + encodeURIComponent(token);

  if (gift.state === "invalid")
    return (
      <Shell>
        <Card icon="alert-triangle" title="This invite link is no longer valid">
          It may have been replaced by a newer email, or cancelled. Check your inbox for the latest invite, or <Link href="/support" className="underline underline-offset-2">contact support</Link>.
        </Card>
      </Shell>
    );

  if (gift.state === "claimed")
    return (
      <Shell>
        <Card icon={gift.mine ? "circle-check" : "alert-triangle"} title={gift.mine ? "Lifetime is on for your account" : "This gift has already been claimed"}>
          {gift.mine ? "Every system and every future update is open. Start with the component library." : "It is on another account. If that was not you, contact support."}
        </Card>
        <div className="mt-4">
          <Link href={gift.mine ? "/components" : "/support"} className="btn-ink !h-11 w-full !px-6 sm:w-auto">
            {gift.mine ? "Browse components" : "Contact support"}
          </Link>
        </div>
      </Shell>
    );

  if (!user)
    return (
      <Shell>
        <Card icon="gift" title="You have been given Lifetime access">
          Create a free account with <strong className="font-medium text-ink">{gift.email}</strong> (or any email you like), and Lifetime switches on. Already have an account? Sign in.
        </Card>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href={`/sign-up?next=${encodeURIComponent(here)}&email=${encodeURIComponent(gift.email)}`} className="btn-ink !h-11 w-full !px-6 sm:w-auto">
            Create account
          </Link>
          <Link href={`/sign-in?next=${encodeURIComponent(here)}`} className="btn-line !h-11 w-full !px-5 sm:w-auto">
            I already have an account
          </Link>
        </div>
      </Shell>
    );

  return (
    <Shell>
      <form action={claimAction} className="card mt-6 p-5">
        <input type="hidden" name="token" value={token} />
        <span className="flex size-9 items-center justify-center rounded-full bg-tile text-ink">
          <AIcon name="gift" size={18} />
        </span>
        <h2 className="mt-3 text-[15px] font-medium">Claim Lifetime for this account</h2>
        <p className="mt-1 text-[13px] text-mute">
          Signed in as <strong className="font-medium text-ink">{user.email}</strong>. Lifetime goes on this account.
        </p>
        {error ? (
          <p role="alert" className="mt-3 rounded-[8px] bg-[#fdecea] px-3 py-2 text-[13px] text-[#a3261a]">
            {error}
          </p>
        ) : null}
        <button type="submit" className="btn-ink mt-4 !h-11 w-full !px-6 sm:w-auto">
          Claim Lifetime
        </button>
      </form>
      <p className="mt-4 text-[13px] text-mute">
        Not your account? <Link href={`/sign-in?next=${encodeURIComponent(here)}`} className="underline underline-offset-2">Sign in with another one</Link>.
      </p>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[560px]">
      <PageHead title="Your Lifetime gift" sub={SUB} />
      {children}
    </div>
  );
}

function Card({ icon, title, children }: { icon: "gift" | "circle-check" | "alert-triangle"; title: string; children: React.ReactNode }) {
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
