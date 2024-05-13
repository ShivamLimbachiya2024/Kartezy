let prdQty;
const myParam = window.location.href;
const result = myParam.lastIndexOf('/');
const id = myParam.substr(result + 1, myParam.length);

const displayimage = (url, type)=> {
  if(type.includes('image')){
    Swal.fire({
      imageUrl: url,
      imageHeight: 300,
      imageAlt: "Image is not found",
      showConfirmButton: false,
    });
  }
  else if(type.includes("video")){
    Swal.fire({
      html: `
      <video width="100%" style='border: 0;' controls autoplay>
        <source src="${url}" type="video/mp4">
        Video is not found...
      </video>
      `,
      showConfirmButton: false,
    });
  }
}

const specificationResult = async() => {
  const response = await fetch(`/kartezy/fetchproduct/${id}`);
  const specifiResult = await response.json();
  prdQty = specifiResult.descriptionResult[0].quanitiy;
  let tag = "";
  let tags = "";

  specifiResult.sepcificatonResult.map(d => {
    tag += `<tr>
      <th>${d.sepcificaton_key}</th>
      <td>${d.specification_value}</td>
      </tr>`;
  });

  document.getElementById('specifications').innerHTML = tag;
  specifiResult.reviewResult = specifiResult.reviewResult.filter(item=>{
    item.create_at = timeDifference(item.create_at);
    return item
  })
  specifiResult.reviewResult.map(result => {
    let attchement = "";
    if(result.attchment.length>0){
      for(let i=0; i<result.attchment.length; i++){
        let file = result.attchment[i];
        if(file.type.includes("image"))
        {
          attchement += `
           <div class='m-2 '>
              <span class="image-container" onclick="displayimage('/images/pruduct_comment/${file.attechment_path}', '${file.type}')">
              <img  src='/images/pruduct_comment/${file.attechment_path}' alt='${file.error_message}' height='100px' width='100px' style='box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'>
              </span>
            </div>`
        }
        else if(file.type.includes("video")){
          attchement += `
            <div class='m-2 border-3'>
              <span onclick="displayimage('/images/pruduct_comment/${file.attechment_path}', '${file.type}')">
                <video width="100" height="100" style='box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'>
                  <source src="/images/pruduct_comment/${file.attechment_path}" type="video/mp4">
                  Video is not found...
                </video>
              </span>
            </div>`
        }
      }
    }
    tags += `
    <tr>
      <td class='card' style='box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; margin: 20px'>
      <div class='card-body'>
          <div style='position: relative' class='d-flex'>
            <p class='primary-text'>${result.first_name} ${result.last_name}</p>
            <div style="height: 25px; width: 50px; background-color: #D10024; color: white; border-radius: 12px; text-align: center; position: absolute; right: 20px">${result.ratting == null ? 0 : result.ratting} <i class="bi bi-star-fill text-light"></i></div>
          </div>
          <div class='d-flex' style='width: 600px;overflow-x: auto; scroll-behavior: smooth'>
            ${attchement}
          </div>
          <p>${result.review}</p>
          <p class='text-end'>${result.create_at}</p>
        </div>
      </td>
    </tr>`
  });
  document.getElementById('comments').innerHTML = tags;

  for (let i = 0; i < specifiResult.ratingResult[0].final_rating; i++) {
    let div = document.createElement("div");
    let icon = document.createElement("i");
    div.className = 'col-1';
    icon.className = 'bi bi-star-fill fs-3';
    icon.style.color = "#D10024"
    div.appendChild(icon);
    document.getElementById('starRating').appendChild(div);
  }
  document.getElementById('description').innerHTML = specifiResult.descriptionResult[0].product_description;
  document.getElementById('price').innerHTML = specifiResult.descriptionResult[0].price;
  document.getElementById('title').innerHTML = specifiResult.descriptionResult[0].product_name;

  let src = [];
  src.push(specifiResult.descriptionResult[0].main_image_path)
  for (i = 0; i < specifiResult.imageResult.length; i++) {
    src.push(specifiResult.imageResult[i].attechment_path);
  }
  document.getElementById('parentImage').setAttribute('src', '/images/products/' + src[0]);
  function changeImage() {
    for (let i = 0; i < src.length; i++) {
      let div = document.createElement("div");
      let element = document.createElement("img");
      div.className = 'col-2 subImage';
      div.id = "subImage" + i;
      element.src = '/images/products/' + src[i];
      element.addEventListener('click', (event) => {
        removeClassFromElements('img', 'border');
        removeClassFromElements('img', 'border-primary');
        removeClassFromElements('img', 'border-2');
        let subImage = document.getElementsByClassName("subImage");
        let selected = div.id;
        let parentImage = document.getElementById('parentImage');
        imageDisplay = event.target.getAttribute('src');
        event.target.classList.add("border");
        event.target.classList.add("border-primary");
        event.target.classList.add("border-2");
        document.getElementById('parentImage').setAttribute('src', imageDisplay);
      });
      element.className = 'img-fluid OptionImage';
      div.appendChild(element);
      document.getElementById('subImages').appendChild(div);
    }
    document.getElementById('subImage0').firstElementChild.classList.add("border");
    document.getElementById('subImage0').firstElementChild.classList.add("border-primary");
    document.getElementById('subImage0').firstElementChild.classList.add("border-2");
  }
  function removeClassFromElements(elementType, className) {
    const elements = document.querySelectorAll(elementType);
    elements.forEach(element => {
      element.classList.remove(className);
    });
  }
  changeImage();
}

const plus = document.querySelector('.plus'),
  minus = document.querySelector('.minus'),
  qty = document.querySelector('.qty');
let number = 1;
plus.addEventListener('click', () => {
  number++;
  qty.innerText = number;
});
minus.addEventListener('click', () => {
  if (number > 1) {
    number--;
  }
  qty.innerText = number;
});

const productQty = document.getElementById('qty').innerHTML;
document.getElementById('addToCartBtn').addEventListener('click', async () => {
  const response = await fetch("/kartezy/userCartinsert", {
    method: "POST",
    body: JSON.stringify({
      productId: id,
      qty: number
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
  if (response.status === 200) {
    Swal.fire({
      title: resData.msg,
      icon: "success"
    });
  } else {
    Swal.fire({
      title: resData.msg,
      icon: "error"
    });
  }}
})
document.getElementById('buyNowBtn').addEventListener('click', () => {
  if (number < prdQty) {
    window.location.href = `/kartezy/renderSingleProductCheckout/${id}?qty=${number}`
  } else {
    Swal.fire({
      title: "Selected quantity is out of strock!",
      icon: "error"
    });
  }
})

const scrollX = (node, type)=>{
  const parentnode = node.parentNode; 
  if(type == 0){
    parentnode.scrollTo(-100, 0)
  }
  else{
    parentnode.scrollTo(100, 0)
  }
}