
// ===================== image preview js ======================= //

const imagePreview = (event, divImgId) => {
  const files = event.target.files;
  const preview = document.querySelector(`#${divImgId}`);
  preview.innerHTML = '';

  if (files) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      const reader = new FileReader();
      reader.onload = function (e) {
        let img = document.createElement("img");
        img.src = e.target.result;
        img.classList.add('img-preview');
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  }

}

document.querySelector("#mainImg").addEventListener('change', function (event) {
  imagePreview(event, 'mainPreview');
});

document.querySelector("#multipleImg").addEventListener('change', function (event) {
  imagePreview(event, 'multipleImgPreview');
});

// ========================== Specification ======================= //

let count = 2;
const addSpecification = () => {
  const container = document.querySelector("#specificationContainer");

  let div = document.createElement('div');
  div.classList.add('row', `specificationFields`);
  div.innerHTML += `<div class="col-4">
  <input type="text" class="form-control" placeholder="Specification Title" name="specificationTitle[]" id="specificationTitle${count}">
  <span class="specificationTitle${count}Error errorSpan"></span>
  </div>
  <div class="col-auto p-2">
    <i class="bi bi-dash-lg"></i>
  </div>
  <div class="col-4">
    <input type="text" class="form-control" placeholder="Specification Value" name="specificationValue[]" id="specificationValue${count}">
    <span class="specificationValue${count}Error errorSpan"></span>
  </div>
  <div class="col-2">
    <button type="button" class="btn btn-danger removeSpecificationBtn"><i class="bi bi-trash"></i></button>
  </div>`;

  let btn = div.querySelector(".removeSpecificationBtn");
  btn.addEventListener('click', (e) => {
    let field = e.target.closest('.specificationFields');
    field.remove();
  });
  count++;
  container.appendChild(div);
}

document.querySelector("#addSpecificationBtn").addEventListener('click', addSpecification);
const removeBtn = document.querySelectorAll(".removeSpecificationBtn");


// ====================== validation ======================= //
const mergeArrays = (...arrays) => {
  const mergedSet = new Set();
  arrays.forEach(array => {
    array.forEach(item => {
      mergedSet.add(item);
    });
  });
  return Array.from(mergedSet);
}

const validateForm = () => {
  let required = ['productName', 'price', 'quantity', 'category', 'subCategory', 'description'];
  let onlyNumber = ['price', 'quantity'];

  // specification value required
  let specificationTitle = document.querySelectorAll('[id^="specificationTitle"]');
  specificationTitle.forEach(element => {
    let id = element.id.slice(element.id.length - 1, 20); // get number of id
    document.querySelector(`.specificationValue${id}Error`).textContent = ``;
    if (element.value.trim() != '') {
      required.push(document.querySelector(`#specificationValue${id}`).id);
    } else {
      const index = required.indexOf(`specificationValue${id}`);
      if (index != -1) {
        required = required.splice(index, 1);
      }
    }
  });

  // specification title required
  let specificationValue = document.querySelectorAll('[id^="specificationValue"]');
  specificationValue.forEach(element => {
    let id = element.id.slice(element.id.length - 1, 20); // get number of id
    document.querySelector(`.specificationTitle${id}Error`).textContent = ``;
    if (element.value.trim() != '') {
      required.push(document.querySelector(`#specificationTitle${id}`).id);
    } else {
      const index = required.indexOf(`specificationTitle${id}`);
      if (index != -1) {
        required = required.splice(index, 1);
      }
    }
  });

  const fields = mergeArrays(required, onlyNumber);
  for (const field of fields) {
    let value = document.querySelector(`#${field}`).value.trim();
    let errorSpan = document.querySelector(`.${field}Error`);
    let name = field.replace(/([A-Z])/g, ' $1').trim();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    errorSpan.textContent = '';

    if (required.includes(field) && value == '') {
      errorSpan.textContent = `${name} is Required`;
    } else if (onlyNumber.includes(field) && !(value.match(/^[0-9]+$/))) {
      errorSpan.textContent = `Only numers are allowed`;
    } else {
      errorSpan.textContent = ``;
    }
  }

  const mainImgFile = document.querySelector("#mainImg");
  if(!document.querySelector(".updateBtn")){   // insert file validation
    if (mainImgFile.files.length != 0) {
      validateImageFile(mainImgFile.files[0], "mainImgError");
    } else {
      document.querySelector(`.mainImgError`).textContent = `This Field Is Required`;
    }
  } else {                                     // update file validation
    if (mainImgFile.files.length != 0) {               
      validateImageFile(mainImgFile.files[0], "mainImgError");
    }
  }
  

  const filesFields = document.querySelector("#multipleImg");
  if (filesFields.files.length != 0) {
    for (const file of filesFields.files) {
      if (!validateImageFile(file, "multipleImgError")) {
        break;
      }
    }
  }

  errors = document.querySelectorAll('.errorSpan');
  for (const error of errors) {
    if (error.textContent != '') {
      return false;
    }
  }

  return true;
}

