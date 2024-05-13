const Event = require("../../helpers/event.helper");

const updateEvent = async(request, response) => {
  const data = request.body;
  const event = new Event();
  let result=await event.updateEvent(request.params.eventId, data);
  if(result.flag == true){
    response.status(200).send(result);
  }
  else{
    response.status(500).send(result);
  }
}

module.exports = {
  updateEvent
};