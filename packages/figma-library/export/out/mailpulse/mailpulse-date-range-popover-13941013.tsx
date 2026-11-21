// Date range popover (mailpulse, Popovers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const ChevronLeft = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6l6 6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const CalendarBulk = icon("<path d=\"M4 7A2 2 0 0 1 6 5H18A2 2 0 0 1 20 7V19A2 2 0 0 1 18 21H6A2 2 0 0 1 4 19V7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 11H20\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 3V7\"/><path d=\"M8 3V7\"/></g>");

export function DateRangePopover() {
  return (
    <div style={{ width: "600px", height: "375.98px", borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 14.62px 29.24px -10.97px rgba(13, 13, 18, 0.1), 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset -0.91px 0 0 0 #eeeeee", display: "flex", flexDirection: "column", padding: "5.48px 6.39px 5.48px 5.48px", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "138.13px", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Today</p>
          </div>
          <div style={{ width: "138.13px", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Last 7 days</p>
          </div>
          <div style={{ width: "138.13px", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", background: "#f4f4f5", boxShadow: "inset 0 0 0 0.91px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Last 30 days</p>
          </div>
          <div style={{ width: "138.13px", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Last 90 days</p>
          </div>
          <div style={{ width: "138.13px", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Last 12 months</p>
            <Check size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
          </div>
          <div style={{ width: "138.13px", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Year to date</p>
          </div>
          <div style={{ width: "138.13px", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Custom range</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "12.79px 12.79px 12.79px 12.79px", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "18.28px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "203.07px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ChevronLeft size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>November 2026</p>
                <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0 }} />
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Mo</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Tu</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>We</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Th</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Fr</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Sa</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Su</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>1</p>
                    </div>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>2</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>3</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>4</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>5</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>6</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>7</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>8</p>
                    </div>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>9</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>10</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>11</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>12</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>13</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>14</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>15</p>
                    </div>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>16</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>17</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>18</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>19</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>20</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>21</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>22</p>
                    </div>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "14.51px", top: "0px", width: "14.51px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", background: "#7c53f9", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#ffffff" }}>23</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>24</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>25</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>26</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>27</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>28</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", borderRadius: "0px 7.31px 7.31px 0px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>29</p>
                    </div>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", borderRadius: "7.31px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>30</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                </div>
              </div>
            </div>
            <div style={{ width: "203.07px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0 }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>December 2026</p>
                <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Mo</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Tu</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>We</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Th</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Fr</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Sa</p>
                </div>
                <div style={{ width: "29.01px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Su</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", borderRadius: "7.31px 0px 0px 7.31px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>1</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>2</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>3</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>4</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>5</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", borderRadius: "0px 7.31px 7.31px 0px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>6</p>
                    </div>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", borderRadius: "7.31px 0px 0px 7.31px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>7</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>8</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>9</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>10</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>11</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>12</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", borderRadius: "0px 7.31px 7.31px 0px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>13</p>
                    </div>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", borderRadius: "7.31px 0px 0px 7.31px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>14</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>15</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>16</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>17</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>18</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>19</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", borderRadius: "0px 7.31px 7.31px 0px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>20</p>
                    </div>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "29.01px", height: "25.59px", borderRadius: "7.31px 0px 0px 7.31px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>21</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "14.51px", height: "25.59px", background: "rgba(124, 83, 249, 0.1)" }} />
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", background: "#7c53f9", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#ffffff" }}>22</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", background: "#f5f5f5", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>23</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#c4c4c4" }}>24</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#c4c4c4" }}>25</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#c4c4c4" }}>26</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#c4c4c4" }}>27</p>
                    </div>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#c4c4c4" }}>28</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#c4c4c4" }}>29</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#c4c4c4" }}>30</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "1.71px", top: "0px", width: "25.59px", height: "25.59px", borderRadius: "7.31px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#c4c4c4" }}>31</p>
                    </div>
                  </div>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                  <div style={{ width: "29.01px", height: "25.59px", flexShrink: 0 }} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Start</p>
              <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CalendarBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Nov 23, 2026</p>
              </div>
            </div>
            <div style={{ height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>End</p>
              <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CalendarBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Dec 22, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "10.05px 12.79px 9.14px 12.79px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>30 days</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>vs. Oct 24 – Nov 22</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Cancel</p>
        </div>
        <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "91.39px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.31px 10.97px 7.31px 10.97px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff" }}>Apply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
