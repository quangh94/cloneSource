"use client";

import { strapiImageLoader } from "@/app/utils/imageLoader";
import Image from "next/image";

export const RecentSalesItem = ({ image, title, category, price, comment }) => {
  return (
    <div className="casestudy">
      <div className="head">
        <div className="image">
          <Image src={image} alt={title} width={300} height={225} className="cm-purchase_item_img_inner" loader={() => strapiImageLoader(image)} />
        </div>
        <div className="shop-info">
          <div className="shop-name">{category}</div>
        </div>
      </div>
      <div className="bottom">
        <h3 className="title ellipsis multiline">{title}</h3>
        <div className="review-content">
          <div className="element">
            <div className="content price">
              <span className="price-label">買取価格</span>
              <span className="price-number">{price}</span>
              <span className="unit">円</span>
            </div>
          </div>
          <div className="element vertical">
            <div className="label">担当バイヤーのコメント</div>
            <div className="content voice ellipsis multiline">{comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
