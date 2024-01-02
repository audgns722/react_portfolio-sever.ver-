import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const Section2Popup = ({ onClick }) => {
  return (
    <div id="sec2popup" data-lenis-prevent-wheel>
      <div className="popup__wrap">
        <div className="left"></div>
        <div className="right">
          <h2>나만의 다큐 유튜브 사이트 만들기</h2>
          <p>
            이 프로젝트는 YouTube API를 활용하여 다큐멘터리 콘텐츠를 중심으로 한
            독특한 서비스를 제공하는 웹사이트를 구축하는 것이 목표였습니다.
            사용자들이 다양한 다큐멘터리를 쉽게 탐색하고 감상할 수 있는 사이트를
            개발했습니다.
          </p>
          <h3>👀 포인트</h3>
          <p>
            - React Router, Axios, React Player 등 다양한 라이브러리를 통한
            기능적인 웹사이트 구축.
            <br />
            - React Helmet Async: SEO 최적화와 동적 head 관리를 위한 구현.
            <br />- Swiper: 터치 슬라이드 기능을 통해 사용자 인터페이스 개선.
          </p>
          <h3>😍 제작과정</h3>
          <p>
            1. 페이지 구성: 'Home', 'Today', 'Youtubers' 페이지를 세분화하여
            기본적인 웹사이트 구조를 구축
            <br />
            2. data.js 작업 및 컴포넌트 세분화: 데이터 관리를 위한 data.js
            파일을 작성하고, 컴포넌트 프롭스를 세분화하여 보다 효율적인 데이터
            관리와 구조적인 프론트엔드 개발을 진행
            <br />
            3. Swiper 및 API 통합: Swiper 라이브러리를 통해 동적인 UI를
            구현하고, api.js 파일을 생성하여 YouTube API와의 연동을 구현.
            <br />
            4. '더보기' 기능을 추가하여 사용자 경험을 개선
            <br />
            5. 채널 페이지 및 영상 API 호출: 채널 페이지를 구성하고, 영상 API를
            호출하여 다양한 콘텐츠를 제공
            <br />
            6. 검색 기능 및 UI 개선: 검색 기능을 추가하고, 홈페이지에 추천
            영상을 통합하여 사용자가 콘텐츠를 쉽게 찾고 탐색할 수 있도록 UI를
            개선
          </p>
          <h3>👉 비동기 데이터 처리 (useEffect 사용)</h3>
          <Highlight className="javascript">
            {`useEffect(() => {
    fetchFromAPI(\`videos?part=snippet,statistics&id=\${videoId}\`)
        .then((data) => {
            setVideoDetail(data.items[0]);
        });
    fetchFromAPI(\`commentThreads?videoId=\${videoId}&part=snippet\`)
        .then((data) => {
            const comments = data.items.slice(0, 10);
            setVideoComments(comments);
        });
  }, [videoId]);`}
          </Highlight>
          <h3>👉 조건부 UI 렌더링</h3>
          <Highlight className="javascript">
            {`const searchPageClass = loading ? 'isLoading' : 'isLoaded';
const handleLoadMore = () => {
  if (nextPageToken) {
      setLoading(true);
      fetchVideos(searchId, nextPageToken);
  }}`}
          </Highlight>
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

export default Section2Popup;
