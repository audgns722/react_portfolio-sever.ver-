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

    // 미디어 쿼리 설정
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    let popupWidth = mediaQuery.matches ? "95%" : "80%";

    // 미디어 쿼리에 대한 이벤트 리스너 추가
    const updatePopupWidth = (e) => {
      popupWidth = e.matches ? "95%" : "80%";
    };

    mediaQuery.addListener(updatePopupWidth);
    tl.to("#sec4popup", {
      display: "flex",
      opacity: 1,
    })
      .fromTo(
        "#sec4popup .popup__wrap",
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
        "#sec4popup .popup__wrap",
        {
          opacity: 1,
          height: "80vh",
          ease: "power3.out",
        },
        "<0.3"
      )
      .fromTo(
        "#sec4popup .close",
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
        "#sec4popup .left",
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
        "#sec4popup .right",
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
        "#sec4popup .right h2",
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
        "#sec4popup .right h3",
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
        "#sec4popup .javascript",
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
        "#sec4popup .right p",
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

  const ClosePoupAnimation4 = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#sec4popup .right",
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
        "#sec4popup .left",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "power3.out",
        }
      )
      .fromTo(
        "#sec4popup .close",
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
        "#sec4popup .popup__wrap",
        {
          height: "1",
          ease: "power3.out",
        },
        "<0.5"
      )
      .to("#sec4popup .popup__wrap", {
        width: "1",
        opacity: 0,
        ease: "power3.out",
      })
      .to("#sec4popup", {
        display: "none",
        opacity: 0,
        duration: 1,
      });
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
            MovieKing은 Vue.js와 영화Api를 활용해 영화 정보를 쉽게 찾을수 있는
            웹 플랫폼입니다.
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
