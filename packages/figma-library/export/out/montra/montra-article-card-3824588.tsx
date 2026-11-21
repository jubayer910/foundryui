// Article card (montra, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const InfoCircle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 9h.01\" /><path d=\"M11 12h1v4h1\" /></g>");

export function ArticleCard() {
  return (
    <div style={{ width: "560px", height: "819px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "22.84px 24.67px 22.84px 24.67px", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e6fbfb", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#0a9ea3" }}>Bank connections</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#a6a6a6"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>6 min read</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#a6a6a6"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "165px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Works with Plaid, Mercury, Stripe</p>
        </div>
      </div>
      <p style={{ width: "512.48px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#222222", lineHeight: "1.5499999523162842" }}>Reconciling confirms that every line in your bank feed has a matching transaction in Montra, so August closes with the same $28,640 your banks report.</p>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.54px", fontWeight: 500, color: "#202020", letterSpacing: "-0.01em" }}>1. Open the account</p>
      <p style={{ width: "512.48px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46", lineHeight: "1.5499999523162842" }}>Go to Accounts, pick Chase Business Checking and choose Reconcile. Montra pulls the statement balance for 01 – 09 Aug and lines up each bank entry with its best match.</p>
      <div style={{ width: "512.48px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "512.48px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "512.48px", height: "34.73px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "186px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Bank line</p>
            </div>
            <div style={{ width: "150px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Montra match</p>
            </div>
            <div style={{ width: "176.48px", height: "34.73px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Confidence</p>
            </div>
          </div>
          <div style={{ width: "512.48px", height: "43.87px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "186px", height: "42.96px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "145px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "10.51px", fontWeight: 400, color: "#222222" }}>ACH NORTHWIND +4,200.00</p>
            </div>
            <div style={{ width: "150px", height: "42.96px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Client Payment</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>INV-1046</p>
                </div>
              </div>
            </div>
            <div style={{ width: "176.48px", height: "42.96px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>98%</p>
              </div>
            </div>
          </div>
          <div style={{ width: "512.48px", height: "43.87px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "186px", height: "42.96px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "10.51px", fontWeight: 400, color: "#222222" }}>AMEX AWS EMEA −620.00</p>
            </div>
            <div style={{ width: "150px", height: "42.96px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>AWS Infrastructure</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Software</p>
                </div>
              </div>
            </div>
            <div style={{ width: "176.48px", height: "42.96px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>94%</p>
              </div>
            </div>
          </div>
          <div style={{ width: "512.48px", height: "43.87px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "186px", height: "42.96px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "158px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "10.51px", fontWeight: 400, color: "#222222" }}>CHK 1187 WEWORK −1,450.00</p>
            </div>
            <div style={{ width: "150px", height: "42.96px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#fff4eb", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#e8711a"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e8711a" }}>No match yet</p>
              </div>
            </div>
            <div style={{ width: "176.48px", height: "42.96px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                  <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>41%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "349px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>Match suggestions for Chase Business Checking · 3 of 41 lines shown</p>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "208px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.54px", fontWeight: 500, color: "#202020", letterSpacing: "-0.01em" }}>2. Review match suggestions</p>
      <div style={{ width: "512.48px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "999px", background: "#222222", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "5px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>1</p>
        </div>
        <p style={{ width: "483.24px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46", lineHeight: "1.5" }}>Accept matches above 90% in one go with Accept all.</p>
      </div>
      <div style={{ width: "512.48px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "999px", background: "#222222", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>2</p>
        </div>
        <p style={{ width: "483.24px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46", lineHeight: "1.5" }}>Open anything below 60% and pick the right transaction or split it.</p>
      </div>
      <div style={{ width: "512.48px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "999px", background: "#222222", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>3</p>
        </div>
        <p style={{ width: "483.24px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46", lineHeight: "1.5" }}>Create a rule so the same merchant matches automatically next time.</p>
      </div>
      <div style={{ width: "512.48px", flexShrink: 0, borderRadius: "9.14px", background: "#eef5ff", boxShadow: "inset 0 0 0 0.91px #d6e6ff", display: "flex", flexDirection: "row", padding: "11.88px 13.7px 11.88px 13.7px", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <InfoCircle size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#1f6fe0", display: "block" }} />
        <p style={{ width: "461.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#1e3a6b", lineHeight: "1.5" }}>Rules already auto-match 82% of Alder & Co.’s bank lines. The 12 transactions waiting for review in August are the ones no rule covers yet.</p>
      </div>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "160px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.54px", fontWeight: 500, color: "#202020", letterSpacing: "-0.01em" }}>3. Fix unmatched lines</p>
      <p style={{ width: "512.48px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46", lineHeight: "1.5499999523162842" }}>For a line like the WeWork rent above, choose Find match, search by amount or date, or create the transaction straight from the bank line.</p>
      <div style={{ width: "512.48px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "11.88px 11.88px 11.88px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#18b170"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Matched</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#202020" }}>29 lines</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(24, 177, 112, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(24, 177, 112, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(24, 177, 112, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(24, 177, 112, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(24, 177, 112, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(24, 177, 112, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(24, 177, 112, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(24, 177, 112, 0.16)" }} />
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "11.88px 11.88px 11.88px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#4996fe"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Suggested</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#202020" }}>8 lines</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "11.88px 11.88px 11.88px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#fd872f"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Unmatched</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#202020" }}>4 lines</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            <div style={{ width: "2.92px", height: "9.14px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
