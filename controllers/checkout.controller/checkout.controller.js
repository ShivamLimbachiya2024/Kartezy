const checkoutService = require('../../services/checkout.service/checkout.service')
const logger = require('../../configs/pino.config')
const renderCheckoutPage = (req, res) => {
  res.render('pages/cartCheckout')
}
const renderSingleProductCheckoutPage = (req, res) => {
  res.render('pages/cartCheckout')
}
const renderAddressFrom = (req, res) => {
  res.render('pages/custAddressFrom')
}
const renderPaymentFrom = (req, res) => {
  res.render('pages/custPayment')
}
const getUserAddress = async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await checkoutService.fetchUserAddress(userId)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
const getSingleProductCheckoutDetail = async (req, res) => {
  const pid = req.params.pid;
  try {
    const result = await checkoutService.fetchSingleProduct(pid)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
const getUserPaymentsDetail = async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await checkoutService.fetchUserPayment(userId)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
const deleteUserCheckout = async (req, res) => {
  let jsonObj;
  if (!req.body.payId) {
    jsonObj = {
      addId: req.body.addId,
      tableName: 'customer_addresses'
    }
  } else {
    jsonObj = {
      addId: req.body.payId,
      tableName: 'customer_payment_detail'
    }
  }
  try {
    const result = await checkoutService.softDelUserCheckout(jsonObj)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
const submitAddFrom = async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await checkoutService.insertUserAddress(req.body,userId)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
const submitPaymentFrom = async(req, res) => {
  const userId = req.user.id;
  try {
    const result = await checkoutService.insertUserPayment(req.body,userId)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
module.exports = {
  renderCheckoutPage, submitPaymentFrom, getSingleProductCheckoutDetail, submitAddFrom, renderAddressFrom, renderSingleProductCheckoutPage,renderPaymentFrom, deleteUserCheckout, getUserAddress, getUserPaymentsDetail
}