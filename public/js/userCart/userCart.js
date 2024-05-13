let subTotal = 0;
let outOfStock;
let isActive;
const fetchData = async () => {
  try {
    const response = await fetch('/kartezy/userCartfetch', { method: "POST" })
    const jsonResp = await response.json()
    fillFetchedData(jsonResp)
  } catch (error) {
    console.log(error);
  }
}
const subQty = (event) => {
  let curQty = parseInt(event.target.nextElementSibling.innerHTML);
  if (curQty > 0) {
    curQty--;
  }
  event.target.nextElementSibling.innerHTML = curQty
  updateQty(event)
}
const addQty = (event) => {
  let curQty = parseInt(event.target.previousElementSibling.innerHTML);
  curQty++;
  event.target.previousElementSibling.innerHTML = curQty
  updateQty(event)
}
const fillFetchedData = (jsonResp) => {
  subTotal = 0
  outOfStock = false;
  isActive = true;
  const tbody = document.getElementById('tbody');
  jsonResp.forEach((obj) => {
    subTotal += obj.total_prize;
    if ((obj.total_qty - obj.qty) < 0) outOfStock = true
    if (obj.is_active == 0) isActive = false
    const newTr = document.createElement('tr');
    newTr.innerHTML = ` 
<input type='hidden' value='${obj.product_id}'>
<td data-th="Product">
  <div class="row">
    <div class="col-md-3 text-left">
      <img src="/images/products/${obj.attechment_path}" alt="${obj.attechment_path}"
        class="img-fluid d-none d-md-block rounded mb-2">
    </div>
    <div class="col-md-9 text-left mt-sm-2">
    <a style="color: black;text-decoration: none;" href='/kartezy/product/${obj.product_id}'><h4>${obj.product_name}</h4></a>
    <a style="color: black;text-decoration: none;" href='/kartezy/product/${obj.product_id}'>
      <p class="font-weight-light">${obj.product_description} &amp; Name</p>
    </a>
    </div>
  </div>
</td>
<td >
  <button onclick=subQty(event) class="btn btn-secondary">-</button>
  <span style="margin: 5px;">${obj.qty}</span>
  <button onclick=addQty(event) class="btn btn-secondary">+</button>
</td>
<td>${obj.price} INR</td>
<td>${isActive == true ? obj.total_qty : 0} </td>
<td>${obj.total_prize} INR</td>
<td>${isActive ? obj.total_qty - obj.qty < 0 ? "Out of Stock" : "In Stock" : "Out of Stock"}</td>
<td><button onclick="updateQty(event,0)" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
        `;
    tbody.appendChild(newTr)
  })
  document.getElementById('subTotal').innerHTML = subTotal + " INR ";
  document.getElementById('totalProducts').innerHTML = jsonResp.length;
}
const updateQty = async (event, qty) => {
  const qtyUpdateObj = {}
  const productTdArr = event.target.closest('tr').getElementsByTagName('td')
  qtyUpdateObj['product_id'] = event.target.closest('tr').getElementsByTagName('input')[0].value;
  if (qty === 0) {
    qtyUpdateObj['qty'] = 0
  } else {
    qtyUpdateObj['qty'] = productTdArr[1].getElementsByTagName('span')[0].innerHTML;
  }
  qtyUpdateObj['price'] = parseInt(productTdArr[2].innerHTML) * qtyUpdateObj['qty'];

  try {
    const response = await fetch('/kartezy/userCartupdate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(qtyUpdateObj)
    })
    if (response.status === 200) {
      document.getElementById('tbody').innerHTML = ''
      Swal.fire({
        title: "Cart Updated!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
      });
      await fetchData()
    } else {
      Swal.fire({
        title: "Something Went Wrong!",
        icon: "error"
      });
    }
  } catch (error) {
    console.log(error);
  }
}
const checkOut = () => {
  if (outOfStock || (isActive == false)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Some of the products you have selected are currently out of Stock",
    });
  } else if (subTotal === 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No items present in cart!"
    });
  } else {
    window.location.href = "/kartezy/checkOutFrom"
  }
}
fetchData()

