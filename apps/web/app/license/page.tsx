import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, ORG_ID, abs, breadcrumbLd, faqLd, pageMeta } from "@/lib/seo";
import { PageHead } from "@/components/site/page-head";
import { Icon } from "@/registry/components/icons";

/**
 * Plain-English licence. Static on purpose: nothing here changes at runtime.
 * Every promise must match what docs, pricing and the support KB already say.
 */

export const metadata: Metadata = pageMeta({
  title: "Ingot UI licence: use in SaaS and client projects",
  description: "Use Ingot UI in your own SaaS, paid products and unlimited client projects. What Free, Pro, Lifetime and Team cover, what you can't do, and the full terms.",
  path: "/license",
  absoluteTitle: true,
});

const VERSION = "1.0";
const EFFECTIVE = "15 November 2026";
const EFFECTIVE_ISO = "2026-11-15";
const SUPPORT = "support@ingotui.com";
const MAILTO = "mailto:" + SUPPORT + "?subject=" + encodeURIComponent("Licence question");

type Verdict = "yes" | "no" | "ask";
type Cell = { v: Verdict; note?: string };
type Row = { use: string; detail: string; free: Cell; pro: Cell; team: Cell };

const ROWS: Row[] = [
  {
    use: "Your own SaaS product",
    detail: "An app, dashboard or site you build and run.",
    free: { v: "yes", note: "With free components" },
    pro: { v: "yes", note: "With every component" },
    team: { v: "yes", note: "For every seat" },
  },
  {
    use: "A paid SaaS with paying users",
    detail: "No fee per end user, per sale or by revenue.",
    free: { v: "yes", note: "With free components" },
    pro: { v: "yes", note: "No user or revenue limit" },
    team: { v: "yes", note: "No user or revenue limit" },
  },
  {
    use: "Client projects as a freelancer or agency",
    detail: "You build the product, the client owns it.",
    free: { v: "yes", note: "Unlimited clients" },
    pro: { v: "yes", note: "Unlimited clients, by the person on the plan" },
    team: { v: "yes", note: "Unlimited clients, by each seat" },
  },
  {
    use: "Open-source project",
    detail: "Your app's source code is public.",
    free: { v: "yes", note: "Free components inside your app" },
    pro: { v: "ask", note: "Write to us before publishing Pro code" },
    team: { v: "ask", note: "Write to us before publishing Pro code" },
  },
  {
    use: "Templates or themes for sale",
    detail: "Buyers get the source to build their own products.",
    free: { v: "no" },
    pro: { v: "no" },
    team: { v: "no" },
  },
  {
    use: "A UI kit or component library for sale",
    detail: "Selling or giving away the components themselves.",
    free: { v: "no" },
    pro: { v: "no" },
    team: { v: "no" },
  },
  {
    use: "Sharing code with teammates",
    detail: "Teammates work on the product's repo.",
    free: { v: "yes", note: "Free components, anyone on the project" },
    pro: { v: "yes", note: "In your product's code; anyone who copies Pro items needs a plan" },
    team: { v: "yes", note: "Each seat copies from the library" },
  },
  {
    use: "Code your AI agent writes with our MCP",
    detail: "Output from the MCP server, CLI or registry.",
    free: { v: "yes", note: "Free components, 50 MCP calls a day" },
    pro: { v: "yes", note: "Every component, unlimited calls" },
    team: { v: "yes", note: "For every seat" },
  },
];

const PLANS: { key: "free" | "pro" | "team"; name: string; sub: string }[] = [
  { key: "free", name: "Free", sub: "Free components" },
  { key: "pro", name: "Pro or Lifetime", sub: "1 seat" },
  { key: "team", name: "Team plan", sub: "Per seat" },
];

