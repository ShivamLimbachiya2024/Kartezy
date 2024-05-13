const database = require("../../helpers/database.helper");
const db = new database();
const getChartdataServices = async () => {
  try {
    let result = await db.executeQuery(`SELECT products.product_name,sum(qty)as total_quantity FROM order_items
    inner join products
    on products.id=order_items.product_id
     group by product_id`);
    if (typeof result == 'string') {
      return {
        flag: false,
        error: "Data is not found..."
      }
    }
    else {
      return { flag: true, result }
    }

  }
  catch (error) {
    throw error
  }
}

module.exports={
  getChartdataServices
}

