import { Carousel } from "antd";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="banner">
      <Carousel autoplay dotPosition="top" arrows>
        <div style={{ width: "100%", background: "#01a1dd" }}>
          <Image
            src="/assets/images/banner.webp"
            alt="バナー"
            width={"1000"}
            height={660}
            className="banner-img"
            style={{ width: "100%", background: "#01a1dd" }}
          />
        </div>
        <div style={{ width: "100%", background: "#01a1dd" }}>
          <Image
            src="/assets/images/banner_2.webp"
            alt="バナー"
            width={"1000"}
            height={660}
            className="banner-img"
            style={{ width: "100%", background: "#01a1dd" }}
          />
        </div>
        <div style={{ width: "100%", background: "#01a1dd" }}>
          <Image
            src="/assets/images/banner_3.webp"
            alt="バナー"
            width={"1000"}
            height={660}
            className="banner-img"
            style={{ width: "100%", background: "#01a1dd" }}
          />
        </div>
      </Carousel>
    </div>
  );
};
