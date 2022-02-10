"use strict"; // javascript 생성 할때 use strict 작성 해줘야 한다.

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");  // 라우터 경로를 home변수에 선언. 

// 앱 셋팅
app.set("views", "./src/views"); // 화면 view를 관리해줄 파일 저장될 파일 이름을 두번째 인자로 넘겨주면 된다.
// html 코드들을 어떤 엔진으로 해석할지를 정해줄수 있다.
app.set("view engine", "ejs");

// 라우터 index.js에 던진 것을 받아야 한다. app.use() 사용한다.
// app.use()는 미들웨어 등록 해주는 것이다. 

app.use(express.static(`${__dirname}/src/public`)); // 정적 경로로 추가
app.use("/", home); // "/"경로 오면 home경로에 index.js로 이동해준다.
module.exports = app;