
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/products/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix)
  }
});

exports.upload = multer({ storage: storage }).fields([
  { name : 'mainImg', maxCount : 1 },
  { name : 'multipleImg', maxCount : 5 }
]);

