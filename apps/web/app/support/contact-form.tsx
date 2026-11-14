"use client";
import { useState } from "react";
import { Icon } from "@/registry/components/icons";

const field =
  "w-full rounded-[8px] bg-chip px-3 text-[13px] outline-none transition-[background-color,box-shadow] placeholder:text-mute focus:bg-white focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]";

/** Contact form on /support: creates a ticket (POST /api/support/tickets). */
export function ContactForm({ defaultName = "", defaultEmail = "" }: { defaultName?: string; defaultEmail?: string }) {
  const [state, setState] = useState<{ status: "idle" | "sending" | "done" | "error"; id?: string; error?: string }>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState({ status: "sending" });
    try {
      const r = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: f.get("name"), email: f.get("email"), subject: f.get("subject"), message: f.get("message"), website: f.get("website"), source: "form" }),
      });
      const j = (await r.json().catch(() => ({}))) as { id?: string; message?: string };
      if (!r.ok || !j.id) return setState({ status: "error", error: j.message ?? "Something went wrong. Try again." });
      setState({ status: "done", id: j.id });
    } catch {
      setState({ status: "error", error: "You seem to be offline. Try again, or email support@ingotui.com." });
    }
  }

  if (state.status === "done")
    return (
      <div role="status" className="flex flex-col items-start gap-2 py-2">
        <span className="flex size-8 items-center justify-center rounded-full bg-ink text-white">
          <Icon name="check" size={16} />
        </span>
        <p className="text-[14px] font-medium">Message sent. Your ticket is {state.id}</p>
        <p className="text-[13px] text-mute">We’ll reply to your email, usually within a day. Keep the ticket id if you write again.</p>
        <button type="button" onClick={() => setState({ status: "idle" })} className="btn-line mt-2">Send another message</button>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-[13px] font-medium">
          Name <span className="sr-only">(optional)</span>
          <input name="name" defaultValue={defaultName} autoComplete="name" maxLength={80} className={field + " h-9"} placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-1.5 text-[13px] font-medium">
          Email
          <input name="email" type="email" required defaultValue={defaultEmail} autoComplete="email" maxLength={200} className={field + " h-9"} placeholder="you@company.com" />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        Subject
        <input name="subject" required maxLength={140} className={field + " h-9"} placeholder="What is it about?" />
      </label>
      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        Message
        <textarea name="message" required minLength={10} maxLength={5000} rows={5} className={field + " resize-y py-2 leading-relaxed"} placeholder="Tell us what happened and the page or component it was on." />
      </label>
      {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {state.status === "error" && (
        <p role="alert" className="rounded-[8px] bg-[#fdecea] px-3 py-2 text-[13px] text-[#a3261a]">{state.error}</p>
      )}
      <div className="flex flex-wrap items-center gap-3">
        <button disabled={state.status === "sending"} className="btn-ink !h-9 disabled:opacity-60">
          {state.status === "sending" ? "Sending…" : "Send message"}
        </button>
        <span className="text-[12px] text-mute">We only use your email to reply.</span>
      </div>
    </form>
  );
}
