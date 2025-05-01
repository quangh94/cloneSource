import { Header } from "../components/layout/Header/Header";
import "./page.css";

export default function OnSitePurchase() {
  const areas = [
    {
      id: "saitama",
      title: "埼玉県　作業エリア",
      subAreas: [
        {
          title: "さいたま市内",
          items: [
            { name: "さいたま市", link: "/servicearea/saitama" },
            "西区",
            "北区",
            "大宮区",
            "見沼区",
            "中央区",
            "桜区",
            "浦和区",
            "南区",
            "緑区",
            "岩槻区",
          ],
        },
        {
          title: "その他",
          items: [
            { name: "川口市", link: "/servicearea/kawaguchi" },
            "越谷市",
            "草加市",
            "新座市",
            "朝霞市",
            "三郷市",
            "戸田市",
            "富士見市",
            "和光市",
            "蕨市",
            "八潮市",
            "志木市",
            { name: "所沢市", link: "/servicearea/tokorozawa" },
            "川越市",
            { name: "春日部市", link: "/servicearea/kasukabe" },
            "吉川市",
            "三芳町",
            "ふじみ野市",
            "松伏町",
            "杉戸町",
            "宮代町",
            "白岡市",
            "蓮田市",
            "伊奈町",
            "入間市",
            "狭山市",
          ],
        },
      ],
    },
    {
      id: "kanagawa",
      title: "神奈川県横浜市　作業エリア",
      items: [
        "青葉区",
        "旭区",
        "泉区",
        "磯子区",
        "神奈川区",
        "金沢区",
        "港南区",
        "港北区",
        "栄区",
        "瀬谷区",
        "都筑区",
        "鶴見区",
        "戸塚区",
        "中区",
        "西区",
        "保土ヶ谷区",
        "緑区",
        "南区",
      ],
    },
    {
      id: "ibaraki",
      title: "茨城県　作業エリア",
      items: [
        "水戸市",
        "日立市",
        "土浦市",
        "古河市",
        "石岡市",
        "結城市",
        "龍ケ崎市",
        "下妻市",
        "常総市",
        "常陸太田市",
        "高萩市",
        "北茨城市",
        "笠間市",
        "取手市",
        "牛久市",
        "つくば市",
        "ひたちなか市",
        "鹿嶋市",
        "潮来市",
        "守谷市",
        "常陸大宮市",
        "那珂市",
        "筑西市",
        "坂東市",
        "稲敷市",
        "かすみがうら市",
        "桜川市",
        "神栖市",
        "行方市",
        "鉾田市",
        "つくばみらい市",
        "小美玉市",
        "茨城町",
        "大洗町",
        "城里町",
        "東海村",
        "大子町",
        "美浦村",
        "阿見町",
        "河内町",
        "八千代町",
        "五霞町",
        "境町",
        "利根町",
      ],
    },
    {
      id: "chiba",
      title: "千葉県　作業エリア",
      subAreas: [
        {
          title: "千葉市内",
          items: ["稲毛区", "中央区", "花見川区", "美浜区", "緑区", "若葉区"],
        },
        {
          title: "その他",
          items: [
            "市川市",
            "浦安市",
            "柏市",
            "習志野市",
            "船橋市",
            "松戸市",
            "流山市",
            "鎌ヶ谷市",
            "八千代市",
            "四街道市",
            "白井市",
            "我孫子市",
            "野田市",
            "袖ヶ浦市",
            "木更津市",
            "市原市",
          ],
        },
      ],
    },
  ];

  const renderItems = (items) =>
    items.map((item, index) =>
      typeof item === "string" ? (
        <li key={index}>{item}</li>
      ) : (
        <li key={index}>
          <a href={item.link}>{item.name}</a>
        </li>
      )
    );

  const renderSubAreas = (subAreas) =>
    subAreas.map((subArea, index) => (
      <div key={index}>
        <h4 className="clear">{subArea.title}</h4>
        <ul>{renderItems(subArea.items)}</ul>
      </div>
    ));

  const renderAreas = () =>
    areas.map((area) => (
      <div key={area.id} className="area">
        <h3 id={area.id} className="clear mt30">
          {area.title}
        </h3>
        {area.subAreas ? renderSubAreas(area.subAreas) : <ul>{renderItems(area.items)}</ul>}
      </div>
    ));

  return (
    <>
      <Header />
      <div className="boxTitleMain boxTitle">
        <div className="inner">
          <h1 className="titleJp">
            粗大ゴミ回収サービスの<span className="bigFont">回収対応エリア</span>
          </h1>
        </div>
      </div>
      <div className="areas">{renderAreas()}</div>
    </>
  );
}
