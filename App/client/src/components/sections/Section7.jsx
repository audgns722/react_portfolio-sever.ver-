import React, { useEffect, useRef, useState } from "react";
import Img7 from "../../assets/img/section7bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Section7Popup from "../popup/Section7Popup";
import { ClosePoupAnimation7, PoupAnimation7 } from "../js/Section7Animation";

const Section7 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathMaskRef3 = useRef(null);
  const section7Ref = useRef(null);
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
    PoupAnimation7();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    ClosePoupAnimation7();
  };

  // 스크롤 트리거 애니메이션
  useEffect(() => {
    gsap.to(pathMaskRef3.current, {
      attr: { d: "M 0 280 Q 500 800 1000 280 Q 500 -200 0 280" },
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        end: "bottom bottom",
      },
    });
    gsap.to(".contents7 .desc", {
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
      // killTweensOf() 메서드를 사용해 모든 트리거 연관 애니메이션 제거
      gsap.killTweensOf(pathMaskRef3.current);
      gsap.killTweensOf(".contents7 .desc");
      gsap.killTweensOf(text1Ref.current);
      gsap.killTweensOf(text2Ref.current);
    };
  }, [isPopupOpen, imgRef]); // 종속성 추가

  return (
    <section id="section7" ref={section7Ref}>
      <div className="contents7">
        <div className="cont__box">
          <div className="text1" ref={text1Ref}>
            Prompt
          </div>
          <div className="text2" ref={text2Ref}>
            Share
          </div>
          <div className="desc">
            Promtopia는 AI사진 생성과 관련된 프롬프트를 공유하는 웹
            애플리케이션입니다.
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
              <mask id="pathMask3">
                <path
                  ref={pathMaskRef3}
                  d="M 0 280 Q 500 280 1000 280 Q 500 280 0 280"
                  fill="white"
                  className="mask"
                  style={{ filter: "url(#displacementFilter3)" }}
                />
              </mask>
            </defs>
            <image
              xlinkHref={Img7}
              width="100%"
              height="100%"
              mask="url(#pathMask3)"
            />
          </svg>
          <Mouse imgRef={imgRef} />
        </div>
      </div>
      <Section7Popup onClick={closePopup} />
    </section>
  );
};

export default Section7;
