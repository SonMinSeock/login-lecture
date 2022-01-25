"use strict"; // javascript 생성 할때 use strict 작성 해줘야 한다.

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

// 외부파일에 라우터를 사용 할 수있도록 해준다.
module.exports = router; // 외부로 내보내주는 명령