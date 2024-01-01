import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const Section6Popup = ({ onClick }) => {
  return (
    <div id="sec6popup" data-lenis-prevent-wheel>
      <div className="popup__wrap">
        <div className="left"></div>
        <div className="right">
          <h2>KICKOFF</h2>
          <p>
            리엑트로 축구api를 이용하여 해외축구 하이라이트와 리그 경기일정 등을
            보여주는 웹사이트 입니다.
          </p>
          <h3>👀 포인트</h3>
          <p></p>
          <h3>😍 제작과정</h3>
          <p>
            1. 페이지 구성:
            <br />
            2. data.js 작업 및 컴포넌트 세분화:
          </p>
          <h3>👉 비동기 데이터 처리 (useEffect 사용)</h3>
          <Highlight className="javascript">{``}</Highlight>
          <div className="Link">
            <Link
              to="https://youtube-project2023-huns.netlify.app/"
              className="view"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/audgns722/youtube-react2023"
              className="code"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
        <Link to="/" className="close" onClick={onClick}>
          <div></div>
        </Link>
      </div>
    </div>
  );
};

export default Section6Popup;
