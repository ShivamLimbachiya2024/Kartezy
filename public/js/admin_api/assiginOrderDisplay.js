let socket = io();

const displayPendingOrder = async () => {
  const displayOrder = document.getElementById("displayOrder")
  try {
    let formData = new FormData();
    formData.append("status", "Pending")
    const response = await fetch("/kartezy/admin/assignOrdersData", { method: "POST", body: new URLSearchParams(formData) });
    const orders = await response.json();
    displayOrder.innerHTML = ``
    if (response.status == 200) {
      document.getElementById("displayHeaderOrder").innerHTML = `Asign Oredres - ${orders.length}`;
      for(let i=0; i<orders.length; i++) {
        let order = orders[i];
        displayOrder.innerHTML += `
        <div class="card m-2" style="width: 18rem;" draggable="true">
          <div class="card-header primary-text">
            <input type='checkbox' value='${order.order_id}' class='form-check-input' id='orderId'>
            <b>Order id : ${order.order_id}</b>
          </div>
          <div class="card-body">
            <div class='primary-text'>Address : </div>
            <p>${order.delivery_address}</p>
            <hr>
            <div class='primary-text'>Order date : </div>
            <p>${order.order_date}</p>
            <HR>  
            <div class='primary-text'>Order delivered date : </div>
            <p>${order.expected_delivery_date}</p>
          </div>
        </div>
      `
      }
    }
    else {
      document.getElementById("displayHeaderOrder").innerHTML = `Asign Oredres - 0`
      displayOrder.innerHTML = `<div class='text-secondary'>Order not found...</div>`
    }
  }
  catch (error) {
    document.getElementById("displayHeaderOrder").innerHTML = `Asign Oredres - 0`
    displayOrder.innerHTML = `<div class='text-secondary'>Order not found...</div>`
  }
}

const displayLogistics = async () => {
  const displayLogistics = document.getElementById("displayLogistics")
  
  try {
      const response = await fetch("/kartezy/admin/getAllLogistics");
    const logistics = await response.json();
    displayLogistics.innerHTML = ``
    if (response.status == 200 && logistics.length > 0) {
      document.getElementById("displayHeaderLogistics").innerHTML = `Logistics - ${logistics.length}`;
      logistics.forEach(logistic => {
        displayLogistics.innerHTML += `
          <div class="card m-3" style="width: 18rem; height: 15rem">
          <input type='hidden' value='${logistic.id}' id="logisticId">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><div class='primary-text'>Name : ${logistic.first_name} ${logistic.last_name}</div></li>
              <li class="list-group-item">Email : ${logistic.email}</li>
              <li class="list-group-item">Mobileno : ${logistic.mobile_no}</li>
              <li class="list-group-item">City : ${logistic.city}</li>
              <li class="list-group-item">Pin code : ${logistic.pincode}</li>
            </ul>
          </div>
        `
      });
    }
    else {
      document.getElementById("displayHeaderLogistics").innerHTML = `Asign Oredres - 0`
      displayLogistics.innerHTML = `<div class='text-secondary'>Logistic not found...</div>`
    }
  }
  catch (error) {
    document.getElementById("displayHeaderLogistics").innerHTML = `Asign Oredres - 0`
    displayLogistics.innerHTML = `<div class='text-secondary'>logistic not found...</div>`
  }
}

