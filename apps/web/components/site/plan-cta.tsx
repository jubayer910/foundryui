"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * The plan button on a component page. The page is static, so the viewer's plan is read in the browser:
 * paid viewers (Pro, Team, Lifetime) see that the item is included instead of an upgrade prompt.
 */
const planLabel = (p: string) => (p === "lifetime" ? "Lifetime" : p === "team" ? "Team" : "Pro");

export function PlanCta({ href, label, pro }: { href: string; label: string; pro: boolean }) {
  const [plan, setPlan] = useState<string | null | undefined>(undefined);
  useEffect(() => {
    fetch("/api/usage", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { paid?: boolean; plan?: string } | null) => setPlan(d?.paid ? d.plan ?? "pro" : null))
      .catch(() => setPlan(null));
  }, []);
  if (plan) return <p className="flex h-9 items-center justify-center rounded-full bg-tile text-[13px] text-ink-2">Included in your {planLabel(plan)} plan</p>;
  // free items stay a sign-up prompt; Pro items wait for the plan check so a paid viewer never sees "Unlock"
  if (pro && plan === undefined) return <span className="h-9" aria-hidden="true" />;
  return (
    <Link href={href} className="btn-line w-full">
      {label}
    </Link>
  );
}
