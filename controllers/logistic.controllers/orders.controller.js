const logger = require('../../configs/pino.config');
const database = require("../../helpers/database.helper");
const db = new database();

exports.logisticOrderRender = (req, res) => {
  res.render('pages/logistics/orders.ejs');
}

// pending order list
exports.ordersLists = async (req, res) => {
  try {
    const logisticId = req.user.id;
    let getAllOrders = 'SELECT log.id,ord.id as order_id,  CONCAT(addr.area,", ",addr.city,", ",addr.state) as address,ord.order_note,order_distict_status.status  FROM order_logistics as log join orders as ord on log.order_id = ord.id left join customer_addresses as addr on ord.address_id = addr.id left join (select os.order_id, os.status from order_status as os inner join (select order_id,max(create_at) as latest_ca from order_status group by order_id) as latest on os.order_id = latest.order_id and os.create_at = latest.latest_ca order by order_id) as order_distict_status on log.order_id = order_distict_status.order_id where logistics_id = ?';
    let orders = await db.executeQuery(getAllOrders, [logisticId]);
    
    return res.status(200).send(orders);
  } catch (err) {
    logger.error(err);
    res.status(500).send({ status: "Internal Server Error", msg: "An unexpected error occurred while processing your request" });
  }

}

// pending work of logistic order
exports.updateOrder = async (req, res) => {
  let orderId = req.body.orderId || 0;
  const logisticId = req.user.id;

  try {

    let checkOrderSql = 'SELECT id FROM order_logistics where order_id = ? AND logistics_id = ?';
    let checkOrder = await db.executeQuery(checkOrderSql, [orderId, logisticId]);

    if (checkOrder.length != 0) {
      let currentStatusSql = 'select status from order_status where order_id = ? order by create_at desc limit 1';
      let currentStatus =  await db.executeQuery(currentStatusSql, [orderId]);
      
      let newStatus;
      if(!currentStatus[0].status){
        return res.status(500).send({ status: "Not Found Status", msg: "An unexpected error occurred while processing your request" });
      }else if(currentStatus[0].status == 'shipped'){
        newStatus = 'intransit'
      }else if(currentStatus[0].status ==  'intransit'){
        newStatus = 'delivered'
      }else {
        newStatus = 'delivered'
      }

      // update order stutus in order table
      await db.updateData("orders",{status : newStatus},{id : orderId});

      // update delivery date on order table 
      if(newStatus == 'delivered'){
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');

        await db.updateData("orders",{
          deliver_date : `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
        },{id : orderId})
      }

      // insert in to order_status table
      await db.insertData("order_status",{
        order_id : orderId,
        status : newStatus
      })

      return res.status(200).send({status : "Request Successful" , msg : "Order Updated Successful"});

    } else {
      return res.status(500).send({ status: "Not Found", msg: "An unexpected error occurred while processing your request" });
    }

  } catch (err) {
    logger.error(err)
    return res.status(500).send({ status: "Internal Server Error", msg: "An unexpected error occurred while processing your request" });
  }

}

exports.getOrderDetails = async (req ,res) =>{
  let orderId = req.body.orderId || 0;
  try{
    let sql = `SELECT usr.id as user_id, usr.first_name,usr.last_name,usr.mobile_no,usr.email,odr.id as order_id,odr.order_note,odr.shipping_cost,cadd.house_no,odr.create_at as order_placed,cadd.land_mark,cadd.area,cadd.city,cadd.state,cadd.pincode,prd.product_name,prd.main_image_path,ctr.category_name,orditms.price, orditms.qty,orditms.total_price,odr.status,tran.type_of_transection,DATE_FORMAT(odr.deliver_date, " %Y-%m-%d")  as deliver_before
    FROM products as prd
    inner join categories as ctr on prd.category_id=ctr.id
    inner join order_items as orditms on orditms.product_id=prd.id
    inner join orders as odr on orditms.order_id=odr.id
    inner join transection as tran on tran.order_id=odr.id
    inner join customer_addresses as cadd on cadd.id=odr.address_id
    inner join users as usr on odr.user_id=usr.id
    where odr.id=?`
    const result = await db.executeQuery(sql, [orderId])

    const filteredResult = {
      user_id: result[0].user_id || 0,
      first_name: result[0].first_name,
      last_name: result[0].last_name,
      mobile_no: result[0].mobile_no,
      email: result[0].email,
      order_id: result[0].order_id,
      order_note: result[0].order_note,
      odr_status: result[0].status,
      shipping_cost: result[0].shipping_cost,
      order_placed: result[0].order_placed,
      house_no: result[0].house_no,
      land_mark: result[0].land_mark,
      area: result[0].area,
      city: result[0].city,
      state: result[0].state,
      pincode: result[0].pincode,
      type_of_transection: result[0].type_of_transection,
      deliver_before: result[0].deliver_before,
      Products: result.map((obj) => ({
        product_name: obj.product_name,
        main_image_path: obj.main_image_path,
        category_name: obj.category_name,
        price: obj.price,
        qty: obj.qty,
        total_price: obj.total_price
      }))
    }
    return res.status(200).send(filteredResult);

  }catch(err){
    logger.error(err);
    return res.status(500).send({ status: "Internal Server Error", msg: "An unexpected error occurred while processing your request" });
  }

}