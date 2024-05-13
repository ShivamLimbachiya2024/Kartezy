const dataBase = require('../../helpers/database.helper');
const logger = require('../../configs/pino.config')
const db = new dataBase()


const getGridDetails = async () => {
  const getGridResult = `SELECT * FROM product_specifications`;

  try {
    const sepcificatonResult = await db.executeQuery(getGridResult);
    return sepcificatonResult;
  } catch (error) {
    throw error
  }
}

module.exports = { getGridDetails }
