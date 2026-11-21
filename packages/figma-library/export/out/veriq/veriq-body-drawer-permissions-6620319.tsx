// Body drawer, Permissions (veriq, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Brain = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8\" /><path d=\"M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8\" /><path d=\"M17.5 16a3.5 3.5 0 0 0 0 -7h-.5\" /><path d=\"M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0\" /><path d=\"M6.5 16a3.5 3.5 0 0 1 0 -7h.5\" /><path d=\"M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const CircleCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M9 12l2 2l4 -4\" /></g>");
const GitPullRequest = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M6 8l0 8\" /><path d=\"M11 6h5a2 2 0 0 1 2 2v8\" /><path d=\"M14 9l-3 -3l3 -3\" /></g>");
const User = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /></g>");

export function BodyDrawerPermissions() {
  return (
    <div style={{ width: "498px", height: "558px", display: "flex", flexDirection: "column", padding: "18px 20px 12px 20px", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "460px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "460px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Permissions</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>Security role · 1 override</p>
        </div>
        <div style={{ width: "460px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "460px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "180px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Area</p>
            </div>
            <div style={{ width: "70px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>View</p>
            </div>
            <div style={{ width: "70px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Triage</p>
            </div>
            <div style={{ width: "70px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Run / fix</p>
            </div>
            <div style={{ width: "70px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Manage</p>
            </div>
          </div>
          <div style={{ width: "460px", height: "38px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "180px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Findings</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
          </div>
          <div style={{ width: "460px", height: "38px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "180px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Attack paths</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
          </div>
          <div style={{ width: "460px", height: "38px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "180px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>AI pentests</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(253, 113, 22, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#fd7116", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
          </div>
          <div style={{ width: "460px", height: "38px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "180px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Fix requests</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
          </div>
          <div style={{ width: "460px", height: "38px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "180px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Integrations</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
          </div>
          <div style={{ width: "460px", height: "38px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "180px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Members & billing</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
            <div style={{ width: "70px", height: "37px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d4d4d8" }}>—</p>
            </div>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#00be4e", boxShadow: "inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em" }}>From role</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#fd7116", boxShadow: "inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em" }}>Override · can run AI pentests</p>
          </div>
        </div>
      </div>
      <div style={{ width: "460px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "460px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Recent activity</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4f4f51" }}>View all</p>
        </div>
        <div style={{ width: "460px", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "7px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#00be4e", display: "block" }} />
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Verified the fix for #128 Invoice access control</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>12m ago</p>
        </div>
        <div style={{ width: "460px", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "7px", background: "rgba(27, 140, 232, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <User size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Assigned #127 Exposed admin token to Jon Lee</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>2h ago</p>
        </div>
        <div style={{ width: "460px", height: "44px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "7px", background: "rgba(127, 88, 245, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Brain size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7f58f5", display: "block" }} />
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Started an AI pentest on Partner API</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>1d ago</p>
        </div>
        <div style={{ width: "460px", height: "44px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ebebeb", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "7px", background: "rgba(246, 139, 46, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <GitPullRequest size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#f68b2e", display: "block" }} />
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Approved fix PR for #124 lodash upgrade</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>2d ago</p>
        </div>
      </div>
    </div>
  );
}
