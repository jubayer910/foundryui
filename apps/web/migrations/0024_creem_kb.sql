-- Checkout moved to Creem (2026-11-27): Creem is the Merchant of Record, no account is needed to pay and the plan
-- switches on automatically (lib/creem.ts, /api/webhooks/creem, /thanks, /claim). Rewrites the help-bot articles
-- about the payment provider, activation, refunds, cancelling and receipts that still sent buyers to Contra and
-- Activate. Earlier Contra buyers keep /activate; the articles mention it only as "Paid on Contra earlier?".
-- Same facts as /pricing, /terms, /privacy and /refund.
UPDATE `kb_article` SET `question` = 'Who handles the payment?', `answer` = 'Creem, our Merchant of Record. Creem is the seller of record for every order: it charges your card, handles sales tax and VAT, and emails your receipt; its terms also apply to the purchase. We never see your card number. Purchases made earlier were processed by Contra, and those buyers are still served.', `keywords` = 'creem, creem.io, merchant of record, who processes payment, payment provider, contra, lemon squeezy, stripe, merchant, is it safe to pay, secure payment, sales tax, vat', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'payment-provider';

UPDATE `kb_article` SET `answer` = 'Creem takes cards (Visa, Mastercard, Amex and more), plus Apple Pay and Google Pay where your device and country offer them. Other methods such as PayPal, bank transfer, bKash or crypto are not offered. If none of these work for you, write to support@ingotui.com.', `keywords` = 'payment methods, card, credit card, debit card, visa, mastercard, amex, apple pay, google pay, paypal, bkash, nagad, bank transfer, crypto, creem', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'payment-methods';

UPDATE `kb_article` SET `answer` = '1. On [Pricing](/pricing), press the button for your plan. It opens checkout on Creem, our Merchant of Record. You don''t need an account to pay.
2. Pay with your card, Apple Pay or Google Pay.
3. Your plan switches on within seconds. If you have an Ingot UI account with the email you paid with, it is upgraded. If not, we email you a link from jubayer@ingotui.com to create the account, and the plan is on as soon as you sign up.', `keywords` = 'how to pay, how to buy, pay, payment, checkout, buy, purchase, order, creem, kibhabe kinbo, kinbo, payment korbo', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'checkout-opening';

UPDATE `kb_article` SET `answer` = 'Open [Pricing](/pricing), choose the plan and pay on Creem. Use the email of your Ingot UI account, or sign in first, and your plan switches on within seconds of payment. Nothing else to do.', `keywords` = 'upgrade, how to upgrade, go pro, buy pro, unlock, upgrade plan, upgrade korbo', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'upgrade';

UPDATE `kb_article` SET `question` = 'I paid. How do I get my plan?', `answer` = 'Nothing to do. Your plan switches on by itself within seconds of payment.

1. Have an Ingot UI account with the email you paid with? It is already upgraded: sign in and check [Account](/account).
2. No account yet? Open the email we sent from jubayer@ingotui.com and create your account with that same email. The plan is on when you sign up.

Paid on Contra earlier? Use [Activate](/activate) for that purchase.', `keywords` = 'activate, activation, i paid, after payment, unlock plan, plan not active, paid but locked, switch on, activate korbo, how to activate, creem, contra', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'activate-plan';

UPDATE `kb_article` SET `answer` = 'Seconds. A Creem payment switches your plan on as soon as Creem confirms it, and we email you. If nothing changed after a few minutes, check your spam folder for our email, then write to support@ingotui.com with your Creem receipt.

Paid on Contra earlier? Those requests on [Activate](/activate) are usually confirmed within an hour.', `keywords` = 'how long, activation time, waiting, pending, still pending, not activated yet, delay, kotokkhon, when will it activate', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'activation-wait';

UPDATE `kb_article` SET `answer` = 'This message is for earlier purchases made on Contra. We found no Contra payment for the details sent, usually because the email differs from the one used on Contra. Send a new request on [Activate](/activate) with the exact email you paid with, or reply to our email with your Contra receipt and we''ll sort it out. Payments made today on Creem switch on by themselves and don''t use this page.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'activation-rejected';

UPDATE `kb_article` SET `answer` = 'That works, and it''s how checkout is meant to work: you don''t need an account to pay. We email the address you paid with a link from jubayer@ingotui.com. Open it, create a free account with that same email (or sign in) and the plan switches on. Signing up with that email on your own works too.', `keywords` = 'paid without account, guest checkout, no account yet, claim, claim link, bought first, before sign up, no account needed', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'paid-without-account';

UPDATE `kb_article` SET `answer` = 'No problem. We email the address you paid with a link to switch the plan on. Sign in (or sign up) with that payer email and open the link. Want the plan on your other account instead? Reply to that email and tell us which account, and we''ll move it.

Paid on Contra earlier? On [Activate](/activate), type the email you paid with on Contra in the payment email field.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'paid-wrong-email';

UPDATE `kb_article` SET `answer` = 'The payment happens on Creem. Check the card details and your bank''s online-payment settings, or try another card, Apple Pay or Google Pay. If money left your account but no Creem receipt arrived, write to support@ingotui.com with the date and amount.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'payment-failed';

UPDATE `kb_article` SET `answer` = 'Your account already has a plan that covers it, so there''s nothing to buy; everything it covers is unlocked. If you meant to buy a different plan, write to support@ingotui.com.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'already-have-plan';

