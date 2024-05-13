const mysql = require("mysql");

const conn = mysql.createConnection({
  host : process.env.DB_HOST,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE,
  dateStrings: true
});

try {
  conn.connect(error=>{
    if(error){
      console.log(error);
      throw error;
    }
  })

}
catch(error){
  throw error;

} 

module.exports = conn;
