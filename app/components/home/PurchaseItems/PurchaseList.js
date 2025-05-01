'use client';

import { usePurchaseItems } from "@/app/hooks/usePurchaseItems";
import { PurchaseItem } from "./PurchaseItem";

export const PurchaseList = ({ type, ref, isSelected }) => {
  const { applianceItems, furnitureItems, isLoading, error } = usePurchaseItems();

  if (isLoading) return <div>Loading items...</div>;
  if (error) return <div>Error loading items: {error.message}</div>;

  const items = type === "furniture" ? furnitureItems : applianceItems;
  const otherItems =
    type === "furniture"
      ? "AVボード・テレビ台・テーブル・レンジボード・分別ダストボックス・ドレッサーなど"
      : "冷凍庫・IH調理器・石油ファンヒーター・石油ストーブ・ガスファンヒーター・衣類乾燥機・除湿機・掃除機・シーリングライト・液晶モニター・スピーカーシステムなど";

  return (
    <div ref={ref} className={`cm-purchase_box ${isSelected ? "is-show" : ""}`}>
      <ul className="cm-purchase_list">
        {items.map((item, index) => (
          <PurchaseItem key={index} image={item.image} title={item.title} />
        ))}
      </ul>

      <dl className={`cm-purchase_other ${type === "appliance" ? "is-appliance_other" : ""}`}>
        <dt className="cm-purchase_other_ttl">その他の出張買取できる{type === "furniture" ? "家具" : "家電"}</dt>
        <dd className="cm-purchase_other_txt">{otherItems}</dd>
      </dl>
    </div>
  );
};
