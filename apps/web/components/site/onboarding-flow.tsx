"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Sys = { slug: string; name: string; tagline: string; live: boolean };
type Option = { id: string; label: string };

/**
 * Onboarding right after sign-up (/welcome): two quick steps, one tap each.
 *   1. Which system are you building with?  (a tap on a card moves on)
 *   2. One last question: how did you hear about Ingot UI?  (optional, Skip always there)
 * Then the chosen system opens with a short "start here" banner; without a system, back to where they came from.
 * Answers go to user_profile (POST /api/feedback/profile); the system is also kept in this browser (fu_system).
 * Patterns from Attio, Browserbase, Semrush, Gamma and ClickUp on Mobbin: one question per screen, chips,
 * the source question last and plainly optional.
 */
export function OnboardingFlow({ systems, heard, next }: { systems: Sys[]; heard: readonly Option[]; next: string }) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [system, setSystem] = useState<string | null>(null);
  const [other, setOther] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [busy, setBusy] = useState(false);
  const otherRef = useRef<HTMLInputElement>(null);
  const head = useRef<HTMLHeadingElement>(null);

  // move focus to the new question so keyboard and screen-reader users follow the step change
  useEffect(() => { head.current?.focus(); }, [step]);
  useEffect(() => { if (other) otherRef.current?.focus(); }, [other]);

  const save = (body: Record<string, string>) =>
    fetch("/api/feedback/profile", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body), keepalive: true }).catch(() => {});

  const pickSystem = (slug: string | null) => {
    setSystem(slug);
    if (slug) {
      try { localStorage.setItem("fu_system", slug); } catch {}
      void save({ system: slug });
    }
    setStep(2);
  };

  // where to go at the end: the chosen system's page (with the start-here banner), unless the visitor
  // signed up from a specific page (a component they wanted to copy), which wins
  const finish = () => {
    setBusy(true);
    const specific = next !== "/" && next !== "/account";
    router.push(specific || !system ? next : `/systems/${system}?welcome=1`);
  };

  const answer = async (id: string) => {
    if (id === "other") return setOther(true);
    setBusy(true);
    await save({ heardFrom: id });
    finish();
  };

  return (
    <div className="mx-auto max-w-[720px] pt-10 lg:pt-16">
      {/* two thin segments: where you are and how much is left */}
      <div className="flex gap-1.5" role="progressbar" aria-label="Setup progress" aria-valuemin={1} aria-valuemax={2} aria-valuenow={step}>
        {[1, 2].map((n) => (
          <span key={n} className={"h-1 flex-1 rounded-full transition-colors duration-300 " + (n <= step ? "bg-ink" : "bg-chip-2")} />
        ))}
      </div>
      <p className="mt-4 text-[12px] text-mute">Step {step} of 2</p>

      {step === 1 ? (
        <section key="s1" className="animate-[fade-up_.28s_ease-out]">
          <h1 ref={head} tabIndex={-1} className="page-title mt-1 outline-none">Which system are you building with?</h1>
          <p className="page-sub mt-1">We’ll open it for you. You can switch any time.</p>
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {systems.map((s) => (
              <button
                key={s.slug}
                onClick={() => pickSystem(s.slug)}
                className="group card flex flex-col overflow-hidden p-1.5 text-left transition-shadow duration-150 hover:shadow-[inset_0_0_0_1.5px_var(--color-ink)] focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-ink)]"
              >
                {/* the system's real look, not a colour swatch */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/systems/${s.slug}-card.webp`} alt="" loading="lazy" className="aspect-[16/10] w-full rounded-[6px] bg-tile object-cover object-top" />
                <span className="px-1.5 pb-1.5 pt-2">
                  <span className="block text-[13px] font-medium">{s.name}</span>
                  <span className="block truncate text-[12px] text-mute">{s.tagline}</span>
                </span>
              </button>
            ))}
          </div>
          <button onClick={() => pickSystem(null)} className="mt-4 text-[13px] text-mute underline underline-offset-2 hover:text-ink">
            Not sure yet, show me everything
          </button>
        </section>
      ) : (
        <section key="s2" className="animate-[fade-up_.28s_ease-out]">
          <h1 ref={head} tabIndex={-1} className="page-title mt-1 outline-none">One last question: how did you hear about Ingot UI?</h1>
          <p className="page-sub mt-1">Optional, but it helps us a lot. One tap and you’re in.</p>
          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="How did you hear about Ingot UI?">
            {heard.map((h) => (
              <button
                key={h.id}
                disabled={busy}
                aria-pressed={h.id === "other" ? other : undefined}
                data-on={h.id === "other" && other}
                onClick={() => answer(h.id)}
                className="pill h-9 px-3.5 text-[13px] disabled:opacity-60"
              >
                {h.label}
              </button>
            ))}
          </div>
          {other && (
            <form
              className="mt-3 flex max-w-[440px] gap-2"
              onSubmit={async (e) => {
                e.preventDefault();
                setBusy(true);
                await save({ heardFrom: "other", ...(otherText.trim() ? { heardFromOther: otherText.trim() } : {}) });
                finish();
              }}
            >
              <label className="field-pill flex h-9 min-w-0 flex-1 items-center rounded-full bg-chip px-3.5">
                <span className="sr-only">Where did you hear about us?</span>
                <input
                  ref={otherRef}
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                  maxLength={80}
                  placeholder="Where? e.g. a course, a Slack group"
                  className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-mute"
                />
              </label>
              <button type="submit" disabled={busy} className="btn-ink h-9 shrink-0">Continue</button>
            </form>
          )}
          {busy && (
            <p className="mt-4 text-[13px] text-mute" role="status">
              Opening {systems.find((s) => s.slug === system)?.name ?? "the library"}…
            </p>
          )}
          <div className="mt-6 flex items-center gap-4">
            <button onClick={() => setStep(1)} className="text-[13px] text-mute hover:text-ink">Back</button>
            <button onClick={finish} disabled={busy} className="text-[13px] text-mute underline underline-offset-2 hover:text-ink">Skip</button>
          </div>
        </section>
      )}
    </div>
  );
}
