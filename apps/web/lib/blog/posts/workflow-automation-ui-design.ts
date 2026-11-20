import type { Post } from "../types";

export const post: Post = {
  slug: "workflow-automation-ui-design",
  title: "Workflow automation UI design: builder, runs, failures and review",
  metaTitle: "Workflow automation UI design: builder, runs and logs",
  description: "How to design a workflow automation product: builder, versions, test runs, runs and logs, exceptions, AI review and connectors, shown on real screens.",
  date: "2026-11-20",
  category: "Guides",
  keyword: "workflow automation ui",
  intent: "informational",
  lede: "A workflow automation product needs four connected surfaces: a builder where people describe or draw the flow, a test run that shows each step’s input, output and timing, a runs and logs view with throughput and failure rate, and an exceptions page that explains why a run failed and how to fix it. Around them sit versions you can restore, a review queue for low-confidence AI decisions, and connectors whose health is always visible.",
  body: [
    { t: "p", x: "The screens in this guide come from [Axon](/systems/axon), the workflow automation system in Ingot UI. Axon has {figma:axon} components across {screens:axon} source screens, including {cat:axon:Tables and lists} table and list components and {cat:axon:Modals} modals. Its sample workflow, Invoice Triage, reads emails, extracts invoice fields with an AI step and matches purchase orders, which makes it a good example for most automation products." },

    { t: "h2", x: "The workflow list" },
    { t: "p", x: "The workflows page is the home screen for builders and operators. It should answer “is everything running?” at a glance and let people manage many workflows at once." },
    { t: "ul", items: [
      "Show each workflow with its status, trigger, last run, run volume and failure rate, so a broken workflow stands out in the list.",
      "Add a toolbar with search, status filters and sort.",
      "Support bulk actions. The [Axon bulk action bar](/components/axon-bulk-action-bar-73237683) appears on selection with run test, pause, move to, export CSV and archive, and offers to select all matching workflows, not just the visible page.",
    ] },
    { t: "p", x: "Open the [Axon workflows page](/components/axon-workflows-page-73236774) to see the list with its toolbar." },

    { t: "h2", x: "Creating a workflow: three ways in" },
    { t: "p", x: "People arrive with different amounts of clarity. Offer three starting points in one dialog, as the [Axon create workflow modal](/components/axon-create-workflow-modal-73238047) does:" },
    { t: "ol", items: [
      "**Describe it.** A text box (“What should this workflow do?”) with example prompts. AI drafts the steps, and the person edits them on the canvas.",
      "**From a template.** Tested templates grouped by team. Each [template card](/components/axon-template-support-ticket-triage-73239004) shows its team, how many teams use it and the time it saves.",
      "**Blank canvas.** For experts who know exactly what they want: start with a trigger and build.",
    ] },
    { t: "p", x: "Templates do more for activation than any onboarding tour. The [Axon templates page](/components/axon-templates-page-73238580) gives them a full gallery with categories and a featured row." },

    { t: "h2", x: "The builder canvas" },
    { t: "p", x: "Most automation builders use a node canvas: a trigger at the top, steps below, branches where conditions split the flow. The canvas should show more than shapes and arrows:" },
    { t: "ul", items: [
      "**Live health on each node.** The [Axon canvas](/components/axon-canvas-73240028) shows the trigger with its volume this week and a healthy status, and the AI step with its model, the number of fields it extracts and its accuracy.",
      "**A toolbar with state.** The [builder toolbar](/components/axon-builder-toolbar-73239831) shows the workflow name, the draft version, when it was last saved, who else is editing, and the history, test run and publish actions.",
      "**Unsaved changes made obvious.** An [unsaved bar](/components/axon-unsaved-bar-73241482) with discard and “save as” a new version, so nobody loses work or overwrites production by accident.",
      "**Zoom and fit.** Small [zoom controls](/components/axon-zoom-controls-73240132) in a corner; large workflows need them.",
    ] },
    { t: "takeaway", x: "Show run data on the canvas. A builder that only shows the design hides whether the workflow actually works." },
    { t: "components", slugs: ["axon-canvas-73240028", "axon-builder-toolbar-73239831", "axon-unsaved-bar-73241482", "axon-create-workflow-modal-73238047"], caption: "Axon’s builder: canvas, toolbar, unsaved bar and the create dialog." },

    { t: "h2", x: "Versions and safe publishing" },
    { t: "p", x: "Automations change real data, so publishing must be deliberate and reversible. Keep every published version, show what is live, and make rollback a one-step action with a clear diff." },
    { t: "p", x: "The [Axon restore version modal](/components/axon-restore-v13-to-production-modal-73238293) is a good model: it names the version being restored and the one live now, then lists what will change, down to individual settings like an AI confidence threshold. People confirm a rollback knowing exactly what it does." },
    { t: "p", x: "Pausing deserves the same care. The [pause workflow modal](/components/axon-pause-customer-refunds-modal-73237727) says how many queued runs will be affected, when the next trigger fires and which downstream workflows depend on this one. That information turns a nervous click into an informed decision." },

    { t: "h2", x: "Test runs: show every step" },
    { t: "p", x: "Before publishing, people need to see a run end to end. A good test run view has a timeline and a step inspector:" },
    { t: "ul", items: [
      "**A timeline** of steps with their durations, and the overall result. The [Axon run timeline](/components/axon-timeline-73242233) shows a passed run with one warning and the time each step took.",
      "**A step drawer** with input, output and logs tabs. The [extract invoice fields drawer](/components/axon-extract-invoice-fields-drawer-73242706) shows where the step sits in the run and its latency.",
      "**AI cost and speed per step.** The [latency panel](/components/axon-body-drawer-latency-73242749) shows latency, tokens, cost and model for the AI step. For AI-heavy workflows, cost per run is a product feature, not an internal metric.",
    ] },
    { t: "p", x: "See the full [Axon test run page](/components/axon-test-run-page-73241702)." },
    { t: "cta", h: "Start from a real automation product", x: "Axon includes workflows, templates, the builder, AI configuration, test runs, review queue, runs and logs, exceptions, connectors and audit log.", href: "/systems/axon", label: "Open Axon" },

    { t: "h2", x: "Runs and logs" },
    { t: "p", x: "Once workflows are live, operators watch them as a system. Put four numbers at the top, as the [Axon run stats](/components/axon-stats-73243998) do: runs per minute, p95 duration, failure rate and items in queue, each with its change. p95 is more honest than the average: it shows what slow runs feel like." },
    { t: "p", x: "Below the stats, list runs with ID, workflow, status, result, duration and time. A [run row](/components/axon-trigger-run-row-73244396) like Axon’s shows a failed run next to the record it created, so operators can see the result without opening it. Filter by status and workflow, and keep the time column in the operator’s time zone." },
    { t: "p", x: "Open the [Axon runs and logs page](/components/axon-runs-logs-page-73243953) for the full layout. It is deliberately dense: operators scan it all day." },

    { t: "h2", x: "Exceptions: explain the failure" },
    { t: "p", x: "A failed run with a stack trace is a ticket for an engineer. A failed run with an explanation and a suggested fix is something an operator can handle. Group failures by cause, not by run, and open each cause in a drawer." },
    { t: "p", x: "The [Axon “PO not found” drawer](/components/axon-po-not-found-in-netsuite-drawer-73336855) shows the severity, a likely root cause with a confidence level, how often it happened in the last 14 days and whether it is rising, plus suggested fixes, including a rule that needs no code change. That last part matters: let non-engineers fix common failures with rules." },
    { t: "p", x: "Connection problems need their own treatment. When an account expires, show an [alert](/components/axon-alert-73337347) with “Why did this happen?” and a reconnect button where the failure appears, not only on the connectors page." },
    { t: "components", slugs: ["axon-stats-73243998", "axon-trigger-run-row-73244396", "axon-po-not-found-in-netsuite-drawer-73336855", "axon-timeline-73242233"], caption: "Run stats, a run row, an exception drawer and a run timeline." },

    { t: "h2", x: "Human review for AI steps" },
    { t: "p", x: "AI steps make decisions with a confidence level. Send the uncertain ones to people. Show the share decided automatically, as the [Axon AI decision KPIs](/components/axon-kpis-73240700) do with AI decisions and the auto-approved rate, and give reviewers a queue sorted by risk." },
    { t: "p", x: "The [Axon review queue page](/components/axon-review-queue-page-73242911) is built for this. Each item should show the AI’s proposed result, its confidence, the source document and approve, edit or reject actions with keyboard shortcuts. Reviewer corrections are valuable training data; capture them." },
    { t: "p", x: "Configure the AI itself on its own page. The [Axon agent detail](/components/axon-agent-detail-73241122) shows the live version and has tabs for model, instructions, guardrails and evaluation, with a test prompt action. For a deeper look at reviewable AI, read [AI agent dashboard design](/blog/ai-agent-dashboard-design)." },

    { t: "h2", x: "Connectors and data sources" },
    { t: "p", x: "Automations are only as reliable as their connections. Each connector needs status, usage and the workflows that depend on it. The [Axon Gmail drawer](/components/axon-gmail-drawer-73338404) shows an expired connection with its API calls in the last 24 hours, the daily quota and the workflows that use it, so people know the impact before reconnecting." },
    { t: "p", x: "See the [connectors page](/components/axon-connectors-page-73337340) and [data sources page](/components/axon-data-sources-page-73339270) for the list views." },

    { t: "h2", x: "Usage, billing and audit" },
    { t: "p", x: "Automation pricing is usually per run, task or AI call, so customers need to see usage before the invoice arrives. Show usage against plan limits on the [usage and billing page](/components/axon-usage-billing-page-73343870), and warn before limits are hit." },
    { t: "p", x: "Teams that automate finance or customer data also need an [audit log](/components/axon-audit-log-page-73346696): who changed which workflow, who published, who paused, who restored a version. Make it searchable and exportable." },

    { t: "h2", x: "A worked example: an invoice that fails to match" },
    { t: "p", x: "Follow one failed run through a well-designed automation product:" },
    { t: "ol", items: [
      "**It fails.** An invoice email arrives, the AI step extracts its fields, and the purchase order lookup finds nothing. The run shows as failed in [runs and logs](/components/axon-runs-logs-page-73243953), and the failure rate stat ticks up.",
      "**It is grouped.** On the [exceptions page](/components/axon-exceptions-page-73244935), the run joins an existing group, “PO not found”, which has been rising for several days.",
      "**It is explained.** The exception drawer shows the likely root cause with its confidence and suggests a rule that needs no code change.",
      "**It is fixed.** An operator creates the rule. No engineer is needed.",
      "**It is tested.** The builder opens with the change as a new draft; a test run shows each step passing.",
      "**It is published.** The new version goes live. If it causes problems, the restore modal shows exactly what rolling back will change.",
    ] },
    { t: "p", x: "Each step depends on a design decision above: a failure rate stat, grouped exceptions, explained causes, rules, test runs and safe versions. That is the difference between an automation product teams trust and one they babysit." },

    { t: "h2", x: "Status language" },
    { t: "p", x: "Automation products show status everywhere: workflows, runs, steps, connectors. Use one small vocabulary and the same colours across all of them. The [Axon tabs](/components/axon-tabs-73237429) count workflows as all, live, draft and paused." },
    { t: "table", head: ["Status", "Means", "Colour"], rows: [
      ["Live / Healthy", "Running as expected", "Success"],
      ["Draft", "Not published", "Neutral"],
      ["Paused", "Stopped on purpose", "Neutral or warning"],
      ["Passed with warnings", "Finished, but something needs a look", "Warning"],
      ["Failed", "Did not finish", "Danger"],
      ["Expired", "A connection needs to be re-authorised", "Warning, with a reconnect action"],
    ] },
    { t: "p", x: "Always show the word with the colour. And make paused visually different from failed: pausing is a choice, failing is a problem." },

    { t: "h2", x: "Notifications without noise" },
    { t: "p", x: "Automations run thousands of times a day, so naive notifications drown people. Notify on patterns, not single events: a failure rate above a threshold, a new exception group, a connector that expired, a usage limit close to its end. Let each person choose channels and quiet hours on a [notifications page](/components/axon-notifications-page-73342189), and include the reason and the fix action in every message." },

    { t: "h2", x: "Building it with an AI agent" },
    { t: "p", x: "With the [Ingot UI MCP server](/mcp) connected, an AI coding agent can build automation pages from the Axon system:" },
    { t: "code", label: "Prompt", x: "Using the Ingot UI Axon system, build app/(app)/runs/page.tsx: stats for runs per minute, p95 duration, failure rate and queue, each with its change; a runs table with ID, workflow, status, result, duration and time, filterable by status and workflow; a run drawer with a step timeline and input, output and logs tabs; an alert with a reconnect action when a connector has expired. Data from lib/data/runs.ts. Include empty and loading states. Run audit_ui at the end." },
    { t: "p", x: "For setup, see [Claude Code frontend UI](/blog/claude-code-frontend-ui)." },

    { t: "h2", x: "Workflow automation UI checklist" },
    { t: "ol", items: [
      "The workflow list shows status, volume and failure rate, with bulk actions.",
      "Create offers describe it, templates and blank canvas.",
      "The canvas shows live health and AI accuracy on each node.",
      "Unsaved changes, versions and publishing are explicit; rollback shows a diff.",
      "Pausing shows queued runs, next trigger and downstream impact.",
      "Test runs show a timeline and each step’s input, output, logs, latency and cost.",
      "Runs and logs lead with throughput, p95, failure rate and queue.",
      "Exceptions are grouped by cause with a root cause and suggested fix.",
      "Low-confidence AI decisions go to a review queue.",
      "Connectors show health, quota and dependent workflows.",
      "Usage is visible against limits, and every change is in the audit log.",
    ] },
    { t: "p", x: "For the rules that apply to every dashboard, read [dashboard design best practices](/blog/dashboard-design-best-practices). For choosing between a drawer and a modal in flows like these, see [modal vs drawer](/blog/modal-vs-drawer)." },
  ],
  faq: [
    { q: "What screens does a workflow automation app need?", a: "A workflow list, a create flow (describe, template or blank), a builder canvas, versions and publishing, test runs, runs and logs, exceptions, a review queue for AI decisions, connectors, usage and billing, and an audit log." },
    { q: "How should a workflow builder show errors?", a: "Group failures by cause, explain the likely root cause and how often it happens, and offer a fix that non-engineers can apply, such as a rule. Show connection problems with a reconnect action where the failure appears." },
    { q: "Should a workflow builder use a node canvas or a list of steps?", a: "A node canvas suits flows with branches and parallel steps; a vertical list of steps is simpler for linear flows. Either way, show live health and run data on each step, not only the design." },
    { q: "Is there a UI kit for workflow automation products?", a: "Yes. The Axon system in Ingot UI was built from a real automation product and includes the workflows, templates, builder, AI configuration, test run, review queue, runs and logs, exceptions, connectors and audit log pages." },
  ],
  related: ["data-table", "dialog", "tabs", "switch"],
  systems: ["axon"],
};
