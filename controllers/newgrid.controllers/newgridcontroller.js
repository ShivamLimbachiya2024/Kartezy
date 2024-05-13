const logger = require('../../configs/pino.config');
const grid = require('../../services/grid.services/grid.service');

const gridView = async (req, res) => {
  res.render('components/newgridComponent.ejs');
}

module.exports = { gridView }

