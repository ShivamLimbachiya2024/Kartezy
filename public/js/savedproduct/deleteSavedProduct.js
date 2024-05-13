const deleteSavedProduct = async (productId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't delete saved product",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async(result) => {
    if (result.isConfirmed) {
      const response = await fetch(`/kartezy/removeSavedProduct/${productId}`, { method: "POST" });
      const result = await response.json();
      if (response.status == 200) {
        await Swal.fire({
          position: "middle",
          icon: "success",
          title: result.message,
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();
      }
      else {
        Swal.fire({
          position: "middle",
          icon: "Opps..",
          title: result.message || 'Somethig is wrong..',
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
  });
}