import React, { useEffect, useRef, useState } from "react";
import Img7 from "../../assets/img/section7bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Section7Popup from "../popup/Section7Popup";

const Section7 = ({ setIsActive, isActive }) => {
  gsap.registerPlugin(ScrollTrigger);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathMaskRef3 = useRef(null);
  const section7Ref = useRef(null);
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

  const PoupAnimation7 = () => {
    const tl = gsap.timeline();

    // 미디어 쿼리 설정
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    let popupWidth = mediaQuery.matches ? "95%" : "80%";

    // 미디어 쿼리에 대한 이벤트 리스너 추가
    const updatePopupWidth = (e) => {
      popupWidth = e.matches ? "95%" : "80%";
    };

    mediaQuery.addListener(updatePopupWidth);
    tl.to("#sec7popup", {
      display: "flex",
      opacity: 1,
    })
      .fromTo(
        "#sec7popup .popup__wrap",
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
        "#sec7popup .popup__wrap",
        {
          opacity: 1,
          height: "80vh",
          ease: "power3.out",
        },
        "<0.3"
      )
      .fromTo(
        "#sec7popup .close",
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
        "#sec7popup .left",
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
        "#sec7popup .right",
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
        "#sec7popup .right h2",
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
        "#sec7popup .right h3",
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
        "#sec7popup .javascript",
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
        "#sec7popup .right p",
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

  const ClosePoupAnimation7 = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#sec7popup .right",
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
        "#sec7popup .left",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "power3.out",
        }
      )
      .fromTo(
        "#sec7popup .close",
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
        "#sec7popup .popup__wrap",
        {
          height: "1",
          ease: "power3.out",
        },
        "<0.5"
      )
      .to("#sec7popup .popup__wrap", {
        width: "1",
        opacity: 0,
        ease: "power3.out",
      })
      .to("#sec7popup", {
        display: "none",
        opacity: 0,
        duration: 1,
      });
    return tl;
  };

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
    const pathAnimation = gsap.to(pathMaskRef3.current, {
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
      pathAnimation.kill();
      ScrollTrigger.getById("section4-trigger")?.kill();
    };
  }, []);

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
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
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
          <Mouse imgRef={imgRef} isActive={isActive} />
        </div>
      </div>
      <Section7Popup onClick={closePopup} />
    </section>
  );
};

export default Section7;
