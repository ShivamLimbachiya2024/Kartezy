const logger = require('../../configs/pino.config');
const grid = require('../../services/grid.services/grid.service');

const gridView = async (req, res) => {
  res.render('components/grid.component.ejs');
}

const getGridInfo = async (req, res) => {
  try {
    const data = await grid.getGridDetails();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ statsu: "Internal server err", msg: "You have an Error" })
    logger.error(err);
  }
}


module.exports = { getGridInfo, gridView }

