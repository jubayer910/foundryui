"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { toJpeg, toPng, toSvg } from "html-to-image";
import { Preview } from "./preview";
import { Icon, type IconName } from "@/registry/components/icons";
import { Dialog as D } from "@base-ui/react/dialog";

type Action = "copy_code" | "copy_figma" | "download_png" | "download_svg" | "download_jpeg" | "install";
type Gate = { error?: string; remaining?: number | null; files?: { path: string; content: string }[] };

export function ComponentWorkbench({ slug, name, files, installCmd, signedIn }: { slug: string; name: string; files: { path: string; content: string }[]; installCmd: string; signedIn: boolean }) {
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

  const btn = "inline-flex h-8 items-center gap-1.5 rounded-full border border-hair-2 bg-fu-surface px-3 text-[13px] font-medium text-fu-ink transition-colors hover:bg-fu-hover disabled:opacity-50";
  const A = ({ a, icon, label }: { a: Action; icon: IconName; label: string }) => (
    <button className={btn} onClick={() => run(a)} disabled={busy !== null}>
      <Icon name={icon} size={15} />
      {busy === a ? "Working…" : label}
    </button>
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <div className="mr-auto inline-flex rounded-full bg-fu-hover p-0.5">
          {(["preview", "code"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={"h-7 rounded-full px-3.5 text-[13px] font-medium capitalize transition-colors " + (tab === t ? "bg-fu-surface text-fu-ink" : "text-fu-muted")}>
              {t}
            </button>
          ))}
        </div>
        <A a="copy_code" icon="code" label="Copy code" />
        <A a="copy_figma" icon="layers" label="Copy to Figma" />
        <A a="download_png" icon="image" label="PNG" />
        <A a="download_svg" icon="download" label="SVG" />
        <A a="download_jpeg" icon="download" label="JPEG" />
      </div>

      <div className="overflow-hidden rounded-[14px] border border-hair bg-fu-surface">
        <div className={tab === "preview" ? "" : "hidden"}>
          <Preview ref={ref} slug={slug} />
        </div>
        {tab === "code" && (
          <div>
            <div className="flex gap-1 overflow-x-auto border-b border-hair bg-fu-sunken px-2 py-1.5">
              {files.map((f, i) => (
                <button key={f.path} onClick={() => setFile(i)} className={"shrink-0 rounded-fu-xs px-2.5 py-1 font-fu-mono text-xs " + (i === file ? "bg-fu-surface text-fu-ink" : "text-fu-muted hover:text-fu-ink")}>
                  {f.path.split("/").pop()}
                </button>
              ))}
            </div>
            <pre className="max-h-[520px] overflow-auto p-4 font-fu-mono text-[12.5px] leading-relaxed text-fu-body">
              <code>{files[file]?.content}</code>
            </pre>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2 rounded-fu-lg border border-hair bg-fu-surface p-2 pl-3">
        <code className="min-w-0 flex-1 truncate font-fu-mono text-xs text-fu-body">{installCmd}</code>
        <button className={btn} onClick={() => run("install")}>
          <Icon name="copy" size={15} /> Copy
        </button>
      </div>

      {!signedIn && remaining !== null && (
        <p className="text-xs text-fu-muted">
          {remaining > 0 ? remaining + " of 5 free actions left without an account. " : "You've used your 5 free actions. "}
          <Link href="/sign-up" className="font-medium text-fu-ink underline underline-offset-2">
            Create a free account
          </Link>{" "}
          for unlimited copies and the MCP server.
        </p>
      )}

      <div aria-live="polite" className={"fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-fu-ink px-4 py-2 text-[13px] font-medium text-white shadow-fu-overlay transition-[opacity,transform] duration-200 " + (toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0")}>
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
