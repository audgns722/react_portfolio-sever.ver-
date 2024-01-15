import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";

const Comment = () => {
  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [deletePasswords, setDeletePasswords] = useState({});
  const [content, setContent] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [modalIndex, setModalIndex] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // 현재 수정 중인 댓글의 인덱스
  const [editingContent, setEditingContent] = useState(""); // 수정 중인 댓글의 내용
  const passwordRef = useRef();
  const ref = useRef();
  useOnClickOutside(ref, () => setModalFlag(false));

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }


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

        // 새로 작성된 댓글 생성 (응답 데이터 또는 직접 생성)
        const newComment = {
          author: author,
          content: content,
          createdAt: new Date(),
          commentNum: response.data.commentNum || Date.now(),
        };

        // 새 댓글을 commentList에 추가
        setCommentList([newComment, ...commentList]);

        // 입력 필드 초기화
        setAuthor("");
        setPassword("");
        setContent("");
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
  }, [commentList]);

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
          }
        })
        .catch((err) => {
          console.log(err);
          alert("비밀번호를 입력해주세요.");
        });
    }
  };

  // 수정하기 클릭 이벤트 핸들러
  const handleEditClick = (comment, index) => {
    const commentNum = comment.commentNum;
    const enteredPassword = passwordRef.current.value;

    if (!enteredPassword) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    // 서버에 비밀번호 확인 요청
    axios.post("/api/verifyPassword", {
      commentNum: commentNum,
      password: enteredPassword,
    }).then(response => {
      if (response.data.success) {
        // 비밀번호가 맞으면 수정 모드로 진입
        setEditingIndex(index);
        setEditingContent(comment.content);
        setModalFlag(false);
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    }).catch(err => {
      console.error(err);
      alert("비밀번호 확인 중 오류가 발생했습니다.");
    });
  };

  // 댓글 수정로직
  const handleSaveEdit = (commentNum) => {
    axios.post("/api/updateComment", {
      commentNum: commentNum,
      newContent: editingContent,
      // 필요하다면 여기에 비밀번호도 포함시킬 수 있습니다.
    })
      .then(response => {
        if (response.data.success) {
          alert("댓글이 수정되었습니다.");
          // 댓글 목록 업데이트
          const updatedComments = commentList.map(comment =>
            comment.commentNum === commentNum
              ? { ...comment, content: editingContent }
              : comment
          );
          setCommentList(updatedComments);
          // 수정 모드 종료
          setEditingIndex(null);
          setEditingContent("");
        } else {
          alert("댓글 수정에 실패했습니다.");
        }
      })
      .catch(err => {
        console.error(err);
        alert("댓글 수정 중 오류가 발생했습니다.");
      });
  };


  // 수정 취소
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingContent("");
  };

  return (
    <div id="commentsection">
      <h4>comment</h4>
      <div className="comment__wrap">
        {commentList.map((comment, index) => (
          <div className="comments" key={index}>
            {editingIndex === index ? (
              <>
                <textarea
                  data-lenis-prevent-wheel
                  type="text"
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                />
                <button className="delete__btn" onClick={() => handleSaveEdit(comment.commentNum)}>확인</button>
                <button className="delete__btn" onClick={handleCancelEdit}>취소</button>
              </>
            ) : (
              <>
                <p className="text">{comment.content}</p>
                <div className="info">
                  <span>{comment.author}</span>
                  <span>{moment(comment.createdAt).format("YYYY-MM-DD")}</span>
                  <span className="edit" onClick={() => { setModalFlag(true); setModalIndex(index); }}>···</span>
                  {modalIndex === index && modalFlag && (
                    <div className='modal' ref={ref}>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          DeleteHandler(comment.commentNum, passwordRef.current.value);
                        }}
                      >
                        <input
                          ref={passwordRef}
                          type="password"
                          name="password"
                          placeholder="4자리의 비밀번호"
                          maxLength={4}
                          autoComplete="off"
                        />
                        <span onClick={() => handleEditClick(comment, index)}>수정하기</span>
                        <button type="submit" className="delete__btn">
                          삭제하기
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
        <div className="comments">
          <form>
            <fieldset style={{ border: "none" }}>
              <legend className="blind">댓글 영역</legend>
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
                placeholder="닉네임을 입력해주세요"
              />
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                required
                maxLength={4}
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                placeholder="비밀번호는 최대4자리입니다."
              />
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
                placeholder="Please comment here!"
              />
              <button
                className="edit__btn"
                type="submit"
                onClick={(e) => {
                  onSubmit(e);
                }}
              >
                등록하기
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div >
  );
};

export default Comment;
