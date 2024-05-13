
// // ==== Node Modules ====
const multer = require('multer');
const fs = require("fs");


// // ==== Configration ====

// // ==== Configuring Storage for apps
try {

  const storage =
    multer.diskStorage({
      destination: function (req, file, cb) {
        // Extract the folder names from request parameters
        // Specify the directory where files will be saved
        const uploadDir = 'public/assets/images'
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
      },
      filename: function (req, file, cb) {
        // Specify the filename for the uploaded file
        cb(null, Date.now() + '-' + file.originalname);
      },
});

  //File Filter
  const filefilter = (req, file, cb) => {
    if (file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" || file.mimetype === "image/webp") {
  cb(null, true);
} else {
  cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
}

  }
  const upload = multer({ 
    storage: storage,
    fileFilter: filefilter
  });

  module.exports = { upload };

}
catch (error) {
  logger.log(error)
}