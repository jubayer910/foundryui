"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { AffiliateState } from "@/lib/affiliate";

type Terms = { commission: string; recurring: boolean; cookieDays: number; portal: string };
const money = (cents: number, cur: string) => new Intl.NumberFormat("en-US", { style: "currency", currency: cur || "USD" }).format(cents / 100);

/** Account → Affiliate: join (Creem invitation), then the referral link and numbers from Creem. */
export function AffiliatePanel({ state, terms }: { state: AffiliateState; terms: Terms }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const join = async () => {
    setBusy(true);
    setErr(null);
    const r = await fetch("/api/account/affiliate", { method: "POST" }).catch(() => null);
    const d = (await r?.json().catch(() => ({}))) as { message?: string } | undefined;
    setBusy(false);
    if (!r?.ok) return setErr(d?.message ?? "Something went wrong. Please try again.");
    router.refresh();
  };

  const how = [
    ["Share your link", "Post it, put it in a tutorial or send it to a friend. Visits are remembered for " + terms.cookieDays + " days."],
    ["They buy Ingot UI", `You earn ${terms.commission} of every payment${terms.recurring ? ", renewals included" : ""}.`],
    ["Get paid by Creem", "Creem pays out on the 1st and 15th once your balance reaches $50, by bank or USDC."],
  ];

  if (state.stage === "off")
    return <div className="card p-5 text-[13px] text-mute">The affiliate program opens soon. We will email you when it does.</div>;

  return (
    <div className="flex flex-col gap-4">
      {state.stage === "joined" ? (
        <>
          {state.sample && <p className="rounded-[8px] bg-tile px-3 py-2 text-[12px] text-mute">Sample numbers on localhost (no Creem key here). The live site shows the member’s real link and stats from Creem.</p>}
          <div className="card p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-[13px] font-medium">Your referral link</p>
              <span className={"rounded-full px-2 py-px text-[11px] font-medium " + (state.stats.status === "active" ? "bg-[#e7f4ec] text-[#17663a]" : "bg-tile text-mute")}>
                {state.stats.status === "active" ? "Active" : state.stats.status === "pending" ? "Waiting for approval" : state.stats.status}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="flex h-9 min-w-0 flex-1 items-center rounded-full bg-chip px-3.5 font-mono text-[12.5px]">
                <span className="truncate">{state.stats.link}</span>
              </span>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(state.stats.link).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); })}
                className="btn-ink h-9"
              >
                {copied ? "Copied" : "Copy link"}
              </button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Clicks", state.stats.clicks.toLocaleString("en-US")],
              ["Sales", state.stats.conversions.toLocaleString("en-US")],
              ["Earned", money(state.stats.earningsCents, state.stats.currency)],
            ].map(([k, v]) => (
              <div key={k} className="card p-4">
                <p className="text-[13px] text-mute">{k}</p>
                <p className="mt-1 text-[22px] font-medium tracking-[-0.02em] tabular-nums">{v}</p>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-mute">
            Payouts, tax details and your full history live in your{" "}
            <a href={terms.portal} target="_blank" rel="noopener" className="font-medium text-ink underline underline-offset-2">
              Creem affiliate dashboard
            </a>
            .
          </p>
        </>
      ) : (
        <div className="card p-4 sm:p-5">
          <p className="text-[15px] font-medium">Earn {terms.commission} for every customer you send</p>
          <p className="mt-1 max-w-xl text-[13px] text-mute">
            Share Ingot UI with your audience, clients or team. When someone buys through your link you earn {terms.commission}
            {terms.recurring ? " of every payment they make, renewals included" : " of their first payment"}.
          </p>
          {state.stage === "invited" ? (
            <div role="status" className="mt-4 rounded-[8px] bg-tile p-3 text-[13px]">
              <span className="font-medium">Check your email.</span> <span className="text-mute">Creem sent you an invitation. Accept it at </span>
              <a href={terms.portal} target="_blank" rel="noopener" className="font-medium underline underline-offset-2">affiliates.creem.io</a>
              <span className="text-mute"> and your link appears here.</span>
            </div>
          ) : (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button type="button" onClick={join} disabled={busy} className="btn-ink h-9 disabled:opacity-60">
                {busy ? "Sending invitation…" : "Become an affiliate"}
              </button>
              <span className="text-[12px] text-mute">Free to join. Creem handles tracking and payouts.</span>
            </div>
          )}
          {err && <p role="alert" className="mt-3 text-[13px] text-[#b42318]">{err}</p>}
        </div>
      )}
      <ol className="grid gap-3 sm:grid-cols-3">
        {how.map(([t, d], i) => (
          <li key={t} className="rounded-[8px] bg-tile p-4">
            <p className="text-[12px] tabular-nums text-mute">Step {i + 1}</p>
            <p className="mt-1 text-[13px] font-medium">{t}</p>
            <p className="mt-0.5 text-[12px] leading-snug text-mute">{d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
