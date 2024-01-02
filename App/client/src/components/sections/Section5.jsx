import React, { useEffect, useRef, useState } from "react";
import Img4 from "../../assets/img/section5bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Section5Popup from "../popup/Section5Popup";

const Section5 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const circleMask5Ref = useRef(null);
  const section5Ref = useRef(null);
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

  const PoupAnimation5 = () => {
    const tl = gsap.timeline();

    // 미디어 쿼리 설정
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    let popupWidth = mediaQuery.matches ? "95%" : "80%";

    // 미디어 쿼리에 대한 이벤트 리스너 추가
    const updatePopupWidth = (e) => {
      popupWidth = e.matches ? "95%" : "80%";
    };

    mediaQuery.addListener(updatePopupWidth);
    tl.to("#sec5popup", {
      display: "flex",
      opacity: 1,
    })
      .fromTo(
        "#sec5popup .popup__wrap",
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
        "#sec5popup .popup__wrap",
        {
          opacity: 1,
          height: "80vh",
          ease: "power3.out",
        },
        "<0.3"
      )
      .fromTo(
        "#sec5popup .close",
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
        "#sec5popup .left",
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
        "#sec5popup .right",
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
        "#sec5popup .right h2",
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
        "#sec5popup .right h3",
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
        "#sec5popup .javascript",
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
        "#sec5popup .right p",
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

  const ClosePoupAnimation5 = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#sec5popup .right",
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
        "#sec5popup .left",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "power3.out",
        }
      )
      .fromTo(
        "#sec5popup .close",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -50,
        }
      )
      .to(
        "#sec5popup .popup__wrap",
        {
          height: "1",
          ease: "power3.out",
        },
        "<0.5"
      )
      .to("#sec5popup .popup__wrap", {
        width: "1",
        opacity: 0,
        ease: "power3.out",
      })
      .to("#sec5popup", {
        display: "none",
        opacity: 0,
        duration: 1,
      });
    return tl;
  };

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
    const maskAnimation = gsap.to(circleMask5Ref.current, {
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
      maskAnimation.kill();
      ScrollTrigger.getById("section5-trigger")?.kill();
    };
  }, []);

  return (
    <section id="section5" ref={section5Ref}>
      <div className="contents5">
        <div className="cont__box" ref={imgRef}>
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
