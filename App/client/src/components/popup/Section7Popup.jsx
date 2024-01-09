import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const Section7Popup = ({ onClick }) => {
  return (
    <div id="sec7popup" data-lenis-prevent-wheel>
      <div className="popup__wrap">
        <div className="left"></div>
        <div className="right">
          <h2>Promptopia(Next14)</h2>
          <p>
            Promtopia는 AI사진 생성과 관련된 프롬프트를 공유하는 웹 애플리케이션입니다.
            <br />이 프로젝트는 사용자가 쉽게 정보를 검색하고 공유하는 환경을 제공합니다.
          </p>
          <h3>👀 포인트</h3>
          <p>
            - AI 프롬프트 공유: AI 사진 생성을 위한 다양하고 창의적인 프롬프트를 사용자들과 공유하며, 창작의 영감을 제공합니다.
            <br />
            - 사용자 중심 설계: 직관적인 인터페이스와 쉬운 사용성을 통해 모든 연령층의 사용자가 쉽게 접근하고 이용할 수 있습니다.
            <br />
            - 커뮤니티 기반 상호작용: 사용자들이 프롬프트에 대해 피드백을 주고받고, 아이디어를 공유하는 커뮤니티 공간을 제공합니다.
            <br />
            - 지속적인 업데이트와 지원: 사용자 피드백과 최신 기술 트렌드를 반영하여 정기적인 업데이트를 제공합니다.
            <br />
            - 안전하고 신뢰할 수 있는 환경: 사용자 데이터 보호와 보안을 최우선으로 합니다.
          </p>
          <h3>😆 사용기술</h3>
          <p>
            - Frontend: React, Next.js, Tailwind CSS
            <br />
            - Backend: Node.js & Express, MongoDB & Mongoose
            <br />
            - Authentication: Next-auth
            <br />
            - Security: Bcrypt
          </p>
          <h3>😍 주요 기능 요약</h3>
          <p>
            - 사용자 관리: 사용자 등록, 로그인 및 프로필 관리. Next-auth를 사용하여 안전한 인증 과정을 구현합니다.
            <br />
            - 데이터 시각화: 사용자 및 프롬프트 데이터를 시각적으로 표현합니다.
            <br />
            - API 통신: RESTful API를 통한 데이터 교환 및 요청 처리.
            <br />
            - 프롬프트 관리: 사용자가 프롬프트를 생성, 수정, 삭제할 수 있습니다.
            <br />
            - 레이아웃 및 페이지 관리: 애플리케이션의 레이아웃과 개별 페이지의 구조 및 기능을 관리합니다.
            <br />
            - 전역 상태 관리: Provider.jsx를 사용하여 앱 전반의 상태를 관리합니다.
            <br />
            - 보안 및 데이터 관리: 사용자 정보를 암호화하여 관리하며, 데이터베이스에 안전하게 저장합니다.
          </p>
          <h3>👉 NextAuth 설정과 인증 공급자</h3>
          <Highlight className="javascript">
            {`import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],`}
          </Highlight>
          <p>
            NextAuth 함수는 Next.js 애플리케이션에서 사용자 인증을 구성합니다.
            GoogleProvider는 Google OAuth 서비스를 인증 공급자로 사용합니다.
            clientId와 clientSecret은 환경 변수에서 가져와 Google OAuth를
            설정하는 데 사용됩니다.
          </p>
          <h3>👉 로그인 콜백</h3>
          <Highlight className="javascript">
            {`async signIn({ account, profile, user, credentials }) {
  try {
    await connectToDB();

    const userExists = await User.findOne({ email: profile.email });

    if (!userExists) {
      await User.create({
        email: profile.email,
        username: profile.name.replace(" ", "").toLowerCase(),
        image: profile.picture,
      });
    }

    return true;
  } catch (error) {
    console.log("Error checking if user exists: ", error.message);
    return false;
  }
}`}
          </Highlight>
          <p>
            signIn 콜백은 사용자가 로그인할 때 호출됩니다. 데이터베이스에 연결한
            후, 사용자의 이메일로 이미 존재하는 사용자인지 확인합니다. 존재하지
            않는 경우, 새로운 사용자를 생성합니다. 로그인 과정 중 발생한 에러는
            콘솔에 로그를 출력하고, 로그인을 중단합니다.
          </p>
          <h3>👉 폼 상태 관리</h3>
          <Highlight className="javascript">
            {`const [submitting, setIsSubmitting] = useState(false);
const [post, setPost] = useState({ prompt: "", tag: "" });`}
          </Highlight>
          <p>
            post 상태는 사용자가 입력한 프롬프트의 내용과 태그를 저장합니다.
            초기값은 빈 문자열입니다. setPost 함수를 사용하여 사용자의 입력에
            따라 post 상태를 업데이트합니다. submitting 상태는 폼이 제출 중인지
            여부를 나타냅니다. 네트워크 요청이 진행 중일 때는 true로 설정됩니다.
          </p>
          <h3>👉 에러 처리 및 네트워크 요청 관리</h3>
          <Highlight className="javascript">
            {`const createPrompt = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/prompt/new", {
      method: "POST",
      body: JSON.stringify({
        prompt: post.prompt,
        userId: session?.user.id,
        tag: post.tag,
      }),
    });

    if (response.ok) {
      router.push("/");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setIsSubmitting(false);
  }
};`}
          </Highlight>
          <p>
            try 블록 안에서 /api/prompt/new 엔드포인트로 POST 요청을 보내고
            있습니다. 요청이 성공적으로 처리되면(response.ok), 사용자를
            홈페이지로 리디렉션합니다. 요청 중 오류가 발생하면, catch 블록이
            실행되어 오류를 콘솔에 로그로 출력합니다. finally 블록은 요청이
            성공하든 실패하든 실행되며, submitting 상태를 false로 설정합니다.
          </p>

          <div className="Link">
            <Link
              to="https://project-promtopia-next-6i6z8qs9q-hoonsdevs-projects.vercel.app/"
              className="view"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/audgns722/project_promtopia_next"
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

export default Section7Popup;
