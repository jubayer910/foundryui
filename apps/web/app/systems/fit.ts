/**
 * Who each system fits, written from its real screens (the Figma Templates pages and the coded showcase).
 * Used by /systems (cards + "Which system fits my product?") and /systems/<slug> (preview, "Good for", SEO).
 * Images: public/systems/<slug>.webp (2x, up to 2880 px wide), <slug>-1200.webp (same screen, 1200 px)
 * and <slug>-card.webp (1040x650 crop of the top-left 78% for the /systems cards).
 * Loopo and Veriq are 2x renders of the coded showcase screens; the other four are 2x Figma exports of a Templates screen.
 */
export type SystemFit = {
  /** one line a founder recognises their product in */
  goodFor: string;
  /** the screen shown in the preview */
  screen: string;
  /** what the screen shows, for alt text */
  shows: string;
  /** the image's real pixel size (2x export) */
  w: number;
  h: number;
  /** search intent: "<type> dashboard template" */
  seoType: string;
  /** dark screen (Vantage) */
  dark?: boolean;
};

export const FIT: Record<string, SystemFit> = {
  loopo: {
    goodFor: "Store, e-commerce and audience analytics",
    screen: "Analytics",
    shows: "revenue, orders, conversion rate and average order value cards, a daily revenue chart against the previous period with a campaign send marked, revenue by channel and a monthly cohort retention table",
    w: 2880, h: 2154,
    seoType: "Analytics",
  },
  mailpulse: {
    goodFor: "Newsletters, email marketing and creator tools",
    screen: "Campaigns",
    shows: "the next three scheduled sends and a campaign table with status, audience, send time, recipients, open rate and click rate",
    w: 2632, h: 1867,
    seoType: "Email marketing",
  },
  auton: {
    goodFor: "AI agent consoles and access governance",
    screen: "Agents",
    shows: "registered, running and over-privileged agent counts, credential TTL, and a table of agents with owner, environment, access scope and status",
    w: 2880, h: 2052,
    seoType: "AI agent",
  },
  axon: {
    goodFor: "Workflow automation, job runs and pipelines",
    screen: "Runs & Logs",
    shows: "runs per minute, p95 duration, failure rate and queue depth with trend lines, and a dense runs table with status, trigger, step progress and duration",
    w: 2880, h: 2038,
    seoType: "Workflow automation",
  },
  veriq: {
    goodFor: "Security, compliance and developer tools",
    screen: "Secrets",
    shows: "exposures against rotations over 90 days with a leak annotated, a rotation SLA gauge and a filterable table of leaked secrets with location, exposure, status and owner",
    w: 2880, h: 2078,
    seoType: "Security",
  },
  vantage: {
    goodFor: "Subscription billing and customer admin",
    screen: "Customers",
    shows: "a dark customer table with plan, status, tenure, a 12-month payment strip and lifetime value, plus plan mix, monthly payments and new versus cancelled panels",
    w: 2880, h: 2166,
    seoType: "SaaS admin",
    dark: true,
  },
};

export const fitFor = (slug: string): SystemFit | undefined => FIT[slug];
export const shotSrc = (slug: string) => "/systems/" + slug + ".webp";
export const midSrc = (slug: string) => "/systems/" + slug + "-1200.webp";
export const cardSrc = (slug: string) => "/systems/" + slug + "-card.webp";
export const CARD = { w: 1040, h: 650 };
/** lower-case the first letter for use mid-sentence, but keep acronyms ("AI agent") */
export const lc = (s: string) => (/^[A-Z][a-z]*(?=[\s,]|$)/.test(s) ? s[0].toLowerCase() + s.slice(1) : s);
export const shotAlt = (name: string, f: SystemFit) => `${name} ${f.screen} dashboard screen showing ${f.shows}.`;

/** "Which system fits my product?": founder product type -> system, from each system's real screens. */
export const PRODUCT_TYPES: { type: string; example: string; system: string; why: string }[] = [
  { type: "Online store or analytics product", example: "Shopify app, revenue or audience analytics", system: "loopo", why: "KPI cards, period-over-period charts, channel breakdowns and cohort tables are its core screens." },
  { type: "Newsletter, email or creator product", example: "ESP, creator platform, CRM outreach", system: "mailpulse", why: "Campaign tables, send schedules, subscriber growth and open and click rates." },
  { type: "AI agent or copilot product", example: "agent platform, AI ops console", system: "auton", why: "Agent registries, access scopes, approvals, credentials and audit logs." },
  { type: "Workflow, automation or data pipeline tool", example: "job runner, integration platform, ETL", system: "axon", why: "Dense run tables, step progress, durations, failure rates and live queues." },
  { type: "Security, compliance or devtools product", example: "secrets scanner, vulnerability tracker", system: "veriq", why: "Findings tables with exposure and status, SLA gauges, annotated trend charts and team access screens." },
  { type: "Subscription SaaS back office", example: "billing admin, customer and plan management", system: "vantage", why: "Customer tables with plans and payment history, plan mix and churn panels, in a dark theme." },
];
