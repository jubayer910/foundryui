// Notifications popover (loopo, Popovers) from Ingot UI (ingotui.com).
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
const BuildingBankBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21l18 0\" /><path d=\"M3 10l18 0\" /><path d=\"M5 6l7 -3l7 3\" /><path d=\"M4 10l0 11\" /><path d=\"M20 10l0 11\" /><path d=\"M8 14l0 3\" /><path d=\"M12 14l0 3\" /><path d=\"M16 14l0 3\" /></g>");
const FileBulk = icon("<path d=\"M17 21H7A2 2 0 0 1 5 19V5A2 2 0 0 1 7 3H14L19 8V19A2 2 0 0 1 17 21\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3V7A1 1 0 0 0 15 8H19\"/></g>");
const SettingsBulk = icon("<path d=\"M10.325 4.317C10.751 2.561 13.248999999999999 2.561 13.674999999999999 4.317A1.724 1.724 0 0 0 16.247999999999998 5.383C17.790999999999997 4.443 19.557999999999996 6.209 18.618 7.753A1.724 1.724 0 0 0 19.683 10.325C21.439 10.751 21.439 13.248999999999999 19.683 13.674999999999999A1.724 1.724 0 0 0 18.617 16.247999999999998C19.557000000000002 17.790999999999997 17.791 19.557999999999996 16.247 18.618A1.724 1.724 0 0 0 13.675 19.683C13.249 21.439 10.751000000000001 21.439 10.325000000000001 19.683A1.724 1.724 0 0 0 7.752000000000001 18.617C6.2090000000000005 19.557000000000002 4.442 17.791 5.382000000000001 16.247A1.724 1.724 0 0 0 4.317 13.675C2.561 13.249 2.561 10.751000000000001 4.317 10.325000000000001A1.724 1.724 0 0 0 5.383 7.752000000000001C4.443 6.2090000000000005 6.209 4.442 7.753 5.382000000000001 8.753 5.99 10.049 5.452000000000001 10.325 4.317\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 12A3 3 0 1 0 15 12 3 3 0 0 0 9 12\"/></g>");
const TrendingUpBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 17l6 -6l4 4l8 -8\" /><path d=\"M14 7l7 0l0 7\" /></g>");

export function NotificationsPopover() {
  return (
    <div style={{ width: "416.3px", height: "462.5px", borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.5px 35.1px -13.1px rgba(13, 13, 18, 0.1), 0px 1.1px 2.2px 0px rgba(13, 13, 18, 0.06)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "13.1px 15.3px 11px 15.3px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 500, color: "#141417" }}>Notifications</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#fd4b23" }}>Mark all as read</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 15.3px 11px 15.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "11px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.3px 3.3px 3.3px 3.3px", gap: "2.2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#000000" }}>All</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>5</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#6c6c6c" }}>Payments</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>2</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#6c6c6c" }}>Mentions</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>1</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6.6px 6.6px 6.6px 6.6px", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "403.2px", flexShrink: 0, borderRadius: "8.8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "8.8px 8.8px 8.8px 8.8px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "35.1px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(24, 177, 112, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <BuildingBankBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>Payout of $8,960 scheduled</p>
            <p style={{ width: "263px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Arrives Dec 16 in Chase •••• 4821</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>12m</p>
            <svg style={{ width: "7.7px", height: "7.7px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="7.67" height="7.67" viewBox="0 0 7.67 7.67" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.67 3.835 C7.67 5.95301 5.95301 7.67 3.835 7.67 C1.71699 7.67 0 5.95301 0 3.835 C0 1.71699 1.71699 0 3.835 0 C5.95301 0 7.67 1.71699 7.67 3.835 Z" fill="#fd4b23"/></svg>
          </div>
        </div>
        <div style={{ width: "403.2px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "8.8px 8.8px 8.8px 8.8px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "35.1px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <TrendingUpBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>“Holiday Gift Guide” passed $6,000</p>
            <p style={{ width: "263px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>$6,120 from 17,980 sends · 9.8% clicks</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>1h</p>
            <svg style={{ width: "7.7px", height: "7.7px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="7.67" height="7.67" viewBox="0 0 7.67 7.67" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.67 3.835 C7.67 5.95301 5.95301 7.67 3.835 7.67 C1.71699 7.67 0 5.95301 0 3.835 C0 1.71699 1.71699 0 3.835 0 C5.95301 0 7.67 1.71699 7.67 3.835 Z" fill="#fd4b23"/></svg>
          </div>
        </div>
        <div style={{ width: "403.2px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "8.8px 8.8px 8.8px 8.8px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "35.1px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(194, 124, 14, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <AlertTriangleBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#c27c0e", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>Refund requested — $85.00</p>
            <p style={{ width: "263px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Daniel Park · Cast Iron Skillet · #TX-48207</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>3h</p>
            <svg style={{ width: "7.7px", height: "7.7px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="7.67" height="7.67" viewBox="0 0 7.67 7.67" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.67 3.835 C7.67 5.95301 5.95301 7.67 3.835 7.67 C1.71699 7.67 0 5.95301 0 3.835 C0 1.71699 1.71699 0 3.835 0 C5.95301 0 7.67 1.71699 7.67 3.835 Z" fill="#fd4b23"/></svg>
          </div>
        </div>
        <div style={{ width: "403.2px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "8.8px 8.8px 8.8px 8.8px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "35.1px", height: "35.1px", flexShrink: 0, borderRadius: "17.5px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4d98fe" }}>PS</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>Priya Shah mentioned you</p>
            <p style={{ width: "263px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>“Can you approve the New Year subject line?”</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Yesterday</p>
          </div>
        </div>
        <div style={{ width: "403.2px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "8.8px 8.8px 8.8px 8.8px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "35.1px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(125, 129, 140, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <FileBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>November P&L snapshot is ready</p>
            <p style={{ width: "263px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Sent to Marcus Webb and you · PDF</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Dec 1</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "12.1px 15.3px 11px 15.3px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <SettingsBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#6c6c6c" }}>Notification settings</p>
      </div>
    </div>
  );
}
