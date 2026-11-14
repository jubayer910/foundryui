"use client";
import { useActionState, useState } from "react";
import { Icon } from "@/registry/components/icons";
import type { PricingState } from "@/app/admin/(panel)/pricing/actions";

type Values = {
  price_proMonthly: string;
  price_proYearly: string;
  price_lifetimeDeal: string;
  price_lifetimeAfter: string;
  variant_proMonthly: string;
  variant_proYearly: string;
  variant_lifetimeDeal: string;
  variant_lifetimeAfter: string;
  deal_enabled: boolean;
  spotsTotal: string;
  after: "price" | "closed";
  ann_enabled: boolean;
  ann_text: string;
  ann_href: string;
};

const inputCls =
  "h-8 w-full rounded-[6px] bg-white px-2.5 text-[13px] tabular-nums shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none placeholder:text-faint focus:shadow-[inset_0_0_0_1px_var(--color-ink)] aria-[invalid=true]:shadow-[inset_0_0_0_1px_#c62828]";

const usd = (s: string) => {
  const n = Number(s);
  if (!Number.isFinite(n) || n <= 0) return "$–";
  return "$" + (Number.isInteger(n) ? n : n.toFixed(2));
};

export function PricingForm({ initial, sold, action }: { initial: Values; sold: number; action: (s: PricingState, f: FormData) => Promise<PricingState> }) {
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

  const total = Math.max(0, Math.floor(Number(v.spotsTotal) || 0));
  const left = Math.max(0, total - sold);
  const soldOut = v.deal_enabled && left === 0;
  const dealActive = v.deal_enabled && !soldOut;
  const closed = soldOut && v.after === "closed";
  const yearlyMonthly = Number(v.price_proYearly) / 12;
  const saving = Number(v.price_proMonthly) > 0 ? Math.round((1 - Number(v.price_proYearly) / (Number(v.price_proMonthly) * 12)) * 100) : 0;

  return (
    <form action={formAction} className="mt-5 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-4">
        <fieldset className="card p-4">
          <legend className="sr-only">Prices</legend>
          <p className="text-[13px] font-medium">Prices (USD)</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {num("price_proMonthly", "Pro monthly", "$", "per month")}
            {num("price_proYearly", "Pro yearly", "$", "per year")}
            {num("price_lifetimeDeal", "Lifetime deal", "$", "while spots last")}
            {num("price_lifetimeAfter", "Lifetime after deal", "$", "when spots run out")}
          </div>
        </fieldset>

        <fieldset className="card p-4">
          <legend className="sr-only">Launch deal</legend>
          <div className="flex items-center gap-3">
            <p className="text-[13px] font-medium">Launch deal</p>
            <label className="ml-auto flex cursor-pointer items-center gap-2 text-[13px]">
              <input type="checkbox" name="deal_enabled" checked={v.deal_enabled} onChange={(e) => set("deal_enabled", e.target.checked)} className="size-4 accent-[#0b0b0b]" />
              Deal on
            </label>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {num("spotsTotal", "Spots total", undefined, `${sold} sold so far`)}
            <label className="flex flex-col gap-1">
              <span className="text-[12px] text-mute">After the spots run out</span>
              <select name="after" value={v.after} onChange={(e) => set("after", e.target.value as Values["after"])} className={inputCls}>
                <option value="price">Sell at the after-deal price</option>
                <option value="closed">Close Lifetime</option>
              </select>
              {err("after") && <span className="text-[12px] text-[#c62828]">{err("after")}</span>}
            </label>
          </div>
        </fieldset>

        <fieldset className="card p-4">
          <legend className="sr-only">Lemon Squeezy variant IDs</legend>
          <p className="text-[13px] font-medium">Lemon Squeezy variant IDs</p>
          <p className="mt-0.5 text-[12px] text-faint">Empty means that option collects waitlist emails instead of opening checkout.</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {num("variant_proMonthly", "Pro monthly")}
            {num("variant_proYearly", "Pro yearly")}
            {num("variant_lifetimeDeal", "Lifetime deal")}
            {num("variant_lifetimeAfter", "Lifetime after deal")}
          </div>
        </fieldset>

        <fieldset className="card p-4">
          <legend className="sr-only">Announcement bar</legend>
          <div className="flex items-center gap-3">
            <p className="text-[13px] font-medium">Announcement bar</p>
            <label className="ml-auto flex cursor-pointer items-center gap-2 text-[13px]">
              <input type="checkbox" name="ann_enabled" checked={v.ann_enabled} onChange={(e) => set("ann_enabled", e.target.checked)} className="size-4 accent-[#0b0b0b]" />
              Show bar
            </label>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <label className="flex flex-col gap-1">
              <span className="text-[12px] text-mute">Text</span>
              <input name="ann_text" value={v.ann_text} onChange={(e) => set("ann_text", e.target.value)} aria-invalid={!!err("ann_text")} className={inputCls} maxLength={160} />
              {err("ann_text") && <span className="text-[12px] text-[#c62828]">{err("ann_text")}</span>}
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[12px] text-mute">Link</span>
              <input name="ann_href" value={v.ann_href} onChange={(e) => set("ann_href", e.target.value)} aria-invalid={!!err("ann_href")} className={inputCls} placeholder="/pricing" />
              {err("ann_href") && <span className="text-[12px] text-[#c62828]">{err("ann_href")}</span>}
            </label>
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" disabled={pending} className="btn-ink disabled:opacity-60">
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
        {v.ann_enabled && v.ann_text && (
          <div className="mb-3 flex items-center justify-center gap-2 rounded-[8px] bg-ink px-3 py-2 text-center text-[12px] text-white">
            <span className="truncate">{v.ann_text}</span>
            {v.ann_href && <Icon name="arrow-up-right" size={14} />}
          </div>
        )}
        <div className="grid grid-cols-2 gap-3">
          <PreviewCard name="Free" price="$0" per="forever" note="5 free copies, every system to browse" />
          <PreviewCard name="Pro" price={usd(v.price_proMonthly)} per="per month" note="Every component in code and Figma" missing={!v.variant_proMonthly} />
          <PreviewCard
            name="Pro yearly"
            price={usd(v.price_proYearly)}
            per="per year"
            note={Number.isFinite(yearlyMonthly) && yearlyMonthly > 0 ? `${usd(yearlyMonthly.toFixed(2))} a month${saving > 0 ? `, save ${saving}%` : ""}` : "Billed yearly"}
            missing={!v.variant_proYearly}
          />
          {closed ? (
            <PreviewCard name="Lifetime" price="Closed" per="" note="All launch spots are taken" muted />
          ) : dealActive ? (
            <PreviewCard
              name="Lifetime deal"
              price={usd(v.price_lifetimeDeal)}
              strike={usd(v.price_lifetimeAfter)}
              per="once"
              note={`${left} of ${total} spots left`}
              meter={total ? sold / total : 0}
              highlight
              missing={!v.variant_lifetimeDeal}
            />
          ) : (
            <PreviewCard name="Lifetime" price={usd(v.price_lifetimeAfter)} per="once" note={v.deal_enabled ? "Launch spots are gone" : "Pay once, keep every update"} missing={!v.variant_lifetimeAfter} />
          )}
        </div>
        <p className="mt-2 text-[12px] text-faint">
          {dealActive ? `Deal running: Lifetime sells at ${usd(v.price_lifetimeDeal)} until ${total} paid deal orders.` : soldOut ? (closed ? "Spots used up: Lifetime is closed." : `Spots used up: Lifetime sells at ${usd(v.price_lifetimeAfter)}.`) : `Deal off: Lifetime sells at ${usd(v.price_lifetimeAfter)}.`}
        </p>
      </div>
    </form>
  );
}

