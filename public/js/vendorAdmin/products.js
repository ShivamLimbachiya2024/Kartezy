// === pagination logic ======/
let data;
let globalData;
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
  cutData.forEach((el,i) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${startIndex+i+1}</td>
    <td>${el.id}</td>
    <td>${el.product_name}</td>
    <td>${el.price}</td>
    <td>${el.quanitiy}</td>
    <td> ${(el.is_active) ? '<span class="badge bg-label-primary me-1 text-uppercase">Active</span>' : '<span class="badge bg-label-warning me-1 text-uppercase">Inactive</span>'} </td>
    <td>
      <div class="">
        <a href="/kartezy/product/${el.id}" class ="p-2" ><i class="bi bi-eye-fill color-purple me-1"></i></a>
        <a href="/kartezy/vendorAdmin/products/addProduct/${el.id}" data-id ="${el.id}" class ="p-2 editProduct" ><i class="bi bi-pencil-fill color-orange"></i></a>
        <a href="#" data-id ="${el.id}" class ="p-2 deleteProduct" ><i class="bi bi-trash-fill text-danger"></i></a>
        </div> 
    </td>`;
    tbody.appendChild(row);
    const deleteBtn = row.querySelector(".deleteProduct");
    deleteBtn.addEventListener('click', (event) => {
      deleteProduct(event);
    })
  })
}

// === pagination end ======/



const deleteProduct = async (event) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await fetch("/kartezy/vendorAdmin/products/deleteProduct", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: Number(event.target.closest("a").getAttribute("data-id"))
        })
      });
      const resData = await response.json();
      if (response.status === 200) {

        const tr = event.target.closest("tr");
        tr.remove();

        Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted.",
          icon: "success"
        });

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

const displayProducts = async () => {
  const response = await fetch("/kartezy/vendorAdmin/products", {
    method: "POST",
  })
  const resData = await response.json();
  if (response.status === 200) {
    // pagination required
    totalPage = Math.ceil(resData.length / itemsPerPage);
    data = resData;
    globalData = resData
    pagination();
    // pagination end

    const thead = document.querySelector("table thead");
    const tr = document.createElement("tr");
    if (resData.length != 0) {
      let firstTh = document.createElement("th");
      firstTh.innerHTML = "Sr.No"
      tr.appendChild(firstTh);

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
displayProducts();
document.getElementById('serchField').addEventListener('input', (event) => {
  page = 1
  
  document.querySelector(".page a").innerHTML = page;
  const query = event.target.value
  data = globalData.filter((obj) => {
    return obj.is_active.toString().includes(query) || obj.product_name.toLowerCase().includes(query) || obj.id.toString().includes(query) || obj.price.toString().includes(query) || obj.quanitiy.toString().includes(query)
  })
  totalPage = Math.ceil(data.length / itemsPerPage);
  pagination()
})