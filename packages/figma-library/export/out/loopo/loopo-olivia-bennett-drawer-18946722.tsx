"use client";
// Olivia Bennett drawer (loopo, Drawers) from Ingot UI (ingotui.com).
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
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const Send = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14l11 -11\" /><path d=\"M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5\" /></g>");
const Tag = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");
const CursorPointerBulk = icon("<path d=\"M19.5027 9.96958C20.7073 10.4588 20.6154 12.1941 19.3658 12.5533L13.0605 14.3658 10.1807 20.2606C9.60996 21.4288 7.88499 21.218 7.6124 19.9468L4.67677 6.25646C4.44638 5.18204 5.5121 4.2878 6.53019 4.70126L19.5027 9.96958Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const MailOpenBulk = icon("<path d=\"M21.2 8.4C21.7 8.780000000000001 22 9.370000000000001 22 10V20A2 2 0 0 1 20 22H4A2 2 0 0 1 2 20V10A2 2 0 0 1 2.8 8.4L10.8 2.4000000000000004A2 2 0 0 1 13.200000000000001 2.4000000000000004L21.200000000000003 8.4Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10L13.03 15.7A1.94 1.94 0 0 1 10.969999999999999 15.7L2 10\"/></g>");
const NoteBulk = icon("<path d=\"M13 20V14A1 1 0 0 1 14 13H20V6A2 2 0 0 0 18 4H6A2 2 0 0 0 4 6V18A2 2 0 0 0 6 20H13\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 20L20 13\"/></g>");
const RepeatBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3\" /><path d=\"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3\" /></g>");
const ShoppingBagBulk = icon("<path d=\"M6.331 8H17.67A2 2 0 0 1 19.647000000000002 10.304L18.392000000000003 18.456A3 3 0 0 1 15.426000000000002 21H8.574000000000002A3 3 0 0 1 5.609000000000002 18.456L4.354000000000002 10.304A2 2 0 0 1 6.331000000000002 8\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 11V6A3 3 0 0 1 15 6V11\"/></g>");

