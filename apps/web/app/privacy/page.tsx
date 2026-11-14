import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, List, LP } from "@/components/site/legal-page";
import { pageMeta } from "@/lib/seo";
import { CookieSettingsButton } from "@/components/site/cookie-consent";

export const metadata: Metadata = pageMeta({ title: "Privacy Policy", description: "What Ingot UI collects when you browse, sign up, copy components, use the MCP server or buy a plan, why, who processes it, and how to get it deleted.", path: "/privacy" });

const A = "font-medium text-ink underline underline-offset-2";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sub="What we collect, why, and how to get it deleted."
      sections={[
        { id: "short", h: "The short version", body: <p className={LP}>We collect what we need to run Ingot UI: your account details, what you copy, and support messages. We don’t sell personal data or show ads. Payments are handled by Lemon Squeezy, so we never see your card number.</p> },
        {
          id: "collect",
          h: "What we collect",
          body: (
            <List
              items={[
                <><strong className="font-medium text-ink">Account:</strong> your name, email and a password (stored only as a one-way hash), your plan, and the API keys you create (stored as hashes; we show the full key once).</>,
                <><strong className="font-medium text-ink">Usage:</strong> which components or icons you copy, download or install, and whether it was from the website, the CLI or the MCP server. Without an account we keep a counter for the 5 free copies, tied to a random browser ID and a short-lived count per network address.</>,
                <><strong className="font-medium text-ink">Support:</strong> the name, email and messages you send through the help widget, the support page or email.</>,
                <><strong className="font-medium text-ink">Purchases:</strong> from Lemon Squeezy we receive your email, the plan, the amount, the order and subscription status and a link to your billing portal. Card and billing details stay with Lemon Squeezy.</>,
                <><strong className="font-medium text-ink">Waitlist:</strong> your email and the plan you chose, if you join it before checkout opens.</>,
              ]}
            />
          ),
        },
        {
          id: "analytics",
          h: "Analytics",
          body: (
            <List
              items={[
                <><strong className="font-medium text-ink">Our own page counter:</strong> no cookies. We store only daily totals per page and per referring site. To estimate unique visitors we keep a one-way, daily-changing hash of your network address and browser for at most 48 hours; it is never linked to your account. We don’t count you if your browser sends Do Not Track or Global Privacy Control.</>,
                <><strong className="font-medium text-ink">Google Analytics 4:</strong> measures visits and where they come from. It uses cookies, loads only if you accept them, and is run by Google.</>,
                <><strong className="font-medium text-ink">Microsoft Clarity:</strong> heatmaps and session recordings that show how pages are used. Clarity masks typed text and other sensitive content by default. It uses cookies, loads only if you accept them, and is run by Microsoft.</>,
              ]}
            />
          ),
        },
        {
          id: "cookies",
          h: "Cookies and local storage",
          body: (
            <>
            <List
              items={[
                "A sign-in session cookie, so you stay logged in.",
                "A random anonymous ID cookie for the free-copy counter (one year).",
                "Google Analytics and Microsoft Clarity cookies, described above. These load only after you accept them in the cookie banner, and you can change your choice any time.",
                "Local storage in your browser for saved and recently copied items and for dismissing the announcement bar. These stay on your device.",
              ]}
            />
            <CookieSettingsButton />
            </>
          ),
        },
        {
          id: "why",
          h: "Why we use it",
          body: <p className={LP}>To provide the service you asked for (your account, plan limits, the MCP server and CLI, support), to process payments through Lemon Squeezy, to prevent abuse of the free tier, and to understand which pages and components help people so we can improve them.</p>,
        },
        {
          id: "processors",
          h: "Who processes it",
          body: (
            <List
              items={[
                "Cloudflare hosts the site, the database and the MCP server.",
                "Lemon Squeezy processes payments as merchant of record, with its own privacy policy.",
                "Google (Analytics) and Microsoft (Clarity) process analytics data.",
                "Cloudflare Email Routing delivers support email.",
                "We share data with nobody else, except when the law requires it.",
              ]}
            />
          ),
        },
        {
          id: "keep",
          h: "How long we keep it",
          body: <p className={LP}>Account, usage and purchase records are kept while your account is open and for as long as tax and accounting rules require after that. Support conversations are kept while they are useful for helping you. Visitor hashes for the page counter are deleted after 48 hours.</p>,
        },
        {
          id: "rights",
          h: "Your choices and rights",
          body: (
            <p className={LP}>
              You can ask for a copy of your data, a correction, or deletion of your account and data by writing to <a href="mailto:support@ingotui.com" className={A}>support@ingotui.com</a> from your account email. You can delete API keys yourself on <Link href="/account" className={A}>Account</Link>, block cookies in your browser, and turn on Do Not Track or Global Privacy Control. Depending on where you live, you may also have the right to complain to your data protection authority.
            </p>
          ),
        },
        { id: "children", h: "Children", body: <p className={LP}>Ingot UI is a tool for professionals and is not meant for children under 16.</p> },
        { id: "changes", h: "Changes", body: <p className={LP}>If we change how we handle data, we update this page and its date. Big changes are also announced in the <Link href="/changelog" className={A}>changelog</Link>.</p> },
      ]}
    />
  );
}
