const dataBase = require('../../helpers/database.helper');
const logger = require('../../configs/pino.config')
const db = new dataBase()


const getCategoryDetails = async (data) => {
  try {
    let obj = {
      category_name: data.catName[0],
      category_description: data.description[0],
      parent_category_id: data.parentId[0]
    }
    let result = await db.insertData("categories", obj);
    return { flag: true }
  } catch (error) {
    logger.error(error)
    return { flag: false }
  }
}

const getEditedData = async (data, id) => {
  try {
    const selectQuery = await db.executeQuery(`select id, category_name, category_description, parent_category_id FROM categories where id=${id} and is_delete=0`);
    if (selectQuery && selectQuery.length > 0) {
      let obj = {
        category_name: data.catName[0],
        category_description: data.description[0],
        parent_category_id: data.parentId[0]
      }
      condition = {
        id: id
      }
      db.updateData("categories", obj, condition)
      return { flag: true }
    } else {
      return { flag: false, error: "no data found to be updated" }
    }
  } catch (error) {
    logger.error(error)
  }
}


const selectCategory = async () => {
  const getCategoryName = `select id, category_name FROM categories where is_delete=0`;
  try {
    const categoryNameResult = await db.executeQuery(getCategoryName);
    return categoryNameResult;
  } catch (error) {
    return { flag: false }
  }
}

const getCategoryList = async () => {
  const getCategoryListQuery = `select id, category_name, category_description, parent_category_id FROM categories where is_delete=0`;
  try {
    const getCategoryListResult = await db.executeQuery(getCategoryListQuery);
    return getCategoryListResult;
  } catch (error) {
    return { flag: false }
  }
}

const getCategoryEdit = async (id) => {

  const getCategoryDataQuery = `select id, category_name, category_description, parent_category_id FROM categories where id=${id} and is_delete=0`;
  try {
    const categoryDataResult = await db.executeQuery(getCategoryDataQuery);
    return categoryDataResult;
  } catch (error) {
    throw error
  }
}

const deleteDataFromList = async (id) => {
  try {
    newdata = {
      is_delete: '1'
    }
    condition = {
      id: id
    }
    db.updateData("categories", newdata, condition)
    return { flag: true }
  }
  catch (error) {
    return {
      flag: false,
      error: "No data found to be deleted"
    }
  }
}

module.exports = { getCategoryDetails, selectCategory, getCategoryList, getCategoryEdit, getEditedData, deleteDataFromList }
