const DataBase = require('../../helpers/database.helper');
const db = new DataBase()
const getUserCartAndTotal = async (userId) => {
  const sql = `select id,total_price from users_cart where user_id=? and is_delete=0;`
  try {
    const result = await db.executeQuery(sql, [userId])
    return result[0];
  } catch (error) {
    throw error
  }
}
const insertCartProductsInOrder = async (orderId, cartId) => {
  const sql = `select product_id,qty,cast((price/qty) as decimal(10,2)) as price,price as total_price from users_cart_products where cart_id = ? and is_delete=0`
  try {
    const productsFromCart = await db.executeQuery(sql, [cartId])
    productsFromCart.forEach(async (obj) => {
      obj['order_id'] = orderId;
      try {
        await db.insertData('order_items', obj)
      } catch (error) {
        console.log(error);
      }
    });
    return productsFromCart
  } catch (error) {
    throw error
  }
}
const deleteUserCart = async (cartId) => {
  try {
    const parTableName = 'users_cart'
    const data = { is_delete: 1 }
    const parConditions = { id: cartId }
    const childtableName = 'users_cart_products'
    const chiConditions = { cart_id: cartId }
    await db.updateData(childtableName, data, chiConditions)
    await db.updateData(parTableName, data, parConditions)
  } catch (error) {
    throw error
  }
}
const updateInventryQty = async (productsFromCart) => {
  const sql = `update products set quanitiy = (quanitiy-?) where id = ? and is_delete=0 and is_active=1`
  try {
    productsFromCart.forEach(async (obj) => {
      try {
        await db.executeQuery(sql, [obj.qty, obj.product_id])
      } catch (error) {
        console.log(error);
      }
    })
  } catch (error) {
    throw error
  }
}
const userCartProductsAndPrdCheck = async (cartId) => {
  const cartSql = `select product_id,qty from users_cart_products where cart_id = ? and is_delete=0`
  try {
    let productsFromCart = await db.executeQuery(cartSql, [cartId])
    const productIdsfromCart = productsFromCart.map((obj) => (obj.product_id)).toString()
    const productSql = `SELECT id,quanitiy,is_active FROM products where id in (${productIdsfromCart});`
    const productsFromInventory = await db.executeQuery(productSql, []);
    productsFromCart = productsFromCart.sort((a, b) => a.product_id - b.product_id);
    let isQtyUnAvail = false
    productsFromInventory.forEach((obj, i) => {
      if (obj.is_active === 0) {
        isQtyUnAvail = true
      } else if ((obj.quanitiy - productsFromCart[i].qty) < 0) {
        isQtyUnAvail = true
      } 
    })
    return isQtyUnAvail
  } catch (error) {
    throw error
  }
}
module.exports = { getUserCartAndTotal, userCartProductsAndPrdCheck, updateInventryQty, deleteUserCart, insertCartProductsInOrder }
