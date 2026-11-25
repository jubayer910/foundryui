# Brief: add the auth + payments set to one Ingot UI design system (Figma)

A Lifetime customer said the library lacks login pages and the wallet / credit card widgets SaaS apps use.
The set was built and owner-approved in **Loopo** (file `lBBGdEStjKRYnwrTdJs1T3`, page "Foundry Library",
section "Loopo / Auth and payments" `250:66748`). Your job: build the **same 8 components** in ONE other
system's Figma file, in **that system's own design language** — not Loopo's.

Look at the Loopo section first (screenshot each component) so you know what "done" looks like.

## The 8 components (names follow the file's existing pattern `<System>/<Category>/<Name>`)

Check how the target file names its components on its "Foundry Library" page (e.g. `Loopo/Overlays - Modals/...`)
and use the same separators and category names.

1. `Templates/Sign in page` — full page, same size as that file's other Templates (Loopo: 1578x1180).
   Left: logo (clone from the system's sidebar), "Welcome back", Continue with Google / Apple (brand icons keep their own
   colours), "or with email" divider, Email + Password (focused state, eye icon, "Forgot password?" link), keep-signed-in
   checkbox, full-width primary "Sign in", "New to X? Create an account", footer (© 2026 X, then Privacy  Terms  Help spaced apart — no dot separators).
   Right: a panel showing the real product, built from **clones of that system's own cards** (two KPI cards at full size,
   one chart card and one more of that system's own cards (no invented testimonial)). Never shrink cards below readable size.
2. `Templates/Sign up page` — clone of Sign in: Full name, Work email, Password with a 4-segment strength meter ("Strong")
   and hint, terms checkbox, "Create account", "Already have an account? Sign in", different headline/testimonial.
3. `Templates/Forgot password page` — centred card on the page background: icon tile, "Reset your password", email field,
   full-width "Send reset link", "Back to sign in", help line, footer.
4. `Feedback/Reset link sent card` — "Check your email", 3 next-step rows with icons, "Open email app", resend timer.
5. `Cards and panels/Wallet card` — balance, change vs last month, Available / Pending split, Add funds (primary) /
   Send / Withdraw, divider, Recent activity with 3 rows (icon tile, title, meta, coloured amount).
6. `Cards and panels/Credit card widget` — header + status pill, a card face in **the system's accent** (gradient,
   sheen, chip, masked number, holder, expiry, network mark), monthly spend limit meter (in the system's own meter style,
   tinted remainder, never grey), Freeze / Details / Copy.
7. `Cards and panels/Payment methods card` — Visa / Mastercard / Amex rows (mini network marks), Default badge, row menu,
   Add card, footer note.
8. `Overlays/Modals/Add card modal` (use the file's modal category name) — header with icon tile + close, card number
   (focused, network mark), Expiry + CVC, Name on card, Country select, default checkbox, live card-face preview panel,
   footer note + Cancel + Save card.

Put them in ONE new section on the "Foundry Library" page named `<System> / Auth and payments`, placed below the
lowest existing section with ~240px gap. Layout inside: the 4 cards/modal in a row on top, Sign in + Sign up below,
Forgot password + Reset link sent below that. Resize the section to fit at the end.

## Rule zero: stay inside /dashboard-to-system (owner, 2026-11-26)

Work strictly by the /dashboard-to-system skill (/Users/muhammadjubayer/.claude/skills/dashboard-to-system/SKILL.md,
core rules 1–8). **Reuse, don't invent: every element is a clone of something that already exists in that system's file**
(its components, its screens' cards, rows, charts, badges, inputs, modals, icons). No decorative illustrations, no
invented testimonial cards or star ratings, no new card styles. If a surface is genuinely new (e.g. a credit card face),
build it only from the system's own surface recipe (card fill, border, radius, shadow, accent) and name it in the report.
Brand marks: Foundry Icons `brand-*` if present; otherwise a minimal mark, listed in the report.
Owner clarification: mandatory functional pieces (icons, card network marks, Google/Apple marks, chip, eye icon) may be added
from the icon library even if the file lacks them. What must NOT be invented: cards, testimonials, ratings, illustrations, new layouts of surfaces.

## Rules (the owner checks these)
- **Never edit existing nodes.** Clone them. Reuse, don't invent: buttons are instances of the file's Button
  components; inputs, checkboxes, toggles, modal shell, icon tiles, cards copy the measured fills, strokes, radii,
  shadows, fonts and the file's scale (Loopo values are multiples of 0.9139: 8.77, 10.96, 13.15, 19.72 — detect your file's).
  Find a modal with form fields in that file and copy its recipe exactly (Loopo used "Create payment link modal").
- **Icons**: the file's icon components are on its "Foundry Icons" page named `Foundry/<name>/<style>`. Use the
  **same style the system's own UI uses** (inspect a few icon instances' main components: Loopo = bulk for content,
  stroke-rounded for chevron/close/check). Recolour every icon you place by setting its vectors' strokes to the
  intended colour and fills to the same colour keeping their opacity, and **strokeWeight = 1.5 on every stroked vector,
  at any size**. Icons inside a primary (dark) button are white; inside secondary buttons the muted grey of the system.
  A swapped icon inside a Button instance keeps a black ~1.1px stroke until you recolour it.
