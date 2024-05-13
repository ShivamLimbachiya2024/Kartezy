
let data;
let keys;
let starting_page = 1;
let page_per_item = 2;
let vdata;

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/kartezy/admin/assignOrdersData');
  data = await response.json()
  keys = Object.keys(data[0]);

  length = data.length
  listVendor();

});

document.getElementById("assignOrder").innerHTML=`<h3> Order id</h3>`



async function listVendor() {
  const last_page_index = starting_page * page_per_item;
  const first_page_index = last_page_index - page_per_item
  const new_data = data.slice(first_page_index, last_page_index)

  let temp = `<tr>
     <td>${keys[0]}</td>
     <td>${keys[1]}</td>
     <td>${keys[2]}</td>
     <td>${keys[3]}</td>
     <td>Assign Orders</td>
  
     </tr>`

  new_data.forEach(ele => {
    temp += `<tr>
    <td>${ele.order_id}</td>
    <td>${ele.delivery_address}</td>
    <td>${ele.order_date}</td>
    <td>${ele.expected_delivery_date}</td>
   
    <td> <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Assign Orders</button></td>
    </tr>`;
  });

  document.getElementById("vendortable").innerHTML = temp
  document.getElementById("page").innerHTML = starting_page


}


function backtoDashboard() {
  window.location.href = `/kartezy/admin`
}


const firstp = () => {
  starting_page = 1;
  document.getElementById("next").disabled = false;
  document.getElementById("last").disabled = false

  if (starting_page == 1) {
    document.getElementById("first").disabled = true;
    document.getElementById("prev").disabled = true;

    document.getElementById("last").disabled = false

  }
  if (starting_page * page_per_item < length) {
    document.getElementById("last").disabled = false;
  }

  listVendor();


}



const previousp = () => {

  document.getElementById("next").disabled = false;
  document.getElementById("last").disabled = false

  if (starting_page == 1) {
    listVendor();
    document.getElementById("prev").disabled = true;
    document.getElementById("first").disabled = true;

  }

  if (starting_page > 1) {
    document.getElementById("prev").disabled = false;
    document.getElementById("first").disabled = false;
    document.getElementById("next").disabled = false;
    document.getElementById("last").disabled = false
    starting_page--;
    listVendor();

  }

}




const nextp = () => {
  starting_page++
  document.getElementById("first").disabled = false;
  document.getElementById("prev").disabled = false;


  if (starting_page * page_per_item >= length) {
    document.getElementById("next").disabled = true;
    document.getElementById("last").disabled = true;

  }

  if (starting_page != 1) {
    document.getElementById("first").disabled = false;

  }

  listVendor();

  if (starting_page > 1) {
    document.getElementById("prev").disabled = false;
  }
}




const lastp = () => {

  document.getElementById("first").disabled = false;
  document.getElementById("prev").disabled = false;
  let x = (length / page_per_item);
  starting_page = Math.ceil(x)


  if (starting_page * page_per_item >= length) {
    document.getElementById("last").disabled = true;
    document.getElementById("next").disabled = true;
 
  }

  listVendor();
}
