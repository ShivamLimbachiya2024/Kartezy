const DataBase = require('../../helpers/database.helper');


const getRecentOrderServices=async()=>{
  const db=new DataBase();
  var sql=`SELECT orders.id as orderid,users.first_name as customer_name,orders.total_price,concat(customer_addresses.house_no,' ',customer_addresses.land_mark,' ',customer_addresses.area,',',customer_addresses.city,',',customer_addresses.state,' ',customer_addresses.pincode)as delivery_address,orders.create_at as ordered_at
  from orders
  inner join users 
  on orders.user_id=users.id 
  inner join customer_addresses
  on users.id=customer_addresses.user_id
  order by orders.create_at desc
  limit 4;`
  try{
    let result=db.executeQuery(sql);
    if(typeof result=='string'){
      return {flag:"false",
      message:"error in query execution"
    }
    }
    else{
     return result
    }
  }
  catch(error){
    return{
      flag:"false",
      error:"error in executing query"
    }

    }
  }



module.exports={getRecentOrderServices}