const logger = require('../../configs/pino.config');
const database = require("../../helpers/database.helper");
const db = new database();

const homePageRender = (req,res) =>{
  res.render('pages/home.ejs');
}

const getLetestProduct = async (req,res)=>{
  try{
    const getLetestQuery = "SELECT p.id,p.product_name,p.product_description,p.price,p.main_image_path,p.quanitiy,c.category_name FROM products as p join categories as c on p.category_id = c.id where p.is_delete = 0 and p.is_active = 1 order by p.create_at DESC limit 8";
    const products = await db.executeQuery(getLetestQuery,[]);
    res.status(200).send(products);
  } catch(err){
		logger.error(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"})
  }
}

const getTopSellingProduct = async (req,res)=>{
  try{
    const getTopSellingProduct = "SELECT p.id,product_name,p.price,main_image_path,quanitiy,product_id,c.category_name,count(product_id) as count FROM order_items as o join products as p on o.product_id = p.id join categories as c on p.category_id = c.id where p.is_delete = 0 and p.is_active = 1 group by product_id order by count desc limit 8";
    const products = await db.executeQuery(getTopSellingProduct,[]);
    res.status(200).send(products);
  } catch(err){
		logger.error(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"})
  }
}

const getAllProduct = async (req,res)=>{
  try{
    const getAllQuery = "SELECT p.id,p.product_name,p.price,p.quanitiy,p.main_image_path,c.category_name FROM products as p join categories as c on p.category_id = c.id where p.is_delete = 0 and p.is_active = 1";
    const products = await db.executeQuery(getAllQuery,[]);
    res.status(200).send(products);
  } catch(err){
		logger.error(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"})
  }
}
module.exports = {homePageRender,getLetestProduct,getTopSellingProduct,getAllProduct}