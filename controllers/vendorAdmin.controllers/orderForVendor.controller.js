const vendorOrdersService = require('../../services/vendorAdmin.services/vendorOrder.service')
const logger = require('../../configs/pino.config')
exports.renderOrderForVendor = (req, res) => {
  res.render("pages/vendorAdmin/ordersForVendor.ejs");
}
exports.displayOrders = async (req, res) => {
  const venderId = req.user.id;
  try {
    let orders = await vendorOrdersService.fetchAllOrders(venderId)
    res.status(200).send(orders);
  } catch (error) {
    logger.error(error);
    res.status(500).send({ status: "Internal Server Error", msg: "An unexpected error occurred while processing your request" });
  }
}
exports.displaySingleOrderDetail = async (req, res) => {
  const venderId = req.user.id;
  const orderId = req.body.orderId;
  try {
    let singleOrderDetail = await vendorOrdersService.fetchSingleOrders(venderId, orderId)
    res.status(200).send(singleOrderDetail);
  } catch (error) {
    logger.error(error);
    res.status(500).send({ status: "Internal Server Error", msg: "An unexpected error occurred while processing your request" });
  }
}
