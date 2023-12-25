import React, { useEffect, useRef } from "react";
import Img1 from "../../assets/img/section2bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Mouse from "../utils/Mouse";

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const circleMaskRef = useRef(null);
  const section2Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const imgRef = useRef(null);

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

  const handleLinkClick = (e) => {
    e.preventDefault();
    const url = e.currentTarget.getAttribute("href");

    // 타임라인 생성
    const tl = gsap.timeline({
      onComplete: () => {
        window.location.href = url;
      },
    });

    // 타임라인에 애니메이션 추가
    tl.to(text1Ref.current, {
      opacity: 0,
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      scale: 0,
      duration: 2,
    })
      .to(
        text2Ref.current,
        {
          opacity: 0,
          right: "50%",
          bottom: "50%",
          transform: "translate(50%, 50%)",
          scale: 0,
          duration: 2,
        },
        0
      ) // 0은 시작 시간을 의미하여 동시에 시작됨
      .to(
        circleMaskRef.current,
        {
          attr: { r: 0 },
          duration: 2,
        },
        0
      )
      .to(
        "#section2 .image",
        {
          display: "none",
        },
        0
      )
      .to(
        ".contents2 .desc",
        {
          xPercent: 100,
          scale: 0,
          opacity: 0,
          yPercent: -200,
        },
        0
      );
  };

  // ScrollTrigger 비활성화
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

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
            <Link to="/detail2" onClick={handleLinkClick}>
              <image
                xlinkHref={Img1}
                width="100%"
                height="100%"
                mask="url(#circleMask)"
              />
            </Link>
          </svg>
          <Mouse imgRef={imgRef} />
        </div>
      </div>
    </section>
  );
};

export default Section2;
