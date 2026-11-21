// Body modal, Email addresses (montra, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AlertCircle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 8v4\" /><path d=\"M12 16h.01\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const Eye = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\" /></g>");
const Mail = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10\" /><path d=\"M3 7l9 6l9 -6\" /></g>");
const Shield = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3\" /></g>");
const Wallet = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M20 12v4h-4a2 2 0 0 1 0 -4h4\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function BodyModalEmailAddresses() {
  return (
    <div style={{ width: "538.18px", height: "346.71px", display: "flex", flexDirection: "column", padding: "3.66px 18.28px 18.28px 18.28px", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "503.44px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Email addresses</p>
        <div style={{ width: "503.44px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #4996fe, 0px 0px 0px 3px rgba(73, 150, 254, 0.16)", display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "5.48px", padding: "6.39px 8.22px 6.39px 8.22px", columnGap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "23.76px", flexShrink: 0, borderRadius: "5.48px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 8.22px", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Mail size={11.9} strokeWidth={1.49} style={{ width: "11.88px", height: "11.88px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>mia@alderco.com</p>
            <X size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
          </div>
          <div style={{ height: "23.76px", flexShrink: 0, borderRadius: "5.48px", background: "#fff4eb", boxShadow: "inset 0 0 0 0.91px #ffd9bd", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 8.22px", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <AlertCircle size={11.9} strokeWidth={1.49} style={{ width: "11.88px", height: "11.88px", flexShrink: 0, color: "#fd872f", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#c35a0f" }}>jordan@kestrellabs.io</p>
            <X size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#9a9ba1" }}>Add more…</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "413px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c35a0f" }}>jordan@kestrellabs.io is outside alderco.com, so Viewer is the highest role allowed.</p>
      </div>
      <div style={{ width: "503.44px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Role</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "11.88px 11.88px 11.88px 11.88px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(142, 131, 253, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Shield size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#8e83fd", display: "block" }} />
              </div>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d4d4d8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Admin</p>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Settings, billing and every account</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "9.14px", background: "#f9fbff", boxShadow: "inset 0 0 0 1.37px #4996fe", display: "flex", flexDirection: "column", padding: "12.34px 12.34px 12.34px 12.34px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Wallet size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#4996fe", display: "block" }} />
              </div>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 4.57px #222222", display: "flex", flexDirection: "row", padding: "4.57px 4.57px 4.57px 4.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Finance</p>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Transactions, invoices and approvals</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "11.88px 11.88px 11.88px 11.88px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(107, 107, 107, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Eye size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6b6b6b", display: "block" }} />
              </div>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d4d4d8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Viewer</p>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Read-only dashboards and reports</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Approval limit</p>
          <div style={{ alignSelf: "stretch", height: "34.73px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>$</p>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>2,500</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>per payment</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Account access</p>
          <div style={{ alignSelf: "stretch", height: "34.73px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Wallet size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>All except Emergency reserve</p>
            <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "#222222", boxShadow: "inset 0 0 0 0.91px #222222", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "267px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>Require two-factor authentication on first sign-in</p>
      </div>
    </div>
  );
}