const FAQ: [string, string][] = [
  ["Can I use Ingot UI in my SaaS?", "Yes. Use the components in unlimited personal and commercial products, including paid SaaS with paying users. There is no fee per end user, per sale or by revenue. Free components need only a free account; Pro components need an active Pro or Lifetime plan when you copy them."],
  ["Can I use it for client projects?", "Yes, for as many clients as you like. You build the product, hand it over, and the client owns it and can change it. The client doesn't get a licence to the library itself: to copy new items they need their own plan. If several people at your agency copy from the library, each needs a plan. For an agency setup, write to " + SUPPORT + "."],
  ["What happens to my code if I stop paying?", "Everything you already copied or shipped stays yours to use. You only lose the ability to copy new Pro items. Free components stay free forever."],
  ["Can my teammates work on the code?", "Yes. Teammates can read, change and deploy the code in your product's repository. A plan is for one person, though: anyone who copies Pro items from the site, CLI or MCP needs their own plan or a Team seat. Don't share your account or API key."],
  ["Is code my AI agent writes with the MCP covered?", "Yes. Components your agent adds through the MCP server, CLI or registry are covered exactly like components you copy by hand. Pro components come through only on a Pro or Lifetime plan."],
  ["Can I sell a template, theme or UI kit made with Ingot UI?", "No. You can ship the components inside your own products and your clients' products, but you may not resell or redistribute the library itself as a UI kit, template pack, theme or competing library."],
  ["Can I use it in an open-source project?", "Free components can go in an open-source app. Publishing Pro component code in a public repository puts it where anyone can copy it, so write to " + SUPPORT + " first and we'll tell you what works."],
];

/** Binding text. Numbered so support answers can point at a clause. */
const TERMS: { h: string; body: string[] }[] = [
  {
    h: "Who and what this covers",
    body: [
      "“Ingot UI”, “we” and “us” means the publisher of ingotui.com.",
      "“The library” means the design systems, components, code, tokens, icons, Figma files and screens we publish, however you get them: the website, the CLI, the shadcn registry or the MCP server.",
      "“You” means the one person who holds an Ingot UI account. On a Team plan, each seat is one person.",
      "“End product” means a website, app, SaaS, internal tool or other software in which the library is part of a larger work, made by you for yourself, your employer or a client.",
    ],
  },
  {
    h: "What you may do",
    body: [
      "You may use, change and include the library in an unlimited number of end products, personal or commercial, for yourself, your employer or your clients.",
      "End products may be sold, rented or offered as a paid service with any number of users. There is no royalty, per-user fee or revenue limit.",
    ],
  },
  {
    h: "Free components",
    body: ["Components marked Free can be used by anyone with an account under these terms, for commercial work too. They stay free forever."],
  },
  {
    h: "Pro components",
    body: [
      "Components marked Pro may be copied only while you have an active Pro plan, a Lifetime plan or a Team seat. Lifetime does not expire.",
      "Everything you copied while your plan was active stays yours to use after it ends, in what you already shipped and in new end products. You lose only the ability to copy new Pro items.",
    ],
  },
  {
    h: "One plan, one person",
    body: [
      "Each plan is for one person. Don't share your account, sign-in or API keys.",
      "Teammates and contractors may work on the code of an end product that contains the library. Anyone who copies items from the library (website, CLI, registry or MCP) needs their own plan or seat.",
    ],
  },
  {
    h: "Client work",
    body: [
      "You may build end products for clients and hand them over, including the source code. The client may own, run and change that end product.",
      "Handing over an end product doesn't give the client a licence to the library itself. To copy new items, the client needs their own plan.",
    ],
  },
  {
    h: "AI agents",
    body: ["Code that an AI agent produces with the library through the MCP server, CLI or registry counts as copying by you, under the same terms and the same plan limits."],
  },
  {
    h: "What you may not do",
    body: [
      "Resell, sublicense, share or redistribute the library, or a substantial part of it, on its own: as a UI kit, component library, design system, template pack, theme, starter, Figma kit or icon set, paid or free.",
      "Build a product whose main purpose is to let other people get or copy the components.",
      "Publish Pro component source code where anyone can copy it, such as a public repository, without our written permission.",
      "Use the Ingot UI name or logo in a way that suggests we made or endorse your product.",
    ],
  },
  {
    h: "Ownership",
    body: ["We keep the copyright in the library. You own your end products and everything you add to them. The licence in these terms is what lets you use our part inside them."],
  },
  {
    h: "No warranty",
    body: ["The library is provided as it is. We work to keep it correct and accessible, but we don't promise it is free of errors or fit for every purpose. Check it in your product before you ship."],
  },
  {
    h: "Changes to these terms",
    body: [
      "We may publish a new version of these terms on this page. Each version shows its number and the date it takes effect.",
      "A new version applies to items you copy after its effective date. Items you copied earlier stay under the version that applied when you copied them.",
    ],
  },
  {
    h: "Questions and special cases",
    body: ["Anything these terms don't cover, or a use you aren't sure about: write to " + SUPPORT + " before you ship. A written yes from us is part of your licence."],
  },
];

