const logger = require('../../configs/pino.config');
const database = require("../../helpers/database.helper");
const db = new database();

exports.filterProduct = (req,res) =>{
  res.render('pages/productFilter.ejs')
}

exports.filterData = async (req,res) =>{
  let obj = {
      category: (req.body.categort)? req.body.categort : [],
      priceMin: (req.body.priceMin)? req.body.priceMin : 0,
      priceMax: (req.body.priceMax)? req.body.priceMax : 999999999999999,
      rating: (req.body.star)? req.body.star.map(Number) : [0,1,2,3,4,5],
      search : (req.body.search)? req.body.search.replace(/'/g,"") : null
  }

  try{
    if(obj.category.length !=0){

      const getProductFromCaregory = `select products.id,product_name,product_description,price,vender_id,quanitiy,main_image_path,is_active,COALESCE(ratting, 0) as rating  from products left join (select product_id , CEILING(AVG(ratting)) as ratting from product_comments group by product_id) AS prat on prat.product_id = products.id where price BETWEEN ? AND ? and is_delete = 0 and category_id IN (select id from categories where parent_category_id IN (select id from categories where category_name IN (?)))`;

      let products = await db.executeQuery(getProductFromCaregory,[obj.priceMin,obj.priceMax,obj.category]);
      products = products.filter( ob => obj.rating.includes(ob.rating))
  
      res.status(200).send({
        filter : obj,
        filterData : products
      });

    } else if(req.body.search) {
      const getProductFromSearch = `select prd.id,prd.product_name,product_description,quanitiy,is_active,price,main_image_path,coalesce(rating,0) as rating from products as prd left join (select product_id , ceil(avg(ratting)) as rating from product_comments group by product_id) as prattng on prattng.product_id=prd.id where (product_name like '%${obj.search}%' or product_description like '%${obj.search}%') and price between ${obj.priceMin} and ${obj.priceMax}`;
      let products = await db.executeQuery(getProductFromSearch,[]);
      products = products.filter( ob => obj.rating.includes(ob.rating))
      
      res.status(200).send({
        filter : obj,
        filterData : products
      });
    } else {
      res.status(200).send({
        filter : obj,
        filterData : []
      });
    }
    

  }catch(err){
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"})
    logger.error(err);
  }

}
