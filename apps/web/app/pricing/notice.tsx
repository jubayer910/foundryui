"use client";
import { useSearchParams } from "next/navigation";
import { Icon, type IconName } from "@/registry/components/icons";

type Labels = Record<"proMonthly" | "proYearly" | "teamMonthly" | "teamYearly" | "lifetime", { name: string; price: string }>;

/**
 * Messages that depend on the query string (?buy, ?waitlist, ?closed, ?error).
 * Client-side so the pricing page itself stays static and revalidated.
 */
export function PricingNotice({ labels }: { labels: Labels }) {
  const sp = useSearchParams();
  const waitlist = sp.get("waitlist");
  const buy = sp.get("buy");
  const opt = (v: string | null) => (v && v in labels ? labels[v as keyof Labels] : null);

  if (opt(waitlist))
    return (
      <Box icon="mail" title={"You're on the waitlist for " + opt(waitlist)!.name + "."}>
        We are adding payments now and it opens soon. We will email you as soon as you can buy, and your price of {opt(waitlist)!.price} is saved for you. Nothing was charged.
      </Box>
    );
  if (sp.get("closed"))
    return (
      <Box icon="lock" title="Lifetime is closed right now.">
        All launch spots are taken. Pro and Team, monthly or yearly, are still open.
      </Box>
    );
  if (sp.get("error"))
    return (
      <Box icon="credit-card" title="Checkout could not start.">
        Nothing was charged. Try again in a minute, or write to support and we will sort it out.
      </Box>
    );
  if (opt(buy))
    return (
      <div role="status" className="mt-5 flex flex-wrap items-center gap-3 rounded-[8px] bg-tile p-4">
        <Icon name="user-check" size={18} className="shrink-0" />
        <p className="min-w-[240px] flex-1 text-[13px]">
          <span className="font-medium">Your account is ready.</span> <span className="text-mute">Continue to checkout for {opt(buy)!.name} at {opt(buy)!.price}.</span>
        </p>
        <form action="/api/checkout" method="post" className="w-full sm:w-auto">
          <input type="hidden" name="option" value={buy!} />
          <button type="submit" className="btn-ink w-full sm:w-auto">
            Continue to checkout
          </button>
        </form>
      </div>
    );
  return null;
}

function Box({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <div role="status" className="mt-5 flex items-start gap-3 rounded-[8px] bg-tile p-4">
      <Icon name={icon} size={18} className="mt-0.5 shrink-0" />
      <p className="text-[13px]">
        <span className="font-medium">{title}</span> <span className="text-mute">{children}</span>
      </p>
    </div>
  );
}
