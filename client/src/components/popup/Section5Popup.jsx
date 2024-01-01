import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const Section5Popup = ({ onClick }) => {
  return (
    <div id="sec5popup" data-lenis-prevent-wheel>
      <div className="popup__wrap">
        <div className="left"></div>
        <div className="right">
          <h2>분리의 신 PHP-TeamProject</h2>
          <p>
            분리의신은 일상 생활 속에서 발생하는 잘못된 분리배출을 알려주고,
            간편한 검색을 통해 올바른 배출 방법을 안내하는 웹사이트입니다.
          </p>
          <h3>👀 포인트</h3>
          <p>
            - 사용자 경험 중심의 디자인: 사용자의 쉬운 접근성과 이해도를 고려한
            직관적인 UI/UX 디자인. <br />
            - 인터랙티브 기능 구현: AJAX와 JSON을 활용한 비동기 통신으로 사용자
            상호작용을 풍부하게 구현.
            <br />
            - 실용성과 정보 제공: 올바른 분리배출 방법 안내 및 환경 보호에 대한
            인식 제고를 목표로 하는 실용적인 정보 제공.
            <br />- 퀴즈 및 게시판 기능: 사용자 참여를 유도하는 퀴즈와 게시판
            기능을 통해 커뮤니티 활성화.
          </p>
          <h3>😆 사용기술</h3>
          <p>
            - Front-end: HTML5, CSS3, JavaScript
            <br />
            - Back-end: PHP, MySQL
            <br />- 협업 도구: GitHub, Slack, Notion
          </p>
          <h3>😍 제작과정</h3>
          <p>
            1. 아이디어 및 계획 단계 : 프로젝트의 목적과 타겟 사용자에 대한
            분석을 바탕으로 기능적 및 디자인을 기획
            <br />
            2. 프로젝트의 전체적인 : 흐름과 주요 페이지의 레이아웃을 계획
            <br />
            3. 개발 환경 설정 : 사용할 기술 스택(PHP, MySQL, JavaScript 등)을
            선정하고 개발 환경을 설정
            <br />
            4. 백엔드 개발 및 데이터베이스 통합 : 사용자 인증, 회원가입, 게시판
            등의 백엔드 로직을 PHP로 개발
            <br />
            5. 기능 테스트 및 최적화 개발된 기능들을 철저히 테스트하고 버그를
            수정
          </p>
          <h3>👉 AJAX를 사용한 퀴즈 데이터 로딩 및 렌더링</h3>
          <Highlight className="javascript">
            {`
$(document).ready(function() {
  // ... 기타 코드 ...

  function loadQuizData() {
      $.getJSON('../../assets/json/quiz.json', function(data) {
          quizData = data;
          loadQuiz(currentQuestionIndex);
      });
  }

  function loadQuiz(questionIndex) {
      quiz = quizData[questionIndex];
      questionNumber = questionIndex + 1;
      renderQuiz(quiz, questionNumber);
  }

  function renderQuiz(quiz, questionNumber) {
      var html = '
          <div class="num">Q.' + questionNumber + '</div>
          <div class="question">' + quiz.question + '</div>
          <div class="options">
              ' + renderOptions(quiz) + '
          </div>
          // ... 기타 HTML 구조 ...
      ';

      $('.quiz__contants.q2').html(html);
      // ... 이벤트 핸들러 설정 및 기타 기능 ...
  }
});`}
          </Highlight>
          <p>
            AJAX 요청으로 퀴즈 데이터 로드 $.getJSON() 메서드를 사용하여
            서버에서 JSON 형식의 퀴즈 데이터를 비동기적으로 요청합니다. 데이터
            로드가 성공하면, loadQuizData() 함수 내에서 퀴즈 데이터를 quizData
            배열에 저장합니다. 첫 번째 퀴즈 질문을 로드하기 위해 loadQuiz()
            함수를 호출합니다.
            <br />
            <br />
            퀴즈 데이터 렌더링 loadQuiz() 함수는 현재 퀴즈 질문의
            인덱스(questionIndex)를 받아 해당 퀴즈 데이터를 quiz 변수에
            저장합니다. renderQuiz() 함수를 호출하여 화면에 퀴즈를 렌더링합니다.
            이 함수는 퀴즈 질문과 선택지를 HTML 형식으로 변환하고 이를 문서에
            삽입합니다.
            <br />
            <br />
            선택지 랜덤화 renderOptions() 함수는 퀴즈의 정답과 오답 선택지를
            랜덤하게 섞은 후 HTML 형식으로 변환합니다.
          </p>
          <h3>👉 아이디 검사 (JavaScript)</h3>
          <Highlight className="javascript">
            {`
function idChecking(){
  let youId = $("#youId").val();

  if(youId == null || youId ==''){
      $("#youIdComment").text("**아이디를 입력해주세요!");
  } else {
      let getYouId = RegExp(/^[a-zA-Z0-9_-]{4,20}$/);

      if(!getYouId.test($("#youId").val())){
          $("#youIdComment").text("아이디는 영어와 숫자를 포함하여 4~20글자 이내로 작성성이 가능합니다.");
          $("#youId").val('');
          $("#youId").focus();
          return false;
      } else {
          $("#youIdComment").text("사용 가능한 아이디입니다.");
      }
      // AJAX 요청
      $.ajax({
          type : "POST",
          url : "joinCheck.php",
          data : {"youId" : youId, "type" : "isIdCheck"},
          dataType : "json",
          success : function (data){
              if(data.result == "good"){
                  $("#youIdComment").text("사용 가능한 아이디 입니다.");
                  isIdCheck = true;
              } else {
                  $("#youIdComment").text("이미 존재하는 아이디 입니다.");
                  isIdCheck = false;
              }
          }
      })
}}`}
          </Highlight>
          <p>
            아이디 입력 필드에 대한 유효성 검사를 수행합니다. 정규식을 사용하여
            아이디의 형식을 확인하고, 빈 값이거나 조건을 충족하지 않을 경우 오류
            메시지를 출력합니다.
          </p>
          <h3>👉 Daum 주소 API 연동 (JavaScript)</h3>
          <Highlight className="javascript">
            {`
function searchBtnClick() {
  new daum.Postcode({
      theme: themeObj,
      oncomplete: function (data) {
          // 주소 처리 로직
          let addr = '';
          if (data.userSelectedType === 'R') {
              addr = data.roadAddress;
          } else {
              addr = data.jibunAddress;
          }
          document.querySelector('#youAddress1').value = data.zonecode;
          document.querySelector("#youAddress2").value = addr;
          document.querySelector("#youAddress3").focus();
          layer.style.display = 'none';
      },
      width: '100%',
      height: '100%',
      maxSuggestItems: 5
  }).embed(layer);
  layer.style.display = 'block';
  initLayerPosition();
}`}
          </Highlight>
          <p>
            Daum 주소 API: 사용자가 주소 검색 버튼을 클릭하면 Daum 주소 API를
            통해 주소 검색 창을 띄웁니다. 사용자가 주소를 선택하면 해당 주소
            정보를 입력 필드에 자동으로 채워줍니다.
          </p>
          <h3>👉 PHP 데이터베이스 통신 (PHP)</h3>
          <Highlight className="javascript">
            {`
// joinCheck.php
<?php
    include 'db.php'; // DB 연결 스크립트 포함

    $youId = $_POST['youId'];

    // 아이디 중복 체크 쿼리
    $sql = "SELECT * FROM members WHERE memberId = '{$youId}'";
    $result = $dbConnect->query($sql);

    if($result->num_rows == 0) {
        echo json_encode(array("result" => "good"));
    } else {
        echo json_encode(array("result" => "bad"));
    }
?>`}
          </Highlight>
          <p>
            사용자가 입력한 아이디가 이미 데이터베이스에 존재하는지 확인하는
            AJAX 요청을 joinCheck.php에 보냅니다. PHP 스크립트는 데이터베이스를
            조회하여 해당 아이디의 사용 가능 여부를 반환합니다.
          </p>
          <div className="Link">
            <Link
              to="http://audgns722.dothome.co.kr/teamplemain/firstmain.php"
              className="view"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/audgns722/recycle-project"
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

export default Section5Popup;
