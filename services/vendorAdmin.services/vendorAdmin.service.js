const database = require("../../helpers/database.helper");
const db = new database();

// Fetch All Products For one Vendor
const products = async (vendorId)=>{
  try{
    const query = "SELECT p.id,p.product_name,p.product_description,cate.category_name,p.price,p.quanitiy,p.main_image_path,p.is_active FROM products as p join categories as cate on p.category_id = cate.id where p.is_delete=0 and p.vender_id = ?"
    let result = await db.executeQuery(query, [vendorId]);
    return result;
  } catch(error){
    throw error;
  }
}

// Fetch specific orders For one Vendor
const specificOrders = async (vendorId,status)=>{
  try{
    const query = "select distinct orders.id as order_id,orders.total_price as total_price, orders.create_at as ordered_date,orders.status as order_status,products.vender_id from orders inner join order_items on orders.id=order_items.order_id inner join products on order_items.product_id=products.id where vender_id=? and status= ?"
    let result = await db.executeQuery(query, [vendorId,status]);
    return result;
  } catch(error){
    throw error;
  }
}

// const allOrders = async (vendorId)=>{
//   try{
//     const query = "SELECT id,shipping_cost,total_price,create_at as order_date, deliver_date,status FROM orders where is_delete=0 and user_id = ?"
//     let result = await db.executeQuery(query, [vendorId]);
//     return result;
//   } catch(error){
//     throw error;
//   }
// }

module.exports = {products,specificOrders}