const minusAttach = (id) => {
    const div = document.querySelector(`.attach${id}`);
    div.remove();
}
let AddFileContainer = document.getElementById('parentContainer')
let AddButton = document.getElementById('AddButton')
let brtag = document.createElement("br")
var containerCount = 2;
AddButton.addEventListener('click', function () {
    containerCount++;

    // container for filee
    // let newcountainer = document.createElement('div')
    // newcountainer.id = 'container' + containerCount;

    let ProductAttachFileContain = document.createElement("div");
    ProductAttachFileContain.classList.add("ProductAttachFileContain");
    ProductAttachFileContain.classList.add(`attach${containerCount}`);

    let str = `<div id="container${containerCount}">
                    <label id="AddContain" class="form-label">Attachment${containerCount}:</label>
                    <input type="file" id="AddContainInput" class="form-control" style="margin-bottom: 20px;">
                </div>
                <div>
                    <button type="button" class="btn btn-outline-danger btn-block mb-4 BtnMinus" onClick="minusAttach(${containerCount})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg></button>
                </div>`
    ProductAttachFileContain.innerHTML = str;
    AddFileContainer.appendChild(ProductAttachFileContain);
})

// product Add and subtract buttoon logic
let conatiner = document.getElementById('container');
let addBtn = document.getElementById('addBtn')
let removeBtn = document.getElementById('removeBtn')
let inputCount = 2;

addBtn.addEventListener('click', function () {
    inputCount++;
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')

    let label1 = document.createElement('label')
    label1.id = "SpecificationName"
    label1.className = "form-label"
    label1.appendChild(document.createElement('br'))
    label1.textContent = `Specification Name `;


    let input1 = document.createElement('input');
    input1.type = "text";
    input1.id = "SpecificationInput"
    input1.className = "form-control"
    input1.style.marginBottom = "20px"

    div1.appendChild(label1);
    div1.appendChild(input1);
    conatiner.appendChild(div1);

    let label2 = document.createElement('label')
    label2.id = "SpecificationName"
    label2.className = "form-label"
    label2.appendChild(document.createElement('br'))
    label2.textContent = `Specification Date `;


    let input2 = document.createElement('input');
    input2.type = "text";
    input2.id = "SpecificationInput"
    input2.className = "form-control"
    input2.style.marginBottom = "20px"

    div2.appendChild(label2);
    div2.appendChild(input2);
    conatiner.appendChild(div2);

})


removeBtn.addEventListener('click', function () {
    if (inputCount > 0) {
        let inputToRemove = conatiner.lastElementChild;
        let labelToRemove = inputToRemove.PreviousElementSibling

        conatiner.removeChild(inputToRemove);
        conatiner.removeChild(labelToRemove);
        conatiner.removeChild(conatiner.lastElementChild);

        inputCount--;

    }
});

