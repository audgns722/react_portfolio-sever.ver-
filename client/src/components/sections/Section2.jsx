import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../assets/img/section2bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Mouse from "../utils/Mouse";
import Detailsec2 from "../detail/Detailsec2";
import Detail2Comment from "../comment/Detail2Comment";

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
        document.body.style.overflow = 'hidden'; // 스크롤 막기
      } else {
        document.body.style.overflow = 'unset'; // 스크롤 허용
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



    tl.to(".contents2", {
      width: "90%",
      duration: 1,
      delay: 1,
    })
      .to(imgRef.current, {
        width: "50%",
        left: 0,
        xPercent: 0,
        ease: "power4.in",
        duration: 1,
        maxWidth: "640px",
      }, "<")
      .to(text1Ref.current, {
        xPercent: 0,
        eease: "power4.in",
        duration: 1,
      }, "<")
      .to(text2Ref.current, {
        xPercent: -50,
        eease: "power4.in",
        duration: 1,
      }, "<")
      .fromTo(".right__box", {
        right: "0",
        top: "50%",
        translateX: "0%",
        translateY: "-50%",
        width: "0%"
      }, {
        width: "50%",
        display: "block",
        position: "absolute",
        duration: 2,
        ease: "power4.out",
        height: "100%",
      })
      .to(".left__box", {
        opacity: 1,
        display: "block",
        zIndex: 2,
      })
      .fromTo(".comment__result>.comments", {
        opacity: 0,
        y: -20
      }, {
        opacity: 1,
        y: 0,
        stagger: -0.2, // 각 요소 사이의 지연 시간 (초 단위)
        duration: 0.5, // 애니메이션 지속 시간 (초 단위)
        ease: "power4.out"// 애니메이션 이징
      })
      .fromTo(".detail__wrap>.details", {
        opacity: 0,
        y: 100,
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power1.in",
      }, "<");

    return tl;
  }

  // ClosePopupAnimaition
  const ClosePoupAnimation = () => {
    const tl = gsap.timeline();

    tl.to(".right__box", {
      height: 0,
      duration: 1,
      ease: "expo.out",
      display: "none",
    })
      .to(".left__box", {
        opacity: 0,
        scale: 0.9,
        ease: "expo.out",
        display: "none"
      }, "<")
      .to(imgRef.current, {
        width: "100%",
        left: "50%",
        xPercent: -50,
        ease: "expo.in",
        duration: 1,
        maxWidth: "504px",
      }, "<")
      .to(".cont__box>.desc", {
        display: "blcok",
        opacity: 1,
        duration: 0.5
      })
      .to(".mouse__cursor", {
        display: "block"
      }, "<")
      .to(".hidden__img", {
        display: "none",
        opacity: 0,
      }, "<")
      .to(".content__img--1", {
        display: "block",
        opacity: 1,
        onComplete: () => {

        }
      });

    return tl;
  }

  const openPopup = () => {
    // 팝업 상태 변경
    setIsPopupOpen(true);
    // 이미지 교체 애니메이션 실행
    gsap.to(".cont__box>.desc", {
      display: "none",
      opacity: 0,
      duration: 0.5
    })
    gsap.to(".mouse__cursor", {
      display: "none"
    })
    gsap.to(".content__img--1", {
      display: "none",
      opacity: 0,
      onComplete: () => {
        gsap.to(".hidden__img", {
          display: "block",
          opacity: 1,
        });
      }
    });
    PoupAnimation();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    ClosePoupAnimation()
  };


  useEffect(() => {
    const maskAnimation = gsap.to(circleMaskRef.current, {
      attr: { r: 820 },
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top center",
        end: "bottom bottom", // 'bottom'이 아닌 'end' 사용
        scrub: 3,
      },
    });
    gsap.to(".contents2 .desc", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "center center",
        end: "bottom bottom", // 'bottom'이 아닌 'end' 사용
        scrub: 1,
      },
    });

    // text1에 ScrollTrigger 애니메이션 적용
    gsap.to(text1Ref.current, {
      opacity: 1,
      left: "0", // 왼쪽 끝으로 이동
      top: "0", // 상단으로 이동
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "25% center",
        end: "bottom bottom",
        ease: "ease in",
        scrub: 2.5,
      },
    });

    // text2에 ScrollTrigger 애니메이션 적용
    gsap.to(text2Ref.current, {
      opacity: 1,
      right: "0", // 오른쪽 끝으로 이동
      bottom: "0", // 하단으로 이동
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
      // 특정 컴포넌트의 ScrollTrigger 인스턴스만 제거
      ScrollTrigger.getById("section2-trigger")?.kill();
    };
  }, []);

  return (
    <section id="section2" ref={section2Ref}>
      <div className="contents2">
        <div className="close" onClick={closePopup}>X</div>
        <div className="cont__box" ref={imgRef}>
          <Detail2Comment />
          <div className="text1" ref={text1Ref} onClick={closePopup}>
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
