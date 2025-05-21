import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Link from "next/link";
import "./navigation.css";

const menus = [
  { text: "はじめての方の買取の流れ", url: "/" },
  {
    text: "サービス",
    child: [
      { text: "不用品回収", url: "#" },
      { text: "買取強化", url: "#" },
    ],
  },
  { text: "買取実績" },
  { text: "出張買取 対応エリア", url: "on-site-purchase" },
  { text: "アシストコラム", url: "blogs" },
];

export const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="/" className="menu-logo">
              <img
                src="./assets/images/Halo-eco-logo_Opt_2_slogan_FINAL-01_edit.avif"
                width="373"
                height="96"
                alt="リサイクルショップ出張買取のアシスト"
                loading="lazy"
              />
            </a>
            {menus.map((el, index) => (
              <>
                {el.child?.length > 0 ? (
                  <>
                    <li className={"has-child"}>{el.text}</li>
                    {el.child.map((child, idx) => (
                      <li key={idx} className="child-menu">
                        <a href={child.url}>{child.text}</a>
                      </li>
                    ))}
                  </>
                ) : (
                  <li key={index}>
                    <Link href={el.url ? `/${el.url}` : "#"} style={{ transition: `all 275ms ${175 + index * 50}ms` }}>
                      {el.text}
                    </Link>
                  </li>
                )}
              </>
            ))}
            <li className="li-contact">
              <div className="nav-buttons">
                <div className="telephone-nav">
                  <a href="tel:050-5785-8779">
                    <img
                      src="https://www.assist001.co.jp/wp-content/themes/assist2024/src/img/top/sp/cta-top-telephone.png?dt=201904090736"
                      width="662"
                      height="80"
                      alt="総合専門受付ダイヤル（月、第２金を除く 09:00-18:00）050-5785-8779"
                      loading="lazy"
                    />
                  </a>
                </div>
                <a href="/contact">
                  <img
                    src="https://www.assist001.co.jp/wp-content/themes/assist2024/src/img/top/sp/cta-top-form.png"
                    width="318"
                    height="122"
                    alt="WEB査定はこちら 24時間受付中"
                    loading="lazy"
                  />
                </a>
                <a href="/%40nol6252a">
                  <img
                    src="https://www.assist001.co.jp/wp-content/themes/assist2024/src/img/top/sp/cta-top-line.png"
                    width="318"
                    height="122"
                    alt="LINE査定はこちら 24時間受付中"
                    loading="lazy"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav>
      <div className="wrapper">
        <ul className="nav-links">
          {menus.map((el, index) => (
            <li key={index}>
              <Link href={el.url ? `/${el.url}` : "#"} className="desktop-item">
                {el.text}
              </Link>
              {el.child && (
                <ul className="drop-menu">
                  {el.child.map((child, idx) => (
                    <li key={idx}>
                      <a href={child.url}>{child.text}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
