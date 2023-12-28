import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../assets/img/section2bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Section2Popup from "../popup/Section2Popup";

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const circleMaskRef = useRef(null);
  const section2Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // 스크롤 제어 함수
    const toggleScroll = (isPopupOpen) => {
      if (isPopupOpen) {
        document.body.style.overflow = "hidden"; // 스크롤 막기
      } else {
        document.body.style.overflow = "unset"; // 스크롤 허용
      }
    };
    toggleScroll(isPopupOpen);

    return () => {
      toggleScroll(false);
    };
  }, [isPopupOpen]);

  const PoupAnimation2 = () => {
    const tl = gsap.timeline({});


    tl
      .set("#section2 .popup__content", {
        height: "70%",
        width: "100%",
        padding: "20px",
        opacity: 1,
        scale: 1,
      },)
      .fromTo("#Sec2popup", {
        opacity: 0,
        x: 40,
      }, {
        display: "block",
        position: "fixed",
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out"
      }, "<")
      .fromTo("#section2 .popup__content .left .img", {
        x: -200,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1,
      })
      .to("#section2 .popup__content .close", {
        display: "inline-block"
      }, "<")
      .to("#section2 .popup__content .right", {
        opacity: 1,
      })
      .from("#section2 .pt1", {
        x: -400,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section2 .desc1", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section2 .pt2", {
        x: -200,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section2 .desc2", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section2 .pt3", {
        x: -200,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section2 .desc3", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section2 .pt4", {
        x: -300,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section2 .c1", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section2 .pt5", {
        x: -300,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section2 .c2", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .fromTo("#section2 .popup__content .btn", {
        y: -35,
        opacity: 0,
        zIndex: -1,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
          document.querySelector("#section2 .popup__content .btn").style.zIndex = "0";
        }
      }, "<")
      .fromTo("#section2 .popup__content .scroll", {
        scale: 0,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 1,
      },)

    return tl;
  };

  const ClosePoupAnimation2 = () => {
    const tl = gsap.timeline();

    tl
      .to("#section2 .popup__content .right", {
        opacity: 0,
        duration: 0.5,
      })
      .to("#section2 .popup__content .left .img", {
        opacity: 0,
        duration: 0.5,
      }, "<")
      .to("#section2 .popup__content .btn", {
        y: -25,
        zIndex: -1,
        duration: 0.2,
        opacity: 0,
        onComplete: () => {
          document.querySelector(".popup__content .btn").style.zIndex = "0";
        }
      }, "<0.5")
      .to("#section2 .popup__content .close", {
        display: "none"
      }, "<")
      .to("#section2 .popup__content", {
        height: "0",
        padding: "2.5px",
        duration: 1,
        ease: "expo.out",
      })
      .to("#section2 .popup__content", {
        width: "0",
        duration: 1,
        ease: "expo.out",
      })
      .to("#section2 .popup__content", {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "expo.out",
      })
      .to("#Sec2popup", {
        display: "none",
        position: "static",
        opacity: 0,
        duration: 0.5,
        ease: "expo.out"
      }, "<")
      .fromTo("#section2 .contents2", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1,
        ease: "expo.in"
      }, "<")

    return tl;
  };

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
    const maskAnimation = gsap.to(circleMaskRef.current, {
      attr: { r: 820 },
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 3,
      },
    });
    gsap.to(".contents2 .desc", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "center center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.to(text1Ref.current, {
      opacity: 1,
      left: "0",
      top: "0",
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "25% center",
        end: "bottom bottom",
        ease: "ease in",
        scrub: 2.5,
      },
    });
    gsap.to(text2Ref.current, {
      opacity: 1,
      right: "0",
      bottom: "0",
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "25% center",
        end: "bottom bottom",
        scrub: 2.5,
        ease: "ease in",
      },
    });

    return () => {
      maskAnimation.kill();
      ScrollTrigger.getById("section2-trigger")?.kill();
    };
  }, []);

  return (
    <section id="section2" ref={section2Ref}>
      <div className="contents2">
        <div className="cont__box" ref={imgRef}>
          <div className="text1" ref={text1Ref}>
            youtube
          </div>
          <div className="text2" ref={text2Ref}>
            api site
          </div>
          <div className="desc">
            유튜브 API를 이용하여 좋아하는 다큐멘터리 <br /> 채널과 영상을
            모아봤습니다.
          </div>
          <svg
            className="content__img content__img--1"
            width="100%"
            height="100%"
            viewBox="0 0 504 719"
            onClick={openPopup}
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
