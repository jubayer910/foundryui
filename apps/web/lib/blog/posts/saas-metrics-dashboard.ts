import type { Post } from "../types";

export const post: Post = {
  slug: "saas-metrics-dashboard",
  title: "SaaS metrics dashboard: how to design MRR, churn and retention screens",
  metaTitle: "SaaS metrics dashboard design: MRR, churn, retention",
  description: "How to design a SaaS metrics dashboard: MRR, plan mix, churn reasons, cohort retention, past-due recovery and targets, with screens from a subscription admin.",
  date: "2026-11-20",
  category: "Guides",
  keyword: "saas metrics dashboard",
  intent: "informational",
  lede: "A SaaS metrics dashboard should show MRR and how it moved, the number of active subscriptions, ARPU and churn in one KPI row; then explain MRR with a 12-month trend and a plan mix; then show retention by cohort and the customers at risk right now. The pages that earn their keep are the ones where people can act: recover a failed payment, change a plan, or follow up with a customer who might cancel.",
  body: [
    { t: "p", x: "The screens in this guide come from [Vantage](/systems/vantage), the business admin and subscriptions system in Ingot UI. It has {figma:vantage} components from {screens:vantage} source screens, including {cat:vantage:KPI and stats} KPI and stat components and {cat:vantage:Charts} charts. The numbers in the screenshots are sample data; the patterns are what matter." },

    { t: "h2", x: "The metrics a subscription business actually checks" },
    { t: "p", x: "There are dozens of SaaS metrics. A dashboard should show the handful that change decisions, and define them clearly. This is the core set:" },
    { t: "table", head: ["Metric", "What it tells you", "How it is usually calculated"], rows: [
      ["MRR", "Recurring revenue you can count on each month", "Sum of monthly subscription value of active subscriptions"],
      ["Net new MRR", "Whether MRR grew, and why", "New + expansion − contraction − churned MRR"],
      ["Active subscriptions", "Size of the paying base", "Subscriptions not cancelled or expired at period end"],
      ["ARPU", "Average value of a paying account", "MRR ÷ active paying accounts"],
      ["Customer churn", "Share of customers who left", "Customers lost in period ÷ customers at start"],
      ["Revenue churn", "Share of revenue that left", "Churned + contraction MRR ÷ MRR at start"],
      ["Retention by cohort", "Whether newer customers stay longer", "Share of each signup month still active N months later"],
      ["Past due", "Revenue at risk from failed payments", "Count and value of subscriptions with an unpaid invoice"],
    ] },
    { t: "takeaway", x: "Write the formula for every metric into a definition tooltip. Two people reading “churn” differently is the most common reason SaaS dashboards lose trust." },
    { t: "p", x: "A word on annual plans: count them as one twelfth of the annual price per month in MRR, and say so in the definition. Showing the full annual payment in the month it arrives makes MRR jump and fall for no business reason." },

    { t: "h2", x: "The overview: KPI row and MRR trend" },
    { t: "p", x: "The top of a SaaS overview should answer “are we growing?” in two seconds. The [Vantage KPI strip](/components/vantage-kpi-strip-26230470) does this with MRR, active subscriptions and ARPU, each with a change vs the prior period. Keep the comparison period explicit; “vs prior” should mean the same thing on every card." },
    { t: "p", x: "Under it, the MRR trend shows the last 12 months. The [Vantage MRR section](/components/vantage-mrr-section-26231382) pairs the trend with each segment’s share of the total, which answers the next question (“where does the MRR come from?”) without another chart. Twelve months is the right default: long enough to see seasonality, short enough that recent changes are visible." },
    { t: "h3", x: "Show why MRR moved" },
    { t: "p", x: "A single MRR line hides the story. Two businesses can both grow 3% while one adds 10% and loses 7%. Add a movement breakdown: new, expansion, contraction and churned MRR, as stacked bars per month or a waterfall for the current month. The [Vantage net movement chart](/components/vantage-net-movement-chart-26336908) is built for this question." },
    { t: "components", slugs: ["vantage-kpi-strip-26230470", "vantage-mrr-section-26231382", "vantage-net-movement-chart-26336908", "vantage-plan-mix-26231399"], caption: "KPI strip, MRR trend, net movement and plan mix from Vantage." },

    { t: "h2", x: "Plans, mix and ARPU" },
    { t: "p", x: "Most pricing decisions start from the plan mix: how many customers are on each plan, and how well each plan keeps them. Show it as a short list or donut with counts, like the [Vantage plan mix](/components/vantage-plan-mix-26231399), and pair it with retention per plan." },
    { t: "p", x: "The [Vantage plan retention card](/components/vantage-plan-retention-26234663) lists each plan with its price, subscriber count and retention rate. In its sample data, the mid-priced plan retains better than the cheapest one, which is a common real pattern and a useful prompt for pricing tests. Put the price next to the plan name; people reason about plans by price, not by name." },
    { t: "p", x: "For businesses that sell through partners, teams or regions, add a revenue table by group. The [Vantage revenue by leg table](/components/vantage-revenue-by-leg-26230636) shows active subscriptions, MRR, share, churn and a 12-month trend per group in one row, so the best and worst groups stand out." },

    { t: "h2", x: "Churn: count it, then explain it" },
    { t: "p", x: "Show churn as a rate with a threshold, not just a count. An alert like the [Vantage churn above 2.5% rule](/components/vantage-alert-churn-above-2-5-26238540), which shows the current value next to the threshold, turns a number people forget to check into a signal that finds them. Let people create their own alert rules with a [create alert modal](/components/vantage-create-alert-modal-26238970): metric, condition, threshold." },
    { t: "h3", x: "Capture the reason at cancellation" },
    { t: "p", x: "Churn numbers say how many; reasons say why. Ask for a reason in the cancel flow with a short list of options, and show the results in the dashboard. The [Vantage cancel subscription popover](/components/vantage-cancel-subscription-popover-26337847) lists reasons such as price, moved away and not using it, each with its count this period. One look tells the team whether the problem is price, fit or onboarding." },
    { t: "ul", items: [
      "Keep the list to five to seven reasons plus “Other”, or the data becomes noise.",
      "Put the most common reason at the top so the list reflects reality.",
      "Link each reason to the customers who chose it, so someone can follow up.",
    ] },

    { t: "h2", x: "Retention by cohort" },
    { t: "p", x: "Cohort retention is the best long-term health check for a subscription product: it shows whether customers who joined recently stay longer than those who joined a year ago. The standard view is a grid: one row per signup month, one column per month since signup (M0, M1, M2…), and each cell shaded by the share still active." },
    { t: "p", x: "The [Vantage retention grid](/components/vantage-retention-grid-26234875) follows this layout. Three details make a grid readable:" },
    { t: "ol", items: [
      "Use one colour with increasing intensity, not a red-to-green scale, so the grid works for colour-blind readers.",
      "Print the percentage in each cell; shading alone is not precise enough.",
      "Leave future cells empty rather than zero, so a young cohort doesn’t look like it churned.",
    ] },
    { t: "p", x: "A tooltip on each cell should show the cohort size and the count still active, so people can tell a 50% cohort of four customers from one of four hundred." },
    { t: "cta", h: "Start from a subscription admin system", x: "Vantage includes the subscriptions, customers, insights and projections pages, with KPI rows, retention grids, drawers and alerts.", href: "/systems/vantage", label: "Open Vantage" },

    { t: "h2", x: "Subscriptions and failed payments" },
    { t: "p", x: "Failed payments are often the easiest revenue to recover, and the dashboard is where recovery happens. Give past-due subscriptions their own stat and list:" },
    { t: "ul", items: [
      "**Stats at the top.** The [Vantage past due stat](/components/vantage-stat-past-due-26333034) shows the count, the value and how many have been overdue more than 21 days. A [paused stat](/components/vantage-stat-paused-26333041) shows MRR on hold.",
      "**A subscriptions table with retries.** The [Vantage subscription table header](/components/vantage-header-row-subscription-26337170) has columns for status, due date, amount and retries, which is exactly what a recovery queue needs.",
      "**A drawer with the actions.** Clicking a subscription opens a drawer, like the [Colmado Díaz drawer](/components/vantage-colmado-d-az-drawer-26337417), with seats, MRR and tenure, and a footer offering [change plan, payment link and retry now](/components/vantage-footer-drawer-change-plan-26337663).",
    ] },
    { t: "p", x: "Open the full [Vantage subscriptions page](/components/vantage-subscriptions-page-26336728) to see these pieces together. The pattern (stats, queue, drawer with actions) is the same one we recommend for any operational page; see [modal vs drawer](/blog/modal-vs-drawer) for why the detail belongs in a drawer." },
    { t: "components", slugs: ["vantage-stat-past-due-26333034", "vantage-stat-paused-26333041", "vantage-colmado-d-az-drawer-26337417", "vantage-footer-drawer-change-plan-26337663"], caption: "Past-due recovery: stats, the subscription drawer and its actions." },

    { t: "h2", x: "Customers at risk" },
    { t: "p", x: "Retention work is easier before a customer cancels. An at-risk table lists customers whose behaviour suggests they might leave: failed payments, falling usage, no logins. The [Vantage at-risk table](/components/vantage-at-risk-table-26235081) shows customer, group, plan, last payment, risk level and owner. The owner column matters most: a risk nobody owns is a risk nobody handles." },
    { t: "p", x: "Link it to the full [customers table](/components/vantage-customers-table-26332895), which adds status, customer since, payments over 12 months and lifetime value. LTV next to risk helps a team decide which customers to call first." },

    { t: "h2", x: "Targets and projections" },
    { t: "p", x: "A dashboard that only looks back can’t tell a team whether they are on track. Add a target:" },
    { t: "ul", items: [
      "Let people set one with a modal like [set a revenue target](/components/vantage-set-a-revenue-target-modal-26231083), which shows the current value and the gap as they type.",
      "Show progress with the amount still to go and the days left, as the [Vantage August target card](/components/vantage-august-target-26231440) does.",
      "For planning, show scenarios against a base case. The [Vantage MRR scenario tooltip](/components/vantage-sep-30-mrr-tooltip-card-26429846) compares a scenario’s projected MRR with the base and shows the difference.",
    ] },
    { t: "p", x: "The [Vantage projections page](/components/vantage-projections-page-26338229) puts these together for forward-looking planning." },

    { t: "h2", x: "Customer detail: one page per account" },
    { t: "p", x: "Every metric on a SaaS dashboard eventually leads to “which customers?”. The customer view is where that question ends, so it should hold everything a team needs before contacting someone:" },
    { t: "ul", items: [
      "Plan, seats, MRR, tenure and lifetime value at the top, like the [Vantage MRR stats](/components/vantage-stats-mrr-26337453) in the customer drawer.",
      "Payment history with failed and retried payments marked.",
      "Recent activity and usage, so people can tell an inactive customer from a busy one.",
      "Owner and next follow-up, with a way to reassign.",
      "Plan changes and cancellation as actions in the drawer footer, not buried in settings.",
    ] },
    { t: "p", x: "Use a drawer when people work through a list of customers, and a full page when they need a long history. Vantage opens customers in drawers from its tables, such as the [Colmado Díaz drawer](/components/vantage-colmado-d-az-drawer-26337417), so the list stays in view." },

    { t: "h2", x: "Upcoming renewals" },
    { t: "p", x: "Renewals are predictable revenue events, and a short list of the next ones helps a team act before a card fails or a customer leaves. The [Vantage renewals card](/components/vantage-renewals-26230712) lists upcoming renewals by date with the customer, plan, auto-renew status and amount. Put it on the home page next to past-due, so the team sees both what is coming and what is late." },

    { t: "h2", x: "How to calculate the numbers correctly" },
    { t: "p", x: "Design can’t fix wrong numbers, but it can make mistakes visible. Agree on these rules with whoever owns the data, then write them into the definitions:" },
    { t: "table", head: ["Question", "Common choice", "Why it matters"], rows: [
      ["When does churn count?", "At the end of the paid period, not the day of cancellation", "Counting on cancellation day overstates churn early in the month"],
      ["Are discounts in MRR?", "Yes, MRR is what customers actually pay", "Otherwise MRR doesn’t match revenue"],
      ["Are paused subscriptions active?", "No, show them separately as MRR on hold", "Hides real churn if counted as active"],
      ["How are trials treated?", "Outside MRR until the first payment", "Trials inflate MRR and then fall out"],
      ["What currency?", "One reporting currency with a fixed rate per month", "Exchange rates otherwise move MRR on their own"],
    ] },
    { t: "p", x: "Show the rule in the definition tooltip of each metric. When someone asks “why is churn higher than last month?”, the answer should be on the screen." },

    { t: "h2", x: "Building it with an AI agent" },
    { t: "p", x: "With the [Ingot UI MCP server](/mcp) connected, an AI coding agent can build these pages from the Vantage system instead of inventing its own cards and colours:" },
    { t: "code", label: "Prompt", x: "Using the Ingot UI Vantage system, build app/(app)/subscriptions/page.tsx: KPI strip with MRR, active subscriptions, ARPU and churn vs last month; a 12-month MRR chart with a net movement breakdown; plan mix with price and retention per plan; a past-due stat and a subscriptions table with status, due date, amount and retries; a subscription drawer with change plan, payment link and retry now. Data from lib/data/subscriptions.ts. Include empty and loading states. Run audit_ui at the end." },
    { t: "p", x: "For setup and more prompts, see [Claude Code frontend UI](/blog/claude-code-frontend-ui)." },

    { t: "h2", x: "Mistakes to avoid on SaaS dashboards" },
    { t: "ul", items: [
      "**Counting annual payments as one month’s MRR.** Normalise to monthly and say so.",
      "**Mixing customer churn and revenue churn.** Show both, labelled, because they can move in opposite directions.",
      "**Showing cumulative totals.** “Total customers ever” only goes up and hides churn.",
      "**Hiding trials in active subscriptions.** Show trials separately; they are a pipeline, not revenue.",
      "**Charts without owners.** Every risk list needs an owner column and a next action.",
    ] },

    { t: "h2", x: "SaaS metrics dashboard checklist" },
    { t: "ol", items: [
      "MRR, active subscriptions, ARPU and churn in the KPI row, each with a comparison.",
      "A 12-month MRR trend plus a movement breakdown (new, expansion, contraction, churn).",
      "Plan mix with price and retention per plan.",
      "Churn alerts with thresholds, and cancellation reasons with counts.",
      "A cohort retention grid with percentages and cohort sizes.",
      "A past-due queue with retries and recovery actions in a drawer.",
      "An at-risk customer table with an owner for every row.",
      "A target with progress and days left.",
      "A definition for every metric.",
    ] },
    { t: "p", x: "For the general rules behind these pages, read [dashboard design best practices](/blog/dashboard-design-best-practices). For the time controls, breakdowns and exports these screens rely on, see [analytics dashboard design](/blog/analytics-dashboard-design). And for the KPI cards themselves, the [KPI card design guide](/blog/kpi-card-design)." },
  ],
  faq: [
    { q: "What metrics should a SaaS dashboard show?", a: "MRR and net new MRR, active subscriptions, ARPU, customer and revenue churn, cohort retention and past-due revenue. Add a target and an at-risk customer list so the team can act, not just watch." },
    { q: "How do you show churn on a dashboard?", a: "As a rate with a comparison and a threshold alert, next to the reasons customers gave when cancelling. Show customer churn and revenue churn separately, because they can move in different directions." },
    { q: "What is a cohort retention chart?", a: "A grid with one row per signup month and one column per month since signup. Each cell shows the share of that cohort still active, so you can see whether newer customers stay longer." },
    { q: "Should annual plans count fully in MRR?", a: "No. Count one twelfth of the annual price each month and state that in the metric definition, otherwise MRR spikes in the month payments arrive." },
    { q: "Is there a Figma and React kit for subscription dashboards?", a: "Yes. The Vantage system in Ingot UI includes subscriptions, customers, insights and projections pages with KPI rows, retention grids, at-risk tables, drawers and alert components." },
  ],
  related: ["kpi-card", "data-table", "donut", "delta-chip"],
  systems: ["vantage"],
};
