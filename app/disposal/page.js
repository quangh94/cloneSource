import Image from "next/image";
import "./page.css";
import { ServiceAreaOutline } from "../components/home/ServiceArea/ServiceAreaOutline";

const reasons = [
  {
    img: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/reason1.png",
    alt: "選ばれる理由①回収費用が宮城県内最安値",
    title: (
      <>
        <span className="color-yellow">業界最安値</span>を保証
      </>
    ),
    desc: "どこよりも安く対応します！他の業者で金額が高いと感じたらまずは当社にお電話下さい。",
  },
  {
    img: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/reason3.png",
    alt: "選ばれる理由②最高5000万円まで補償",
    title: (
      <>
        <span className="color-yellow">仙台市内即日対応</span>可能
      </>
    ),
    desc: "土日祝日も当社は対応可能です。急に片付けが必要になった場合もお任せください！",
  },
  {
    img: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/reason4.png",
    alt: "選ばれる理由③宮城県内即日対応",
    title: (
      <>
        <span className="color-yellow">高価買取</span>を実現
      </>
    ),
    desc: "大手買取FCに加盟しているので適正査定をいたします！",
  },
  {
    img: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/reason2.png",
    alt: "選ばれる理由④写真を撮るだけで簡単見積もり",
    title: (
      <>
        <span className="color-yellow">請負賠償</span>適用
      </>
    ),
    desc: "最大5000万円まで補償いたします！",
  },
  {
    img: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/reason5.png",
    alt: "選ばれる理由⑤写真を撮るだけで簡単見積もり",
    title: (
      <>
        <span className="color-yellow">写真で簡単</span>見積り
      </>
    ),
    desc: (
      <>
        <a href="#">LINE見積り</a>であればスピーディーに御見積りが可能です！
      </>
    ),
  },
  {
    img: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/reason6.png",
    alt: "選ばれる理由⑥1点からお家丸ごとまで片付け",
    title: (
      <>
        <span className="color-yellow">１点～お家丸ごと</span>片付け！
      </>
    ),
    desc: "どんな物でもお任せ下さい！",
  },
];

const flowSteps = [
  {
    step: "STEP.01",
    title: "お問い合わせ",
    img: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/example.jpg",
    imgAlt: "お問い合わせ",
    desc: (
      <>
        フリーダイヤル
        <a href="tel:xxxxxx">
          <span className="under_green">xxxxxx</span>
        </a>
        までお電話ください。
        <br className="br-pc" />
        ご相談、お見積りなどもちろん無料ですのでお気軽にお問い合わせください
      </>
    ),
  },
  {
    step: "STEP.02",
    title: "無料お見積り",
    img: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/mitumori.jpg",
    imgAlt: "無料見積もり",
    desc: (
      <>
        弊社で物量が多いと判断した際には訪問見積もりを致します。
        <br className="pc" />
        状況や、予算等を考慮した最適なプランをご提案させて頂き、
        <br className="pc" />
        お見積り金額にご納得頂いた場合は、その後お申込みになります。ご都合が合えば、そのまますぐ回収できる場合もございます。
      </>
    ),
  },
  {
    step: "STEP.03",
    title: "作業開始",
    img: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/start.jpg",
    imgAlt: "作業開始",
    desc: (
      <>
        お客様のご希望の日時にプロの作業員がお伺いいたします。 作業に関しましてはすべて作業員が行います。
        お客様にしていただくのは処分する物をご指示いただくのみとなります。 作業終了後作業員に料金をお支払いください。 安全・迅速に作業いたします。
      </>
    ),
  },
  {
    step: "STEP.04",
    title: "料金のお支払い",
    img: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/fee.jpg",
    imgAlt: "料金のお支払い",
    desc: (
      <>
        作業終了後、お見積り時にお伝えした料金をお支払い頂きます。
        <br className="br-pc" />
        仙台不用品回収サービスでは、見積り後に不当な追加料金が発生するということは一切ございませんのでご安心ください。
      </>
    ),
  },
];

