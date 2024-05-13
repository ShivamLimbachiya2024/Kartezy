const { getOrderHistory } = require("../../services/order.services/orderHistory.service");
const { getParticularOrder } = require("../../services/order.services/particularOrder.service");

const ordersPageRender = (request, response) =>{
  response.render('pages/orderhistory/userOrdersHistory.component.ejs');
}

const OrderHistoryGet = async (request, response) =>{
  let result = await getOrderHistory(request.user.id);
  response.status(result.flag == false?500:200).send(result);
}

const orderPageRender = async(request, response) => {
  response.render("pages/orderhistory/userOrderDetail.component.ejs");
}

const getOneOrder = async(request, response) => {
  let result = await getParticularOrder(request.params.orderId, request.user.id);
  response.status(result.flag == false?500:200).send(result);
}

module.exports = {  ordersPageRender, OrderHistoryGet, getOneOrder, orderPageRender} 