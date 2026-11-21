"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/registry/components/icons";
import { CIcon } from "./chrome-icon";
import { CopyBlock } from "./copy-block";
import { ClientLogo } from "./client-logo";
import { CLIENTS, SETUP_PROMPT, TEST_PROMPT, clientName, configText, deepLink, mcpUrlFor, type ClientId } from "./connect-agent-config";

type Session = { email: string } | null | undefined;

const BUILD_PROMPT = "Build an analytics overview page with the Ingot UI Loopo system: KPI cards, a monthly revenue bar chart and a transactions table. Run audit_ui before you finish.";

/**
 * "Set up in under a minute": a numbered stepper, like the best MCP setup pages (Base, Magnific, Save.design).
 * 1 pick your agent (logo tiles), 2 get the key (made for you), 3 add it (one-click link for Cursor and VS Code,
 * one command for Claude Code and Codex), 4 try it (ready prompts). The server URL sits underneath for any other client.
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
  const root = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetch("/api/auth/get-session", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { user?: { email?: string } } | null) => d?.user ? { email: d.user.email ?? "" } : null)
      .catch(() => null)
      .then((who) => {
        // ?client=cursor (from the "Works with" logos or the sign-up round trip) preselects that agent
        const c = new URLSearchParams(window.location.search).get("client");
        if (c && CLIENTS.some((x) => x.id === c)) setClient(c as ClientId);
        setSession(who);
      });
  }, []);

  // Coming back from sign-up (?connect=1): bring the flow into view and put focus on the key button.
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
      setKey(((await r.json()) as { key: string }).key);
    } catch {
      setError("Couldn’t create a key. Try again, or create one in Account.");
    } finally {
      setBusy(false);
    }
  }

  const c = CLIENTS.find((x) => x.id === client)!;
  const cfg = configText(client, url, key ?? "YOUR_API_KEY");
  const oneClick = client === "cursor" || client === "vscode";
  const link = key ? deepLink(client, url, key) : null;
  const next = encodeURIComponent(returnTo + "&client=" + client);

  return (
    <section ref={root} id="connect" aria-labelledby="connect-h" className="card min-w-0 scroll-mt-6 self-start p-5 md:p-6">
      <h2 id="connect-h" className="text-[17px] font-medium tracking-[-0.01em]">
        Set up in under a minute
      </h2>
      <p className="mt-1 text-[13px] text-mute">Pick your agent. The key and the config are made for you, so there is nothing to fill in.</p>

      <ol className="mt-5">
        <Step n={1} done title="Pick your agent">
          <div role="radiogroup" aria-label="Your AI agent" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {CLIENTS.map((x) => {
              const on = x.id === client;
              return (
                <button
                  key={x.id}
                  role="radio"
                  aria-checked={on}
                  onClick={() => setClient(x.id)}
                  className={
                    "flex flex-col items-center gap-2 rounded-[10px] border bg-white px-3 py-3.5 text-[13px] transition-colors " +
                    (on ? "border-ink font-medium shadow-[0_0_0_1px_var(--color-ink)]" : "border-hair text-ink-2 hover:border-ink/30 hover:text-ink")
                  }
                >
                  <ClientLogo id={x.id} size={26} />
                  {x.name}
                </button>
              );
            })}
          </div>
        </Step>

        <Step n={2} done={!!key} title={key ? "Your API key is ready" : "Get your API key"}>
          {session === undefined && <div className="h-[60px] rounded-[8px] bg-tile" aria-hidden="true" />}

          {session === null && (
            <div className="flex flex-col gap-3 rounded-[8px] bg-tile p-3.5 sm:flex-row sm:items-center">
              <p className="flex-1 text-[13px]">A free account gives your agent its key. 20 seconds, no card.</p>
              <div className="flex shrink-0 gap-1.5">
                <Link href={"/sign-up?next=" + next} className="btn-ink">
                  Create free account
                </Link>
                <Link href={"/sign-in?next=" + next} className="btn-line">
                  Log in
                </Link>
              </div>
            </div>
          )}

          {session && !key && (
            <div className="flex flex-col gap-3 rounded-[8px] bg-tile p-3.5 sm:flex-row sm:items-center">
              <p className="flex-1 text-[13px] text-ink-2">
                Signed in as <span className="font-medium text-ink">{session.email || "you"}</span>. The key is named “{c.name}” so you can find it in Account.
              </p>
              <button ref={button} onClick={connect} disabled={busy} className="btn-ink shrink-0 disabled:opacity-60">
                <CIcon name="plug" size={14} /> {busy ? "Creating…" : "Create key"}
              </button>
            </div>
          )}

          {key && <KeyBox value={key} />}
          {error && (
            <p role="alert" className="mt-2 text-[13px] text-[#c4321b]">
              {error}
            </p>
          )}
        </Step>

        <Step n={3} title={"Add Ingot UI to " + c.name} logo={client}>
          <p className="mb-2.5 text-[13px] text-mute">{c.where}</p>
          {oneClick && (
            <div className="mb-2.5 flex flex-wrap items-center gap-2">
              {link ? (
                <a href={link} className="btn-ink">
                  <ClientLogo id={client} size={15} onDark /> Add to {c.name}
                </a>
              ) : (
                <span className="btn-ink pointer-events-none opacity-40" aria-disabled="true">
                  <ClientLogo id={client} size={15} onDark /> Add to {c.name}
                </span>
              )}
              {!link && <span className="text-[12px] text-mute">Get your key in step 2 first: the link carries it.</span>}
            </div>
          )}
          {oneClick ? (
            <details className="text-[13px]">
              <summary className="cursor-pointer text-mute hover:text-ink">Or paste the config yourself</summary>
              <div className="mt-2.5">
                <CopyBlock key={client + (key ?? "")} blocks={[{ ...cfg, icon: <ClientLogo id={client} size={13} /> }]} />
              </div>
            </details>
          ) : (
            <CopyBlock wrap={client === "claude"} key={client + (key ?? "")} blocks={[{ ...cfg, icon: <ClientLogo id={client} size={13} /> }]} />
          )}
          {!key && !oneClick && <p className="mt-1.5 text-[12px] text-mute">YOUR_API_KEY is filled in for you when you create your key.</p>}
          {client === "vscode" && <p className="mt-1.5 text-[12px] text-mute">Pasting into .vscode/mcp.json? Add it to .gitignore so the key never reaches your repo.</p>}
        </Step>

        <Step n={4} last title="Try it out">
          <p className="mb-2.5 text-[13px] text-mute">
            Restart {c.name} if it was open, then paste one of these. A list of {systemCount} design systems means it works.
          </p>
          <div className="card overflow-hidden">
            <PromptRow label="Check it works" text={TEST_PROMPT} />
            <PromptRow label="Set up a project" text={SETUP_PROMPT} />
            <PromptRow label="Build a screen" text={BUILD_PROMPT} />
          </div>
        </Step>
      </ol>

      <div className="mt-5 border-t border-hair pt-4">
        <p className="mb-2 text-[12px] text-mute">
          <span className="font-medium text-ink">Another MCP client?</span> Add this server URL, sent with the header <code className="font-fu-mono">Authorization: Bearer</code> and your key.
        </p>
        <CopyField value={url} />
      </div>
    </section>
  );
}

/** One row of the stepper: number (a check once done), title, then its content, joined by a rail. */
function Step({ n, title, done = false, last = false, logo, children }: { n: number; title: string; done?: boolean; last?: boolean; logo?: ClientId; children: ReactNode }) {
  return (
    <li className="relative flex gap-3.5 pb-6 last:pb-0">
      {!last && <span className="absolute top-7 bottom-1 left-[11.5px] w-px bg-hair" aria-hidden="true" />}
      <span className={"z-[1] flex size-6 shrink-0 items-center justify-center rounded-full text-[12px] font-medium " + (done ? "bg-ink text-white" : "border border-hair bg-white text-ink")}>
        {done ? <Icon name="check" size={13} /> : n}
      </span>
      <div className="min-w-0 flex-1 pt-0.5">
        <h3 className="mb-2.5 flex items-center gap-1.5 text-[14px] font-medium">
          <span className="sr-only">Step {n}: </span>
          {logo && <ClientLogo id={logo} size={15} />}
          {title}
        </h3>
        {children}
      </div>
    </li>
  );
}

