"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { pushRecent } from "@/lib/local-library";
import { Icon } from "@/registry/components/icons";

/**
 * Copy a template to Figma as real, editable layers. The payload is Figma's own clipboard format, captured from
 * the Figma screen; /api/actions hands its URL out only after the guest limit and Pro gate. The clipboard write
 * starts inside the click (ClipboardItem with a promise) so Safari keeps the user gesture.
 */
export function FigmaCopy({ slug, label, variant = "pill", next = "/templates" }: { slug: string; label: string; variant?: "pill" | "wide"; next?: string }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");

  async function copy() {
    if (state === "busy") return;
    setState("busy");
    const nav: { to: string | null } = { to: null };
    const html = (async () => {
      const res = await fetch("/api/actions", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ slug, action: "copy_figma" }) });
      const data = (await res.json().catch(() => ({}))) as { error?: string; figmaUrl?: string };
      if (data.error === "login_required") nav.to = "/sign-up?next=" + encodeURIComponent(next);
      else if (data.error === "upgrade_required") nav.to = "/pricing?from=" + slug;
      if (nav.to || !res.ok || !data.figmaUrl) throw new Error("copy blocked");
      return (await fetch(data.figmaUrl)).text();
    })();
    try {
      await navigator.clipboard.write([new ClipboardItem({ "text/html": html.then((t) => new Blob([t], { type: "text/html" })) })]);
      pushRecent(slug);
      window.dispatchEvent(new Event("fu-usage"));
      setState("done");
      setTimeout(() => setState("idle"), 2500);
    } catch {
      await html.catch(() => null);
      if (nav.to) return router.push(nav.to);
      setState("error");
      setTimeout(() => setState("idle"), 2500);
    }
  }

  const text = state === "done" ? "Copied. Paste in Figma" : state === "error" ? "Couldn’t copy" : state === "busy" ? "Copying…" : "Copy to Figma";
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={"Copy the " + label + " template to Figma as editable layers"}
      className={
        variant === "wide"
          ? "btn-line w-full !justify-start !px-3"
          : "relative z-10 inline-flex h-7 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-chip px-3 text-[12px] font-medium text-ink hover:bg-chip-2"
      }
    >
      <Icon name="layers" size={13} />
      <span aria-live="polite">{text}</span>
    </button>
  );
}
