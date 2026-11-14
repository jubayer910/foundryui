"use client";
import { useEffect, useState } from "react";

/**
 * Monthly / yearly switch. Both prices are server-rendered; this only flips data-billing on the
 * wrapper (#plans), and CSS hides the other set. Without JS the monthly prices show.
 */
export function BillingToggle({ save }: { save: number }) {
  const [mode, setMode] = useState<"monthly" | "yearly">("monthly");
  useEffect(() => {
    const el = document.getElementById("plans");
    if (el) el.dataset.billing = mode;
  }, [mode]);
  return (
    <div role="group" aria-label="Billing period" className="inline-flex rounded-full bg-chip p-0.5">
      {(["monthly", "yearly"] as const).map((m) => (
        <button
          key={m}
          type="button"
          aria-pressed={mode === m}
          onClick={() => setMode(m)}
          className={"h-7 rounded-full px-3 text-[13px] font-medium transition-colors " + (mode === m ? "bg-white text-ink shadow-[0_1px_2px_rgb(0_0_0/0.08)]" : "text-mute hover:text-ink")}
        >
          {m === "monthly" ? "Monthly" : "Yearly"}
          {m === "yearly" && save > 0 && <span className="ml-1.5 text-[12px] font-normal text-mute">save up to {save}%</span>}
        </button>
      ))}
    </div>
  );
}
