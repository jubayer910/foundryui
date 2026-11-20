"use client";
// Segment builder modal, New segment (loopo, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const FilterBulk = icon("<path d=\"M4 4H20V6.172000000000001A2 2 0 0 1 19.414 7.586L15.000000000000002 12V19L9.000000000000002 21V12.5L4.520000000000001 7.572A2 2 0 0 1 4.000000000000002 6.227V4\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const MailOpenBulk = icon("<path d=\"M21.2 8.4C21.7 8.780000000000001 22 9.370000000000001 22 10V20A2 2 0 0 1 20 22H4A2 2 0 0 1 2 20V10A2 2 0 0 1 2.8 8.4L10.8 2.4000000000000004A2 2 0 0 1 13.200000000000001 2.4000000000000004L21.200000000000003 8.4Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10L13.03 15.7A1.94 1.94 0 0 1 10.969999999999999 15.7L2 10\"/></g>");
const PackageBulk = icon("<path d=\"M12 3L20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 12L20 7.5\"/><path d=\"M12 12L12 21\"/><path d=\"M12 12L4 7.5\"/><path d=\"M16 5.25L8 9.75\"/></g>");
const TextBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M19 7V5L5 5V7\"/><path d=\"M12 5L12 19M12 19H10M12 19H14\"/></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const ChevronUp = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 15l6 -6l6 6\" /></g>");
const CircleCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M9 12l2 2l4 -4\" /></g>");
const Plus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function SegmentBuilderModalNewSegment() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "832.69px", height: "664.5px", borderRadius: "17.53px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 26.3px 52.59px -13.15px rgba(13, 13, 18, 0.16)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "19.72px 19.72px 17.53px 19.72px", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <FilterBulk size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#000000", lineHeight: "1.5" }}>New segment</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Rules are checked every 15 minutes — people join and leave on their own.</p>
        </div>
        <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 19.72px 19.72px 19.72px", gap: "17.53px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "512.77px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "15.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Segment name</p>
            <div data-fu="field" style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>Engaged club members</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Include people who match</p>
            <div style={{ flexShrink: 0, borderRadius: "10.96px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.29px 3.29px 3.29px 3.29px", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#000000" }}>All rules</p>
              </div>
              <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Any rule</p>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10.96px", background: "#fafafa", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "14.25px 14.25px 14.25px 14.25px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "486.47px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "144.62px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div data-fu="field" style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <PackageBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>Plan</p>
                  <ChevronDown size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ width: "122.71px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div data-fu="field" style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>is any of</p>
                  <ChevronDown size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 7.67px 1.1px 7.67px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "4.39px 7.67px 4.39px 9.87px", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Plus</p>
                  <X size={12.1} style={{ width: "12.05px", height: "12.05px", flexShrink: 0, color: "#999999", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "4.39px 7.67px 4.39px 9.87px", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Studio</p>
                  <X size={12.1} style={{ width: "12.05px", height: "12.05px", flexShrink: 0, color: "#999999", display: "block" }} />
                </div>
              </div>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <X size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#999999", display: "block" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "2.2px 8.77px 2.2px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#7d818c" }}>AND</p>
            </div>
            <div style={{ width: "486.47px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "144.62px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div data-fu="field" style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <MailOpenBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>Last open</p>
                  <ChevronDown size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ width: "122.71px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div data-fu="field" style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>within</p>
                  <ChevronDown size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 7.67px 1.1px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>30 days</p>
              </div>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <X size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#999999", display: "block" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "2.2px 8.77px 2.2px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#7d818c" }}>AND</p>
            </div>
            <div style={{ width: "486.47px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "144.62px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div data-fu="field" style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>Pick a field</p>
                  <ChevronUp size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ width: "122.71px", flexShrink: 0, opacity: 0.5, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div data-fu="field" style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>Operator</p>
                  <ChevronDown size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#f5f5f5", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>Value</p>
              </div>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <X size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#999999", display: "block" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "2.19px 0px 0px 0px", gap: "17.53px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Plus size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#fd4b23" }}>Add rule</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Plus size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#747474", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#747474" }}>Add group</p>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "12.06px 14.25px 12.06px 14.25px", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <TextBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>In plain words</p>
            </div>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Harbor Club Plus or Studio members who opened any Harbor & Co. email in the last 30 days.</p>
          </div>
        </div>
        <div style={{ width: "262.95px", flexShrink: 0, borderRadius: "13.15px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", display: "flex", flexDirection: "column", padding: "16.44px 16.44px 16.44px 16.44px", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Live count</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "40px", fontFamily: "'Geist'", fontSize: "30.68px", fontWeight: 500, color: "#222222" }}>288</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474" }}>people match</p>
            </div>
            <p style={{ width: "232.27px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>{"1.6% of 18,420 contacts\n72% of Plus & Studio members"}</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "230.07px", height: "50.4px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "4.22px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "4.22px", top: "30.09px", width: "10.74px", height: "20.31px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "23.39px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "23.39px", top: "27.83px", width: "10.74px", height: "22.57px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "42.56px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "42.56px", top: "24.82px", width: "10.74px", height: "25.58px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "61.74px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "61.74px", top: "26.33px", width: "10.74px", height: "24.07px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "80.91px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "80.91px", top: "21.81px", width: "10.74px", height: "28.59px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "100.08px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "100.08px", top: "19.56px", width: "10.74px", height: "30.84px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "119.25px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "119.25px", top: "21.06px", width: "10.74px", height: "29.34px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "138.43px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "138.43px", top: "15.8px", width: "10.74px", height: "34.6px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "157.6px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "157.6px", top: "12.04px", width: "10.74px", height: "38.36px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "176.77px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "176.77px", top: "8.28px", width: "10.74px", height: "42.13px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "195.94px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "195.94px", top: "9.78px", width: "10.74px", height: "40.62px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "215.12px", top: "0px", width: "10.74px", height: "50.4px", borderRadius: "5.37px", background: "#f6f6f4" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "215.12px", top: "3.01px", width: "10.74px", height: "47.39px", borderRadius: "5.37px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>12 weeks · up from 252</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(253, 75, 35, 0.14), rgba(253, 75, 35, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.64px #ffffff", display: "flex", flexDirection: "row", padding: "1.64px 1.64px 1.64px 1.64px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#fd4b23" }}>OB</p>
              </div>
              <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(77, 152, 254, 0.14), rgba(77, 152, 254, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.64px #ffffff", display: "flex", flexDirection: "row", padding: "1.64px 1.64px 1.64px 1.64px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#4d98fe" }}>MR</p>
              </div>
              <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(255, 114, 171, 0.14), rgba(255, 114, 171, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.64px #ffffff", display: "flex", flexDirection: "row", padding: "1.64px 1.64px 1.64px 1.64px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#ff72ab" }}>AK</p>
              </div>
              <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(24, 177, 112, 0.14), rgba(24, 177, 112, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.64px #ffffff", display: "flex", flexDirection: "row", padding: "1.64px 1.64px 1.64px 1.64px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#18b170" }}>DP</p>
              </div>
              <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "14.24px", background: "linear-gradient(rgba(0, 68, 255, 0.14), rgba(0, 68, 255, 0.14)), linear-gradient(#ffffff, #ffffff)", boxShadow: "0 0 0 1.64px #ffffff", display: "flex", flexDirection: "row", padding: "1.64px 1.64px 1.64px 1.64px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.96px", fontWeight: 500, color: "#0044ff" }}>SM</p>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>+283 more</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "232.27px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Olivia Bennett</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Harbor Club Plus</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>Opened Dec 12</p>
            </div>
            <div style={{ width: "232.27px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Marcus Reid</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Harbor Club Studio</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>Opened Dec 9</p>
            </div>
            <div style={{ width: "232.27px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Aisha Khan</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Harbor Club Plus</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>Opened Dec 2</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "16.44px 19.72px 15.34px 19.72px", gap: "10.96px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>{"Reach: "}</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>288 sends · $0.14</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>{" from balance"}</span>
        </p>
        <div data-fu="btn" style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Cancel</p>
        </div>
        <div data-fu="btn" style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Save segment</p>
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
