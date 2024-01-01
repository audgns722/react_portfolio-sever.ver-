import React from "react";
import Highlight from "react-highlight";
import { Link } from "react-router-dom";
import "highlight.js/styles/atom-one-dark.css";

const Section3Popup = ({ onClick }) => {
  return (
    <div id="sec3popup" data-lenis-prevent-wheel>
      <div className="popup__wrap">
        <div className="left"></div>
        <div className="right">
          <h2>나만의 블로그 만들기</h2>
          <p>
            이 프로젝트는 React, Node.js, MongoDB, AWS S3, Firebase 등을
            활용하여 블로그를 제작한 프로젝트입니다.
          </p>
          <h3>👀 포인트</h3>
          <p>
            - 사용자 경험을 향상시키는 반응형 웹 디자인과 동적 페이지 라우팅.
            <br />
            - 서버와의 효율적인 비동기 통신 구현을 위한 axios의 활용.
            <br />- React와 Redux를 활용한 상태 관리로 애플리케이션의 성능
            최적화.
          </p>
          <h3>😍 제작과정</h3>
          <p>
            1. 초기 프로젝트 설정 및 React 애플리케이션 구조 설계.
            <br />
            2. 필요한 라이브러리와 프레임워크의 설치 및 설정.
            <br />
            3. 서버 사이드 개발을 위한 Express와 MongoDB의 통합 및 API 구현.
            <br />
            4. 클라이언트 사이드에서의 라우팅, 컴포넌트 설계 및 구현.
            <br />
            5. AWS S3와 Firebase를 통한 파일 저장 및 사용자 인증 기능 통합.
            <br />
            6. 완성된 애플리케이션의 종합적인 테스팅 및 최적화.
          </p>
          <h3>👉 router 모듈을 사용하여 라우팅</h3>
          <Highlight className="javascript">
            {`// server index.js
app.use("/api/post", require("./server/router/post.js"));
app.use("/api/user", require("./server/router/user.js"));
app.use("/api/reple", require("./server/router/reple.js"));`}
          </Highlight>
          <p>
            컴포넌트화 함으로써 모듈화 및 코드 재사용성, 가독성 및 이해도 향상,
            에러 핸들링 및 디버깅 용이성 등의 장점이 있습니다.
            <br />
          </p>
          <h3>👉 React 애플리케이션 메인 설정 (index.js)</h3>
          <Highlight className="javascript">
            {`import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./reducer/store";

// 애플리케이션에 Redux Store와 라우터 적용
<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>
`}
          </Highlight>
          <p>
            Redux store와 Provider를 사용하여 전역 상태 관리를 설정하고,
            BrowserRouter를 통해 라우팅을 구성합니다.
          </p>

          <h3>👉 Redux Store 설정 (store.js)</h3>
          <Highlight className="javascript">
            {`import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./reducer/store";

// 애플리케이션에 Redux Store와 라우터 적용
<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>`}
          </Highlight>
          <p>
            Redux Toolkit의 configureStore를 사용하여 리덕스 스토어를
            설정합니다.
            <br />
            userSlice를 리듀서로 사용합니다.
          </p>
          <h3>👉 Redux Slice 설정 (userSlice.js)</h3>
          <Highlight className="javascript">
            {`import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        // 초기 상태 설정
    },
    reducers: {
        loginUser: (state, action) => {
            // 로그인 액션
        },
        clearUser: (state) => {
            // 사용자 정보 초기화
        },
    },
});`}
          </Highlight>
          <p>
            사용자 관련 상태 및 액션을 관리하기 위한 userSlice를 정의합니다.
          </p>
          <h3>👉 useSelector 훅 사용</h3>
          <Highlight className="javascript">
            {`const user = useSelector((state) => state.user);`}
          </Highlight>
          <Highlight className="javascript">
            {`{user.accessToken === "" ? (
  // 토큰이 없으면 로그인
) : (
  // 토큰이 있으면 유저 정보
)}`}
          </Highlight>
          <Highlight className="javascript">
            {`const LogoutHandler = () => {
  firebase.auth().signOut();
  navigate("/");
};`}
          </Highlight>
          <p>
            사용자가 로그인하면 그에 맞는 인터페이스를 볼 수 있고, 로그아웃
            상태일 때는 로그인 및 회원가입 옵션을 볼 수 있습니다.
          </p>
          <h3>👉 Async/Await을 사용하지 않아 발생한 문제</h3>
          <p>
            문제상황 : async/await을 사용하지 않고 MongoDB의 쿼리를
            실행했습니다.
            <br />
            해결방법 : Express 라우터에서 async/await 패턴을 적용하여 MongoDB
            쿼리를 순차적으로 실행하도록 변경했습니다.
          </p>
          <Highlight className="javascript">
            {`router.post("/submit", async (req, res) => {
    try {
        let temp = {
            reple: req.body.reple,
            postId: req.body.postId,
        };

        // User 정보를 찾고, 결과가 반환될 때까지 기다립니다.
        const userInfo = await User.findOne({ uid: req.body.uid }).exec();
        temp.author = userInfo._id;

        // 새 댓글을 저장하고, 저장이 완료될 때까지 기다립니다.
        const NewReple = new Reple(temp);
        await NewReple.save();

        // 게시글의 댓글 수를 업데이트하고, 업데이트가 완료될 때까지 기다립니다.
        await Post.findOneAndUpdate(
            { _id: req.body.postId },
            { $inc: { repleNum: 1 } }
        ).exec();

        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }
});`}
          </Highlight>
          <div className="Link">
            <Link
              to="https://github.com/audgns722/nodeblog-react2023"
              className="view"
              target="_blank"
            >
              View
            </Link>
            <Link to="" className="code" target="_blank">
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

export default Section3Popup;
