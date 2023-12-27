import gsap from "gsap";
import React, { useEffect } from "react";
import useDraggable from "../../utils/drag";

const Content = ({ className, children }) => {
  const { position, startDrag, isDragging } = useDraggable();

  const dynamicStyle = {
    // 위치와 scale을 동시에 조절
    transform: `translate(${position.x}px, ${position.y}px) scale(${
      isDragging ? 1.5 : 1
    })`,
    transition: isDragging ? "none" : "all 0.2s",
    transformOrigin: "center",
    zIndex: isDragging ? 1000 : 1,
    cursor: isDragging ? "grabbing" : "grab",
  };

  return (
    <div
      className={`contents ${className}`}
      style={dynamicStyle}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {children}
    </div>
  );
};
const Section6 = () => {
  const getRandomPosition = () => {
    // 랜덤한 X, Y 값을 반환
    const randomX = Math.random() * 100 - 30; // 예: -50px ~ 50px 범위
    const randomY = Math.random() * 100 - 30; // 예: -50px ~ 50px 범위
    return { x: randomX, y: randomY };
  };

  const animateContents = () => {
    document.querySelectorAll(".contents").forEach((element) => {
      const { x, y } = getRandomPosition();

      gsap.fromTo(
        element,
        { opacity: 0.5, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: "#Script",
            start: "top center",
            end: "bottom bottom",
            toggleActions: "play none none none",
          },
        }
      );
    });
  };
  gsap.to(".reset", {
    scale: 1.2,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
  });

  useEffect(() => {
    animateContents();
  }, []);

  const resetPositions = () => {
    // GSAP 애니메이션 재실행
    animateContents();
  };

  return (
    <div id="Script">
      <div className="script__wrap">
        <button className="reset" onClick={resetPositions}>
          Reset
        </button>
        <div className="title">Introducing My JavaScript</div>
        <div className="title2">Drag to move</div>
        <div className="script__content">
          <Content>
            <div className="contents">
              <div className="img i1">
                <p>SEARCH</p>
              </div>
              <span>
                동적으로 CSS 속성 목록을 필터링하여 CSS 속성을 쉽게 찾고 탐색할
                수 있는 인터페이스를 제공합니다.
              </span>
            </div>
          </Content>
          <Content>
            <div className="contents">
              <div className="img i2">
                <p>QUIZ</p>
              </div>

              <span>
                다양한 유형의 퀴즈 제공하며, 특히 JSON파일을 불러와 체점
                및점수를 계산하는 기능을 제공합니다.
              </span>
            </div>
          </Content>
          <Content>
            <div className="contents">
              <div className="img i3">
                <p>GSAP</p>
              </div>
              <span>
                애니메이션 효과, PIN, 배경 고정, 이질감, 나타나기, 텍스트,
                배경색 전환, Progress bar 메뉴 효과, 가로스크롤 등을 정리한
                사이트입니다.
              </span>
            </div>
          </Content>
          <Content>
            <div className="contents">
              <div className="img i4">
                <p>SLIDER</p>
              </div>
              <span>
                이미지 슬라이더를 자동으로 순환시키는 기능을 구현하며, jQuery를
                사용하여 슬라이더의 위치와 스타일을 동적으로 조정합니다.
              </span>
            </div>
          </Content>
          <Content>
            <div className="contents">
              <div className="img i5">
                <p>MOUSE</p>
              </div>
              <span>
                마우스 커서를 따라 움직이는 애니메이션을 구현하며,
                getBoundingClientRect()를 정확한 중앙 위치를 계산하고
                조정합니다.
              </span>
            </div>
          </Content>
        </div>
      </div>
    </div>
  );
};

export default Section6;
