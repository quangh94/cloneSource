import { RecommendationItem } from "./RecommendationItem";

const cases = [
  {
    id: 1,
    images: {
      pc: {
        case: {
          src: "./assets/images/case01-image.jpg.webp",
          width: 238,
          height: 180,
          alt: "まだ使えるから、誰かに使って欲しい"
        },
        icon: {
          src: "./assets/images/case01-icon.png.webp",
          width: 65,
          height: 65,
          alt: "Case01"
        }
      },
      mobile: {
        case: {
          src: "./assets/images/case01-image(1).jpg.webp",
          width: 590,
          height: 444,
          alt: "まだ使えるから、誰かに使って欲しい"
        },
        icon: {
          src: "./assets/images/case01-icon(1).png.webp",
          width: 106,
          height: 106,
          alt: "Case01"
        }
      }
    },
    caption: "「まだ使えるから、誰かに使って欲しい。」",
    message: "もう使わなくなってどれくらいたったかな？大切にしてきたモノだからこそ手放せない。\nだけどいつか手放さなければならないのはわかってる。だったらまた誰かに使って貰えたら嬉しい！",
    solution: {
      lead: "そんなあなたに",
      conclusion: "アシストではモノとともに育まれてきた\nお客様の物語も大切にリユースいたします"
    }
  },
  {
    id: 2,
    images: {
      pc: {
        case: {
          src: "./assets/images/case02-image.jpg.webp",
          width: 238,
          height: 180,
          alt: "体力的に難しい"
        },
        icon: {
          src: "./assets/images/case02-icon.png.webp",
          width: 65,
          height: 65,
          alt: "Case02"
        }
      },
      mobile: {
        case: {
          src: "./assets/images/case02-image(1).jpg.webp",
          width: 590,
          height: 444,
          alt: "体力的に難しい"
        },
        icon: {
          src: "./assets/images/case02-icon(1).png.webp",
          width: 106,
          height: 106,
          alt: "Case02"
        }
      }
    },
    caption: "「体力的に難しい。」",
    message: "昔だったらこれくらいのもの！とは言ってもやっぱり今は大きいものや重い物を運ぶ自信はないなぁ。\n代わりにパパっと運んでくれるスーパーマンはいないかな・・・",
    solution: {
      lead: "そんなあなたに",
      conclusion: "女性やご高齢の方も安心！アシストでは\n重い物でも想いモノとして\n新たなニーズへリユースいたします。"
    }
  }
];

export const RecommendationList = () => {
  return (
    <div className="case-list">
      {cases.map((caseItem) => (
        <RecommendationItem key={caseItem.id} caseItem={caseItem} />
      ))}
    </div>
  );
}; 