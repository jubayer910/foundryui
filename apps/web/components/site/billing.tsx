import Link from "next/link";
import { Icon } from "@/registry/components/icons";

export type BillingSub = { interval: string; status: string; renewsAt: string | null; endsAt: string | null; portalUrl: string | null };
export type Receipt = { id: string; date: string; label: string; amount: string; status: string; url: string | null };

const day = (iso: string | null) => (iso ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : null);

const STATUS: Record<string, string> = { paid: "Paid", refunded: "Refunded", pending: "Pending", granted: "Granted", revoked: "Revoked", failed: "Failed" };

/** Thank-you banner after checkout (?welcome=1). The webhook can land a few seconds after the redirect. */
export function WelcomeBanner({ plan }: { plan: string }) {
  const done = plan === "pro" || plan === "team" || plan === "lifetime";
  return (
    <div role="status" className="mt-5 flex items-start gap-3 rounded-[8px] bg-ink p-4 text-white">
      <Icon name="sparkle" size={18} className="mt-0.5 shrink-0" />
      <p className="text-[13px]">
        <span className="font-medium">Thank you for buying Ingot UI.</span>{" "}
        <span className="text-white/70">
          {done
            ? "Your " + (plan === "lifetime" ? "Lifetime" : plan === "team" ? "Team" : "Pro") + " plan is on. Every system and component is unlocked."
            : "Your payment is being confirmed. This takes a few seconds; refresh the page and your plan will show here. The receipt is in your inbox."}
        </span>
      </p>
    </div>
  );
}

/** Plan, renewal, "Manage billing" and receipts. Server-rendered from purchase / subscription rows. */
export function Billing({ plan, sub, receipts }: { plan: string; sub: BillingSub | null; receipts: Receipt[] }) {
  const lifetime = plan === "lifetime";
  const team = plan === "team";
  const pro = plan === "pro" || team;
  const cancelled = sub?.status === "cancelled";
  const renew = day(sub?.renewsAt ?? null);
  const ends = day(sub?.endsAt ?? null);

  let title = "Free";
  let line = "The Loopo system, free components and 50 MCP calls a day.";
  if (lifetime) {
    title = "Lifetime";
    line =
      sub && ["active", "on_trial", "past_due"].includes(sub.status)
        ? "Paid once, forever. You still have a Pro subscription; cancel it in Manage billing so it stops renewing."
        : "Paid once. Every system and every future update, forever.";
  } else if (pro) {
    title = (team ? "Team " : "Pro ") + (sub?.interval === "yearly" ? "yearly" : sub ? "monthly" : "");
    line = !sub
      ? "Every system and component is unlocked."
      : cancelled
        ? "Cancelled. " + (team ? "Team" : "Pro") + " stays on until " + (ends ?? "the end of the paid period") + "."
        : sub.status === "past_due"
          ? "The last payment did not go through. Update your card to keep " + (team ? "Team." : "Pro.")
          : sub.status === "on_trial"
            ? "On trial" + (renew ? ", first payment " + renew : "") + "."
            : renew
              ? "Renews on " + renew + "."
              : "Active.";
  }

  return (
    <section className="mt-10">
      <h2 className="text-[13px] font-medium">Billing</h2>
      <div className="card mt-3 flex flex-wrap items-center gap-4 p-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-tile">
          <Icon name={lifetime || pro ? "wallet" : "layers"} size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-medium">{title.trim()}</p>
          <p className="text-[13px] text-mute">{line}</p>
        </div>
        {sub?.portalUrl && sub.status !== "expired" ? (
          <a href={sub.portalUrl} target="_blank" rel="noopener noreferrer" className="btn-line">
            Manage billing
            <Icon name="arrow-up-right" size={14} />
          </a>
        ) : null}
        {!lifetime && !pro ? (
          <Link href="/pricing" className="btn-ink">
            Upgrade
          </Link>
        ) : pro ? (
          <Link href="/pricing" className="btn-line">
            Switch to Lifetime
          </Link>
        ) : null}
      </div>
      {!lifetime && !pro && (
        <p className="mt-2 text-[12px] text-mute">Pro unlocks all nine systems, every component in code and Figma, and unlimited MCP. Lifetime is one payment for all of it, forever.</p>
      )}

      <h3 className="mt-6 text-[13px] font-medium">Receipts</h3>
      {receipts.length === 0 ? (
        <p className="mt-1 text-[13px] text-mute">No payments yet.</p>
      ) : (
        <ul className="card mt-2 divide-y divide-hair">
          {receipts.map((r) => (
            <li key={r.id} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3 text-[13px]">
              <div className="min-w-0 flex-1">
                <p className="font-medium">{r.label}</p>
                <p className="text-mute tabular-nums">{day(r.date)}</p>
              </div>
              <div className="text-right">
                <p className="tabular-nums">{r.amount}</p>
                <p className={r.status === "paid" ? "text-mute" : "text-faint"}>{STATUS[r.status] ?? r.status}</p>
              </div>
              {r.url ? (
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="btn-line !h-8" aria-label={"Receipt for " + r.label + ", " + day(r.date)}>
                  Receipt
                  <Icon name="arrow-up-right" size={13} />
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
