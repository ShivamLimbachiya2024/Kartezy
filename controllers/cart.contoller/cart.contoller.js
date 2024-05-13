const cartServices = require('../../services/cart.service/cart.service')
const logger = require('../../configs/pino.config')
const renderCartPage = async (req, res) => {
  res.render('pages/userCartPage')
}
const fillUserCartData = async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await cartServices.getUserCart(userId)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
const updateUserCartData = async (req, res) => {
  const jsonObj = req.body;
  const userId = req.user.id;
  try {
    const userCartId = await cartServices.getUserCartId(userId)
    jsonObj['cart_id'] = userCartId[0].id;
    const result = await cartServices.updateUserCart(jsonObj)
    const resTotal = await cartServices.updateTotalCartPrize(userId, userCartId[0].id)
    res.status(200).send(resTotal)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
const insertUserCartData = async (req, res) => {
  const userId = req.user.id;
  const productId = req.body.productId; // from req body
  const qty = Number(req.body.qty) ; // from Req Body
  try {
    const userCartResult = await cartServices.getUserCartId(userId);
    const productPrice = await cartServices.getProductPrice(productId);

    if (userCartResult.length === 0) {
      const userCartId = await cartServices.insertUserCart(userId)
      await cartServices.insertCartProducts(userCartId, productId, productPrice, qty)
      await cartServices.updateTotalCartPrize(userId, userCartId)
    } else {
      const cartProductResult = await cartServices.getCartProduct(userCartResult[0].id, productId)
      if (cartProductResult === 0) {
        await cartServices.insertCartProducts(userCartResult[0].id, productId, productPrice, qty)
        await cartServices.updateTotalCartPrize(userId, userCartResult[0].id)
      } else {
        const updateQtyResult = await cartServices.getUserProductCartObj(userCartResult[0].id, productId);
        const jsonObj = {}
        jsonObj['qty'] = updateQtyResult['qty'] + qty;
        jsonObj['price'] = productPrice * jsonObj['qty']
        jsonObj['cart_id'] = userCartResult[0].id
        jsonObj['product_id'] = productId;
        await cartServices.updateUserCart(jsonObj)
        await cartServices.updateTotalCartPrize(userId, userCartResult[0].id)
      }

    }
    res.status(200).send({
      status: "Succces", msg: "Product Added!"
    })
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
module.exports = { renderCartPage
  , insertUserCartData
   ,fillUserCartData, updateUserCartData }