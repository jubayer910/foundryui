import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { JsonLd, ORG_ID, abs, breadcrumbLd, fmt, pageMeta } from "@/lib/seo";
import summary from "./summary.json";

export const metadata: Metadata = pageMeta({
  title: "Accessibility statement: WCAG 2.2 AA target",
  description: "How Ingot UI tests components for accessibility (axe-core and keyboard checks), what passes today, known gaps in generated code, and how to report a problem.",
  path: "/accessibility",
});

type Issue = { id: string; help: string; helpUrl: string; impact: string; level: string; components: number; nodes: number; examples: { slug: string; system: string; kind: string; summary?: string }[] };
type Stop = { role: string; label: string; hasName: boolean; focus: string };
type Kb = { slug: string; tabStops: Stop[]; overlay?: { role: string | null; focusInside: boolean; escapeCloses: boolean; focusReturns: boolean; arrowKeysMove: boolean | null; focusTrapped: boolean | null } | null; tabs?: { arrowMovesFocus: boolean; selectedFollows: boolean } | null };
type Summary = {
  date: string; tool: string; rules: string;
  checked: { total: number; generated: number; handBuilt: number };
  cleanAtWcagAA: number;
  bySystem: Record<string, { checked: number; clean: number }>;
  topIssues: Issue[];
  keyboard: Kb[];
  sitePages?: { path: string; violations?: { id: string; level: string; nodes: number; help: string }[] }[];
  codeCensus: { files: number; withButton: number; withInput: number; withRole: number; withAriaLabel: number; withHeading: number };
};
const S = summary as unknown as Summary;

