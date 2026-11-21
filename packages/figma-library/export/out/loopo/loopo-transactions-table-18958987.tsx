// Transactions table (loopo, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const BuildingStoreBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21l18 0\" /><path d=\"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4\" /><path d=\"M5 21l0 -10.15\" /><path d=\"M19 21l0 -10.15\" /><path d=\"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4\" /></g>");
const CreditCardBulk = icon("<path d=\"M3 8A3 3 0 0 1 6 5H18A3 3 0 0 1 21 8V16A3 3 0 0 1 18 19H6A3 3 0 0 1 3 16L3 8\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10L21 10\"/><path d=\"M7 15L7.01 15\"/><path d=\"M11 15L13 15\"/></g>");
const CreditCardHandBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 4h9.914a3 3 0 0 1 1.92 .695l5.166 4.305\" /><path d=\"M11.15 9h8.85a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-13a2 2 0 0 1 -2 -2v-8.7\" /><path d=\"M3 8l7.2 4.7a1.803 1.803 0 0 0 2 -3l-4.2 -2.7\" /><path d=\"M5 16h17\" /></g>");
const RefreshBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" /><path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" /></g>");
const ShoppingCartBulk = icon("<path d=\"M4 19A2 2 0 1 0 8 19 2 2 0 1 0 4 19\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M15 19A2 2 0 1 0 19 19 2 2 0 1 0 15 19\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17h-11v-14h-2\" /><path d=\"M6 5l14 1l-1 7h-13\" /></g>");

export function TransactionsTable() {
  return (
    <div style={{ width: "1201.9px", height: "276.1px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "1201.9px", height: "39.4px", flexShrink: 0, borderRadius: "8.8px", background: "#fafafa", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Payment</p>
        </div>
        <div style={{ width: "230px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Customer</p>
        </div>
        <div style={{ width: "140px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Amount</p>
        </div>
        <div style={{ width: "200px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Method</p>
        </div>
        <div style={{ width: "170px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Channel</p>
        </div>
        <div style={{ width: "140px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Status</p>
        </div>
        <div style={{ width: "171.9px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Date</p>
        </div>
      </div>
      <div style={{ width: "1201.9px", height: "32.9px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>#TX-48213</p>
        </div>
        <div style={{ width: "230px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#fd4b23" }}>OB</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Olivia Bennett</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>$128.00</p>
        </div>
        <div style={{ width: "200px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCardBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Visa •• 4242</p>
        </div>
        <div style={{ width: "170px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ShoppingCartBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Online</p>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#18b170" }}>Paid</p>
          </div>
        </div>
        <div style={{ width: "171.9px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Dec 14, 10:24 AM</p>
        </div>
      </div>
      <div style={{ width: "1201.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "1201.9px", height: "32.9px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>#TX-48212</p>
        </div>
        <div style={{ width: "230px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(0, 68, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#0044ff" }}>MR</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Marcus Reid</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>$24.00</p>
        </div>
        <div style={{ width: "200px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCardBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Mastercard •• 8810</p>
        </div>
        <div style={{ width: "170px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <RefreshBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Subscription</p>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#18b170" }}>Paid</p>
          </div>
        </div>
        <div style={{ width: "171.9px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Dec 14, 9:02 AM</p>
        </div>
      </div>
      <div style={{ width: "1201.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "1201.9px", height: "32.9px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>#TX-48209</p>
        </div>
        <div style={{ width: "230px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(24, 177, 112, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#18b170" }}>AK</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Aisha Khan</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>$85.00</p>
        </div>
        <div style={{ width: "200px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCardHandBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Visa •• 6612 · tap</p>
        </div>
        <div style={{ width: "170px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <BuildingStoreBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>In-store</p>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#18b170" }}>Paid</p>
          </div>
        </div>
        <div style={{ width: "171.9px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Dec 13, 5:47 PM</p>
        </div>
      </div>
      <div style={{ width: "1201.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "1201.9px", height: "32.9px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>#TX-48204</p>
        </div>
        <div style={{ width: "230px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(255, 114, 171, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#ff72ab" }}>DP</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Daniel Park</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#999999", textDecoration: "line-through" }}>$64.00</p>
        </div>
        <div style={{ width: "200px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCardBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Visa •• 1881</p>
        </div>
        <div style={{ width: "170px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ShoppingCartBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Online</p>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#f4f4f5", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#6c6c6c"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#6c6c6c" }}>Refunded</p>
          </div>
        </div>
        <div style={{ width: "171.9px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Dec 13, 2:15 PM</p>
        </div>
      </div>
      <div style={{ width: "1201.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "1201.9px", height: "32.9px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>#TX-48198</p>
        </div>
        <div style={{ width: "230px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(124, 92, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#7c5cff" }}>SM</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Sofia Moreno</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>$38.00</p>
        </div>
        <div style={{ width: "200px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg width={16.4} height={16.4} viewBox="0 0 24 24" style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }}><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor" /></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Apple Pay</p>
        </div>
        <div style={{ width: "170px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <RefreshBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Subscription</p>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#fff8eb", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#c27c0e"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#c27c0e" }}>Pending</p>
          </div>
        </div>
        <div style={{ width: "171.9px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Dec 13, 11:40 AM</p>
        </div>
      </div>
      <div style={{ width: "1201.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "1201.9px", height: "32.9px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>#TX-48191</p>
        </div>
        <div style={{ width: "230px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#4d98fe" }}>LO</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Liam O'Connor</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>$156.00</p>
        </div>
        <div style={{ width: "200px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCardBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Amex •• 3005</p>
        </div>
        <div style={{ width: "170px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ShoppingCartBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Online</p>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#18b170" }}>Paid</p>
          </div>
        </div>
        <div style={{ width: "171.9px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Dec 12, 7:18 PM</p>
        </div>
      </div>
      <div style={{ width: "1201.9px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "1201.9px", height: "32.9px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>#TX-48187</p>
        </div>
        <div style={{ width: "230px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(243, 200, 61, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#f3c83d" }}>HW</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Hannah Weiss</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#999999" }}>$42.00</p>
        </div>
        <div style={{ width: "200px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCardBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Mastercard •• 5523</p>
        </div>
        <div style={{ width: "170px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ShoppingCartBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Online</p>
        </div>
        <div style={{ width: "140px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#e5484d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#e5484d" }}>Failed</p>
          </div>
        </div>
        <div style={{ width: "171.9px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Dec 12, 3:06 PM</p>
        </div>
      </div>
    </div>
  );
}
