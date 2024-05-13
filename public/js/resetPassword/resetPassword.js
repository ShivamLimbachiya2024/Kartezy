/****************************
 reset password form validation
****************************/
const isValidResetPassword = () => {
  let count = 0;
  if(document.getElementById("rePassword").value.trim() == ""){
    document.getElementById('rePassword').focus();
    document.getElementById("repassworderror").innerHTML = "Please enter re password";
    count=1;
  }
  if(document.getElementById("newPassword").value.trim() == ""){
    document.getElementById('newPassword').focus();
    document.getElementById("newpassworderror").innerHTML = "Please enter new password";
    count=1;
  }
  if(document.getElementById("oldPassword").value.trim() == ""){
    document.getElementById('oldPassword').focus();
    document.getElementById("oldpassworderror").innerHTML = "Please enter old password";
    count=1
  }
  if(document.getElementById("rePassword").value.trim() != document.getElementById("newPassword").value.trim() && count == 0){
    document.getElementById("newpassworderror").innerHTML = "Please new password and re-password not match";
    document.getElementById('newPassword').focus();
    document.getElementById('newPassword').value = "";
    document.getElementById('rePassword').value = "";
    count=1
  }
  return count;
}


const resetPassword = async () => {
  if(isValidResetPassword() == 1){
    return;
  }
  const passwordData = new URLSearchParams(new FormData(document.getElementById("resetpasswordform")));
  let response = await fetch(`/kartezy/resetPassword`, {
    method: "POST",
    body: passwordData,
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
    }
  })

  let result = await response.json();
  if (response.status == 200) {
    if (result.flag == true) {
      await Swal.fire({
        title: 'Success...',
        text: result.message,
        icon: 'success',
      });
    }
    else {
      Swal.fire({
        title: 'Opps...',
        text: result.message,
        icon: 'error',
      });
    }
  }
  else {
    Swal.fire({
      title: 'Opps...',
      text: result.message || 'internet service not provided...',
      icon: 'error',
    });
  }
}