let subTotal = 0;
let singleProductCheck = false;
let cartCheck = false;
const url = window.location.href
const pid = url.slice(url.lastIndexOf('/') + 1, url.lastIndexOf('?'));
const urlParams = new URLSearchParams(window.location.search);
let qty = urlParams.get('qty');
const fetchData = async () => {
  try {
    const response = await fetch('/kartezy/userCartfetch', { method: "POST" })
    const jsonResp = await response.json()
    fillFetchedData(jsonResp)
  } catch (error) {
    console.log(error);
  }
}
const fetchProductData = async (pid) => {
  try {
    const response = await fetch(`/kartezy/fetchSingleProductCheckout/${pid}`, { method: "POST" })
    const jsonResp = await response.json()
    fillFetchedData(jsonResp)
    if (isNaN(qty)) {
      qty = 1
    } else {
      if (parseInt(qty) < 1) {
        qty = 1
      }
    }
    const price = document.getElementsByClassName('pricePrd')[0].innerHTML
    document.getElementsByClassName('prdQty')[0].innerHTML = qty + 'x'
    document.getElementById('subTotal').innerHTML = `${parseInt(price) * parseInt(qty)}`
  } catch (error) {
    console.log(error);
  }
}
const fetchUserAddr = async () => {
  try {
    const response = await fetch('/kartezy/userAddrfetch', { method: "POST" })
    const jsonResp = await response.json()
    fillUserAddData(jsonResp)
  } catch (error) {
    console.log(error);
  }
}
const fetchPaymentDetail = async () => {
  try {
    const response = await fetch('/kartezy/userPaymentfetch', { method: "POST" })
    const jsonResp = await response.json();
    fillUserPaymentData(jsonResp)
  } catch (error) {
    console.log(error);
  }
}
const fillFetchedData = (jsonResp) => {
  subTotal = 0
  const list = document.getElementById('list');
  const totalPrize = document.getElementById('totalPrize');
  jsonResp.forEach((obj) => {
    subTotal += obj.total_prize;
    const li = document.createElement('li');
    li.setAttribute("class", "list-group-item d-flex justify-content-between lh-condensed");
    li.innerHTML = ` 
          <div>
            <h6 class="my-0">${obj.product_name}</h6>
            <small class="text-muted mr-2" style='width:230px; display: inline-block; text-align: justify; font-size: 13px; overflow: scroll;'>${obj.product_description} </small>
          </div>
          <span class="text-muted"><span class="prdQty">${obj.qty}x </span> | <span class="pricePrd">${obj.total_prize}</span> INR</span>
          `;
    list.appendChild(li)
  })
  list.appendChild(totalPrize)
  document.getElementById('subTotal').innerHTML = subTotal;
}

