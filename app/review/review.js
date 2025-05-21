import "./review.css";

const reviews = [
  {
    avatar: "https://ecobee.jp/wp-content/uploads/2024/06/グループ-26490.png.webp",
    age: "60代女性",
    heading: "査定して頂いている最中に、色々なお話をして下さり、売る側の気持ちになってアドバイス頂きました。",
    description:
      "家の中で出せるものを探し、眠っていたもの、捨てる様なものがお金になり、ビックリしました。うれしかったです。買い取り出来ないものの丁寧な説明も大変満足してます。来て頂いて良かったです。",
  },
  {
    avatar: "https://ecobee.jp/wp-content/uploads/2024/06/グループ-26489.png.webp",
    age: "20代男性",
    heading: "2日後に引っ越しをする予定だったのでしたが、何もできておらず焦って電話しました！笑",
    description:
      "来てくれたお兄さんは嫌な顔ひとつせずに親身になって対応してくれました。不要なものだけを持っていってもらうつもりでしたが、引越しまで手伝って頂きました！本当に感謝です！お金はかかりましたが、その中でも買取できるものは買取してもらい、引越し費用から引いてもらいました！また何かあったら絶対にお兄さんにお願いします！ありがとうございました！",
  },
  {
    avatar: "https://ecobee.jp/wp-content/uploads/2024/06/グループ-26491.png.webp",
    age: "40代男性",
    heading: "丁寧に見て頂いて、追加のものがたくさんあったのですが、イヤな顔せずとてもありがたかったです！",
    description:
      "最後には引取の再確認もしてくださったので、安心してまかせることができました。またこのような機会があればぜひお願いしたいと思いますので、またよろしくお願い致します！",
  },
];

export const Review = () => {
  return (
    <div className="area-wrapper reivew-wrapper">
      <h3 className="area-title">
        当社ではサービス向上のため、利用者様に定期的にご意見を伺っております。。
        <br />
        お答えくださった利用者様の声をご紹介いたします。
      </h3>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="main-contents-inner">
              <div className="avatar">
                <img src={review.avatar} alt="Avatar" width={150} height={150} />
              </div>
              <div className="info">
                <ul className="info-list">
                  <li className="info-item">
                    <span className="info-age">{review.age}</span>
                  </li>
                </ul>
                <h3 className="heading">{review.heading}</h3>
              </div>
            </div>
            <hr className="separator" />
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
