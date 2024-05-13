const jwt = require("jsonwebtoken");
const User = require("../../helpers/user.helper")
const jwtStrategy = require("passport-jwt").Strategy;
const passport = require("passport");
const database = require("../../helpers/database.helper");
const logger = require("../../configs/pino.config");

const loginGet = async(request, response) => {
    response.render("pages/authentication/login.view.ejs")
}

const loginPost = async (request, response) => {
    const user = new User();
    let result = await user.isLoginUSer(request.body.userName, request.body.password);
    if (result.flag == true) {
        let token = jwt.sign({ userId: result.userId }, process.env.SCREAT_KEY, { expiresIn: process.env.LOGIN_EXPIRE_TIME * 60 * 60 });
        response.cookie("token", token, { maxAge: process.env.LOGIN_EXPIRE_TIME * 60 * 60 });
        let url = "";
        if (result.roleName == process.env.ROLE_VENDOR) {
            url = "/kartezy/vendorAdmin/dashboard"
        }
        else if (result.roleName == process.env.ROLE_ADMIN) {
            url = "/kartezy/admin"
        }
        else if (result.roleName == process.env.ROLE_LOGISTIC) {
            url = "/kartezy/logistic/dashboard"
        }
        else {
            url = "/kartezy"
        }
        response.status(200).send({
            flag: true,
            message: result.message,
            url: url
        })
    }
    else {
        response.status(500).send(result);
    }
}

module.exports = {
    loginGet,
    loginPost,
}