const assignOrder = async (ordersId, logisticId) => {
  if (ordersId.length == 0) {
    Swal.fire({
      position: "middle",
      icon: "error",
      title: "Please, Select / Drag order after then asign orders...",
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }
  const formData = new FormData();
  formData.append("ordersId", JSON.stringify(ordersId))
  formData.append("logisticId", logisticId);
  const response = await fetch("/kartezy/admin/assignedNewOrder", {
    method: "POST",
    body: new URLSearchParams(formData),
  })
  const result = await response.json();
  if (response.status == 200 && result.flag == true) {
    let message = ""
    if (result.message.length > 0) {
      Swal.fire({
        position: "middle",
        icon: "warning",
        title: `Order ID ${result.message.join(", ")} is pincode is not match, so not asigned...`,
      });
    }
    else {
      Swal.fire({
        position: "middle",
        icon: "success",
        title: `All order is successfully asigined....`,
      });
    }
    socket.emit("statuschange", true);
  }
  else {
    Swal.fire({
      position: "middle",
      icon: "error",
      title: "Something wrong, Order is not asigined",
      showConfirmButton: false,
      timer: 1500
    });
  }
}

const dragEvent = async () => {
  const displayOrderes = Array.from(document.getElementById("displayOrder").children);
  const displayLogistics = Array.from(document.getElementById("displayLogistics").children);

  displayOrderes.forEach(order => {
    order.addEventListener("dragstart", () => {
      order.className = "card m-2 dragCard";
    })

    order.addEventListener('dragend', async (event) => {
      let zone = document.querySelector(".targetLogistic");
      let order = document.querySelector(".dragCard");
      const ordersId = [document.querySelector(".dragCard #orderId").value];
      const logisticId = document.querySelector(".targetLogistic #logisticId").value;
      order.className = "card m-2";
      zone.className = "card m-3"
      await assignOrder(ordersId, logisticId)
    })
  })

  displayLogistics.forEach(logistic => {
    logistic.addEventListener("dragover", (event) => {
      logistic.className = "card m-3 targetLogistic";
    })
  })
}

const addMultipleOrderAsign = async (node) => {
  const logisticId = node.value;
  let checkedOrderes = Array.from(document.querySelectorAll("#orderId"));
  checkedOrderes = checkedOrderes.filter(order => {
    if (order.checked == true) {
      return order.value;
    }
  })
  checkedOrderes = checkedOrderes.map(order => order.value)
  if (checkedOrderes.length > 0) {
    await assignOrder(checkedOrderes, logisticId);
  } else {
    Swal.fire({
      position: "middle",
      icon: "error",
      title: "Please, Select orders...",
      showConfirmButton: false,
      timer: 1500
    });
  }
}

const selectLogistics = async () => {
  try {
    let checkedOrderes = Array.from(document.querySelectorAll("#orderId"));
    checkedOrderes = checkedOrderes.filter(order => {
      if (order.checked == true) {
        return order.value;
      }
    })
    if (checkedOrderes.length <= 0) {
      Swal.fire({
        icon: "error",
        title: "Please, Select orders...",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    const response = await fetch("/kartezy/admin/getAllLogistics");
    const logistics = await response.json();

    if (response.status == 200 && logistics.length > 0) {
      let logisticDisplay = "";
      for (let i = 0; i < logistics.length; i++) {
        const logistic = logistics[i];
        logisticDisplay += `
        <div class='row m-3'>
          <div class='col d-flex'>
            <input type='radio' value='${logistic.id}' class='form-input-control me-3' name='logistic' style='width: 20px; height: 20px' onchange='addMultipleOrderAsign(this)'>&nbsp;
            <div class='text-start'>
              Name : ${logistic.first_name} ${logistic.last_name}<br>
              Email : ${logistic.email}<br>
              City : ${logistic.city} - ${logistic.pincode}
            </div>
          </div>
        </div>
        <hr>
        `
      }

      Swal.fire({
        position: "middle",
        html: `
        <div class='container'>
          <p class='primary-text fs-2'><i class="bi bi-truck-flatbed fs-2"></i>&nbsp;Asign Orders</p>
          <div style='height: 50dvh; overflow-y: auto'>${logisticDisplay}<div>
        </div>
        `,
        showConfirmButton: false
      });
    } else {
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "Please, Logistics not avilable...",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  catch (error) {
    console.log(error)
  }
}

const loadAsignOrderPage = async () => {
  await displayPendingOrder();
  await displayLogistics();
  await dragEvent();
}

socket.on("order_updated", async result => {
  await displayPendingOrder();
})