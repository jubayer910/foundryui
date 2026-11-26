"use client";
import { useActionState, useEffect, useState, useSyncExternalStore } from "react";
import { Icon } from "@/registry/components/icons";
import { pageSaveBar } from "@/components/admin/ui";
import { CIcon } from "@/components/site/chrome-icon";
import { BarView } from "@/components/site/announcement-bar";
import { DealCountdown, msLeft } from "@/components/site/deal-countdown";
import type { PricingState } from "@/app/admin/(panel)/pricing/actions";

type Values = {
  price_proMonthly: string;
  price_proYearly: string;
  price_teamMonthly: string;
  price_teamYearly: string;
  price_lifetimeDeal: string;
  price_lifetimeAfter: string;
  variant_proMonthly: string;
  variant_proYearly: string;
  variant_teamMonthly: string;
  variant_teamYearly: string;
  variant_lifetimeDeal: string;
  variant_lifetimeAfter: string;
  ext_proMonthly: string;
  ext_proYearly: string;
  ext_teamMonthly: string;
  ext_teamYearly: string;
  ext_lifetimeDeal: string;
  ext_lifetimeAfter: string;
  creem_proMonthly: string;
  creem_proYearly: string;
  creem_teamMonthly: string;
  creem_teamYearly: string;
  creem_lifetimeDeal: string;
  creem_lifetimeAfter: string;
  creem_preferContra: boolean;
  deal_enabled: boolean;
  spotsTotal: string;
  after: "price" | "closed";
  /** UTC ISO or "" */
  deal_endsAt: string;
  deal_showSpots: boolean;
  deal_showTimer: boolean;
  ann_enabled: boolean;
  ann_text: string;
  ann_href: string;
};

const inputCls =
  "h-8 w-full rounded-[6px] bg-white px-2.5 text-[13px] tabular-nums shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none placeholder:text-faint focus:shadow-[inset_0_0_0_1px_var(--color-ink)] aria-[invalid=true]:shadow-[inset_0_0_0_1px_#c62828]";

/** ISO (UTC) to the value a datetime-local input shows in the browser's time zone. */
function toLocalInput(iso: string) {
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return "";
  const d = new Date(t);
  const p = (n: number) => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + "T" + p(d.getHours()) + ":" + p(d.getMinutes());
}
/** datetime-local value (browser time zone) to UTC ISO. */
function fromLocalInput(v: string) {
  if (!v) return "";
  const d = new Date(v);
  return Number.isFinite(d.getTime()) ? d.toISOString() : "";
}
function endOfMonth() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth() + 1, 0, 23, 59, 0, 0).toISOString();
}
const plus = (ms: number) => {
  const d = new Date(Date.now() + ms);
  d.setSeconds(0, 0);
  return d.toISOString();
};
const H = 3600000;
const noop = () => () => {};
const browserZone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "";
  }
};

const toggleCls = "flex cursor-pointer items-center gap-2 text-[13px]";

const usd = (s: string) => {
  const n = Number(s);
  if (!Number.isFinite(n) || n <= 0) return "$–";
  return "$" + (Number.isInteger(n) ? n : n.toFixed(2));
};

/** What is set up for Creem (lib/creem.ts creemStatus). Booleans only: secrets never reach the page. */
export type CreemSetup = { apiKey: boolean; mode: "test" | "live" | null; webhookSecret: boolean; allowTest: boolean };

