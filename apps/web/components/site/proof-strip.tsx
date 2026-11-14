/**
 * Social proof slot for the home page. Renders NOTHING until real data is passed in.
 * Rules: only real quotes from real, named customers who agreed to be quoted, and only counts
 * read from real data (D1, Lemon Squeezy, GitHub). Never placeholders, never rounded-up guesses.
 *
 * To turn it on, fill HOME_PROOF below (or pass props from the page). Counts that change at
 * runtime must not be baked into the static home page: pass them only from a fresh build, or
 * render this strip from a client fetch of an API route instead.
 */

export type Testimonial = {
  quote: string;
  name: string;
  /** e.g. "Founder, Acme". Shown under the name. */
  role: string;
  /** optional link to the person or their product */
  href?: string;
};

export type ProofCount = {
  /** already formatted, e.g. "1,204" */
  value: string;
  /** e.g. "founders building with Ingot UI" */
  label: string;
};

export type ProofData = { testimonials?: Testimonial[]; counts?: ProofCount[] };

/** The lead feeds this when real proof exists. Empty = the strip is not rendered at all. */
export const HOME_PROOF: ProofData = { testimonials: [], counts: [] };

// static class names so Tailwind generates them
const COLS: Record<number, string> = { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3" };

export function ProofStrip({ testimonials = [], counts = [], className = "" }: ProofData & { className?: string }) {
  const quotes = testimonials.filter((t) => t.quote.trim() && t.name.trim() && t.role.trim()).slice(0, 3);
  const nums = counts.filter((c) => c.value.trim() && c.label.trim()).slice(0, 4);
  if (!quotes.length && !nums.length) return null;

  return (
    <section aria-label="What builders say" className={"mt-5 " + className}>
      {nums.length > 0 && (
        <dl className="flex flex-wrap gap-x-6 gap-y-2">
          {nums.map((c) => (
            <div key={c.label} className="flex items-baseline gap-1.5">
              <dt className="order-2 text-[12.5px] text-mute">{c.label}</dt>
              <dd className="order-1 text-[15px] font-medium tabular-nums">{c.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {quotes.length > 0 && (
        <ul className={"grid gap-3 " + COLS[quotes.length] + (nums.length ? " mt-3" : "")}>
          {quotes.map((t) => (
            <li key={t.name + t.quote.slice(0, 16)} className="card p-4">
              <figure>
                <blockquote className="text-[13px] leading-relaxed text-ink-2">{t.quote}</blockquote>
                <figcaption className="mt-3 text-[12px]">
                  {t.href ? (
                    <a href={t.href} rel="nofollow noopener" target="_blank" className="font-medium underline-offset-2 hover:underline">{t.name}</a>
                  ) : (
                    <span className="font-medium">{t.name}</span>
                  )}
                  <span className="block text-mute">{t.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
