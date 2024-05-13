const getCategories = require("../../services/category.services/categories.service");

const categories = async(request, response) => {
  const result = await getCategories();
  response.status(result.flag == false?500:200).send(result);
}

module.exports = categories;