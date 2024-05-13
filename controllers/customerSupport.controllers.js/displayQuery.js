const CustomerSupport = require("../../helpers/CustomerSupport")

const displayQuery = async(request, response) =>{
  const customerSupport = new CustomerSupport();
  let result;
  if(request.query.serach){
    result = await customerSupport.getQueries(request.query.serach);
  }
  else{
    result = await customerSupport.getQueries();
  }
  response.status(result.flag==false?500:200).send(result);
}

const updateAnswerPage = (request, response) => {
  response.render("pages/admin/customerQuery")
}

const displayQueryCustomer = (request, response) => {
  response.render("pages/displayQuery")
}

module.exports = {displayQuery, updateAnswerPage, displayQueryCustomer};