import { useRef, useState } from "react";
import { PurchaseHeader } from "./PurchaseHeader";
import { PurchaseTabs } from "./PurchaseTabs";
import { PurchaseList } from "./PurchaseList";

export const PurchaseItems = () => {
  const [selected, setSelected] = useState("appliance");
  const purchaseApplianceBtnRef = useRef(null);
  const purchaseFurnitureBtnRef = useRef(null);
  const purchaseApplianceRef = useRef(null);
  const purchaseFurnitureRef = useRef(null);

  const handleTabChange = (type) => {
    setSelected(type);
  };

  return (
    <div className="main-contents-inner">
      <div className="content-section shops">
        <PurchaseHeader />
      </div>

      <div className="taisho-item">
        <PurchaseTabs
          purchaseApplianceBtnRef={purchaseApplianceBtnRef}
          purchaseFurnitureBtnRef={purchaseFurnitureBtnRef}
          selected={selected}
          onTabChange={handleTabChange}
        />

        <div className={`cm-purchase_cont is-${selected}_border`}>
          <PurchaseList 
            type="furniture" 
            ref={purchaseApplianceRef} 
            isSelected={selected === "furniture"}
          />
          <PurchaseList 
            type="appliance" 
            ref={purchaseFurnitureRef} 
            isSelected={selected === "appliance"}
          />
        </div>
      </div>
    </div>
  );
}; 