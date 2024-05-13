const getCategories=async(req,res)=>{
  try{
    res.render("pages/admin/adminListCategory.ejs")
  }
  catch(error){
    res.send({
      flag:"false",
      error:"page not found"
    })
  }
}

const addCategories=async(req,res)=>{
  try{
    res.render("pages/admin/adminaddCategory.ejs")
  }
  catch(error){
    res.send({
      flag:"false",
      error:"page not found"
    })
  }
}
module.exports={getCategories,addCategories}