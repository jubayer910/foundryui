"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Card = { title: string; note: string; button: string; avatars: string[]; initials: string[] };
const TONES = ["#4b55e6", "#0ea5a3", "#f2705a", "#8a5cf0", "#e0a21b"];

/**
 * Sidebar sign-up card for signed-out visitors. Every word and picture comes from admin → Announcement
 * (settings.signupCard, served by /api/site), so the owner edits it without a deploy.
 */
export function SignupCard() {
  const [card, setCard] = useState<Card | null>(null);
  useEffect(() => {
    let alive = true;
    Promise.all([
      fetch("/api/site").then((r) => (r.ok ? r.json() : null)),
      fetch("/api/usage", { credentials: "include" }).then((r) => (r.ok ? r.json() : null)),
    ])
      .then(([site, usage]: [{ signupCard?: Card | null } | null, { user?: unknown } | null]) => {
        if (alive && site?.signupCard && !usage?.user) setCard(site.signupCard);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);
  if (!card) return null;
  const faces = card.avatars.length ? card.avatars.map((src) => ({ src, letter: "" })) : card.initials.map((letter) => ({ src: "", letter }));
  return (
    <div className="px-2">
      {card.title && <p className="text-[13px] font-medium leading-snug text-ink">{card.title}</p>}
      <div className="mt-2.5 flex items-center gap-2.5">
        <Link href="/sign-up" className="btn-ink !h-8 !px-3.5 !text-[12.5px]">
          {card.button}
        </Link>
        {faces.length > 0 && (
          <span className="flex items-center" aria-hidden="true">
            {faces.slice(0, 5).map((f, i) =>
              f.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={f.src} alt="" width={24} height={24} className={"size-6 rounded-full object-cover ring-2 ring-white" + (i ? " -ml-1.5" : "")} />
              ) : (
                <span key={i} className={"grid size-6 place-items-center rounded-full text-[10.5px] font-medium text-white ring-2 ring-white" + (i ? " -ml-1.5" : "")} style={{ background: TONES[i % TONES.length] }}>
                  {f.letter}
                </span>
              ),
            )}
          </span>
        )}
      </div>
      {card.note && <p className="mt-2 text-[12px] leading-snug text-mute">{card.note}</p>}
    </div>
  );
}