function Mark({ cell }: { cell: Cell }) {
  const label = cell.v === "yes" ? "Yes" : cell.v === "no" ? "No" : "Contact us";
  return (
    <span className="flex flex-col gap-0.5">
      <span className="inline-flex items-center gap-1.5 font-medium text-ink">
        <span className={"flex size-5 shrink-0 items-center justify-center rounded-full " + (cell.v === "yes" ? "bg-ink text-white" : "bg-chip text-ink")}>
          <Icon name={cell.v === "yes" ? "check" : cell.v === "no" ? "x" : "mail"} size={13} strokeWidth={2} />
        </span>
        {cell.v === "ask" ? (
          <a href={MAILTO} className="underline underline-offset-2 hover:no-underline">
            {label}
          </a>
        ) : (
          label
        )}
      </span>
      {cell.note && <span className="pl-[26px] text-[12px] leading-snug text-mute">{cell.note}</span>}
    </span>
  );
}

const H = "mt-12 scroll-mt-6 text-[15px] font-medium";
const P = "mt-2 text-[14px] leading-relaxed text-ink-2";
const A = "font-medium text-ink underline underline-offset-2 hover:no-underline";

export default function LicensePage() {
  return (
    <div className="max-w-[1100px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["License", "/license"]]),
          faqLd(FAQ.map(([q, a]) => ({ q, a }))),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ingot UI licence",
            url: abs("/license"),
            dateModified: EFFECTIVE_ISO,
            publisher: { "@id": ORG_ID },
            inLanguage: "en",
          },
        ]}
      />
      <PageHead title="License" sub="What you can build with Ingot UI, in plain English." />

      <section aria-labelledby="short" className="card mt-5 p-5 sm:p-6">
        <h2 id="short" className="text-[15px] font-medium">The short version</h2>
        <ul className="mt-3 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {[
            ["check", "Use it in unlimited personal and commercial projects: your SaaS, paid products and client work."],
            ["check", "Free components are free forever, for commercial work too."],
            ["check", "Pro components need an active Pro or Lifetime plan when you copy them."],
            ["check", "What you copied and shipped stays yours, even if you stop paying."],
            ["x", "Don't resell or redistribute the library itself as a UI kit, template or theme."],
            ["x", "One plan is for one person. Don't share your account or API key."],
          ].map(([icon, text]) => (
            <li key={text} className="flex items-start gap-2.5 text-[14px] leading-snug">
              <span className={"mt-px flex size-5 shrink-0 items-center justify-center rounded-full " + (icon === "check" ? "bg-ink text-white" : "bg-chip text-ink")}>
                <Icon name={icon as "check" | "x"} size={13} strokeWidth={2} />
              </span>
              <span>
                <span className="sr-only">{icon === "check" ? "Allowed: " : "Not allowed: "}</span>
                {text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-2 grid gap-10 lg:grid-cols-[180px_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-5 mt-12 flex flex-col text-[13px]" aria-label="On this page">
            {[["matrix", "What each plan covers"], ["questions", "Questions"], ["terms", "Full licence terms"]].map(([id, l]) => (
              <a key={id} href={"#" + id} className="rounded-[6px] px-2 py-1 leading-snug text-mute hover:bg-tile hover:text-ink">{l}</a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0">
          <h2 id="matrix" className={H}>What each plan covers</h2>
          <p className={P + " max-w-2xl"}>
            Find your use case, read across. Prices and seats are on <Link href="/pricing" className={A}>pricing</Link>. The Team plan gives each seat the Pro terms; until it is on the pricing page, write to{" "}
            <a href={MAILTO} className={A}>{SUPPORT}</a> for a team.
          </p>

          {/* Table from md up */}
          <div className="card mt-4 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[720px] text-[13px]">
              <caption className="sr-only">Licence by use case and plan</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col" className="w-[34%] px-4 py-3 font-normal text-mute">Use case</th>
                  {PLANS.map((p) => (
                    <th key={p.key} scope="col" className="px-4 py-3 align-bottom font-medium">
                      {p.name}
                      <span className="block text-[12px] font-normal text-mute">{p.sub}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.use} className="border-t border-hair align-top">
                    <th scope="row" className="px-4 py-3.5 text-left font-medium">
                      {r.use}
                      <span className="mt-0.5 block text-[12px] font-normal leading-snug text-mute">{r.detail}</span>
                    </th>
                    {PLANS.map((p) => (
                      <td key={p.key} className="px-4 py-3.5">
                        <Mark cell={r[p.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stacked cards on phones */}
          <ul className="mt-4 flex flex-col gap-3 md:hidden">
            {ROWS.map((r) => (
              <li key={r.use} className="card p-4">
                <h3 className="text-[14px] font-medium">{r.use}</h3>
                <p className="mt-0.5 text-[12px] leading-snug text-mute">{r.detail}</p>
                <dl className="mt-3 flex flex-col gap-2.5 border-t border-hair pt-3 text-[13px]">
                  {PLANS.map((p) => (
                    <div key={p.key} className="grid grid-cols-[104px_1fr] gap-3">
                      <dt className="text-mute">{p.name}</dt>
                      <dd>
                        <Mark cell={r[p.key]} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>

          <h2 id="questions" className={H}>Questions</h2>
          <div className="mt-3 max-w-2xl border-t border-hair">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group border-b border-hair">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-[14px] font-medium">
                  <h3 className="font-medium">{q}</h3>
                  <Icon name="plus" size={14} className="shrink-0 text-mute transition-transform group-open:rotate-45 motion-reduce:transition-none" />
                </summary>
                <p className="pb-3 pr-8 text-[14px] leading-relaxed text-ink-2">{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-4 flex items-center gap-2 text-[14px]">
            <Icon name="mail" size={16} className="shrink-0" />
            <span>
              Questions? Write to <a href={MAILTO} className={A}>{SUPPORT}</a>. A person replies.
            </span>
          </p>

          <h2 id="terms" className={H}>Full licence terms</h2>
          <p className="mt-1 text-[13px] text-mute">
            Version {VERSION}, effective <time dateTime={EFFECTIVE_ISO}>{EFFECTIVE}</time>. This is the binding text; the summary, table and answers above explain it.
          </p>
          <ol className="mt-5 flex max-w-2xl flex-col gap-6">
            {TERMS.map((t, i) => (
              <li key={t.h} id={"term-" + (i + 1)} className="scroll-mt-6">
                <h3 className="flex items-baseline gap-2 text-[14px] font-medium">
                  <span className="tabular-nums text-mute">{i + 1}.</span>
                  {t.h}
                </h3>
                <ol className="mt-2 flex flex-col gap-2 pl-6">
                  {t.body.map((b, j) => (
                    <li key={j} className="flex gap-2 text-[14px] leading-relaxed text-ink-2">
                      <span className="shrink-0 tabular-nums text-mute">{i + 1}.{j + 1}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-[13px] leading-relaxed text-mute">
            Related: <Link href="/pricing" className={A}>Pricing</Link>, <Link href="/docs" className={A}>Docs</Link>, <Link href="/mcp" className={A}>MCP and CLI</Link>, <Link href="/support" className={A}>Support</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
