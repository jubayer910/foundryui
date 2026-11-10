// Date range popover (loopo, Popovers) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Calendar as CalendarBulk, CalendarCheck as CalendarCheckBulk, CalendarPlus as CalendarPlusBulk, Clock as ClockBulk, TrendingUp as TrendingUpBulk } from "foundryui-icons/react/bulk";
import { Check, ChevronLeft, ChevronRight } from "foundryui-icons/react/stroke-rounded";

export function DateRangePopover() {
  return (
    <div style={{ width: "679.3px", height: "417.8px", borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.5px 35.1px -13.1px rgba(13, 13, 18, 0.1), 0px 1.1px 2.2px 0px rgba(13, 13, 18, 0.06)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "181.9px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "4.4px 4.4px 4.4px 4.4px", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.6px 8.8px 4.4px 8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Presets</p>
          </div>
          <div style={{ width: "173.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CalendarBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Today</p>
          </div>
          <div style={{ width: "173.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CalendarBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Last 7 days</p>
          </div>
          <div style={{ width: "173.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CalendarCheckBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#000000" }}>Last 30 days</p>
            <Check size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
          </div>
          <div style={{ width: "173.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ClockBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>This quarter</p>
          </div>
          <div style={{ width: "173.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <TrendingUpBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Year to date</p>
          </div>
          <div style={{ width: "173.1px", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CalendarPlusBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Custom</p>
          </div>
        </div>
        <div style={{ width: "1.1px", alignSelf: "stretch", flexShrink: 0, background: "#eeeeee" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "13.1px 15.3px 15.3px 15.3px", gap: "13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "465.6px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Start</p>
              <div style={{ alignSelf: "stretch", height: "39.4px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.1px 1.1px 12.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CalendarBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#222222" }}>Nov 15, 2026</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>End</p>
              <div style={{ alignSelf: "stretch", height: "39.4px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.1px 1.1px 12.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CalendarBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#222222" }}>Dec 14, 2026 · today</p>
              </div>
            </div>
          </div>
          <div style={{ width: "465.6px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "17.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "224.1px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "224.1px", height: "28.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "26.3px", height: "26.3px", flexShrink: 0, borderRadius: "6.6px", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ChevronLeft size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>November 2026</p>
                <div style={{ width: "26.3px", height: "26.3px", flexShrink: 0, borderRadius: "6.6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "224.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Su</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Mo</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Tu</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>We</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Th</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Fr</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Sa</p>
                </div>
              </div>
              <div style={{ width: "224px", height: "31.8px", flexShrink: 0, position: "relative" }}>
                <p style={{ position: "absolute", left: "13px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>1</p>
                <p style={{ position: "absolute", left: "43.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>2</p>
                <p style={{ position: "absolute", left: "75.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>3</p>
                <p style={{ position: "absolute", left: "107.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>4</p>
                <p style={{ position: "absolute", left: "139.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>5</p>
                <p style={{ position: "absolute", left: "171.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>6</p>
                <p style={{ position: "absolute", left: "204px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>7</p>
              </div>
              <div style={{ width: "224px", height: "31.8px", flexShrink: 0, position: "relative" }}>
                <p style={{ position: "absolute", left: "11.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>8</p>
                <p style={{ position: "absolute", left: "43.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>9</p>
                <p style={{ position: "absolute", left: "72.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>10</p>
                <p style={{ position: "absolute", left: "106.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>11</p>
                <p style={{ position: "absolute", left: "136.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>12</p>
                <p style={{ position: "absolute", left: "168.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>13</p>
                <p style={{ position: "absolute", left: "201px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>14</p>
              </div>
              <div style={{ width: "224px", height: "31.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "16px", top: "2.2px", width: "16px", height: "27.4px", background: "#f4f4f5" }} />
                <svg style={{ position: "absolute", left: "2.3px", top: "2.2px", width: "27.4px", height: "27.4px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="27.39" height="27.39" viewBox="0 0 27.39 27.39" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M27.39 13.695 C27.39 21.2585 21.2585 27.39 13.695 27.39 C6.13146 27.39 0 21.2585 0 13.695 C0 6.13146 6.13146 0 13.695 0 C21.2585 0 27.39 6.13146 27.39 13.695 Z" fill="#fd4b23"/></svg>
                <p style={{ position: "absolute", left: "8.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#ffffff" }}>15</p>
                <div style={{ position: "absolute", left: "32px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "40.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>16</p>
                <div style={{ position: "absolute", left: "64px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "73.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>17</p>
                <div style={{ position: "absolute", left: "96px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "105px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>18</p>
                <div style={{ position: "absolute", left: "128px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "136.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>19</p>
                <div style={{ position: "absolute", left: "160px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "166.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>20</p>
                <div style={{ position: "absolute", left: "192px", top: "2.2px", width: "32px", height: "27.4px", borderRadius: "0px 8.8px 8.8px 0px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "200.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>21</p>
              </div>
              <div style={{ width: "224px", height: "31.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "2.2px", width: "32px", height: "27.4px", borderRadius: "8.8px 0px 0px 8.8px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "7px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>22</p>
                <div style={{ position: "absolute", left: "32px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "39px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>23</p>
                <div style={{ position: "absolute", left: "64px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "71px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>24</p>
                <div style={{ position: "absolute", left: "96px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "103px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>25</p>
                <div style={{ position: "absolute", left: "128px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "135px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>26</p>
                <div style={{ position: "absolute", left: "160px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "167.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>27</p>
                <div style={{ position: "absolute", left: "192px", top: "2.2px", width: "32px", height: "27.4px", borderRadius: "0px 8.8px 8.8px 0px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "199px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>28</p>
              </div>
              <div style={{ width: "224px", height: "31.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "2.2px", width: "32px", height: "27.4px", borderRadius: "8.8px 0px 0px 8.8px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "7px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>29</p>
                <div style={{ position: "absolute", left: "32px", top: "2.2px", width: "32px", height: "27.4px", borderRadius: "0px 8.8px 8.8px 0px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "38.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>30</p>
              </div>
            </div>
            <div style={{ width: "224.1px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "224.1px", height: "28.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "26.3px", height: "26.3px", flexShrink: 0, borderRadius: "6.6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>December 2026</p>
                <div style={{ width: "26.3px", height: "26.3px", flexShrink: 0, borderRadius: "6.6px", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ChevronRight size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ width: "224.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Su</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Mo</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Tu</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>We</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Th</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Fr</p>
                </div>
                <div style={{ width: "32px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Sa</p>
                </div>
              </div>
              <div style={{ width: "224px", height: "31.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "64px", top: "2.2px", width: "32px", height: "27.4px", borderRadius: "8.8px 0px 0px 8.8px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "77px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>1</p>
                <div style={{ position: "absolute", left: "96px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "107.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>2</p>
                <div style={{ position: "absolute", left: "128px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "139.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>3</p>
                <div style={{ position: "absolute", left: "160px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "171.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>4</p>
                <div style={{ position: "absolute", left: "192px", top: "2.2px", width: "32px", height: "27.4px", borderRadius: "0px 8.8px 8.8px 0px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "203.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>5</p>
              </div>
              <div style={{ width: "224px", height: "31.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "2.2px", width: "32px", height: "27.4px", borderRadius: "8.8px 0px 0px 8.8px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "11.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>6</p>
                <div style={{ position: "absolute", left: "32px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "44px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>7</p>
                <div style={{ position: "absolute", left: "64px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "75.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>8</p>
                <div style={{ position: "absolute", left: "96px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "107.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>9</p>
                <div style={{ position: "absolute", left: "128px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "136.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>10</p>
                <div style={{ position: "absolute", left: "160px", top: "2.2px", width: "32px", height: "27.4px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "170.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>11</p>
                <div style={{ position: "absolute", left: "192px", top: "2.2px", width: "32px", height: "27.4px", borderRadius: "0px 8.8px 8.8px 0px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "200.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>12</p>
              </div>
              <div style={{ width: "224px", height: "31.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "2.2px", width: "32px", height: "27.4px", borderRadius: "8.8px 0px 0px 8.8px", background: "#f4f4f5" }} />
                <p style={{ position: "absolute", left: "8.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>13</p>
                <div style={{ position: "absolute", left: "32px", top: "2.2px", width: "16px", height: "27.4px", background: "#f4f4f5" }} />
                <svg style={{ position: "absolute", left: "34.3px", top: "2.2px", width: "27.4px", height: "27.4px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="27.39" height="27.39" viewBox="0 0 27.39 27.39" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M27.39 13.695 C27.39 21.2585 21.2585 27.39 13.695 27.39 C6.13146 27.39 0 21.2585 0 13.695 C0 6.13146 6.13146 0 13.695 0 C21.2585 0 27.39 6.13146 27.39 13.695 Z" fill="#fd4b23"/></svg>
                <p style={{ position: "absolute", left: "40.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#ffffff" }}>14</p>
                <p style={{ position: "absolute", left: "72.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>15</p>
                <p style={{ position: "absolute", left: "104.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>16</p>
                <p style={{ position: "absolute", left: "137.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>17</p>
                <p style={{ position: "absolute", left: "169px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>18</p>
                <p style={{ position: "absolute", left: "200.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>19</p>
              </div>
              <div style={{ width: "224px", height: "31.8px", flexShrink: 0, position: "relative" }}>
                <p style={{ position: "absolute", left: "6.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>20</p>
                <p style={{ position: "absolute", left: "40.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>21</p>
                <p style={{ position: "absolute", left: "71px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>22</p>
                <p style={{ position: "absolute", left: "103px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>23</p>
                <p style={{ position: "absolute", left: "135px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>24</p>
                <p style={{ position: "absolute", left: "167px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>25</p>
                <p style={{ position: "absolute", left: "199px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>26</p>
              </div>
              <div style={{ width: "224px", height: "31.8px", flexShrink: 0, position: "relative" }}>
                <p style={{ position: "absolute", left: "7.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>27</p>
                <p style={{ position: "absolute", left: "39px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>28</p>
                <p style={{ position: "absolute", left: "71px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>29</p>
                <p style={{ position: "absolute", left: "102.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>30</p>
                <p style={{ position: "absolute", left: "136.5px", top: "6.4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#c6c6c6" }}>31</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "16.4px 19.7px 15.3px 19.7px", gap: "11px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32.9px", height: "19.7px", flexShrink: 0, borderRadius: "9.9px", background: "#fd4b23", position: "relative" }}>
            <svg style={{ position: "absolute", left: "15.3px", top: "2.2px", width: "15.3px", height: "15.3px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>{"Compare to previous period  "}</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#999999" }}>Oct 16 – Nov 14</span>
          </p>
        </div>
        <div style={{ height: "39.4px", flexShrink: 0, borderRadius: "109.6px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "6.6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.5px" }}>Cancel</p>
        </div>
        <div style={{ height: "39.4px", flexShrink: 0, borderRadius: "109.6px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.9px 8.8px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "11px 11px 11px 11px", gap: "11px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "17.5px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#ffffff", lineHeight: "17.5px" }}>Apply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
