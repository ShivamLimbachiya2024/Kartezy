const logger = require('../../configs/pino.config');
const database = require("../../helpers/database.helper");
const db = new database();

const validateImageFile = (file) => {
  let allowImages = ['image/jpg', 'image/jpeg', 'image/png'];
  let fileSize = 5; // 5 MB

  if (!(allowImages.includes(file[0].mimetype))) {
    return false;
  } else if (file[0].size >= (fileSize * 1024 * 1024)) {
    return false;
  } 

  return true;
}

const isValidate = (files,obj) => {
  if(!files){
    return false;
  } else if(!files.mainImgc && !validateImageFile(files.mainImg)){
    return false;
  } else if(obj.product_name.trim() == '' || obj.product_description.trim() == '' || obj.price.trim() == '' || obj.quanitiy.trim() == '' || obj.category_id == ''){
    return false;
  } else if(isNaN(obj.price) || isNaN(obj.quanitiy)){
    return false;
  }

  return true;
}



exports.insertProduct = async (req,res) =>{
  try{
    const venderId = req.user.id;
    let data ={
      product_name : (req.body.productName)? req.body.productName : null,
      product_description : (req.body.description)? req.body.description : null,
      category_id : (req.body.subCategory)? req.body.subCategory : null,
      price : (req.body.price)? req.body.price : null,
      vender_id : (venderId)? venderId : null,
      quanitiy : (req.body.quantity)? req.body.quantity : null,
      main_image_path : (req.files && 'mainImg' in req.files)? req.files.mainImg[0].filename : null,
      is_active : (req.body.productStatus)?  req.body.productStatus : '1'
    }

    if(isValidate(req.files,data)){
      const products = await db.insertData("products",data);
      
      let specification_key = (req.body.specificationTitle)? req.body.specificationTitle.filter(e => e) : [];
      let specification_value = (req.body.specificationValue)? req.body.specificationValue.filter(e => e) : [];
  
      if(specification_key.length === specification_value.length){
        specification_key.forEach(async (el,i) =>{
          try{
            await db.insertData("product_specifications",{ 
              product_id : (products.insertId)? products.insertId : null,
              sepcificaton_key :el,
              specification_value :specification_value[i],
              is_delete : 0
            })
          }catch(er){
            logger.error(er);
          }
        });
      } else {
        return res.status(500).send({status : "Invalid Data", msg : "Check all Fields is Valid or not"});
      }
  
      if(req.files && 'multipleImg' in req.files){
        let images = req.files.multipleImg;
        if(images && images.length !=0 ){
          images.forEach( async (element) => {
            try{
              await db.insertData("product_attechments",{
                product_id : products.insertId,
                attechment_path : element.filename,
                error_message : "product second img",
                file_type : element.mimetype
              });
            }catch(er){
              logger.error(er);
            }

          });
        }
      }
      res.status(200).send({status : "ok", msg : "Product Added Successfully"});
    }else {
      res.status(500).send({status : "Invalid Data", msg : "Check all Fields is Valid or not"});
    }
    
  } catch(err){
    logger.error(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
  
}

exports.deleteProduct = async (req,res) =>{
  try{
    if(req.body.productId){
      const result = await db.updateData('products',{is_delete : 1 , is_active : 0},{id : req.body.productId});
      if (result.affectedRows != 0){
        res.status(200).send({status : "ok", msg : "Product Deleted Successfully"});
      } else {
        res.status(500).send({status : "Update Failed", msg : "An unexpected error occurred while processing your request"});
      }
    }else {
      logger.error("Product Id Not Found");
      res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
    }
  } catch(err){
    logger.error(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

exports.fetchFormData = async (req,res) =>{
  let productId = req.body.productId || 0;
  let data = {};
  try{

    // Product table fetch data
    let productSql = 'SELECT id,product_name,product_description,category_id,price,vender_id,quanitiy,main_image_path,is_active FROM products where is_delete = 0 AND id = ?';
    let productDetails = await db.executeQuery(productSql,productId);

    // category fetch data
    let categorySql = 'SELECT id,category_name,parent_category_id FROM categories where id = ?';
    const categoryDetails = await db.executeQuery(categorySql,productDetails[0].category_id);
    
    let parentCategorySql = 'SELECT category_name FROM categories where id = ?';
    const parentCategoryDetails = await db.executeQuery(parentCategorySql,categoryDetails[0].parent_category_id);

    // specificatication fetch
    let specificationSql =  'SELECT id,sepcificaton_key  as specification_key ,specification_value FROM product_specifications where is_delete=0 and product_id = ?';
    const specification = await db.executeQuery(specificationSql,productId);

    // attechment table image fetch 
    let imagesSecondSql = 'SELECT id,attechment_path FROM product_attechments where is_delete = 0 and product_id = ?';
    let imagesSecond = await db.executeQuery(imagesSecondSql,productId);

    data = {
      productId : (productDetails[0].id)? productDetails[0].id : null ,
      product_name : (productDetails[0].product_name)? productDetails[0].product_name : null ,
      product_description : (productDetails[0].product_description)? productDetails[0].product_description : null,
      price : (productDetails[0].price)? productDetails[0].price : null,
      vender_id :( productDetails[0].vender_id)? productDetails[0].vender_id : null ,
      quanitiy : (productDetails[0].quanitiy)? productDetails[0].quanitiy : 0,
      main_image_path : (productDetails[0].main_image_path)? productDetails[0].main_image_path : null ,
      is_active : (productDetails[0].is_active)? productDetails[0].is_active : null ,
      child_category_id : (categoryDetails[0].id)? categoryDetails[0].id : null ,
      child_category_name : (categoryDetails[0].category_name)? categoryDetails[0].category_name : null ,
      parent_category_id :(categoryDetails[0].parent_category_id)? categoryDetails[0].parent_category_id : null ,
      parent_category_name : (parentCategoryDetails[0].category_name)? parentCategoryDetails[0].category_name : null ,
      specification : (specification)? specification : [],
      secondImages : (imagesSecond)? imagesSecond : [] 
    };

    res.status(200).json(data);

  } catch(err){
    logger.error(err);
    res.status(500).send({status : "Internal Server Error", msg : "Data Not Fetched"});
  }
}

exports.updateProduct = async (req,res) =>{
  try{
    const obj ={
      productName: (req.body.productName)? req.body.productName : null ,
      price: (req.body.price)? req.body.price : null ,
      quantity: (req.body.quantity)? req.body.quantity : null ,
      category: (req.body.category)? req.body.category : null ,
      category_id : (req.body.subCategory)? req.body.subCategory : null,
      description: (req.body.description)? req.body.description : null ,
      specificationTitle:(req.body.specificationTitle)? req.body.specificationTitle : [] ,
      specificationValue:(req.body.specificationValue)? req.body.specificationValue : [] ,
      specificationFieldId:(req.body.specificationFieldId)? req.body.specificationFieldId : [] ,
      main_image_path : (req.files && 'mainImg' in req.files)? req.files.mainImg[0].filename : null,
      productId: (req.body.productId)? req.body.productId : null ,
      productStatus:(req.body.productStatus)? req.body.productStatus : null ,
      deletedSpecification: (req.body.deletedSpecification)? req.body.deletedSpecification : null,
      secondImgsIds : (req.body.secondImgsIds)? req.body.secondImgsIds : []
    }
  
    const productUpt = await db.updateData('products',{
      product_name : obj.productName, 
      product_description : obj.description,
      category_id : obj.category_id,
      price : obj.price,
      quanitiy : obj.quantity,
      is_active : obj.productStatus
    },{id : obj.productId});
  
    // ========= specification table update ============//
    
    // delete specification
    if(obj.deletedSpecification){
      let deleted = obj.deletedSpecification.split(',');
      deleted.forEach(async (el) => {
        try{
          await db.updateData('product_specifications',{ is_delete : 1 }, {id : el});
        }catch(er){
          logger.error(er);
        }
      });
    }

    // update exisistic specification
    if(obj.specificationFieldId.length !=0){
      obj.specificationFieldId.forEach(async (el,i) => {
        try{
          await db.updateData('product_specifications',{ sepcificaton_key : obj.specificationTitle[i], specification_value : obj.specificationValue[i] }, {id : el});
        }catch(er){
          logger.error(er);
        }
      });
    }
  
    // add new specification
    if(obj.specificationFieldId.length < obj.specificationTitle.length){
     let specificationTitle = obj.specificationTitle.slice(obj.specificationFieldId.length);
     let specificationValue = obj.specificationValue.slice(obj.specificationFieldId.length);

     specificationTitle.forEach(async (el,i) => {
      try{
        await db.insertData("product_specifications",{ 
          product_id : obj.productId,
          sepcificaton_key :el,
          specification_value :specificationValue[i],
          is_delete : 0
        })
      }catch(er){
        logger.error(er)
      }
      
     });

    }
  
    // update main image
    if(obj.main_image_path){
      await db.updateData("products",{ main_image_path : obj.main_image_path },{ id : obj.productId});
    }

    if(req.files && 'multipleImg' in req.files ){
      obj.secondImgsIds.forEach( async (el) => {
        await db.updateData("product_attechments",{ is_delete : 1 },{ id : el});
      });
      let images = req.files.multipleImg;

      if(images && images.length !=0 ){
        images.forEach( async (element) => {
          await db.insertData("product_attechments",{
            product_id : obj.productId,
            attechment_path : element.filename,
            error_message : "product second img",
            file_type : element.mimetype
          });
        });
      }
    }

    res.status(200).send({status : "ok", msg : "Product Updated Successfully"});

  } catch(err){
    logger.error(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
  
}