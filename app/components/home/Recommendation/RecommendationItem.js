export const RecommendationItem = ({ caseItem }) => {
  const { images, caption, message, solution } = caseItem;

  return (
    <div className="case">
      <div className="image">
        <img className="pc" src={images.case.src} alt={images.case.alt} width={images.case.width} height={images.case.height} loading="lazy" />
        <img className="icon pc" src={images.icon.src} alt={images.icon.alt} width={images.icon.width} height={images.icon.height} loading="lazy" />
      </div>
      <div className="detail">
        <div className="caption">{caption}</div>
        <p className="message">{message}</p>
        <div className="solution">
          <span className="lead-arrow">{solution.lead}</span>
          <span className="conclusion">
            <span>{solution.conclusion}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
