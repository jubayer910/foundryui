import generated from "./generated.json";

/** One full dashboard screen per entry: React code generated from the Figma screen (kind "code"),
 *  or, until a system's screen has passed visual QA, the Figma preview image (kind "image"). */
export type ShowcaseScreen = {
  slug: string;
  system: string;
  title: string;
  w: number;
  h: number;
  kind: "code" | "image";
  /** image screens: the Templates thumbnail exported from Figma */
  src?: string;
  /** code screens: visual QA against the Figma screen */
  qa?: { perceptual: number; strict: number };
};

export type ShowcaseSystem = {
  system: string;
  /** what a founder would type to their agent */
  prompt: string;
  /** Ingot UI MCP tools the agent calls, in order */
  tools: string[];
  screens: ShowcaseScreen[];
};

const code = (slug: string, title: string): ShowcaseScreen => {
  const g = generated.find((x) => x.slug === slug);
  if (!g) throw new Error("showcase screen not generated: " + slug);
  return { slug, system: g.system, title, w: g.w, h: g.h, kind: "code", qa: { perceptual: g.perceptual, strict: g.strict } };
};
const image = (system: string, slug: string, title: string, id: string, w: number, h: number): ShowcaseScreen => ({
  slug, system, title, w, h, kind: "image", src: `/library/${system}/${id}.webp`,
});

export const SHOWCASE: ShowcaseSystem[] = [
  {
    system: "loopo",
    prompt:
      "Build the Analytics page of our store dashboard with the Loopo system. Four KPI cards for revenue, orders, conversion rate and average order value, a daily revenue chart against the previous period with campaign sends marked, revenue by channel, and a monthly cohort retention table.",
    tools: ["init_project", "get_design_system", "scaffold_screen", "add_components", "get_chart", "search_icons", "audit_ui"],
    screens: [code("loopo-analytics", "Analytics"), code("loopo-overview", "Overview")],
  },
  {
    system: "mailpulse",
    prompt:
      "Make the Campaigns page for our newsletter app in MailPulse: the next three scheduled sends on top, then a campaign table with status, audience, send time, recipients, open rate and click rate, filterable by status.",
    tools: ["init_project", "get_design_system", "scaffold_screen", "add_components", "search_icons", "audit_ui"],
    screens: [image("mailpulse", "mailpulse-campaigns", "Campaigns", "138-30780", 1316, 933)],
  },
  {
    system: "auton",
    prompt:
      "Create an Agents page in Auton for our automation platform: KPIs for registered, running and over-privileged agents and credential TTL, then a table of agents with owner, environment, access scope, credential TTL, last active and status.",
    tools: ["init_project", "get_design_system", "scaffold_screen", "add_components", "search_icons", "audit_ui"],
    screens: [image("auton", "auton-agents", "Agents", "169-31634", 1440, 1026)],
  },
  {
    system: "axon",
    prompt:
      "Build Runs & Logs for our workflow engine with Axon: four stat cards with small trend lines for runs per minute, p95 duration, failure rate and queue depth, then a dense runs table with status, trigger, step progress, duration and start time.",
    tools: ["init_project", "get_design_system", "scaffold_screen", "add_components", "get_chart", "audit_ui"],
    screens: [image("axon", "axon-runs", "Runs & Logs", "732-43953", 1440, 1019)],
  },
  {
    system: "veriq",
    prompt:
      "Add a Secrets page to our security console in Veriq: exposures against rotations over 90 days with the Stripe key leak annotated, a rotation SLA gauge, and a filterable table of leaked secrets with location, exposure, status and owner.",
    tools: ["init_project", "get_design_system", "scaffold_screen", "add_components", "get_chart", "search_icons", "audit_ui"],
    screens: [code("veriq-secrets", "Secrets"), code("veriq-team-access", "Team & access")],
  },
  {
    system: "vantage",
    prompt:
      "Make the Customers page of our subscription admin in Vantage, dark: a customer table with plan, status, tenure, a 12-month payment strip, lifetime value and last payment, plus plan mix, monthly payments and new-versus-cancelled panels below.",
    tools: ["init_project", "get_design_system", "scaffold_screen", "add_components", "get_chart", "audit_ui"],
    screens: [image("vantage", "vantage-customers", "Customers", "263-32368", 1440, 1083)],
  },
];

export const showcaseFor = (system: string) => SHOWCASE.find((s) => s.system === system);