const validateImageFile = (file, errorClass) => {
  let allowImages = ['image/jpg', 'image/jpeg', 'image/png'];
  let fileSize = 5; // 5 MB

  const error = document.querySelector(`.${errorClass}`);

  if (!(allowImages.includes(file.type))) {
    error.textContent = `only ${allowImages.toString()} are allowed`;
    return false;
  } else if (file.size >= (fileSize * 1024 * 1024)) {
    error.textContent = `maximum image size is ${fileSize}`;
    return false;
  } else {
    error.textContent = ``;
  }

  return true;

}

// ====================== Fetch & Display Category and sub Category Data ======================= //

let categoriesData;
const displayCategory = async (selected) => {
  const category = document.querySelector("#category");
  category.innerHTML = ``;
  let str = `<option value=''>select ...</option>`

  try {
    const response = await fetch("/kartezy/categories", {
      method: "GET",
    })
    const resData = await response.json();
    if (response.status === 200) {
      categoriesData = resData.message;
      for (const [key, value] of Object.entries(categoriesData)) {
          str += `<option value='${key}' ${ (key==selected)? 'selected' : '' } > ${key} </option>`;
      }

    } else {
      console.log(resData.falg);
    }
  } catch (err) {
    console.log(err);
  }

  category.innerHTML = str;
}
displayCategory(null);

const subCategory = (selectedId) => {
  const category = document.querySelector("#category");
  const subCategory = document.querySelector("#subCategory");

  let subCategoryData = categoriesData[category.value];

  let str = `<option>select ...</option>`;
  if (subCategoryData) {
    subCategoryData.forEach(element => {
      str += `<option value='${element.id}' ${ (element.id==selectedId)? 'selected' : '' } >${element.category_name}</option>`;
    });
  }
  subCategory.innerHTML = str;
}

const category = document.querySelector("#category");
category.addEventListener('change', () => {
  subCategory(null);
});

// fetch data for update
const fillInputField = (selector, inpValue) => {
  document.querySelector(selector).value = inpValue;
}
let deleteIds = [];

