// SLA popover (vantage, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Bell, ChevronRight, Minus, Plus, UserShield } from "foundryui-icons/react/stroke-rounded";

export function SLAPopover() {
  return (
    <div style={{ width: "312px", height: "376px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), 0px 16px 36px -10px rgba(0, 0, 0, 0.45), 0px 10.5px 48px 0px rgba(123, 91, 255, 0.08)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14px 14px 10px 14px", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Follow up 2+ · stage SLA</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Max days before a follow-up counts as overdue</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "4px 14px 14px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "34px", flexShrink: 0, borderRadius: "6px", background: "#191919", boxShadow: "inset 0 0 0 1px #7b5bff, 0px 0px 0px 3px rgba(123, 91, 255, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "34px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Minus size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dadada", display: "block" }} />
            </div>
            <div style={{ width: "76px", height: "34px", flexShrink: 0, boxShadow: "inset 1px 0 0 0 #2e2e2e, inset -1px 0 0 0 #2e2e2e", display: "flex", flexDirection: "row", padding: "0px 1px 0px 1px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>6</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a" }}>days</p>
            </div>
            <div style={{ width: "32px", height: "34px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Plus size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dadada", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Was 7 days</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Median today 5.5d</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", background: "#191919", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "column", padding: "11px 11px 11px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Within SLA, last 4 weeks</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", textDecoration: "line-through" }}>66%</p>
              <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#f07178" }}>58%</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Overdue right now</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", textDecoration: "line-through" }}>47</p>
              <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#f07178" }}>71</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "262px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "152px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #edce84 0%, #e3b341 100%)", boxShadow: "inset 0 0 0 1px rgba(177, 140, 51, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "156px", top: "0px", width: "105.5px", height: "8px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="105.54" height="8" viewBox="0 0 105.54 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.3 0 L2.8 0 L2.8 8 L3.3 8 L3.8 8 L3.8 0 L3.3 0 Z M6.6 0 L6.1 0 L6.1 8 L6.6 8 L7.1 8 L7.1 0 L6.6 0 Z M9.89 0 L9.39 0 L9.39 8 L9.89 8 L10.39 8 L10.39 0 L9.89 0 Z M13.19 0 L12.69 0 L12.69 8 L13.19 8 L13.69 8 L13.69 0 L13.19 0 Z M16.49 0 L15.99 0 L15.99 8 L16.49 8 L16.99 8 L16.99 0 L16.49 0 Z M19.79 0 L19.29 0 L19.29 8 L19.79 8 L20.29 8 L20.29 0 L19.79 0 Z M23.09 0 L22.59 0 L22.59 8 L23.09 8 L23.59 8 L23.59 0 L23.09 0 Z M26.39 0 L25.89 0 L25.89 8 L26.39 8 L26.89 8 L26.89 0 L26.39 0 Z M29.68 0 L29.18 0 L29.18 8 L29.68 8 L30.18 8 L30.18 0 L29.68 0 Z M32.98 0 L32.48 0 L32.48 8 L32.98 8 L33.48 8 L33.48 0 L32.98 0 Z M36.28 0 L35.78 0 L35.78 8 L36.28 8 L36.78 8 L36.78 0 L36.28 0 Z M39.58 0 L39.08 0 L39.08 8 L39.58 8 L40.08 8 L40.08 0 L39.58 0 Z M42.88 0 L42.38 0 L42.38 8 L42.88 8 L43.38 8 L43.38 0 L42.88 0 Z M46.17 0 L45.67 0 L45.67 8 L46.17 8 L46.67 8 L46.67 0 L46.17 0 Z M49.47 0 L48.97 0 L48.97 8 L49.47 8 L49.97 8 L49.97 0 L49.47 0 Z M52.77 0 L52.27 0 L52.27 8 L52.77 8 L53.27 8 L53.27 0 L52.77 0 Z M56.07 0 L55.57 0 L55.57 8 L56.07 8 L56.57 8 L56.57 0 L56.07 0 Z M59.37 0 L58.87 0 L58.87 8 L59.37 8 L59.87 8 L59.87 0 L59.37 0 Z M62.66 0 L62.16 0 L62.16 8 L62.66 8 L63.16 8 L63.16 0 L62.66 0 Z M65.96 0 L65.46 0 L65.46 8 L65.96 8 L66.46 8 L66.46 0 L65.96 0 Z M69.26 0 L68.76 0 L68.76 8 L69.26 8 L69.76 8 L69.76 0 L69.26 0 Z M72.56 0 L72.06 0 L72.06 8 L72.56 8 L73.06 8 L73.06 0 L72.56 0 Z M75.86 0 L75.36 0 L75.36 8 L75.86 8 L76.36 8 L76.36 0 L75.86 0 Z M79.16 0 L78.66 0 L78.66 8 L79.16 8 L79.66 8 L79.66 0 L79.16 0 Z M82.45 0 L81.95 0 L81.95 8 L82.45 8 L82.95 8 L82.95 0 L82.45 0 Z M85.75 0 L85.25 0 L85.25 8 L85.75 8 L86.25 8 L86.25 0 L85.75 0 Z M89.05 0 L88.55 0 L88.55 8 L89.05 8 L89.55 8 L89.55 0 L89.05 0 Z M92.35 0 L91.85 0 L91.85 8 L92.35 8 L92.85 8 L92.85 0 L92.35 0 Z M95.65 0 L95.15 0 L95.15 8 L95.65 8 L96.15 8 L96.15 0 L95.65 0 Z M98.94 0 L98.44 0 L98.44 8 L98.94 8 L99.44 8 L99.44 0 L98.94 0 Z M102.24 0 L101.74 0 L101.74 8 L102.24 8 L102.74 8 L102.74 0 L102.24 0 Z M105.54 0 L105.04 0 L105.04 8 L105.54 8 L106.04 8 L106.04 0 L105.54 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "262px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>58% within 6d</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>24 more people overdue</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Bell size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Remind owner</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>1 day before the SLA ends</p>
          </div>
          <div style={{ width: "30px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#7b5bff", position: "relative" }}>
            <svg style={{ position: "absolute", left: "14px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <UserShield size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Escalate to leg leader</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>When a follow-up is overdue</p>
          </div>
          <div style={{ width: "30px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#2e2e2e", position: "relative" }}>
            <svg style={{ position: "absolute", left: "2px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#8a8a8a"/></svg>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#191919", boxShadow: "inset 0 1px 0 0 #000000", display: "flex", flexDirection: "row", padding: "11px 14px 10px 14px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Applies to all 13 legs</p>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Cancel</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Save SLA</p>
        </div>
      </div>
    </div>
  );
}
