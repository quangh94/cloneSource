"use client";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { useRecentSales } from "@/app/hooks/useRecentSales";
import { Carousel } from "antd";
import { RecentSalesItem } from "./RecentSalesItem";

export const RecentSalesList = () => {
  const { recentSales, isLoading, error } = useRecentSales();

  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isLoading) return <div>Loading recent sales...</div>;
  if (error) return <div>Error loading recent sales: {error.message}</div>;

  return (
    <div className="casestudy-list-wrapper">
      <div className="casestudy-list">
        <Carousel autoplay dotPosition="top" arrows slidesToShow={isMobile ? 1 : 4}>
          {recentSales.map((sale) => (
            <RecentSalesItem
              key={sale.id}
              image={sale.attributes?.image?.url}
              title={sale.title}
              category={sale.category_name}
              price={sale.price}
              comment={sale.comment}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