export function OliviaBennettDrawer() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "525.91px", height: "1156px", borderRadius: "17.53px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 26.3px 52.59px -13.15px rgba(13, 13, 18, 0.16)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "19.72px 19.72px 17.53px 19.72px", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "48.21px", height: "48.21px", flexShrink: 0, borderRadius: "24.1px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "25px", fontFamily: "'Geist'", fontSize: "19.28px", fontWeight: 500, color: "#fd4b23" }}>OB</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#000000", lineHeight: "1.5" }}>Olivia Bennett</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>olivia.bennett@gmail.com · Portland, OR</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#fff0eb", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#fd4b23"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#fd4b23" }}>Harbor Club Plus</p>
            </div>
          </div>
        </div>
        <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 19.72px 19.72px 19.72px", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "14.25px 14.25px 14.25px 14.25px", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Orders</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>12</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "86.99px", height: "26px", flexShrink: 0, position: "relative" }}>
                <div data-fu="bar" style={{ position: "absolute", left: "0px", top: "11.52px", width: "5.04px", height: "14.48px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "7.45px", top: "7.57px", width: "5.04px", height: "18.43px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "14.9px", top: "15.47px", width: "5.04px", height: "10.53px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "22.35px", top: "1.65px", width: "5.04px", height: "24.35px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "29.8px", top: "10.2px", width: "5.04px", height: "15.8px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "37.25px", top: "14.15px", width: "5.04px", height: "11.85px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "44.7px", top: "3.62px", width: "5.04px", height: "22.38px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "52.15px", top: "8.89px", width: "5.04px", height: "17.11px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "59.6px", top: "0px", width: "5.04px", height: "26px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "67.05px", top: "10.7px", width: "5.04px", height: "15.3px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div data-fu="bar" style={{ position: "absolute", left: "74.5px", top: "12.01px", width: "5.04px", height: "13.99px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
                <div style={{ position: "absolute", left: "81.95px", top: "4.94px", width: "5.04px", height: "21.06px", borderRadius: "1.75px 1.75px 1.1px 1.1px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Avg. $107</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "14.25px 14.25px 14.25px 14.25px", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Lifetime value</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>$1,284</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <svg style={{ width: "59.16px", height: "26px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="59.16" height="26" viewBox="0 0 59.16 26" fill="none" overflow="visible"><defs><linearGradient id="g144_653h" gradientUnits="userSpaceOnUse" x1="26.30" y1="0.00" x2="26.30" y2="22.71"><stop offset="0" stopColor="#fd4b23" stopOpacity="0.16"/><stop offset="1" stopColor="#fd4b23" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1.1 3.289)" d="M0 20.52 C0.29 20.4 4.21 18.78 4.78 18.6 C5.35 18.42 8.99 17.72 9.56 17.5 C10.14 17.28 13.77 15.21 14.34 14.96 C14.92 14.71 18.55 13.49 19.12 13.31 C19.7 13.14 23.33 12.29 23.9 12.08 C24.48 11.86 28.11 9.99 28.69 9.75 C29.26 9.5 32.89 8.23 33.47 7.96 C34.04 7.69 37.67 5.51 38.25 5.25 C38.82 4.99 42.45 3.84 43.03 3.65 C43.6 3.47 47.24 2.42 47.81 2.2 C48.38 1.98 52.3 0.13 52.59 0 L52.59 22.71 L0 22.71 L0 20.52 Z" fill="url(#g144_653h)"/><path transform="matrix(1 0 0 1 1.1 3.289)" d="M-0.292499 19.8131 C-0.682894 19.9747 -0.868416 20.4221 -0.706873 20.8125 C-0.54533 21.2029 -0.097896 21.3884 0.292499 21.2269 L0 20.52 L-0.292499 19.8131 Z M9.56 17.5 L9.28869 16.7847 L9.28454 16.7863 L9.56 17.5 Z M14.34 14.96 L14.0372 14.2575 L14.0327 14.2594 L14.34 14.96 Z M19.12 13.31 L18.9048 12.5759 C18.8997 12.5774 18.8947 12.5789 18.8896 12.5805 L19.12 13.31 Z M23.9 12.08 L24.1645 12.7979 L24.1713 12.7953 L23.9 12.08 Z M28.69 9.75 L28.9825 10.4569 C28.9874 10.4548 28.9924 10.4527 28.9973 10.4506 L28.69 9.75 Z M33.47 7.96 L33.7929 8.65355 L33.7975 8.65136 L33.47 7.96 Z M38.25 5.25 L38.5629 5.94808 L38.5675 5.94601 L38.25 5.25 Z M43.03 3.65 L42.7996 2.92047 L42.7918 2.92301 L43.03 3.65 Z M52.9029 0.69807 C53.2885 0.525244 53.4609 0.0726054 53.2881 -0.312928 C53.1152 -0.698461 52.6626 -0.870895 52.2771 -0.69807 L52.59 0 L52.9029 0.69807 Z M0 20.52 L0.292499 21.2269 C0.612522 21.0944 4.48205 19.4963 5.01037 19.3295 L4.78 18.6 L4.54963 17.8705 C3.93795 18.0637 -0.0325217 19.7056 -0.292499 19.8131 L0 20.52 Z M4.78 18.6 L5.01037 19.3295 C5.24928 19.254 6.24014 19.0461 7.32993 18.8131 C7.85605 18.7006 8.38785 18.5857 8.82495 18.4848 C9.236 18.3898 9.63109 18.2926 9.83546 18.2137 L9.56 17.5 L9.28454 16.7863 C9.20391 16.8174 8.93025 16.8902 8.48068 16.994 C8.05715 17.0918 7.53645 17.2044 7.01007 17.3169 C5.99486 17.5339 4.88072 17.766 4.54963 17.8705 L4.78 18.6 Z M9.56 17.5 L9.83131 18.2153 C10.0321 18.1391 10.4176 17.9403 10.8304 17.721 C11.2661 17.4895 11.7961 17.2001 12.3215 16.9121 C13.4034 16.319 14.4032 15.7676 14.6473 15.6606 L14.34 14.96 L14.0327 14.2594 C13.7068 14.4024 12.6066 15.011 11.586 15.5704 C11.0602 15.8587 10.5383 16.1436 10.1124 16.3699 C9.66363 16.6084 9.37786 16.7509 9.28869 16.7847 L9.56 17.5 Z M14.34 14.96 L14.6428 15.6625 C15.1803 15.4308 18.7708 14.2225 19.3504 14.0395 L19.12 13.31 L18.8896 12.5805 C18.3292 12.7575 14.6597 13.9892 14.0372 14.2575 L14.34 14.96 Z M19.12 13.31 L19.3352 14.0441 C19.6043 13.9652 20.6265 13.7175 21.6974 13.4526 C22.717 13.2005 23.8278 12.9219 24.1645 12.7978 L23.9 12.08 L23.6355 11.3622 C23.4022 11.4481 22.413 11.6995 21.3301 11.9674 C20.2985 12.2225 19.2157 12.4848 18.9048 12.5759 L19.12 13.31 Z M23.9 12.08 L24.1713 12.7953 C24.5083 12.6675 25.6136 12.1173 26.6365 11.6071 C27.713 11.0701 28.7254 10.5633 28.9825 10.4569 L28.69 9.75 L28.3975 9.04313 C28.0746 9.17674 26.982 9.72493 25.9535 10.2379 C24.8714 10.7777 23.8717 11.2725 23.6287 11.3647 L23.9 12.08 Z M28.69 9.75 L28.9973 10.4506 C29.2525 10.3386 30.2639 9.97215 31.3378 9.58139 C32.3631 9.20834 33.4635 8.80685 33.7929 8.65353 L33.47 7.96 L33.1471 7.26646 C32.8965 7.38315 31.8919 7.75166 30.8147 8.14361 C29.7861 8.51785 28.6975 8.91136 28.3827 9.04942 L28.69 9.75 Z M33.47 7.96 L33.7975 8.65136 C34.121 8.49812 35.2168 7.85799 36.2408 7.26258 C37.3228 6.63343 38.3212 6.05643 38.5629 5.94807 L38.25 5.25 L37.9371 4.55193 C37.5988 4.70357 36.4922 5.34657 35.4717 5.93992 C34.3932 6.56701 33.389 7.15188 33.1425 7.26864 L33.47 7.96 Z M38.25 5.25 L38.5675 5.94601 C38.8022 5.83894 39.7946 5.50381 40.874 5.15086 C41.8748 4.82362 43.0189 4.45865 43.2682 4.37699 L43.03 3.65 L42.7918 2.92301 C42.4611 3.03135 41.5002 3.33638 40.3985 3.69664 C39.3754 4.03119 38.2678 4.40106 37.9325 4.55399 L38.25 5.25 Z M43.03 3.65 L43.2604 4.37949 C43.5371 4.29211 44.5743 3.9891 45.6377 3.67336 C46.6686 3.36729 47.7636 3.03793 48.0855 2.91369 L47.81 2.2 L47.5345 1.48631 C47.2864 1.58207 46.2764 1.88771 45.2023 2.20664 C44.1607 2.5159 43.0929 2.82789 42.7996 2.92051 L43.03 3.65 Z M47.81 2.2 L48.0855 2.91369 C48.6771 2.68535 52.6677 0.803495 52.9029 0.69807 L52.59 0 L52.2771 -0.69807 C51.9323 -0.543495 48.0829 1.27465 47.5345 1.48631 L47.81 2.2 Z" fill="#fd4b23"/><path transform="matrix(1 0 0 1 50.95 0.551)" d="M5.48 2.74 C5.48 4.25326 4.25326 5.48 2.74 5.48 C1.22674 5.48 0 4.25326 0 2.74 C0 1.22674 1.22674 0 2.74 0 C4.25326 0 5.48 1.22674 5.48 2.74 Z" fill="#fd4b23"/><path transform="matrix(1 0 0 1 50.95 0.551)" d="M5.48 2.74 L4.17 2.74 C4.17 3.52977 3.52977 4.17 2.74 4.17 L2.74 5.48 L2.74 6.79 C4.97675 6.79 6.79 4.97675 6.79 2.74 L5.48 2.74 Z M2.74 5.48 L2.74 4.17 C1.95023 4.17 1.31 3.52977 1.31 2.74 L0 2.74 L-1.31 2.74 C-1.31 4.97675 0.503247 6.79 2.74 6.79 L2.74 5.48 Z M0 2.74 L1.31 2.74 C1.31 1.95023 1.95023 1.31 2.74 1.31 L2.74 0 L2.74 -1.31 C0.503247 -1.31 -1.31 0.503247 -1.31 2.74 L0 2.74 Z M2.74 0 L2.74 1.31 C3.52977 1.31 4.17 1.95023 4.17 2.74 L5.48 2.74 L6.79 2.74 C6.79 0.503247 4.97675 -1.31 2.74 -1.31 L2.74 0 Z" fill="#ffffff"/></svg>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Top 5% of buyers</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "14.25px 14.25px 14.25px 14.25px", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Open rate</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>64%</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <svg style={{ width: "26px", height: "26px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.19 2.189)" d="M10.8 1.54999e-05 L10.8037 2.19001 L10.8037 2.19001 L10.8 1.54999e-05 Z M21.62 10.81 L19.43 10.81 C19.43 15.5705 15.5705 19.43 10.81 19.43 L10.81 21.62 L10.81 23.81 C17.9895 23.81 23.81 17.9895 23.81 10.81 L21.62 10.81 Z M10.81 21.62 L10.81 19.43 C6.0589 19.43 2.19799 15.5791 2.19001 10.8163 L1.5468e-05 10.82 L-2.18998 10.8237 C-2.17796 18.0009 3.64113 23.81 10.81 23.81 L10.81 21.62 Z M1.5468e-05 10.82 L2.19001 10.8163 C2.18205 6.06013 6.03891 2.19799 10.8037 2.19001 L10.8 1.54999e-05 L10.7963 -2.18998 C3.62113 -2.17796 -2.20201 3.63991 -2.18998 10.8237 L1.5468e-05 10.82 Z M10.8 1.54999e-05 L10.8037 2.19001 C15.5539 2.18204 19.422 6.03286 19.43 10.7937 L21.62 10.79 L23.81 10.7863 C23.798 3.60717 17.9662 -2.20201 10.7963 -2.18998 L10.8 1.54999e-05 Z" fill="#ffe2dc"/><path transform="matrix(1 0 0 1 4.671 2.189)" d="M8.33 -2.19 C7.1205 -2.19 6.14 -1.2095 6.14 0 C6.14 1.2095 7.1205 2.19 8.33 2.19 L8.33 0 L8.33 -2.19 Z M18.85 8.34 L16.7172 8.83722 L16.7182 8.84135 L18.85 8.34 Z M13.14 20.49 L14.1124 22.4523 L14.1142 22.4514 L13.14 20.49 Z M1.68775 16.3044 C0.917008 15.3723 -0.463438 15.2415 -1.39556 16.0122 C-2.32768 16.783 -2.4585 18.1634 -1.68775 19.0956 L0 17.7 L1.68775 16.3044 Z M8.33 0 L8.33 2.19 C12.3351 2.19 15.809 4.94159 16.7172 8.83722 L18.85 8.34 L20.9828 7.84278 C19.611 1.95841 14.3649 -2.19 8.33 -2.19 L8.33 0 Z M18.85 8.34 L16.7182 8.84135 C17.6351 12.7405 15.7455 16.7507 12.1658 18.5286 L13.14 20.49 L14.1142 22.4514 C19.5145 19.7693 22.3649 13.7195 20.9818 7.83865 L18.85 8.34 Z M13.14 20.49 L12.1676 18.5277 C8.57524 20.3079 4.23778 19.3884 1.68775 16.3044 L0 17.7 L-1.68775 19.0956 C2.16222 23.7516 8.70476 25.1321 14.1124 22.4523 L13.14 20.49 Z" fill="#fd4b23"/></svg>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Last 90 days</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Details</p>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#7d818c" }}>Plan</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Plus · since Mar 2025</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#7d818c" }}>Location</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>Portland, OR · United States</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#7d818c" }}>Source</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>Homepage pop-up</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#7d818c" }}>Subscribed</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>Mar 4, 2025 · double opt-in</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#7d818c" }}>Tags</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>VIP</p>
              </div>
              <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Portland local</p>
              </div>
              <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Gift buyer</p>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#7d818c" }}>Segments</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>VIP customers</p>
              </div>
              <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Portland locals</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>+1</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 8.77px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Activity</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#fd4b23" }}>View all 48 events</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <ShoppingBagBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
              </div>
              <div style={{ width: "1.1px", height: "17.53px", flexShrink: 0, background: "#e8e8eb" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "4.38px 0px 0px 0px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>Bought 2 × Walnut Cutting Board</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Today, 10:24 AM · $128.00 · #TX-48213</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(77, 152, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <MailOpenBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
              </div>
              <div style={{ width: "1.1px", height: "17.53px", flexShrink: 0, background: "#e8e8eb" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "4.38px 0px 0px 0px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>Opened “Holiday Gift Guide”</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Dec 2, 2026 · 9:41 AM · clicked Shop gifts</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <ShoppingBagBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
              </div>
              <div style={{ width: "1.1px", height: "17.53px", flexShrink: 0, background: "#e8e8eb" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "4.38px 0px 0px 0px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>Bought Cast Iron Skillet</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Nov 28, 2026 · $85.00 · Online store</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 114, 171, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <CursorPointerBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#ff72ab", display: "block" }} />
              </div>
              <div style={{ width: "1.1px", height: "17.53px", flexShrink: 0, background: "#e8e8eb" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "4.38px 0px 0px 0px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>Clicked “Black Friday — 25% off”</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Nov 27, 2026 · Shop the sale</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(24, 177, 112, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <RepeatBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#18b170", display: "block" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "4.38px 0px 0px 0px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>Renewed Harbor Club Plus</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Nov 15, 2026 · $24.00 · Visa •• 4242</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Internal note</p>
          <div data-fu="field" style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <NoteBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>Prefers gift wrap on holiday orders — Sam, Dec 3</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Only your team sees notes · @mention to notify</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "16.44px 19.72px 15.34px 19.72px", gap: "10.96px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div data-fu="btn" style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
        <div data-fu="btn" style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Tag size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Add tag</p>
        </div>
        <div data-fu="btn" style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Send size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Send email</p>
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
