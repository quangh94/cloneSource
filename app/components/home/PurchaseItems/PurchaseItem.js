import Image from "next/image";
import { strapiImageLoader } from "@/app/utils/imageLoader";

export const PurchaseItem = ({ image, title }) => {
  return (
    <li className="cm-purchase_item">
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="cm-purchase_item_img"
        loader={() => strapiImageLoader(image)}
      />
      <p className="cm-purchase_item_txt">{title}</p>
    </li>
  );
}; 