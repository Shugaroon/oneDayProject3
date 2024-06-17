const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL 연결 설정
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dbzlxoddl1",
  database: "teamkokdb",
});

db.connect(err => {
  if (err) {
    console.error("MySQL 연결 에러: ", err);
    return;
  }
  console.log("MySQL 연결 성공");
});

// 회원가입 엔드포인트
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error("회원가입 에러: ", err);
      return res.status(500).send("서버 에러");
    }
    res.status(201).send("회원가입 성공");
  });
});

// 로그인 엔드포인트
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("로그인 에러: ", err);
      return res.status(500).send("서버 에러");
    }
    if (results.length > 0) {
      res.status(200).send("로그인 성공");
    } else {
      res.status(401).send("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  });
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
