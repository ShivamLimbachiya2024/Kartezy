const User = require("../../helpers/user.helper")

const updateUser = async(request, response) => {
  const user = new User();
  let result = await user.updateUser(request.user, request.body);
  response.status(result.flag==false?500:200).send(result)
} 

module.exports = updateUser