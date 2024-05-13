const { eventNames } = require("../configs/database.config");
const logger = require("../configs/pino.config");
const database = require("./database.helper");

class Event{
  constructor(){
    this.db = new database();
  }
  
  getEvents = async(userId) =>{
    try{
      const events = await this.db.executeQuery("select * from user_events where user_id = ? and is_delete = 0;", [userId]);
      if(Array.isArray(events)){
        return{
          flag: true,
          message: events
        }
      }
      return {
        flag: false,
        message: "Event is not avilable...."
      };
    }
    catch(error){
      logger.error(error);
      return {
        flag: false,
        message: "Somethig is wrong.."
      }
    }
  }

  addEvent = async(userId, event) => {
    try{
      const result = await this.db.insertData("user_events", {
        user_id: userId,
        title: event.eventName,
        event_date: event.eventDate,
        color: event.eventColor,
        note: event.eventNote
      })
      if(typeof result == 'Object' || result.affectedRows > 0){
        return {
          flag:true,
          message: `${event.eventName} event is added....`
        }
      }
      return {
        flag:false,
        message: `${event.eventName} event is not saved....`
      }
    }
    catch(error){
      logger.error(error);
      return {
        flag: false,
        message: "Event is not avilable..."
      }
    }
  }
  
  updateEvent = async(eventId, event) => {
    try{
      const result = await this.db.updateData("user_events", {
        title: event.eventName,
        color: event.eventColor,
        note: event.eventNote
      }, {
        id: eventId,
      })
      if(typeof result == 'Object' || result.affectedRows > 0){
        return {
          flag:true,
          message: `${event.eventName} event is updated....`
        }
      }
      return {
        flag:false,
        message: `${event.eventName} event is not updated....`
      }
    }
    catch(error){
      logger.error(error);
      return {
        flag: false,
        message: "Event is not avilable..."
      }
    }
  }

  deleteEvent = async(eventId) => {
    try{
      let result = await this.db.updateData("user_events", {is_delete: 1}, {id: eventId});
      if(typeof result == 'Object' || result.affectedRows > 0){
        return {
          flag:true,
          message: "Event is remove...."
        }
      }
      return {
        flag: false,
        message: "Event is not remove..."
      }
    }
    catch(error){
      logger.error(error);
      return {
        flag: false,
        message: "Event is not avilable..."
      }
    }
  }
}

module.exports = Event;