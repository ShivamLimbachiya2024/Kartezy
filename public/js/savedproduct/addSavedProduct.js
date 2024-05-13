const addSavedProduct = async(productId) => {
  const response = await fetch(`/kartezy/savedProduct/${productId}`, {method: "POST"});
  if(response.status == 200){
    if(response.redirected == true){
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "Please Login....",
        footer: "<a href='/kartezy/login'>Login</a>",
        showConfirmButton: false,
        timer: 1500
      });
    }
    else{
      const result = await response.json();
      Swal.fire({
        position: "middle",
        icon: "success",
        title: result.message,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  else{
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: result.message ||'Somethig is wrong..',
      title: 'Somethig is wrong..',
      showConfirmButton: false,
      timer: 2000
    });
  }
}