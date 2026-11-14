"use client";
import { useRouter } from "next/navigation";
import { CIcon } from "@/components/site/chrome-icon";
import { DealCountdown } from "@/components/site/deal-countdown";

/** Countdown to the real deal end on the Lifetime card. At zero the page re-renders on the server with the after-deal price. */
export function LifetimeCountdown({ endsAt }: { endsAt: string }) {
  const router = useRouter();
  return (
    <p className="mt-3 flex items-center gap-1.5 rounded-[6px] bg-white/10 px-2.5 py-1.5 text-[12px]">
      <CIcon name="clock" size={14} className="shrink-0" />
      <DealCountdown endsAt={endsAt} prefix="Deal ends in" className="font-medium" onEnd={() => setTimeout(() => router.refresh(), 400)} />
    </p>
  );
}
