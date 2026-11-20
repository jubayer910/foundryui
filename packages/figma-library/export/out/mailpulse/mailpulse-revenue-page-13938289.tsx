"use client";
// Revenue page (mailpulse, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Category as CategorySolid } from "ingotui-icons/react/solid";
import { AlertTriangle as AlertTriangleBulk, BuildingBank as BuildingBankBulk, ChartBar as ChartBarBulk, File as FileBulk, Filter as FilterBulk, Heart as HeartBulk, Send as SendBulk, Settings as SettingsBulk, Star as StarBulk, User as UserBulk, Users as UsersBulk, Wallet as WalletBulk } from "ingotui-icons/react/bulk";
import { Bell, BuildingBank, Calendar, ChevronDown, ChevronRight, Coins, Dots, Moneybag, Refresh, Search, Tag, TrendingUp, UserMinus } from "ingotui-icons/react/stroke-rounded";

export function RevenuePage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1316px", height: "933.08px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "224.82px", height: "933.08px", background: "#f5f5f5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "18.28px", top: "19.52px", width: "101.18px", height: "21.27px", display: "flex", flexDirection: "row", gap: "21.27px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.91px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.27px", height: "21.27px", flexShrink: 0, borderRadius: "4.91px", background: "#000000", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "23.76px", height: "23.76px", background: "linear-gradient(177.6deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.2%)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "3.68px", top: "6.95px", width: "14.63px", height: "7.41px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14.63" height="7.41" viewBox="0 0 14.63 7.41" fill="none" overflow="visible"><defs><linearGradient id="g12_xz2e" gradientUnits="userSpaceOnUse" x1="7.78" y1="2.83" x2="7.78" y2="10.24"><stop offset="0" stopColor="#ffffff" stopOpacity="0.8"/><stop offset="1" stopColor="#ffffff" stopOpacity="0.5"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M4.93064 5.38145 L6.3234 6.77421 C7.17095 7.62177 8.54511 7.62177 9.39267 6.77421 C9.67219 6.49469 9.85953 6.15789 9.95468 5.80159 L10.9273 6.77421 C11.7749 7.62177 13.149 7.62177 13.9966 6.77421 C14.8441 5.92665 14.8441 4.55249 13.9966 3.70494 L10.9273 0.635667 C10.0797 -0.211889 8.70559 -0.211889 7.85803 0.635667 C7.57851 0.915191 7.39117 1.25199 7.29602 1.60829 L6.32339 0.635667 C5.47584 -0.211889 4.10168 -0.211889 3.25412 0.635668 L0.728368 3.16142 C-0.242789 4.13258 -0.242789 5.70714 0.728368 6.6783 C1.69953 7.64946 3.27409 7.64946 4.24524 6.6783 C4.61288 6.31066 4.84134 5.85656 4.93064 5.38145 Z M4.02144 1.40299 C3.59766 0.979208 4.44522 0.979208 4.02144 1.40299 C3.59785 1.82658 3.59821 0.979164 4.02144 1.40299 C4.44522 1.82676 3.59766 1.82676 4.02144 1.40299 C4.44499 0.979433 4.44454 1.82682 4.02144 1.40299 Z M1.49569 3.92874 C0.948307 4.47612 0.948306 3.43136 1.49569 3.97874 C0.948307 4.52612 2.04307 4.52612 1.49569 3.97874 C2.04307 3.43136 2.04307 4.47612 1.49569 3.92874 Z M8.62445 2.93672 C8.20157 2.51287 8.20097 3.3602 8.62445 2.93672 C9.04823 2.51294 8.20067 2.51294 8.62445 2.93672 C9.04823 3.3605 9.04823 2.51294 8.62445 2.93672 C8.20067 3.3605 9.04823 3.3605 8.62445 2.93672 Z" fill="url(#g12_xz2e)" fillRule="evenodd"/></svg>
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
              <div data-fu="row" style={{ width: "193.74px", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", background: "#ececed", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "148.96px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <WalletBulk size={12.8} strokeWidth={3.43} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "52px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Revenue</p>
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
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Revenue</p>
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Revenue</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "342px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Paid subscriptions, sponsorships and digital products.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>This month</p>
              <ChevronDown size={12.8} strokeWidth={2.81} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <BuildingBank size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Payouts</p>
            </div>
            <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "91.39px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.31px 10.97px 7.31px 10.97px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Tag size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff" }}>Create offer</p>
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
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "5.48px", background: "#2dd411", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Moneybag size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "173.64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>Total revenue</p>
                  <Dots size={21.9} style={{ width: "21.93px", height: "21.93px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
                </div>
                <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "33px", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#222222" }}>$8,460</p>
                  </div>
                  <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.2 2.799)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#15b392"/><path transform="matrix(1 0 0 1 8.396 2.799)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#15b392"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#15b392", lineHeight: "1.350000023841858" }}>+5.8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "165px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>Paid, sponsors and products</p>
              </div>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "285.13px", top: "16.45px", width: "230.3px", height: "120.37px", display: "flex", flexDirection: "column", gap: "31.99px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "5.48px", background: "#7c53f9", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <TrendingUp size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "173.64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>MRR</p>
                  <Dots size={21.9} style={{ width: "21.93px", height: "21.93px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
                </div>
                <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "33px", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#222222" }}>$5,240</p>
                  </div>
                  <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.2 2.799)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#15b392"/><path transform="matrix(1 0 0 1 8.396 2.799)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#15b392"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#15b392", lineHeight: "1.350000023841858" }}>+6.4%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>From 1,284 paid members</p>
              </div>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "553.82px", top: "16.45px", width: "230.3px", height: "120.37px", display: "flex", flexDirection: "column", gap: "31.99px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "5.48px", background: "#ff9b22", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Coins size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "173.64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>ARPU</p>
                  <Dots size={21.9} style={{ width: "21.93px", height: "21.93px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
                </div>
                <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "33px", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#222222" }}>$4.08</p>
                  </div>
                  <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.2 2.799)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#15b392"/><path transform="matrix(1 0 0 1 8.396 2.799)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#15b392"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#15b392", lineHeight: "1.350000023841858" }}>+0.9%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>Per paid member / month</p>
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
                  <p style={{ width: "173.64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>Paid churn</p>
                  <Dots size={21.9} style={{ width: "21.93px", height: "21.93px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
                </div>
                <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "33px", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#222222" }}>2.1%</p>
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
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>27 cancellations</p>
              </div>
              <Refresh size={16.5} strokeWidth={1.99} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "721.97px", top: "241.27px", width: "0.91px", height: "352.76px", background: "#eeeeee" }} />
        <div style={{ position: "absolute", left: "0px", top: "594.03px", width: "1072.91px", height: "0.91px", background: "#eeeeee" }} />
        <div style={{ position: "absolute", left: "16.45px", top: "257.72px", width: "689.07px", height: "319.86px", display: "flex", flexDirection: "column", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "689.07px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Revenue over time</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "190px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Monthly revenue by source, 2026.</p>
            </div>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "41px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Monthly</p>
              <ChevronDown size={12.8} strokeWidth={2.81} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "18.28px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "9.14px", height: "9.14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.14" height="9.14" viewBox="0 0 9.14 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 C9.14 7.09394 7.09394 9.14 4.57 9.14 C2.04606 9.14 0 7.09394 0 4.57 C0 2.04606 2.04606 0 4.57 0 C7.09394 0 9.14 2.04606 9.14 4.57 Z" fill="#a4e35a"/><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 L8.92 4.57 C8.92 6.97244 6.97244 8.92 4.57 8.92 L4.57 9.14 L4.57 9.36 C7.21544 9.36 9.36 7.21544 9.36 4.57 L9.14 4.57 Z M4.57 9.14 L4.57 8.92 C2.16756 8.92 0.22 6.97244 0.22 4.57 L0 4.57 L-0.22 4.57 C-0.22 7.21544 1.92456 9.36 4.57 9.36 L4.57 9.14 Z M0 4.57 L0.22 4.57 C0.22 2.16756 2.16756 0.22 4.57 0.22 L4.57 0 L4.57 -0.22 C1.92456 -0.22 -0.22 1.92456 -0.22 4.57 L0 4.57 Z M4.57 0 L4.57 0.22 C6.97244 0.22 8.92 2.16756 8.92 4.57 L9.14 4.57 L9.36 4.57 C9.36 1.92456 7.21544 -0.22 4.57 -0.22 L4.57 0 Z" fill="#d6d6d6"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Paid subscriptions</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "9.14px", height: "9.14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.14" height="9.14" viewBox="0 0 9.14 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 C9.14 7.09394 7.09394 9.14 4.57 9.14 C2.04606 9.14 0 7.09394 0 4.57 C0 2.04606 2.04606 0 4.57 0 C7.09394 0 9.14 2.04606 9.14 4.57 Z" fill="#f6ba64"/><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 L8.92 4.57 C8.92 6.97244 6.97244 8.92 4.57 8.92 L4.57 9.14 L4.57 9.36 C7.21544 9.36 9.36 7.21544 9.36 4.57 L9.14 4.57 Z M4.57 9.14 L4.57 8.92 C2.16756 8.92 0.22 6.97244 0.22 4.57 L0 4.57 L-0.22 4.57 C-0.22 7.21544 1.92456 9.36 4.57 9.36 L4.57 9.14 Z M0 4.57 L0.22 4.57 C0.22 2.16756 2.16756 0.22 4.57 0.22 L4.57 0 L4.57 -0.22 C1.92456 -0.22 -0.22 1.92456 -0.22 4.57 L0 4.57 Z M4.57 0 L4.57 0.22 C6.97244 0.22 8.92 2.16756 8.92 4.57 L9.14 4.57 L9.36 4.57 C9.36 1.92456 7.21544 -0.22 4.57 -0.22 L4.57 0 Z" fill="#d6d6d6"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Sponsorships</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "9.14px", height: "9.14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.14" height="9.14" viewBox="0 0 9.14 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 C9.14 7.09394 7.09394 9.14 4.57 9.14 C2.04606 9.14 0 7.09394 0 4.57 C0 2.04606 2.04606 0 4.57 0 C7.09394 0 9.14 2.04606 9.14 4.57 Z" fill="#529bfe"/><path transform="matrix(1 0 0 1 0 0)" d="M9.14 4.57 L8.92 4.57 C8.92 6.97244 6.97244 8.92 4.57 8.92 L4.57 9.14 L4.57 9.36 C7.21544 9.36 9.36 7.21544 9.36 4.57 L9.14 4.57 Z M4.57 9.14 L4.57 8.92 C2.16756 8.92 0.22 6.97244 0.22 4.57 L0 4.57 L-0.22 4.57 C-0.22 7.21544 1.92456 9.36 4.57 9.36 L4.57 9.14 Z M0 4.57 L0.22 4.57 C0.22 2.16756 2.16756 0.22 4.57 0.22 L4.57 0 L4.57 -0.22 C1.92456 -0.22 -0.22 1.92456 -0.22 4.57 L0 4.57 Z M4.57 0 L4.57 0.22 C6.97244 0.22 8.92 2.16756 8.92 4.57 L9.14 4.57 L9.36 4.57 C9.36 1.92456 7.21544 -0.22 4.57 -0.22 L4.57 0 Z" fill="#d6d6d6"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Digital products</p>
            </div>
          </div>
          <div style={{ width: "689.07px", height: "237.62px", flexShrink: 0, position: "relative" }}>
            <svg style={{ position: "absolute", left: "46px", top: "8.5px", width: "643.07px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.07" height="1" viewBox="0 0 643.07 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.0700073242188 0" fill="none" stroke="#eeeeee" strokeWidth="0.9100000262260437" strokeDasharray="3.6600000858306885 3.6600000858306885" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "0px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>$10k</p>
            <svg style={{ position: "absolute", left: "46px", top: "59.38px", width: "643.07px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.07" height="1" viewBox="0 0 643.07 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.0700073242188 0" fill="none" stroke="#eeeeee" strokeWidth="0.9100000262260437" strokeDasharray="3.6600000858306885 3.6600000858306885" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "0px", top: "50.88px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>$7.5k</p>
            <svg style={{ position: "absolute", left: "46px", top: "110.26px", width: "643.07px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.07" height="1" viewBox="0 0 643.07 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.0700073242188 0" fill="none" stroke="#eeeeee" strokeWidth="0.9100000262260437" strokeDasharray="3.6600000858306885 3.6600000858306885" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "0px", top: "101.76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>$5k</p>
            <svg style={{ position: "absolute", left: "46px", top: "161.15px", width: "643.07px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.07" height="1" viewBox="0 0 643.07 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.0700073242188 0" fill="none" stroke="#eeeeee" strokeWidth="0.9100000262260437" strokeDasharray="3.6600000858306885 3.6600000858306885" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "0px", top: "152.65px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>$2.5k</p>
            <div style={{ position: "absolute", left: "46px", top: "212.03px", width: "643.07px", height: "0.91px", background: "#eeeeee" }} />
            <p style={{ position: "absolute", left: "0px", top: "203.53px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>$0</p>
            <div style={{ position: "absolute", left: "57.79px", top: "128.58px", width: "30px", height: "83.45px" }}>
              <div style={{ position: "absolute", left: "0px", top: "31.49px", width: "30px", height: "51.95px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "11.14px", width: "30px", height: "17.61px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "8.4px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
            </div>
            <p style={{ position: "absolute", left: "61.29px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Jan</p>
            <div style={{ position: "absolute", left: "111.38px", top: "125.73px", width: "30px", height: "86.3px" }}>
              <div style={{ position: "absolute", left: "0px", top: "31.09px", width: "30px", height: "55.21px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "12.77px", width: "30px", height: "15.58px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "10.03px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
            </div>
            <p style={{ position: "absolute", left: "115.38px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Feb</p>
            <div style={{ position: "absolute", left: "164.97px", top: "117.19px", width: "30px", height: "94.84px" }}>
              <div style={{ position: "absolute", left: "0px", top: "34.95px", width: "30px", height: "59.89px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "10.53px", width: "30px", height: "21.68px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "7.79px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
            </div>
            <p style={{ position: "absolute", left: "168.47px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Mar</p>
            <div style={{ position: "absolute", left: "218.56px", top: "113.32px", width: "30px", height: "98.71px" }}>
              <div style={{ position: "absolute", left: "0px", top: "35.36px", width: "30px", height: "63.35px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "13.99px", width: "30px", height: "18.63px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "11.25px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
            </div>
            <p style={{ position: "absolute", left: "223.06px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Apr</p>
            <div style={{ position: "absolute", left: "272.15px", top: "102.94px", width: "30px", height: "109.09px" }}>
              <div style={{ position: "absolute", left: "0px", top: "40.85px", width: "30px", height: "68.24px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "12.36px", width: "30px", height: "25.75px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "9.62px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
            </div>
            <p style={{ position: "absolute", left: "274.65px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>May</p>
            <div style={{ position: "absolute", left: "325.74px", top: "98.87px", width: "30px", height: "113.16px" }}>
              <div style={{ position: "absolute", left: "0px", top: "41.06px", width: "30px", height: "72.1px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "15.62px", width: "30px", height: "22.7px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "12.88px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
            </div>
            <p style={{ position: "absolute", left: "329.24px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Jun</p>
            <div style={{ position: "absolute", left: "379.33px", top: "91.95px", width: "30px", height: "120.08px" }}>
              <div style={{ position: "absolute", left: "0px", top: "44.31px", width: "30px", height: "75.77px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "13.79px", width: "30px", height: "27.79px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "11.05px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
            </div>
            <p style={{ position: "absolute", left: "384.83px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Jul</p>
            <div style={{ position: "absolute", left: "432.92px", top: "89.1px", width: "30px", height: "122.93px" }}>
              <div style={{ position: "absolute", left: "0px", top: "43.3px", width: "30px", height: "79.63px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "16.84px", width: "30px", height: "23.72px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "14.1px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
            </div>
            <p style={{ position: "absolute", left: "435.92px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Aug</p>
            <div style={{ position: "absolute", left: "486.51px", top: "73.22px", width: "30px", height: "138.81px" }}>
              <div style={{ position: "absolute", left: "0px", top: "53.68px", width: "30px", height: "85.13px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "18.06px", width: "30px", height: "32.88px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "15.32px", borderRadius: "4.57px", background: "#529bfe" }} />
            </div>
            <p style={{ position: "absolute", left: "489.51px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Sep</p>
            <div style={{ position: "absolute", left: "540.1px", top: "65.9px", width: "30px", height: "146.13px" }}>
              <div style={{ position: "absolute", left: "0px", top: "55.51px", width: "30px", height: "90.63px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "16.84px", width: "30px", height: "35.93px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "14.1px", borderRadius: "4.57px", background: "rgba(82, 155, 254, 0.7)" }} />
            </div>
            <p style={{ position: "absolute", left: "544.1px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Oct</p>
            <div style={{ position: "absolute", left: "593.69px", top: "49.21px", width: "30px", height: "162.82px" }}>
              <div style={{ position: "absolute", left: "0px", top: "63.85px", width: "30px", height: "98.97px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "22.13px", width: "30px", height: "38.98px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "19.39px", borderRadius: "4.57px", background: "#529bfe" }} />
            </div>
            <p style={{ position: "absolute", left: "596.69px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Nov</p>
            <div style={{ position: "absolute", left: "647.28px", top: "39.84px", width: "30px", height: "172.19px" }}>
              <div style={{ position: "absolute", left: "0px", top: "66.91px", width: "30px", height: "105.28px", borderRadius: "4.57px", background: "linear-gradient(0deg, #a3e357 0%, #b0e770 85%, #d6ffa6 100%)" }} />
              <div style={{ position: "absolute", left: "0px", top: "22.54px", width: "30px", height: "41.63px", borderRadius: "4.57px", background: "#f6ba64" }} />
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "19.8px", borderRadius: "4.57px", background: "#529bfe" }} />
            </div>
            <p style={{ position: "absolute", left: "650.28px", top: "219.34px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>Dec</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "738.42px", top: "257.72px", width: "318.03px", height: "310.78px", display: "flex", flexDirection: "column", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Plans</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>1,284 paid members</p>
          </div>
          <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Monthly</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>$5/mo</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>$2,810/mo</p>
                </div>
                <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>562 members</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>54% of MRR</p>
                </div>
              </div>
              <div style={{ width: "318.03px", height: "5.48px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "170.55px", height: "5.48px", borderRadius: "2.74px", background: "rgba(164, 227, 90, 0.7)" }} />
              </div>
            </div>
            <div style={{ width: "318.03px", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Annual</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>$36/yr</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>$1,956/mo</p>
                </div>
                <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>652 members</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>37% of MRR</p>
                </div>
              </div>
              <div style={{ width: "318.03px", height: "5.48px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "118.72px", height: "5.48px", borderRadius: "2.74px", background: "rgba(164, 227, 90, 0.7)" }} />
              </div>
            </div>
            <div style={{ width: "318.03px", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Founding</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>$81/yr</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>$474/mo</p>
                </div>
                <div style={{ width: "318.03px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>70 members</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>9% of MRR</p>
                </div>
              </div>
              <div style={{ width: "318.03px", height: "5.48px", flexShrink: 0, borderRadius: "2.74px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "28.77px", height: "5.48px", borderRadius: "2.74px", background: "rgba(164, 227, 90, 0.7)" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "318.03px", flexShrink: 0, borderRadius: "12.79px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "11.88px 13.7px 11.88px 13.7px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <BuildingBankBulk size={14.6} strokeWidth={2.01} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Next payout</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>$6,912 on Dec 31</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Mercury ···· 4821</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "16.45px", top: "610.48px", width: "1040.92px", height: "29.24px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "139px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Recent transactions</p>
          </div>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>View all</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "654.34px", width: "1072.91px", height: "296.99px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "1072.91px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "300px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Customer</p>
            </div>
            <div style={{ width: "150px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Type</p>
            </div>
            <div style={{ width: "220px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Item</p>
            </div>
            <div style={{ width: "120px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Amount</p>
            </div>
            <div style={{ width: "120px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Date</p>
            </div>
            <div style={{ width: "120px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Status</p>
            </div>
            <div style={{ width: "42.91px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, height: "17px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
          <div data-fu="row" style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "300px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(124, 83, 249, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#7c53f9" }}>MC</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Maya Chen</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>maya@mayachen.studio</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Subscription</p>
              </div>
            </div>
            <div style={{ width: "220px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Annual plan</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>$36.00</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 22 · 9:41 AM</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Paid</p>
              </div>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div data-fu="row" style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "300px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg width={14.6} height={14.6} viewBox="0 0 24 24" style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }}><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="currentColor" /></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Notion</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>partnerships@notion.so</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f4f0ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#7c53f9"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "65px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#7c53f9", lineHeight: "1.4600000381469727" }}>Sponsorship</p>
              </div>
            </div>
            <div style={{ width: "220px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Sponsor Spotlight, Dec 26</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>$1,200.00</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 21 · 4:05 PM</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#fff8eb", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#c27c0e"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#c27c0e", lineHeight: "1.4600000381469727" }}>Pending</p>
              </div>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div data-fu="row" style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "300px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(255, 155, 34, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#ff9b22" }}>LW</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Liam Walker</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>liam.walker@hey.com</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#4e57ed"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed", lineHeight: "1.4600000381469727" }}>Product</p>
              </div>
            </div>
            <div style={{ width: "220px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Creator Kit 2027</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>$29.00</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 21 · 11:18 AM</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Paid</p>
              </div>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div data-fu="row" style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "300px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#4d98fe" }}>HS</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Hana Sato</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>hana.sato@fastmail.com</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Subscription</p>
              </div>
            </div>
            <div style={{ width: "220px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Founding plan</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>$81.00</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 20 · 8:02 PM</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Paid</p>
              </div>
            </div>
            <div style={{ width: "42.91px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div data-fu="row" style={{ width: "1072.91px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "300px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "10.97px", background: "rgba(45, 212, 17, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "11px", fontFamily: "'Geist'", fontSize: "8.77px", fontWeight: 500, color: "#2dd411" }}>DO</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Daniel Okafor</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>d.okafor@gmail.com</p>
                </div>
              </div>
            </div>
            <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Subscription</p>
              </div>
            </div>
            <div style={{ width: "220px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Monthly plan</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>$5.00</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Dec 19 · 7:26 AM</p>
            </div>
            <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#e5484d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e5484d", lineHeight: "1.4600000381469727" }}>Refunded</p>
              </div>
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
