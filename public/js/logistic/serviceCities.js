let resData;
const searchData = () => {
  const searchBox = document.querySelector('.search-box');
  const options = document.querySelectorAll('.options li');
  const selectedOption = document.querySelector('.selected-option');
  const clearButton = document.getElementById('clear-button');
  // Check if search country present in menu list 
  searchBox.addEventListener('input', () => {
    const searchTerm = searchBox.value.toLowerCase();
    options.forEach(option => {
      const text = option.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });
  });

  // Iterating and printing the selected country name 
  for (const option of options) {
    option.addEventListener('click', () => {
      const value = option.getAttribute('data-value');
      selectedOption.textContent = "You have chosen: "
      document.getElementById('selectedOpt').innerHTML = option.textContent
      searchBox.value = '';
      for (const opt of options) {
        opt.style.display = 'block';
      }
    });
  }

  clearButton.addEventListener('click', function () {
    selectedOption.textContent = 'Select an option';
    document.getElementById('selectedOpt').innerHTML = ''
    searchBox.value = '';
    options.forEach(option => {
      option.style.display = 'block';
    });
  });
}
const fillData = (cities) => {
  const select = document.getElementById('cityOptions')
  cities.forEach(ele => {
    const newOpt = document.createElement('li')
    newOpt.innerHTML = ele;
    newOpt.setAttribute('data-value', ele)
    select.appendChild(newOpt)
  })
  searchData()
}
const submitCityService = async () => {
  const selectedCityService = document.getElementById('selectedOpt').innerHTML;
  try {
    if (!selectedCityService) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Plz Select one City!"
      });
    } else {
      const response = await fetch('/kartezy/logistic/serviceCitiesinsert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selectedCityService })
      })
      const jsonResp = await response.json()
      if (response.status == 200) {
        document.getElementById('closeModal').click()
        Swal.fire({
          icon: "success",
          title: "Your Cities are saved!",
          showConfirmButton: false,
          timer: 1500
        });
        displayServiceCities();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: jsonResp.msg
        });
      }
    }

  } catch (error) {
    console.log(error);
  }
}
const fetchCity = async () => {
  try {
    const response = await fetch('/kartezy/logistic/serviceCitiesfetch', { method: 'POST' })
    const cities = await response.json()
    if (response.status === 200) {
      fillData(cities)
    }
  } catch (error) {
    console.log(error);
  }
}
const fillCitiesData = (resData) => {
  const thead = document.querySelector("table thead");
  const tr = document.createElement("tr");
  if (resData.length != 0) {
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = ''
    resData.forEach(el => {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${el.id}</td>
          <td>${el.logistic_id}</td>
          <td>${el.city}</td>
          <td>${el.pincode}</td>
          <td>
            <div class="">
              <a href="#" data-id ="${el.id}" class ="p-2 deleteCity" ><i class="bi bi-trash-fill text-danger"></i></a>
              </div> 
              </td>`;
      tbody.appendChild(row);
      const deleteBtn = row.querySelector(".deleteCity");
      deleteBtn.addEventListener('click', (event) => {
        deleteCity(event, el.id);
      })
    })
  } else {
    // tr.innerHTML = `<th>No data Found</th>`;
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML=''
    thead.appendChild(tr);
  }
}
const displayServiceCities = async () => {
  const response = await fetch("/kartezy/logistic/selectedServiceCitiesfetch", {
    method: "POST",
  })
  resData = await response.json();
  if (response.status === 200) {
    fillCitiesData(resData)
  } else {
    console.log(resData.msg);
  }
}
const deleteCity = async (event, id) => {
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
      const response = await fetch("/kartezy/logistic/deleteServiceCities", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: Number(id)
        })
      });
      const resData = await response.json();
      if (response.status === 200) {

        const tr = event.target.closest("tr");
        tr.remove();

        Swal.fire({
          title: "Deleted!",
          text: "City has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        fetchCity()
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
document.getElementById('serchField').addEventListener('input', (event) => {
  const query=event.target.value
  newData = resData.filter((obj) => {
    return obj.city.includes(query.charAt(0).toUpperCase() + query.slice(1)) || obj.pincode.includes(query)
  })
  fillCitiesData(newData)
})
displayServiceCities();
fetchCity()

