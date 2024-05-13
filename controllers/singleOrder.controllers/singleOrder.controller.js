const singleOrderService = require('../../services/singleProduct.services/singleProduct.services')
const logger = require('../../configs/pino.config')
const addNotification = require('../../services/notification.service')
const Database = require('../../helpers/database.helper')
const db = new Database()
const submitOrder = async (req, res) => {
  const userId = req.user.id;
  try {
    const qtyResult = await singleOrderService.fetchProductQty(req.body.productId);
    if (!qtyResult) {
      res.status(500).send({
        status: "Internal Server Error", msg: "Product is not available!"
      })
    } else if (qtyResult.quanitiy < req.body.qty) {
      res.status(500).send({
        status: "Internal Server Error", msg: "Requested quantity is out of stock!"
      })
    } else {
      const productPrice = await singleOrderService.fetchProductPrice(req.body.productId);
      const paymentType = await singleOrderService.fetchTypeOfPay(req.body.paymentId);
      const totalPrice = productPrice * (req.body.qty)
      let orderNote;
      if (req.body.orderNote) {
        orderNote = req.body.orderNote
      } else {
        orderNote = 'NONE'
      }
      const shippingCost = 90
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 7);
      let deliDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');

      const orderObj = {
        user_id: userId,
        address_id: req.body.addressId,
        order_note: orderNote,
        shipping_cost: shippingCost,
        total_price: totalPrice,
        deliver_date: deliDate,
        status: 'pending'
      }
      const orderInsertedId = await singleOrderService.singleOrderInsert(orderObj)
      const orderItemsObj = {
        order_id: orderInsertedId,
        product_id: req.body.productId,
        qty: req.body.qty,
        price: productPrice,
        total_price: totalPrice
      }
      const orderTransObj = {
        payment_id: req.body.paymentId,
        order_id: orderInsertedId,
        type_of_transection: paymentType,
        mode_of_transection: 'Online',
        status: 1
      }
      await singleOrderService.singleOrderProductsInsert(orderItemsObj)
      await singleOrderService.singleOrderTransectionInsert(orderTransObj)
      await singleOrderService.singleUpdateInventryQty(req.body.qty, req.body.productId)
      await addNotification(userId, 'Order', `Your order placed with order Id :#${orderInsertedId} !`)
      await db.insertData('order_status', { order_id: orderInsertedId, status: 'pending' })
      res.status(200).send({
        orderId: orderInsertedId ,status: "Succces", msg: "Order placed successfully!"
      })
    }
  } catch (error) {
    logger.error(error)
    try {
      await addNotification(userId, 'Order', `Your order is not placed !`)
    } catch (error) {
      logger.error(error)
    }
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}

module.exports = { submitOrder }