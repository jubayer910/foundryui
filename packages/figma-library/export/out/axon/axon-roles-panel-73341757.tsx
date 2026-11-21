// Roles panel (axon, Tables and lists) from Ingot UI (ingotui.com).
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
const Copy = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666\" /><path d=\"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1\" /></g>");
const Plus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" /></g>");

export function RolesPanel() {
  return (
    <div style={{ width: "1155px", height: "680px", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "423px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Built-in roles can’t be edited. Duplicate one to make a custom role.</p>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
        <div style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Copy size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Duplicate role</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "8px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Plus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>New custom role</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "52px", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9, inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Permission</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Admin</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2 members</p>
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Builder</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>6 members</p>
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Reviewer</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>7 members</p>
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Approver</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2 members</p>
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Viewer</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1 members</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Workflows</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "161px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>View workflows and runs</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "159px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Build and test workflows</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "137px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Publish to production</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "100px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>Needs review</p>
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Review Queue</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Decide review items</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "100px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>Up to limit</p>
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Approve above $10,000</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Data & connectors</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Manage connectors</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "215px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Manage data sources & AI access</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Administration</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "162px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Manage members & roles</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Billing & plan</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>View audit log</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dfe0e5", lineHeight: "20px" }}>—</p>
          </div>
        </div>
      </div>
    </div>
  );
}
