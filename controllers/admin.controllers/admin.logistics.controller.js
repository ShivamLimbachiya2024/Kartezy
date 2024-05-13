const User = require("../../helpers/user.helper");

const displayLogisticsPanel = (request, response) => {
  response.render("pages/admin/adminlogistic")
}

const addLogistic = async(request, response) => {
  const data = request.body;
  const user = new User();
  let result=await user.insertUser(process.env.ROLE_LOGISTIC, data);
  if(result.flag == true){
    response.status(200).send(result);
  }
  else{
    response.status(500).send(result);
  }
}

module.exports = {
  displayLogisticsPanel,
  addLogistic
}