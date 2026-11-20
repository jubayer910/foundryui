"use client";
import { useActionState, useState } from "react";
import { saveSignupCard, type SignupCardState } from "@/app/admin/(panel)/announcement/actions";
import { input } from "@/components/admin/ui";

type Card = { enabled: boolean; title: string; note: string; button: string; avatars: string[] };

/** Admin form for the sidebar sign-up card, with a live preview at the rail's width. */
export function SignupCardForm({ initial }: { initial: Card }) {
  const [state, action, pending] = useActionState<SignupCardState, FormData>(saveSignupCard, {});
  const [c, setC] = useState(initial);
  const [avatars, setAvatars] = useState(initial.avatars.join("\n"));
  const pics = avatars.split(/[\s,]+/).filter((x) => /^https:\/\//.test(x)).slice(0, 5);
  return (
    <form action={action} className="mt-8 flex flex-col gap-4">
      <h2 className="text-[14px] font-medium">Sidebar sign-up card</h2>
      <p className="-mt-3 text-[12.5px] text-mute">Shown at the bottom of the sidebar to signed-out visitors. Without avatar images it shows the first letter of the newest members' names.</p>
      <div className="grid gap-4 md:grid-cols-[1fr_260px]">
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-[13px]"><input type="checkbox" name="enabled" checked={c.enabled} onChange={(e) => setC({ ...c, enabled: e.target.checked })} /> Show the card</label>
          <label className="text-[12px] text-mute">Title<input name="title" value={c.title} onChange={(e) => setC({ ...c, title: e.target.value })} maxLength={120} className={input + " mt-1 w-full"} /></label>
          <label className="text-[12px] text-mute">Note under the button<input name="note" value={c.note} onChange={(e) => setC({ ...c, note: e.target.value })} maxLength={140} placeholder="Join … members, including … who signed up today" className={input + " mt-1 w-full"} /></label>
          <label className="text-[12px] text-mute">Button<input name="button" value={c.button} onChange={(e) => setC({ ...c, button: e.target.value })} maxLength={24} className={input + " mt-1 w-full"} /></label>
          <label className="text-[12px] text-mute">Avatar images (https links, one per line, up to 5)<textarea name="avatars" value={avatars} onChange={(e) => setAvatars(e.target.value)} rows={4} className={input + " mt-1 w-full !h-auto py-2"} /></label>
          <div className="flex items-center gap-3">
            <button type="submit" disabled={pending} className="btn-ink">{pending ? "Saving…" : "Save card"}</button>
            {state.ok && <span className="text-[12.5px] text-[#18794e]">{state.ok}</span>}
            {state.err && <span className="text-[12.5px] text-[#c0392b]">{state.err}</span>}
          </div>
        </div>
        <div className="card self-start bg-white p-4" aria-label="Preview">
          <p className="mb-3 text-[11px] text-mute">Preview</p>
          {c.title && <p className="text-[13px] font-medium leading-snug">{c.title}</p>}
          <div className="mt-2.5 flex items-center gap-2.5">
            <span className="btn-ink !h-8 !px-3.5 !text-[12.5px]">{c.button || "Sign up"}</span>
            <span className="flex items-center">
              {(pics.length ? pics : ["M", "S", "D", "A", "R"]).map((p, i) =>
                p.startsWith("https://") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={p} alt="" className={"size-6 rounded-full object-cover ring-2 ring-white" + (i ? " -ml-1.5" : "")} />
                ) : (
                  <span key={i} className={"grid size-6 place-items-center rounded-full bg-[#4b55e6] text-[10.5px] text-white ring-2 ring-white" + (i ? " -ml-1.5" : "")}>{p}</span>
                ),
              )}
            </span>
          </div>
          {c.note && <p className="mt-2 text-[12px] leading-snug text-mute">{c.note}</p>}
        </div>
      </div>
    </form>
  );
}
