var socket = io();

const displayFile = (url, type) => {
  let res;
  if (type.includes("video")) {
    res = `<video alt='Attchement is not found..' autoplay controls height='300px' style='max-width: 100%'><source src='${url}'></source></video>`
  }
  else if (type.includes("image")) {
    res = `<img alt='Attchement is not found..' src='${url}' height='300px' style='max-width: 100%'>`
  }
  Swal.fire({
    position: "middle",
    html: res,
    showConfirmButton: false,
  });
}

const displayPreview = (file) => {
  if (file.type.includes("video")) {
    return `<video class='m-3' height='100px' width='100px' alt='${file.error}' onclick="displayFile('/images/pruduct_comment/${file.filename}', '${file.type}')"><source src='/images/pruduct_comment/${file.filename}' height='100px' width='100px'></source></video>`
  }
  else if (file.type.includes("image")) {
    return `<img class='m-3' height='100px' width='100px' alt='${file.error}' src='/images/pruduct_comment/${file.filename}' onclick="displayFile('/images/pruduct_comment/${file.filename}', '${file.type}')">`
  }
}

const displayCard = (query, isAdmin) => {
  let card = '';
  card += `
    <div class="card m-3" style="margin: auto; width: 90%;">
    <div class="card-header" style="text-align: left;">
      <big class="primary-text">${query.name}</big>
      <br>
      <small class="primary-text">${query.email}</small>
    </div>
    <div class="card-body text-start">
      <p>${query.query}</p> 
  `

  if (query.attchments.length > 0) {
    card += `<div id="imagepreview" style="width: 100%;">`
    for (let i = 0; i < query.attchments.length; i++) {
      if (query.attchments[i].is_answer == 0) {
        card += displayPreview(query.attchments[i]);
      }
    }
    card += `</div>`
  }
  card += `<p class="primary-text text-end">${query.create_at}</p>`
  if (query.answer != null) {
    card += `<p>${query.answer}</p>`
    if (query.attchments.length > 0) {
      card += `<div id="imagepreview" style="width: 100%;">`
      for (let i = 0; i < query.attchments.length; i++) {
        if (query.attchments[i].is_answer == 1) {
          card += displayPreview(query.attchments[i]);
        }
      }
      card += `</div>`
    }
    card += `<p class="primary-text text-end">${query.update_at}</p>`
  }
  if(isAdmin){
    card += `
    <div class='d-flex'>
    <span class='admin-btn m-2' style='width: fit-content' onclick="addAnswerForm(${query.id}, '${query.name}', '${query.email}', '${query.query}')"><i class="bi bi-pencil-square"></i>&nbsp;Edit</span>
    <span class='admin-btn m-2' style='width: fit-content' onclick='removeQuery(${query.id})'><i class="bi bi-trash"></i>Remove</span>
    </div>
    `
  }
  card += '</div></div>'
  return card
}

const displayQuery = async () => {
  const queriesTable = document.getElementById("displayqueries");
  queriesTable.innerHTML = "";
  const response = await fetch("/kartezy/displayQuery");
  let queries = (await response.json()).message;
  if (response.status == 200) {
    queries = queries.filter(query => {
      query.create_at = timeDifference(query.create_at);
      query.update_at = timeDifference(query.update_at);
      return query;
    })
    queries.forEach(query => {
      queriesTable.innerHTML += displayCard(query, true);
    });
  }
  else {
    queriesTable.innerHTML = `<div>${queries || 'Queries not found'}</div>`
  }
}

const addAnswerForm = async (id, name, email, query) => {
  Swal.fire({
    title: "<h1 style='color: #d10024;'><i class='bi bi-question-diamond primary-text fs-2'></i>&nbsp;Customer Support</h1>",
    html: `
      <form method='post' enctype="multipart/form-data" style='text-align: left'>
        <input type='hidden' name='id' id='id' value='${id}'>
        <div>
          <label>Full name</label>
          <input type='text' class='form-control mb-3' style='resize: none' placeholder='Full name...' id='name' value='${name}' name='name' disabled>
        </div>
        <div>
          <label>Email</label>
          <input type='text' class='form-control mb-3' style='resize: none' placeholder='abc@xyz.com' id='email' name='email' value='${email}' disabled>
        </div>
        <div>
          <label>Query</label>
          <textarea class='form-control mb-3' style='resize: none' placeholder='Write here...' id='query' name='query' disabled>${query}</textarea>
        </div>
        <div>
          <label>Answer</label>
          <textarea class='form-control mb-3' style='resize: none' placeholder='Write here...' id='answer' name='answer'></textarea>
          <span class='primary-text' id='answererror'><span>
        </div>
        <div>
          <label class="form-label">Attchemnts </label>
          <input class="form-control" type="file" id="queryAttchement" name="queryAttchement" onchange="queryImagePreiview()" multiple>
          <span class='primary-text' id='fileerror'><span>
          <div id="queryAttchementPreview" class='d-flex mb-3' style='width: 100%; overflow-x: auto'></div>
        </div>
        <div>
          <span onclick = 'addAnswer()' class='admin-btn'><i class="bi bi-floppy"></i>&nbsp;Save</span>
        </div>
      <form>
    `,
    showConfirmButton: false,
  })
}

const addAnswer = async () => {
  let isValid = true;
  if (document.getElementById("answer").value.trim() == "") {
    document.getElementById("answererror").innerHTML = 'Please, Enter answer...'
    isValid = false
  }
  const files = document.getElementById("queryAttchement").files;
  if (files != null) {
    for (let i = 0; i < files.length && isValid == true; i++) {
      const file = files[i];
      // image file size is KB
      // video file size is MB
      if (!((file.type.includes("image") && Math.floor(file.size / (8 * 1024)) < 1024) || (file.type.includes("video") && Math.floor(file.size / (8 * 1024 * 1024)) < 20))) {
        document.getElementById("fileerror").innerHTML = "File is invalid "
        isValid = false
        break;
      }
    }
  }

  if (isValid == true) {
    const formData = new FormData();
    formData.append("id", document.getElementById("id").value.trim())
    formData.append("name", document.getElementById("name").value.trim())
    formData.append("email", document.getElementById("email").value.trim())
    formData.append("query", document.getElementById("query").value.trim())
    formData.append("answer", document.getElementById("answer").value.trim())
    // image append in form data 
    const files = document.getElementById("queryAttchement");
    for (let i = 0; i < files.files.length; i++) {
      formData.append("queryAttchement", files.files[i]);
    }
    const response = await fetch("/kartezy/admin/addanswer", {
      method: "POST",
      body: formData,
    })
    const result = await response.json();
    if (response.status == 200) {
      Swal.fire({
        position: "middle",
        icon: "success",
        title: result.message,
      }).then((result) => {
        if (result.isConfirmed) {
          socket.emit('add_answer_in_exist_query', true);
        }
      });
    }
    else {
      Swal.fire({
        position: "middle",
        icon: "error",
        title: result.message,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}

const removeQuery = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      const formData = new FormData();
      formData.append("id", id)
      const response = await fetch("/kartezy/admin/removeQuery", {
        method: "POST",
        body: new URLSearchParams(formData),
      })
      const result = await response.json();
      if (response.status == 200) {
        Swal.fire({
          position: "middle",
          icon: "success",
          title: result.message,
        }).then((result) => {
          if (result.isConfirmed) {
            socket.emit('add_answer_in_exist_query', true);
          }
        });
      }
      else {
        Swal.fire({
          position: "middle",
          icon: "error",
          title: result.message,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  });
}

socket.on("query_update", async(result)=>{
  await displayQuery();
});