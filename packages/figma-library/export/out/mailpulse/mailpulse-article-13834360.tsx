// Article (mailpulse, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Copy = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666\" /><path d=\"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1\" /></g>");
const ThumbUp = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3\" /></g>");
const InfoCircleBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 0 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 9H12.01\"/><path d=\"M11 12H12V16H13\"/></g>");

export function Article() {
  return (
    <div style={{ width: "560px", height: "695.92px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#4e57ed"/></svg>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "121px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed", lineHeight: "1.4600000381469727" }}>Sending & deliverability</p>
      </div>
      <div style={{ width: "1px", height: "10.97px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "370px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Set up DKIM and SPF for your domain</p>
      <div style={{ width: "1px", height: "5.48px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "187px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>Updated Dec 12, 2026 · 4 min read</p>
      <div style={{ width: "1px", height: "18.28px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <p style={{ width: "560px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>DKIM and SPF tell inbox providers that MailPulse is allowed to send on behalf of your domain. Without them, Gmail and Apple Mail are more likely to route issues to spam or show a "via mailpulse.co" label next to your name.</p>
      <div style={{ width: "1px", height: "9.14px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <p style={{ width: "560px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>You will add three records at your DNS provider (Cloudflare, GoDaddy, Namecheap and so on). It takes about five minutes and you only do it once per domain.</p>
      <div style={{ width: "1px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "176px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#000000", letterSpacing: "-0.01em" }}>Add these DNS records</p>
      <div style={{ width: "1px", height: "7.31px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <p style={{ width: "560px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Copy each value exactly as shown. Most providers add your domain to the host automatically.</p>
      <div style={{ width: "1px", height: "12.79px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ width: "560px", flexShrink: 0, borderRadius: "9.14px", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "558.18px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "558.18px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "70px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Type</p>
            </div>
            <div style={{ width: "130px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Host</p>
            </div>
            <div style={{ width: "298.18px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Value</p>
            </div>
            <div style={{ width: "60px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, height: "17px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
          <div style={{ width: "558.18px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "70px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "48.06px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>TXT</p>
            </div>
            <div style={{ width: "130px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "108.06px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>mp._domainkey</p>
            </div>
            <div style={{ width: "298.18px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "276.24px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC</p>
            </div>
            <div style={{ width: "60px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "#ffffff", boxShadow: "inset 0 0 0 0.78px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0.78px 0.78px 0.78px 0.78px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Copy size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#141b34", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "558.18px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "70px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "48.06px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>TXT</p>
            </div>
            <div style={{ width: "130px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "108.06px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>@</p>
            </div>
            <div style={{ width: "298.18px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "276.24px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>v=spf1 include:mail.mailpulse.co ~all</p>
            </div>
            <div style={{ width: "60px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "#ffffff", boxShadow: "inset 0 0 0 0.78px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0.78px 0.78px 0.78px 0.78px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Copy size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#141b34", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "558.18px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "70px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 16.45px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "48.06px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>CNAME</p>
            </div>
            <div style={{ width: "130px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "108.06px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>bounce</p>
            </div>
            <div style={{ width: "298.18px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "276.24px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>bounce.mailpulse.co</p>
            </div>
            <div style={{ width: "60px", height: "43.87px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 0px 10.97px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "#ffffff", boxShadow: "inset 0 0 0 0.78px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0.78px 0.78px 0.78px 0.78px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Copy size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#141b34", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "1px", height: "12.79px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ width: "560px", flexShrink: 0, borderRadius: "9.14px", background: "#f6f6ff", boxShadow: "inset 0 0 0 0.91px rgba(78, 87, 237, 0.3)", display: "flex", flexDirection: "row", padding: "10.97px 13.7px 10.97px 13.7px", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", padding: "1.83px 0px 0px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <InfoCircleBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#4e57ed", display: "block" }} />
        </div>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e", lineHeight: "1.5", letterSpacing: "-0.01em" }}>DNS changes can take up to 48 hours. We re-check every 15 minutes and email you as soon as both records pass.</p>
      </div>
      <div style={{ width: "1px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#000000", letterSpacing: "-0.01em" }}>Verify the records</p>
      <div style={{ width: "1px", height: "7.31px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <p style={{ width: "560px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Go back to System Settings → Sending domain and press Verify. Both rows turn green once the records are live, and new issues are signed with your domain from then on.</p>
      <div style={{ width: "1px", height: "21.93px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ width: "560px", flexShrink: 0, boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "15.53px 0px 0px 0px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Was this helpful?</p>
        <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ThumbUp size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "21px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Yes</p>
        </div>
        <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>No</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "166px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>214 creators found this helpful</p>
      </div>
    </div>
  );
}
