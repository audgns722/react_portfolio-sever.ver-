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
    const tl = gsap.timeline();

    // 미디어 쿼리 설정
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    let popupWidth = mediaQuery.matches ? "95%" : "80%";

    // 미디어 쿼리에 대한 이벤트 리스너 추가
    const updatePopupWidth = (e) => {
      popupWidth = e.matches ? "95%" : "80%";
    };

    mediaQuery.addListener(updatePopupWidth);

    tl.to("#sec2popup", {
      display: "flex",
      opacity: 1,
    })
      .fromTo(
        "#sec2popup .popup__wrap",
        {
          width: "0%",
          height: 0,
          opacity: 0,
        },
        {
          opacity: 0.5,
          height: 1,
          width: popupWidth,
          ease: "power3.out",
        }
      )
      .to(
        "#sec2popup .popup__wrap",
        {
          opacity: 1,
          height: "80vh",
          ease: "power3.out",
        },
        "<0.3"
      )
      .fromTo(
        "#sec2popup .close",
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
        }
      )
      .fromTo(
        "#sec2popup .left",
        {
          y: 50,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
        }
      )
      .fromTo(
        "#sec2popup .right",
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .fromTo(
        "#sec2popup .right h2",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
        },
        "-=1"
      )
      .fromTo(
        "#sec2popup .right h3",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
        }
      )
      .fromTo(
        "#sec2popup .javascript",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
        },
        ">"
      )
      .fromTo(
        "#sec2popup .right p",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
        }
      );

    return tl;
  };

  const ClosePoupAnimation2 = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#sec2popup .right",
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: -20,
        ease: "power3.out",
      }
    )
      .fromTo(
        "#sec2popup .left",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "power3.out",
        }
      )
      .fromTo(
        "#sec2popup .close",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -50,
        },
        "<"
      )
      .to(
        "#sec2popup .popup__wrap",
        {
          height: "1",
          ease: "power3.out",
        },
        "<0.5"
      )
      .to("#sec2popup .popup__wrap", {
        width: "1",
        opacity: 0,
        ease: "power3.out",
      })
      .to("#sec2popup", {
        display: "none",
        opacity: 0,
        duration: 1,
      });
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
            유튜브 API를 이용하여 좋아하는 다큐멘터리 채널과 영상을
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
