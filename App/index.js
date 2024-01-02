const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5050;
const config = require("./server/config/key.js");

app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Comment } = require("./server/model/Comment.js");
const { Counter } = require("./server/model/Counter.js");

app.listen(port, () => {
  mongoose
    .connect(config.mongoURI)
    .then(() => {
      console.log("listening --> " + port);
      console.log("mongoose --> connecting");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// 글쓰기
app.post("/api/comment", (req, res) => {
  let temp = req.body;

  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.commentNum = counter.commentNum;

      const CommentWrite = new Comment(temp);

      CommentWrite.save().then(() => {
        //번호를 1씩 증가
        Counter.updateOne(
          { name: "counter" },
          { $inc: { commentNum: 1 } }
        ).then(() => {
          res.status(200).json({ success: true });
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

// 댓글 목록
app.post("/api/list", (req, res) => {
  Comment.find()
    .exec()
    .then((result) => {
      res.status(200).json({ success: true, commentList: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

// 댓글 삭제하기
app.post("/api/delete", (req, res) => {
  const { commentNum, password } = req.body;

  Comment.findOne({ commentNum })
    .then((comment) => {
      if (!comment) {
        return res
          .status(404)
          .json({ success: false, message: "댓글을 찾을 수 없습니다." });
      }

      // 비밀번호 비교
      if (comment.password === password) {
        // 삭제 처리
        Comment.deleteOne({ commentNum })
          .then(() => res.status(200).json({ success: true }))
          .catch((err) => res.status(400).json({ success: false }));
      } else {
        // 비밀번호 불일치
        res
          .status(401)
          .json({ success: false, message: "비밀번호가 일치하지 않습니다." });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ success: false });
    });
});
