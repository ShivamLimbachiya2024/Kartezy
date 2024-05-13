const pino = require("pino");
const logger = pino(
	pino.destination("pino-log.log"),
);

module.exports = logger;