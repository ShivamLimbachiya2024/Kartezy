const Event = require("../../helpers/event.helper");

const addEvent = async(request, response) => {
  const data = request.body;
  const event = new Event();
  let result=await event.addEvent(request.user.id, data);
  if(result.flag == true){
    response.status(200).send(result);
  }
  else{
    response.status(500).send(result);
  }
}

module.exports = {
  addEvent
};