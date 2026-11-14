import type { ReactNode } from "react";

/** KB answers carry a tiny markup: [text](/path) links and `code`. Safe for server and client. */
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|`([^`]+)`/g;

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
    } else {
      out.push(<code key={k++} className="rounded-[4px] bg-chip px-1 py-px font-fu-mono text-[0.92em] text-ink">{m[3]}</code>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(linkEmails(text.slice(last), k++, linkClass));
  return <>{out}</>;
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
export const plainAnswer = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/`([^`]+)`/g, "$1");

/** First sentence(s) up to about n characters, for compact cards. */
export function shortAnswer(s: string, n = 150) {
  const p = plainAnswer(s);
  if (p.length <= n) return p;
  const cut = p.slice(0, n);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "));
  return end > 40 ? cut.slice(0, end + 1) : cut.slice(0, cut.lastIndexOf(" ")) + "…";
}
