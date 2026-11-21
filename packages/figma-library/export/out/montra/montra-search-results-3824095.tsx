// Search results (montra, Forms) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const BuildingBank = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21l18 0\" /><path d=\"M3 10l18 0\" /><path d=\"M5 6l7 -3l7 3\" /><path d=\"M4 10l0 11\" /><path d=\"M20 10l0 11\" /><path d=\"M8 14l0 3\" /><path d=\"M12 14l0 3\" /><path d=\"M16 14l0 3\" /></g>");
const File = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /></g>");
const Sparkles = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6\" /></g>");
const Transaction = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.58 8.607L2 8.454C3.849 3.704 9.158 1 14.333 2.344c5.513 1.433 8.788 6.918 7.314 12.25c-1.219 4.411-5.304 7.337-9.8 7.406\"/><path stroke-dasharray=\".5 3\" d=\"M12 22C6.5 22 2 17 2 11\"/><path d=\"M13.604 9.722c-.352-.37-1.213-1.237-2.575-.62c-1.361.615-1.577 2.596.482 2.807c.93.095 1.537-.11 2.093.47c.556.582.659 2.198-.761 2.634s-2.341-.284-2.588-.509m1.653-6.484v.79m0 6.337v.873\"/></g>");

export function SearchResults() {
  return (
    <div style={{ width: "640px", height: "396.09px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 10.97px 25.59px -7.31px rgba(13, 13, 18, 0.08), 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "5.48px 5.48px 0.91px 5.48px", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "7.31px 9.14px 3.66px 9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Articles · 4 results</p>
      </div>
      <div style={{ width: "630.86px", height: "43.87px", flexShrink: 0, borderRadius: "7.31px", background: "#f4f4f5", boxShadow: "inset 0 0 0 0.91px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "168px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Reconcile</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>{" bank transactions"}</span>
          </p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "217px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Bank connections · 6 min read · 1,284 views</p>
        </div>
        <div style={{ height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 5.48px 0.91px 5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>↵</p>
        </div>
      </div>
      <div style={{ width: "630.86px", height: "43.87px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "227px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Reconcile</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>{" Stripe payouts with invoices"}</span>
          </p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "164px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Invoices & payments · 4 min read</p>
        </div>
      </div>
      <div style={{ width: "630.86px", height: "43.87px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "200px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>{"Why a transaction won’t "}</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>reconcile</span>
          </p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Bank connections · 3 min read</p>
        </div>
      </div>
      <div style={{ width: "630.86px", height: "43.87px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>{"Undo a "}</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>reconcil</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>iation</span>
          </p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Accounts · 2 min read</p>
        </div>
      </div>
      <div style={{ width: "630.86px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.66px 0px 3.66px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#ededed" }} />
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "7.31px 9.14px 3.66px 9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Jump to</p>
      </div>
      <div style={{ width: "630.86px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <BuildingBank size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>Open reconciliation in Accounts</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>6 accounts</p>
      </div>
      <div style={{ width: "630.86px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Transaction size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>Review 12 unmatched transactions</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>Transactions</p>
      </div>
      <div style={{ width: "630.86px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.66px 0px 3.66px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#ededed" }} />
      </div>
      <div style={{ width: "630.86px", height: "42.04px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(142, 131, 253, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Sparkles size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#8e83fd", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "298px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>{"Ask Montra AI "}</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>“how do I reconcile Stripe payouts?”</span>
          </p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "296px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>Answers using your accounts, rules and transaction history</p>
        </div>
        <div style={{ height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 5.48px 0.91px 5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>Tab</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "9.13px 12.79px 8.22px 12.79px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 5.48px 0.91px 5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>↑↓</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Navigate</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 5.48px 0.91px 5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>↵</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Open</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 5.48px 0.91px 5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>esc</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Close</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>Searched 86 articles in 40 ms</p>
      </div>
    </div>
  );
}
