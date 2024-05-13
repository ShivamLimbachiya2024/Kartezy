const DataBase = require('../../helpers/database.helper');
const db = new DataBase()
const logger = require('../../configs/pino.config')
const getUserCart = async (userId) => {
  const sql = `
  select pr.id as product_id,pr.is_active,pr.main_image_path as attechment_path,pr.product_name,pr.product_description,uscart.qty,pr.quanitiy as total_qty,pr.price,uscart.price as total_prize
from users_cart as ttlcart
inner join users_cart_products as uscart on uscart.cart_id=ttlcart.id
inner join products as pr on uscart.product_id = pr.id
where ttlcart.user_id=? and uscart.is_delete=0;`
  try {
    const result = await db.executeQuery(sql, [userId])
    return result
  } catch (error) {
    throw error
  }
}
const getUserCartId = async (userId) => {
  const sql = `SELECT id FROM users_cart where user_id = ? and is_delete=0`
  try {
    const result = await db.executeQuery(sql, [userId])
    return result
  } catch (error) {
    throw error
  }
}
const getTotalPrize = async (userCartId) => {
  const sql = `SELECT sum(price) as prize_sum FROM users_cart_products where cart_id= ? and is_delete=0;`
  try {
    const result = await db.executeQuery(sql, [userCartId])
    return result
  } catch (error) {
    throw error
  }
}
const getProductPrice = async (productId) => {
  const sql = `SELECT price FROM products WHERE id=? and is_delete=0`;
  try {
    const result = await db.executeQuery(sql, [productId])
    return result[0].price
  } catch (error) {
    throw error
  }
}
const getCartProduct = async (userCartId, productId) => {
  const sql = `SELECT count(*) as count FROM users_cart_products where cart_id=? and product_id=? and is_delete=0`;
  try {
    const result = await db.executeQuery(sql, [userCartId, productId])
    return result[0].count
  } catch (error) {
    throw error
  }
}
const getUserProductCartObj = async (userCartId, productId) => {
  const sql = `SELECT * FROM users_cart_products where cart_id=? and product_id=? and is_delete=0`;
  try {
    const result = await db.executeQuery(sql, [userCartId, productId])
    return result[0]
  } catch (error) {
    throw error
  }
}

const updateTotalCartPrize = async (userId, userCartId) => {
  let totalPrize = await getTotalPrize(userCartId)
  totalPrize = totalPrize[0].prize_sum
  let conditions = {}
  let newdata = {}
  const tableName = 'users_cart'
  conditions['user_id'] = userId;
  conditions['is_delete'] = 0;

  newdata['total_price'] = totalPrize;
  newdata['title'] = 'My Cart'

  if (totalPrize === 0 || totalPrize == null) {
    newdata['is_delete'] = 1
  }
  try {
    const result = await db.updateData(tableName, newdata, conditions)
    return result;
  } catch (error) {
    throw error
  }
}
const updateUserCart = async (jsonObj) => {
  let conditions = {}
  let newdata = {}
  const tableName = 'users_cart_products'
  conditions['product_id'] = jsonObj['product_id']
  conditions['cart_id'] = jsonObj['cart_id']
  conditions['is_delete'] = 0

  newdata['qty'] = jsonObj['qty']
  newdata['price'] = jsonObj['price']
  if (jsonObj['qty'] == 0) {
    newdata['is_delete'] = 1
  }
  try {
    const result = await db.updateData(tableName, newdata, conditions)
    return result;
  } catch (error) {
    throw error
  }
}
const insertUserCart = async (userId) => {
  const tableName = 'users_cart';
  const data = {
    user_id: userId,
    title: 'My new insert Cart'
  }
  try {
    const lastInsertedCartId = await db.insertData(tableName, data)
    return lastInsertedCartId.insertId;
  } catch (error) {
    throw error
  }
}
const insertCartProducts = async (userCartId, productId, productPrice, qty) => {
  const tableName = 'users_cart_products';
  const data = {
    cart_id: userCartId,
    product_id: productId,
    qty: qty,
    price: productPrice * qty
  }
  try {
    const lastInsertedCartId = await db.insertData(tableName, data)
    return lastInsertedCartId.insertId;
  } catch (error) {
    throw error
  }
}
module.exports = { getUserCart, 
  insertUserCart,
   getUserProductCartObj,
   insertCartProducts,
    getCartProduct, getProductPrice, getTotalPrize, updateTotalCartPrize, updateUserCart, getUserCartId }
