"use client";

import "./header.css";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header id="header" className="sticky">
      <div className="header-frame">
        <div className="header-frame-upper">
          <div className="header-frame-upper-wrapper">
            <div className="header-frame-upper-inner">
              <div className="header-wrapper">
                <div className="header-left">
                  <a href="/" className="pc inline">
                    <img
                      src="./assets/images/Halo-eco-logo_Opt_2_slogan_FINAL-01_edit.avif"
                      width="373"
                      height="120"
                      alt="リサイクルショップ出張買取のアシスト"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="header-right">
                  <a href="tel:123456789">
                    <div className="header-telephone pc">
                      <img src="./assets/images/header-telephone.png" width="357" height="67" alt="123456789" loading="lazy" />
                    </div>
                  </a>
                  <a href="#/contact" className="pc">
                    <div className="header-mail">
                      <img src="./assets/images/header-form.png" width="149" height="67" alt="無料WEB相談" loading="lazy" />
                    </div>
                  </a>
                  <a href="#" className="pc">
                    <div className="header-line">
                      <img src="./assets/images/header-line.png" width="149" height="67" alt="LINE査定はこちら" loading="lazy" />
                    </div>
                  </a>
                  <a className="pc" href="https://privacymark.jp/" target="_blank" rel="noopener">
                    <div className="header-line">
                      <img src="./assets/images/privacy-mark-67.webp" alt="Pマーク プライバシーポリシー" width="67" height="67" loading="lazy" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};
