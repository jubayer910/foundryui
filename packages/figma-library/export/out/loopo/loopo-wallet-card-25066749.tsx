// Wallet card (loopo, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { ArrowsExchange as ArrowsExchangeBulk, BuildingBank as BuildingBankBulk, ReceiptDollar as ReceiptDollarBulk, Wallet as WalletBulk } from "ingotui-icons/react/bulk";
import { ArrowUpRight, DotsVertical, Plus } from "ingotui-icons/react/stroke-rounded";

export function WalletCard() {
  return (
    <div style={{ width: "420px", height: "529.39px", borderRadius: "17.53px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 2.19px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "20.82px 20.82px 20.82px 20.82px", gap: "17.53px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "37px", height: "37px", flexShrink: 0, borderRadius: "9.86px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <WalletBulk size={20} strokeWidth={1.8} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#000000" }}>Wallet</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>Main balance, USD</p>
        </div>
        <div style={{ width: "31px", height: "31px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <DotsVertical size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "188px", lineHeight: "46px", fontFamily: "'Geist'", fontSize: "35.06px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>$24,580.40</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ArrowUpRight size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#18b170", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#18b170" }}>+$1,240.00</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#747474" }}>this month</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "13.15px", background: "#fafafa", boxShadow: "inset 0 0 0 1.1px #eeeeee", display: "flex", flexDirection: "column", padding: "12.06px 14.25px 12.06px 14.25px", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Available</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#222222" }}>$22,140.40</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "13.15px", background: "#fafafa", boxShadow: "inset 0 0 0 1.1px #eeeeee", display: "flex", flexDirection: "column", padding: "12.06px 14.25px 12.06px 14.25px", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Pending</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#222222" }}>$2,440.00</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Plus size={17.5} strokeWidth={2.06} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Add funds</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Send</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Withdraw</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Recent activity</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>See all</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "33px", height: "33px", flexShrink: 0, borderRadius: "8.79px", background: "rgba(46, 144, 250, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <BuildingBankBulk size={17} strokeWidth={2.12} style={{ width: "17px", height: "17px", flexShrink: 0, color: "#2e90fa", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Payout from Stripe</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>Today, 09:42</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#18b170" }}>+$3,120.00</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "33px", height: "33px", flexShrink: 0, borderRadius: "8.79px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <ReceiptDollarBulk size={17} strokeWidth={2.12} style={{ width: "17px", height: "17px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Figma Professional</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>Yesterday, 18:05</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>−$225.00</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "33px", height: "33px", flexShrink: 0, borderRadius: "8.79px", background: "rgba(122, 90, 248, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <ArrowsExchangeBulk size={17} strokeWidth={2.12} style={{ width: "17px", height: "17px", flexShrink: 0, color: "#7a5af8", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Transfer to Savings</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>Nov 24, 11:30</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>−$1,500.00</p>
        </div>
      </div>
    </div>
  );
}
