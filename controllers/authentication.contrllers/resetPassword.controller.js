const User = require("../../helpers/user.helper");

const resetPasswordGet = (request, response) =>{
 response.render("pages/authentication/resetpassword.view.ejs") 
}

const resetPasswordPost = async(request, response) =>{
  let user = new User();
  const result = await user.changePassword(request.user, request.body.oldPassword, request.body.newPassword)
  const responseStatus = result.flag == true ? 200 : 500;
  response.status(responseStatus).send(result);
}

module.exports = {
  resetPasswordGet,
  resetPasswordPost,
}