function PreviewCard({ name, price, per, note, strike, meter, highlight, muted, missing }: { name: string; price: string; per: string; note: string; strike?: string; meter?: number; highlight?: boolean; muted?: boolean; missing?: boolean }) {
  return (
    <div className={"flex flex-col rounded-[8px] p-4 " + (highlight ? "bg-ink text-white" : "card") + (muted ? " opacity-60" : "")}>
      <p className={"text-[13px] " + (highlight ? "text-white/70" : "text-mute")}>{name}</p>
      <p className="mt-2 flex items-baseline gap-1.5">
        <span className="text-[24px] font-medium tracking-[-0.02em] tabular-nums">{price}</span>
        {strike && <span className={"text-[13px] line-through tabular-nums " + (highlight ? "text-white/50" : "text-faint")}>{strike}</span>}
        {per && <span className={"text-[12px] " + (highlight ? "text-white/60" : "text-faint")}>{per}</span>}
      </p>
      {meter !== undefined && (
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20" aria-hidden="true">
          <div className="h-full rounded-full bg-white" style={{ width: `${Math.min(100, Math.max(0, meter * 100))}%` }} />
        </div>
      )}
      <p className={"mt-2 text-[12px] " + (highlight ? "text-white/70" : "text-mute")}>{note}</p>
      {missing && <p className={"mt-auto pt-2 text-[11px] " + (highlight ? "text-white/50" : "text-faint")}>No variant ID: shows the waitlist</p>}
    </div>
  );
}
