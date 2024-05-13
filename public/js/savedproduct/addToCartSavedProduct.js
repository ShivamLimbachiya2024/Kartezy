const addToCartSavedProduct = async (productId) => {
  const formData = new FormData();
  formData.append("productId", productId);
  formData.append("qty", 1);
  const addToCartData = new URLSearchParams(formData);
  const response = await fetch("/kartezy/userCartinsert", {
    method: "POST",
    body: addToCartData,
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
    }
  });
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
  if(response.status == 200){
    await Swal.fire({
      position: "middle",
      icon: 'success',
      title: result.msg,
      showConfirmButton: false,
      timer: 1500
    });
  }
  else{
    await Swal.fire({
      position: "middle",
      icon: 'error',
      title: result.msg || 'Something is worng...',
      showConfirmButton: false,
      timer: 1500
    });
  }}
}