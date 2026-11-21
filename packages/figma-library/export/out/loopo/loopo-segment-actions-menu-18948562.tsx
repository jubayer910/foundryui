// Segment actions menu (loopo, Menus) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const CopyBulk = icon("<path d=\"M7 9.667A2.667 2.667 0 0 1 9.667 7H18.333A2.667 2.667 0 0 1 21 9.667V18.333A2.667 2.667 0 0 1 18.333 21H9.666999999999998A2.667 2.667 0 0 1 6.999999999999998 18.333L6.999999999999998 9.666999999999998\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.012 16.737A2.005 2.005 0 0 1 2.9999999999999996 14.999999999999998V4.999999999999998C2.9999999999999996 3.899999999999998 3.8999999999999995 2.9999999999999982 5 2.9999999999999982H15C15.75 2.9999999999999982 16.158 3.384999999999998 16.5 3.9999999999999982\"/></g>");
const DownloadBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /><path d=\"M7 11l5 5l5 -5\" /><path d=\"M12 4l0 12\" /></g>");
const PencilBulk = icon("<path d=\"M4 20H8L18.5 9.5A2.828 2.828 0 1 0 14.5 5.5L4 16V20\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 6.5L17.5 10.5\"/></g>");
const SendBulk = icon("<path d=\"M21 3L14.5 21A0.55 0.55 0 0 1 13.5 21L10 14 3 10.5A0.55 0.55 0 0 1 3 9.5L21 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14L21 3\"/></g>");
const TrashBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7l16 0\" /><path d=\"M10 11l0 6\" /><path d=\"M14 11l0 6\" /><path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\" /><path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\" /></g>");

export function SegmentActionsMenu() {
  return (
    <div style={{ width: "263px", height: "228.5px", borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.5px 35.1px -13.1px rgba(13, 13, 18, 0.1), 0px 1.1px 2.2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "5.5px 5.5px 5.5px 5.5px", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.6px 8.8px 4.4px 8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>{"Lapsed buyers · "}</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#222222" }}>1,936 people</span>
        </p>
      </div>
      <div style={{ width: "254.2px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <PencilBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Edit rules</p>
      </div>
      <div style={{ width: "254.2px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CopyBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Duplicate</p>
      </div>
      <div style={{ width: "254.2px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <SendBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#000000" }}>Send campaign to segment</p>
      </div>
      <div style={{ width: "254.2px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <DownloadBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Export CSV</p>
      </div>
      <div style={{ width: "254.2px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.3px 0px 3.3px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "254.2px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <TrashBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#e5484d", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#e5484d" }}>Delete</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Used in 1 campaign</p>
      </div>
    </div>
  );
}
