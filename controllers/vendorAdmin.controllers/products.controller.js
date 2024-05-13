const logger = require('../../configs/pino.config');
const adminServices = require("../../services/vendorAdmin.services/vendorAdmin.service");
const database = require("../../helpers/database.helper");
const db = new database();


exports.renderProducts = (req,res)=>{
  res.render("pages/vendorAdmin/products.ejs");
}

exports.productFormRender = async (req,res)=>{
  const vendorId = req.user.id;
  let obj;
  try{
    if(req.params.productId){
      let checkVendorhasProduct = await db.executeQuery('select id from products where is_delete = 0 and vender_id = ? and id = ?', [vendorId,req.params.productId]);
      if(checkVendorhasProduct.length != 0){
        obj = {
          flag : true,
          productId : req.params.productId
        }
        res.render("pages/vendorAdmin/productForm.ejs",obj);
      } else{
        res.render("pages/pageNotFound.ejs",{error : " Product Not Found"});
      }
    } else {
      obj = {
        flag : false,
        productId : null
      }
      res.render("pages/vendorAdmin/productForm.ejs",obj);
    }
    
  } catch(err){
    logger.error(err);
  }
  
}

exports.displayProducts = async (req,res) =>{
  const venderId = req.user.id;
  try{
    let products = await adminServices.products(venderId);
    products = products.map(obj =>{
      const {id,product_name,price,quanitiy,is_active} = obj;
      return {id,product_name,price,quanitiy,is_active};
    })
    res.status(200).send(products);
  }catch(error){
    logger.error(error);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}


