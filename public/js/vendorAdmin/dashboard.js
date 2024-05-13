const dashboardCounts = async () => {
  const response = await fetch("/kartezy/vendorAdmin/api/dashboardcount", {
    method: "POST",
  })
  const resData = await response.json();
  if (response.status === 200) {
    const div = document.querySelector(".dashboardCounter");
    div.innerHTML = `<div class="col-md-3">
    <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
        <div>
            <h3 class="fs-2">${resData.productsCount}</h3>
            <p class="fs-5">Products</p>
        </div>
        <i class="bi bi-box2 fs-1 primary-text border rounded-full  dashboard-count"></i>
    </div>
    </div>

    <div class="col-md-3">
        <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
                <h3 class="fs-2">${resData.ordersCount}</h3>
                <p class="fs-5">Total Ordes</p>
            </div>
            <i class="bi bi-receipt fs-1 primary-text border rounded-full  dashboard-count"></i>
        </div>
    </div>

    <div class="col-md-3">
        <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
                <h3 class="fs-2">${resData.pendingOrderCount}</h3>
                <p class="fs-5">Pending Orders</p>
            </div>
            <i class="bi bi-receipt fs-1 primary-text border rounded-full  dashboard-count"></i>
        </div>
    </div>

    <div class="col-md-3">
        <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
                <h3 class="fs-2">${resData.completedOrderCount}</h3>
                <p class="fs-5">Delivered</p>
            </div>
            <i class="bi bi-truck fs-1 primary-text border rounded-full  dashboard-count"></i>
        </div>
    </div>

    <div class="col-md-3">
        <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
                <h3 class="fs-2">${resData.outOfStock}</h3>
                <p class="fs-5">Out Of Stock</p>
            </div>
            <i class="bi bi-exclamation-lg fs-1 primary-text border rounded-full  dashboard-count"></i>
        </div>
    </div>`;
  } else {
    console.log(resData.msg);
  }
}
dashboardCounts();
