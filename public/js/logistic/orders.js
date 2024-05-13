// === pagination logic ======/
let data;
let page = 1;
const itemsPerPage = 10;
let totalPage;

document.querySelector(".nextButton").addEventListener('click', ()=>{
  if(page < totalPage){
    page++;
    pagination();
    document.querySelector(".page a").innerHTML = page;
  }
  
})

document.querySelector(".prevButton").addEventListener('click', ()=>{
  if(page > 1){
    page--;
    pagination();
    document.querySelector(".page a").innerHTML = page;
  }
})

document.querySelector(".lastPage").addEventListener('click', ()=>{
  if(page < totalPage){
    page = totalPage;
    pagination();
    document.querySelector(".page a").innerHTML = page;
  }
  
})

document.querySelector(".firstPage").addEventListener('click', ()=>{
  if(page > 1){
    page = 1;
    pagination();
    document.querySelector(".page a").innerHTML = page;
  }
})

const pagination = () => {
  let startIndex = (page - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let cutData = data.slice(startIndex, endIndex)
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = '';
  cutData.forEach(el => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${el.id}</td>
      <td>${el.order_id}</td>
      <td>${el.address}</td>
      <td>${el.order_note}</td>
      <td> 
      ${(el.status == 'intransit')? '<span class="badge bg-label-warning me-1 text-uppercase">In transit</span>' : ''} 
      ${(el.status == 'delivered')? '<span class="badge bg-label-primary me-1 text-uppercase">Delivered</span>' : ''} 
      ${(el.status == 'shipped')? '<span class="badge bg-label-info me-1 text-uppercase">shipped</span>' : ''} 
      ${(el.status != 'shipped' && el.status != 'delivered' && el.status != 'intransit')? '<span class="badge bg-label-success me-1 text-uppercase">' + el.status  + '</span>' : ''} 
      </td>
      <td>
        <div class="">
          <button  class ="p-2 viewDetails" type="button" style="background: none; border: none; margin: 0;"><i class="bi bi-eye-fill color-purple me-1"></i></button>
          ${(el.status != 'delivered')? '<button data-id ="' + el.order_id + '" class ="p-2 updateOrder" type="button" style="background: none; border: none; margin: 0;"><i class="bi bi-pencil-square color-orange"></i></button>' : ''}  
        </div> 
    </td>`;
    tbody.appendChild(row);
    const updateBtn = row.querySelector(".updateOrder");
    if(updateBtn){
      updateBtn.addEventListener('click',(event)=>{
        updateOrder(el.order_id,el.status);
      })
    }

    const viewDetails = row.querySelector(".viewDetails");
    viewDetails.addEventListener('click',()=>{
      fetchOrderReq(el.order_id);
    })
    
  })
}

// === pagination end ======/

let socket = io();
const updateOrder =(id,status) =>{
 let nextStatus;
  switch (status) {
    case 'shipped':
      nextStatus = 'In-Transit';
      break;
    case 'intransit':
      nextStatus = 'Delivered';
      break;
    default:
      nextStatus = 'Delivered';
  }


  Swal.fire({
    title: "You Want To order is " + nextStatus,
    text: "Are you sure?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then( async (result) => {
    if (result.isConfirmed) {

      const response = await fetch("/kartezy/logistic/updateOrder", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderId : Number(id)
        })
      });
      const resData = await response.json();
      if (response.status === 200) {
        socket.emit('statuschange', {orderId: id});

      } else {
        Swal.fire({
          title: resData.status,
          text: resData.msg,
          icon: "error"
        });
      }
      
    }
  });

}

const displayOrders = async () => {
  const response = await fetch("/kartezy/logistic/orderslists", {
    method: "POST",
  })
  const resData = await response.json();
  if (response.status === 200) {
    // pagination required
    totalPage = Math.ceil(resData.length / itemsPerPage);
    data = resData;
    pagination();
    // pagination end
    
    const thead = document.querySelector("table thead");
    thead.innerHTML = '';
    const tr = document.createElement("tr");
    if(resData.length != 0){
  
      let fields = Object.keys(resData[0]);
      fields.forEach(el => {
        let th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.classList.add('text-capitalize');
        th.innerText = el.replace(/_/g, " ");
        tr.appendChild(th);
      });
      let th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.innerText = 'Action';
      tr.appendChild(th);
      thead.appendChild(tr);
  
      
    } else {
      tr.innerHTML = `<th>No data Found</th>`;
      thead.appendChild(tr);
    }

  } else {
    console.log(resData.msg);
  }
}
displayOrders();

const fetchOrderReq = async (orderId) => {
  document.getElementById('orderItems').innerHTML = ''
  try {
    const response = await fetch('/kartezy/logistic/api/getOrderDetails', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ orderId })
    })
    if (response.status === 200) {
      let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
      myModal.show()
      const jsonResp = await response.json();
      fillOrderData(jsonResp)
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  } catch (error) {
    console.log(error);
  }
}
const fillOrderData = (jsonResp) => {
  document.getElementById('orderId').innerHTML = 'Order #' + jsonResp.order_id
  if (jsonResp.odr_status === 'delivered') {
    document.getElementById('orderStatus').setAttribute('class', 'bg-label-primary badge  me-2 fs-6 ms-2')
    document.getElementById('orderStatus').innerHTML = jsonResp.odr_status
  } else if (jsonResp.odr_status === 'intransit') {
    document.getElementById('orderStatus').setAttribute('class', 'bg-label-warning  badge  me-2 fs-6 ms-2')
    document.getElementById('orderStatus').innerHTML = jsonResp.odr_status
  } else {
    document.getElementById('orderStatus').setAttribute('class', 'bg-label-info badge  me-2 fs-6 ms-2')
    document.getElementById('orderStatus').innerHTML = jsonResp.odr_status
  }
  document.getElementById('orderPlaced').innerHTML = jsonResp.order_placed
  document.getElementById('username').innerHTML = jsonResp.first_name + ' ' + jsonResp.last_name
  document.getElementById('userId').innerHTML = 'Customer ID: #' + jsonResp.user_id
  document.getElementById('email').innerHTML = 'Email: ' + jsonResp.email
  document.getElementById('phone').innerHTML = 'Mobile: ' + jsonResp.mobile_no
  document.getElementById('shippingAddress').innerHTML = jsonResp.house_no + ', ' + jsonResp.land_mark + '<br> ' + jsonResp.area + '<br>' + jsonResp.city + ',' + jsonResp.state + '<br> Pincode: ' + jsonResp.pincode
  document.getElementById('billingAddress').innerHTML = jsonResp.house_no + ', ' + jsonResp.land_mark + '<br> ' + jsonResp.area + '<br>' + jsonResp.city + ',' + jsonResp.state + '<br> Pincode: ' + jsonResp.pincode
  document.getElementById('paymentype').innerHTML = jsonResp.type_of_transection;
  const tbody = document.getElementById('orderItems');
  let subTotal = 0
  jsonResp.Products.forEach((prdctObj) => {
    subTotal += prdctObj.total_price
    const newTr = document.createElement('tr')
    newTr.innerHTML = ` <td class="  control" style="display: none;" tabindex="0"></td>
                          <td class="sorting_1">
                            <div class="d-flex justify-content-start align-items-center text-nowrap">
                              <div class="avatar-wrapper">
                                <div class="avatar me-2 "><img src="/images/products/${prdctObj.main_image_path}" alt="product-Wooden Chair" class="rounded-2 w-50"></div>
                              </div>
                              <div class="d-flex flex-column">
                                <h6 class="text-body mb-0">${prdctObj.product_name}</h6><small class="text-muted">${prdctObj.category_name}</small>
                              </div>
                            </div>
                        </td>
                        <td><span>${prdctObj.price} INR</span></td>
                        <td><span class="text-body">${prdctObj.qty}</span></td>
                        <td>
                          <h6 class="mb-0">${prdctObj.total_price} INR</h6>
                        </td>`
    tbody.appendChild(newTr)
  })
  document.getElementById('subTotal').innerHTML = subTotal + ' INR'
  document.getElementById('shippingCost').innerHTML = '+' + jsonResp.shipping_cost + ' INR'
  document.getElementById('subTotalWithShipping').innerHTML = jsonResp.shipping_cost + subTotal + ' INR'
}

socket.on("statuschanged", (data)=> {
  displayOrders();
})