import { useServiceStats } from "@/app/hooks/useServiceStats";
import { ServiceItem } from "./ServiceItem";
import "./serviceStats.css";

const services = [
  {
    image: "/assets/images/service_1.webp",
    title: "遺品整理・生前整理",
    count: 14325,
  },
  {
    image: "/assets/images/service_2.webp",
    title: "引越し※停止中",
    count: 58530,
  },
  {
    image: "/assets/images/service_3.webp",
    title: "便利屋サービス",
    count: 46585,
  },
];

export const ServiceStats = () => {
  const { data, isLoading, error } = useServiceStats();

  if (isLoading) return <div>Loading service stats...</div>;
  if (error) return <div>Error loading service stats: {error.message}</div>;

  const stats = data?.data || [];

  return (
    <div className="service-content">
      <div className="our-service">ただいまのお問い合わせ件数</div>
      <div className="all-service">
        {stats.map((service, index) => (
          <ServiceItem key={index} image={service.attributes?.image?.url} title={service.title} count={service.count} />
        ))}
      </div>
    </div>
  );
};
