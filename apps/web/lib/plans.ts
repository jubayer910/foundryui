import "server-only";
import { and, count, eq, gt, inArray, isNotNull, isNull, or } from "drizzle-orm";
import { sqliteTable, text, integer, index, uniqueIndex } from "drizzle-orm/sqlite-core";
import { getDb, schema } from "./db";
import { getSettings, type Settings } from "./settings";

/** Single source for plans and prices. Pricing, home, docs, llms.txt, account and admin read from here. */
export type PlanId = "free" | "pro" | "team" | "lifetime";
export type Option = "free" | "proMonthly" | "proYearly" | "teamMonthly" | "teamYearly" | "lifetime";

/** Paid plans that unlock Pro items. */
export const PAID_PLANS: PlanId[] = ["pro", "team", "lifetime"];
export const isPaid = (plan: string | null | undefined) => plan === "pro" || plan === "team" || plan === "lifetime";

/** Seats in one Team plan, the owner included. */
export const TEAM_SEATS = 5;

export type DealReason = "disabled" | "sold_out" | "ended";
export type Deal = {
  enabled: boolean;
  total: number;
  sold: number;
  left: number;
  soldOut: boolean;
  after: Settings["deal"]["after"];
  /** Real end date (UTC ISO) or null when the deal has no end date. */
  endsAt: string | null;
  /** The end date has passed. */
  ended: boolean;
  /** The deal price is on sale right now: enabled, spots left and before endsAt. */
  active: boolean;
  /** Why the deal is not on sale (null while active). */
  reason: DealReason | null;
  showSpots: boolean;
  /** Countdown shown: the owner's toggle and an end date. */
  showTimer: boolean;
};

/** A valid end date as ms since epoch, or null. */
export function dealEndMs(endsAt: string | null | undefined): number | null {
  if (!endsAt) return null;
  const t = Date.parse(endsAt);
  return Number.isFinite(t) ? t : null;
}

/** The one rule for "is the deal price on sale": enabled AND spots left AND (no end date OR now < end). Checkout, pricing, /api/site and admin all use it. */
export function dealState(d: { enabled: boolean; left: number; endsAt: string | null | undefined }, now = Date.now()): { active: boolean; ended: boolean; reason: DealReason | null } {
  const end = dealEndMs(d.endsAt);
  const ended = end !== null && now >= end;
  const reason: DealReason | null = !d.enabled ? "disabled" : d.left <= 0 ? "sold_out" : ended ? "ended" : null;
  return { active: reason === null, ended, reason };
}

/** Real spots: paid (not refunded) lifetime purchases at the deal. */
export async function getDeal(s?: Settings, now = Date.now()): Promise<Deal> {
  const settings = s ?? (await getSettings());
  let sold = 0;
  try {
    const db = await getDb();
    const [r] = await db
      .select({ n: count() })
      .from(schema.purchase)
      .where(and(eq(schema.purchase.plan, "lifetime"), eq(schema.purchase.variant, "lifetimeDeal"), inArray(schema.purchase.status, ["paid"])));
    sold = r?.n ?? 0;
  } catch {}
  const total = settings.deal.spotsTotal;
  const left = Math.max(0, total - sold);
  const end = dealEndMs(settings.deal.endsAt);
  const endsAt = end === null ? null : new Date(end).toISOString();
  const st = dealState({ enabled: settings.deal.enabled, left, endsAt }, now);
  return {
    enabled: settings.deal.enabled,
    total,
    sold,
    left,
    soldOut: left === 0,
    after: settings.deal.after,
    endsAt,
    ended: st.ended,
    active: st.active,
    reason: st.reason,
    showSpots: settings.deal.showSpots !== false,
    showTimer: settings.deal.showTimer !== false && endsAt !== null,
  };
}

export type PriceBook = {
  settings: Settings;
  deal: Deal;
  proMonthly: number;
  proYearly: number;
  teamMonthly: number;
  teamYearly: number;
  /** false when the admin set the monthly prices to 0: yearly + Lifetime only */
  monthly: boolean;
  /** seats in one Team plan, the owner included */
  teamSeats: number;
  /** Lifetime price shown right now, or null when Lifetime is closed */
  lifetime: number | null;
  /** which variant a Lifetime checkout uses right now */
  lifetimeVariant: "lifetimeDeal" | "lifetimeAfter" | null;
  dealActive: boolean;
};

