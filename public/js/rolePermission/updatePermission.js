const updatePermission = async(node) => {
  let formData = new FormData();
  formData.append("rolePermissionId", node.value);
  formData.append("token", cookies.token);
  const rolePermissionData = new URLSearchParams(formData);

  let response = await fetch("/kartezy/rolepermission/modifypermission", {
    method: "POST",
    body: rolePermissionData,
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
    }
  })
  const result = await response.json();
  if(response.status == 200){
    Swal.fire({
      title: 'Success...',
      text: result.message,
      icon: 'success',
    });
  }
  else{
    Swal.fire({
      title: 'Opps...',
      text: result.message,
      icon: 'error',
    });
  }
}