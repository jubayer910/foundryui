"use client";
import { useState } from "react";
import { Icon } from "@/registry/components/icons";

type Key = { id: string; name: string; prefix: string; createdAt: string; lastUsedAt: string | null };

export function ApiKeys({ initial }: { initial: Key[] }) {
  const [keys, setKeys] = useState(initial);
  const [fresh, setFresh] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  async function create() {
    setBusy(true);
    const r = await fetch("/api/keys", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: name || "My agent" }) });
    const d = (await r.json()) as { id: string; name: string; key: string };
    setBusy(false);
    if (!r.ok) return;
    setFresh(d.key);
    setName("");
    setKeys((k) => [{ id: d.id, name: d.name, prefix: d.key.slice(0, 10), createdAt: new Date().toISOString(), lastUsedAt: null }, ...k]);
  }
  async function revoke(id: string) {
    await fetch("/api/keys?id=" + id, { method: "DELETE" });
    setKeys((k) => k.filter((x) => x.id !== id));
  }

  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Key name, e.g. Claude Code laptop" className="h-9 min-w-56 flex-1 rounded-fu-sm border border-hair-2 bg-fu-surface px-3 text-sm outline-none focus:border-fu-accent" />
        <button onClick={create} disabled={busy} className="flex h-9 items-center gap-1.5 rounded-[10px] px-4 text-sm font-medium text-white bg-ink hover:bg-[#23262c] disabled:opacity-60">
          <Icon name="plus" size={16} /> Create key
        </button>
      </div>
      {fresh && (
        <div className="rounded-fu-lg border border-fu-positive/30 bg-fu-positive-soft p-4">
          <p className="text-[13px] font-medium text-fu-ink">Copy your key now. It won’t be shown again.</p>
          <div className="mt-2 flex items-center gap-2">
            <code className="min-w-0 flex-1 truncate rounded-fu-xs bg-fu-surface px-2 py-1.5 font-fu-mono text-xs text-fu-ink">{fresh}</code>
            <button onClick={() => navigator.clipboard.writeText(fresh)} className="flex h-8 items-center gap-1 rounded-[10px] border border-hair-2 bg-fu-surface px-3 text-[13px] font-medium">
              <Icon name="copy" size={14} /> Copy
            </button>
          </div>
        </div>
      )}
      <div className="overflow-hidden rounded-fu-lg border border-hair bg-fu-surface">
        {keys.length === 0 && <p className="p-5 text-center text-[13px] text-fu-muted">No keys yet.</p>}
        {keys.map((k) => (
          <div key={k.id} className="flex items-center gap-4 border-b border-hair px-4 py-3 text-[13px] last:border-0">
            <div className="min-w-0 flex-1">
              <p className="font-medium text-fu-ink">{k.name}</p>
              <p className="font-fu-mono text-xs text-fu-muted">{k.prefix}…</p>
            </div>
            <p className="hidden text-xs text-fu-muted sm:block">{k.lastUsedAt ? "Used " + new Date(k.lastUsedAt).toLocaleDateString() : "Never used"}</p>
            <button onClick={() => revoke(k.id)} className="rounded-full px-3 py-1 text-[13px] font-medium text-fu-negative-text hover:bg-fu-negative-soft">
              Revoke
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
