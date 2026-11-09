"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Item } from "@/lib/catalog";
import { pushRecent, toggleSaved, useLibrary } from "@/lib/local-library";
import { Preview } from "./preview";
import { CIcon } from "./chrome-icon";
import { Icon } from "@/registry/components/icons";

/** Library card: the preview is the product. Quick actions on hover let people copy without opening. */
export function ItemCard({ item, system = "Loopo" }: { item: Item; system?: string }) {
  const router = useRouter();
  const [note, setNote] = useState<string | null>(null);
  const saved = useLibrary("saved").includes(item.slug);
  useEffect(() => {
    if (!note) return;
    const t = setTimeout(() => setNote(null), 1800);
    return () => clearTimeout(t);
  }, [note]);

  async function copy() {
    const res = await fetch("/api/actions", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ slug: item.slug, action: "copy_code" }) });
    const data = (await res.json().catch(() => ({}))) as { error?: string; files?: { path: string; content: string }[] };
    if (data.error === "login_required") return router.push("/sign-up?next=/components/" + item.slug);
    if (data.error === "upgrade_required") return router.push("/pricing?from=" + item.slug);
    if (!res.ok || !data.files) return setNote("Couldn’t copy");
    await navigator.clipboard.writeText(data.files.map((f) => "// " + f.path + "\n" + f.content).join("\n\n")).catch(() => {});
    pushRecent(item.slug);
    window.dispatchEvent(new Event("fu-usage"));
    setNote("Code copied");
  }

  const qa = "flex h-7 items-center gap-1.5 rounded-full bg-white px-2.5 text-[12px] font-medium shadow-[0_0_0_1px_rgb(0_0_0/0.08),0_2px_6px_-2px_rgb(0_0_0/0.12)] hover:bg-tile";
  return (
    <div className="group relative">
      <Link href={"/components/" + item.slug} className="block overflow-hidden rounded-[8px] bg-tile shadow-[inset_0_0_0_1px_var(--color-hair)]">
        <div className="h-56">
          <Preview slug={item.slug} size="card" />
        </div>
      </Link>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-end gap-1.5 p-2 opacity-0 transition-opacity group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 max-lg:pointer-events-auto max-lg:opacity-100">
        <button onClick={copy} className={qa} aria-label={"Copy code for " + item.name}>
          {item.tier === "pro" ? <Icon name="lock" size={13} /> : <Icon name="code" size={13} />} Copy code
        </button>
        <button
          onClick={() => toggleSaved(item.slug)}
          className={qa + " !px-1.5"}
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved" : "Save " + item.name}
        >
          <CIcon name="bookmark" size={14} className={saved ? "fill-ink" : ""} />
        </button>
      </div>
      {note && <span className="absolute left-2 top-2 rounded-full bg-ink px-2.5 py-1 text-[12px] text-white">{note}</span>}
      <div className="mt-2 flex items-center gap-2 px-0.5">
        <Link href={"/components/" + item.slug} className="truncate text-[13px] font-medium hover:underline">
          {item.name}
        </Link>
        <span className="truncate text-[12px] text-mute">{system}</span>
        {item.tier === "pro" ? (
          <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-[12px] text-mute">
            <Icon name="lock" size={12} /> Pro
          </span>
        ) : (
          <span className="ml-auto shrink-0 text-[12px] text-mute">Free</span>
        )}
      </div>
    </div>
  );
}
