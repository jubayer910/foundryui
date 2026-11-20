// Settings, general page (auton, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { AlertTriangle, Api, Archive, Bell, Checklist, ChevronDown, ClipboardList, Clock, Command, CreditCard, Key, LayoutDashboard, Menu2, Outlet, Plus, Search, Settings, Shield, ShieldCheck, ShieldKeyhole, Upload, UserShield, Users, World } from "ingotui-icons/react/stroke-rounded";
import { Bolt as BoltSolid, CircleCheck as CircleCheckSolid, PlayerRecord as PlayerRecordSolid, Settings as SettingsSolid } from "ingotui-icons/react/solid";

export function SettingsGeneralPage() {
  return (
    <div style={{ width: "1440px", height: "1026px", background: "#fafafa", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "243px", top: "60px", width: "1173px", height: "966px", background: "#ffffff", boxShadow: "inset -1px 0 0 0 #e2e4e5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "240px", height: "966px", background: "#fafafa", boxShadow: "inset -1px 0 0 0 #e2e4e5", display: "flex", flexDirection: "column", padding: "20px 17px 20px 16px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Workspace</p>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8.25px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Settings size={16} strokeWidth={1.95} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#111111", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>General</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 8px 0px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ShieldCheck size={16} strokeWidth={1.95} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Security</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 8px 0px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Bell size={16} strokeWidth={1.95} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Notifications</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 8px 0px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Api size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>API keys</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 8px 0px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CreditCard size={16} strokeWidth={1.95} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Billing & plan</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 8px 0px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <AlertTriangle size={16} strokeWidth={2.6} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#f14c43", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#f14c43", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Danger zone</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "240px", top: "0px", width: "933px", height: "966px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "column", padding: "24px 32px 21px 32px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>General</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "339px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Workspace identity and defaults every agent inherits.</p>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 32px 0px 32px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "20px 0px 21px 0px", gap: "40px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Workspace name</p>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#777777", lineHeight: "1.4500000476837158" }}>Shown to teammates and in approval messages.</p>
              </div>
              <div style={{ width: "520px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Acme</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "20px 0px 21px 0px", gap: "40px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Workspace URL</p>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#777777", lineHeight: "1.4500000476837158" }}>Changing it breaks old deep links in Slack threads.</p>
              </div>
              <div style={{ width: "520px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ height: "40px", flexShrink: 0, background: "#fafafa", boxShadow: "inset -1px 0 0 0 #e7e9eb", display: "flex", flexDirection: "row", padding: "0px 13px 0px 12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>auton.app/</p>
                </div>
                <div style={{ height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>acme</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "20px 0px 21px 0px", gap: "40px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Logo</p>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#777777", lineHeight: "1.4500000476837158" }}>Appears in the sidebar and in emails.</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "48px", flexShrink: 0, borderRadius: "12px", background: "#222222", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 400, color: "#ffffff", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "14px" }}>A</p>
                </div>
                <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Upload size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Upload</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>PNG or SVG, 256 px</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "20px 0px 21px 0px", gap: "40px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Default region</p>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#777777", lineHeight: "1.4500000476837158" }}>Where credentials are minted and audit data is stored.</p>
              </div>
              <div style={{ width: "520px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <World size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#444444", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "176px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>EU · Frankfurt (eu-central-1)</p>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
                <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#666666", display: "block" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "20px 0px 21px 0px", gap: "40px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Default credential TTL</p>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#777777", lineHeight: "1.4500000476837158" }}>New credentials use this unless a policy says shorter.</p>
              </div>
              <div style={{ width: "520px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "520px", height: "24px", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "8px", width: "520px", height: "8px", borderRadius: "10px", background: "#fafafa" }} />
                  <div style={{ position: "absolute", left: "0px", top: "8px", width: "130px", height: "8px", borderRadius: "10px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)" }} />
                  <div style={{ position: "absolute", left: "120px", top: "2px", width: "20px", height: "20px", borderRadius: "60px", background: "#328ff9", boxShadow: "0px 0px 0px 4px rgba(46, 109, 232, 0.2), 0px 0px 0px 8px rgba(46, 109, 232, 0.2), inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#ffffff"/></svg>
                  </div>
                </div>
                <div style={{ width: "520px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>5 min</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>15 min</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>1 h</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>4 h</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>24 h</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "20px 0px 21px 0px", gap: "40px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Audit retention</p>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#777777", lineHeight: "1.4500000476837158" }}>Older events are archived to your S3 bucket.</p>
              </div>
              <div style={{ width: "520px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Archive size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#444444", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>1 year</p>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
                <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#666666", display: "block" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "20px 0px 21px 0px", gap: "40px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Timezone</p>
                <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#777777", lineHeight: "1.4500000476837158" }}>Used for approval windows and reports.</p>
              </div>
              <div style={{ width: "520px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#444444", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Europe/Berlin · CET</p>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
                <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#666666", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "15px 32px 14px 32px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "189px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Last saved Oct 3 by Maya Chen</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 15px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Discard</p>
            </div>
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "0px 14px 0px 14px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Save changes</p>
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
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box", position: "relative" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Checklist size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approvals</p>
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
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8.25px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", overflow: "hidden", display: "flex", flexDirection: "row", padding: "8px 0px 8px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <SettingsSolid size={16} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#111111", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Settings</p>
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
        <p style={{ position: "absolute", left: "16px", top: "24px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>Settings</p>
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
