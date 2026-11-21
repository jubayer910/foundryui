// Transactions table (mailpulse, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");

export function TransactionsTable() {
  return (
    <div style={{ width: "1072.91px", height: "296.99px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "1072.91px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "300px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Customer</p>
        </div>
        <div style={{ width: "150px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Type</p>
        </div>
        <div style={{ width: "220px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Item</p>
        </div>
        <div style={{ width: "120px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Amount</p>
        </div>
        <div style={{ width: "120px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Date</p>
        </div>
        <div style={{ width: "120px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Status</p>
        </div>
        <div style={{ width: "42.91px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, height: "17px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
        </div>
      </div>
      <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "300px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(124, 83, 249, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#7c53f9" }}>MC</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Maya Chen</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>maya@mayachen.studio</p>
            </div>
          </div>
        </div>
        <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Subscription</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Annual plan</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>$36.00</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 22 · 9:41 AM</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Paid</p>
          </div>
        </div>
        <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "300px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={14.6} height={14.6} viewBox="0 0 24 24" style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }}><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="currentColor" /></svg>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Notion</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>partnerships@notion.so</p>
            </div>
          </div>
        </div>
        <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f4f0ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#7c53f9"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "65px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#7c53f9", lineHeight: "1.4600000381469727" }}>Sponsorship</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Sponsor Spotlight, Dec 26</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>$1,200.00</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 21 · 4:05 PM</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#fff8eb", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#c27c0e"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#c27c0e", lineHeight: "1.4600000381469727" }}>Pending</p>
          </div>
        </div>
        <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "300px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(255, 155, 34, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#ff9b22" }}>LW</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Liam Walker</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>liam.walker@hey.com</p>
            </div>
          </div>
        </div>
        <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#4e57ed"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed", lineHeight: "1.4600000381469727" }}>Product</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Creator Kit 2027</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>$29.00</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 21 · 11:18 AM</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Paid</p>
          </div>
        </div>
        <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "300px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#4d98fe" }}>HS</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Hana Sato</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>hana.sato@fastmail.com</p>
            </div>
          </div>
        </div>
        <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Subscription</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Founding plan</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>$81.00</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 20 · 8:02 PM</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Paid</p>
          </div>
        </div>
        <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "300px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(45, 212, 17, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#2dd411" }}>DO</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Daniel Okafor</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>d.okafor@gmail.com</p>
            </div>
          </div>
        </div>
        <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Subscription</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Monthly plan</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>$5.00</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 19 · 7:26 AM</p>
        </div>
        <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#e5484d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e5484d", lineHeight: "1.4600000381469727" }}>Refunded</p>
          </div>
        </div>
        <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
        </div>
      </div>
    </div>
  );
}
