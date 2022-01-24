"use strict"; // javascript 생성 할때 use strict 작성 해줘야 한다.

const home = (req, res) => {
    res.render("home/index");
};
const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
};