// Approvals page (auton, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { AlertTriangle, Bell, Check, Circle, CircleX, ClipboardList, Command, Filter, Key, LayoutDashboard, Menu2, Outlet, Plus, Rocket, Search, Settings, Shield, ShieldKeyhole, SlidersHorizontal, Timer, UserShield, Users } from "ingotui-icons/react/stroke-rounded";
import { Bolt as BoltSolid, Checklist as ChecklistSolid, CircleCheck as CircleCheckSolid, PlayerRecord as PlayerRecordSolid } from "ingotui-icons/react/solid";

export function ApprovalsPage() {
  return (
    <div style={{ width: "1440px", height: "1026px", background: "#fafafa", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "243px", top: "60px", width: "1173px", height: "966px", background: "#ffffff", boxShadow: "inset -1px 0 0 0 #e2e4e5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "400px", height: "966px", boxShadow: "inset -1px 0 0 0 #e2e4e5", display: "flex", flexDirection: "column", padding: "20px 1px 0px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 20px 16px 20px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>Requests</p>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "999px", background: "#fbfbfb", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", textBox: "trim-both cap alphabetic", height: "9px" }}>03</p>
                </div>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9999px", background: "#fafafa", overflow: "hidden", position: "relative" }}>
                <Filter size={16} strokeWidth={2.25} style={{ position: "absolute", left: "8px", top: "8px", width: "16px", height: "16px", color: "#444444", display: "block", flexShrink: 0 }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", background: "#f5f5f5", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "11px 9px 11px 9px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Pending</p>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "999px", background: "#fbfbfb", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", textBox: "trim-both cap alphabetic", height: "9px" }}>3</p>
                </div>
              </div>
              <div style={{ height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 8px 10px 8px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approved</p>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "999px", background: "#fbfbfb", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", textBox: "trim-both cap alphabetic", height: "9px" }}>28</p>
                </div>
              </div>
              <div style={{ height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 8px 10px 8px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Denied</p>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "999px", background: "#fbfbfb", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", textBox: "trim-both cap alphabetic", height: "9px" }}>4</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Search requests</p>
            </div>
          </div>
          <svg style={{ width: "399px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="399" height="1" viewBox="0 0 399 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 20 0)" d="M0 0L360 0" fill="none" stroke="#e2e4e5" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 12px 12px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#fcfcfc", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "15px 13px 15px 13px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <Circle size={40} strokeWidth={0.9} style={{ width: "40px", height: "40px", flexShrink: 0, color: "#333333", display: "block" }} />
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "187px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Production access requested</p>
                </div>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>deploy-agent → AWS · Update production service</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>2 min ago · expires in 13 min</p>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fff5f5", boxShadow: "inset 0 0 0 1px rgba(255, 125, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#470909", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>High risk</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", display: "flex", flexDirection: "row", padding: "14px 12px 14px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <Circle size={40} strokeWidth={0.9} style={{ width: "40px", height: "40px", flexShrink: 0, color: "#333333", display: "block" }} />
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "146px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Write to finance.ledger</p>
                </div>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>data-sync → Snowflake · 1,240 rows</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "161px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>18 min ago · expires in 42 min</p>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px rgba(255, 206, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Medium risk</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", display: "flex", flexDirection: "row", padding: "14px 12px 14px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <Circle size={40} strokeWidth={0.9} style={{ width: "40px", height: "40px", flexShrink: 0, color: "#333333", display: "block" }} />
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "185px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Bulk email to 240 customers</p>
                </div>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>support-assistant → Gmail · Send</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "164px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>32 min ago · expires in 28 min</p>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px rgba(255, 206, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Medium risk</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 12px 6px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Earlier today</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, opacity: 0.7, borderRadius: "12px", display: "flex", flexDirection: "row", padding: "14px 12px 14px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <Circle size={40} strokeWidth={0.9} style={{ width: "40px", height: "40px", flexShrink: 0, color: "#333333", display: "block" }} />
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Read Q3 invoices</p>
                </div>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>invoice-processor → Gmail · Read</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "180px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Approved by Maya Chen · 1 h ago</p>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#edfbf3", boxShadow: "inset 0 0 0 1px rgba(95, 211, 154, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#073b22", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approved</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, opacity: 0.7, borderRadius: "12px", display: "flex", flexDirection: "row", padding: "14px 12px 14px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <Circle size={40} strokeWidth={0.9} style={{ width: "40px", height: "40px", flexShrink: 0, color: "#333333", display: "block" }} />
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "198px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Scale prod cluster to 40 nodes</p>
                </div>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>deploy-agent → AWS · autoscaling</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "167px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Denied by Arjun Patel · 3 h ago</p>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fff5f5", boxShadow: "inset 0 0 0 1px rgba(255, 125, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#470909", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Denied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "400px", top: "0px", width: "773px", height: "966px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "20px 24px 21px 24px", gap: "14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", height: "44px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Rocket size={20} strokeWidth={1.8} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#333333", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "419px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>deploy-agent wants to update a production service</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "136px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Requested 2 min ago</p>
                <PlayerRecordSolid size={6} style={{ width: "6px", height: "6px", flexShrink: 0, color: "#888888", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "263px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Policy: Production deploys need approval</p>
              </div>
            </div>
            <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px rgba(255, 206, 125, 0.4)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Timer size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#472c09", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Expires in 12:48</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "20px 24px 20px 24px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f2f4f5", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "16px 16px 16px 16px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Action</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "143px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>ecs:UpdateService</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Resource</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>prod-billing · eu-west-1</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Duration</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>15 min</p>
                </div>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, boxShadow: "inset 1px 0 0 0 #f2f4f5", display: "flex", flexDirection: "column", padding: "16px 16px 16px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Agent</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>deploy-agent · Platform</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Owner</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Arjun Patel</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Ticket</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>INC-2291 · approved</p>
                </div>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Agent’s reason</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e4e5", display: "flex", flexDirection: "row", padding: "15px 17px 15px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "3px", height: "44px", flexShrink: 0, borderRadius: "2px", background: "#328ff9" }} />
              <p style={{ width: "680px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.5" }}>Deploying hotfix v2.14.3 for the invoice rounding bug (INC-2291). Needs ecs:UpdateService on prod-billing for 15 minutes; rolls back automatically if health checks fail.</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Scope change</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", boxShadow: "inset 0 0 0 1px #e2e4e5", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#f6fcf9", boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 14px 13px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "143px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>ecs:UpdateService</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>prod-billing</p>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
                <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px rgba(255, 206, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Needs approval</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#f6fcf9", boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 14px 13px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "143px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>ecr:BatchGetImage</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>billing-api images</p>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
                <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Auto-allowed</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12px 14px 12px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>=</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>s3:GetObject</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>deploy-artifacts</p>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
                <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#f5f5f5", boxShadow: "inset 0 0 0 1px rgba(185, 188, 191, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Unchanged</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Risk signals</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CircleCheckSolid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#07bc6d", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "211px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Linked change ticket is approved</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CircleCheckSolid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#07bc6d", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "211px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Inside business hours (14:21 CET)</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <AlertTriangle size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#472c09", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "214px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>First production deploy this week</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CircleCheckSolid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#07bc6d", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "215px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Health-check rollback configured</p>
                </div>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Approvals</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>1 of 2</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "999px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "8px" }}>AP</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "173px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Arjun Patel · Platform leads</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Approved · 1 min ago</p>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "8px" }}>MC</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "216px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Maya Chen · Security on-call · you</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Waiting for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "15px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "252px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Decision is logged with your name and reason</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleX size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#f14c43", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#f14c43", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Deny</p>
            </div>
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <SlidersHorizontal size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approve with limits</p>
            </div>
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "0px 14px 0px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approve for 15 min</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "243px", height: "1080px", background: "#fafafa", boxShadow: "inset -1px 0 0 0 #e2e4e5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "-19px", top: "608px", width: "280px", height: "247px" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "280px", height: "247px", background: "url('https://ingotui.com/library-img/ae303b6c3e6fae384f56814a669c2459ff0fac06.png') -72.72px -87.68px / 415.55px 419.93px no-repeat" }} />
          <div style={{ position: "absolute", left: "52px", top: "33px", width: "173px", height: "208px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "12px", top: "16px", width: "148px", height: "43px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden", position: "relative" }}>
                <ShieldKeyhole size={24} style={{ position: "absolute", left: "10px", top: "10px", width: "24px", height: "24px", color: "#333333", display: "block", flexShrink: 0 }} />
              </div>
              <div style={{ width: "97px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.399999976158142", letterSpacing: "-0.02em", textBox: "trim-both cap alphabetic", height: "11px" }}>deploy-agent</p>
                <div style={{ height: "20px", flexShrink: 0, borderRadius: "12px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "9px 9px 9px 9px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>Production</p>
                </div>
              </div>
            </div>
            <svg style={{ position: "absolute", left: "12px", top: "75px", width: "149px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="149" height="1" viewBox="0 0 149 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L149 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round"/></svg>
            <div style={{ position: "absolute", left: "12px", top: "86px", width: "149px", height: "32px", borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8px", top: "6px", width: "112px", height: "21px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "21px", height: "21px", flexShrink: 0, background: "url('https://ingotui.com/library-img/9606064a2714f05904aa80f7a34774ee2491a3b4.png') center / cover no-repeat" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>GitHub</p>
                  <PlayerRecordSolid size={8} style={{ width: "8px", height: "8px", flexShrink: 0, color: "#333333", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Read</p>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "12px", top: "126px", width: "149px", height: "32px", borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8px", top: "8px", width: "115px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "26px", height: "16px", flexShrink: 0, background: "url('https://ingotui.com/library-img/dfd4513aa7260aa3aa00ae30cea8f90091e13079.png') -1.22px 0px / 28.44px 16px no-repeat" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>AWS</p>
                  <PlayerRecordSolid size={8} style={{ width: "8px", height: "8px", flexShrink: 0, color: "#333333", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Deploy</p>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "12px", top: "166px", width: "149px", height: "32px", borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #f0f2f1", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8px", top: "6px", width: "112px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheckSolid size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#07bc6d", display: "block" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Scoped access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "16px", top: "18px", width: "208px", height: "22px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "13332px", boxShadow: "inset 0 0 0 1.33px #212121", overflow: "hidden" }} />
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "13332px", background: "#212121", boxShadow: "inset 0 0 0 1.33px #212121", overflow: "hidden", marginLeft: "-8px" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", letterSpacing: "-0.06em" }}>Auton</p>
          </div>
          <svg style={{ width: "20px", height: "20px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" overflow="visible"><path transform="matrix(-1 0 0 1 15 5.833)" d="M-0.53033 7.803 C-0.823223 8.0959 -0.823223 8.57077 -0.53033 8.86366 C-0.237437 9.15656 0.237437 9.15656 0.53033 8.86366 L0 8.33333 L-0.53033 7.803 Z M4.16667 4.16667 L4.697 4.697 C4.98989 4.4041 4.98989 3.92923 4.697 3.63634 L4.16667 4.16667 Z M0.53033 -0.53033 C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033 C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033 L0 0 L0.53033 -0.53033 Z M0 8.33333 L0.53033 8.86366 L4.697 4.697 L4.16667 4.16667 L3.63634 3.63634 L-0.53033 7.803 L0 8.33333 Z M4.16667 4.16667 L4.697 3.63634 L0.53033 -0.53033 L0 0 L-0.53033 0.53033 L3.63634 4.697 L4.16667 4.16667 Z" fill="#444444"/><path transform="matrix(-1 0 0 1 9.167 5.833)" d="M-0.53033 7.803 C-0.823223 8.0959 -0.823223 8.57077 -0.53033 8.86366 C-0.237437 9.15656 0.237437 9.15656 0.53033 8.86366 L0 8.33333 L-0.53033 7.803 Z M4.16667 4.16667 L4.697 4.697 C4.98989 4.4041 4.98989 3.92923 4.697 3.63634 L4.16667 4.16667 Z M0.53033 -0.53033 C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033 C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033 L0 0 L0.53033 -0.53033 Z M0 8.33333 L0.53033 8.86366 L4.697 4.697 L4.16667 4.16667 L3.63634 3.63634 L-0.53033 7.803 L0 8.33333 Z M4.16667 4.16667 L4.697 3.63634 L0.53033 -0.53033 L0 0 L-0.53033 0.53033 L3.63634 4.697 L4.16667 4.16667 Z" fill="#444444"/></svg>
        </div>
        <div style={{ position: "absolute", left: "16px", top: "82px", width: "207px", height: "378px", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>WORKSPACE</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "207px", height: "32px", flexShrink: 0, borderRadius: "8.25px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <LayoutDashboard size={16} strokeWidth={2.25} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Overview</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <UserShield size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Agents</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Shield size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Access policies</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Key size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Credentials</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8.25px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", overflow: "hidden", display: "flex", flexDirection: "row", padding: "8px 0px 8px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box", position: "relative" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <ChecklistSolid size={16} strokeWidth={3.38} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#111111", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approvals</p>
                </div>
                <div style={{ position: "absolute", left: "96px", top: "8px", width: "20px", height: "20px", borderRadius: "10px", background: "#eef0f2", boxShadow: "inset 0 0 0 1px #ffffff", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555" }}>3</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <ClipboardList size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Audit log</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>MANAGE</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Outlet size={16} strokeWidth={2.25} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Integrations</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Users size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Team</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Settings size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg style={{ position: "absolute", left: "0px", top: "60px", width: "242px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="242" height="1" viewBox="0 0 242 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L242 0 L242 -0.5 L242 -1 L0 -1 L0 -0.5 Z" fill="#e7e9eb"/></svg>
        <div style={{ position: "absolute", left: "16px", top: "856px", width: "207px", height: "142px", borderRadius: "12px", background: "radial-gradient(rgba(184, 235, 255, 0.72) 0%, rgba(194, 224, 255, 0.2) 68%, rgba(255, 255, 255, 0) 100%), radial-gradient(rgba(77, 235, 201, 0.68) 0%, rgba(166, 242, 237, 0.22) 62%, rgba(255, 255, 255, 0) 100%), linear-gradient(98.6deg, #8fe8e0 -5.1%, #d6f5fa 40.1%, #87b2fa 102.7%)", boxShadow: "inset 0 0 0 1px #ffffff, 0px 0px 20px 4px rgba(0, 0, 0, 0.01)", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "16px", top: "23px", width: "172px", margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#000000", lineHeight: "1.399999976158142", letterSpacing: "-0.02em", textBox: "trim-both cap alphabetic", height: "33px" }}>Upgrade to Pro to get the Latest Scopara</p>
          <div style={{ position: "absolute", left: "16px", top: "86px", width: "175px", height: "40px", borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ffffff", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "29.5px", top: "10px", width: "117px", height: "20px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <BoltSolid size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#328ff9", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.25", letterSpacing: "-0.02em", textBox: "trim-both cap alphabetic", height: "10px" }}>Upgrade to Pro</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "243px", top: "0px", width: "1197px", height: "60px", boxShadow: "inset 0 -1px 0 0 #e2e4e5", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "16px", top: "24px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>Approvals</p>
        <div style={{ position: "absolute", left: "845px", top: "12px", width: "328px", height: "36px", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "163px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "12px", top: "10px", width: "70px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Search</p>
            </div>
            <div style={{ position: "absolute", left: "349px", top: "8px", width: "42px", height: "20px", borderRadius: "6px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #d7d9db", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Command size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#555555", display: "block" }} />
              <Plus size={10} strokeWidth={2.4} style={{ width: "10px", height: "10px", flexShrink: 0, color: "#555555", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", textBox: "trim-both cap alphabetic", height: "9px" }}>K</p>
            </div>
            <div style={{ position: "absolute", left: "113px", top: "8px", width: "42px", height: "20px", borderRadius: "6px", background: "#fcfeff", boxShadow: "inset 0 0 0 1px #fafafa", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Command size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#888888", display: "block" }} />
              <Plus size={10} strokeWidth={2.4} style={{ width: "10px", height: "10px", flexShrink: 0, color: "#888888", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", textBox: "trim-both cap alphabetic", height: "9px" }}>K</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "65px", height: "36px", flexShrink: 0, borderRadius: "9999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "33px", top: "4px", width: "28px", height: "28px", borderRadius: "9999px", background: "url('https://ingotui.com/library-img/e0ad708d7aafaf5b9391ffa4508aacc5f965e437.png') center / cover no-repeat", boxShadow: "inset 0 0 0 1px #e7e9eb", overflow: "hidden" }} />
              <Menu2 size={18} strokeWidth={2} style={{ position: "absolute", left: "10px", top: "9px", width: "18px", height: "18px", color: "#222222", display: "block", flexShrink: 0 }} />
            </div>
            <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", overflow: "hidden", position: "relative" }}>
              <Bell size={16} strokeWidth={2.25} style={{ position: "absolute", left: "10px", top: "10px", width: "16px", height: "16px", color: "#222222", display: "block", flexShrink: 0 }} />
            </div>
            <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9999px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", overflow: "hidden", position: "relative" }}>
              <Plus size={20} strokeWidth={1.8} style={{ position: "absolute", left: "8px", top: "8px", width: "20px", height: "20px", color: "#ffffff", display: "block", flexShrink: 0 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
