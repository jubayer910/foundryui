// Revenue over time (mailpulse, Charts) from Ingot UI (ingotui.com).
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

export function RevenueOverTime() {
  return (
    <div style={{ width: "689.07px", height: "319.86px", display: "flex", flexDirection: "column", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "689.07px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Revenue over time</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Monthly revenue by source, 2026.</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Calendar size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Monthly</p>
          <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "18.28px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "9.14px", height: "9.14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.14" height="9.14" viewBox="0 0 9.14 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 C9.14 7.09394 7.09394 9.14 4.57 9.14 C2.04606 9.14 0 7.09394 0 4.57 C0 2.04606 2.04606 0 4.57 0 C7.09394 0 9.14 2.04606 9.14 4.57 Z" fill="#a4e35a"/><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 L8.92 4.57 C8.92 6.97244 6.97244 8.92 4.57 8.92 L4.57 9.14 L4.57 9.36 C7.21544 9.36 9.36 7.21544 9.36 4.57 L9.14 4.57 Z M4.57 9.14 L4.57 8.92 C2.16756 8.92 0.22 6.97244 0.22 4.57 L0 4.57 L-0.22 4.57 C-0.22 7.21544 1.92456 9.36 4.57 9.36 L4.57 9.14 Z M0 4.57 L0.22 4.57 C0.22 2.16756 2.16756 0.22 4.57 0.22 L4.57 0 L4.57 -0.22 C1.92456 -0.22 -0.22 1.92456 -0.22 4.57 L0 4.57 Z M4.57 0 L4.57 0.22 C6.97244 0.22 8.92 2.16756 8.92 4.57 L9.14 4.57 L9.36 4.57 C9.36 1.92456 7.21544 -0.22 4.57 -0.22 L4.57 0 Z" fill="#d6d6d6"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Paid subscriptions</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "9.14px", height: "9.14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.14" height="9.14" viewBox="0 0 9.14 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 C9.14 7.09394 7.09394 9.14 4.57 9.14 C2.04606 9.14 0 7.09394 0 4.57 C0 2.04606 2.04606 0 4.57 0 C7.09394 0 9.14 2.04606 9.14 4.57 Z" fill="#f6ba64"/><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 L8.92 4.57 C8.92 6.97244 6.97244 8.92 4.57 8.92 L4.57 9.14 L4.57 9.36 C7.21544 9.36 9.36 7.21544 9.36 4.57 L9.14 4.57 Z M4.57 9.14 L4.57 8.92 C2.16756 8.92 0.22 6.97244 0.22 4.57 L0 4.57 L-0.22 4.57 C-0.22 7.21544 1.92456 9.36 4.57 9.36 L4.57 9.14 Z M0 4.57 L0.22 4.57 C0.22 2.16756 2.16756 0.22 4.57 0.22 L4.57 0 L4.57 -0.22 C1.92456 -0.22 -0.22 1.92456 -0.22 4.57 L0 4.57 Z M4.57 0 L4.57 0.22 C6.97244 0.22 8.92 2.16756 8.92 4.57 L9.14 4.57 L9.36 4.57 C9.36 1.92456 7.21544 -0.22 4.57 -0.22 L4.57 0 Z" fill="#d6d6d6"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Sponsorships</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "9.14px", height: "9.14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.14" height="9.14" viewBox="0 0 9.14 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 C9.14 7.09394 7.09394 9.14 4.57 9.14 C2.04606 9.14 0 7.09394 0 4.57 C0 2.04606 2.04606 0 4.57 0 C7.09394 0 9.14 2.04606 9.14 4.57 Z" fill="#529bfe"/><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 L8.92 4.57 C8.92 6.97244 6.97244 8.92 4.57 8.92 L4.57 9.14 L4.57 9.36 C7.21544 9.36 9.36 7.21544 9.36 4.57 L9.14 4.57 Z M4.57 9.14 L4.57 8.92 C2.16756 8.92 0.22 6.97244 0.22 4.57 L0 4.57 L-0.22 4.57 C-0.22 7.21544 1.92456 9.36 4.57 9.36 L4.57 9.14 Z M0 4.57 L0.22 4.57 C0.22 2.16756 2.16756 0.22 4.57 0.22 L4.57 0 L4.57 -0.22 C1.92456 -0.22 -0.22 1.92456 -0.22 4.57 L0 4.57 Z M4.57 0 L4.57 0.22 C6.97244 0.22 8.92 2.16756 8.92 4.57 L9.14 4.57 L9.36 4.57 C9.36 1.92456 7.21544 -0.22 4.57 -0.22 L4.57 0 Z" fill="#d6d6d6"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Digital products</p>
        </div>
      </div>
      <div style={{ width: "689.07px", height: "237.62px", flexShrink: 0, position: "relative" }}>
        <svg style={{ position: "absolute", left: "46px", top: "8.5px", width: "643.07px", height: "0px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.07" height="1" viewBox="0 0 643.07 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.0700073242188 0" fill="none" stroke="#eeeeee" strokeWidth="0.9100000262260437" strokeDasharray="3.6600000858306885 3.6600000858306885" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>$10k</p>
        <svg style={{ position: "absolute", left: "46px", top: "59.38px", width: "643.07px", height: "0px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.07" height="1" viewBox="0 0 643.07 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.0700073242188 0" fill="none" stroke="#eeeeee" strokeWidth="0.9100000262260437" strokeDasharray="3.6600000858306885 3.6600000858306885" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "50.88px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>$7.5k</p>
        <svg style={{ position: "absolute", left: "46px", top: "110.27px", width: "643.07px", height: "0px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.07" height="1" viewBox="0 0 643.07 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.0700073242188 0" fill="none" stroke="#eeeeee" strokeWidth="0.9100000262260437" strokeDasharray="3.6600000858306885 3.6600000858306885" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "101.77px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>$5k</p>
        <svg style={{ position: "absolute", left: "46px", top: "161.15px", width: "643.07px", height: "0px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.07" height="1" viewBox="0 0 643.07 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.0700073242188 0" fill="none" stroke="#eeeeee" strokeWidth="0.9100000262260437" strokeDasharray="3.6600000858306885 3.6600000858306885" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "152.65px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>$2.5k</p>
        <div style={{ position: "absolute", left: "46px", top: "212.03px", width: "643.07px", height: "0.91px", background: "#eeeeee" }} />
        <p style={{ position: "absolute", left: "0px", top: "203.53px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>$0</p>
        <div style={{ position: "absolute", left: "57.79px", top: "128.58px", width: "30px", height: "83.45px" }}>
          <div style={{ position: "absolute", left: "0px", top: "31.49px", width: "30px", height: "51.95px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "11.14px", width: "30px", height: "17.61px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "8.4px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
        </div>
        <p style={{ position: "absolute", left: "61.29px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Jan</p>
        <div style={{ position: "absolute", left: "111.38px", top: "125.73px", width: "30px", height: "86.3px" }}>
          <div style={{ position: "absolute", left: "0px", top: "31.09px", width: "30px", height: "55.21px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "12.77px", width: "30px", height: "15.58px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "10.03px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
        </div>
        <p style={{ position: "absolute", left: "115.38px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Feb</p>
        <div style={{ position: "absolute", left: "164.97px", top: "117.19px", width: "30px", height: "94.84px" }}>
          <div style={{ position: "absolute", left: "0px", top: "34.95px", width: "30px", height: "59.89px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "10.53px", width: "30px", height: "21.68px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "7.79px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
        </div>
        <p style={{ position: "absolute", left: "168.47px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Mar</p>
        <div style={{ position: "absolute", left: "218.56px", top: "113.32px", width: "30px", height: "98.71px" }}>
          <div style={{ position: "absolute", left: "0px", top: "35.36px", width: "30px", height: "63.35px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "13.99px", width: "30px", height: "18.63px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "11.25px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
        </div>
        <p style={{ position: "absolute", left: "223.06px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Apr</p>
        <div style={{ position: "absolute", left: "272.15px", top: "102.94px", width: "30px", height: "109.09px" }}>
          <div style={{ position: "absolute", left: "0px", top: "40.85px", width: "30px", height: "68.24px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "12.36px", width: "30px", height: "25.75px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "9.62px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
        </div>
        <p style={{ position: "absolute", left: "274.65px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>May</p>
        <div style={{ position: "absolute", left: "325.74px", top: "98.87px", width: "30px", height: "113.16px" }}>
          <div style={{ position: "absolute", left: "0px", top: "41.06px", width: "30px", height: "72.1px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "15.62px", width: "30px", height: "22.7px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "12.88px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
        </div>
        <p style={{ position: "absolute", left: "329.24px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Jun</p>
        <div style={{ position: "absolute", left: "379.33px", top: "91.95px", width: "30px", height: "120.08px" }}>
          <div style={{ position: "absolute", left: "0px", top: "44.31px", width: "30px", height: "75.77px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "13.79px", width: "30px", height: "27.79px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "11.05px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
        </div>
        <p style={{ position: "absolute", left: "384.83px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Jul</p>
        <div style={{ position: "absolute", left: "432.92px", top: "89.1px", width: "30px", height: "122.93px" }}>
          <div style={{ position: "absolute", left: "0px", top: "43.3px", width: "30px", height: "79.63px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "16.84px", width: "30px", height: "23.72px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "14.1px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
        </div>
        <p style={{ position: "absolute", left: "435.92px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Aug</p>
        <div style={{ position: "absolute", left: "486.51px", top: "73.22px", width: "30px", height: "138.81px" }}>
          <div style={{ position: "absolute", left: "0px", top: "53.68px", width: "30px", height: "85.13px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "18.06px", width: "30px", height: "32.88px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "15.32px", borderRadius: "4.57px", background: "#529bfe" }} />
        </div>
        <p style={{ position: "absolute", left: "489.51px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Sep</p>
        <div style={{ position: "absolute", left: "540.1px", top: "65.9px", width: "30px", height: "146.13px" }}>
          <div style={{ position: "absolute", left: "0px", top: "55.51px", width: "30px", height: "90.63px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "16.84px", width: "30px", height: "35.93px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "14.1px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
        </div>
        <p style={{ position: "absolute", left: "544.1px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Oct</p>
        <div style={{ position: "absolute", left: "593.69px", top: "49.21px", width: "30px", height: "162.82px" }}>
          <div style={{ position: "absolute", left: "0px", top: "63.85px", width: "30px", height: "98.97px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "22.13px", width: "30px", height: "38.98px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "19.39px", borderRadius: "4.57px", background: "#529bfe" }} />
        </div>
        <p style={{ position: "absolute", left: "596.69px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Nov</p>
        <div style={{ position: "absolute", left: "647.28px", top: "39.84px", width: "30px", height: "172.19px" }}>
          <div style={{ position: "absolute", left: "0px", top: "66.91px", width: "30px", height: "105.28px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
          <div style={{ position: "absolute", left: "0px", top: "22.54px", width: "30px", height: "41.63px", borderRadius: "4.57px", background: "#f6ba64" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "19.8px", borderRadius: "4.57px", background: "#529bfe" }} />
        </div>
        <p style={{ position: "absolute", left: "650.28px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec</p>
      </div>
    </div>
  );
}
