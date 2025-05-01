import Image from "next/image";
import Link from "next/link";
import { strapiImageLoader } from "@/app/utils/imageLoader";

export const ProductItem = ({ image, title, link }) => {
  return (
    <div className="item-kaden">
      <Link href={link} className="noline">
        <div className="image">
          <Image src={image} alt={title} width={300} height={200} className="item-img" loader={() => strapiImageLoader(image)} />
        </div>
        <p className="name">{title}</p>
      </Link>
    </div>
  );
};
