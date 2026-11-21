// Campaign report drawer (mailpulse, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const LinkBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 15l6 -6\" /><path d=\"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464\" /><path d=\"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463\" /></g>");
const MoneybagBulk = icon("<path d=\"M4 17V16A8 8 0 1 1 20 16V17A4 4 0 0 1 16 21H8A4 4 0 0 1 4 17\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 3H14.5A1.5 1.5 0 0 1 16 4.5 3.5 3.5 0 0 1 12.5 8H11.5A3.5 3.5 0 0 1 8 4.5 1.5 1.5 0 0 1 9.5 3\"/></g>");
const NewsBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11\" /><path d=\"M8 8l4 0\" /><path d=\"M8 12l4 0\" /><path d=\"M8 16l4 0\" /></g>");
const ArrowUpRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 7l-10 10\" /><path d=\"M8 7l9 0l0 9\" /></g>");
const ChartLine = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19l16 0\" /><path d=\"M4 15l4 -6l4 2l4 -5l4 4\" /></g>");
const Send = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14l11 -11\" /><path d=\"M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function CampaignReportDrawer() {
  return (
    <div style={{ width: "460px", height: "909.08px", borderRadius: "14.62px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e3e3e3, 0px 21.93px 43.87px -10.97px rgba(13, 13, 18, 0.16)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "16.45px 16.45px 12.79px 16.45px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "32.9px", height: "32.9px", flexShrink: 0, borderRadius: "8.23px", background: "rgba(124, 83, 249, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <NewsBulk size={18.3} style={{ width: "18.28px", height: "18.28px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "194px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#000000" }}>Weekly Creator Brief #52</p>
            <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Sent</p>
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "269px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Sent Mon, Dec 22 · 9:00 AM to All subscribers</p>
        </div>
        <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", gap: "18.28px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, boxShadow: "inset 0 -1.83px 0 0 #000000", display: "flex", flexDirection: "row", padding: "9.14px 0px 10.97px 0px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Overview</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.14px 0px 9.14px 0px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#989898" }}>Links</p>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>14</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.14px 0px 9.14px 0px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#989898" }}>Recipients</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.14px 0px 9.14px 0px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#989898" }}>Revenue</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14.62px 16.45px 14.62px 16.45px", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "9.14px", columnGap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "208px", flexShrink: 0, borderRadius: "9.14px", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "11.88px 13.7px 11.88px 13.7px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Delivered</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>99.6%</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020" }}>17,764</p>
              <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.2 2.799)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#15b392"/><path transform="matrix(1 0 0 1 8.396 2.799)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#15b392"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#15b392", lineHeight: "1.350000023841858" }}>+0.2%</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "208px", flexShrink: 0, borderRadius: "9.14px", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "11.88px 13.7px 11.88px 13.7px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Opened</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>45.0%</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020" }}>8,024</p>
              <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#fff1f1", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 -1 1.2 9.996)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#e5484d"/><path transform="matrix(1 0 0 -1 8.396 9.996)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#e5484d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#e5484d", lineHeight: "1.350000023841858" }}>-2.8%</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "208px", flexShrink: 0, borderRadius: "9.14px", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "11.88px 13.7px 11.88px 13.7px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Clicked</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>17.9%</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020" }}>3,186</p>
              <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.2 2.799)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#15b392"/><path transform="matrix(1 0 0 1 8.396 2.799)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#15b392"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#15b392", lineHeight: "1.350000023841858" }}>+1.1%</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "208px", flexShrink: 0, borderRadius: "9.14px", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "11.88px 13.7px 11.88px 13.7px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Unsubscribed</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>0.1%</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020" }}>18</p>
              <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 -1 1.2 9.996)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#15b392"/><path transform="matrix(1 0 0 -1 8.396 9.996)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#15b392"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#15b392", lineHeight: "1.350000023841858" }}>-0.04%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "183px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Opens in the first 24 hours</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "215px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>61% opened within 3 hours of sending.</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5" }} />
              <div style={{ width: "13.71px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
          </div>
          <div style={{ width: "413.22px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>9 AM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>3 PM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>9 PM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>3 AM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>9 AM</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Top links</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <LinkBulk size={13.7} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>notion.so/creator-templates</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>1,204 clicks</p>
            </div>
            <div style={{ alignSelf: "stretch", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "427.1px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <LinkBulk size={13.7} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>mailpulse.co/referrals</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>842 clicks</p>
            </div>
            <div style={{ alignSelf: "stretch", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "292.23px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <LinkBulk size={13.7} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>youtube.com/@creatorbrief</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>511 clicks</p>
            </div>
            <div style={{ alignSelf: "stretch", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "179.83px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "11.88px 13.7px 11.88px 13.7px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(45, 212, 17, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <MoneybagBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#2dd411", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "143px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>$412 attributed revenue</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "234px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>6 readers upgraded to Paid within 72 hours</p>
          </div>
          <ArrowUpRight size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#989898", display: "block" }} />
        </div>
      </div>
      <div style={{ flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "13.7px 16.45px 12.79px 16.45px", gap: "9.14px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Send size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "137px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Resend to non-openers</p>
        </div>
        <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "91.39px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.31px 10.97px 7.31px 10.97px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ChartLine size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff" }}>Full report</p>
          </div>
        </div>
      </div>
    </div>
  );
}
