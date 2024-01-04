import React, { useState, useEffect } from "react";
import { Canvas } from "../../utils/canvas";
import gsap from "gsap";

const Intro = () => {
  const [opacity2, setOpacity2] = useState(0);
  useEffect(() => {
    Canvas("intro");
    setOpacity2(1);

    // gsap 타임라인 생성
    const tl = gsap.timeline();

    tl
      .fromTo("canvas", {
        opacity: 0,
        duration: 2,
      }, {
        opacity: 1,
        ease: "power3.in"
      })
      .fromTo(".intro h1", {
        scaleY: 1.5,
        opacity: 0,
        y: -50,
        duration: 3
      }, {
        scaleY: 1,
        opacity: 1,
        y: 0
      })
      .fromTo(".intro p", {
        opacity: 0,
        y: 20,
        duration: 1,
      }, {
        opacity: 1,
        y: 0,
        ease: "power3.in"
      })
      .fromTo(".scroll__down .line", {
        opacity: 0,
        y: -20,
        duration: 1,
      }, {
        opacity: 1,
        y: 0,
        ease: "power3.in"
      })
  }, []);
  const introStyle = {
    opacity: opacity2,
    transition: "opacity 2s ease", // 부드러운 페이드인을 위한 전환 효과 설정
  };

  const fontVariables = [
    "--section2",
    "--section3",
    "--section4",
    "--section5",
  ];
  const [currentFontVariable, setCurrentFontVariable] = useState(
    fontVariables[0]
  );
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setCurrentFontVariable((prevFontVariable) => {
          const nextIndex =
            (fontVariables.indexOf(prevFontVariable) + 1) %
            fontVariables.length;
          return fontVariables[nextIndex];
        });
        setOpacity(1);
      }, 1000); // 1초 후에 폰트 변경
    }, 2000); // 매 2초마다 폰트 변경

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  const h1Style = {
    fontFamily: `var(${currentFontVariable})`,
    opacity: opacity,
    transition: "opacity 1s ease, font-family 1s ease",
  };

  return (
    <div id="intro" style={introStyle}>
      <div className="intro">
        <h1 style={h1Style}>Hello My PortFolio</h1>
        <p>
          Developer <em>MyeongHun</em>
        </p>
      </div>
      <div className="scroll__down">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Intro;
