import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import "./footer.css";

export const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (!isMobile) return null;
  return (
    <footer id="footer">
      <div className="footer_contents_wrapper">
        <a className="phoneCall" href="tel:050-5785-8779">
          <img
            src="https://www.assist001.co.jp/wp-content/themes/assist2024/src/img/common/sp/footer-call-button.png?dt=201904090736"
            alt="お電話はこちら"
            loading="lazy"
          />
        </a>
        <a className="contactUs" href="/contact">
          <img
            src="https://www.assist001.co.jp/wp-content/themes/assist2024/src/img/common/sp/footer-form-button.png?dt=20190322-1258"
            alt="24時間受付中無料WEB査定相談"
            loading="lazy"
          />
        </a>
        <a className="contactLine" href="/%40nol6252a">
          <img
            src="https://www.assist001.co.jp/wp-content/themes/assist2024/src/img/common/sp/footer-line-button.png?dt=20190322-1258"
            alt="24時間受付中無料LINE査定相談"
            loading="lazy"
          />
        </a>
      </div>
    </footer>
  );
};
