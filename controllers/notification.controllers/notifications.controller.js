const logger = require("../../configs/pino.config");
const database = require("../../helpers/database.helper");

const notifications = async(request, response) => {
  const db = new database();
  try{
    const notifications = await db.executeQuery("select * from notifications where user_id = ? order by create_at desc", [request.user.id]);
    if(Array.isArray(notifications)){
      const result = await db.updateData("notifications", {is_read: 1}, {user_id: request.user.id});
      response.status(200).send({
        flag: true,
        message: notifications,
      })
    }
    else{
      response.status(500).send({
        flag: false,
        message: "Notification is not found.."
      })
    }
  }
  catch(error){
    logger.error(error);
    response.status(500).send({
      flag: false,
      message: "Something is wrong"
    })
  }
}

module.exports = {notifications};