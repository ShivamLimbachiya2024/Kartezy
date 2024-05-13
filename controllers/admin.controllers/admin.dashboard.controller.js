const adminDashboardServices = require("../../services/admin.services/adminDashBoardServices")

const getAdminDashboard=async(req,res)=>{
  try{
    res.render("pages/admin/adminDashboard.ejs")
  }
  catch(error){
    res.send({
      flag:"false",
      error:"page not found"
    })
  }
}
const getRecentOrders=async(req,res)=>{
  try{
    let result1=await adminDashboardServices.getRecentOrderServices();
   res.send(result1)
  }
  catch(error){
    res.send({
      flag:"false",
      error:"error in executing the query"

    })
  }
}

const assignOrder=async(req,res)=>{
  try{
    res.render("pages/admin/orderAssign.ejs")
  }
  catch(error){
    res.send({
      flag:"false",
      error:"there was an error in loading the page"
    })
  }
}

module.exports={getAdminDashboard,getRecentOrders,assignOrder}
