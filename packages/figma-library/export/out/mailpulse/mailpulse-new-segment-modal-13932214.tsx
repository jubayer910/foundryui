// New segment modal (mailpulse, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChartPieBulk = icon("<path d=\"M10 3.2A9 9 0 1 0 20.8 14 1 1 0 0 0 19.8 13H13A2 2 0 0 1 11 11V4A0.9 0.9 0 0 0 10 3.2\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 3.5A9 9 0 0 1 20.5 9H16A1 1 0 0 1 15 8V3.5\"/></g>");
const RefreshBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" /><path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" /></g>");
const TrashBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7l16 0\" /><path d=\"M10 11l0 6\" /><path d=\"M14 11l0 6\" /><path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\" /><path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const CircleCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M9 12l2 2l4 -4\" /></g>");
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const Plus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function NewSegmentModal() {
  return (
    <div style={{ width: "760px", height: "567.16px", borderRadius: "14.62px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e3e3e3, 0px 21.93px 43.87px -10.97px rgba(13, 13, 18, 0.16)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "16.45px 16.45px 14.62px 16.45px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(124, 83, 249, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ChartPieBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>New segment</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "303px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Readers move in and out automatically as they match.</p>
        </div>
        <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "532px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "16.45px 16.45px 16.45px 16.45px", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Segment name</p>
            <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Likely to upgrade</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Conditions</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>3 of 10 conditions</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10.97px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "column", padding: "10.05px 11.88px 8.22px 11.88px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 3.65px 0px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>Match</p>
                  <div style={{ height: "21.93px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 7.31px 0.91px 7.31px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#000000", letterSpacing: "0.02em" }}>ALL</p>
                    <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>of these conditions</p>
                </div>
                <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#989898", display: "block" }} />
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "140px", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 9.14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>Engagement score</p>
                  <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
                <div style={{ width: "92px", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 9.14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>is at least</p>
                  <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 9.14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>70</p>
                </div>
                <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <TrashBulk size={13.7} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#989898", display: "block" }} />
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "140px", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 9.14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>Plan</p>
                  <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
                <div style={{ width: "92px", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 9.14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>is</p>
                  <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 9.14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>Free</p>
                  <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
                <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <TrashBulk size={13.7} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#989898", display: "block" }} />
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "140px", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 9.14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>Clicked a link</p>
                  <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
                <div style={{ width: "92px", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 9.14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>containing</p>
                  <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
                <div style={{ height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 9.14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>/pricing</p>
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 9.14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>in the last 30 days</p>
                  <ChevronDown size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
                <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <TrashBulk size={13.7} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#989898", display: "block" }} />
                </div>
              </div>
              <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", filter: "drop-shadow(0px 0.91px 0.91px rgba(13, 13, 18, 0.06))", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 3.66px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Plus size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Add condition</p>
              </div>
            </div>
            <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", filter: "drop-shadow(0px 0.91px 0.91px rgba(13, 13, 18, 0.06))", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 3.66px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Plus size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Add group</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10.97px", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.05px 11.88px 10.05px 11.88px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "27.42px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#7c53f9", position: "relative" }}>
              <svg style={{ position: "absolute", left: "12.79px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "149px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Alert me when readers join</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "194px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>One email a day with the new matches</p>
            </div>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0.91px 0 0 0 #eeeeee", display: "flex", flexDirection: "column", padding: "16.45px 14.62px 16.45px 15.53px", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Matches now</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "33px", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>642</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>3.5% of your list</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Daily matches</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Last 14 days</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "#f5f5f5" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
                <div style={{ width: "10.97px", height: "10.97px", flexShrink: 0, borderRadius: "3.05px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.06px", fontWeight: 400, color: "#989898" }}>Dec 9</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.06px", fontWeight: 400, color: "#989898" }}>Dec 15</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.06px", fontWeight: 400, color: "#989898" }}>Today</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Sample readers</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>View all</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(124, 83, 249, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#7c53f9" }}>PS</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Priya Shah</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>priya@lumen.studio</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(255, 155, 34, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#ff9b22" }}>MR</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Marcus Reid</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>marcus.reid@gmail.com</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#4d98fe" }}>HK</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Hana Kim</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>hana@kimdesign.co</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(21, 179, 146, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#15b392" }}>TB</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Tom Becker</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>tom@becker.dev</p>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48 2.74 C5.48 4.25326 4.25326 5.48 2.74 5.48 C1.22674 5.48 0 4.25326 0 2.74 C0 1.22674 1.22674 0 2.74 0 C4.25326 0 5.48 1.22674 5.48 2.74 Z" fill="#15b392"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "140px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Updated a few seconds ago</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "13.7px 16.45px 12.79px 16.45px", gap: "9.14px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <RefreshBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "182px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>Updates automatically every hour</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Cancel</p>
        </div>
        <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "91.39px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.31px 10.97px 7.31px 10.97px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff" }}>Save segment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
