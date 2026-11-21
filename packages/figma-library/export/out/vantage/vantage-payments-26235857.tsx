// Payments (vantage, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function Payments() {
  return (
    <div style={{ width: "440px", height: "148px", display: "flex", flexDirection: "column", padding: "16px 18px 16px 18px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Payments · last 12 months</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>10 on time · 1 late · 1 failed</p>
      </div>
      <div style={{ width: "404px", height: "58px", flexShrink: 0, position: "relative" }}>
        <div style={{ position: "absolute", left: "0px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "4.08px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>Aug</p>
        <div style={{ position: "absolute", left: "34.17px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "38.25px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>Sep</p>
        <div style={{ position: "absolute", left: "68.33px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "72.92px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>Oct</p>
        <div style={{ position: "absolute", left: "102.5px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "106.58px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>Nov</p>
        <div style={{ position: "absolute", left: "136.67px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "140.75px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>Dec</p>
        <div style={{ position: "absolute", left: "170.83px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "175.42px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>Jan</p>
        <div style={{ position: "absolute", left: "205px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "209.58px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>Feb</p>
        <div style={{ position: "absolute", left: "239.17px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "243.25px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>Mar</p>
        <div style={{ position: "absolute", left: "273.33px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "278.42px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>Apr</p>
        <div style={{ position: "absolute", left: "307.5px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "310.58px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>May</p>
        <div style={{ position: "absolute", left: "341.67px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #e7bd5a 0%, #e3b341 100%)", boxShadow: "inset 0 0 0 1px rgba(177, 140, 51, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "345.75px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ededed" }}>Jun</p>
        <div style={{ position: "absolute", left: "375.83px", top: "4px", width: "28.17px", height: "30px", borderRadius: "5px", background: "linear-gradient(180deg, #e86064 0%, #e5484d 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 56, 60, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <X size={12} style={{ position: "absolute", left: "383.92px", top: "13px", width: "12px", height: "12px", color: "#ffffff", display: "block", flexShrink: 0 }} />
        <p style={{ position: "absolute", left: "381.42px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ededed" }}>Jul</p>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #317959 0%, #2d6a4f 100%)", boxShadow: "inset 0 0 0 1px rgba(60, 170, 121, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Paid on the 27th</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #e7bd5a 0%, #e3b341 100%)", boxShadow: "inset 0 0 0 1px rgba(177, 140, 51, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Late · Jun 29</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #e86064 0%, #e5484d 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 56, 60, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Declined · Jul 29, retry Aug 2</p>
        </div>
      </div>
    </div>
  );
}
