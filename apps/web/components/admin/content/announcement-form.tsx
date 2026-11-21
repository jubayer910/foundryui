"use client";
import { useActionState, useState } from "react";
import { saveAnnouncement, type AnnouncementState } from "@/app/admin/(panel)/announcement/actions";
import { input, saveBar } from "@/components/admin/ui";
import { CIco } from "./icons";

type Props = { initial: { enabled: boolean; text: string; href: string }; deal: { left: number; total: number } | null };

/** The bar exactly as components/site/announcement-bar.tsx draws it (that file is owned by the deal workstream). */
function BarPreview({ text, href, deal }: { text: string; href: string; deal: Props["deal"] }) {
  return (
    <div className="relative bg-ink px-10 py-2 text-center text-[12px] leading-snug text-white">
      <span className={"inline-flex flex-wrap items-center justify-center gap-x-2 " + (href ? "underline-offset-2 hover:underline" : "")}>
        <span className="font-medium">{text || "Bar text"}</span>
        {deal && <span className="text-white/70">{`${deal.left} of ${deal.total} spots left`}</span>}
      </span>
      <span aria-hidden="true" className="absolute right-2 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-white/70">
        <CIco name="x" size={13} />
      </span>
    </div>
  );
}

export function AnnouncementForm({ initial, deal }: Props) {
  const [state, action, pending] = useActionState<AnnouncementState, FormData>(saveAnnouncement, {});
  const [enabled, setEnabled] = useState(initial.enabled);
  const [text, setText] = useState(initial.text);
  const [href, setHref] = useState(initial.href);
  const err = (f: string) => (state.err && state.field === f ? state.err : null);
  const ring = (f: string) => (err(f) ? " !shadow-[inset_0_0_0_1px_#c0392b]" : "");

  return (
    <form action={action} className="mt-5 flex flex-col gap-5">
      <section className="card overflow-hidden" aria-label="Preview">
        <p className="flex items-center gap-2 border-b border-hair px-4 py-2 text-[12px] text-mute">
          <CIco name="eye" size={15} />
          Preview, desktop and phone width
        </p>
        <div className="flex flex-col gap-4 bg-tile p-4">
          {enabled ? (
            <>
              <div className="overflow-hidden rounded-[8px] bg-white shadow-[0_0_0_1px_var(--color-hair)]">
                <BarPreview text={text} href={href} deal={deal} />
                <div className="flex h-16 items-center gap-2 px-4">
                  <span className="h-2.5 w-28 rounded-full bg-chip" />
                  <span className="h-2.5 w-16 rounded-full bg-chip" />
                </div>
              </div>
              <div className="w-[375px] max-w-full overflow-hidden rounded-[8px] bg-white shadow-[0_0_0_1px_var(--color-hair)]">
                <BarPreview text={text} href={href} deal={deal} />
                <div className="flex h-12 items-center px-4">
                  <span className="h-2.5 w-20 rounded-full bg-chip" />
                </div>
              </div>
            </>
          ) : (
            <p className="flex h-16 items-center justify-center rounded-[8px] bg-white text-[13px] text-mute shadow-[0_0_0_1px_var(--color-hair)]">The bar is off. Pages show no announcement.</p>
          )}
        </div>
        <p className="border-t border-hair px-4 py-2 text-[12px] text-faint">
          {deal ? "The spots count comes from real sales while the Lifetime deal is open." : "No spots count: the Lifetime deal is off or sold out."} Visitors can dismiss the bar; it comes back when the text changes.
        </p>
      </section>

      <section className="card flex flex-col gap-3 p-4" aria-label="Bar">
        <label className="flex cursor-pointer items-center gap-2 text-[13px]">
          <input type="checkbox" name="enabled" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} className="size-4 accent-[#0b0b0b]" />
          Show the bar on every page of the site
        </label>
        <label className="flex flex-col gap-1">
          <span className="flex text-[12px] text-mute">
            Text
            <span className={"ml-auto tabular-nums " + (text.length > 140 ? "text-[#9b1c1c]" : "text-faint")}>{text.length} / 140</span>
          </span>
          <input name="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Launch deal: Lifetime for $29, first 200 buyers only" className={input + ring("text")} />
          {err("text") && <span className="text-[12px] text-[#9b1c1c]">{err("text")}</span>}
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[12px] text-mute">Link</span>
          <input name="href" value={href} onChange={(e) => setHref(e.target.value)} placeholder="/pricing" className={input + " font-fu-mono text-[12px]" + ring("href")} spellCheck={false} />
          <span className="text-[12px] text-faint">{err("href") ? <span className="text-[#9b1c1c]">{err("href")}</span> : "Empty: the bar is plain text. A page on the site (/pricing) or a full https:// address."}</span>
        </label>
        <div className={"flex flex-wrap items-center gap-3 border-t border-hair pt-3 " + saveBar}>
          <p role="status" aria-live="polite" className={"mr-auto flex items-center gap-1.5 text-[13px] " + (state.err ? "text-[#9b1c1c]" : "text-mute")}>
            {state.ok && (
              <>
                <CIco name="circle-check" size={15} className="text-ink" />
                {state.ok}
              </>
            )}
            {state.err && !state.field && state.err}
          </p>
          <button disabled={pending} className="btn-ink">
            <CIco name="device-floppy" size={15} />
            {pending ? "Saving" : "Save bar"}
          </button>
        </div>
      </section>
    </form>
  );
}
