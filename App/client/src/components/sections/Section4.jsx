import React, { useEffect, useRef, useState } from "react";
import Img3 from "../../assets/img/section4bg.png";
import Section4Popup from "../popup/Section4Popup";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import { ClosePoupAnimation4, PoupAnimation4 } from "../js/Section4Animation";

const Section4 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathMaskRef = useRef(null);
  const section4Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const toggleScroll = (isPopupOpen) => {
      document.body.style.overflow = isPopupOpen ? "hidden" : "unset";
    };

    toggleScroll(isPopupOpen);

    return () => toggleScroll(false);
  }, [isPopupOpen]);

  const openPopup = () => {
    // 팝업 상태 변경
    setIsPopupOpen(true);
    PoupAnimation4();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    ClosePoupAnimation4();
  };

  // 스크롤 트리거 애니메이션
  useEffect(() => {
    gsap.to(pathMaskRef.current, {
      attr: { d: "M 0 280 Q 500 800 1000 280 Q 500 -200 0 280" },
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        end: "bottom bottom",
      },
    });
    gsap.to(".contents4 .desc", {
      opacity: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "center center",
        end: "bottom bottom",
      },
    });

    gsap.to(text1Ref.current, {
      opacity: 1,
      left: "0",
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "25% center",
        end: "bottom bottom",
        ease: "ease in",
      },
    });

    gsap.to(text2Ref.current, {
      opacity: 1,
      right: "0",
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "25% center",
        end: "bottom bottom",
        ease: "ease in",
      },
    });

    return () => {
      gsap.killTweensOf(pathMaskRef.current);
      gsap.killTweensOf(".contents4 .desc");
      gsap.killTweensOf(text1Ref.current);
      gsap.killTweensOf(text2Ref.current);
    };
  }, [isPopupOpen, imgRef]); // 종속성 추가

  return (
    <section id="section4" ref={section4Ref}>
      <div className="contents4">
        <div className="cont__box">
          <div className="text1" ref={text1Ref}>
            Movie
          </div>
          <div className="text2" ref={text2Ref}>
            Api Site
          </div>
          <div className="desc">
            MovieKing은 Vue.js와 영화Api를 활용해 영화 정보를 쉽게 찾을수 있는
            웹 플랫폼입니다.
          </div>
          <svg
            className="content__img content__img--3"
            width="100%"
            height="100%"
            viewBox="0 0 1000 560"
            onClick={openPopup}
            ref={imgRef}
          >
            <defs>
              <filter id="displacementFilter3">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.02"
                  numOctaves="3"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="80"
                  result="displacement"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
              <mask id="pathMask">
                <path
                  ref={pathMaskRef}
                  d="M 0 280 Q 500 280 1000 280 Q 500 280 0 280"
                  fill="white"
                  className="mask"
                  style={{ filter: "url(#displacementFilter3)" }}
                />
              </mask>
            </defs>
            <image
              xlinkHref={Img3}
              width="100%"
              height="100%"
              mask="url(#pathMask)"
            />
          </svg>
          <Mouse imgRef={imgRef} />
        </div>
      </div>
      <Section4Popup onClick={closePopup} />
    </section>
  );
};

export default Section4;
