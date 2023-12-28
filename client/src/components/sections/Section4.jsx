import React, { useEffect, useRef, useState } from "react";
import Img3 from "../../assets/img/test.png";
import Section4Popup from "../popup/Section4Popup";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";

const Section4 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathMaskRef = useRef(null);
  const section4Ref = useRef(null);
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

  const PoupAnimation4 = () => {
    const tl = gsap.timeline();

    tl
      .set("#section4 .popup__content", {
        height: "70%",
        width: "100%",
        padding: "20px",
        opacity: 1,
        scale: 1,
      },)
      .fromTo("#Sec4popup", {
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
      .fromTo("#section4 .popup__content .left .img", {
        x: -200,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1,
      })
      .to("#section4 .popup__content .close", {
        display: "inline-block"
      }, "<")
      .to("#section4 .popup__content .right", {
        opacity: 1,
      })
      .from("#section4 .pt1", {
        x: -400,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section4 .desc1", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section4 .pt2", {
        x: -200,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section4 .desc2", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section4 .pt3", {
        x: -200,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section4 .desc3", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section4 .pt4", {
        x: -300,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section4 .c1", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section4 .pt5", {
        x: -300,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section4 .c2", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .fromTo("#section4 .popup__content .btn", {
        y: -35,
        opacity: 0,
        zIndex: -1,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
          document.querySelector("#section4 .popup__content .btn").style.zIndex = "0";
        }
      }, "<")
      .fromTo("#section4 .popup__content .scroll", {
        scale: 0,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 1,
      },)

    return tl;
  };

  const ClosePoupAnimation4 = () => {
    const tl = gsap.timeline();

    tl
      .to("#section4 .popup__content .right", {
        opacity: 0,
        duration: 0.5,
      })
      .to("#section4 .popup__content .left .img", {
        opacity: 0,
        duration: 0.5,
      }, "<")

      .to("#section4 .popup__content .btn", {
        y: -25,
        zIndex: -1,
        duration: 0.2,
        opacity: 0,
        onComplete: () => {
          document.querySelector(".popup__content .btn").style.zIndex = "0";
        }
      }, "<0.5")
      .to("#section4 .popup__content .close", {
        display: "none"
      }, "<")
      .to("#section4 .popup__content", {
        height: "0",
        padding: "2.5px",
        duration: 1,
        ease: "expo.out",
      })
      .to("#section4 .popup__content", {
        width: "0",
        duration: 1,
        ease: "expo.out",
      })
      .to("#section4 .popup__content", {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "expo.out",
      })
      .to("#Sec4popup", {
        display: "none",
        position: "static",
        opacity: 0,
        duration: 0.5,
        ease: "expo.out"
      }, "<")
      .fromTo("#section4 .contents4", {
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
    PoupAnimation4();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    ClosePoupAnimation4();
  };

  // 스크롤 트리거 애니메이션
  useEffect(() => {
    const pathAnimation = gsap.to(pathMaskRef.current, {
      attr: { d: "M 0 280 Q 500 800 1000 280 Q 500 -200 0 280" },
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    gsap.to(".contents4 .desc", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "center center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.to(text1Ref.current, {
      opacity: 1,
      left: "0",
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "25% center",
        end: "bottom bottom",
        ease: "none",
        scrub: true,
      },
    });

    gsap.to(text2Ref.current, {
      opacity: 1,
      right: "0",
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "25% center",
        end: "bottom bottom",
        scrub: true,
        ease: "none",
      },
    });

    return () => {
      pathAnimation.kill();
      ScrollTrigger.getById("section4-trigger")?.kill();
    };
  }, []);

  return (
    <section id="section4" ref={section4Ref}>
      <div className="contents4">
        <div className="cont__box" ref={imgRef}>
          <div className="text1" ref={text1Ref}>
            Movie
          </div>
          <div className="text2" ref={text2Ref}>
            Api Site
          </div>
          <div className="desc">
            MovieKing은 Vue.js와 영화Api를 활용해
            <br />
            영화 정보를 쉽게 찾을수 있는 웹 플랫폼입니다.
          </div>
          <svg
            className="content__img content__img--3"
            width="100%"
            height="100%"
            viewBox="0 0 1000 560"
            onClick={openPopup}
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
