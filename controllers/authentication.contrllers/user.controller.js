const user = (request, response) => {
  response.send(request.user);
}

module.exports = user