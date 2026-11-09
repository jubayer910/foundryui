"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { pushRecent, toggleSaved, useLibrary } from "@/lib/local-library";
import { CIcon } from "./chrome-icon";
import Link from "next/link";
import { toJpeg, toPng, toSvg } from "html-to-image";
import { Preview } from "./preview";
import { Icon } from "@/registry/components/icons";
import { Dialog as D } from "@base-ui/react/dialog";

type Action = "copy_code" | "copy_figma" | "download_png" | "download_svg" | "download_jpeg" | "install";
type Gate = { error?: string; remaining?: number | null; files?: { path: string; content: string }[] };

export function ComponentWorkbench({ slug, name, files, installCmd, signedIn, facts, prompt }: { slug: string; name: string; files: { path: string; content: string }[]; installCmd: string; signedIn: boolean; facts: ReactNode; prompt: string }) {
  const [width, setWidth] = useState<"full" | "tablet" | "mobile">("full");
  const saved = useLibrary("saved").includes(slug);
  const ref = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [file, setFile] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [gate, setGate] = useState<null | "login_required" | "upgrade_required">(null);
  const [busy, setBusy] = useState<Action | null>(null);

  useEffect(() => {
    if (signedIn) return;
    fetch("/api/usage").then((r) => r.json()).then((d: { remaining: number | null }) => setRemaining(d.remaining)).catch(() => {});
  }, [signedIn]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || (e.target as HTMLElement).closest("input,textarea,select,[contenteditable]")) return;
      const key = e.key.toLowerCase();
      if (key === "c") run("copy_code");
      else if (key === "f") run("copy_figma");
      else if (key === "s") toggleSaved(slug);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });

  async function run(action: Action) {
    setBusy(action);
    try {
      const res = await fetch("/api/actions", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ slug, action }) });
      const data = (await res.json()) as Gate;
      if (!res.ok) {
        if (data.error === "login_required" || data.error === "upgrade_required") setGate(data.error);
        else setToast("Something went wrong");
        return;
      }
      if (typeof data.remaining === "number") setRemaining(data.remaining);
      pushRecent(slug);
      window.dispatchEvent(new Event("fu-usage"));
      const node = ref.current?.firstElementChild as HTMLElement | null;
      const opts = { pixelRatio: 2, backgroundColor: "#ffffff", cacheBust: true };
      if (action === "copy_code" && data.files) {
        const bundle = data.files.map((f) => "// " + f.path + "\n" + f.content).join("\n\n");
        await navigator.clipboard.writeText(bundle);
        setToast("Copied " + data.files.length + " file" + (data.files.length > 1 ? "s" : ""));
      } else if (action === "install") {
        await navigator.clipboard.writeText(installCmd);
        setToast("Install command copied");
      } else if (action === "copy_figma" && node) {
        const svg = node.querySelector("svg");
        if (svg && node.querySelectorAll("svg").length === 1) {
          await navigator.clipboard.writeText(svg.outerHTML);
          setToast("SVG copied — paste into Figma for vectors");
        } else {
          const blob = await (await fetch(await toPng(node, opts))).blob();
          await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
          setToast("Copied — paste into Figma");
        }
      } else if (node) {
        const url = action === "download_png" ? await toPng(node, opts) : action === "download_jpeg" ? await toJpeg(node, { ...opts, quality: 0.95 }) : await toSvg(node, opts);
        const a = document.createElement("a");
        a.href = url;
        a.download = slug + "." + action.split("_")[1];
        a.click();
        setToast("Downloaded " + a.download);
      }
    } catch {
      setToast("Clipboard or export was blocked by the browser");
    } finally {
      setBusy(null);
    }
  }

  const sec = "flex h-8 w-full items-center gap-2 rounded-full bg-chip px-3 text-[13px] transition-colors hover:bg-chip-2 disabled:opacity-50";
  const kbd = "ml-auto rounded-[4px] bg-white px-1.5 text-[11px] text-mute";

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      <aside className="flex flex-col gap-4 lg:sticky lg:top-5 lg:self-start">
        {facts}
        <div className="flex flex-col gap-1.5">
          <button className="btn-ink w-full !justify-start !px-3" onClick={() => run("copy_code")} disabled={busy !== null}>
            <Icon name="code" size={15} /> {busy === "copy_code" ? "Copying…" : "Copy code"}
            <span className="ml-auto rounded-[4px] bg-white/15 px-1.5 text-[11px]">C</span>
          </button>
          <button className={sec} onClick={() => run("copy_figma")} disabled={busy !== null}>
            <Icon name="layers" size={15} /> {busy === "copy_figma" ? "Copying…" : "Copy to Figma"}
            <span className={kbd}>F</span>
          </button>
          <div className="grid grid-cols-3 gap-1.5">
            {(["download_png", "download_svg", "download_jpeg"] as const).map((a) => (
              <button key={a} className={sec + " justify-center"} onClick={() => run(a)} disabled={busy !== null}>
                {a.split("_")[1].toUpperCase()}
              </button>
            ))}
          </div>
          <button className={sec} onClick={() => toggleSaved(slug)} aria-pressed={saved}>
            <CIcon name="bookmark" size={15} className={saved ? "fill-ink" : ""} /> {saved ? "Saved" : "Save"}
            <span className={kbd}>S</span>
          </button>
        </div>
        <div className="card flex items-center gap-2 p-1.5 pl-3">
          <code className="min-w-0 flex-1 truncate font-fu-mono text-[12px]">{installCmd}</code>
          <button className="pill !h-7" onClick={() => run("install")} aria-label="Copy install command">
            <Icon name="copy" size={13} />
          </button>
        </div>
        <details className="card p-3">
          <summary className="cursor-pointer text-[13px] font-medium">Prompt for your AI agent</summary>
          <p className="mt-2 text-[12px] leading-snug text-mute">With the Foundry MCP connected, paste this into Claude Code, Cursor or Codex.</p>
          <p className="mt-2 rounded-[6px] bg-tile p-2 font-fu-mono text-[11.5px] leading-relaxed">{prompt}</p>
          <button className="pill mt-2 !h-7" onClick={() => navigator.clipboard.writeText(prompt).then(() => setToast("Prompt copied"))}>
            <Icon name="copy" size={13} /> Copy prompt
          </button>
        </details>
        {!signedIn && remaining !== null && (
          <p className="text-[12px] leading-snug text-mute">
            {remaining > 0 ? remaining + " of 5 free copies left without an account. " : "You’ve used your 5 free copies. "}
            <Link href={"/sign-up?next=/components/" + slug} className="font-medium text-ink underline underline-offset-2">
              Create a free account
            </Link>{" "}
            to keep copying.
          </p>
        )}
      </aside>

      <div className="min-w-0">
        <div className="mb-2 flex items-center gap-1.5">
          {(["preview", "code"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} data-on={tab === t} className="pill capitalize">
              {t}
            </button>
          ))}
          {tab === "preview" && (
            <div className="ml-auto flex gap-1.5" role="group" aria-label="Preview width">
              {(["full", "tablet", "mobile"] as const).map((w) => (
                <button key={w} onClick={() => setWidth(w)} data-on={width === w} className="pill capitalize">
                  {w === "full" ? "Desktop" : w}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="overflow-hidden rounded-[8px] bg-tile shadow-[inset_0_0_0_1px_var(--color-hair)]">
          <div className={tab === "preview" ? "flex min-h-[520px] items-center justify-center p-4 sm:p-8" : "hidden"}>
            <div className="w-full transition-[max-width] duration-300" style={{ maxWidth: width === "full" ? "100%" : width === "tablet" ? 768 : 390 }}>
              <div className="overflow-hidden rounded-[8px] bg-white shadow-[0_0_0_1px_var(--color-hair)]">
                <Preview ref={ref} slug={slug} />
              </div>
            </div>
          </div>
          {tab === "code" && (
            <div className="bg-white">
              <div className="flex gap-1 overflow-x-auto border-b border-hair px-2 py-1.5">
                {files.map((f, i) => (
                  <button key={f.path} onClick={() => setFile(i)} data-on={i === file} className="pill !h-6 shrink-0 font-fu-mono !text-[12px]">
                    {f.path.split("/").pop()}
                  </button>
                ))}
              </div>
              <pre className="max-h-[620px] overflow-auto p-4 font-fu-mono text-[12.5px] leading-relaxed">
                <code>{files[file]?.content}</code>
              </pre>
            </div>
          )}
        </div>
      </div>

      <div aria-live="polite" className={"fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white shadow-lg transition-[opacity,transform] duration-200 " + (toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0")}>
        {toast}
      </div>

      <D.Root open={gate !== null} onOpenChange={(o) => !o && setGate(null)}>
        <D.Portal>
          <D.Backdrop className="fixed inset-0 z-40 bg-[rgb(13_13_18/0.32)]" />
          <D.Popup className="fixed left-1/2 top-1/2 z-50 w-[min(420px,calc(100vw-32px))] -translate-x-1/2 -translate-y-1/2 rounded-fu-lg border border-hair bg-fu-surface p-6 shadow-fu-overlay">
            <D.Title className="text-lg font-medium tracking-[-0.02em] text-fu-ink">{gate === "upgrade_required" ? "This is a Pro component" : "Keep going with a free account"}</D.Title>
            <D.Description className="mt-2 text-sm leading-relaxed text-fu-muted">
              {gate === "upgrade_required"
                ? "Upgrade to Pro or Lifetime to copy " + name + " and every other Pro component."
                : "You've used the 5 free actions. Sign up free for unlimited copies of free components, plus MCP access for your AI agent. It takes 20 seconds."}
            </D.Description>
            <div className="mt-6 flex justify-end gap-2">
              <D.Close className="h-9 rounded-[10px] px-4 text-sm font-medium text-fu-body hover:bg-fu-hover">Not now</D.Close>
              <Link href={gate === "upgrade_required" ? "/pricing" : "/sign-up?next=/components/" + slug} className="flex h-9 items-center rounded-[10px] px-4 text-sm font-medium text-white bg-ink hover:bg-[#23262c]">
                {gate === "upgrade_required" ? "See plans" : "Create free account"}
              </Link>
            </div>
          </D.Popup>
        </D.Portal>
      </D.Root>
    </div>
  );
}
