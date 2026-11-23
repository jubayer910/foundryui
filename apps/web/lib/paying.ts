import { sql } from "drizzle-orm";

/**
 * Account ids that are on a plan because they paid: a paid order from Lemon Squeezy or Contra, an AppSumo code
 * (paid on AppSumo), or a subscription that still bills (or is cancelled but not ended). Staff grants
 * (provider "manual") and gifted Lifetime (provider "gift", lib/gift.ts) are not payers and never appear here.
 * Plain SQL so the report engine (raw D1 strings) and Drizzle pages share one definition.
 */
export const PAYING_IDS_SQL = `select userId from purchase where userId is not null and (
    (provider in ('lemonsqueezy', 'contra') and status in ('paid', 'partial_refund'))
    or (provider = 'appsumo' and status = 'granted'))
  union select userId from subscription where userId is not null and provider in ('lemonsqueezy', 'contra') and (
    status in ('active', 'on_trial', 'past_due') or (status = 'cancelled' and (endsAt is null or endsAt > unixepoch())))`;

export const PAYING_IDS = sql.raw(PAYING_IDS_SQL);
