import "./highValueHeader.css";

export const HighValueHeader = () => {
  return (
    <>
      <h2 className="subtitle">高額買取り強化中！！！</h2>
      <p style={{ textAlign: "center", marginBottom: "32px" }}>
        出張買取のアシストは「
        <span className="yellow-marker" style={{ fontWeight: 700 }}>
          ひとつでも多く、価値あるものを循環させる
        </span>
        」ことをミッションにしております。
        <br />
        お客様に対して市場価値があるものを「取り扱いしておりません」と言わないよう企業努力を続けて16年、
        <br />
        自信をもってご案内できる品目がここまで増えました。
      </p>
      <h3 className="item-h3">家電買取強化アイテム</h3>
    </>
  );
}; 