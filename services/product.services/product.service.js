const dataBase = require('../../helpers/database.helper');
const logger = require('../../configs/pino.config')
const db = new dataBase()


const getProductDetails = async (id) => {
  let data = {};
  const getProductSpecificationQuery = `select sepcificaton_key, specification_value from product_specifications where product_id = ${id}`;

  const getProductRatingQuery = `SELECT product_id, floor(sum(ratting)/count(ratting)) as final_rating FROM product_comments where product_id = ${id}`;

  const getProductDescriptionQuery = `SELECT id, product_name, product_description, price, main_image_path,quanitiy FROM products where id=${id} and is_delete=0 and is_active=1`;

  const getProductReview = `SELECT product_comments.id, first_name, last_name, review, ratting, product_comments.create_at
  FROM users
  LEFT JOIN product_comments
  ON users.id = product_comments.user_id where product_id=${id} order by product_comments.create_at desc`;
  const getImages = `SELECT attechment_path FROM product_attechments where product_id=${id}`;


  try {
    const sepcificatonResult = await db.executeQuery(getProductSpecificationQuery);
    data['sepcificatonResult'] = sepcificatonResult;

    const ratingResult = await db.executeQuery(getProductRatingQuery);
    data['ratingResult'] = ratingResult;

    const descriptionResult = await db.executeQuery(getProductDescriptionQuery);
    data['descriptionResult'] = descriptionResult;

    let reviewResult = await db.executeQuery(getProductReview);
    reviewResult = reviewResult.filter(async(review)=>{
      review.attchment = await db.executeQuery("select * from product_comment_attechments where comment_id = ?", [review.id])
      return review;
    })
    data['reviewResult'] = reviewResult;

    const imageResult = await db.executeQuery(getImages);
    data['imageResult'] = imageResult;

    return data;
  } catch (error) {
    throw error
  }
}

module.exports = { getProductDetails }
