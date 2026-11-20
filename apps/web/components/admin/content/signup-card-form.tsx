"use client";
import { useActionState, useRef, useState } from "react";
import { saveSignupCard, type SignupCardState } from "@/app/admin/(panel)/announcement/actions";
import { input } from "@/components/admin/ui";

type Card = { enabled: boolean; title: string; note: string; button: string; avatars: string[] };

const NOTE = "Join 2,000+ members, including 30+ who signed up today";
const PLACEHOLDER = [1, 2, 3, 4, 5].map((n) => `/avatars/${n}.jpg`);

/** Shrinks any image to a 96 px square JPEG data URL (about 5 KB), so a pasted photo can live in settings. */
function toAvatar(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const s = Math.min(img.naturalWidth, img.naturalHeight);
      const c = document.createElement("canvas");
      c.width = c.height = 96;
      c.getContext("2d")!.drawImage(img, (img.naturalWidth - s) / 2, (img.naturalHeight - s) / 2, s, s, 0, 0, 96, 96);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL("image/jpeg", 0.82));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("bad image"));
    };
    img.src = url;
  });
}

/** One photo slot: paste an image (or an https link) while it's focused, or click to pick a file. */
function Slot({ value, onChange, n }: { value: string; onChange: (v: string) => void; n: number }) {
  const file = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState(false);
  const take = async (blob: Blob) => {
    try {
      onChange(await toAvatar(blob));
      setErr(false);
    } catch {
      setErr(true);
    }
  };
  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        aria-label={`Photo ${n}: paste an image or click to pick one`}
        onClick={() => file.current?.click()}
        onPaste={(e) => {
          const item = [...e.clipboardData.items].find((i) => i.type.startsWith("image/"));
          if (item) {
            e.preventDefault();
            const b = item.getAsFile();
            if (b) take(b);
            return;
          }
          const text = e.clipboardData.getData("text").trim();
          if (/^https:\/\/\S+$/.test(text)) {
            e.preventDefault();
            onChange(text);
          }
        }}
        className={"grid size-14 place-items-center overflow-hidden rounded-full border border-dashed text-[11px] text-mute outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink " + (err ? "border-[#c0392b]" : "border-hair")}
      >
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className="size-full object-cover" />
        ) : (
          "Paste"
        )}
      </button>
      <input ref={file} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && take(e.target.files[0])} />
      {value ? (
        <button type="button" onClick={() => onChange("")} className="text-[11px] text-mute underline underline-offset-2 hover:text-ink">
          Remove
        </button>
      ) : (
        <span className="text-[11px] text-faint">{n}</span>
      )}
    </div>
  );
}

/** Admin form for the sidebar sign-up card, with a live preview at the rail's width. */
export function SignupCardForm({ initial }: { initial: Card }) {
  const [state, action, pending] = useActionState<SignupCardState, FormData>(saveSignupCard, {});
  const [c, setC] = useState(initial);
  const [pics, setPics] = useState<string[]>(() => [0, 1, 2, 3, 4].map((i) => initial.avatars[i] ?? ""));
  const set = (i: number, v: string) => setPics((p) => p.map((x, j) => (j === i ? v : x)));
  const chosen = pics.filter(Boolean);
  const shown = chosen.length ? chosen : PLACEHOLDER;
  return (
    <form action={action} className="mt-8 flex flex-col gap-4">
      <h2 className="text-[14px] font-medium">Sidebar sign-up card</h2>
      <p className="-mt-3 text-[12.5px] text-mute">Shown at the bottom of the sidebar to signed-out visitors. Empty photo slots use the placeholder photos, and an empty note shows the default line.</p>
      <div className="grid gap-4 md:grid-cols-[1fr_260px]">
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-[13px]"><input type="checkbox" name="enabled" checked={c.enabled} onChange={(e) => setC({ ...c, enabled: e.target.checked })} /> Show the card</label>
          <div>
            <p className="text-[12px] text-mute">Photos (up to 5)</p>
            <p className="text-[12px] text-faint">Copy an image, click a circle, then press Cmd+V. You can also click to pick a file or paste an https image link.</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {pics.map((p, i) => (
                <Slot key={i} n={i + 1} value={p} onChange={(v) => set(i, v)} />
              ))}
            </div>
            <input type="hidden" name="avatars" value={chosen.join("\n")} />
          </div>
          <label className="text-[12px] text-mute">Note under the button<input name="note" value={c.note} onChange={(e) => setC({ ...c, note: e.target.value })} maxLength={140} placeholder={NOTE} className={input + " mt-1 w-full"} /></label>
          <label className="text-[12px] text-mute">Button<input name="button" value={c.button} onChange={(e) => setC({ ...c, button: e.target.value })} maxLength={24} className={input + " mt-1 w-full"} /></label>
          <label className="text-[12px] text-mute">Title above the button (optional, empty hides it)<input name="title" value={c.title} onChange={(e) => setC({ ...c, title: e.target.value })} maxLength={120} className={input + " mt-1 w-full"} /></label>
          <div className="flex items-center gap-3">
            <button type="submit" disabled={pending} className="btn-ink">{pending ? "Saving…" : "Save card"}</button>
            {state.ok && <span className="text-[12.5px] text-[#18794e]">{state.ok}</span>}
            {state.err && <span className="text-[12.5px] text-[#c0392b]">{state.err}</span>}
          </div>
        </div>
        <div className="card self-start bg-white p-4" aria-label="Preview">
          <p className="mb-3 text-[11px] text-mute">Preview</p>
          {c.title && <p className="mb-3 text-[15px] leading-[1.35]">{c.title}</p>}
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-full bg-ink px-4 text-[14px] text-white">{c.button || "Sign up"}</span>
            <span className="flex items-center">
              {shown.map((p, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={p} alt="" className={"size-[26px] rounded-full object-cover ring-2 ring-white" + (i ? " -ml-2" : "")} />
              ))}
            </span>
          </div>
          <p className="mt-3 text-[13px] leading-snug text-mute">{c.note || NOTE}</p>
        </div>
      </div>
    </form>
  );
}
