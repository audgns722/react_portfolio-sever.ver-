import React, { useEffect, useRef, useState } from "react";
import Img6 from "../../assets/img/section6bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Section6Popup from "../popup/Section6Popup";
import { ClosePoupAnimation6, PoupAnimation6 } from "../js/Section6Animation";

const Section6 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const circleMaskRef3 = useRef(null);
  const section6Ref = useRef(null);
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
    PoupAnimation6();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    ClosePoupAnimation6();
  };

  // 스크롤 트리거 애니메이션
  useEffect(() => {
    gsap.to(circleMaskRef3.current, {
      attr: { r: 820 },
      duration: 3,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        end: "bottom bottom",
      },
    });
    gsap.to(".contents6 .desc", {
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
      gsap.killTweensOf(circleMaskRef3.current);
      gsap.killTweensOf(".contents6 .desc");
      gsap.killTweensOf(text1Ref.current);
      gsap.killTweensOf(text2Ref.current);
    };
  }, [isPopupOpen, imgRef]); // 종속성 추가

  return (
    <section id="section6" ref={section6Ref}>
      <div className="contents6">
        <div className="cont__box">
          <div className="text1" ref={text1Ref}>
            Kickoff
          </div>
          <div className="text2" ref={text2Ref}>
            React
          </div>
          <div className="desc">
            리엑트로 축구api를 이용하여 해외축구 하이라이트와 리그 경기일정 등을
            보여주는 웹사이트 입니다.
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
              <mask id="circleMask3">
                <circle
                  cx="50%"
                  cy="50%"
                  r="0"
                  fill="white"
                  ref={circleMaskRef3}
                  className="mask"
                  style={{ filter: "url(#displacementFilter)" }}
                />
              </mask>
            </defs>
            <image
              xlinkHref={Img6}
              width="100%"
              height="100%"
              mask="url(#circleMask3)"
            />
          </svg>
          <Mouse imgRef={imgRef} />
        </div>
      </div>
      <Section6Popup onClick={closePopup} />
    </section>
  );
};

export default Section6;
