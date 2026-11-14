"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { CIcon } from "./chrome-icon";
import { DealCountdown, msLeft } from "./deal-countdown";

export type SiteDeal = { price: number; left: number; total: number; endsAt: string | null; showSpots: boolean; showTimer: boolean };
type Site = { announcement: { text: string; href: string | null } | null; deal: SiteDeal | null };

/** Admin-controlled bar above the page. Reads /api/site so prerendered pages stay static. Dismissal is remembered per text. */
export function AnnouncementBar() {
  const [site, setSite] = useState<Site | null>(null);
  const [hidden, setHidden] = useState(true);
  const [ended, setEnded] = useState(false);

  const load = useCallback((fresh: boolean) => {
    let alive = true;
    fetch("/api/site", fresh ? { cache: "no-store" } : undefined)
      .then((r) => (r.ok ? r.json() : null))
      .then((d: Site | null) => {
        if (!alive || !d?.announcement) return;
        let dismissed = false;
        try {
          dismissed = localStorage.getItem("ingot:bar") === d.announcement.text;
        } catch {}
        // A cached response can trail the end date by a few seconds: never show a deal that is already over.
        if (d.deal?.endsAt && msLeft(d.deal.endsAt) <= 0) {
          d.deal = null;
          setEnded(true);
        }
        setSite(d);
        setHidden(dismissed);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => load(false), [load]);

  // The end date passed while the page was open: say so, then ask the server again (it no longer returns the deal).
  const onEnd = useCallback(() => {
    setEnded(true);
    load(true);
  }, [load]);
  const endsAt = site?.deal?.endsAt ?? null;
  useEffect(() => {
    if (!endsAt) return;
    const left = msLeft(endsAt);
    if (left <= 0 || left > 2_000_000_000) return; // setTimeout limit (~23 days); a later visit gets fresh data
    const t = setTimeout(onEnd, left + 50);
    return () => clearTimeout(t);
  }, [endsAt, onEnd]);

  if (!site?.announcement || hidden) return null;
  return <BarView text={site.announcement.text} href={site.announcement.href} deal={site.deal} ended={ended} onDismiss={() => {
    try {
      localStorage.setItem("ingot:bar", site.announcement!.text);
    } catch {}
    setHidden(true);
  }} />;
}

/** The bar itself, shared with the admin live preview. */
export function BarView({ text, href, deal, ended, onDismiss, preview }: { text: string; href: string | null; deal: SiteDeal | null; ended?: boolean; onDismiss?: () => void; preview?: boolean }) {
  const timer = !!deal && deal.showTimer && !!deal.endsAt && msLeft(deal.endsAt) > 0;
  const spots = !!deal && deal.showSpots && !ended;
  const body = (
    <>
      <span className="font-medium">{text}</span>
      {(timer || spots || ended) && (
        <span className="inline-flex items-center gap-x-2 text-white/70">
          {ended ? (
            <span className="inline-flex items-center gap-1 text-white">
              <CIcon name="clock" size={13} />
              Deal ended
            </span>
          ) : (
            timer && (
              <span className="inline-flex items-center gap-1 text-white">
                <CIcon name="clock" size={13} />
                <DealCountdown key={deal!.endsAt} endsAt={deal!.endsAt!} />
              </span>
            )
          )}
          {spots && (
            <span className="tabular-nums">
              {deal!.left} of {deal!.total} spots left
            </span>
          )}
        </span>
      )}
    </>
  );
  const wrap = "inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-0.5";
  return (
    <div className={"relative bg-ink px-9 py-2 text-center text-[12px] leading-snug text-white" + (preview ? " rounded-[8px]" : "")}>
      {href && !preview ? (
        <Link href={href} className={wrap + " hover:underline"}>
          {body}
        </Link>
      ) : (
        <span className={wrap}>{body}</span>
      )}
      {onDismiss && (
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={onDismiss}
          className="absolute right-2 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
        >
          <CIcon name="x" size={13} />
        </button>
      )}
    </div>
  );
}
