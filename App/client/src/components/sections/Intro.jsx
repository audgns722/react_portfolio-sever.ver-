import React, { useState, useEffect } from "react";
import { Canvas } from "../../utils/canvas";

const Intro = () => {
  const [opacity2, setOpacity2] = useState(0);
  useEffect(() => {
    Canvas("intro");
    setOpacity2(1);
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
        <span>
          스크롤을 내리면
          <br />
          포트폴리오를 볼 수 있습니다.
        </span>
      </div>
    </div>
  );
};

export default Intro;
