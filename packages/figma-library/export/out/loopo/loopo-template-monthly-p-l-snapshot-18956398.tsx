"use client";
// Template, Monthly P&L snapshot (loopo, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ReceiptDollarBulk = icon("<path d=\"M5 21V5A2 2 0 0 1 7 3H17A2 2 0 0 1 19 5V21L16 19 14 21 12 19 10 21 8 19 5 21\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.8 8A2 2 0 0 0 13 7H11A2 2 0 1 0 11 11H13A2 2 0 1 1 13 15H11A2 2 0 0 1 9.2 14\"/><path d=\"M12 6V16\"/></g>");

export function TemplateMonthlyPLSnapshot() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "299.1px", height: "147.9px", borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.4px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "11px 5.5px 5.5px 5.5px", gap: "8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.6px 0px 6.6px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ReceiptDollarBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#7d818c" }}>Monthly P&L snapshot</p>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.8px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "8.8px 8.8px 8.8px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "272.8px", height: "44px", flexShrink: 0, position: "relative" }}>
          <div data-fu="bar" style={{ position: "absolute", left: "4.8px", top: "33.1px", width: "13.2px", height: "10.9px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-10.9px", top: "0px", width: "43.7px", height: "10.9px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="43.74" height="10.86" viewBox="0 0 43.74 10.86" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 10.86 L0.540937 11.4009 L11.4009 0.540937 L10.86 0 L10.3191 -0.540937 L-0.540937 10.3191 L0 10.86 Z M5.48 10.86 L6.02094 11.4009 L16.8809 0.540937 L16.34 0 L15.7991 -0.540937 L4.93906 10.3191 L5.48 10.86 Z M10.96 10.86 L11.5009 11.4009 L22.3609 0.540937 L21.82 0 L21.2791 -0.540937 L10.4191 10.3191 L10.96 10.86 Z M16.44 10.86 L16.9809 11.4009 L27.8409 0.540937 L27.3 0 L26.7591 -0.540937 L15.8991 10.3191 L16.44 10.86 Z M21.92 10.86 L22.4609 11.4009 L33.3209 0.540937 L32.78 0 L32.2391 -0.540937 L21.3791 10.3191 L21.92 10.86 Z M27.4 10.86 L27.9409 11.4009 L38.8009 0.540937 L38.26 0 L37.7191 -0.540937 L26.8591 10.3191 L27.4 10.86 Z M32.88 10.86 L33.4209 11.4009 L44.2809 0.540937 L43.74 0 L43.1991 -0.540937 L32.3391 10.3191 L32.88 10.86 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "4.8px", top: "2.7px", width: "13.2px", height: "28.5px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "27.5px", top: "38.3px", width: "13.2px", height: "5.7px", borderRadius: "2.9px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "27.5px", top: "14.8px", width: "13.2px", height: "21.5px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "50.3px", top: "38.9px", width: "13.2px", height: "5.1px", borderRadius: "2.5px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "50.3px", top: "16.1px", width: "13.2px", height: "20.9px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "73px", top: "37.3px", width: "13.2px", height: "6.7px", borderRadius: "3.4px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-6.7px", top: "0px", width: "28.7px", height: "6.7px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="28.66" height="6.74" viewBox="0 0 28.66 6.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 6.74 L0.540937 7.28094 L7.28094 0.540937 L6.74 0 L6.19906 -0.540937 L-0.540937 6.19906 L0 6.74 Z M5.48 6.74 L6.02094 7.28094 L12.7609 0.540937 L12.22 0 L11.6791 -0.540937 L4.93906 6.19906 L5.48 6.74 Z M10.96 6.74 L11.5009 7.28094 L18.2409 0.540937 L17.7 0 L17.1591 -0.540937 L10.4191 6.19906 L10.96 6.74 Z M16.44 6.74 L16.9809 7.28094 L23.7209 0.540937 L23.18 0 L22.6391 -0.540937 L15.8991 6.19906 L16.44 6.74 Z M21.92 6.74 L22.4609 7.28094 L29.2009 0.540937 L28.66 0 L28.1191 -0.540937 L21.3791 6.19906 L21.92 6.74 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "73px", top: "12.7px", width: "13.2px", height: "22.6px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "95.7px", top: "36.6px", width: "13.2px", height: "7.4px", borderRadius: "3.7px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-7.4px", top: "0px", width: "34.8px", height: "7.4px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="34.8" height="7.4" viewBox="0 0 34.8 7.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 7.4 L0.540937 7.94094 L7.94094 0.540937 L7.4 0 L6.85906 -0.540937 L-0.540937 6.85906 L0 7.4 Z M5.48 7.4 L6.02094 7.94094 L13.4209 0.540937 L12.88 0 L12.3391 -0.540937 L4.93906 6.85906 L5.48 7.4 Z M10.96 7.4 L11.5009 7.94094 L18.9009 0.540937 L18.36 0 L17.8191 -0.540937 L10.4191 6.85906 L10.96 7.4 Z M16.44 7.4 L16.9809 7.94094 L24.3809 0.540937 L23.84 0 L23.2991 -0.540937 L15.8991 6.85906 L16.44 7.4 Z M21.92 7.4 L22.4609 7.94094 L29.8609 0.540937 L29.32 0 L28.7791 -0.540937 L21.3791 6.85906 L21.92 7.4 Z M27.4 7.4 L27.9409 7.94094 L35.3409 0.540937 L34.8 0 L34.2591 -0.540937 L26.8591 6.85906 L27.4 7.4 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "95.7px", top: "11.3px", width: "13.2px", height: "23.3px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "118.5px", top: "36px", width: "13.2px", height: "8.1px", borderRadius: "4px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-8px", top: "0px", width: "35.5px", height: "8.1px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="35.45" height="8.05" viewBox="0 0 35.45 8.05" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 8.05 L0.540937 8.59094 L8.59094 0.540937 L8.05 0 L7.50906 -0.540937 L-0.540937 7.50906 L0 8.05 Z M5.48 8.05 L6.02094 8.59094 L14.0709 0.540937 L13.53 0 L12.9891 -0.540937 L4.93906 7.50906 L5.48 8.05 Z M10.96 8.05 L11.5009 8.59094 L19.5509 0.540937 L19.01 0 L18.4691 -0.540937 L10.4191 7.50906 L10.96 8.05 Z M16.44 8.05 L16.9809 8.59094 L25.0309 0.540937 L24.49 0 L23.9491 -0.540937 L15.8991 7.50906 L16.44 8.05 Z M21.92 8.05 L22.4609 8.59094 L30.5109 0.540937 L29.97 0 L29.4291 -0.540937 L21.3791 7.50906 L21.92 8.05 Z M27.4 8.05 L27.9409 8.59094 L35.9909 0.540937 L35.45 0 L34.9091 -0.540937 L26.8591 7.50906 L27.4 8.05 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "118.5px", top: "10.1px", width: "13.2px", height: "23.9px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "141.2px", top: "36.5px", width: "13.2px", height: "7.5px", borderRadius: "3.7px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-7.5px", top: "0px", width: "34.9px", height: "7.5px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="34.89" height="7.49" viewBox="0 0 34.89 7.49" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 7.49 L0.540937 8.03094 L8.03094 0.540937 L7.49 0 L6.94906 -0.540937 L-0.540937 6.94906 L0 7.49 Z M5.48 7.49 L6.02094 8.03094 L13.5109 0.540937 L12.97 0 L12.4291 -0.540937 L4.93906 6.94906 L5.48 7.49 Z M10.96 7.49 L11.5009 8.03094 L18.9909 0.540937 L18.45 0 L17.9091 -0.540937 L10.4191 6.94906 L10.96 7.49 Z M16.44 7.49 L16.9809 8.03094 L24.4709 0.540937 L23.93 0 L23.3891 -0.540937 L15.8991 6.94906 L16.44 7.49 Z M21.92 7.49 L22.4609 8.03094 L29.9509 0.540937 L29.41 0 L28.8691 -0.540937 L21.3791 6.94906 L21.92 7.49 Z M27.4 7.49 L27.9409 8.03094 L35.4309 0.540937 L34.89 0 L34.3491 -0.540937 L26.8591 6.94906 L27.4 7.49 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "141.2px", top: "11.1px", width: "13.2px", height: "23.4px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "163.9px", top: "35.5px", width: "13.2px", height: "8.5px", borderRadius: "4.3px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-8.5px", top: "0px", width: "35.9px", height: "8.5px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="35.92" height="8.52" viewBox="0 0 35.92 8.52" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 8.52 L0.540937 9.06094 L9.06094 0.540937 L8.52 0 L7.97906 -0.540937 L-0.540937 7.97906 L0 8.52 Z M5.48 8.52 L6.02094 9.06094 L14.5409 0.540937 L14 0 L13.4591 -0.540937 L4.93906 7.97906 L5.48 8.52 Z M10.96 8.52 L11.5009 9.06094 L20.0209 0.540937 L19.48 0 L18.9391 -0.540937 L10.4191 7.97906 L10.96 8.52 Z M16.44 8.52 L16.9809 9.06094 L25.5009 0.540937 L24.96 0 L24.4191 -0.540937 L15.8991 7.97906 L16.44 8.52 Z M21.92 8.52 L22.4609 9.06094 L30.9809 0.540937 L30.44 0 L29.8991 -0.540937 L21.3791 7.97906 L21.92 8.52 Z M27.4 8.52 L27.9409 9.06094 L36.4609 0.540937 L35.92 0 L35.3791 -0.540937 L26.8591 7.97906 L27.4 8.52 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "163.9px", top: "8.8px", width: "13.2px", height: "24.7px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "186.7px", top: "35.1px", width: "13.2px", height: "8.9px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-8.9px", top: "0px", width: "36.3px", height: "8.9px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="36.29" height="8.89" viewBox="0 0 36.29 8.89" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 8.89 L0.540937 9.43094 L9.43094 0.540937 L8.89 0 L8.34906 -0.540937 L-0.540937 8.34906 L0 8.89 Z M5.48 8.89 L6.02094 9.43094 L14.9109 0.540937 L14.37 0 L13.8291 -0.540937 L4.93906 8.34906 L5.48 8.89 Z M10.96 8.89 L11.5009 9.43094 L20.3909 0.540937 L19.85 0 L19.3091 -0.540937 L10.4191 8.34906 L10.96 8.89 Z M16.44 8.89 L16.9809 9.43094 L25.8709 0.540937 L25.33 0 L24.7891 -0.540937 L15.8991 8.34906 L16.44 8.89 Z M21.92 8.89 L22.4609 9.43094 L31.3509 0.540937 L30.81 0 L30.2691 -0.540937 L21.3791 8.34906 L21.92 8.89 Z M27.4 8.89 L27.9409 9.43094 L36.8309 0.540937 L36.29 0 L35.7491 -0.540937 L26.8591 8.34906 L27.4 8.89 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "186.7px", top: "8.1px", width: "13.2px", height: "25.1px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "209.4px", top: "34.5px", width: "13.2px", height: "9.6px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-9.5px", top: "0px", width: "37px", height: "9.6px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="36.95" height="9.55" viewBox="0 0 36.95 9.55" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 9.55 L0.540937 10.0909 L10.0909 0.540937 L9.55 0 L9.00906 -0.540937 L-0.540937 9.00906 L0 9.55 Z M5.48 9.55 L6.02094 10.0909 L15.5709 0.540937 L15.03 0 L14.4891 -0.540937 L4.93906 9.00906 L5.48 9.55 Z M10.96 9.55 L11.5009 10.0909 L21.0509 0.540937 L20.51 0 L19.9691 -0.540937 L10.4191 9.00906 L10.96 9.55 Z M16.44 9.55 L16.9809 10.0909 L26.5309 0.540937 L25.99 0 L25.4491 -0.540937 L15.8991 9.00906 L16.44 9.55 Z M21.92 9.55 L22.4609 10.0909 L32.0109 0.540937 L31.47 0 L30.9291 -0.540937 L21.3791 9.00906 L21.92 9.55 Z M27.4 9.55 L27.9409 10.0909 L37.4909 0.540937 L36.95 0 L36.4091 -0.540937 L26.8591 9.00906 L27.4 9.55 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "209.4px", top: "6.4px", width: "13.2px", height: "26.1px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "232.1px", top: "33.5px", width: "13.2px", height: "10.5px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-10.5px", top: "0px", width: "43.4px", height: "10.5px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="43.4" height="10.52" viewBox="0 0 43.4 10.52" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 10.52 L0.540937 11.0609 L11.0609 0.540937 L10.52 0 L9.97906 -0.540937 L-0.540937 9.97906 L0 10.52 Z M5.48 10.52 L6.02094 11.0609 L16.5409 0.540937 L16 0 L15.4591 -0.540937 L4.93906 9.97906 L5.48 10.52 Z M10.96 10.52 L11.5009 11.0609 L22.0209 0.540937 L21.48 0 L20.9391 -0.540937 L10.4191 9.97906 L10.96 10.52 Z M16.44 10.52 L16.9809 11.0609 L27.5009 0.540937 L26.96 0 L26.4191 -0.540937 L15.8991 9.97906 L16.44 10.52 Z M21.92 10.52 L22.4609 11.0609 L32.9809 0.540937 L32.44 0 L31.8991 -0.540937 L21.3791 9.97906 L21.92 10.52 Z M27.4 10.52 L27.9409 11.0609 L38.4609 0.540937 L37.92 0 L37.3791 -0.540937 L26.8591 9.97906 L27.4 10.52 Z M32.88 10.52 L33.4209 11.0609 L43.9409 0.540937 L43.4 0 L42.8591 -0.540937 L32.3391 9.97906 L32.88 10.52 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "232.1px", top: "2.9px", width: "13.2px", height: "28.6px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "254.9px", top: "32.5px", width: "13.2px", height: "11.5px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-11.5px", top: "0px", width: "44.4px", height: "11.5px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="44.39" height="11.51" viewBox="0 0 44.39 11.51" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 11.51 L0.540937 12.0509 L12.0509 0.540937 L11.51 0 L10.9691 -0.540937 L-0.540937 10.9691 L0 11.51 Z M5.48 11.51 L6.02094 12.0509 L17.5309 0.540937 L16.99 0 L16.4491 -0.540937 L4.93906 10.9691 L5.48 11.51 Z M10.96 11.51 L11.5009 12.0509 L23.0109 0.540937 L22.47 0 L21.9291 -0.540937 L10.4191 10.9691 L10.96 11.51 Z M16.44 11.51 L16.9809 12.0509 L28.4909 0.540937 L27.95 0 L27.4091 -0.540937 L15.8991 10.9691 L16.44 11.51 Z M21.92 11.51 L22.4609 12.0509 L33.9709 0.540937 L33.43 0 L32.8891 -0.540937 L21.3791 10.9691 L21.92 11.51 Z M27.4 11.51 L27.9409 12.0509 L39.4509 0.540937 L38.91 0 L38.3691 -0.540937 L26.8591 10.9691 L27.4 11.51 Z M32.88 11.51 L33.4209 12.0509 L44.9309 0.540937 L44.39 0 L43.8491 -0.540937 L32.3391 10.9691 L32.88 11.51 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "254.9px", top: "0.2px", width: "13.2px", height: "30.3px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
        </div>
        <div style={{ width: "272.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#222222" }}>Revenue, costs and margin</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Monthly · PDF</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.7px 8.8px 7.7px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.5px" }}>Use</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactions: hover and click states. Remove this function and the two lines above to get a static component.
function fuInteract(root: HTMLElement | null) {
  if (!root || root.dataset.fuOn) return;
  root.dataset.fuOn = "1";
  const doc = root.ownerDocument;
  const all = (sel: string, el: Element = root): HTMLElement[] => Array.from(el.querySelectorAll(sel)) as HTMLElement[];
  const box = (el: Element) => el.getBoundingClientRect();
  const font = getComputedStyle(root).fontFamily;
  const tip = doc.createElement("div");
  tip.setAttribute("aria-hidden", "true");
  Object.assign(tip.style, { position: "fixed", zIndex: "2147483647", pointerEvents: "none", background: "#111113", color: "#fff", font: "500 12px/16px " + font, padding: "5px 8px", borderRadius: "6px", whiteSpace: "nowrap", opacity: "0", transform: "translate(-50%, -100%)", transition: "opacity .12s", boxShadow: "0 4px 14px rgba(0,0,0,.18)" });
  doc.body.appendChild(tip);
  const show = (text: string, x: number, y: number) => { if (!text) return hide(); tip.textContent = text; tip.style.left = x + "px"; tip.style.top = y - 8 + "px"; tip.style.opacity = "1"; };
  const hide = () => { tip.style.opacity = "0"; };
  const ease = (el: HTMLElement | SVGElement, props: string) => { const s = (el as HTMLElement).style; if (!s.transition) s.transition = props; };
  const texts = (scope: Element) => all("p, span", scope).filter((t) => t.children.length === 0 && (t.textContent || "").trim());
  const NUM = /^([^\d\-+.]*)([-+]?[\d,]*\.?\d+)\s*([kKmMbB%]?)([^\d]*)$/;
  // value axis: numeric labels along one edge of the chart, used to read a mark's value from its position
  const axis = (scope: Element, vertical: boolean) => {
    const pts: { v: number; p: number; pre: string; suf: string; dec: number }[] = [];
    for (const t of texts(scope)) {
      const m = (t.textContent || "").trim().match(NUM);
      if (!m) continue;
      const mult = { k: 1e3, K: 1e3, m: 1e6, M: 1e6, b: 1e9, B: 1e9 }[m[3] as "k"] || 1;
      const r = box(t);
      pts.push({ v: parseFloat(m[2].replace(/,/g, "")) * mult, p: vertical ? r.top + r.height / 2 : r.left + r.width / 2, pre: m[1], suf: m[3] + m[4], dec: (m[2].split(".")[1] || "").length });
    }
    const uniq = pts.filter((a, i) => pts.findIndex((b) => Math.abs(b.p - a.p) < 2) === i);
    if (uniq.length < 2) return null;
    uniq.sort((a, b) => a.p - b.p);
    const a = uniq[0], b = uniq[uniq.length - 1];
    if (a.v === b.v || Math.abs(b.p - a.p) < 10) return null;
    return (pos: number) => {
      const v = a.v + ((pos - a.p) * (b.v - a.v)) / (b.p - a.p);
      const suf = a.suf || b.suf, pre = a.pre || b.pre;
      const div = /^[kK]/.test(suf) ? 1e3 : /^[mM]/.test(suf) ? 1e6 : /^[bB]/.test(suf) ? 1e9 : 1;
      const x = v / div;
      const dec = Math.max(a.dec, b.dec, div > 1 && Math.abs(x) < 100 ? 1 : 0);
      return pre + x.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: dec }) + suf;
    };
  };
  // the chart around a group of marks: the nearest ancestor that also holds text labels
  const chartOf = (el: Element) => { let c: Element | null = el.parentElement; while (c && c !== root.parentElement) { if (texts(c).length >= 3) return c; c = c.parentElement; } return root; };
  const labelNear = (scope: Element, x: number, y: number, below: boolean, anyText = false) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (!anyText && NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
      const dd = below ? Math.abs(r.left + r.width / 2 - x) + (r.top - y) * 0.2 : Math.abs(r.top + r.height / 2 - y) + (x - r.right) * 0.1;
      if (dd < d) { d = dd; best = (t.textContent || "").trim(); }
    }
    return d < 80 ? best : "";
  };
  const dim = (els: (HTMLElement | SVGElement)[], keep: (HTMLElement | SVGElement)[]) => { for (const e of els) { ease(e, "opacity .15s"); (e as HTMLElement).style.opacity = keep.includes(e) ? "" : "0.35"; } };
  const undim = (els: (HTMLElement | SVGElement)[]) => { for (const e of els) (e as HTMLElement).style.opacity = ""; };

  // vertical bars: the hovered column (all stacked segments at that x) stays, the rest fade
  const groups = new Map<Element, HTMLElement[]>();
  for (const b of all("[data-fu=bar],[data-fu=hbar]")) { const p = b.parentElement!; if (!groups.has(p)) groups.set(p, []); groups.get(p)!.push(b); }
  groups.forEach((bars) => {
    const horiz = bars[0].dataset.fu === "hbar";
    const scope = chartOf(bars[0]);
    const val = axis(scope, !horiz);
    const peers = (b: HTMLElement) => { const r = box(b), c = horiz ? r.top + r.height / 2 : r.left + r.width / 2; return bars.filter((o) => { const q = box(o); return Math.abs((horiz ? q.top + q.height / 2 : q.left + q.width / 2) - c) < Math.max(2, (horiz ? r.height : r.width) / 2); }); };
    for (const b of bars) {
      b.addEventListener("mouseenter", () => {
        const col = peers(b);
        dim(bars, col);
        const rs = col.map(box);
        const top = Math.min(...rs.map((r) => r.top)), right = Math.max(...rs.map((r) => r.right)), r0 = rs[0];
        const label = horiz ? labelNear(scope, r0.left, r0.top + r0.height / 2, false) : labelNear(scope, r0.left + r0.width / 2, Math.max(...rs.map((r) => r.bottom)), true);
        const v = val ? val(horiz ? right : top) : "";
        show([label, v].filter(Boolean).join(" · "), horiz ? right : r0.left + r0.width / 2, horiz ? r0.top : top);
      });
      b.addEventListener("mouseleave", () => { undim(bars); hide(); });
    }
  });

  // line and area plots: a guide line and a dot follow the pointer along the top edge of the plotted shape
  for (const svg of all("svg[data-fu=plot]") as unknown as SVGSVGElement[]) {
    const paths = Array.from(svg.querySelectorAll("path, polyline")) as SVGGeometryElement[];
    if (!paths.length) continue;
    const line = paths.reduce((a, b) => (b.getTotalLength() > a.getTotalLength() ? b : a));
    const len = line.getTotalLength();
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 800; i++) { const q = line.getPointAtLength((len * i) / 800); pts.push({ x: q.x, y: q.y }); }
    const xs = pts.map((q) => q.x), minX = Math.min(...xs), maxX = Math.max(...xs);
    const color = (line.getAttribute("stroke") && line.getAttribute("stroke") !== "none" ? line.getAttribute("stroke") : line.getAttribute("fill")) || "#111";
    const NS = "http://www.w3.org/2000/svg";
    const g = doc.createElementNS(NS, "g");
    g.setAttribute("pointer-events", "none");
    g.style.opacity = "0";
    const guide = doc.createElementNS(NS, "line");
    guide.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    guide.setAttribute("stroke-dasharray", "3 3");
    guide.setAttribute("stroke-opacity", "0.5");
    const dot = doc.createElementNS(NS, "circle");
    dot.setAttribute("r", "4");
    dot.setAttribute("fill", "#fff");
    dot.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    dot.setAttribute("stroke-width", "2");
    g.append(guide, dot);
    svg.appendChild(g);
    const scope = chartOf(svg);
    const val = axis(scope, true);
    const area = svg.parentElement || svg;
    area.addEventListener("mousemove", (ev: Event) => {
      const e = ev as MouseEvent;
      const m = line.getScreenCTM();
      if (!m) return;
      const px = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()).x;
      if (px < minX - 4 || px > maxX + 4) { g.style.opacity = "0"; hide(); return; }
      const step = (maxX - minX) / 400 || 1;
      let y = Infinity, x = px;
      for (const q of pts) if (Math.abs(q.x - px) <= step && q.y < y) { y = q.y; x = q.x; }
      if (y === Infinity) return;
      const bb = line.getBBox();
      guide.setAttribute("x1", String(x)); guide.setAttribute("x2", String(x));
      guide.setAttribute("y1", String(bb.y)); guide.setAttribute("y2", String(bb.y + bb.height));
      dot.setAttribute("cx", String(x)); dot.setAttribute("cy", String(y));
      g.style.opacity = "1";
      const sp = new DOMPoint(x, y).matrixTransform(m);
      const label = labelNear(scope, sp.x, box(svg).bottom, true);
      show([label, val ? val(sp.y) : ""].filter(Boolean).join(" · "), sp.x, sp.y);
    });
    area.addEventListener("mouseleave", () => { g.style.opacity = "0"; hide(); });
  }

  // cards: a small lift on hover (an extra drop shadow, the card's own shadows stay as they are)
  for (const c of all("[data-fu=card]").concat(root.dataset.fu === "card" ? [root] : [])) {
    c.addEventListener("mouseenter", () => { ease(c, "transform .18s ease, filter .18s ease"); c.style.transform = "translateY(-2px)"; c.style.filter = "drop-shadow(0 8px 16px rgba(17,17,19,.08))"; });
    c.addEventListener("mouseleave", () => { c.style.transform = ""; c.style.filter = ""; });
  }

  // heatmap and calendar cells: an outline and the cell's own text
  for (const c of all("[data-fu=cell]")) {
    c.addEventListener("mouseenter", () => {
      ease(c, "outline-color .12s");
      c.style.outline = "2px solid rgba(17,17,19,.55)";
      c.style.outlineOffset = "1px";
      const r = box(c);
      // its own text, or the row and column labels of the grid it sits in
      let label = (c.textContent || "").trim();
      if (!label) {
        // walk outwards until a row label (left) and a column label (below) are in reach
        let row = "", col = "";
        for (let a: Element | null = c.parentElement; a && a !== root.parentElement && !(row && col); a = a.parentElement) {
          if (!row) row = labelNear(a, r.left, r.top + r.height / 2, false, true);
          if (!col) col = labelNear(a, r.left + r.width / 2, r.bottom, true, true);
        }
        label = [row, col].filter(Boolean).join(" · ");
      }
      show(label, r.left + r.width / 2, r.top);
    });
    c.addEventListener("mouseleave", () => { c.style.outline = ""; c.style.outlineOffset = ""; hide(); });
  }

  // fields: hover and focus states
  for (const f of all("[data-fu=field]")) {
    f.style.cursor = "text";
    f.addEventListener("mouseenter", () => { ease(f, "filter .15s, outline-color .15s"); f.style.filter = "brightness(0.985)"; });
    f.addEventListener("mouseleave", () => { f.style.filter = ""; });
    f.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      for (const o of all("[data-fu=field]")) o.style.outline = "";
      f.style.outline = "3px solid rgba(17,17,19,.12)";
      f.style.outlineOffset = "0px";
    });
  }
  doc.addEventListener("mousedown", () => { for (const o of all("[data-fu=field]")) o.style.outline = ""; });

  // donut and pie charts drawn as one vector per arc: the hovered arc stays, the others fade
  const arcGroups = new Map<Element, HTMLElement[]>();
  for (const a of all("[data-fu=arc]")) { const p = a.parentElement!; if (!arcGroups.has(p)) arcGroups.set(p, []); arcGroups.get(p)!.push(a); }
  arcGroups.forEach((arcs) => {
    const scope = chartOf(arcs[0]);
    const hexOf = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        if (hexOf(getComputedStyle(el).backgroundColor) !== color.toLowerCase()) continue;
        // climb to the legend row: the first ancestor that holds more than the swatch's label
        let row: Element | null = el.parentElement;
        while (row && row.parentElement && texts(row).length < 2 && row !== scope) row = row.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length && words.length <= 5) return words.join(" · ");
        if (el.parentElement) return texts(el.parentElement).map((t) => (t.textContent || "").trim()).join(" · ");
      }
      return "";
    };
    // hit-test the whole stack under the pointer: labels or tracks drawn over the ring don't get in the way
    const fills = new Map(arcs.map((a) => { const sh = a.querySelector("path"); return [a, (sh && (sh.getAttribute("fill") || sh.getAttribute("stroke"))) || ""] as [HTMLElement, string]; }));
    let current: HTMLElement | null = null;
    scope.addEventListener("mousemove", (ev) => {
      const e = ev as MouseEvent;
      // the arc whose drawn shape (not just its box) is under the pointer
      const inside = (sh: SVGGeometryElement) => { const m = sh.getScreenCTM(); if (!m) return false; const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return sh.isPointInFill(q) || sh.isPointInStroke(q); };
      const arc = arcs.find((a) => (Array.from(a.querySelectorAll("path, circle, ellipse")) as SVGGeometryElement[]).some(inside)) || null;
      if (!arc) { if (current) { undim(arcs); hide(); current = null; } return; }
      if (arc !== current) { dim(arcs, [arc]); current = arc; }
      show(legend(fills.get(arc) || ""), e.clientX, e.clientY);
    });
    scope.addEventListener("mouseleave", () => { undim(arcs); hide(); current = null; });
  });

  // donut and pie arcs in one drawing: the hovered arc stays, the others fade; the legend row with the same colour names it
  for (const svg of all("svg[data-fu=donut]") as unknown as SVGSVGElement[]) {
    const arcs = (Array.from(svg.querySelectorAll("path")) as SVGPathElement[]).filter((p) => { const f = p.getAttribute("fill"); return f && f !== "none" && !/^url/.test(f); });
    const scope = chartOf(svg);
    const hex = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        const bg = getComputedStyle(el).backgroundColor;
        if (!bg || hex(bg) !== color.toLowerCase()) continue;
        const row = el.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length) return words.join(" · ");
      }
      return "";
    };
    for (const a of arcs) {
      a.addEventListener("mouseenter", (ev) => {
        dim(arcs, [a]);
        const e = ev as MouseEvent;
        show(legend(a.getAttribute("fill") || ""), e.clientX, e.clientY);
      });
      a.addEventListener("mousemove", (ev) => { const e = ev as MouseEvent; tip.style.left = e.clientX + "px"; tip.style.top = e.clientY - 8 + "px"; });
      a.addEventListener("mouseleave", () => { undim(arcs); hide(); });
    }
  }

  // rows: a soft highlight under the pointer
  for (const r of all("[data-fu=row]")) {
    r.addEventListener("mouseenter", () => { ease(r, "filter .15s"); r.style.filter = "brightness(0.975)"; });
    r.addEventListener("mouseleave", () => { r.style.filter = ""; });
  }

  // buttons: hover and press feedback
  for (const b of all("[data-fu=btn],[data-fu=tab]")) {
    b.style.cursor = "pointer";
    b.addEventListener("mouseenter", () => { ease(b, "filter .15s, transform .1s"); if (!b.dataset.fuActive) b.style.filter = "brightness(0.96)"; });
    b.addEventListener("mouseleave", () => { b.style.filter = ""; b.style.transform = ""; });
    b.addEventListener("mousedown", () => { b.style.transform = "scale(0.98)"; });
    b.addEventListener("mouseup", () => { b.style.transform = ""; });
  }

  // tabs and segmented controls: clicking a tab moves the selected look onto it
  const VIS = ["background-color", "background-image", "box-shadow", "border-color", "color", "font-weight"];
  const look = (el: HTMLElement) => VIS.map((k) => el.style.getPropertyValue(k)).join("|");
  const tabGroups = new Map<Element, HTMLElement[]>();
  for (const t of all("[data-fu=tab]")) { const p = t.parentElement!; if (!tabGroups.has(p)) tabGroups.set(p, []); tabGroups.get(p)!.push(t); }
  tabGroups.forEach((tabs) => {
    if (tabs.length < 2) return;
    const counts = new Map<string, number>();
    for (const t of tabs) counts.set(look(t), (counts.get(look(t)) || 0) + 1);
    let active = tabs.find((t) => counts.get(look(t)) === 1 && counts.size > 1) || null;
    if (!active) return;
    active.dataset.fuActive = "1";
    // read both looks first, then write: swapping one property at a time would let shorthands undo each other
    const swapStyle = (a: HTMLElement, b: HTMLElement, props: string[]) => {
      const va = props.map((k) => a.style.getPropertyValue(k)), vb = props.map((k) => b.style.getPropertyValue(k));
      props.forEach((k, i) => { a.style.setProperty(k, vb[i]); b.style.setProperty(k, va[i]); });
    };
    const swap = (a: HTMLElement, b: HTMLElement) => {
      swapStyle(a, b, VIS);
      const ta = texts(a), tb = texts(b);
      for (let i = 0; i < Math.min(ta.length, tb.length); i++) swapStyle(ta[i], tb[i], ["color", "font-weight"]);
    };
    for (const t of tabs) t.addEventListener("click", () => {
      if (!active || t === active) return;
      t.style.filter = "";
      swap(active, t);
      delete active.dataset.fuActive;
      active = t;
      t.dataset.fuActive = "1";
    });
  });
}
