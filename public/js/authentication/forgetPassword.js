const forgetPassword = async () => {
	if (isValidForgetPassword() == false) {
		return false;
	}
	const userData = new URLSearchParams(new FormData(document.getElementById("forget_password")));

	let response = await fetch("/kartezy/forgetPassword", {
		method: "POST",
		body: userData,
		headers: {
			'Content-Type': "application/x-www-form-urlencoded",
		}
	})
	let result = await response.json();
	if(response.status == 200 && result.flag==true){
		url = `/kartezy/password/${result.activationCode}`;
    Swal.fire({
      title: 'Register',
      html: `<div>${result.message}<br><span class='text-success'>Activation code : ${result.activationCode}</span><br><span id='time'><span><div>`,
      icon: 'success',
      showConfirmButton: false,
      footer: `<a class='btn btn-primary' href="${url}">Click me</a>`
    });
    clientVariable = await fetch("/kartezy/clientvariable");
    clientVariable = await clientVariable.json();
    timer('time', clientVariable.ACTIVATION_TIME_TO_ACTIVE_USER);
    return true;
	}
	else{
		Swal.fire({
      title: 'Oops...',
      text: result.message,
      icon: 'error',
    });
		return false;
	}
}