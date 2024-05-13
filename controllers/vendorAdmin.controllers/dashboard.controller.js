const logger = require('../../configs/pino.config');
const adminServices = require("../../services/vendorAdmin.services/vendorAdmin.service");
const adminServicesorder = require("../../services/vendorAdmin.services/vendorOrder.service");

const database = require("../../helpers/database.helper");
const db = new database();

exports.renderDashboard = (req,res)=>{
  res.render("pages/vendorAdmin/dashboard.ejs");
}

exports.countProducts = async (req,res) =>{
  const venderId = req.user.id;
  try{

    // total products
    const products = await adminServices.products(venderId);
    const productsCount = products.length;

    // All Orders
    const orders = await adminServicesorder.fetchAllOrders(venderId);
    const ordersCount = orders.length;

    // pending Orders
    const pendingOrder = await adminServices.specificOrders(venderId,"pending");
    const pendingOrderCount = pendingOrder.length;

    // completed Orders
    const completedOrder = await adminServices.specificOrders(venderId,"delivered");
    const completedOrderCount = completedOrder.length;

    //  Out Of Stock Products
    const query = "SELECT count(*) as outOfStock FROM products where quanitiy = 0 and is_delete = 0 and vender_id = ?"
    let outOfStock = await db.executeQuery(query, [venderId]);
    outOfStock = outOfStock[0].outOfStock;

    res.status(200).send({productsCount,ordersCount,pendingOrderCount,completedOrderCount,outOfStock});
  } catch (error){
		logger.error(error);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}