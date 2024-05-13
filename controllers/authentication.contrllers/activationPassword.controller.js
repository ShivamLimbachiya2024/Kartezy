const User = require("../../helpers/user.helper")

const activationPasswordGet = (request, response) => {
    response.render("pages/authentication/password.view.ejs")
}

const activationPasswordPost = async(request, response) => {
    const user = new User();
    response.send(await user.activateUser(request.params.activationCode, request.body.newPassword))
}

module.exports = {
    activationPasswordGet,
    activationPasswordPost,
}