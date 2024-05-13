const fetchCategory = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const response = await fetch("/kartezy/categories", {
    method: "GET",
  })
  const resData = await response.json();
  
  if(response.status === 200){
    const container = document.querySelector("#categoriesContainer");
    container.innerHTML =``;

    Object.keys(resData.message).forEach((category, i) => {
      if(urlParams.has('category')){
        container.innerHTML += `<div class="form-check">
        <input class="form-check-input cate" type="checkbox" value="${category}" name="categort[]" id="category${i+1}" ${(category.includes(urlParams.get('category')))? 'checked' : ''}>
        <label class="form-check-label" for="category${i+1}">${category}</label>
        </div>`
      }else {
        container.innerHTML += `<div class="form-check">
        <input class="form-check-input cate" type="checkbox" value="${category}" name="categort[]" id="category${i+1}">
        <label class="form-check-label" for="category${i+1}">${category}</label>
        </div>`
      }
      
    });

    if(urlParams.has('category')){
      fetchFilterData()
    }

  }else{
    console.log(resData.msg);
  }

}
fetchCategory();

const isCategorySelected = (fields) => {

  for(const [key,value] of fields){
    if(key == "categort[]")
    return true
  }

  return false;
}

const fetchFilterData = async () =>{

  const form = document.querySelector(`#filterForm`);
  const formData = new URLSearchParams(new FormData(form));

  const queryStrings2 = window.location.search;
  const urlParams2 = new URLSearchParams(queryStrings2);
  if(!isCategorySelected(formData)){
    formData.append('search', urlParams2.get('search'));
  }

  const response = await fetch("/KartEzy/home/api/filterData", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });
  const resData = await response.json();

  if(response.status === 200){
    const numberOfRecords = document.querySelector(".numberOfRecords");
    numberOfRecords.innerHTML = `${resData.filterData.length} Items found `;
    
    const container = document.querySelector("#filterResultContainer");
    container.innerHTML = '';
    resData.filterData.forEach((product) => {
      let str = '';
      for (let i = 0; i < 5; i++) {
        if( product.rating > i){
          str += '<i class="bi bi-star-fill color-red"></i> '
        } else {
          str += ' <i class="bi bi-star color-red"></i>'
        }
      }
      
      container.innerHTML +=  `<div class="row justify-content-center mb-3">
      <div class="col-md-12">
        <div class="card shadow-0 border rounded-3">
          <div class="card-body">

            <div class="row g-0">

              <!-- imgage -->
              <div class="col-xl-3 col-md-4 d-flex justify-content-center">
                <div class="bg-image rounded me-md-3 mb-3">
                  <img src="/images/products/${product.main_image_path}" class="w-100">
                </div>
              </div>
              <!-- description  -->
              <div class="col-xl-6 col-md-5 p-2">
                <h5>${product.product_name}</h5>
                <div class="d-flex flex-row">
                  <div class="text-warning mb-1 me-2">
                    ${str}
                    <span class="ms-1">
                      ${product.rating}
                    </span>
                  </div>
                </div>

                <p class="text mb-4 mb-md-0 text-justify ">
                  ${product.product_description}
                </p>
              </div>

              <!-- buttons  -->
              <div class="col-xl-3 col-md-3 col-sm-5">
                <div class="d-flex flex-row align-items-center mb-1">
                  <h4 class="mb-1 me-1">${product.price}</h4>
                </div>
                <div class="mt-4">
                  <a class="btn red-btn shadow-0" href="/kartezy/product/${product.id}">More Details</a>
                  <input type='hidden' value='${product.id}'>
                  ${(product.quanitiy > 0) ? '<button type="button" onclick="addToCart(event)" class="btn btn-light border px-2 pt-2 icon-hover" id="pId${product.id}"><i class="bi bi-cart-plus"></i></button>' : '<img src="/images/backgrounds/sold.webp" class="soldImg">'}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>`;
    });
    
  }else {
   console.log(resData);
  }

}

const applyBtn = document.querySelector("#applyBtn");
applyBtn.addEventListener("click",()=>{
  fetchFilterData();
});

const queryStrings1 = window.location.search;
const urlParams1 = new URLSearchParams(queryStrings1);

if(urlParams1.has('search')){
  fetchFilterData()
}
const addToCart = async (event) => {
  const productId = event.target.closest('button').parentNode.getElementsByTagName('input')[0].value;
  console.log(productId);
  const response = await fetch("/kartezy/userCartinsert", {
    method: "POST",
    body: JSON.stringify({
      productId,
      qty: 1
    }),
    headers: {
      'Content-Type': "application/json",
    }
  });
  if(response.redirected == true){
    Swal.fire({
      position: "middle",
      icon: "error",
      title: "Please Login....",
      footer: "<a href='/kartezy/login'>Login</a>",
      showConfirmButton: false,
      timer: 1500
    });
  }
  else{
  const resData = await response.json();
  console.log(resData);
  if(response.redirected == true){
    Swal.fire({
      position: "middle",
      icon: "error",
      title: "Please Login....",
      footer: "<a href='/kartezy/login'>Login</a>",
      showConfirmButton: false,
      timer: 1500
    });
  }
  else{
    if (response.status === 200) {
      Swal.fire({
        title: resData.msg,
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        title: resData.msg,
        icon: "error"
      });
    }
  }
}
}