import React from "react";
import { Link } from "react-router-dom";

const Section5Popup = ({ onClick }) => {
  return (
    <div id="Sec5popup">
      <div className="popup__wrap">
        <div className="popup__content">
          <div className="close" onClick={onClick}></div>
          <div className="left">
            <div className="img"></div>
          </div>
          <div className="right" data-lenis-prevent-wheel>
            <div className="content">
              <h1 className="pt1">분리의 신</h1>
              <p className="desc1">
                분리의신은 일상 생활 속에서 발생하는 잘못된 분리배출을 알려주고,
                간편한 검색을 통해 올바른 배출 방법을 안내하는 웹사이트입니다.
              </p>
              <h2 className="pt2">POINT!</h2>
              <p className="desc2">
                계정 관리: 로그인, 회원가입, ID/PW 찾기, 프로필 관리, 회원 탈퇴
                <br />
                콘텐츠 관리: 게시글 및 댓글 작성, 수정, 삭제, 좋아요 기능,
                카테고리별 검색
                <br />
                인터랙티브 요소: 퀴즈, 이미지 슬라이더
                <br />
                기술적 구현: AJAX, 세션 관리, JSON 데이터 처리, CSS 스타일링
              </p>
              <h2 className="pt3">STACK!</h2>
              <p className="desc3">
                Front-end: React, HTML5, JavaScript, CSS3
                <br />
                Back-end: Php, Php MySQL
                <br />
                etc: GitHub, Slack, Notion
              </p>
              <h2 className="pt4">TROUBLESHOOTING</h2>
              <div className="codeimg c1"></div>
              <h2 className="pt5">TROUBLESHOOTING</h2>
              <div className="codeimg c2"></div>
            </div>
            <div className="scroll"></div>
          </div>
          <div className="btn">
            <Link to="/">
              SITE<span className="arrow"></span>
            </Link>
            <Link to="/">
              CODE<span className="arrow"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5Popup;