export async function getPriceBook(now = Date.now()): Promise<PriceBook> {
  const settings = await getSettings();
  const deal = await getDeal(settings, now);
  const dealActive = deal.active;
  // The deal ran and finished (spots gone or end date passed): Lifetime follows the owner's after-deal rule.
  const closed = deal.enabled && !dealActive && deal.after === "closed";
  return {
    settings,
    deal,
    proMonthly: settings.prices.proMonthly,
    proYearly: settings.prices.proYearly,
    teamMonthly: settings.prices.teamMonthly,
    teamYearly: settings.prices.teamYearly,
    monthly: settings.prices.proMonthly > 0 && settings.prices.teamMonthly > 0,
    teamSeats: TEAM_SEATS,
    lifetime: closed ? null : dealActive ? settings.prices.lifetimeDeal : settings.prices.lifetimeAfter,
    lifetimeVariant: closed ? null : dealActive ? "lifetimeDeal" : "lifetimeAfter",
    dealActive,
  };
}

export const usd = (n: number) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));

/* ---- W1 helpers (payments and pricing) ---- */

/** What a buy button asks for. Lifetime resolves to the deal or after-deal variant at checkout time. */
export type CheckoutOption = "proMonthly" | "proYearly" | "teamMonthly" | "teamYearly" | "lifetime";
export const CHECKOUT_OPTIONS: CheckoutOption[] = ["proMonthly", "proYearly", "teamMonthly", "teamYearly", "lifetime"];
export const isCheckoutOption = (v: unknown): v is CheckoutOption => typeof v === "string" && (CHECKOUT_OPTIONS as string[]).includes(v);
export const isTeamOption = (o: string): o is "teamMonthly" | "teamYearly" => o === "teamMonthly" || o === "teamYearly";

/** Key into settings.variants / settings.prices. */
export type VariantKey = keyof Settings["variants"];

/**
 * Order used when the webhook raises or lowers user.plan. Team sits under Lifetime on purpose:
 * a Lifetime buyer who adds a Team for co-founders keeps Lifetime for themselves (the seats come from the
 * Team subscription rows, not from user.plan), and a Team that ends never strands a Lifetime plan.
 */
export const PLAN_RANK: Record<PlanId, number> = { free: 0, pro: 1, team: 2, lifetime: 3 };
export const planLabel = (plan: string | null | undefined) => (plan === "lifetime" ? "Lifetime" : plan === "team" ? "Team" : plan === "pro" ? "Pro" : "Free");

/** The variant a checkout for this option uses right now (null = Lifetime is closed). */
export function variantKeyFor(pb: PriceBook, option: CheckoutOption): VariantKey | null {
  return option === "lifetime" ? pb.lifetimeVariant : option;
}

/** Reverse map: a Lemon Squeezy variant id to the option it sells. */
export function variantKeyForId(settings: Settings, variantId: string | number | null | undefined): VariantKey | null {
  if (variantId === null || variantId === undefined || variantId === "") return null;
  const id = String(variantId);
  for (const k of Object.keys(settings.variants) as VariantKey[]) if (settings.variants[k] && String(settings.variants[k]).trim() === id) return k;
  return null;
}

function savingPct(monthly: number, yearly: number) {
  const full = monthly * 12;
  if (full <= 0 || yearly >= full) return 0;
  return Math.floor((1 - yearly / full) * 100);
}

/** Honest yearly saving versus 12 monthly payments, rounded down. 0 when yearly is not cheaper. */
export function yearlySaving(pb: Pick<PriceBook, "proMonthly" | "proYearly">) {
  return savingPct(pb.proMonthly, pb.proYearly);
}

/** Same rule for Team. */
export function teamYearlySaving(pb: Pick<PriceBook, "teamMonthly" | "teamYearly">) {
  return savingPct(pb.teamMonthly, pb.teamYearly);
}

