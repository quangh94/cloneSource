import Image from "next/image";
import "./page.css";
const flowBoxes = [
  {
    img: "https://www.kaitoriichiba.net/wp/wp-content/themes/kaitori_theme/images/flow/f11.jpg",
    num: 1,
    title: "ご予約を受付いたします。",
    content: (
      <>
        <p>
          <strong>
            お電話・<a href="#contact">メール</a>・<a href="#line">LINE＠</a>・店頭でご予約を受付いたします。
          </strong>
        </p>
        <p>・ご予約制になっておりますので、スケジュールの空いている箇所からお選びいただきます。</p>
        <p>※出張買取対象商品（冷蔵庫・洗濯機・エアコン・大型TV・大型家具等）と一緒であれば小物家電や小物家具も査定いたしております。</p>
        <p>※衣料品や雑貨など出張買取対象外の商品もございますので詳しくはお問い合わせください。</p>
        <h5 className="point_ti02">ワンポイントアドバイス</h5>
        <p className="txt02">
          家電製品は「年式・型式・キズなどの状態」・家具は「購入年・購入先・キズなどの状態」を事前にお調べたくと受付がスムーズに進みます。
        </p>
        <p className="txt02">家具はメーカー・ブランド品であれば、教えていただくと、ある程度事前調査いたします。</p>
      </>
    ),
  },
  {
    img: "https://www.kaitoriichiba.net/wp/wp-content/themes/kaitori_theme/images/flow/f12.jpg",
    num: 2,
    title: "当日、お電話で在宅確認をさせていただいてからご自宅にお伺いいたします。",
    content: (
      <>
        <p>
          ※ご予約をいただいた時間にお伺いいたしますが、前後のお客様の作業状況や交通状況により、多少の時間のズレがございます。ある程度の時間の余裕を持ってお待ち下さい。
        </p>
        <p>※当日、お電話に出られない場合はお伺いできない場合がございます。必ず。お電話が取れる状態にしていてください。</p>
        <p>・社名の入っていない無地のトラックでお伺いいたします。</p>
      </>
    ),
  },
  {
    img: "https://www.kaitoriichiba.net/wp/wp-content/themes/kaitori_theme/images/flow/f13.jpg",
    num: 3,
    title: "1点1点査定いたします。",
    content: (
      <>
        <p>・家電製品は簡単な動作確認をさせて頂く場合がございます。</p>
        <p>・スタッフは2名でお伺いいたしますので、お客様が手伝っていただくことがございません。</p>
        <p>・買取が出来ない商品は回収のお手伝いも出来ます。</p>
        <p>※エアコンは電気が通っていないと取り外しができません、ご注意ください</p>
        <h5 className="point_ti02">ワンポイントアドバイス</h5>
        <p className="txt02">査定希望商品は簡単でいいのでクリーニングをしておいたほうがプラス査定になることがございます。</p>
      </>
    ),
  },
  {
    img: "https://www.kaitoriichiba.net/wp/wp-content/themes/kaitori_theme/images/flow/f14.jpg",
    num: 4,
    title: "お支払い",
    content: (
      <>
        <p>・査定内容にご納得いただいた場合は、買取用紙に名前・住所・お電話番号等のご記入と</p>
        <p>　身分証明書（免許書・保健所等の公的証明書のご提示をお願いいたします。</p>
        <p>※身分証明証をお持ちいただかなかった場合は買取が出来ない場合がございます。</p>
        <p>・お支払いはその場で現金でお渡し致します。</p>
        <p>・回収費用が発生した場合のお支払いは現金になります。</p>
      </>
    ),
  },
  {
    img: "https://www.kaitoriichiba.net/wp/wp-content/themes/kaitori_theme/images/flow/f15.jpg",
    num: 5,
    title: "商品の運びだし。",
    content: (
      <>
        <p>・ご自宅に傷がつかないように注意をはらい運び出しをいたします。</p>
      </>
    ),
  },
];
export default function FirstTimePurchase() {
  return (
    <div className="container flows">
      <Image src="/assets/images/header-firt-time-purchase.webp" alt="バナー" width={"1100"} height={"550"} className="header-img no-padding" />
      <article>
        <h3 className="news_ti2">出張買取・出張回収</h3>
        <section>
          {flowBoxes.map((box, idx) => (
            <div key={idx}>
              <div className="flow_box">
                <table border="0" width="100%" cellSpacing="0" cellPadding="0">
                  <tbody>
                    <tr>
                      <th scope="row">
                        <img src={box.img} alt="" width="142" height="146" />
                      </th>
                      <td>
                        <div className="title-box">
                          <p className="num">{box.num}</p>
                          <h4>{box.title}</h4>
                        </div>
                        {box.content}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {idx !== flowBoxes.length - 1 && <div className="triangle-down"></div>}
            </div>
          ))}
        </section>
      </article>
    </div>
  );
}
