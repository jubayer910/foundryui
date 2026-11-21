// Popular articles card (montra, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const File = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /></g>");

export function PopularArticlesCard() {
  return (
    <div style={{ width: "711px", height: "388.16px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Popular articles</p>
      <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "210px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Most read by Alder & Co. this month</p>
      <div style={{ position: "absolute", left: "617.99px", top: "18.28px", width: "74.73px", height: "25.59px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>View all</p>
        <ChevronRight size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#686765", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "0px", top: "73.11px", width: "711px", height: "296.1px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "711px", height: "49.35px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Article</p>
          </div>
          <div style={{ width: "148px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Topic</p>
          </div>
          <div style={{ width: "72px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Read</p>
          </div>
          <div style={{ width: "72px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Views</p>
          </div>
          <div style={{ width: "157px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Helpful</p>
          </div>
        </div>
        <div style={{ width: "711px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Reconcile bank transactions</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Updated Aug 06</p>
              </div>
            </div>
          </div>
          <div style={{ width: "148px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Bank connections</p>
          </div>
          <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>6 min</p>
          </div>
          <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>1,284</p>
          </div>
          <div style={{ width: "157px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>94%</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Fix a disconnected Plaid feed</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Updated Aug 06</p>
              </div>
            </div>
          </div>
          <div style={{ width: "148px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Bank connections</p>
          </div>
          <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>3 min</p>
          </div>
          <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>962</p>
          </div>
          <div style={{ width: "157px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>89%</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Set up recurring invoices</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Updated Jul 28</p>
              </div>
            </div>
          </div>
          <div style={{ width: "148px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Invoices & payments</p>
          </div>
          <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>4 min</p>
          </div>
          <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>815</p>
          </div>
          <div style={{ width: "157px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>91%</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "145px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Approval rules for payments</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Updated Jul 28</p>
              </div>
            </div>
          </div>
          <div style={{ width: "148px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Invoices & payments</p>
          </div>
          <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>5 min</p>
          </div>
          <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>640</p>
          </div>
          <div style={{ width: "157px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>86%</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "170px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Export a P&L for your accountant</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Updated Jul 28</p>
              </div>
            </div>
          </div>
          <div style={{ width: "148px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Reports & exports</p>
          </div>
          <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>3 min</p>
          </div>
          <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>512</p>
          </div>
          <div style={{ width: "157px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>97%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
