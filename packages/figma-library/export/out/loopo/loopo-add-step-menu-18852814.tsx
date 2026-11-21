// Add step menu (loopo, Menus) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const CalendarBulk = icon("<path d=\"M4 7A2 2 0 0 1 6 5H18A2 2 0 0 1 20 7V19A2 2 0 0 1 18 21H6A2 2 0 0 1 4 19V7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 11H20\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 3V7\"/><path d=\"M8 3V7\"/></g>");
const GitMergeBulk = icon("<path d=\"M5 18A2 2 0 1 0 9 18 2 2 0 1 0 5 18\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M5 6A2 2 0 1 0 9 6 2 2 0 1 0 5 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M15 12A2 2 0 1 0 19 12 2 2 0 1 0 15 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M7 8l0 8\" /><path d=\"M7 8a4 4 0 0 0 4 4h4\" /></g>");
const HourglassBulk = icon("<path d=\"M6 20V18A6 6 0 1 1 18 18V20A1 1 0 0 1 17 21H7A1 1 0 0 1 6 20\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 17H17.5\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 7H17.5\"/><path d=\"M6 4V6A6 6 0 1 0 18 6V4A1 1 0 0 0 17 3H7A1 1 0 0 0 6 4\"/></g>");
const MessageBulk = icon("<path d=\"M18 4A3 3 0 0 1 21 7V15A3 3 0 0 1 18 18H13L8 21V18H6A3 3 0 0 1 3 15V7A3 3 0 0 1 6 4H18\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 9H16\"/><path d=\"M8 13H14\"/></g>");
const SendBulk = icon("<path d=\"M21 3L14.5 21A0.55 0.55 0 0 1 13.5 21L10 14 3 10.5A0.55 0.55 0 0 1 3 9.5L21 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14L21 3\"/></g>");
const TagBulk = icon("<path d=\"M3 6V11.172A2 2 0 0 0 3.586 12.586L11.296 20.296A2.41 2.41 0 0 0 14.703999999999999 20.296L20.296 14.704A2.41 2.41 0 0 0 20.296 11.296000000000001L12.585999999999999 3.586000000000001A2 2 0 0 0 11.171999999999999 3.0000000000000013H5.999999999999999A3 3 0 0 0 2.999999999999999 6.000000000000002\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 7.5A1 1 0 1 0 8.5 7.5 1 1 0 1 0 6.5 7.5\"/></g>");
const TestTubeBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2\" /><path d=\"M8.5 2h7\" /><path d=\"M14.5 16h-5\" /></g>");
const UserCogBulk = icon("<path d=\"M8 7A4 4 0 1 0 16 7 4 4 0 0 0 8 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 21V19A4 4 0 0 1 10 15H12.5\"/><path d=\"M17.001 19A2 2 0 1 0 21.001 19 2 2 0 1 0 17.001 19\"/><path d=\"M19.001 15.5V17\"/><path d=\"M19.001 21V22.5\"/><path d=\"M22.032 17.25L20.733 18\"/><path d=\"M17.27 20L15.969999999999999 20.75\"/><path d=\"M15.97 17.25L17.27 18\"/><path d=\"M20.733 20L22.033 20.75\"/></g>");

export function AddStepMenu() {
  return (
    <div style={{ width: "284.9px", height: "430.7px", borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.5px 35.1px -13.1px rgba(13, 13, 18, 0.1), 0px 1.1px 2.2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "5.5px 5.5px 5.5px 5.5px", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.6px 8.8px 2.2px 8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>{"Insert after "}</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#222222" }}>Email 1</span>
        </p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.6px 8.8px 4.4px 8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Actions</p>
      </div>
      <div style={{ width: "276.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <SendBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Send email</p>
      </div>
      <div style={{ width: "276.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <MessageBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Send SMS</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>$0.01 each</p>
      </div>
      <div style={{ width: "276.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <TagBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Add tag</p>
      </div>
      <div style={{ width: "276.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <UserCogBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Update property</p>
      </div>
      <div style={{ width: "276.1px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.3px 0px 3.3px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.6px 8.8px 4.4px 8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Timing</p>
      </div>
      <div style={{ width: "276.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <HourglassBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Wait</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>for a set time</p>
      </div>
      <div style={{ width: "276.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CalendarBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Wait until</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>a date or hour</p>
      </div>
      <div style={{ width: "276.1px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.3px 0px 3.3px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.6px 8.8px 4.4px 8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Logic</p>
      </div>
      <div style={{ width: "276.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <GitMergeBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#000000" }}>Condition</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Yes / No</p>
      </div>
      <div style={{ width: "276.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <TestTubeBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>A/B split</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>2 paths</p>
      </div>
    </div>
  );
}