const fetchFormData = async () => {
  try {
    let productId = document.querySelector("#productId").value;
    const response = await fetch('/kartezy/vendorAdmin/products/fetchFormData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId
      })
    });

    const resData = await response.json();
    if (response.status === 200) {

      fillInputField("#productName", resData.product_name);
      fillInputField("#price", resData.price);
      fillInputField("#quantity", resData.quanitiy);
      fillInputField("#description", resData.product_description);

      // is_actice or check show 
      let checkedBox = document.querySelector("#productStatus");
      if (resData.is_active == 1) {
        checkedBox.checked = true;
      } else {
        checkedBox.checked = false;
      }

      // display category  
      displayCategory(resData.parent_category_name);

      // display subcategory  
      const subCategory = document.querySelector("#subCategory");
      subCategory.innerHTML = ``;
      let str = `<option value=''>select ...</option>`
      const responseCate = await fetch("/kartezy/categories", {
        method: "GET",
      })
      const resDatacate = await responseCate.json();
      let subCategoryFetch = resDatacate.message;
      subCategoryFetch[resData.parent_category_name].forEach(element => {
        str += `<option value='${element.id}' ${ (element.id==resData.child_category_id)? 'selected' : '' } >${element.category_name}</option>`;
      });
      subCategory.innerHTML = str;
      // end 

      // specification data show
      const specificationContainer = document.querySelector("#specificationContainer");
      specificationContainer.innerHTML = '';
      resData.specification.forEach((el, i) => {
        let div = document.createElement('div');
        div.classList.add('row', `specificationFields`);
        div.innerHTML += `<div class="col-4">
        <input type="text" class="form-control" placeholder="Specification Title" name="specificationTitle[]" value="${el.specification_key}" id="specificationTitle${i + 1}">
        <span class="specificationTitle${i + 1}Error errorSpan"></span>
        </div>
        <div class="col-auto p-2">
          <i class="bi bi-dash-lg"></i>
        </div>
        <div class="col-4">
          <input type="text" class="form-control" placeholder="Specification Value" name="specificationValue[]" value="${el.specification_value}" id="specificationValue${i + 1}">
          <span class="specificationValue${i + 1}Error errorSpan"></span>
        </div>
        <div class="col-2">
          <input type="hidden" name='specificationFieldId[]' value="${el.id}" class="removeId">
          <button type="button" class="btn btn-danger removeSpecificationBtn"><i class="bi bi-trash"></i></button>
        </div>`;

        let btn = div.querySelector(".removeSpecificationBtn");
        btn.addEventListener('click', (e) => {
          let field = e.target.closest('.specificationFields');
          deleteIds.push(el.id);
          field.remove();
        });
        specificationContainer.appendChild(div);
      });
      count = resData.specification.length + 1;

      const previewContainer = document.querySelector("#mainPreview");
      previewContainer.innerHTML =  `<img src="/images/products/${resData.main_image_path}" class="img-preview" /> `;

      const secondPreviewContainer = document.querySelector("#multipleImgPreview");

      const inputsdiv = document.createElement('div');
      inputsdiv.classList.add("inputImg-container");
      resData.secondImages.forEach(element => {
        secondPreviewContainer.innerHTML += `<img src="/images/products/${element.attechment_path}" class="img-preview" />`;
        inputsdiv.innerHTML += `<input type ="hidden" value="${element.id}" name="secondImgsIds[]" id="secondImgsIds"></input>`;
      });  
      secondPreviewContainer.insertAdjacentElement("afterend", inputsdiv);

    } else {
      console.log(resData);
    }
  } catch (err) {
    console.log(err);
  }
}

if (document.querySelector(".updateBtn")) {
  fetchFormData();
}

// ====================== Submit or update data ======================= //

// action => insert, update 
const addProductSubmit = async (action) => {
  if (validateForm()) {
    const form = document.querySelector(`#productForm`);
    let formData = new FormData(form);
    let productStatus = document.querySelector("#productStatus");

    if (productStatus.checked) {
      formData.append('productStatus', 1);
    } else {
      formData.append('productStatus', 0);
    }

    try {
      const response = await fetch('/kartezy/vendorAdmin/products/addProduct/upload', {
        method: 'POST',
        body: formData
      });

      const resData = await response.json();
      if (response.status === 200) {
        Swal.fire({
          title: resData.msg,
          text: "Check product to home page",
          icon: "success"
        });
        form.reset();
        document.querySelector('#mainImg').value = '';
        document.querySelector('#multipleImg').value = '';
        document.querySelector("#mainPreview").innerHTML = '';
        document.querySelector("#multipleImgPreview").innerHTML = '';

      } else {
        Swal.fire({
          icon: "error",
          title: resData.status,
          text: resData.msg
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  }
}

if (document.querySelector(".insertBtn")) {
  document.querySelector(".insertBtn").addEventListener("click", addProductSubmit);
}

const updateProduct = async () =>{
  if(validateForm()){
    const form = document.querySelector(`#productForm`);
    let formData = new FormData(form);
    let productStatus = document.querySelector("#productStatus");

    if (productStatus.checked) {
      formData.append('productStatus', 1);
    } else {
      formData.append('productStatus', 0);
    }
    formData.append('deletedSpecification', deleteIds);
    try {
      const response = await fetch('/kartezy/vendorAdmin/products/updateProduct', {
        method: 'POST',
        body: formData
      });

      const resData = await response.json();
      if (response.status === 200) {
        Swal.fire({
          title: resData.msg,
          text: "Check product to home page",
          icon: "success"
        });
        // form.reset();
        document.querySelector('#mainImg').value = '';
        document.querySelector('#multipleImg').value = '';

      } else {
        Swal.fire({
          icon: "error",
          title: resData.status,
          text: resData.msg
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  }
  
}

if (document.querySelector(".updateBtn")) {
  document.querySelector(".updateBtn").addEventListener("click", updateProduct);
}