import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const Section4Popup = ({ onClick }) => {
  return (
    <div id="sec4popup" data-lenis-prevent-wheel>
      <div className="popup__wrap">
        <div className="left"></div>
        <div className="right">
          <h2>MOVIEKING CINEMA(Vue)</h2>
          <p>
            MovieKing은 Vue.js의 다양한 기능을 활용하여 영화 정보를 편리하게
            찾을 수 있는 플랫폼입니다.
          </p>
          <h3>👀 포인트</h3>
          <p>
            - 최신 인기 영화 보기: 영화 제목, 개봉일, 평점 등의 정보 제공 영화
            <br />
            - 정보 상세 조회: 영화의 장르, 러닝타임, 출연진 정보 및 예고편 링크
            <br />
            - 제공 영화 검색 기능: 영화 제목으로 관련 영화 검색
            <br />
          </p>
          <h3>😆 사용기술</h3>
          <p>
            - Vue.js의 ref, onMounted훅, v-for, v-bind 디렉티브를 사용했습니다.
            <br />
            - Sass를 사용하여 CSS 스타일을 관리했습니다.
            <br />- Axios를 사용하여 영화 정보 API를 요청했습니다.
          </p>
          <h3>😍 제작과정</h3>
          <p>
            1. 프로젝트 및 개발 환경 설정: Node.js, Vue.js, Vite, Sass 설치:
            필요한 도구와 라이브러리를 설치하여 개발 환경을 구축했습니다.
            <br />
            2. 프로젝트 생성 및 초기 설정: Vue 프로젝트를 생성하고 기본 설정을
            진행합니다.
            <br />
            3. Vue.js 기능 학습 및 적용: Vue의 반응형 시스템에서 상태 관리를
            위해 ref 함수를 사용했습니다.
            <br />
            4. onMounted 훅 : 컴포넌트가 마운트된 후 실행되는 onMounted 생명주기
            훅을 사용했습니다.
            <br />
            5.v-for와 v-bind 디렉티브 사용: 반복 렌더링과 속성 바인딩을 위한 Vue
            디렉티브를 사용했습니다.
            <br />
            6. API 통신 및 테스트: Postman 사용: API 테스트 및 디버깅을 위해
            Postman 사용했습니다.
            <br />
            7. 코드 구조 개선: 컴포넌트 분리: header, main, footer 등의
            컴포넌트를 분리하여 코드 구조를 개선했습니다.
            <br />
            8. 보안 설정: 환경 변수 설정: API 키를 환경 변수로 설정하여 보안을
            강화했습니다.
          </p>
          <h3>👉 Async/Await를 사용한 API 요청</h3>
          <Highlight className="javascript">
            {`const fetchMovies = async (category) => {
  // ...
  const response = await axios.get(url, { /* params */ });
  movies.value = response.data.results;
  // ...
}`}
          </Highlight>
          <h3>👉 Popup 기능 구현</h3>
          <Highlight className="javascript">
            {`const openPopup = async (movie) => {
  // ...
  isPopupOpen.value = true;
};

const closePopup = () => {
  isPopupOpen.value = false;
};`}
          </Highlight>
          <h3>👉 onMounted 생명주기</h3>
          <Highlight className="javascript">
            {`onMounted(async () => {
  await fetchMovies('latest');
  await homeCredit();
});`}
          </Highlight>
          <p>
            onMounted의 사용은 컴포넌트가 실제로 화면에 렌더링된 후 필요한
            데이터를 로드하고, 해당 데이터를 통해 화면을 업데이트하는 데 중요한
            역할을 합니다
          </p>
          <h3>👉 v-if 조건부 렌더링</h3>
          <Highlight className="javascript">
            {`<DetailIntro v-if="movieBasic && movieCredits && movieVideos" :movieBasic="movieBasic" :movieCredits="movieCredits" :movieVideos="movieVideos" />`}
          </Highlight>
          <p>
            {" "}
            데이터가 로드된 후에만 컴포넌트를 렌더링합니다. 이는 사용자
            인터페이스가 데이터를 기다리는 동안 비어 있거나 불완전하지 않게
            합니다.
          </p>

          <div className="Link">
            <Link
              to="https://vue-movieking-site-project2023.netlify.app/"
              className="view"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/audgns722/vue-movie-porject2023/tree/main"
              className="code"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
        <Link href="/" className="close" onClick={onClick}>
          <div></div>
        </Link>
      </div>
    </div>
  );
};

export default Section4Popup;
