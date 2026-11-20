"use client";
// Segments page (mailpulse, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Category as CategorySolid } from "ingotui-icons/react/solid";
import { AlertTriangle as AlertTriangleBulk, ChartBar as ChartBarBulk, File as FileBulk, Filter as FilterBulk, Heart as HeartBulk, Rocket as RocketBulk, Send as SendBulk, Settings as SettingsBulk, Sparkles as SparklesBulk, Star as StarBulk, Timer as TimerBulk, User as UserBulk, Users as UsersBulk, Wallet as WalletBulk } from "ingotui-icons/react/bulk";
import { AdjustmentsHorizontal, ArrowUpDown, Bell, ChevronRight, Dots, Plus, Search, Stack2 } from "ingotui-icons/react/stroke-rounded";

export function SegmentsPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1316px", height: "933.08px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "224.82px", height: "933.08px", background: "#f5f5f5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "18.28px", top: "19.52px", width: "101.18px", height: "21.27px", display: "flex", flexDirection: "row", gap: "21.27px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.91px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.27px", height: "21.27px", flexShrink: 0, borderRadius: "4.91px", background: "#000000", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "23.76px", height: "23.76px", background: "linear-gradient(177.6deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.2%)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "3.68px", top: "6.95px", width: "14.63px", height: "7.41px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14.63" height="7.41" viewBox="0 0 14.63 7.41" fill="none" overflow="visible"><defs><linearGradient id="g8_xxa8" gradientUnits="userSpaceOnUse" x1="7.78" y1="2.83" x2="7.78" y2="10.24"><stop offset="0" stopColor="#ffffff" stopOpacity="0.8"/><stop offset="1" stopColor="#ffffff" stopOpacity="0.5"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M4.93064 5.38145 L6.3234 6.77421 C7.17095 7.62177 8.54511 7.62177 9.39267 6.77421 C9.67219 6.49469 9.85953 6.15789 9.95468 5.80159 L10.9273 6.77421 C11.7749 7.62177 13.149 7.62177 13.9966 6.77421 C14.8441 5.92665 14.8441 4.55249 13.9966 3.70494 L10.9273 0.635667 C10.0797 -0.211889 8.70559 -0.211889 7.85803 0.635667 C7.57851 0.915191 7.39117 1.25199 7.29602 1.60829 L6.32339 0.635667 C5.47584 -0.211889 4.10168 -0.211889 3.25412 0.635668 L0.728368 3.16142 C-0.242789 4.13258 -0.242789 5.70714 0.728368 6.6783 C1.69953 7.64946 3.27409 7.64946 4.24524 6.6783 C4.61288 6.31066 4.84134 5.85656 4.93064 5.38145 Z M4.02144 1.40299 C3.59766 0.979208 4.44522 0.979208 4.02144 1.40299 C3.59785 1.82658 3.59821 0.979164 4.02144 1.40299 C4.44522 1.82676 3.59766 1.82676 4.02144 1.40299 C4.44499 0.979433 4.44454 1.82682 4.02144 1.40299 Z M1.49569 3.92874 C0.948307 4.47612 0.948306 3.43136 1.49569 3.97874 C0.948307 4.52612 2.04307 4.52612 1.49569 3.97874 C2.04307 3.43136 2.04307 4.47612 1.49569 3.92874 Z M8.62445 2.93672 C8.20157 2.51287 8.20097 3.3602 8.62445 2.93672 C9.04823 2.51294 8.20067 2.51294 8.62445 2.93672 C9.04823 3.3605 9.04823 2.51294 8.62445 2.93672 C8.20067 3.3605 9.04823 3.3605 8.62445 2.93672 Z" fill="url(#g8_xxa8)" fillRule="evenodd"/></svg>
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
              <div data-fu="row" style={{ width: "193.74px", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "148.96px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <UserBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Audience</p>
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
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", background: "#ececed", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <FilterBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Segments</p>
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
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Segments</p>
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Segments</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "284px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Group readers by behaviour, plan and profile.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Stack2 size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Templates</p>
            </div>
            <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "91.39px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.31px 10.97px 7.31px 10.97px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Plus size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff" }}>New segment</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "85.91px", width: "1072.91px", height: "153.35px", boxShadow: "inset 0 0.91px 0 0 #eeeeee, inset 0 -0.91px 0 0 #eeeeee", display: "flex", flexDirection: "column", padding: "13.7px 16.45px 15.53px 16.45px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <SparklesBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Suggested for you</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "142px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>Based on the last 90 days</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>View all suggestions</p>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#222222", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "13.7px 13.7px 13.7px 13.7px", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32.9px", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(21, 179, 146, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <RocketBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#15b392", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Likely to upgrade</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>642 readers</p>
                </div>
                <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Plus size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Create</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6.4px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #eeeeee", display: "flex", flexDirection: "row", padding: "6.39px 8.22px 6.39px 8.22px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <FilterBulk size={11.9} style={{ width: "11.88px", height: "11.88px", flexShrink: 0, color: "#989898", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "205px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>Opened 5+ issues and visited /pricing</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "13.7px 13.7px 13.7px 13.7px", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32.9px", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(255, 155, 34, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <TimerBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#ff9b22", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Going quiet</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>1,108 readers</p>
                </div>
                <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Plus size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Create</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6.4px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #eeeeee", display: "flex", flexDirection: "row", padding: "6.39px 8.22px 6.39px 8.22px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <FilterBulk size={11.9} style={{ width: "11.88px", height: "11.88px", flexShrink: 0, color: "#989898", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "209px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>No opens in 30 days after being active</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "13.7px 13.7px 13.7px 13.7px", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32.9px", height: "32.9px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(124, 83, 249, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <HeartBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Superfans</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>380 readers</p>
                </div>
                <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Plus size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Create</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6.4px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #eeeeee", display: "flex", flexDirection: "row", padding: "6.39px 8.22px 6.39px 8.22px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <FilterBulk size={11.9} style={{ width: "11.88px", height: "11.88px", flexShrink: 0, color: "#989898", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "146px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>Referred 2 or more readers</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "16.45px", top: "252.05px", width: "1040.92px", height: "31.07px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "8.22px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.74px 2.74px 2.74px 2.74px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "4.57px 9.14px 4.57px 9.14px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#000000" }}>All</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>8</p>
            </div>
            <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "4.57px 9.14px 4.57px 9.14px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6c6c6c" }}>Created by me</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>3</p>
            </div>
            <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "4.57px 9.14px 4.57px 9.14px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6c6c6c" }}>Shared with team</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>5</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="field" style={{ width: "210px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>Search segments</p>
              <div style={{ flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.82px 5.48px 1.82px 5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist Mono'", fontSize: "10.05px", fontWeight: 400, color: "#6c6c6c" }}>/</p>
              </div>
            </div>
            <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <AdjustmentsHorizontal size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Filter</p>
            </div>
            <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ArrowUpDown size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "74px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Largest first</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "295.91px", width: "1072.91px", height: "447.77px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "1072.91px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "310px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Segment</p>
            </div>
            <div style={{ width: "150px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Subscribers</p>
            </div>
            <div style={{ width: "150px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>30-day trend</p>
            </div>
            <div style={{ width: "180px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Used in</p>
            </div>
            <div style={{ width: "110px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Updated</p>
            </div>
            <div style={{ width: "130px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Owner</p>
            </div>
            <div style={{ width: "42.91px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }} />
          </div>
          <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "310px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8.23px", height: "8.23px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8.23" height="8.23" viewBox="0 0 8.23 8.23" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8.23 4.115 C8.23 6.38765 6.38765 8.23 4.115 8.23 C1.84235 8.23 0 6.38765 0 4.115 C0 1.84235 1.84235 0 4.115 0 C6.38765 0 8.23 1.84235 8.23 4.115 Z" fill="#7c53f9"/></svg>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Highly engaged</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "161px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Engagement score is at least 70</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "32px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>4,280</p>
              <div style={{ width: "45.69px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "10.62px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>23%</p>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#15b392" }}>+4%</p>
            </div>
            <div style={{ width: "180px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "139px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>3 campaigns · 1 automation</p>
            </div>
            <div style={{ width: "110px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>2h ago</p>
            </div>
            <div style={{ width: "130px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "10.06px", background: "rgba(124, 83, 249, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8.04px", fontWeight: 500, color: "#7c53f9" }}>AM</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Alex</p>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "310px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8.23px", height: "8.23px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8.23" height="8.23" viewBox="0 0 8.23 8.23" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8.23 4.115 C8.23 6.38765 6.38765 8.23 4.115 8.23 C1.84235 8.23 0 6.38765 0 4.115 C0 1.84235 1.84235 0 4.115 0 C6.38765 0 8.23 1.84235 8.23 4.115 Z" fill="#ff9b22"/></svg>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Paid members</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Plan is Paid or Founding</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "32px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>1,284</p>
              <div style={{ width: "45.69px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "3.18px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>7%</p>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#15b392" }}>+6%</p>
            </div>
            <div style={{ width: "180px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>5 campaigns · 2 automations</p>
            </div>
            <div style={{ width: "110px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Yesterday</p>
            </div>
            <div style={{ width: "130px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "10.06px", background: "rgba(255, 155, 34, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8.04px", fontWeight: 500, color: "#ff9b22" }}>MP</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Maya</p>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "310px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8.23px", height: "8.23px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8.23" height="8.23" viewBox="0 0 8.23 8.23" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8.23 4.115 C8.23 6.38765 6.38765 8.23 4.115 8.23 C1.84235 8.23 0 6.38765 0 4.115 C0 1.84235 1.84235 0 4.115 0 C6.38765 0 8.23 1.84235 8.23 4.115 Z" fill="#15b392"/></svg>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>New this month</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Joined in the last 30 days</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "32px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>1,146</p>
              <div style={{ width: "45.69px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "2.84px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>6%</p>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#15b392" }}>+12%</p>
            </div>
            <div style={{ width: "180px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>1 automation</p>
            </div>
            <div style={{ width: "110px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Dec 21</p>
            </div>
            <div style={{ width: "130px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "10.06px", background: "rgba(124, 83, 249, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8.04px", fontWeight: 500, color: "#7c53f9" }}>AM</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Alex</p>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "310px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8.23px", height: "8.23px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8.23" height="8.23" viewBox="0 0 8.23 8.23" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8.23 4.115 C8.23 6.38765 6.38765 8.23 4.115 8.23 C1.84235 8.23 0 6.38765 0 4.115 C0 1.84235 1.84235 0 4.115 0 C6.38765 0 8.23 1.84235 8.23 4.115 Z" fill="#e5484d"/></svg>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>At risk</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>No opens in 30–60 days</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "32px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>3,206</p>
              <div style={{ width: "45.69px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "7.95px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>17%</p>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e5484d" }}>+9%</p>
            </div>
            <div style={{ width: "180px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>1 automation</p>
            </div>
            <div style={{ width: "110px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Dec 19</p>
            </div>
            <div style={{ width: "130px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "10.06px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8.04px", fontWeight: 500, color: "#4d98fe" }}>SK</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Sam</p>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "310px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8.23px", height: "8.23px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8.23" height="8.23" viewBox="0 0 8.23 8.23" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8.23 4.115 C8.23 6.38765 6.38765 8.23 4.115 8.23 C1.84235 8.23 0 6.38765 0 4.115 C0 1.84235 1.84235 0 4.115 0 C6.38765 0 8.23 1.84235 8.23 4.115 Z" fill="#4d98fe"/></svg>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Tech readers</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Clicked links tagged #tech</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "32px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>5,920</p>
              <div style={{ width: "45.69px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "14.68px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>32%</p>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e5484d" }}>-2%</p>
            </div>
            <div style={{ width: "180px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>2 campaigns</p>
            </div>
            <div style={{ width: "110px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Dec 16</p>
            </div>
            <div style={{ width: "130px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "10.06px", background: "rgba(21, 179, 146, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8.04px", fontWeight: 500, color: "#15b392" }}>JL</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Jordan</p>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "310px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8.23px", height: "8.23px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8.23" height="8.23" viewBox="0 0 8.23 8.23" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8.23 4.115 C8.23 6.38765 6.38765 8.23 4.115 8.23 C1.84235 8.23 0 6.38765 0 4.115 C0 1.84235 1.84235 0 4.115 0 C6.38765 0 8.23 1.84235 8.23 4.115 Z" fill="#4d98fe"/></svg>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>US & Canada</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "180px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Location is United States or Canada</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "32px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>7,398</p>
              <div style={{ width: "45.69px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "18.35px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>40%</p>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#15b392" }}>+2%</p>
            </div>
            <div style={{ width: "180px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>1 campaign</p>
            </div>
            <div style={{ width: "110px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Dec 12</p>
            </div>
            <div style={{ width: "130px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "10.06px", background: "rgba(255, 155, 34, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8.04px", fontWeight: 500, color: "#ff9b22" }}>MP</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Maya</p>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "310px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8.23px", height: "8.23px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8.23" height="8.23" viewBox="0 0 8.23 8.23" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8.23 4.115 C8.23 6.38765 6.38765 8.23 4.115 8.23 C1.84235 8.23 0 6.38765 0 4.115 C0 1.84235 1.84235 0 4.115 0 C6.38765 0 8.23 1.84235 8.23 4.115 Z" fill="#7c53f9"/></svg>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Founding members</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Plan is Founding</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "32px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>70</p>
              <div style={{ width: "45.69px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "0.91px", height: "4.57px", borderRadius: "2.29px", background: "#7c53f9" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>{"<1%"}</p>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#989898" }}>0%</p>
            </div>
            <div style={{ width: "180px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "140px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>2 campaigns · 1 automation</p>
            </div>
            <div style={{ width: "110px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Nov 30</p>
            </div>
            <div style={{ width: "130px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "10.06px", background: "rgba(124, 83, 249, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8.04px", fontWeight: 500, color: "#7c53f9" }}>AM</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Alex</p>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "310px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8.23px", height: "8.23px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8.23" height="8.23" viewBox="0 0 8.23 8.23" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8.23 4.115 C8.23 6.38765 6.38765 8.23 4.115 8.23 C1.84235 8.23 0 6.38765 0 4.115 C0 1.84235 1.84235 0 4.115 0 C6.38765 0 8.23 1.84235 8.23 4.115 Z" fill="#a6a6a6"/></svg>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Never clicked</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>No clicks since joining</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "32px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>3,056</p>
              <div style={{ width: "45.69px", height: "4.57px", flexShrink: 0, borderRadius: "2.29px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "7.58px", height: "4.57px", borderRadius: "2.29px", background: "rgba(124, 83, 249, 0.7)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>17%</p>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.37px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "#f5f5f5" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                  <div style={{ width: "5px", height: "5px", flexShrink: 0, borderRadius: "1.39px", background: "rgba(124, 83, 249, 0.7)" }} />
                </div>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#15b392" }}>-5%</p>
            </div>
            <div style={{ width: "180px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#989898" }}>Not used yet</p>
            </div>
            <div style={{ width: "110px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Nov 22</p>
            </div>
            <div style={{ width: "130px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "10.06px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8.04px", fontWeight: 500, color: "#4d98fe" }}>SK</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Sam</p>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
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
