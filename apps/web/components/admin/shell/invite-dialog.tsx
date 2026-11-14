"use client";
import { useActionState, useRef, useState } from "react";
import { AIcon } from "../admin-icons";
import { input } from "../ui";

type Result = { ok: true; link: string; email: string; role: string; expiresAt: string; replaced: boolean } | { ok: false; error: string; email?: string; role?: string } | null;

const ROLE_HELP: Record<string, string> = {
  moderator: "Overview, Analytics, Support inbox, Knowledge base and Content.",
  admin: "Everything except managing the owner. Admins can invite moderators.",
};

/** "Invite" button and dialog. The link is shown once, with Copy; it can't be shown again. */
export function InviteDialog({ roles, action }: { roles: string[]; action: (prev: Result, f: FormData) => Promise<Result> }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const [state, run, pending] = useActionState(action, null);
  const [role, setRole] = useState(roles[0] ?? "moderator");
  const [copied, setCopied] = useState(false);
  const [round, setRound] = useState(0);

  const open = () => {
    setRound((r) => r + 1);
    setCopied(false);
    dlg.current?.showModal();
  };
  const close = () => {
    dlg.current?.close();
    if (state?.ok) window.location.reload();
  };
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const done = state?.ok ? state : null;
  return (
    <>
      <button type="button" onClick={open} className="btn-ink">
        <AIcon name="user-plus" size={15} />
        Invite
      </button>
      <dialog
        ref={dlg}
        aria-labelledby="invite-title"
        onClose={() => state?.ok && window.location.reload()}
        className="m-auto w-[calc(100%-32px)] max-w-[440px] rounded-[10px] bg-white p-0 text-ink shadow-[0_0_0_1px_var(--color-hair-2),0_24px_64px_rgb(0_0_0/0.18)] backdrop:bg-black/30"
      >
        <div className="flex items-start gap-3 border-b border-hair px-5 py-4">
          <div className="min-w-0 flex-1">
            <h2 id="invite-title" className="text-[15px] font-medium">
              {done ? "Invite link ready" : "Invite to the team"}
            </h2>
            <p className="mt-0.5 text-[12px] text-mute">{done ? "Copy it now. For safety it is shown only once." : "Creates a single-use link, valid for 7 days. Send it yourself."}</p>
          </div>
          <button type="button" onClick={close} aria-label="Close" className="-mt-1 -mr-2 flex size-8 items-center justify-center rounded-[6px] text-mute hover:bg-tile hover:text-ink">
            <AIcon name="x" size={16} />
          </button>
        </div>

        {done ? (
          <div className="flex flex-col gap-3 px-5 py-4">
            <p className="text-[13px]">
              For <span className="font-medium">{done.email}</span> as <span className="font-medium">{done.role}</span>, valid until{" "}
              {new Date(done.expiresAt).toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false })}.
              {done.replaced && " The earlier link for this email no longer works."}
            </p>
            <div className="flex items-center gap-1.5">
              <input readOnly value={done.link} aria-label="Invite link" onFocus={(e) => e.currentTarget.select()} className={input + " font-fu-mono text-[12px]"} />
              <button type="button" onClick={() => copy(done.link)} className="btn-line shrink-0 !h-8">
                <AIcon name={copied ? "check" : "copy"} size={15} />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <p role="status" className="text-[12px] text-faint">
              {copied ? "Link copied to the clipboard." : "The invite email can't be sent automatically yet, so paste the link in a message to them."}
            </p>
            <div className="mt-1 flex justify-end">
              <button type="button" onClick={close} className="btn-ink">
                Done
              </button>
            </div>
          </div>
        ) : (
          <form key={round} action={run} className="flex flex-col gap-3 px-5 py-4">
            <label className="flex flex-col gap-1">
              <span className="text-[12px] text-mute">Email</span>
              <input name="email" type="email" required autoFocus defaultValue={state && !state.ok ? state.email : ""} placeholder="name@company.com" className={input} />
            </label>
            <fieldset className="flex flex-col gap-1">
              <legend className="mb-1 text-[12px] text-mute">Role</legend>
              <div className="grid gap-1.5">
                {roles.map((r) => (
                  <label key={r} className={"flex cursor-pointer items-start gap-2.5 rounded-[8px] p-2.5 shadow-[inset_0_0_0_1px_var(--color-hair-2)] " + (role === r ? "bg-tile shadow-[inset_0_0_0_1px_var(--color-ink)]" : "hover:bg-tile")}>
                    <input type="radio" name="role" value={r} checked={role === r} onChange={() => setRole(r)} className="mt-0.5 size-4 accent-[#0b0b0b]" />
                    <span>
                      <span className="block text-[13px] font-medium capitalize">{r}</span>
                      <span className="block text-[12px] text-mute">{ROLE_HELP[r]}</span>
                    </span>
                  </label>
                ))}
              </div>
              {roles.length === 1 && <p className="mt-1 text-[12px] text-faint">Only the owner can invite admins.</p>}
            </fieldset>
            {state && !state.ok && (
              <p role="alert" className="flex items-start gap-2 rounded-[8px] bg-[#fdecec] px-3 py-2 text-[13px] text-[#9b1c1c]">
                <AIcon name="alert-circle" size={15} className="mt-px shrink-0" />
                {state.error}
              </p>
            )}
            <div className="mt-1 flex justify-end gap-1.5">
              <button type="button" onClick={close} className="btn-line">
                Cancel
              </button>
              <button disabled={pending} className="btn-ink disabled:opacity-60">
                {pending ? "Creating…" : "Create invite link"}
              </button>
            </div>
          </form>
        )}
      </dialog>
    </>
  );
}
