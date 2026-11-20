"use client";
// Settings content, Two-factor authentication (montra, Forms) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { DeviceLaptop, DeviceMobile, FileExport, Key, Lock, MapPin, World } from "ingotui-icons/react/stroke-rounded";

export function SettingsContentTwoFactorAuthentication() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "815.42px", height: "819px", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "520px", height: "262px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "179px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Two-factor authentication</p>
        <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "289px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>5 of 6 members protected · Sara Lopez not set up</p>
        <div style={{ position: "absolute", left: "425.47px", top: "18.28px", width: "76.25px", height: "23.3px", borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>Required</p>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "74px", width: "483.44px", height: "50.93px", borderRadius: "9.14px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "10.05px 11.88px 10.05px 11.88px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Require 2FA for everyone</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "227px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Members without it are asked on next sign-in</p>
          </div>
          <div style={{ width: "29.24px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#222222", position: "relative" }}>
            <svg style={{ position: "absolute", left: "14.62px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
          </div>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "134px", width: "483.44px", height: "40.21px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Key size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Authenticator app</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>1Password · added Mar 02</p>
          </div>
          <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed" }}>Primary</p>
          </div>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "174.21px", width: "483.44px", height: "40.21px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <DeviceLaptop size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Passkey</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "169px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>MacBook Pro Touch ID · added Jul 12</p>
          </div>
          <div data-fu="btn" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Remove</p>
          </div>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "214.42px", width: "483.44px", height: "40.21px", boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Lock size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Backup codes</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>8 of 10 codes left</p>
          </div>
          <div data-fu="btn" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Regenerate</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "538.28px", top: "0px", width: "277.14px", height: "262px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Sign-in activity</p>
        <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Last 14 days</p>
        <div style={{ position: "absolute", left: "12.79px", top: "74px", width: "251.56px", height: "150px" }}>
          <div style={{ position: "absolute", left: "154.98px", top: "7.31px", width: "12.74px", height: "118.93px", borderRadius: "7.31px", background: "rgba(253, 135, 47, 0.06)" }} />
          <svg style={{ position: "absolute", left: "21.93px", top: "7.31px", width: "229.63px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="229.63" height="1" viewBox="0 0 229.63 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L229.62998962402344 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
          <p style={{ position: "absolute", left: "3.62px", top: "0.31px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>14</p>
          <svg style={{ position: "absolute", left: "21.93px", top: "66.77px", width: "229.63px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="229.63" height="1" viewBox="0 0 229.63 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L229.62998962402344 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
          <p style={{ position: "absolute", left: "8.62px", top: "59.77px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>7</p>
          <div style={{ position: "absolute", left: "21.93px", top: "125.74px", width: "229.63px", height: "1px", background: "#e2e2e5" }} />
          <p style={{ position: "absolute", left: "6.62px", top: "119.24px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>0</p>
          <div data-fu="bar" style={{ position: "absolute", left: "25.37px", top: "75.27px", width: "9.51px", height: "50.97px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "41.78px", top: "58.28px", width: "9.51px", height: "67.96px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "58.18px", top: "66.77px", width: "9.51px", height: "59.47px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "74.58px", top: "49.79px", width: "9.51px", height: "76.46px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "74.58px", top: "41.29px", width: "9.51px", height: "6.49px", borderRadius: "3.24px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "90.98px", top: "83.77px", width: "9.51px", height: "42.47px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "107.39px", top: "109.25px", width: "9.51px", height: "16.99px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "123.79px", top: "117.75px", width: "9.51px", height: "8.49px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "140.19px", top: "58.28px", width: "9.51px", height: "67.96px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "156.59px", top: "49.79px", width: "9.51px", height: "76.46px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "156.59px", top: "24.3px", width: "9.51px", height: "23.48px", borderRadius: "3.66px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "172.99px", top: "66.77px", width: "9.51px", height: "59.47px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "189.4px", top: "58.28px", width: "9.51px", height: "67.96px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "189.4px", top: "49.79px", width: "9.51px", height: "6.49px", borderRadius: "3.24px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "205.8px", top: "41.29px", width: "9.51px", height: "84.95px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "222.2px", top: "100.75px", width: "9.51px", height: "25.49px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "238.6px", top: "109.25px", width: "9.51px", height: "16.99px", borderRadius: "3.66px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <p style={{ position: "absolute", left: "14.63px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Jul 27</p>
          <p style={{ position: "absolute", left: "129.95px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug 3</p>
          <p style={{ position: "absolute", left: "221.56px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug 9</p>
          <div style={{ position: "absolute", left: "110.95px", top: "5.82px", width: "100.8px", height: "18.48px", borderRadius: "5.48px", background: "#1f1f22", boxShadow: "0px 1.83px 5.48px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "2.74px 6.4px 2.74px 6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>3 blocked · Aug 04</p>
          </div>
          <svg style={{ position: "absolute", left: "157.69px", top: "23.8px", width: "7.31px", height: "3.66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="3.66" viewBox="0 0 7.31 3.66" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L7.31 0 L3.66 3.66 L0 0 Z" fill="#1f1f22"/></svg>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "231.72px", width: "163.21px", height: "14px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Successful 85</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Blocked 5</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "280.28px", width: "815.42px", height: "296px", borderRadius: "14.62px", background: "#fefefe", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "18.28px", top: "21.93px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Active sessions</p>
        <div style={{ position: "absolute", left: "600.76px", top: "17.36px", width: "196.38px", height: "27.42px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "27.42px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "14.62px", height: "14.62px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14.62" height="14.62" viewBox="0 0 14.62 14.62" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.523 1.819)" d="M7.46229 3.05413 C7.46229 3.30645 7.66684 3.511 7.91917 3.511 C8.17149 3.511 8.37604 3.30645 8.37604 3.05413 L7.91917 3.05413 L7.46229 3.05413 Z M7.55367 1.59213 L7.93381 1.3387 C7.92275 1.32211 7.91062 1.30627 7.8975 1.29127 L7.55367 1.59213 Z M5.117 0.617459 L5.21829 0.171794 L5.2066 0.169456 L5.117 0.617459 Z M4.50783 0.495626 L4.40319 0.940356 C4.40819 0.941531 4.4132 0.942622 4.41823 0.943629 L4.50783 0.495626 Z M0.670083 0.312876 L0.395958 -0.0526242 C0.390813 -0.0487655 0.38575 -0.0447985 0.380773 -0.040726 L0.670083 0.312876 Z M0.670083 10.6687 L0.380773 11.0223 C0.38575 11.0264 0.390813 11.0304 0.395958 11.0342 L0.670083 10.6687 Z M4.50783 10.486 L4.41823 10.038 C4.4132 10.039 4.40819 10.0401 4.40319 10.0412 L4.50783 10.486 Z M5.117 10.3641 L5.20663 10.8123 L5.21825 10.8096 L5.117 10.3641 Z M7.55367 9.38946 L7.8975 9.69031 C7.91062 9.67531 7.92275 9.65947 7.93381 9.64289 L7.55367 9.38946 Z M8.37604 7.92746 C8.37604 7.67513 8.17149 7.47058 7.91917 7.47058 C7.66684 7.47058 7.46229 7.67513 7.46229 7.92746 L7.91917 7.92746 L8.37604 7.92746 Z M7.91917 3.05413 L8.37604 3.05413 C8.37604 2.32202 8.24114 1.79969 7.93381 1.3387 L7.55367 1.59213 L7.17352 1.84555 C7.35353 2.11556 7.46229 2.44606 7.46229 3.05413 L7.91917 3.05413 Z M7.55367 1.59213 L7.8975 1.29127 C7.61818 0.97205 7.26961 0.76912 6.83749 0.608132 C6.4157 0.450995 5.88288 0.322998 5.21825 0.171945 L5.117 0.617459 L5.01575 1.06297 C5.69128 1.2165 6.16359 1.33217 6.51849 1.46439 C6.86305 1.59276 7.06273 1.72487 7.20983 1.89298 L7.55367 1.59213 Z M5.117 0.617459 L5.2066 0.169456 L4.59743 0.047623 L4.50783 0.495626 L4.41823 0.943629 L5.0274 1.06546 L5.117 0.617459 Z M4.50783 0.495626 L4.61248 0.0508958 C3.59073 -0.189515 2.77605 -0.382369 2.12622 -0.439229 C1.46223 -0.497328 0.888802 -0.422257 0.395958 -0.0526242 L0.670083 0.312876 L0.944208 0.678376 C1.18237 0.499758 1.49222 0.422538 2.04657 0.471043 C2.61508 0.520787 3.35377 0.693433 4.40319 0.940356 L4.50783 0.495626 Z M0.670083 0.312876 L0.380773 -0.040726 C-0.0819142 0.337836 -0.277591 0.867491 -0.368638 1.5131 C-0.457961 2.14648 -0.456875 2.97692 -0.456875 4.02879 L0 4.02879 L0.456875 4.02879 C0.456875 2.94858 0.457961 2.19519 0.536159 1.6407 C0.612633 1.09843 0.751997 0.836165 0.959394 0.666478 L0.670083 0.312876 Z M0 4.02879 L-0.456875 4.02879 L-0.456875 6.95279 L0 6.95279 L0.456875 6.95279 L0.456875 4.02879 L0 4.02879 Z M0 6.95279 L-0.456875 6.95279 C-0.456875 8.00466 -0.457961 8.83511 -0.368638 9.46849 C-0.277591 10.1141 -0.0819142 10.6437 0.380773 11.0223 L0.670083 10.6687 L0.959394 10.3151 C0.751997 10.1454 0.612633 9.88316 0.536159 9.34089 C0.457961 8.7864 0.456875 8.03301 0.456875 6.95279 L0 6.95279 Z M0.670083 10.6687 L0.395958 11.0342 C0.888802 11.4038 1.46223 11.4789 2.12622 11.4208 C2.77605 11.364 3.59073 11.1711 4.61248 10.9307 L4.50783 10.486 L4.40319 10.0412 C3.35377 10.2882 2.61508 10.4608 2.04657 10.5105 C1.49222 10.559 1.18237 10.4818 0.944208 10.3032 L0.670083 10.6687 Z M4.50783 10.486 L4.59743 10.934 L5.2066 10.8121 L5.117 10.3641 L5.0274 9.91612 L4.41823 10.038 L4.50783 10.486 Z M5.117 10.3641 L5.21825 10.8096 C5.88288 10.6586 6.4157 10.5306 6.83749 10.3735 C7.26961 10.2125 7.61818 10.0095 7.8975 9.69031 L7.55367 9.38946 L7.20983 9.0886 C7.06273 9.25672 6.86305 9.38883 6.51849 9.51719 C6.16359 9.64941 5.69128 9.76508 5.01575 9.91861 L5.117 10.3641 Z M7.55367 9.38946 L7.93381 9.64289 C8.24114 9.1819 8.37604 8.65956 8.37604 7.92746 L7.91917 7.92746 L7.46229 7.92746 C7.46229 8.53552 7.35353 8.86602 7.17352 9.13603 L7.55367 9.38946 Z" fill="#f45363"/><path transform="matrix(1 0 0 1 5.178 5.482)" d="M6.36185 -0.368426 C6.15837 -0.517642 5.87246 -0.473656 5.72324 -0.270179 C5.57402 -0.0667031 5.61801 0.21921 5.82149 0.368426 L6.09167 0 L6.36185 -0.368426 Z M5.82149 3.28657 C5.61801 3.43579 5.57402 3.7217 5.72324 3.92518 C5.87246 4.12866 6.15837 4.17264 6.36185 4.02343 L6.09167 3.655 L5.82149 3.28657 Z M7.61458 2.28438 C7.86691 2.28438 8.07146 2.07983 8.07146 1.8275 C8.07146 1.57517 7.86691 1.37063 7.61458 1.37063 L7.61458 1.8275 L7.61458 2.28438 Z M0 1.37063 C-0.252325 1.37063 -0.456875 1.57517 -0.456875 1.8275 C-0.456875 2.07983 -0.252325 2.28438 0 2.28438 L0 1.8275 L0 1.37063 Z M6.09167 0 C5.82149 0.368426 5.82146 0.368409 5.82145 0.368396 C5.82145 0.368398 5.82144 0.368391 5.82145 0.368396 C5.82146 0.368406 5.8215 0.368436 5.82157 0.368486 C5.82171 0.368587 5.82195 0.368768 5.82231 0.369028 C5.82301 0.369548 5.82415 0.370385 5.8257 0.37153 C5.82881 0.373821 5.83358 0.377345 5.8399 0.382035 C5.85253 0.391416 5.87137 0.405455 5.89551 0.423619 C5.94382 0.459965 6.01324 0.512726 6.09672 0.577651 C6.26416 0.707882 6.48585 0.885293 6.7062 1.07626 C6.92882 1.2692 7.13956 1.46697 7.29104 1.63864 C7.36722 1.72497 7.4188 1.79399 7.44887 1.84412 C7.4862 1.90633 7.46229 1.89284 7.46229 1.8275 L7.91917 1.8275 L8.37604 1.8275 C8.37604 1.64033 8.29502 1.47835 8.23241 1.374 C8.16255 1.25756 8.07135 1.14192 7.9762 1.03408 C7.78502 0.817407 7.53889 0.58876 7.30464 0.385745 C7.0681 0.180749 6.83292 -0.0073399 6.65771 -0.14362 C6.56985 -0.21195 6.49651 -0.267697 6.44487 -0.306545 C6.41904 -0.325978 6.39862 -0.341208 6.38449 -0.351695 C6.37742 -0.35694 6.37193 -0.361001 6.36812 -0.363811 C6.36621 -0.365217 6.36473 -0.366309 6.36368 -0.367081 C6.36315 -0.367467 6.36274 -0.367773 6.36243 -0.367997 C6.36228 -0.36811 6.36215 -0.368202 6.36205 -0.368273 C6.36201 -0.368309 6.36195 -0.368347 6.36193 -0.368365 C6.36188 -0.368398 6.36185 -0.368426 6.09167 0 Z M7.91917 1.8275 L7.46229 1.8275 C7.46229 1.76216 7.4862 1.74867 7.44887 1.81088 C7.4188 1.86101 7.36722 1.93003 7.29104 2.01636 C7.13956 2.18803 6.92882 2.3858 6.7062 2.57874 C6.48585 2.76971 6.26416 2.94712 6.09672 3.07735 C6.01324 3.14227 5.94382 3.19504 5.89551 3.23138 C5.87137 3.24954 5.85253 3.26358 5.8399 3.27297 C5.83358 3.27766 5.82881 3.28118 5.8257 3.28347 C5.82415 3.28462 5.82301 3.28545 5.82231 3.28597 C5.82195 3.28623 5.82171 3.28641 5.82157 3.28651 C5.8215 3.28656 5.82146 3.28659 5.82145 3.2866 C5.82144 3.28661 5.82145 3.2866 5.82145 3.2866 C5.82146 3.28659 5.82149 3.28657 6.09167 3.655 C6.36185 4.02343 6.36188 4.0234 6.36193 4.02337 C6.36195 4.02335 6.36201 4.02331 6.36205 4.02327 C6.36215 4.0232 6.36228 4.02311 6.36243 4.023 C6.36274 4.02277 6.36315 4.02247 6.36368 4.02208 C6.36473 4.02131 6.36621 4.02022 6.36812 4.01881 C6.37193 4.016 6.37742 4.01194 6.38449 4.0067 C6.39862 3.99621 6.41904 3.98098 6.44487 3.96155 C6.49651 3.9227 6.56985 3.86695 6.65771 3.79862 C6.83292 3.66234 7.0681 3.47425 7.30464 3.26926 C7.53889 3.06624 7.78502 2.83759 7.9762 2.62092 C8.07135 2.51308 8.16255 2.39744 8.23241 2.281 C8.29502 2.17665 8.37604 2.01467 8.37604 1.8275 L7.91917 1.8275 Z M7.61458 1.8275 L7.61458 1.37063 L0 1.37063 L0 1.8275 L0 2.28438 L7.61458 2.28438 L7.61458 1.8275 Z" fill="#f45363"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "158px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#f45363" }}>Sign out all other sessions</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "62.14px", width: "815.42px", height: "222.97px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "815.42px", height: "40.21px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "260px", height: "40.21px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Device</p>
            </div>
            <div style={{ width: "160px", height: "40.21px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Location</p>
            </div>
            <div style={{ width: "140px", height: "40.21px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>IP address</p>
            </div>
            <div style={{ width: "120px", height: "40.21px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Last active</p>
            </div>
            <div style={{ width: "135.42px", height: "40.21px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Status</p>
            </div>
          </div>
          <div data-fu="row" style={{ width: "815.42px", height: "45.69px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "260px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <DeviceLaptop size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>MacBook Pro · Chrome 128</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>macOS 15.1</p>
                </div>
              </div>
            </div>
            <div style={{ width: "160px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <MapPin size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Brooklyn, NY</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>73.211.4.18</p>
            </div>
            <div style={{ width: "120px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Now</p>
            </div>
            <div style={{ width: "135.42px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>This device</p>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "815.42px", height: "45.69px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "260px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <DeviceMobile size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>iPhone 16 · Montra app</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>iOS 19.0</p>
                </div>
              </div>
            </div>
            <div style={{ width: "160px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <MapPin size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Brooklyn, NY</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>172.58.32.9</p>
            </div>
            <div style={{ width: "120px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>35 min ago</p>
            </div>
            <div style={{ width: "135.42px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div data-fu="btn" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Revoke</p>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "815.42px", height: "45.69px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "260px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <DeviceLaptop size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Windows 11 · Edge 127</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Studio front desk</p>
                </div>
              </div>
            </div>
            <div style={{ width: "160px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <MapPin size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Jersey City, NJ</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>24.104.77.2</p>
            </div>
            <div style={{ width: "120px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Aug 06</p>
            </div>
            <div style={{ width: "135.42px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div data-fu="btn" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Revoke</p>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ width: "815.42px", height: "45.69px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "260px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <World size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Unknown · Firefox 129</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Blocked at 2FA step</p>
                </div>
              </div>
            </div>
            <div style={{ width: "160px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <MapPin size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Lagos, NG</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>102.89.44.130</p>
            </div>
            <div style={{ width: "120px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Aug 04</p>
            </div>
            <div style={{ width: "135.42px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#fff1f2", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#e5384a"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e5384a" }}>Blocked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "594.56px", width: "398.57px", height: "224.44px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Single sign-on</p>
        <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "273px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Let the team sign in with your identity provider</p>
        <div style={{ position: "absolute", left: "334.04px", top: "18.28px", width: "46.25px", height: "23.3px", borderRadius: "999px", background: "#fff4eb", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#e8711a"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e8711a" }}>Off</p>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "72px", width: "362.01px", height: "40.21px", borderRadius: "9.14px", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg width={14.6} height={14.6} viewBox="0 0 24 24" style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }}><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" /></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Google Workspace</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>alderco.com · 14 accounts found</p>
          </div>
          <div data-fu="btn" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Connect</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "120.21px", width: "362.01px", height: "40.21px", borderRadius: "9.14px", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.21px", fontWeight: 600, color: "#1f6fe0" }}>Ok</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Okta / SAML 2.0</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Upload metadata XML</p>
          </div>
          <div data-fu="btn" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Set up</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "416.85px", top: "594.56px", width: "398.57px", height: "224.44px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Audit log</p>
        <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "159px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Security events, last 7 days</p>
        <div data-fu="btn" style={{ position: "absolute", left: "284.74px", top: "18.28px", width: "95.55px", height: "25.59px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <FileExport size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Export CSV</p>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "72px", width: "362.01px", height: "29.83px", display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <svg style={{ width: "7.31px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="16.45" viewBox="0 0 7.31 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 5.025)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#f45363"/></svg>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "176px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Sign-in blocked from Lagos, NG</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "161px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Aug 04 · 02:17 · wrong 2FA code ×3</p>
          </div>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "112px", width: "362.01px", height: "29.83px", display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <svg style={{ width: "7.31px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="16.45" viewBox="0 0 7.31 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 5.025)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#18b170"/></svg>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "162px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Tom Becker added a passkey</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Aug 06 · 18:40</p>
          </div>
        </div>
        <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "152px", width: "362.01px", height: "29.83px", display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <svg style={{ width: "7.31px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="16.45" viewBox="0 0 7.31 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 5.025)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#4996fe"/></svg>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "180px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Priya Shah approval limit → $10k</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "144px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Aug 07 · 09:12 · by Alex Morgan</p>
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
