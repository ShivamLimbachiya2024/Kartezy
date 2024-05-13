const logout = ((request, response) => {
  try{
    response.clearCookie("token")
    delete request.body.id;
    delete request.user;
    response.redirect("/kartezy");
  }
  catch{
    response.render("error");
  }
})

module.exports = logout;