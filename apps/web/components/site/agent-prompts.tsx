"use client";
import Link from "next/link";
import { useState } from "react";
import { CLIENTS, configText, type ClientId } from "./connect-agent-config";
import { ClientLogo } from "./client-logo";

/**
 * "Build it with your agent": two ready-to-copy prompts on every component and template page.
 * 1. Setup, once per project: connect the Ingot MCP for the chosen client and run init_project.
 * 2. This item: get_component_code (code) or get_figma_design + the Figma MCP's use_figma (Figma).
 * The prompts are public; the MCP checks the plan when the agent fetches Pro code or Figma steps.
 */
export function AgentPrompts({
  slug,
  name,
  systemName,
  category,
  template,
  hasCode,
  hasFigma,
  mcpUrl,
  menu,
}: {
  slug: string;
  name: string;
  systemName: string;
  category: string;
  template: boolean;
  hasCode: boolean;
  hasFigma: boolean;
  mcpUrl: string;
  /** Sidebar version: one "Prompt for your AI agent" dropdown instead of the full-width section. */
  menu?: boolean;
}) {
  const [client, setClient] = useState<ClientId>("claude");
  const [target, setTarget] = useState<"code" | "figma">(hasCode ? "code" : "figma");
  if (!hasCode && !hasFigma) return null;

  const cfg = configText(client, mcpUrl, "YOUR_API_KEY");
  const connect =
    client === "claude"
      ? `Connect the Ingot UI MCP server by running:\n   ${cfg.code}`
      : `Connect the Ingot UI MCP server: add this to ${cfg.label} (create the file if needed):\n${cfg.code.split("\n").map((l) => "   " + l).join("\n")}`;
  const setup = `Set up Ingot UI in this project.

1. ${connect}
   Replace YOUR_API_KEY with my key from https://ingotui.com/account (ask me for it if you don't have it).
2. Call the Ingot UI tool init_project for the ${systemName} system and write every file it returns (token CSS, CLAUDE.md, AGENTS.md, .cursor/rules/ingot.mdc).
3. From now on build UI from Ingot components and the --fu-* tokens, never raw hex colours, and run audit_ui before you finish.`;

  const what = template ? `the Ingot UI "${name}" dashboard screen (${systemName} system)` : `the Ingot UI "${name}" (${category.toLowerCase()}, ${systemName} system)`;
  const code = template
    ? `Build ${what} in this project.\n\nUse the Ingot UI MCP: call get_component_code with slug "${slug}" and write the file to the path it returns. Add it as a new page and link it from our navigation. Keep the code as it is, use the --fu-* tokens for anything new, and run audit_ui when you're done.`
    : `Add ${what} to this project.\n\nUse the Ingot UI MCP: call get_component_code with slug "${slug}" and write the file to the path it returns. Then place it where I need it, keep my existing layout, use the --fu-* tokens for anything new, and run audit_ui when you're done.`;
  const figma = `Build ${what} in my Figma file: PASTE_YOUR_FIGMA_FILE_LINK\n\nUse the Ingot UI MCP: call get_figma_design with slug "${slug}" and step 1. Run the program it returns, unchanged, with the Figma MCP tool use_figma on my file. Then call get_figma_design again with the next step until it says done. Every step goes on the same Figma page.`;

  const targetTabs =
    hasCode && hasFigma ? (
      <span role="tablist" aria-label="Where to build" className="inline-flex rounded-full bg-chip p-0.5">
        {(["code", "figma"] as const).map((t) => (
          <button key={t} type="button" role="tab" aria-selected={target === t} onClick={() => setTarget(t)} className={"h-6 rounded-full px-2.5 text-[12px] font-medium " + (target === t ? "bg-white text-ink shadow-[0_1px_2px_rgb(0_0_0/0.08)]" : "text-mute hover:text-ink")}>
            {t === "code" ? "React" : "Figma"}
          </button>
        ))}
      </span>
    ) : null;

  if (menu)
    return (
      <details className="card group p-3">
        <summary className="cursor-pointer text-[13px] font-medium">Prompt for your AI agent</summary>
        <p className="mt-2 text-[12px] leading-snug text-mute">
          Paste into Claude Code, Cursor, VS Code or Codex. Needs the <Link href="/mcp" className="underline underline-offset-2 hover:text-ink">Ingot MCP</Link>.
        </p>
        <MenuPrompt title={template ? "Build this screen" : "Build this component"} text={target === "code" ? code : figma} head={targetTabs} note={target === "figma" ? "Also needs the Figma MCP and a Figma file you can edit." : undefined} />
      </details>
    );

  return (
    <section className="mt-14" aria-labelledby="agent-h">
      <h2 id="agent-h" className="text-[13px] font-medium">Build it with your agent</h2>
      <p className="mt-1 text-[13px] text-mute">Copy the setup prompt once per project, then the prompt for this {template ? "screen" : "component"}. Works with Claude Code, Cursor, VS Code and Codex through the <Link href="/mcp" className="underline underline-offset-2 hover:text-ink">Ingot MCP</Link>.</p>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <PromptCard
          step="1"
          title="Set up Ingot UI"
          text={setup}
          head={
            <label className="select-pill relative inline-flex items-center gap-1.5">
              <ClientLogo id={client} size={14} />
              <span className="truncate">{CLIENTS.find((c) => c.id === client)!.name}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-mute"><path d="M6 9l6 6l6 -6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <select aria-label="Your agent" value={client} onChange={(e) => setClient(e.target.value as ClientId)} className="absolute inset-0 h-full w-full cursor-pointer appearance-none rounded-full opacity-0">
                {CLIENTS.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </label>
          }
        />
        <PromptCard
          step="2"
          title={template ? "Build this screen" : "Build this component"}
          text={target === "code" ? code : figma}
          note={target === "figma" ? "Needs the Figma MCP connected in your agent too, and a Figma file you can edit." : undefined}
          head={
            hasCode && hasFigma ? (
              <span role="tablist" aria-label="Where to build" className="inline-flex rounded-full bg-chip p-0.5">
                {(["code", "figma"] as const).map((t) => (
                  <button key={t} type="button" role="tab" aria-selected={target === t} onClick={() => setTarget(t)} className={"h-6 rounded-full px-2.5 text-[12px] font-medium " + (target === t ? "bg-white text-ink shadow-[0_1px_2px_rgb(0_0_0/0.08)]" : "text-mute hover:text-ink")}>
                    {t === "code" ? "React code" : "Figma"}
                  </button>
                ))}
              </span>
            ) : (
              <span className="text-[12px] text-mute">{hasCode ? "React code" : "Figma"}</span>
            )
          }
        />
      </div>
    </section>
  );
}

function PromptCard({ step, title, text, head, note }: { step: string; title: string; text: string; head: React.ReactNode; note?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="card flex min-w-0 flex-col">
      <div className="flex items-center justify-between gap-2 border-b border-hair px-3 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-ink text-[11px] font-medium text-white">{step}</span>
          <span className="truncate text-[13px] font-medium">{title}</span>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {head}
          <button
            type="button"
            onClick={async () => {
              await navigator.clipboard.writeText(text).catch(() => {});
              setCopied(true);
              setTimeout(() => setCopied(false), 1800);
            }}
            className="h-7 rounded-full border border-hair bg-white px-3 text-[12px] font-medium hover:bg-tile"
          >
            <span aria-live="polite">{copied ? "Copied" : "Copy prompt"}</span>
          </button>
        </div>
      </div>
      <pre className="m-0 max-h-[320px] flex-1 overflow-auto whitespace-pre-wrap break-words px-4 py-3 font-fu-mono text-[12px] leading-[1.6] text-ink-2">{text}</pre>
      {note && <p className="border-t border-hair px-4 py-2 text-[12px] text-mute">{note}</p>}
    </div>
  );
}

function MenuPrompt({ title, text, head, note }: { title: string; text: string; head: React.ReactNode; note?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-[12px] font-medium">{title}</span>
        {head}
      </div>
      <pre className="mt-2 max-h-[148px] overflow-auto whitespace-pre-wrap break-words rounded-[6px] bg-tile p-2 font-fu-mono text-[11px] leading-[1.55] text-ink-2">{text}</pre>
      {note && <p className="mt-1.5 text-[11.5px] leading-snug text-mute">{note}</p>}
      <button
        type="button"
        className="pill mt-2 !h-7"
        onClick={async () => {
          await navigator.clipboard.writeText(text).catch(() => {});
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }}
      >
        <span aria-live="polite">{copied ? "Copied" : "Copy prompt"}</span>
      </button>
    </div>
  );
}
