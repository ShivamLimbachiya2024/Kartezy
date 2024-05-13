const fs = require("fs")
const deleteFiles = (files) => {
  files.forEach(file => {
    fs.unlinkSync(file.path);
  });
}
const isValidFileComment = (request, response, next) => {
  const files = request.files;
  const magicNumbers = {
    jpg: Buffer.from([0xff, 0xd8, 0xff, 0xe0]),
    png: Buffer.from([0x89, 0x50, 0x4e, 0x47]),
    gif: Buffer.from([0x47, 0x49, 0x46, 0x38]),
    mp4: Buffer.from([0x00, 0x00, 0x00, 0x20]),
  }
  let isValid = true;
  for(let i=0; i<files.length; i++){
    const buffer = fs.readFileSync(files[i].path);
    if(
      !buffer.slice(0, 4).equals(magicNumbers.jpg) &&
      !buffer.slice(0, 4).equals(magicNumbers.png) &&
      !buffer.slice(0, 4).equals(magicNumbers.gif) &&
      !buffer.slice(0, 4).equals(magicNumbers.mp4)
    ){
      isValid = false;
    }
  }

  if(isValid){
    next();
  }
  else{
    deleteFiles(files)
    return response.status(500).send({
      flag: false,
      message: "ERROR : File form is not valid...."
    })
  }
}

module.exports = isValidFileComment;