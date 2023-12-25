import React, { useEffect, useRef } from "react";
import Img4 from "../../assets/img/section5bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Mouse from "../utils/Mouse";

const Section5 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const circleMask5Ref = useRef(null);
  const section5Ref = useRef(null);
  const text1Ref = useRef(null); // 필요한 경우 text1, text2 참조
  const text2Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const maskAnimation = gsap.to(circleMask5Ref.current, {
      attr: { r: 1000 },
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
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
        markers: true,
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

  const handleLinkClick = (e) => {
    e.preventDefault();
    const url = e.currentTarget.getAttribute("href");

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
        circleMask5Ref.current,
        {
          attr: { r: 0 },
          duration: 2,
        },
        0
      )
      .to(
        "#section5 .image",
        {
          display: "none",
        },
        0
      )
      .to(
        ".contents5 .desc",
        {
          scale: 0,
          opacity: 0,
          yPercent: -200,
        },
        0
      );
  };

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
            분리의신은 일상 생활 속에서 발생하는 잘못된 분리배출을 알려주고,
            간편한 검색을 통해 올바른 배출 방법을 안내하는 웹사이트입니다.
          </div>
          <svg
            className="content__img content__img--5"
            width="100%"
            height="100%"
            viewBox="0 0 1920 579"
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
            <Link to="/detail5" onClick={handleLinkClick}>
              <image
                xlinkHref={Img4}
                width="100%"
                height="100%"
                mask="url(#circleMask5)"
              />
            </Link>
          </svg>
          <Mouse imgRef={imgRef} />
        </div>
      </div>
    </section>
  );
};

export default Section5;