export function PricingForm({ initial, sold, action, creem }: { initial: Values; sold: number; action: (s: PricingState, f: FormData) => Promise<PricingState>; creem: CreemSetup }) {
  const [v, setV] = useState<Values>(initial);
  const [state, formAction, pending] = useActionState(action, {});
  const set = <K extends keyof Values>(k: K, val: Values[K]) => setV((p) => ({ ...p, [k]: val }));
  const err = (k: string) => state.errors?.[k];

  const num = (k: keyof Values, label: string, prefix?: string, hint?: string) => (
    <label className="flex flex-col gap-1">
      <span className="text-[12px] text-mute">{label}</span>
      <span className="relative">
        {prefix && <span className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-faint">{prefix}</span>}
        <input
          name={k}
          inputMode="decimal"
          value={v[k] as string}
          onChange={(e) => set(k, e.target.value as never)}
          aria-invalid={!!err(k)}
          className={inputCls + (prefix ? " pl-6" : "")}
        />
      </span>
      {err(k) ? <span className="text-[12px] text-[#c62828]">{err(k)}</span> : hint ? <span className="text-[12px] text-faint">{hint}</span> : null}
    </label>
  );

  const link = (k: keyof Values, label: string) => (
    <label className="flex flex-col gap-1">
      <span className="text-[12px] text-mute">{label}</span>
      <input
        name={k}
        type="url"
        inputMode="url"
        placeholder="https://contra.com/..."
        value={v[k] as string}
        onChange={(e) => set(k, e.target.value as never)}
        aria-invalid={!!err(k)}
        className={inputCls}
      />
      {err(k) && <span className="text-[12px] text-[#c62828]">{err(k)}</span>}
    </label>
  );

  const pid = (k: keyof Values, label: string) => (
    <label className="flex flex-col gap-1">
      <span className="text-[12px] text-mute">{label}</span>
      <input name={k} placeholder="prod_…" spellCheck={false} autoComplete="off" value={v[k] as string} onChange={(e) => set(k, e.target.value as never)} aria-invalid={!!err(k)} className={inputCls + " font-mono"} />
      {err(k) && <span className="text-[12px] text-[#c62828]">{err(k)}</span>}
    </label>
  );

  // Local-time display needs the browser's clock and zone, so it waits for mount (no hydration mismatch).
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  const tz = useSyncExternalStore(noop, browserZone, () => "");
  const [, setNow] = useState(0);
  useEffect(() => {
    // Re-check "ended" once a second so the preview and status follow the clock.
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const total = Math.max(0, Math.floor(Number(v.spotsTotal) || 0));
  const left = Math.max(0, total - sold);
  const hasEnd = !!v.deal_endsAt;
  const endPassed = hasEnd && mounted && msLeft(v.deal_endsAt) <= 0;
  const soldOut = v.deal_enabled && left === 0;
  const ended = v.deal_enabled && !soldOut && endPassed;
  const dealActive = v.deal_enabled && !soldOut && !ended;
  const closed = (soldOut || ended) && v.after === "closed";
  const belowSold = total < sold;
  const endLocal = mounted && hasEnd ? new Date(v.deal_endsAt).toLocaleString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "";
  const yearlyMonthly = Number(v.price_proYearly) / 12;
  const saving = Number(v.price_proMonthly) > 0 ? Math.round((1 - Number(v.price_proYearly) / (Number(v.price_proMonthly) * 12)) * 100) : 0;

  return (
    <form action={formAction} className="mt-5 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-4">
        <fieldset className="card p-4">
          <legend className="sr-only">Prices</legend>
          <p className="text-[13px] font-medium">Prices (USD)</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {num("price_proMonthly", "Pro monthly", "$", "per month, 0 = no monthly")}
            {num("price_proYearly", "Pro yearly", "$", "per year")}
            {num("price_teamMonthly", "Team monthly", "$", "per month, 5 seats, 0 = no monthly")}
            {num("price_teamYearly", "Team yearly", "$", "per year, 5 seats")}
            {num("price_lifetimeDeal", "Lifetime deal", "$", "while the deal runs")}
            {num("price_lifetimeAfter", "Lifetime after deal", "$", "after the deal ends")}
          </div>
        </fieldset>

        <fieldset className="card p-4">
          <legend className="sr-only">Lifetime deal</legend>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-[13px] font-medium">Lifetime deal</p>
              <p className="mt-0.5 text-[12px] text-faint">Spots and the countdown are always real: paid deal orders and the end date you set.</p>
            </div>
            <label className={toggleCls + " ml-auto shrink-0"}>
              <input type="checkbox" name="deal_enabled" checked={v.deal_enabled} onChange={(e) => set("deal_enabled", e.target.checked)} className="size-4 accent-[#0b0b0b]" />
              Deal on
            </label>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {num("spotsTotal", "Spots total", undefined, `Shown as ${left} of ${total || "TOTAL"} left; can't go below the ${sold} already sold`)}
            <div className="grid grid-cols-2 gap-2 self-start" aria-live="polite">
              <div className="rounded-[6px] bg-tile px-3 py-2">
                <p className="text-[11px] max-md:text-[12px] text-mute max-md:text-[12px]">Sold</p>
                <p className="text-[18px] font-medium tabular-nums">{sold}</p>
              </div>
              <div className={"rounded-[6px] px-3 py-2 " + (belowSold ? "bg-[#fdecea] text-[#c62828]" : "bg-tile")}>
                <p className={"text-[11px] max-md:text-[12px] " + (belowSold ? "" : "text-mute")}>Left</p>
                <p className="text-[18px] font-medium tabular-nums">{belowSold ? "Too low" : left}</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="flex flex-col gap-1">
              <span className="text-[12px] text-mute">Deal ends at{tz ? ` (your time, ${tz})` : " (your local time)"}</span>
              <input
                type="datetime-local"
                value={mounted ? toLocalInput(v.deal_endsAt) : ""}
                onChange={(e) => set("deal_endsAt", fromLocalInput(e.target.value))}
                aria-invalid={!!err("deal_endsAt")}
                aria-describedby="deal-end-help"
                className={inputCls + " sm:max-w-[260px]"}
              />
            </label>
            <input type="hidden" name="deal_endsAt" value={v.deal_endsAt} />
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[
                ["+24 h", () => plus(24 * H)],
                ["+3 days", () => plus(72 * H)],
                ["+7 days", () => plus(168 * H)],
                ["End of month", endOfMonth],
              ].map(([label, fn]) => (
                <button key={label as string} type="button" onClick={() => set("deal_endsAt", (fn as () => string)())} className="btn-line !h-7 !px-2.5 !text-[12px]">
                  {label as string}
                </button>
              ))}
              <button type="button" onClick={() => set("deal_endsAt", "")} disabled={!hasEnd} className="btn-line !h-7 !px-2.5 !text-[12px] disabled:opacity-50">
                Clear
              </button>
            </div>
            <p id="deal-end-help" className={"mt-1.5 text-[12px] " + (err("deal_endsAt") ? "text-[#c62828]" : "text-faint")}>
              {err("deal_endsAt") ??
                (hasEnd
                  ? endPassed
                    ? `Ended ${endLocal}. The deal is over; set a new date only if you are really reopening it.`
                    : `Ends ${endLocal}, saved as ${v.deal_endsAt.slice(0, 16).replace("T", " ")} UTC. When it passes the deal closes for good.`
                  : "No end date: the deal runs until the spots are gone.")}
            </p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="flex flex-col gap-2">
              <label className={toggleCls}>
                <input type="checkbox" name="deal_showSpots" checked={v.deal_showSpots} onChange={(e) => set("deal_showSpots", e.target.checked)} className="size-4 accent-[#0b0b0b]" />
                Show spots left
              </label>
              <label className={toggleCls + (hasEnd ? "" : " text-faint")}>
                <input type="checkbox" name="deal_showTimer" checked={v.deal_showTimer} onChange={(e) => set("deal_showTimer", e.target.checked)} className="size-4 accent-[#0b0b0b]" />
                Show countdown{hasEnd ? "" : " (needs an end date)"}
              </label>
            </div>
            <label className="flex flex-col gap-1">
              <span className="text-[12px] text-mute">When the deal ends</span>
              <select name="after" value={v.after} onChange={(e) => set("after", e.target.value as Values["after"])} className={inputCls}>
                <option value="price">Sell Lifetime at the after-deal price</option>
                <option value="closed">Close Lifetime</option>
              </select>
              {err("after") ? <span className="text-[12px] text-[#c62828]">{err("after")}</span> : <span className="text-[12px] text-faint">Spots gone or end date passed</span>}
            </label>
          </div>
        </fieldset>

        <fieldset className="card p-4">
          <legend className="sr-only">Creem</legend>
          <p className="text-[13px] font-medium">Creem product IDs</p>
          <p className="mt-0.5 text-[12px] text-faint">Creem sells an option once its product ID is here and the API key is set. Buyers pay without an account; the webhook switches the plan on.</p>
          <ul className="mt-3 grid gap-1 text-[12px]" aria-label="Creem setup">
            <SetupRow ok={creem.apiKey} label={creem.apiKey ? "API key set (" + (creem.mode === "test" ? "test mode, test-api.creem.io" : "live") + ")" : "API key missing: wrangler secret put CREEM_API_KEY"} />
            <SetupRow ok={creem.webhookSecret} label={creem.webhookSecret ? "Webhook secret set" : "Webhook secret missing: wrangler secret put CREEM_WEBHOOK_SECRET"} />
            {creem.allowTest && <SetupRow ok={false} label="CREEM_ALLOW_TEST=1: test payments grant plans. Remove it on the live site." />}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {pid("creem_proMonthly", "Pro monthly")}
            {pid("creem_proYearly", "Pro yearly")}
            {pid("creem_teamMonthly", "Team monthly")}
            {pid("creem_teamYearly", "Team yearly")}
            {pid("creem_lifetimeDeal", "Lifetime deal")}
            {pid("creem_lifetimeAfter", "Lifetime after deal")}
          </div>
          <label className={toggleCls + " mt-3"}>
            <input type="checkbox" name="creem_preferContra" checked={v.creem_preferContra} onChange={(e) => set("creem_preferContra", e.target.checked)} className="size-4 accent-[#0b0b0b]" />
            Prefer Contra: send buyers to the Contra link when an option has one
          </label>
        </fieldset>

        <fieldset className="card p-4">
          <legend className="sr-only">Lemon Squeezy variant IDs</legend>
          <p className="text-[13px] font-medium">Lemon Squeezy variant IDs</p>
          <p className="mt-0.5 text-[12px] text-faint">Empty means that option collects waitlist emails instead of opening checkout.</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {num("variant_proMonthly", "Pro monthly")}
            {num("variant_proYearly", "Pro yearly")}
            {num("variant_teamMonthly", "Team monthly")}
            {num("variant_teamYearly", "Team yearly")}
            {num("variant_lifetimeDeal", "Lifetime deal")}
            {num("variant_lifetimeAfter", "Lifetime after deal")}
          </div>
        </fieldset>

        <fieldset className="card p-4">
          <legend className="sr-only">External checkout links</legend>
          <p className="text-[13px] font-medium">External checkout links (Contra)</p>
          <p className="mt-0.5 text-[12px] text-faint">Used when an option has no Creem product or Lemon Squeezy variant, or when Prefer Contra is on. The buy button opens this link; you activate the plan by hand in Orders, Grant plan. Empty means waitlist.</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {link("ext_proMonthly", "Pro monthly")}
            {link("ext_proYearly", "Pro yearly")}
            {link("ext_teamMonthly", "Team monthly")}
            {link("ext_teamYearly", "Team yearly")}
            {link("ext_lifetimeDeal", "Lifetime deal")}
            {link("ext_lifetimeAfter", "Lifetime after deal")}
          </div>
        </fieldset>

        <div className="card flex flex-wrap items-center gap-3 p-4 text-[13px]">
          <p className="font-medium">Announcement bar</p>
          <p className="text-mute">{v.ann_enabled ? "On: " + v.ann_text : "Off"}</p>
          <a href="/admin/announcement" className="btn-line ml-auto">Edit in Content</a>
        </div>

        <div className={"flex flex-wrap items-center gap-3 " + pageSaveBar}>
          <button type="submit" disabled={pending} className="btn-ink disabled:opacity-60 max-md:flex-1">
            {pending ? "Saving…" : "Save pricing"}
          </button>
          <button type="button" onClick={() => setV(initial)} className="btn-line">
            Reset
          </button>
          {state.ok && (
            <p role="status" className="flex items-center gap-1.5 text-[13px]">
              <Icon name="check" size={15} />
              {state.ok}
            </p>
          )}
          {state.errors && (
            <p role="alert" className="flex items-center gap-1.5 text-[13px] text-[#c62828]">
              <Icon name="x" size={15} />
              Fix the highlighted fields.
            </p>
          )}
        </div>
      </div>

      <div className="xl:sticky xl:top-5 xl:self-start">
        <p className="eyebrow mb-2">Live preview</p>
        {v.ann_enabled && v.ann_text ? (
          <div className="mb-3">
            <BarView
              preview
              text={v.ann_text}
              href={v.ann_href || null}
              ended={ended}
              deal={dealActive ? { price: Number(v.price_lifetimeDeal), left, total, endsAt: v.deal_endsAt || null, showSpots: v.deal_showSpots, showTimer: v.deal_showTimer } : null}
            />
          </div>
        ) : (
          <p className="mb-3 rounded-[8px] bg-tile px-3 py-2 text-center text-[12px] text-mute">Announcement bar is off, so the countdown shows only on the pricing card.</p>
        )}
        <div className="grid grid-cols-2 gap-3">
          <PreviewCard name="Free" price="$0" per="forever" note="5 free copies, every system to browse" />
          <PreviewCard name="Pro" price={usd(v.price_proMonthly)} per="per month" note="Every component in code and Figma" missing={!v.variant_proMonthly && !v.creem_proMonthly && !v.ext_proMonthly} />
          <PreviewCard
            name="Pro yearly"
            price={usd(v.price_proYearly)}
            per="per year"
            note={Number.isFinite(yearlyMonthly) && yearlyMonthly > 0 ? `${usd(yearlyMonthly.toFixed(2))} a month${saving > 0 ? `, save ${saving}%` : ""}` : "Billed yearly"}
            missing={!v.variant_proYearly && !v.creem_proYearly && !v.ext_proYearly}
          />
          {closed ? (
            <PreviewCard name="Lifetime" price="Closed" per="" note={ended ? "The launch deal has ended" : "All launch spots are taken"} muted />
          ) : dealActive ? (
            <PreviewCard
              name="Lifetime deal"
              price={usd(v.price_lifetimeDeal)}
              strike={usd(v.price_lifetimeAfter)}
              per="once"
              note={v.deal_showSpots ? `${left} of ${total} spots left` : "Spots hidden"}
              meter={v.deal_showSpots && total ? left / total : undefined}
              timer={v.deal_showTimer && hasEnd && mounted ? v.deal_endsAt : undefined}
              highlight
              missing={!v.variant_lifetimeDeal && !v.creem_lifetimeDeal && !v.ext_lifetimeDeal}
            />
          ) : (
            <PreviewCard name="Lifetime" price={usd(v.price_lifetimeAfter)} per="once" note={ended ? "The launch deal has ended" : v.deal_enabled ? "Launch spots are gone" : "Pay once, keep every update"} missing={!v.variant_lifetimeAfter && !v.creem_lifetimeAfter && !v.ext_lifetimeAfter} />
          )}
        </div>
        <p className="mt-2 text-[12px] text-faint">
          {dealActive
            ? `Deal running: Lifetime sells at ${usd(v.price_lifetimeDeal)} until ${total} paid deal orders${hasEnd ? " or the end date, whichever comes first" : ""}.`
            : soldOut
              ? closed
                ? "Spots used up: Lifetime is closed."
                : `Spots used up: Lifetime sells at ${usd(v.price_lifetimeAfter)}.`
              : ended
                ? closed
                  ? "End date passed: Lifetime is closed."
                  : `End date passed: Lifetime sells at ${usd(v.price_lifetimeAfter)}.`
                : `Deal off: Lifetime sells at ${usd(v.price_lifetimeAfter)}.`}
        </p>
      </div>
    </form>
  );
}

function SetupRow({ ok, label }: { ok: boolean; label: string }) {
  return (
    <li className={"flex items-center gap-1.5 " + (ok ? "text-mute" : "text-[#c62828]")}>
      <Icon name={ok ? "check" : "x"} size={13} className="shrink-0" />
      {label}
    </li>
  );
}

function PreviewCard({ name, price, per, note, strike, meter, timer, highlight, muted, missing }: { name: string; price: string; per: string; note: string; strike?: string; meter?: number; timer?: string; highlight?: boolean; muted?: boolean; missing?: boolean }) {
  return (
    <div className={"flex flex-col rounded-[8px] p-4 " + (highlight ? "bg-ink text-white" : "card") + (muted ? " opacity-60" : "")}>
      <p className={"text-[13px] " + (highlight ? "text-white/70" : "text-mute")}>{name}</p>
      <p className="mt-2 flex items-baseline gap-1.5">
        <span className="text-[24px] font-medium tracking-[-0.02em] tabular-nums">{price}</span>
        {strike && <span className={"text-[13px] line-through tabular-nums " + (highlight ? "text-white/50" : "text-faint")}>{strike}</span>}
        {per && <span className={"text-[12px] " + (highlight ? "text-white/60" : "text-faint")}>{per}</span>}
      </p>
      {timer && (
        <p className="mt-2 flex items-center gap-1 rounded-[6px] bg-white/10 px-2 py-1 text-[11px] max-md:text-[12px]">
          <CIcon name="clock" size={12} className="shrink-0" />
          <DealCountdown key={timer} endsAt={timer} prefix="Ends in" />
        </p>
      )}
      {meter !== undefined && (
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20" aria-hidden="true">
          <div className="h-full rounded-full bg-white" style={{ width: `${Math.min(100, Math.max(0, meter * 100))}%` }} />
        </div>
      )}
      <p className={"mt-2 text-[12px] " + (highlight ? "text-white/70" : "text-mute")}>{note}</p>
      {missing && <p className={"mt-auto pt-2 text-[11px] max-md:text-[12px] " + (highlight ? "text-white/50" : "text-faint")}>No checkout set: shows the waitlist</p>}
    </div>
  );
}
