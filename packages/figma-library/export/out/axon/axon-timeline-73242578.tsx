"use client";
// Timeline (axon, Charts) from Ingot UI (ingotui.com).
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
const Checklist = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8\" /><path d=\"M14 19l2 2l4 -4\" /><path d=\"M9 8h4\" /><path d=\"M9 12h2\" /></g>");
const CircleCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M9 12l2 2l4 -4\" /></g>");
const GitBranch = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M7 8l0 8\" /><path d=\"M9 18h6a2 2 0 0 0 2 -2v-5\" /><path d=\"M14 14l3 -3l3 3\" /></g>");
const Loader = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l0 -3\" /><path d=\"M16.25 7.75l2.15 -2.15\" /><path d=\"M18 12l3 0\" /><path d=\"M16.25 16.25l2.15 2.15\" /><path d=\"M12 18l0 3\" /><path d=\"M7.75 16.25l-2.15 2.15\" /><path d=\"M6 12l-3 0\" /><path d=\"M7.75 7.75l-2.15 -2.15\" /></g>");
const Minus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l14 0\" /></g>");
const Sparkles = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6\" /></g>");

export function Timeline() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "759px", height: "512px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Run T-1043</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Started 2.1s ago · Sandbox · writes mocked</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Loader size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>Running · step 3 of 6</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 4px 4px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Step</p>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
        <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>0s</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>3.4s</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>6.8s</p>
        </div>
        <div style={{ width: "44px", height: "4px", flexShrink: 0, overflow: "hidden" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CircleCheck size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#17a673", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "16px", height: "16px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.998)" d="M16 1.63969 L16 10.9124 C16 11.515 15.512 12.003 14.9093 12.003 L12.3633 12.003 L12.3633 5.82169 L8 9.09502 L3.63667 5.82169 L3.63667 12.0037 L1.09067 12.0037 C0.947382 12.0037 0.805502 11.9755 0.673133 11.9206 C0.540764 11.8657 0.4205 11.7854 0.319213 11.684 C0.217927 11.5827 0.137603 11.4623 0.0828308 11.3299 C0.0280589 11.1975 -8.73785e-05 11.0556 2.03768e-07 10.9124 L2.03768e-07 1.63969 C2.03768e-07 0.291021 1.53933 -0.478979 2.618 0.330354 L3.63667 1.09502 L8 4.36702 L12.3633 1.09369 L13.382 0.330354 C14.46 -0.478313 16 0.291021 16 1.63969 Z" fill="#ea4335"/></svg>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Email received</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"Sample "}</span>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>INV-20931.pdf</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" · 1 attachment"}</span>
          </p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "8.82px", height: "8px", borderRadius: "4px", background: "#1b8ce8" }} />
        </div>
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>0.2s</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CircleCheck size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#17a673", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Sparkles size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Extract invoice fields</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>9 fields · Sonnet 5.5 · 2,104 tokens</p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "8.82px", top: "0px", width: "61.76px", height: "8px", borderRadius: "4px", background: "#1b8ce8" }} />
        </div>
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>1.4s</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Loader size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#fef5f0", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <GitBranch size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#ff5601", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>PO found and confidence ≥ 92%?</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"Took "}</span>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>No</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" · po_number at 81%"}</span>
          </p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "96px", top: "0px", width: "120px", height: "8px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(27, 140, 232, 0.2) 0%, rgba(27, 140, 232, 0.6) 100%)" }} />
        </div>
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>…</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, opacity: 0.5, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Minus size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#fdf0f7", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Checklist size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#ef0c78", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Send to Review Queue</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Mocked · task would go to AP team</p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden" }} />
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>—</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, opacity: 0.5, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Minus size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#1a3d6e", position: "relative" }}>
            <p style={{ position: "absolute", left: "4px", top: "4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>NS</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Create vendor bill</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Skipped · branch not taken</p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden" }} />
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>—</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, opacity: 0.5, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Minus size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "16px", height: "16px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.36133 10.11 C3.36045 10.5555 3.18324 10.9825 2.86842 11.2977 C2.55361 11.6129 2.12681 11.7906 1.68133 11.792 C1.23563 11.7909 0.808485 11.6134 0.493383 11.2981 C0.178282 10.9829 0.000880292 10.5557 1.11022e-16 10.11 C0.00123297 9.66459 0.178811 9.23778 0.493894 8.92295 C0.808976 8.60812 1.23592 8.43088 1.68133 8.43 L3.36133 8.43 L3.36133 10.11 Z M4.20867 10.11 C4.2099 9.6647 4.38739 9.238 4.70232 8.92319 C5.01726 8.60837 5.44403 8.43106 5.88933 8.43 C6.33463 8.43106 6.7614 8.60837 7.07634 8.92319 C7.39128 9.238 7.56877 9.6647 7.57 10.11 L7.57 14.3187 C7.56894 14.7641 7.39156 15.1911 7.07662 15.5061 C6.76168 15.8212 6.33481 15.9988 5.88933 16 C5.44386 15.9988 5.01699 15.8212 4.70205 15.5061 C4.38711 15.1911 4.20972 14.7641 4.20867 14.3187 L4.20867 10.11 Z M5.88933 3.36133 C5.44409 3.3601 5.01742 3.18273 4.70252 2.86795 C4.38762 2.55318 4.21007 2.12658 4.20867 1.68133 C4.20972 1.23586 4.38711 0.808916 4.70205 0.493853 C5.01699 0.178789 5.44386 0.00123227 5.88933 0 C6.33481 0.00123227 6.76168 0.178789 7.07662 0.493853 C7.39156 0.808916 7.56894 1.23586 7.57 1.68133 L7.57 3.36133 L5.88933 3.36133 Z M5.88933 4.20867 C6.3347 4.2099 6.76146 4.38736 7.07638 4.70228 C7.3913 5.0172 7.56877 5.44397 7.57 5.88933 C7.56877 6.3347 7.3913 6.76146 7.07638 7.07638 C6.76146 7.3913 6.3347 7.56877 5.88933 7.57 L1.68133 7.57 C1.23586 7.56894 0.808916 7.39156 0.493853 7.07662 C0.178789 6.76168 0.00123227 6.33481 0 5.88933 C0.00123227 5.44386 0.178789 5.01699 0.493853 4.70205 C0.808916 4.38711 1.23586 4.20972 1.68133 4.20867 L5.88933 4.20867 Z M12.6373 5.88933 C12.6386 5.44386 12.8161 5.01699 13.1312 4.70205 C13.4462 4.38711 13.8732 4.20972 14.3187 4.20867 C14.7641 4.20972 15.1911 4.38711 15.5061 4.70205 C15.8212 5.01699 15.9988 5.44386 16 5.88933 C15.9988 6.33481 15.8212 6.76168 15.5061 7.07662 C15.1911 7.39156 14.7641 7.56894 14.3187 7.57 L12.6373 7.57 L12.6373 5.88933 Z M11.792 5.88933 C11.7908 6.33493 11.6131 6.7619 11.2979 7.07685 C10.9827 7.39181 10.5556 7.56912 10.11 7.57 C9.6647 7.56877 9.238 7.39128 8.92319 7.07634 C8.60837 6.7614 8.43106 6.33463 8.43 5.88933 L8.43 1.68133 C8.43088 1.23592 8.60812 0.808976 8.92295 0.493894 C9.23778 0.178811 9.66459 0.00123297 10.11 3.33067e-16 C10.5557 0.000880292 10.9829 0.178282 11.2981 0.493383 C11.6134 0.808485 11.7909 1.23563 11.792 1.68133 L11.792 5.88933 Z M10.11 12.6373 C10.5557 12.6382 10.9829 12.8156 11.2981 13.1307 C11.6134 13.4458 11.7909 13.873 11.792 14.3187 C11.7909 14.7644 11.6134 15.1915 11.2981 15.5066 C10.9829 15.8217 10.5557 15.9991 10.11 16 C9.66459 15.9988 9.23778 15.8212 8.92295 15.5061 C8.60812 15.191 8.43088 14.7641 8.43 14.3187 L8.43 12.6373 L10.11 12.6373 Z M10.11 11.792 C9.66447 11.7908 9.23757 11.6131 8.92272 11.2979 C8.60787 10.9826 8.4307 10.5555 8.43 10.11 C8.43106 9.66476 8.6084 9.23806 8.92323 8.92323 C9.23806 8.6084 9.66476 8.43106 10.11 8.43 L14.3187 8.43 C14.7641 8.43088 15.191 8.60812 15.5061 8.92295 C15.8212 9.23778 15.9988 9.66459 16 10.11 C15.9991 10.5557 15.8217 10.9829 15.5066 11.2981 C15.1915 11.6134 14.7644 11.7909 14.3187 11.792 L10.11 11.792 Z" fill="#4a154b"/></svg>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Post daily summary</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"Mocked · would post to "}</span>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>#finance-ops</span>
          </p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden" }} />
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>—</p>
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
