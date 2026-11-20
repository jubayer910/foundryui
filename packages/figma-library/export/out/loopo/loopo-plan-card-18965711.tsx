"use client";
// Plan card (loopo, Cards and panels) from Ingot UI (ingotui.com).
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
const Stack2 = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 4l-8 4l8 4l8 -4l-8 -4\" /><path d=\"M4 12l8 4l8 -4\" /><path d=\"M4 16l8 4l8 -4\" /></g>");
const CrownBulk = icon("<path d=\"M12 6L16 12 21 8 19 18H5L3 8 8 12 12 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const InfoCircleBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 0 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 9H12.01\"/><path d=\"M11 12H12V16H13\"/></g>");

export function PlanCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "560px", height: "440px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23px 23px 23px 23px", gap: "15.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Plan</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#6b6b70" }}>Billed monthly · renews Jan 1, 2027</p>
          </div>
        </div>
        <div data-fu="btn" style={{ height: "39.4px", flexShrink: 0, borderRadius: "109.6px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "6.6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Stack2 size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.5px" }}>Compare plans</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "14.2px 14.2px 14.2px 14.2px", gap: "13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "43.8px", height: "43.8px", flexShrink: 0, borderRadius: "11px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CrownBulk size={21.9} style={{ width: "21.9px", height: "21.9px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "19.7px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Growth</p>
            <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#18b170" }}>Current plan</p>
            </div>
          </div>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#6b6b70" }}>25,000 contacts · 100,000 sends a month · 10 seats</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "34px", fontFamily: "'Geist'", fontSize: "26.3px", fontWeight: 500, color: "#222222" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "26.3px", fontWeight: 500, color: "#222222" }}>$79</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#999999" }}>/mo</span>
        </p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "15.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#7d818c" }}>Contacts</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>18,420</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#999999" }}>{" / 25,000"}</span>
            </p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "389px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "389px", height: "11px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "286.6px", height: "11px", borderRadius: "3.3px", background: "linear-gradient(90deg, #fe8a70 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "291px", top: "0px", width: "94.8px", height: "11px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="94.77" height="10.96" viewBox="0 0 94.77 10.96" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10.96 L-0 10.96 L0.5 10.96 L0.5 0 L0 0 Z M3.51 0 L3.01 0 L3.01 10.96 L3.51 10.96 L4.01 10.96 L4.01 0 L3.51 0 Z M7.02 0 L6.52 0 L6.52 10.96 L7.02 10.96 L7.52 10.96 L7.52 0 L7.02 0 Z M10.53 0 L10.03 0 L10.03 10.96 L10.53 10.96 L11.03 10.96 L11.03 0 L10.53 0 Z M14.04 0 L13.54 0 L13.54 10.96 L14.04 10.96 L14.54 10.96 L14.54 0 L14.04 0 Z M17.55 0 L17.05 0 L17.05 10.96 L17.55 10.96 L18.05 10.96 L18.05 0 L17.55 0 Z M21.06 0 L20.56 0 L20.56 10.96 L21.06 10.96 L21.56 10.96 L21.56 0 L21.06 0 Z M24.57 0 L24.07 0 L24.07 10.96 L24.57 10.96 L25.07 10.96 L25.07 0 L24.57 0 Z M28.08 0 L27.58 0 L27.58 10.96 L28.08 10.96 L28.58 10.96 L28.58 0 L28.08 0 Z M31.59 0 L31.09 0 L31.09 10.96 L31.59 10.96 L32.09 10.96 L32.09 0 L31.59 0 Z M35.1 0 L34.6 0 L34.6 10.96 L35.1 10.96 L35.6 10.96 L35.6 0 L35.1 0 Z M38.61 0 L38.11 0 L38.11 10.96 L38.61 10.96 L39.11 10.96 L39.11 0 L38.61 0 Z M42.12 0 L41.62 0 L41.62 10.96 L42.12 10.96 L42.62 10.96 L42.62 0 L42.12 0 Z M45.63 0 L45.13 0 L45.13 10.96 L45.63 10.96 L46.13 10.96 L46.13 0 L45.63 0 Z M49.14 0 L48.64 0 L48.64 10.96 L49.14 10.96 L49.64 10.96 L49.64 0 L49.14 0 Z M52.65 0 L52.15 0 L52.15 10.96 L52.65 10.96 L53.15 10.96 L53.15 0 L52.65 0 Z M56.16 0 L55.66 0 L55.66 10.96 L56.16 10.96 L56.66 10.96 L56.66 0 L56.16 0 Z M59.67 0 L59.17 0 L59.17 10.96 L59.67 10.96 L60.17 10.96 L60.17 0 L59.67 0 Z M63.18 0 L62.68 0 L62.68 10.96 L63.18 10.96 L63.68 10.96 L63.68 0 L63.18 0 Z M66.69 0 L66.19 0 L66.19 10.96 L66.69 10.96 L67.19 10.96 L67.19 0 L66.69 0 Z M70.2 0 L69.7 0 L69.7 10.96 L70.2 10.96 L70.7 10.96 L70.7 0 L70.2 0 Z M73.71 0 L73.21 0 L73.21 10.96 L73.71 10.96 L74.21 10.96 L74.21 0 L73.71 0 Z M77.22 0 L76.72 0 L76.72 10.96 L77.22 10.96 L77.72 10.96 L77.72 0 L77.22 0 Z M80.73 0 L80.23 0 L80.23 10.96 L80.73 10.96 L81.23 10.96 L81.23 0 L80.73 0 Z M84.24 0 L83.74 0 L83.74 10.96 L84.24 10.96 L84.74 10.96 L84.74 0 L84.24 0 Z M87.75 0 L87.25 0 L87.25 10.96 L87.75 10.96 L88.25 10.96 L88.25 0 L87.75 0 Z M91.26 0 L90.76 0 L90.76 10.96 L91.26 10.96 L91.76 10.96 L91.76 0 L91.26 0 Z M94.77 0 L94.27 0 L94.27 10.96 L94.77 10.96 L95.27 10.96 L95.27 0 L94.77 0 Z" fill="#d4d4d8"/></svg>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>74% · 6,580 left</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#7d818c" }}>Sends this cycle</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>64,200</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#999999" }}>{" / 100,000"}</span>
            </p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "389px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "389px", height: "11px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "249.7px", height: "11px", borderRadius: "3.3px", background: "linear-gradient(90deg, #5985ff 0%, #0044ff 100%)", boxShadow: "inset 0 0 0 1px rgba(0, 53, 199, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "254.1px", top: "0px", width: "133.4px", height: "11px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="133.38" height="10.96" viewBox="0 0 133.38 10.96" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10.96 L-0 10.96 L0.5 10.96 L0.5 0 L0 0 Z M3.51 0 L3.01 0 L3.01 10.96 L3.51 10.96 L4.01 10.96 L4.01 0 L3.51 0 Z M7.02 0 L6.52 0 L6.52 10.96 L7.02 10.96 L7.52 10.96 L7.52 0 L7.02 0 Z M10.53 0 L10.03 0 L10.03 10.96 L10.53 10.96 L11.03 10.96 L11.03 0 L10.53 0 Z M14.04 0 L13.54 0 L13.54 10.96 L14.04 10.96 L14.54 10.96 L14.54 0 L14.04 0 Z M17.55 0 L17.05 0 L17.05 10.96 L17.55 10.96 L18.05 10.96 L18.05 0 L17.55 0 Z M21.06 0 L20.56 0 L20.56 10.96 L21.06 10.96 L21.56 10.96 L21.56 0 L21.06 0 Z M24.57 0 L24.07 0 L24.07 10.96 L24.57 10.96 L25.07 10.96 L25.07 0 L24.57 0 Z M28.08 0 L27.58 0 L27.58 10.96 L28.08 10.96 L28.58 10.96 L28.58 0 L28.08 0 Z M31.59 0 L31.09 0 L31.09 10.96 L31.59 10.96 L32.09 10.96 L32.09 0 L31.59 0 Z M35.1 0 L34.6 0 L34.6 10.96 L35.1 10.96 L35.6 10.96 L35.6 0 L35.1 0 Z M38.61 0 L38.11 0 L38.11 10.96 L38.61 10.96 L39.11 10.96 L39.11 0 L38.61 0 Z M42.12 0 L41.62 0 L41.62 10.96 L42.12 10.96 L42.62 10.96 L42.62 0 L42.12 0 Z M45.63 0 L45.13 0 L45.13 10.96 L45.63 10.96 L46.13 10.96 L46.13 0 L45.63 0 Z M49.14 0 L48.64 0 L48.64 10.96 L49.14 10.96 L49.64 10.96 L49.64 0 L49.14 0 Z M52.65 0 L52.15 0 L52.15 10.96 L52.65 10.96 L53.15 10.96 L53.15 0 L52.65 0 Z M56.16 0 L55.66 0 L55.66 10.96 L56.16 10.96 L56.66 10.96 L56.66 0 L56.16 0 Z M59.67 0 L59.17 0 L59.17 10.96 L59.67 10.96 L60.17 10.96 L60.17 0 L59.67 0 Z M63.18 0 L62.68 0 L62.68 10.96 L63.18 10.96 L63.68 10.96 L63.68 0 L63.18 0 Z M66.69 0 L66.19 0 L66.19 10.96 L66.69 10.96 L67.19 10.96 L67.19 0 L66.69 0 Z M70.2 0 L69.7 0 L69.7 10.96 L70.2 10.96 L70.7 10.96 L70.7 0 L70.2 0 Z M73.71 0 L73.21 0 L73.21 10.96 L73.71 10.96 L74.21 10.96 L74.21 0 L73.71 0 Z M77.22 0 L76.72 0 L76.72 10.96 L77.22 10.96 L77.72 10.96 L77.72 0 L77.22 0 Z M80.73 0 L80.23 0 L80.23 10.96 L80.73 10.96 L81.23 10.96 L81.23 0 L80.73 0 Z M84.24 0 L83.74 0 L83.74 10.96 L84.24 10.96 L84.74 10.96 L84.74 0 L84.24 0 Z M87.75 0 L87.25 0 L87.25 10.96 L87.75 10.96 L88.25 10.96 L88.25 0 L87.75 0 Z M91.26 0 L90.76 0 L90.76 10.96 L91.26 10.96 L91.76 10.96 L91.76 0 L91.26 0 Z M94.77 0 L94.27 0 L94.27 10.96 L94.77 10.96 L95.27 10.96 L95.27 0 L94.77 0 Z M98.28 0 L97.78 0 L97.78 10.96 L98.28 10.96 L98.78 10.96 L98.78 0 L98.28 0 Z M101.79 0 L101.29 0 L101.29 10.96 L101.79 10.96 L102.29 10.96 L102.29 0 L101.79 0 Z M105.3 0 L104.8 0 L104.8 10.96 L105.3 10.96 L105.8 10.96 L105.8 0 L105.3 0 Z M108.81 0 L108.31 0 L108.31 10.96 L108.81 10.96 L109.31 10.96 L109.31 0 L108.81 0 Z M112.32 0 L111.82 0 L111.82 10.96 L112.32 10.96 L112.82 10.96 L112.82 0 L112.32 0 Z M115.83 0 L115.33 0 L115.33 10.96 L115.83 10.96 L116.33 10.96 L116.33 0 L115.83 0 Z M119.34 0 L118.84 0 L118.84 10.96 L119.34 10.96 L119.84 10.96 L119.84 0 L119.34 0 Z M122.85 0 L122.35 0 L122.35 10.96 L122.85 10.96 L123.35 10.96 L123.35 0 L122.85 0 Z M126.36 0 L125.86 0 L125.86 10.96 L126.36 10.96 L126.86 10.96 L126.86 0 L126.36 0 Z M129.87 0 L129.37 0 L129.37 10.96 L129.87 10.96 L130.37 10.96 L130.37 0 L129.87 0 Z M133.38 0 L132.88 0 L132.88 10.96 L133.38 10.96 L133.88 10.96 L133.88 0 L133.38 0 Z" fill="#d4d4d8"/></svg>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>64% · resets Jan 1</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#7d818c" }}>Team seats</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>6</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#999999" }}>{" / 10"}</span>
            </p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "389px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "389px", height: "11px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "233.4px", height: "11px", borderRadius: "3.3px", background: "linear-gradient(90deg, #69cca2 0%, #18b170 100%)", boxShadow: "inset 0 0 0 1px rgba(19, 138, 87, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "237.8px", top: "0px", width: "150.9px", height: "11px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="150.93" height="10.96" viewBox="0 0 150.93 10.96" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10.96 L-0 10.96 L0.5 10.96 L0.5 0 L0 0 Z M3.51 0 L3.01 0 L3.01 10.96 L3.51 10.96 L4.01 10.96 L4.01 0 L3.51 0 Z M7.02 0 L6.52 0 L6.52 10.96 L7.02 10.96 L7.52 10.96 L7.52 0 L7.02 0 Z M10.53 0 L10.03 0 L10.03 10.96 L10.53 10.96 L11.03 10.96 L11.03 0 L10.53 0 Z M14.04 0 L13.54 0 L13.54 10.96 L14.04 10.96 L14.54 10.96 L14.54 0 L14.04 0 Z M17.55 0 L17.05 0 L17.05 10.96 L17.55 10.96 L18.05 10.96 L18.05 0 L17.55 0 Z M21.06 0 L20.56 0 L20.56 10.96 L21.06 10.96 L21.56 10.96 L21.56 0 L21.06 0 Z M24.57 0 L24.07 0 L24.07 10.96 L24.57 10.96 L25.07 10.96 L25.07 0 L24.57 0 Z M28.08 0 L27.58 0 L27.58 10.96 L28.08 10.96 L28.58 10.96 L28.58 0 L28.08 0 Z M31.59 0 L31.09 0 L31.09 10.96 L31.59 10.96 L32.09 10.96 L32.09 0 L31.59 0 Z M35.1 0 L34.6 0 L34.6 10.96 L35.1 10.96 L35.6 10.96 L35.6 0 L35.1 0 Z M38.61 0 L38.11 0 L38.11 10.96 L38.61 10.96 L39.11 10.96 L39.11 0 L38.61 0 Z M42.12 0 L41.62 0 L41.62 10.96 L42.12 10.96 L42.62 10.96 L42.62 0 L42.12 0 Z M45.63 0 L45.13 0 L45.13 10.96 L45.63 10.96 L46.13 10.96 L46.13 0 L45.63 0 Z M49.14 0 L48.64 0 L48.64 10.96 L49.14 10.96 L49.64 10.96 L49.64 0 L49.14 0 Z M52.65 0 L52.15 0 L52.15 10.96 L52.65 10.96 L53.15 10.96 L53.15 0 L52.65 0 Z M56.16 0 L55.66 0 L55.66 10.96 L56.16 10.96 L56.66 10.96 L56.66 0 L56.16 0 Z M59.67 0 L59.17 0 L59.17 10.96 L59.67 10.96 L60.17 10.96 L60.17 0 L59.67 0 Z M63.18 0 L62.68 0 L62.68 10.96 L63.18 10.96 L63.68 10.96 L63.68 0 L63.18 0 Z M66.69 0 L66.19 0 L66.19 10.96 L66.69 10.96 L67.19 10.96 L67.19 0 L66.69 0 Z M70.2 0 L69.7 0 L69.7 10.96 L70.2 10.96 L70.7 10.96 L70.7 0 L70.2 0 Z M73.71 0 L73.21 0 L73.21 10.96 L73.71 10.96 L74.21 10.96 L74.21 0 L73.71 0 Z M77.22 0 L76.72 0 L76.72 10.96 L77.22 10.96 L77.72 10.96 L77.72 0 L77.22 0 Z M80.73 0 L80.23 0 L80.23 10.96 L80.73 10.96 L81.23 10.96 L81.23 0 L80.73 0 Z M84.24 0 L83.74 0 L83.74 10.96 L84.24 10.96 L84.74 10.96 L84.74 0 L84.24 0 Z M87.75 0 L87.25 0 L87.25 10.96 L87.75 10.96 L88.25 10.96 L88.25 0 L87.75 0 Z M91.26 0 L90.76 0 L90.76 10.96 L91.26 10.96 L91.76 10.96 L91.76 0 L91.26 0 Z M94.77 0 L94.27 0 L94.27 10.96 L94.77 10.96 L95.27 10.96 L95.27 0 L94.77 0 Z M98.28 0 L97.78 0 L97.78 10.96 L98.28 10.96 L98.78 10.96 L98.78 0 L98.28 0 Z M101.79 0 L101.29 0 L101.29 10.96 L101.79 10.96 L102.29 10.96 L102.29 0 L101.79 0 Z M105.3 0 L104.8 0 L104.8 10.96 L105.3 10.96 L105.8 10.96 L105.8 0 L105.3 0 Z M108.81 0 L108.31 0 L108.31 10.96 L108.81 10.96 L109.31 10.96 L109.31 0 L108.81 0 Z M112.32 0 L111.82 0 L111.82 10.96 L112.32 10.96 L112.82 10.96 L112.82 0 L112.32 0 Z M115.83 0 L115.33 0 L115.33 10.96 L115.83 10.96 L116.33 10.96 L116.33 0 L115.83 0 Z M119.34 0 L118.84 0 L118.84 10.96 L119.34 10.96 L119.84 10.96 L119.84 0 L119.34 0 Z M122.85 0 L122.35 0 L122.35 10.96 L122.85 10.96 L123.35 10.96 L123.35 0 L122.85 0 Z M126.36 0 L125.86 0 L125.86 10.96 L126.36 10.96 L126.86 10.96 L126.86 0 L126.36 0 Z M129.87 0 L129.37 0 L129.37 10.96 L129.87 10.96 L130.37 10.96 L130.37 0 L129.87 0 Z M133.38 0 L132.88 0 L132.88 10.96 L133.38 10.96 L133.88 10.96 L133.88 0 L133.38 0 Z M136.89 0 L136.39 0 L136.39 10.96 L136.89 10.96 L137.39 10.96 L137.39 0 L136.89 0 Z M140.4 0 L139.9 0 L139.9 10.96 L140.4 10.96 L140.9 10.96 L140.9 0 L140.4 0 Z M143.91 0 L143.41 0 L143.41 10.96 L143.91 10.96 L144.41 10.96 L144.41 0 L143.91 0 Z M147.42 0 L146.92 0 L146.92 10.96 L147.42 10.96 L147.92 10.96 L147.92 0 L147.42 0 Z M150.93 0 L150.43 0 L150.43 10.96 L150.93 10.96 L151.43 10.96 L151.43 0 L150.93 0 Z" fill="#d4d4d8"/></svg>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>60% · 4 seats free</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8.8px", background: "#fafafa", display: "flex", flexDirection: "row", padding: "8.8px 11px 8.8px 11px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <InfoCircleBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#6b6b70" }}>We email Jordan and Marcus when any limit reaches 90%.</p>
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