/** Price of one option as written in copy, e.g. "$7 a month". */
export function optionPriceText(pb: PriceBook, option: CheckoutOption) {
  if (option === "proMonthly") return usd(pb.proMonthly) + " a month";
  if (option === "proYearly") return usd(pb.proYearly) + " a year";
  if (option === "teamMonthly") return usd(pb.teamMonthly) + " a month";
  if (option === "teamYearly") return usd(pb.teamYearly) + " a year";
  return pb.lifetime === null ? "closed" : usd(pb.lifetime) + " once";
}

/** A monthly option while monthly plans are switched off (prices set to 0 in admin). */
export const isMonthlyOff = (pb: PriceBook, option: string) => !pb.monthly && (option === "proMonthly" || option === "teamMonthly");

export const optionName = (option: string) =>
  option === "proMonthly"
    ? "Pro monthly"
    : option === "proYearly"
      ? "Pro yearly"
      : option === "teamMonthly"
        ? "Team monthly"
        : option === "teamYearly"
          ? "Team yearly"
          : option.startsWith("lifetime")
            ? "Lifetime"
            : "Free";

/** The one honest sentence about what happens when the deal ends (spots gone or end date passed). */
export function dealRule(pb: PriceBook) {
  const { deal, settings } = pb;
  if (!deal.enabled) return "";
  const after = usd(settings.prices.lifetimeAfter);
  if (deal.reason === "sold_out") {
    const taken = deal.showSpots ? "All " + deal.total + " launch spots are taken" : "The launch seats are filled";
    return deal.after === "closed" ? taken + ", so Lifetime is closed." : taken + ". Lifetime is now " + after + ".";
  }
  if (deal.reason === "ended") return deal.after === "closed" ? "The launch deal has ended, so Lifetime is closed." : "The launch deal has ended. Lifetime is now " + after + ".";
  const end = deal.endsAt ? " or on " + dealEndText(deal.endsAt) : "";
  const when = deal.showSpots
    ? "When all " + deal.total + " spots are taken" + end
    : deal.endsAt
      ? "When the launch deal ends on " + dealEndText(deal.endsAt) + ", or earlier if the seats fill up"
      : "When the limited seats fill up";
  return deal.after === "closed" ? when + ", Lifetime closes." : when + ", Lifetime goes to " + after + ".";
}

/** A fixed, readable UTC end date for server-rendered copy, e.g. "Nov 30, 2026, 23:59 UTC". */
export function dealEndText(endsAt: string) {
  const d = new Date(endsAt);
  return d.toLocaleString("en-US", { timeZone: "UTC", month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }) + " UTC";
}

/** Who the deal is for, in copy. With the spots counter hidden we never quote a buyer count. */
export function dealAudience(pb: PriceBook) {
  return pb.deal.showSpots ? "the first " + pb.deal.total + " buyers" : "launch week, while the limited seats last";
}

/** Short badge for the Lifetime card. */
export function dealBadge(pb: PriceBook) {
  return pb.deal.showSpots ? "First " + pb.deal.total.toLocaleString("en-US") + " buyers" : "Launch week";
}

/** One plain-text line for llms.txt and anywhere else prices are quoted in copy. */
export function pricingSentence(pb: PriceBook) {
  const life =
    pb.lifetime === null
      ? "Lifetime is closed"
      : pb.dealActive
        ? "Lifetime (" + usd(pb.lifetime) + " once for " + dealAudience(pb) + (pb.deal.endsAt ? " until " + dealEndText(pb.deal.endsAt) : "") + (pb.deal.after === "price" ? ", then " + usd(pb.settings.prices.lifetimeAfter) : "") + "; every system and every future update, forever)"
        : "Lifetime (" + usd(pb.lifetime) + " once; every system and every future update, forever)";
  return (
    "Free (personal and non-commercial: Loopo system, free components, 15 dashboard templates, stroke icons, 50 MCP calls a day), Pro (" +
    (pb.monthly ? usd(pb.proMonthly) + " a month or " : "") +
    usd(pb.proYearly) +
    " a year, all systems, every icon style, unlimited MCP, commercial use), Team (" +
    (pb.monthly ? usd(pb.teamMonthly) + " a month or " : "") +
    usd(pb.teamYearly) +
    " a year, everything in Pro for " +
    pb.teamSeats +
    " people on one bill), " +
    life +
    ". 7-day refund on paid plans."
  );
}

