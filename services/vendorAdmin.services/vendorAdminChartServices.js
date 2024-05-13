const database = require("../../helpers/database.helper");
const db = new database();

const salesServices = async (vendorId,status)=>{
  try{
    const query = `
    select distinct orders.id as order_id,order_items.total_price as total_price, orders.create_at as ordered_date,orders.status as order_status,products.vender_id
    from orders
    inner join order_items
    on orders.id=order_items.order_id
    inner join products
    on  order_items.product_id=products.id where vender_id=? and status=?
    
    `
    let result = await db.executeQuery(query, [vendorId,status]);
    return result;
  } catch(error){
    throw error;
  }
}

module.exports={salesServices}