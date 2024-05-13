const logger = require("../../configs/pino.config");
const asignOrderLogistics = require("../../services/admin.services/asignOrder.service");

const assignNewOrder = async(request, response) => {
  try{
    const orderesId = JSON.parse(request.body.ordersId);
    const logisticId = request.body.logisticId;
    const result = await asignOrderLogistics(orderesId, logisticId);
    response.status(result.flag==false?500:200).send(result);
  }
  catch(error){
    logger.error(error);
    response.status(500).send({
      flag: false,
      message: "Something worong, orders is not valid...."
    })
  }
}

module.exports = assignNewOrder;