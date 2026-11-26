import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, List, LP } from "@/components/site/legal-page";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: "Terms of Service", description: "The terms for using Ingot UI: accounts, plans and billing through Creem, the component licence, the MCP server and API keys, acceptable use and liability.", path: "/terms" });

const A = "font-medium text-ink underline underline-offset-2";

export default function TermsPage() {
  return (
    <LegalPage
      edit="terms"
      title="Terms of Service"
      sub="The rules for using Ingot UI, in plain language."
      sections={[
        { id: "agreement", h: "Agreement", body: <p className={LP}>These terms apply when you use ingotui.com, the Ingot UI components, Figma files, icons, CLI and MCP server (together, “Ingot UI”). By using Ingot UI or buying a plan you agree to them. If you use Ingot UI for a company, you agree for that company.</p> },
        { id: "accounts", h: "Accounts", body: <p className={LP}>You need an account for more than 5 free copies, for API keys and for paid plans. Keep your password and API keys private; you are responsible for what happens with them. Tell us at once if you think a key leaked, and delete it on <Link href="/account" className={A}>Account</Link>.</p> },
        {
          id: "plans",
          h: "Plans and billing",
          body: (
            <List
              items={[
                <>Plans and prices are on <Link href="/pricing" className={A}>Pricing</Link>. Pro renews automatically every month or year until you cancel; Lifetime is a single payment.</>,
                "Orders are processed by Creem, our Merchant of Record. Creem is the seller of record for your purchase: it charges you, handles sales tax and VAT, and emails your receipt; its terms also apply to the purchase. Prices are in USD and tax is added at checkout where it applies. Your plan switches on automatically within seconds of payment, on the ingotui.com account with the email you paid with (or when you create that account).",
                "Pro renews through Creem until you cancel. Cancel any time from Manage billing in your Account or by writing to support@ingotui.com; Pro stays active to the end of the period you paid for.",
                "Lifetime includes every current and future design system and every update, for as long as Ingot UI runs. The launch price applies to the first buyers until the published number of spots is taken.",
                <>Refunds follow our <Link href="/refund" className={A}>Refund Policy</Link>: 7 days, no questions asked.</>,
                "We may change prices for new purchases. A price change never applies to a Lifetime purchase already made, and a subscription price change takes effect at your next renewal after we tell you.",
              ]}
            />
          ),
        },
        {
          id: "licence",
          h: "Licence",
          body: (
            <List
              items={[
                "On the Free plan, you may use the free components, templates and stroke icons in personal, learning and non-commercial projects only. The Loopo file on Figma Community is shared under Figma's Community licence, which applies to that copy.",
                "With Pro, Lifetime or a team deal, you may use components, Figma files and icons in unlimited personal and commercial projects, including client work and products you sell.",
                "Free items are free forever. Pro items need an active Pro or Lifetime plan at the time you copy them; what you already shipped stays licensed to you.",
                "You may not resell, sublicense or redistribute the library itself, or a substantial part of it, as a UI kit, template pack, component library or similar product, and you may not build a competing library or dataset from it.",
                "Ingot UI and its design systems stay ours. Some icons and logos come from open-source sets under their own licences, listed in the package licence files.",
              ]}
            />
          ),
        },
        {
          id: "mcp",
          h: "MCP server, CLI and API",
          body: <p className={LP}>Use the MCP server and CLI with your own API key and within your plan’s limits. Don’t share keys, resell access, scrape the catalogue in bulk, or try to get around limits. We may rate-limit or suspend keys that are abused.</p>,
        },
        {
          id: "use",
          h: "Acceptable use",
          body: <p className={LP}>Don’t use Ingot UI to break the law, attack or overload our services, access other people’s accounts, or upload harmful content to support. We may suspend or close accounts that do, and we will refund the unused part of a paid plan unless the account was closed for fraud or abuse.</p>,
        },
        {
          id: "warranty",
          h: "No warranty",
          body: <p className={LP}>Ingot UI is provided “as is”. We work hard to keep components accurate, accessible and checked against their Figma originals, but we can’t promise they are free of bugs or fit every purpose. Test what you ship.</p>,
        },
        {
          id: "liability",
          h: "Limitation of liability",
          body: <p className={LP}>To the extent the law allows, we are not liable for indirect or consequential losses, lost profits or lost data, and our total liability for any claim is limited to the amount you paid us in the 12 months before it. Nothing here limits rights you have as a consumer that can’t be excluded by law.</p>,
        },
        {
          id: "changes",
          h: "Changes and ending",
          body: <p className={LP}>We may update these terms; the date at the top shows the latest version, and important changes are announced in the <Link href="/changelog" className={A}>changelog</Link>. You can stop using Ingot UI and ask us to delete your account at any time.</p>,
        },
        { id: "contact", h: "Contact", body: <p className={LP}>Questions, notices or complaints: <a href="mailto:support@ingotui.com" className={A}>support@ingotui.com</a>.</p> },
      ]}
    />
  );
}
