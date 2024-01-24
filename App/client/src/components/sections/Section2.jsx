import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../assets/img/section2bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Section2Popup from "../popup/Section2Popup";
import { ClosePoupAnimation2, PoupAnimation2 } from "../js/Section2Animation";

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const circleMaskRef = useRef(null);
  const section2Ref = useRef(null);
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
    PoupAnimation2();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    ClosePoupAnimation2();
  };

  // 스크롤 트리거 애니메이션
  useEffect(() => {
    gsap.to(circleMaskRef.current, {
      attr: { r: 820 },
      duration: 3,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        end: "bottom bottom",
      },
    });
    gsap.to(".contents2 .desc", {
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
      top: "0",
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
      bottom: "0",
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "25% center",
        end: "bottom bottom",
        ease: "ease in",
      },
    });

    return () => {
      gsap.killTweensOf(circleMaskRef.current);
      gsap.killTweensOf(".contents2 .desc");
      gsap.killTweensOf(text1Ref.current);
      gsap.killTweensOf(text2Ref.current);
    };
  }, [isPopupOpen, imgRef]); // 종속성 추가

  return (
    <section id="section2" ref={section2Ref}>
      <div className="contents2">
        <div className="cont__box">
          <div className="text1" ref={text1Ref}>
            youtube
          </div>
          <div className="text2" ref={text2Ref}>
            api site
          </div>
          <div className="desc">
            유튜브 API를 이용하여 좋아하는 다큐멘터리 채널과 영상을
            모아봤습니다.
          </div>
          <svg
            className="content__img content__img--1"
            width="100%"
            height="100%"
            viewBox="0 0 504 719"
            onClick={openPopup}
            ref={imgRef}
          >
            <defs>
              <filter id="displacementFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.03"
                  numOctaves="3"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="50"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
              <mask id="circleMask">
                <circle
                  cx="50%"
                  cy="50%"
                  r="0"
                  fill="white"
                  ref={circleMaskRef}
                  className="mask"
                  style={{ filter: "url(#displacementFilter)" }}
                />
              </mask>
            </defs>
            <image
              xlinkHref={Img1}
              width="100%"
              height="100%"
              mask="url(#circleMask)"
            />
          </svg>
          <Mouse imgRef={imgRef} />
        </div>
      </div>
      <Section2Popup onClick={closePopup} />
    </section>
  );
};

export default Section2;
