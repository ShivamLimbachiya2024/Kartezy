let data
let oldData = []
async function allProducts(){
  const response=await fetch('/kartezy/admin/allProducts');
  data=await response.json();

  const cont = document.getElementById('productlisting');
    // cont.innerHTML=`<div class="row my-3" >
   
    //   </div>`

    data.forEach(ele => {  



      cont.innerHTML += `<div class="col-md-3 flex flex-col justify-center items-center my-2" ><div class="card flex flex-col justify-center align items-center m-auto py-5"><h3 class="px-3 text-center">${ele.product_name}</h3>
        <img src="/images/products/${ele.main_image_path}" width="200" height="200" style="margin:auto"></img>
        <div class="d-flex row m-auto my-3 px-1" ><p class="fs-3">Vendor id:-&nbsp;<span class="fs-4">${ele.vender_id}</span></div>
  
        </div>
       
        </div>`


    });
    // window.scrollTo(0, document.body.scrollHeight);
  
}
allProducts();

async function search() {
  const query = document.getElementById('query').value.trim()



  if (oldData.length == 0) {
    // oldData = gridComponentResult
    oldData = data
  }
  // gridComponentResult = oldData;
  data = oldData;
  data = data.filter(item => {
    return Object.values(item).toString().toLowerCase().includes(query.toLowerCase())
  })



  if(data==''){
    document.getElementById("message").innerHTML=`<h2>No result found for '${query}'<h2>`
  }
  else{
    document.getElementById("message").innerHTML=''
  }



  // gridResult();
   document.getElementById('productlisting').innerHTML='';
  // cont.innerHTML=`<div class="row my-3" >
 
  //   </div>`

  data.forEach(ele => {  



    document.getElementById("productlisting").innerHTML += `<div class="col-md-3 flex flex-col justify-center items-center my-2" ><div class="card flex flex-col justify-center align items-center m-auto py-5"><h3 class="px-3 text-center">${ele.product_name}</h3>
      <img src="/images/products/${ele.main_image_path}" width="200" height="200" style="margin:auto"></img>
      <div class="d-flex row m-auto my-3 px-1" ><p class="fs-3">Vendor id:-&nbsp;<span class="fs-4">${ele.vender_id}</span></div>

       <div col-3 class="d-flex justify-content-center"> <button type="button" onclick="sendMessage(${ele.id})" class="btn btn-danger mx-">Delete</button><div>
      </div>
     
      </div>`


  });

}


