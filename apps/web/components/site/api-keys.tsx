"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/registry/components/icons";
import { CLIENTS, clientFromKeyName, clientName, type ClientId } from "./connect-agent-config";

type Key = { id: string; name: string; prefix: string; createdAt: string; lastUsedAt: string | null };

export function ApiKeys({ initial }: { initial: Key[] }) {
  const [keys, setKeys] = useState(initial);
  const [fresh, setFresh] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [confirm, setConfirm] = useState<string | null>(null);

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
    const r = await fetch("/api/keys?id=" + encodeURIComponent(id), { method: "DELETE" });
    setConfirm(null);
    if (r.ok) setKeys((k) => k.filter((x) => x.id !== id));
  }

  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <input value={name} onChange={(e) => setName(e.target.value)} list="key-clients" placeholder="Key name, e.g. Claude Code laptop" aria-label="Key name" className="h-8 min-w-0 flex-1 sm:min-w-56 rounded-full bg-chip px-3.5 text-[13px] outline-none focus:bg-white focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]" />
        <datalist id="key-clients">
          {CLIENTS.map((c) => (
            <option key={c.id} value={c.name} />
          ))}
        </datalist>
        <button onClick={create} disabled={busy} className="btn-ink disabled:opacity-60">
          <Icon name="plus" size={14} /> Create key
        </button>
      </div>
      {fresh && (
        <div className="rounded-[8px] bg-tile p-4">
          <p className="text-[13px] font-medium">Copy your key now. It won’t be shown again.</p>
          <div className="mt-2 flex items-center gap-2">
            <code className="min-w-0 flex-1 truncate rounded-[6px] bg-white px-2 py-1.5 font-fu-mono text-[12px]">{fresh}</code>
            <button onClick={() => navigator.clipboard.writeText(fresh)} className="pill">
              <Icon name="copy" size={14} /> Copy
            </button>
          </div>
          <p className="mt-2 text-[12px] text-mute">
            Want the config with this key already filled in? <Link href="/mcp?connect=1" className="font-medium text-ink underline underline-offset-2">Connect your agent</Link> does it in one step.
          </p>
        </div>
      )}
      <div className="card overflow-hidden">
        {keys.length === 0 && <p className="p-5 text-center text-[13px] text-mute">No keys yet. Create one to connect Claude Code, Cursor or the CLI.</p>}
        {keys.map((k) => {
          const client: ClientId | null = clientFromKeyName(k.name);
          return (
            <div key={k.id} className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-b border-hair px-4 py-3 text-[13px] last:border-0">
              <div className="w-full min-w-0 sm:w-auto sm:flex-1">
                <p className="font-medium">{k.name}</p>
                <p className="flex flex-wrap gap-x-3 text-[12px] text-mute">
                  <span className="font-fu-mono">{k.prefix}…</span>
                  {client && k.name !== clientName(client) && <span>For {clientName(client)}</span>}
                  <span>Created {new Date(k.createdAt).toLocaleDateString()}</span>
                </p>
              </div>
              <p className="mr-auto text-[12px] text-mute sm:mr-0">{k.lastUsedAt ? "Used " + new Date(k.lastUsedAt).toLocaleDateString() : "Never used"}</p>
              {confirm === k.id ? (
                <span className="flex items-center gap-1.5">
                  <button onClick={() => revoke(k.id)} className="pill !bg-[#c4321b] !text-white" aria-label={"Confirm revoke " + k.name}>
                    Revoke now
                  </button>
                  <button onClick={() => setConfirm(null)} className="pill !bg-transparent hover:!bg-chip">
                    Keep
                  </button>
                </span>
              ) : (
                <button onClick={() => setConfirm(k.id)} className="pill !bg-transparent text-[#c4321b] hover:!bg-chip" aria-label={"Revoke " + k.name}>
                  Revoke
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
