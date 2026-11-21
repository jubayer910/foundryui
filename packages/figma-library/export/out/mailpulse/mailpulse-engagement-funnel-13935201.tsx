// Engagement funnel (mailpulse, Charts) from Ingot UI (ingotui.com).
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

export function EngagementFunnel() {
  return (
    <div style={{ width: "323px", height: "323.33px", display: "flex", flexDirection: "column", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Engagement funnel</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Average per issue, last 30 days.</p>
      </div>
      <div style={{ width: "323px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "5.48px 0px 5.48px 0px", gap: "6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Delivered</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>17,764</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>100.0%</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "5.48px 0px 5.48px 0px", gap: "6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Opened</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>8,491</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>47.8%</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.85)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.85)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.85)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.85)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.85)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.85)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.85)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.85)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.85)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.85)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "5.48px 0px 5.48px 0px", gap: "6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Clicked</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>3,304</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>18.6%</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "5.48px 0px 5.48px 0px", gap: "6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Replied</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>426</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>2.4%</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.55)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "5.48px 0px 5.48px 0px", gap: "6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Upgraded to paid</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>38</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>0.2%</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.4)" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
            <div style={{ width: "12.57px", height: "10.97px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
          </div>
        </div>
      </div>
      <div style={{ width: "323px", flexShrink: 0, borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "8.22px 10.05px 8.22px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <SparklesBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>Issues with 3 links or fewer get 22% more clicks.</p>
      </div>
    </div>
  );
}
