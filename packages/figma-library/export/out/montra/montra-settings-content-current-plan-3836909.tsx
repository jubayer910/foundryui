"use client";
// Settings content, Current plan (montra, Forms) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Dots, Download, FileInvoice, Rocket } from "ingotui-icons/react/stroke-rounded";

export function SettingsContentCurrentPlan() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "815.42px", height: "819px", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "520px", height: "250px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Current plan</p>
        <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "215px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Billed annually · renews 01 Sep 2026</p>
        <div style={{ position: "absolute", left: "439.47px", top: "18.28px", width: "62.25px", height: "23.3px", borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>Active</p>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "74px", width: "483.44px", height: "64.23px", borderRadius: "9.14px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "13.7px 13.7px 13.7px 13.7px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32.9px", height: "32.9px", flexShrink: 0, borderRadius: "6.58px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Rocket size={15.8} style={{ width: "15.79px", height: "15.79px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Growth</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "280px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>10 seats · 10 bank connections · 1,000 AI questions / mo</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#202020" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#202020" }}>$1,490</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 400, color: "#6b6b6b" }}>{" / year"}</span>
            </p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$124 per month</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "152px", width: "483.44px", height: "29.83px", display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.53px", fontWeight: 600, color: "#2f7cf6" }}>Ax</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "132px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Amex Business •••• 1021</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "236px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Expires 04/28 · finance@alderco.com gets receipts</p>
          </div>
          <div data-fu="btn" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Update card</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "202.48px", width: "258.35px", height: "29.24px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Compare plans</p>
          </div>
          <div style={{ height: "27.42px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#f45363" }}>Cancel subscription</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "538.28px", top: "0px", width: "277.14px", height: "250px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Usage</p>
        <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "167px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>August so far · resets 01 Sep</p>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "74px", width: "240.58px", height: "27.7px", display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Seats</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>6 of 10</p>
          </div>
          <div style={{ width: "240.58px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "240.58px", height: "8.22px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "144.35px", height: "8.22px", borderRadius: "2.74px", background: "linear-gradient(90deg, #89bbfe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "148.01px", top: "0px", width: "92.07px", height: "8.22px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="92.07" height="8.22" viewBox="0 0 92.07 8.22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8.22 L0 8.22 L0.5 8.22 L0.5 0 L0 0 Z M2.97 0 L2.47 0 L2.47 8.22 L2.97 8.22 L3.47 8.22 L3.47 0 L2.97 0 Z M5.94 0 L5.44 0 L5.44 8.22 L5.94 8.22 L6.44 8.22 L6.44 0 L5.94 0 Z M8.91 0 L8.41 0 L8.41 8.22 L8.91 8.22 L9.41 8.22 L9.41 0 L8.91 0 Z M11.88 0 L11.38 0 L11.38 8.22 L11.88 8.22 L12.38 8.22 L12.38 0 L11.88 0 Z M14.85 0 L14.35 0 L14.35 8.22 L14.85 8.22 L15.35 8.22 L15.35 0 L14.85 0 Z M17.82 0 L17.32 0 L17.32 8.22 L17.82 8.22 L18.32 8.22 L18.32 0 L17.82 0 Z M20.79 0 L20.29 0 L20.29 8.22 L20.79 8.22 L21.29 8.22 L21.29 0 L20.79 0 Z M23.76 0 L23.26 0 L23.26 8.22 L23.76 8.22 L24.26 8.22 L24.26 0 L23.76 0 Z M26.73 0 L26.23 0 L26.23 8.22 L26.73 8.22 L27.23 8.22 L27.23 0 L26.73 0 Z M29.7 0 L29.2 0 L29.2 8.22 L29.7 8.22 L30.2 8.22 L30.2 0 L29.7 0 Z M32.67 0 L32.17 0 L32.17 8.22 L32.67 8.22 L33.17 8.22 L33.17 0 L32.67 0 Z M35.64 0 L35.14 0 L35.14 8.22 L35.64 8.22 L36.14 8.22 L36.14 0 L35.64 0 Z M38.61 0 L38.11 0 L38.11 8.22 L38.61 8.22 L39.11 8.22 L39.11 0 L38.61 0 Z M41.58 0 L41.08 0 L41.08 8.22 L41.58 8.22 L42.08 8.22 L42.08 0 L41.58 0 Z M44.55 0 L44.05 0 L44.05 8.22 L44.55 8.22 L45.05 8.22 L45.05 0 L44.55 0 Z M47.52 0 L47.02 0 L47.02 8.22 L47.52 8.22 L48.02 8.22 L48.02 0 L47.52 0 Z M50.49 0 L49.99 0 L49.99 8.22 L50.49 8.22 L50.99 8.22 L50.99 0 L50.49 0 Z M53.46 0 L52.96 0 L52.96 8.22 L53.46 8.22 L53.96 8.22 L53.96 0 L53.46 0 Z M56.43 0 L55.93 0 L55.93 8.22 L56.43 8.22 L56.93 8.22 L56.93 0 L56.43 0 Z M59.4 0 L58.9 0 L58.9 8.22 L59.4 8.22 L59.9 8.22 L59.9 0 L59.4 0 Z M62.37 0 L61.87 0 L61.87 8.22 L62.37 8.22 L62.87 8.22 L62.87 0 L62.37 0 Z M65.34 0 L64.84 0 L64.84 8.22 L65.34 8.22 L65.84 8.22 L65.84 0 L65.34 0 Z M68.31 0 L67.81 0 L67.81 8.22 L68.31 8.22 L68.81 8.22 L68.81 0 L68.31 0 Z M71.28 0 L70.78 0 L70.78 8.22 L71.28 8.22 L71.78 8.22 L71.78 0 L71.28 0 Z M74.25 0 L73.75 0 L73.75 8.22 L74.25 8.22 L74.75 8.22 L74.75 0 L74.25 0 Z M77.22 0 L76.72 0 L76.72 8.22 L77.22 8.22 L77.72 8.22 L77.72 0 L77.22 0 Z M80.19 0 L79.69 0 L79.69 8.22 L80.19 8.22 L80.69 8.22 L80.69 0 L80.19 0 Z M83.16 0 L82.66 0 L82.66 8.22 L83.16 8.22 L83.66 8.22 L83.66 0 L83.16 0 Z M86.13 0 L85.63 0 L85.63 8.22 L86.13 8.22 L86.63 8.22 L86.63 0 L86.13 0 Z M89.1 0 L88.6 0 L88.6 8.22 L89.1 8.22 L89.6 8.22 L89.6 0 L89.1 0 Z M92.07 0 L91.57 0 L91.57 8.22 L92.07 8.22 L92.57 8.22 L92.57 0 L92.07 0 Z" fill="#d4d4d8"/></svg>
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "116px", width: "240.58px", height: "27.7px", display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Bank connections</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>6 of 10</p>
          </div>
          <div style={{ width: "240.58px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "240.58px", height: "8.22px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "144.35px", height: "8.22px", borderRadius: "2.74px", background: "linear-gradient(90deg, #60d0d4 0%, #0ab7bd 100%)", boxShadow: "inset 0 0 0 1px rgba(8, 143, 147, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "148.01px", top: "0px", width: "92.07px", height: "8.22px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="92.07" height="8.22" viewBox="0 0 92.07 8.22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8.22 L0 8.22 L0.5 8.22 L0.5 0 L0 0 Z M2.97 0 L2.47 0 L2.47 8.22 L2.97 8.22 L3.47 8.22 L3.47 0 L2.97 0 Z M5.94 0 L5.44 0 L5.44 8.22 L5.94 8.22 L6.44 8.22 L6.44 0 L5.94 0 Z M8.91 0 L8.41 0 L8.41 8.22 L8.91 8.22 L9.41 8.22 L9.41 0 L8.91 0 Z M11.88 0 L11.38 0 L11.38 8.22 L11.88 8.22 L12.38 8.22 L12.38 0 L11.88 0 Z M14.85 0 L14.35 0 L14.35 8.22 L14.85 8.22 L15.35 8.22 L15.35 0 L14.85 0 Z M17.82 0 L17.32 0 L17.32 8.22 L17.82 8.22 L18.32 8.22 L18.32 0 L17.82 0 Z M20.79 0 L20.29 0 L20.29 8.22 L20.79 8.22 L21.29 8.22 L21.29 0 L20.79 0 Z M23.76 0 L23.26 0 L23.26 8.22 L23.76 8.22 L24.26 8.22 L24.26 0 L23.76 0 Z M26.73 0 L26.23 0 L26.23 8.22 L26.73 8.22 L27.23 8.22 L27.23 0 L26.73 0 Z M29.7 0 L29.2 0 L29.2 8.22 L29.7 8.22 L30.2 8.22 L30.2 0 L29.7 0 Z M32.67 0 L32.17 0 L32.17 8.22 L32.67 8.22 L33.17 8.22 L33.17 0 L32.67 0 Z M35.64 0 L35.14 0 L35.14 8.22 L35.64 8.22 L36.14 8.22 L36.14 0 L35.64 0 Z M38.61 0 L38.11 0 L38.11 8.22 L38.61 8.22 L39.11 8.22 L39.11 0 L38.61 0 Z M41.58 0 L41.08 0 L41.08 8.22 L41.58 8.22 L42.08 8.22 L42.08 0 L41.58 0 Z M44.55 0 L44.05 0 L44.05 8.22 L44.55 8.22 L45.05 8.22 L45.05 0 L44.55 0 Z M47.52 0 L47.02 0 L47.02 8.22 L47.52 8.22 L48.02 8.22 L48.02 0 L47.52 0 Z M50.49 0 L49.99 0 L49.99 8.22 L50.49 8.22 L50.99 8.22 L50.99 0 L50.49 0 Z M53.46 0 L52.96 0 L52.96 8.22 L53.46 8.22 L53.96 8.22 L53.96 0 L53.46 0 Z M56.43 0 L55.93 0 L55.93 8.22 L56.43 8.22 L56.93 8.22 L56.93 0 L56.43 0 Z M59.4 0 L58.9 0 L58.9 8.22 L59.4 8.22 L59.9 8.22 L59.9 0 L59.4 0 Z M62.37 0 L61.87 0 L61.87 8.22 L62.37 8.22 L62.87 8.22 L62.87 0 L62.37 0 Z M65.34 0 L64.84 0 L64.84 8.22 L65.34 8.22 L65.84 8.22 L65.84 0 L65.34 0 Z M68.31 0 L67.81 0 L67.81 8.22 L68.31 8.22 L68.81 8.22 L68.81 0 L68.31 0 Z M71.28 0 L70.78 0 L70.78 8.22 L71.28 8.22 L71.78 8.22 L71.78 0 L71.28 0 Z M74.25 0 L73.75 0 L73.75 8.22 L74.25 8.22 L74.75 8.22 L74.75 0 L74.25 0 Z M77.22 0 L76.72 0 L76.72 8.22 L77.22 8.22 L77.72 8.22 L77.72 0 L77.22 0 Z M80.19 0 L79.69 0 L79.69 8.22 L80.19 8.22 L80.69 8.22 L80.69 0 L80.19 0 Z M83.16 0 L82.66 0 L82.66 8.22 L83.16 8.22 L83.66 8.22 L83.66 0 L83.16 0 Z M86.13 0 L85.63 0 L85.63 8.22 L86.13 8.22 L86.63 8.22 L86.63 0 L86.13 0 Z M89.1 0 L88.6 0 L88.6 8.22 L89.1 8.22 L89.6 8.22 L89.6 0 L89.1 0 Z M92.07 0 L91.57 0 L91.57 8.22 L92.07 8.22 L92.57 8.22 L92.57 0 L92.07 0 Z" fill="#d4d4d8"/></svg>
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "158px", width: "240.58px", height: "27.7px", display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>AI questions</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>412 of 1,000</p>
          </div>
          <div style={{ width: "240.58px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "240.58px", height: "8.22px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "99.12px", height: "8.22px", borderRadius: "2.74px", background: "linear-gradient(90deg, #b6aefe 0%, #8e83fd 100%)", boxShadow: "inset 0 0 0 1px rgba(111, 102, 197, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "102.78px", top: "0px", width: "137.3px", height: "8.22px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="137.3" height="8.22" viewBox="0 0 137.3 8.22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8.22 L0 8.22 L0.5 8.22 L0.5 0 L0 0 Z M2.92 0 L2.42 0 L2.42 8.22 L2.92 8.22 L3.42 8.22 L3.42 0 L2.92 0 Z M5.84 0 L5.34 0 L5.34 8.22 L5.84 8.22 L6.34 8.22 L6.34 0 L5.84 0 Z M8.76 0 L8.26 0 L8.26 8.22 L8.76 8.22 L9.26 8.22 L9.26 0 L8.76 0 Z M11.69 0 L11.19 0 L11.19 8.22 L11.69 8.22 L12.19 8.22 L12.19 0 L11.69 0 Z M14.61 0 L14.11 0 L14.11 8.22 L14.61 8.22 L15.11 8.22 L15.11 0 L14.61 0 Z M17.53 0 L17.03 0 L17.03 8.22 L17.53 8.22 L18.03 8.22 L18.03 0 L17.53 0 Z M20.45 0 L19.95 0 L19.95 8.22 L20.45 8.22 L20.95 8.22 L20.95 0 L20.45 0 Z M23.37 0 L22.87 0 L22.87 8.22 L23.37 8.22 L23.87 8.22 L23.87 0 L23.37 0 Z M26.29 0 L25.79 0 L25.79 8.22 L26.29 8.22 L26.79 8.22 L26.79 0 L26.29 0 Z M29.21 0 L28.71 0 L28.71 8.22 L29.21 8.22 L29.71 8.22 L29.71 0 L29.21 0 Z M32.13 0 L31.63 0 L31.63 8.22 L32.13 8.22 L32.63 8.22 L32.63 0 L32.13 0 Z M35.06 0 L34.56 0 L34.56 8.22 L35.06 8.22 L35.56 8.22 L35.56 0 L35.06 0 Z M37.98 0 L37.48 0 L37.48 8.22 L37.98 8.22 L38.48 8.22 L38.48 0 L37.98 0 Z M40.9 0 L40.4 0 L40.4 8.22 L40.9 8.22 L41.4 8.22 L41.4 0 L40.9 0 Z M43.82 0 L43.32 0 L43.32 8.22 L43.82 8.22 L44.32 8.22 L44.32 0 L43.82 0 Z M46.74 0 L46.24 0 L46.24 8.22 L46.74 8.22 L47.24 8.22 L47.24 0 L46.74 0 Z M49.66 0 L49.16 0 L49.16 8.22 L49.66 8.22 L50.16 8.22 L50.16 0 L49.66 0 Z M52.58 0 L52.08 0 L52.08 8.22 L52.58 8.22 L53.08 8.22 L53.08 0 L52.58 0 Z M55.5 0 L55 0 L55 8.22 L55.5 8.22 L56 8.22 L56 0 L55.5 0 Z M58.43 0 L57.93 0 L57.93 8.22 L58.43 8.22 L58.93 8.22 L58.93 0 L58.43 0 Z M61.35 0 L60.85 0 L60.85 8.22 L61.35 8.22 L61.85 8.22 L61.85 0 L61.35 0 Z M64.27 0 L63.77 0 L63.77 8.22 L64.27 8.22 L64.77 8.22 L64.77 0 L64.27 0 Z M67.19 0 L66.69 0 L66.69 8.22 L67.19 8.22 L67.69 8.22 L67.69 0 L67.19 0 Z M70.11 0 L69.61 0 L69.61 8.22 L70.11 8.22 L70.61 8.22 L70.61 0 L70.11 0 Z M73.03 0 L72.53 0 L72.53 8.22 L73.03 8.22 L73.53 8.22 L73.53 0 L73.03 0 Z M75.95 0 L75.45 0 L75.45 8.22 L75.95 8.22 L76.45 8.22 L76.45 0 L75.95 0 Z M78.88 0 L78.38 0 L78.38 8.22 L78.88 8.22 L79.38 8.22 L79.38 0 L78.88 0 Z M81.8 0 L81.3 0 L81.3 8.22 L81.8 8.22 L82.3 8.22 L82.3 0 L81.8 0 Z M84.72 0 L84.22 0 L84.22 8.22 L84.72 8.22 L85.22 8.22 L85.22 0 L84.72 0 Z M87.64 0 L87.14 0 L87.14 8.22 L87.64 8.22 L88.14 8.22 L88.14 0 L87.64 0 Z M90.56 0 L90.06 0 L90.06 8.22 L90.56 8.22 L91.06 8.22 L91.06 0 L90.56 0 Z M93.48 0 L92.98 0 L92.98 8.22 L93.48 8.22 L93.98 8.22 L93.98 0 L93.48 0 Z M96.4 0 L95.9 0 L95.9 8.22 L96.4 8.22 L96.9 8.22 L96.9 0 L96.4 0 Z M99.32 0 L98.82 0 L98.82 8.22 L99.32 8.22 L99.82 8.22 L99.82 0 L99.32 0 Z M102.25 0 L101.75 0 L101.75 8.22 L102.25 8.22 L102.75 8.22 L102.75 0 L102.25 0 Z M105.17 0 L104.67 0 L104.67 8.22 L105.17 8.22 L105.67 8.22 L105.67 0 L105.17 0 Z M108.09 0 L107.59 0 L107.59 8.22 L108.09 8.22 L108.59 8.22 L108.59 0 L108.09 0 Z M111.01 0 L110.51 0 L110.51 8.22 L111.01 8.22 L111.51 8.22 L111.51 0 L111.01 0 Z M113.93 0 L113.43 0 L113.43 8.22 L113.93 8.22 L114.43 8.22 L114.43 0 L113.93 0 Z M116.85 0 L116.35 0 L116.35 8.22 L116.85 8.22 L117.35 8.22 L117.35 0 L116.85 0 Z M119.77 0 L119.27 0 L119.27 8.22 L119.77 8.22 L120.27 8.22 L120.27 0 L119.77 0 Z M122.69 0 L122.19 0 L122.19 8.22 L122.69 8.22 L123.19 8.22 L123.19 0 L122.69 0 Z M125.62 0 L125.12 0 L125.12 8.22 L125.62 8.22 L126.12 8.22 L126.12 0 L125.62 0 Z M128.54 0 L128.04 0 L128.04 8.22 L128.54 8.22 L129.04 8.22 L129.04 0 L128.54 0 Z M131.46 0 L130.96 0 L130.96 8.22 L131.46 8.22 L131.96 8.22 L131.96 0 L131.46 0 Z M134.38 0 L133.88 0 L133.88 8.22 L134.38 8.22 L134.88 8.22 L134.88 0 L134.38 0 Z M137.3 0 L136.8 0 L136.8 8.22 L137.3 8.22 L137.8 8.22 L137.8 0 L137.3 0 Z" fill="#d4d4d8"/></svg>
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "200px", width: "240.58px", height: "27.7px", display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Storage</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>2.1 of 10 GB</p>
          </div>
          <div style={{ width: "240.58px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "240.58px", height: "8.22px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "50.52px", height: "8.22px", borderRadius: "2.74px", background: "linear-gradient(90deg, #9ad6b9 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "54.18px", top: "0px", width: "185.9px", height: "8.22px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="185.9" height="8.22" viewBox="0 0 185.9 8.22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8.22 L0 8.22 L0.5 8.22 L0.5 0 L0 0 Z M2.95 0 L2.45 0 L2.45 8.22 L2.95 8.22 L3.45 8.22 L3.45 0 L2.95 0 Z M5.9 0 L5.4 0 L5.4 8.22 L5.9 8.22 L6.4 8.22 L6.4 0 L5.9 0 Z M8.85 0 L8.35 0 L8.35 8.22 L8.85 8.22 L9.35 8.22 L9.35 0 L8.85 0 Z M11.8 0 L11.3 0 L11.3 8.22 L11.8 8.22 L12.3 8.22 L12.3 0 L11.8 0 Z M14.75 0 L14.25 0 L14.25 8.22 L14.75 8.22 L15.25 8.22 L15.25 0 L14.75 0 Z M17.7 0 L17.2 0 L17.2 8.22 L17.7 8.22 L18.2 8.22 L18.2 0 L17.7 0 Z M20.66 0 L20.16 0 L20.16 8.22 L20.66 8.22 L21.16 8.22 L21.16 0 L20.66 0 Z M23.61 0 L23.11 0 L23.11 8.22 L23.61 8.22 L24.11 8.22 L24.11 0 L23.61 0 Z M26.56 0 L26.06 0 L26.06 8.22 L26.56 8.22 L27.06 8.22 L27.06 0 L26.56 0 Z M29.51 0 L29.01 0 L29.01 8.22 L29.51 8.22 L30.01 8.22 L30.01 0 L29.51 0 Z M32.46 0 L31.96 0 L31.96 8.22 L32.46 8.22 L32.96 8.22 L32.96 0 L32.46 0 Z M35.41 0 L34.91 0 L34.91 8.22 L35.41 8.22 L35.91 8.22 L35.91 0 L35.41 0 Z M38.36 0 L37.86 0 L37.86 8.22 L38.36 8.22 L38.86 8.22 L38.86 0 L38.36 0 Z M41.31 0 L40.81 0 L40.81 8.22 L41.31 8.22 L41.81 8.22 L41.81 0 L41.31 0 Z M44.26 0 L43.76 0 L43.76 8.22 L44.26 8.22 L44.76 8.22 L44.76 0 L44.26 0 Z M47.21 0 L46.71 0 L46.71 8.22 L47.21 8.22 L47.71 8.22 L47.71 0 L47.21 0 Z M50.16 0 L49.66 0 L49.66 8.22 L50.16 8.22 L50.66 8.22 L50.66 0 L50.16 0 Z M53.11 0 L52.61 0 L52.61 8.22 L53.11 8.22 L53.61 8.22 L53.61 0 L53.11 0 Z M56.06 0 L55.56 0 L55.56 8.22 L56.06 8.22 L56.56 8.22 L56.56 0 L56.06 0 Z M59.02 0 L58.52 0 L58.52 8.22 L59.02 8.22 L59.52 8.22 L59.52 0 L59.02 0 Z M61.97 0 L61.47 0 L61.47 8.22 L61.97 8.22 L62.47 8.22 L62.47 0 L61.97 0 Z M64.92 0 L64.42 0 L64.42 8.22 L64.92 8.22 L65.42 8.22 L65.42 0 L64.92 0 Z M67.87 0 L67.37 0 L67.37 8.22 L67.87 8.22 L68.37 8.22 L68.37 0 L67.87 0 Z M70.82 0 L70.32 0 L70.32 8.22 L70.82 8.22 L71.32 8.22 L71.32 0 L70.82 0 Z M73.77 0 L73.27 0 L73.27 8.22 L73.77 8.22 L74.27 8.22 L74.27 0 L73.77 0 Z M76.72 0 L76.22 0 L76.22 8.22 L76.72 8.22 L77.22 8.22 L77.22 0 L76.72 0 Z M79.67 0 L79.17 0 L79.17 8.22 L79.67 8.22 L80.17 8.22 L80.17 0 L79.67 0 Z M82.62 0 L82.12 0 L82.12 8.22 L82.62 8.22 L83.12 8.22 L83.12 0 L82.62 0 Z M85.57 0 L85.07 0 L85.07 8.22 L85.57 8.22 L86.07 8.22 L86.07 0 L85.57 0 Z M88.52 0 L88.02 0 L88.02 8.22 L88.52 8.22 L89.02 8.22 L89.02 0 L88.52 0 Z M91.47 0 L90.97 0 L90.97 8.22 L91.47 8.22 L91.97 8.22 L91.97 0 L91.47 0 Z M94.42 0 L93.92 0 L93.92 8.22 L94.42 8.22 L94.92 8.22 L94.92 0 L94.42 0 Z M97.38 0 L96.88 0 L96.88 8.22 L97.38 8.22 L97.88 8.22 L97.88 0 L97.38 0 Z M100.33 0 L99.83 0 L99.83 8.22 L100.33 8.22 L100.83 8.22 L100.83 0 L100.33 0 Z M103.28 0 L102.78 0 L102.78 8.22 L103.28 8.22 L103.78 8.22 L103.78 0 L103.28 0 Z M106.23 0 L105.73 0 L105.73 8.22 L106.23 8.22 L106.73 8.22 L106.73 0 L106.23 0 Z M109.18 0 L108.68 0 L108.68 8.22 L109.18 8.22 L109.68 8.22 L109.68 0 L109.18 0 Z M112.13 0 L111.63 0 L111.63 8.22 L112.13 8.22 L112.63 8.22 L112.63 0 L112.13 0 Z M115.08 0 L114.58 0 L114.58 8.22 L115.08 8.22 L115.58 8.22 L115.58 0 L115.08 0 Z M118.03 0 L117.53 0 L117.53 8.22 L118.03 8.22 L118.53 8.22 L118.53 0 L118.03 0 Z M120.98 0 L120.48 0 L120.48 8.22 L120.98 8.22 L121.48 8.22 L121.48 0 L120.98 0 Z M123.93 0 L123.43 0 L123.43 8.22 L123.93 8.22 L124.43 8.22 L124.43 0 L123.93 0 Z M126.88 0 L126.38 0 L126.38 8.22 L126.88 8.22 L127.38 8.22 L127.38 0 L126.88 0 Z M129.83 0 L129.33 0 L129.33 8.22 L129.83 8.22 L130.33 8.22 L130.33 0 L129.83 0 Z M132.78 0 L132.28 0 L132.28 8.22 L132.78 8.22 L133.28 8.22 L133.28 0 L132.78 0 Z M135.74 0 L135.24 0 L135.24 8.22 L135.74 8.22 L136.24 8.22 L136.24 0 L135.74 0 Z M138.69 0 L138.19 0 L138.19 8.22 L138.69 8.22 L139.19 8.22 L139.19 0 L138.69 0 Z M141.64 0 L141.14 0 L141.14 8.22 L141.64 8.22 L142.14 8.22 L142.14 0 L141.64 0 Z M144.59 0 L144.09 0 L144.09 8.22 L144.59 8.22 L145.09 8.22 L145.09 0 L144.59 0 Z M147.54 0 L147.04 0 L147.04 8.22 L147.54 8.22 L148.04 8.22 L148.04 0 L147.54 0 Z M150.49 0 L149.99 0 L149.99 8.22 L150.49 8.22 L150.99 8.22 L150.99 0 L150.49 0 Z M153.44 0 L152.94 0 L152.94 8.22 L153.44 8.22 L153.94 8.22 L153.94 0 L153.44 0 Z M156.39 0 L155.89 0 L155.89 8.22 L156.39 8.22 L156.89 8.22 L156.89 0 L156.39 0 Z M159.34 0 L158.84 0 L158.84 8.22 L159.34 8.22 L159.84 8.22 L159.84 0 L159.34 0 Z M162.29 0 L161.79 0 L161.79 8.22 L162.29 8.22 L162.79 8.22 L162.79 0 L162.29 0 Z M165.24 0 L164.74 0 L164.74 8.22 L165.24 8.22 L165.74 8.22 L165.74 0 L165.24 0 Z M168.19 0 L167.69 0 L167.69 8.22 L168.19 8.22 L168.69 8.22 L168.69 0 L168.19 0 Z M171.14 0 L170.64 0 L170.64 8.22 L171.14 8.22 L171.64 8.22 L171.64 0 L171.14 0 Z M174.1 0 L173.6 0 L173.6 8.22 L174.1 8.22 L174.6 8.22 L174.6 0 L174.1 0 Z M177.05 0 L176.55 0 L176.55 8.22 L177.05 8.22 L177.55 8.22 L177.55 0 L177.05 0 Z M180 0 L179.5 0 L179.5 8.22 L180 8.22 L180.5 8.22 L180.5 0 L180 0 Z M182.95 0 L182.45 0 L182.45 8.22 L182.95 8.22 L183.45 8.22 L183.45 0 L182.95 0 Z M185.9 0 L185.4 0 L185.4 8.22 L185.9 8.22 L186.4 8.22 L186.4 0 L185.9 0 Z" fill="#d4d4d8"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "268.28px", width: "520px", height: "232px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "159px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>AI questions per month</p>
        <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "159px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>1,000 included each month</p>
        <div style={{ position: "absolute", left: "12.79px", top: "62px", width: "494.42px", height: "166px" }}>
          <svg style={{ position: "absolute", left: "36.56px", top: "7.31px", width: "457.86px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="457.86" height="1" viewBox="0 0 457.86 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L457.8600158691406 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
          <p style={{ position: "absolute", left: "1.25px", top: "0.31px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>1,500</p>
          <svg style={{ position: "absolute", left: "36.56px", top: "74.77px", width: "457.86px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="457.86" height="1" viewBox="0 0 457.86 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L457.8600158691406 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
          <p style={{ position: "absolute", left: "9.25px", top: "67.77px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>750</p>
          <div style={{ position: "absolute", left: "36.56px", top: "141.74px", width: "457.86px", height: "1px", background: "#e2e2e5" }} />
          <p style={{ position: "absolute", left: "21.25px", top: "135.24px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>0</p>
          <div style={{ position: "absolute", left: "61px", top: "7.31px", width: "27.42px", height: "134.93px", borderRadius: "13.71px", background: "#f6f6f4" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "61px", top: "126.05px", width: "27.42px", height: "16.19px", borderRadius: "8.1px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "61px", top: "126.05px", width: "27.42px", height: "16.19px", borderRadius: "8.1px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "137.31px", top: "7.31px", width: "27.42px", height: "134.93px", borderRadius: "13.71px", background: "#f6f6f4" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "137.31px", top: "120.65px", width: "27.42px", height: "21.59px", borderRadius: "10.79px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "137.31px", top: "120.65px", width: "27.42px", height: "21.59px", borderRadius: "10.79px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "213.63px", top: "7.31px", width: "27.42px", height: "134.93px", borderRadius: "13.71px", background: "#f6f6f4" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "213.63px", top: "114.35px", width: "27.42px", height: "27.89px", borderRadius: "13.71px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "213.63px", top: "114.35px", width: "27.42px", height: "27.89px", borderRadius: "13.71px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "289.94px", top: "7.31px", width: "27.42px", height: "134.93px", borderRadius: "13.71px", background: "#f6f6f4" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "289.94px", top: "30.7px", width: "27.42px", height: "111.54px", borderRadius: "13.71px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "289.94px", top: "52.29px", width: "27.42px", height: "89.95px", borderRadius: "13.71px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "366.25px", top: "7.31px", width: "27.42px", height: "134.93px", borderRadius: "13.71px", background: "#f6f6f4" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "366.25px", top: "95.46px", width: "27.42px", height: "46.78px", borderRadius: "13.71px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "366.25px", top: "95.46px", width: "27.42px", height: "46.78px", borderRadius: "13.71px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "442.55px", top: "7.31px", width: "27.42px", height: "134.93px", borderRadius: "13.71px", background: "#f6f6f4" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "442.55px", top: "105.18px", width: "27.42px", height: "37.06px", borderRadius: "13.71px", background: "linear-gradient(180deg, #e2dffe 0%, #d9d5fe 100%)", boxShadow: "inset 0 0 0 1px rgba(135, 124, 240, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "442.55px", top: "105.18px", width: "27.42px", height: "37.06px", borderRadius: "13.71px", background: "linear-gradient(180deg, #9d93fd 0%, #8e83fd 100%)", boxShadow: "inset 0 0 0 1px rgba(111, 102, 197, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <p style={{ position: "absolute", left: "64.72px", top: "151.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Mar</p>
          <p style={{ position: "absolute", left: "142.02px", top: "151.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Apr</p>
          <p style={{ position: "absolute", left: "216.33px", top: "151.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>May</p>
          <p style={{ position: "absolute", left: "293.65px", top: "151.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Jun</p>
          <p style={{ position: "absolute", left: "371.96px", top: "151.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Jul</p>
          <p style={{ position: "absolute", left: "445.77px", top: "151.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#1f1f22" }}>Aug</p>
          <svg style={{ position: "absolute", left: "36.56px", top: "52.29px", width: "457.86px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="457.86" height="1" viewBox="0 0 457.86 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 C-0.276142 -0.5 -0.5 -0.276142 -0.5 0 C-0.5 0.276142 -0.276142 0.5 0 0.5 L0 0 L0 -0.5 Z M457.86 0.5 C458.136 0.5 458.36 0.276142 458.36 0 C458.36 -0.276142 458.136 -0.5 457.86 -0.5 L457.86 0 L457.86 0.5 Z M1.36268 0.5 C1.63882 0.5 1.86268 0.276142 1.86268 0 C1.86268 -0.276142 1.63882 -0.5 1.36268 -0.5 L1.36268 0 L1.36268 0.5 Z M4.08804 -0.5 C3.81189 -0.5 3.58804 -0.276142 3.58804 0 C3.58804 0.276142 3.81189 0.5 4.08804 0.5 L4.08804 0 L4.08804 -0.5 Z M6.81339 0.5 C7.08954 0.5 7.31339 0.276142 7.31339 0 C7.31339 -0.276142 7.08954 -0.5 6.81339 -0.5 L6.81339 0 L6.81339 0.5 Z M9.53875 -0.5 C9.26261 -0.5 9.03875 -0.276142 9.03875 0 C9.03875 0.276142 9.26261 0.5 9.53875 0.5 L9.53875 0 L9.53875 -0.5 Z M12.2641 0.5 C12.5402 0.5 12.7641 0.276142 12.7641 0 C12.7641 -0.276142 12.5402 -0.5 12.2641 -0.5 L12.2641 0 L12.2641 0.5 Z M14.9895 -0.5 C14.7133 -0.5 14.4895 -0.276142 14.4895 0 C14.4895 0.276142 14.7133 0.5 14.9895 0.5 L14.9895 0 L14.9895 -0.5 Z M17.7148 0.5 C17.991 0.5 18.2148 0.276142 18.2148 0 C18.2148 -0.276142 17.991 -0.5 17.7148 -0.5 L17.7148 0 L17.7148 0.5 Z M20.4402 -0.5 C20.164 -0.5 19.9402 -0.276142 19.9402 0 C19.9402 0.276142 20.164 0.5 20.4402 0.5 L20.4402 0 L20.4402 -0.5 Z M23.1655 0.5 C23.4417 0.5 23.6655 0.276142 23.6655 0 C23.6655 -0.276142 23.4417 -0.5 23.1655 -0.5 L23.1655 0 L23.1655 0.5 Z M25.8909 -0.5 C25.6147 -0.5 25.3909 -0.276142 25.3909 0 C25.3909 0.276142 25.6147 0.5 25.8909 0.5 L25.8909 0 L25.8909 -0.5 Z M28.6162 0.5 C28.8924 0.5 29.1162 0.276142 29.1162 0 C29.1162 -0.276142 28.8924 -0.5 28.6162 -0.5 L28.6162 0 L28.6162 0.5 Z M31.3416 -0.5 C31.0655 -0.5 30.8416 -0.276142 30.8416 0 C30.8416 0.276142 31.0655 0.5 31.3416 0.5 L31.3416 0 L31.3416 -0.5 Z M34.067 0.5 C34.3431 0.5 34.567 0.276142 34.567 0 C34.567 -0.276142 34.3431 -0.5 34.067 -0.5 L34.067 0 L34.067 0.5 Z M36.7923 -0.5 C36.5162 -0.5 36.2923 -0.276142 36.2923 0 C36.2923 0.276142 36.5162 0.5 36.7923 0.5 L36.7923 0 L36.7923 -0.5 Z M39.5177 0.5 C39.7938 0.5 40.0177 0.276142 40.0177 0 C40.0177 -0.276142 39.7938 -0.5 39.5177 -0.5 L39.5177 0 L39.5177 0.5 Z M42.243 -0.5 C41.9669 -0.5 41.743 -0.276142 41.743 0 C41.743 0.276142 41.9669 0.5 42.243 0.5 L42.243 0 L42.243 -0.5 Z M44.9684 0.5 C45.2445 0.5 45.4684 0.276142 45.4684 0 C45.4684 -0.276142 45.2445 -0.5 44.9684 -0.5 L44.9684 0 L44.9684 0.5 Z M47.6937 -0.5 C47.4176 -0.5 47.1937 -0.276142 47.1937 0 C47.1937 0.276142 47.4176 0.5 47.6937 0.5 L47.6937 0 L47.6937 -0.5 Z M50.4191 0.5 C50.6952 0.5 50.9191 0.276142 50.9191 0 C50.9191 -0.276142 50.6952 -0.5 50.4191 -0.5 L50.4191 0 L50.4191 0.5 Z M53.1445 -0.5 C52.8683 -0.5 52.6445 -0.276142 52.6445 0 C52.6445 0.276142 52.8683 0.5 53.1445 0.5 L53.1445 0 L53.1445 -0.5 Z M55.8698 0.5 C56.146 0.5 56.3698 0.276142 56.3698 0 C56.3698 -0.276142 56.146 -0.5 55.8698 -0.5 L55.8698 0 L55.8698 0.5 Z M58.5952 -0.5 C58.319 -0.5 58.0952 -0.276142 58.0952 0 C58.0952 0.276142 58.319 0.5 58.5952 0.5 L58.5952 0 L58.5952 -0.5 Z M61.3205 0.5 C61.5967 0.5 61.8205 0.276142 61.8205 0 C61.8205 -0.276142 61.5967 -0.5 61.3205 -0.5 L61.3205 0 L61.3205 0.5 Z M64.0459 -0.5 C63.7697 -0.5 63.5459 -0.276142 63.5459 0 C63.5459 0.276142 63.7697 0.5 64.0459 0.5 L64.0459 0 L64.0459 -0.5 Z M66.7712 0.5 C67.0474 0.5 67.2712 0.276142 67.2712 0 C67.2712 -0.276142 67.0474 -0.5 66.7712 -0.5 L66.7712 0 L66.7712 0.5 Z M69.4966 -0.5 C69.2205 -0.5 68.9966 -0.276142 68.9966 0 C68.9966 0.276142 69.2205 0.5 69.4966 0.5 L69.4966 0 L69.4966 -0.5 Z M72.222 0.5 C72.4981 0.5 72.722 0.276142 72.722 0 C72.722 -0.276142 72.4981 -0.5 72.222 -0.5 L72.222 0 L72.222 0.5 Z M74.9473 -0.5 C74.6712 -0.5 74.4473 -0.276142 74.4473 0 C74.4473 0.276142 74.6712 0.5 74.9473 0.5 L74.9473 0 L74.9473 -0.5 Z M77.6727 0.5 C77.9488 0.5 78.1727 0.276142 78.1727 0 C78.1727 -0.276142 77.9488 -0.5 77.6727 -0.5 L77.6727 0 L77.6727 0.5 Z M80.398 -0.5 C80.1219 -0.5 79.898 -0.276142 79.898 0 C79.898 0.276142 80.1219 0.5 80.398 0.5 L80.398 0 L80.398 -0.5 Z M83.1234 0.5 C83.3995 0.5 83.6234 0.276142 83.6234 0 C83.6234 -0.276142 83.3995 -0.5 83.1234 -0.5 L83.1234 0 L83.1234 0.5 Z M85.8487 -0.5 C85.5726 -0.5 85.3487 -0.276142 85.3487 0 C85.3487 0.276142 85.5726 0.5 85.8487 0.5 L85.8487 0 L85.8487 -0.5 Z M88.5741 0.5 C88.8503 0.5 89.0741 0.276142 89.0741 0 C89.0741 -0.276142 88.8503 -0.5 88.5741 -0.5 L88.5741 0 L88.5741 0.5 Z M91.2995 -0.5 C91.0233 -0.5 90.7995 -0.276142 90.7995 0 C90.7995 0.276142 91.0233 0.5 91.2995 0.5 L91.2995 0 L91.2995 -0.5 Z M94.0248 0.5 C94.301 0.5 94.5248 0.276142 94.5248 0 C94.5248 -0.276142 94.301 -0.5 94.0248 -0.5 L94.0248 0 L94.0248 0.5 Z M96.7502 -0.5 C96.474 -0.5 96.2502 -0.276142 96.2502 0 C96.2502 0.276142 96.474 0.5 96.7502 0.5 L96.7502 0 L96.7502 -0.5 Z M99.4755 0.5 C99.7517 0.5 99.9755 0.276142 99.9755 0 C99.9755 -0.276142 99.7517 -0.5 99.4755 -0.5 L99.4755 0 L99.4755 0.5 Z M102.201 -0.5 C101.925 -0.5 101.701 -0.276142 101.701 0 C101.701 0.276142 101.925 0.5 102.201 0.5 L102.201 0 L102.201 -0.5 Z M104.926 0.5 C105.202 0.5 105.426 0.276142 105.426 0 C105.426 -0.276142 105.202 -0.5 104.926 -0.5 L104.926 0 L104.926 0.5 Z M107.652 -0.5 C107.375 -0.5 107.152 -0.276142 107.152 0 C107.152 0.276142 107.375 0.5 107.652 0.5 L107.652 0 L107.652 -0.5 Z M110.377 0.5 C110.653 0.5 110.877 0.276142 110.877 0 C110.877 -0.276142 110.653 -0.5 110.377 -0.5 L110.377 0 L110.377 0.5 Z M113.102 -0.5 C112.826 -0.5 112.602 -0.276142 112.602 0 C112.602 0.276142 112.826 0.5 113.102 0.5 L113.102 0 L113.102 -0.5 Z M115.828 0.5 C116.104 0.5 116.328 0.276142 116.328 0 C116.328 -0.276142 116.104 -0.5 115.828 -0.5 L115.828 0 L115.828 0.5 Z M118.553 -0.5 C118.277 -0.5 118.053 -0.276142 118.053 0 C118.053 0.276142 118.277 0.5 118.553 0.5 L118.553 0 L118.553 -0.5 Z M121.278 0.5 C121.555 0.5 121.778 0.276142 121.778 0 C121.778 -0.276142 121.555 -0.5 121.278 -0.5 L121.278 0 L121.278 0.5 Z M124.004 -0.5 C123.728 -0.5 123.504 -0.276142 123.504 0 C123.504 0.276142 123.728 0.5 124.004 0.5 L124.004 0 L124.004 -0.5 Z M126.729 0.5 C127.005 0.5 127.229 0.276142 127.229 0 C127.229 -0.276142 127.005 -0.5 126.729 -0.5 L126.729 0 L126.729 0.5 Z M129.454 -0.5 C129.178 -0.5 128.954 -0.276142 128.954 0 C128.954 0.276142 129.178 0.5 129.454 0.5 L129.454 0 L129.454 -0.5 Z M132.18 0.5 C132.456 0.5 132.68 0.276142 132.68 0 C132.68 -0.276142 132.456 -0.5 132.18 -0.5 L132.18 0 L132.18 0.5 Z M134.905 -0.5 C134.629 -0.5 134.405 -0.276142 134.405 0 C134.405 0.276142 134.629 0.5 134.905 0.5 L134.905 0 L134.905 -0.5 Z M137.631 0.5 C137.907 0.5 138.131 0.276142 138.131 0 C138.131 -0.276142 137.907 -0.5 137.631 -0.5 L137.631 0 L137.631 0.5 Z M140.356 -0.5 C140.08 -0.5 139.856 -0.276142 139.856 0 C139.856 0.276142 140.08 0.5 140.356 0.5 L140.356 0 L140.356 -0.5 Z M143.081 0.5 C143.357 0.5 143.581 0.276142 143.581 0 C143.581 -0.276142 143.357 -0.5 143.081 -0.5 L143.081 0 L143.081 0.5 Z M145.807 -0.5 C145.53 -0.5 145.307 -0.276142 145.307 0 C145.307 0.276142 145.53 0.5 145.807 0.5 L145.807 0 L145.807 -0.5 Z M148.532 0.5 C148.808 0.5 149.032 0.276142 149.032 0 C149.032 -0.276142 148.808 -0.5 148.532 -0.5 L148.532 0 L148.532 0.5 Z M151.257 -0.5 C150.981 -0.5 150.757 -0.276142 150.757 0 C150.757 0.276142 150.981 0.5 151.257 0.5 L151.257 0 L151.257 -0.5 Z M153.983 0.5 C154.259 0.5 154.483 0.276142 154.483 0 C154.483 -0.276142 154.259 -0.5 153.983 -0.5 L153.983 0 L153.983 0.5 Z M156.708 -0.5 C156.432 -0.5 156.208 -0.276142 156.208 0 C156.208 0.276142 156.432 0.5 156.708 0.5 L156.708 0 L156.708 -0.5 Z M159.433 0.5 C159.71 0.5 159.933 0.276142 159.933 0 C159.933 -0.276142 159.71 -0.5 159.433 -0.5 L159.433 0 L159.433 0.5 Z M162.159 -0.5 C161.883 -0.5 161.659 -0.276142 161.659 0 C161.659 0.276142 161.883 0.5 162.159 0.5 L162.159 0 L162.159 -0.5 Z M164.884 0.5 C165.16 0.5 165.384 0.276142 165.384 0 C165.384 -0.276142 165.16 -0.5 164.884 -0.5 L164.884 0 L164.884 0.5 Z M167.609 -0.5 C167.333 -0.5 167.109 -0.276142 167.109 0 C167.109 0.276142 167.333 0.5 167.609 0.5 L167.609 0 L167.609 -0.5 Z M170.335 0.5 C170.611 0.5 170.835 0.276142 170.835 0 C170.835 -0.276142 170.611 -0.5 170.335 -0.5 L170.335 0 L170.335 0.5 Z M173.06 -0.5 C172.784 -0.5 172.56 -0.276142 172.56 0 C172.56 0.276142 172.784 0.5 173.06 0.5 L173.06 0 L173.06 -0.5 Z M175.786 0.5 C176.062 0.5 176.286 0.276142 176.286 0 C176.286 -0.276142 176.062 -0.5 175.786 -0.5 L175.786 0 L175.786 0.5 Z M178.511 -0.5 C178.235 -0.5 178.011 -0.276142 178.011 0 C178.011 0.276142 178.235 0.5 178.511 0.5 L178.511 0 L178.511 -0.5 Z M181.236 0.5 C181.512 0.5 181.736 0.276142 181.736 0 C181.736 -0.276142 181.512 -0.5 181.236 -0.5 L181.236 0 L181.236 0.5 Z M183.962 -0.5 C183.685 -0.5 183.462 -0.276142 183.462 0 C183.462 0.276142 183.685 0.5 183.962 0.5 L183.962 0 L183.962 -0.5 Z M186.687 0.5 C186.963 0.5 187.187 0.276142 187.187 0 C187.187 -0.276142 186.963 -0.5 186.687 -0.5 L186.687 0 L186.687 0.5 Z M189.412 -0.5 C189.136 -0.5 188.912 -0.276142 188.912 0 C188.912 0.276142 189.136 0.5 189.412 0.5 L189.412 0 L189.412 -0.5 Z M192.138 0.5 C192.414 0.5 192.638 0.276142 192.638 0 C192.638 -0.276142 192.414 -0.5 192.138 -0.5 L192.138 0 L192.138 0.5 Z M194.863 -0.5 C194.587 -0.5 194.363 -0.276142 194.363 0 C194.363 0.276142 194.587 0.5 194.863 0.5 L194.863 0 L194.863 -0.5 Z M197.588 0.5 C197.865 0.5 198.088 0.276142 198.088 0 C198.088 -0.276142 197.865 -0.5 197.588 -0.5 L197.588 0 L197.588 0.5 Z M200.314 -0.5 C200.038 -0.5 199.814 -0.276142 199.814 0 C199.814 0.276142 200.038 0.5 200.314 0.5 L200.314 0 L200.314 -0.5 Z M203.039 0.5 C203.315 0.5 203.539 0.276142 203.539 0 C203.539 -0.276142 203.315 -0.5 203.039 -0.5 L203.039 0 L203.039 0.5 Z M205.764 -0.5 C205.488 -0.5 205.264 -0.276142 205.264 0 C205.264 0.276142 205.488 0.5 205.764 0.5 L205.764 0 L205.764 -0.5 Z M208.49 0.5 C208.766 0.5 208.99 0.276142 208.99 0 C208.99 -0.276142 208.766 -0.5 208.49 -0.5 L208.49 0 L208.49 0.5 Z M211.215 -0.5 C210.939 -0.5 210.715 -0.276142 210.715 0 C210.715 0.276142 210.939 0.5 211.215 0.5 L211.215 0 L211.215 -0.5 Z M213.941 0.5 C214.217 0.5 214.441 0.276142 214.441 0 C214.441 -0.276142 214.217 -0.5 213.941 -0.5 L213.941 0 L213.941 0.5 Z M216.666 -0.5 C216.39 -0.5 216.166 -0.276142 216.166 0 C216.166 0.276142 216.39 0.5 216.666 0.5 L216.666 0 L216.666 -0.5 Z M219.391 0.5 C219.667 0.5 219.891 0.276142 219.891 0 C219.891 -0.276142 219.667 -0.5 219.391 -0.5 L219.391 0 L219.391 0.5 Z M222.117 -0.5 C221.84 -0.5 221.617 -0.276142 221.617 0 C221.617 0.276142 221.84 0.5 222.117 0.5 L222.117 0 L222.117 -0.5 Z M224.842 0.5 C225.118 0.5 225.342 0.276142 225.342 0 C225.342 -0.276142 225.118 -0.5 224.842 -0.5 L224.842 0 L224.842 0.5 Z M227.567 -0.5 C227.291 -0.5 227.067 -0.276142 227.067 0 C227.067 0.276142 227.291 0.5 227.567 0.5 L227.567 0 L227.567 -0.5 Z M230.293 0.5 C230.569 0.5 230.793 0.276142 230.793 0 C230.793 -0.276142 230.569 -0.5 230.293 -0.5 L230.293 0 L230.293 0.5 Z M233.018 -0.5 C232.742 -0.5 232.518 -0.276142 232.518 0 C232.518 0.276142 232.742 0.5 233.018 0.5 L233.018 0 L233.018 -0.5 Z M235.743 0.5 C236.02 0.5 236.243 0.276142 236.243 0 C236.243 -0.276142 236.02 -0.5 235.743 -0.5 L235.743 0 L235.743 0.5 Z M238.469 -0.5 C238.193 -0.5 237.969 -0.276142 237.969 0 C237.969 0.276142 238.193 0.5 238.469 0.5 L238.469 0 L238.469 -0.5 Z M241.194 0.5 C241.47 0.5 241.694 0.276142 241.694 0 C241.694 -0.276142 241.47 -0.5 241.194 -0.5 L241.194 0 L241.194 0.5 Z M243.919 -0.5 C243.643 -0.5 243.419 -0.276142 243.419 0 C243.419 0.276142 243.643 0.5 243.919 0.5 L243.919 0 L243.919 -0.5 Z M246.645 0.5 C246.921 0.5 247.145 0.276142 247.145 0 C247.145 -0.276142 246.921 -0.5 246.645 -0.5 L246.645 0 L246.645 0.5 Z M249.37 -0.5 C249.094 -0.5 248.87 -0.276142 248.87 0 C248.87 0.276142 249.094 0.5 249.37 0.5 L249.37 0 L249.37 -0.5 Z M252.096 0.5 C252.372 0.5 252.596 0.276142 252.596 0 C252.596 -0.276142 252.372 -0.5 252.096 -0.5 L252.096 0 L252.096 0.5 Z M254.821 -0.5 C254.545 -0.5 254.321 -0.276142 254.321 0 C254.321 0.276142 254.545 0.5 254.821 0.5 L254.821 0 L254.821 -0.5 Z M257.546 0.5 C257.822 0.5 258.046 0.276142 258.046 0 C258.046 -0.276142 257.822 -0.5 257.546 -0.5 L257.546 0 L257.546 0.5 Z M260.272 -0.5 C259.995 -0.5 259.772 -0.276142 259.772 0 C259.772 0.276142 259.995 0.5 260.272 0.5 L260.272 0 L260.272 -0.5 Z M262.997 0.5 C263.273 0.5 263.497 0.276142 263.497 0 C263.497 -0.276142 263.273 -0.5 262.997 -0.5 L262.997 0 L262.997 0.5 Z M265.722 -0.5 C265.446 -0.5 265.222 -0.276142 265.222 0 C265.222 0.276142 265.446 0.5 265.722 0.5 L265.722 0 L265.722 -0.5 Z M268.448 0.5 C268.724 0.5 268.948 0.276142 268.948 0 C268.948 -0.276142 268.724 -0.5 268.448 -0.5 L268.448 0 L268.448 0.5 Z M271.173 -0.5 C270.897 -0.5 270.673 -0.276142 270.673 0 C270.673 0.276142 270.897 0.5 271.173 0.5 L271.173 0 L271.173 -0.5 Z M273.898 0.5 C274.174 0.5 274.398 0.276142 274.398 0 C274.398 -0.276142 274.174 -0.5 273.898 -0.5 L273.898 0 L273.898 0.5 Z M276.624 -0.5 C276.348 -0.5 276.124 -0.276142 276.124 0 C276.124 0.276142 276.348 0.5 276.624 0.5 L276.624 0 L276.624 -0.5 Z M279.349 0.5 C279.625 0.5 279.849 0.276142 279.849 0 C279.849 -0.276142 279.625 -0.5 279.349 -0.5 L279.349 0 L279.349 0.5 Z M282.074 -0.5 C281.798 -0.5 281.574 -0.276142 281.574 0 C281.574 0.276142 281.798 0.5 282.074 0.5 L282.074 0 L282.074 -0.5 Z M284.8 0.5 C285.076 0.5 285.3 0.276142 285.3 0 C285.3 -0.276142 285.076 -0.5 284.8 -0.5 L284.8 0 L284.8 0.5 Z M287.525 -0.5 C287.249 -0.5 287.025 -0.276142 287.025 0 C287.025 0.276142 287.249 0.5 287.525 0.5 L287.525 0 L287.525 -0.5 Z M290.25 0.5 C290.527 0.5 290.75 0.276142 290.75 0 C290.75 -0.276142 290.527 -0.5 290.25 -0.5 L290.25 0 L290.25 0.5 Z M292.976 -0.5 C292.7 -0.5 292.476 -0.276142 292.476 0 C292.476 0.276142 292.7 0.5 292.976 0.5 L292.976 0 L292.976 -0.5 Z M295.701 0.5 C295.977 0.5 296.201 0.276142 296.201 0 C296.201 -0.276142 295.977 -0.5 295.701 -0.5 L295.701 0 L295.701 0.5 Z M298.426 -0.5 C298.15 -0.5 297.926 -0.276142 297.926 0 C297.926 0.276142 298.15 0.5 298.426 0.5 L298.426 0 L298.426 -0.5 Z M301.152 0.5 C301.428 0.5 301.652 0.276142 301.652 0 C301.652 -0.276142 301.428 -0.5 301.152 -0.5 L301.152 0 L301.152 0.5 Z M303.877 -0.5 C303.601 -0.5 303.377 -0.276142 303.377 0 C303.377 0.276142 303.601 0.5 303.877 0.5 L303.877 0 L303.877 -0.5 Z M306.602 0.5 C306.879 0.5 307.102 0.276142 307.102 0 C307.102 -0.276142 306.879 -0.5 306.602 -0.5 L306.602 0 L306.602 0.5 Z M309.328 -0.5 C309.052 -0.5 308.828 -0.276142 308.828 0 C308.828 0.276142 309.052 0.5 309.328 0.5 L309.328 0 L309.328 -0.5 Z M312.053 0.5 C312.329 0.5 312.553 0.276142 312.553 0 C312.553 -0.276142 312.329 -0.5 312.053 -0.5 L312.053 0 L312.053 0.5 Z M314.778 -0.5 C314.502 -0.5 314.278 -0.276142 314.278 0 C314.278 0.276142 314.502 0.5 314.778 0.5 L314.778 0 L314.778 -0.5 Z M317.504 0.5 C317.78 0.5 318.004 0.276142 318.004 0 C318.004 -0.276142 317.78 -0.5 317.504 -0.5 L317.504 0 L317.504 0.5 Z M320.229 -0.5 C319.953 -0.5 319.729 -0.276142 319.729 0 C319.729 0.276142 319.953 0.5 320.229 0.5 L320.229 0 L320.229 -0.5 Z M322.954 0.5 C323.231 0.5 323.454 0.276142 323.454 0 C323.454 -0.276142 323.231 -0.5 322.954 -0.5 L322.954 0 L322.954 0.5 Z M325.68 -0.5 C325.404 -0.5 325.18 -0.276142 325.18 0 C325.18 0.276142 325.404 0.5 325.68 0.5 L325.68 0 L325.68 -0.5 Z M328.405 0.5 C328.681 0.5 328.905 0.276142 328.905 0 C328.905 -0.276142 328.681 -0.5 328.405 -0.5 L328.405 0 L328.405 0.5 Z M331.13 -0.5 C330.854 -0.5 330.63 -0.276142 330.63 0 C330.63 0.276142 330.854 0.5 331.13 0.5 L331.13 0 L331.13 -0.5 Z M333.856 0.5 C334.132 0.5 334.356 0.276142 334.356 0 C334.356 -0.276142 334.132 -0.5 333.856 -0.5 L333.856 0 L333.856 0.5 Z M336.581 -0.5 C336.305 -0.5 336.081 -0.276142 336.081 0 C336.081 0.276142 336.305 0.5 336.581 0.5 L336.581 0 L336.581 -0.5 Z M339.307 0.5 C339.583 0.5 339.807 0.276142 339.807 0 C339.807 -0.276142 339.583 -0.5 339.307 -0.5 L339.307 0 L339.307 0.5 Z M342.032 -0.5 C341.756 -0.5 341.532 -0.276142 341.532 0 C341.532 0.276142 341.756 0.5 342.032 0.5 L342.032 0 L342.032 -0.5 Z M344.757 0.5 C345.033 0.5 345.257 0.276142 345.257 0 C345.257 -0.276142 345.033 -0.5 344.757 -0.5 L344.757 0 L344.757 0.5 Z M347.483 -0.5 C347.206 -0.5 346.983 -0.276142 346.983 0 C346.983 0.276142 347.206 0.5 347.483 0.5 L347.483 0 L347.483 -0.5 Z M350.208 0.5 C350.484 0.5 350.708 0.276142 350.708 0 C350.708 -0.276142 350.484 -0.5 350.208 -0.5 L350.208 0 L350.208 0.5 Z M352.933 -0.5 C352.657 -0.5 352.433 -0.276142 352.433 0 C352.433 0.276142 352.657 0.5 352.933 0.5 L352.933 0 L352.933 -0.5 Z M355.659 0.5 C355.935 0.5 356.159 0.276142 356.159 0 C356.159 -0.276142 355.935 -0.5 355.659 -0.5 L355.659 0 L355.659 0.5 Z M358.384 -0.5 C358.108 -0.5 357.884 -0.276142 357.884 0 C357.884 0.276142 358.108 0.5 358.384 0.5 L358.384 0 L358.384 -0.5 Z M361.109 0.5 C361.385 0.5 361.609 0.276142 361.609 0 C361.609 -0.276142 361.385 -0.5 361.109 -0.5 L361.109 0 L361.109 0.5 Z M363.835 -0.5 C363.558 -0.5 363.335 -0.276142 363.335 0 C363.335 0.276142 363.558 0.5 363.835 0.5 L363.835 0 L363.835 -0.5 Z M366.56 0.5 C366.836 0.5 367.06 0.276142 367.06 0 C367.06 -0.276142 366.836 -0.5 366.56 -0.5 L366.56 0 L366.56 0.5 Z M369.285 -0.5 C369.009 -0.5 368.785 -0.276142 368.785 0 C368.785 0.276142 369.009 0.5 369.285 0.5 L369.285 0 L369.285 -0.5 Z M372.011 0.5 C372.287 0.5 372.511 0.276142 372.511 0 C372.511 -0.276142 372.287 -0.5 372.011 -0.5 L372.011 0 L372.011 0.5 Z M374.736 -0.5 C374.46 -0.5 374.236 -0.276142 374.236 0 C374.236 0.276142 374.46 0.5 374.736 0.5 L374.736 0 L374.736 -0.5 Z M377.461 0.5 C377.737 0.5 377.961 0.276142 377.961 0 C377.961 -0.276142 377.737 -0.5 377.461 -0.5 L377.461 0 L377.461 0.5 Z M380.187 -0.5 C379.911 -0.5 379.687 -0.276142 379.687 0 C379.687 0.276142 379.911 0.5 380.187 0.5 L380.187 0 L380.187 -0.5 Z M382.912 0.5 C383.188 0.5 383.412 0.276142 383.412 0 C383.412 -0.276142 383.188 -0.5 382.912 -0.5 L382.912 0 L382.912 0.5 Z M385.637 -0.5 C385.361 -0.5 385.137 -0.276142 385.137 0 C385.137 0.276142 385.361 0.5 385.637 0.5 L385.637 0 L385.637 -0.5 Z M388.363 0.5 C388.639 0.5 388.863 0.276142 388.863 0 C388.863 -0.276142 388.639 -0.5 388.363 -0.5 L388.363 0 L388.363 0.5 Z M391.088 -0.5 C390.812 -0.5 390.588 -0.276142 390.588 0 C390.588 0.276142 390.812 0.5 391.088 0.5 L391.088 0 L391.088 -0.5 Z M393.813 0.5 C394.09 0.5 394.313 0.276142 394.313 0 C394.313 -0.276142 394.09 -0.5 393.813 -0.5 L393.813 0 L393.813 0.5 Z M396.539 -0.5 C396.263 -0.5 396.039 -0.276142 396.039 0 C396.039 0.276142 396.263 0.5 396.539 0.5 L396.539 0 L396.539 -0.5 Z M399.264 0.5 C399.54 0.5 399.764 0.276142 399.764 0 C399.764 -0.276142 399.54 -0.5 399.264 -0.5 L399.264 0 L399.264 0.5 Z M401.989 -0.5 C401.713 -0.5 401.489 -0.276142 401.489 0 C401.489 0.276142 401.713 0.5 401.989 0.5 L401.989 0 L401.989 -0.5 Z M404.715 0.5 C404.991 0.5 405.215 0.276142 405.215 0 C405.215 -0.276142 404.991 -0.5 404.715 -0.5 L404.715 0 L404.715 0.5 Z M407.44 -0.5 C407.164 -0.5 406.94 -0.276142 406.94 0 C406.94 0.276142 407.164 0.5 407.44 0.5 L407.44 0 L407.44 -0.5 Z M410.165 0.5 C410.442 0.5 410.665 0.276142 410.665 0 C410.665 -0.276142 410.442 -0.5 410.165 -0.5 L410.165 0 L410.165 0.5 Z M412.891 -0.5 C412.615 -0.5 412.391 -0.276142 412.391 0 C412.391 0.276142 412.615 0.5 412.891 0.5 L412.891 0 L412.891 -0.5 Z M415.616 0.5 C415.892 0.5 416.116 0.276142 416.116 0 C416.116 -0.276142 415.892 -0.5 415.616 -0.5 L415.616 0 L415.616 0.5 Z M418.341 -0.5 C418.065 -0.5 417.841 -0.276142 417.841 0 C417.841 0.276142 418.065 0.5 418.341 0.5 L418.341 0 L418.341 -0.5 Z M421.067 0.5 C421.343 0.5 421.567 0.276142 421.567 0 C421.567 -0.276142 421.343 -0.5 421.067 -0.5 L421.067 0 L421.067 0.5 Z M423.792 -0.5 C423.516 -0.5 423.292 -0.276142 423.292 0 C423.292 0.276142 423.516 0.5 423.792 0.5 L423.792 0 L423.792 -0.5 Z M426.517 0.5 C426.794 0.5 427.017 0.276142 427.017 0 C427.017 -0.276142 426.794 -0.5 426.517 -0.5 L426.517 0 L426.517 0.5 Z M429.243 -0.5 C428.967 -0.5 428.743 -0.276142 428.743 0 C428.743 0.276142 428.967 0.5 429.243 0.5 L429.243 0 L429.243 -0.5 Z M431.968 0.5 C432.244 0.5 432.468 0.276142 432.468 0 C432.468 -0.276142 432.244 -0.5 431.968 -0.5 L431.968 0 L431.968 0.5 Z M434.693 -0.5 C434.417 -0.5 434.193 -0.276142 434.193 0 C434.193 0.276142 434.417 0.5 434.693 0.5 L434.693 0 L434.693 -0.5 Z M437.419 0.5 C437.695 0.5 437.919 0.276142 437.919 0 C437.919 -0.276142 437.695 -0.5 437.419 -0.5 L437.419 0 L437.419 0.5 Z M440.144 -0.5 C439.868 -0.5 439.644 -0.276142 439.644 0 C439.644 0.276142 439.868 0.5 440.144 0.5 L440.144 0 L440.144 -0.5 Z M442.87 0.5 C443.146 0.5 443.37 0.276142 443.37 0 C443.37 -0.276142 443.146 -0.5 442.87 -0.5 L442.87 0 L442.87 0.5 Z M445.595 -0.5 C445.319 -0.5 445.095 -0.276142 445.095 0 C445.095 0.276142 445.319 0.5 445.595 0.5 L445.595 0 L445.595 -0.5 Z M448.32 0.5 C448.596 0.5 448.82 0.276142 448.82 0 C448.82 -0.276142 448.596 -0.5 448.32 -0.5 L448.32 0 L448.32 0.5 Z M451.046 -0.5 C450.769 -0.5 450.546 -0.276142 450.546 0 C450.546 0.276142 450.769 0.5 451.046 0.5 L451.046 0 L451.046 -0.5 Z M453.771 0.5 C454.047 0.5 454.271 0.276142 454.271 0 C454.271 -0.276142 454.047 -0.5 453.771 -0.5 L453.771 0 L453.771 0.5 Z M456.496 -0.5 C456.22 -0.5 455.996 -0.276142 455.996 0 C455.996 0.276142 456.22 0.5 456.496 0.5 L456.496 0 L456.496 -0.5 Z M0 0 L0 0.5 L1.36268 0.5 L1.36268 0 L1.36268 -0.5 L0 -0.5 L0 0 Z M4.08804 0 L4.08804 0.5 L6.81339 0.5 L6.81339 0 L6.81339 -0.5 L4.08804 -0.5 L4.08804 0 Z M9.53875 0 L9.53875 0.5 L12.2641 0.5 L12.2641 0 L12.2641 -0.5 L9.53875 -0.5 L9.53875 0 Z M14.9895 0 L14.9895 0.5 L17.7148 0.5 L17.7148 0 L17.7148 -0.5 L14.9895 -0.5 L14.9895 0 Z M20.4402 0 L20.4402 0.5 L23.1655 0.5 L23.1655 0 L23.1655 -0.5 L20.4402 -0.5 L20.4402 0 Z M25.8909 0 L25.8909 0.5 L28.6162 0.5 L28.6162 0 L28.6162 -0.5 L25.8909 -0.5 L25.8909 0 Z M31.3416 0 L31.3416 0.5 L34.067 0.5 L34.067 0 L34.067 -0.5 L31.3416 -0.5 L31.3416 0 Z M36.7923 0 L36.7923 0.5 L39.5177 0.5 L39.5177 0 L39.5177 -0.5 L36.7923 -0.5 L36.7923 0 Z M42.243 0 L42.243 0.5 L44.9684 0.5 L44.9684 0 L44.9684 -0.5 L42.243 -0.5 L42.243 0 Z M47.6937 0 L47.6937 0.5 L50.4191 0.5 L50.4191 0 L50.4191 -0.5 L47.6937 -0.5 L47.6937 0 Z M53.1445 0 L53.1445 0.5 L55.8698 0.5 L55.8698 0 L55.8698 -0.5 L53.1445 -0.5 L53.1445 0 Z M58.5952 0 L58.5952 0.5 L61.3205 0.5 L61.3205 0 L61.3205 -0.5 L58.5952 -0.5 L58.5952 0 Z M64.0459 0 L64.0459 0.5 L66.7712 0.5 L66.7712 0 L66.7712 -0.5 L64.0459 -0.5 L64.0459 0 Z M69.4966 0 L69.4966 0.5 L72.222 0.5 L72.222 0 L72.222 -0.5 L69.4966 -0.5 L69.4966 0 Z M74.9473 0 L74.9473 0.5 L77.6727 0.5 L77.6727 0 L77.6727 -0.5 L74.9473 -0.5 L74.9473 0 Z M80.398 0 L80.398 0.5 L83.1234 0.5 L83.1234 0 L83.1234 -0.5 L80.398 -0.5 L80.398 0 Z M85.8487 0 L85.8487 0.5 L88.5741 0.5 L88.5741 0 L88.5741 -0.5 L85.8487 -0.5 L85.8487 0 Z M91.2995 0 L91.2995 0.5 L94.0248 0.5 L94.0248 0 L94.0248 -0.5 L91.2995 -0.5 L91.2995 0 Z M96.7502 0 L96.7502 0.5 L99.4755 0.5 L99.4755 0 L99.4755 -0.5 L96.7502 -0.5 L96.7502 0 Z M102.201 0 L102.201 0.5 L104.926 0.5 L104.926 0 L104.926 -0.5 L102.201 -0.5 L102.201 0 Z M107.652 0 L107.652 0.5 L110.377 0.5 L110.377 0 L110.377 -0.5 L107.652 -0.5 L107.652 0 Z M113.102 0 L113.102 0.5 L115.828 0.5 L115.828 0 L115.828 -0.5 L113.102 -0.5 L113.102 0 Z M118.553 0 L118.553 0.5 L121.278 0.5 L121.278 0 L121.278 -0.5 L118.553 -0.5 L118.553 0 Z M124.004 0 L124.004 0.5 L126.729 0.5 L126.729 0 L126.729 -0.5 L124.004 -0.5 L124.004 0 Z M129.454 0 L129.454 0.5 L132.18 0.5 L132.18 0 L132.18 -0.5 L129.454 -0.5 L129.454 0 Z M134.905 0 L134.905 0.5 L137.631 0.5 L137.631 0 L137.631 -0.5 L134.905 -0.5 L134.905 0 Z M140.356 0 L140.356 0.5 L143.081 0.5 L143.081 0 L143.081 -0.5 L140.356 -0.5 L140.356 0 Z M145.807 0 L145.807 0.5 L148.532 0.5 L148.532 0 L148.532 -0.5 L145.807 -0.5 L145.807 0 Z M151.257 0 L151.257 0.5 L153.983 0.5 L153.983 0 L153.983 -0.5 L151.257 -0.5 L151.257 0 Z M156.708 0 L156.708 0.5 L159.433 0.5 L159.433 0 L159.433 -0.5 L156.708 -0.5 L156.708 0 Z M162.159 0 L162.159 0.5 L164.884 0.5 L164.884 0 L164.884 -0.5 L162.159 -0.5 L162.159 0 Z M167.609 0 L167.609 0.5 L170.335 0.5 L170.335 0 L170.335 -0.5 L167.609 -0.5 L167.609 0 Z M173.06 0 L173.06 0.5 L175.786 0.5 L175.786 0 L175.786 -0.5 L173.06 -0.5 L173.06 0 Z M178.511 0 L178.511 0.5 L181.236 0.5 L181.236 0 L181.236 -0.5 L178.511 -0.5 L178.511 0 Z M183.962 0 L183.962 0.5 L186.687 0.5 L186.687 0 L186.687 -0.5 L183.962 -0.5 L183.962 0 Z M189.412 0 L189.412 0.5 L192.138 0.5 L192.138 0 L192.138 -0.5 L189.412 -0.5 L189.412 0 Z M194.863 0 L194.863 0.5 L197.588 0.5 L197.588 0 L197.588 -0.5 L194.863 -0.5 L194.863 0 Z M200.314 0 L200.314 0.5 L203.039 0.5 L203.039 0 L203.039 -0.5 L200.314 -0.5 L200.314 0 Z M205.764 0 L205.764 0.5 L208.49 0.5 L208.49 0 L208.49 -0.5 L205.764 -0.5 L205.764 0 Z M211.215 0 L211.215 0.5 L213.941 0.5 L213.941 0 L213.941 -0.5 L211.215 -0.5 L211.215 0 Z M216.666 0 L216.666 0.5 L219.391 0.5 L219.391 0 L219.391 -0.5 L216.666 -0.5 L216.666 0 Z M222.117 0 L222.117 0.5 L224.842 0.5 L224.842 0 L224.842 -0.5 L222.117 -0.5 L222.117 0 Z M227.567 0 L227.567 0.5 L230.293 0.5 L230.293 0 L230.293 -0.5 L227.567 -0.5 L227.567 0 Z M233.018 0 L233.018 0.5 L235.743 0.5 L235.743 0 L235.743 -0.5 L233.018 -0.5 L233.018 0 Z M238.469 0 L238.469 0.5 L241.194 0.5 L241.194 0 L241.194 -0.5 L238.469 -0.5 L238.469 0 Z M243.919 0 L243.919 0.5 L246.645 0.5 L246.645 0 L246.645 -0.5 L243.919 -0.5 L243.919 0 Z M249.37 0 L249.37 0.5 L252.096 0.5 L252.096 0 L252.096 -0.5 L249.37 -0.5 L249.37 0 Z M254.821 0 L254.821 0.5 L257.546 0.5 L257.546 0 L257.546 -0.5 L254.821 -0.5 L254.821 0 Z M260.272 0 L260.272 0.5 L262.997 0.5 L262.997 0 L262.997 -0.5 L260.272 -0.5 L260.272 0 Z M265.722 0 L265.722 0.5 L268.448 0.5 L268.448 0 L268.448 -0.5 L265.722 -0.5 L265.722 0 Z M271.173 0 L271.173 0.5 L273.898 0.5 L273.898 0 L273.898 -0.5 L271.173 -0.5 L271.173 0 Z M276.624 0 L276.624 0.5 L279.349 0.5 L279.349 0 L279.349 -0.5 L276.624 -0.5 L276.624 0 Z M282.074 0 L282.074 0.5 L284.8 0.5 L284.8 0 L284.8 -0.5 L282.074 -0.5 L282.074 0 Z M287.525 0 L287.525 0.5 L290.25 0.5 L290.25 0 L290.25 -0.5 L287.525 -0.5 L287.525 0 Z M292.976 0 L292.976 0.5 L295.701 0.5 L295.701 0 L295.701 -0.5 L292.976 -0.5 L292.976 0 Z M298.426 0 L298.426 0.5 L301.152 0.5 L301.152 0 L301.152 -0.5 L298.426 -0.5 L298.426 0 Z M303.877 0 L303.877 0.5 L306.602 0.5 L306.602 0 L306.602 -0.5 L303.877 -0.5 L303.877 0 Z M309.328 0 L309.328 0.5 L312.053 0.5 L312.053 0 L312.053 -0.5 L309.328 -0.5 L309.328 0 Z M314.778 0 L314.778 0.5 L317.504 0.5 L317.504 0 L317.504 -0.5 L314.778 -0.5 L314.778 0 Z M320.229 0 L320.229 0.5 L322.954 0.5 L322.954 0 L322.954 -0.5 L320.229 -0.5 L320.229 0 Z M325.68 0 L325.68 0.5 L328.405 0.5 L328.405 0 L328.405 -0.5 L325.68 -0.5 L325.68 0 Z M331.13 0 L331.13 0.5 L333.856 0.5 L333.856 0 L333.856 -0.5 L331.13 -0.5 L331.13 0 Z M336.581 0 L336.581 0.5 L339.307 0.5 L339.307 0 L339.307 -0.5 L336.581 -0.5 L336.581 0 Z M342.032 0 L342.032 0.5 L344.757 0.5 L344.757 0 L344.757 -0.5 L342.032 -0.5 L342.032 0 Z M347.483 0 L347.483 0.5 L350.208 0.5 L350.208 0 L350.208 -0.5 L347.483 -0.5 L347.483 0 Z M352.933 0 L352.933 0.5 L355.659 0.5 L355.659 0 L355.659 -0.5 L352.933 -0.5 L352.933 0 Z M358.384 0 L358.384 0.5 L361.109 0.5 L361.109 0 L361.109 -0.5 L358.384 -0.5 L358.384 0 Z M363.835 0 L363.835 0.5 L366.56 0.5 L366.56 0 L366.56 -0.5 L363.835 -0.5 L363.835 0 Z M369.285 0 L369.285 0.5 L372.011 0.5 L372.011 0 L372.011 -0.5 L369.285 -0.5 L369.285 0 Z M374.736 0 L374.736 0.5 L377.461 0.5 L377.461 0 L377.461 -0.5 L374.736 -0.5 L374.736 0 Z M380.187 0 L380.187 0.5 L382.912 0.5 L382.912 0 L382.912 -0.5 L380.187 -0.5 L380.187 0 Z M385.637 0 L385.637 0.5 L388.363 0.5 L388.363 0 L388.363 -0.5 L385.637 -0.5 L385.637 0 Z M391.088 0 L391.088 0.5 L393.813 0.5 L393.813 0 L393.813 -0.5 L391.088 -0.5 L391.088 0 Z M396.539 0 L396.539 0.5 L399.264 0.5 L399.264 0 L399.264 -0.5 L396.539 -0.5 L396.539 0 Z M401.989 0 L401.989 0.5 L404.715 0.5 L404.715 0 L404.715 -0.5 L401.989 -0.5 L401.989 0 Z M407.44 0 L407.44 0.5 L410.165 0.5 L410.165 0 L410.165 -0.5 L407.44 -0.5 L407.44 0 Z M412.891 0 L412.891 0.5 L415.616 0.5 L415.616 0 L415.616 -0.5 L412.891 -0.5 L412.891 0 Z M418.341 0 L418.341 0.5 L421.067 0.5 L421.067 0 L421.067 -0.5 L418.341 -0.5 L418.341 0 Z M423.792 0 L423.792 0.5 L426.517 0.5 L426.517 0 L426.517 -0.5 L423.792 -0.5 L423.792 0 Z M429.243 0 L429.243 0.5 L431.968 0.5 L431.968 0 L431.968 -0.5 L429.243 -0.5 L429.243 0 Z M434.693 0 L434.693 0.5 L437.419 0.5 L437.419 0 L437.419 -0.5 L434.693 -0.5 L434.693 0 Z M440.144 0 L440.144 0.5 L442.87 0.5 L442.87 0 L442.87 -0.5 L440.144 -0.5 L440.144 0 Z M445.595 0 L445.595 0.5 L448.32 0.5 L448.32 0 L448.32 -0.5 L445.595 -0.5 L445.595 0 Z M451.046 0 L451.046 0.5 L453.771 0.5 L453.771 0 L453.771 -0.5 L451.046 -0.5 L451.046 0 Z M456.496 0 L456.496 0.5 L457.86 0.5 L457.86 0 L457.86 -0.5 L456.496 -0.5 L456.496 0 Z" fill="#8e83fd"/></svg>
          <div style={{ position: "absolute", left: "414.64px", top: "32.07px", width: "79.78px", height: "17.48px", borderRadius: "4.57px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d2cdfe", display: "flex", flexDirection: "row", padding: "2.74px 6.39px 2.74px 6.39px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#635cb1" }}>Included 1,000</p>
          </div>
          <div style={{ position: "absolute", left: "259.25px", top: "6.73px", width: "88.8px", height: "18.48px", borderRadius: "5.48px", background: "#1f1f22", boxShadow: "0px 1.83px 5.48px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "2.74px 6.4px 2.74px 6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>Jun · 1,240 used</p>
          </div>
          <svg style={{ position: "absolute", left: "299.99px", top: "24.71px", width: "7.31px", height: "3.66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="3.66" viewBox="0 0 7.31 3.66" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L7.31 0 L3.66 3.66 L0 0 Z" fill="#1f1f22"/></svg>
        </div>
        <div style={{ position: "absolute", left: "410.1px", top: "18.28px", width: "91.62px", height: "14px", display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Aug · 412 so far</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "538.28px", top: "268.28px", width: "277.14px", height: "232px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Billing details</p>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "50px", width: "240.58px", height: "31.07px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Billing email</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>finance@alderco.com</p>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "81.07px", width: "240.58px", height: "31.07px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Company</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Alder & Company LLC</p>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "112.14px", width: "240.58px", height: "31.07px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Tax ID</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>EIN 84-2913377</p>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "143.21px", width: "240.58px", height: "31.07px", boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Address</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>141 Front St, Brooklyn NY</p>
        </div>
        <div data-fu="btn" style={{ position: "absolute", left: "18.28px", top: "181.73px", width: "240.58px", height: "31.99px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#686765" }}>Edit details</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "518.56px", width: "815.42px", height: "300.44px", borderRadius: "14.62px", background: "#fefefe", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "18.28px", top: "21.93px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Invoices</p>
        <div data-fu="btn" style={{ position: "absolute", left: "677.28px", top: "16.45px", width: "119.86px", height: "29.24px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Download size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Download all</p>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "58.49px", width: "815.42px", height: "206.54px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "815.42px", height: "38.38px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "250px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Invoice</p>
            </div>
            <div style={{ width: "120px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Date</p>
            </div>
            <div style={{ width: "120px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Amount</p>
            </div>
            <div style={{ width: "130px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Method</p>
            </div>
            <div style={{ width: "120px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Status</p>
            </div>
            <div style={{ width: "75.42px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, height: "17px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
          <div data-fu="row" style={{ width: "815.42px", height: "42.04px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "250px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <FileInvoice size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>MON-2026-0901</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Growth · annual renewal</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Sep 01 2026</p>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$1,490.00</p>
            </div>
            <div style={{ width: "130px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Amex ••1021</p>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#4e57ed"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed" }}>Scheduled</p>
              </div>
            </div>
            <div style={{ width: "75.42px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "815.42px", height: "42.04px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "250px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <FileInvoice size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>MON-2026-0614</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>AI add-on · 500 questions</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Jun 14 2026</p>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$60.00</p>
            </div>
            <div style={{ width: "130px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Amex ••1021</p>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>Paid</p>
              </div>
            </div>
            <div style={{ width: "75.42px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Download size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "815.42px", height: "42.04px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "250px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <FileInvoice size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>MON-2026-0302</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>2 extra seats · prorated</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Mar 02 2026</p>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$124.00</p>
            </div>
            <div style={{ width: "130px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Amex ••1021</p>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>Paid</p>
              </div>
            </div>
            <div style={{ width: "75.42px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Download size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "815.42px", height: "42.04px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "250px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <FileInvoice size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>MON-2025-0901</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Growth · annual</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Sep 01 2025</p>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$1,490.00</p>
            </div>
            <div style={{ width: "130px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Amex ••1021</p>
            </div>
            <div style={{ width: "120px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>Paid</p>
              </div>
            </div>
            <div style={{ width: "75.42px", height: "41.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Download size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
              </div>
            </div>
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
