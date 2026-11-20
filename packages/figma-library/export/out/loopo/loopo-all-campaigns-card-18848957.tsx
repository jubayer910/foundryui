"use client";
// All campaigns card (loopo, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight, DotsVertical, Search } from "ingotui-icons/react/stroke-rounded";
import { Calendar as CalendarBulk, Mail as MailBulk, MailPen as MailPenBulk, Package as PackageBulk } from "ingotui-icons/react/bulk";

export function AllCampaignsCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1245.74px", height: "780.09px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 23.01px 23.01px 23.01px", gap: "17.53px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>All campaigns</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "180px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>Newest first · showing 8 of 24</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "10.96px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.29px 3.29px 3.29px 3.29px", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#000000" }}>All</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>24</p>
          </div>
          <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Sent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>19</p>
          </div>
          <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Scheduled</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>2</p>
          </div>
          <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Drafts</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>3</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
        <div data-fu="field" style={{ width: "262.95px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Search size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>Search campaigns</p>
        </div>
        <div data-fu="btn" style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.77px 8.77px 8.77px 8.77px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Calendar size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Last 90 days</p>
          <ChevronDown size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "1201.92px", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#fafafa", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "340px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Campaign</p>
          </div>
          <div style={{ width: "130px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Status</p>
          </div>
          <div style={{ width: "200px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Send date</p>
          </div>
          <div style={{ width: "210px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Open rate</p>
          </div>
          <div style={{ width: "130px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Click rate</p>
          </div>
          <div style={{ width: "130px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Revenue</p>
          </div>
          <div style={{ width: "61.92px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "17px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "1201.92px", height: "61.36px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "340px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <PackageBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Last shipping day</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "175px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>17,980 contacts · All contacts</p>
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#edf2ff", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#2f66ff"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#2f66ff" }}>Scheduled</p>
            </div>
          </div>
          <div style={{ width: "200px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "7.67px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5.48px 9.87px 5.48px 9.87px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CalendarBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Fri, Dec 18 · 8:00 AM</p>
            </div>
          </div>
          <div style={{ width: "210px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
          </div>
          <div style={{ width: "61.92px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        </div>
        <div data-fu="row" style={{ width: "1201.92px", height: "61.36px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "340px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <PackageBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "185px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Harbor Club: December box</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "239px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>850 subscribers · Harbor Club members</p>
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#edf2ff", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#2f66ff"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#2f66ff" }}>Scheduled</p>
            </div>
          </div>
          <div style={{ width: "200px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "7.67px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5.48px 9.87px 5.48px 9.87px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CalendarBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Wed, Dec 16 · 9:00 AM</p>
            </div>
          </div>
          <div style={{ width: "210px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
          </div>
          <div style={{ width: "61.92px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        </div>
        <div data-fu="row" style={{ width: "1201.92px", height: "61.36px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "340px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <MailPenBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "153px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>New Year, New Kitchen</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "166px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>All contacts · not scheduled</p>
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f4f4f5", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#6c6c6c"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Draft</p>
            </div>
          </div>
          <div style={{ width: "200px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>Edited 2h ago</p>
          </div>
          <div style={{ width: "210px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
          </div>
          <div style={{ width: "61.92px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        </div>
        <div data-fu="row" style={{ width: "1201.92px", height: "61.36px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "340px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <MailBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Weekly notes #48</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Sent to 17,960 recipients</p>
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Sent</p>
            </div>
          </div>
          <div style={{ width: "200px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Wed, Dec 9 · 8:30 AM</p>
          </div>
          <div style={{ width: "210px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>47.9%</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>6.4%</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$1,240</p>
          </div>
          <div style={{ width: "61.92px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        </div>
        <div data-fu="row" style={{ width: "1201.92px", height: "61.36px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "340px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <MailBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Holiday Gift Guide</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Sent to 17,980 recipients</p>
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Sent</p>
            </div>
          </div>
          <div style={{ width: "200px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Wed, Dec 2 · 9:00 AM</p>
          </div>
          <div style={{ width: "210px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>52.4%</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>9.8%</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$6,120</p>
          </div>
          <div style={{ width: "61.92px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        </div>
        <div data-fu="row" style={{ width: "1201.92px", height: "61.36px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "340px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <MailBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Weekly notes #47</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Sent to 17,940 recipients</p>
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Sent</p>
            </div>
          </div>
          <div style={{ width: "200px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Wed, Dec 2 · 8:30 AM</p>
          </div>
          <div style={{ width: "210px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>46.8%</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>6.0%</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$980</p>
          </div>
          <div style={{ width: "61.92px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        </div>
        <div data-fu="row" style={{ width: "1201.92px", height: "61.36px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "340px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <MailBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Winter Restock</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Sent to 17,690 recipients</p>
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Sent</p>
            </div>
          </div>
          <div style={{ width: "200px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "149px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Sat, Nov 28 · 10:00 AM</p>
          </div>
          <div style={{ width: "210px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>49.3%</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>7.1%</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$2,860</p>
          </div>
          <div style={{ width: "61.92px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        </div>
        <div data-fu="row" style={{ width: "1201.92px", height: "61.36px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "340px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <MailBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Black Friday — 25% off</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Sent to 17,640 recipients</p>
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Sent</p>
            </div>
          </div>
          <div style={{ width: "200px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Fri, Nov 27 · 7:00 AM</p>
          </div>
          <div style={{ width: "210px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>58.1%</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>11.2%</p>
          </div>
          <div style={{ width: "130px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$11,480</p>
          </div>
          <div style={{ width: "61.92px", height: "61.36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "302px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>8 of 24 campaigns · 19 sent in the last 90 days</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>Page 1 of 3</p>
          <div data-fu="btn" style={{ width: "30.68px", height: "30.68px", flexShrink: 0, opacity: 0.5, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronLeft size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
          <div data-fu="btn" style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronRight size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
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