UPDATE `kb_article` SET `answer` = 'This is for earlier purchases made on Contra: requests on [Activate](/activate) are limited to 5 an hour per account. Wait an hour, or write to support@ingotui.com with your Contra receipt.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'activation-rate-limit';

UPDATE `kb_article` SET `answer` = 'Yes. Every paid plan has a 7-day refund, no questions asked. Write to support@ingotui.com from the email you paid with (or reply to your receipt), with the order number if you have it. Refunds go back through Creem to the card or wallet you paid with, usually within 2 business days; your bank may take 5 to 10 business days to show it. Your account then returns to Free. Details: [Refund Policy](/refund).', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'refund-policy';

UPDATE `kb_article` SET `answer` = 'Open [Account](/account) and choose Manage billing. It opens the Creem customer portal, where you can cancel. Or write to support@ingotui.com and we cancel it for you. Cancelling stops the next renewal; the plan stays on until the end of the period you paid for. Anything you already copied stays yours.', `keywords` = 'cancel, unsubscribe, stop subscription, renewal, end subscription, stop billing, manage billing, customer portal, cancel korbo, turn off auto renew', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'cancel-subscription';

UPDATE `kb_article` SET `answer` = 'Pro and Team renew each period through Creem until you cancel; Lifetime is a single payment. Cancel any time from Manage billing on [Account](/account) or by writing to support@ingotui.com. The plan stays on to the end of the period you paid for.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'renewal';

UPDATE `kb_article` SET `answer` = 'Creem emails a receipt right after you pay, and your payments are listed on [Account](/account). Manage billing on Account opens the Creem customer portal with your billing history. Need your company name or VAT number on it? Write to support@ingotui.com with the details.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'invoices-receipts';

UPDATE `kb_article` SET `answer` = 'Write to support@ingotui.com from the email you paid with and include both Creem receipts. We refund the duplicate through Creem.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'double-charged';

UPDATE `kb_article` SET `answer` = 'Yes. Buy Lifetime on [Pricing](/pricing) with the email of your account; it switches on by itself. Then cancel Pro in Manage billing on [Account](/account) so it stops renewing. Checkout doesn''t credit the unused part of Pro automatically; write to support@ingotui.com within 7 days of the Pro payment if you want that refunded.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'pro-to-lifetime';

UPDATE `kb_article` SET `answer` = 'Yes. Buy Team to add seats for your teammates. On Pro, cancel it in Manage billing on [Account](/account) so you don''t pay twice; Team already includes you. On Lifetime, you keep it, and Team covers the others.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'team-existing-plan';

UPDATE `kb_article` SET `answer` = 'Prices are in USD. Creem, our Merchant of Record, adds sales tax or VAT at checkout where it applies and shows it before you pay.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'currency-tax';

UPDATE `kb_article` SET `answer` = '[Account](/account) shows your plan, your payments, Manage billing (the Creem customer portal), your Team seats if you have Team, and your API keys (create, copy once, revoke). Paid on Contra earlier? There is a small link to [Activate](/activate) for that purchase.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'account-page';

UPDATE `kb_article` SET `answer` = '1. Check you''re signed in to the account with the email you paid with ([Account](/account) shows your plan).
2. No account with that email yet? Open the email we sent after payment and create the account from its link.
3. Team members: the owner''s Team must be active.
4. Refresh the page.

Paid on Contra earlier? Make sure you sent the request on [Activate](/activate). Still locked? Write to support@ingotui.com with your receipt.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'plan-not-showing';

UPDATE `kb_article` SET `answer` = 'What we need to run Ingot UI: your account (name, email, hashed password, plan, hashed API keys), what you copy and from where (website, CLI or MCP), support messages, and purchase details from Creem (payer email, name, plan, amount, status). We never see your card number. Full details: [Privacy Policy](/privacy).', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'privacy-data';

UPDATE `kb_article` SET `answer` = 'No. We don''t sell personal data or show ads. Data is processed only by the services that run Ingot UI: Cloudflare (hosting, database, MCP), Creem (payments), Google Analytics and Microsoft Clarity (only if you accept cookies).', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'privacy-sell';

UPDATE `kb_article` SET `answer` = 'Cloudflare hosts the site, the database and the MCP server. Payment data stays with Creem, our Merchant of Record.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'data-location';

UPDATE `kb_article` SET `answer` = 'On [Terms](/terms): accounts, plans and billing through Creem, the licence, the MCP server and API keys, acceptable use and liability. The component licence itself is on [Licence](/license).', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'terms';

-- Public changelog (/changelog reads changelog_entry; lib/changelog.ts has the same release for /roadmap and the sitemap).
INSERT OR IGNORE INTO `changelog_entry` (`id`, `date`, `title`, `items`, `scene`, `published`, `createdAt`, `updatedAt`) VALUES
('v1.3.0', '2026-11-27', 'Checkout moved to Creem: pay without an account, plan switches on automatically', '["Checkout moved to Creem, our Merchant of Record: cards, plus Apple Pay and Google Pay where offered, with sales tax and VAT handled at checkout","Pay without an account. Your plan switches on automatically: an account with the same email is upgraded, or we email you a link to create one","Manage billing in your account opens the Creem customer portal to cancel Pro or see your billing history","No more Activate step for new purchases. Bought on Contra earlier? A small link on Account still switches that plan on"]', 'key', 1, CAST(strftime('%s','now') AS INTEGER), CAST(strftime('%s','now') AS INTEGER));
