import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section2Detail = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const imgRef = useRef(null);

  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [deletePasswords, setDeletePasswords] = useState({});
  const [commentList, setCommentList] = useState([]);
  const navigate = useNavigate();

  const handleClose = () => {
    gsap.to("#Detail2", {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        navigate(-1); // 이전 페이지로 돌아감
      },
    });
  };

  useEffect(() => {
    // 페이지 로드 시 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    // 여기에 다른 초기화 로직 추가
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".left__box",
      {
        width: "504px",
      },
      {
        width: "40%",
        ease: "power1.in",
        delay: 1,
      }
    );
    gsap.to(imgRef.current, {
      left: 0,
      xPercent: 0,
      ease: "power1.in",
      delay: 0,
    });
    gsap.to("#Detail2 .text1", {
      left: 0,
      xPercent: 0,
    });
    gsap.to("#Detail2 .text2", {
      right: 0,
      translateX: 0,
    });
    gsap.to("#Detail2 .right__box", {
      display: "block",
      width: "60%",
      delay: 1,
      duration: 1,
      onComplete: () => {
        gsap.to(".detail__wrap", {
          display: "block",
          opacity: 1,
          duration: 1,
        });
      },
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (author === "" || password === "" || content === "") {
      return alert("내용을 채워주세요");
    }

    let body = {
      author: author,
      password: password,
      content: content,
    };

    axios.post("/api/comment", body).then((response) => {
      if (response.data.success) {
        alert("댓글 작성이 완료되었습니다.");
        window.location.reload();
      } else {
        alert("댓글 작성이 실패하였습니다.");
      }
    });
  };
  useEffect(() => {
    axios
      .post("/api/list")
      .then((response) => {
        if (response.data.success) {
          setCommentList([...response.data.commentList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 비밀번호 입력 처리 함수
  const handlePasswordChange = (commentNum, password) => {
    setDeletePasswords({
      ...deletePasswords,
      [commentNum]: password,
    });
  };

  const DeleteHandler = (commentNum, password) => {
    if (window.confirm("정말로 삭제하기겠습니까?")) {
      let body = {
        commentNum: commentNum,
        password: password,
      };
      axios
        .post("/api/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("댓글이 삭제되었습니다.");
            setCommentList(
              commentList.filter((comment) => comment.commentNum !== commentNum)
            );
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
          alert("댓글 삭제가 실패했습니다.");
        });
    }
  };

  return (
    <div id="Detail2">
      <div className="contents2">
        <div className="left__box">
          <div className="comment__wrap">
            <div className="comment__result">
              {commentList.map((comment, key) => (
                <div className="comments" key={key}>
                  <div className="comments__top">
                    <p className="text">{comment.content}</p>
                    <p className="author">{comment.author}</p>
                  </div>
                  <div className="delete">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        DeleteHandler(
                          comment.commentNum,
                          deletePasswords[comment.commentNum]
                        );
                      }}
                    >
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={deletePasswords[comment.commentNum] || ""}
                        onChange={(e) =>
                          handlePasswordChange(
                            comment.commentNum,
                            e.target.value
                          )
                        }
                        autoComplete="off"
                      />
                      <button type="submit" className="delete__btn">
                        삭제하기
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
            <div className="comment__write">
              <form>
                <fieldset style={{ border: "none" }}>
                  <legend className="blind">댓글 영역</legend>
                  <div className="comment__top">
                    <input
                      type="text"
                      id="author"
                      name="author"
                      autoComplete="off"
                      required
                      value={author}
                      onChange={(e) => {
                        setAuthor(e.currentTarget.value);
                      }}
                      placeholder="닉네임"
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.currentTarget.value);
                      }}
                      placeholder="비밀번호"
                    />
                  </div>
                  <div className="comment__bottom">
                    <input
                      type="text"
                      name="comment"
                      id="comment"
                      autoComplete="off"
                      required
                      value={content}
                      onChange={(e) => {
                        setContent(e.currentTarget.value);
                      }}
                      placeholder="댓글을 입력하세요."
                    />
                  </div>
                  <button
                    className="comment__btn"
                    type="submit"
                    onClick={(e) => {
                      onSubmit(e);
                    }}
                  >
                    작성하기
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="imgWrap" ref={imgRef}>
            <div className="text1" ref={text1Ref}>
              youtube
            </div>
            <div className="text2" ref={text2Ref}>
              api site
            </div>
          </div>
        </div>
        <div className="right__box">
          <div className="close" onClick={handleClose}>
            X
          </div>
          <div className="detail__wrap">
            <div className="details">
              <h1>나만의 다큐 유튜브 사이트 만들기</h1>
              <p>
                이 프로젝트는 YouTube API를 활용하여 다큐멘터리 콘텐츠를
                중심으로 한 독특한 서비스를 제공하는 웹사이트를 구축하는 것이
                목표였습니다. 사용자들이 다양한 다큐멘터리를 쉽게 탐색하고
                감상할 수 있는 사이트를 개발했습니다.
              </p>
            </div>
            <div className="details">
              <h1>POINT!</h1>
              <p>
                React Router, Axios, React Player 등 다양한 라이브러리를 통한
                기능적인 웹사이트 구축.
                <br />
                React Helmet Async: SEO 최적화와 동적 head 관리를 위한 구현.
                <br />
                Swiper: 터치 슬라이드 기능을 통해 사용자 인터페이스 개선.
              </p>
            </div>
            <div className="details">
              <h1>STACK!</h1>
              <p>
                Front-end: React, HTML5, JavaScript, CSS3
                <br />
                라이브러리: react-router-dom, axios, react-icons, react-player,
                sass, react-helmet-async, swiper
              </p>
            </div>
            <div className="details">
              <h1>TROUBLESHOOTING</h1>
              <div className="code"></div>
            </div>
            <div className="details">
              <h1>나만의 다큐 유튜브 사이트 만들기</h1>
              <p>
                이 프로젝트는 YouTube API를 활용하여 다큐멘터리 콘텐츠를
                중심으로 한 독특한 서비스를 제공하는 웹사이트를 구축하는 것이
                목표였습니다. 사용자들이 다양한 다큐멘터리를 쉽게 탐색하고
                감상할 수 있는 사이트를 개발했습니다.
              </p>
            </div>
            <div className="details">
              <h1>POINT!</h1>
              <p>
                React Router, Axios, React Player 등 다양한 라이브러리를 통한
                기능적인 웹사이트 구축.
                <br />
                React Helmet Async: SEO 최적화와 동적 head 관리를 위한 구현.
                <br />
                Swiper: 터치 슬라이드 기능을 통해 사용자 인터페이스 개선.
              </p>
            </div>
            <div className="details">
              <h1>STACK!</h1>
              <p>
                Front-end: React, HTML5, JavaScript, CSS3
                <br />
                라이브러리: react-router-dom, axios, react-icons, react-player,
                sass, react-helmet-async, swiper
              </p>
            </div>
            <div className="details">
              <h1>TROUBLESHOOTING</h1>
              <div className="code"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2Detail;
