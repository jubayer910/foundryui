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
import { NewMark } from "./new-mark";
import { Icon } from "@/registry/components/icons";
import { playClickSound, type SoundName } from "./cursor/click-sounds";
import { soundAllowed } from "./cursor/custom-cursor";

/** Card buttons play their own sound (a crisper press, a soft ping when the copy lands), within the visitor's sound setting. */
function sound(name: SoundName) {
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && soundAllowed()) playClickSound(name);
}

/** Hugeicons strokes (copy-01, tick-02) for the quiet parts of the toolbar. */
function Glyph({ d, size = 14, className = "" }: { d: React.ReactNode; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={"shrink-0 " + className}>
      {d}
    </svg>
  );
}
/** Figma's original mark, in its own colours. */
export const FigmaGlyph = ({ size = 14 }: { size?: number; className?: string }) => (
  <svg width={(size * 38) / 57} height={size} viewBox="0 0 38 57" aria-hidden="true" className="shrink-0">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
  </svg>
);
/** React's original atom, in its brand blue. */
export const ReactGlyph = ({ size = 14 }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23 23 20.46" aria-hidden="true" className="shrink-0">
    <circle r="2.05" fill="#58C4DC" />
    <g fill="none" stroke="#58C4DC" strokeWidth="1.1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);
const CopyGlyph = (p: { size?: number; className?: string }) => (
  <Glyph
    {...p}
    d={
      <>
        <path d="M7.5 14.5c0-3.3 0-4.95 1.025-5.975S11.2 7.5 14.5 7.5s4.95 0 5.975 1.025S21.5 11.2 21.5 14.5s0 4.95-1.025 5.975S17.8 21.5 14.5 21.5s-4.95 0-5.975-1.025S7.5 17.8 7.5 14.5" />
        <path d="M7.5 16.5c-1.396 0-2.095 0-2.656-.196a3.5 3.5 0 0 1-2.148-2.148C2.5 13.595 2.5 12.896 2.5 11.5v-2c0-3.3 0-4.95 1.025-5.975S6.2 2.5 9.5 2.5h2c1.396 0 2.095 0 2.656.196a3.5 3.5 0 0 1 2.148 2.148c.196.561.196 1.26.196 2.656" />
      </>
    }
  />
);
const TickGlyph = (p: { size?: number; className?: string }) => <Glyph {...p} d={<path d="m5 14l3.5 3.5L19 6.5" />} />;

/**
 * One button of the hover toolbar: icons only, with a small tooltip naming the action (hover or keyboard focus),
 * so the card stays minimal but nobody has to guess.
 */
/** Thin vertical rule between toolbar segments, so each action reads as its own target. */
const Divider = () => <span aria-hidden="true" className="mx-0.5 h-4 w-px shrink-0 bg-black/[0.09]" />;

function ToolButton({ tip, aria, onClick, pressed, children }: { tip: string; aria: string; onClick: () => void; pressed?: boolean; children: React.ReactNode }) {
  return (
    <span className="group/tb relative">
      <button
        type="button"
        onClick={onClick}
        onPointerDown={() => sound("keyTap")}
        data-no-click-sound
        aria-label={aria}
        aria-pressed={pressed}
        className="flex h-7 items-center gap-1.5 rounded-full px-2.5 text-ink/70 transition-[background-color,color,transform] duration-150 hover:bg-black/[0.05] hover:text-ink active:scale-[0.94] motion-reduce:transition-none"
      >
        {children}
      </button>
      <span
        role="tooltip"
        aria-live="polite"
        className="pointer-events-none absolute right-0 top-[calc(100%+6px)] z-20 whitespace-nowrap rounded-[6px] bg-ink px-2 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity duration-150 group-focus-within/tb:opacity-100 group-hover/tb:opacity-100 group-hover/tb:delay-150"
      >
        {tip}
      </span>
    </span>
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
      {/* hover toolbar: hidden until the card is hovered or focused (always shown on touch screens, which cannot hover) */}
      <div className="pointer-events-none absolute right-2 top-2 flex translate-y-0.5 items-center gap-px rounded-full bg-white/80 p-0.5 opacity-0 shadow-[0_0_0_1px_rgb(0_0_0/0.05)] backdrop-blur-md transition-[opacity,transform] duration-200 ease-out group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
        {item.figma && (
          <ToolButton
            tip={done === "figma" ? "Copied, paste in Figma" : busy === "figma" ? "Copying…" : item.tier === "pro" ? "Copy to Figma (Pro)" : "Copy to Figma"}
            aria={"Copy " + item.name + " to Figma as editable layers"}
            onClick={() => quickCopy("figma")}
          >
            <FigmaGlyph size={14} />
            {done === "figma" ? <TickGlyph size={13} className="text-[#16a34a]" /> : <CopyGlyph size={12} className="opacity-60" />}
          </ToolButton>
        )}
        {item.figma && coded && <Divider />}
        {coded && (
          <ToolButton
            tip={done === "code" ? "Code copied" : busy === "code" ? "Copying…" : item.tier === "pro" ? "Copy React code (Pro)" : "Copy React code"}
            aria={"Copy the React code of " + item.name}
            onClick={() => quickCopy("code")}
          >
            <ReactGlyph size={14} />
            {done === "code" ? <TickGlyph size={13} className="text-[#16a34a]" /> : <CopyGlyph size={12} className="opacity-60" />}
          </ToolButton>
        )}
        {(item.figma || coded) && <Divider />}
        <ToolButton tip={saved ? "Saved" : "Save"} aria={saved ? "Remove from saved" : "Save " + item.name} pressed={saved} onClick={() => toggleSaved(item.slug)}>
          <CIcon name="bookmark" size={14} className={saved ? "fill-ink" : ""} />
        </ToolButton>
      </div>
      {note && <span className="absolute left-2 top-2 rounded-full bg-ink px-2.5 py-1 text-[12px] text-white">{note}</span>}
      <div className="mt-2 flex items-center gap-2 px-0.5">
        <Link href={href} className="truncate text-[13px] font-medium hover:underline">
          {item.name}
        </Link>
        {item.newUntil && <NewMark until={item.newUntil} />}
        <span className="shrink-0 text-[12px] text-mute">{SYSTEM_NAMES[item.system] ?? item.system}</span>
        <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 text-[12px] text-mute">
          {/* formats as icons: React code (when it exists) and Figma (every item lives in Figma) */}
          <span className="inline-flex items-center gap-1.5" aria-label={coded ? "React code and Figma" : "Figma"} role="img">
            {coded && (
              <span title="React code">
                <ReactGlyph size={13} />
              </span>
            )}
            <span title="Figma">
              <FigmaGlyph size={13} />
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
