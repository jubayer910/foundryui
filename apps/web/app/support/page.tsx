import type { Metadata } from "next";
import { JsonLd, breadcrumbLd, faqLd, pageMeta } from "@/lib/seo";
import { PageHead } from "@/components/site/page-head";
import { IlloTile } from "@/components/site/illo";
import { Icon } from "@/registry/components/icons";
import { getSessionUser } from "@/lib/auth";
import { getSettings } from "@/lib/settings";
import { getPublishedArticles, groupByCategory } from "@/lib/support/kb";
import { AnswerText, plainAnswer } from "@/lib/support/answer-text";
import { SupportSearch } from "./support-search";
import { ContactForm } from "./contact-form";
import { OpenHash } from "./open-hash";

export const metadata: Metadata = pageMeta({
  title: "Support: billing, licence, install, MCP and Figma answers",
  description: "Answers to common Ingot UI questions on plans, refunds, the licence, installing with the CLI or shadcn, connecting the MCP server and copying to Figma. Or write to support@ingotui.com.",
  path: "/support",
});

// Answers come from D1 (edited in admin) and the form is prefilled for signed-in users.
export const dynamic = "force-dynamic";

const catId = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default async function SupportPage() {
  const [articles, settings, user] = await Promise.all([getPublishedArticles(), getSettings(), getSessionUser().catch(() => null)]);
  const groups = groupByCategory(articles);
  const email = settings.support.email;

  return (
    <div className="max-w-[1100px]">
      <JsonLd data={[breadcrumbLd([["Ingot UI", "/"], ["Support", "/support"]]), ...(articles.length ? [faqLd(articles.map((a) => ({ q: a.question, a: plainAnswer(a.answer) })))] : [])]} />
      <OpenHash />
      <PageHead title="Support" sub="Search the answers, or write to us. A person replies, usually within a day." />

      <div className="mt-5 grid items-stretch gap-3 md:grid-cols-[1fr_300px]">
        <div className="card flex flex-col justify-center p-5 sm:p-6">
          <h2 className="text-[15px] font-medium tracking-[-0.01em]">What do you need help with?</h2>
          <SupportSearch />
          <p className="mt-4 flex flex-wrap items-center gap-x-1.5 text-[13px] text-mute">
            <Icon name="mail" size={15} className="shrink-0" />
            Prefer email? Write to
            <a href={"mailto:" + email} className="font-medium text-ink underline underline-offset-2">{email}</a>
          </p>
        </div>
        <IlloTile scene="mail" label="A letter going into an inbox" className="hidden h-full min-h-[200px] md:block" />
      </div>

      {groups.length > 0 && (
        <nav aria-label="Topics" className="mt-8 flex flex-wrap gap-1.5">
          {groups.map(([c, list]) => (
            <a key={c} href={"#" + catId(c)} className="pill">
              {c} <span className="text-mute">{list.length}</span>
            </a>
          ))}
          <a href="#contact" className="pill">Contact us</a>
        </nav>
      )}

      <div className="mt-6 grid gap-x-10 gap-y-8 lg:grid-cols-2">
        {groups.map(([c, list]) => (
          <section key={c} id={catId(c)} className="scroll-mt-6" aria-labelledby={catId(c) + "-h"}>
            <h2 id={catId(c) + "-h"} className="text-[13px] font-medium">{c}</h2>
            <div className="mt-2 border-t border-hair">
              {list.map((a) => (
                <details key={a.slug} id={a.slug} className="group scroll-mt-6 border-b border-hair">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-[13px] font-medium">
                    {a.question}
                    <Icon name="plus" size={14} className="shrink-0 text-mute transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="pb-3 pr-8 text-[13px] leading-relaxed text-mute">
                    <AnswerText text={a.answer} />
                  </p>
                </details>
              ))}
            </div>
          </section>
        ))}
        {groups.length === 0 && <p className="text-[13px] text-mute">Answers are loading slowly right now. Write to us below and we will help directly.</p>}
      </div>

      <section id="contact" className="mt-14 scroll-mt-6 grid gap-6 md:grid-cols-[1fr_1.4fr]" aria-labelledby="contact-h">
        <div>
          <h2 id="contact-h" className="text-[15px] font-medium tracking-[-0.01em]">Still stuck? Send us a message</h2>
          <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-mute">It becomes a ticket with an id, and we reply to your email, usually within a day. For billing questions, use the email you paid with.</p>
          <p className="mt-4 text-[13px] text-mute">
            Or email <a href={"mailto:" + email} className="font-medium text-ink underline underline-offset-2">{email}</a>
          </p>
        </div>
        <div className="card p-5">
          <ContactForm defaultName={user?.name ?? ""} defaultEmail={user?.email ?? ""} />
        </div>
      </section>
    </div>
  );
}
