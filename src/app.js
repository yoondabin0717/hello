const express = require("express");
// 대입연산자 = : 우항의 결과물을 좌항에 대입하세요. (requore("express");는 우항, const express 좌항).

const app = express();
app.set("view engine", "pug");

//req : 사용자의 요청
//res : 서버의 응답
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/page01", (req, res) => {
  res.render("page01");
});

app.get("/page02", (req, res) => {
  res.render("page02");
});

app.get("/page03", (req, res) => {
  res.render("page03");
});

app.get("/page04", (req, res) => {
  res.render("page04");
});

app.listen(3333, () => {
  console.log("3333 PORT WEB SERVER STRT");
});
