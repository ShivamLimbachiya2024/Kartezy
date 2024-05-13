const adminServices = require("../../services/admin.services/admingetReport.service");
const addNotification = require("../../services/notification.service");

const getTotalVendors = async (req, res) => {

  try {
    let result = await adminServices.getTotalVendors();
    res.send(result)
  }
  catch (error) {
    throw error
  }
}

const getTotalVendorReport = async (req, res) => {
  try {
    res.render("pages/admin/totalVendorReport.ejs")
  }
  catch (error) {
    res.send({
      flag: false,
      error: "there was error in getting customer report"
    })
  }
}


const getTotalCustomerReport = async (req, res) => {
  try {
    res.render("pages/admin/customerReport.ejs")
  }
  catch (error) {
    res.send({
      flag: false,
      error: "there was error in getting customer report"
    })
  }

}

const getCustomerOrderHistoryReport = async (req, res) => {
  try {
    res.render("pages/admin/customerOrderHistory.ejs")
  }
  catch (error) {
    res.send({
      flag: false,
      error: "there was error in getting customer order history report"
    })
  }
}

const getTotalCustomer = async (req, res) => {
  try {
    let result = await adminServices.getTotalCustomers();
    res.send(result)
  }
  catch (error) {
    throw error
  }
}
const getTotalProducts = async (req, res) => {
  try {
    let result = await adminServices.getTotalProducts();
    res.send(result)
  }
  catch (error) {
    throw error
  }
}
const getTotalProductReport = async (req, res) => {
  try {
    res.render("pages/admin/totalProductReport.ejs")
  }
  catch (error) {
    res.send({
      flag: false,
      error: "there was error in getting total product report"
    })
  }
}

const getCustomerOrderHistory = async (req, res) => {
  try {
    let result = await adminServices.getCustomerOrderHistory();
    res.send(result)
  }
  catch (error) {
    throw error
  }
}


const displayVendorsList = async (req, res) => {
  res.render("pages/admin/adminVendordelete.ejs")
}

const deleteVendor = async (req, res) => {
  const id = req.query.id;
  try {
    let result = await adminServices.deleteVendorServices(id);
    res.json(result)
  }
  catch (error) {
    res.send({
      flag: false,
      error: "there was error in getting deleteing vendor"
    })
  }

}


const getReport = async (req, res) => {
  try {
    res.render("pages/admin/adminReport.ejs")
  }
  catch (error) {
    res.send({
      flag: false,
      error: "there was error in getting customer report"
    })
  }
}

const specificVendorProduct=async(req,res)=>{
  const id = req.query.id;
  try {
    let result = await adminServices.getVendorSpecificProduct(id);
    res.json(result)
  } 
  catch (error) {
    res.send({
      flag: false,
      error: "there was error in getting getting vendor specific result"
    })
  }
}

const specificVendorProductView = async (req, res) => {
  res.render("pages/admin/adminVendorProductView.ejs")
}

const adminVendorMessage=async(req,res)=>{

let result=await addNotification(req.body.userid,req.body.title,req.body.note);
try{
  if(typeof result=="string"){
    res.status(500).send({error:"message cannot be send due to some server issue"})
  }
  else{
    res.status(200).send({message:"message sent successfully"})
  }
}
catch(error){
  res.status(500).send({error:"there is  some kind of error in operation"})
}

}

const getOrdertobeAssign=async(req,res)=>{
  let result=await adminServices.assignOrderServices(req.body.status);
  try{
    if(typeof result=="string"){
      res.status(500).send({error:"there was a problem in executing query"})
    }
    else{
      res.status(200).send(result)
    }
  }
  catch(error){
    res.status(500).send({error:"there is  some kind of error in operation"})
  }
}
const getAllLogistics=async(request, response)=>{
  let result=await adminServices.getAllLogisticsDetails(request.query.status?request.query.status:'all');
  try{
    if(typeof result=="string"){
      response.status(500).send({error:"there was a problem in executing query"})
    }
    else{
      response.status(200).send(result)
    }
  }
  catch(error){
    response.status(500).send({error:"there is  some kind of error in operation"})
  }
}


const productListing = async (req, res) => {
  try {
    res.render("pages/admin/allProduct.ejs")
  }
  catch (error) {
    res.send({
      flag: false,
      error: "there was error in getting customer report"
    })
  }
}

const allProducts=async(req,res)=>{

  let result=await adminServices.allProducts();
  try{
    if(typeof result=="string"){
      res.status(500).send({error:"there was a problem in executing query"})
    }
    else{
      res.status(200).send(result)
    }
  }
  catch(error){
    res.status(500).send({error:"there is  some kind of error in operation"})
  }
}

module.exports = {
  getTotalVendors, getTotalCustomer, getTotalProducts, getCustomerOrderHistory, displayVendorsList, deleteVendor, getTotalCustomerReport,
  getCustomerOrderHistoryReport, getTotalProductReport, getTotalVendorReport, getReport,specificVendorProduct,specificVendorProductView,adminVendorMessage,getOrdertobeAssign,
  productListing,allProducts,getAllLogistics
}
