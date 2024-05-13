const addQuery = async()=>{
  const formData = new FormData();
  formData.append("name", document.getElementById("name").value.trim())
  formData.append("email", document.getElementById("email").value.trim())
  formData.append("query", document.getElementById("query").value.trim())
  // image append in form data 
  const files = document.getElementById("queryAttchement");
  for(let i=0; i<files.files.length; i++){
    formData.append("queryAttchement", files.files[i]);
  }
  const response = await fetch("/kartezy/addquery", {
    method: "POST",
    body: formData,
  })
  const result = await response.json();
  if(response.status == 200){
    Swal.fire({
      position: "middle",
      icon: "success",
      title: result.message,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let socket = io();
        socket.emit('add_answer_in_exist_query', true);
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

const queryImagePreiview = () => {
    const files = document.getElementById('queryAttchement').files;
    const preview = document.getElementById('queryAttchementPreview');
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

const displayQueryForm = () => {
  Swal.fire({
    title: "<h1 style='color: #d10024;'><i class='bi bi-question-diamond primary-text fs-2'></i>&nbsp;Customer Support</h1>",
    html: `
      <form method='post' enctype="multipart/form-data" style='text-align: left'>
        <div>
          <label>Full name</label>
          <input type='text' class='form-control mb-3' style='resize: none' placeholder='Full name...' id='name' name='name'>
        </div>
        <div>
          <label>Email</label>
          <input type='text' class='form-control mb-3' style='resize: none' placeholder='abc@xyz.com' id='email' name='email'>
        </div>
        <div>
          <label>Query</label>
          <textarea class='form-control mb-3' style='resize: none' placeholder='Write here...' id='query'></textarea>
        </div>
        <div>
          <label class="form-label">Attchemnts </label>
          <input class="form-control" type="file" id="queryAttchement" name="queryAttchement" onchange="queryImagePreiview()" multiple>
          <div id="queryAttchementPreview" class='d-flex mb-3' style='width: 100%; overflow-x: auto'></div>
        </div>
      <form>
    `
  }).then(async(result)=>{
    if (result.isConfirmed) {
      let isValid = true
      if(document.getElementById("name").value.trim()=="" && isValid==true){
        isValid = false
        message = 'Please, Enter your name...'
      }
      if(document.getElementById("email").value.trim()=="" && isValid==true){
        isValid = false
        message = 'Please, Enter your email id...'
      }
      if(document.getElementById("query").value.trim()=="" && isValid==true){
        isValid = false
        message = 'Please, Enter your query...'
      }
      const files = document.getElementById("queryAttchement").files;
      if(files!=null)
      {
        for(let i=0; i<files.length && isValid == true; i++){
          const file = files[i];
          // image file size is KB
          // video file size is MB
          if(!((file.type.includes("image") && Math.floor(file.size/(8*1024)) < 1024 ) || (file.type.includes("video") && Math.floor(file.size/(8*1024*1024)) < 20) )){
            message="File is invalid "
            isValid= false
          }
        }  
      }

      if(isValid == true){
        await addQuery();
      }
      else{
        Swal.fire({
          position: "middle",
          icon: "error",
          title: message,
          showConfirmButton: false,
          timer: 1500
        });  
      }
    }
  });
}