import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";

const Contact = () => {
  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [deletePasswords, setDeletePasswords] = useState({});
  const [content, setContent] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = commentList.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(commentList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} className={currentPage === number ? "active" : null}>
        <Link onClick={() => setCurrentPage(number)}>{number}</Link>
      </li>
    );
  });

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
      axios.post("/api/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("댓글이 삭제되었습니다.");
            setCommentList(commentList.filter((comment) => comment.commentNum !== commentNum));
          }
        })
        .catch((err) => {
          console.log(err);
          alert("댓글 삭제가 실패했습니다.");
        });
    }
  };

  return (
    <div id="contact">
      <div className="contact__me">
        <div className="title">Comment</div>
        <div className="comment__result">
          {currentItems.map((comment, index) => (
            <div className="comments" key={index}>
              <div className="left">
                <span>{index + 1}</span>
                <p className="text">{comment.content}</p>
              </div>
              <div className="right">
                <div className="right__wrap">
                  <p className="author">{comment.author}</p>
                  <div>{moment(comment.createdAt).format("YYYY-MM-DD")}</div>
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
                        handlePasswordChange(comment.commentNum, e.target.value)
                      }
                      autoComplete="off"
                    />
                    <button type="submit" className="delete__btn">
                      삭제하기
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ul className="page_numbers">{renderPageNumbers}</ul>
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
                placeholder="Write your name"
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
                placeholder="Write your password"
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
                placeholder="Please comment here!"
              />
              <button
                className="comment__btn"
                type="submit"
                onClick={(e) => {
                  onSubmit(e);
                }}
              >
                GO
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contact;
