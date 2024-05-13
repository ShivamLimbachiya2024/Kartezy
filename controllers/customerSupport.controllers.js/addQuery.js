const CustomerSupport = require("../../helpers/CustomerSupport")

const addQuery = async(request, response) =>{
  const customerSupport = new CustomerSupport();
  const result = await customerSupport.addquery(request.body, request.files);
  response.status(result.flag==false?500:200).send(result);
}

module.exports = addQuery;