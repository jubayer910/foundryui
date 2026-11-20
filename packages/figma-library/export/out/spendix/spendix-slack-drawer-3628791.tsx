"use client";
// Slack drawer (spendix, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { CreditCard, FileInvoice, Loader, Pencil, UserMinus, X } from "ingotui-icons/react/stroke-rounded";

export function SlackDrawer() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "460px", height: "1047px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0, 0px 20px 44px -12px rgba(13, 13, 18, 0.14), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "20px 20px 17px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "24px", height: "24px", background: "url('https://ingotui.com/library-img/2241eb9e90bd7762609a0b334568806d0ddacb36.png') center / cover no-repeat" }} />
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Slack</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "224px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>Business+ · billed monthly · SUB-0217</p>
        </div>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "18px 20px 16px 20px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "169px", lineHeight: "36px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#0f172a" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#0f172a" }}>$530.20</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>{" / month"}</span>
            </p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "235px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>$6,362.40 a year · $4.82 per seat · HR card</p>
          </div>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "214px", flexShrink: 0, borderRadius: "12px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #e2e8f0", position: "relative" }}>
          <p style={{ position: "absolute", left: "14px", top: "12px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "172px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Seat usage · last 12 weeks</p>
          <div style={{ position: "absolute", left: "288px", top: "14px", width: "118px", height: "16px", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#2563eb", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Used</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#f59e0b", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Licensed</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "14px", top: "44px", width: "392px", height: "160px" }}>
            <svg style={{ position: "absolute", left: "30px", top: "8px", width: "362px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="362" height="1" viewBox="0 0 362 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L362 0" fill="none" stroke="#e4e4e4" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "5px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>115</p>
            <svg style={{ position: "absolute", left: "30px", top: "71px", width: "362px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="362" height="1" viewBox="0 0 362 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L362 0" fill="none" stroke="#e4e4e4" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "1px", top: "63px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>100</p>
            <div style={{ position: "absolute", left: "30px", top: "133.5px", width: "362px", height: "1px", background: "#e2e2e5" }} />
            <p style={{ position: "absolute", left: "6px", top: "126px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>80</p>
            <div style={{ position: "absolute", left: "37.08px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "37.08px", top: "76.4px", width: "16px", height: "57.6px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "67.25px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "67.25px", top: "69.2px", width: "16px", height: "64.8px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "97.42px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "97.42px", top: "72.8px", width: "16px", height: "61.2px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "127.58px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "127.58px", top: "58.4px", width: "16px", height: "75.6px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "157.75px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "157.75px", top: "51.2px", width: "16px", height: "82.8px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "187.92px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "187.92px", top: "54.8px", width: "16px", height: "79.2px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "218.08px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "218.08px", top: "47.6px", width: "16px", height: "86.4px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "248.25px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "248.25px", top: "40.4px", width: "16px", height: "93.6px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "278.42px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "278.42px", top: "44px", width: "16px", height: "90px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "308.58px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "308.58px", top: "33.2px", width: "16px", height: "100.8px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "338.75px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "338.75px", top: "29.6px", width: "16px", height: "104.4px", borderRadius: "8px", background: "linear-gradient(180deg, #c6d6fa 0%, #b5caf8 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 94, 223, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "368.92px", top: "8px", width: "16px", height: "126px", borderRadius: "8px", background: "#f6f6f4" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "368.92px", top: "26px", width: "16px", height: "108px", borderRadius: "8px", background: "linear-gradient(180deg, #4177ee 0%, #2563eb 100%)", boxShadow: "inset 0 0 0 1px rgba(29, 77, 183, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <p style={{ position: "absolute", left: "25.58px", top: "144px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>24 Jan</p>
            <p style={{ position: "absolute", left: "117.58px", top: "144px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>21 Feb</p>
            <p style={{ position: "absolute", left: "207.58px", top: "144px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>21 Mar</p>
            <p style={{ position: "absolute", left: "356px", top: "144px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>18 Apr</p>
            <svg style={{ position: "absolute", left: "30px", top: "26px", width: "362px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="362" height="1" viewBox="0 0 362 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 C-0.276142 -0.5 -0.5 -0.276142 -0.5 0 C-0.5 0.276142 -0.276142 0.5 0 0.5 L0 0 L0 -0.5 Z M362 0.5 C362.276 0.5 362.5 0.276142 362.5 0 C362.5 -0.276142 362.276 -0.5 362 -0.5 L362 0 L362 0.5 Z M1.50833 0.5 C1.78448 0.5 2.00833 0.276142 2.00833 0 C2.00833 -0.276142 1.78448 -0.5 1.50833 -0.5 L1.50833 0 L1.50833 0.5 Z M4.525 -0.5 C4.24886 -0.5 4.025 -0.276142 4.025 0 C4.025 0.276142 4.24886 0.5 4.525 0.5 L4.525 0 L4.525 -0.5 Z M7.54167 0.5 C7.81781 0.5 8.04167 0.276142 8.04167 0 C8.04167 -0.276142 7.81781 -0.5 7.54167 -0.5 L7.54167 0 L7.54167 0.5 Z M10.5583 -0.5 C10.2822 -0.5 10.0583 -0.276142 10.0583 0 C10.0583 0.276142 10.2822 0.5 10.5583 0.5 L10.5583 0 L10.5583 -0.5 Z M13.575 0.5 C13.8511 0.5 14.075 0.276142 14.075 0 C14.075 -0.276142 13.8511 -0.5 13.575 -0.5 L13.575 0 L13.575 0.5 Z M16.5917 -0.5 C16.3155 -0.5 16.0917 -0.276142 16.0917 0 C16.0917 0.276142 16.3155 0.5 16.5917 0.5 L16.5917 0 L16.5917 -0.5 Z M19.6083 0.5 C19.8845 0.5 20.1083 0.276142 20.1083 0 C20.1083 -0.276142 19.8845 -0.5 19.6083 -0.5 L19.6083 0 L19.6083 0.5 Z M22.625 -0.5 C22.3489 -0.5 22.125 -0.276142 22.125 0 C22.125 0.276142 22.3489 0.5 22.625 0.5 L22.625 0 L22.625 -0.5 Z M25.6417 0.5 C25.9178 0.5 26.1417 0.276142 26.1417 0 C26.1417 -0.276142 25.9178 -0.5 25.6417 -0.5 L25.6417 0 L25.6417 0.5 Z M28.6583 -0.5 C28.3822 -0.5 28.1583 -0.276142 28.1583 0 C28.1583 0.276142 28.3822 0.5 28.6583 0.5 L28.6583 0 L28.6583 -0.5 Z M31.675 0.5 C31.9511 0.5 32.175 0.276142 32.175 0 C32.175 -0.276142 31.9511 -0.5 31.675 -0.5 L31.675 0 L31.675 0.5 Z M34.6917 -0.5 C34.4155 -0.5 34.1917 -0.276142 34.1917 0 C34.1917 0.276142 34.4155 0.5 34.6917 0.5 L34.6917 0 L34.6917 -0.5 Z M37.7083 0.5 C37.9845 0.5 38.2083 0.276142 38.2083 0 C38.2083 -0.276142 37.9845 -0.5 37.7083 -0.5 L37.7083 0 L37.7083 0.5 Z M40.725 -0.5 C40.4489 -0.5 40.225 -0.276142 40.225 0 C40.225 0.276142 40.4489 0.5 40.725 0.5 L40.725 0 L40.725 -0.5 Z M43.7417 0.5 C44.0178 0.5 44.2417 0.276142 44.2417 0 C44.2417 -0.276142 44.0178 -0.5 43.7417 -0.5 L43.7417 0 L43.7417 0.5 Z M46.7583 -0.5 C46.4822 -0.5 46.2583 -0.276142 46.2583 0 C46.2583 0.276142 46.4822 0.5 46.7583 0.5 L46.7583 0 L46.7583 -0.5 Z M49.775 0.5 C50.0511 0.5 50.275 0.276142 50.275 0 C50.275 -0.276142 50.0511 -0.5 49.775 -0.5 L49.775 0 L49.775 0.5 Z M52.7917 -0.5 C52.5155 -0.5 52.2917 -0.276142 52.2917 0 C52.2917 0.276142 52.5155 0.5 52.7917 0.5 L52.7917 0 L52.7917 -0.5 Z M55.8083 0.5 C56.0845 0.5 56.3083 0.276142 56.3083 0 C56.3083 -0.276142 56.0845 -0.5 55.8083 -0.5 L55.8083 0 L55.8083 0.5 Z M58.825 -0.5 C58.5489 -0.5 58.325 -0.276142 58.325 0 C58.325 0.276142 58.5489 0.5 58.825 0.5 L58.825 0 L58.825 -0.5 Z M61.8417 0.5 C62.1178 0.5 62.3417 0.276142 62.3417 0 C62.3417 -0.276142 62.1178 -0.5 61.8417 -0.5 L61.8417 0 L61.8417 0.5 Z M64.8583 -0.5 C64.5822 -0.5 64.3583 -0.276142 64.3583 0 C64.3583 0.276142 64.5822 0.5 64.8583 0.5 L64.8583 0 L64.8583 -0.5 Z M67.875 0.5 C68.1511 0.5 68.375 0.276142 68.375 0 C68.375 -0.276142 68.1511 -0.5 67.875 -0.5 L67.875 0 L67.875 0.5 Z M70.8917 -0.5 C70.6155 -0.5 70.3917 -0.276142 70.3917 0 C70.3917 0.276142 70.6155 0.5 70.8917 0.5 L70.8917 0 L70.8917 -0.5 Z M73.9083 0.5 C74.1845 0.5 74.4083 0.276142 74.4083 0 C74.4083 -0.276142 74.1845 -0.5 73.9083 -0.5 L73.9083 0 L73.9083 0.5 Z M76.925 -0.5 C76.6489 -0.5 76.425 -0.276142 76.425 0 C76.425 0.276142 76.6489 0.5 76.925 0.5 L76.925 0 L76.925 -0.5 Z M79.9417 0.5 C80.2178 0.5 80.4417 0.276142 80.4417 0 C80.4417 -0.276142 80.2178 -0.5 79.9417 -0.5 L79.9417 0 L79.9417 0.5 Z M82.9584 -0.5 C82.6822 -0.5 82.4584 -0.276142 82.4584 0 C82.4584 0.276142 82.6822 0.5 82.9584 0.5 L82.9584 0 L82.9584 -0.5 Z M85.975 0.5 C86.2512 0.5 86.475 0.276142 86.475 0 C86.475 -0.276142 86.2512 -0.5 85.975 -0.5 L85.975 0 L85.975 0.5 Z M88.9917 -0.5 C88.7155 -0.5 88.4917 -0.276142 88.4917 0 C88.4917 0.276142 88.7155 0.5 88.9917 0.5 L88.9917 0 L88.9917 -0.5 Z M92.0084 0.5 C92.2845 0.5 92.5084 0.276142 92.5084 0 C92.5084 -0.276142 92.2845 -0.5 92.0084 -0.5 L92.0084 0 L92.0084 0.5 Z M95.025 -0.5 C94.7489 -0.5 94.525 -0.276142 94.525 0 C94.525 0.276142 94.7489 0.5 95.025 0.5 L95.025 0 L95.025 -0.5 Z M98.0417 0.5 C98.3178 0.5 98.5417 0.276142 98.5417 0 C98.5417 -0.276142 98.3178 -0.5 98.0417 -0.5 L98.0417 0 L98.0417 0.5 Z M101.058 -0.5 C100.782 -0.5 100.558 -0.276142 100.558 0 C100.558 0.276142 100.782 0.5 101.058 0.5 L101.058 0 L101.058 -0.5 Z M104.075 0.5 C104.351 0.5 104.575 0.276142 104.575 0 C104.575 -0.276142 104.351 -0.5 104.075 -0.5 L104.075 0 L104.075 0.5 Z M107.092 -0.5 C106.816 -0.5 106.592 -0.276142 106.592 0 C106.592 0.276142 106.816 0.5 107.092 0.5 L107.092 0 L107.092 -0.5 Z M110.108 0.5 C110.385 0.5 110.608 0.276142 110.608 0 C110.608 -0.276142 110.385 -0.5 110.108 -0.5 L110.108 0 L110.108 0.5 Z M113.125 -0.5 C112.849 -0.5 112.625 -0.276142 112.625 0 C112.625 0.276142 112.849 0.5 113.125 0.5 L113.125 0 L113.125 -0.5 Z M116.142 0.5 C116.418 0.5 116.642 0.276142 116.642 0 C116.642 -0.276142 116.418 -0.5 116.142 -0.5 L116.142 0 L116.142 0.5 Z M119.158 -0.5 C118.882 -0.5 118.658 -0.276142 118.658 0 C118.658 0.276142 118.882 0.5 119.158 0.5 L119.158 0 L119.158 -0.5 Z M122.175 0.5 C122.451 0.5 122.675 0.276142 122.675 0 C122.675 -0.276142 122.451 -0.5 122.175 -0.5 L122.175 0 L122.175 0.5 Z M125.192 -0.5 C124.916 -0.5 124.692 -0.276142 124.692 0 C124.692 0.276142 124.916 0.5 125.192 0.5 L125.192 0 L125.192 -0.5 Z M128.208 0.5 C128.485 0.5 128.708 0.276142 128.708 0 C128.708 -0.276142 128.485 -0.5 128.208 -0.5 L128.208 0 L128.208 0.5 Z M131.225 -0.5 C130.949 -0.5 130.725 -0.276142 130.725 0 C130.725 0.276142 130.949 0.5 131.225 0.5 L131.225 0 L131.225 -0.5 Z M134.242 0.5 C134.518 0.5 134.742 0.276142 134.742 0 C134.742 -0.276142 134.518 -0.5 134.242 -0.5 L134.242 0 L134.242 0.5 Z M137.258 -0.5 C136.982 -0.5 136.758 -0.276142 136.758 0 C136.758 0.276142 136.982 0.5 137.258 0.5 L137.258 0 L137.258 -0.5 Z M140.275 0.5 C140.551 0.5 140.775 0.276142 140.775 0 C140.775 -0.276142 140.551 -0.5 140.275 -0.5 L140.275 0 L140.275 0.5 Z M143.292 -0.5 C143.016 -0.5 142.792 -0.276142 142.792 0 C142.792 0.276142 143.016 0.5 143.292 0.5 L143.292 0 L143.292 -0.5 Z M146.308 0.5 C146.585 0.5 146.808 0.276142 146.808 0 C146.808 -0.276142 146.585 -0.5 146.308 -0.5 L146.308 0 L146.308 0.5 Z M149.325 -0.5 C149.049 -0.5 148.825 -0.276142 148.825 0 C148.825 0.276142 149.049 0.5 149.325 0.5 L149.325 0 L149.325 -0.5 Z M152.342 0.5 C152.618 0.5 152.842 0.276142 152.842 0 C152.842 -0.276142 152.618 -0.5 152.342 -0.5 L152.342 0 L152.342 0.5 Z M155.358 -0.5 C155.082 -0.5 154.858 -0.276142 154.858 0 C154.858 0.276142 155.082 0.5 155.358 0.5 L155.358 0 L155.358 -0.5 Z M158.375 0.5 C158.651 0.5 158.875 0.276142 158.875 0 C158.875 -0.276142 158.651 -0.5 158.375 -0.5 L158.375 0 L158.375 0.5 Z M161.392 -0.5 C161.116 -0.5 160.892 -0.276142 160.892 0 C160.892 0.276142 161.116 0.5 161.392 0.5 L161.392 0 L161.392 -0.5 Z M164.408 0.5 C164.685 0.5 164.908 0.276142 164.908 0 C164.908 -0.276142 164.685 -0.5 164.408 -0.5 L164.408 0 L164.408 0.5 Z M167.425 -0.5 C167.149 -0.5 166.925 -0.276142 166.925 0 C166.925 0.276142 167.149 0.5 167.425 0.5 L167.425 0 L167.425 -0.5 Z M170.442 0.5 C170.718 0.5 170.942 0.276142 170.942 0 C170.942 -0.276142 170.718 -0.5 170.442 -0.5 L170.442 0 L170.442 0.5 Z M173.458 -0.5 C173.182 -0.5 172.958 -0.276142 172.958 0 C172.958 0.276142 173.182 0.5 173.458 0.5 L173.458 0 L173.458 -0.5 Z M176.475 0.5 C176.751 0.5 176.975 0.276142 176.975 0 C176.975 -0.276142 176.751 -0.5 176.475 -0.5 L176.475 0 L176.475 0.5 Z M179.492 -0.5 C179.216 -0.5 178.992 -0.276142 178.992 0 C178.992 0.276142 179.216 0.5 179.492 0.5 L179.492 0 L179.492 -0.5 Z M182.508 0.5 C182.784 0.5 183.008 0.276142 183.008 0 C183.008 -0.276142 182.784 -0.5 182.508 -0.5 L182.508 0 L182.508 0.5 Z M185.525 -0.5 C185.249 -0.5 185.025 -0.276142 185.025 0 C185.025 0.276142 185.249 0.5 185.525 0.5 L185.525 0 L185.525 -0.5 Z M188.542 0.5 C188.818 0.5 189.042 0.276142 189.042 0 C189.042 -0.276142 188.818 -0.5 188.542 -0.5 L188.542 0 L188.542 0.5 Z M191.558 -0.5 C191.282 -0.5 191.058 -0.276142 191.058 0 C191.058 0.276142 191.282 0.5 191.558 0.5 L191.558 0 L191.558 -0.5 Z M194.575 0.5 C194.851 0.5 195.075 0.276142 195.075 0 C195.075 -0.276142 194.851 -0.5 194.575 -0.5 L194.575 0 L194.575 0.5 Z M197.592 -0.5 C197.316 -0.5 197.092 -0.276142 197.092 0 C197.092 0.276142 197.316 0.5 197.592 0.5 L197.592 0 L197.592 -0.5 Z M200.608 0.5 C200.884 0.5 201.108 0.276142 201.108 0 C201.108 -0.276142 200.884 -0.5 200.608 -0.5 L200.608 0 L200.608 0.5 Z M203.625 -0.5 C203.349 -0.5 203.125 -0.276142 203.125 0 C203.125 0.276142 203.349 0.5 203.625 0.5 L203.625 0 L203.625 -0.5 Z M206.642 0.5 C206.918 0.5 207.142 0.276142 207.142 0 C207.142 -0.276142 206.918 -0.5 206.642 -0.5 L206.642 0 L206.642 0.5 Z M209.658 -0.5 C209.382 -0.5 209.158 -0.276142 209.158 0 C209.158 0.276142 209.382 0.5 209.658 0.5 L209.658 0 L209.658 -0.5 Z M212.675 0.5 C212.951 0.5 213.175 0.276142 213.175 0 C213.175 -0.276142 212.951 -0.5 212.675 -0.5 L212.675 0 L212.675 0.5 Z M215.692 -0.5 C215.415 -0.5 215.192 -0.276142 215.192 0 C215.192 0.276142 215.415 0.5 215.692 0.5 L215.692 0 L215.692 -0.5 Z M218.708 0.5 C218.984 0.5 219.208 0.276142 219.208 0 C219.208 -0.276142 218.984 -0.5 218.708 -0.5 L218.708 0 L218.708 0.5 Z M221.725 -0.5 C221.449 -0.5 221.225 -0.276142 221.225 0 C221.225 0.276142 221.449 0.5 221.725 0.5 L221.725 0 L221.725 -0.5 Z M224.742 0.5 C225.018 0.5 225.242 0.276142 225.242 0 C225.242 -0.276142 225.018 -0.5 224.742 -0.5 L224.742 0 L224.742 0.5 Z M227.758 -0.5 C227.482 -0.5 227.258 -0.276142 227.258 0 C227.258 0.276142 227.482 0.5 227.758 0.5 L227.758 0 L227.758 -0.5 Z M230.775 0.5 C231.051 0.5 231.275 0.276142 231.275 0 C231.275 -0.276142 231.051 -0.5 230.775 -0.5 L230.775 0 L230.775 0.5 Z M233.792 -0.5 C233.515 -0.5 233.292 -0.276142 233.292 0 C233.292 0.276142 233.515 0.5 233.792 0.5 L233.792 0 L233.792 -0.5 Z M236.808 0.5 C237.084 0.5 237.308 0.276142 237.308 0 C237.308 -0.276142 237.084 -0.5 236.808 -0.5 L236.808 0 L236.808 0.5 Z M239.825 -0.5 C239.549 -0.5 239.325 -0.276142 239.325 0 C239.325 0.276142 239.549 0.5 239.825 0.5 L239.825 0 L239.825 -0.5 Z M242.842 0.5 C243.118 0.5 243.342 0.276142 243.342 0 C243.342 -0.276142 243.118 -0.5 242.842 -0.5 L242.842 0 L242.842 0.5 Z M245.858 -0.5 C245.582 -0.5 245.358 -0.276142 245.358 0 C245.358 0.276142 245.582 0.5 245.858 0.5 L245.858 0 L245.858 -0.5 Z M248.875 0.5 C249.151 0.5 249.375 0.276142 249.375 0 C249.375 -0.276142 249.151 -0.5 248.875 -0.5 L248.875 0 L248.875 0.5 Z M251.892 -0.5 C251.615 -0.5 251.392 -0.276142 251.392 0 C251.392 0.276142 251.615 0.5 251.892 0.5 L251.892 0 L251.892 -0.5 Z M254.908 0.5 C255.184 0.5 255.408 0.276142 255.408 0 C255.408 -0.276142 255.184 -0.5 254.908 -0.5 L254.908 0 L254.908 0.5 Z M257.925 -0.5 C257.649 -0.5 257.425 -0.276142 257.425 0 C257.425 0.276142 257.649 0.5 257.925 0.5 L257.925 0 L257.925 -0.5 Z M260.942 0.5 C261.218 0.5 261.442 0.276142 261.442 0 C261.442 -0.276142 261.218 -0.5 260.942 -0.5 L260.942 0 L260.942 0.5 Z M263.958 -0.5 C263.682 -0.5 263.458 -0.276142 263.458 0 C263.458 0.276142 263.682 0.5 263.958 0.5 L263.958 0 L263.958 -0.5 Z M266.975 0.5 C267.251 0.5 267.475 0.276142 267.475 0 C267.475 -0.276142 267.251 -0.5 266.975 -0.5 L266.975 0 L266.975 0.5 Z M269.992 -0.5 C269.715 -0.5 269.492 -0.276142 269.492 0 C269.492 0.276142 269.715 0.5 269.992 0.5 L269.992 0 L269.992 -0.5 Z M273.008 0.5 C273.284 0.5 273.508 0.276142 273.508 0 C273.508 -0.276142 273.284 -0.5 273.008 -0.5 L273.008 0 L273.008 0.5 Z M276.025 -0.5 C275.749 -0.5 275.525 -0.276142 275.525 0 C275.525 0.276142 275.749 0.5 276.025 0.5 L276.025 0 L276.025 -0.5 Z M279.042 0.5 C279.318 0.5 279.542 0.276142 279.542 0 C279.542 -0.276142 279.318 -0.5 279.042 -0.5 L279.042 0 L279.042 0.5 Z M282.058 -0.5 C281.782 -0.5 281.558 -0.276142 281.558 0 C281.558 0.276142 281.782 0.5 282.058 0.5 L282.058 0 L282.058 -0.5 Z M285.075 0.5 C285.351 0.5 285.575 0.276142 285.575 0 C285.575 -0.276142 285.351 -0.5 285.075 -0.5 L285.075 0 L285.075 0.5 Z M288.092 -0.5 C287.815 -0.5 287.592 -0.276142 287.592 0 C287.592 0.276142 287.815 0.5 288.092 0.5 L288.092 0 L288.092 -0.5 Z M291.108 0.5 C291.384 0.5 291.608 0.276142 291.608 0 C291.608 -0.276142 291.384 -0.5 291.108 -0.5 L291.108 0 L291.108 0.5 Z M294.125 -0.5 C293.849 -0.5 293.625 -0.276142 293.625 0 C293.625 0.276142 293.849 0.5 294.125 0.5 L294.125 0 L294.125 -0.5 Z M297.142 0.5 C297.418 0.5 297.642 0.276142 297.642 0 C297.642 -0.276142 297.418 -0.5 297.142 -0.5 L297.142 0 L297.142 0.5 Z M300.158 -0.5 C299.882 -0.5 299.658 -0.276142 299.658 0 C299.658 0.276142 299.882 0.5 300.158 0.5 L300.158 0 L300.158 -0.5 Z M303.175 0.5 C303.451 0.5 303.675 0.276142 303.675 0 C303.675 -0.276142 303.451 -0.5 303.175 -0.5 L303.175 0 L303.175 0.5 Z M306.191 -0.5 C305.915 -0.5 305.691 -0.276142 305.691 0 C305.691 0.276142 305.915 0.5 306.191 0.5 L306.191 0 L306.191 -0.5 Z M309.208 0.5 C309.484 0.5 309.708 0.276142 309.708 0 C309.708 -0.276142 309.484 -0.5 309.208 -0.5 L309.208 0 L309.208 0.5 Z M312.225 -0.5 C311.949 -0.5 311.725 -0.276142 311.725 0 C311.725 0.276142 311.949 0.5 312.225 0.5 L312.225 0 L312.225 -0.5 Z M315.241 0.5 C315.518 0.5 315.741 0.276142 315.741 0 C315.741 -0.276142 315.518 -0.5 315.241 -0.5 L315.241 0 L315.241 0.5 Z M318.258 -0.5 C317.982 -0.5 317.758 -0.276142 317.758 0 C317.758 0.276142 317.982 0.5 318.258 0.5 L318.258 0 L318.258 -0.5 Z M321.275 0.5 C321.551 0.5 321.775 0.276142 321.775 0 C321.775 -0.276142 321.551 -0.5 321.275 -0.5 L321.275 0 L321.275 0.5 Z M324.291 -0.5 C324.015 -0.5 323.791 -0.276142 323.791 0 C323.791 0.276142 324.015 0.5 324.291 0.5 L324.291 0 L324.291 -0.5 Z M327.308 0.5 C327.584 0.5 327.808 0.276142 327.808 0 C327.808 -0.276142 327.584 -0.5 327.308 -0.5 L327.308 0 L327.308 0.5 Z M330.325 -0.5 C330.049 -0.5 329.825 -0.276142 329.825 0 C329.825 0.276142 330.049 0.5 330.325 0.5 L330.325 0 L330.325 -0.5 Z M333.341 0.5 C333.618 0.5 333.841 0.276142 333.841 0 C333.841 -0.276142 333.618 -0.5 333.341 -0.5 L333.341 0 L333.341 0.5 Z M336.358 -0.5 C336.082 -0.5 335.858 -0.276142 335.858 0 C335.858 0.276142 336.082 0.5 336.358 0.5 L336.358 0 L336.358 -0.5 Z M339.375 0.5 C339.651 0.5 339.875 0.276142 339.875 0 C339.875 -0.276142 339.651 -0.5 339.375 -0.5 L339.375 0 L339.375 0.5 Z M342.391 -0.5 C342.115 -0.5 341.891 -0.276142 341.891 0 C341.891 0.276142 342.115 0.5 342.391 0.5 L342.391 0 L342.391 -0.5 Z M345.408 0.5 C345.684 0.5 345.908 0.276142 345.908 0 C345.908 -0.276142 345.684 -0.5 345.408 -0.5 L345.408 0 L345.408 0.5 Z M348.425 -0.5 C348.149 -0.5 347.925 -0.276142 347.925 0 C347.925 0.276142 348.149 0.5 348.425 0.5 L348.425 0 L348.425 -0.5 Z M351.441 0.5 C351.718 0.5 351.941 0.276142 351.941 0 C351.941 -0.276142 351.718 -0.5 351.441 -0.5 L351.441 0 L351.441 0.5 Z M354.458 -0.5 C354.182 -0.5 353.958 -0.276142 353.958 0 C353.958 0.276142 354.182 0.5 354.458 0.5 L354.458 0 L354.458 -0.5 Z M357.475 0.5 C357.751 0.5 357.975 0.276142 357.975 0 C357.975 -0.276142 357.751 -0.5 357.475 -0.5 L357.475 0 L357.475 0.5 Z M360.491 -0.5 C360.215 -0.5 359.991 -0.276142 359.991 0 C359.991 0.276142 360.215 0.5 360.491 0.5 L360.491 0 L360.491 -0.5 Z M0 0 L0 0.5 L1.50833 0.5 L1.50833 0 L1.50833 -0.5 L0 -0.5 L0 0 Z M4.525 0 L4.525 0.5 L7.54167 0.5 L7.54167 0 L7.54167 -0.5 L4.525 -0.5 L4.525 0 Z M10.5583 0 L10.5583 0.5 L13.575 0.5 L13.575 0 L13.575 -0.5 L10.5583 -0.5 L10.5583 0 Z M16.5917 0 L16.5917 0.5 L19.6083 0.5 L19.6083 0 L19.6083 -0.5 L16.5917 -0.5 L16.5917 0 Z M22.625 0 L22.625 0.5 L25.6417 0.5 L25.6417 0 L25.6417 -0.5 L22.625 -0.5 L22.625 0 Z M28.6583 0 L28.6583 0.5 L31.675 0.5 L31.675 0 L31.675 -0.5 L28.6583 -0.5 L28.6583 0 Z M34.6917 0 L34.6917 0.5 L37.7083 0.5 L37.7083 0 L37.7083 -0.5 L34.6917 -0.5 L34.6917 0 Z M40.725 0 L40.725 0.5 L43.7417 0.5 L43.7417 0 L43.7417 -0.5 L40.725 -0.5 L40.725 0 Z M46.7583 0 L46.7583 0.5 L49.775 0.5 L49.775 0 L49.775 -0.5 L46.7583 -0.5 L46.7583 0 Z M52.7917 0 L52.7917 0.5 L55.8083 0.5 L55.8083 0 L55.8083 -0.5 L52.7917 -0.5 L52.7917 0 Z M58.825 0 L58.825 0.5 L61.8417 0.5 L61.8417 0 L61.8417 -0.5 L58.825 -0.5 L58.825 0 Z M64.8583 0 L64.8583 0.5 L67.875 0.5 L67.875 0 L67.875 -0.5 L64.8583 -0.5 L64.8583 0 Z M70.8917 0 L70.8917 0.5 L73.9083 0.5 L73.9083 0 L73.9083 -0.5 L70.8917 -0.5 L70.8917 0 Z M76.925 0 L76.925 0.5 L79.9417 0.5 L79.9417 0 L79.9417 -0.5 L76.925 -0.5 L76.925 0 Z M82.9584 0 L82.9584 0.5 L85.975 0.5 L85.975 0 L85.975 -0.5 L82.9584 -0.5 L82.9584 0 Z M88.9917 0 L88.9917 0.5 L92.0084 0.5 L92.0084 0 L92.0084 -0.5 L88.9917 -0.5 L88.9917 0 Z M95.025 0 L95.025 0.5 L98.0417 0.5 L98.0417 0 L98.0417 -0.5 L95.025 -0.5 L95.025 0 Z M101.058 0 L101.058 0.5 L104.075 0.5 L104.075 0 L104.075 -0.5 L101.058 -0.5 L101.058 0 Z M107.092 0 L107.092 0.5 L110.108 0.5 L110.108 0 L110.108 -0.5 L107.092 -0.5 L107.092 0 Z M113.125 0 L113.125 0.5 L116.142 0.5 L116.142 0 L116.142 -0.5 L113.125 -0.5 L113.125 0 Z M119.158 0 L119.158 0.5 L122.175 0.5 L122.175 0 L122.175 -0.5 L119.158 -0.5 L119.158 0 Z M125.192 0 L125.192 0.5 L128.208 0.5 L128.208 0 L128.208 -0.5 L125.192 -0.5 L125.192 0 Z M131.225 0 L131.225 0.5 L134.242 0.5 L134.242 0 L134.242 -0.5 L131.225 -0.5 L131.225 0 Z M137.258 0 L137.258 0.5 L140.275 0.5 L140.275 0 L140.275 -0.5 L137.258 -0.5 L137.258 0 Z M143.292 0 L143.292 0.5 L146.308 0.5 L146.308 0 L146.308 -0.5 L143.292 -0.5 L143.292 0 Z M149.325 0 L149.325 0.5 L152.342 0.5 L152.342 0 L152.342 -0.5 L149.325 -0.5 L149.325 0 Z M155.358 0 L155.358 0.5 L158.375 0.5 L158.375 0 L158.375 -0.5 L155.358 -0.5 L155.358 0 Z M161.392 0 L161.392 0.5 L164.408 0.5 L164.408 0 L164.408 -0.5 L161.392 -0.5 L161.392 0 Z M167.425 0 L167.425 0.5 L170.442 0.5 L170.442 0 L170.442 -0.5 L167.425 -0.5 L167.425 0 Z M173.458 0 L173.458 0.5 L176.475 0.5 L176.475 0 L176.475 -0.5 L173.458 -0.5 L173.458 0 Z M179.492 0 L179.492 0.5 L182.508 0.5 L182.508 0 L182.508 -0.5 L179.492 -0.5 L179.492 0 Z M185.525 0 L185.525 0.5 L188.542 0.5 L188.542 0 L188.542 -0.5 L185.525 -0.5 L185.525 0 Z M191.558 0 L191.558 0.5 L194.575 0.5 L194.575 0 L194.575 -0.5 L191.558 -0.5 L191.558 0 Z M197.592 0 L197.592 0.5 L200.608 0.5 L200.608 0 L200.608 -0.5 L197.592 -0.5 L197.592 0 Z M203.625 0 L203.625 0.5 L206.642 0.5 L206.642 0 L206.642 -0.5 L203.625 -0.5 L203.625 0 Z M209.658 0 L209.658 0.5 L212.675 0.5 L212.675 0 L212.675 -0.5 L209.658 -0.5 L209.658 0 Z M215.692 0 L215.692 0.5 L218.708 0.5 L218.708 0 L218.708 -0.5 L215.692 -0.5 L215.692 0 Z M221.725 0 L221.725 0.5 L224.742 0.5 L224.742 0 L224.742 -0.5 L221.725 -0.5 L221.725 0 Z M227.758 0 L227.758 0.5 L230.775 0.5 L230.775 0 L230.775 -0.5 L227.758 -0.5 L227.758 0 Z M233.792 0 L233.792 0.5 L236.808 0.5 L236.808 0 L236.808 -0.5 L233.792 -0.5 L233.792 0 Z M239.825 0 L239.825 0.5 L242.842 0.5 L242.842 0 L242.842 -0.5 L239.825 -0.5 L239.825 0 Z M245.858 0 L245.858 0.5 L248.875 0.5 L248.875 0 L248.875 -0.5 L245.858 -0.5 L245.858 0 Z M251.892 0 L251.892 0.5 L254.908 0.5 L254.908 0 L254.908 -0.5 L251.892 -0.5 L251.892 0 Z M257.925 0 L257.925 0.5 L260.942 0.5 L260.942 0 L260.942 -0.5 L257.925 -0.5 L257.925 0 Z M263.958 0 L263.958 0.5 L266.975 0.5 L266.975 0 L266.975 -0.5 L263.958 -0.5 L263.958 0 Z M269.992 0 L269.992 0.5 L273.008 0.5 L273.008 0 L273.008 -0.5 L269.992 -0.5 L269.992 0 Z M276.025 0 L276.025 0.5 L279.042 0.5 L279.042 0 L279.042 -0.5 L276.025 -0.5 L276.025 0 Z M282.058 0 L282.058 0.5 L285.075 0.5 L285.075 0 L285.075 -0.5 L282.058 -0.5 L282.058 0 Z M288.092 0 L288.092 0.5 L291.108 0.5 L291.108 0 L291.108 -0.5 L288.092 -0.5 L288.092 0 Z M294.125 0 L294.125 0.5 L297.142 0.5 L297.142 0 L297.142 -0.5 L294.125 -0.5 L294.125 0 Z M300.158 0 L300.158 0.5 L303.175 0.5 L303.175 0 L303.175 -0.5 L300.158 -0.5 L300.158 0 Z M306.191 0 L306.191 0.5 L309.208 0.5 L309.208 0 L309.208 -0.5 L306.191 -0.5 L306.191 0 Z M312.225 0 L312.225 0.5 L315.241 0.5 L315.241 0 L315.241 -0.5 L312.225 -0.5 L312.225 0 Z M318.258 0 L318.258 0.5 L321.275 0.5 L321.275 0 L321.275 -0.5 L318.258 -0.5 L318.258 0 Z M324.291 0 L324.291 0.5 L327.308 0.5 L327.308 0 L327.308 -0.5 L324.291 -0.5 L324.291 0 Z M330.325 0 L330.325 0.5 L333.341 0.5 L333.341 0 L333.341 -0.5 L330.325 -0.5 L330.325 0 Z M336.358 0 L336.358 0.5 L339.375 0.5 L339.375 0 L339.375 -0.5 L336.358 -0.5 L336.358 0 Z M342.391 0 L342.391 0.5 L345.408 0.5 L345.408 0 L345.408 -0.5 L342.391 -0.5 L342.391 0 Z M348.425 0 L348.425 0.5 L351.441 0.5 L351.441 0 L351.441 -0.5 L348.425 -0.5 L348.425 0 Z M354.458 0 L354.458 0.5 L357.475 0.5 L357.475 0 L357.475 -0.5 L354.458 -0.5 L354.458 0 Z M360.491 0 L360.491 0.5 L362 0.5 L362 0 L362 -0.5 L360.491 -0.5 L360.491 0 Z" fill="#f59e0b"/></svg>
            <div style={{ position: "absolute", left: "305px", top: "-2px", width: "87px", height: "20px", borderRadius: "6px", background: "#1f1f22", boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "3px 7px 3px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ffffff" }}>110 of 110 · full</p>
            </div>
            <svg style={{ position: "absolute", left: "372.92px", top: "17.5px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#1f1f22"/></svg>
          </div>
        </div>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Details</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "22px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Next renewal</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>02/05/2026</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#f59e0b" }}>in 14 days</p>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "22px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Owner</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#0a7854" }}>AJ</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>HR · Ava Johnson</p>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "22px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Paid with</p>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CreditCard size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#344054", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>HR card</p>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "22px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Contract</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "146px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Monthly · auto-renews</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "22px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Seats</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>110 licensed · 110 active</p>
          </div>
        </div>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Seats by team</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "420px", height: "12px", flexShrink: 0, borderRadius: "3px", overflow: "hidden", display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "126.11px", height: "12px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)", boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35)" }} />
            <div style={{ width: "81.6px", height: "12px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)", boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35)" }} />
            <div style={{ width: "66.76px", height: "12px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, #f6aa28 0%, #f59e0b 100%)", boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35)" }} />
            <div style={{ width: "51.93px", height: "12px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, #8c70fc 0%, #7c5cfc 100%)", boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35)" }} />
            <div style={{ width: "81.6px", height: "12px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)", boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35)" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#2563eb", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Engineering</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>34</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#10b981", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Marketing</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>22</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#f59e0b", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Sales</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>18</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#7c5cfc", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Design</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>14</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#a1a1a6", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Other</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>22</p>
            </div>
          </div>
        </div>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Recent charges</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <FileInvoice size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Charged · 02/04/2026</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$530.20</p>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Approved</p>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <FileInvoice size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Charged · 02/03/2026</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$521.10</p>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Approved</p>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <FileInvoice size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Charged · 02/02/2026</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$511.00</p>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Approved</p>
            </div>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Seat rules</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "188px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Alert Ava when seats are full</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Sent to #hr-ops and email</p>
            </div>
            <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#242424", position: "relative" }}>
              <svg style={{ position: "absolute", left: "16px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "264px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Remove inactive members after 30 days</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "208px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Frees seats before the 02/05 renewal</p>
            </div>
            <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#e4e4e7", position: "relative" }}>
              <svg style={{ position: "absolute", left: "2px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0 }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "32px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#e5484d" }}>Cancel subscription</p>
        </div>
        <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <UserMinus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#0f172a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Reduce seats</p>
        </div>
        <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Pencil size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Edit plan</p>
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
