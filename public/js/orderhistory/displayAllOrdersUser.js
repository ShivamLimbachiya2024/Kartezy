const displayAllOrdersUser = async () => {
  const response = await fetch("/kartezy/orders", { method: 'POST' })
  const result = await response.json();
  if (response.status == 200) {
    const orders = result.message;
    const container = document.getElementById("orderhistory")
    if (orders.length == 0) {
      container.innerHTML = '<h1>Order is not found</h1>'
      container.className = "text-center"
      return;
    }
    orders.forEach(order => {
      let progress = 25;
      switch(order.status){
        case "pending":
          progress = 25
          break;
        case "shipped":
          progress = 50
          break;
        case "intransit":
          progress = 75
          break;
        case "delivered":
          progress = 100;
          break;
      }
      container.innerHTML += `
      <div class="card m-3">
      <div class="card-body">
          <table cellpadding='10px' style='width: 100%'>
            <tr>
              <td><h3><i class="bi bi-bag-check-fill primary-text"></i>&nbsp;Order id : </h3></td>
              <td><h3>${order.order_id}</h3></th>
            </tr>

            <tr>
              <th><i class="bi bi-person-bounding-box primary-text"></i>&nbsp;Customer name : </th>
              <td>${order.customer_name}</td>
            </tr>

            <tr>
              <th><i class="bi bi-telephone-fill primary-text"></i>&nbsp;Mobile no : </th>
              <td>${order.mobile_no}</td>
            </tr>

            <tr>
              <th><i class="bi bi-geo-alt-fill primary-text"></i>&nbsp;Address : </th>
              <td>${order.address}</td>
            </tr>

            <tr>
              <th><i class="bi bi-truck-flatbed primary-text"></i>&nbsp;Status : </th>
              <td>${order.status}</td>
            </tr>

            <tr>
              <th><i class="bi bi-calendar-check primary-text"></i>&nbsp;Delivered Date : </th>
              <td>${order.deliver_date}</td>
            </tr>

            <tr>
              <th><h3><i class="bi bi-currency-rupee primary-text"></i>&nbsp;Total Price : </h3></th>
              <th><h3>${order.total_price}</h3></th>
            </tr>

            <tr>
            <th colspan='2'>
              <i class="bi bi-truck-flatbed primary-text"></i>&nbsp;Status : <br>
              <div class="progress mt-2 mb-3" style="height: 20px; width: 100%">
                <div class="progress-bar bg-red" role="progressbar" style="width: ${progress}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </th>
            </tr>
          </table>
        <a href="/kartezy/orders/${order.order_id}" class="btn admin-btn" style="width: fit-content;">View order</a>
      </div>
    </div>
      `
    });
  }
  else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: result.message || 'Somethig is wrong..',
      showConfirmButton: false,
      timer: 2000
    });
  }
}