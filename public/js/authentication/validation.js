/****************************
 *check string is avilable or not in this id and return empty string id
****************************/
const isRequiredString = (arr) => {
  let error = [];
  arr.forEach(key => {
    if (document.getElementById(key).value.trim() == "") {
      error.push(key);
    }
  })
  return error;
}

/****************************
 *print all error message
****************************/
const printErrorMessage = (id, msg) => {
  let node = document.getElementById(id).parentNode;
  node.innerHTML += `<small class='text-danger'>${msg}</small>`;
}

/****************************
 *remove all error message
****************************/
const removeErrorMessage = () => {
  const errors = document.querySelectorAll('small.text-danger')
  errors.forEach(error => error.remove())
}

/****************************
 *check string is number or not and return number strin
****************************/
const isNumberString = (arr) => {
  let error = [];
  arr.forEach(item=>{
    if (!isNaN(document.getElementById(item).value.trim())) {
      error.push(item);
    }
  })
  return error;
}

/****************************
 *check regular expression
****************************/
const regularExp = (type, id) => {
  let EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
  let CONTACT = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let DATE = /\d{2,4}\-\d{1,2}\-\d{1,2}/;
  switch (type) {
    case "email":
      if(EMAIL.test(document.getElementById(id).value.trim()))
        return true;
      break;
    case "mobile":
      if (CONTACT.test(document.getElementById(id).value.trim()))
        return true;
      break;
    case "date":
      if (DATE.test(document.getElementById(id).value.trim()))
        return true;
      break;
  }
  return false;
}

/****************************
 *registration form validation
****************************/
function isValidUser() {
  removeErrorMessage();
  let labels = {
    'firstName': 'First name',
    'lastName': 'Last name',
    'email': 'Email ID',
    'phoneno': 'Phone number',
    'date': 'Birthdate'
  }
  let errors = isRequiredString(Object.keys(labels));

  let res = isNumberString([
    'firstName',
    'lastName',
  ])

  res.forEach(item=>{
    if(errors.indexOf(item)<0){
      errors.push(item);
    }
  })

  if(regularExp('email', 'email') == false && errors.indexOf('email')<0)
    errors.push('email')

  if(regularExp('mobile', 'phoneno') == false && errors.indexOf('phoneno')<0)
    errors.push('phoneno')

  if(regularExp('date', 'date') == false && errors.indexOf('date')<0)
    errors.push('date')

  let flag = true;
  let count = 0;
  errors.forEach((error, count) => {
    if(count == 0){
      document.getElementById(error).autofocus = true;
      count++;
    }
    printErrorMessage(error, `${labels[error]} is invalid...`)
    flag = false;
  })
  return flag;
}

/****************************
 *Password change validation
****************************/
const isValidPassword = () => {
  removeErrorMessage();
  const labels = {
    "newPassword" : "New password ",
    "confirmPassword" : "Confirm password"
  }
  let errors = isRequiredString(Object.keys(labels));

  let flag = true;
  let count = 0;
  errors.forEach(error => {
    if(count == 0){
      document.getElementById(error).autofocus = true;
      count++;
    }
    printErrorMessage(error, `${labels[error]} is invalid...`)
    flag = false;
  })
 
  if(flag == true){
    if(document.getElementById("newPassword").value != document.getElementById("confirmPassword").value)
    {
      flag = false;
      document.getElementById("newPassword").value = "";
      document.getElementById("confirmPassword").value = "";
      document.getElementById("newPassword").autofocus = true;
      printErrorMessage("newPassword", "Password and confirm password not match...")
    }
  }
  return flag;
}

/****************************
 *login form validation
****************************/
const isValidLogin = () => {
  removeErrorMessage();
  let labels = {
    "userName" : "Email id / mobile no ",
    "password" : "Password"
  }
  let errors = isRequiredString(Object.keys(labels));

  let flag = true;
  let count = 0;
  errors.forEach(error => {
    if(count == 0){
      document.getElementById(error).autofocus = true;
      count++;
    }
    printErrorMessage(error, `${labels[error]} is invalid...`)
    flag = false;
  })
  return flag;
}

/****************************
 forget password form validation
****************************/
const isValidForgetPassword = () => {
  const username = document.getElementById("userName");
	removeErrorMessage();
	let flag = true;
	if (username.value.trim() == "") {
		username.autofocus = true;
		printErrorMessage('userName', 'Email ID / Mobile number is required...');
		flag = false;
	}  
	return flag; 
}

/****************************
 reset password form validation
****************************/
const isValidResetPassword = () => {
  removeErrorMessage();
  const labels = {
    oldPassword: "Old Password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
  }
  let errors = isRequiredString(Object.keys(labels));

  let flag = true;
  let count = 0;

  errors.forEach(error => {
    if(count == 0){
      document.getElementById(error).autofocus = true;
      count++;
    }
    printErrorMessage(error, `${labels[error]} is invalid...`)
    flag = false;
  })

  if(flag == true){
    if(document.getElementById("newPassword").value != document.getElementById("confirmPassword").value)
    {
      flag = false;
      document.getElementById("newPassword").value = "";
      document.getElementById("confirmPassword").value = "";
      document.getElementById("newPassword").autofocus = true;
      printErrorMessage("newPassword", "Password and confirm password not match...")
    }
  }
  return flag;
}
