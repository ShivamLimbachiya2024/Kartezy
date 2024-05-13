const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let data;
    // let data
    async function vendorProduct(id) {
      const response = await fetch(`/kartezy/admin/vendorProducts?id=${id}`)
      data = await response.json();
      const cont = document.getElementById('pl');
      cont.innerHTML=`<div class="row my-3" >
        <div class= d-flex row justify-content-start><h3 class="me-2">Vendor  Name:</h3> <span class="fs-4">${data.result2[0].first_name}</span></div>
        </div>`

      data.result.forEach(ele => {  
        const d=new Date(ele.create_at);
        const date=d.getDate();
        const month=d.getMonth();
        const year=d.getFullYear();

        const added_on=date+'/'+month+'/'+year
        cont.innerHTML += `<div class="col-md-3 flex flex-col justify-center items-center" ><div class="card flex flex-col justify-center align items-center m-auto py-5"><h3 class="px-3 text-center">${ele.product_name}</h3>
          <img src="/images/products/${ele.main_image_path}" width="250" height="250" style="margin:auto">
          <div class="d-flex row m-auto my-3 px-3" ><p class="fs-3">Available Quantity:-&nbsp;<span class="fs-5">${ele.quanitiy}</span></p><p class="fs-3">Last added on:&nbsp;&nbsp;<span class="fs-5">${added_on}</span></p></div>
          <div class="d-flex row m-auuto my-3 px-3"><p class="fs-5">Leave a message for the vendor regarding this product</p> 
           <div col-3> <button type="button" onclick="sendMessage(${ele.id})" class="btn btn-danger">Leave a note</button><div>
          </div>
         
          </div>`


      });
    }
    vendorProduct(id);

    const sendMessage = (id) => {
  Swal.fire({
    title: `<h3 style='color: #583239'>A Message to ${data.result2[0].first_name} regarding the product id ${id}</h3>`,
    html: `
      <form method='post' enctype="multipart/form-data" style='text-align: left'>
       
        <div>
          <label style = 'color:#583239;'>Title</label>
          <input class="form-control" type="text" placeholder="enter a title" id='review'>
        </div>
        <div>
          <label style = 'color:#583239;'>Add Message</label>
          <textarea class='form-control mb-3' style='color: #d10024; resize: none' placeholder='Write here...' id='note'></textarea>
        </div>
      

      <form>
    `
  }).then(async()=>{
    if(document.getElementById("review").value.trim()){
      await addMessage(data.result2[0].id);
    }
  });
}

const addMessage = async(id) => {
  const formData = new FormData();
  formData.append("userid", id)
  formData.append("title", document.getElementById("review").value.trim())
  formData.append("note", document.getElementById("note").value.trim())
  const response = await fetch(`/kartezy/admin/vendorNote`, {
    method: "POST",
    body: new URLSearchParams(formData),
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
    }
  })
  const result = await response.json();
  if(response.status == 200){
    Swal.fire({
      position: "middle",
      icon: "success",
      title: result.message
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        location.reload()
      }
    });  
  }
  else{
    Swal.fire({
      position: "middle",
      icon: "error",
      title: result.message,
      showConfirmButton: false,
      timer: 1500
    });    
  }
}