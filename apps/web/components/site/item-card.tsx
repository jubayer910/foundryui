"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Entry } from "@/lib/library";
import { pushRecent, toggleSaved, useLibrary } from "@/lib/local-library";
import { Preview } from "./preview";
import { CardLive } from "./card-live";
import { surfaceStyle } from "@/lib/system-surface";
import { CIcon } from "./chrome-icon";
import { Icon } from "@/registry/components/icons";
import { playClickSound, type SoundName } from "./cursor/click-sounds";
import { soundAllowed } from "./cursor/custom-cursor";

/** Card buttons play their own sound (a crisper press, a soft ping when the copy lands), within the visitor's sound setting. */
function sound(name: SoundName) {
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && soundAllowed()) playClickSound(name);
}

const PILL = "flex h-7 items-center rounded-full bg-white text-[12px] font-medium text-ink shadow-[0_0_0_1px_rgb(0_0_0/0.08),0_2px_6px_-2px_rgb(0_0_0/0.12)] transition-[background-color,transform] duration-150 hover:bg-tile active:scale-[0.96] motion-reduce:transition-none";

/** Figma's mark. */
export function FigmaMark({ size = 12 }: { size?: number }) {
  return (
    <svg width={(size * 38) / 57} height={size} viewBox="0 0 38 57" aria-hidden="true" className="shrink-0">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    </svg>
  );
}

