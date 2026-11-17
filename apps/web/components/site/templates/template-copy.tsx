"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { pushRecent } from "@/lib/local-library";
import { Icon } from "@/registry/components/icons";

/**
 * Copy the whole dashboard template as React code, straight from the card. Goes through /api/actions like every
 * other copy, so the guest limit and the Pro gate apply, and the code URL is handed out only after that check.
 */
export function TemplateCopy({ slug, label }: { slug: string; label: string }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");

  async function copy() {
    if (state === "busy") return;
    setState("busy");
    // Gate first, then the code file. Kept as one promise so the clipboard write can start inside the click
    // (Safari drops the user gesture across awaits, and a template file is ~250 KB).
    const nav: { to: string | null } = { to: null };
    const code = (async () => {
      const res = await fetch("/api/actions", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ slug, action: "copy_code" }) });
      const data = (await res.json().catch(() => ({}))) as { error?: string; codeUrl?: string };
      if (data.error === "login_required") nav.to = "/sign-up?next=/templates";
      else if (data.error === "upgrade_required") nav.to = "/pricing?from=" + slug;
      if (nav.to || !res.ok || !data.codeUrl) throw new Error("copy blocked");
      return (await fetch(data.codeUrl)).text();
    })();
    try {
      if (typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
        await navigator.clipboard.write([new ClipboardItem({ "text/plain": code.then((t) => new Blob([t], { type: "text/plain" })) })]);
      } else {
        await navigator.clipboard.writeText(await code);
      }
      pushRecent(slug);
      window.dispatchEvent(new Event("fu-usage"));
      setState("done");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      await code.catch(() => null);
      if (nav.to) return router.push(nav.to);
      setState("error");
      setTimeout(() => setState("idle"), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={"Copy the React code of the " + label + " template"}
      className="relative z-10 inline-flex h-7 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-3 text-[12px] font-medium text-white hover:bg-ink/85"
    >
      <Icon name="code" size={13} />
      <span aria-live="polite">{state === "done" ? "Code copied" : state === "error" ? "Couldn’t copy" : state === "busy" ? "Copying…" : "Copy code"}</span>
    </button>
  );
}
