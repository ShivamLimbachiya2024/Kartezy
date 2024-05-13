const logger = require('../../configs/pino.config');
const adminServices = require("../../services/vendorAdmin.services/vendorAdmin.service");
const vendorChartServices=require("../../services/vendorAdmin.services/vendorAdminChartServices");
const database = require("../../helpers/database.helper");
const db = new database();

const vendorChartController = async (req, res) => {
  const vendorId = req.user.id;
  const vendordet=req.user;
  const status='delivered'

  try {
    const result1 = await adminServices.products(vendorId);
    const result2=await vendorChartServices.salesServices(vendorId,status);
    res.send({result1,result2,vendordet})

  
  }
  catch (error) {
    res.send({
      flag: "false",
      error: "There is an error while running the query"
    })
  }
}


module.exports = { vendorChartController}
