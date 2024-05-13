const logger = require('../../configs/pino.config');
const categoryFile = require('../../services/category.services/category.service');

const category = async (req, res) => {
  res.render('pages/category/category.page.ejs');
}

const getCategoryInfo = async (req, res) => {
  const data = req.body;
  try {
    const result = await categoryFile.getCategoryDetails(data);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ status: "Internal server err", msg: "You have an Error" })
    logger.error(err);
  }
}

const editedDataController = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  try {
    const result = await categoryFile.getEditedData(data, id);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ status: "Internal server err", msg: "You have an Error" })
    logger.error(err);
  }
}

const getCategoryData = async (req, res) => {
  try {
    const result = await categoryFile.getCategoryList();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ status: "Internal server err!", msg: "You have an Error" })
    logger.error(err);
  }
}

const getCategoryName = async (req, res) => {
  try {
    const result = await categoryFile.selectCategory();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ status: "Internal server err", msg: "You have an Error" })
    logger.error(err);
  }
}

const getCategoryListPage = async (req, res) => {
  res.render('pages/category/categoryList.page.ejs');
}
const getCategoryDataEdit = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await categoryFile.getCategoryEdit(id);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ status: "Internal server err!!", msg: "You have an Error" })
    logger.error(err);
  }
}

const deleteselectedData = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await categoryFile.deleteDataFromList(id);
    res.status(200).send(result);
  }
  catch (error) {
    res.send({
      flag: false,
      error: "there is an error to delete data"
    })
  }
}

module.exports = { category, getCategoryData, getCategoryName, getCategoryDataEdit, getCategoryListPage, getCategoryInfo, editedDataController, deleteselectedData }

