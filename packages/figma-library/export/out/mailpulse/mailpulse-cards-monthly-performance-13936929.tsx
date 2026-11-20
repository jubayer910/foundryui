// Cards, Monthly performance (mailpulse, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChartLineBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19l16 0\" /><path d=\"M4 15l4 -6l4 2l4 -5l4 4\" /></g>");
const MegaphoneBulk = icon("<path d=\"M11 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4V16A1 1 0 0 1 19.4 16.8 13 13 0 0 0 11 14H5A2 2 0 0 1 3 12V8A2 2 0 0 1 5 6Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 6V14\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 14A12 12 0 0 0 8.4 21.2 2 2 0 0 0 11.600000000000001 18.8 8 8 0 0 1 10 14\"/></g>");
const MoneybagBulk = icon("<path d=\"M4 17V16A8 8 0 1 1 20 16V17A4 4 0 0 1 16 21H8A4 4 0 0 1 4 17\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 3H14.5A1.5 1.5 0 0 1 16 4.5 3.5 3.5 0 0 1 12.5 8H11.5A3.5 3.5 0 0 1 8 4.5 1.5 1.5 0 0 1 9.5 3\"/></g>");
const UsersBulk = icon("<path d=\"M5 7A4 4 0 1 0 13 7 4 4 0 1 0 5 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21V19A4 4 0 0 1 7 15H11A4 4 0 0 1 15 19V21\"/><path d=\"M16 3.13A4 4 0 0 1 16 10.879999999999999\"/><path d=\"M21 21V19A4 4 0 0 0 18 15.15\"/></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");

