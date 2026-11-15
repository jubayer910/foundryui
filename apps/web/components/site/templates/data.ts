import generated from "@/components/showcase/generated.json";
import type { ShowcaseScreen } from "@/components/showcase/data";
import { figma as FIGMA, getFigmaItem } from "@/lib/library";
import { systems } from "@/lib/catalog";

/** One full dashboard screen offered as a starting point. */
export type Template = {
  /** /components/<slug>: the Figma Templates item this screen comes from */
  slug: string;
  title: string;
  system: string;
  systemName: string;
  accent: string;
  /** what the screen is, in one short line */
  blurb: string;
  /** what the preview renders: live React code or the Figma thumbnail */
  screen: ShowcaseScreen;
};

const sys = (slug: string) => {
  const s = systems.find((x) => x.slug === slug);
  if (!s) throw new Error("unknown system: " + slug);
  return { systemName: s.name, accent: s.accent };
};

/** Coded screen: React generated from the Figma screen, passed visual QA. Links to its Figma Templates item. */
function code(slug: string, title: string, blurb: string): Template {
  const g = generated.find((x) => x.slug === slug);
  if (!g) throw new Error("template screen not generated: " + slug);
  // Figma item slugs end in the node id without the colon (189:43535 -> ...-18943535).
  const tail = "-" + g.source.replace(":", "");
  const item = FIGMA.find((f) => f.system === g.system && f.slug.endsWith(tail));
  if (!item) throw new Error("template source not in the Figma library: " + g.source);
  return {
    slug: item.slug,
    title,
    system: g.system,
    ...sys(g.system),
    blurb,
    screen: { slug, system: g.system, title, w: g.w, h: g.h, kind: "code", qa: { perceptual: g.perceptual, strict: g.strict } },
  };
}

/** Figma-only screen: the Templates thumbnail exported from Figma. */
function figma(itemSlug: string, title: string, blurb: string): Template {
  const f = getFigmaItem(itemSlug);
  if (!f) throw new Error("template not in the Figma library: " + itemSlug);
  return {
    slug: f.slug,
    title,
    system: f.system,
    ...sys(f.system),
    blurb,
    screen: { slug: f.slug, system: f.system, title, w: f.w, h: f.h, kind: "image", src: f.thumb },
  };
}

/** The 10 templates, coded ones first. Every system appears at least once. */
export const TEMPLATES: Template[] = [
  code("loopo-analytics", "Analytics", "Revenue KPIs, daily revenue against the previous period, revenue by channel and cohort retention."),
  code("loopo-overview", "Overview", "Revenue and cash KPIs, a 12-month comparison, gross volume by source, daily cash flow and transaction trend."),
  code("veriq-secrets", "Secrets", "Exposures against rotations over 90 days, a rotation SLA gauge and a table of leaked secrets."),
  code("veriq-team-access", "Team & access", "Seats, roles, SSO and 2FA coverage, a member table with roles and teams, plus access reviews."),
  figma("mailpulse-analytics-page-13939510", "Analytics", "Subscriber growth by month, cohort retention and a growth breakdown for a newsletter app."),
  figma("mailpulse-campaigns-page-13830780", "Campaigns", "Upcoming sends on top, then a campaign table with status, audience, open and click rates."),
  figma("auton-agents-page-16931634", "Agents", "Agent KPIs, then a table of agents with owner, environment, access scope and credential TTL."),
  figma("axon-analytics-page-73348421", "Analytics", "Hours saved, automation rate, runs over time and automation rate by workflow."),
  figma("vantage-home-page-26233146", "Performance overview", "Dark admin home: KPI row, performance trend, conversion pipeline and team leaderboard."),
  figma("vantage-customers-page-26332368", "Customers", "Dark customer table with plan, tenure, a 12-month payment strip and lifetime value."),
];

export const isCoded = (t: Template) => t.screen.kind === "code";
