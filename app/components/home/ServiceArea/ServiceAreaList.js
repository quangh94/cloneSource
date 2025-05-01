const areas = [
  { name: "石巻市", href: "/area/miyagiken/ishinomakishi/" },
  { name: "伊具郡丸森町", href: "/area/miyagiken/igugummarumorimachi/" },
  { name: "岩沼市", href: "/area/miyagiken/iwanumashi/" },
  { name: "大崎市", href: "/area/miyagiken/osakishi/" },
  { name: "牡鹿郡女川町", href: "/area/miyagiken/oshikagunonagawacho/" },
  { name: "角田市", href: "/area/miyagiken/kakudashi/" },
  { name: "刈田郡蔵王町", href: "/area/miyagiken/kattagunzaomachi/" },
  { name: "刈田郡七ヶ宿町", href: "/area/miyagiken/kattagunshichikashukumachi/" },
  { name: "加美郡色麻町", href: "/area/miyagiken/kamigunshikamacho/" },
  { name: "加美郡加美町", href: "/area/miyagiken/kamigunkamimachi/" },
  { name: "栗原市", href: "/area/miyagiken/kuriharashi/" },
  { name: "気仙沼市", href: "/area/miyagiken/kesennumashi/" },
  { name: "黒川郡大郷町", href: "/area/miyagiken/kurokawagunosatocho/" },
  { name: "黒川郡大衡村", href: "/area/miyagiken/kurokawagunohiramura/" },
  { name: "黒川郡大和町", href: "/area/miyagiken/kurokawaguntaiwacho/" },
  { name: "塩竈市", href: "/area/miyagiken/shiogamashi/" },
  { name: "柴田郡大河原町", href: "/area/miyagiken/shibatagunogawaramachi/" },
  { name: "柴田郡川崎町", href: "/area/miyagiken/shibatagunkawasakimachi/" },
  { name: "柴田郡柴田町", href: "/area/miyagiken/shibatagunshibatamachi/" },
  { name: "柴田郡村田町", href: "/area/miyagiken/shibatagummuratamachi/" },
  { name: "白石市", href: "/area/miyagiken/shiroishishi/" },
  { name: "仙台市", href: "/area/miyagiken/sendaishi/" },
  { name: "仙台市青葉区", href: "/area/miyagiken/sendaishiaobaku/" },
  { name: "仙台市宮城野区", href: "/area/miyagiken/sendaishimiyaginoku/" },
  { name: "仙台市若林区", href: "/area/miyagiken/sendaishiwakabayashiku/" },
  { name: "仙台市太白区", href: "/area/miyagiken/sendaishitaihakuku/" },
  { name: "仙台市泉区", href: "/area/miyagiken/sendaishiizumiku/" },
  { name: "多賀城市", href: "/area/miyagiken/tagajoshi/" },
  { name: "遠田郡美里町", href: "/area/miyagiken/todagummisatomachi/" },
  { name: "遠田郡涌谷町", href: "/area/miyagiken/todagunwakuyacho/" },
  { name: "登米市", href: "/area/miyagiken/tomeshi/" },
  { name: "名取市", href: "/area/miyagiken/natorishi/" },
  { name: "東松島市", href: "/area/miyagiken/higashimatsushimashi/" },
  { name: "宮城郡七ヶ浜町", href: "/area/miyagiken/miyagigunshichigahamamachi/" },
  { name: "宮城郡松島町", href: "/area/miyagiken/miyagigummatsushimamachi/" },
  { name: "宮城郡利府町", href: "/area/miyagiken/miyagigunrifucho/" },
  { name: "本吉郡南三陸町", href: "/area/miyagiken/motoyoshigumminamisanrikucho/" },
  { name: "亘理郡山元町", href: "/area/miyagiken/watarigunyamamotocho/" },
  { name: "亘理郡亘理町", href: "/area/miyagiken/watarigunwataricho/" }
];

export const ServiceAreaList = () => {
  return (
    <div className="area-wrapper">
      <div className="area-top-title">宮城県のサービス対応エリア</div>
      <div className="area-list">
        {areas.map((area, index) => (
          <div key={index} className="area-item">
            <a href={area.href}>{area.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}; 