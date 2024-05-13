const addLogistics = async() => {
  isValid = true;
  if(document.getElementById("dob").value.trim()==""){
    document.getElementById("doberror").innerHTML = "Enter birthdate..."
    document.getElementById("dob").focus();
    isValid = false;
  }
  if(document.getElementById("phoneno").value.trim()==""){
    document.getElementById("phonenoerror").innerHTML = "Enter phone no..."
    document.getElementById("phoneno").focus();
    isValid = false;
  }
  if(document.getElementById("email").value.trim()==""){
    document.getElementById("emailerror").innerHTML = "Enter email id..."
    document.getElementById("email").focus();
    isValid = false;
  }
  if(document.getElementById("lastname").value.trim()==""){
    document.getElementById("lastnameerror").innerHTML = "Enter last name..."
    document.getElementById("lastname").focus();
    isValid = false;
  }
  if(document.getElementById("firstname").value.trim()==""){
    document.getElementById("firstnameerror").innerHTML = "Enter first name..."
    document.getElementById("firstname").focus();
    isValid = false;
  }

  if(!isValid){
    return isValid;
  }
  let EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
  let CONTACT = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if(!EMAIL.test(document.getElementById("email").value.trim())){
    document.getElementById("emailerror").innerHTML = "Enter Valid Email ID..."
    document.getElementById("email").focus();
    isValid = false;
  }
  if(!CONTACT.test(document.getElementById("phoneno").value.trim())){
    document.getElementById("phonenoerror").innerHTML = "Enter Valid Mobile no..."
    document.getElementById("phoneno").focus();
    isValid = false;
  }

  if(!isValid){
    return isValid;
  }

  const formData = new URLSearchParams(new FormData(document.getElementById("register_form")))
  
  const response = await fetch("/kartezy/admin/addLogistics", {
    method: "POST",
    body: formData
  })
  const result =await response.json();
  
  if(response.status == 200 && result.flag == true){
    Swal.fire({
      position: "middle",
      icon: "success",
      title: result.message,
      showConfirmButton: false,
      timer: 1500
    });
  }
  else{
    Swal.fire({
      position: "middle",
      icon: "error",
      title: result.message,
      showConfirmButton: false,
      timer: 2000
    });
  }
  await displayLogistics();
}

const addLogisticForm = () => {
    Swal.fire({
    title: "<h1 style='color: #d10024;'>&nbsp;<i class='bi bi-truck-flatbed'></i>&nbsp;Assign Order</h1>",
    html: `
    <form id='register_form' style="width: 100%;" >
    <div class="container p-4">
      <div class="row">
        <div class="col mb-3" style='text-alingn:center'>
          <input tabindex="1" type="text" name="firstname" id="firstname" placeholder="First Name" class="form-control">
          <span id='firstnameerror' class='primary-text '><span>
        </div>
      </div>

      <div class='row'>
        <div class="col mb-3">
          <input type="text" tabindex="2" name="lastname" id="lastname" placeholder="Last Name" class="form-control">
          <span id='lastnameerror' class='primary-text '><span>
        </div>
      </div>

      <div class="row">
        <div class="col mb-3">
          <input type="text" tabindex="3" name="email" id="email" placeholder="Email Id"
            class="form-control">
          <span id='emailerror' class='primary-text '><span>
          </div>
      </div>

      <div class="row">
        <div class="col mb-3">
          <input type="text" tabindex="4" name="phoneno" id="phoneno" placeholder="Phone No."
            class="form-control">
          <span id='phonenoerror' class='primary-text '><span>
          </div>
      </div>

      <div class="row">
        <div class="col mb-3">
          <input type="text" tabindex="5" placeholder="Birthdate" name="dob" id="dob"class="form-control" onfocus="this.type='date'">
          <span id='doberror' class='primary-text w-100'><span>
          </div>
      </div>

      <div class="row">
        <div class="col mb-3">
          <input type="button" tabindex="6"class="admin-btn w-100" onclick="return addLogistics()" value="Sigin Up">
        </div>
      </div>
    </div>
  </form>
    `,
    showConfirmButton: false
  })
}

const displayLogistics = async () => {
  const response = await fetch("/kartezy/admin/getAllLogistics")
  const resData = await response.json();
  if (response.status === 200) {

    const thead = document.querySelector("table thead");
    thead.innerHTML="";
    const tr = document.createElement("tr");
    if (resData.length != 0) {

      let fields = Object.keys(resData[0]);
      fields.forEach(el => {
        let th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.classList.add('text-capitalize');
        th.innerText = el.replace(/_/g, " ");
        tr.appendChild(th);
      });
      thead.appendChild(tr);

      const tbody = document.querySelector("table tbody");
      tbody.innerHTML="";
      resData.forEach(el => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${el.id}</td>
          <td>${el.first_name || "-"}</td>
          <td>${el.last_name || "-"}</td>
          <td>${el.email || "-"}</td>
          <td>${el.mobile_no || "-"}</td>
          <td>${el.city || "-"}</td>
          <td>${el.pincode || "-"}</td>
          <td> ${(el.status) ? '<span class="badge bg-label-primary me-1 text-uppercase">Active</span>' : '<span class="badge bg-label-warning me-1 text-uppercase">Inactive</span>'} </td>
          `;
        tbody.appendChild(row);
      })
    } else {
      tr.innerHTML = `<th>No data Found</th>`;
      thead.appendChild(tr);
    }

  } else {
    console.log(resData.msg);
  }
}