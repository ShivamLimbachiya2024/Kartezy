const logger = require("../configs/pino.config");
const database = require("../helpers/database.helper");

const addNotification = async(userId, title, messaage) => {
  const db = new database();
  try{
    const result = await db.insertData("notifications", {title: title, note: messaage, user_id : userId});
    return result.affectedRows>0?true:false;
  }
  catch(error){
    logger.error(error);
    return false;
  }
}

module.exports = addNotification;