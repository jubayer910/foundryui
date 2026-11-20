"use client";
// Video (mailpulse, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Settings = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065\" /><path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" /></g>");

export function Video() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "689.07px", height: "360px", borderRadius: "12.79px", background: "#202020", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "32.9px", top: "32.9px", width: "259px", height: "109.28px", display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "rgba(255, 255, 255, 0.5)", letterSpacing: "0.02em", textTransform: "uppercase" }}>The Newsletter Growth Playbook</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#ffffff", lineHeight: "1.2000000476837158", letterSpacing: "-0.02em" }}>{"Every reader can bring\nthe next one."}</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "rgba(255, 255, 255, 0.5)" }}>Referral signups, last 10 weeks</p>
      </div>
      <div style={{ position: "absolute", left: "442.35px", top: "192.79px", width: "213.82px", height: "93.21px", display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
          <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "315.29px", top: "138.76px", width: "58.48px", height: "58.48px", borderRadius: "29.24px", background: "#ffffff", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "row", padding: "0px 0px 0px 3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "15.95px", height: "18.84px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.95" height="18.84" viewBox="0 0 15.95 18.84" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 1.51875 C0 0.31875 1.3 -0.38125 2.3 0.21875 L15.2 8.11875 C16.2 8.71875 16.2 10.1187 15.2 10.7188 L2.3 18.6187 C1.3 19.2188 0 18.5188 0 17.3188 L0 1.51875 Z" fill="#202020"/><path transform="matrix(1 0 0 1 0 0)" d="M2.3 0.21875 L2.56114 -0.207663 L2.55725 -0.209996 L2.3 0.21875 Z M15.2 8.11875 L14.9389 8.54516 L14.9428 8.5475 L15.2 8.11875 Z M15.2 10.7188 L14.9427 10.29 L14.9389 10.2924 L15.2 10.7188 Z M2.3 18.6187 L2.55726 19.0475 L2.56113 19.0451 L2.3 18.6187 Z M0 1.51875 L0.5 1.51875 C0.5 0.718318 1.36661 0.241809 2.04275 0.647496 L2.3 0.21875 L2.55725 -0.209996 C1.23339 -1.00431 -0.5 -0.0808185 -0.5 1.51875 L0 1.51875 Z M2.3 0.21875 L2.03887 0.645146 L14.9389 8.54515 L15.2 8.11875 L15.4611 7.69235 L2.56113 -0.207646 L2.3 0.21875 Z M15.2 8.11875 L14.9428 8.5475 C15.6191 8.95329 15.6191 9.8842 14.9428 10.29 L15.2 10.7188 L15.4572 11.1475 C16.7809 10.3533 16.7809 8.48421 15.4572 7.69 L15.2 8.11875 Z M15.2 10.7188 L14.9389 10.2924 L2.03887 18.1924 L2.3 18.6187 L2.56113 19.0451 L15.4611 11.1451 L15.2 10.7188 Z M2.3 18.6187 L2.04275 18.19 C1.36661 18.5957 0.5 18.1192 0.5 17.3188 L0 17.3188 L-0.5 17.3188 C-0.5 18.9183 1.23339 19.8418 2.55725 19.0475 L2.3 18.6187 Z M0 17.3188 L0.5 17.3188 L0.5 1.51875 L0 1.51875 L-0.5 1.51875 L-0.5 17.3188 L0 17.3188 Z" fill="#000000"/></svg>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "316.93px", width: "689.07px", height: "43.07px", display: "flex", flexDirection: "column", padding: "0px 16.45px 12.79px 16.45px", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "3.66px", flexShrink: 0, borderRadius: "1.83px", background: "rgba(255, 255, 255, 0.2)", position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "406.83px", height: "3.66px", borderRadius: "1.83px", background: "rgba(255, 255, 255, 0.25)" }} />
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "290.1px", height: "3.66px", borderRadius: "1.83px", background: "rgba(124, 83, 249, 0.7)" }} />
          <svg style={{ position: "absolute", left: "284.62px", top: "-3.66px", width: "10.97px", height: "10.97px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.97" height="10.97" viewBox="0 0 10.97 10.97" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10.97 5.485 C10.97 8.51428 8.51428 10.97 5.485 10.97 C2.45572 10.97 0 8.51428 0 5.485 C0 2.45572 2.45572 0 5.485 0 C8.51428 0 10.97 2.45572 10.97 5.485 Z" fill="#ffffff"/></svg>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "10.93px", height: "13.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.93" height="13.4" viewBox="0 0 10.93 13.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 1.09812 C0 0.198122 1 -0.301878 1.7 0.198122 L10.4 5.79812 C11.1 6.19812 11.1 7.19812 10.4 7.59812 L1.7 13.1981 C1 13.6981 0 13.1981 0 12.2981 L0 1.09812 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 0 0)" d="M1.7 0.198122 L1.40938 0.604989 L1.41922 0.612013 L1.42938 0.618554 L1.7 0.198122 Z M10.4 5.79812 L10.1294 6.21855 L10.1405 6.2257 L10.1519 6.23224 L10.4 5.79812 Z M10.4 7.59812 L10.1519 7.164 L10.1405 7.17055 L10.1294 7.17769 L10.4 7.59812 Z M1.7 13.1981 L1.42938 12.7777 L1.41922 12.7842 L1.40938 12.7913 L1.7 13.1981 Z M0 1.09812 L0.5 1.09812 C0.5 0.600319 1.04396 0.343976 1.40938 0.604989 L1.7 0.198122 L1.99062 -0.208744 C0.956037 -0.947731 -0.5 -0.204074 -0.5 1.09812 L0 1.09812 Z M1.7 0.198122 L1.42938 0.618554 L10.1294 6.21855 L10.4 5.79812 L10.6706 5.37769 L1.97062 -0.22231 L1.7 0.198122 Z M10.4 5.79812 L10.1519 6.23224 C10.516 6.4403 10.516 6.95595 10.1519 7.164 L10.4 7.59812 L10.6481 8.03224 C11.684 7.4403 11.684 5.95595 10.6481 5.364 L10.4 5.79812 Z M10.4 7.59812 L10.1294 7.17769 L1.42938 12.7777 L1.7 13.1981 L1.97062 13.6186 L10.6706 8.01855 L10.4 7.59812 Z M1.7 13.1981 L1.40938 12.7913 C1.04396 13.0523 0.5 12.7959 0.5 12.2981 L0 12.2981 L-0.5 12.2981 C-0.5 13.6003 0.956038 14.344 1.99062 13.605 L1.7 13.1981 Z M0 12.2981 L0.5 12.2981 L0.5 1.09812 L0 1.09812 L-0.5 1.09812 L-0.5 12.2981 L0 12.2981 Z" fill="#000000"/></svg>
            <svg style={{ width: "11.94px", height: "12.8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11.94" height="12.8" viewBox="0 0 11.94 12.8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 3.8 L3.6 3.8 L8 0 L8 12.8 L3.6 9 L0 9 L0 3.8 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 0 0)" d="M0 3.8 L0 3.3 L-0.5 3.3 L-0.5 3.8 L0 3.8 Z M3.6 3.8 L3.6 4.3 L3.78602 4.3 L3.92681 4.17841 L3.6 3.8 Z M8 0 L8.5 0 L8.5 -1.09247 L7.67319 -0.378412 L8 0 Z M8 12.8 L7.67319 13.1784 L8.5 13.8925 L8.5 12.8 L8 12.8 Z M3.6 9 L3.92681 8.62159 L3.78602 8.5 L3.6 8.5 L3.6 9 Z M0 9 L-0.5 9 L-0.5 9.5 L0 9.5 L0 9 Z M0 3.8 L0 4.3 L3.6 4.3 L3.6 3.8 L3.6 3.3 L0 3.3 L0 3.8 Z M3.6 3.8 L3.92681 4.17841 L8.32681 0.378412 L8 0 L7.67319 -0.378412 L3.27319 3.42159 L3.6 3.8 Z M8 0 L7.5 0 L7.5 12.8 L8 12.8 L8.5 12.8 L8.5 0 L8 0 Z M8 12.8 L8.32681 12.4216 L3.92681 8.62159 L3.6 9 L3.27319 9.37841 L7.67319 13.1784 L8 12.8 Z M3.6 9 L3.6 8.5 L0 8.5 L0 9 L0 9.5 L3.6 9.5 L3.6 9 Z M0 9 L0.5 9 L0.5 3.8 L0 3.8 L-0.5 3.8 L-0.5 9 L0 9 Z" fill="#000000"/><path transform="matrix(1 0 0 1 10.74 2.9)" d="M0.545609 -0.484986 C0.277759 -0.786317 -0.183654 -0.813459 -0.484986 -0.545609 C-0.786317 -0.277759 -0.813459 0.183654 -0.545609 0.484986 L0 0 L0.545609 -0.484986 Z M-0.545609 6.51501 C-0.813459 6.81635 -0.786317 7.27776 -0.484986 7.54561 C-0.183654 7.81346 0.277759 7.78632 0.545609 7.48499 L0 7 L-0.545609 6.51501 Z M0 0 L-0.545609 0.484986 C0.108433 1.22078 0.47 2.33315 0.47 3.5 C0.47 4.66685 0.108433 5.77922 -0.545609 6.51501 L0 7 L0.545609 7.48499 C1.49157 6.42078 1.93 4.93315 1.93 3.5 C1.93 2.06685 1.49157 0.579218 0.545609 -0.484986 L0 0 Z" fill="#ffffff"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#ffffff" }}>04:12 / 09:30</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#ffffff" }}>1×</p>
            <div style={{ flexShrink: 0, borderRadius: "3.66px", boxShadow: "inset 0 0 0 0.91px #ffffff", display: "flex", flexDirection: "row", padding: "2.74px 5.48px 2.74px 5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.14px", fontWeight: 600, color: "#ffffff" }}>CC</p>
            </div>
            <Settings size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-0.73 4 C-0.73 4.40317 -0.403168 4.73 0 4.73 C0.403168 4.73 0.73 4.40317 0.73 4 L0 4 L-0.73 4 Z M0 0 L0 -0.73 C-0.403168 -0.73 -0.73 -0.403168 -0.73 1.62093e-16 L0 0 Z M4 0.73 C4.40317 0.73 4.73 0.403168 4.73 0 C4.73 -0.403168 4.40317 -0.73 4 -0.73 L4 0 L4 0.73 Z M9 -0.73 C8.59683 -0.73 8.27 -0.403168 8.27 0 C8.27 0.403168 8.59683 0.73 9 0.73 L9 0 L9 -0.73 Z M13 0 L13.73 0 C13.73 -0.403168 13.4032 -0.73 13 -0.73 L13 0 Z M12.27 4 C12.27 4.40317 12.5968 4.73 13 4.73 C13.4032 4.73 13.73 4.40317 13.73 4 L13 4 L12.27 4 Z M13.73 9 C13.73 8.59683 13.4032 8.27 13 8.27 C12.5968 8.27 12.27 8.59683 12.27 9 L13 9 L13.73 9 Z M13 13 L13 13.73 C13.4032 13.73 13.73 13.4032 13.73 13 L13 13 Z M9 12.27 C8.59683 12.27 8.27 12.5968 8.27 13 C8.27 13.4032 8.59683 13.73 9 13.73 L9 13 L9 12.27 Z M4 13.73 C4.40317 13.73 4.73 13.4032 4.73 13 C4.73 12.5968 4.40317 12.27 4 12.27 L4 13 L4 13.73 Z M0 13 L-0.73 13 C-0.73 13.4032 -0.403168 13.73 1.62093e-16 13.73 L0 13 Z M0.73 9 C0.73 8.59683 0.403168 8.27 0 8.27 C-0.403168 8.27 -0.73 8.59683 -0.73 9 L0 9 L0.73 9 Z M0 4 L0.73 4 L0.73 0 L0 0 L-0.73 0 L-0.73 4 L0 4 Z M0 0 L0 0.73 L4 0.73 L4 0 L4 -0.73 L0 -0.73 L0 0 Z M9 0 L9 0.73 L13 0.73 L13 0 L13 -0.73 L9 -0.73 L9 0 Z M13 0 L12.27 0 L12.27 4 L13 4 L13.73 4 L13.73 0 L13 0 Z M13 9 L12.27 9 L12.27 13 L13 13 L13.73 13 L13.73 9 L13 9 Z M13 13 L13 12.27 L9 12.27 L9 13 L9 13.73 L13 13.73 L13 13 Z M4 13 L4 12.27 L0 12.27 L0 13 L0 13.73 L4 13.73 L4 13 Z M0 13 L0.73 13 L0.73 9 L0 9 L-0.73 9 L-0.73 13 L0 13 Z" fill="#ffffff"/></svg>
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
