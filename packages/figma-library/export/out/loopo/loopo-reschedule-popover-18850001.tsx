// Reschedule popover (loopo, Popovers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const ChevronLeft = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6l6 6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const ClockBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 0 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 7V12L15 15\"/></g>");

export function ReschedulePopover() {
  return (
    <div style={{ width: "328.69px", height: "434.47px", borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.53px 35.06px -13.15px rgba(13, 13, 18, 0.1), 0px 1.1px 2.19px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "14.25px 14.25px 14.25px 14.25px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "302.39px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "7.67px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ChevronLeft size={14.2} strokeWidth={2.54} style={{ width: "14.24px", height: "14.24px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>December 2026</p>
        <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "7.67px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ChevronRight size={14.2} strokeWidth={2.54} style={{ width: "14.24px", height: "14.24px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "302.39px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "43.19px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#999999" }}>Su</p>
        </div>
        <div style={{ width: "43.19px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#999999" }}>Mo</p>
        </div>
        <div style={{ width: "43.19px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#999999" }}>Tu</p>
        </div>
        <div style={{ width: "43.19px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#999999" }}>We</p>
        </div>
        <div style={{ width: "43.19px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#999999" }}>Th</p>
        </div>
        <div style={{ width: "43.19px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#999999" }}>Fr</p>
        </div>
        <div style={{ width: "43.19px", height: "24.1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#999999" }}>Sa</p>
        </div>
      </div>
      <div style={{ width: "302.39px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "302.39px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>29</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>30</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>1</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>2</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>3</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>4</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>5</p>
          </div>
        </div>
        <div style={{ width: "302.39px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>6</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>7</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>8</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>9</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>10</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>11</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>12</p>
          </div>
        </div>
        <div style={{ width: "302.39px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>13</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", boxShadow: "inset 0 0 0 1.1px #222222", display: "flex", flexDirection: "column", padding: "1.1px 1.1px 1.1px 1.1px", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>14</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>15</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>16</p>
            <svg style={{ width: "4.38px", height: "4.38px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.38" height="4.38" viewBox="0 0 4.38 4.38" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.38 2.19 C4.38 3.3995 3.3995 4.38 2.19 4.38 C0.980496 4.38 0 3.3995 0 2.19 C0 0.980496 0.980496 0 2.19 0 C3.3995 0 4.38 0.980496 4.38 2.19 Z" fill="#4d98fe"/></svg>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>17</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(253, 75, 35, 0.12)", boxShadow: "inset 0 0 0 1.1px #fd4b23", display: "flex", flexDirection: "column", padding: "1.1px 1.1px 1.1px 1.1px", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#fd4b23" }}>18</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>19</p>
          </div>
        </div>
        <div style={{ width: "302.39px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>20</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>21</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>22</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>23</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>24</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>25</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>26</p>
          </div>
        </div>
        <div style={{ width: "302.39px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>27</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>28</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>29</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>30</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>31</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>1</p>
          </div>
          <div style={{ width: "43.19px", height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#c6c6c6" }}>2</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.29px 0px 3.29px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "302.39px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ClockBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>8:00 AM</p>
            <ChevronDown size={15.3} strokeWidth={2.35} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Pacific Time (PT)</p>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "4.38px", height: "4.38px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.38" height="4.38" viewBox="0 0 4.38 4.38" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.38 2.19 C4.38 3.3995 3.3995 4.38 2.19 4.38 C0.980496 4.38 0 3.3995 0 2.19 C0 0.980496 0.980496 0 2.19 0 C3.3995 0 4.38 0.980496 4.38 2.19 Z" fill="#4d98fe"/></svg>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Harbor Club: December box sends Wed, Dec 16</p>
      </div>
      <div style={{ width: "302.39px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Cancel</p>
        </div>
        <div style={{ height: "39.44px", flexShrink: 0, opacity: 0.5, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Reschedule</p>
          </div>
        </div>
      </div>
    </div>
  );
}