function useCopy() {
  const [done, setDone] = useState(false);
  return [done, (text: string) => navigator.clipboard.writeText(text).then(() => { setDone(true); setTimeout(() => setDone(false), 1500); })] as const;
}

function KeyBox({ value }: { value: string }) {
  const [done, copy] = useCopy();
  return (
    <div className="rounded-[8px] bg-tile p-3.5" role="status">
      <div className="flex items-center gap-2">
        <code className="min-w-0 flex-1 truncate rounded-[6px] bg-white px-2 py-1.5 font-fu-mono text-[12px]">{value}</code>
        <button onClick={() => copy(value)} className="pill shrink-0">
          <Icon name={done ? "check" : "copy"} size={14} /> {done ? "Copied" : "Copy key"}
        </button>
      </div>
      <p className="mt-2 flex items-start gap-1.5 text-[12px] text-mute">
        <Icon name="lock" size={13} className="mt-px shrink-0" /> Shown once and stored only as a hash. It only reads the library; revoke it any time in Account.
      </p>
    </div>
  );
}

function PromptRow({ label, text }: { label: string; text: string }) {
  const [done, copy] = useCopy();
  return (
    <div className="flex items-center gap-3 border-b border-hair px-3.5 py-2.5 last:border-0">
      <span className="w-[112px] shrink-0 text-[12px] font-medium max-sm:hidden">{label}</span>
      <span className="min-w-0 flex-1 text-[13px] text-ink-2">
        <span className="block text-[12px] font-medium text-ink sm:hidden">{label}</span>
        {text}
      </span>
      <button onClick={() => copy(text)} className="pill !h-7 shrink-0" aria-label={"Copy prompt: " + label}>
        <Icon name={done ? "check" : "copy"} size={13} />
      </button>
    </div>
  );
}

function CopyField({ value }: { value: string }) {
  const [done, copy] = useCopy();
  return (
    <div className="flex min-w-0 flex-1 items-center gap-2 rounded-[8px] border border-hair bg-white py-1 pr-1 pl-2.5">
      <code className="min-w-0 flex-1 truncate font-fu-mono text-[12px]">{value}</code>
      <button onClick={() => copy(value)} className="pill !h-7 shrink-0" aria-label="Copy server URL">
        <Icon name={done ? "check" : "copy"} size={13} />
      </button>
    </div>
  );
}
