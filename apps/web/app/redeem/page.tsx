import type { Metadata } from "next";
import Link from "next/link";
import { NOINDEX } from "@/lib/seo";
import { getSessionUser } from "@/lib/auth";
import { REDEEM_MESSAGES, type RedeemError } from "@/lib/appsumo";
import { PageHead } from "@/components/site/page-head";
import { AIcon } from "@/components/admin/admin-icons";
import { redeemAction } from "./actions";

export const metadata: Metadata = { title: "Redeem your AppSumo code", robots: { ...NOINDEX, follow: false } };
export const dynamic = "force-dynamic";

const SUB = "Bought Ingot UI on AppSumo? Your code switches Lifetime on for your account.";
const one = (v: string | string[] | undefined) => ((Array.isArray(v) ? v[0] : v) ?? "").slice(0, 200);

/** /redeem?code=…: AppSumo's "Redeem now" button lands here. Signed out: create an account or log in, then back here. */
export default async function RedeemPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const code = one(sp.code);
  const e = one(sp.e) as RedeemError;
  const error = e in REDEEM_MESSAGES ? REDEEM_MESSAGES[e] : null;
  const user = await getSessionUser().catch(() => null);
  const here = "/redeem" + (code ? "?code=" + encodeURIComponent(code) : "");

  if (!user)
    return (
      <Shell>
        <Card icon="user" title="Log in to the account that gets Lifetime">
          New to Ingot UI? Create a free account first, it takes a few seconds. You come straight back here to paste your code.
        </Card>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href={`/sign-up?next=${encodeURIComponent(here)}`} className="btn-ink !h-11 w-full !px-6 sm:w-auto">
            Create account
          </Link>
          <Link href={`/sign-in?next=${encodeURIComponent(here)}`} className="btn-line !h-11 w-full !px-5 sm:w-auto">
            I already have an account
          </Link>
        </div>
      </Shell>
    );

  if (user.plan === "lifetime" && !error)
    return (
      <Shell>
        <Card icon="circle-check" title="This account already has Lifetime">
          You are signed in as <strong className="font-medium text-ink">{user.email}</strong>, which already has every system and every future update. Keep your code for another account, or sign in with that account to redeem it.
        </Card>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/components" className="btn-ink !h-11 w-full !px-6 sm:w-auto">
            Browse components
          </Link>
        </div>
      </Shell>
    );

  return (
    <Shell>
      <form action={redeemAction} className="card mt-6 p-5">
        <label htmlFor="code" className="text-[15px] font-medium">
          Your AppSumo code
        </label>
        <p className="mt-1 text-[13px] text-mute">
          Redeeming on <strong className="font-medium text-ink">{user.email}</strong>. Find the code in your AppSumo account, under My Products.
        </p>
        <input
          id="code"
          name="code"
          defaultValue={code}
          required
          autoComplete="off"
          spellCheck={false}
          placeholder="INGOT-XXXX-XXXX-XXXX"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "code-error" : undefined}
          className="mt-3 h-11 w-full rounded-[8px] bg-chip px-3 font-mono text-[14px] uppercase tracking-wide outline-none transition-[background-color,box-shadow] placeholder:text-mute focus:bg-white focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]"
        />
        {error ? (
          <p id="code-error" role="alert" className="mt-3 rounded-[8px] bg-[#fdecea] px-3 py-2 text-[13px] text-[#a3261a]">
            {error}
          </p>
        ) : null}
        <button type="submit" className="btn-ink mt-4 !h-11 w-full !px-6 sm:w-auto">
          Redeem code
        </button>
      </form>
      <p className="mt-4 text-[13px] text-mute">
        Not your account? <Link href={`/sign-in?next=${encodeURIComponent(here)}`} className="underline underline-offset-2">Sign in with another one</Link>. Trouble with a code? <Link href="/support" className="underline underline-offset-2">Contact support</Link>.
      </p>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[560px]">
      <PageHead title="Redeem your AppSumo code" sub={SUB} />
      {children}
    </div>
  );
}

function Card({ icon, title, children }: { icon: "user" | "circle-check"; title: string; children: React.ReactNode }) {
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
