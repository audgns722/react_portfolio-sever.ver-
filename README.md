# 👓Developer Mhun Portfolio(react.ver)
프론트엔드 개발자 이명훈의 포트폴리오 사이트입니다.
스크롤을 내리다 이미지를 클릭하시면 자세한 소스코드 및 기능 구현 정보를 확인하실수 있습니다.

## 제작기간
23.12.20 ~ 24.01.08

## 완성작 보기

미리보기 :

## 사용 스택
Front-End
- React, GSAP, Framer Motion, axios

Back-End
- Node.js, Express, MongoDB, mongoose

Deploy
fly.io

Etc-Tool
- moment.js react-router-dom, react-highlight와 highlight.js

## 라이브러리 설치

### 서버
```javascript
npm init -y
npm install express
npm install nodemon --save
npm install path --save
npm install mongoose --save
```

### 클라이언트
```javascript
npm create-react-app .
npm install sass
npm install gsap
npm install react-router-dom
npm install @studio-freight/lenis
npm install gsap split-type
npm install react-icons --save
npm install react-highlight --save
npm install highlight.js
npm install moment
npm install framer-motion
```

`npm run dev` 실행하기

## 프로젝트 구성

<details>
<summary>📦client</summary>

 ```
 ┣ 📂public
 ┃ ┣ 📜favicon.svg
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┣ 📂popup
 ┃ ┃ ┃ ┣ 📂section
 ┃ ┃ ┃ ┣ 📂setting
 ┃ ┃ ┃ ┗ 📜style.css
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📂img
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂popup
 ┃ ┃ ┣ 📂sections
 ┃ ┃ ┗ 📂utils
 ┃ ┣ 📂pages
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜setupProxy.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┗ 📜package.json
 ```

</details>

<details>
<summary>📦server</summary>

 ```
 📦App
 ┣ 📂server
 ┃ ┣ 📂config
 ┃ ┃ ┣ 📜dev.js
 ┃ ┃ ┣ 📜key.js
 ┃ ┃ ┗ 📜production.js
 ┃ ┣ 📂model
 ┃ ┃ ┣ 📜Comment.js
 ┃ ┃ ┗ 📜Counter.js
 ┃ ┗ 📜.gitignore
 ┣ 📜.dockerignore
 ┣ 📜Dockerfile
 ┣ 📜fly.toml
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜Procfile
 ```
</details>

## 주요 기능 및 기술

### client

로딩 상태 관리
- useState를 사용하여 로딩 상태(isLoading) 관리   

애니메이션
- GSAP와 ScrollTrigger를 이용한 애니메이션
- SVG와 효과 필터의 사용
- 반응형 디자인

팝업 관리
- useState를 사용하여 팝업 상태(isPopupOpen) 관리 및 조건부 렌더링 구현

코드 하이라이팅
- react-highlight와 highlight.js를 사용하여 코드 스니펫에 구문 강조 적용

캔버스 애니메이션
- Canvas("intro") 함수를 이용하여 캔버스 기반의 시각적 효과 생성

폰트 변화 애니메이션
- fontVariables 배열과 useState를 활용한 주기적 폰트 스타일 변경

댓글 시스템
- 사용자로부터 댓글 내용, 작성자 이름, 비밀번호 입력받아 상태 관리
- 서버와의 통신으로 댓글 추가 및 삭제 기능 구현
- 페이지네이션
- 시간 포맷팅(moment라이브러리 사용)

마우스 커서 추적
- useEffect와 gsap를 사용하여 마우스 커서의 움직임 추적

Framer Motion을 이용한 애니메이션
- motion.div를 사용한 부드러운 스케일 변화 애니메이션 적용

애니메이션 상태 관리
- framer-motion의 initial, animate 속성을 사용하여 애니메이션의 초기 및 활성화 상태 정의

컴포넌트 내 이벤트 리스너 관리
- useEffect 내에서 mousemove 이벤트 리스너 추가 및 관리

프록시 설정
- 프론트엔드 개발 서버에서 API 요청을 백엔드 서버로 투명하게 전달할 수 있어, 개발 과정을 더 효율적으로 만듬

### server
서버 구성
- express: Node.js 웹 애플리케이션 프레임워크.
- mongoose: MongoDB를 위한 ODM(Object Data Mapping) 라이브러리.

서버 실행 및 MongoDB 연결
- 환경변수(process.env.PORT) 또는 기본 포트(8080)에서 서버 실행.(fly.io 배포를 위해 5050 -> 8080으로 변경)
- mongoose.connect를 사용하여 MongoDB와 연결.

정적 파일 제공
- express.static을 사용하여 React 애플리케이션의 빌드 파일 제공.

모델
- Comment와 Counter 모델을 사용하여 댓글 데이터 및 카운터 데이터 관리.

