const addReview = async() => {
  const formData = new FormData();
  formData.append("rate", document.querySelectorAll("i.rate.bi-star-fill").length)
  formData.append("review", document.getElementById("review").value.trim())
  formData.append("productId",  window.location.href.split("/").pop())
  // image append in form data 
  const files = document.getElementById("commentAttchement");
  for(let i=0; i<files.files.length; i++){
    formData.append("commentAttchement", files.files[i]);
  }
  const response = await fetch("/kartezy/reivew", {
    method: "POST",
    body: formData,
  })
  if(response.redirected == true){
    Swal.fire({
      position: "middle",
      icon: "error",
      title: "Please Login....",
      footer: "<a href='/kartezy/login'>Login</a>",
      showConfirmButton: false,
      timer: 1500
    });
  }else{
  const result = await response.json();
  if(response.status == 200){
    Swal.fire({
      position: "top-end",
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
      position: "top-end",
      icon: "error",
      title: result.message,
      showConfirmButton: false,
      timer: 1500
    });    
  }
}
}

const commentImagePreiview = () => {
  const files = document.getElementById('commentAttchement').files;
  const preview = document.getElementById('commentAttchementPreview');
  preview.innerHTML = '';
  if (files) {
    for(let i=0; i<files.length; i++){
      const file = files[i];
      const url = URL.createObjectURL(file);
      if(file.type.includes("image")){
        let img = document.createElement("img");
        img.src = url;
        img.style = 'width: 100px; height: 100px; padding: 5px; border-radius: 10px'
        preview.appendChild(img);
      }
      else if(file.type.includes("video")){
        let video = document.createElement("video");
        let src = document.createElement("source");
        src.src = url;
        video.appendChild(src);
        video.style = 'width: 100px; height: 100px; padding: 5px; border-radius: 10px'
        video.controls = true;
        video.autoplay = true;
        preview.appendChild(video);
      }
    }
  }
}

const reviewForm = () => {
  Swal.fire({
    title: "<h1 style='color: #d10024;'>Review</h1>",
    html: `
      <form method='post' enctype="multipart/form-data" style='text-align: left'>
        <div>
          <label for="multipleImg" class="form-label primary-text">Upload Images :</label>
          <input class="form-control" type="file" id="commentAttchement" name="commentAttchement" onchange="commentImagePreiview()" multiple>
          <span class="multipleImgError primary-text" id='fileError'></span>
          <div id="commentAttchementPreview" class='d-flex mb-3' style='width: 100%; overflow-x: auto'></div>
        </div>
        <div>
          <label style = 'color:#D10024;'>Add Review</label>
          <textarea class='form-control mb-3' style='color: #d10024; resize: none' placeholder='Write here...' id='review'></textarea>
        </div>
        <label style = 'color:#D10024;'>Add Rate</label>
        <div class='d-flex border-2' style='aligin-self: center'>
          <i class="bi bi-star fs-2 m-2 rate" style='color: #D10024;' name='rate' id='reviewRate1' onclick='fillRate(this)'></i>
          <i class="bi bi-star fs-2 m-2 rate" style='color: #D10024;' name='rate' id='reviewRate2' onclick='fillRate(this)'></i>
          <i class="bi bi-star fs-2 m-2 rate" style='color: #D10024;' name='rate' id='reviewRate3' onclick='fillRate(this)'></i>
          <i class="bi bi-star fs-2 m-2 rate" style='color: #D10024;' name='rate' id='reviewRate4' onclick='fillRate(this)'></i>
          <i class="bi bi-star fs-2 m-2 rate" style='color: #D10024;' name='rate' id='reviewRate5' onclick='fillRate(this)'></i>
        </div>
      <form>
    `
  }).then(async()=>{
    const files = document.getElementById("commentAttchement").files;
    let isvalid = true
    for(let i=0; i<files.length; i++){
      const file = files[i];
      // image file size is KB
      // video file size is MB
      if(!((file.type.includes("image") && Math.floor(file.size/(8*1024)) < 1024 ) || (file.type.includes("video") && Math.floor(file.size/(8*1024*1024)) < 20) )){
        document.getElementById("fileError").innerHTML="File is invalid "
        Swal.fire({
          title: "<h1 style='color: #d10024;'>File type is invalid</h1>",
          icon: "error"
        })
      }
    }
    if(document.querySelectorAll("i.rate.bi-star-fill").length > 0 || document.getElementById("review").value.trim() || document.getElementById("commentAttchement").files.length >0){
      await addReview();
    }
  });
}