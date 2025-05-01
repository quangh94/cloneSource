import { RecommendationChooseUs } from "./RecommendationChooseUs";
import { RecommendationHeader } from "./RecommendationHeader";
import { RecommendationList } from "./RecommendationList";
import "./recommendation.css";

export const Recommendation = () => {
  return (
    <section className="main-contents no-sidenavi">
      <div id="case" className="content-section case">
        <div className="cases-wrapper sub-content">
          <RecommendationHeader />
          <RecommendationChooseUs />
          <RecommendationList />
        </div>
      </div>
    </section>
  );
};
