export const RecommendationItem = ({ caseItem }) => {
  const { images, caption, message, solution } = caseItem;

  return (
    <div className="case">
      <div className="image">
        <img
          className="pc"
          src={images.pc.case.src}
          alt={images.pc.case.alt}
          width={images.pc.case.width}
          height={images.pc.case.height}
          loading="lazy"
        />
        <img
          className="icon pc"
          src={images.pc.icon.src}
          alt={images.pc.icon.alt}
          width={images.pc.icon.width}
          height={images.pc.icon.height}
          loading="lazy"
        />
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
