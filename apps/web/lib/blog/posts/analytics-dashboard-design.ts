import type { Post } from "../types";

export const post: Post = {
  slug: "analytics-dashboard-design",
  title: "Analytics dashboard design: how to build one people actually read",
  metaTitle: "Analytics dashboard design: layout, metrics and charts",
  description: "How to design an analytics dashboard: metrics, overview layout, date ranges, charts, breakdowns, drill-downs and reports, shown on a real analytics product.",
  date: "2026-11-20",
  category: "Guides",
  keyword: "analytics dashboard design",
  intent: "informational",
  lede: "An analytics dashboard works when it moves people from “what happened?” to “why?” to “what now?” in three clicks. Show a few headline metrics with comparisons, one trend chart for the main metric, breakdowns by source or segment underneath, and a path from any number to the rows behind it. A shared date range and comparison control ties it all together.",
  body: [
    { t: "p", x: "This guide uses the [Loopo](/systems/loopo) design system as its running example. Loopo was built from an audience and revenue analytics product, and it has {figma:loopo} components across {screens:loopo} source screens, {cat:loopo:Charts} of them charts. Loopo is free, so you can open every component mentioned here, copy the code and use it." },

    { t: "h2", x: "What makes analytics dashboards different" },
    { t: "p", x: "An operational dashboard tells people what to do next: a queue, a list of failures, approvals waiting. An analytics dashboard tells people what is going on, so they can decide what to do. That changes the design in three ways:" },
    { t: "ul", items: [
      "**Time is always present.** Every number belongs to a period, and most need a comparison period. The date range control is the most-used control on the page.",
      "**Questions branch.** Someone sees revenue drop, then asks which channel, then which campaign, then which customers. The design has to support that path, not end at the chart.",
      "**Trust matters more than looks.** If two pages show different totals for the same period, people stop believing either. Definitions, time zones and data freshness must be visible.",
    ] },
    { t: "takeaway", x: "An analytics dashboard is a set of connected answers, not a gallery of charts." },

    { t: "h2", x: "Step 1: choose the metrics before the charts" },
    { t: "p", x: "Start with the decisions the dashboard supports, then pick the metrics that inform them. For a growth or revenue product, that usually means one metric per stage of the funnel:" },
    { t: "table", head: ["Stage", "Question", "Typical metric", "Where it lives in Loopo"], rows: [
      ["Reach", "Are more people finding us?", "New contacts, traffic by source", "[Audience page](/components/loopo-audience-page-18844138)"],
      ["Engagement", "Do they care?", "Open rate, click rate, active subscribers", "[Performance page](/components/loopo-performance-page-18954504)"],
      ["Conversion", "Do they pay?", "Transactions, conversion rate", "[Revenue page](/components/loopo-revenue-page-18958122)"],
      ["Value", "How much is each worth?", "Revenue per channel, average order value", "[Analytics page](/components/loopo-analytics-page-18943535)"],
    ] },
    { t: "p", x: "Keep a short definition next to every metric that could be read two ways. “Active subscriber” can mean opened in 30 days or simply not unsubscribed; the [Vantage definition tooltip](/components/vantage-definition-tooltip-26233916) is a good pattern for this. Definitions stop arguments in meetings." },
    { t: "h3", x: "Leading and lagging metrics" },
    { t: "p", x: "Revenue is a lagging metric: by the time it moves, the cause happened weeks ago. Put at least one leading metric (new contacts, trial starts, activation) next to it, so the dashboard warns people early instead of only reporting the result." },

    { t: "h2", x: "Step 2: the overview layout" },
    { t: "p", x: "Most good analytics overviews follow the same order from top to bottom:" },
    { t: "ol", items: [
      "**Page header** with the title, date range, comparison and export. See the [Loopo analytics page header](/components/loopo-page-header-analytics-18943543).",
      "**KPI strip** with three to five metrics, each with a delta vs the comparison period. The [Loopo KPI strip with metric selector](/components/loopo-kpi-strip-metric-selector-18944120) lets people choose which metric drives the chart below.",
      "**Main trend chart** for the selected metric, with the comparison period drawn as a second, quieter line.",
      "**Breakdowns** in a two-column grid: by source, by channel, by location, by product.",
      "**Detail table** of the items behind the numbers, with a link to the full report.",
    ] },
    { t: "p", x: "Open the [Loopo overview page](/components/loopo-overview-page-18743155) to see this order on a real screen. Then consider connecting the KPI strip to the main chart, so choosing a metric in the strip redraws the chart. That one interaction can replace four separate charts." },
    { t: "components", slugs: ["loopo-overview-page-18743155", "loopo-kpi-strip-metric-selector-18944120", "loopo-growth-chart-18845642", "loopo-sources-card-18845034"], caption: "Loopo overview, its KPI strip, main trend chart and a source breakdown." },

    { t: "h2", x: "Step 3: date ranges and comparisons" },
    { t: "p", x: "The date control is the heart of an analytics dashboard, so it deserves more design time than it usually gets." },
    { t: "ul", items: [
      "**Presets first.** Last 7 days, last 30 days, this month, last month, this quarter. Most people never open the calendar. The [Loopo date range popover](/components/loopo-date-range-popover-18945032) lists Today, Last 7 days, Last 30 days, This quarter and Year to date before Custom.",
      "**Comparison as its own control.** “Compare to previous period” and “compare to same period last year” answer different questions. The [Loopo compare-to menu](/components/loopo-compare-to-menu-18945062) keeps it one click away.",
      "**Granularity follows the range.** Daily points for 30 days, weekly for a quarter, monthly for a year. Let people override it with a [granularity menu](/components/loopo-granularity-menu-18843410).",
      "**One range for the whole page.** If each card has its own date picker, people will compare numbers from different periods without noticing.",
      "**Put the range in the URL.** Then a shared link shows exactly what the sender saw.",
    ] },
    { t: "p", x: "Also show the time zone and when the data last refreshed, at least on hover. “Updated 4 minutes ago” builds more trust than any visual polish." },

    { t: "h2", x: "Step 4: charts for analytics" },
    { t: "p", x: "Analytics dashboards lean heavily on a few chart types. Use them for the questions they answer best:" },
    { t: "table", head: ["Chart", "Use it for", "Loopo example"], rows: [
      ["Line or area", "One metric over time, with a comparison line", "[Transaction value trend](/components/loopo-transaction-value-trend-18744178)"],
      ["Bars", "Comparing periods or categories", "[Weekly bars](/components/loopo-weekly-bars-18846123)"],
      ["Grouped comparison", "This period vs last for several items", "[Revenue comparison card](/components/loopo-revenue-comparison-card-18944176)"],
      ["Ranked list with bars", "Top sources, locations, products", "[Top locations card](/components/loopo-top-locations-card-18845320)"],
      ["Stacked or share", "How the total splits by channel", "[Revenue by channel card](/components/loopo-revenue-by-channel-card-18944380)"],
    ] },
    { t: "p", x: "Two habits make analytics charts much easier to read. First, annotate events on the timeline (a launch, a price change, a tracking outage), as the [Loopo annotation popover](/components/loopo-annotation-popover-18945170) does for a campaign send, with its open rate, click rate and revenue, so people don’t have to remember why a line jumped. Second, start bar charts at zero and let line charts zoom to the data, because a bar’s length is the value but a line’s shape is the trend." },
    { t: "p", x: "For a complete decision guide, read [dashboard chart types](/blog/dashboard-chart-types-react). If you are choosing a library to draw them, see [best React chart libraries](/blog/best-react-chart-libraries)." },
    { t: "cta", h: "Use the Loopo analytics pages", x: "Loopo is free in Figma and code. Copy the overview, charts and tables into your project in one command.", href: "/systems/loopo", label: "Open Loopo" },

    { t: "h2", x: "Step 5: breakdowns and drill-downs" },
    { t: "p", x: "A headline number raises a question; the breakdown answers it. Put breakdown cards directly under the main chart, each answering “by what?”: by source, by channel, by country, by device. Keep them the same height in a grid so they read as a set." },
    { t: "p", x: "Then make every breakdown row clickable. Clicking a channel should filter the whole page to that channel, or open its detail. This is the step most analytics dashboards skip, and it is the one that turns a report into a tool. The [Loopo channel performance card](/components/loopo-channel-performance-card-18954770) and [channel table](/components/loopo-channel-table-18955189) show the card and the full-table version of the same breakdown." },
    { t: "h3", x: "Segments and saved views" },
    { t: "p", x: "Analysts repeat the same filters every week. Let them save a filter set as a segment or view and pin it. The [Loopo segments page](/components/loopo-segments-page-18947377) and [segments table](/components/loopo-segments-table-18948176) list saved audiences with their rules, size, 30-day change and where each one is used; the same pattern works for saved report views." },
    { t: "components", slugs: ["loopo-channel-performance-card-18954770", "loopo-top-products-card-18954964", "loopo-segments-table-18948176", "loopo-filter-toolbar-18945675"], caption: "Breakdowns, segments and the filter toolbar that drives them." },

    { t: "h2", x: "Step 6: reports and exports" },
    { t: "p", x: "Many people never log in; they read a weekly email or a PDF someone exported. Design for them too:" },
    { t: "ul", items: [
      "Offer export from every view, with the current filters and date range applied. The [Loopo export menu](/components/loopo-export-menu-18843254) shows the range being exported and offers a PDF report, CSV of the KPIs and chart data, a live Google Sheets sync and a share link.",
      "Give saved and scheduled reports their own page, like the [Loopo reports page](/components/loopo-reports-page-18956352), and show each report’s owner, schedule and last run.",
      "Make scheduled reports match the dashboard exactly. If the email says one number and the dashboard another, both lose trust.",
    ] },

    { t: "h2", x: "Empty and partial data" },
    { t: "p", x: "Analytics products have a hard first week: there is no history to compare against. Plan for it." },
    { t: "ul", items: [
      "When there is no comparison period yet, hide the delta instead of showing “+100%”.",
      "When a chart has too few points, show the points and a note (“Trends appear after 7 days of data”) instead of a dramatic line between two dots.",
      "When an integration is not connected, the empty state should name it and offer the connect button, as on the [Loopo integrations page](/components/loopo-integrations-page-18953469).",
    ] },
    { t: "p", x: "More patterns in [empty state design](/blog/empty-state-design)." },

    { t: "h2", x: "A worked example: “Why did revenue drop last week?”" },
    { t: "p", x: "Here is how a well-designed analytics dashboard handles one real question, step by step, using Loopo pages:" },
    { t: "ol", items: [
      "**Spot it.** On the [overview](/components/loopo-overview-page-18743155), the revenue KPI shows a red delta vs the previous week. The main chart shows the dip starting on Tuesday.",
      "**Check for a known cause.** An annotation on Tuesday shows a campaign was sent that day, so the dip isn’t a tracking outage.",
      "**Break it down.** On the [revenue page](/components/loopo-revenue-page-18958122), the [revenue by channel card](/components/loopo-revenue-by-channel-card-18944380) shows email is flat but one store channel fell.",
      "**Find the rows.** The [transactions card](/components/loopo-transactions-card-18958554), filtered to that channel, shows fewer orders, not smaller ones.",
      "**Act.** The analyst opens the [Shopify settings drawer](/components/loopo-shopify-settings-drawer-18954004), sees the integration settings and fixes the issue, then shares a link to the filtered view with the team.",
    ] },
    { t: "p", x: "Five steps, no spreadsheet, no SQL. Each step needed one design decision covered above: deltas, annotations, breakdowns, drill-down and drawers. Remove any one of them and the question ends in an export." },

    { t: "h2", x: "Number formatting and labels" },
    { t: "p", x: "Analytics dashboards live and die on how numbers are written. A few rules prevent most confusion:" },
    { t: "ul", items: [
      "**Abbreviate large numbers in KPIs and axes** (12.4K, $1.2M) but show the exact value in tooltips and tables.",
      "**Keep decimals consistent.** Percentages with one decimal (4.1%), currency with none in KPIs and two in tables.",
      "**Say what a percentage is a percentage of.** “Open rate 41.2%” is clear; “41.2%” under “Email” is not.",
      "**Use percentage points for changes in rates.** Open rate going from 40% to 42% is +2 pts, not +5%. Mixing them up is the most common error in analytics UIs.",
      "**Align numbers right and use tabular figures** so digits line up in tables and KPI rows.",
    ] },

    { t: "h2", x: "Performance and loading" },
    { t: "p", x: "Analytics queries are slow, and a dashboard that loads everything at once feels slower than it is. Load the KPI strip first, then the main chart, then breakdowns. Show skeletons in the shape of each card so the layout doesn’t jump. When a range is very large, say so (“Loading 12 months of data”) instead of showing an endless spinner. And cache the last result, so returning to the page is instant while fresh data loads in the background." },

    { t: "h2", x: "Building an analytics dashboard with an AI agent" },
    { t: "p", x: "With the [Ingot UI MCP server](/mcp) connected to Claude Code or Cursor, you can ask for the whole page in one prompt and get components from the Loopo system instead of generic cards:" },
    { t: "code", label: "Prompt", x: "Using the Ingot UI Loopo system, build app/(app)/analytics/page.tsx: page header with a date range (presets: last 7 days, last 30 days, this quarter) and a compare-to control kept in the URL; KPI strip for new contacts, open rate, click rate and revenue with deltas; a revenue trend with the comparison period as a second line; breakdown cards by source and by channel; a channel table that filters the page when a row is clicked. Data from lib/data/analytics.ts. Include empty and loading states. Run audit_ui at the end." },
    { t: "p", x: "Read [MCP for UI components](/blog/mcp-server-ui-components-ai-agents) for setup, and [figma to React](/blog/figma-to-react-code) if your designer works in Figma first." },

    { t: "h2", x: "Analytics dashboard checklist" },
    { t: "ol", items: [
      "Every metric has a clear name, a definition on hover and a period.",
      "One date range and one comparison control drive the whole page, and live in the URL.",
      "The KPI strip is connected to the main chart.",
      "Breakdowns sit under the main chart and every row drills down.",
      "Events are annotated on the timeline.",
      "Data freshness and time zone are visible.",
      "Every chart and table exports with the current filters.",
      "The first week, with little data, has been designed.",
    ] },
    { t: "p", x: "For general rules that apply to every kind of dashboard, see [dashboard design best practices](/blog/dashboard-design-best-practices). For subscription businesses, the next step is a [SaaS metrics dashboard](/blog/saas-metrics-dashboard) with MRR, churn and retention." },
  ],
  faq: [
    { q: "What should an analytics dashboard include?", a: "A page header with date range and comparison, a KPI strip of three to five metrics with deltas, one main trend chart, breakdown cards by source or segment, a detail table, and export. Definitions and data freshness should be visible." },
    { q: "How do I choose metrics for an analytics dashboard?", a: "List the decisions the dashboard supports, then choose one metric per stage (reach, engagement, conversion, value). Include at least one leading metric next to lagging ones like revenue." },
    { q: "What is the difference between an analytics and an operational dashboard?", a: "An analytics dashboard explains what happened over time so people can decide what to do. An operational dashboard shows what needs action now, usually as a queue or a list of statuses." },
    { q: "Is there a free analytics dashboard UI kit?", a: "Yes. The Loopo system in Ingot UI is free in Figma and React + Tailwind code, and it was built from a real audience and revenue analytics product." },
  ],
  related: ["kpi-card", "line-highlight", "capsule-bars", "ranked-list"],
  systems: ["loopo"],
};
