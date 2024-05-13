const User = require("../../helpers/user.helper");

const registrationGet = (request, response) => {
  response.render("pages/authentication/registration.view.ejs");
}

const registrationPost = async(request, response) => {
  const data = request.body;
  const user = new User();
  let result=await user.insertUser(process.env.ROLE_USER, data);
  if(result.flag == true){
    response.status(200).send(result);
  }
  else{
    response.status(500).send(result);
  }
}

module.exports = {
  registrationGet,
  registrationPost
};