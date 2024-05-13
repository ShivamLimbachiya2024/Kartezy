const logger = require("../../configs/pino.config");
const database = require("../../helpers/database.helper");

const asignOrderLogistics = async(ordersId, logisticesId) => {
  const db = new database();
  let errorOrder = [];
  try{
    let pincodes = await db.executeQuery("select pincode from logistic_shipping where logistic_id = ?", [logisticesId])
    pincodes = pincodes.map(pincode => pincode.pincode)
    pincodes = `"${pincodes.join(`", "`)}"`

    for(let i=0; i<ordersId.length; i++){
      let orderId = ordersId[i];
      let result = await db.executeQuery(`select count(*) as isvalid from orders left join customer_addresses on orders.address_id = customer_addresses.id where pincode in (${pincodes}) and orders.id = ?`, [orderId]);
      
      if(result[0].isvalid){
        let result = await db.insertData("order_logistics", {order_id: orderId, logistics_id: logisticesId});
        if(result.affectedRows<0){
          errorOrder.push(orderId);
        }
        result = await db.insertData("order_status", {order_id: orderId, status:"shipped"})
        result = await db.updateData("orders", {status: "shipped"}, {id: orderId})
      }
      else{
        errorOrder.push(orderId)
      }
    }
    return {
      flag: true,
      message: errorOrder
    }
  }
  catch(error){
    logger.error(error);
    return {
      flag: false,
      message: "Something wong, Orders is not asigned..."
    }
  }
}

module.exports = asignOrderLogistics;