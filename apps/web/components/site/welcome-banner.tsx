"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CIcon, type ChromeIconName } from "./chrome-icon";

/**
 * Last beat of onboarding: the system page opens with ?welcome=1 and this short "start here" card on top.
 * Three first moves, each linking where it happens. Read from the URL in the browser so the system page
 * stays static; closing it (or any later visit without ?welcome=1) hides it for good.
 */
export function WelcomeBanner({ system, name }: { system: string; name: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the query string is only read in the browser
    setOn(new URLSearchParams(window.location.search).get("welcome") === "1");
  }, []);
  if (!on) return null;
  const close = () => {
    setOn(false);
    const u = new URL(window.location.href);
    u.searchParams.delete("welcome");
    window.history.replaceState(window.history.state, "", u.pathname + u.search + u.hash);
  };
  const steps: { icon: ChromeIconName; title: string; note: string; href: string }[] = [
    { icon: "grid", title: "Copy a component", note: `Browse ${name} and copy any block as React code.`, href: `/?s=${system}` },
    { icon: "plug", title: "Connect your AI agent", note: "Let Claude, Cursor or Codex build screens in this system.", href: "/mcp" },
    { icon: "dashboard", title: "Start from a template", note: "Full dashboard pages, ready to edit.", href: "/templates" },
  ];
  return (
    <section aria-labelledby="welcome-title" className="mb-6 rounded-[12px] p-4 shadow-[inset_0_0_0_1px_var(--color-hair)] sm:p-5">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <h2 id="welcome-title" className="text-[15px] font-medium">You’re all set with {name}</h2>
          <p className="mt-0.5 text-[13px] text-mute">Here’s where most people start. Your choice is saved; switch systems any time.</p>
        </div>
        <button onClick={close} aria-label="Close" className="flex size-7 shrink-0 items-center justify-center rounded-full text-mute hover:bg-chip hover:text-ink">
          <CIcon name="x" size={14} />
        </button>
      </div>
      <ol className="mt-4 grid gap-2 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.href}>
            <Link href={s.href} className="flex h-full gap-3 rounded-[8px] bg-tile p-3 transition-colors hover:bg-chip">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-[6px] bg-white text-ink shadow-[0_0_0_1px_var(--color-hair)]">
                <CIcon name={s.icon} size={14} />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-medium">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </span>
                <span className="mt-0.5 block text-[12px] leading-snug text-mute">{s.note}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