/** React's atom mark. */
export function ReactMark({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23 23 20.46" aria-hidden="true" className="shrink-0">
      <circle r="2.05" fill="#087EA4" />
      <g fill="none" stroke="#087EA4" strokeWidth="1.2">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

/** Quick action: the format's logo plus a plain "Copy" label, so it reads at a glance. */
function QuickAction({ label, aria, pro, onClick, children }: { label: string; aria: string; pro: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} onPointerDown={() => sound("keyTap")} data-no-click-sound aria-label={aria} className={PILL + " gap-1.5 pl-2 pr-2.5"}>
      <span className="grid size-[14px] place-items-center">{children}</span>
      <span aria-live="polite" className="whitespace-nowrap">{label}</span>
      {pro && <Icon name="lock" size={11} />}
    </button>
  );
}

const SYSTEM_NAMES: Record<string, string> = { loopo: "Loopo", mailpulse: "MailPulse", auton: "Auton", axon: "Axon", veriq: "Veriq", vantage: "Vantage", montra: "Montra", spendix: "Spendix", abotix: "Abotix" };

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

  // which quick action just ran: shows "Copied" inside that button for a moment
  const [done, setDone] = useState<"code" | "figma" | null>(null);
  const [busy, setBusy] = useState<"code" | "figma" | null>(null);
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setDone(null), 1800);
    return () => clearTimeout(t);
  }, [done]);

  /**
   * One copy flow for both formats. The gate (/api/actions) hands out the file URL only after the guest limit
   * and Pro check; the clipboard write starts inside the click (ClipboardItem with a promise) so Safari keeps
   * the user gesture.
   */
  async function quickCopy(what: "code" | "figma") {
    if (busy) return;
    setBusy(what);
    const nav: { to: string | null } = { to: null };
    const body = (async () => {
      const res = await fetch("/api/actions", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ slug: item.slug, action: what === "code" ? "copy_code" : "copy_figma" }) });
      const data = (await res.json().catch(() => ({}))) as { error?: string; files?: { path: string; content: string }[]; codeUrl?: string; figmaUrl?: string };
      if (data.error === "login_required") nav.to = "/sign-up?next=/components/" + item.slug;
      else if (data.error === "upgrade_required") nav.to = "/pricing?from=" + item.slug;
      if (nav.to || !res.ok) throw new Error("copy blocked");
      if (what === "figma") {
        if (!data.figmaUrl) throw new Error("no figma payload");
        return (await fetch(data.figmaUrl)).text();
      }
      if (data.codeUrl) return (await fetch(data.codeUrl)).text();
      if (data.files) return data.files.map((f) => "// " + f.path + "\n" + f.content).join("\n\n");
      throw new Error("no code");
    })();
    const type = what === "code" ? "text/plain" : "text/html";
    try {
      if (typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
        await navigator.clipboard.write([new ClipboardItem({ [type]: body.then((t) => new Blob([t], { type })) })]);
      } else {
        await navigator.clipboard.writeText(await body);
      }
      pushRecent(item.slug);
      window.dispatchEvent(new Event("fu-usage"));
      sound("glassPop");
      setDone(what);
    } catch {
      await body.catch(() => null);
      if (nav.to) return router.push(nav.to);
      setNote("Couldn’t copy");
    } finally {
      setBusy(null);
    }
  }

  const href = "/components/" + item.slug;
  const coded = item.kind === "code" || !!item.qa;
  return (
    <div className="group relative">
      <Link href={href} className="block overflow-hidden rounded-[8px] bg-tile shadow-[inset_0_0_0_1px_var(--color-hair)]" style={surfaceStyle(item.system)}>
        <div className={"flex h-56 items-center overflow-hidden " + (item.kind === "figma" && !item.qa && (item.w ?? 1) / (item.h ?? 1) > 3.2 ? "justify-start" : "justify-center")}>
          {item.kind === "code" ? (
            <Preview slug={item.slug} size="card" />
          ) : item.qa ? (
            // the real design, rendered from the component's React code (not a screenshot)
            <div className="size-full p-3">
              <CardLive src={`/library-preview/${item.system}/${item.slug}.html`} w={item.w ?? 320} h={item.h ?? 200} thumb={item.thumb ?? ""} alt={item.name + " component preview"} />
            </div>
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
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-end gap-1.5 p-2 opacity-0 transition-opacity duration-150 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 max-lg:pointer-events-auto max-lg:opacity-100">
        {item.figma && (
          <QuickAction
            label={done === "figma" ? "Copied, paste in Figma" : busy === "figma" ? "Copying…" : "Copy"}
            aria={"Copy " + item.name + " to Figma as editable layers"}
            pro={item.tier === "pro"}
            onClick={() => quickCopy("figma")}
          >
            {done === "figma" ? <Icon name="check" size={13} /> : <FigmaMark size={13} />}
          </QuickAction>
        )}
        {coded && (
          <QuickAction
            label={done === "code" ? "Code copied" : busy === "code" ? "Copying…" : "Copy"}
            aria={"Copy the React code of " + item.name}
            pro={item.tier === "pro"}
            onClick={() => quickCopy("code")}
          >
            {done === "code" ? <Icon name="check" size={13} /> : <ReactMark size={14} />}
          </QuickAction>
        )}
        <button
          onClick={() => toggleSaved(item.slug)}
          onPointerDown={() => sound("keyTap")}
          data-no-click-sound
          className={PILL + " w-7 justify-center"}
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved" : "Save " + item.name}
        >
          <CIcon name="bookmark" size={14} className={saved ? "fill-ink" : ""} />
        </button>
      </div>
      {note && <span className="absolute left-2 top-2 rounded-full bg-ink px-2.5 py-1 text-[12px] text-white">{note}</span>}
      <div className="mt-2 flex items-center gap-2 px-0.5">
        <Link href={href} className="truncate text-[13px] font-medium hover:underline">
          {item.name}
        </Link>
        <span className="shrink-0 text-[12px] text-mute">{SYSTEM_NAMES[item.system] ?? item.system}</span>
        <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 text-[12px] text-mute">
          {/* formats as icons: React code (when it exists) and Figma (every item lives in Figma) */}
          <span className="inline-flex items-center gap-1" aria-label={coded ? "React code and Figma" : "Figma"} role="img">
            {coded && (
              <span title="React code" className="grid size-[20px] place-items-center rounded-[5px] bg-chip">
                <ReactMark size={13} />
              </span>
            )}
            <span title="Figma" className="grid size-[20px] place-items-center rounded-[5px] bg-chip">
              <FigmaMark size={11} />
            </span>
          </span>
          {item.tier === "pro" ? (
            <span className="inline-flex items-center gap-1">
              <Icon name="lock" size={11} /> Pro
            </span>
          ) : (
            "Free"
          )}
        </span>
      </div>
    </div>
  );
}
