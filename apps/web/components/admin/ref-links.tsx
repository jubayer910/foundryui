"use client";
import { useActionState, useState } from "react";
import { addRefLink, type RefState } from "@/app/admin/(panel)/referrals/actions";
import { input } from "@/components/admin/ui";

export function RefLinkForm() {
  const [name, setName] = useState("");
  const [state, action, pending] = useActionState<RefState, FormData>(async (prev, f) => {
    const r = await addRefLink(prev, f);
    if (r.ok) setName("");
    return r;
  }, {});
  const [to, setTo] = useState("/");
  const clean = name.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 40);
  const path = to.trim() || "/";
  return (
    <form action={action} className="flex flex-col gap-3">
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_1.2fr]">
        <label className="text-[12px] text-mute">Name<input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="x-reply" required className={input + " mt-1"} /></label>
        <label className="text-[12px] text-mute">Page it opens<input name="to" value={to} onChange={(e) => setTo(e.target.value)} placeholder="/ or /pricing" className={input + " mt-1"} /></label>
        <label className="text-[12px] text-mute">Note (only you see it)<input name="note" placeholder="Reply under UI posts" maxLength={120} className={input + " mt-1"} /></label>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={pending} className="btn-ink">{pending ? "Adding…" : "Add link"}</button>
        {clean.length >= 2 && <code className="font-fu-mono text-[12px] text-mute">https://ingotui.com{path === "/" ? "/" : path}?ref={clean}</code>}
        {state.ok && <span className="text-[12.5px] text-[#18794e]">{state.ok}</span>}
        {state.err && <span className="text-[12.5px] text-[#c0392b]">{state.err}</span>}
      </div>
    </form>
  );
}

export function CopyLink({ url }: { url: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(url).catch(() => {});
        setDone(true);
        setTimeout(() => setDone(false), 1500);
      }}
      className="mt-1 max-w-full truncate text-left font-fu-mono text-[11.5px] text-mute underline underline-offset-2 hover:text-ink"
      title="Copy link"
    >
      <span aria-live="polite">{done ? "Copied" : url}</span>
    </button>
  );
}
