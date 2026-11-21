// Settings content (mailpulse, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const Send = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14l11 -11\" /><path d=\"M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5\" /></g>");
const UserPlus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\" /></g>");
const CircleCheckBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 1 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 12L11 14 15 10\"/></g>");
const MailBulk = icon("<path d=\"M3 7A2 2 0 0 1 5 5H19A2 2 0 0 1 21 7V17A2 2 0 0 1 19 19H5A2 2 0 0 1 3 17V7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7L12 13 21 7\"/></g>");

export function SettingsContent() {
  return (
    <div style={{ width: "814.28px", height: "721.21px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "814.28px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Team</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>4 of 5 seats used</p>
            <div style={{ width: "109.67px", height: "5.48px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "87.74px", height: "5.48px", borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            </div>
          </div>
        </div>
        <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <UserPlus size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "93px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Invite members</p>
        </div>
      </div>
      <div style={{ width: "814.28px", height: "14.62px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ width: "814.28px", flexShrink: 0, borderRadius: "10.97px", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "814.28px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "814.28px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Member</p>
            </div>
            <div style={{ width: "160px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Role</p>
            </div>
            <div style={{ width: "140px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Last active</p>
            </div>
            <div style={{ width: "120px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>2FA</p>
            </div>
            <div style={{ width: "64.28px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, height: "17px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
          <div style={{ width: "814.28px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "12.8px", background: "rgba(124, 83, 249, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.24px", fontWeight: 500, color: "#7c53f9" }}>AM</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Alex Morgan</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>alex@creatorbrief.co</p>
                </div>
              </div>
            </div>
            <div style={{ width: "160px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "4.57px 6.39px 4.57px 9.13px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Owner</p>
                <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "140px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48 2.74 C5.48 4.25326 4.25326 5.48 2.74 5.48 C1.22674 5.48 0 4.25326 0 2.74 C0 1.22674 1.22674 0 2.74 0 C4.25326 0 5.48 1.22674 5.48 2.74 Z" fill="#15b392"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Now</p>
              </div>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>On</p>
              </div>
            </div>
            <div style={{ width: "64.28px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "814.28px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "12.8px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.24px", fontWeight: 500, color: "#4d98fe" }}>PN</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Priya Nair</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>priya@creatorbrief.co</p>
                </div>
              </div>
            </div>
            <div style={{ width: "160px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "4.57px 6.39px 4.57px 9.13px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Admin</p>
                <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "140px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>2h ago</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>On</p>
              </div>
            </div>
            <div style={{ width: "64.28px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "814.28px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "12.8px", background: "rgba(255, 155, 34, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.24px", fontWeight: 500, color: "#ff9b22" }}>SR</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Sam Rivera</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>sam@creatorbrief.co</p>
                </div>
              </div>
            </div>
            <div style={{ width: "160px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "4.57px 6.39px 4.57px 9.13px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Editor</p>
                <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "140px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Yesterday</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#fff8eb", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#c27c0e"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#c27c0e", lineHeight: "1.4600000381469727" }}>Off</p>
              </div>
            </div>
            <div style={{ width: "64.28px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "814.28px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "12.8px", background: "rgba(21, 179, 146, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.24px", fontWeight: 500, color: "#15b392" }}>JL</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Jordan Lee</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>jordan@studio.co</p>
                </div>
              </div>
            </div>
            <div style={{ width: "160px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "4.57px 6.39px 4.57px 9.13px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Analyst</p>
                <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "140px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 18</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>On</p>
              </div>
            </div>
            <div style={{ width: "64.28px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "814.28px", height: "23.76px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Pending invites</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "301px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Invites expire after 7 days. Pending invites hold a seat.</p>
      </div>
      <div style={{ width: "814.28px", height: "10.97px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ width: "814.28px", height: "49.35px", flexShrink: 0, borderRadius: "10.97px", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "330px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "12.79px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <MailBulk size={11.9} style={{ width: "11.88px", height: "11.88px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>lena@creatorbrief.co</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>Invited by Alex Morgan</p>
            </div>
          </div>
        </div>
        <div style={{ width: "160px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Editor</p>
        </div>
        <div style={{ width: "140px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Sent 2 days ago</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#989898" }}>Revoke</p>
          <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Send size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Resend</p>
          </div>
        </div>
      </div>
      <div style={{ width: "814.28px", height: "23.76px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "153px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>What each role can do</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "341px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Owners can do everything, including deleting the workspace.</p>
      </div>
      <div style={{ width: "814.28px", height: "10.97px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ width: "814.28px", flexShrink: 0, borderRadius: "10.97px", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "814.28px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "814.28px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Permission</p>
            </div>
            <div style={{ width: "121.07px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Admin</p>
            </div>
            <div style={{ width: "121.07px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Editor</p>
            </div>
            <div style={{ width: "121.07px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Analyst</p>
            </div>
            <div style={{ width: "121.07px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Billing</p>
            </div>
          </div>
          <div style={{ width: "814.28px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "136px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Write and send campaigns</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
          </div>
          <div style={{ width: "814.28px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "168px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Manage subscribers and imports</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
          </div>
          <div style={{ width: "814.28px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "136px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>View reports and analytics</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
          </div>
          <div style={{ width: "814.28px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "177px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Manage team and sending domain</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
          </div>
          <div style={{ width: "814.28px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "330px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Invoices and plan</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c4" }}>—</p>
            </div>
            <div style={{ width: "121.07px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
