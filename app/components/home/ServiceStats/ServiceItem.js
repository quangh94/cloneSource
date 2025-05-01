import Image from "next/image";
import CountUp from "react-countup";
import { strapiImageLoader } from "@/app/utils/imageLoader";

export const ServiceItem = ({ image, title, count, duration = 10 }) => {
  return (
    <div className="service">
      <Image
        src={image}
        alt={title}
        width={70}
        height={70}
        className="service-img"
        style={{ width: "100%" }}
        loader={() => strapiImageLoader(image)}
      />
      <h5 className="service-title">{title}</h5>
      <h2 className="service-count">
        <CountUp start={0} end={count} duration={duration} separator="" />
      </h2>
    </div>
  );
};
