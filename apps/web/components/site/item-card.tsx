"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Entry } from "@/lib/library";
import { pushRecent, toggleSaved, useLibrary } from "@/lib/local-library";
import { Preview } from "./preview";
import { CIcon } from "./chrome-icon";
import { Icon } from "@/registry/components/icons";

const SYSTEM_NAMES: Record<string, string> = { loopo: "Loopo", mailpulse: "MailPulse", auton: "Auton", axon: "Axon", veriq: "Veriq", vantage: "Vantage" };

/** Library card: the preview is the product. Quick actions on hover let people copy without opening. */
export function ItemCard({ item }: { item: Entry }) {
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
    const data = (await res.json().catch(() => ({}))) as { error?: string; files?: { path: string; content: string }[]; codeUrl?: string };
    if (data.error === "login_required") return router.push("/sign-up?next=/components/" + item.slug);
    if (data.error === "upgrade_required") return router.push("/pricing?from=" + item.slug);
    if (!res.ok || (!data.files && !data.codeUrl)) return setNote("Couldn’t copy");
    const text = data.codeUrl ? await (await fetch(data.codeUrl)).text() : data.files!.map((f) => "// " + f.path + "\n" + f.content).join("\n\n");
    await navigator.clipboard.writeText(text).catch(() => {});
    pushRecent(item.slug);
    window.dispatchEvent(new Event("fu-usage"));
    setNote("Code copied");
  }

  const href = "/components/" + item.slug;
  const qa = "flex h-7 items-center gap-1.5 rounded-full bg-white px-2.5 text-[12px] font-medium shadow-[0_0_0_1px_rgb(0_0_0/0.08),0_2px_6px_-2px_rgb(0_0_0/0.12)] hover:bg-tile";
  return (
    <div className="group relative">
      <Link href={href} className="block overflow-hidden rounded-[8px] bg-tile shadow-[inset_0_0_0_1px_var(--color-hair)]">
        <div className={"flex h-56 items-center overflow-hidden " + (item.kind === "figma" && (item.w ?? 1) / (item.h ?? 1) > 3.2 ? "justify-start" : "justify-center")}>
          {item.kind === "code" ? (
            <Preview slug={item.slug} size="card" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.thumb}
              alt={item.name + " component preview"}
              loading="lazy"
              decoding="async"
              className={
                (item.w ?? 1) / (item.h ?? 1) > 3.2
                  ? // very wide strips (headers, KPI rows): show the left part at a readable size
                    "ml-3 h-auto max-h-[96px] w-[180%] max-w-none self-center rounded-[4px] object-cover object-left shadow-[0_1px_3px_rgb(0_0_0/0.08)]"
                  : "max-h-[calc(100%-24px)] max-w-[calc(100%-24px)] rounded-[4px] object-contain shadow-[0_1px_3px_rgb(0_0_0/0.08)]"
              }
            />
          )}
        </div>
      </Link>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-end gap-1.5 p-2 opacity-0 transition-opacity group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 max-lg:pointer-events-auto max-lg:opacity-100">
        {(item.kind === "code" || item.qa) && (
          <button onClick={copy} className={qa} aria-label={"Copy code for " + item.name}>
            {item.tier === "pro" ? <Icon name="lock" size={13} /> : <Icon name="code" size={13} />} Copy code
          </button>
        )}
        <button onClick={() => toggleSaved(item.slug)} className={qa + " !px-1.5"} aria-pressed={saved} aria-label={saved ? "Remove from saved" : "Save " + item.name}>
          <CIcon name="bookmark" size={14} className={saved ? "fill-ink" : ""} />
        </button>
      </div>
      {note && <span className="absolute left-2 top-2 rounded-full bg-ink px-2.5 py-1 text-[12px] text-white">{note}</span>}
      <div className="mt-2 flex items-center gap-2 px-0.5">
        <Link href={href} className="truncate text-[13px] font-medium hover:underline">
          {item.name}
        </Link>
        <span className="shrink-0 text-[12px] text-mute">{SYSTEM_NAMES[item.system] ?? item.system}</span>
        <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-[12px] text-mute">
          <span className={"rounded-[4px] px-1.5 text-[11px] " + (item.kind === "code" || item.qa ? "bg-ink text-white" : "bg-chip text-ink")}>{item.kind === "code" || item.qa ? "Code" : "Figma"}</span>
          {item.tier === "pro" ? (
            <>
              <Icon name="lock" size={11} /> Pro
            </>
          ) : (
            "Free"
          )}
        </span>
      </div>
    </div>
  );
}
