"use strict";

const id = document.querySelector("#id"); // querySelector() : 질의 선택자 (선택자를 통해 제어 하고자 한다.)
const password = document.querySelector("#password"); // querySelector() : 질의 선택자 (선택자를 통해 제어 하고자 한다.)
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    // 로그인버튼 클릭할때 id, password 값을 기지고 와야한다.
    const req = {
        id: id.value,
        password: password.value,
    };
    console.log(req);
}