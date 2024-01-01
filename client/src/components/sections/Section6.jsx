import React, { useEffect, useRef, useState } from "react";
import Img6 from "../../assets/img/section6bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Section6Popup from "../popup/Section6Popup";

const Section6 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const circleMaskRef3 = useRef(null);
  const section6Ref = useRef(null);
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

    tl.to("#sec6popup", {
      display: "flex",
      opacity: 1,
    })
      .fromTo(
        "#sec6popup .popup__wrap",
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
        "#sec6popup .popup__wrap",
        {
          opacity: 1,
          height: "80vh",
          ease: "power3.out",
        },
        "<0.3"
      )
      .fromTo(
        "#sec6popup .close",
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
        "#sec6popup .left",
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
        "#sec6popup .right",
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
        "#sec6popup .right h2",
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
        "#sec6popup .right h3",
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
        "#sec6popup .javascript",
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
        "#sec6popup .right p",
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
      "#sec6popup .right",
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
        "#sec6popup .left",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "power3.out",
        }
      )
      .fromTo(
        "#sec6popup .close",
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
        "#sec6popup .popup__wrap",
        {
          height: "1",
          ease: "power3.out",
        },
        "<0.5"
      )
      .to("#sec6popup .popup__wrap", {
        width: "1",
        opacity: 0,
        ease: "power3.out",
      })
      .to("#sec6popup", {
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
    const maskAnimation = gsap.to(circleMaskRef3.current, {
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
      maskAnimation.kill();
      ScrollTrigger.getById("section6-trigger")?.kill();
    };
  }, []);

  return (
    <section id="section6" ref={section6Ref}>
      <div className="contents6">
        <div className="cont__box" ref={imgRef}>
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
