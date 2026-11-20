"use client";
// Collections page (vantage, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Bell, Briefcase, Bulb, Calendar, ChartBar, ChartLine, ChevronRight, CircleCheck, Dots, FileInvoice, Folder, Folders, GitMerge, Home, LayoutGrid, List, Pin, School, Search, Share, SortDescending, Stack2, TrendingUp, UserSearch, Users } from "ingotui-icons/react/stroke-rounded";

export function CollectionsPage() {
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
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <TrendingUp size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
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
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(90deg, rgba(123, 91, 255, 0.17) 0%, rgba(123, 91, 255, 0.04) 62%, rgba(123, 91, 255, 0) 100%), linear-gradient(#232323, #232323)", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Stack2 size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#7b5bff", display: "block" }} />
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
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Collections</p>
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
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Collections</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "604px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>Saved reports, customer lists and training for the team · 14 collections · 6 shared with every leg</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "121px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <SortDescending size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "81px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Sort: Recent</p>
              <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "1px", width: "16px", height: "16px" }}>
                <ChevronRight size={16} strokeWidth={2.25} style={{ position: "absolute", left: "16px", top: "0px", width: "16px", height: "16px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#8a8a8a", display: "block", flexShrink: 0 }} />
              </div>
            </div>
          </div>
          <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Folder size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>New collection</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "144px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "156px", width: "409px", height: "40px", borderRadius: "8px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #191919, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Folders size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ededed", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>All</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>14</p>
          </div>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ChartBar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Reports</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>5</p>
          </div>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <List size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Lists</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>6</p>
          </div>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <School size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Training</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>3</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1094px", top: "159px", width: "332px", height: "32px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div data-fu="field" style={{ width: "260px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#191919", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Search size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#5f5f5f" }}>Search collections</p>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#191919", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "row", padding: "2px 6px 2px 6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>/</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "8px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "30px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #191919, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <LayoutGrid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ededed", display: "block" }} />
          </div>
          <div style={{ width: "30px", height: "28px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <List size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "204px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "220px", width: "381.3px", height: "268px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "369.3px", height: "132px", flexShrink: 0, borderRadius: "7px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "14px", top: "12px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Referral MG1 · Jul 1 – 31</p>
          <p style={{ position: "absolute", left: "14px", top: "36px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#ededed" }}>Ana Lucía Ferreras</p>
          <div data-fu="row" style={{ position: "absolute", left: "143px", top: "36px", width: "212px", height: "16px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "212px", height: "14px", borderRadius: "6px", background: "rgba(229, 85, 155, 0.12)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ec80b4" }}>18</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "173.45px", height: "14px", borderRadius: "6px", background: "linear-gradient(180deg, #e86ba8 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          </div>
          <p style={{ position: "absolute", left: "14px", top: "59px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#dadada" }}>Wander Polanco</p>
          <div data-fu="row" style={{ position: "absolute", left: "143px", top: "59px", width: "212px", height: "16px", opacity: 0.85 }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "184.55px", height: "14px", borderRadius: "6px", background: "rgba(229, 85, 155, 0.12)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ec80b4" }}>15</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "144.55px", height: "14px", borderRadius: "6px", background: "linear-gradient(180deg, #e86ba8 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          </div>
          <p style={{ position: "absolute", left: "14px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#dadada" }}>Yokasta Rosario</p>
          <div data-fu="row" style={{ position: "absolute", left: "143px", top: "82px", width: "212px", height: "16px", opacity: 0.85 }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "155.64px", height: "14px", borderRadius: "6px", background: "rgba(229, 85, 155, 0.12)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ec80b4" }}>12</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "115.64px", height: "14px", borderRadius: "6px", background: "linear-gradient(180deg, #e86ba8 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          </div>
          <p style={{ position: "absolute", left: "14px", top: "105px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#dadada" }}>Kelvin Ureña</p>
          <div data-fu="row" style={{ position: "absolute", left: "143px", top: "105px", width: "212px", height: "16px", opacity: 0.85 }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "126.73px", height: "14px", borderRadius: "6px", background: "rgba(229, 85, 155, 0.12)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ec80b4" }}>9</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "86.73px", height: "14px", borderRadius: "6px", background: "linear-gradient(180deg, #e86ba8 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 8px 0px 8px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Report</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>8 items</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Top referrers Q3</p>
          <p style={{ width: "353.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Members ranked by MG1 that came from referrals since Jul 1</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(123, 91, 255, 0.18), rgba(123, 91, 255, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(63, 179, 127, 0.18), rgba(63, 179, 127, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6fc69f" }}>JL</p>
              </div>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Updated 12 min ago</p>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "647.3px", top: "220px", width: "381.3px", height: "268px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "369.3px", height: "132px", flexShrink: 0, borderRadius: "7px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "14px", top: "12px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>At risk · last 12 weeks</p>
          <p style={{ position: "absolute", left: "14px", top: "28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "34px", fontFamily: "'Geist'", fontSize: "26px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.03em" }}>64</p>
          <div style={{ position: "absolute", left: "55px", top: "40px", width: "60px", height: "17px", borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>+9 vs Jun</p>
          </div>
          <svg data-fu="plot" style={{ position: "absolute", left: "14px", top: "70px", width: "341.3px", height: "52px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="341.3" height="52" viewBox="0 0 341.3 52" fill="none" overflow="visible"><defs><linearGradient id="g21_gdtz" gradientUnits="userSpaceOnUse" x1="167.65" y1="0.00" x2="167.65" y2="49.00"><stop offset="0" stopColor="#e5484d" stopOpacity="0.16"/><stop offset="1" stopColor="#e5484d" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 3)" d="M0 47 C1.83 46.63 26.82 41.11 30.48 40.87 C34.14 40.62 57.31 43.28 60.96 42.91 C64.62 42.55 87.79 35.11 91.45 34.74 C95.1 34.37 118.27 37.15 121.93 36.78 C125.59 36.41 148.75 29.47 152.41 28.61 C156.07 27.75 179.23 22.72 182.89 22.48 C186.55 22.23 209.71 24.77 213.37 24.52 C217.03 24.28 240.2 19.13 243.85 18.39 C247.51 17.66 270.68 13 274.34 12.26 C277.99 11.53 301.16 6.87 304.82 6.13 C308.48 5.39 333.47 0.37 335.3 0 L335.3 49 L0 49 L0 47 Z" fill="url(#g21_gdtz)"/><path transform="matrix(1 0 0 1 1 3)" d="M-0.138723 46.3139 C-0.517655 46.3905 -0.762731 46.7598 -0.686117 47.1387 C-0.609502 47.5177 -0.240209 47.7627 0.138723 47.6861 L0 47 L-0.138723 46.3139 Z M30.48 40.87 L30.5258 41.5685 L30.5277 41.5684 L30.48 40.87 Z M60.96 42.91 L60.8915 42.2134 L60.8894 42.2136 L60.96 42.91 Z M91.45 34.74 L91.5204 35.4365 L91.5206 35.4364 L91.45 34.74 Z M182.89 22.48 L182.936 23.1785 L182.938 23.1784 L182.89 22.48 Z M213.37 24.52 L213.324 23.8215 L213.322 23.8216 L213.37 24.52 Z M243.85 18.39 L243.713 17.7035 L243.711 17.704 L243.85 18.39 Z M274.34 12.26 L274.203 11.5736 L274.201 11.5739 L274.34 12.26 Z M335.439 0.686117 C335.818 0.609502 336.063 0.240209 335.986 -0.138723 C335.909 -0.517655 335.54 -0.762731 335.161 -0.686117 L335.3 0 L335.439 0.686117 Z M0 47 L0.138723 47.6861 C1.05353 47.5012 7.78092 46.024 14.6976 44.5713 C18.1632 43.8434 21.6829 43.1203 24.5634 42.5643 C27.4674 42.0039 29.6649 41.625 30.5258 41.5685 L30.48 40.87 L30.4342 40.1715 C29.4651 40.235 27.1664 40.6361 24.2981 41.1897 C21.4064 41.7478 17.878 42.4728 14.4099 43.2012 C7.45908 44.661 0.77647 46.1288 -0.138723 46.3139 L0 47 Z M30.48 40.87 L30.5277 41.5684 C31.3804 41.5101 33.4553 41.6233 36.2203 41.8333 C38.9591 42.0414 42.3074 42.3384 45.6627 42.6323 C49.0148 42.926 52.3735 43.2165 55.1231 43.4105 C57.8417 43.6022 60.0443 43.7064 61.0306 43.6064 L60.96 42.91 L60.8894 42.2136 C60.0507 42.2986 57.9883 42.2091 55.2216 42.0139 C52.4859 41.821 49.139 41.5315 45.7848 41.2377 C42.4338 40.9441 39.0753 40.6461 36.3263 40.4373 C33.6035 40.2305 31.4096 40.1049 30.4323 40.1716 L30.48 40.87 Z M60.96 42.91 L61.0285 43.6066 C62.0171 43.5094 64.2196 42.9557 66.9389 42.2086 C69.689 41.453 73.0483 40.4761 76.4005 39.5009 C79.7559 38.5248 83.1042 37.5505 85.8423 36.7969 C88.6108 36.0351 90.678 35.5216 91.5204 35.4365 L91.45 34.74 L91.3796 34.0436 C90.392 34.1434 88.1904 34.6987 85.4708 35.4471 C82.7208 36.2039 79.3616 37.1815 76.0095 38.1566 C72.6542 39.1327 69.3059 40.1064 66.568 40.8586 C63.7992 41.6193 61.7329 42.1306 60.8915 42.2134 L60.96 42.91 Z M91.45 34.74 L91.5206 35.4364 C92.3577 35.3516 94.4183 35.4481 97.186 35.6528 C99.922 35.8551 103.269 36.1558 106.624 36.4572 C109.975 36.7583 113.335 37.0601 116.085 37.2634 C118.804 37.4644 121.01 37.5766 122 37.4764 L121.93 36.78 L121.86 36.0835 C121.02 36.1684 118.957 36.0719 116.188 35.8672 C113.451 35.6649 110.104 35.3642 106.749 35.0628 C103.397 34.7617 100.039 34.4599 97.2893 34.2566 C94.5717 34.0556 92.3673 33.9434 91.3794 34.0436 L91.45 34.74 Z M121.93 36.78 L122 37.4764 C122.982 37.3772 125.176 36.8563 127.899 36.1456 C130.649 35.4277 134.006 34.4971 137.36 33.5525 C144.087 31.6574 150.76 29.7168 152.57 29.2914 L152.41 28.61 L152.25 27.9286 C150.4 28.3632 143.663 30.3226 136.98 32.205 C133.629 33.1491 130.281 34.0767 127.545 34.791 C124.781 35.5125 122.708 35.9978 121.86 36.0835 L121.93 36.78 Z M152.41 28.61 L152.57 29.2914 C154.391 28.8635 161.089 27.3925 167.793 25.9978 C171.143 25.3007 174.491 24.6235 177.228 24.1059 C179.986 23.5843 182.073 23.2351 182.936 23.1785 L182.89 22.48 L182.844 21.7815 C181.877 21.8449 179.696 22.2144 176.968 22.7303 C174.219 23.2502 170.862 23.9293 167.507 24.6272 C160.801 26.0225 154.089 27.4965 152.25 27.9286 L152.41 28.61 Z M182.89 22.48 L182.938 23.1784 C183.792 23.12 185.868 23.2261 188.631 23.4266 C191.369 23.6253 194.717 23.9111 198.07 24.1975 C201.422 24.4836 204.779 24.7703 207.527 24.9697 C210.251 25.1673 212.442 25.285 213.418 25.2184 L213.37 24.52 L213.322 23.8216 C212.468 23.88 210.392 23.7739 207.629 23.5734 C204.891 23.3747 201.543 23.0889 198.19 22.8025 C194.838 22.5164 191.481 22.2297 188.733 22.0303 C186.009 21.8327 183.818 21.715 182.842 21.7816 L182.89 22.48 Z M213.37 24.52 L213.416 25.2185 C214.384 25.155 216.568 24.7774 219.296 24.2524 C222.045 23.7231 225.403 23.0328 228.758 22.3275 C235.479 20.9143 242.164 19.446 243.989 19.076 L243.85 18.39 L243.711 17.704 C241.886 18.074 235.161 19.5507 228.47 20.9575 C225.118 21.6622 221.769 22.3506 219.031 22.8776 C216.271 23.4088 214.186 23.765 213.324 23.8215 L213.37 24.52 Z M243.85 18.39 L243.987 19.0765 C247.648 18.3463 270.818 13.6862 274.479 12.9461 L274.34 12.26 L274.201 11.5739 C270.542 12.3138 247.372 16.9737 243.713 17.7035 L243.85 18.39 Z M274.34 12.26 L274.477 12.9464 C278.128 12.2163 301.298 7.55621 304.959 6.81612 L304.82 6.13 L304.681 5.44388 C301.022 6.18379 277.852 10.8437 274.203 11.5736 L274.34 12.26 Z M304.82 6.13 L304.959 6.81612 C306.788 6.44622 313.95 5.00634 320.884 3.61252 C327.817 2.21887 334.523 0.871221 335.439 0.686117 L335.3 0 L335.161 -0.686117 C334.247 -0.501221 327.543 0.846132 320.608 2.23998 C313.675 3.63366 306.512 5.07378 304.681 5.44388 L304.82 6.13 Z" fill="#e5484d"/><path transform="matrix(1 0 0 1 333.8 0.5)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#e5484d"/><path transform="matrix(1 0 0 1 333.8 0.5)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#1a1a1a"/></svg>
          <div style={{ position: "absolute", left: "220.56px", top: "30px", width: "134.74px", height: "19.74px", borderRadius: "6px", background: "#000000", boxShadow: "inset 0 0 0 0.87px #3a3a3a", display: "flex", flexDirection: "row", padding: "2.87px 6.87px 2.87px 6.87px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#dadada" }}>23 past due · 41 paused</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 8px 0px 8px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>List</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>64 customers</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "174px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>At-risk customers · July</p>
          <p style={{ width: "353.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Past due, paused or no follow-up in 30 days — owners notified</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(229, 85, 155, 0.18), rgba(229, 85, 155, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(123, 91, 255, 0.18), rgba(123, 91, 255, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(122, 162, 247, 0.18), rgba(122, 162, 247, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9bb9f9" }}>EW</p>
              </div>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Updated 1 h ago</p>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1044.6px", top: "220px", width: "381.3px", height: "268px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "369.3px", height: "132px", flexShrink: 0, borderRadius: "7px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "14px", top: "12px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Upgrade potential</p>
          <p style={{ position: "absolute", left: "14px", top: "28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "34px", fontFamily: "'Geist'", fontSize: "26px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.03em" }}>+$2,580</p>
          <p style={{ position: "absolute", left: "14px", top: "64px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "251px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>MRR if all 86 move Plus → Family (+$30 each)</p>
          <div style={{ position: "absolute", left: "16px", top: "92px", width: "175px", height: "26px", display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "linear-gradient(rgba(63, 179, 127, 0.18), rgba(63, 179, 127, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6fc69f" }}>RA</p>
            </div>
            <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "linear-gradient(rgba(229, 85, 155, 0.18), rgba(229, 85, 155, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#ec80b4" }}>FP</p>
            </div>
            <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "linear-gradient(rgba(122, 162, 247, 0.18), rgba(122, 162, 247, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9bb9f9" }}>YF</p>
            </div>
            <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "linear-gradient(rgba(123, 91, 255, 0.18), rgba(123, 91, 255, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>MT</p>
            </div>
            <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "linear-gradient(rgba(227, 179, 65, 0.18), rgba(227, 179, 65, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#eac671" }}>FM</p>
            </div>
            <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "linear-gradient(rgba(240, 113, 120, 0.18), rgba(240, 113, 120, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#f4949a" }}>GB</p>
            </div>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "13px", background: "#232323", boxShadow: "0 0 0 1px #2e2e2e", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#dadada" }}>+80</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "247.3px", top: "12px", width: "108px", height: "18px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Plus</p>
            </div>
            <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2b1a24", boxShadow: "inset 0 0 0 1px #3b2331, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#ec79b1", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Family</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 8px 0px 8px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>List</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>86 customers</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "159px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Family plan upsell list</p>
          <p style={{ width: "353.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Plus subscribers with 3+ household members on the account</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(63, 179, 127, 0.18), rgba(63, 179, 127, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6fc69f" }}>JL</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(122, 162, 247, 0.18), rgba(122, 162, 247, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9bb9f9" }}>EW</p>
              </div>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Updated 3 h ago</p>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "504px", width: "381.3px", height: "268px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "369.3px", height: "132px", flexShrink: 0, borderRadius: "7px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "14px", top: "12px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "163px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Reports in by leg · W28 – W31</p>
          <p style={{ position: "absolute", left: "321.3px", top: "11px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>78.4%</p>
          <p style={{ position: "absolute", left: "14px", top: "37px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#7c7c7c" }}>W28</p>
          <p style={{ position: "absolute", left: "14px", top: "60px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#7c7c7c" }}>W29</p>
          <p style={{ position: "absolute", left: "14px", top: "83px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#7c7c7c" }}>W30</p>
          <p style={{ position: "absolute", left: "14px", top: "106px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#dadada" }}>W31</p>
          <div data-fu="cell" style={{ position: "absolute", left: "44px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "68.1px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.36) 0%, rgba(123, 91, 255, 0.44) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "92.2px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.29) 0%, rgba(123, 91, 255, 0.35) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "116.3px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "140.4px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.56) 0%, rgba(123, 91, 255, 0.68) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.26), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "164.5px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.65) 0%, rgba(123, 91, 255, 0.79) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.29), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "188.6px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.5) 0%, rgba(123, 91, 255, 0.6) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.24), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "212.7px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "236.8px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "260.9px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.24) 0%, rgba(123, 91, 255, 0.29) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.15), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "285px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "309.1px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.69) 0%, rgba(123, 91, 255, 0.84) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.3), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "333.2px", top: "34px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "44px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "68.1px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.43) 0%, rgba(123, 91, 255, 0.53) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "92.2px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.26) 0%, rgba(123, 91, 255, 0.31) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.16), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "116.3px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "140.4px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.61) 0%, rgba(123, 91, 255, 0.74) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.27), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "164.5px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.66) 0%, rgba(123, 91, 255, 0.81) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.29), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "188.6px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.55) 0%, rgba(123, 91, 255, 0.67) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "212.7px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "236.8px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "260.9px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.24) 0%, rgba(123, 91, 255, 0.29) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.15), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "285px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "309.1px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "333.2px", top: "57px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "44px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "68.1px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.45) 0%, rgba(123, 91, 255, 0.55) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "92.2px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.32) 0%, rgba(123, 91, 255, 0.39) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "116.3px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.69) 0%, rgba(123, 91, 255, 0.84) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.3), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "140.4px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.65) 0%, rgba(123, 91, 255, 0.79) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.29), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "164.5px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.65) 0%, rgba(123, 91, 255, 0.79) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.29), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "188.6px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.63) 0%, rgba(123, 91, 255, 0.77) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.28), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "212.7px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "236.8px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.69) 0%, rgba(123, 91, 255, 0.84) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.3), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "260.9px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "285px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.69) 0%, rgba(123, 91, 255, 0.84) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.3), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "309.1px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "333.2px", top: "80px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "44px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.46) 0%, rgba(123, 91, 255, 0.56) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "68.1px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.16) 0%, rgba(123, 91, 255, 0.2) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.13), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "92.2px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.13) 0%, rgba(123, 91, 255, 0.15) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.11), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "116.3px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.41) 0%, rgba(123, 91, 255, 0.5) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.21), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "140.4px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.31) 0%, rgba(123, 91, 255, 0.37) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "164.5px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.29) 0%, rgba(123, 91, 255, 0.35) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "188.6px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.21) 0%, rgba(123, 91, 255, 0.25) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.14), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "212.7px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.35) 0%, rgba(123, 91, 255, 0.42) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "236.8px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.36) 0%, rgba(123, 91, 255, 0.44) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "260.9px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.21) 0%, rgba(123, 91, 255, 0.25) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.14), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "285px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.31) 0%, rgba(123, 91, 255, 0.37) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "309.1px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.26) 0%, rgba(123, 91, 255, 0.31) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.16), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
          <div data-fu="cell" style={{ position: "absolute", left: "333.2px", top: "103px", width: "21.1px", height: "19px", borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.21) 0%, rgba(123, 91, 255, 0.25) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.14), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 8px 0px 8px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Report</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>5 items</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Pin size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#9e7bff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#9e7bff" }}>Pinned</p>
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "173px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Weekly report template</p>
          <p style={{ width: "353.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Sunday 20:00 report · messages, MG1, follow ups, customers</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(123, 91, 255, 0.18), rgba(123, 91, 255, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
              </div>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Updated yesterday</p>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "647.3px", top: "504px", width: "381.3px", height: "268px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "369.3px", height: "132px", flexShrink: 0, borderRadius: "7px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "14px", top: "12px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "165px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Edwin & Wiliannys → Emerald</p>
          <div style={{ position: "absolute", left: "309.3px", top: "10px", width: "46px", height: "18px", borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Eagle</p>
          </div>
          <div style={{ position: "absolute", left: "14px", top: "32px", width: "341.3px", height: "27px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "341.3px", height: "5px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "318.55px", height: "5px", borderRadius: "2.5px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "322.55px", top: "0px", width: "18.25px", height: "5px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18.25" height="5" viewBox="0 0 18.25 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 5 L0 5 L0.5 5 L0.5 0 L0 0 Z M3.65 0 L3.15 0 L3.15 5 L3.65 5 L4.15 5 L4.15 0 L3.65 0 Z M7.3 0 L6.8 0 L6.8 5 L7.3 5 L7.8 5 L7.8 0 L7.3 0 Z M10.95 0 L10.45 0 L10.45 5 L10.95 5 L11.45 5 L11.45 0 L10.95 0 Z M14.6 0 L14.1 0 L14.1 5 L14.6 5 L15.1 5 L15.1 0 L14.6 0 Z M18.25 0 L17.75 0 L17.75 5 L18.25 5 L18.75 5 L18.75 0 L18.25 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "341.3px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>Active subs</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>280 / 300</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "14px", top: "66px", width: "341.3px", height: "27px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "341.3px", height: "5px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "341.3px", height: "5px", borderRadius: "2.5px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "345.3px", top: "0px", width: "4.5px", height: "5px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.5" height="5" viewBox="0 0 4.5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.5 0 L4 0 L4 5 L4.5 5 L5 5 L5 0 L4.5 0 Z M0 0 L-0.5 0 L-0.5 5 L0 5 L0.5 5 L0.5 0 L0 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "341.3px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>MG1 · 4 weeks</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>158 / 150 ✓</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "14px", top: "100px", width: "341.3px", height: "27px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "341.3px", height: "5px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "136.52px", height: "5px", borderRadius: "2.5px", background: "linear-gradient(90deg, #edce84 0%, #e3b341 100%)", boxShadow: "inset 0 0 0 1px rgba(177, 140, 51, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "140.52px", top: "0px", width: "200.28px", height: "5px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="200.28" height="5" viewBox="0 0 200.28 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 5 L0 5 L0.5 5 L0.5 0 L0 0 Z M3.23 0 L2.73 0 L2.73 5 L3.23 5 L3.73 5 L3.73 0 L3.23 0 Z M6.46 0 L5.96 0 L5.96 5 L6.46 5 L6.96 5 L6.96 0 L6.46 0 Z M9.69 0 L9.19 0 L9.19 5 L9.69 5 L10.19 5 L10.19 0 L9.69 0 Z M12.92 0 L12.42 0 L12.42 5 L12.92 5 L13.42 5 L13.42 0 L12.92 0 Z M16.15 0 L15.65 0 L15.65 5 L16.15 5 L16.65 5 L16.65 0 L16.15 0 Z M19.38 0 L18.88 0 L18.88 5 L19.38 5 L19.88 5 L19.88 0 L19.38 0 Z M22.61 0 L22.11 0 L22.11 5 L22.61 5 L23.11 5 L23.11 0 L22.61 0 Z M25.84 0 L25.34 0 L25.34 5 L25.84 5 L26.34 5 L26.34 0 L25.84 0 Z M29.07 0 L28.57 0 L28.57 5 L29.07 5 L29.57 5 L29.57 0 L29.07 0 Z M32.3 0 L31.8 0 L31.8 5 L32.3 5 L32.8 5 L32.8 0 L32.3 0 Z M35.53 0 L35.03 0 L35.03 5 L35.53 5 L36.03 5 L36.03 0 L35.53 0 Z M38.76 0 L38.26 0 L38.26 5 L38.76 5 L39.26 5 L39.26 0 L38.76 0 Z M41.99 0 L41.49 0 L41.49 5 L41.99 5 L42.49 5 L42.49 0 L41.99 0 Z M45.22 0 L44.72 0 L44.72 5 L45.22 5 L45.72 5 L45.72 0 L45.22 0 Z M48.45 0 L47.95 0 L47.95 5 L48.45 5 L48.95 5 L48.95 0 L48.45 0 Z M51.69 0 L51.19 0 L51.19 5 L51.69 5 L52.19 5 L52.19 0 L51.69 0 Z M54.92 0 L54.42 0 L54.42 5 L54.92 5 L55.42 5 L55.42 0 L54.92 0 Z M58.15 0 L57.65 0 L57.65 5 L58.15 5 L58.65 5 L58.65 0 L58.15 0 Z M61.38 0 L60.88 0 L60.88 5 L61.38 5 L61.88 5 L61.88 0 L61.38 0 Z M64.61 0 L64.11 0 L64.11 5 L64.61 5 L65.11 5 L65.11 0 L64.61 0 Z M67.84 0 L67.34 0 L67.34 5 L67.84 5 L68.34 5 L68.34 0 L67.84 0 Z M71.07 0 L70.57 0 L70.57 5 L71.07 5 L71.57 5 L71.57 0 L71.07 0 Z M74.3 0 L73.8 0 L73.8 5 L74.3 5 L74.8 5 L74.8 0 L74.3 0 Z M77.53 0 L77.03 0 L77.03 5 L77.53 5 L78.03 5 L78.03 0 L77.53 0 Z M80.76 0 L80.26 0 L80.26 5 L80.76 5 L81.26 5 L81.26 0 L80.76 0 Z M83.99 0 L83.49 0 L83.49 5 L83.99 5 L84.49 5 L84.49 0 L83.99 0 Z M87.22 0 L86.72 0 L86.72 5 L87.22 5 L87.72 5 L87.72 0 L87.22 0 Z M90.45 0 L89.95 0 L89.95 5 L90.45 5 L90.95 5 L90.95 0 L90.45 0 Z M93.68 0 L93.18 0 L93.18 5 L93.68 5 L94.18 5 L94.18 0 L93.68 0 Z M96.91 0 L96.41 0 L96.41 5 L96.91 5 L97.41 5 L97.41 0 L96.91 0 Z M100.14 0 L99.64 0 L99.64 5 L100.14 5 L100.64 5 L100.64 0 L100.14 0 Z M103.37 0 L102.87 0 L102.87 5 L103.37 5 L103.87 5 L103.87 0 L103.37 0 Z M106.6 0 L106.1 0 L106.1 5 L106.6 5 L107.1 5 L107.1 0 L106.6 0 Z M109.83 0 L109.33 0 L109.33 5 L109.83 5 L110.33 5 L110.33 0 L109.83 0 Z M113.06 0 L112.56 0 L112.56 5 L113.06 5 L113.56 5 L113.56 0 L113.06 0 Z M116.29 0 L115.79 0 L115.79 5 L116.29 5 L116.79 5 L116.79 0 L116.29 0 Z M119.52 0 L119.02 0 L119.02 5 L119.52 5 L120.02 5 L120.02 0 L119.52 0 Z M122.75 0 L122.25 0 L122.25 5 L122.75 5 L123.25 5 L123.25 0 L122.75 0 Z M125.98 0 L125.48 0 L125.48 5 L125.98 5 L126.48 5 L126.48 0 L125.98 0 Z M129.21 0 L128.71 0 L128.71 5 L129.21 5 L129.71 5 L129.71 0 L129.21 0 Z M132.44 0 L131.94 0 L131.94 5 L132.44 5 L132.94 5 L132.94 0 L132.44 0 Z M135.67 0 L135.17 0 L135.17 5 L135.67 5 L136.17 5 L136.17 0 L135.67 0 Z M138.9 0 L138.4 0 L138.4 5 L138.9 5 L139.4 5 L139.4 0 L138.9 0 Z M142.13 0 L141.63 0 L141.63 5 L142.13 5 L142.63 5 L142.63 0 L142.13 0 Z M145.36 0 L144.86 0 L144.86 5 L145.36 5 L145.86 5 L145.86 0 L145.36 0 Z M148.59 0 L148.09 0 L148.09 5 L148.59 5 L149.09 5 L149.09 0 L148.59 0 Z M151.83 0 L151.33 0 L151.33 5 L151.83 5 L152.33 5 L152.33 0 L151.83 0 Z M155.06 0 L154.56 0 L154.56 5 L155.06 5 L155.56 5 L155.56 0 L155.06 0 Z M158.29 0 L157.79 0 L157.79 5 L158.29 5 L158.79 5 L158.79 0 L158.29 0 Z M161.52 0 L161.02 0 L161.02 5 L161.52 5 L162.02 5 L162.02 0 L161.52 0 Z M164.75 0 L164.25 0 L164.25 5 L164.75 5 L165.25 5 L165.25 0 L164.75 0 Z M167.98 0 L167.48 0 L167.48 5 L167.98 5 L168.48 5 L168.48 0 L167.98 0 Z M171.21 0 L170.71 0 L170.71 5 L171.21 5 L171.71 5 L171.71 0 L171.21 0 Z M174.44 0 L173.94 0 L173.94 5 L174.44 5 L174.94 5 L174.94 0 L174.44 0 Z M177.67 0 L177.17 0 L177.17 5 L177.67 5 L178.17 5 L178.17 0 L177.67 0 Z M180.9 0 L180.4 0 L180.4 5 L180.9 5 L181.4 5 L181.4 0 L180.9 0 Z M184.13 0 L183.63 0 L183.63 5 L184.13 5 L184.63 5 L184.63 0 L184.13 0 Z M187.36 0 L186.86 0 L186.86 5 L187.36 5 L187.86 5 L187.86 0 L187.36 0 Z M190.59 0 L190.09 0 L190.09 5 L190.59 5 L191.09 5 L191.09 0 L190.59 0 Z M193.82 0 L193.32 0 L193.32 5 L193.82 5 L194.32 5 L194.32 0 L193.82 0 Z M197.05 0 L196.55 0 L196.55 5 L197.05 5 L197.55 5 L197.55 0 L197.05 0 Z M200.28 0 L199.78 0 L199.78 5 L200.28 5 L200.78 5 L200.78 0 L200.28 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "341.3px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>People</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>16 / 40</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 8px 0px 8px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Report</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>4 legs</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "213px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Emerald qualification tracker</p>
          <p style={{ width: "353.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Legs within reach of Emerald: subs, people, MG1 and Eagle legs</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(123, 91, 255, 0.18), rgba(123, 91, 255, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(122, 162, 247, 0.18), rgba(122, 162, 247, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9bb9f9" }}>EW</p>
              </div>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Updated yesterday</p>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1044.6px", top: "504px", width: "381.3px", height: "268px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "369.3px", height: "132px", flexShrink: 0, borderRadius: "7px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "14px", top: "12px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "230px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Completion by lesson · 23 new members</p>
          <div style={{ position: "absolute", left: "10px", top: "30px", width: "349.3px", height: "98px" }}>
            <div style={{ position: "absolute", left: "10.47px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "#212121" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "10.47px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "linear-gradient(180deg, #977932 0%, #836a2e 100%)", boxShadow: "inset 0 0 0 1px rgba(216, 170, 62, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "45.4px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "#212121" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "45.4px", top: "3.2px", width: "14px", height: "76.8px", borderRadius: "7px", background: "linear-gradient(180deg, #977932 0%, #836a2e 100%)", boxShadow: "inset 0 0 0 1px rgba(216, 170, 62, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "80.32px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "#212121" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "80.32px", top: "7.2px", width: "14px", height: "72.8px", borderRadius: "7px", background: "linear-gradient(180deg, #977932 0%, #836a2e 100%)", boxShadow: "inset 0 0 0 1px rgba(216, 170, 62, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "115.25px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "#212121" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "115.25px", top: "10.4px", width: "14px", height: "69.6px", borderRadius: "7px", background: "linear-gradient(180deg, #977932 0%, #836a2e 100%)", boxShadow: "inset 0 0 0 1px rgba(216, 170, 62, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "150.19px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "#212121" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "150.19px", top: "13.6px", width: "14px", height: "66.4px", borderRadius: "7px", background: "linear-gradient(180deg, #977932 0%, #836a2e 100%)", boxShadow: "inset 0 0 0 1px rgba(216, 170, 62, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "185.11px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "#212121" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "185.11px", top: "20.8px", width: "14px", height: "59.2px", borderRadius: "7px", background: "linear-gradient(180deg, #977932 0%, #836a2e 100%)", boxShadow: "inset 0 0 0 1px rgba(216, 170, 62, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "220.04px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "#212121" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "220.04px", top: "28px", width: "14px", height: "52px", borderRadius: "7px", background: "linear-gradient(180deg, #e7bd5a 0%, #e3b341 100%)", boxShadow: "inset 0 0 0 1px rgba(177, 140, 51, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "254.98px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "#212121" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "254.98px", top: "34.4px", width: "14px", height: "45.6px", borderRadius: "7px", background: "linear-gradient(180deg, #977932 0%, #836a2e 100%)", boxShadow: "inset 0 0 0 1px rgba(216, 170, 62, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "289.91px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "#212121" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "289.91px", top: "41.6px", width: "14px", height: "38.4px", borderRadius: "7px", background: "linear-gradient(180deg, #977932 0%, #836a2e 100%)", boxShadow: "inset 0 0 0 1px rgba(216, 170, 62, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "324.83px", top: "0px", width: "14px", height: "80px", borderRadius: "7px", background: "#212121" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "324.83px", top: "48.8px", width: "14px", height: "31.2px", borderRadius: "7px", background: "linear-gradient(180deg, #977932 0%, #836a2e 100%)", boxShadow: "inset 0 0 0 1px rgba(216, 170, 62, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <p style={{ position: "absolute", left: "14.97px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "5px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>1</p>
            <p style={{ position: "absolute", left: "48.4px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>2</p>
            <p style={{ position: "absolute", left: "83.32px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>3</p>
            <p style={{ position: "absolute", left: "118.25px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>4</p>
            <p style={{ position: "absolute", left: "153.19px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>5</p>
            <p style={{ position: "absolute", left: "188.11px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>6</p>
            <p style={{ position: "absolute", left: "223.54px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>7</p>
            <p style={{ position: "absolute", left: "257.98px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>8</p>
            <p style={{ position: "absolute", left: "292.91px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>9</p>
            <p style={{ position: "absolute", left: "325.33px", top: "82px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>10</p>
            <div style={{ position: "absolute", left: "173.68px", top: "4.26px", width: "106.74px", height: "21.74px", borderRadius: "6px", background: "#000000", boxShadow: "inset 0 0 0 0.87px #3a3a3a, 0px 6px 24px 0px rgba(123, 91, 255, 0.1)", display: "flex", flexDirection: "row", padding: "3.87px 7.87px 3.87px 7.87px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ededed" }}>L7 · 65% · 15 of 23</p>
            </div>
            <svg style={{ position: "absolute", left: "223.04px", top: "24.8px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#000000"/></svg>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 8px 0px 8px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2a2316", boxShadow: "inset 0 0 0 1px #3a301c, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#e3b341", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Training</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>10 lessons</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "186px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>New member onboarding</p>
          <p style={{ width: "353.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>First 14 days: app setup, scripts, booking the first MG1</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(63, 179, 127, 0.18), rgba(63, 179, 127, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6fc69f" }}>JL</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(229, 85, 155, 0.18), rgba(229, 85, 155, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(123, 91, 255, 0.18), rgba(123, 91, 255, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
              </div>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Updated Jul 28</p>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "788px", width: "381.3px", height: "268px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "369.3px", height: "132px", flexShrink: 0, borderRadius: "7px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "14px", top: "14px", width: "104px", height: "104px" }}>
            <svg style={{ position: "absolute", left: "6px", top: "6px", width: "92px", height: "92px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M92 46 L86 46 C86 68.0876 68.1045 85.9913 46.0177 86 L46.02 92 L46.0224 98 C74.7355 97.9887 98 74.7125 98 46 L92 46 Z M46.02 92 L46.0177 86 C23.9295 86.0087 6.0174 68.1216 6.00001 46.0353 L1.45791e-05 46.04 L-5.99998 46.0448 C-5.97737 74.7585 17.3106 98.0113 46.0224 98 L46.02 92 Z M1.45791e-05 46.04 L6.00001 46.0353 C5.98262 23.9465 23.8615 6.02611 45.9471 6.00003 L45.94 3.28049e-05 L45.9329 -5.99996 C17.2185 -5.96605 -6.02259 17.3336 -5.99998 46.0448 L1.45791e-05 46.04 Z M45.94 3.28049e-05 L45.9471 6.00003 C68.0366 5.97394 85.9652 23.8445 86 45.9295 L92 45.92 L98 45.9106 C97.9548 17.1955 74.6435 -6.03387 45.9329 -5.99996 L45.94 3.28049e-05 Z" fill="#232323"/></svg>
            <svg data-fu="arc" style={{ position: "absolute", left: "60.76px", top: "6.84px", width: "37.25px", height: "72.41px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="37.25" height="72.41" viewBox="0 0 37.25 72.41" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M1.14155 -5.8904 C-2.11163 -6.52087 -5.25994 -4.39473 -5.8904 -1.14155 C-6.52087 2.11163 -4.39473 5.25994 -1.14155 5.8904 L0 0 L1.14155 -5.8904 Z M23.4751 68.857 C21.5128 71.5273 22.0868 75.2827 24.757 77.2449 C27.4273 79.2072 31.1827 78.6332 33.1449 75.963 L28.31 72.41 L23.4751 68.857 Z M0 0 L-1.14155 5.8904 C12.3201 8.49926 23.5108 17.8214 28.5015 30.5937 L34.09 28.41 L39.6785 26.2263 C33.1892 9.61864 18.6399 -2.49926 1.14155 -5.8904 L0 0 Z M34.09 28.41 L28.5015 30.5937 C33.4932 43.3688 31.5975 57.8039 23.4751 68.857 L28.31 72.41 L33.1449 75.963 C43.7025 61.5961 46.1668 42.8312 39.6785 26.2263 L34.09 28.41 Z" fill="#7b5bff"/></svg>
            <svg data-fu="arc" style={{ position: "absolute", left: "11.94px", top: "74.61px", width: "64.25px", height: "23.39px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="64.25" height="23.39" viewBox="0 0 64.25 23.39" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M67.4071 21.6122 C70.225 19.8686 71.0958 16.1707 69.3522 13.3529 C67.6086 10.535 63.9107 9.66416 61.0929 11.4078 L64.25 16.51 L67.4071 21.6122 Z M28.61 21.94 L30.1058 16.1294 L30.1046 16.1291 L28.61 21.94 Z M5.22561 -2.94839 C3.59725 -5.83442 -0.06237 -6.85396 -2.94839 -5.22561 C-5.83442 -3.59725 -6.85396 0.06237 -5.22561 2.94839 L0 0 L5.22561 -2.94839 Z M64.25 16.51 L61.0929 11.4078 C51.8319 17.1383 40.6422 18.8418 30.1058 16.1294 L28.61 21.94 L27.1142 27.7506 C40.8178 31.2782 55.3681 29.0617 67.4071 21.6122 L64.25 16.51 Z M28.61 21.94 L30.1046 16.1291 C19.5539 13.4153 10.5722 6.52765 5.22561 -2.94839 L0 0 L-5.22561 2.94839 C1.72782 15.2724 13.4061 24.2247 27.1154 27.7509 L28.61 21.94 Z" fill="#753554"/></svg>
            <svg data-fu="arc" style={{ position: "absolute", left: "6px", top: "20.85px", width: "12.16px", height: "37.15px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.16" height="37.15" viewBox="0 0 12.16 37.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-5.5547 37.9338 C-5.12184 41.2191 -2.10767 43.5314 1.17765 43.0986 C4.46296 42.6657 6.77534 39.6516 6.34249 36.3662 L0.393895 37.15 L-5.5547 37.9338 Z M16.5768 4.06529 C18.822 1.62813 18.6663 -2.16767 16.2292 -4.41287 C13.792 -6.65807 9.99623 -6.50245 7.75103 -4.06529 L12.1639 0 L16.5768 4.06529 Z M0.393895 37.15 L6.34249 36.3662 C4.795 24.621 8.54193 12.7871 16.5768 4.06529 L12.1639 0 L7.75103 -4.06529 C-2.69414 7.27292 -7.56721 22.659 -5.5547 37.9338 L0.393895 37.15 Z" fill="#45577d"/></svg>
            <svg data-fu="arc" style={{ position: "absolute", left: "32.25px", top: "6.84px", width: "10.99px", height: "3.61px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.99" height="3.61" viewBox="0 0 10.99 3.61" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.57118 -1.81116 C-5.56521 -0.391141 -6.84119 3.18715 -5.42116 6.18118 C-4.00114 9.17521 -0.422846 10.4512 2.57118 9.03117 L0 3.61 L-2.57118 -1.81116 Z M12.1369 5.88937 C15.3895 5.25597 17.5128 2.10573 16.8794 -1.14688 C16.246 -4.39949 13.0957 -6.52277 9.84312 -5.88937 L10.99 0 L12.1369 5.88937 Z M0 3.61 L2.57118 9.03117 C5.61531 7.58738 8.82658 6.53401 12.1369 5.88937 L10.99 0 L9.84312 -5.88937 C5.55342 -5.05401 1.38469 -3.68738 -2.57118 -1.81116 L0 3.61 Z" fill="#745f2c"/></svg>
            <div style={{ position: "absolute", left: "28.5px", top: "32px", width: "47px", height: "40px", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "22px", fontFamily: "'Geist'", fontSize: "17px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.05em" }}>38.1%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "rgba(237, 237, 237, 0.5)" }}>walk-ins</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "134px", top: "30px", width: "219.3px", height: "82px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "195px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>Walk-ins · 1,249 positive messages</p>
            <div data-fu="row" style={{ width: "219.3px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Turn into MG1</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#7b5bff" }}>26%</p>
            </div>
            <div data-fu="row" style={{ width: "219.3px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Referrals for comparison</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5559b" }}>41%</p>
            </div>
            <div data-fu="row" style={{ width: "219.3px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Script used in</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>74% of visits</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 8px 0px 8px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2a2316", boxShadow: "inset 0 0 0 1px #3a301c, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#e3b341", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Training</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>7 scripts</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Walk-in scripts</p>
          <p style={{ width: "353.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Openers, plan pitch and objection handling for walk-in visitors</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(229, 85, 155, 0.18), rgba(229, 85, 155, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(122, 162, 247, 0.18), rgba(122, 162, 247, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9bb9f9" }}>EW</p>
              </div>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Updated Jul 27</p>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "647.3px", top: "788px", width: "381.3px", height: "268px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "369.3px", height: "132px", flexShrink: 0, borderRadius: "7px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "14px", top: "12px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Campaign MG1 by week</p>
          <div style={{ position: "absolute", left: "10px", top: "30px", width: "349.3px", height: "100px" }}>
            <div data-fu="bar" style={{ position: "absolute", left: "14.95px", top: "51.93px", width: "20px", height: "30.07px", borderRadius: "5px", background: "linear-gradient(180deg, #566ea3 0%, #4c618d 100%)", boxShadow: "inset 0 0 0 1px rgba(116, 154, 235, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <svg style={{ position: "absolute", left: "-30.07px", top: "0px", width: "110.07px", height: "30.07px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="110.07" height="30.07" viewBox="0 0 110.07 30.07" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 30.07 L0.494975 30.565 L30.565 0.494975 L30.07 0 L29.575 -0.494975 L-0.494975 29.575 L0 30.07 Z M5 30.07 L5.49497 30.565 L35.565 0.494975 L35.07 0 L34.575 -0.494975 L4.50503 29.575 L5 30.07 Z M10 30.07 L10.495 30.565 L40.565 0.494975 L40.07 0 L39.575 -0.494975 L9.50502 29.575 L10 30.07 Z M15 30.07 L15.495 30.565 L45.565 0.494975 L45.07 0 L44.575 -0.494975 L14.505 29.575 L15 30.07 Z M20 30.07 L20.495 30.565 L50.565 0.494975 L50.07 0 L49.575 -0.494975 L19.505 29.575 L20 30.07 Z M25 30.07 L25.495 30.565 L55.565 0.494975 L55.07 0 L54.575 -0.494975 L24.505 29.575 L25 30.07 Z M30 30.07 L30.495 30.565 L60.565 0.494975 L60.07 0 L59.575 -0.494975 L29.505 29.575 L30 30.07 Z M35 30.07 L35.495 30.565 L65.565 0.494975 L65.07 0 L64.575 -0.494975 L34.505 29.575 L35 30.07 Z M40 30.07 L40.495 30.565 L70.565 0.494975 L70.07 0 L69.575 -0.494975 L39.505 29.575 L40 30.07 Z M45 30.07 L45.495 30.565 L75.565 0.494975 L75.07 0 L74.575 -0.494975 L44.505 29.575 L45 30.07 Z M50 30.07 L50.495 30.565 L80.565 0.494975 L80.07 0 L79.575 -0.494975 L49.505 29.575 L50 30.07 Z M55 30.07 L55.495 30.565 L85.565 0.494975 L85.07 0 L84.575 -0.494975 L54.505 29.575 L55 30.07 Z M60 30.07 L60.495 30.565 L90.565 0.494975 L90.07 0 L89.575 -0.494975 L59.505 29.575 L60 30.07 Z M65 30.07 L65.495 30.565 L95.565 0.494975 L95.07 0 L94.575 -0.494975 L64.505 29.575 L65 30.07 Z M70 30.07 L70.495 30.565 L100.565 0.494975 L100.07 0 L99.575 -0.494975 L69.505 29.575 L70 30.07 Z M75 30.07 L75.495 30.565 L105.565 0.494975 L105.07 0 L104.575 -0.494975 L74.505 29.575 L75 30.07 Z M80 30.07 L80.495 30.565 L110.565 0.494975 L110.07 0 L109.575 -0.494975 L79.505 29.575 L80 30.07 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "64.85px", top: "47.83px", width: "20px", height: "34.17px", borderRadius: "5px", background: "linear-gradient(180deg, #566ea3 0%, #4c618d 100%)", boxShadow: "inset 0 0 0 1px rgba(116, 154, 235, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <svg style={{ position: "absolute", left: "-34.17px", top: "0px", width: "119.17px", height: "34.17px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="119.17" height="34.17" viewBox="0 0 119.17 34.17" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 34.17 L0.494975 34.665 L34.665 0.494975 L34.17 0 L33.675 -0.494975 L-0.494975 33.675 L0 34.17 Z M5 34.17 L5.49497 34.665 L39.665 0.494975 L39.17 0 L38.675 -0.494975 L4.50503 33.675 L5 34.17 Z M10 34.17 L10.495 34.665 L44.665 0.494975 L44.17 0 L43.675 -0.494975 L9.50502 33.675 L10 34.17 Z M15 34.17 L15.495 34.665 L49.665 0.494975 L49.17 0 L48.675 -0.494975 L14.505 33.675 L15 34.17 Z M20 34.17 L20.495 34.665 L54.665 0.494975 L54.17 0 L53.675 -0.494975 L19.505 33.675 L20 34.17 Z M25 34.17 L25.495 34.665 L59.665 0.494975 L59.17 0 L58.675 -0.494975 L24.505 33.675 L25 34.17 Z M30 34.17 L30.495 34.665 L64.665 0.494975 L64.17 0 L63.675 -0.494975 L29.505 33.675 L30 34.17 Z M35 34.17 L35.495 34.665 L69.665 0.494975 L69.17 0 L68.675 -0.494975 L34.505 33.675 L35 34.17 Z M40 34.17 L40.495 34.665 L74.665 0.494975 L74.17 0 L73.675 -0.494975 L39.505 33.675 L40 34.17 Z M45 34.17 L45.495 34.665 L79.665 0.494975 L79.17 0 L78.675 -0.494975 L44.505 33.675 L45 34.17 Z M50 34.17 L50.495 34.665 L84.665 0.494975 L84.17 0 L83.675 -0.494975 L49.505 33.675 L50 34.17 Z M55 34.17 L55.495 34.665 L89.665 0.494975 L89.17 0 L88.675 -0.494975 L54.505 33.675 L55 34.17 Z M60 34.17 L60.495 34.665 L94.665 0.494975 L94.17 0 L93.675 -0.494975 L59.505 33.675 L60 34.17 Z M65 34.17 L65.495 34.665 L99.665 0.494975 L99.17 0 L98.675 -0.494975 L64.505 33.675 L65 34.17 Z M70 34.17 L70.495 34.665 L104.665 0.494975 L104.17 0 L103.675 -0.494975 L69.505 33.675 L70 34.17 Z M75 34.17 L75.495 34.665 L109.665 0.494975 L109.17 0 L108.675 -0.494975 L74.505 33.675 L75 34.17 Z M80 34.17 L80.495 34.665 L114.665 0.494975 L114.17 0 L113.675 -0.494975 L79.505 33.675 L80 34.17 Z M85 34.17 L85.495 34.665 L119.665 0.494975 L119.17 0 L118.675 -0.494975 L84.505 33.675 L85 34.17 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "114.75px", top: "39.63px", width: "20px", height: "42.37px", borderRadius: "5px", background: "linear-gradient(180deg, #566ea3 0%, #4c618d 100%)", boxShadow: "inset 0 0 0 1px rgba(116, 154, 235, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <svg data-fu="plot" style={{ position: "absolute", left: "-42.37px", top: "0px", width: "142.37px", height: "42.37px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142.37" height="42.37" viewBox="0 0 142.37 42.37" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 42.37 L0.494975 42.865 L42.865 0.494975 L42.37 0 L41.875 -0.494975 L-0.494975 41.875 L0 42.37 Z M5 42.37 L5.49497 42.865 L47.865 0.494975 L47.37 0 L46.875 -0.494975 L4.50503 41.875 L5 42.37 Z M10 42.37 L10.495 42.865 L52.865 0.494975 L52.37 0 L51.875 -0.494975 L9.50502 41.875 L10 42.37 Z M15 42.37 L15.495 42.865 L57.865 0.494975 L57.37 0 L56.875 -0.494975 L14.505 41.875 L15 42.37 Z M20 42.37 L20.495 42.865 L62.865 0.494975 L62.37 0 L61.875 -0.494975 L19.505 41.875 L20 42.37 Z M25 42.37 L25.495 42.865 L67.865 0.494975 L67.37 0 L66.875 -0.494975 L24.505 41.875 L25 42.37 Z M30 42.37 L30.495 42.865 L72.865 0.494975 L72.37 0 L71.875 -0.494975 L29.505 41.875 L30 42.37 Z M35 42.37 L35.495 42.865 L77.865 0.494975 L77.37 0 L76.875 -0.494975 L34.505 41.875 L35 42.37 Z M40 42.37 L40.495 42.865 L82.865 0.494975 L82.37 0 L81.875 -0.494975 L39.505 41.875 L40 42.37 Z M45 42.37 L45.495 42.865 L87.865 0.494975 L87.37 0 L86.875 -0.494975 L44.505 41.875 L45 42.37 Z M50 42.37 L50.495 42.865 L92.865 0.494975 L92.37 0 L91.875 -0.494975 L49.505 41.875 L50 42.37 Z M55 42.37 L55.495 42.865 L97.865 0.494975 L97.37 0 L96.875 -0.494975 L54.505 41.875 L55 42.37 Z M60 42.37 L60.495 42.865 L102.865 0.494975 L102.37 0 L101.875 -0.494975 L59.505 41.875 L60 42.37 Z M65 42.37 L65.495 42.865 L107.865 0.494975 L107.37 0 L106.875 -0.494975 L64.505 41.875 L65 42.37 Z M70 42.37 L70.495 42.865 L112.865 0.494975 L112.37 0 L111.875 -0.494975 L69.505 41.875 L70 42.37 Z M75 42.37 L75.495 42.865 L117.865 0.494975 L117.37 0 L116.875 -0.494975 L74.505 41.875 L75 42.37 Z M80 42.37 L80.495 42.865 L122.865 0.494975 L122.37 0 L121.875 -0.494975 L79.505 41.875 L80 42.37 Z M85 42.37 L85.495 42.865 L127.865 0.494975 L127.37 0 L126.875 -0.494975 L84.505 41.875 L85 42.37 Z M90 42.37 L90.495 42.865 L132.865 0.494975 L132.37 0 L131.875 -0.494975 L89.505 41.875 L90 42.37 Z M95 42.37 L95.495 42.865 L137.865 0.494975 L137.37 0 L136.875 -0.494975 L94.505 41.875 L95 42.37 Z M100 42.37 L100.495 42.865 L142.865 0.494975 L142.37 0 L141.875 -0.494975 L99.505 41.875 L100 42.37 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "164.65px", top: "16.4px", width: "20px", height: "65.6px", borderRadius: "5px", background: "linear-gradient(180deg, #566ea3 0%, #4c618d 100%)", boxShadow: "inset 0 0 0 1px rgba(116, 154, 235, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <svg data-fu="plot" style={{ position: "absolute", left: "-65.6px", top: "0px", width: "215.6px", height: "65.6px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="215.6" height="65.6" viewBox="0 0 215.6 65.6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 65.6 L0.494975 66.095 L66.095 0.494975 L65.6 0 L65.105 -0.494975 L-0.494975 65.105 L0 65.6 Z M5 65.6 L5.49497 66.095 L71.095 0.494975 L70.6 0 L70.105 -0.494975 L4.50503 65.105 L5 65.6 Z M10 65.6 L10.495 66.095 L76.095 0.494975 L75.6 0 L75.105 -0.494975 L9.50502 65.105 L10 65.6 Z M15 65.6 L15.495 66.095 L81.095 0.494975 L80.6 0 L80.105 -0.494975 L14.505 65.105 L15 65.6 Z M20 65.6 L20.495 66.095 L86.095 0.494975 L85.6 0 L85.105 -0.494975 L19.505 65.105 L20 65.6 Z M25 65.6 L25.495 66.095 L91.095 0.494975 L90.6 0 L90.105 -0.494975 L24.505 65.105 L25 65.6 Z M30 65.6 L30.495 66.095 L96.095 0.494975 L95.6 0 L95.105 -0.494975 L29.505 65.105 L30 65.6 Z M35 65.6 L35.495 66.095 L101.095 0.494975 L100.6 0 L100.105 -0.494975 L34.505 65.105 L35 65.6 Z M40 65.6 L40.495 66.095 L106.095 0.494975 L105.6 0 L105.105 -0.494975 L39.505 65.105 L40 65.6 Z M45 65.6 L45.495 66.095 L111.095 0.494975 L110.6 0 L110.105 -0.494975 L44.505 65.105 L45 65.6 Z M50 65.6 L50.495 66.095 L116.095 0.494975 L115.6 0 L115.105 -0.494975 L49.505 65.105 L50 65.6 Z M55 65.6 L55.495 66.095 L121.095 0.494975 L120.6 0 L120.105 -0.494975 L54.505 65.105 L55 65.6 Z M60 65.6 L60.495 66.095 L126.095 0.494975 L125.6 0 L125.105 -0.494975 L59.505 65.105 L60 65.6 Z M65 65.6 L65.495 66.095 L131.095 0.494975 L130.6 0 L130.105 -0.494975 L64.505 65.105 L65 65.6 Z M70 65.6 L70.495 66.095 L136.095 0.494975 L135.6 0 L135.105 -0.494975 L69.505 65.105 L70 65.6 Z M75 65.6 L75.495 66.095 L141.095 0.494975 L140.6 0 L140.105 -0.494975 L74.505 65.105 L75 65.6 Z M80 65.6 L80.495 66.095 L146.095 0.494975 L145.6 0 L145.105 -0.494975 L79.505 65.105 L80 65.6 Z M85 65.6 L85.495 66.095 L151.095 0.494975 L150.6 0 L150.105 -0.494975 L84.505 65.105 L85 65.6 Z M90 65.6 L90.495 66.095 L156.095 0.494975 L155.6 0 L155.105 -0.494975 L89.505 65.105 L90 65.6 Z M95 65.6 L95.495 66.095 L161.095 0.494975 L160.6 0 L160.105 -0.494975 L94.505 65.105 L95 65.6 Z M100 65.6 L100.495 66.095 L166.095 0.494975 L165.6 0 L165.105 -0.494975 L99.505 65.105 L100 65.6 Z M105 65.6 L105.495 66.095 L171.095 0.494975 L170.6 0 L170.105 -0.494975 L104.505 65.105 L105 65.6 Z M110 65.6 L110.495 66.095 L176.095 0.494975 L175.6 0 L175.105 -0.494975 L109.505 65.105 L110 65.6 Z M115 65.6 L115.495 66.095 L181.095 0.494975 L180.6 0 L180.105 -0.494975 L114.505 65.105 L115 65.6 Z M120 65.6 L120.495 66.095 L186.095 0.494975 L185.6 0 L185.105 -0.494975 L119.505 65.105 L120 65.6 Z M125 65.6 L125.495 66.095 L191.095 0.494975 L190.6 0 L190.105 -0.494975 L124.505 65.105 L125 65.6 Z M130 65.6 L130.495 66.095 L196.095 0.494975 L195.6 0 L195.105 -0.494975 L129.505 65.105 L130 65.6 Z M135 65.6 L135.495 66.095 L201.095 0.494975 L200.6 0 L200.105 -0.494975 L134.505 65.105 L135 65.6 Z M140 65.6 L140.495 66.095 L206.095 0.494975 L205.6 0 L205.105 -0.494975 L139.505 65.105 L140 65.6 Z M145 65.6 L145.495 66.095 L211.095 0.494975 L210.6 0 L210.105 -0.494975 L144.505 65.105 L145 65.6 Z M150 65.6 L150.495 66.095 L216.095 0.494975 L215.6 0 L215.105 -0.494975 L149.505 65.105 L150 65.6 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "214.55px", top: "10.93px", width: "20px", height: "71.07px", borderRadius: "5px", background: "linear-gradient(180deg, #8baef8 0%, #7aa2f7 100%)", boxShadow: "inset 0 0 0 1px rgba(95, 126, 193, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "264.45px", top: "21.87px", width: "20px", height: "60.13px", borderRadius: "5px", background: "linear-gradient(180deg, #566ea3 0%, #4c618d 100%)", boxShadow: "inset 0 0 0 1px rgba(116, 154, 235, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <svg data-fu="plot" style={{ position: "absolute", left: "-60.13px", top: "0px", width: "200.13px", height: "60.13px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="200.13" height="60.13" viewBox="0 0 200.13 60.13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 60.13 L0.494975 60.625 L60.625 0.494975 L60.13 0 L59.635 -0.494975 L-0.494975 59.635 L0 60.13 Z M5 60.13 L5.49497 60.625 L65.625 0.494975 L65.13 0 L64.635 -0.494975 L4.50503 59.635 L5 60.13 Z M10 60.13 L10.495 60.625 L70.625 0.494975 L70.13 0 L69.635 -0.494975 L9.50502 59.635 L10 60.13 Z M15 60.13 L15.495 60.625 L75.625 0.494975 L75.13 0 L74.635 -0.494975 L14.505 59.635 L15 60.13 Z M20 60.13 L20.495 60.625 L80.625 0.494975 L80.13 0 L79.635 -0.494975 L19.505 59.635 L20 60.13 Z M25 60.13 L25.495 60.625 L85.625 0.494975 L85.13 0 L84.635 -0.494975 L24.505 59.635 L25 60.13 Z M30 60.13 L30.495 60.625 L90.625 0.494975 L90.13 0 L89.635 -0.494975 L29.505 59.635 L30 60.13 Z M35 60.13 L35.495 60.625 L95.625 0.494975 L95.13 0 L94.635 -0.494975 L34.505 59.635 L35 60.13 Z M40 60.13 L40.495 60.625 L100.625 0.494975 L100.13 0 L99.635 -0.494975 L39.505 59.635 L40 60.13 Z M45 60.13 L45.495 60.625 L105.625 0.494975 L105.13 0 L104.635 -0.494975 L44.505 59.635 L45 60.13 Z M50 60.13 L50.495 60.625 L110.625 0.494975 L110.13 0 L109.635 -0.494975 L49.505 59.635 L50 60.13 Z M55 60.13 L55.495 60.625 L115.625 0.494975 L115.13 0 L114.635 -0.494975 L54.505 59.635 L55 60.13 Z M60 60.13 L60.495 60.625 L120.625 0.494975 L120.13 0 L119.635 -0.494975 L59.505 59.635 L60 60.13 Z M65 60.13 L65.495 60.625 L125.625 0.494975 L125.13 0 L124.635 -0.494975 L64.505 59.635 L65 60.13 Z M70 60.13 L70.495 60.625 L130.625 0.494975 L130.13 0 L129.635 -0.494975 L69.505 59.635 L70 60.13 Z M75 60.13 L75.495 60.625 L135.625 0.494975 L135.13 0 L134.635 -0.494975 L74.505 59.635 L75 60.13 Z M80 60.13 L80.495 60.625 L140.625 0.494975 L140.13 0 L139.635 -0.494975 L79.505 59.635 L80 60.13 Z M85 60.13 L85.495 60.625 L145.625 0.494975 L145.13 0 L144.635 -0.494975 L84.505 59.635 L85 60.13 Z M90 60.13 L90.495 60.625 L150.625 0.494975 L150.13 0 L149.635 -0.494975 L89.505 59.635 L90 60.13 Z M95 60.13 L95.495 60.625 L155.625 0.494975 L155.13 0 L154.635 -0.494975 L94.505 59.635 L95 60.13 Z M100 60.13 L100.495 60.625 L160.625 0.494975 L160.13 0 L159.635 -0.494975 L99.505 59.635 L100 60.13 Z M105 60.13 L105.495 60.625 L165.625 0.494975 L165.13 0 L164.635 -0.494975 L104.505 59.635 L105 60.13 Z M110 60.13 L110.495 60.625 L170.625 0.494975 L170.13 0 L169.635 -0.494975 L109.505 59.635 L110 60.13 Z M115 60.13 L115.495 60.625 L175.625 0.494975 L175.13 0 L174.635 -0.494975 L114.505 59.635 L115 60.13 Z M120 60.13 L120.495 60.625 L180.625 0.494975 L180.13 0 L179.635 -0.494975 L119.505 59.635 L120 60.13 Z M125 60.13 L125.495 60.625 L185.625 0.494975 L185.13 0 L184.635 -0.494975 L124.505 59.635 L125 60.13 Z M130 60.13 L130.495 60.625 L190.625 0.494975 L190.13 0 L189.635 -0.494975 L129.505 59.635 L130 60.13 Z M135 60.13 L135.495 60.625 L195.625 0.494975 L195.13 0 L194.635 -0.494975 L134.505 59.635 L135 60.13 Z M140 60.13 L140.495 60.625 L200.625 0.494975 L200.13 0 L199.635 -0.494975 L139.505 59.635 L140 60.13 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "314.35px", top: "42.37px", width: "20px", height: "39.63px", borderRadius: "5px", background: "linear-gradient(180deg, #566ea3 0%, #4c618d 100%)", boxShadow: "inset 0 0 0 1px rgba(116, 154, 235, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <svg data-fu="plot" style={{ position: "absolute", left: "-39.63px", top: "0px", width: "134.63px", height: "39.63px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="134.63" height="39.63" viewBox="0 0 134.63 39.63" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 39.63 L0.494975 40.125 L40.125 0.494975 L39.63 0 L39.135 -0.494975 L-0.494975 39.135 L0 39.63 Z M5 39.63 L5.49497 40.125 L45.125 0.494975 L44.63 0 L44.135 -0.494975 L4.50503 39.135 L5 39.63 Z M10 39.63 L10.495 40.125 L50.125 0.494975 L49.63 0 L49.135 -0.494975 L9.50502 39.135 L10 39.63 Z M15 39.63 L15.495 40.125 L55.125 0.494975 L54.63 0 L54.135 -0.494975 L14.505 39.135 L15 39.63 Z M20 39.63 L20.495 40.125 L60.125 0.494975 L59.63 0 L59.135 -0.494975 L19.505 39.135 L20 39.63 Z M25 39.63 L25.495 40.125 L65.125 0.494975 L64.63 0 L64.135 -0.494975 L24.505 39.135 L25 39.63 Z M30 39.63 L30.495 40.125 L70.125 0.494975 L69.63 0 L69.135 -0.494975 L29.505 39.135 L30 39.63 Z M35 39.63 L35.495 40.125 L75.125 0.494975 L74.63 0 L74.135 -0.494975 L34.505 39.135 L35 39.63 Z M40 39.63 L40.495 40.125 L80.125 0.494975 L79.63 0 L79.135 -0.494975 L39.505 39.135 L40 39.63 Z M45 39.63 L45.495 40.125 L85.125 0.494975 L84.63 0 L84.135 -0.494975 L44.505 39.135 L45 39.63 Z M50 39.63 L50.495 40.125 L90.125 0.494975 L89.63 0 L89.135 -0.494975 L49.505 39.135 L50 39.63 Z M55 39.63 L55.495 40.125 L95.125 0.494975 L94.63 0 L94.135 -0.494975 L54.505 39.135 L55 39.63 Z M60 39.63 L60.495 40.125 L100.125 0.494975 L99.63 0 L99.135 -0.494975 L59.505 39.135 L60 39.63 Z M65 39.63 L65.495 40.125 L105.125 0.494975 L104.63 0 L104.135 -0.494975 L64.505 39.135 L65 39.63 Z M70 39.63 L70.495 40.125 L110.125 0.494975 L109.63 0 L109.135 -0.494975 L69.505 39.135 L70 39.63 Z M75 39.63 L75.495 40.125 L115.125 0.494975 L114.63 0 L114.135 -0.494975 L74.505 39.135 L75 39.63 Z M80 39.63 L80.495 40.125 L120.125 0.494975 L119.63 0 L119.135 -0.494975 L79.505 39.135 L80 39.63 Z M85 39.63 L85.495 40.125 L125.125 0.494975 L124.63 0 L124.135 -0.494975 L84.505 39.135 L85 39.63 Z M90 39.63 L90.495 40.125 L130.125 0.494975 L129.63 0 L129.135 -0.494975 L89.505 39.135 L90 39.63 Z M95 39.63 L95.495 40.125 L135.125 0.494975 L134.63 0 L134.135 -0.494975 L94.505 39.135 L95 39.63 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
            </div>
            <p style={{ position: "absolute", left: "3.95px", top: "84px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>May 25</p>
            <p style={{ position: "absolute", left: "60.35px", top: "84px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Jun 1</p>
            <p style={{ position: "absolute", left: "108.75px", top: "84px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Jun 8</p>
            <p style={{ position: "absolute", left: "156.15px", top: "84px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Jun 15</p>
            <p style={{ position: "absolute", left: "204.55px", top: "84px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>Jun 22</p>
            <p style={{ position: "absolute", left: "254.95px", top: "84px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Jun 29</p>
            <p style={{ position: "absolute", left: "310.35px", top: "84px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Jul 6</p>
            <div style={{ position: "absolute", left: "187.68px", top: "-13.81px", width: "73.74px", height: "21.74px", borderRadius: "6px", background: "#000000", boxShadow: "inset 0 0 0 0.87px #3a3a3a, 0px 6px 24px 0px rgba(123, 91, 255, 0.1)", display: "flex", flexDirection: "row", padding: "3.87px 7.87px 3.87px 7.87px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ededed" }}>Jun 22 · 52</p>
            </div>
            <svg style={{ position: "absolute", left: "220.55px", top: "6.73px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#000000"/></svg>
          </div>
          <p style={{ position: "absolute", left: "308.3px", top: "11px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>251 MG1</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 8px 0px 8px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Report</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>6 items</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "170px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Campaign June results</p>
          <p style={{ width: "353.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>June campaign: MG1 by week and the plan mix of new customers</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(123, 91, 255, 0.18), rgba(123, 91, 255, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(227, 179, 65, 0.18), rgba(227, 179, 65, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#eac671" }}>AC</p>
              </div>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Updated Jul 22</p>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1044.6px", top: "788px", width: "381.3px", height: "268px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "369.3px", height: "132px", flexShrink: 0, borderRadius: "7px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "14px", top: "10px", width: "32px", height: "32px", borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>JUL</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>28</p>
          </div>
          <div style={{ position: "absolute", left: "56px", top: "10px", width: "229px", height: "32px", display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "229px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>W31 · Push reporting back above 80%</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>42 min · 11 leaders</p>
          </div>
          <div style={{ position: "absolute", left: "292.3px", top: "19px", width: "63px", height: "14px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e3b341", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>5 actions</p>
          </div>
          <div style={{ position: "absolute", left: "56px", top: "46px", width: "299.3px", height: "1px", background: "#222222" }} />
          <div style={{ position: "absolute", left: "14px", top: "50px", width: "32px", height: "32px", borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>JUL</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>21</p>
          </div>
          <div style={{ position: "absolute", left: "56px", top: "50px", width: "206px", height: "32px", display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "206px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>W30 · Walk-in event at Ágora Mall</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>38 min · 9 leaders</p>
          </div>
          <div style={{ position: "absolute", left: "292.3px", top: "59px", width: "63px", height: "14px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>3 actions</p>
          </div>
          <div style={{ position: "absolute", left: "56px", top: "86px", width: "299.3px", height: "1px", background: "#222222" }} />
          <div style={{ position: "absolute", left: "14px", top: "90px", width: "32px", height: "32px", borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>JUL</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>14</p>
          </div>
          <div style={{ position: "absolute", left: "56px", top: "90px", width: "224px", height: "32px", display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "224px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>W29 · Family upsell list, first 40 calls</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>51 min · 12 leaders</p>
          </div>
          <div style={{ position: "absolute", left: "292.3px", top: "99px", width: "63px", height: "14px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>4 actions</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 8px 0px 8px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>List</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>18 notes</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Leaders call notes</p>
          <p style={{ width: "353.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Tuesday leaders call · decisions, owners and follow-ups</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(123, 91, 255, 0.18), rgba(123, 91, 255, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(63, 179, 127, 0.18), rgba(63, 179, 127, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6fc69f" }}>JL</p>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(229, 85, 155, 0.18), rgba(229, 85, 155, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-3px" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
              </div>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Updated Jul 28</p>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
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
