const Event = require("../../helpers/event.helper");

const getEvents = async(request, response) => {
  const event = new Event();
  let result=await event.getEvents(request.user.id);
  if(result.flag == true){
    response.status(200).send(result);
  }
  else{
    response.status(500).send(result);
  }
}

module.exports = {
  getEvents
};