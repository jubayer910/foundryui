"use client";
// Numbers page (vantage, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Bell, Bolt, Briefcase, Bulb, Calendar, ChartLine, Checklist, ChevronDown, ChevronLeft, ChevronRight, FileInvoice, GitMerge, Home, InfoCircle, LayoutGrid, MessageCircle, Repeat, Search, Send, Share, Stack2, TrendingUp, User, UserPlus, UserSearch, Users } from "ingotui-icons/react/stroke-rounded";

export function NumbersPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1440px", height: "1083px", background: "#1a1a1a", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "238px", height: "1083px", boxShadow: "inset -1px 0 0 0 #000000, 1px 0px 0px 0px #232323", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "12px", top: "11px", width: "161px", height: "40px", display: "flex", flexDirection: "row", gap: "48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "6.96px", background: "#232323", backdropFilter: "blur(1.18px)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "10.5px", top: "21px", width: "5px", height: "9px", borderRadius: "2.5px", background: "#7b5bff" }} />
              <div style={{ position: "absolute", left: "17.5px", top: "16px", width: "5px", height: "14px", borderRadius: "2.5px", background: "#7b5bff" }} />
              <div style={{ position: "absolute", left: "24.5px", top: "10px", width: "5px", height: "20px", borderRadius: "2.5px", background: "#7b5bff" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ffffff", lineHeight: "1.399999976158142", letterSpacing: "-0.02em" }}>Vantage Admin</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Management</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "63px", width: "238px", height: "720px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "210px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "238px", height: "210px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "77px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>DASHBOARD</p>
                </div>
                <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <Home size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "37px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Home</p>
                      </div>
                      <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "20px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf", lineHeight: "12px", letterSpacing: "-0.02em" }}>241</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <Briefcase size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Business</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <UserSearch size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "113px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Customer insights</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <GitMerge size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "65px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Processes</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <Bulb size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "49px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>TEAM</p>
              </div>
              <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(90deg, rgba(123, 91, 255, 0.17) 0%, rgba(123, 91, 255, 0.04) 62%, rgba(123, 91, 255, 0) 100%), linear-gradient(#232323, #232323)", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <TrendingUp size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#7b5bff", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Numbers</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Users size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Customers</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <GitMerge size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "65px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Processes</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Bulb size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "49px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Insights</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Stack2 size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "69px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Collections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "95px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>PERFORMANCE</p>
              </div>
              <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Calendar size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "103px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Weekly numbers</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <ChartLine size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "98px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Weekly analysis</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <FileInvoice size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "85px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Subscriptions</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <TrendingUp size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "70px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Projections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>NETWORK</p>
              </div>
              <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Share size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "54px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Network</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Stack2 size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "64px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Boardplan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "15px", width: "1174px", height: "32px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, opacity: 0.5, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Home size={13} strokeWidth={2.4} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Team</p>
          </div>
          <ChevronRight size={13} strokeWidth={2.77} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#dadada", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Numbers</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a", lineHeight: "15px" }}>08:10 AST</p>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <Bell size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#dadada", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "62px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "74px", width: "1174px", height: "58px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Numbers</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "390px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>MG1 per person and week · 241 people in 13 legs · W28 – W31</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "130px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>W31 · Jul 27 – Aug 2</p>
              <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "1px", width: "16px", height: "16px" }}>
                <ChevronRight size={16} strokeWidth={2.25} style={{ position: "absolute", left: "16px", top: "0px", width: "16px", height: "16px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#8a8a8a", display: "block", flexShrink: 0 }} />
              </div>
            </div>
          </div>
          <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "97px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <LayoutGrid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Columns</p>
              <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "1px", width: "16px", height: "16px" }}>
                <ChevronRight size={16} strokeWidth={2.25} style={{ position: "absolute", left: "16px", top: "0px", width: "16px", height: "16px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#8a8a8a", display: "block", flexShrink: 0 }} />
              </div>
            </div>
          </div>
          <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Send size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Request reports</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "144px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "156px", width: "285px", height: "38px", borderRadius: "8px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #191919, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <User size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ededed", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>By person</p>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Users size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>By leg</p>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>By week</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1021px", top: "159px", width: "405px", height: "32px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Leg: All</p>
          <ChevronDown size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Tier: All</p>
          <ChevronDown size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
        <div data-fu="field" style={{ width: "220px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#191919", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Search size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#5f5f5f" }}>Search 241 people</p>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#191919", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "row", padding: "2px 6px 2px 6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>/</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "204px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "204px", width: "1176px", height: "110px" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Positive messages</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>3,277</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <MessageCircle size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>-47%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>per person</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "228px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "240px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>MG1</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>1,002</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Bolt size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>-12.0%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs prior</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "468px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "480px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Follow ups</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>360</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Repeat size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+2.8%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs prior</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "708px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "720px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>New customers</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>128</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <UserPlus size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+19.1%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs prior</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "948px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "960px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Reporting</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>78.4%</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Checklist size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+3.2 pts</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>189 of 241</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "314px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "332px", width: "357px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "132px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>People numbers</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>MG1 per week</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>0</p>
          <div style={{ width: "14px", height: "10px", flexShrink: 0, borderRadius: "3px", background: "#202020", boxShadow: "inset 0 0 0 1px rgba(42, 42, 42, 0.9)" }} />
          <div style={{ width: "14px", height: "10px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.25) 0%, rgba(123, 91, 255, 0.31) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.16), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div style={{ width: "14px", height: "10px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.42) 0%, rgba(123, 91, 255, 0.51) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.21), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div style={{ width: "14px", height: "10px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.71) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.26), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div style={{ width: "14px", height: "10px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>12+</p>
          <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>W31 runs to Sun Aug 2</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1229px", top: "336px", width: "197px", height: "16px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "155px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Showing 9 of 241 · sorted by</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>MG1 ↓</p>
      </div>
      <div style={{ position: "absolute", left: "239px", top: "386px", width: "1190px", height: "636px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "1190px", height: "36px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222, inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Person</p>
          </div>
          <div style={{ width: "82px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>W28</p>
          </div>
          <div style={{ width: "82px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>W29</p>
          </div>
          <div style={{ width: "82px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>W30</p>
          </div>
          <div style={{ width: "82px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>W31</p>
            <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#e3b341"/></svg>
          </div>
          <div style={{ width: "100px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Messages</p>
          </div>
          <div style={{ width: "90px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>MG1</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#dadada" }}>↓</p>
          </div>
          <div style={{ width: "104px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Follow ups</p>
          </div>
          <div style={{ width: "104px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Customers</p>
          </div>
          <div style={{ width: "90px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>EFF</p>
            <InfoCircle size={10} strokeWidth={1.51} style={{ width: "10px", height: "10px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
          </div>
          <div style={{ width: "130px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>W30 report</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "1190px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#9c84ff" }}>AF</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Ana Lucía Ferreras</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Julio & Liz</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "25px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>12</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.71) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.26), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>9</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.7) 0%, rgba(123, 91, 255, 0.85) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.3), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "26.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>11</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.71) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.26), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>9</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>114</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>41</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>15</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>9</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>36.0%</p>
          </div>
          <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Sent</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Jul 26</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "1190px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(122, 162, 247, 0.14)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#9bb9f9" }}>WP</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Wander Polanco</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Julio & Liz</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.64) 0%, rgba(123, 91, 255, 0.78) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.28), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "25px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>10</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.53) 0%, rgba(123, 91, 255, 0.65) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>8</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.7) 0%, rgba(123, 91, 255, 0.85) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.3), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "26.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>11</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.71) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.26), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>9</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>112</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>38</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>13</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>8</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>33.9%</p>
          </div>
          <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Sent</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Jul 26</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "1190px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ec80b4" }}>YR</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Yokasta Rosario</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Julio & Liz</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.47) 0%, rgba(123, 91, 255, 0.58) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.23), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "28.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>7</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.71) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.26), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>9</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.64) 0%, rgba(123, 91, 255, 0.78) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.28), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "25px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>10</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.47) 0%, rgba(123, 91, 255, 0.58) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.23), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "28.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>7</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>105</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>33</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>12</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>6</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>31.4%</p>
          </div>
          <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Sent</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Jul 25</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "1190px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(227, 179, 65, 0.14)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#eac671" }}>RP</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Ramón Peralta</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Oscar & Nayrobi</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.71) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.26), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>9</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.53) 0%, rgba(123, 91, 255, 0.65) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>8</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.47) 0%, rgba(123, 91, 255, 0.58) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.23), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "28.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>7</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.42) 0%, rgba(123, 91, 255, 0.51) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.21), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>6</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>97</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>30</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>10</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>5</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>30.9%</p>
          </div>
          <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Sent</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Jul 26</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "1190px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(91, 201, 139, 0.14)", boxShadow: "inset 0 0 0 1px rgba(91, 201, 139, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#84d7a8" }}>FA</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Franklin Abreu</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Edwin & Wiliannys</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.42) 0%, rgba(123, 91, 255, 0.51) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.21), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>6</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.53) 0%, rgba(123, 91, 255, 0.65) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>8</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.71) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.26), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>9</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.36) 0%, rgba(123, 91, 255, 0.44) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>5</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>88</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>28</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>10</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>4</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>31.8%</p>
          </div>
          <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Sent</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Jul 24</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "1190px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(122, 162, 247, 0.14)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#9bb9f9" }}>KB</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Kelvin Batista</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Enmanuel & Suseidy</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.36) 0%, rgba(123, 91, 255, 0.44) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>5</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.31) 0%, rgba(123, 91, 255, 0.37) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>4</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.42) 0%, rgba(123, 91, 255, 0.51) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.21), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>6</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.36) 0%, rgba(123, 91, 255, 0.44) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>5</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>44</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>20</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>8</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>3</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>45.5%</p>
          </div>
          <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Sent</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Jul 26</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "1190px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#9c84ff" }}>MT</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Massiel Tejada</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Alberto & Ciany</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.31) 0%, rgba(123, 91, 255, 0.37) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>4</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.36) 0%, rgba(123, 91, 255, 0.44) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>5</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.42) 0%, rgba(123, 91, 255, 0.51) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.21), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>6</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.31) 0%, rgba(123, 91, 255, 0.37) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>4</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>62</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>19</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>7</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>3</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>30.6%</p>
          </div>
          <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Sent</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Jul 25</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "1190px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ec80b4" }}>YS</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Yudelka Sánchez</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Oscar & Nayrobi</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.53) 0%, rgba(123, 91, 255, 0.65) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>8</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.42) 0%, rgba(123, 91, 255, 0.51) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.21), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>6</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.25) 0%, rgba(123, 91, 255, 0.31) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.16), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>3</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "#202020", boxShadow: "inset 0 0 0 1px rgba(42, 42, 42, 0.9)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#5f5f5f" }}>0</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>71</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>17</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>5</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>2</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#f07178" }}>23.9%</p>
          </div>
          <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2d1a1c", boxShadow: "inset 0 0 0 1px #3d2326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f07178"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#f07178", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Missing</p>
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "1190px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(227, 179, 65, 0.14)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#eac671" }}>JM</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Johanna Mejía</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Carlos & Erody</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.25) 0%, rgba(123, 91, 255, 0.31) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.16), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>3</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.31) 0%, rgba(123, 91, 255, 0.37) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>4</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.19) 0%, rgba(123, 91, 255, 0.24) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.14), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>2</p>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "36px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "64px", height: "36px", borderRadius: "4px", background: "#202020", boxShadow: "inset 0 0 0 1px rgba(42, 42, 42, 0.9)" }} />
              <p style={{ position: "absolute", left: "27.5px", top: "9.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#5f5f5f" }}>0</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>38</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>9</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>3</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>1</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#f07178" }}>23.7%</p>
          </div>
          <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2d1a1c", boxShadow: "inset 0 0 0 1px #3d2326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f07178"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#f07178", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Missing</p>
            </div>
          </div>
        </div>
        <div style={{ width: "1190px", height: "60px", flexShrink: 0, background: "#191919", boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "244px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Network total</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>241 people</p>
                <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>+22 MG1 Jul 4–5</p>
              </div>
            </div>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>246</p>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>252</p>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>268</p>
          </div>
          <div style={{ width: "82px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>214</p>
          </div>
          <div style={{ width: "100px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>3,210</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>980</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>352</p>
          </div>
          <div style={{ width: "104px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>124</p>
          </div>
          <div style={{ width: "90px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>30.53%</p>
          </div>
          <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>189 / 241</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>78.4%</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "1036px", width: "1176px", height: "28px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "249px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>1–9 of 241 people · 52 missed the W30 report</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Page 1 of 27</p>
          <div data-fu="btn" style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronLeft size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
          </div>
          <div data-fu="btn" style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronRight size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dadada", display: "block" }} />
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
