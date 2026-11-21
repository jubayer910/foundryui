// Permissions matrix (loopo, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");

export function PermissionsMatrix() {
  return (
    <div style={{ width: "914.9px", height: "291.5px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "914.9px", height: "39.4px", flexShrink: 0, borderRadius: "8.8px", background: "#fafafa", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "284.9px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Permission</p>
        </div>
        <div style={{ width: "105px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Admin</p>
        </div>
        <div style={{ width: "105px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Editor</p>
        </div>
        <div style={{ width: "105px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Finance</p>
        </div>
        <div style={{ width: "105px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Support</p>
        </div>
        <div style={{ width: "105px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Developer</p>
        </div>
        <div style={{ width: "105px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Viewer</p>
        </div>
      </div>
      <div style={{ width: "914.9px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "284.9px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Campaigns, content & forms</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>View</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>View</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>View</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>View</p>
        </div>
      </div>
      <div style={{ width: "914.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "914.9px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "284.9px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Audience & exports</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>View</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>View</p>
        </div>
      </div>
      <div style={{ width: "914.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "914.9px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "284.9px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Payments & refunds</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Refunds only</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>View</p>
        </div>
      </div>
      <div style={{ width: "914.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "914.9px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "284.9px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Payouts & bank account</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>View</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
      </div>
      <div style={{ width: "914.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "914.9px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "284.9px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Billing & plan</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
      </div>
      <div style={{ width: "914.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "914.9px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "284.9px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Integrations & API keys</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
      </div>
      <div style={{ width: "914.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "914.9px", height: "35.1px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "284.9px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Team & roles</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
        <div style={{ width: "105px", height: "35.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>—</p>
        </div>
      </div>
    </div>
  );
}
