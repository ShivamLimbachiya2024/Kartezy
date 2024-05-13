const chartDataServices = require("../../services/admin.services/adminChartdata.services");
const productQty = async (req, res) => {
 
  try {
    let result = await chartDataServices.getChartdataServices();
    res.json(result)
  }
  catch (error) {
    res.send({
      flag: false,
      error: "there was error in getting vendor data"
    })
  }
}

module.exports={productQty}