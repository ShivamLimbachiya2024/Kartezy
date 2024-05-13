const { request, response } = require("express");

const isAddPaymentDetailCorrect = (request, response, next) => {
  let isValid = true;
  const payment = request.body.paymentId;
  const address = request.body.addressId;
  if (!address) {
    isValid = false
  }
  if (!payment) {
    isValid = false
  }
  if (isValid) {
    next()
  } else {
    response.status(400).send({
      status: 400,
      msg: 'Inserted inputs are not valid!'
    })
  }
}
const isAddressValid = (request, response, next) => {
  let isValid = true;

  const addressReg = /^[a-zA-Z0-9][a-zA-Z0-9\s,'-]*$/;
  const houseNoReg = /^[A-Za-z0-9]+(?:[\s-]?)[A-Za-z0-9]*$/;
  const landmarkReg = /^[a-zA-Z0-9]+[a-zA-Z0-9\s,.-]*$/
  const areaReg = /^[a-zA-Z]+[a-zA-Z\s,]*$/;
  const cityStateReg = /^[a-zA-Z]+[A-Za-z\s]*$/;
  const zipCodereg = /^\d{6}$/;

  const house = request.body.house
  const landmark = request.body.landmark
  const address = request.body.address
  const area = request.body.area
  const city = request.body.city
  const state = request.body.state
  const zip = request.body.pincode

  if (!houseNoReg.test(house)) {
    isValid = false
  }
  if (!landmarkReg.test(landmark)) {
    isValid = false
  }
  if (!addressReg.test(address)) {
    isValid = false
  }
  if (!areaReg.test(area)) {
    isValid = false
  }
  if (!areaReg.test(city)) {
    isValid = false
  }
  if (!cityStateReg.test(state)) {
    isValid = false
  }
  if (!zipCodereg.test(zip)) {
    isValid = false
  }
  if (isValid) {
    next()
  } else {
    response.status(400).send({
      status: 400,
      msg: 'Inserted inputs are not valid!'
    })
  }
}
const isPaymentValid = (request, response,next) => {
  let isValid = true;
  const cardHolderNameReg = /^[a-zA-Z]+[a-zA-Z\s]*\.?$/
  const cardNumberReg = /^\d{4}-\d{4}-\d{4}-\d{4}$/
  const cardExpReg = /^(0[1-9]|1[0-2])\/\d{2}$/
  const cardCVVReg = /^\d{3}$/

  const cardHolderName = request.body.card_holder_name
  const cardNumber = request.body.card_number
  const expiry = request.body.expiry
  const cvv = request.body.cvv
  const cardType = request.body.card_type

  if (!cardHolderNameReg.test(cardHolderName)) {
    isValid = false
  }
  if (!cardNumberReg.test(cardNumber)) {
    isValid = false
  }
  if (!cardExpReg.test(expiry)) {
    isValid = false
  }
  if (!cardCVVReg.test(cvv)) {
    isValid = false
  }
  if (!cardType) {
    isValid = false
  }
  if (isValid) {
    next()
  } else {
    response.status(400).send({
      status: 400,
      msg: 'Inserted inputs are not valid!'
    })
  }
}
module.exports = { isAddressValid, isPaymentValid, isAddPaymentDetailCorrect }