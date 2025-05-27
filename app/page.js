"use client";

import "./page.css";

import { HighValueItems } from "@/app/components/home/HighValueItems/HighValueItems";
import { Banner } from "./components/home/Banner/Banner";
import { PurchaseItems } from "./components/home/PurchaseItems/PurchaseItems";
import { RecentSales } from "./components/home/RecentSales/RecentSales";
import { Recommendation } from "./components/home/Recommendation/Recommendation";
import { ServiceArea } from "./components/home/ServiceArea/ServiceArea";
import { ServiceStats } from "./components/home/ServiceStats/ServiceStats";
import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { Review } from "./review/review";

export default function Home() {
  return (
    <>
      <main className="contents clearfix">
        <div className="first-view-wrapper">
          <Banner />
        </div>
        <ServiceStats />
        <div className="contents-inner">
          <div className="top-contents-inner">
            <section className="main-contents no-sidenavi">
              <HighValueItems />

              <div className="contents-inner">
                <div className="top-contents-inner">
                  <PurchaseItems />
                </div>
              </div>

              <div className="main-contents-inner">
                <div className="sub-content">
                  <RecentSales />
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="contents-inner">
          <div className="top-contents-inner">
            <Recommendation />
          </div>
        </div>

        <div className="contents-inner">
          <div className="top-contents-inner">
            <ServiceArea />
          </div>
        </div>

        <div className="contents-inner">
          <div className="top-contents-inner">
            <section className="main-contents no-sidenavi">
              <div className="main-contents-inner">
                <div className="content-section">
                  <div className="cases-wrapper sub-content">
                    <h2 className="subtitle">お客様の声</h2>
                    <Review />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="contents-inner">
          <div className="top-contents-inner" id="top">
            <section className="main-contents no-sidenavi">
              <div className="main-contents-inner">
                <div id="magazine" className="content-section magazine">
                  <div className="magazine-wrapper sub-content">
                    <h2 className="subtitle">買取に関するよくある質問</h2>
                    <div className="bl_shop_realts">
                      <div className="bl_qa_container">
                        <div className="bl_qa_container_inner">
                          <dl>
                            <dt>
                              <div>
                                <span className="q">Q.</span>
                                買取前に予約は必要ですか？
                              </div>
                              <p>
                                <i className="fa fa-angle-down"></i>
                              </p>
                            </dt>
                            <dd style={{ display: "block" }}>
                              <span className="a">A.</span>
                              店頭買取には予約は不要です。出張買取をご希望の場合は、電話、LINE、WEBからご予約ください。
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              <div>
                                <span className="q">Q.</span>
                                使えるものなら、なんでも買取できますか？
                              </div>
                              <p>
                                <i className="fa fa-angle-down"></i>
                              </p>
                            </dt>
                            <dd style={{ display: "none" }}>
                              <span className="a">A.</span>
                              いいえ、ケースバイケースです。故障品が高額買取できるケース、新品が買取できないケースなどございます。また、法令で取り扱いが禁止されているものもございますので、詳しくは
                              <a href="#/thrift-shop-cannot-be-purchased-197840.html">リサイクルショップで買取できないもの</a>
                              をご覧ください。
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              <div>
                                <span className="q">Q.</span>
                                身分証明書は必要ですか？
                              </div>
                              <p>
                                <i className="fa fa-angle-down"></i>
                              </p>
                            </dt>
                            <dd style={{ display: "none" }}>
                              <span className="a">A.</span>
                              はい、身分証明書（運転免許証・パスポート・マイナンバーカード等）の提示が必要です。
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              <div>
                                <span className="q">Q.</span>
                                法人や大量の商品数でも買取ってもらえますか？
                              </div>
                              <p>
                                <i className="fa fa-angle-down"></i>
                              </p>
                            </dt>
                            <dd style={{ display: "none" }}>
                              <span className="a">A.</span>
                              はい、法人のお客様や大量の商品も大歓迎です。企業様向けの
                              <a href="#/info-co">在庫買取サービス</a>
                              は専用ページでご案内しております。
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              <div>
                                <span className="q">Q.</span>
                                保証書がなくても大丈夫ですか？
                              </div>
                              <p>
                                <i className="fa fa-angle-down"></i>
                              </p>
                            </dt>
                            <dd style={{ display: "none" }}>
                              <span className="a">A.</span>
                              問題ございません。ただし、新品、経過年数が浅くメーカー保証対象期間中の場合、上限金額のご提示が難しくなる場合がございます。
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              <div>
                                <span className="q">Q.</span>
                                買取前に清掃は必要ですか？
                              </div>
                              <p>
                                <i className="fa fa-angle-down"></i>
                              </p>
                            </dt>
                            <dd style={{ display: "none" }}>
                              <span className="a">A.</span>
                              清掃は必須ではありませんが、商品の状態は査定のポイントになります。清潔な状態でお持ちいただくと、査定額が上がる可能性がありますので、可能な限りキレイにしていただくことをお勧めします。
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              <div>
                                <span className="q">Q.</span>
                                査定にかかる時間はどのくらいですか？
                              </div>
                              <p>
                                <i className="fa fa-angle-down"></i>
                              </p>
                            </dt>
                            <dd style={{ display: "none" }}>
                              <span className="a">A.</span>
                              <a href="tel:123456789" target="_blank" rel="noopener">
                                電話
                              </a>
                              での査定は通常
                              <span className="yellow-marker">5分程度</span>
                              を目安にしております。
                              <a href="#" className="waffle-rich-text-link" target="_blank" rel="noopener">
                                LINE
                              </a>
                              や
                              <a href="#/contact" className="waffle-rich-text-link" target="_blank" rel="noopener">
                                WEB
                              </a>
                              でのお問い合わせは、営業日内で順次対応し、1営業日で回答いたします。なお、当店の定休日は月曜日と第二金曜日ですので、これらの日は回答が翌営業日になる場合がございます。
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14pt", fontWeight: 700 }}>
                        <a href="#/faq">よくある質問をもっと見る</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="cta-wrapper full-width-cta">
          <div className="cta-lead">
            <span>
              使わなくなったもの、売れるかどうかご不安なもの
              <span className="pc inline"> </span>
              <br className="inline" />
              お気軽にご相談ください
            </span>
          </div>
          <div className="buttons-wrapper">
            <div className="pc">
              <div className="left-section">
                <a href="tel:123456789" className="telephone-button">
                  <img
                    src="./assets/images/cta-top-telephone.png"
                    width="382"
                    height="69"
                    alt="総合専門受付ダイヤル（月、第２金を除く 09:00-18:00）123456789"
                    loading="lazy"
                  />
                </a>
                <a href="#/contact" className="form-button">
                  <img
                    src="./assets/images/cta-top-form.png"
                    width="380"
                    height="72"
                    alt="WEB査定はこちら 24時間受付中"
                    className="form-button-button"
                    loading="lazy"
                  />
                  <img
                    width="90"
                    height="78"
                    src="./assets/images/cta-top-free-assessment.png"
                    alt="査定無料"
                    className="free-assessment"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="right-section">
                <div className="qr-image">
                  <img src="./assets/images/cta-top-qr.webp" width="160" height="160" alt="公式LINE QR" loading="lazy" />
                </div>
                <div className="message">
                  <div className="message-image">
                    <img
                      src="./assets/images/cta-top-line-description.png"
                      width="281"
                      height="78"
                      alt="LINE査定はじめました。QRコードから友だち追加。お品物の写真と状態についてLINE画面からお送りください。"
                      loading="lazy"
                    />
                  </div>
                  <a href="#" className="line-button">
                    <img src="./assets/images/cta-top-line.png" width="274" height="70" alt="LINE査定はこちら 24時間受付中" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
