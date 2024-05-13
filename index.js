require('dotenv').config();
const express = require("express");
const path = require('path');
const socketIo = require("socket.io");
const cookieParser = require('cookie-parser');
const logger = require('./configs/pino.config');
const useRouter = require('./routers/router');
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	"/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
	"/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(
	"/bootstrapicons",
  express.static(path.join(__dirname, "node_modules/bootstrap-icons/font"))
);
app.use(
	"/sweetalert2",
  express.static(path.join(__dirname, "node_modules/sweetalert2/dist"))
);
app.use(
	"/socket",
  express.static(path.join(__dirname, "node_modules/socket.io/client-dist"))
);

app.use(cookieParser());
app.use("/", useRouter);
let count = 0;

const server = app.listen(PORT, error => {
	try {
		if (error) {
			logger.error(`ERROR : Other server is running ${PORT}, So change port number`);
		}
		else {
			logger.info(`Server is running ${PORT}`);
			logger.info(`URL is : http://${HOST}:${PORT}/`);
			console.log(`Server is : http://${HOST}:${PORT}/kartezy`);
		}
	}
	catch (error) {
		logger.error(`ERROR : Other server is running ${PORT}, So change port number...` + error)
	}
})

const io = require('socket.io')(server);

io.on('connection', (socket) => {
	logger.info("Soket server is running")

  socket.on('add_answer_in_exist_query', (result) => {
    io.sockets.emit('query_update', result);
  });

	socket.on("order_status_updated", (result)=>{
		io.sockets.emit("order_updated", result);
	})

	socket.on("statuschange", (data) => {
		io.sockets.emit("statuschanged", data);
	})

	socket.on("disconnect", (result)=>{
		logger.info("Socket serve is disconnect");
	})

});