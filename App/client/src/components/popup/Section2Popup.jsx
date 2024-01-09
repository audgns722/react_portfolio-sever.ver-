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
          <p>선택된 비디오의 ID가 변경될 때마다 해당 비디오의 세부 정보와 댓글을 새로 불러와 상태에 저장</p>
          <h3>👉 조건부 UI 렌더링 / 더 보기 기능</h3>
          <Highlight className="javascript">
            {`const searchPageClass = loading ? 'isLoading' : 'isLoaded';

const handleLoadMore = () => {
  if (nextPageToken) {
      setLoading(true);
      fetchVideos(searchId, nextPageToken);
  }}`}
          </Highlight>
          <p>
            loading 상태 변수를 사용하여 페이지의 로딩 상태에 따라 클래스 이름을 동적으로 변경합니다. loading이 true인 경우, searchPageClass는 "isLoading" 값을 가지며, false인 경우 "isLoaded" 값을 가집니다.
          </p>
          <p>
            handleLoadMore 함수는 사용자가 더 많은 컨텐츠를 요청할 때 호출됩니다. nextPageToken이 존재할 경우 추가 데이터를 불러오는 로직을 수행합니다. setLoading(true)는 데이터 로딩 과정이 시작됨을 나타냅니다.
          </p>

          <h3>👉 조건부 클래스 (layout)</h3>
          <Highlight className="javascript">
            {`const VideoSearch = ({ videos, layout = '' }) => {
    // ...
}
{videos.map((video, key) => (
    <div className={video\${layout}\} key={key}>    
    </div>
))}`}
          </Highlight>
          <p>
            layout prop의 값에 따라 각 비디오 요소에 다른 클래스가 추가됩니다.
            이를 통해 동일한 VideoSearch 컴포넌트를 다른 스타일로 재사용할 수 있습니다.
          </p>
          <h3>😖트래블 슈팅</h3>
          <h3>API 호출시 404 에러</h3>
          <Highlight className="javascript">
            {`// 문제코드
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(\${BASE_URL}/\${url}\, options);
    return data;
};

// 개선코드
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';`}
          </Highlight>
          <p>
            문제의 원인은 base_url 끝 경로에 '/'가 추가되어 API URL 호출이 실패한 것이었습니다.
          </p>

          <h3>TypeError: Cannot read property 'map' of undefined</h3>
          <Highlight className="javascript">
            {`// 문제코드
const [channelVideo, setChannelVideo] = useState();
// 개선코드
const [channelVideo, setChannelVideo] = useState([]);`}
          </Highlight>
          <p>
            channelVideo는 초기에 빈 배열로 설정되며, 이후에도 배열로 유지됩니다. 따라서 channelVideo에 대해 map 같은 배열 메소드를 사용할 때, undefined 값으로 인한 에러가 발생하지 않게 됩니다.
          </p>
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
      </div >
    </div >
  );
};

export default Section2Popup;
