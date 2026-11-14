"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/registry/components/icons";
import { CIcon } from "./chrome-icon";
import { CopyBlock } from "./copy-block";
import { CLIENTS, SETUP_PROMPT, TEST_PROMPT, clientName, configText, deepLink, mcpUrlFor, type ClientId } from "./connect-agent-config";

type Session = { email: string } | null | undefined;

/**
 * "Connect your agent" in one step: pick a client, press one button, paste what comes back.
 * The session is read in the browser so the page around it stays static and cacheable.
 * Signed out it sends people to sign-up and back here with ?connect=1.
 */
export function ConnectAgent({ siteUrl, systemCount, returnTo = "/mcp?connect=1" }: { siteUrl: string; systemCount: number; returnTo?: string }) {
  const url = mcpUrlFor(siteUrl);
  const [session, setSession] = useState<Session>(undefined);
  const [client, setClient] = useState<ClientId>("claude");
  const [key, setKey] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const root = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetch("/api/auth/get-session", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { user?: { email?: string } } | null) => setSession(d?.user ? { email: d.user.email ?? "" } : null))
      .catch(() => setSession(null));
    const sp = new URLSearchParams(window.location.search);
    const c = sp.get("client");
    if (c && CLIENTS.some((x) => x.id === c)) setClient(c as ClientId);
  }, []);

  // Coming back from sign-up (?connect=1): bring the flow into view and put focus on the button.
  useEffect(() => {
    if (session && new URLSearchParams(window.location.search).get("connect") === "1") {
      root.current?.scrollIntoView({ block: "start" });
      button.current?.focus();
    }
  }, [session]);

  async function connect() {
    setBusy(true);
    setError(null);
    try {
      const r = await fetch("/api/keys", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: clientName(client) }) });
      if (r.status === 401) return setSession(null);
      if (!r.ok) throw new Error();
      const d = (await r.json()) as { key: string };
      setKey(d.key);
    } catch {
      setError("Couldn’t create a key. Try again, or create one in Account.");
    } finally {
      setBusy(false);
    }
  }

  const c = CLIENTS.find((x) => x.id === client)!;
  const shownKey = key ?? "YOUR_API_KEY";
  const cfg = configText(client, url, shownKey);
  const link = key ? deepLink(client, url, key) : null;

  return (
    <section ref={root} id="connect" aria-labelledby="connect-h" className="card min-w-0 scroll-mt-6 self-start p-5 md:p-6">
      <div className="flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
          <CIcon name="plug" size={16} />
        </span>
        <div className="min-w-0">
          <h2 id="connect-h" className="text-[15px] font-medium tracking-[-0.01em]">
            Connect your agent
          </h2>
          <p className="mt-0.5 text-[13px] text-mute">One button makes your key and the config. Paste it once, and every session after that builds with Ingot UI.</p>
        </div>
      </div>

      <div role="group" aria-label="Your AI client" className="mt-4 flex flex-wrap gap-1.5">
        {CLIENTS.map((x) => (
          <button key={x.id} aria-pressed={x.id === client} data-on={x.id === client} onClick={() => setClient(x.id)} className="pill">
            {x.name}
          </button>
        ))}
      </div>

      {session === undefined && <div className="mt-4 h-[76px] rounded-[8px] bg-tile" aria-hidden="true" />}

      {session === null && (
        <div className="mt-4 flex flex-col gap-3 rounded-[8px] bg-tile p-4 sm:flex-row sm:items-center">
          <p className="flex-1 text-[13px]">A free account gives you the key your agent signs in with. It takes 20 seconds, no card.</p>
          <div className="flex shrink-0 gap-1.5">
            <Link href={"/sign-up?next=" + encodeURIComponent(returnTo + "&client=" + client)} className="btn-ink">
              Create free account
            </Link>
            <Link href={"/sign-in?next=" + encodeURIComponent(returnTo + "&client=" + client)} className="btn-line">
              Log in
            </Link>
          </div>
        </div>
      )}

      {session && !key && (
        <div className="mt-4 flex flex-col gap-3 rounded-[8px] bg-tile p-4 sm:flex-row sm:items-center">
          <p className="flex-1 text-[13px]">
            Creates an API key named “{c.name}” on {session.email || "your account"} and fills it into the {c.name} config.
          </p>
          <button ref={button} onClick={connect} disabled={busy} className="btn-ink shrink-0 disabled:opacity-60">
            <CIcon name="plug" size={14} /> {busy ? "Connecting…" : "Connect " + c.name}
          </button>
        </div>
      )}
      {error && (
        <p role="alert" className="mt-2 text-[13px] text-[#c4321b]">
          {error}
        </p>
      )}

      {session && key && (
        <div className="mt-4 flex flex-col gap-4">
          <div className="rounded-[8px] bg-tile p-4" role="status">
            <p className="flex items-center gap-1.5 text-[13px] font-medium">
              <Icon name="lock" size={15} /> Your key is shown once. Copy it or paste the config now.
            </p>
            <p className="mt-1 text-[12px] text-mute">It works in any client and is stored only as a hash. Lost it? Make a new one and revoke this one in Account.</p>
            <div className="mt-2 flex items-center gap-2">
              <code className="min-w-0 flex-1 truncate rounded-[6px] bg-white px-2 py-1.5 font-fu-mono text-[12px]">{key}</code>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(key).then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  })
                }
                className="pill shrink-0"
              >
                <Icon name={copied ? "check" : "copy"} size={14} /> {copied ? "Copied" : "Copy key"}
              </button>
            </div>
          </div>

          <div>
            <p className="text-[13px] font-medium">1. Add Ingot UI to {c.name}</p>
            <p className="mt-0.5 text-[13px] text-mute">{c.where}</p>
            {link && (
              <a href={link} className="btn-ink mt-2.5">
                <Icon name="arrow-up-right" size={14} /> Install in {c.name}
              </a>
            )}
            <div className="mt-2.5">
              <CopyBlock key={client} blocks={[cfg]} />
            </div>
            {client === "vscode" && <p className="mt-1.5 text-[12px] text-mute">If you paste into .vscode/mcp.json, add it to .gitignore so the key never reaches your repo.</p>}
          </div>

          <div>
            <p className="text-[13px] font-medium">2. Test the connection</p>
            <p className="mt-0.5 text-[13px] text-mute">Restart {c.name} if it was open, then ask your agent this. A list of {systemCount} design systems means it works.</p>
            <div className="mt-2.5">
              <CopyBlock blocks={[{ label: "Prompt", code: TEST_PROMPT }]} />
            </div>
          </div>

          <div>
            <p className="text-[13px] font-medium">3. Keep every session on the system</p>
            <p className="mt-0.5 text-[13px] text-mute">init_project writes CLAUDE.md, AGENTS.md and .cursor/rules into your project, so the next session starts with the rules already loaded.</p>
            <div className="mt-2.5">
              <CopyBlock blocks={[{ label: "Prompt", code: SETUP_PROMPT }]} />
            </div>
          </div>
        </div>
      )}

      {!key && (
        <details className="mt-4 text-[13px]">
          <summary className="cursor-pointer text-mute hover:text-ink">See the {c.name} config first</summary>
          <div className="mt-2.5">
            <CopyBlock key={client} blocks={[cfg]} />
          </div>
          <p className="mt-1.5 text-[12px] text-mute">YOUR_API_KEY is filled in for you when you connect.</p>
        </details>
      )}
    </section>
  );
}
