// Audience growth (mailpulse, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");

export function AudienceGrowth() {
  return (
    <div style={{ width: "689.07px", height: "298.54px", display: "flex", flexDirection: "column", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "689.07px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Audience growth</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>New subscribers per day, compared with the previous 30 days.</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Calendar size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Daily</p>
          <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "3.66px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "rgba(124, 83, 249, 0.7)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>This period</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "3.66px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#e6e6e6" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Previous period</p>
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "30.16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5" }}>120</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5" }}>90</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5" }}>60</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5" }}>30</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5" }}>0</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ height: "189.18px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
              <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
            </div>
          </div>
          <div style={{ width: "652.4px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Nov 24</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Nov 29</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec 4</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec 9</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec 14</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec 19</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec 23</p>
          </div>
        </div>
      </div>
    </div>
  );
}
