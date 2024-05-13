
//  
let response;
let data;
let obj = {}
function validateForm() {
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const name = /^[a-zA-Z ]+$/;
  const formdata = document.querySelectorAll("#vender input");

  obj.error = []
  formdata.forEach(ele => {
    if (ele.value == '') {


      let v = document.getElementById(`${ele.name}` + "Error").innerHTML = `${ele.name}` + " " + "required";
      obj.error.push(`${ele.name}` + " " + "required")
    }


    else if (ele.value != '') {
      document.getElementById(`${ele.name}` + "Error").innerHTML = '';
    }


  })


  formdata.forEach(ele => {
    if (ele.name == 'firstname' && ele.value != '') {
      const fname = ele.value.trim()
      if (!name.test(fname)) {
        document.getElementById(`${ele.name}` + "Error").innerHTML = `enter proper name`;
        obj.error.push(`enter proper name`)
      }

    }
    if (ele.name === 'email' && ele.value != '') {
      const email = ele.value.trim()
      if (!emailRegex.test(email)) {
        document.getElementById(`${ele.name}` + "Error").innerHTML = `enter proper email`;
        obj.error.push(`enter proper email`)
      }

    }

    if (ele.name === 'lastName' && ele.value != '') {
      const lastName = ele.value.trim()
      if (!name.test(lastName)) {
        document.getElementById(`${ele.name}` + "Error").innerHTML = `enter proper last Name`;
        obj.error.push(`enter proper last name`)
      }

    }
    if (ele.name === 'mobile' && ele.value != '') {
      const mobile = ele.value.trim()
      if (!phoneRegex.test(mobile)) {
        document.getElementById(`${ele.name}` + "Error").innerHTML = `enter proper mobile no`;
        obj.error.push(`enter proper mobile no`)
      }

    }

  })


}


document.addEventListener('DOMContentLoaded', async () => {

  response = await fetch('/kartezy/vendor/getdata');
  data = await response.json();
  JSON.stringify(data)

  if (data.result[0].id) {
    document.getElementById("button").innerHTML = "edit vendor"
    populateFormWithUserData();



  }

});




// var url = window.location.href.substring(22);
// var urlUpdate = url.match("update");
// var urlInsert = url.match("insert")


async function submitVendordata() {

  validateForm();
  if (obj.error != "") {
    return
  }

  const form = document.getElementById('vender');
  const formData = new FormData(form);
  const serializedFormData = {};

  for (const [key, value] of formData.entries()) {
    const fieldName = key.replace('[]', '');
    if (!serializedFormData[fieldName]) {
      serializedFormData[fieldName] = [];
    }
    serializedFormData[fieldName].push(value);

  }





  try {


    const response = await fetch(`/kartezy/vendor/update/${data.result[0].id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(serializedFormData)
    });
    const res = await response.json();
    if (res.flag == false) {
      document.getElementById("errorEmail").innerHTML = "updation failed";
      return
    }
    if (res.flag == true) {
      // document.getElementById("successEmail").innerHTML = "Data updated successfully"
      Swal.fire({
        title: "Profile updated!",
        text: "Vendor Profile has been edited successfully",
        icon: "success"
      }).then(()=>{window.location.href='/kartezy/vendorAdmin/dashboard'})

    }
  }
  catch (error) {
    console.error("There was a problem with your fetch operation:", error)
  }
}







async function populateFormWithUserData() {
  //  response = await fetch(`/kartezy/vendor/getdata`);
  //  data = await response.json();
  // JSON.stringify(data)

  document.getElementById("firstName").value = data.result[0].first_name
  document.getElementById("lastName").value = data.result[0].last_name
  document.getElementById("email").value = data.result[0].email

  document.getElementById("mobileNo").value = data.result[0].mobile_no
  document.getElementById("dob").value = data.result[0].dob


}