API 엔드포인트
- /api/comment: 댓글 작성 기능.
- /api/list: 저장된 댓글 목록 불러오기.
- /api/delete: 댓글 삭제 기능.
- 댓글 삭제 시 비밀번호 검증 로직 구현.

환경변수 사용
- .env 파일 또는 환경변수를 통해 중요 정보(예: 데이터베이스 연결 문자열) 관리.
- process.env를 사용하여 환경변수 접근.

## 트러블 슈팅

<details>
<summary>전역 마우스 효과 구현</summary>

```
목표: 여러 섹션(Section2, Section3, Section4, Section5, Section6, Section7)에 걸쳐 하나의 마우스 효과(Mouse 컴포넌트)를 전역적으로 사용하려는 시도.

문제: 전역적으로 사용되는 Mouse 컴포넌트에서 해당 영역의 전체 높이값을 정확하게 계산하는 데 실패. Mouse 컴포넌트가 각 섹션의 특정 요소에 대한 상대적 위치를 파악하는 데 필요한 중요한 정보임.

시도: Mouse 컴포넌트를 각 섹션 컴포넌트 내부에 개별적으로 배치하여 효과를 구현.

문제점: 이 방법은 페이지의 여러 부분에서 중복된 마우스 효과를 생성하고, 각각의 Mouse 컴포넌트가 독립적으로 작동하여 전역적인 효과를 제공하지 못함.

구현: Mouse 컴포넌트를 Home 컴포넌트에 한 번만 구현하고, isActive 상태를 통해 전역적으로 효과를 관리.

도전과제: imgRef를 사용하여 각 섹션의 특정 요소에 대한 마우스 효과를 관리하는 것은 복잡도가 높으며, 전역적인 마우스 효과와 개별 섹션의 상호작용을 적절히 조율하는 것이 중요함.

학습 포인트
컴포넌트 재사용: 하나의 Mouse 컴포넌트를 여러 섹션에 걸쳐 재사용하는 방식으로 전역적인 UI 효과를 관리.

DOM 요소 크기 및 위치의 중요성: DOM 요소의 크기 및 위치 정보를 정확히 계산하는 것의 중요성 인식. 이는 전역적인 UI 효과 구현에 핵심적인 역할을 함.

추후 개선 방향: 더 나은 전역 UI 효과 구현을 위해, 요소의 크기 및 위치를 보다 정확하게 계산하는 방법을 모색하고, 해당 데이터를 효과적으로 활용하는 방법 탐구.
```
</details>

<details>
<summary>댓글 삭제 기능의 비밀번호 확인 로직</summary>

문제 상황
- 목표: 사용자가 입력한 비밀번호를 확인하여, 해당 비밀번호가 맞을 경우에만 댓글을 삭제하는 기능 구현.
- 문제: 댓글 삭제 시 비밀번호 확인 로직 구현에 어려움 발생.

초기 접근 방법 및 문제점
- 처음 시도: 사용자로부터 입력받은 비밀번호를 deletePasswords 상태에 저장하고, 댓글 삭제 시 해당 비밀번호를 검증하는 로직 구현.
- 문제점: 사용자가 여러 댓글에 대해 삭제를 시도할 때, 각 댓글에 대한 비밀번호를 개별적으로 관리하는 데 어려움이 있었음. 비밀번호 검증 로직의 정확성 및 보안성 문제.

해결 방법:
- deletePasswords 상태를 객체로 관리하여, 각 댓글 번호(commentNum)별로 비밀번호를 저장.
- 삭제 요청 시, 사용자에게 입력받은 비밀번호와 서버에 저장된 비밀번호를 비교하는 로직을 서버 측에서 구현.
```javascript
const DeleteHandler = (commentNum, password) => {
  if (window.confirm("정말로 삭제하기겠습니까?")) {
    let body = {
      commentNum: commentNum,
      password: password,
    };
    axios.post("/api/delete", body)
      .then((response) => {
        if (response.data.success) {
          alert("댓글이 삭제되었습니다.");
          setCommentList(commentList.filter((comment) => comment.commentNum !== commentNum));
        } else {
          alert("비밀번호가 일치하지 않습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("댓글 삭제에 실패했습니다.");
      });
  }
};
```

학습 포인트 및 개선 방향
- 상태 관리의 중요성: 각 댓글별로 비밀번호를 관리하는 방식의 중요성 인식. 이를 통해 사용자 경험을 개선하고 보안을 강화.
- 서버 측 로직의 중요성: 클라이언트-서버 간의 상호작용에서 서버 측 로직이 중요한 역할을 하는 것을 이해. 비밀번호 검증과 같은 보안 관련 로직은 서버 측에서 처리.
- 사용자 경험 개선: 오류 메시지와 사용자 안내를 통해 더 나은 사용자 경험 제공.
</details>

## 배포하기
Fly.io 배포
- fly.io를 사용하여 서버 애플리케이션 배포.
- fly.io의 CLI 도구를 사용하여 배포 프로세스 관리 및 구성.
