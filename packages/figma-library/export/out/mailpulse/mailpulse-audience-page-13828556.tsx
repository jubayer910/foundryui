"use client";
// Audience page (mailpulse, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Category as CategorySolid } from "ingotui-icons/react/solid";
import { AlertTriangle as AlertTriangleBulk, ChartBar as ChartBarBulk, CursorPointer as CursorPointerBulk, DeviceLaptop as DeviceLaptopBulk, DeviceMobile as DeviceMobileBulk, File as FileBulk, Filter as FilterBulk, Heart as HeartBulk, Send as SendBulk, Settings as SettingsBulk, Share as ShareBulk, Star as StarBulk, Tablet as TabletBulk, Upload as UploadBulk, User as UserBulk, Users as UsersBulk, Wallet as WalletBulk, World as WorldBulk } from "ingotui-icons/react/bulk";
import { Bell, Calendar, ChevronDown, ChevronRight, Dots, Refresh, Search, Upload, UserMinus, UserPlus, Users } from "ingotui-icons/react/stroke-rounded";

export function AudiencePage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1316px", height: "933.08px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "224.82px", height: "933.08px", background: "#f5f5f5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "18.28px", top: "19.52px", width: "101.18px", height: "21.27px", display: "flex", flexDirection: "row", gap: "21.27px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.91px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.27px", height: "21.27px", flexShrink: 0, borderRadius: "4.91px", background: "#000000", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "23.76px", height: "23.76px", background: "linear-gradient(177.6deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.2%)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "3.68px", top: "6.95px", width: "14.63px", height: "7.41px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14.63" height="7.41" viewBox="0 0 14.63 7.41" fill="none" overflow="visible"><defs><linearGradient id="g1_xsq5" gradientUnits="userSpaceOnUse" x1="7.78" y1="2.83" x2="7.78" y2="10.24"><stop offset="0" stopColor="#ffffff" stopOpacity="0.8"/><stop offset="1" stopColor="#ffffff" stopOpacity="0.5"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M4.93064 5.38145 L6.3234 6.77421 C7.17095 7.62177 8.54511 7.62177 9.39267 6.77421 C9.67219 6.49469 9.85953 6.15789 9.95468 5.80159 L10.9273 6.77421 C11.7749 7.62177 13.149 7.62177 13.9966 6.77421 C14.8441 5.92665 14.8441 4.55249 13.9966 3.70494 L10.9273 0.635667 C10.0797 -0.211889 8.70559 -0.211889 7.85803 0.635667 C7.57851 0.915191 7.39117 1.25199 7.29602 1.60829 L6.32339 0.635667 C5.47584 -0.211889 4.10168 -0.211889 3.25412 0.635668 L0.728368 3.16142 C-0.242789 4.13258 -0.242789 5.70714 0.728368 6.6783 C1.69953 7.64946 3.27409 7.64946 4.24524 6.6783 C4.61288 6.31066 4.84134 5.85656 4.93064 5.38145 Z M4.02144 1.40299 C3.59766 0.979208 4.44522 0.979208 4.02144 1.40299 C3.59785 1.82658 3.59821 0.979164 4.02144 1.40299 C4.44522 1.82676 3.59766 1.82676 4.02144 1.40299 C4.44499 0.979433 4.44454 1.82682 4.02144 1.40299 Z M1.49569 3.92874 C0.948307 4.47612 0.948306 3.43136 1.49569 3.97874 C0.948307 4.52612 2.04307 4.52612 1.49569 3.97874 C2.04307 3.43136 2.04307 4.47612 1.49569 3.92874 Z M8.62445 2.93672 C8.20157 2.51287 8.20097 3.3602 8.62445 2.93672 C9.04823 2.51294 8.20067 2.51294 8.62445 2.93672 C9.04823 3.3605 9.04823 2.51294 8.62445 2.93672 C8.20067 3.3605 9.04823 3.3605 8.62445 2.93672 Z" fill="url(#g1_xsq5)" fillRule="evenodd"/></svg>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.36px", fontWeight: 500, color: "#000000" }}>MailPulse</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "65.8px", width: "193.74px", height: "714.66px", display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "193.74px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "74px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#a6a6a6" }}>MAIN MENU</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "36.56px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", gap: "9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <CategorySolid size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#000000", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Overview</p>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "18.28px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div data-fu="row" style={{ width: "193.74px", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", background: "#ececed", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "148.96px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <UserBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Audience</p>
                </div>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <SendBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Campaigns</p>
                </div>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <FileBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "49px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Content</p>
                </div>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <ChartBarBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Engagement</p>
                </div>
              </div>
              <div data-fu="row" style={{ width: "193.74px", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "148.96px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <WalletBulk size={12.8} strokeWidth={3.43} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "52px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Revenue</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "193.74px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="193.74" height="1" viewBox="0 0 193.74 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L193.744 0 L193.744 -0.456944 L193.744 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#a6a6a6" }}>MANAGE</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div data-fu="row" style={{ width: "193.74px", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "9.14px 9.14px 9.14px 9.14px", gap: "-6.4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "148.96px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <UsersBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Subscribers</p>
                    </div>
                    <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#ffffff", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.48px 3.66px 5.48px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6.4px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "35px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#585858" }}>18.4k</p>
                    </div>
                  </div>
                  <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <StarBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "77px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Automations</p>
                      </div>
                    </div>
                  </div>
                  <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <FilterBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Segments</p>
                      </div>
                    </div>
                  </div>
                  <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <FilterBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Integrations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "193.74px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="193.74" height="1" viewBox="0 0 193.74 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L193.744 0 L193.744 -0.456944 L193.744 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "77px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#a6a6a6" }}>RESOURCES</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div data-fu="row" style={{ width: "193.74px", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "148.96px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <ChartBarBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Analytics</p>
                    </div>
                  </div>
                  <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <FileBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Reports</p>
                      </div>
                    </div>
                  </div>
                  <div data-fu="row" style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <HeartBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "33px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Learn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "193.74px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="193.74" height="1" viewBox="0 0 193.74 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L193.744 0 L193.744 -0.456944 L193.744 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#a6a6a6" }}>SETTINGS</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <AlertTriangleBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Help Center</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <SettingsBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "96px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>System Settings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "224.82px", top: "0px", width: "1091.84px", height: "68.18px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "18.28px 18.28px 18.28px 18.28px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CategorySolid size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#b3b3b3" }}>Workspace</p>
          </div>
          <ChevronRight size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Audience</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "138.91px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.31px 5.48px 7.31px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#686765" }}>Search</p>
            </div>
          </div>
          <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "#ffffff", boxShadow: "inset 0 0 0 0.78px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <Bell size={18.6} strokeWidth={1.51} style={{ position: "absolute", left: "6.21px", top: "6.6px", width: "18.64px", height: "18.64px", color: "#686765", display: "block", flexShrink: 0 }} />
          </div>
          <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "#ffffff", boxShadow: "inset 0 0 0 0.78px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "-3.56px", top: "3.11px", width: "38.19px", height: "30.3px", background: "url('https://ingotui.com/library-img/f3bd7733d508155bcb01d85374d81844b290a080.png') center / cover no-repeat" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "224.82px", top: "67.63px", width: "1072.91px", height: "847.17px", borderRadius: "14.62px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e3e3e3", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "16.45px", top: "16.45px", width: "1040.92px", height: "52.31px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Audience</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "350px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Who reads your newsletter and where they come from.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Last 30 Days</p>
              <ChevronDown size={12.8} strokeWidth={2.81} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Upload size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Import</p>
            </div>
            <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "91.39px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.31px 10.97px 7.31px 10.97px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <UserPlus size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff" }}>Add subscribers</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "85.91px", width: "1072.91px", height: "155.36px", boxShadow: "inset 0 0 0 0.91px #eeeeee", overflow: "hidden" }}>
          <svg style={{ position: "absolute", left: "9.14px", top: "103.27px", width: "1054.63px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1054.63" height="1" viewBox="0 0 1054.63 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M1054.63 0.456944 C1054.88 0.456944 1055.08 0.252363 1055.08 0 C1055.08 -0.252363 1054.88 -0.456944 1054.63 -0.456944 L1054.63 0 L1054.63 0.456944 Z M0 0 L0 0.456944 L1.83095 0.456944 L1.83095 0 L1.83095 -0.456944 L0 -0.456944 L0 0 Z M5.49285 0 L5.49285 0.456944 L9.15476 0.456944 L9.15476 0 L9.15476 -0.456944 L5.49285 -0.456944 L5.49285 0 Z M12.8167 0 L12.8167 0.456944 L16.4786 0.456944 L16.4786 0 L16.4786 -0.456944 L12.8167 -0.456944 L12.8167 0 Z M20.1405 0 L20.1405 0.456944 L23.8024 0.456944 L23.8024 0 L23.8024 -0.456944 L20.1405 -0.456944 L20.1405 0 Z M27.4643 0 L27.4643 0.456944 L31.1262 0.456944 L31.1262 0 L31.1262 -0.456944 L27.4643 -0.456944 L27.4643 0 Z M34.7881 0 L34.7881 0.456944 L38.45 0.456944 L38.45 0 L38.45 -0.456944 L34.7881 -0.456944 L34.7881 0 Z M42.1119 0 L42.1119 0.456944 L45.7738 0.456944 L45.7738 0 L45.7738 -0.456944 L42.1119 -0.456944 L42.1119 0 Z M49.4357 0 L49.4357 0.456944 L53.0976 0.456944 L53.0976 0 L53.0976 -0.456944 L49.4357 -0.456944 L49.4357 0 Z M56.7595 0 L56.7595 0.456944 L60.4214 0.456944 L60.4214 0 L60.4214 -0.456944 L56.7595 -0.456944 L56.7595 0 Z M64.0833 0 L64.0833 0.456944 L67.7452 0.456944 L67.7452 0 L67.7452 -0.456944 L64.0833 -0.456944 L64.0833 0 Z M71.4071 0 L71.4071 0.456944 L75.069 0.456944 L75.069 0 L75.069 -0.456944 L71.4071 -0.456944 L71.4071 0 Z M78.7309 0 L78.7309 0.456944 L82.3928 0.456944 L82.3928 0 L82.3928 -0.456944 L78.7309 -0.456944 L78.7309 0 Z M86.0547 0 L86.0547 0.456944 L89.7166 0.456944 L89.7166 0 L89.7166 -0.456944 L86.0547 -0.456944 L86.0547 0 Z M93.3785 0 L93.3785 0.456944 L97.0404 0.456944 L97.0404 0 L97.0404 -0.456944 L93.3785 -0.456944 L93.3785 0 Z M100.702 0 L100.702 0.456944 L104.364 0.456944 L104.364 0 L104.364 -0.456944 L100.702 -0.456944 L100.702 0 Z M108.026 0 L108.026 0.456944 L111.688 0.456944 L111.688 0 L111.688 -0.456944 L108.026 -0.456944 L108.026 0 Z M115.35 0 L115.35 0.456944 L119.012 0.456944 L119.012 0 L119.012 -0.456944 L115.35 -0.456944 L115.35 0 Z M122.674 0 L122.674 0.456944 L126.336 0.456944 L126.336 0 L126.336 -0.456944 L122.674 -0.456944 L122.674 0 Z M129.998 0 L129.998 0.456944 L133.659 0.456944 L133.659 0 L133.659 -0.456944 L129.998 -0.456944 L129.998 0 Z M137.321 0 L137.321 0.456944 L140.983 0.456944 L140.983 0 L140.983 -0.456944 L137.321 -0.456944 L137.321 0 Z M144.645 0 L144.645 0.456944 L148.307 0.456944 L148.307 0 L148.307 -0.456944 L144.645 -0.456944 L144.645 0 Z M151.969 0 L151.969 0.456944 L155.631 0.456944 L155.631 0 L155.631 -0.456944 L151.969 -0.456944 L151.969 0 Z M159.293 0 L159.293 0.456944 L162.955 0.456944 L162.955 0 L162.955 -0.456944 L159.293 -0.456944 L159.293 0 Z M166.617 0 L166.617 0.456944 L170.278 0.456944 L170.278 0 L170.278 -0.456944 L166.617 -0.456944 L166.617 0 Z M173.94 0 L173.94 0.456944 L177.602 0.456944 L177.602 0 L177.602 -0.456944 L173.94 -0.456944 L173.94 0 Z M181.264 0 L181.264 0.456944 L184.926 0.456944 L184.926 0 L184.926 -0.456944 L181.264 -0.456944 L181.264 0 Z M188.588 0 L188.588 0.456944 L192.25 0.456944 L192.25 0 L192.25 -0.456944 L188.588 -0.456944 L188.588 0 Z M195.912 0 L195.912 0.456944 L199.574 0.456944 L199.574 0 L199.574 -0.456944 L195.912 -0.456944 L195.912 0 Z M203.235 0 L203.235 0.456944 L206.897 0.456944 L206.897 0 L206.897 -0.456944 L203.235 -0.456944 L203.235 0 Z M210.559 0 L210.559 0.456944 L214.221 0.456944 L214.221 0 L214.221 -0.456944 L210.559 -0.456944 L210.559 0 Z M217.883 0 L217.883 0.456944 L221.545 0.456944 L221.545 0 L221.545 -0.456944 L217.883 -0.456944 L217.883 0 Z M225.207 0 L225.207 0.456944 L228.869 0.456944 L228.869 0 L228.869 -0.456944 L225.207 -0.456944 L225.207 0 Z M232.531 0 L232.531 0.456944 L236.193 0.456944 L236.193 0 L236.193 -0.456944 L232.531 -0.456944 L232.531 0 Z M239.854 0 L239.854 0.456944 L243.516 0.456944 L243.516 0 L243.516 -0.456944 L239.854 -0.456944 L239.854 0 Z M247.178 0 L247.178 0.456944 L250.84 0.456944 L250.84 0 L250.84 -0.456944 L247.178 -0.456944 L247.178 0 Z M254.502 0 L254.502 0.456944 L258.164 0.456944 L258.164 0 L258.164 -0.456944 L254.502 -0.456944 L254.502 0 Z M261.826 0 L261.826 0.456944 L265.488 0.456944 L265.488 0 L265.488 -0.456944 L261.826 -0.456944 L261.826 0 Z M269.15 0 L269.15 0.456944 L272.811 0.456944 L272.811 0 L272.811 -0.456944 L269.15 -0.456944 L269.15 0 Z M276.473 0 L276.473 0.456944 L280.135 0.456944 L280.135 0 L280.135 -0.456944 L276.473 -0.456944 L276.473 0 Z M283.797 0 L283.797 0.456944 L287.459 0.456944 L287.459 0 L287.459 -0.456944 L283.797 -0.456944 L283.797 0 Z M291.121 0 L291.121 0.456944 L294.783 0.456944 L294.783 0 L294.783 -0.456944 L291.121 -0.456944 L291.121 0 Z M298.445 0 L298.445 0.456944 L302.107 0.456944 L302.107 0 L302.107 -0.456944 L298.445 -0.456944 L298.445 0 Z M305.769 0 L305.769 0.456944 L309.43 0.456944 L309.43 0 L309.43 -0.456944 L305.769 -0.456944 L305.769 0 Z M313.092 0 L313.092 0.456944 L316.754 0.456944 L316.754 0 L316.754 -0.456944 L313.092 -0.456944 L313.092 0 Z M320.416 0 L320.416 0.456944 L324.078 0.456944 L324.078 0 L324.078 -0.456944 L320.416 -0.456944 L320.416 0 Z M327.74 0 L327.74 0.456944 L331.402 0.456944 L331.402 0 L331.402 -0.456944 L327.74 -0.456944 L327.74 0 Z M335.064 0 L335.064 0.456944 L338.726 0.456944 L338.726 0 L338.726 -0.456944 L335.064 -0.456944 L335.064 0 Z M342.388 0 L342.388 0.456944 L346.049 0.456944 L346.049 0 L346.049 -0.456944 L342.388 -0.456944 L342.388 0 Z M349.711 0 L349.711 0.456944 L353.373 0.456944 L353.373 0 L353.373 -0.456944 L349.711 -0.456944 L349.711 0 Z M357.035 0 L357.035 0.456944 L360.697 0.456944 L360.697 0 L360.697 -0.456944 L357.035 -0.456944 L357.035 0 Z M364.359 0 L364.359 0.456944 L368.021 0.456944 L368.021 0 L368.021 -0.456944 L364.359 -0.456944 L364.359 0 Z M371.683 0 L371.683 0.456944 L375.345 0.456944 L375.345 0 L375.345 -0.456944 L371.683 -0.456944 L371.683 0 Z M379.006 0 L379.006 0.456944 L382.668 0.456944 L382.668 0 L382.668 -0.456944 L379.006 -0.456944 L379.006 0 Z M386.33 0 L386.33 0.456944 L389.992 0.456944 L389.992 0 L389.992 -0.456944 L386.33 -0.456944 L386.33 0 Z M393.654 0 L393.654 0.456944 L397.316 0.456944 L397.316 0 L397.316 -0.456944 L393.654 -0.456944 L393.654 0 Z M400.978 0 L400.978 0.456944 L404.64 0.456944 L404.64 0 L404.64 -0.456944 L400.978 -0.456944 L400.978 0 Z M408.302 0 L408.302 0.456944 L411.964 0.456944 L411.964 0 L411.964 -0.456944 L408.302 -0.456944 L408.302 0 Z M415.625 0 L415.625 0.456944 L419.287 0.456944 L419.287 0 L419.287 -0.456944 L415.625 -0.456944 L415.625 0 Z M422.949 0 L422.949 0.456944 L426.611 0.456944 L426.611 0 L426.611 -0.456944 L422.949 -0.456944 L422.949 0 Z M430.273 0 L430.273 0.456944 L433.935 0.456944 L433.935 0 L433.935 -0.456944 L430.273 -0.456944 L430.273 0 Z M437.597 0 L437.597 0.456944 L441.259 0.456944 L441.259 0 L441.259 -0.456944 L437.597 -0.456944 L437.597 0 Z M444.921 0 L444.921 0.456944 L448.582 0.456944 L448.582 0 L448.582 -0.456944 L444.921 -0.456944 L444.921 0 Z M452.244 0 L452.244 0.456944 L455.906 0.456944 L455.906 0 L455.906 -0.456944 L452.244 -0.456944 L452.244 0 Z M459.568 0 L459.568 0.456944 L463.23 0.456944 L463.23 0 L463.23 -0.456944 L459.568 -0.456944 L459.568 0 Z M466.892 0 L466.892 0.456944 L470.554 0.456944 L470.554 0 L470.554 -0.456944 L466.892 -0.456944 L466.892 0 Z M474.216 0 L474.216 0.456944 L477.878 0.456944 L477.878 0 L477.878 -0.456944 L474.216 -0.456944 L474.216 0 Z M481.54 0 L481.54 0.456944 L485.201 0.456944 L485.201 0 L485.201 -0.456944 L481.54 -0.456944 L481.54 0 Z M488.863 0 L488.863 0.456944 L492.525 0.456944 L492.525 0 L492.525 -0.456944 L488.863 -0.456944 L488.863 0 Z M496.187 0 L496.187 0.456944 L499.849 0.456944 L499.849 0 L499.849 -0.456944 L496.187 -0.456944 L496.187 0 Z M503.511 0 L503.511 0.456944 L507.173 0.456944 L507.173 0 L507.173 -0.456944 L503.511 -0.456944 L503.511 0 Z M510.835 0 L510.835 0.456944 L514.497 0.456944 L514.497 0 L514.497 -0.456944 L510.835 -0.456944 L510.835 0 Z M518.159 0 L518.159 0.456944 L521.82 0.456944 L521.82 0 L521.82 -0.456944 L518.159 -0.456944 L518.159 0 Z M525.482 0 L525.482 0.456944 L529.144 0.456944 L529.144 0 L529.144 -0.456944 L525.482 -0.456944 L525.482 0 Z M532.806 0 L532.806 0.456944 L536.468 0.456944 L536.468 0 L536.468 -0.456944 L532.806 -0.456944 L532.806 0 Z M540.13 0 L540.13 0.456944 L543.792 0.456944 L543.792 0 L543.792 -0.456944 L540.13 -0.456944 L540.13 0 Z M547.454 0 L547.454 0.456944 L551.116 0.456944 L551.116 0 L551.116 -0.456944 L547.454 -0.456944 L547.454 0 Z M554.778 0 L554.778 0.456944 L558.44 0.456944 L558.44 0 L558.44 -0.456944 L554.778 -0.456944 L554.778 0 Z M562.102 0 L562.102 0.456944 L565.764 0.456944 L565.764 0 L565.764 -0.456944 L562.102 -0.456944 L562.102 0 Z M569.426 0 L569.426 0.456944 L573.087 0.456944 L573.087 0 L573.087 -0.456944 L569.426 -0.456944 L569.426 0 Z M576.749 0 L576.749 0.456944 L580.411 0.456944 L580.411 0 L580.411 -0.456944 L576.749 -0.456944 L576.749 0 Z M584.073 0 L584.073 0.456944 L587.735 0.456944 L587.735 0 L587.735 -0.456944 L584.073 -0.456944 L584.073 0 Z M591.397 0 L591.397 0.456944 L595.059 0.456944 L595.059 0 L595.059 -0.456944 L591.397 -0.456944 L591.397 0 Z M598.721 0 L598.721 0.456944 L602.383 0.456944 L602.383 0 L602.383 -0.456944 L598.721 -0.456944 L598.721 0 Z M606.045 0 L606.045 0.456944 L609.707 0.456944 L609.707 0 L609.707 -0.456944 L606.045 -0.456944 L606.045 0 Z M613.369 0 L613.369 0.456944 L617.031 0.456944 L617.031 0 L617.031 -0.456944 L613.369 -0.456944 L613.369 0 Z M620.693 0 L620.693 0.456944 L624.354 0.456944 L624.354 0 L624.354 -0.456944 L620.693 -0.456944 L620.693 0 Z M628.016 0 L628.016 0.456944 L631.678 0.456944 L631.678 0 L631.678 -0.456944 L628.016 -0.456944 L628.016 0 Z M635.34 0 L635.34 0.456944 L639.002 0.456944 L639.002 0 L639.002 -0.456944 L635.34 -0.456944 L635.34 0 Z M642.664 0 L642.664 0.456944 L646.326 0.456944 L646.326 0 L646.326 -0.456944 L642.664 -0.456944 L642.664 0 Z M649.988 0 L649.988 0.456944 L653.65 0.456944 L653.65 0 L653.65 -0.456944 L649.988 -0.456944 L649.988 0 Z M657.312 0 L657.312 0.456944 L660.974 0.456944 L660.974 0 L660.974 -0.456944 L657.312 -0.456944 L657.312 0 Z M664.636 0 L664.636 0.456944 L668.298 0.456944 L668.298 0 L668.298 -0.456944 L664.636 -0.456944 L664.636 0 Z M671.959 0 L671.959 0.456944 L675.621 0.456944 L675.621 0 L675.621 -0.456944 L671.959 -0.456944 L671.959 0 Z M679.283 0 L679.283 0.456944 L682.945 0.456944 L682.945 0 L682.945 -0.456944 L679.283 -0.456944 L679.283 0 Z M686.607 0 L686.607 0.456944 L690.269 0.456944 L690.269 0 L690.269 -0.456944 L686.607 -0.456944 L686.607 0 Z M693.931 0 L693.931 0.456944 L697.593 0.456944 L697.593 0 L697.593 -0.456944 L693.931 -0.456944 L693.931 0 Z M701.255 0 L701.255 0.456944 L704.917 0.456944 L704.917 0 L704.917 -0.456944 L701.255 -0.456944 L701.255 0 Z M708.579 0 L708.579 0.456944 L712.241 0.456944 L712.241 0 L712.241 -0.456944 L708.579 -0.456944 L708.579 0 Z M715.903 0 L715.903 0.456944 L719.565 0.456944 L719.565 0 L719.565 -0.456944 L715.903 -0.456944 L715.903 0 Z M723.226 0 L723.226 0.456944 L726.888 0.456944 L726.888 0 L726.888 -0.456944 L723.226 -0.456944 L723.226 0 Z M730.55 0 L730.55 0.456944 L734.212 0.456944 L734.212 0 L734.212 -0.456944 L730.55 -0.456944 L730.55 0 Z M737.874 0 L737.874 0.456944 L741.536 0.456944 L741.536 0 L741.536 -0.456944 L737.874 -0.456944 L737.874 0 Z M745.198 0 L745.198 0.456944 L748.86 0.456944 L748.86 0 L748.86 -0.456944 L745.198 -0.456944 L745.198 0 Z M752.522 0 L752.522 0.456944 L756.184 0.456944 L756.184 0 L756.184 -0.456944 L752.522 -0.456944 L752.522 0 Z M759.846 0 L759.846 0.456944 L763.508 0.456944 L763.508 0 L763.508 -0.456944 L759.846 -0.456944 L759.846 0 Z M767.17 0 L767.17 0.456944 L770.831 0.456944 L770.831 0 L770.831 -0.456944 L767.17 -0.456944 L767.17 0 Z M774.493 0 L774.493 0.456944 L778.155 0.456944 L778.155 0 L778.155 -0.456944 L774.493 -0.456944 L774.493 0 Z M781.817 0 L781.817 0.456944 L785.479 0.456944 L785.479 0 L785.479 -0.456944 L781.817 -0.456944 L781.817 0 Z M789.141 0 L789.141 0.456944 L792.803 0.456944 L792.803 0 L792.803 -0.456944 L789.141 -0.456944 L789.141 0 Z M796.465 0 L796.465 0.456944 L800.127 0.456944 L800.127 0 L800.127 -0.456944 L796.465 -0.456944 L796.465 0 Z M803.789 0 L803.789 0.456944 L807.451 0.456944 L807.451 0 L807.451 -0.456944 L803.789 -0.456944 L803.789 0 Z M811.113 0 L811.113 0.456944 L814.775 0.456944 L814.775 0 L814.775 -0.456944 L811.113 -0.456944 L811.113 0 Z M818.437 0 L818.437 0.456944 L822.098 0.456944 L822.098 0 L822.098 -0.456944 L818.437 -0.456944 L818.437 0 Z M825.76 0 L825.76 0.456944 L829.422 0.456944 L829.422 0 L829.422 -0.456944 L825.76 -0.456944 L825.76 0 Z M833.084 0 L833.084 0.456944 L836.746 0.456944 L836.746 0 L836.746 -0.456944 L833.084 -0.456944 L833.084 0 Z M840.408 0 L840.408 0.456944 L844.07 0.456944 L844.07 0 L844.07 -0.456944 L840.408 -0.456944 L840.408 0 Z M847.732 0 L847.732 0.456944 L851.394 0.456944 L851.394 0 L851.394 -0.456944 L847.732 -0.456944 L847.732 0 Z M855.056 0 L855.056 0.456944 L858.718 0.456944 L858.718 0 L858.718 -0.456944 L855.056 -0.456944 L855.056 0 Z M862.38 0 L862.38 0.456944 L866.042 0.456944 L866.042 0 L866.042 -0.456944 L862.38 -0.456944 L862.38 0 Z M869.703 0 L869.703 0.456944 L873.365 0.456944 L873.365 0 L873.365 -0.456944 L869.703 -0.456944 L869.703 0 Z M877.027 0 L877.027 0.456944 L880.689 0.456944 L880.689 0 L880.689 -0.456944 L877.027 -0.456944 L877.027 0 Z M884.351 0 L884.351 0.456944 L888.013 0.456944 L888.013 0 L888.013 -0.456944 L884.351 -0.456944 L884.351 0 Z M891.675 0 L891.675 0.456944 L895.337 0.456944 L895.337 0 L895.337 -0.456944 L891.675 -0.456944 L891.675 0 Z M898.999 0 L898.999 0.456944 L902.661 0.456944 L902.661 0 L902.661 -0.456944 L898.999 -0.456944 L898.999 0 Z M906.323 0 L906.323 0.456944 L909.985 0.456944 L909.985 0 L909.985 -0.456944 L906.323 -0.456944 L906.323 0 Z M913.647 0 L913.647 0.456944 L917.309 0.456944 L917.309 0 L917.309 -0.456944 L913.647 -0.456944 L913.647 0 Z M920.97 0 L920.97 0.456944 L924.632 0.456944 L924.632 0 L924.632 -0.456944 L920.97 -0.456944 L920.97 0 Z M928.294 0 L928.294 0.456944 L931.956 0.456944 L931.956 0 L931.956 -0.456944 L928.294 -0.456944 L928.294 0 Z M935.618 0 L935.618 0.456944 L939.28 0.456944 L939.28 0 L939.28 -0.456944 L935.618 -0.456944 L935.618 0 Z M942.942 0 L942.942 0.456944 L946.604 0.456944 L946.604 0 L946.604 -0.456944 L942.942 -0.456944 L942.942 0 Z M950.266 0 L950.266 0.456944 L953.928 0.456944 L953.928 0 L953.928 -0.456944 L950.266 -0.456944 L950.266 0 Z M957.59 0 L957.59 0.456944 L961.252 0.456944 L961.252 0 L961.252 -0.456944 L957.59 -0.456944 L957.59 0 Z M964.914 0 L964.914 0.456944 L968.576 0.456944 L968.576 0 L968.576 -0.456944 L964.914 -0.456944 L964.914 0 Z M972.237 0 L972.237 0.456944 L975.899 0.456944 L975.899 0 L975.899 -0.456944 L972.237 -0.456944 L972.237 0 Z M979.561 0 L979.561 0.456944 L983.223 0.456944 L983.223 0 L983.223 -0.456944 L979.561 -0.456944 L979.561 0 Z M986.885 0 L986.885 0.456944 L990.547 0.456944 L990.547 0 L990.547 -0.456944 L986.885 -0.456944 L986.885 0 Z M994.209 0 L994.209 0.456944 L997.871 0.456944 L997.871 0 L997.871 -0.456944 L994.209 -0.456944 L994.209 0 Z M1001.53 0 L1001.53 0.456944 L1005.19 0.456944 L1005.19 0 L1005.19 -0.456944 L1001.53 -0.456944 L1001.53 0 Z M1008.86 0 L1008.86 0.456944 L1012.52 0.456944 L1012.52 0 L1012.52 -0.456944 L1008.86 -0.456944 L1008.86 0 Z M1016.18 0 L1016.18 0.456944 L1019.84 0.456944 L1019.84 0 L1019.84 -0.456944 L1016.18 -0.456944 L1016.18 0 Z M1023.5 0 L1023.5 0.456944 L1027.17 0.456944 L1027.17 0 L1027.17 -0.456944 L1023.5 -0.456944 L1023.5 0 Z M1030.83 0 L1030.83 0.456944 L1034.49 0.456944 L1034.49 0 L1034.49 -0.456944 L1030.83 -0.456944 L1030.83 0 Z M1038.15 0 L1038.15 0.456944 L1041.81 0.456944 L1041.81 0 L1041.81 -0.456944 L1038.15 -0.456944 L1038.15 0 Z M1045.48 0 L1045.48 0.456944 L1049.14 0.456944 L1049.14 0 L1049.14 -0.456944 L1045.48 -0.456944 L1045.48 0 Z M1052.8 0 L1052.8 0.456944 L1054.63 0.456944 L1054.63 0 L1054.63 -0.456944 L1052.8 -0.456944 L1052.8 0 Z M1054.63 0.456944 C1054.88 0.456944 1055.08 0.252363 1055.08 0 C1055.08 -0.252363 1054.88 -0.456944 1054.63 -0.456944 L1054.63 0 L1054.63 0.456944 Z M0 0 L0 0.456944 L1.83095 0.456944 L1.83095 0 L1.83095 -0.456944 L0 -0.456944 L0 0 Z M5.49285 0 L5.49285 0.456944 L9.15476 0.456944 L9.15476 0 L9.15476 -0.456944 L5.49285 -0.456944 L5.49285 0 Z M12.8167 0 L12.8167 0.456944 L16.4786 0.456944 L16.4786 0 L16.4786 -0.456944 L12.8167 -0.456944 L12.8167 0 Z M20.1405 0 L20.1405 0.456944 L23.8024 0.456944 L23.8024 0 L23.8024 -0.456944 L20.1405 -0.456944 L20.1405 0 Z M27.4643 0 L27.4643 0.456944 L31.1262 0.456944 L31.1262 0 L31.1262 -0.456944 L27.4643 -0.456944 L27.4643 0 Z M34.7881 0 L34.7881 0.456944 L38.45 0.456944 L38.45 0 L38.45 -0.456944 L34.7881 -0.456944 L34.7881 0 Z M42.1119 0 L42.1119 0.456944 L45.7738 0.456944 L45.7738 0 L45.7738 -0.456944 L42.1119 -0.456944 L42.1119 0 Z M49.4357 0 L49.4357 0.456944 L53.0976 0.456944 L53.0976 0 L53.0976 -0.456944 L49.4357 -0.456944 L49.4357 0 Z M56.7595 0 L56.7595 0.456944 L60.4214 0.456944 L60.4214 0 L60.4214 -0.456944 L56.7595 -0.456944 L56.7595 0 Z M64.0833 0 L64.0833 0.456944 L67.7452 0.456944 L67.7452 0 L67.7452 -0.456944 L64.0833 -0.456944 L64.0833 0 Z M71.4071 0 L71.4071 0.456944 L75.069 0.456944 L75.069 0 L75.069 -0.456944 L71.4071 -0.456944 L71.4071 0 Z M78.7309 0 L78.7309 0.456944 L82.3928 0.456944 L82.3928 0 L82.3928 -0.456944 L78.7309 -0.456944 L78.7309 0 Z M86.0547 0 L86.0547 0.456944 L89.7166 0.456944 L89.7166 0 L89.7166 -0.456944 L86.0547 -0.456944 L86.0547 0 Z M93.3785 0 L93.3785 0.456944 L97.0404 0.456944 L97.0404 0 L97.0404 -0.456944 L93.3785 -0.456944 L93.3785 0 Z M100.702 0 L100.702 0.456944 L104.364 0.456944 L104.364 0 L104.364 -0.456944 L100.702 -0.456944 L100.702 0 Z M108.026 0 L108.026 0.456944 L111.688 0.456944 L111.688 0 L111.688 -0.456944 L108.026 -0.456944 L108.026 0 Z M115.35 0 L115.35 0.456944 L119.012 0.456944 L119.012 0 L119.012 -0.456944 L115.35 -0.456944 L115.35 0 Z M122.674 0 L122.674 0.456944 L126.336 0.456944 L126.336 0 L126.336 -0.456944 L122.674 -0.456944 L122.674 0 Z M129.998 0 L129.998 0.456944 L133.659 0.456944 L133.659 0 L133.659 -0.456944 L129.998 -0.456944 L129.998 0 Z M137.321 0 L137.321 0.456944 L140.983 0.456944 L140.983 0 L140.983 -0.456944 L137.321 -0.456944 L137.321 0 Z M144.645 0 L144.645 0.456944 L148.307 0.456944 L148.307 0 L148.307 -0.456944 L144.645 -0.456944 L144.645 0 Z M151.969 0 L151.969 0.456944 L155.631 0.456944 L155.631 0 L155.631 -0.456944 L151.969 -0.456944 L151.969 0 Z M159.293 0 L159.293 0.456944 L162.955 0.456944 L162.955 0 L162.955 -0.456944 L159.293 -0.456944 L159.293 0 Z M166.617 0 L166.617 0.456944 L170.278 0.456944 L170.278 0 L170.278 -0.456944 L166.617 -0.456944 L166.617 0 Z M173.94 0 L173.94 0.456944 L177.602 0.456944 L177.602 0 L177.602 -0.456944 L173.94 -0.456944 L173.94 0 Z M181.264 0 L181.264 0.456944 L184.926 0.456944 L184.926 0 L184.926 -0.456944 L181.264 -0.456944 L181.264 0 Z M188.588 0 L188.588 0.456944 L192.25 0.456944 L192.25 0 L192.25 -0.456944 L188.588 -0.456944 L188.588 0 Z M195.912 0 L195.912 0.456944 L199.574 0.456944 L199.574 0 L199.574 -0.456944 L195.912 -0.456944 L195.912 0 Z M203.235 0 L203.235 0.456944 L206.897 0.456944 L206.897 0 L206.897 -0.456944 L203.235 -0.456944 L203.235 0 Z M210.559 0 L210.559 0.456944 L214.221 0.456944 L214.221 0 L214.221 -0.456944 L210.559 -0.456944 L210.559 0 Z M217.883 0 L217.883 0.456944 L221.545 0.456944 L221.545 0 L221.545 -0.456944 L217.883 -0.456944 L217.883 0 Z M225.207 0 L225.207 0.456944 L228.869 0.456944 L228.869 0 L228.869 -0.456944 L225.207 -0.456944 L225.207 0 Z M232.531 0 L232.531 0.456944 L236.193 0.456944 L236.193 0 L236.193 -0.456944 L232.531 -0.456944 L232.531 0 Z M239.854 0 L239.854 0.456944 L243.516 0.456944 L243.516 0 L243.516 -0.456944 L239.854 -0.456944 L239.854 0 Z M247.178 0 L247.178 0.456944 L250.84 0.456944 L250.84 0 L250.84 -0.456944 L247.178 -0.456944 L247.178 0 Z M254.502 0 L254.502 0.456944 L258.164 0.456944 L258.164 0 L258.164 -0.456944 L254.502 -0.456944 L254.502 0 Z M261.826 0 L261.826 0.456944 L265.488 0.456944 L265.488 0 L265.488 -0.456944 L261.826 -0.456944 L261.826 0 Z M269.15 0 L269.15 0.456944 L272.811 0.456944 L272.811 0 L272.811 -0.456944 L269.15 -0.456944 L269.15 0 Z M276.473 0 L276.473 0.456944 L280.135 0.456944 L280.135 0 L280.135 -0.456944 L276.473 -0.456944 L276.473 0 Z M283.797 0 L283.797 0.456944 L287.459 0.456944 L287.459 0 L287.459 -0.456944 L283.797 -0.456944 L283.797 0 Z M291.121 0 L291.121 0.456944 L294.783 0.456944 L294.783 0 L294.783 -0.456944 L291.121 -0.456944 L291.121 0 Z M298.445 0 L298.445 0.456944 L302.107 0.456944 L302.107 0 L302.107 -0.456944 L298.445 -0.456944 L298.445 0 Z M305.769 0 L305.769 0.456944 L309.43 0.456944 L309.43 0 L309.43 -0.456944 L305.769 -0.456944 L305.769 0 Z M313.092 0 L313.092 0.456944 L316.754 0.456944 L316.754 0 L316.754 -0.456944 L313.092 -0.456944 L313.092 0 Z M320.416 0 L320.416 0.456944 L324.078 0.456944 L324.078 0 L324.078 -0.456944 L320.416 -0.456944 L320.416 0 Z M327.74 0 L327.74 0.456944 L331.402 0.456944 L331.402 0 L331.402 -0.456944 L327.74 -0.456944 L327.74 0 Z M335.064 0 L335.064 0.456944 L338.726 0.456944 L338.726 0 L338.726 -0.456944 L335.064 -0.456944 L335.064 0 Z M342.388 0 L342.388 0.456944 L346.049 0.456944 L346.049 0 L346.049 -0.456944 L342.388 -0.456944 L342.388 0 Z M349.711 0 L349.711 0.456944 L353.373 0.456944 L353.373 0 L353.373 -0.456944 L349.711 -0.456944 L349.711 0 Z M357.035 0 L357.035 0.456944 L360.697 0.456944 L360.697 0 L360.697 -0.456944 L357.035 -0.456944 L357.035 0 Z M364.359 0 L364.359 0.456944 L368.021 0.456944 L368.021 0 L368.021 -0.456944 L364.359 -0.456944 L364.359 0 Z M371.683 0 L371.683 0.456944 L375.345 0.456944 L375.345 0 L375.345 -0.456944 L371.683 -0.456944 L371.683 0 Z M379.006 0 L379.006 0.456944 L382.668 0.456944 L382.668 0 L382.668 -0.456944 L379.006 -0.456944 L379.006 0 Z M386.33 0 L386.33 0.456944 L389.992 0.456944 L389.992 0 L389.992 -0.456944 L386.33 -0.456944 L386.33 0 Z M393.654 0 L393.654 0.456944 L397.316 0.456944 L397.316 0 L397.316 -0.456944 L393.654 -0.456944 L393.654 0 Z M400.978 0 L400.978 0.456944 L404.64 0.456944 L404.64 0 L404.64 -0.456944 L400.978 -0.456944 L400.978 0 Z M408.302 0 L408.302 0.456944 L411.964 0.456944 L411.964 0 L411.964 -0.456944 L408.302 -0.456944 L408.302 0 Z M415.625 0 L415.625 0.456944 L419.287 0.456944 L419.287 0 L419.287 -0.456944 L415.625 -0.456944 L415.625 0 Z M422.949 0 L422.949 0.456944 L426.611 0.456944 L426.611 0 L426.611 -0.456944 L422.949 -0.456944 L422.949 0 Z M430.273 0 L430.273 0.456944 L433.935 0.456944 L433.935 0 L433.935 -0.456944 L430.273 -0.456944 L430.273 0 Z M437.597 0 L437.597 0.456944 L441.259 0.456944 L441.259 0 L441.259 -0.456944 L437.597 -0.456944 L437.597 0 Z M444.921 0 L444.921 0.456944 L448.582 0.456944 L448.582 0 L448.582 -0.456944 L444.921 -0.456944 L444.921 0 Z M452.244 0 L452.244 0.456944 L455.906 0.456944 L455.906 0 L455.906 -0.456944 L452.244 -0.456944 L452.244 0 Z M459.568 0 L459.568 0.456944 L463.23 0.456944 L463.23 0 L463.23 -0.456944 L459.568 -0.456944 L459.568 0 Z M466.892 0 L466.892 0.456944 L470.554 0.456944 L470.554 0 L470.554 -0.456944 L466.892 -0.456944 L466.892 0 Z M474.216 0 L474.216 0.456944 L477.878 0.456944 L477.878 0 L477.878 -0.456944 L474.216 -0.456944 L474.216 0 Z M481.54 0 L481.54 0.456944 L485.201 0.456944 L485.201 0 L485.201 -0.456944 L481.54 -0.456944 L481.54 0 Z M488.863 0 L488.863 0.456944 L492.525 0.456944 L492.525 0 L492.525 -0.456944 L488.863 -0.456944 L488.863 0 Z M496.187 0 L496.187 0.456944 L499.849 0.456944 L499.849 0 L499.849 -0.456944 L496.187 -0.456944 L496.187 0 Z M503.511 0 L503.511 0.456944 L507.173 0.456944 L507.173 0 L507.173 -0.456944 L503.511 -0.456944 L503.511 0 Z M510.835 0 L510.835 0.456944 L514.497 0.456944 L514.497 0 L514.497 -0.456944 L510.835 -0.456944 L510.835 0 Z M518.159 0 L518.159 0.456944 L521.82 0.456944 L521.82 0 L521.82 -0.456944 L518.159 -0.456944 L518.159 0 Z M525.482 0 L525.482 0.456944 L529.144 0.456944 L529.144 0 L529.144 -0.456944 L525.482 -0.456944 L525.482 0 Z M532.806 0 L532.806 0.456944 L536.468 0.456944 L536.468 0 L536.468 -0.456944 L532.806 -0.456944 L532.806 0 Z M540.13 0 L540.13 0.456944 L543.792 0.456944 L543.792 0 L543.792 -0.456944 L540.13 -0.456944 L540.13 0 Z M547.454 0 L547.454 0.456944 L551.116 0.456944 L551.116 0 L551.116 -0.456944 L547.454 -0.456944 L547.454 0 Z M554.778 0 L554.778 0.456944 L558.44 0.456944 L558.44 0 L558.44 -0.456944 L554.778 -0.456944 L554.778 0 Z M562.102 0 L562.102 0.456944 L565.764 0.456944 L565.764 0 L565.764 -0.456944 L562.102 -0.456944 L562.102 0 Z M569.426 0 L569.426 0.456944 L573.087 0.456944 L573.087 0 L573.087 -0.456944 L569.426 -0.456944 L569.426 0 Z M576.749 0 L576.749 0.456944 L580.411 0.456944 L580.411 0 L580.411 -0.456944 L576.749 -0.456944 L576.749 0 Z M584.073 0 L584.073 0.456944 L587.735 0.456944 L587.735 0 L587.735 -0.456944 L584.073 -0.456944 L584.073 0 Z M591.397 0 L591.397 0.456944 L595.059 0.456944 L595.059 0 L595.059 -0.456944 L591.397 -0.456944 L591.397 0 Z M598.721 0 L598.721 0.456944 L602.383 0.456944 L602.383 0 L602.383 -0.456944 L598.721 -0.456944 L598.721 0 Z M606.045 0 L606.045 0.456944 L609.707 0.456944 L609.707 0 L609.707 -0.456944 L606.045 -0.456944 L606.045 0 Z M613.369 0 L613.369 0.456944 L617.031 0.456944 L617.031 0 L617.031 -0.456944 L613.369 -0.456944 L613.369 0 Z M620.693 0 L620.693 0.456944 L624.354 0.456944 L624.354 0 L624.354 -0.456944 L620.693 -0.456944 L620.693 0 Z M628.016 0 L628.016 0.456944 L631.678 0.456944 L631.678 0 L631.678 -0.456944 L628.016 -0.456944 L628.016 0 Z M635.34 0 L635.34 0.456944 L639.002 0.456944 L639.002 0 L639.002 -0.456944 L635.34 -0.456944 L635.34 0 Z M642.664 0 L642.664 0.456944 L646.326 0.456944 L646.326 0 L646.326 -0.456944 L642.664 -0.456944 L642.664 0 Z M649.988 0 L649.988 0.456944 L653.65 0.456944 L653.65 0 L653.65 -0.456944 L649.988 -0.456944 L649.988 0 Z M657.312 0 L657.312 0.456944 L660.974 0.456944 L660.974 0 L660.974 -0.456944 L657.312 -0.456944 L657.312 0 Z M664.636 0 L664.636 0.456944 L668.298 0.456944 L668.298 0 L668.298 -0.456944 L664.636 -0.456944 L664.636 0 Z M671.959 0 L671.959 0.456944 L675.621 0.456944 L675.621 0 L675.621 -0.456944 L671.959 -0.456944 L671.959 0 Z M679.283 0 L679.283 0.456944 L682.945 0.456944 L682.945 0 L682.945 -0.456944 L679.283 -0.456944 L679.283 0 Z M686.607 0 L686.607 0.456944 L690.269 0.456944 L690.269 0 L690.269 -0.456944 L686.607 -0.456944 L686.607 0 Z M693.931 0 L693.931 0.456944 L697.593 0.456944 L697.593 0 L697.593 -0.456944 L693.931 -0.456944 L693.931 0 Z M701.255 0 L701.255 0.456944 L704.917 0.456944 L704.917 0 L704.917 -0.456944 L701.255 -0.456944 L701.255 0 Z M708.579 0 L708.579 0.456944 L712.241 0.456944 L712.241 0 L712.241 -0.456944 L708.579 -0.456944 L708.579 0 Z M715.903 0 L715.903 0.456944 L719.565 0.456944 L719.565 0 L719.565 -0.456944 L715.903 -0.456944 L715.903 0 Z M723.226 0 L723.226 0.456944 L726.888 0.456944 L726.888 0 L726.888 -0.456944 L723.226 -0.456944 L723.226 0 Z M730.55 0 L730.55 0.456944 L734.212 0.456944 L734.212 0 L734.212 -0.456944 L730.55 -0.456944 L730.55 0 Z M737.874 0 L737.874 0.456944 L741.536 0.456944 L741.536 0 L741.536 -0.456944 L737.874 -0.456944 L737.874 0 Z M745.198 0 L745.198 0.456944 L748.86 0.456944 L748.86 0 L748.86 -0.456944 L745.198 -0.456944 L745.198 0 Z M752.522 0 L752.522 0.456944 L756.184 0.456944 L756.184 0 L756.184 -0.456944 L752.522 -0.456944 L752.522 0 Z M759.846 0 L759.846 0.456944 L763.508 0.456944 L763.508 0 L763.508 -0.456944 L759.846 -0.456944 L759.846 0 Z M767.17 0 L767.17 0.456944 L770.831 0.456944 L770.831 0 L770.831 -0.456944 L767.17 -0.456944 L767.17 0 Z M774.493 0 L774.493 0.456944 L778.155 0.456944 L778.155 0 L778.155 -0.456944 L774.493 -0.456944 L774.493 0 Z M781.817 0 L781.817 0.456944 L785.479 0.456944 L785.479 0 L785.479 -0.456944 L781.817 -0.456944 L781.817 0 Z M789.141 0 L789.141 0.456944 L792.803 0.456944 L792.803 0 L792.803 -0.456944 L789.141 -0.456944 L789.141 0 Z M796.465 0 L796.465 0.456944 L800.127 0.456944 L800.127 0 L800.127 -0.456944 L796.465 -0.456944 L796.465 0 Z M803.789 0 L803.789 0.456944 L807.451 0.456944 L807.451 0 L807.451 -0.456944 L803.789 -0.456944 L803.789 0 Z M811.113 0 L811.113 0.456944 L814.775 0.456944 L814.775 0 L814.775 -0.456944 L811.113 -0.456944 L811.113 0 Z M818.437 0 L818.437 0.456944 L822.098 0.456944 L822.098 0 L822.098 -0.456944 L818.437 -0.456944 L818.437 0 Z M825.76 0 L825.76 0.456944 L829.422 0.456944 L829.422 0 L829.422 -0.456944 L825.76 -0.456944 L825.76 0 Z M833.084 0 L833.084 0.456944 L836.746 0.456944 L836.746 0 L836.746 -0.456944 L833.084 -0.456944 L833.084 0 Z M840.408 0 L840.408 0.456944 L844.07 0.456944 L844.07 0 L844.07 -0.456944 L840.408 -0.456944 L840.408 0 Z M847.732 0 L847.732 0.456944 L851.394 0.456944 L851.394 0 L851.394 -0.456944 L847.732 -0.456944 L847.732 0 Z M855.056 0 L855.056 0.456944 L858.718 0.456944 L858.718 0 L858.718 -0.456944 L855.056 -0.456944 L855.056 0 Z M862.38 0 L862.38 0.456944 L866.042 0.456944 L866.042 0 L866.042 -0.456944 L862.38 -0.456944 L862.38 0 Z M869.703 0 L869.703 0.456944 L873.365 0.456944 L873.365 0 L873.365 -0.456944 L869.703 -0.456944 L869.703 0 Z M877.027 0 L877.027 0.456944 L880.689 0.456944 L880.689 0 L880.689 -0.456944 L877.027 -0.456944 L877.027 0 Z M884.351 0 L884.351 0.456944 L888.013 0.456944 L888.013 0 L888.013 -0.456944 L884.351 -0.456944 L884.351 0 Z M891.675 0 L891.675 0.456944 L895.337 0.456944 L895.337 0 L895.337 -0.456944 L891.675 -0.456944 L891.675 0 Z M898.999 0 L898.999 0.456944 L902.661 0.456944 L902.661 0 L902.661 -0.456944 L898.999 -0.456944 L898.999 0 Z M906.323 0 L906.323 0.456944 L909.985 0.456944 L909.985 0 L909.985 -0.456944 L906.323 -0.456944 L906.323 0 Z M913.647 0 L913.647 0.456944 L917.309 0.456944 L917.309 0 L917.309 -0.456944 L913.647 -0.456944 L913.647 0 Z M920.97 0 L920.97 0.456944 L924.632 0.456944 L924.632 0 L924.632 -0.456944 L920.97 -0.456944 L920.97 0 Z M928.294 0 L928.294 0.456944 L931.956 0.456944 L931.956 0 L931.956 -0.456944 L928.294 -0.456944 L928.294 0 Z M935.618 0 L935.618 0.456944 L939.28 0.456944 L939.28 0 L939.28 -0.456944 L935.618 -0.456944 L935.618 0 Z M942.942 0 L942.942 0.456944 L946.604 0.456944 L946.604 0 L946.604 -0.456944 L942.942 -0.456944 L942.942 0 Z M950.266 0 L950.266 0.456944 L953.928 0.456944 L953.928 0 L953.928 -0.456944 L950.266 -0.456944 L950.266 0 Z M957.59 0 L957.59 0.456944 L961.252 0.456944 L961.252 0 L961.252 -0.456944 L957.59 -0.456944 L957.59 0 Z M964.914 0 L964.914 0.456944 L968.576 0.456944 L968.576 0 L968.576 -0.456944 L964.914 -0.456944 L964.914 0 Z M972.237 0 L972.237 0.456944 L975.899 0.456944 L975.899 0 L975.899 -0.456944 L972.237 -0.456944 L972.237 0 Z M979.561 0 L979.561 0.456944 L983.223 0.456944 L983.223 0 L983.223 -0.456944 L979.561 -0.456944 L979.561 0 Z M986.885 0 L986.885 0.456944 L990.547 0.456944 L990.547 0 L990.547 -0.456944 L986.885 -0.456944 L986.885 0 Z M994.209 0 L994.209 0.456944 L997.871 0.456944 L997.871 0 L997.871 -0.456944 L994.209 -0.456944 L994.209 0 Z M1001.53 0 L1001.53 0.456944 L1005.19 0.456944 L1005.19 0 L1005.19 -0.456944 L1001.53 -0.456944 L1001.53 0 Z M1008.86 0 L1008.86 0.456944 L1012.52 0.456944 L1012.52 0 L1012.52 -0.456944 L1008.86 -0.456944 L1008.86 0 Z M1016.18 0 L1016.18 0.456944 L1019.84 0.456944 L1019.84 0 L1019.84 -0.456944 L1016.18 -0.456944 L1016.18 0 Z M1023.5 0 L1023.5 0.456944 L1027.17 0.456944 L1027.17 0 L1027.17 -0.456944 L1023.5 -0.456944 L1023.5 0 Z M1030.83 0 L1030.83 0.456944 L1034.49 0.456944 L1034.49 0 L1034.49 -0.456944 L1030.83 -0.456944 L1030.83 0 Z M1038.15 0 L1038.15 0.456944 L1041.81 0.456944 L1041.81 0 L1041.81 -0.456944 L1038.15 -0.456944 L1038.15 0 Z M1045.48 0 L1045.48 0.456944 L1049.14 0.456944 L1049.14 0 L1049.14 -0.456944 L1045.48 -0.456944 L1045.48 0 Z M1052.8 0 L1052.8 0.456944 L1054.63 0.456944 L1054.63 0 L1054.63 -0.456944 L1052.8 -0.456944 L1052.8 0 Z" fill="#eeeeee"/></svg>
          <svg style={{ position: "absolute", left: "265.94px", top: "0px", width: "1px", height: "176.38px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="176.38" viewBox="0 0 1 176.38" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M176.381 0.456944 C176.633 0.456944 176.837 0.252363 176.837 0 C176.837 -0.252363 176.633 -0.456944 176.381 -0.456944 L176.381 0 L176.381 0.456944 Z M0 0 L0 0.456944 L176.381 0.456944 L176.381 0 L176.381 -0.456944 L0 -0.456944 L0 0 Z" fill="#eeeeee"/></svg>
          <svg style={{ position: "absolute", left: "534.62px", top: "0px", width: "1px", height: "176.38px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="176.38" viewBox="0 0 1 176.38" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M176.381 0.456944 C176.633 0.456944 176.837 0.252363 176.837 0 C176.837 -0.252363 176.633 -0.456944 176.381 -0.456944 L176.381 0 L176.381 0.456944 Z M0 0 L0 0.456944 L176.381 0.456944 L176.381 0 L176.381 -0.456944 L0 -0.456944 L0 0 Z" fill="#eeeeee"/></svg>
          <svg style={{ position: "absolute", left: "803.31px", top: "0px", width: "1px", height: "176.38px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="176.38" viewBox="0 0 1 176.38" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M176.381 0.456944 C176.633 0.456944 176.837 0.252363 176.837 0 C176.837 -0.252363 176.633 -0.456944 176.381 -0.456944 L176.381 0 L176.381 0.456944 Z M0 0 L0 0.456944 L176.381 0.456944 L176.381 0 L176.381 -0.456944 L0 -0.456944 L0 0 Z" fill="#eeeeee"/></svg>
          <div style={{ position: "absolute", left: "16.45px", top: "16.45px", width: "230.3px", height: "120.37px", display: "flex", flexDirection: "column", gap: "31.99px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "5.48px", background: "#7c53f9", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "173.64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>Total audience</p>
                  <Dots size={21.9} style={{ width: "21.93px", height: "21.93px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
                </div>
                <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "33px", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#222222" }}>18,420</p>
                  </div>
                  <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.2 2.799)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#15b392"/><path transform="matrix(1 0 0 1 8.396 2.799)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#15b392"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#15b392", lineHeight: "1.350000023841858" }}>+8.2%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>All active subscribers</p>
              </div>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "285.13px", top: "16.45px", width: "230.3px", height: "120.37px", display: "flex", flexDirection: "column", gap: "31.99px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "5.48px", background: "#2dd411", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <UserPlus size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "173.64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>New subscribers</p>
                  <Dots size={21.9} style={{ width: "21.93px", height: "21.93px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
                </div>
                <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "33px", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#222222" }}>1,146</p>
                  </div>
                  <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.2 2.799)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#15b392"/><path transform="matrix(1 0 0 1 8.396 2.799)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#15b392"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#15b392", lineHeight: "1.350000023841858" }}>+12.4%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>Joined in the last 30 days</p>
              </div>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "553.82px", top: "16.45px", width: "230.3px", height: "120.37px", display: "flex", flexDirection: "column", gap: "31.99px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "5.48px", background: "#ff9b22", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <CursorPointerBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "173.64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>Engaged readers</p>
                  <Dots size={21.9} style={{ width: "21.93px", height: "21.93px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
                </div>
                <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "33px", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#222222" }}>12,904</p>
                  </div>
                  <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.2 2.799)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#15b392"/><path transform="matrix(1 0 0 1 8.396 2.799)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#15b392"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#15b392", lineHeight: "1.350000023841858" }}>+5.6%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>Opened at least once</p>
              </div>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "822.5px", top: "16.45px", width: "230.3px", height: "120.37px", display: "flex", flexDirection: "column", gap: "31.99px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "5.48px", background: "#4d98fe", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <UserMinus size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "173.64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>Unsubscribe rate</p>
                  <Dots size={21.9} style={{ width: "21.93px", height: "21.93px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
                </div>
                <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "33px", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#222222" }}>1.2%</p>
                  </div>
                  <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#fff1f1", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.2 2.799)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#e5484d"/><path transform="matrix(1 0 0 1 8.396 2.799)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#e5484d"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#e5484d", lineHeight: "1.350000023841858" }}>+0.3%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>212 left this month</p>
              </div>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "721.52px", top: "241.27px", width: "0.91px", height: "352.76px", background: "#eeeeee" }} />
        <div style={{ position: "absolute", left: "0px", top: "594.03px", width: "1072.91px", height: "0.91px", background: "#eeeeee" }} />
        <div style={{ position: "absolute", left: "16.45px", top: "257.72px", width: "689.07px", height: "298.54px", display: "flex", flexDirection: "column", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "689.07px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Audience growth</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "350px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>New subscribers per day, compared with the previous 30 days.</p>
            </div>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "25px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Daily</p>
              <ChevronDown size={12.8} strokeWidth={2.81} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "3.66px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "rgba(124, 83, 249, 0.7)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>This period</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "3.66px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#e6e6e6" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Previous period</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "30.16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5" }}>120</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5" }}>90</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5" }}>60</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5" }}>30</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5" }}>0</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ height: "189.18px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                  <div style={{ width: "16.45px", height: "16.45px", flexShrink: 0, borderRadius: "4.57px", background: "#7c53f9" }} />
                </div>
              </div>
              <div style={{ width: "652.4px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Nov 24</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Nov 29</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec 4</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec 9</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec 14</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec 19</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec 23</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "738.42px", top: "257.72px", width: "318.03px", height: "318.37px", display: "flex", flexDirection: "column", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Acquisition sources</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "251px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Where this month’s 1,146 signups came from.</p>
            </div>
          </div>
          <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "5.48px 7.31px 5.48px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <WorldBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                </div>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#24322e" }}>Website signup form</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#989898" }}>481</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "31px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>42%</p>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 32px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "271.41px", height: "5.48px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "265.98px", height: "5.48px", borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "5.48px 7.31px 5.48px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ShareBulk size={14.6} strokeWidth={2.01} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                </div>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#24322e" }}>Referral program</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#989898" }}>241</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "27px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>21%</p>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 32px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "271.41px", height: "5.48px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "132.99px", height: "5.48px", borderRadius: "2.74px", background: "rgba(77, 152, 254, 0.7)" }} />
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "5.48px 7.31px 5.48px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg width={14.6} height={14.6} viewBox="0 0 24 24" style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" /></svg>
                </div>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#24322e" }}>Social profiles</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#989898" }}>183</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "27px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>16%</p>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 32px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "271.41px", height: "5.48px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "101.33px", height: "5.48px", borderRadius: "2.74px", background: "rgba(255, 155, 34, 0.7)" }} />
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "5.48px 7.31px 5.48px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <UploadBulk size={14.6} strokeWidth={2.01} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                </div>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#24322e" }}>Imported lists</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#989898" }}>138</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "27px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>12%</p>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 32px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "271.41px", height: "5.48px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "75.99px", height: "5.48px", borderRadius: "2.74px", background: "rgba(164, 227, 90, 0.7)" }} />
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "5.48px 7.31px 5.48px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <StarBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                </div>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#24322e" }}>Recommendations</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#989898" }}>103</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "22px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>9%</p>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 32px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "271.41px", height: "5.48px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "57px", height: "5.48px", borderRadius: "2.74px", background: "rgba(239, 194, 81, 0.7)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "357.19px", top: "594.94px", width: "0.91px", height: "252.23px", background: "#eeeeee" }} />
        <div style={{ position: "absolute", left: "714.83px", top: "594.94px", width: "0.91px", height: "252.23px", background: "#eeeeee" }} />
        <div style={{ position: "absolute", left: "16.45px", top: "611.39px", width: "324.74px", height: "180.41px", display: "flex", flexDirection: "column", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Top locations</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Share of active subscribers</p>
            </div>
            <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
          </div>
          <div style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist Mono'", fontSize: "9.14px", fontWeight: 500, color: "#666d80" }}>US</p>
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>United States</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#666d80" }}>6,412</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>35%</p>
            </div>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist Mono'", fontSize: "9.14px", fontWeight: 500, color: "#666d80" }}>GB</p>
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>United Kingdom</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#666d80" }}>2,210</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>12%</p>
            </div>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist Mono'", fontSize: "9.14px", fontWeight: 500, color: "#666d80" }}>IN</p>
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>India</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#666d80" }}>1,840</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>10%</p>
            </div>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist Mono'", fontSize: "9.14px", fontWeight: 500, color: "#666d80" }}>DE</p>
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Germany</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#666d80" }}>1,105</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>6%</p>
            </div>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist Mono'", fontSize: "9.14px", fontWeight: 500, color: "#666d80" }}>CA</p>
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Canada</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#666d80" }}>986</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>5%</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "374.09px", top: "611.39px", width: "324.74px", height: "204.44px", display: "flex", flexDirection: "column", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Reading devices</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Where emails were opened</p>
            </div>
            <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
          </div>
          <div style={{ width: "324.74px", height: "9.14px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "153.88px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "147.38px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(255, 155, 34, 0.7)" }} />
            <div style={{ width: "17.48px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(77, 152, 254, 0.7)" }} />
          </div>
          <div style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <DeviceMobileBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Mobile</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>6,194 opens</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>48%</p>
            </div>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <DeviceLaptopBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ff9b22", display: "block" }} />
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Desktop</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>5,936 opens</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>46%</p>
            </div>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <TabletBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Tablet</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>774 opens</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>6%</p>
            </div>
          </div>
          <div style={{ width: "324.74px", flexShrink: 0, borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "8.22px 10.05px 8.22px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Top clients</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "205px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#666d80" }}>Apple Mail 52% · Gmail 31% · Outlook 11%</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "731.73px", top: "611.39px", width: "324.74px", height: "169.8px", display: "flex", flexDirection: "column", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Engagement tiers</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "211px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Based on opens and clicks in 90 days</p>
            </div>
            <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
          </div>
          <div style={{ width: "324.74px", height: "9.14px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "72.59px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(21, 179, 146, 0.7)" }} />
            <div style={{ width: "150.53px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(77, 152, 254, 0.7)" }} />
            <div style={{ width: "53.11px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "rgba(255, 155, 34, 0.7)" }} />
            <div style={{ width: "40.12px", height: "9.14px", flexShrink: 0, borderRadius: "2.74px", background: "#cfcfd4" }} />
          </div>
          <div style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "9.14px", height: "9.14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.14" height="9.14" viewBox="0 0 9.14 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 C9.14 7.09394 7.09394 9.14 4.57 9.14 C2.04606 9.14 0 7.09394 0 4.57 C0 2.04606 2.04606 0 4.57 0 C7.09394 0 9.14 2.04606 9.14 4.57 Z" fill="#15b392"/></svg>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Highly engaged</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#666d80" }}>4,280</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>23%</p>
            </div>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "9.14px", height: "9.14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.14" height="9.14" viewBox="0 0 9.14 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 C9.14 7.09394 7.09394 9.14 4.57 9.14 C2.04606 9.14 0 7.09394 0 4.57 C0 2.04606 2.04606 0 4.57 0 C7.09394 0 9.14 2.04606 9.14 4.57 Z" fill="#4d98fe"/></svg>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Engaged</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#666d80" }}>8,624</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>47%</p>
            </div>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "9.14px", height: "9.14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.14" height="9.14" viewBox="0 0 9.14 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 C9.14 7.09394 7.09394 9.14 4.57 9.14 C2.04606 9.14 0 7.09394 0 4.57 C0 2.04606 2.04606 0 4.57 0 C7.09394 0 9.14 2.04606 9.14 4.57 Z" fill="#ff9b22"/></svg>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>At risk</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#666d80" }}>3,206</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>17%</p>
            </div>
            <div data-fu="row" style={{ width: "324.74px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "9.14px", height: "9.14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.14" height="9.14" viewBox="0 0 9.14 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 C9.14 7.09394 7.09394 9.14 4.57 9.14 C2.04606 9.14 0 7.09394 0 4.57 C0 2.04606 2.04606 0 4.57 0 C7.09394 0 9.14 2.04606 9.14 4.57 Z" fill="#cfcfd4"/></svg>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Dormant</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#666d80" }}>2,310</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>13%</p>
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
