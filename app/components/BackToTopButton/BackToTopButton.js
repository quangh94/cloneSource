"use client";

import { useEffect, useRef } from "react";
import "./backToTopButton.css";

const BackToTopButton = () => {
  const btnRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      btnRef.current?.classList.add("show");
    } else {
      btnRef.current?.classList.remove("show");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button ref={btnRef} className="back-top-button" onClick={scrollToTop}>
      <img src="https://static.thenounproject.com/png/1854061-200.png" alt="Back to top" width={50} height={50} />
    </button>
  );
};

export default BackToTopButton;
