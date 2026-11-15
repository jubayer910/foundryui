"use client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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

  if (opt(waitlist)) return <WaitlistDialog key={waitlist} name={opt(waitlist)!.name} price={opt(waitlist)!.price} />;
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

/** Popup shown after a buy click while checkout is not open yet: the visitor is on the waitlist. */
function WaitlistDialog({ name, price }: { name: string; price: string }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const d = dlg.current;
    if (d && !d.open) d.showModal();
  }, []);
  // Drop ?waitlist so a refresh or a shared link doesn't open it again.
  const clear = () => router.replace(pathname, { scroll: false });
  return (
    <dialog
      ref={dlg}
      aria-labelledby="waitlist-title"
      aria-describedby="waitlist-body"
      onClose={clear}
      onClick={(e) => e.target === e.currentTarget && dlg.current?.close()}
      className="m-auto w-[calc(100%-32px)] max-w-[420px] rounded-[12px] bg-white p-0 text-ink shadow-[0_0_0_1px_var(--color-hair-2),0_24px_64px_rgb(0_0_0/0.18)] backdrop:bg-black/40"
    >
      <div className="flex flex-col items-center px-6 pb-6 pt-7 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-tile">
          <Icon name="mail" size={22} />
        </span>
        <h2 id="waitlist-title" className="mt-4 text-[18px] font-medium tracking-[-0.01em]">
          You&rsquo;re on the waitlist
        </h2>
        <p id="waitlist-body" className="mt-2 text-[14px] leading-relaxed text-mute">
          We are adding payments now and checkout opens soon. We will email you as soon as you can buy <span className="font-medium text-ink">{name}</span>.
        </p>
        <div className="mt-4 flex w-full flex-col gap-2 rounded-[8px] bg-tile p-3 text-left text-[13px]">
          <p className="flex items-center gap-2">
            <Icon name="check" size={15} className="shrink-0" />
            <span>
              Your price of <span className="font-medium">{price}</span> is saved for you
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Icon name="check" size={15} className="shrink-0" />
            Nothing was charged
          </p>
        </div>
        <button type="button" autoFocus onClick={() => dlg.current?.close()} className="btn-ink mt-5 w-full">
          Got it
        </button>
      </div>
    </dialog>
  );
}
