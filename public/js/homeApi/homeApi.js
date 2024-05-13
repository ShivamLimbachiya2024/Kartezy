
//====== Fetch 8 Letest Add Product ======//
const fetchLetestProduct = async () => {
  const response = await fetch("/KartEzy/home/api/getLetestProduct", {
    method: "POST",
  })
  const resData = await response.json();
  if (response.status === 200) {
    const container = document.querySelector(".section-letest-product .card-container");
    resData.forEach(el => {
      container.innerHTML += `<div class="card">
        <span class="percent">-10%</span>
        <div class="card-image">
          <img src="/images/products/${el.main_image_path}" width="250">
        </div>
  
        <div class="card-inner">
          <span>${el.category_name}</span>
          <h5 class="mb-0">${el.product_name}</h5>
          <div class="price">
            <span>Rs.${el.price}</span>
          </div>
  
          <div class="mt-3 d-flex justify-content-between align-items-center">
            <a href="/kartezy/product/${el.id}" class="btn text-uppercase btn-sm details">Details</a>
            <div class="d-flex align-items-center flex-row">
              <input type="hidden" value=${el.id} name="productId" id="productId${el.id}">
              <button type="button" class="wishlist" onclick='addSavedProduct(${el.id})'><i class="bi bi-heart"></i></button>
              ${(el.quanitiy > 0) ? '<button type="button" class="cart cartBtn" onClick="addToCart(event)"><i class="bi bi-cart4"></i></button>' : '<span class="outstock">Out of Stock</span>'}
            </div>
          </div>
        </div>
      </div>`;
    });

  } else {
    console.log(resData.msg);
  }
}
fetchLetestProduct();

//====== Fetch top 8 selling Product ======//
const fetchTopSellingProduct = async () => {
  const response = await fetch("/KartEzy/home/api/getTopSellingProduct", {
    method: "POST",
  })
  const resData = await response.json();
  if (response.status === 200) {
    const container = document.querySelector(".section-top-product .card-container");

    resData.forEach(el => {
      container.innerHTML += `<div class="card">
        <span class="percent">-10%</span>
        <div class="card-image">
          <img src="/images/products/${el.main_image_path}" width="250">
        </div>
  
        <div class="card-inner">
          <span>${el.category_name}</span>
          <h5 class="mb-0">${el.product_name}</h5>
          <div class="price">
            <span>Rs.${el.price}</span>
          </div>
  
          <div class="mt-3 d-flex justify-content-between align-items-center">
            <a href="/kartezy/product/${el.id}" class="btn text-uppercase btn-sm details">Details</a>
            <div class="d-flex align-items-center flex-row">
              <input type="hidden" value=${el.id} name="productId" id="productId${el.id}">
              <button type="button" class="wishlist" onclick='addSavedProduct(${el.id})'><i class="bi bi-heart"></i></button>
              ${(el.quanitiy > 0) ? '<button type="button" class="cart cartBtn" onClick="addToCart(event)"><i class="bi bi-cart4"></i></button>' : '<span class="outstock">Out of Stock</span>'}
            </div>
          </div>
        </div>
      </div>`;
    });

  } else {
    console.log(resData.msg);
  }
}
fetchTopSellingProduct();

//=========== Fetch all Product ==========//
const fetchAllProduct = async () => {
  const response = await fetch("/KartEzy/home/api/getAllProduct", {
    method: "POST",
  })
  const resData = await response.json();
  if (response.status === 200) {
    const container = document.querySelector(".section-all-product .card-container");

    resData.forEach(el => {
      container.innerHTML += `<div class="card">
        <span class="percent">-10%</span>
        <div class="card-image">
          <img src="/images/products/${el.main_image_path}" width="250">
        </div>
  
        <div class="card-inner">
          <span>${el.category_name}</span>
          <h5 class="mb-0">${el.product_name}</h5>
          <div class="price">
            <span>Rs.${el.price}</span>
          </div>
  
          <div class="mt-3 d-flex justify-content-between align-items-center">
            <a href="/kartezy/product/${el.id}" class="btn text-uppercase btn-sm details">Details</a>
            <div class="d-flex align-items-center flex-row">
              <input type="hidden" value=${el.id} name="productId" id="productId${el.id}">
              <button type="button" class="wishlist" onclick='addSavedProduct(${el.id})'><i class="bi bi-heart"></i></button>
              ${(el.quanitiy > 0) ? '<button type="button" class="cart cartBtn" onClick="addToCart(event)"><i class="bi bi-cart4"></i></button>' : '<span class="outstock">Out of Stock</span>'}
            </div>
          </div>
        </div>
      </div>`;
    });

  } else {
    console.log(resData.msg);
  }

}
fetchAllProduct();

const addToCart = async (e) => {
  const productId = e.target.closest('button').parentNode.children[0].value;
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
  if (response.redirected == true) {
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "Please Login....",
        footer: "<a href='/kartezy/login'>Login</a>",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      const resData = await response.json();
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
