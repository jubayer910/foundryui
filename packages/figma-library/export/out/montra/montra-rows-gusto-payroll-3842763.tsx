// Rows, Gusto Payroll (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Briefcase = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9\" /><path d=\"M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2\" /><path d=\"M12 12l0 .01\" /><path d=\"M3 13a20 20 0 0 0 18 0\" /></g>");
const Building = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21l18 0\" /><path d=\"M9 8l1 0\" /><path d=\"M9 12l1 0\" /><path d=\"M9 16l1 0\" /><path d=\"M14 8l1 0\" /><path d=\"M14 12l1 0\" /><path d=\"M14 16l1 0\" /><path d=\"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16\" /></g>");
const Cloud = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878\" /></g>");
const Megaphone = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z\" /><path d=\"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14\" /><path d=\"M8 6v8\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");

export function RowsGustoPayroll() {
  return (
    <div style={{ width: "481.14px", height: "213.82px", display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "481.14px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #1db9e2 0%, #a1ebff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Users size={13.2} strokeWidth={1.49} style={{ width: "13.16px", height: "13.16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Gusto Payroll</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>8 runs · ACH</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "16.45px", flexShrink: 0, position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "167.06px", height: "14.62px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.1)", display: "flex", flexDirection: "row", padding: "0px 8.22px 0px 8.22px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#df7729" }}>48%</p>
          </div>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "125.02px", height: "14.62px", borderRadius: "5.48px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        </div>
        <div style={{ width: "73.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#f45363" }}>-$46,800</p>
        </div>
      </div>
      <div style={{ width: "481.14px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #8e83fd 0%, #d9d4ff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Briefcase size={13.2} strokeWidth={1.49} style={{ width: "13.16px", height: "13.16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Contractors</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>12 invoices · wire</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "16.45px", flexShrink: 0, position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "125.39px", height: "14.62px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.1)", display: "flex", flexDirection: "row", padding: "0px 8.22px 0px 8.22px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#df7729" }}>32%</p>
          </div>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "83.35px", height: "14.62px", borderRadius: "5.48px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        </div>
        <div style={{ width: "73.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#f45363" }}>-$31,200</p>
        </div>
      </div>
      <div style={{ width: "481.14px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #8a8f99 0%, #dfe1e6 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Building size={13.2} strokeWidth={1.49} style={{ width: "13.16px", height: "13.16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>WeWork</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Rent · monthly</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "16.45px", flexShrink: 0, position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "67.26px", height: "14.62px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.1)", display: "flex", flexDirection: "row", padding: "0px 8.22px 0px 8.22px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#df7729" }}>10%</p>
          </div>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "25.22px", height: "14.62px", borderRadius: "5.48px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        </div>
        <div style={{ width: "73.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#f45363" }}>-$9,440</p>
        </div>
      </div>
      <div style={{ width: "481.14px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #91d02b 0%, #e2ffb3 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Megaphone size={13.2} strokeWidth={1.49} style={{ width: "13.16px", height: "13.16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Meta Ads</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Campaigns · card</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "16.45px", flexShrink: 0, position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "65.82px", height: "14.62px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.1)", display: "flex", flexDirection: "row", padding: "0px 8.22px 0px 8.22px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#df7729" }}>9%</p>
          </div>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "23.78px", height: "14.62px", borderRadius: "5.48px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        </div>
        <div style={{ width: "73.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#f45363" }}>-$8,900</p>
        </div>
      </div>
      <div style={{ width: "481.14px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #ecb615 0%, #ffe9a7 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Cloud size={13.2} strokeWidth={1.49} style={{ width: "13.16px", height: "13.16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>AWS</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Usage · card</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "16.45px", flexShrink: 0, position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "56.66px", height: "14.62px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.1)", display: "flex", flexDirection: "row", padding: "0px 8.22px 0px 8.22px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#df7729" }}>5%</p>
          </div>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "14.62px", height: "14.62px", borderRadius: "5.48px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        </div>
        <div style={{ width: "73.11px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#f45363" }}>-$4,920</p>
        </div>
      </div>
    </div>
  );
}