const planImages = [
  {
    src: "https://huyouhin-pro.com/wp/wp-content/themes/huyouhin-pro/img/home/bnr_plan01_pc.png",
    srcSp: "https://huyouhin-pro.com/wp/wp-content/themes/huyouhin-pro/img/home/bnr_plan01_sp.png",
    alt: "1ルーム程度の お部屋のお片付けに軽トラックパック13,200円前後～",
  },
  {
    src: "https://huyouhin-pro.com/wp/wp-content/themes/huyouhin-pro/img/home/bnr_plan02_pc.png",
    srcSp: "https://huyouhin-pro.com/wp/wp-content/themes/huyouhin-pro/img/home/bnr_plan02_sp.png",
    alt: "1DK・1LDK程度の片づけに 1tトラックパック33,000円前後～",
  },
  {
    src: "https://huyouhin-pro.com/wp/wp-content/themes/huyouhin-pro/img/home/bnr_plan03_pc.png",
    srcSp: "https://huyouhin-pro.com/wp/wp-content/themes/huyouhin-pro/img/home/bnr_plan03_sp.png",
    alt: "2K・2DK程度の片づけに 1.5tトラックパック44,000円前後～",
  },
  {
    src: "https://huyouhin-pro.com/wp/wp-content/themes/huyouhin-pro/img/home/bnr_plan04_pc.png",
    srcSp: "https://huyouhin-pro.com/wp/wp-content/themes/huyouhin-pro/img/home/bnr_plan04_sp.png",
    alt: "家一軒丸ごとの片づけに 2tトラックパック55,000円前後～～",
  },
];

const FAQs = [
  {
    question: "不用品の買取は行っていますか？",
    answer: "仙台不用品回収サービスでは、不用品の買取も行っております。\n未使用の家電や年式の新しい家電がありましたら、買取させて頂きます",
    imgSrc: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/faq-icon-q01.png",
    imgAlt: "不用品回収に関するよくある質問",
    imgAnswer: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/faq-icon-a01.png",
  },
  {
    question: "不用品を即日回収してほしいです",
    answer:
      "作業車が空いていれば、お問い合わせを頂戴しました当日に、不用品を回収させて頂きます。作業車が空いていない場合でも、可能な限り早くお客様の元へお伺い致します。",
    imgSrc: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/faq-icon-q02.png",
    imgAlt: "不用品回収に関するよくある質問",
    imgAnswer: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/faq-icon-a02.png",
  },
  {
    question: "出張見積もりは無料ですか？",
    answer: "仙台不用品回収サービスでは、完全無料で出張見積もりを行っております。まずはお気軽にお問い合わせください。",
    imgSrc: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/faq-icon-q03.png",
    imgAlt: "不用品回収に関するよくある質問",
    imgAnswer: "https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/faq-icon-a03.png",
  },
];