- Accent, success green, text colours, font family and weights: take them from the file, not from Loopo.
  Dark systems (Vantage) are built dark.
- Full-width Button instances: set the instance's inner frame `primaryAxisAlignItems = "CENTER"` or the label sits left.
- Data is realistic and consistent (amounts add up, dates plausible, the system's own product context — e.g. an
  automation platform's wallet is credits/usage, a newsletter tool bills subscriptions).
- No decorative dots before text; no emoji.

## How to work
- Tools: the official Figma MCP. Call `create_session` once with the file key, then `use_figma` (pass `sessionId` and
  `skillNames: "figma-use,figma-generate-design"`), `get_screenshot`. Load the `figma:figma-use` skill before the first
  `use_figma` call. Keep each call to one component; load every font you set (`figma.loadFontAsync`) before editing text,
  including fonts of cloned text.
- Screenshot every component after building and fix what looks off before moving on.
- Finish with this audit on your section and fix until it returns no issues:

```js
const hex = (c) => "#" + [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
figma.skipInvisibleInstanceChildren = false; // REQUIRED, or instance sublayers are skipped
const sec = await figma.getNodeByIdAsync(SECTION_ID);
const issues = [];
for (const comp of sec.children.filter((c) => c.type === "COMPONENT")) {
  const cn = comp.name.split("/").pop();
  for (const ic of comp.findAll((n) => n.type === "INSTANCE" && n.name.startsWith("Icon/"))) {
    let hidden = !ic.visible, p = ic.parent, primary = false; while (p && p !== comp) { if (!p.visible) hidden = true; if (p.name?.startsWith("Button/Primary")) primary = true; p = p.parent; }
    if (hidden) continue;
    const main = await ic.getMainComponentAsync(); if (/brand-/.test(main?.name || "")) continue;
    for (const v of ic.findAll((x) => x.type === "VECTOR" && x.visible)) {
      const cols = [...(v.strokes || []), ...(Array.isArray(v.fills) ? v.fills : [])].filter((q) => q.type === "SOLID").map((q) => hex(q.color));
      if (primary && cols.some((c) => c !== "#ffffff")) issues.push(`${cn}: ${ic.name} in primary not white`);
      if (cols.some((c) => c === "#000000" || c === "#141b34")) issues.push(`${cn}: ${ic.name} default black`);
      if ((v.strokes || []).length && Math.abs(v.strokeWeight - 1.5) > 0.01) issues.push(`${cn}: ${ic.name} stroke ${v.strokeWeight.toFixed(2)}`);
    }
  }
  for (const b of comp.findAll((n) => n.type === "INSTANCE" && n.name.startsWith("Button/") && n.layoutSizingHorizontal === "FILL")) { const inner = b.children[0]; if (inner && inner.type === "FRAME" && inner.primaryAxisAlignItems !== "CENTER") issues.push(`${cn}: ${b.name} label not centred`); }
  for (const t of comp.findAll((n) => n.type === "TEXT" && n.visible)) if (t.fontSize < 9.5) { let p = t.parent, inBrand = false; while (p && p !== comp) { if (p.name?.startsWith("Brand ·")) inBrand = true; p = p.parent; } if (!inBrand) issues.push(`${cn}: tiny text ${t.fontSize.toFixed(1)}px`); }
}
return [...new Set(issues)];
```
(If the file's buttons are not named `Button/Primary` / `Button/Secondary`, adapt the name checks.)

## Report back (short)
Section id, the 8 component ids with their names, the icon style and accent you used and why, anything you could not
match, and the final audit result (must be empty).

## Every system gets its OWN layouts (owner, 2026-11-26)

The owner rejected same-layout-different-colours: "Loopo and Auton look the same, only the components differ." Each
system below has an assigned composition for the auth pages and for each widget. Follow YOUR row; never reuse the
Loopo layout (form left + product panel right, horizontal card face, list of payment methods, modal with side preview)
unless your row says so.

| System | Sign in / Sign up | Forgot password | Wallet | Credit card | Payment methods | Add card modal |
|---|---|---|---|---|---|---|
| Loopo (done) | form left, product showcase right | centred card | balance + split + activity list | horizontal face on top, meter, actions | list rows | form + side preview |
| Auton | form RIGHT; left = tall agent activity / audit-log timeline panel (approvals, runs) | full-width top bar + card left, help/status column right | credits meter ring + usage by agent table | card face as a compact chip row + per-agent spend limits list | table with columns (card, owner, limit, status) | 2-step (details → spend limits) with stepper on top |
| MailPulse | one centred card with faded newsletter preview cards stacked around it; issue-stats row under; sign-up as 2 steps in the card | card left + the system's own email/issue preview cards right | "Earnings": big balance + 6-month bar chart + Payout/Withdraw | vertical (portrait) card face left, details + meter right | 3-up grid of card tiles | single column, card preview on top |
| Axon | full-height accent BRAND RAIL on the left (~38%: logo, big claim, 3 proof stats, logo row); form on white right | narrow centred column with numbered 3-step reset progress | wallet as a statement: running balance line chart + ledger table | two stacked cards (physical + virtual) fanned, tabs to switch | segmented list grouped by "Business / Personal" | wide modal: left form, right live summary + fees |
| Veriq | header bar (logo + "Need help?") + centred form card + trust badges row (SOC 2, SSO, 2FA); separate 2FA code step shown as second card beside it | split: form card + security tips list | security-first: balance + "protected by" status rows + recent sign-ins | card face with lock overlay state + controls as toggles list | list with risk/verification badges | modal with 3D Secure verification step |
| Vantage (dark) | full DARK page: form left; right = big full-bleed chart/map hero with floating stat chips | dark centred card with glow border | dark wallet with multi-currency balances (tabs USD/EUR/GBP) | dark card face metallic, spend ring | dark compact list with usage sparkline per card | dark modal, two columns |
| Montra | form RIGHT inside a card; left = finance hero: large net-worth number + mini accounts list | card with phone/email method choice (segmented) | accounts wallet: total + per-account rows with bars | card carousel (3 cards peeking) + limit meter | cards as stacked overlapping faces | modal with card scan / manual entry tabs |
| Spendix | ONE wide card split inside (form left, benefits list with icons right) centred on the page | inline card with success state preview beside it | budget wallet: spent vs budget donut + categories | card face with transaction feed underneath | table with spend per card this month | modal with assign-to-team / department select |
| Abotix | top-aligned page with left vertical stepper (sign up = 3-step wizard; sign in = compact form + SSO + passkey option) | minimal page: form top-left, big type headline | usage wallet: credit packs (buy 3 tiers) + balance | virtual card list with one expanded card | inline editable list | modal with plan + card together (checkout style) |

Widgets must also differ in composition, not just colour. Keep the system's own tokens, components, icons and data voice.
