const Database = require('../../helpers/database.helper')
const db = new Database()
exports.fetchAllOrders = async (vendorId) => {
  const sql = `
  select odr.id as order_id,count(pr.id) as distinct_products,sum(oditm.total_price) as total_price,cadd.city,odr.shipping_cost,DATE_FORMAT(odr.deliver_date, " %Y-%m-%d") as delivery_date,odr.status from orders as odr
inner join customer_addresses as cadd on odr.address_id=cadd.id
inner join order_items as oditm on odr.id=oditm.order_id
inner join products as pr on oditm.product_id=pr.id where pr.vender_id = ?
group by order_id
  `;
  try {
    const result = await db.executeQuery(sql, [vendorId])
    return result
  } catch (error) {
    throw error
  }

}
exports.fetchSingleOrders = async (vendorId, orderId) => {
  const sql = `
	SELECT usr.id as user_id, usr.first_name,usr.last_name,usr.mobile_no,usr.email,odr.id as order_id,odr.order_note,odr.shipping_cost,cadd.house_no,odr.create_at as order_placed,cadd.land_mark,cadd.area,cadd.city,cadd.state,cadd.pincode,prd.product_name,prd.main_image_path,ctr.category_name,orditms.price, orditms.qty,orditms.total_price,odr.status,tran.type_of_transection,DATE_FORMAT(odr.deliver_date, " %Y-%m-%d")  as deliver_before
	FROM products as prd
	inner join categories as ctr on prd.category_id=ctr.id
	inner join order_items as orditms on orditms.product_id=prd.id
	inner join orders as odr on orditms.order_id=odr.id
	inner join transection as tran on tran.order_id=odr.id
	inner join customer_addresses as cadd on cadd.id=odr.address_id
	inner join users as usr on odr.user_id=usr.id
	where prd.vender_id=? and odr.id=?;
  `;
  try {
    const result = await db.executeQuery(sql, [vendorId, orderId])
    if (result.length > 0) {
      const filteredResult = {
        user_id: result[0].user_id,
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
      return filteredResult
    }
    return result
  } catch (error) {
    throw error
  }

}