const H = "mt-10 scroll-mt-6 text-[15px] font-medium";
const P = "mt-2 text-[14px] leading-relaxed text-ink-2";
const A = "font-medium text-ink underline underline-offset-2";
const SYS: Record<string, string> = { loopo: "Loopo", auton: "Auton", mailpulse: "MailPulse", axon: "Axon", veriq: "Veriq", vantage: "Vantage" };
const date = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function Accessibility() {
  const c = S.codeCensus;
  const kb = S.keyboard ?? [];
  const stops = kb.reduce((n, k) => n + k.tabStops.length, 0);
  const named = kb.reduce((n, k) => n + k.tabStops.filter((t) => t.hasName && t.focus === "indicator").length, 0);
  const site = (S.sitePages ?? []).filter((p) => p.violations);
  const siteRules = [...new Set(site.flatMap((p) => p.violations!.filter((v) => v.level !== "best practice").map((v) => v.help)))];
  const overlays = kb.filter((k) => k.overlay);
  const nav: [string, string][] = [["target", "Our target"], ["tested", "What we test and how"], ["results", "Latest results"], ["gaps", "Known gaps"], ["report", "Report a problem"]];
  return (
    <div className="max-w-[1100px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["Accessibility", "/accessibility"]]),
          { "@context": "https://schema.org", "@type": "WebPage", name: "Accessibility statement", url: abs("/accessibility"), dateModified: S.date, about: { "@id": ORG_ID }, publisher: { "@id": ORG_ID } },
        ]}
      />
      <PageHead edit="accessibility" title="Accessibility statement" sub={"Last tested " + date(S.date) + "."} />
      <div className="mt-6 grid gap-10 lg:grid-cols-[180px_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-5 flex flex-col text-[13px]" aria-label="On this page">
            {nav.map(([id, l]) => (
              <a key={id} href={"#" + id} className="rounded-[6px] px-2 py-1 leading-snug text-mute hover:bg-tile hover:text-ink">{l}</a>
            ))}
          </nav>
        </aside>
        <article className="min-w-0 max-w-2xl">
          <p className="text-[14px] leading-relaxed text-ink-2">
            The short version: the hand-built Loopo components are built to be keyboard and screen-reader friendly, with the gaps listed below. The generated components, converted from Figma, give you the exact look but not the behaviour: you add buttons, roles and focus handling when you wire them up. Each component page says which kind it is and what to add.
          </p>

          <h2 id="target" className={H}>Our target</h2>
          <p className={P}>
            We aim for <a href="https://www.w3.org/TR/WCAG22/" className={A}>WCAG 2.2</a> level AA in the components and on this site. We don’t claim conformance yet: the results below show where we are, and this page changes as we fix things.
          </p>

          <h2 id="tested" className={H}>What we test and how</h2>
          <ul className="mt-3 border-t border-hair">
            {[
              ["Automated check.", `${S.tool}. ${S.rules}`],
              ["Generated components.", `A sample spread over all nine systems and their categories (${S.checked.generated} in the latest run), rendered from their published code exactly as the component pages show them.`],
              ["Hand-built components.", `All ${S.checked.handBuilt} interactive Loopo components, checked live on their pages.`],
              ["Keyboard.", "On the hand-built components, a scripted pass Tabs through each one, checks that focus is visible and the control has a name, and opens and closes the dialog, menu and select with the keyboard to check focus moves in and comes back. Tabs are checked with the arrow keys."],
              ["Code review.", `Every published generated file (${fmt(c.files)}) is scanned for native controls, roles and ARIA.`],
              ["Visual match.", "Separately, every generated component is compared pixel by pixel with its Figma original; that score is on each component page."],
            ].map(([h, b]) => (
              <li key={h} className="border-b border-hair py-2.5 text-[14px] leading-relaxed text-ink-2"><strong className="font-medium text-ink">{h}</strong> {b}</li>
            ))}
          </ul>
          <p className={P}>
            Not yet tested: screen readers by hand (VoiceOver, NVDA, JAWS), zoom to 400% and reflow, Windows high-contrast mode. The check is a script in our repository, and the date at the top of this page is its latest run.
          </p>

          <h2 id="results" className={H}>Latest results ({date(S.date)})</h2>
          <p className={P}>
            {S.checked.total} components checked; {S.cleanAtWcagAA} had no WCAG A or AA issue that axe can detect. Automated tools find only part of real accessibility problems, so a clean result is a floor, not a pass.
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <caption className="sr-only">Components with no WCAG A or AA axe issues, by system</caption>
              <thead className="text-mute">
                <tr className="border-b border-hair"><th scope="col" className="py-2 font-normal">System</th><th scope="col" className="py-2 text-right font-normal">Checked</th><th scope="col" className="py-2 text-right font-normal">No A/AA issues</th></tr>
              </thead>
              <tbody>
                {Object.entries(S.bySystem).map(([k, v]) => (
                  <tr key={k} className="border-b border-hair"><td className="py-2"><Link href={"/systems/" + k} className="hover:underline">{SYS[k] ?? k}</Link></td><td className="py-2 text-right tabular-nums">{v.checked}</td><td className="py-2 text-right tabular-nums">{v.clean}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-6 text-[13px] font-medium">Top issues by number of components</h3>
          <ol className="mt-2 flex flex-col gap-2">
            {S.topIssues.slice(0, 8).map((t) => (
              <li key={t.id} className="card p-3 text-[13px] leading-snug">
                <p className="flex flex-wrap items-baseline gap-x-2">
                  <a href={t.helpUrl} className="font-medium hover:underline">{t.help}</a>
                  <span className="text-mute">{t.level === "best practice" ? "Best practice" : "WCAG " + t.level}, {t.impact}</span>
                </p>
                <p className="mt-1 text-mute tabular-nums">{t.components} component{t.components === 1 ? "" : "s"}, {t.nodes} element{t.nodes === 1 ? "" : "s"}. For example <Link href={"/components/" + t.examples[0]?.slug} className={A}>{t.examples[0]?.slug}</Link>.</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-6 text-[13px] font-medium">Keyboard pass</h3>
          <p className={P}>
            {named} of {stops} Tab stops in the hand-built components had a visible focus change and an accessible name.{overlays.length > 0 && " " + overlays.map((k) => `${k.slug}: opens from the keyboard ${k.overlay?.focusInside ? "with focus inside" : "but focus stays outside"}, ${k.overlay?.escapeCloses ? "Escape closes it" : "Escape did not close it in our run"}, ${k.overlay?.focusReturns ? "focus returns to the trigger" : "focus is lost on close"}${k.overlay?.focusTrapped ? ", focus stays inside while open" : ""}.`).join(" ")}
          </p>
          {site.length > 0 && (
            <>
              <h3 className="mt-6 text-[13px] font-medium">This website</h3>
              <p className={P}>
                We also ran axe on {site.length} pages of this site. It finds: {siteRules.join("; ").toLowerCase() || "no WCAG A or AA issues"}. The contrast issues are the light grey section labels in the sidebar; the small targets are the footer links. Both are on our list.
              </p>
            </>
          )}

          <h2 id="gaps" className={H}>Known gaps</h2>
          <ul className="mt-3 border-t border-hair">
            <li className="border-b border-hair py-2.5 text-[14px] leading-relaxed text-ink-2">
              <strong className="font-medium text-ink">Generated components are visual only.</strong> Of {fmt(c.files)} published files, {c.withButton} use a native button, {c.withInput} a native input, {c.withRole} an ARIA role and {c.withAriaLabel} an aria-label; icons are hidden from screen readers. They are a pixel-accurate skin: swap drawn controls for real ones (the free Loopo primitives show how) before you ship. axe can’t see this, because a picture of a button made of &lt;div&gt;s isn’t a broken button to a scanner.
            </li>
            <li className="border-b border-hair py-2.5 text-[14px] leading-relaxed text-ink-2">
              <strong className="font-medium text-ink">Colour contrast.</strong> The most common issue by far. Light grey secondary text and white text on some accent fills fall below 4.5:1 in every system, including the Loopo tokens (muted #747474 on the sunken grey, faint #a6a6a6 on white, white on the danger red). This comes from the Figma designs, so the fix is in the design tokens, not in single components.
            </li>
            <li className="border-b border-hair py-2.5 text-[14px] leading-relaxed text-ink-2">
              <strong className="font-medium text-ink">Focus styles that depend on this site.</strong> <Link href="/components/tabs" className={A}>Tabs</Link> and the <Link href="/components/segmented-control" className={A}>segmented control</Link> have no focus ring of their own. They pass our keyboard check because this site adds a global focus ring; in your app, add one.
            </li>
            <li className="border-b border-hair py-2.5 text-[14px] leading-relaxed text-ink-2">
              <strong className="font-medium text-ink">Charts.</strong> Hand-built charts have a label naming the chart but no values in their text alternative; generated charts have none. Each chart page says what to add.
            </li>
            <li className="border-b border-hair py-2.5 text-[14px] leading-relaxed text-ink-2">
              <strong className="font-medium text-ink">Smaller gaps in hand-built components.</strong> Delta chips don’t say “up” or “down” in text; the data table’s row checkboxes have no labels and the sort state isn’t exposed; the segmented control has no arrow-key support. They are listed on each component’s page.
            </li>
            <li className="border-b border-hair py-2.5 text-[14px] leading-relaxed text-ink-2">
              <strong className="font-medium text-ink">No dark mode or reduced-contrast themes yet.</strong> Dark mode is planned; follow it in the <Link href="/changelog" className={A}>changelog</Link>.
            </li>
          </ul>
          <p className={P}>An ACR/VPAT for procurement is planned for the core components, after these gaps are closed.</p>

          <h2 id="report" className={H}>Report a problem</h2>
          <p className={P}>
            If a component or a page on this site doesn’t work for you, email <a href="mailto:support@ingotui.com" className={A}>support@ingotui.com</a> with the page link and what happened (your browser and any assistive technology help). We reply by email and note fixes in the <Link href="/changelog" className={A}>changelog</Link>.
          </p>
          <p className="mt-10 flex flex-wrap gap-1.5">
            <Link href="/systems/loopo" className="btn-ink">See the Loopo components</Link>
            <Link href="/about" className="btn-line">How components are made</Link>
          </p>
        </article>
      </div>
    </div>
  );
}
