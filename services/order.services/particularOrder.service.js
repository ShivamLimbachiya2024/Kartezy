const logger = require("../../configs/pino.config");
const database = require("../../helpers/database.helper");

const getParticularOrder = async(orderId, userId) =>{
  const db = new database();
  try{
    let order = {};

    let query = `select 
    orders.id as order_id,
    concat(users.first_name, " ", users.last_name) as 'customer_name',
    mobile_no,
    concat(titel, ', ', house_no, ', ', land_mark, ', ', area, ', ', city, ', ', state, ' - ', pincode, '.') as address,
    orders.create_at,
    deliver_date,
    order_note,
    shipping_cost,
    orders.status as status,
    total_price
    from 
    orders left join users on orders.user_id = users.id
    left join customer_addresses on orders.address_id = customer_addresses.id
    where orders.id = ? and orders.user_id = ? and orders.is_delete = 0;`
    let result = await db.executeQuery(query, [orderId, userId]);

    if(Array.isArray(result) && result.length > 0){
      order.information = result[0];

      query = `select products.product_name, qty, order_items.price, total_price from order_items left join products on order_items.product_id = products.id where order_id = ?`;
      let result1 = await db.executeQuery(query, [result[0].order_id]);
      order.items = result1;

      query = `select * from order_status where order_id = ?;`
      result1 = await db.executeQuery(query, [result[0].order_id]);
      order.statuses = result1;
      return {
        flag: true,
        message: order,
      }
    }
    return {
      flag: false,
      message: "Order is not found..."
    }
  }
  catch(error){
    logger.error(error);
    return{
      flag: false,
      message: "Somethig is wrong..."
    }
  }
};

module.exports = { getParticularOrder };