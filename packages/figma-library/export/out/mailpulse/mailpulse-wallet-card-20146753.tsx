// Wallet card (mailpulse, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { BuildingBank as BuildingBankBulk, Clock as ClockBulk, Download as DownloadBulk, Wallet as WalletBulk } from "ingotui-icons/react/bulk";
import { Dots, TrendingUp } from "ingotui-icons/react/stroke-rounded";

export function WalletCard() {
  return (
    <div style={{ width: "360px", height: "490.27px", borderRadius: "14.62px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "19.19px 19.19px 19.19px 19.19px", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(21, 179, 146, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <WalletBulk size={16.5} strokeWidth={2.18} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#15b392", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Earnings</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "140px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>Paid subscriptions in USD</p>
        </div>
        <div style={{ width: "21.93px", height: "21.93px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16.5} strokeWidth={2.18} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>Balance</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "45px", fontFamily: "'Geist'", fontSize: "34.74px", fontWeight: 500, color: "#222222", letterSpacing: "-0.02em" }}>$12,486.40</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", display: "flex", flexDirection: "row", padding: "3.66px 5.48px 3.66px 5.48px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <TrendingUp size={12.8} strokeWidth={2.81} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#15b392", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#15b392" }}>+5.2%</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "218px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>$10,342.90 available, $2,143.50 pending</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10.97px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "13.7px 13.7px 11.88px 13.7px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Paid subscriptions</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>$27,520 in the last 6 months</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#15b392" }}>+31.7%</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#666d80" }}>$4.0k</p>
            <div style={{ width: "27.42px", height: "72.92px", flexShrink: 0, borderRadius: "5.48px 5.48px 2.74px 2.74px", background: "linear-gradient(180deg, #e2f4cd 0%, #d2efb2 100%)", boxShadow: "inset 0 0 0 0.91px rgba(136, 203, 60, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.7), inset 0px 0px 2.74px 0px rgba(255, 255, 255, 0.25)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>Jun</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#666d80" }}>$4.2k</p>
            <div style={{ width: "27.42px", height: "77.13px", flexShrink: 0, borderRadius: "5.48px 5.48px 2.74px 2.74px", background: "linear-gradient(180deg, #e2f4cd 0%, #d2efb2 100%)", boxShadow: "inset 0 0 0 0.91px rgba(136, 203, 60, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.7), inset 0px 0px 2.74px 0px rgba(255, 255, 255, 0.25)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>Jul</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#666d80" }}>$4.4k</p>
            <div style={{ width: "27.42px", height: "80.43px", flexShrink: 0, borderRadius: "5.48px 5.48px 2.74px 2.74px", background: "linear-gradient(180deg, #e2f4cd 0%, #d2efb2 100%)", boxShadow: "inset 0 0 0 0.91px rgba(136, 203, 60, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.7), inset 0px 0px 2.74px 0px rgba(255, 255, 255, 0.25)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>Aug</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#666d80" }}>$4.7k</p>
            <div style={{ width: "27.42px", height: "86.47px", flexShrink: 0, borderRadius: "5.48px 5.48px 2.74px 2.74px", background: "linear-gradient(180deg, #e2f4cd 0%, #d2efb2 100%)", boxShadow: "inset 0 0 0 0.91px rgba(136, 203, 60, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.7), inset 0px 0px 2.74px 0px rgba(255, 255, 255, 0.25)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>Sep</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#666d80" }}>$5.0k</p>
            <div style={{ width: "27.42px", height: "91.24px", flexShrink: 0, borderRadius: "5.48px 5.48px 2.74px 2.74px", background: "linear-gradient(180deg, #e2f4cd 0%, #d2efb2 100%)", boxShadow: "inset 0 0 0 0.91px rgba(136, 203, 60, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.7), inset 0px 0px 2.74px 0px rgba(255, 255, 255, 0.25)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>Oct</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$5.2k</p>
            <div style={{ width: "27.42px", height: "96px", flexShrink: 0, borderRadius: "5.48px 5.48px 2.74px 2.74px", background: "linear-gradient(180deg, #9edb58 0%, #8fd63f 100%)", boxShadow: "inset 0 0 0 0.91px rgba(112, 167, 49, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 2.74px 0px rgba(255, 255, 255, 0.25)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#666d80" }}>Nov</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "29.24px", flexShrink: 0, borderRadius: "91.39px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.31px 10.97px 7.31px 10.97px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <BuildingBankBulk size={14.6} strokeWidth={2.47} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff" }}>Payout</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <DownloadBulk size={14.6} strokeWidth={2.47} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Withdraw</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ClockBulk size={12.8} strokeWidth={2.81} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "294px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#747474" }}>Next automatic payout Dec 31 to Mercury ending 4821</p>
      </div>
    </div>
  );
}