export function CardsMonthlyPerformance() {
  return (
    <div style={{ width: "1040.01px", height: "173.03px", display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "11.88px 11.88px 11.88px 11.88px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "70px", flexShrink: 0, borderRadius: "9.14px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "29.32px", top: "10.97px", width: "168px", height: "66px", borderRadius: "6.4px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }}>
            <svg style={{ position: "absolute", left: "9.14px", top: "8.23px", width: "4.57px", height: "4.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.57" height="4.57" viewBox="0 0 4.57 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#222222"/></svg>
            <div style={{ position: "absolute", left: "17.37px", top: "8.69px", width: "36.56px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "140.58px", top: "8.69px", width: "18.28px", height: "3.66px", borderRadius: "1.83px", background: "#eeeeee" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "19.31px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "19.31px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "19.31px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "19.31px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "29.48px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "29.48px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "29.48px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "29.48px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "39.66px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "39.66px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "39.66px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "39.66px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "49.83px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "49.83px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "49.83px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "49.83px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "60px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "60px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "60px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "60px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "70.17px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "70.17px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "70.17px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "70.17px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "80.35px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "80.35px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "80.35px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "80.35px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "90.52px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "90.52px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "90.52px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "90.52px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "100.69px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "100.69px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "100.69px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "100.69px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "110.86px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "110.86px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "110.86px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "110.86px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "121.03px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "121.03px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "121.03px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "121.03px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "131.21px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "131.21px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "131.21px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "131.21px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "141.38px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "141.38px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "141.38px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "141.38px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "151.55px", top: "18.28px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "151.55px", top: "28.45px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "151.55px", top: "38.62px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "151.55px", top: "48.8px", width: "7.31px", height: "7.31px", borderRadius: "2.03px", background: "rgba(124, 83, 249, 0.7)" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ChartLineBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Monthly performance</p>
          </div>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Opens, clicks and growth for the month</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Use template</p>
            <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#222222", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Monthly</p>
        </div>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "11.88px 11.88px 11.88px 11.88px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "70px", flexShrink: 0, borderRadius: "9.14px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "29.32px", top: "10.97px", width: "168px", height: "66px", borderRadius: "6.4px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }}>
            <svg style={{ position: "absolute", left: "9.14px", top: "8.23px", width: "4.57px", height: "4.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.57" height="4.57" viewBox="0 0 4.57 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#222222"/></svg>
            <div style={{ position: "absolute", left: "17.37px", top: "8.69px", width: "36.56px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "140.58px", top: "8.69px", width: "18.28px", height: "3.66px", borderRadius: "1.83px", background: "#eeeeee" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "20.57px", width: "22px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "36.62px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "45.31px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "54px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "62.69px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "71.38px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "80.07px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "88.76px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "97.45px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "106.14px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "114.83px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "123.52px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "132.21px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "140.9px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "149.59px", top: "19.2px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "30.63px", width: "22px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "36.62px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "45.31px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "54px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "62.69px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "71.38px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "80.07px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "88.76px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "97.45px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "106.14px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "114.83px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "123.52px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "132.21px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "140.9px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "149.59px", top: "29.26px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "40.69px", width: "22px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "36.62px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "45.31px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "54px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "62.69px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "71.38px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "80.07px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "88.76px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "97.45px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "106.14px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "114.83px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "123.52px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "132.21px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "140.9px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "149.59px", top: "39.32px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "50.75px", width: "22px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "36.62px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "45.31px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "54px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "62.69px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "71.38px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ position: "absolute", left: "80.07px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "88.76px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "97.45px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "106.14px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "114.83px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "123.52px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "132.21px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "140.9px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
            <div style={{ position: "absolute", left: "149.59px", top: "49.38px", width: "6.4px", height: "6.4px", borderRadius: "1.78px", background: "#f5f5f5" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <MegaphoneBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ff9b22", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Sponsor report</p>
          </div>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Impressions and clicks for one sponsor</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Use template</p>
            <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#222222", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Per sponsor</p>
        </div>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "11.88px 11.88px 11.88px 11.88px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "70px", flexShrink: 0, borderRadius: "9.14px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "29.32px", top: "10.97px", width: "168px", height: "66px", borderRadius: "6.4px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }}>
            <svg style={{ position: "absolute", left: "9.14px", top: "8.23px", width: "4.57px", height: "4.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.57" height="4.57" viewBox="0 0 4.57 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#222222"/></svg>
            <div style={{ position: "absolute", left: "17.37px", top: "8.69px", width: "36.56px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "140.58px", top: "8.69px", width: "18.28px", height: "3.66px", borderRadius: "1.83px", background: "#eeeeee" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "47.1px", width: "10.97px", height: "9px", borderRadius: "2.29px", background: "rgba(164, 227, 90, 0.7)" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "39.73px", width: "10.97px", height: "6px", borderRadius: "2.29px", background: "rgba(246, 186, 100, 0.7)" }} />
            <div style={{ position: "absolute", left: "9.14px", top: "34.36px", width: "10.97px", height: "4px", borderRadius: "2.29px", background: "rgba(82, 155, 254, 0.7)" }} />
            <div style={{ position: "absolute", left: "26.48px", top: "45.1px", width: "10.97px", height: "11px", borderRadius: "2.29px", background: "rgba(164, 227, 90, 0.7)" }} />
            <div style={{ position: "absolute", left: "26.48px", top: "37.73px", width: "10.97px", height: "6px", borderRadius: "2.29px", background: "rgba(246, 186, 100, 0.7)" }} />
            <div style={{ position: "absolute", left: "26.48px", top: "32.36px", width: "10.97px", height: "4px", borderRadius: "2.29px", background: "rgba(82, 155, 254, 0.7)" }} />
            <div style={{ position: "absolute", left: "43.83px", top: "46.1px", width: "10.97px", height: "10px", borderRadius: "2.29px", background: "rgba(164, 227, 90, 0.7)" }} />
            <div style={{ position: "absolute", left: "43.83px", top: "39.73px", width: "10.97px", height: "5px", borderRadius: "2.29px", background: "rgba(246, 186, 100, 0.7)" }} />
            <div style={{ position: "absolute", left: "43.83px", top: "35.36px", width: "10.97px", height: "3px", borderRadius: "2.29px", background: "rgba(82, 155, 254, 0.7)" }} />
            <div style={{ position: "absolute", left: "61.17px", top: "44.1px", width: "10.97px", height: "12px", borderRadius: "2.29px", background: "rgba(164, 227, 90, 0.7)" }} />
            <div style={{ position: "absolute", left: "61.17px", top: "35.73px", width: "10.97px", height: "7px", borderRadius: "2.29px", background: "rgba(246, 186, 100, 0.7)" }} />
            <div style={{ position: "absolute", left: "61.17px", top: "29.36px", width: "10.97px", height: "5px", borderRadius: "2.29px", background: "rgba(82, 155, 254, 0.7)" }} />
            <div style={{ position: "absolute", left: "78.52px", top: "43.1px", width: "10.97px", height: "13px", borderRadius: "2.29px", background: "rgba(164, 227, 90, 0.7)" }} />
            <div style={{ position: "absolute", left: "78.52px", top: "34.73px", width: "10.97px", height: "7px", borderRadius: "2.29px", background: "rgba(246, 186, 100, 0.7)" }} />
            <div style={{ position: "absolute", left: "78.52px", top: "28.36px", width: "10.97px", height: "5px", borderRadius: "2.29px", background: "rgba(82, 155, 254, 0.7)" }} />
            <div style={{ position: "absolute", left: "95.86px", top: "42.1px", width: "10.97px", height: "14px", borderRadius: "2.29px", background: "rgba(164, 227, 90, 0.7)" }} />
            <div style={{ position: "absolute", left: "95.86px", top: "32.73px", width: "10.97px", height: "8px", borderRadius: "2.29px", background: "rgba(246, 186, 100, 0.7)" }} />
            <div style={{ position: "absolute", left: "95.86px", top: "26.36px", width: "10.97px", height: "5px", borderRadius: "2.29px", background: "rgba(82, 155, 254, 0.7)" }} />
            <div style={{ position: "absolute", left: "113.2px", top: "43.1px", width: "10.97px", height: "13px", borderRadius: "2.29px", background: "rgba(164, 227, 90, 0.7)" }} />
            <div style={{ position: "absolute", left: "113.2px", top: "32.73px", width: "10.97px", height: "9px", borderRadius: "2.29px", background: "rgba(246, 186, 100, 0.7)" }} />
            <div style={{ position: "absolute", left: "113.2px", top: "25.36px", width: "10.97px", height: "6px", borderRadius: "2.29px", background: "rgba(82, 155, 254, 0.7)" }} />
            <div style={{ position: "absolute", left: "130.55px", top: "40.1px", width: "10.97px", height: "16px", borderRadius: "2.29px", background: "#a4e35a" }} />
            <div style={{ position: "absolute", left: "130.55px", top: "30.73px", width: "10.97px", height: "8px", borderRadius: "2.29px", background: "rgba(246, 186, 100, 0.7)" }} />
            <div style={{ position: "absolute", left: "130.55px", top: "23.36px", width: "10.97px", height: "6px", borderRadius: "2.29px", background: "rgba(82, 155, 254, 0.7)" }} />
            <div style={{ position: "absolute", left: "147.89px", top: "39.1px", width: "10.97px", height: "17px", borderRadius: "2.29px", background: "#a4e35a" }} />
            <div style={{ position: "absolute", left: "147.89px", top: "28.73px", width: "10.97px", height: "9px", borderRadius: "2.29px", background: "rgba(246, 186, 100, 0.7)" }} />
            <div style={{ position: "absolute", left: "147.89px", top: "20.36px", width: "10.97px", height: "7px", borderRadius: "2.29px", background: "rgba(82, 155, 254, 0.7)" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <MoneybagBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#18b170", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Revenue summary</p>
          </div>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Paid, sponsorship and product revenue</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Use template</p>
            <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#222222", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Monthly</p>
        </div>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "11.88px 11.88px 11.88px 11.88px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "70px", flexShrink: 0, borderRadius: "9.14px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "29.32px", top: "10.97px", width: "168px", height: "66px", borderRadius: "6.4px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }}>
            <svg style={{ position: "absolute", left: "9.14px", top: "8.23px", width: "4.57px", height: "4.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.57" height="4.57" viewBox="0 0 4.57 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#222222"/></svg>
            <div style={{ position: "absolute", left: "17.37px", top: "8.69px", width: "36.56px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "140.58px", top: "8.69px", width: "18.28px", height: "3.66px", borderRadius: "1.83px", background: "#eeeeee" }} />
            <svg style={{ position: "absolute", left: "9.14px", top: "19.66px", width: "4.57px", height: "4.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.57" height="4.57" viewBox="0 0 4.57 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#7c53f9"/></svg>
            <div style={{ position: "absolute", left: "17.37px", top: "20.11px", width: "22px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "44.85px", top: "19.2px", width: "114.01px", height: "5.48px", borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "70.69px", height: "5.48px", borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <svg style={{ position: "absolute", left: "9.14px", top: "29.72px", width: "4.57px", height: "4.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.57" height="4.57" viewBox="0 0 4.57 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#4d98fe"/></svg>
            <div style={{ position: "absolute", left: "17.37px", top: "30.17px", width: "22px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "44.85px", top: "29.26px", width: "114.01px", height: "5.48px", borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "27.36px", height: "5.48px", borderRadius: "2.74px", background: "rgba(77, 152, 254, 0.7)" }} />
            </div>
            <svg style={{ position: "absolute", left: "9.14px", top: "39.78px", width: "4.57px", height: "4.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.57" height="4.57" viewBox="0 0 4.57 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#ff9b22"/></svg>
            <div style={{ position: "absolute", left: "17.37px", top: "40.23px", width: "22px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "44.85px", top: "39.32px", width: "114.01px", height: "5.48px", borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "11.4px", height: "5.48px", borderRadius: "2.74px", background: "rgba(255, 155, 34, 0.7)" }} />
            </div>
            <svg style={{ position: "absolute", left: "9.14px", top: "49.84px", width: "4.57px", height: "4.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.57" height="4.57" viewBox="0 0 4.57 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#e5484d"/></svg>
            <div style={{ position: "absolute", left: "17.37px", top: "50.29px", width: "22px", height: "3.66px", borderRadius: "1.83px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "44.85px", top: "49.38px", width: "114.01px", height: "5.48px", borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "4.56px", height: "5.48px", borderRadius: "2.74px", background: "rgba(229, 72, 77, 0.7)" }} />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <UsersBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Audience health</p>
          </div>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Engagement tiers and churn risk</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Use template</p>
            <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#222222", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Monthly</p>
        </div>
      </div>
    </div>
  );
}
