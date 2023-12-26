import React, { useEffect, useRef } from "react";
import Img3 from "../../assets/img/test.png"; // 이미지 변경

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Mouse from "../utils/Mouse";

const Section4 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const pathMaskRef = useRef(null);
  const section4Ref = useRef(null);
  const text1Ref = useRef(null); // 필요한 경우 text1, text2 참조
  const text2Ref = useRef(null);
  const imgRef = useRef(null);

  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate("/detail4");
  };

  useEffect(() => {
    const pathAnimation = gsap.to(pathMaskRef.current, {
      attr: { d: "M 0 280 Q 500 800 1000 280 Q 500 -200 0 280" },
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    gsap.to(".contents4 .desc", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "center center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.to(text1Ref.current, {
      opacity: 1,
      left: "0", // 왼쪽 끝으로 이동
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "25% center",
        end: "bottom bottom",
        ease: "none",
        scrub: true,
      },
    });

    gsap.to(text2Ref.current, {
      opacity: 1,
      right: "0", // 오른쪽 끝으로 이동
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "25% center",
        end: "bottom bottom",
        scrub: true,
        ease: "none",
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
            MovieKing은 Vue.js와 영화Api를 활용해
            <br />
            영화 정보를 쉽게 찾을수 있는 웹 플랫폼입니다.
          </div>
          <svg
            className="content__img content__img--3"
            width="100%"
            height="100%"
            viewBox="0 0 1000 560"
            onClick={navigateToDetail}
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
    </section>
  );
};

export default Section4;
