export const PurchaseTabs = ({ purchaseApplianceBtnRef, purchaseFurnitureBtnRef, selected, onTabChange }) => {
  return (
    <ul className="cm-purchase_nav">
      <li className="cm-purchase_nav_item">
        <a
          ref={purchaseApplianceBtnRef}
          data-target="#cm-purchase_furniture"
          id="cm-purchase_furniture_btn"
          className={`cm-purchase_nav_btn noScroll cm-purchase_furniture ${selected === "furniture" ? "is-active" : ""}`}
          onClick={() => onTabChange("furniture")}
        >
          家具 <span>※ご購入15年以内</span>
        </a>
      </li>
      <li className="cm-purchase_nav_item">
        <a
          ref={purchaseFurnitureBtnRef}
          data-target="#cm-purchase_appliance"
          id="cm-purchase_appliance_btn"
          className={`cm-purchase_nav_btn noScroll cm-purchase_appliance ${selected === "appliance" ? "is-active" : ""}`}
          onClick={() => onTabChange("appliance")}
        >
          家電 <span>※製造10年以内</span>
        </a>
      </li>
    </ul>
  );
}; 