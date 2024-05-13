const User = require("../../helpers/user.helper");

const isPermission = async(request, response, next) => {
  const user = new User();
  const params = request.params;
  let url = request.originalUrl;
  if(Object.keys(params).length > 0){
    let oldArr = url.split("/");
    oldArr.pop();
    oldArr.push(`:${Object.keys(params)[0]}`);
    url = oldArr.join("/");
  }
  const result = await user.isAccessPermission(url, request.method, request.user);
  if(result.flag == false){
    try{
      response.redirect(request.headers.referer.split(process.env.PORT).pop());
    }
    catch{
      response.redirect("/kartezy/login")
    }
  }
  else{
    next();
  }
}

module.exports = isPermission;