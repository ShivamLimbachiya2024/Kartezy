const logger = require("../configs/pino.config");
const database = require("./database.helper");

class SavedProduct{
  constructor(){
    this.db = new database();
  }
  
  getSavedProduct = async(userId) =>{
    try{
      const savedProduct = await this.db.executeQuery("select saved_product.product_id as product_id, product_name, main_image_path from saved_product left join products on saved_product.product_id = products.id where user_id=? and products.is_delete = 0 and saved_product.is_delete = 0", [userId]);
      if(Array.isArray(savedProduct)){
        return{
          flag: true,
          message: savedProduct
        }
      }
      return {
        flag: false,
        message: "Saved product is not avilable...."
      };
    }
    catch(error){
      logger.error(error);
      return {
        flag: false,
        message: "Somethig is wrong.."
      }
    }
  }

  addSavedProduct = async(userId, productId) => {
    try{
      let result = await this.db.updateData("saved_product", {is_delete: 0}, {user_id: userId, product_id: productId});
      if(typeof result == 'Object' || result.affectedRows > 0){
        return {
          flag:true,
          message: "Product is saved...."
        }
      }
      result = await this.db.insertData("saved_product", {user_id: userId, product_id: productId})
      if(typeof result == 'Object' || result.affectedRows > 0){
        return {
          flag:true,
          message: "Product is saved...."
        }
      }
      return {
        flag:false,
        message: "Product is not saved...."
      }
    }
    catch(error){
      logger.error(error);
      return {
        flag: false,
        message: "Product is not avilable..."
      }
    }
  }

  deleteSavedProduct = async(userId, productId) => {
    try{
      let result = await this.db.updateData("saved_product", {is_delete: 1}, {user_id: userId, product_id: productId});
      if(typeof result == 'Object' || result.affectedRows > 0){
        return {
          flag:true,
          message: "Product is remove in favorite list...."
        }
      }
      return {
        flag: false,
        message: "Product is not remove in favorite list"
      }
    }
    catch(error){
      logger.error(error);
      return {
        flag: false,
        message: "Product is not avilable..."
      }
    }
  }
}

module.exports = SavedProduct;