// Header + KPI (montra, KPI and stats) from Ingot UI (ingotui.com).
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
const ChartIncrease = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3\"/><path d=\"M7.997 16.999c3.532 0 10.915-1.464 10.7-10.566m-2.208 1.61l1.883-1.897a.497.497 0 0 1 .703-.003l1.922 1.9\"/></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const FileExport = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3\" /></g>");
const FileInvoice = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /><path d=\"M9 7l1 0\" /><path d=\"M9 13l6 0\" /><path d=\"M13 17l2 0\" /></g>");
const MoneybagMove = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5\" /><path d=\"M12.5 21h-4.5a4 4 0 0 1 -4 -4v-1a8 8 0 0 1 14.946 -3.971\" /><path d=\"M16 19h6\" /><path d=\"M19 16l3 3l-3 3\" /></g>");
const Wallet = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M20 12v4h-4a2 2 0 0 1 0 -4h4\" /></g>");
const ChevronDownSolid = icon("<g fill=\"currentColor\"><path d=\"M18.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1 -1.414 0l-6 -6a1 1 0 0 1 1.414 -1.414l5.293 5.293l5.293 -5.293a1 1 0 0 1 1.414 0\" /></g>");

export function HeaderKPI() {
  return (
    <div style={{ width: "1053.71px", height: "193.05px", display: "flex", flexDirection: "column", gap: "21.93px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "286.96px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Good morning, Alex</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Here's your financial overview for this month.</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "65px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>This Month</p>
            <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <svg style={{ width: "1px", height: "29.24px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginRight: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="1" height="29.24" viewBox="0 0 1 29.24" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.456944 L0 0 L29.2444 0 L29.2444 -0.456944 L29.2444 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>09 Aug 2026</p>
          </div>
          <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "linear-gradient(180deg, #222222 0%, #3a3a3a 57%, #222222 100%)", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <FileExport size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "84px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Export Report</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "15.54px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "250.41px", height: "118.81px", flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "239.44px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "167.24px", height: "53.48px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Wallet size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Available Funds</p>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$28,640</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "239.44px", height: "16.45px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ChevronDownSolid size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#18b170", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170", lineHeight: "1.5" }}>8.2%</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>Across 6 active accounts</p>
            </div>
          </div>
        </div>
        <div style={{ width: "250.41px", height: "118.81px", flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "239.44px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "167.24px", height: "53.48px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #ecb615 0%, #ffe9a7 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <MoneybagMove size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Monthly Expenses</p>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$12,480</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "239.44px", height: "16.45px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ChevronDownSolid size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#18b170", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170", lineHeight: "1.5" }}>4.2%</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>72% of planned spending</p>
            </div>
          </div>
        </div>
        <div style={{ width: "250.41px", height: "118.81px", flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "239.44px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "167.24px", height: "53.48px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <ChartIncrease size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Net Cash Position</p>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$16,160</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "239.44px", height: "16.45px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ChevronDownSolid size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#18b170", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170", lineHeight: "1.5" }}>11.2%</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>Income minus expenses</p>
            </div>
          </div>
        </div>
        <div style={{ width: "250.41px", height: "118.81px", flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "239.44px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "167.24px", height: "53.48px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #91d02b 0%, #e2ffb3 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <FileInvoice size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "139px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Pending Receivables</p>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$7,850</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "239.44px", height: "16.45px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ChevronDownSolid size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#fd872f", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#fd872f", lineHeight: "1.5" }}>8.2%</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>Expected within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
