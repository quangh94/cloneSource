export const ServiceAreaOutline = () => {
  return (
    <div className="area-outline">
      <div className="area-left">
        <img
          loading="lazy"
          src="https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/area_ttl.png"
          alt="即日対応可能エリア"
          width="480"
          height="55"
        />
        <div className="area-link-list">
          {["仙台市", "青葉区", "宮城野区", "若林区", "太白区", "泉区", "名取市", "その他ご相談可能!"].map((text, index) => (
            <a href="#" key={index} className="link-map">
              {text}
            </a>
          ))}
        </div>
        <p className="area-text">
          宮城県の不用品回収・粗大ゴミ処分は、仙台不用品回収サービスにお任せください！ トラックに空きがあれば、
          <span className="under_green">即日不用品を回収</span>にお伺い致します！
          年式の新しい家電や、未使用の家電は積極的に買取させて頂きます。まずはお気軽にお問い合わせください
        </p>
      </div>
      <div className="area-right">
        <figure className="flr">
          <img
            loading="lazy"
            src="https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/areamap.png"
            alt="仙台不用品回収サービス対応エリア"
            width="480"
            height="409"
          />
        </figure>
      </div>
    </div>
  );
};