/* ---- Team seats (migrations/0006_team.sql) ---- */

const ts = (name: string) => integer(name, { mode: "timestamp" });

/** One team per owner. Defined here rather than in lib/db/schema.ts so the Team plan stays in one workstream. */
export const team = sqliteTable(
  "team",
  {
    id: text("id").primaryKey(),
    ownerId: text("ownerId").notNull(),
    name: text("name"),
    seats: integer("seats").notNull().default(TEAM_SEATS),
    createdAt: ts("createdAt").notNull(),
    updatedAt: ts("updatedAt").notNull(),
  },
  (t) => [uniqueIndex("team_owner_unique").on(t.ownerId)],
);

/** One row per seat: the owner, joined members and pending invites (userId stays null until accepted). */
export const teamMember = sqliteTable(
  "team_member",
  {
    id: text("id").primaryKey(),
    teamId: text("teamId").notNull(),
    userId: text("userId"),
    email: text("email").notNull(),
    /** "owner" | "member" */
    role: text("role").notNull().default("member"),
    /** invite link secret; cleared when the invite is accepted */
    token: text("token"),
    invitedAt: ts("invitedAt").notNull(),
    joinedAt: ts("joinedAt"),
  },
  (t) => [uniqueIndex("team_member_team_email_unique").on(t.teamId, t.email), uniqueIndex("team_member_token_unique").on(t.token), index("team_member_user_idx").on(t.userId)],
);

/** Subscription statuses that keep a plan on (cancelled counts until endsAt). Same rule as lib/lemonsqueezy.ts. */
const LIVE_SUB = ["active", "on_trial", "past_due"];

/**
 * True while this owner pays for a Team: a live Team subscription, a granted (manual) Team purchase,
 * or user.plan set to "team". This is what makes the owner's seats work.
 */
export async function isTeamActive(ownerId: string, ownerPlan?: string | null): Promise<boolean> {
  if (ownerPlan === "team") return true;
  const db = await getDb();
  const S = schema.subscription;
  const P = schema.purchase;
  const now = new Date();
  const [sub, grant] = await Promise.all([
    db
      .select({ id: S.id })
      .from(S)
      .where(and(eq(S.userId, ownerId), eq(S.plan, "team"), or(inArray(S.status, LIVE_SUB), and(eq(S.status, "cancelled"), or(isNull(S.endsAt), gt(S.endsAt, now))))))
      .limit(1),
    db
      .select({ id: P.id })
      .from(P)
      .where(and(eq(P.userId, ownerId), eq(P.plan, "team"), eq(P.status, "granted")))
      .limit(1),
  ]);
  return sub.length > 0 || grant.length > 0;
}

/** The team this user has joined as a member (not as owner), with its owner, or null. */
export async function memberTeam(userId: string) {
  const db = await getDb();
  const [row] = await db
    .select({ teamId: team.id, ownerId: team.ownerId, ownerPlan: schema.user.plan, ownerEmail: schema.user.email, ownerName: schema.user.name, memberId: teamMember.id })
    .from(teamMember)
    .innerJoin(team, eq(team.id, teamMember.teamId))
    .innerJoin(schema.user, eq(schema.user.id, team.ownerId))
    .where(and(eq(teamMember.userId, userId), eq(teamMember.role, "member"), isNotNull(teamMember.joinedAt)))
    .limit(1);
  return row ?? null;
}

/**
 * The plan that decides access right now: user.plan when it is already paid; otherwise "team" while the
 * user is a joined member of a team whose owner still pays for it. Used by the copy gate, the session and
 * the MCP plan check, so a removed member or an ended Team loses Pro access on the next request.
 */
export async function getEffectivePlan(user: { id: string; plan: string | null | undefined }): Promise<string> {
  const own = user.plan ?? "free";
  if (isPaid(own)) return own;
  try {
    const t = await memberTeam(user.id);
    if (t && (await isTeamActive(t.ownerId, t.ownerPlan))) return "team";
  } catch {
    // Table missing (migration not applied yet) or no bindings: the user's own plan decides.
  }
  return own;
}
