// Guide grid (mailpulse, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ClockBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 0 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 7V12L15 15\"/></g>");
const CurrencyDollarBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2\" /><path d=\"M12 3v3m0 12v3\" /></g>");
const GitMergeBulk = icon("<path d=\"M5 18A2 2 0 1 0 9 18 2 2 0 1 0 5 18\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M5 6A2 2 0 1 0 9 6 2 2 0 1 0 5 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M15 12A2 2 0 1 0 19 12 2 2 0 1 0 15 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M7 8l0 8\" /><path d=\"M7 8a4 4 0 0 0 4 4h4\" /></g>");
const MailCheckBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6\" /><path d=\"M3 7l9 6l9 -6\" /><path d=\"M15 19l2 2l4 -4\" /></g>");
const MegaphoneBulk = icon("<path d=\"M11 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4V16A1 1 0 0 1 19.4 16.8 13 13 0 0 0 11 14H5A2 2 0 0 1 3 12V8A2 2 0 0 1 5 6Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 6V14\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 14A12 12 0 0 0 8.4 21.2 2 2 0 0 0 11.600000000000001 18.8 8 8 0 0 1 10 14\"/></g>");
const RocketBulk = icon("<path d=\"M4 13A8 8 0 0 1 11 20 6 6 0 0 0 14 15 9 9 0 0 0 20 7 3 3 0 0 0 17 4 9 9 0 0 0 9 10 6 6 0 0 0 4 13\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 14A6 6 0 0 0 4 20 6 6 0 0 0 10 17\"/><path d=\"M14 9A1 1 0 1 0 16 9 1 1 0 1 0 14 9\"/></g>");
const TypographyBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 20l3 0\" /><path d=\"M14 20l7 0\" /><path d=\"M6.9 15l6.9 0\" /><path d=\"M10.2 6.3l5.8 13.7\" /><path d=\"M5 20l6 -16l2 0l7 16\" /></g>");

export function GuideGrid() {
  return (
    <div style={{ width: "689.07px", height: "409.87px", display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "12.79px", columnGap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "221.16px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "78px", flexShrink: 0, background: "rgba(124, 83, 249, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <TypographyBulk size={28} style={{ width: "28px", height: "28px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12.79px 12.79px 9.14px 12.79px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#7c53f9", letterSpacing: "0.02em", textTransform: "uppercase" }}>Writing</p>
          <p style={{ width: "195.58px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222", lineHeight: "1.2999999523162842", letterSpacing: "-0.01em" }}>Write subject lines people open</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "10.05px 12.79px 9.14px 12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "20.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ClockBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>6 min read</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "54.83px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "54.83px", height: "4.57px", borderRadius: "2.29px", background: "rgba(21, 179, 146, 0.7)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#15b392" }}>Done</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "221.16px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "78px", flexShrink: 0, background: "rgba(21, 179, 146, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <RocketBulk size={28} style={{ width: "28px", height: "28px", flexShrink: 0, color: "#15b392", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12.79px 12.79px 9.14px 12.79px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#15b392", letterSpacing: "0.02em", textTransform: "uppercase" }}>Growth</p>
          <p style={{ width: "195.58px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222", lineHeight: "1.2999999523162842", letterSpacing: "-0.01em" }}>Grow with a referral program</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "10.05px 12.79px 9.14px 12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "20.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ClockBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>9 min read</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "54.83px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "21.93px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>40%</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "221.16px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "78px", flexShrink: 0, background: "rgba(255, 155, 34, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CurrencyDollarBulk size={28} style={{ width: "28px", height: "28px", flexShrink: 0, color: "#ff9b22", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12.79px 12.79px 9.14px 12.79px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#ff9b22", letterSpacing: "0.02em", textTransform: "uppercase" }}>Monetization</p>
          <p style={{ width: "195.58px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222", lineHeight: "1.2999999523162842", letterSpacing: "-0.01em" }}>Price your paid tier</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "10.05px 12.79px 9.14px 12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "20.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ClockBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>12 min read</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f4f0ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#7c53f9"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#7c53f9", lineHeight: "1.4600000381469727" }}>New</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "221.16px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "78px", flexShrink: 0, background: "rgba(77, 152, 254, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <MailCheckBulk size={28} style={{ width: "28px", height: "28px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12.79px 12.79px 9.14px 12.79px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4d98fe", letterSpacing: "0.02em", textTransform: "uppercase" }}>Deliverability</p>
          <p style={{ width: "195.58px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222", lineHeight: "1.2999999523162842", letterSpacing: "-0.01em" }}>Fix spam-folder placement</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "10.05px 12.79px 9.14px 12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "20.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ClockBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>8 min read</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "54.83px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "0.01px", height: "4.57px", borderRadius: "2.29px", background: "#7c53f9" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>0%</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "221.16px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "78px", flexShrink: 0, background: "rgba(124, 83, 249, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <GitMergeBulk size={28} style={{ width: "28px", height: "28px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12.79px 12.79px 9.14px 12.79px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#7c53f9", letterSpacing: "0.02em", textTransform: "uppercase" }}>Automation</p>
          <p style={{ width: "195.58px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222", lineHeight: "1.2999999523162842", letterSpacing: "-0.01em" }}>Build a welcome series</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "10.05px 12.79px 9.14px 12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "20.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ClockBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>10 min read</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "54.83px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "38.38px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>70%</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "221.16px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "78px", flexShrink: 0, background: "rgba(255, 155, 34, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <MegaphoneBulk size={28} style={{ width: "28px", height: "28px", flexShrink: 0, color: "#ff9b22", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12.79px 12.79px 9.14px 12.79px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#ff9b22", letterSpacing: "0.02em", textTransform: "uppercase" }}>Monetization</p>
          <p style={{ width: "195.58px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222", lineHeight: "1.2999999523162842", letterSpacing: "-0.01em" }}>Sell sponsorships that renew</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "10.05px 12.79px 9.14px 12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "20.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ClockBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>7 min read</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f4f0ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#7c53f9"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#7c53f9", lineHeight: "1.4600000381469727" }}>New</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
