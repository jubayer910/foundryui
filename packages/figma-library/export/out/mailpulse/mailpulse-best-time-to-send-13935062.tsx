// Best time to send (mailpulse, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const SparklesBulk = icon("<path d=\"M9 18A6 6 0 0 1 15 12 6 6 0 0 1 9 6 6 6 0 0 1 3 12 6 6 0 0 1 9 18\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 18A2 2 0 0 1 18 20 2 2 0 0 1 20 18 2 2 0 0 1 18 16 2 2 0 0 1 16 18\"/><path d=\"M16 6A2 2 0 0 1 18 8 2 2 0 0 1 20 6 2 2 0 0 1 18 4 2 2 0 0 1 16 6\"/></g>");
const Activity = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12h4l3 8l4 -16l3 8h4\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");

export function BestTimeToSend() {
  return (
    <div style={{ width: "685px", height: "323px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Best time to send</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Open rate by weekday and hour, last 90 days.</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "999px", background: "rgba(124, 83, 249, 0.1)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <SparklesBulk size={11.9} style={{ width: "11.88px", height: "11.88px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#7c53f9" }}>Best: Tue 9 AM</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Open rate</p>
            <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>Mon</p>
          </div>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>Tue</p>
          </div>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>Wed</p>
          </div>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>Thu</p>
          </div>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>Fri</p>
          </div>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>Sat</p>
          </div>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>Sun</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.68)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(124, 83, 249, 0.2)" }} />
            <div style={{ width: "34.7px", height: "27.42px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>6a</p>
            </div>
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>8a</p>
            </div>
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>10a</p>
            </div>
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>12p</p>
            </div>
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>2p</p>
            </div>
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>4p</p>
            </div>
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>6p</p>
            </div>
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>8p</p>
            </div>
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            <div style={{ width: "34.7px", height: "16.45px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>10p</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Lower</p>
        <div style={{ width: "12.79px", height: "12.79px", flexShrink: 0, borderRadius: "3.2px", background: "#f5f5f5" }} />
        <div style={{ width: "12.79px", height: "12.79px", flexShrink: 0, borderRadius: "3.2px", background: "rgba(124, 83, 249, 0.2)" }} />
        <div style={{ width: "12.79px", height: "12.79px", flexShrink: 0, borderRadius: "3.2px", background: "rgba(124, 83, 249, 0.4)" }} />
        <div style={{ width: "12.79px", height: "12.79px", flexShrink: 0, borderRadius: "3.2px", background: "rgba(124, 83, 249, 0.68)" }} />
        <div style={{ width: "12.79px", height: "12.79px", flexShrink: 0, borderRadius: "3.2px", background: "rgba(124, 83, 249, 0.7)" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Higher open rate</p>
      </div>
    </div>
  );
}
