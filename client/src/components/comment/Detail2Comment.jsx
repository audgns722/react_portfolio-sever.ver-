import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const Detail2Comment = () => {
    const [author, setAuthor] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");
    const [deletePasswords, setDeletePasswords] = useState({});
    const [commentList, setCommentList] = useState([]);

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
                fetchComments();
            } else {
                alert("댓글 작성이 실패하였습니다.");
            }
        });
    };

    // 댓글 가져오기

    const fetchComments = () => {
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
    };
    useEffect(() => {
        fetchComments();
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
                        fetchComments();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert("댓글 삭제가 실패했습니다.");
                });
        }
    };
    return (
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
        </div>
    )
}

export default Detail2Comment