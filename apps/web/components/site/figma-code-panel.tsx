"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { pushRecent } from "@/lib/local-library";
import { Icon } from "@/registry/components/icons";

/** Copy and view the generated React code of a Figma component that passed visual QA. */
export function FigmaCodePanel({ slug, codeUrl, score }: { slug: string; codeUrl: string; score: number }) {
  const router = useRouter();
  const [code, setCode] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  useEffect(() => {
    if (!note) return;
    const t = setTimeout(() => setNote(null), 2000);
    return () => clearTimeout(t);
  }, [note]);
  useEffect(() => {
    if (open && code === null) fetch(codeUrl).then((r) => r.text()).then(setCode).catch(() => setCode("// Couldn’t load the code."));
  }, [open, code, codeUrl]);

  async function copy() {
    const res = await fetch("/api/actions", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ slug, action: "copy_code" }) });
    const data = (await res.json().catch(() => ({}))) as { error?: string; codeUrl?: string };
    if (data.error === "login_required") return router.push("/sign-up?next=/components/" + slug);
    if (data.error === "upgrade_required") return router.push("/pricing?from=" + slug);
    if (!res.ok || !data.codeUrl) return setNote("Couldn’t copy");
    await navigator.clipboard.writeText(await (await fetch(data.codeUrl)).text()).catch(() => {});
    pushRecent(slug);
    window.dispatchEvent(new Event("fu-usage"));
    setNote("Code copied");
  }

  return (
    <div className="flex flex-col gap-1.5">
      <button onClick={copy} className="btn-ink w-full !justify-start !px-3">
        <Icon name="code" size={15} /> {note ?? "Copy React code"}
      </button>
      <button onClick={() => setOpen((o) => !o)} className="flex h-8 w-full items-center gap-2 rounded-full bg-chip px-3 text-[13px] hover:bg-chip-2" aria-expanded={open}>
        <Icon name="code" size={15} /> {open ? "Hide code" : "View code"}
      </button>
      <p className="mt-1 text-[12px] leading-snug text-mute">
        Matches its Figma original at {score}% in our visual check. Uses <Link href="/icons" className="underline underline-offset-2">Foundry Icons</Link>.
      </p>
      {open && (
        <pre className="card mt-2 max-h-[420px] overflow-auto p-3 font-fu-mono text-[11.5px] leading-relaxed">
          <code>{code ?? "Loading…"}</code>
        </pre>
      )}
    </div>
  );
}
