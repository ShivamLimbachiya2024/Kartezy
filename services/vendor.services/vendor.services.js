const database = require("../../helpers/database.helper");
const db = new database();

const insertVendordataServices = async (data) => {
  try {
    // const db = new database();
    let result = await db.executeQuery('select * from users where email=?', data.email[0]);
    if (result && result.length > 0) {
      return { flag: false }
    }
    else {

      let obj = {
        role_id:2,
        first_name: data.firstname[0],
        email: data.email[0],
        dob: data.dob[0],
        last_name: data.lastName[0],
        mobile_no: data.mobile[0]
      }

      let result = await db.insertData("users", obj);
      return { flag: true }
    }

  }
  catch (error) {
    console.error("there was an error while running the query", error)
  }


}

const getVendordataServices = async (id) => {
  try {
    // const db = new database();
    is_delete=0;
    var values=[id,is_delete]
    let result = await db.executeQuery('select * from users where id=? and is_delete=?',values);
    if (typeof result == 'string') {
      return {
        flag: false,
        error: "Data is not found..."
      }
    }
    else {
      return { flag: true, result }
    }

  }
  catch (error) {
    throw error
  }
}




const checkingVendorExistence = async (id) => {

  const db = new database();
  let result1 = await db.executeQuery('select * from users where id=?', id)
  return result1


}

const updatingVendordataServices = async (data, id) => {
  try {
    // const db=new database();
  let result1=await db.executeQuery('select * from users where id=?',id)
    if (result1 && result1.length > 0) {

      let obj = {
        first_name: data.firstname[0],
        email: data.email[0],
        dob: data.dob[0],
        last_name: data.lastName[0],
        mobile_no: data.mobile[0]
      } 

      condition = {
        id: id
      }

      const db = new database();
      db.updateData("users", obj, condition)
      return{ flag: true }

    }
    else{
      return{
        flag:false,
        error:"no data found to be updated"
      }
    }
  }
  catch (error) {
    throw error
  }


}



module.exports = { insertVendordataServices, getVendordataServices, checkingVendorExistence, updatingVendordataServices}