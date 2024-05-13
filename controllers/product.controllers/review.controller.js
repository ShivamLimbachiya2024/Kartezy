const logger = require("../../configs/pino.config");
const database = require("../../helpers/database.helper");

const addReview = async(request, response) => {
  const userId = request.user.id;
  try{
    const db = new database();
    let result = await db.insertData("product_comments", {review: typeof request.body.review == 'undefined'?'':request.body.review, ratting : request.body.rate, user_id: userId, product_id: request.body.productId});
    if(typeof result == 'string' || result.affectedRows <= 0){
      response.status(500).send({flag : false, message: "Review is not added..."});
    }
    else{
      request.files.forEach(async file => {
        await db.insertData("product_comment_attechments", {
          attechment_path: file.filename,
          comment_id:  result.insertId,
          type: file.mimetype,
          error_message: "Attchement is not found...",
        })
      });
      response.status(200).send({flag: true, message: 'Review is added....'})
    }
  }
  catch(error){
    logger.error(error);
    response.status(500).send({
      flag: false,
      message: 'Review is not added',
    })
  }
}

module.exports = {addReview}