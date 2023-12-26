import React, { useEffect, useRef } from "react";
import Img4 from "../../assets/img/section5bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Mouse from "../utils/Mouse";

const Section5 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const circleMask5Ref = useRef(null);
  const section5Ref = useRef(null);
  const text1Ref = useRef(null); // 필요한 경우 text1, text2 참조
  const text2Ref = useRef(null);
  const imgRef = useRef(null);

  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate("/detail5");
  };

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
            onClick={navigateToDetail}
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
    </section>
  );
};

export default Section5;
