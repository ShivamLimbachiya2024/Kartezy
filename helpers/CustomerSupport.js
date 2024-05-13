const logger = require("../configs/pino.config");
const database = require("./database.helper");

class CustomerSupport{
  constructor(){
    this.db = new database();
  }
  
  addquery = async(query, files) => {
    try{
      const db = new database();
      let result = await db.insertData("customer_support_query", {
        name: query.name,
        email: query.email,
        query: query.query
      });
      if(typeof result == 'string' || result.affectedRows <= 0){
        return({flag : false, message: "Query is not send..."});
      }
      else{
        files.forEach(async file => {
          await db.insertData("customer_support_query_attchement", {
            filename: file.filename,
            query_id:  result.insertId,
            type: file.mimetype,
            error: "Attchement is not found...",
          })
        });
        return({flag: true, message: 'Query is sended....'})
      }
    }
    catch(error){
      logger.error(error)
      return({
        flag: false,
        message: 'Query is not sended...',
      })
    }
  }

  getQueries = async(search = null) => {
    try{
      let queries;
      if(search){
        queries = await this.db.executeQuery(`select * FROM customer_support_query where email like '%${search}%' or name like '%${search}%' or query like '%${search}%' and is_delete = 0 order by create_at desc`);
      }
      else{
        queries = await this.db.executeQuery("select * FROM customer_support_query where is_delete = 0 order by create_at desc")
      }
      if(queries.length == 0){
        return {flag: false, message: "Query not found"} 
      }
      for(let i=0; i<queries.length; i++){
        try{
          queries[i].attchments = await this.db.executeQuery("select * from customer_support_query_attchement where query_id = ? and is_delete = 0", [queries[i].id])
        }
        catch(error){
          logger.error(error);
          queries[i].attchments = [];
        }
      }
      return {flag: true, message: queries};
    }
    catch(error){
      logger.error(error);
      return {flag: false, message: "Something is wrong, Query not found"}
    }
  }

  updateAnswer = async(query, files) => {
    try{
      const db = new database();
      let result = await db.updateData("customer_support_query", {
        answer: query.answer,
      }, {
        id: query.id
      });
      if(typeof result == 'string' || result.affectedRows <= 0){
        return({flag : false, message: "Answer is not updated..."});
      }
      else{
        files.forEach(async file => {
          try{
            await db.insertData("customer_support_query_attchement", {
              filename: file.filename,
              query_id:  query.id,
              type: file.mimetype,
              error: "Attchement is not found...",
              is_answer: 1,
            })  
          }
          catch(error){
            return;
          }
        });
        return({flag: true, message: 'Answer is updated....'})
      }
    }
    catch(error){
      logger.error(error)
      return({
        flag: false,
        message: 'Answer is not updated...',
      })
    }
  }

  removeQuery = async(id) => {
    try{
      const db = new database();
      let result = await db.updateData("customer_support_query", {
        is_delete: 1,
      }, {
        id: id
      });
      await db.updateData("customer_support_query_attchement", {
        is_delete: 1,
      }, {
        query_id: id
      });
      if(typeof result == 'string' || result.affectedRows <= 0){
        return({flag : false, message: "Query is not removed..."});
      }      
      return({flag: true, message: 'Query is removed....'})
    }
    catch(error){
      logger.error(error)
      return({
        flag: false,
        message: 'Query is not removed...',
      })
    }
  }
}

module.exports = CustomerSupport;