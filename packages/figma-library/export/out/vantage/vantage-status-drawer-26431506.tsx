// Status drawer (vantage, Drawers) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Book, Calendar, Check, Checklist, ChevronDown, Loader, Note, Send, X } from "foundryui-icons/react/stroke-rounded";

export function StatusDrawer() {
  return (
    <div style={{ width: "440px", height: "1059px", borderRadius: "12px", background: "#1a1a1a", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 24px 64px -12px rgba(0, 0, 0, 0.55), 0px 12px 48px 0px rgba(123, 91, 255, 0.08)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "18px 18px 16px 18px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "8px", background: "rgba(227, 179, 65, 0.12)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Note size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#e7be5e", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ width: "300px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", lineHeight: "1.25", letterSpacing: "-0.01em" }}>Re-engage 27 members who missed the W30 report</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Task · Weekly report step · created Jul 28</p>
        </div>
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14px 18px 14px 18px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "100px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Status</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "7px", height: "7px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#8a8a8a"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>To do</p>
              <ChevronDown size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "100px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Assignee</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Oscar & Nayrobi Griñán</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "100px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Due</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#e3b341", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Today · Fri Jul 31, 18:00</p>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2a2316", boxShadow: "inset 0 0 0 1px #3a301c, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#e3b341", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Due today</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "100px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Playbook step</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Book size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Weekly report</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "100px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Created by</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Luis & Jackie Moreta</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14px 18px 14px 18px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Reporting in this leg</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>W30</p>
        </div>
        <div style={{ width: "404px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "404px", height: "10px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "215.9px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #ee91be 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "219.9px", top: "0px", width: "183.6px", height: "10px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="183.57" height="10" viewBox="0 0 183.57 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.22 0 L2.72 0 L2.72 10 L3.22 10 L3.72 10 L3.72 0 L3.22 0 Z M6.44 0 L5.94 0 L5.94 10 L6.44 10 L6.94 10 L6.94 0 L6.44 0 Z M9.66 0 L9.16 0 L9.16 10 L9.66 10 L10.16 10 L10.16 0 L9.66 0 Z M12.88 0 L12.38 0 L12.38 10 L12.88 10 L13.38 10 L13.38 0 L12.88 0 Z M16.1 0 L15.6 0 L15.6 10 L16.1 10 L16.6 10 L16.6 0 L16.1 0 Z M19.32 0 L18.82 0 L18.82 10 L19.32 10 L19.82 10 L19.82 0 L19.32 0 Z M22.54 0 L22.04 0 L22.04 10 L22.54 10 L23.04 10 L23.04 0 L22.54 0 Z M25.76 0 L25.26 0 L25.26 10 L25.76 10 L26.26 10 L26.26 0 L25.76 0 Z M28.98 0 L28.48 0 L28.48 10 L28.98 10 L29.48 10 L29.48 0 L28.98 0 Z M32.21 0 L31.71 0 L31.71 10 L32.21 10 L32.71 10 L32.71 0 L32.21 0 Z M35.43 0 L34.93 0 L34.93 10 L35.43 10 L35.93 10 L35.93 0 L35.43 0 Z M38.65 0 L38.15 0 L38.15 10 L38.65 10 L39.15 10 L39.15 0 L38.65 0 Z M41.87 0 L41.37 0 L41.37 10 L41.87 10 L42.37 10 L42.37 0 L41.87 0 Z M45.09 0 L44.59 0 L44.59 10 L45.09 10 L45.59 10 L45.59 0 L45.09 0 Z M48.31 0 L47.81 0 L47.81 10 L48.31 10 L48.81 10 L48.81 0 L48.31 0 Z M51.53 0 L51.03 0 L51.03 10 L51.53 10 L52.03 10 L52.03 0 L51.53 0 Z M54.75 0 L54.25 0 L54.25 10 L54.75 10 L55.25 10 L55.25 0 L54.75 0 Z M57.97 0 L57.47 0 L57.47 10 L57.97 10 L58.47 10 L58.47 0 L57.97 0 Z M61.19 0 L60.69 0 L60.69 10 L61.19 10 L61.69 10 L61.69 0 L61.19 0 Z M64.41 0 L63.91 0 L63.91 10 L64.41 10 L64.91 10 L64.91 0 L64.41 0 Z M67.63 0 L67.13 0 L67.13 10 L67.63 10 L68.13 10 L68.13 0 L67.63 0 Z M70.85 0 L70.35 0 L70.35 10 L70.85 10 L71.35 10 L71.35 0 L70.85 0 Z M74.07 0 L73.57 0 L73.57 10 L74.07 10 L74.57 10 L74.57 0 L74.07 0 Z M77.29 0 L76.79 0 L76.79 10 L77.29 10 L77.79 10 L77.79 0 L77.29 0 Z M80.51 0 L80.01 0 L80.01 10 L80.51 10 L81.01 10 L81.01 0 L80.51 0 Z M83.73 0 L83.23 0 L83.23 10 L83.73 10 L84.23 10 L84.23 0 L83.73 0 Z M86.95 0 L86.45 0 L86.45 10 L86.95 10 L87.45 10 L87.45 0 L86.95 0 Z M90.17 0 L89.67 0 L89.67 10 L90.17 10 L90.67 10 L90.67 0 L90.17 0 Z M93.39 0 L92.89 0 L92.89 10 L93.39 10 L93.89 10 L93.89 0 L93.39 0 Z M96.62 0 L96.12 0 L96.12 10 L96.62 10 L97.12 10 L97.12 0 L96.62 0 Z M99.84 0 L99.34 0 L99.34 10 L99.84 10 L100.34 10 L100.34 0 L99.84 0 Z M103.06 0 L102.56 0 L102.56 10 L103.06 10 L103.56 10 L103.56 0 L103.06 0 Z M106.28 0 L105.78 0 L105.78 10 L106.28 10 L106.78 10 L106.78 0 L106.28 0 Z M109.5 0 L109 0 L109 10 L109.5 10 L110 10 L110 0 L109.5 0 Z M112.72 0 L112.22 0 L112.22 10 L112.72 10 L113.22 10 L113.22 0 L112.72 0 Z M115.94 0 L115.44 0 L115.44 10 L115.94 10 L116.44 10 L116.44 0 L115.94 0 Z M119.16 0 L118.66 0 L118.66 10 L119.16 10 L119.66 10 L119.66 0 L119.16 0 Z M122.38 0 L121.88 0 L121.88 10 L122.38 10 L122.88 10 L122.88 0 L122.38 0 Z M125.6 0 L125.1 0 L125.1 10 L125.6 10 L126.1 10 L126.1 0 L125.6 0 Z M128.82 0 L128.32 0 L128.32 10 L128.82 10 L129.32 10 L129.32 0 L128.82 0 Z M132.04 0 L131.54 0 L131.54 10 L132.04 10 L132.54 10 L132.54 0 L132.04 0 Z M135.26 0 L134.76 0 L134.76 10 L135.26 10 L135.76 10 L135.76 0 L135.26 0 Z M138.48 0 L137.98 0 L137.98 10 L138.48 10 L138.98 10 L138.98 0 L138.48 0 Z M141.7 0 L141.2 0 L141.2 10 L141.7 10 L142.2 10 L142.2 0 L141.7 0 Z M144.92 0 L144.42 0 L144.42 10 L144.92 10 L145.42 10 L145.42 0 L144.92 0 Z M148.14 0 L147.64 0 L147.64 10 L148.14 10 L148.64 10 L148.64 0 L148.14 0 Z M151.36 0 L150.86 0 L150.86 10 L151.36 10 L151.86 10 L151.86 0 L151.36 0 Z M154.58 0 L154.08 0 L154.08 10 L154.58 10 L155.08 10 L155.08 0 L154.58 0 Z M157.8 0 L157.3 0 L157.3 10 L157.8 10 L158.3 10 L158.3 0 L157.8 0 Z M161.03 0 L160.53 0 L160.53 10 L161.03 10 L161.53 10 L161.53 0 L161.03 0 Z M164.25 0 L163.75 0 L163.75 10 L164.25 10 L164.75 10 L164.75 0 L164.25 0 Z M167.47 0 L166.97 0 L166.97 10 L167.47 10 L167.97 10 L167.97 0 L167.47 0 Z M170.69 0 L170.19 0 L170.19 10 L170.69 10 L171.19 10 L171.19 0 L170.69 0 Z M173.91 0 L173.41 0 L173.41 10 L173.91 10 L174.41 10 L174.41 0 L173.91 0 Z M177.13 0 L176.63 0 L176.63 10 L177.13 10 L177.63 10 L177.63 0 L177.13 0 Z M180.35 0 L179.85 0 L179.85 10 L180.35 10 L180.85 10 L180.85 0 L180.35 0 Z M183.57 0 L183.07 0 L183.07 10 L183.57 10 L184.07 10 L184.07 0 L183.57 0 Z" fill="#3a3a3a"/></svg>
          </div>
          <div style={{ width: "404px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>31 of 58 reported · 53%</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Network 78.4%</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14px 18px 14px 18px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 8px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Checklist</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(123, 91, 255, 0.16)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(123, 91, 255, 0.16)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(123, 91, 255, 0.16)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(123, 91, 255, 0.16)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(123, 91, 255, 0.16)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(123, 91, 255, 0.16)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(123, 91, 255, 0.16)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(123, 91, 255, 0.16)" }} />
            <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(123, 91, 255, 0.16)" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>3 of 6</p>
        </div>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #7b5bff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a", textDecoration: "line-through" }}>Export the 27 members without a W30 report</p>
        </div>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #7b5bff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a", textDecoration: "line-through" }}>Send the "Reporte semanal" WhatsApp reminder</p>
        </div>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #7b5bff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a", textDecoration: "line-through" }}>Split the list: Oscar 14 · Nayrobi 13</p>
        </div>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, borderRadius: "6px", background: "#2a2a2a", boxShadow: "inset 0 0 0 1px #343434", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#191919", boxShadow: "inset 0 0 0 1px #3a3a3a", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Call the 9 members with 2+ missed weeks</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <div style={{ width: "20px", height: "20px", flexShrink: 0, borderRadius: "10px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#191919", boxShadow: "inset 0 0 0 1px #3a3a3a", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Pair 6 new members with a reporting buddy</p>
        </div>
        <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#191919", boxShadow: "inset 0 0 0 1px #3a3a3a", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Confirm reports are in before Sun 23:59</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14px 18px 14px 18px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Comments · 2</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Luis & Jackie</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Jul 30 · 17:42</p>
            </div>
            <p style={{ width: "370px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada", lineHeight: "1.399999976158142" }}>Start with the 9 who missed two weeks in a row — they are our churn risk for August.</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Oscar & Nayrobi</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Today · 07:55</p>
            </div>
            <p style={{ width: "370px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada", lineHeight: "1.399999976158142" }}>Reminders sent last night, 4 already replied. Calls start at 10:00.</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "6px", background: "#191919", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#5f5f5f" }}>Write a comment…</p>
            <Send size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14px 18px 14px 18px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Activity</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#7b5bff"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#dadada" }}>Oscar & Nayrobi ticked "Split the list"</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Today · 07:51</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#e3b341"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#dadada" }}>Due date moved from Jul 30 to Jul 31</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Jul 29 · 19:10</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#8a8a8a"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#dadada" }}>Luis & Jackie created the task from Adherence by leg</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Jul 28 · 09:02</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0 }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#191919", boxShadow: "inset 0 1px 0 0 #000000", display: "flex", flexDirection: "row", padding: "13px 18px 12px 18px", gap: "10px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Updated 2h ago</p>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Start task</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Checklist size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Complete task</p>
        </div>
      </div>
    </div>
  );
}
