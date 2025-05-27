export const RecommendationChooseUs = () => {
  const faqItems = [
    {
      question: "作業代、解体代、分別代、階段、荷運びなどは無料ですか？",
      answer: "はい！無料です！",
      details:
        "基本的な軽作業はパック料金に含まれておりますが、作業内容によっては別料金になるような作業もありますので現地見積もりで事前に説明させて頂きますのでご安心下さい。",
    },
    {
      question: "車両は何できますか？",
      answer: "車両は軽トラック、1トン平ボディ車、2トン平ボディ車など様々ございます。",
      details:
        "ですが、車両の大きさで金額が決まる訳ではありません。お客様の荷物の物量や内容に応じて金額は決まります。例えば2t車でお伺いする事があっても、Sパックのご利用はできますのでご安心下さい。希望の車両があれば問い合わせして頂ければ対応もできるので、回収ができないなどなく、安心してご利用頂けます。",
    },
    {
      question: "回収に来た時、トラックに荷物が乗ってる事もあるの？料金が高くなるのでは？",
      answer: "前の現場の荷物なので、料金が高くなることはありません。",
      details:
        "弊社も1日に回る現場が複数ございますのでお荷物が乗ってる事もございます。但しお客様の乗せれる物量が変わったり、金額が高くなったり、回収できなくて残ってしまうなど、お客様に対してのお見積金額や回収できる物量に違いがでたりは致しません。あくまでその時の物量や内容に対してのお見積もりとなりますので安心してご利用頂けます。",
    },
    {
      question: "見積もりだけでも大丈夫ですか？",
      answer: "はい、可能です！",
      details: "不用品回収、ゴミ屋敷清掃、遺品整理などお困りごとのお見積もりだけのご依頼でも問題ございません。お見積もりはもちろん無料です。",
    },
    {
      question: "依頼前に梱包や分別などは必要ですか？",
      answer: "不要です！",
      details: "そのままの状態で問題ございません。担当スタッフにお任せ下さい。",
    },
    {
      question: "回収できないものはありますか？",
      answer: "基本的にはございません！",
      details: "自治体に回収を断られた商品などでも問題ございません。まずは一度お問い合わせください。",
    },
    {
      question: "当日の依頼でも対応可能ですか？",
      answer: "ご相談ください！",
      details: "まずはご都合をお聞かせください。最速でお伺いできる日程をお伝えさせていただきます。",
    },
    {
      question: "エレベーターがないのですが対応可能でしょうか。",
      answer: "もちろんです！",
      details: "エレベーターがない建物でも対応可能です。２階までなら追加料金なしで対応させていただきます。",
    },
    {
      question: "追加料金はかかりますか？",
      answer: "かかりません！",
      details: "ご納得いただいたお見積もり内での作業となります。勝手に作業を行い追加料金がかかることはございません！",
    },
    {
      question: "天候が悪くても回収してもらえますか？",
      answer: "もちろんです！",
      details:
        "天候に関係なく回収可能です。お気軽にお問い合わせください。また雨の日の場合は、運び出しの際にも最善の注意を払って回収作業を行っておりますのでご安心ください。※悪天候の場合、交通状況により日程変更をお願いする場合がございます。",
    },
    {
      question: "土、日、祝日などでも作業は可能でしょうか？",
      answer: "可能です！",
      details: "土・日・祝日含め、年中無休で営業しております。週末しかお時間の無い方もご安心ください。",
    },
    {
      question: "夜間でも対応できますか？",
      answer: "ご相談ください！",
      details: "早朝・夜間問わず対応させていただきますので日程、お時間につきましてまずはご相談ください！",
    },
  ];

  return (
    <div className="case-list choose-us-wrapper">
      <h2 className="choose-us">
        <strong>エステートセールが</strong>
        <strong>
          <mark>選ばれる理由</mark>
        </strong>
      </h2>
      <figure>
        <img className="procedure-img" decoding="async" loading="lazy" width="1424" height="1284" src="https://estatesale-rtn.com/wp-content/uploads/2024/11/図-1.png" alt="" />
      </figure>
      <div className="boxFaqSingle">
        <div className="boxFAQ clearfix">
          <ul className="listQa">
            {faqItems.map((item, index) => (
              <li key={index}>
                <input type="checkbox" id={`faq-${index}`} className="faq-toggle" hidden />
                <label htmlFor={`faq-${index}`}>
                  <h3 className="titleQuestion">{item.question}</h3>
                </label>
                <div className="boxAnswer">
                  <h4 className="titleAnswer">{item.answer}</h4>
                  <div className="textAnswer">
                    {item.details}
                    <span className="faq-link">
                      <a rel="nofollow" href="#/estimate/">
                        フォーム見積もり
                      </a>
                      <a rel="nofollow" href="tel:0120-243-883">
                        電話見積もり
                      </a>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
