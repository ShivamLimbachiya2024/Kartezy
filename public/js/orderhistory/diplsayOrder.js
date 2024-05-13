const displayInofrmation = (order) => {
  document.getElementById("order").innerHTML = `
    <div class='row' style='width: 100% border: 3px solid;'>
      <div class='col-lg-6'>
        <table cellpadding='10px'>
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
            <th><i class="bi bi-calendar-minus primary-text"></i>&nbsp;Ordered : </th>
            <td>${order.create_at}</td>
          </tr>

          <tr>
            <th><i class="bi bi-calendar-minus primary-text"></i>&nbsp;Delivered : </th>
            <td>${order.deliver_date}</td>
          </tr>

          <tr>
            <th><i class="bi bi-truck primary-text"></i>&nbsp;Satus : </th>
            <td>${order.status}</td>
          </tr>

          <tr>
            <th><i class="bi bi-pencil-square primary-text"></i>&nbsp;Note : </th>
            <td>${order.order_note}</td>
          </tr>

          <tr>
            <th><b><i class="bi bi-currency-rupee primary-text"></i>&nbsp;Total Price : </h3></b>
            <th><b>${order.total_price}</b></th>
          </tr>
        </table>
      </div>
      <div class='col-lg-6' id='statuschart'></div>
    </div>
  `
}

const displayProducts = (products) => {
  document.getElementById("order").innerHTML += "<h3 class='primary-text text-center mt-4'>Products</h3><table class='table' id='items' align='center' width='80%' cellpadding='10px'><table>"
  const table = document.getElementById("items");
  table.innerHTML += `<tr><th>Index</th><th>Product name</th><th>Price</th><th>Quantity</th><th>Total Price</th></tr>`;
  let count = 1;
  products.forEach(product => {
    table.innerHTML += `
      <tr>
        <td>${count++}</td>
        <td>${product.product_name}</td>
        <td>${product.price}</td>
        <td>${product.qty}</td>
        <td>${product.total_price}</td>
      </tr>
    `
  });
}

const displayStatusChart = (statues) => {
  statues = statues.filter(status=>{
    status.create_at = timeDifference(status.create_at);
    return status
  })
  
  const series = [0, 0, 0, 0];
  const label = [ 'Pending', 'Shipped', 'Intransit','Delivered' ]
  for(let i=0; i<statues.length; i++){
    switch(statues[i].status){
      case 'pending':
        series[0] = 100
        label[0] += ` ${statues[i].create_at}`
        break;
      case 'shipped':
        label[1] += ` ${statues[i].create_at}`
        series[1] = 100
        break;
      case 'intransit':
        label[2] += ` ${statues[i].create_at}`
        series[2] = 100
        break;
      case 'delivered':
        label[3] += ` ${statues[i].create_at}`
        series[3] = 100
        break;
    }
  }
  series[statues.length-1] = 50;
  series.reverse();
  label.reverse();

  var options = {
    series: series,
    chart: {
    height: 450,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            return 100
          }
        }
      }
    }
  },
  labels: label,
  };

  var chart = new ApexCharts(document.querySelector("#statuschart"), options);
  chart.render();
}

const displayParticularOrder = async () => {
  const response = await fetch(window.location.href, { method: 'POST' });
  const order = await response.json();
  if (response.status == 200) {
    displayInofrmation(order.message.information)
    displayProducts(order.message.items)
    displayStatusChart(order.message.statuses);
    document.getElementById("invoicegenratebtn").addEventListener('click', () => { invoiceGenrate(order.message) })
  }
  else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: order.message || 'Somethig is wrong..',
      showConfirmButton: false,
      timer: 2000
    });
  }
}

let socket = io();
socket.on("statuschanged", (data)=>{
  if(data.orderId == window.location.href.split("/").pop() || data ==true){
    displayParticularOrder()
  }
})