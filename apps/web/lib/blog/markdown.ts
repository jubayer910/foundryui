import type { Block } from "./types";

/**
 * Small, safe markdown → Block[] converter for posts written in the admin editor. Pure (no imports), so the
 * editor's live preview runs the same code as the site.
 *
 * Supported, one construct per paragraph (blank lines separate them):
 *   ## Heading            → h2 (anchor id made from the text)
 *   ### Heading           → h3
 *   - item / * item       → ul (an indented line continues the item above)
 *   1. item               → ol
 *   > text                → "Key takeaway" box
 *   ```label … ```        → code block; the text after the fence is the label shown above it
 *   | a | b | rows        → table (first row = header, a |---| separator row is skipped); a following
 *                           "Table: …" line becomes the caption
 *   anything else         → paragraph (lines joined with a space)
 * Inline markup is the one code posts use: [text](href), **bold**, `code`, {stat}.
 *
 * No raw HTML: text is rendered by React as text, never as markup. Links keep only /path, #anchor,
 * https://, http:// and mailto: targets; anything else (javascript:, data:, …) is reduced to its text.
 */

const SAFE_HREF = /^(\/(?!\/)|#|https?:\/\/|mailto:)/i;

/** Strip unsafe link targets and stray control characters from one line of inline markup. */
export function safeInline(s: string): string {
  return s
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "")
    .replace(/\[([^\]]+)\]\(([^)\s]*)\)/g, (m, text: string, href: string) => (SAFE_HREF.test(href) ? m : text));
}

/** Same rule as lib/blog slugify (plain text, lowercase, dashes), without the catalogue imports. */
export const anchor = (s: string) =>
  s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const cells = (line: string) =>
  line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => safeInline(c.trim()));

const isSep = (line: string) => /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line.trim());
const UL = /^\s{0,3}[-*]\s+(.*)$/;
const OL = /^\s{0,3}\d{1,3}[.)]\s+(.*)$/;

export function markdownToBlocks(md: string): Block[] {
  const lines = md.replace(/\r\n?/g, "\n").split("\n");
  const out: Block[] = [];
  let i = 0;
  const blank = (l: string | undefined) => l === undefined || l.trim() === "";
  // A line that starts a new construct ends the paragraph or list before it.
  const starts = (l: string) => /^\s{0,3}(#{2,3}\s|>|```|\|)/.test(l) || UL.test(l) || OL.test(l);

  while (i < lines.length) {
    const line = lines[i];
    if (blank(line)) {
      i++;
      continue;
    }
    const t = line.trim();

    // Fenced code. Unclosed fences run to the end of the text.
    if (t.startsWith("```")) {
      const label = t.slice(3).trim();
      const body: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) body.push(lines[i++]);
      i++;
      out.push(label ? { t: "code", x: body.join("\n"), label: label.slice(0, 80) } : { t: "code", x: body.join("\n") });
      continue;
    }

    const h = /^(#{1,6})\s+(.*)$/.exec(t);
    if (h) {
      const x = safeInline(h[2].replace(/\s+#+\s*$/, "").trim());
      // # and ## are both section headings (the page has its own h1); ### and deeper are sub-headings.
      // The anchor id is added later (lib/blog prepare, after {stat} placeholders are filled).
      out.push(h[1].length <= 2 ? { t: "h2", x } : { t: "h3", x });
      i++;
      continue;
    }

    if (t.startsWith(">")) {
      const parts: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) parts.push(lines[i++].trim().replace(/^>\s?/, ""));
      out.push({ t: "takeaway", x: safeInline(parts.join(" ").replace(/\s+/g, " ").trim()) });
      continue;
    }

    if (t.startsWith("|")) {
      const rows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(lines[i++]);
      const [head, ...rest] = rows.filter((r) => !isSep(r));
      const block: Extract<Block, { t: "table" }> = { t: "table", head: head ? cells(head) : [], rows: rest.map(cells) };
      let j = i;
      while (blank(lines[j]) && j < lines.length) j++;
      const cap = /^table:\s*(.+)$/i.exec(lines[j]?.trim() ?? "");
      if (cap) {
        block.caption = safeInline(cap[1]);
        i = j + 1;
      }
      out.push(block);
      continue;
    }

    const list = UL.test(line) ? UL : OL.test(line) ? OL : null;
    if (list) {
      const items: string[] = [];
      while (i < lines.length) {
        const l = lines[i];
        const m = list.exec(l);
        if (m) {
          items.push(m[1].trim());
          i++;
        } else if (!blank(l) && /^\s{2,}\S/.test(l) && items.length) {
          items[items.length - 1] += " " + l.trim();
          i++;
        } else break;
      }
      out.push({ t: list === UL ? "ul" : "ol", items: items.map(safeInline) });
      continue;
    }

    const para: string[] = [];
    while (i < lines.length && !blank(lines[i]) && (para.length === 0 || !starts(lines[i]))) para.push(lines[i++].trim());
    out.push({ t: "p", x: safeInline(para.join(" ")) });
  }
  return out;
}

/**
 * Split a database post's markdown into the lede (its first paragraph, shown large under the cover like the
 * answer-first opening of code posts) and the body blocks.
 */
export function markdownToPost(md: string): { lede: string; body: Block[] } {
  const blocks = markdownToBlocks(md);
  const first = blocks[0];
  return first?.t === "p" ? { lede: first.x, body: blocks.slice(1) } : { lede: "", body: blocks };
}

const tableMd = (b: Extract<Block, { t: "table" }>) => {
  const row = (r: string[]) => "| " + r.map((c) => c.replace(/\|/g, "/")).join(" | ") + " |";
  return [row(b.head), "|" + b.head.map(() => " --- ").join("|") + "|", ...b.rows.map(row), ...(b.caption ? ["", "Table: " + b.caption] : [])].join("\n");
};

/**
 * The other direction, for "Duplicate to editor" on code posts. Blocks markdown can't express are written as
 * plain text: component grids become a list of links, packs a heading with a list, call-to-action boxes a paragraph.
 */
export function blocksToMarkdown(lede: string, blocks: Block[]): string {
  const parts: string[] = lede ? [lede] : [];
  for (const b of blocks) {
    switch (b.t) {
      case "p": parts.push(b.x); break;
      case "h2": parts.push("## " + b.x); break;
      case "h3": parts.push("### " + b.x); break;
      case "ul": parts.push(b.items.map((x) => "- " + x).join("\n")); break;
      case "ol": parts.push(b.items.map((x, n) => `${n + 1}. ${x}`).join("\n")); break;
      case "takeaway": parts.push("> " + b.x); break;
      case "table": parts.push(tableMd(b)); break;
      case "code": parts.push("```" + (b.label ?? "") + "\n" + b.x + "\n```"); break;
      case "components":
        if (b.slugs.length) parts.push(b.slugs.map((s) => `- [${s}](/components/${s})`).join("\n") + (b.caption ? "\n\n" + b.caption : ""));
        break;
      case "pack":
        parts.push(`### ${b.rank}. ${b.system}`, `**Best for:** ${b.bestFor}`, b.strengths.map((x) => "- " + x).join("\n"));
        break;
      case "cta":
        parts.push(`**${b.h ?? "Build your dashboard from a finished system"}** ${b.x ?? ""} [${b.label ?? "Browse components"}](${b.href ?? "/"})`.replace(/\s+/g, " ").trim());
        break;
    }
  }
  return parts.join("\n\n") + "\n";
}
