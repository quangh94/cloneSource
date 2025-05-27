import { ServiceAreaHeader } from "./ServiceAreaHeader";
import { ServiceAreaOutline } from "./ServiceAreaOutline";
import { ServiceAreaList } from "./ServiceAreaList";

export const ServiceArea = () => {
  return (
    <section className="main-contents no-sidenavi">
      <div className="main-contents-inner">
        <div className="content-section">
          <div className="cases-wrapper sub-content">
            <ServiceAreaHeader />
            <ServiceAreaOutline />
            <ServiceAreaList />
          </div>
        </div>
      </div>
    </section>
  );
}; 