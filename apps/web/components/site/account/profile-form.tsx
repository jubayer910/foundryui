"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

/** Resize any picked image to a 256px square WebP (centre crop) in the browser, so uploads stay tiny. */
async function toAvatar(file: File): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const side = Math.min(bmp.width, bmp.height);
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  c.getContext("2d")!.drawImage(bmp, (bmp.width - side) / 2, (bmp.height - side) / 2, side, side, 0, 0, 256, 256);
  return new Promise((ok, no) => c.toBlob((b) => (b ? ok(b) : no(new Error("encode"))), "image/webp", 0.86));
}

export function Avatar({ name, image, size = 56 }: { name: string; image?: string | null; size?: number }) {
  return image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={image} alt="" width={size} height={size} className="shrink-0 rounded-full object-cover" style={{ width: size, height: size }} />
  ) : (
    <span className="flex shrink-0 items-center justify-center rounded-full bg-ink font-medium text-white" style={{ width: size, height: size, fontSize: size * 0.4 }} aria-hidden="true">
      {(name || "?").slice(0, 1).toUpperCase()}
    </span>
  );
}

/** Account → Profile: photo (upload, change, remove) and display name; email is shown, not edited here. */
export function ProfileForm({ name: initialName, image: initialImage, email, since }: { name: string; image: string | null; email: string; since: string | null }) {
  const router = useRouter();
  const file = useRef<HTMLInputElement>(null);
  const [name, setName] = useState(initialName);
  const [image, setImage] = useState(initialImage);
  const [note, setNote] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState<"name" | "photo" | null>(null);
  const dirty = name.trim() !== initialName.trim();

  const pick = async (f: File | undefined) => {
    if (!f) return;
    if (!/^image\//.test(f.type)) return setNote({ ok: false, text: "Pick an image file (PNG, JPG or WebP)." });
    if (f.size > 5 * 1024 * 1024) return setNote({ ok: false, text: "That image is over 5 MB. Pick a smaller one." });
    setBusy("photo");
    setNote(null);
    try {
      const blob = await toAvatar(f);
      const r = await fetch("/api/account/profile", { method: "PUT", headers: { "content-type": "image/webp" }, body: blob });
      const d = (await r.json().catch(() => ({}))) as { image?: string; message?: string };
      if (!r.ok || !d.image) throw new Error(d.message || "Could not save the photo.");
      setImage(d.image);
      setNote({ ok: true, text: "Photo updated." });
      router.refresh();
    } catch (e) {
      setNote({ ok: false, text: e instanceof Error ? e.message : "Could not save the photo." });
    } finally {
      setBusy(null);
      if (file.current) file.current.value = "";
    }
  };

  const removePhoto = async () => {
    setBusy("photo");
    await fetch("/api/account/profile", { method: "DELETE" }).catch(() => null);
    setImage(null);
    setBusy(null);
    setNote({ ok: true, text: "Photo removed." });
    router.refresh();
  };

  const saveName = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy("name");
    setNote(null);
    const r = await fetch("/api/account/profile", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name }) }).catch(() => null);
    const d = (await r?.json().catch(() => ({}))) as { name?: string; message?: string } | undefined;
    setBusy(null);
    if (!r?.ok) return setNote({ ok: false, text: d?.message ?? "Could not save your name." });
    setName(d?.name ?? name);
    setNote({ ok: true, text: "Name saved." });
    router.refresh();
  };

  return (
    <div className="card divide-y divide-hair">
      <div className="flex flex-wrap items-center gap-4 p-4 sm:p-5">
        <Avatar name={name} image={image} size={64} />
        <div className="min-w-0 flex-1 basis-[calc(100%-80px)] sm:basis-0">
          <p className="text-[13px] font-medium">Profile photo</p>
          <p className="mt-0.5 text-[12px] text-mute">A square image works best. We crop and resize it for you.</p>
        </div>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <input ref={file} type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" id="avatar-file" onChange={(e) => pick(e.target.files?.[0])} />
          <label htmlFor="avatar-file" className={"btn-line cursor-pointer " + (busy === "photo" ? "pointer-events-none opacity-60" : "")}>
            {busy === "photo" ? "Saving…" : image ? "Change photo" : "Upload photo"}
          </label>
          {image && (
            <button type="button" onClick={removePhoto} disabled={busy === "photo"} className="text-[13px] text-mute hover:text-ink">
              Remove
            </button>
          )}
        </div>
      </div>

      <form onSubmit={saveName} className="grid gap-4 p-4 sm:grid-cols-[180px_1fr] sm:p-5">
        <label htmlFor="profile-name" className="pt-2 text-[13px] font-medium">Name</label>
        <div className="flex flex-wrap items-center gap-2">
          <span className="field-pill flex h-9 min-w-0 flex-1 items-center rounded-full bg-chip px-3.5 sm:max-w-[360px]">
            <input id="profile-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={60} autoComplete="name" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none" />
          </span>
          <button type="submit" disabled={!dirty || busy === "name"} className="btn-ink h-9 disabled:opacity-40">
            {busy === "name" ? "Saving…" : "Save"}
          </button>
        </div>
        <span className="pt-0.5 text-[13px] font-medium">Email</span>
        <div className="text-[13px]">
          <p>{email}</p>
          <p className="mt-0.5 text-[12px] text-mute">Your sign-in email. To change it, write to support@ingotui.com.</p>
        </div>
        {since && (
          <>
            <span className="text-[13px] font-medium">Member since</span>
            <p className="text-[13px]">{since}</p>
          </>
        )}
      </form>
      {note && (
        <p role="status" className={"px-4 py-3 text-[13px] sm:px-5 " + (note.ok ? "text-ink" : "text-[#b42318]")}>
          {note.text}
        </p>
      )}
    </div>
  );
}
