const SavedProduct = require("../../helpers/savedproduct.helper")

const getSavedProduct = async(request, response) => {
  const savedProduct = new SavedProduct();
  const result = await savedProduct.getSavedProduct(request.user.id)
  response.status(result.flag ==false?500:200).send(result);
}

const insertSavedProduct = async(request, response) => {
  const savedProduct = new SavedProduct();
  const result = await savedProduct.addSavedProduct(request.user.id, request.params.productId)
  response.status(result.flag ==false?500:200).send(result);
}

const removeSavedProduct = async(request, response) => {
  const savedProduct = new SavedProduct();
  const result = await savedProduct.deleteSavedProduct(request.user.id, request.params.productId)
  response.status(result.flag ==false?500:200).send(result);
}

const displaySavedProduct = (request, response) => {
  response.render("pages/savedproduct");
}

module.exports = {
  getSavedProduct,
  insertSavedProduct,
  removeSavedProduct,
  displaySavedProduct
}