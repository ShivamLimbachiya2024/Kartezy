const vendorServices = require("../../services/vendor.services/vendor.services")

const getVendorform = (req, res) => {
  res.render('pages/admin/adminVendorinsert.ejs');
};

const insertVendor = async (req, res) => {
  const data = req.body
  try {
    let result1 = await vendorServices.insertVendordataServices(data);
    res.send(result1)
  }
  catch (error) {
    res.send({
      flag: false,
      error: "there was an error in controller"
    })
  }
}
module.exports = { getVendorform, insertVendor }