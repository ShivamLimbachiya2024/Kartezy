const logger = require("../../configs/pino.config");
const database = require("../../helpers/database.helper");

const getCategories = async() => {
  try{
    const db = new database();
    const categories = {};
    let parentCategories = await db.executeQuery("select * from categories where parent_category_id = 0 and is_delete = 0");
    if(typeof parentCategories == 'string' || (Array.isArray(parentCategories) && parentCategories.length == 0)){
      return {flag: false, message: 'Category not avilable'};
    }
    
    for(let i=0; i<parentCategories.length; i++) {
      try{
        categories[parentCategories[i].category_name] = await db.executeQuery("select id, category_name, category_description from categories where parent_category_id = ? and is_delete = 0", [parentCategories[i].id]);
      }
      catch(error){
        logger.error(error)
        categories[parentCategories[i].category_name] = null;
      }
    };
    return {flag: true, message: categories};
  } 
  catch(error){
    logger.error(error)
    return {flag: false, message: 'Somethig is wrong...'}
  }
}

module.exports = getCategories;