export default function Disposal() {
  return (
    <div className="disposal container">
      <Image src="/assets/images/img-disposal.png" alt="バナー" width={"1100"} height={"520"} className="img-disposal no-padding" />
      <section className="reasons">
        <h2 className="heading06">
          仙台不用品回収サービスが
          <br className="br-sp" />
          選ばれる理由
        </h2>
        <ol className="reason-li">
          {reasons.map((reason, idx) => (
            <li key={idx}>
              <div className="flex">
                <img loading="lazy" src={reason.img} alt={reason.alt} className="reson-icon" width="165" height="165" />
                <div className="txt">
                  <h3>{reason.title}</h3>
                  <p className="sub-title">{reason.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="reasons">
        <h2 className="heading06">不用品回収の流れ</h2>
        <ul className="flow">
          {flowSteps.map((step, idx) => (
            <li key={idx}>
              <dl>
                <dt>
                  <span className="icon">{step.step}</span>
                  {step.title}
                  <br />
                  <img width={200} height={135} loading="lazy" src={step.img} alt={step.imgAlt} />
                </dt>
                <dd>{step.desc}</dd>
              </dl>
            </li>
          ))}
        </ul>
      </section>
      <section className="reasons">
        <ul className="plan-list">
          {planImages.map((img, idx) => (
            <li key={idx} className={idx === 0 ? "plan-item plan-item-first" : "plan-item"}>
              <img src={img.src} data-src={img.srcSp} alt={img.alt} width="345" height="205" />
            </li>
          ))}
        </ul>
      </section>
      <section className="reasons no-padding">
        <ServiceAreaOutline />
      </section>
      <section className="reasons list-case">
        <h2 className="heading06">宮城県の不用品回収事例</h2>
        <ul>
          <li>
            <span>CASE１</span>
            <div>
              <table>
                <caption>
                  <h3>
                    1人暮らしのお客様
                    <br />
                    <p>上京に伴う不用品の処分・回収</p>
                  </h3>
                </caption>
                <tbody>
                  <tr>
                    <th>お部屋の広さ</th>
                    <td>1K</td>
                  </tr>
                  <tr>
                    <th>作業人数</th>
                    <td>2名</td>
                  </tr>
                </tbody>
              </table>
              <picture>
                <img
                  loading="lazy"
                  src="https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/huyouhin-1k.png"
                  alt="1人暮らしの不用品回収"
                />
              </picture>
              <table className="collect-fee">
                <tbody>
                  <tr>
                    <th>回収料金</th>
                    <td>25,500円</td>
                  </tr>
                  <tr>
                    <th className="red">買取３点</th>
                    <td className="red">-5,500円</td>
                  </tr>
                </tbody>
              </table>
              <p className="red">(冷蔵庫、テレビ、電子レンジ）</p>
              <h4 className="total">合計:20,000円</h4>
            </div>
          </li>
          <li>
            <span>CASE２</span>
            <div>
              <table>
                <caption>
                  <h3>
                    ご家族のお客様
                    <br />
                    <p>転勤に伴う不用品回収・買取</p>
                  </h3>
                </caption>
                <tbody>
                  <tr>
                    <th>お部屋の広さ</th>
                    <td>3LDK</td>
                  </tr>
                  <tr>
                    <th>作業人数</th>
                    <td>3名</td>
                  </tr>
                </tbody>
              </table>
              <picture>
                <img
                  loading="lazy"
                  src="https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/huyouhin-3LDK.png"
                  alt="ご家族から不用品回収のご依頼"
                />
              </picture>
              <table className="collect-fee">
                <tbody>
                  <tr>
                    <th>回収料金</th>
                    <td>77,000円</td>
                  </tr>
                  <tr>
                    <th className="red">買取5点</th>
                    <td className="red">-32,000円</td>
                  </tr>
                </tbody>
              </table>
              <p className="red">(おもちゃ、ゲーム、洗濯機）</p>
              <h4 className="total">合計:45,000円</h4>
            </div>
          </li>
          <li>
            <span>CASE３</span>
            <div>
              <table>
                <caption>
                  <h3>
                    遺品整理のご依頼
                    <br />
                    <p>遺品の仕分け・引き取り・回収</p>
                  </h3>
                </caption>
                <tbody>
                  <tr>
                    <th>お部屋の広さ</th>
                    <td>4LDK</td>
                  </tr>
                  <tr>
                    <th>作業人数</th>
                    <td>5名</td>
                  </tr>
                </tbody>
              </table>
              <picture>
                <img
                  loading="lazy"
                  src="https://sendai-huyohin.com/wp-content/themes/sendaihuyouhin/assets/images/top/huyouhin-4LDK.png"
                  alt="遺品整理のご依頼"
                />
              </picture>
              <table className="collect-fee">
                <tbody>
                  <tr>
                    <th>回収料金</th>
                    <td>330,000円</td>
                  </tr>
                  <tr>
                    <th className="red">買取8点</th>
                    <td className="red">-150,000円</td>
                  </tr>
                </tbody>
              </table>
              <p className="red">(ジュエリー、ブランド品）</p>
              <h4 className="total">合計:180,000円</h4>
            </div>
          </li>
        </ul>
      </section>
      <section className="reasons top-faq">
        <h2 className="heading06">不用品回収に関するよくある質問</h2>
        <div className="faq-list">
          {FAQs.map((faq, index) => (
            <div className="accordion_one" key={index}>
              <div className="accordion_box">
                <input type="checkbox" id={`faq${index + 1}`} className="accordion-toggle" hidden />
                <div className="accordion_toggle_box">
                  <div className="accordion_header_box">
                    <img src={faq.imgSrc} alt={faq.imgAlt} className="faq-icon" width="100px" height="120px" />
                    <label className="accordion_header">{faq.question}</label>
                  </div>
                  <label htmlFor={`faq${index + 1}`} className="accordion_header">
                    <span className="i_box">
                      <span className="one_i"></span>
                    </span>
                  </label>
                </div>
                <div className="accordion_inner">
                  <div className="box_one">
                    <img src={faq.imgAnswer} alt={faq.imgAlt} className="faq-icon" width="100px" height="120px" />
                    <p className="answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
