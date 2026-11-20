import type { Post } from "../types";

export const post: Post = {
  slug: "security-dashboard-design",
  title: "Security dashboard design: findings, SLAs and fixes people act on",
  metaTitle: "Security dashboard design: UI patterns that get fixes done",
  description: "How to design a security dashboard: posture metrics, a findings table, SLA rules, attack paths, secrets, fix requests, access and reports, on a real product.",
  date: "2026-11-20",
  category: "Guides",
  keyword: "security dashboard design",
  intent: "informational",
  lede: "A security dashboard is only useful if it gets findings fixed. Lead with a few posture metrics that can go down as well as up, show findings in one triage table with severity, owner and age, make SLA rules visible and enforced, rank risk by what is actually reachable, and put the fix action (assign, request a fix, open the PR) on the finding itself.",
  body: [
    { t: "p", x: "This guide uses [Veriq](/systems/veriq), the security and compliance system in Ingot UI, as its running example. It has {figma:veriq} components across {screens:veriq} source screens, including vulnerabilities, attack paths, secrets, dependencies, AI pentests, fix requests, team access and reports. The data in the screens is sample data." },

    { t: "h2", x: "Who opens a security dashboard" },
    { t: "p", x: "Security products serve three very different visitors, and the design has to work for each:" },
    { t: "table", head: ["Visitor", "Wants to know", "Main page"], rows: [
      ["Security engineer", "What is new, what is critical, what is overdue", "[Vulnerabilities](/components/veriq-vulnerabilities-page-6518508)"],
      ["Developer", "What do I need to fix, and how", "[Fix requests](/components/veriq-fix-requests-page-6523070)"],
      ["Leadership or auditor", "Are we getting safer, and can we prove it", "[Overview](/components/veriq-overview-page-6519969) and [reports](/components/veriq-reports-page-6620714)"],
    ] },
    { t: "p", x: "The common mistake is to build only for the first visitor: a long list of findings with CVSS scores. Developers then receive tickets without context, and leadership receives a number that only ever grows." },

    { t: "h2", x: "Posture metrics that can improve" },
    { t: "p", x: "“1,204 open findings” is not a useful headline. It only grows as you scan more, and nobody can act on it. Choose metrics that move when the team does good work, and show the change:" },
    { t: "ul", items: [
      "**Findings by severity with a weekly change.** The [Veriq findings in repos metric](/components/veriq-metric-findings-in-repos-6622346) shows the total, the change vs last week, and the split into critical, high, medium and low.",
      "**Coverage.** Is everything being scanned? The [scan freshness metric](/components/veriq-metric-scan-freshness-6622358) shows the share of assets scanned in the last 24 hours.",
      "**Reachability.** The [reachable metric](/components/veriq-metric-reachable-6624044) counts vulnerable packages actually called in code, which is a far better priority signal than the total.",
      "**Speed.** Median time from fix PR to approval, like the [median review metric](/components/veriq-metric-median-review-6523140), shown against a target.",
      "**Identity hygiene.** [2FA coverage](/components/veriq-metric-2fa-coverage-6619338) and [single sign-on status](/components/veriq-metric-single-sign-on-6619287) for the workspace.",
    ] },
    { t: "takeaway", x: "Pick posture metrics where “better” is obvious and the team can change the number this week." },
    { t: "components", slugs: ["veriq-metric-findings-in-repos-6622346", "veriq-metric-scan-freshness-6622358", "veriq-metric-reachable-6624044", "veriq-metric-median-review-6523140"], caption: "Four Veriq posture metrics: volume, coverage, reachability and speed." },

    { t: "h2", x: "The findings table" },
    { t: "p", x: "The findings table is where security work happens, so it needs the most care. The [Veriq ID table](/components/veriq-id-table-6518868) has the columns a triage queue needs: ID, finding, severity, asset, source, status, owner and age. Each earns its place:" },
    { t: "ul", items: [
      "**ID** so people can reference a finding in chat and tickets.",
      "**Severity** as a labelled chip, not colour alone.",
      "**Asset** so people know which service or repo is affected.",
      "**Source** (code scan, dependencies, secrets, pentest) so specialists can filter to their area.",
      "**Owner**, because unowned findings don’t get fixed.",
      "**Age**, because a medium finding open for 90 days can matter more than yesterday’s high.",
    ] },
    { t: "p", x: "Put filters above the table: severity, status, source and owner. The [Veriq filters popover](/components/veriq-filters-popover-6519204) shows a count next to each source, so people know what a filter will return before they click it. Save the common views (“Critical, unassigned”, “My findings”) as tabs." },
    { t: "p", x: "For the general rules of data tables, see [data table design](/blog/react-data-table-design)." },

    { t: "h2", x: "Severity rules and SLAs" },
    { t: "p", x: "Severity on its own is a label. Severity with a deadline is a process. Make the rules visible in the product, not hidden in a policy document:" },
    { t: "ol", items: [
      "**Define a deadline per severity.** The [Veriq severity table](/components/veriq-severity-table-6521341) sets “resolve within” and “warn at” times for each level, shows how often each was met in the last 30 days, and whether to page on-call.",
      "**Escalate on breach.** The [escalation fields](/components/veriq-escalation-fields-6521417) send breaches to a channel and escalate to a named lead after a set time, optionally for critical findings only.",
      "**Show SLA performance over time.** A [weekly SLA chart](/components/veriq-sla-weekly-chart-6521452) with breaches marked, and a simple [within SLA vs breached meter](/components/veriq-ticked-meter-6518624).",
    ] },
    { t: "p", x: "When rules live in the product, the dashboard can show “due in 6 hours” on each finding. That one label changes behaviour more than any severity colour." },
    { t: "components", slugs: ["veriq-severity-table-6521341", "veriq-escalation-fields-6521417", "veriq-sla-weekly-chart-6521452", "veriq-ticked-meter-6518624"], caption: "SLA rules, escalation and SLA performance in Veriq." },

    { t: "h2", x: "Attack paths: rank risk by what an attacker can reach" },
    { t: "p", x: "A list of findings treats each one alone. Attackers chain them. An attack path view connects an entry point (a public API, an exposed bucket) through several weaknesses to something valuable (a customer database, payment data), and ranks paths by risk." },
    { t: "p", x: "Veriq shows this in three levels. The [top paths card](/components/veriq-top-paths-6618115) lists the riskiest paths with their entry, target, severity, number of hops and risk score. The [path table](/components/veriq-path-table-6618304) gives every path with entry, target, hops, findings, risk and status. And the [critical path drawer](/components/veriq-critical-drawer-critical-6618557) explains one path: its entry, its target and why the target matters." },
    { t: "p", x: "Design tip: name targets in business terms (“invoices DB”, “customer PII”), not only hostnames. Leadership understands “public API to invoices database in three hops” immediately." },

    { t: "h2", x: "Secrets" },
    { t: "p", x: "Leaked secrets need a different flow from code findings: the fix is to rotate the key, quickly, and confirm it. The [Veriq secrets table](/components/veriq-secrets-table-6526326) lists each secret with a masked value, location, when it was found, exposure, status and owner. Never show the full secret in the UI; the last four characters are enough to identify it." },
    { t: "p", x: "Measure rotation speed, not only count. The [Veriq secrets SLA stats](/components/veriq-sla-stats-6526104) show how many secrets were rotated on time, the median rotation time and how many were late." },

    { t: "h2", x: "From finding to fix" },
    { t: "p", x: "The best security dashboards close the loop with engineering. Put the fix action on the finding:" },
    { t: "ul", items: [
      "**Request a fix in bulk.** The [request a fix modal](/components/veriq-request-a-fix-modal-6523591) lets someone select findings without a patch and send them for a fix, with the severity, ID, service and estimated size of each.",
      "**Track fixes on a board.** Fix cards move from suggested to PR open to in review to verified. A [suggested fix card](/components/veriq-card-suggested-1-6523213) shows the finding, severity, files changed and whether tests have run.",
      "**Review in a drawer.** The [PR open drawer](/components/veriq-pr-open-drawer-6523471) shows the PR, its branch, the service and the files changed, with a link to open it on GitHub.",
    ] },
    { t: "p", x: "Open the [Veriq fix requests page](/components/veriq-fix-requests-page-6523070) to see the board as a whole. This pattern also works for AI-generated fixes: the human stays the reviewer, and the dashboard shows exactly what the AI changed. For more on reviewable AI actions, see [AI agent dashboard design](/blog/ai-agent-dashboard-design)." },
    { t: "cta", h: "Build on a real security product", x: "Veriq includes vulnerabilities, attack paths, secrets, dependencies, fix requests, team access, reports and settings, in Figma and React.", href: "/systems/veriq", label: "Open Veriq" },

    { t: "h2", x: "Scans" },
    { t: "p", x: "Let people start a scan from the dashboard, and tell them what they are choosing. The [Veriq run a scan modal](/components/veriq-run-a-scan-modal-6519291) offers a quick code-only scan of about 4 minutes and a full scan of code, dependencies and secrets of about 18 minutes. Showing the time up front stops people from starting a full scan when they need an answer now." },

    { t: "h2", x: "Team access" },
    { t: "p", x: "Security products are often the first tool an auditor asks about, so access must be easy to review. The [Veriq members table](/components/veriq-members-table-6619630) lists member, role, teams, last active and 2FA status. Change roles from a [role menu](/components/veriq-role-menu-6619939) with a small set of clear roles (admin, security, developer, viewer) and the remove action at the bottom, separated from the rest." },
    { t: "p", x: "See the full [team and access page](/components/veriq-team-access-page-6619252), which also shows SSO and 2FA coverage at the top." },

    { t: "h2", x: "Reports for leadership and auditors" },
    { t: "p", x: "Many stakeholders will only ever see the security dashboard as a report. The [Veriq reports table](/components/veriq-reports-table-6621049) lists each report with type, schedule, recipients, last sent date and format, for example a weekly executive summary. Keep executive reports to trends and posture metrics; send the full finding list only to the people who fix them." },

    { t: "h2", x: "Destructive actions in settings" },
    { t: "p", x: "Security tools hold sensitive data, so dangerous settings need extra friction. Group them in a danger zone, as the [Veriq danger zone](/components/veriq-danger-zone-form-6522353) does for transfer ownership, export all data, pause all scanning and delete workspace. For the most destructive action, ask people to type the workspace name to confirm, like the [type to confirm modal body](/components/veriq-body-modal-type-ledgerly-to-confirm-6522483)." },

    { t: "h2", x: "A worked example: from new critical finding to verified fix" },
    { t: "p", x: "Follow one finding through a well-designed security dashboard:" },
    { t: "ol", items: [
      "**It appears.** A scan finds a critical issue in a billing service. The findings metric shows one more critical than last week, and the finding sits at the top of the [vulnerabilities page](/components/veriq-vulnerabilities-page-6518508) with its age and a deadline from the severity rules.",
      "**It is ranked.** The finding is part of an attack path from the public API to the invoices database, so it moves to the top of [top paths](/components/veriq-top-paths-6618115).",
      "**It is assigned.** An owner is set from the row; the team channel gets a message.",
      "**A fix is requested.** The engineer selects it in the [request a fix modal](/components/veriq-request-a-fix-modal-6523591). A drafted patch appears as a suggested fix card.",
      "**It is reviewed.** The PR opens in a drawer with the files changed; the developer reviews and merges.",
      "**It is verified.** A rescan confirms the fix, the card moves to verified, and the SLA chart counts it as met.",
    ] },
    { t: "p", x: "Each step happens on the screen where the information already is. Nobody copies IDs between tools, and leadership sees the result in the next weekly report." },

    { t: "h2", x: "Dependencies and AI pentests" },
    { t: "p", x: "Two more sources deserve their own pages because they need different context:" },
    { t: "ul", items: [
      "**Dependencies.** Group vulnerable packages by package, not by finding, and show whether each is reachable from your code. The [Veriq dependencies page](/components/veriq-dependencies-page-6624036) is organised this way, with a search across packages.",
      "**AI pentests.** Automated or AI-driven tests produce findings with steps to reproduce. Show the test, its scope, when it ran and what it found, as on the [Veriq AI pentests page](/components/veriq-ai-pentests-page-6625284). Mark AI-found issues clearly so reviewers know to confirm them.",
    ] },

    { t: "h2", x: "Severity colours and labels" },
    { t: "p", x: "Severity is the one place on a security dashboard where colour carries real weight, so protect it:" },
    { t: "table", head: ["Severity", "Colour use", "Label"], rows: [
      ["Critical", "Strongest danger colour, used nowhere else", "Always written: “Critical”"],
      ["High", "Danger colour at lower intensity, or orange", "“High”"],
      ["Medium", "Warning colour", "“Medium”"],
      ["Low", "Neutral or info colour", "“Low”"],
    ] },
    { t: "p", x: "Don’t use red for decoration, brand accents or chart series on the same screens; it dilutes the warning. And always pair the colour with the word, so the severity reads correctly in print, in grayscale and for colour-blind readers." },

    { t: "h2", x: "Building it with an AI agent" },
    { t: "p", x: "With the [Ingot UI MCP server](/mcp) connected, an AI coding agent can build a security page from the Veriq system:" },
    { t: "code", label: "Prompt", x: "Using the Ingot UI Veriq system, build app/(app)/vulnerabilities/page.tsx: posture metrics (findings by severity vs last week, scan freshness, reachable packages, median review time); a findings table with ID, finding, severity, asset, source, status, owner and age; a filters popover by severity, source and owner; a finding drawer with an assign action and a request-a-fix action. Data from lib/data/findings.ts. Include empty and loading states. Run audit_ui at the end." },
    { t: "p", x: "See [MCP for UI components](/blog/mcp-server-ui-components-ai-agents) for setup." },

    { t: "h2", x: "Security dashboard checklist" },
    { t: "ol", items: [
      "Posture metrics that can go down, each with a change vs last period.",
      "One findings table with ID, severity, asset, source, status, owner and age.",
      "Severity deadlines and escalation rules configured in the product and shown on each finding.",
      "Risk ranked by reachability and attack paths, not severity alone.",
      "Secrets masked, with rotation speed measured.",
      "Fix actions on the finding, with a board from suggested to verified.",
      "Scan options with their duration shown.",
      "Access review: roles, last active, 2FA and SSO.",
      "Scheduled reports for leadership with trends, not raw lists.",
      "Destructive settings separated and confirmed by typing the name.",
    ] },
    { t: "p", x: "For the general rules that apply to every dashboard, read [dashboard design best practices](/blog/dashboard-design-best-practices). For colour rules (severity colours are status colours, and should be used only for status), see [dashboard design tokens](/blog/dashboard-design-system-tailwind-tokens)." },
  ],
  faq: [
    { q: "What should a security dashboard show?", a: "Posture metrics that can improve (findings by severity with weekly change, scan coverage, reachability, fix speed), a triage table of findings with owner and age, SLA status, attack paths, secrets and the fix workflow. Leadership should get trend reports rather than raw lists." },
    { q: "How do you prioritise vulnerabilities on a dashboard?", a: "Combine severity with reachability, exposure and age, and show attack paths that connect findings to valuable targets. A reachable high finding on a public path usually matters more than an unreachable critical one." },
    { q: "How should severity colours be used?", a: "Only for severity and status, always with a text label, and from a small fixed set. Using red for decoration elsewhere weakens it as a warning." },
    { q: "Is there a UI kit for security or compliance dashboards?", a: "Yes. The Veriq system in Ingot UI was built from a real security product and includes vulnerabilities, attack paths, secrets, dependencies, fix requests, team access, reports and settings pages." },
  ],
  related: ["data-table", "badge", "kpi-card", "dialog"],
  systems: ["veriq"],
};
