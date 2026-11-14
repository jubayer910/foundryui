import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, List, LP } from "@/components/site/legal-page";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: "Refund Policy", description: "Every paid Ingot UI plan has a 7-day refund, no questions asked. How to ask for one, how cancelling a subscription works, and what happens after a refund.", path: "/refund" });

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      sub="7 days on every paid plan, no questions asked."
      sections={[
        { id: "promise", h: "Our promise", body: <p className={LP}>If Ingot UI is not right for you, you can get your money back within 7 days of paying, on every paid plan: Pro monthly, Pro yearly and Lifetime. You don’t need to give a reason.</p> },
        {
          id: "how",
          h: "How to ask for a refund",
          body: (
            <List
              items={[
                <>Write to <a href="mailto:support@ingotui.com" className="font-medium text-ink underline underline-offset-2">support@ingotui.com</a> from the email you paid with, or reply to your receipt email. Include the order number if you have it.</>,
                "We refund the full amount to the original payment method, usually within 2 business days. Your bank may take 5 to 10 business days to show it.",
                "Payments are processed by Lemon Squeezy, our merchant of record, so the refund comes from Lemon Squeezy and appears on your statement under their name.",
              ]}
            />
          ),
        },
        {
          id: "subscriptions",
          h: "Cancelling a subscription",
          body: (
            <p className={LP}>
              You can cancel Pro any time from <Link href="/account" className="font-medium text-ink underline underline-offset-2">Account</Link> → Manage billing. Cancelling stops the next renewal; Pro stays active until the end of the period you paid for. Renewal payments after the first 7 days are not refunded automatically, but write to us if you were charged by mistake and we will look at it.
            </p>
          ),
        },
        {
          id: "after",
          h: "After a refund",
          body: (
            <List
              items={[
                "Your account goes back to the Free plan, which keeps the Loopo system and every free component.",
                "A refunded Lifetime purchase frees its launch-deal spot for someone else.",
                "Repeated buy-and-refund cycles may be declined.",
              ]}
            />
          ),
        },
      ]}
    />
  );
}
