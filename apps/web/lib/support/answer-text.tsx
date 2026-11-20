import type { ReactNode } from "react";

/** KB answers carry a tiny markup: [text](/path) links, **bold** and `code`. Safe for server and client. */
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|`([^`]+)`|\*\*([^*]+)\*\*/g;

/** Only relative links and mailto are rendered as links; anything else stays plain text. */
const safeHref = (h: string) => (/^(\/(?!\/)|#|mailto:)/.test(h) ? h : null);

export function AnswerText({ text, linkClass = "font-medium text-ink underline underline-offset-2" }: { text: string; linkClass?: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) out.push(linkEmails(text.slice(last, m.index), k++, linkClass));
    if (m[1] !== undefined) {
      const href = safeHref(m[2]);
      out.push(href ? <a key={k++} href={href} className={linkClass}>{m[1]}</a> : m[1]);
    } else if (m[4] !== undefined) {
      out.push(<strong key={k++} className="font-medium text-ink">{m[4]}</strong>);
    } else {
      out.push(<code key={k++} className="rounded-[4px] bg-chip px-1 py-px font-fu-mono text-[0.92em] text-ink">{m[3]}</code>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(linkEmails(text.slice(last), k++, linkClass));
  return <>{out}</>;
}

type Block = { kind: "p"; lines: string[] } | { kind: "ol" | "ul"; items: string[] };

/** Split an answer into paragraphs and lists: "1. step" lines make a numbered list, "- item" lines a bulleted one. */
export function answerBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  for (const raw of text.replace(/\r/g, "").split("\n")) {
    const line = raw.trim();
    const last = blocks[blocks.length - 1];
    if (!line) {
      if (last) blocks.push({ kind: "p", lines: [] });
      continue;
    }
    const ol = line.match(/^\d+[.)]\s+(.*)$/);
    const ul = line.match(/^[-*•]\s+(.*)$/);
    if (ol || ul) {
      const kind = ol ? "ol" : "ul";
      const item = (ol ?? ul)![1];
      if (last && last.kind === kind) last.items.push(item);
      else blocks.push({ kind, items: [item] });
    } else if (last && last.kind === "p" && last.lines.length) last.lines.push(line);
    else if (last && last.kind === "p") last.lines.push(line);
    else blocks.push({ kind: "p", lines: [line] });
  }
  return blocks.filter((b) => (b.kind === "p" ? b.lines.length > 0 : b.items.length > 0));
}

/** A full answer: paragraphs, numbered and bulleted lists, with the inline markup inside. */
export function AnswerBlocks({ text, className = "", linkClass }: { text: string; className?: string; linkClass?: string }) {
  const blocks = answerBlocks(text);
  return (
    <div className={"flex flex-col gap-2 [overflow-wrap:anywhere] " + className}>
      {blocks.map((b, i) =>
        b.kind === "p" ? (
          <p key={i}>
            {b.lines.map((l, j) => (
              <span key={j}>
                {j > 0 && <br />}
                <AnswerText text={l} linkClass={linkClass} />
              </span>
            ))}
          </p>
        ) : b.kind === "ol" ? (
          <ol key={i} className="flex list-decimal flex-col gap-1 pl-5 marker:text-mute">
            {b.items.map((it, j) => (
              <li key={j} className="pl-0.5">
                <AnswerText text={it} linkClass={linkClass} />
              </li>
            ))}
          </ol>
        ) : (
          <ul key={i} className="flex flex-col gap-1">
            {b.items.map((it, j) => (
              <li key={j} className="relative pl-4 before:absolute before:left-0 before:text-mute before:content-['–']">
                <AnswerText text={it} linkClass={linkClass} />
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}

/** Turn plain email addresses into mailto links. */
function linkEmails(s: string, key: number, linkClass: string): ReactNode {
  const parts = s.split(/([\w.+-]+@[\w-]+\.[\w.]+[\w])/);
  if (parts.length === 1) return s;
  return (
    <span key={key}>
      {parts.map((p, i) => (i % 2 ? <a key={i} href={"mailto:" + p} className={linkClass}>{p}</a> : p))}
    </span>
  );
}

/** The answer as plain text (JSON-LD, previews). */
export const plainAnswer = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");

/** First sentence(s) up to about n characters, for compact cards. */
export function shortAnswer(s: string, n = 150) {
  const p = plainAnswer(s).replace(/\s*\n+\s*/g, " ");
  if (p.length <= n) return p;
  const cut = p.slice(0, n);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "));
  return end > 40 ? cut.slice(0, end + 1) : cut.slice(0, cut.lastIndexOf(" ")) + "…";
}
