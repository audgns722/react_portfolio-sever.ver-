import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../assets/img/section2bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Detailsec2 from "../detail/Detailsec2";
import Detail2Comment from "../comment/Detail2Comment";
import Close from "../utils/Close";

const Section2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
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

  // openPopupAnimaition
  const PoupAnimation = () => {
    const tl = gsap.timeline();

    tl.to(
      ".contents2",
      {
        width: "90%",
        duration: 1,
        delay: 1,
      },
      "<"
    )
      .to(
        ".cont__box>.desc",
        {
          display: "none",
          duration: 0.5,
        },
        "<"
      )
      .to(
        ".mouse__cursor",
        {
          display: "none",
        },
        "<"
      )
      .to(
        ".content__img--1",
        {
          display: "none",
        },
        "<"
      )
      .to(
        ".hidden__img",
        {
          display: "block",
          zIndex: -1,
        },
        "<"
      )
      .to(
        imgRef.current,
        {
          width: "50%",
          left: 0,
          xPercent: 0,
          ease: "power2.in",
          duration: 1,
        },
        "<"
      )
      .to(imgRef.current, {
        maxWidth: "640px",
        duration: 1,
      })
      .to(
        text1Ref.current,
        {
          xPercent: 0,
          ease: "none",
          duration: 0.5,
        },
        "<"
      )
      .to(
        text2Ref.current,
        {
          xPercent: -50,
          ease: "none",
          duration: 0.3,
        },
        "<"
      )
      .to(".left__box", {
        opacity: 1,
        display: "block",
        zIndex: 2,
      })
      .fromTo(
        ".right__box",
        {
          opacity: 0.3,
          right: "0",
          top: "50%",
          translateX: "0%",
          translateY: "-50%",
          width: "40%",
        },
        {
          opacity: 1,
          width: "50%",
          display: "block",
          position: "absolute",
          ease: "power1.inOut",
          height: "100%",
        }
      )
      .to(
        ".contents2 .close",
        {
          display: "block",
        },
        "<"
      )
      .fromTo(
        ".comment__result>.comments",
        {
          opacity: 0.2,
          y: -40,
        },
        {
          opacity: 1,
          y: 0,
          stagger: -0.2,
          duration: 0.3,
          ease: "bounce.out",
        },
        "<"
      )
      .fromTo(
        ".detail__wrap>.details",
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: -0.2,
          duration: 0.5,
          ease: "sine.in",
        },
        "<"
      );

    return tl;
  };

  // ClosePopupAnimaition
  const ClosePoupAnimation = () => {
    const tl = gsap.timeline();

    tl.to(".right__box", {
      width: "40px",
      duration: 1,
      opacity: 0,
      ease: "expo.out",
      display: "none",
    })
      .to(
        ".left__box",
        {
          opacity: 0,
          scale: 0.9,
          ease: "expo.out",
          display: "none",
        },
        "<"
      )
      .to(
        ".contents2 .close",
        {
          display: "none",
        },
        "<"
      )
      .to(
        imgRef.current,
        {
          width: "100%",
          left: "50%",
          xPercent: -50,
          ease: "expo.in",
          duration: 1,
          maxWidth: "504px",
        },
        "<"
      )
      .to(".contents2 .desc", {
        display: "block",
        opacity: 1,
      })
      .to(
        ".mouse__cursor",
        {
          display: "block",
        },
        "<"
      )
      .to(
        ".hidden__img",
        {
          display: "none",
          zIndex: -1,
        },
        "<"
      )
      .to(".content__img--1", {
        display: "block",
        onComplete: () => {},
      });

    return tl;
  };

  const openPopup = () => {
    // 팝업 상태 변경
    setIsPopupOpen(true);
    // 이미지 교체 애니메이션 실행
    PoupAnimation();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    ClosePoupAnimation();
  };

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
        <Close onClick={closePopup} />
        <div className="cont__box" ref={imgRef}>
          <Detail2Comment />
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
          <div className="hidden__img"></div>
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
        <Detailsec2 />
      </div>
    </section>
  );
};

export default Section2;
