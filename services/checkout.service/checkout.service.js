const DataBase = require('../../helpers/database.helper');
const addNotification = require('../notification.service');
const db = new DataBase()
const fetchUserAddress = async (userId) => {
  const sql = `SELECT id,house_no,titel,land_mark,area,city,state,pincode FROM customer_addresses where user_id=? and is_delete=0;`
  try {
    const result = await db.executeQuery(sql, [userId])
    return result
  } catch (error) {
    throw error
  }
}
const fetchUserPayment = async (userId) => {
  const sql = `select id,card_holder_name,card_number,card_type,expiry,cvv from customer_payment_detail where user_id=? and is_delete=0;`
  try {
    const result = await db.executeQuery(sql, [userId])
    return result
  } catch (error) {
    throw error
  }
}
const fetchSingleProduct = async (pid) => {
  const sql = `SELECT product_name,product_description,price as total_prize FROM products where id=? and is_delete=0;`
  try {
    const result = await db.executeQuery(sql, [pid])
    return result
  } catch (error) {
    throw error
  }
}
const softDelUserCheckout = async (jsonObj) => {
  const newdata = {
    is_delete: 1
  }
  const consditions = {
    id: jsonObj['addId'],
    is_delete: 0
  }
  const tableName = jsonObj['tableName']
  try {
    await db.updateData(tableName, newdata, consditions)
  } catch (error) {
    throw error
  }
}
const insertUserAddress = async (jsonObj, userId) => {
  let data = {}
  tableName = 'customer_addresses'
  data['user_id'] = userId
  data['titel'] = jsonObj['address']
  data['house_no'] = jsonObj['house']
  data['land_mark'] = jsonObj['landmark']
  data['area'] = jsonObj['area']
  data['state'] = jsonObj['state']
  data['state'] = jsonObj['state']
  data['city'] = jsonObj['city']
  data['pincode'] = jsonObj['pincode']
  try {
    const result = await db.insertData(tableName, data);
    await addNotification(userId, "Address", `Add new address ${jsonObj['address']}`)
    return result;
  } catch (error) {
    throw error
  }
}
const insertUserPayment = async (jsonObj, userId) => {
  let data = jsonObj;
  data['user_id']=userId
  const tableName ='customer_payment_detail'
  try {
    const result = await db.insertData(tableName, data)
    await addNotification(userId, "Address", `Add new online payment details...`)
    return result;
  } catch (error) {
    throw error
  }
}

module.exports = { fetchUserAddress, fetchSingleProduct, insertUserPayment, fetchUserPayment, insertUserAddress, softDelUserCheckout }
