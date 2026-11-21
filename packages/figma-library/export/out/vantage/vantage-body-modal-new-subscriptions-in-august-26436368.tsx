// Body modal, New subscriptions in August (vantage, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const Crown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6\" /></g>");
const CurrencyDollar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2\" /><path d=\"M12 3v3m0 12v3\" /></g>");
const Minus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l14 0\" /></g>");
const Percentage = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M6 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M6 18l12 -12\" /></g>");
const Plus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" /></g>");
const UserPlus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\" /></g>");

export function BodyModalNewSubscriptionsInAugust() {
  return (
    <div style={{ width: "638px", height: "376px", display: "flex", flexDirection: "column", padding: "4px 18px 18px 18px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "290px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "290px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a0a0a0" }}>New subscriptions in August</p>
            <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "6px", background: "#191919", boxShadow: "inset 0 0 0 1px #7b5bff, 0px 0px 0px 3px rgba(123, 91, 255, 0.22)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <UserPlus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>140</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Minus size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#dadada", display: "block" }} />
                </div>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Plus size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#dadada", display: "block" }} />
                </div>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>July pace: 128 new in 4 weeks</p>
          </div>
          <div style={{ width: "290px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a0a0a0" }}>Monthly churn</p>
            <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "6px", background: "#191919", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Percentage size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>2.3%</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Minus size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#dadada", display: "block" }} />
                </div>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Plus size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#dadada", display: "block" }} />
                </div>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>41 cancellations in July</p>
          </div>
          <div style={{ width: "290px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a0a0a0" }}>Revenue per subscription</p>
            <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "6px", background: "#191919", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CurrencyDollar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>$44.45</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Minus size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#dadada", display: "block" }} />
                </div>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Plus size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#dadada", display: "block" }} />
                </div>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Mix: Essential 812 · Plus 663 · Family 276</p>
          </div>
          <div style={{ width: "290px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a0a0a0" }}>Pay rate</p>
            <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "6px", background: "#191919", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Crown size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>Diamond · 12% + 3 gens</p>
              <ChevronDown size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Your rank for August</p>
          </div>
        </div>
        <div style={{ width: "298px", flexShrink: 0, borderRadius: "10px", background: "#191919", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Projected August commission</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "39px", fontFamily: "'Geist'", fontSize: "30px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.03em" }}>$9,873</p>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+$532 vs July</p>
            </div>
          </div>
          <div style={{ width: "266px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "266px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>{"MRR "}</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>$82,272</span>
              </p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>96.8% of Q3 target</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
              <div style={{ width: "3.2px", height: "20px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
            </div>
            <div style={{ width: "266px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>$77,839 today</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>$85,000 · Sep 30</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#2e2e2e" }} />
          <div style={{ width: "266px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "6.11px", height: "6.11px", flexShrink: 0, borderRadius: "3.05px", background: "#7b5bff" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Matching · 5%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#9a9a9a" }}>$4,114</p>
          </div>
          <div style={{ width: "266px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "6.11px", height: "6.11px", flexShrink: 0, borderRadius: "3.05px", background: "#7aa2f7" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Leadership · 4%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#9a9a9a" }}>$3,291</p>
          </div>
          <div style={{ width: "266px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "6.11px", height: "6.11px", flexShrink: 0, borderRadius: "3.05px", background: "#e5559b" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Fast start · 3%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#9a9a9a" }}>$2,468</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#2e2e2e" }} />
          <div style={{ width: "266px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#a0a0a0" }}>Total · 12%</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>$9,873</p>
          </div>
          <p style={{ width: "266px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#5f5f5f" }}>Pays Sep 5 · +140 × $44.45 · −2.3% churn on $77,839</p>
        </div>
      </div>
    </div>
  );
}
