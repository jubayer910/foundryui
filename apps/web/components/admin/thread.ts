/** Plain-text helpers for ticket replies (email body and the mailto fallback). */
export type Msg = { author: string; body: string; createdAt: Date };

export const ticketRef = (id: string) => id.slice(0, 8).toUpperCase();
export const replySubject = (subject: string, id: string) => `Re: ${subject.replace(/^re:\s*/i, "")} [Ticket ${ticketRef(id)}]`;

const who = (m: Msg, customer: string) => (m.author === "customer" ? customer : m.author === "bot" ? "Ingot UI help" : "Ingot UI support");

/** The reply, then the earlier thread quoted newest first. */
export function quotedBody(reply: string, earlier: Msg[], customer: string, maxLen = Infinity) {
  let out = reply.trim() + "\n";
  for (const m of [...earlier].reverse()) {
    const date = m.createdAt.toUTCString().replace(/:\d\d GMT$/, " UTC");
    const block = `\nOn ${date}, ${who(m, customer)} wrote:\n` + m.body.trim().split("\n").map((l) => "> " + l).join("\n") + "\n";
    if (out.length + block.length > maxLen) {
      out += "\n> [earlier messages trimmed]\n";
      break;
    }
    out += block;
  }
  return out;
}

/** mailto: link that opens Gmail (or any mail app) with the reply and quoted thread filled in. */
export function mailtoLink(to: string, subject: string, body: string) {
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
