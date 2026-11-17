import type { Metadata } from "next";
import Link from "next/link";
import { NOINDEX } from "@/lib/seo";
import { getSessionUser } from "@/lib/auth";
import { getPriceBook, isCheckoutOption, optionPriceText, planLabel, type CheckoutOption, isMonthlyOff } from "@/lib/plans";
import { alreadyHas, grantOf, latestClick, latestForUser, publicView } from "@/lib/activation";
import { PageHead } from "@/components/site/page-head";
import { AIcon } from "@/components/admin/admin-icons";
import { ActivateFlow, type PlanChoice } from "./activate-flow";

export const metadata: Metadata = { title: "Activate your plan", robots: { ...NOINDEX, follow: false } };
export const dynamic = "force-dynamic";

const SUB = "Paid on Contra? Tell us which plan and we'll switch it on for your account.";

/** ?plan= accepts an option (lifetime, proMonthly, ...) or a Lifetime variant key. */
function planParam(v: string | string[] | undefined): CheckoutOption | null {
  const s = (Array.isArray(v) ? v[0] : v) ?? "";
  if (s === "lifetimeDeal" || s === "lifetimeAfter") return "lifetime";
  return isCheckoutOption(s) ? s : null;
}

export default async function ActivatePage({ searchParams }: PageProps<"/activate">) {
  const sp = await searchParams;
  const wanted = planParam(sp.plan);
  const user = await getSessionUser().catch(() => null);
  const here = "/activate" + (wanted ? "?plan=" + wanted : "");

  if (!user) {
    const next = encodeURIComponent(here);
    return (
      <div className="mx-auto max-w-[560px]">
        <PageHead title="Activate your plan" sub={SUB} />
        <div className="card mt-6 p-5">
          <span className="flex size-9 items-center justify-center rounded-full bg-tile text-ink">
            <AIcon name="user" size={18} />
          </span>
          <h2 className="mt-3 text-[15px] font-medium">Log in to the account that gets the plan</h2>
          <p className="mt-1 text-[13px] text-mute">Use the Ingot UI account you want the plan on. No account yet? Create one; it takes a few seconds.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href={`/sign-in?next=${next}`} className="btn-ink !h-10 !px-5">
              Log in
            </Link>
            <Link href={`/sign-up?next=${next}`} className="btn-line !h-10 !px-5">
              Create account
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [pb, latest, click] = await Promise.all([getPriceBook(), latestForUser(user.id), latestClick(user)]);
  const choices: PlanChoice[] = (
    [
      ["lifetime", "Every system and every future update, paid once."],
      ["proMonthly", "All systems and unlimited MCP, billed monthly."],
      ["proYearly", "All systems and unlimited MCP, billed yearly."],
      ["teamMonthly", `Everything in Pro for ${pb.teamSeats} people, billed monthly.`],
      ["teamYearly", `Everything in Pro for ${pb.teamSeats} people, billed yearly.`],
    ] as [CheckoutOption, string][]
  )
    .filter(([o]) => (o !== "lifetime" || pb.lifetime !== null) && !isMonthlyOff(pb, o))
    .map(([option, sub]) => ({
      option,
      name: option === "lifetime" ? "Lifetime" : option === "proMonthly" ? "Pro monthly" : option === "proYearly" ? "Pro yearly" : option === "teamMonthly" ? "Team monthly" : "Team yearly",
      price: optionPriceText(pb, option),
      sub,
    }));

  const fresh = sp.new === "1";
  const view = latest ? publicView(latest) : null;
  const preset = wanted ?? click?.option ?? (view && view.status === "rejected" ? (view.option as CheckoutOption) : null) ?? "lifetime";

  // "You already have it": the plan they came for is covered and there is no request for it to show.
  let already: string | null = null;
  if (!fresh && (!view || view.status !== "pending")) {
    const target = wanted ?? (!view ? (user.plan === "lifetime" ? "lifetime" : null) : null);
    const showsApproved = view && view.status === "approved" && target && view.option === target;
    if (target && !showsApproved && (await alreadyHas(user, target))) already = grantOf(target).plan === "team" ? "Team" : planLabel(user.plan);
  }

  return (
    <div className="mx-auto max-w-[560px]">
      <PageHead title="Activate your plan" sub={SUB} />
      {already ? (
        <div className="card mt-6 p-5" role="status">
          <span className="flex size-9 items-center justify-center rounded-full bg-ink text-white">
            <AIcon name="check" size={18} />
          </span>
          <h2 className="mt-3 text-[15px] font-medium">You already have {already}</h2>
          <p className="mt-1 text-[13px] text-mute">Everything it covers is unlocked on {user.email}. There is nothing to activate.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/" className="btn-ink !h-10 !px-5">
              Browse the library
            </Link>
            <Link href="/activate?new=1" className="btn-line !h-10 !px-5">
              Activate a different purchase
            </Link>
          </div>
        </div>
      ) : (
        <ActivateFlow choices={choices} preset={preset} accountEmail={user.email} initial={fresh ? null : view} />
      )}
    </div>
  );
}
