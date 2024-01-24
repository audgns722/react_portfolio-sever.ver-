import React, { useEffect, useRef, useState } from "react";
import Img4 from "../../assets/img/section5bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Section5Popup from "../popup/Section5Popup";
import { ClosePoupAnimation5, PoupAnimation5 } from "../js/Section5Animation";

const Section5 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const circleMask5Ref = useRef(null);
  const section5Ref = useRef(null);
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
    PoupAnimation5();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    ClosePoupAnimation5();
  };

  // 스크롤애니메이션
  useEffect(() => {
    gsap.to(circleMask5Ref.current, {
      attr: { r: 1000 },
      duration: 1.5,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        end: "bottom bottom",
      },
    });

    gsap.to(".contents5 .desc", {
      opacity: 0.5,
      y: 120,
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "center center",
        end: "bottom bottom",
      },
    });

    gsap.to(text1Ref.current, {
      opacity: 1,
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
      gsap.killTweensOf(circleMask5Ref.current);
      gsap.killTweensOf(".contents5 .desc");
      gsap.killTweensOf(text1Ref.current);
      gsap.killTweensOf(text2Ref.current);
    };
  }, [isPopupOpen, imgRef]); // 종속성 추가

  return (
    <section id="section5" ref={section5Ref}>
      <div className="contents5">
        <div className="cont__box">
          <div className="text1" ref={text1Ref}>
            TeamProject
          </div>
          <div className="text2" ref={text2Ref}>
            Php
          </div>
          <div className="desc">
            일상 생활 속에서 발생하는 잘못된 분리배출을 알려주고, 간편한 검색을
            통해 올바른 배출 방법을 안내하는 웹사이트입니다.
          </div>
          <svg
            className="content__img content__img--5"
            width="100%"
            height="100%"
            viewBox="0 0 1920 579"
            onClick={openPopup}
            ref={imgRef}
          >
            <defs>
              <filter id="displacementFilter5">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.1"
                  numOctaves="1"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="100"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
                <feMorphology
                  operator="dilate"
                  radius="2"
                  result="morph"
                  in="displacementFilter5"
                />
              </filter>
              <mask id="circleMask5">
                <circle
                  cx="50%"
                  cy="50%"
                  r="0"
                  fill="white"
                  ref={circleMask5Ref}
                  className="mask"
                  style={{ filter: "url(#displacementFilter5)" }}
                />
              </mask>
            </defs>
            <image
              xlinkHref={Img4}
              width="100%"
              height="100%"
              mask="url(#circleMask5)"
            />
          </svg>
          <Mouse imgRef={imgRef} />
        </div>
      </div>
      <Section5Popup onClick={closePopup} />
    </section>
  );
};

export default Section5;
