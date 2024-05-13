const DataBase = require('../../helpers/database.helper');
const db = new DataBase()
const fetchProductPrice = async (productId) => {
  const sql = `SELECT price FROM products where id=? and is_delete=0 and is_active=1;`
  try {
    const result = await db.executeQuery(sql, [productId])
    return result[0].price
  } catch (error) {
    throw error
  }
}
const fetchTypeOfPay = async (paymentId) => {
  const sql = `SELECT card_type FROM customer_payment_detail where id=?`
  try {
    const result = await db.executeQuery(sql, [paymentId])
    return result[0].card_type
  } catch (error) {
    throw error
  }
}
const fetchProductQty = async (pId) => {
  const sql = `SELECT quanitiy FROM products where id=? and is_delete=0 and is_active=1;`
  try {
    const result = await db.executeQuery(sql, [pId])
    return result[0]
  } catch (error) {
    throw error
  }
}
const singleOrderInsert = async (jsonObj) => {
  try {
    const result = await db.insertData('orders', jsonObj)
    return result.insertId
  } catch (error) {
    throw error
  }
}
const singleOrderProductsInsert = async (jsonObj) => {
  try {
    const result = await db.insertData('order_items', jsonObj)
    return result
  } catch (error) {
    throw error
  }
}
const singleOrderTransectionInsert = async (jsonObj) => {
  try {
    const result = await db.insertData('transection', jsonObj)
    return result
  } catch (error) {
    throw error
  }
}
const singleUpdateInventryQty = async (qty,pId) => {
  const sql = `update products set quanitiy = (quanitiy-?) where id = ? and is_delete=0 and is_active=1`
  try {
    db.executeQuery(sql, [qty, pId])
  } catch (error) {
    throw error
  }
}
module.exports = { fetchProductPrice, singleUpdateInventryQty, singleOrderProductsInsert, fetchProductQty, singleOrderTransectionInsert, fetchTypeOfPay, singleOrderInsert }