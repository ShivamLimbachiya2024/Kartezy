const activePassword = async () => {
  if (isValidPassword() == false) {
    return false();
  }

  const passwordData = new URLSearchParams(new FormData(document.getElementById("password_form")));

  let response = await fetch(`/kartezy/password/${window.location.href.split("/").pop()}`, {
    method: "POST",
    body: passwordData,
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
    }
  })

  if (response.status == 200) {
    let result = await response.json();
    if (result.flag == true) {
      Swal.fire({
        title: 'Success...',
        text: result.message,
        icon: 'success',
      });
      window.location.href = "/kartezy/login";
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