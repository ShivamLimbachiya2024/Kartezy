const multer = require("multer");

const storage = multer.diskStorage({
  destination: (request, files, cb) => {
      cb(null, "./public/images/pruduct_comment")
  },
  filename: (request, files, cb) => {
    cb(null, Date.now() + "_" + files.originalname)
  }
});

const commentFileAttchement =  multer({
  storage: storage,
})

module.exports = {commentFileAttchement};