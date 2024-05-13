const User = require("../../helpers/user.helper")

const forgetPasswordGet = (request, response) => {
    response.render("pages/authentication/forgetPassword.view.ejs")
}

const forgetPasswordPost = async(request, response) => {
    const user = new User();
    const result = await user.forgetPassword(request.body.userName);
    const responseStatus = result.flag == true ? 200 : 500;
    response.status(responseStatus).send(result);
}

module.exports = {
    forgetPasswordGet,
    forgetPasswordPost,
}