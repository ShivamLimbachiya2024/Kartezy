const isLogin = async () => {
  if (isValidLogin() == false) {
    return false;
  }
  try{
    const loginData = new URLSearchParams(new FormData(document.getElementById("login_form")));

    let response = await fetch("/kartezy/login", {
      method: "POST",
      body: loginData,
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
      }
    })

    let result = await response.json();
    if (response.status == 200) {
      Swal.fire({
        title: 'Welcome',
        text: result.message,
        icon: 'success',
      });
      window.location.href = result.url;
    }
    else {
      if (Object.keys(result).indexOf('block_time') < 0) {
        Swal.fire({
          title: 'Oops...',
          text: result.message,
          icon: 'error',
        });
      }
      else {
        Swal.fire({
          title: 'Oops...',
          html: `${result.message}<br><span id = 'time'></span>`,
          icon: 'error',
          showConfirmButton: false,
        });
        timer('time', result.block_time * 60);
      }
    }
    return true;
  }
  catch(error){
    Swal.fire({
      title: 'Oops...',
      html: `Serer is not running....`,
      icon: 'error',
      showConfirmButton: false,
    });
  }
}