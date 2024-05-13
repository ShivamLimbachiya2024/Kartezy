const editProfile = async() => {
  let isValid = true;
  if(document.getElementById("firstName").value.trim()==""){
    document.getElementById("firstName").focus();
    document.getElementById("firstnameerror").innerHTML = 'Please, Enter First Name...'
    isValid = false;
  }
  if(document.getElementById("lastName").value.trim()==""){
    document.getElementById("lastName").focus();
    document.getElementById("lastnameerror").innerHTML = 'Please, Enter Last Name...'
    isValid = false;
  }
  if(document.getElementById("dob").value.trim()==""){
    document.getElementById("dob").focus();
    document.getElementById("doberror").innerHTML = 'Please, Enter Date Of Birth...'
    isValid = false;
  }
  if(isValid == false){
    return;
  }
  const response = await fetch("/kartezy/user/update",{
    method: 'POST',
    body: new URLSearchParams(new FormData(document.getElementById("updateuserform"))),
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
    }
  })
  const result = await response.json();
  if(response.status == 200){
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
      timer: 1500
    });
  }
}

const editProfilePage = async() => {
  const response = await fetch("/kartezy/user", {method: "POST"});
  const user = await response.json();
  if(response.status == 200){
    Swal.fire({
      position: "middle",
      html: `
        <form id='updateuserform'>
        <table align='center' cellpadding='10px'>
          <tr>
            <td colspan='2' style='font-size: 100px; font-weight: bold' class='primary-text'>${user.first_name[0].toLocaleUpperCase()}</td>
          </tr>
          <tr>
            <td class='text-start'><i class="bi bi-person-fill primary-text"></i>&nbsp;First name : </td>
            <td class='text-start'><input class='form-control' type='text' value='${user.first_name}' placeholder='Enter first name...' id='firstName' name='firstName'></td>
          </tr>
          <tr><td colspan='2'><span class='primary-text' id='firstnameerror'></span></td></tr>
          <tr>
            <td class='text-start'><i class="bi bi-person primary-text"></i>&nbsp;Last name : </td>
            <td class='text-start'><input class='form-control' type='text' value='${user.last_name}' placeholder='Enter last name...' id='lastName' name='lastName'></td>
          </tr>
          <tr><td colspan='2'><span class='primary-text' id='lastnameerror'></span></td></tr>
          <tr>
            <td class='text-start'><i class="bi bi-calendar-minus primary-text"></i>&nbsp;Date Of Birth : </td>
            <td class='text-start'><input class='form-control' type='date' value='${user.dob}' id='dob' name='dob'></td>
          </tr>
          <tr><td colspan='2'><span class='primary-text' id='doberror'></span></td></tr>
          <tr>
            <td colspan='2'><span class='admin-btn' onclick='editProfile()'><i class="bi bi-person-gear"></i>&nbsp;Update Profile<span></td>
          </tr>
        </table>
        </form>
      `,
      showConfirmButton: false,

    });
  }
  else{
    Swal.fire({
      position: "middle",
      icon: "error",
      title: user.message || 'User not found...',
      showConfirmButton: false,
      timer: 1500
    });
  }
}