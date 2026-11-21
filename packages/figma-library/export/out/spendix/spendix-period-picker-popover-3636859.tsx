// Period picker popover (spendix, Popovers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChevronLeft = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6l6 6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");

export function PeriodPickerPopover() {
  return (
    <div style={{ width: "420px", height: "369px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8eb, 0px 12px 32px -8px rgba(13, 13, 18, 0.1), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, boxShadow: "inset -1px 0 0 0 #ededed", display: "flex", flexDirection: "column", padding: "6px 7px 6px 6px", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 10px 4px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Presets</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>This month</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#3f3f46" }}>Last month</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#3f3f46" }}>This quarter · Q2</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#3f3f46" }}>Year to date</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#3f3f46" }}>Custom range…</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 12px 12px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "9.6px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronLeft size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>2026</p>
            <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "9.6px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Jan</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>$5.9K</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Feb</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>$6.6K</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Mar</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>$6.4K</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "inset 0 0 0 1px #242424", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>Apr</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#d4d4d8" }}>$7.5K</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(255, 255, 255, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(255, 255, 255, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(255, 255, 255, 0.16)" }} />
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#f2f6fe", display: "flex", flexDirection: "column", padding: "7px 8px 7px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>May</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#f2f6fe", display: "flex", flexDirection: "column", padding: "7px 8px 7px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Jun</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Jul</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Aug</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Sep</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Oct</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Nov</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Dec</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#2563eb", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Spend vs $10K</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>· Q2 shaded</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "11px 12px 10px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#242424", position: "relative" }}>
            <svg style={{ position: "absolute", left: "16px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Compare with March</p>
        </div>
        <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Cancel</p>
        </div>
        <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Apply</p>
        </div>
      </div>
    </div>
  );
}
