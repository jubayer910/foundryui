// Settings panel (mailpulse, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AlertTriangleBulk = icon("<path d=\"M10.363 3.591L2.2569999999999997 17.125A1.914 1.914 0 0 0 3.893 19.996H20.107A1.914 1.914 0 0 0 21.743 17.125999999999998L13.636999999999999 3.589999999999998A1.914 1.914 0 0 0 10.363 3.589999999999998\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 9V13\"/><path d=\"M12 16H12.01\"/></g>");
const CircleCheckBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 1 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 12L11 14 15 10\"/></g>");
const CrownBulk = icon("<path d=\"M12 6L16 12 21 8 19 18H5L3 8 8 12 12 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const SparklesBulk = icon("<path d=\"M9 18A6 6 0 0 1 15 12 6 6 0 0 1 9 6 6 6 0 0 1 3 12 6 6 0 0 1 9 18\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 18A2 2 0 0 1 18 20 2 2 0 0 1 20 18 2 2 0 0 1 18 16 2 2 0 0 1 16 18\"/><path d=\"M16 6A2 2 0 0 1 18 8 2 2 0 0 1 20 6 2 2 0 0 1 18 4 2 2 0 0 1 16 6\"/></g>");
const UsersBulk = icon("<path d=\"M5 7A4 4 0 1 0 13 7 4 4 0 1 0 5 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21V19A4 4 0 0 1 7 15H11A4 4 0 0 1 15 19V21\"/><path d=\"M16 3.13A4 4 0 0 1 16 10.879999999999999\"/><path d=\"M21 21V19A4 4 0 0 0 18 15.15\"/></g>");
const WorldBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 0 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.6 9H20.400000000000002\"/><path d=\"M3.6 15H20.400000000000002\"/><path d=\"M11.5 3A17 17 0 0 0 11.5 21\"/><path d=\"M12.5 3A17 17 0 0 1 12.5 21\"/></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");

export function SettingsPanel() {
  return (
    <div style={{ width: "330.91px", height: "787.58px", background: "#ffffff", boxShadow: "inset 0.91px 0 0 0 #eeeeee", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 0px 0px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", gap: "18.28px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, boxShadow: "inset 0 -1.83px 0 0 #000000", display: "flex", flexDirection: "row", padding: "9.14px 0px 10.97px 0px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Email</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.14px 0px 9.14px 0px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#989898" }}>Web page</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.14px 0px 9.14px 0px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#989898" }}>Settings</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14.62px 16.45px 14.62px 16.45px", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Subject line</p>
          <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>24 creator gifts under $50</p>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "rgba(124, 83, 249, 0.1)", display: "flex", flexDirection: "row", padding: "2.74px 6.4px 2.74px 6.4px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <SparklesBulk size={11.9} style={{ width: "11.88px", height: "11.88px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#7c53f9" }}>Suggest</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>Subject line score</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#15b392" }}>82 · Great</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "27.33px", height: "7.31px", flexShrink: 0, borderRadius: "2.28px", background: "rgba(21, 179, 146, 0.7)" }} />
            <div style={{ width: "27.33px", height: "7.31px", flexShrink: 0, borderRadius: "2.28px", background: "rgba(21, 179, 146, 0.7)" }} />
            <div style={{ width: "27.33px", height: "7.31px", flexShrink: 0, borderRadius: "2.28px", background: "rgba(21, 179, 146, 0.7)" }} />
            <div style={{ width: "27.33px", height: "7.31px", flexShrink: 0, borderRadius: "2.28px", background: "rgba(21, 179, 146, 0.7)" }} />
            <div style={{ width: "27.33px", height: "7.31px", flexShrink: 0, borderRadius: "2.28px", background: "rgba(21, 179, 146, 0.7)" }} />
            <div style={{ width: "27.33px", height: "7.31px", flexShrink: 0, borderRadius: "2.28px", background: "rgba(21, 179, 146, 0.7)" }} />
            <div style={{ width: "27.33px", height: "7.31px", flexShrink: 0, borderRadius: "2.28px", background: "rgba(21, 179, 146, 0.7)" }} />
            <div style={{ width: "27.33px", height: "7.31px", flexShrink: 0, borderRadius: "2.28px", background: "rgba(21, 179, 146, 0.7)" }} />
            <div style={{ width: "27.33px", height: "7.31px", flexShrink: 0, borderRadius: "2.28px", background: "#f5f5f5" }} />
            <div style={{ width: "27.33px", height: "7.31px", flexShrink: 0, borderRadius: "2.28px", background: "#f5f5f5" }} />
          </div>
          <p style={{ width: "298.01px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>Short, specific and has a number. Avoid "free" in the first 3 words.</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Preview text</p>
          <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Tested by 1,200 readers, ranked by price.</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Send to</p>
          <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <UsersBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>All subscribers · 18,420</p>
            <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Who can read it</p>
          <div style={{ flexShrink: 0, borderRadius: "8.22px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.74px 2.74px 2.74px 2.74px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "4.57px 9.14px 4.57px 9.14px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <WorldBulk size={11.9} style={{ width: "11.88px", height: "11.88px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#000000" }}>Everyone</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "4.57px 9.14px 4.57px 9.14px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CrownBulk size={11.9} style={{ width: "11.88px", height: "11.88px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6c6c6c" }}>Paid only</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "4.57px 9.14px 4.57px 9.14px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6c6c6c" }}>Paywall</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "11.88px 13.7px 11.88px 13.7px", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Publish to web archive</p>
            <div style={{ width: "27.42px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#7c53f9", position: "relative" }}>
              <svg style={{ position: "absolute", left: "12.79px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Allow replies</p>
            <div style={{ width: "27.42px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#7c53f9", position: "relative" }}>
              <svg style={{ position: "absolute", left: "12.79px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Hide from search engines</p>
            <div style={{ width: "27.42px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#e2e4e9", position: "relative" }}>
              <svg style={{ position: "absolute", left: "1.83px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Before you send</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Subject line and preview text</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#15b392", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Alt text on 6 of 6 images</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <AlertTriangleBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ff9b22", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>1 link returns 404 · Fix</p>
          </div>
        </div>
      </div>
    </div>
  );
}
