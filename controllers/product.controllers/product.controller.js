const logger = require('../../configs/pino.config');
const product = require('../../services/product.services/product.service');

const productView = async (req, res) => {
  res.render('pages/particularProductView');
}

const getProductInfo = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await product.getProductDetails(id);
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.status(500).send({ statsu: "Internal server err", msg: "You have an Error" })
  }
}


module.exports = { getProductInfo, productView }

