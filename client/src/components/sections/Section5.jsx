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

    tl.set("#section5 .popup__content", {
      height: "70%",
      width: "100%",
      padding: "20px",
      opacity: 1,
      scale: 1,
    })
      .fromTo(
        "#Sec5popup",
        {
          opacity: 0,
          x: 40,
        },
        {
          display: "block",
          position: "fixed",
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      )
      .fromTo(
        "#section5 .popup__content .left .img",
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        }
      )
      .to(
        "#section5 .popup__content .close",
        {
          display: "inline-block",
        },
        "<"
      )
      .to("#section5 .popup__content .right", {
        opacity: 1,
      })
      .from(
        "#section5 .pt1",
        {
          x: -400,
          duration: 0.3,
          ease: "power1.in",
        },
        "<0.1"
      )
      .from(
        "#section5 .desc1",
        {
          x: -700,
          duration: 0.3,
          ease: "power1.in",
        },
        "<0.1"
      )
      .from(
        "#section5 .pt2",
        {
          x: -200,
          duration: 0.3,
          ease: "power1.in",
        },
        "<0.1"
      )
      .from(
        "#section5 .desc2",
        {
          x: -700,
          duration: 0.3,
          ease: "power1.in",
        },
        "<0.1"
      )
      .from(
        "#section5 .pt3",
        {
          x: -200,
          duration: 0.3,
          ease: "power1.in",
        },
        "<0.1"
      )
      .from(
        "#section5 .desc3",
        {
          x: -700,
          duration: 0.3,
          ease: "power1.in",
        },
        "<0.1"
      )
      .from(
        "#section5 .pt4",
        {
          x: -300,
          duration: 0.3,
          ease: "power1.in",
        },
        "<0.1"
      )
      .from(
        "#section5 .c1",
        {
          x: -700,
          duration: 0.3,
          ease: "power1.in",
        },
        "<0.1"
      )
      .from(
        "#section5 .pt5",
        {
          x: -300,
          duration: 0.3,
          ease: "power1.in",
        },
        "<0.1"
      )
      .from(
        "#section5 .c2",
        {
          x: -700,
          duration: 0.3,
          ease: "power1.in",
        },
        "<0.1"
      )
      .fromTo(
        "#section5 .popup__content .btn",
        {
          y: -35,
          opacity: 0,
          zIndex: -1,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            document.querySelector(
              "#section5 .popup__content .btn"
            ).style.zIndex = "0";
          },
        },
        "<"
      )
      .fromTo(
        "#section5 .popup__content .scroll",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
        }
      );

    return tl;
  };

  const ClosePoupAnimation5 = () => {
    const tl = gsap.timeline();

    tl.to("#section5 .popup__content .right", {
      opacity: 0,
      duration: 0.5,
    })
      .to(
        "#section5 .popup__content .left .img",
        {
          opacity: 0,
          duration: 0.5,
        },
        "<"
      )

      .to(
        "#section5 .popup__content .btn",
        {
          y: -25,
          zIndex: -1,
          duration: 0.2,
          opacity: 0,
          onComplete: () => {
            document.querySelector(".popup__content .btn").style.zIndex = "0";
          },
        },
        "<0.5"
      )
      .to(
        "#section5 .popup__content .close",
        {
          display: "none",
        },
        "<"
      )
      .to("#section5 .popup__content", {
        height: "0",
        padding: "2.5px",
        duration: 1,
        ease: "expo.out",
      })
      .to("#section5 .popup__content", {
        width: "0",
        duration: 1,
        ease: "expo.out",
      })
      .to("#section5 .popup__content", {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "expo.out",
      })
      .to(
        "#Sec5popup",
        {
          display: "none",
          position: "static",
          opacity: 0,
          duration: 0.5,
          ease: "expo.out",
        },
        "<"
      )
      .fromTo(
        "#section5 .contents5",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "expo.in",
        },
        "<"
      );

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
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.to(".contents5 .desc", {
      opacity: 0.5,
      y: "17vh",
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "center center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.to(text1Ref.current, {
      opacity: 1,
      top: "0", // 상단으로 이동
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "25% center",
        end: "bottom bottom",
        ease: "none",
        scrub: true,
      },
    });

    gsap.to(text2Ref.current, {
      opacity: 1,
      bottom: "0", // 하단으로 이동
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "25% center",
        end: "bottom bottom",
        scrub: true,
        ease: "none",
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
            일상 생활 속에서 발생하는 잘못된 분리배출을
            <br /> 알려주고, 간편한 검색을 통해 올바른 배출
            <br /> 방법을 안내하는 웹사이트입니다.
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
