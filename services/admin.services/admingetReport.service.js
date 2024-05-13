const logger = require('../../configs/pino.config');
const DataBase = require('../../helpers/database.helper');

const getTotalVendors = async () => {
  const db = new DataBase()
  var role_id = 2
  var is_delete=0
  var values=[role_id,is_delete]
  try {
    let result = db.executeQuery('select * from users where role_id=? and is_delete=?', values)
    return result
  }
  catch (error) {
    throw error
  }

}

const getTotalCustomers = async () => {
  const db = new DataBase()
  values = [1, 2,0]
  try {
    let result = db.executeQuery('select * from users where role_id not between ? and ? and is_delete=?', values);
    return result
  }
  catch (error) {
    throw error
  }
}

const getTotalProducts = async () => {
  const db = new DataBase();
  try {
    var values=0
    var sql=`SELECT products.id as product_id,products.product_name,products.product_description,products.category_id,products.price,products.vender_id,products.create_at as added_on,
    products.quanitiy from products where is_delete=?`
    let result = db.executeQuery(sql,values);
    return result
  }
  catch (error) {
    throw error
  }
}
const getCustomerOrderHistory = async () => {
  const db = new DataBase();
  var sql =`select  users.id as user_id,users.first_name as customername,orders.id as orderid,orders.create_at as order_date,orders.deliver_date,orders.shipping_cost,orders.total_price
  from orders
  left join users
  on users.id =orders.user_id
  order by users.id`
  try {
    let result = await db.executeQuery(sql);
    if(typeof result =="string"){
      return {
        flag:"false",
        message:"error in executing the query"
      }
    }
  
    return result
  }
  catch (error) {
    return {
      flag:"false",
      message:"error in executing query"
    }
  }
}



const deleteVendorServices=async (id)=>{
  try{
    const db=new DataBase();
    newdata={
      is_delete:'1'
    }
    condition={
      id:id
    }
    db.updateData("users",newdata,condition)
    return{ flag: true }
  }
  catch(error){
    return{
      flag:false,
      error:"no vendor  found to be deleted"
    }
  }
}

const getVendorSpecificProduct=async(id)=>{
  const db = new DataBase();
  var sql =`select * from products where vender_id=?;`
  var sql2=`select * from users where   id=?`
  try {
    let result = await db.executeQuery(sql,id);
    let result2=await db.executeQuery(sql2,id)
    if(typeof result =="string" && typeof result2 =="string"){
      return {
        flag:"false",
        message:"error in executing the query"
      }
    }
    
    return {result,result2}
  }
  catch (error) {
    return {
      flag:"false",
      message:"error in executing query"
    }
  }
}

const assignOrderServices=async(status)=>{
  const db=new DataBase()
  let sql=`select orders.id as order_id,concat(customer_addresses.house_no,' ',customer_addresses.land_mark,' ',customer_addresses.area,',',customer_addresses.city,',',customer_addresses.state,' ,',customer_addresses.pincode)as delivery_address,
  date(orders.create_at)as order_date,date(orders.deliver_date) as expected_delivery_date
  from orders
  left join customer_addresses 
  on orders.address_id=customer_addresses.id
  where orders.status='${status}'`;
  try {
    let result = await db.executeQuery(sql);
    if(typeof result =="string"){
      return {
        flag:"false",
        message:"error in executing the query"
      }
    }
  
    return result
  }
  catch (error) {
    return {
      flag:"false",
      message:"error in executing query"
    }
  }

}

const getAllLogisticsDetails = async(status = 'all') => {
  const db=new DataBase()
  if(status == 'all'){
    sql=`
    select 
    users.id, first_name, last_name, email, mobile_no, city, pincode,status
    from 
    users left join logistic_shipping on users.id = logistic_shipping.logistic_id 
    where role_id = (select id from roles where role_name='${process.env.ROLE_LOGISTIC}') and users.is_delete = 0;
  `;
  }
  else{
    sql=`
    select 
    users.id, first_name, last_name, email, mobile_no, city, pincode,status
    from 
    users left join logistic_shipping on users.id = logistic_shipping.logistic_id 
    where role_id = (select id from roles where role_name='${process.env.ROLE_LOGISTIC}') and status = '${status} and users.is_delete = 0;
  `;
  } 
  try {
    let result = await db.executeQuery(sql);
    if(typeof result =="string"){
      return {
        flag:"false",
        message:"error in executing the query"
      }
    }
  
    return result
  }
  catch (error) {
    logger.error(error)
    return {
      flag:"false",
      message:"error in executing query"
    }
  }
} 


const allProducts = async () => {
  const db = new DataBase();
  try {
    var values=0
    var sql=`SELECT products.id as product_id,products.product_name,products.product_description,products.category_id,products.price,products.vender_id,products.create_at as added_on,products.main_image_path,
    products.quanitiy from products where is_delete=?`
    let result = db.executeQuery(sql,values);
    return result
  }
  catch (error) {
    return {
      flag:"false",
      message:"error in executing query"
    }
  
  }
}


module.exports = { getTotalVendors, getTotalCustomers, getTotalProducts,getCustomerOrderHistory,deleteVendorServices,getVendorSpecificProduct,assignOrderServices, getAllLogisticsDetails, allProducts}
  