// next and previous page...............
let currentFieldset = 1;
function updateButtons() {
    if (currentFieldset === 1) {
        document.getElementById('PrevBtn').style.display = 'none';
    } else {
        document.getElementById('PrevBtn').style.display = 'inline';
    }

    if (currentFieldset === 3) {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submit').style.display = 'inline';
    } else {
        document.getElementById('nextBtn').style.display = 'inline';
        document.getElementById('submit').style.display = 'none';
    }
}
// Fetch ApI
document.getElementById('submit').addEventListener('click', async () => {

    const formData = new FormData(document.getElementById('ProductModule'));
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    try {

        const response = await fetch('http://localhost:7070/kartezy/productmodule', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: formData,
            body: JSON.stringify(data)

        })
        const result = await response.json();
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<p> server response: ${result.message}</p>`;

    } catch (error) {

        return error

    }
    function displaySucess(message) {
        const errorMessage = document.getElementById('output');
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;

    }
    displaySucess('');
});

let message;
let arr = [document.getElementById("fieldset1"), document.getElementById("fieldset2"), document.getElementById("fieldset3")];
let currIndex = 0;
function next() {
    if (currIndex < arr.length - 1) {
        if (validationEvent(arr[currIndex].id)) {
            arr[currIndex].style.display = "none";
            currIndex++;
            arr[currIndex].style.display = "flex";
        }
    }
    if (currIndex == arr.length - 1) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("submit").style.display = "block";
    }
}
function validate() {
    validationEvent(arr[arr.length - 1].id)
}
const sub = document.getElementById("submit");
submit.addEventListener("click", validate);
function previous() {
    if (currIndex > 0) {
        arr[currIndex].style.display = "none";
        // validationEvent(arr[currIndex].id); 
        currIndex--;

        arr[currIndex].style.display = "flex";


    }
    if (currIndex == arr.length - 2) {
        document.getElementById("nextBtn").style.display = "block";
    }
}
//validation Code
function validationProductName() {
    let productName = document.getElementById('productName').value
    let nameRegex = /^[a-zA-Z\s]*$/
    if (productName.trim() === '') {
        displayError('Product Name is Require');
        return false;
    } else if (!nameRegex.test(productName.trim())) {
        displayError('please Enter Valid Name');
        return false;
    } else {
        return true;

    }
}
function validationProductPrice() {
    let productPrice = document.getElementById('price').value;
    let priceRegex = /^\d+(\.\d{1,2})?$/;
    if (productPrice.trim() === '') {
        displayError('Product Price is Require');
        return false;
    } else if (!priceRegex.test(productPrice)) {
        displayError('price is must be in proper format')
        return false;
    } else {
        return true;
    }
}

function validationProductQuantity() {
    let productQuantity = document.getElementById('quantity').value;
    let quantityRegex = /^[1-9]\d*$/;
    if (productQuantity == '') {
        displayError('Product Quantity is Require');
        return false;
    } else if (!quantityRegex.test(productQuantity)) {
        displayError('Product Quantity Must Be In Valid Formet');
        return false;
    } else {
        return true;
    }
}

function validationProductDescription() {
    let productDescription = document.getElementById('Description').value
    if (productDescription == '') {
        displayError('Product Description is Require');
        return false;
    }
    return true;
}

// function validationProductCategory() {
//     const category = document.getElementById('category').value
//     if (category == '') {
//         displayError(' category is not selected');
//     } else {
//         true
//     }
// }

// Validation Functions of Product Specification
function productSpecificationName() {
    const specificationName = document.getElementById('SpecificationNameInput').value
    const specificationDate = document.getElementById('SpecificationDate').value
    let nameRegex = /^[a-zA-Z\s]*$/;
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (specificationName == '' || specificationDate == '') {
        displayErrorspecification('enter specificationName or specificationDate')
        return false;
    } else if (!nameRegex.test(specificationName)) {
        displayErrorspecification('specificationName is inValid Format');
        return false;
    } else if (!dateRegex.test(specificationDate)) {
        displayErrorspecification('specificationDate is inValid Format');
        return false;
    } else {
        return true;
    }
}
//error display of sproduct specification
function displayErrorspecification(message) {
    const errorMessage = document.getElementById('errorMessage1');
    errorMessage.style.color = "red";
    errorMessage.style.fontWeight = "700"
    errorMessage.style.fontSize = "larger"
    errorMessage.textContent = message;
}


function validate() {
    // function product details
    const name = validationProductName();
    const price = validationProductPrice();
    const quantity = validationProductQuantity();
    const description = validationProductDescription();
    // validationProductCategory()
    if (currentFieldset === 2) {
        return validatespecification()
    }
    return name && price && quantity && description

}

// validation of product Attachment......
function productAttachment() {

    let fileInput = document.getElementById('fileInput1')
    let file = fileInput.files[0];

    if (!file) {
        displayErrorAttachment('please select a file');
        return false
    }

    const fileType = file.type.split('/')[0];
    if (fileType !== 'image' && fileType !== 'video') {
        displayErrorAttachment('please upload an image or video file');
        return false
    }

    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
        displayErrorAttachment('file size exceeds the limit(10MB)')
        return false;
    }
    displayErrorAttachment('')
    // XMLHttpRequestUpload(file)
}

// function to upload file
function uploadFile() {
    console.log('file uploaded:', file.name)
}

// error message of product attachment
function displayErrorAttachment(message) {
    const errorMessage = document.getElementById('errorMessage3');
    errorMessage.style.color = "red";
    errorMessage.style.fontWeight = "700"
    errorMessage.style.fontSize = "larger"
    errorMessage.textContent = message;
}

// function to display error Message of product details
function displayError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.color = "red";
    errorMessage.style.fontWeight = "700"
    errorMessage.style.fontSize = "larger"
    errorMessage.textContent = message;
}

// logic of validation work propery code
function validationEvent() {
    validate();
}
function validatespecification() {


    const specification = productSpecificationName()

    return specification
}

document.getElementById('nextBtn').addEventListener('click', function () {
    if (currentFieldset < 3) {
        if (currentFieldset === 1) {
            return validate(currentFieldset)

        }
        if (currentFieldset === 2) {
            return validatespecification()
        }
        document.getElementById('fieldset' + currentFieldset).style.display = "none"
        currentFieldset++;
        document.getElementById('fieldset' + currentFieldset).style.display = "block"


    }
    updateButtons();
})

document.getElementById('nextBtn').addEventListener('click', function () {
    if (currentFieldset < 3 && validate()) {
        document.getElementById('fieldset' + currentFieldset).style.display = "none"
        currentFieldset++;
        document.getElementById('fieldset' + currentFieldset).style.display = "block"
    }
    updateButtons();
})

document.getElementById('PrevBtn').addEventListener('click', function () {
    if (currentFieldset > 1) {
        document.getElementById('fieldset' + currentFieldset).style.display = "none"
        currentFieldset--;
        document.getElementById('fieldset' + currentFieldset).style.display = "block"
    }
    updateButtons();
})

//upload a file to a server






