const Event = require("../../helpers/event.helper");

const deleteEvent = async(request, response) => {
  const event = new Event();
  let result=await event.deleteEvent(request.params.eventId);
  if(result.flag == true){
    response.status(200).send(result);
  }
  else{
    response.status(500).send(result);
  }
}

module.exports = {
  deleteEvent
};