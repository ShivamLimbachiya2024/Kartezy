const logger = require("../../configs/pino.config");
const database = require("../../helpers/database.helper");

const getOrderHistory = async(userid) => {
  const sql = `
  select 
  orders.id as order_id,
  concat(users.first_name, " ", users.last_name) as 'customer_name',
  mobile_no,
  concat(titel, ', ', house_no, ', ', land_mark, ', ', area, ', ', city, ', ', state, ' - ', pincode, '.') as address,
  deliver_date,
  orders.status as status,
  total_price
  from 
  orders left join users on orders.user_id = users.id
  left join customer_addresses on orders.address_id = customer_addresses.id
  where orders.user_id = ? and orders.is_delete = 0;
  `
  try {
    const db = new database();
    const result = await db.executeQuery(sql, [userid])
    if(Array.isArray(result) && result.length >= 0){
      return {
        flag: true,
        message: result
      }
    }
    return {
      flag: false,
      message: "Order is not found"
    }
  } catch (error) {
    logger.error(error);
    return {
      flag: false,
      message: "Somethig is wrong"
    }
  }
};

module.exports = { getOrderHistory}