const fillUserAddData = (jsonResp) => {
  const custAdd = document.getElementById('custadd');
  jsonResp.forEach((obj) => {
    const particularAdd = document.createElement('div');
    particularAdd.setAttribute("class", "d-flex justify-content-between");
    particularAdd.innerHTML = ` 
          <div class='d-flex'>
            <input type="radio" id="address${obj.id}" name="address" value="${obj.id}">
          <label for="address${obj.id}" class="address" fs-5">
            <strong class='addTitle'>${obj.titel}</strong>
            <p class="addr-p"><span class='houseNo'>${obj.house_no}</span>, Near <span class='landmark'>${obj.land_mark}</span>, <span class='area'>${obj.area}</span></p>
            <p class="addr-p"><span class='city'>${obj.city}</span>, <span class='state'>${obj.state}</span>, <span class='pincode'>${obj.pincode}</span></p>
            </label>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn btn-danger" type="button" onclick="deleteAddressDetail(event)">Delete</button>
          </div>
          `;
    custAdd.appendChild(particularAdd)
  })
}
const fillUserPaymentData = (jsonResp) => {
  const custAdd = document.getElementById('custPayment');
  jsonResp.forEach((obj) => {
    const particularAdd = document.createElement('div');
    particularAdd.setAttribute("class", "d-flex justify-content-between");
    particularAdd.innerHTML = ` 
          <div class='d-flex'>
            <input type="radio" id="payment${obj.id}" name="payment" value="${obj.id}">
          <label for="payment${obj.id}" class="address fs-5">
            <strong>${obj.card_holder_name}</strong>
            <p class="addr-p">${obj.card_type}, Card Number: **********${obj.card_number.slice(-4)}, Expiry: ${obj.expiry}</p>
            <p class="addr-p">CVV ${obj.cvv}</p>
            </label>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn btn-danger" type="button" onclick="deletePaymentDetail(event)">Delete</button>
          </div>
          `;
    custAdd.appendChild(particularAdd)
  })
}
const deleteAddressDetail = async (event) => {
  Swal.fire({
    title: 'Do you want to delete address?',
    showCancelButton: true,
    confirmButtonText: "Yes !"
  }).then(async (result) => {
    if (result.isConfirmed) {
      event.target.parentElement.parentElement.getElementsByTagName('input')[0].checked = false;
      const addId = event.target.parentElement.parentElement.getElementsByTagName('input')[0].value;
      event.target.parentElement.parentElement.setAttribute("class", "d-none")
      try {
        const response = await fetch('/kartezy/deleteUserCheckoutDetail', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ addId })
        })
        if (response.status === 200) {
          Swal.fire("Deleted!", "", "success")
        } else {
          Swal.fire("Something went wrong!", "", "error")
        }
      } catch (error) {
        console.log(error);
      }
    }
  });


}
const deletePaymentDetail = async (event) => {
  Swal.fire({
    title: 'Do you want to delete payment Info?',
    showCancelButton: true,
    confirmButtonText: "Yes !"
  }).then(async (result) => {
    if (result.isConfirmed) {
      event.target.parentElement.parentElement.getElementsByTagName('input')[0].checked = false;
      const payId = event.target.parentElement.parentElement.getElementsByTagName('input')[0].value;
      event.target.parentElement.parentElement.setAttribute("class", "d-none")
      try {
        const response = await fetch('/kartezy/deleteUserCheckoutDetail', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ payId })
        })
        if (response.status === 200) {
          Swal.fire("Deleted!", "", "success")
        } else {
          Swal.fire("Something went wrong!", "", "error")
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  );
}
fetchUserAddr()
fetchPaymentDetail()
if (!isNaN(pid) && !isNaN(parseInt(pid))) {
  if (parseInt(pid) && parseInt(pid) > 0) {
    singleProductCheck = true;
    fetchProductData(pid)
  }
} else if (window.location.pathname === '/kartezy/checkOutFrom') {
  cartCheck = true;
  fetchData()
}
document.getElementById('checkoutForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const formdata = new FormData(document.getElementById('checkoutForm'))
  const data = new URLSearchParams(formdata);
  let isValid = true;
  const payment = data.get('payment');
  const address = data.get('address');
  if (!address) {
    document.getElementById('addErr').setAttribute('class', 'd-block font-weight-bold fs-4 text-danger')
    isValid = false
  } else {
    document.getElementById('addErr').setAttribute('class', 'd-none')
  }
  if (!payment) {
    document.getElementById('payErr').setAttribute('class', 'd-block font-weight-bold fs-4 text-danger')
    isValid = false
  } else {
    document.getElementById('payErr').setAttribute('class', 'd-none')
  }
  if (isValid) {
    if (singleProductCheck) {
      const singlePrdQtyObj = {
        productId: pid,
        qty: qty,
        paymentId: payment,
        addressId: address,
        orderNote: document.getElementById('order_note').value
      }
      const response = await fetch('/kartezy/singleProductOrder', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(singlePrdQtyObj)
      })
      const orderRes = await response.json()
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Order placed succesfully!"
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = `/kartezy/orders/${orderRes.orderId}`
          }
        });
      } else {
        Swal.fire({
          title: orderRes.msg,
          icon: "error"
        });
      }
    } else if (cartCheck) {
      const cartOrderObj = {
        paymentId: payment,
        addressId: address,
        orderNote: document.getElementById('order_note').value
      }
      const response = await fetch('/kartezy/orderFromCart', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartOrderObj)
      })
      const orderRes = await response.json()
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Order placed succesfully!"
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = `/kartezy/orders/${orderRes.orderId}`
          }
        });
      } else {
        Swal.fire({
          title: orderRes.msg,
          icon: "error"
        });
      }
    } else {
      Swal.fire({
        title: "Something went wrong!",
        icon: "error"
      });
    }
  }
})

