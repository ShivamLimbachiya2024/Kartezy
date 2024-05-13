const logger = require('../../configs/pino.config')
const logisticDashServices = require('../../services/logistics.services/logistics.services')
exports.logisticsDashRender = (req, res) => {
  res.render('pages/logistics/dashboard.ejs')
}
exports.logisticsDashCardfetch = async (req, res) => {
  const logisticId = req.user.id;
  try {
    const dashCardResult = await logisticDashServices.cardResultFetch(logisticId);
    res.status(200).send(dashCardResult)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request!"
    })
  }
}
exports.dashOrderfetch = async (req, res) => {
  const logisticId = req.user.id;
  try {
    const dashOrderResult = await logisticDashServices.orderByCityResultFetch(logisticId);
    res.status(200).send(dashOrderResult)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request!"
    })
  }
}
exports.dashOrderByMonthfetch = async (req, res) => {
  const logisticId = req.user.id;
  try {
    const dashOrderResult = await logisticDashServices.orderByMonthResultFetch(logisticId);
    res.status(200).send(dashOrderResult)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request!"
    })
  }
}