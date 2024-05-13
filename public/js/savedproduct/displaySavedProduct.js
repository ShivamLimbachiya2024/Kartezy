const displaySavedProduct = async () => {
  const response = await fetch("/kartezy/savedProduct", {
    method: "POST",
  })
  const resData = await response.json();
  if (response.status == 200) {
    const thead = document.querySelector("table.table thead");
    const tr = document.createElement("tr");
    if (resData.length != 0) {
      let th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.innerText = 'Index';
      tr.appendChild(th);
      thead.appendChild(tr);

      th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.innerText = 'Product name';
      tr.appendChild(th);
      thead.appendChild(tr);

      th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.innerText = 'Image';
      tr.appendChild(th);
      thead.appendChild(tr);

      th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.innerText = 'Action';
      tr.appendChild(th);
      thead.appendChild(tr);

      const tbody = document.querySelector("table.table tbody");
      let index = 1;
      resData.message.forEach(el => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${index++}</td>
        <td>${el.product_name}</td>
        <td class='text-center'><img src = '/images/products/${el.main_image_path}' width='100px' height='100px' style='border-radius: 50%; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'></td>
        <td>
          <div class="">
            <a href="/kartezy/product/${el.product_id}" class ="p-2" ><i class="bi bi-eye-fill color-purple me-1 fs-5"></i></a>
            <span onclick='deleteSavedProduct(${el.product_id})' class ="p-2 deleteProduct" style="cursor: pointer"><i class="bi bi-trash-fill text-danger fs-5"></i></span>
            <span onclick='addToCartSavedProduct(${el.product_id})' class ="p-2 deleteProduct" style="cursor: pointer"><i class="bi bi-cart-plus-fill text-success fs-5"></i></span>
          </div> 
        </td>`;
        tbody.appendChild(row);
        const deleteBtn = row.querySelector(".deleteProduct");
        deleteBtn.addEventListener('click', (event) => {
          deleteProduct(event);
        })
      })
    } else {
      tr.innerHTML = `<th>No data Found</th>`;
      thead.appendChild(tr);
    }

  } else {
    console.log(resData.msg);
  }
}

displaySavedProduct();