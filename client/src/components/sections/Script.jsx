import React from "react";
import { Link } from "react-router-dom";

const Script = () => {
  return (
    <div id="script">
      <div className="script__wrap">
        <div className="title">JavaScript</div>
        <div className="title2">Click to Site</div>
        <div className="script__content">
          <div className="contents">
            <Link
              to="https://audgns722.github.io/webs2024/javascript/search/searchEffect01.html"
              target="_blank"
            >
              <div className="img i1">
                <p>SEARCH</p>
              </div>
            </Link>
            <span>
              동적으로 CSS 속성 목록을 필터링하여 CSS 속성을 쉽게 찾고 탐색할 수
              있는 인터페이스를 제공합니다.
            </span>
          </div>

          <div className="contents">
            <Link
              to="https://audgns722.github.io/webs2024/javascript/quiz/quizEffect01.html"
              target="_blank"
            >
              <div className="img i2">
                <p>QUIZ</p>
              </div>
            </Link>
            <span>
              다양한 유형의 퀴즈 제공하며, 특히 JSON파일을 불러와 체점 및점수를
              계산하는 기능을 제공합니다.
            </span>
          </div>
          <div className="contents">
            <Link
              to="https://audgns722.github.io/webs2024/javascript/gsap/gsap01.html"
              target="_blank"
            >
              <div className="img i3">
                <p>GSAP</p>
              </div>
            </Link>
            <span>
              애니메이션 효과, PIN, 배경 고정, 이질감, 나타나기, 텍스트, 배경색
              전환, Progress bar 메뉴 효과, 가로스크롤 등을 정리한 사이트입니다.
            </span>
          </div>
          <div className="contents">
            <Link
              to="https://audgns722.github.io/webs2024/javascript/slider/slider01.html"
              target="_blank"
            >
              <div className="img i4">
                <p>SLIDER</p>
              </div>
            </Link>
            <span>
              이미지 슬라이더를 자동으로 순환시키는 기능을 구현하며, jQuery를
              사용하여 슬라이더의 위치와 스타일을 동적으로 조정합니다.
            </span>
          </div>
          <div className="contents">
            <Link
              to="https://audgns722.github.io/webs2024/javascript/mouse/mouse01.html"
              target="_blank"
            >
              <div className="img i5">
                <p>MOUSE</p>
              </div>
            </Link>
            <span>
              마우스 커서를 따라 움직이는 애니메이션을 구현하며
              getBoundingClientRect()를 정확한 중앙 위치를 계산하고 조정합니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Script;
