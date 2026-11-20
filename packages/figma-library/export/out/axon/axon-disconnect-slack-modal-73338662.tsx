"use client";
// Disconnect Slack? modal (axon, Modals) from Ingot UI (ingotui.com).
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
const Outlet = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12\" /><path d=\"M8.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0\" fill=\"currentColor\" /><path d=\"M14.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0\" fill=\"currentColor\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function DisconnectSlackModal() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "520px", height: "460px", borderRadius: "14px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 24px 48px 0px rgba(13, 13, 18, 0.12), 0px 12px 22px 0px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "18px 16px 14px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#fff1f1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Outlet size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#e5484d", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Disconnect Slack?</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Stored credentials are deleted. 7 workflows use Slack and will pause until you connect it again.</p>
        </div>
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6px 20px 20px 20px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M2.73108 8.21438 C2.73037 8.57633 2.58638 8.92327 2.33059 9.17936 C2.07481 9.43545 1.72803 9.57986 1.36608 9.581 C1.00395 9.58014 0.656894 9.43586 0.400874 9.17974 C0.144854 8.92362 0.000715237 8.57651 9.02056e-17 8.21438 C0.00100179 7.85248 0.145284 7.5057 0.401289 7.2499 C0.657293 6.9941 1.00418 6.85009 1.36608 6.84938 L2.73108 6.84938 L2.73108 8.21438 Z M3.41954 8.21438 C3.42054 7.85257 3.56475 7.50588 3.82064 7.25009 C4.07653 6.9943 4.42328 6.85023 4.78508 6.84938 C5.14689 6.85023 5.49364 6.9943 5.74953 7.25009 C6.00542 7.50588 6.14962 7.85257 6.15062 8.21438 L6.15062 11.6339 C6.14977 11.9959 6.00564 12.3428 5.74975 12.5987 C5.49387 12.8547 5.14703 12.999 4.78508 13 C4.42313 12.999 4.0763 12.8547 3.82041 12.5987 C3.56453 12.3428 3.4204 11.9959 3.41954 11.6339 L3.41954 8.21438 Z M4.78508 2.73108 C4.42332 2.73008 4.07665 2.58597 3.8208 2.33021 C3.56494 2.07446 3.42069 1.72785 3.41954 1.36608 C3.4204 1.00413 3.56453 0.657244 3.82041 0.401255 C4.0763 0.145266 4.42313 0.00100122 4.78508 0 C5.14703 0.00100122 5.49387 0.145266 5.74975 0.401255 C6.00564 0.657244 6.14977 1.00413 6.15062 1.36608 L6.15062 2.73108 L4.78508 2.73108 Z M4.78508 3.41954 C5.14694 3.42054 5.49369 3.56473 5.74956 3.82061 C6.00543 4.07648 6.14962 4.42323 6.15062 4.78508 C6.14962 5.14694 6.00543 5.49369 5.74956 5.74956 C5.49369 6.00543 5.14694 6.14962 4.78508 6.15062 L1.36608 6.15062 C1.00413 6.14977 0.657244 6.00564 0.401255 5.74975 C0.145266 5.49387 0.00100122 5.14703 0 4.78508 C0.00100122 4.42313 0.145266 4.0763 0.401255 3.82041 C0.657244 3.56453 1.00413 3.4204 1.36608 3.41954 L4.78508 3.41954 Z M10.2678 4.78508 C10.2688 4.42313 10.4131 4.0763 10.6691 3.82041 C10.9251 3.56453 11.272 3.4204 11.6339 3.41954 C11.9959 3.4204 12.3428 3.56453 12.5987 3.82041 C12.8547 4.0763 12.999 4.42313 13 4.78508 C12.999 5.14703 12.8547 5.49387 12.5987 5.74975 C12.3428 6.00564 11.9959 6.14977 11.6339 6.15062 L10.2678 6.15062 L10.2678 4.78508 Z M9.581 4.78508 C9.58 5.14713 9.43566 5.49404 9.17955 5.74994 C8.92345 6.00585 8.57642 6.14991 8.21438 6.15062 C7.85257 6.14962 7.50588 6.00542 7.25009 5.74953 C6.9943 5.49364 6.85023 5.14689 6.84938 4.78508 L6.84938 1.36608 C6.85009 1.00418 6.9941 0.657293 7.2499 0.401289 C7.5057 0.145284 7.85248 0.00100179 8.21438 2.70617e-16 C8.57651 0.000715237 8.92362 0.144854 9.17974 0.400874 C9.43586 0.656894 9.58014 1.00395 9.581 1.36608 L9.581 4.78508 Z M8.21438 10.2678 C8.57651 10.2685 8.92362 10.4127 9.17974 10.6687 C9.43586 10.9247 9.58014 11.2718 9.581 11.6339 C9.58014 11.9961 9.43586 12.3431 9.17974 12.5991 C8.92362 12.8551 8.57651 12.9993 8.21438 13 C7.85248 12.999 7.5057 12.8547 7.2499 12.5987 C6.9941 12.3427 6.85009 11.9958 6.84938 11.6339 L6.84938 10.2678 L8.21438 10.2678 Z M8.21438 9.581 C7.85238 9.58 7.50552 9.43564 7.24971 9.17952 C6.99389 8.9234 6.84995 8.57637 6.84938 8.21438 C6.85023 7.85262 6.99432 7.50592 7.25012 7.25012 C7.50592 6.99432 7.85262 6.85023 8.21438 6.84938 L11.6339 6.84938 C11.9958 6.85009 12.3427 6.9941 12.5987 7.2499 C12.8547 7.5057 12.999 7.85248 13 8.21438 C12.9993 8.57651 12.8551 8.92362 12.5991 9.17974 C12.3431 9.43586 11.9961 9.58014 11.6339 9.581 L8.21438 9.581 Z" fill="#4a154b"/></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Post daily summary</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Invoice Triage</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "100px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>Will pause</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M2.73108 8.21438 C2.73037 8.57633 2.58638 8.92327 2.33059 9.17936 C2.07481 9.43545 1.72803 9.57986 1.36608 9.581 C1.00395 9.58014 0.656894 9.43586 0.400874 9.17974 C0.144854 8.92362 0.000715237 8.57651 9.02056e-17 8.21438 C0.00100179 7.85248 0.145284 7.5057 0.401289 7.2499 C0.657293 6.9941 1.00418 6.85009 1.36608 6.84938 L2.73108 6.84938 L2.73108 8.21438 Z M3.41954 8.21438 C3.42054 7.85257 3.56475 7.50588 3.82064 7.25009 C4.07653 6.9943 4.42328 6.85023 4.78508 6.84938 C5.14689 6.85023 5.49364 6.9943 5.74953 7.25009 C6.00542 7.50588 6.14962 7.85257 6.15062 8.21438 L6.15062 11.6339 C6.14977 11.9959 6.00564 12.3428 5.74975 12.5987 C5.49387 12.8547 5.14703 12.999 4.78508 13 C4.42313 12.999 4.0763 12.8547 3.82041 12.5987 C3.56453 12.3428 3.4204 11.9959 3.41954 11.6339 L3.41954 8.21438 Z M4.78508 2.73108 C4.42332 2.73008 4.07665 2.58597 3.8208 2.33021 C3.56494 2.07446 3.42069 1.72785 3.41954 1.36608 C3.4204 1.00413 3.56453 0.657244 3.82041 0.401255 C4.0763 0.145266 4.42313 0.00100122 4.78508 0 C5.14703 0.00100122 5.49387 0.145266 5.74975 0.401255 C6.00564 0.657244 6.14977 1.00413 6.15062 1.36608 L6.15062 2.73108 L4.78508 2.73108 Z M4.78508 3.41954 C5.14694 3.42054 5.49369 3.56473 5.74956 3.82061 C6.00543 4.07648 6.14962 4.42323 6.15062 4.78508 C6.14962 5.14694 6.00543 5.49369 5.74956 5.74956 C5.49369 6.00543 5.14694 6.14962 4.78508 6.15062 L1.36608 6.15062 C1.00413 6.14977 0.657244 6.00564 0.401255 5.74975 C0.145266 5.49387 0.00100122 5.14703 0 4.78508 C0.00100122 4.42313 0.145266 4.0763 0.401255 3.82041 C0.657244 3.56453 1.00413 3.4204 1.36608 3.41954 L4.78508 3.41954 Z M10.2678 4.78508 C10.2688 4.42313 10.4131 4.0763 10.6691 3.82041 C10.9251 3.56453 11.272 3.4204 11.6339 3.41954 C11.9959 3.4204 12.3428 3.56453 12.5987 3.82041 C12.8547 4.0763 12.999 4.42313 13 4.78508 C12.999 5.14703 12.8547 5.49387 12.5987 5.74975 C12.3428 6.00564 11.9959 6.14977 11.6339 6.15062 L10.2678 6.15062 L10.2678 4.78508 Z M9.581 4.78508 C9.58 5.14713 9.43566 5.49404 9.17955 5.74994 C8.92345 6.00585 8.57642 6.14991 8.21438 6.15062 C7.85257 6.14962 7.50588 6.00542 7.25009 5.74953 C6.9943 5.49364 6.85023 5.14689 6.84938 4.78508 L6.84938 1.36608 C6.85009 1.00418 6.9941 0.657293 7.2499 0.401289 C7.5057 0.145284 7.85248 0.00100179 8.21438 2.70617e-16 C8.57651 0.000715237 8.92362 0.144854 9.17974 0.400874 C9.43586 0.656894 9.58014 1.00395 9.581 1.36608 L9.581 4.78508 Z M8.21438 10.2678 C8.57651 10.2685 8.92362 10.4127 9.17974 10.6687 C9.43586 10.9247 9.58014 11.2718 9.581 11.6339 C9.58014 11.9961 9.43586 12.3431 9.17974 12.5991 C8.92362 12.8551 8.57651 12.9993 8.21438 13 C7.85248 12.999 7.5057 12.8547 7.2499 12.5987 C6.9941 12.3427 6.85009 11.9958 6.84938 11.6339 L6.84938 10.2678 L8.21438 10.2678 Z M8.21438 9.581 C7.85238 9.58 7.50552 9.43564 7.24971 9.17952 C6.99389 8.9234 6.84995 8.57637 6.84938 8.21438 C6.85023 7.85262 6.99432 7.50592 7.25012 7.25012 C7.50592 6.99432 7.85262 6.85023 8.21438 6.84938 L11.6339 6.84938 C11.9958 6.85009 12.3427 6.9941 12.5987 7.2499 C12.8547 7.5057 12.999 7.85248 13 8.21438 C12.9993 8.57651 12.8551 8.92362 12.5991 9.17974 C12.3431 9.43586 11.9961 9.58014 11.6339 9.581 L8.21438 9.581 Z" fill="#4a154b"/></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Urgent ticket alerts</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Support Ticket Routing</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "100px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>Will pause</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M2.73108 8.21438 C2.73037 8.57633 2.58638 8.92327 2.33059 9.17936 C2.07481 9.43545 1.72803 9.57986 1.36608 9.581 C1.00395 9.58014 0.656894 9.43586 0.400874 9.17974 C0.144854 8.92362 0.000715237 8.57651 9.02056e-17 8.21438 C0.00100179 7.85248 0.145284 7.5057 0.401289 7.2499 C0.657293 6.9941 1.00418 6.85009 1.36608 6.84938 L2.73108 6.84938 L2.73108 8.21438 Z M3.41954 8.21438 C3.42054 7.85257 3.56475 7.50588 3.82064 7.25009 C4.07653 6.9943 4.42328 6.85023 4.78508 6.84938 C5.14689 6.85023 5.49364 6.9943 5.74953 7.25009 C6.00542 7.50588 6.14962 7.85257 6.15062 8.21438 L6.15062 11.6339 C6.14977 11.9959 6.00564 12.3428 5.74975 12.5987 C5.49387 12.8547 5.14703 12.999 4.78508 13 C4.42313 12.999 4.0763 12.8547 3.82041 12.5987 C3.56453 12.3428 3.4204 11.9959 3.41954 11.6339 L3.41954 8.21438 Z M4.78508 2.73108 C4.42332 2.73008 4.07665 2.58597 3.8208 2.33021 C3.56494 2.07446 3.42069 1.72785 3.41954 1.36608 C3.4204 1.00413 3.56453 0.657244 3.82041 0.401255 C4.0763 0.145266 4.42313 0.00100122 4.78508 0 C5.14703 0.00100122 5.49387 0.145266 5.74975 0.401255 C6.00564 0.657244 6.14977 1.00413 6.15062 1.36608 L6.15062 2.73108 L4.78508 2.73108 Z M4.78508 3.41954 C5.14694 3.42054 5.49369 3.56473 5.74956 3.82061 C6.00543 4.07648 6.14962 4.42323 6.15062 4.78508 C6.14962 5.14694 6.00543 5.49369 5.74956 5.74956 C5.49369 6.00543 5.14694 6.14962 4.78508 6.15062 L1.36608 6.15062 C1.00413 6.14977 0.657244 6.00564 0.401255 5.74975 C0.145266 5.49387 0.00100122 5.14703 0 4.78508 C0.00100122 4.42313 0.145266 4.0763 0.401255 3.82041 C0.657244 3.56453 1.00413 3.4204 1.36608 3.41954 L4.78508 3.41954 Z M10.2678 4.78508 C10.2688 4.42313 10.4131 4.0763 10.6691 3.82041 C10.9251 3.56453 11.272 3.4204 11.6339 3.41954 C11.9959 3.4204 12.3428 3.56453 12.5987 3.82041 C12.8547 4.0763 12.999 4.42313 13 4.78508 C12.999 5.14703 12.8547 5.49387 12.5987 5.74975 C12.3428 6.00564 11.9959 6.14977 11.6339 6.15062 L10.2678 6.15062 L10.2678 4.78508 Z M9.581 4.78508 C9.58 5.14713 9.43566 5.49404 9.17955 5.74994 C8.92345 6.00585 8.57642 6.14991 8.21438 6.15062 C7.85257 6.14962 7.50588 6.00542 7.25009 5.74953 C6.9943 5.49364 6.85023 5.14689 6.84938 4.78508 L6.84938 1.36608 C6.85009 1.00418 6.9941 0.657293 7.2499 0.401289 C7.5057 0.145284 7.85248 0.00100179 8.21438 2.70617e-16 C8.57651 0.000715237 8.92362 0.144854 9.17974 0.400874 C9.43586 0.656894 9.58014 1.00395 9.581 1.36608 L9.581 4.78508 Z M8.21438 10.2678 C8.57651 10.2685 8.92362 10.4127 9.17974 10.6687 C9.43586 10.9247 9.58014 11.2718 9.581 11.6339 C9.58014 11.9961 9.43586 12.3431 9.17974 12.5991 C8.92362 12.8551 8.57651 12.9993 8.21438 13 C7.85248 12.999 7.5057 12.8547 7.2499 12.5987 C6.9941 12.3427 6.85009 11.9958 6.84938 11.6339 L6.84938 10.2678 L8.21438 10.2678 Z M8.21438 9.581 C7.85238 9.58 7.50552 9.43564 7.24971 9.17952 C6.99389 8.9234 6.84995 8.57637 6.84938 8.21438 C6.85023 7.85262 6.99432 7.50592 7.25012 7.25012 C7.50592 6.99432 7.85262 6.85023 8.21438 6.84938 L11.6339 6.84938 C11.9958 6.85009 12.3427 6.9941 12.5987 7.2499 C12.8547 7.5057 12.999 7.85248 13 8.21438 C12.9993 8.57651 12.8551 8.92362 12.5991 9.17974 C12.3431 9.43586 11.9961 9.58014 11.6339 9.581 L8.21438 9.581 Z" fill="#4a154b"/></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>/audit command</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Expense Audit</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "100px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>Will pause</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#4996fe", lineHeight: "20px" }}>+ 4 more workflows</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Type “slack” to confirm</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #1b8ce8, 0px 0px 0px 3px #b7dfff, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "7px 7px 7px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>slac</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "13px 20px 12px 20px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Cancel</p>
          </div>
          <div data-fu="btn" style={{ flexShrink: 0, opacity: 0.5, borderRadius: "10px", background: "linear-gradient(0deg, #e5484d 34.7%, #f47a7e 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Outlet size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Disconnect Slack</p>
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
  const labelNear = (scope: Element, x: number, y: number, below: boolean) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
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
