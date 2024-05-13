const CustomerSupport = require("../../helpers/CustomerSupport");

const removeAnswerQuery = async(request, response) =>{
  const customerSupport = new CustomerSupport();
  const result = await customerSupport.removeQuery(request.body.id);
  response.status(result.flag==false?500:200).send(result);
}

module.exports = removeAnswerQuery