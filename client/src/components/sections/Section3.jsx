import React, { useEffect, useRef, useState } from "react";
import Img2 from "../../assets/img/section3bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Section3Popup from "../popup/Section3Popup";

const Section3 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const circleMaskRef = useRef(null);
  const section3Ref = useRef(null);
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

  const PoupAnimation3 = () => {
    const tl = gsap.timeline();

    tl
      .set("#section3 .popup__content", {
        height: "70%",
        width: "100%",
        padding: "20px",
        opacity: 1,
        scale: 1,
      },)
      .fromTo("#Sec3popup", {
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
      .fromTo("#section3 .popup__content .left .img", {
        x: -200,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1,
      })
      .to("#section3 .popup__content .close", {
        display: "inline-block"
      }, "<")
      .to("#section3 .popup__content .right", {
        opacity: 1,
      })
      .from("#section3 .pt1", {
        x: -400,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section3 .desc1", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section3 .pt2", {
        x: -200,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section3 .desc2", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section3 .pt3", {
        x: -200,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section3 .desc3", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section3 .pt4", {
        x: -300,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section3 .c1", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section3 .pt5", {
        x: -300,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .from("#section3 .c2", {
        x: -700,
        duration: 0.3,
        ease: "power1.in"
      }, "<0.1")
      .fromTo("#section3 .popup__content .btn", {
        y: -35,
        opacity: 0,
        zIndex: -1,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
          document.querySelector("#section3 .popup__content .btn").style.zIndex = "0";
        }
      }, "<")
      .fromTo("#section3 .popup__content .scroll", {
        scale: 0,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 1,
      },)

    return tl;
  };

  const ClosePoupAnimation3 = () => {
    const tl = gsap.timeline();

    tl
      .to("#section3 .popup__content .right", {
        opacity: 0,
        duration: 0.5,
      })
      .to("#section3 .popup__content .left .img", {
        opacity: 0,
        duration: 0.5,
      }, "<")

      .to("#section3 .popup__content .btn", {
        y: -25,
        zIndex: -1,
        duration: 0.2,
        opacity: 0,
        onComplete: () => {
          document.querySelector(".popup__content .btn").style.zIndex = "0";
        }
      }, "<0.5")
      .to("#section3 .popup__content .close", {
        display: "none"
      }, "<")
      .to("#section3 .popup__content", {
        height: "0",
        padding: "2.5px",
        duration: 1,
        ease: "expo.out",
      })
      .to("#section3 .popup__content", {
        width: "0",
        duration: 1,
        ease: "expo.out",
      })
      .to("#section3 .popup__content", {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "expo.out",
      })
      .to("#Sec3popup", {
        display: "none",
        position: "static",
        opacity: 0,
        duration: 0.5,
        ease: "expo.out"
      }, "<")
      .fromTo("#section3 .contents3", {
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
    PoupAnimation3();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    ClosePoupAnimation3();
  };


  // 스크롤 트리거 애니메이션
  useEffect(() => {
    const maskAnimation = gsap.to(circleMaskRef.current, {
      attr: { r: 950 },
      scrollTrigger: {
        trigger: section3Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 2,
      },
    });
    gsap.to(".contents3 .desc", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: section3Ref.current,
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
        trigger: section3Ref.current,
        start: "25% center",
        end: "bottom bottom",
        ease: "none",
        scrub: true,
      },
    });

    gsap.to(text2Ref.current, {
      opacity: 1,
      right: "0",
      bottom: "0",
      scrollTrigger: {
        trigger: section3Ref.current,
        start: "25% center",
        end: "bottom bottom",
        scrub: true,
        ease: "none",
      },
    });

    return () => {
      maskAnimation.kill();
      ScrollTrigger.getById("section3-trigger")?.kill();
    };
  }, []);

  return (
    <section id="section3" ref={section3Ref}>
      <div className="contents3" >
        <div className="cont__box" ref={imgRef}>
          <div className="text1" ref={text1Ref}>
            react
          </div>
          <div className="text2" ref={text2Ref}>
            blog site
          </div>
          <div className="desc">
            React, Node.js, MongoDB, Firebase를 사용하여
            <br />
            블로그 플랫폼을 구축하였습니다.
          </div>
          <svg
            className="content__img content__img--2"
            width="100%"
            height="100%"
            viewBox="0 0 913 516"
            onClick={openPopup}
          >
            <defs>
              <filter id="displacementFilter2">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.1"
                  numOctaves="1"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  result="displacement"
                  scale="100"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
                <feMorphology
                  operator="dilate"
                  radius="2"
                  result="morph"
                  in="displacement"
                />
              </filter>
              <mask id="circleMask2">
                <circle
                  cx="50%"
                  cy="50%"
                  r="0"
                  fill="white"
                  ref={circleMaskRef}
                  className="mask"
                  style={{ filter: "url(#displacementFilter2)" }}
                />
              </mask>
            </defs>
            <image
              xlinkHref={Img2}
              width="100%"
              height="100%"
              mask="url(#circleMask2)"
            />
          </svg>
          <Mouse imgRef={imgRef} />
        </div>
      </div>
      <Section3Popup onClick={closePopup} />
    </section>
  );
};

export default Section3;
