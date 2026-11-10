// Navigation (auton, Charts) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Checklist, ClipboardList, Key, Outlet, Settings, Shield, ShieldKeyhole, UserShield, Users } from "foundryui-icons/react/stroke-rounded";
import { Bolt as BoltSolid, CircleCheck as CircleCheckSolid, LayoutDashboard as LayoutDashboardSolid, PlayerRecord as PlayerRecordSolid } from "foundryui-icons/react/solid";

export function Navigation() {
  return (
    <div style={{ width: "243px", height: "1080px", background: "#fafafa", boxShadow: "inset -1px 0 0 0 #e2e4e5", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "-19px", top: "608px", width: "280px", height: "247px" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "280px", height: "247px", background: "#e5e7eb" }} />
        <div style={{ position: "absolute", left: "52px", top: "33px", width: "173px", height: "208px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "12px", top: "16px", width: "148px", height: "43px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden", position: "relative" }}>
              <ShieldKeyhole size={24} style={{ position: "absolute", left: "10px", top: "10px", width: "24px", height: "24px", color: "#333333", display: "block", flexShrink: 0 }} />
            </div>
            <div style={{ width: "97px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.399999976158142", letterSpacing: "-0.02em", textBox: "trim-both cap alphabetic", height: "11px" }}>deploy-agent</p>
              <div style={{ height: "20px", flexShrink: 0, borderRadius: "12px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "9px 9px 9px 9px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>Production</p>
              </div>
            </div>
          </div>
          <svg style={{ position: "absolute", left: "12px", top: "75px", width: "149px", height: "0px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="149" height="0.01" viewBox="0 0 149 0.01" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L149 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round"/></svg>
          <div style={{ position: "absolute", left: "12px", top: "86px", width: "149px", height: "32px", borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "8px", top: "6px", width: "112px", height: "21px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "21px", height: "21px", flexShrink: 0, background: "#e5e7eb" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>GitHub</p>
                <PlayerRecordSolid size={8} style={{ width: "8px", height: "8px", flexShrink: 0, color: "#333333", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Read</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "12px", top: "126px", width: "149px", height: "32px", borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "8px", top: "8px", width: "115px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "26px", height: "16px", flexShrink: 0, background: "#e5e7eb" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>AWS</p>
                <PlayerRecordSolid size={8} style={{ width: "8px", height: "8px", flexShrink: 0, color: "#333333", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Deploy</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "12px", top: "166px", width: "149px", height: "32px", borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #f0f2f1", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "8px", top: "6px", width: "112px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheckSolid size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#07bc6d", display: "block" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Scoped access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "18px", width: "208px", height: "22px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "13332px", boxShadow: "inset 0 0 0 1.3px #212121", overflow: "hidden" }} />
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "13332px", background: "#212121", boxShadow: "inset 0 0 0 1.3px #212121", overflow: "hidden" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", letterSpacing: "-0.06em" }}>Auton</p>
        </div>
        <svg style={{ width: "20px", height: "20px", flexShrink: 0, transform: "rotate(180deg)", transformOrigin: "top left", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 5 5.833)" d="M-0.53033 7.803 C-0.823223 8.0959 -0.823223 8.57077 -0.53033 8.86366 C-0.237437 9.15656 0.237437 9.15656 0.53033 8.86366 L0 8.33333 L-0.53033 7.803 Z M4.16667 4.16667 L4.697 4.697 C4.98989 4.4041 4.98989 3.92923 4.697 3.63634 L4.16667 4.16667 Z M0.53033 -0.53033 C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033 C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033 L0 0 L0.53033 -0.53033 Z M0 8.33333 L0.53033 8.86366 L4.697 4.697 L4.16667 4.16667 L3.63634 3.63634 L-0.53033 7.803 L0 8.33333 Z M4.16667 4.16667 L4.697 3.63634 L0.53033 -0.53033 L0 0 L-0.53033 0.53033 L3.63634 4.697 L4.16667 4.16667 Z" fill="#444444"/><path transform="matrix(1 0 0 1 10.833 5.833)" d="M-0.53033 7.803 C-0.823223 8.0959 -0.823223 8.57077 -0.53033 8.86366 C-0.237437 9.15656 0.237437 9.15656 0.53033 8.86366 L0 8.33333 L-0.53033 7.803 Z M4.16667 4.16667 L4.697 4.697 C4.98989 4.4041 4.98989 3.92923 4.697 3.63634 L4.16667 4.16667 Z M0.53033 -0.53033 C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033 C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033 L0 0 L0.53033 -0.53033 Z M0 8.33333 L0.53033 8.86366 L4.697 4.697 L4.16667 4.16667 L3.63634 3.63634 L-0.53033 7.803 L0 8.33333 Z M4.16667 4.16667 L4.697 3.63634 L0.53033 -0.53033 L0 0 L-0.53033 0.53033 L3.63634 4.697 L4.16667 4.16667 Z" fill="#444444"/></svg>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "82px", width: "207px", height: "382px", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>WORKSPACE</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "207px", height: "32px", flexShrink: 0, borderRadius: "8.3px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "8px", top: "8px", width: "84px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <LayoutDashboardSolid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#111111", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Overview</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.04)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "8px", top: "10px", width: "70px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <UserShield size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Agents</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.04)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "8px", top: "10px", width: "123px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Shield size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Access policies</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.04)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "8px", top: "10px", width: "97px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Key size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Credentials</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.04)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 8px 0px 8px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Checklist size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approvals</p>
              </div>
              <div style={{ width: "20px", height: "20px", flexShrink: 0, borderRadius: "10px", background: "#eef0f2", boxShadow: "inset 0 0 0 1px #ffffff", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555" }}>3</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.04)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "8px", top: "10px", width: "81px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ClipboardList size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Audit log</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "199px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>MANAGE</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.04)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "8px", top: "10px", width: "101px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Outlet size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Integrations</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.04)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "8px", top: "10px", width: "59px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Team</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.04)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "8px", top: "10px", width: "78px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Settings size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg style={{ position: "absolute", left: "0px", top: "60px", width: "242px", height: "0px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="242" height="0.01" viewBox="0 0 242 0.01" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L242 0 L242 -0.5 L242 -1 L0 -1 L0 -0.5 Z" fill="#e7e9eb"/></svg>
      <div style={{ position: "absolute", left: "16px", top: "856px", width: "207px", height: "142px", borderRadius: "12px", background: "radial-gradient(rgba(184, 235, 255, 0.72) 0%, rgba(194, 224, 255, 0.2) 68%, rgba(255, 255, 255, 0) 100%), radial-gradient(rgba(77, 235, 201, 0.68) 0%, rgba(166, 242, 237, 0.22) 62%, rgba(255, 255, 255, 0) 100%), linear-gradient(98.6deg, #8fe8e0 -5.1%, #d6f5fa 40.1%, #87b2fa 102.7%)", boxShadow: "inset 0 0 0 1px #ffffff, 0px 0px 20px 4px rgba(0, 0, 0, 0.01)", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "16px", top: "23px", width: "172px", margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#000000", lineHeight: "1.399999976158142", letterSpacing: "-0.02em" }}>Upgrade to Pro to get the Latest Scopara</p>
        <div style={{ position: "absolute", left: "16px", top: "86px", width: "175px", height: "40px", borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ffffff", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "29.5px", top: "10px", width: "117px", height: "20px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <BoltSolid size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#328ff9", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.25", letterSpacing: "-0.02em", textBox: "trim-both cap alphabetic", height: "10px" }}>Upgrade to Pro</p>
          </div>
        </div>
      </div>
    </div>
  );
}
