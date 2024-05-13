document.getElementById('addForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const formdata = new FormData(document.getElementById('addForm'))
  const data = new URLSearchParams(formdata);
  let isValid = true;

  const addressReg = /^[a-zA-Z0-9][a-zA-Z0-9\s,'-]*$/;
  const houseNoReg = /^[A-Za-z0-9]+(?:[\s-]?)[A-Za-z0-9]*$/;
  const landmarkReg = /^[a-zA-Z0-9]+[a-zA-Z0-9\s,.-]*$/
  const areaReg = /^[a-zA-Z]+[a-zA-Z\s,]*$/;
  const cityStateReg = /^[a-zA-Z]+[A-Za-z\s]*$/;
  const zipCodereg = /^\d{6}$/;

  const house = document.getElementById('house')
  const landmark = document.getElementById('landmark')
  const address = document.getElementById('address')
  const area = document.getElementById('area')
  const city = document.getElementById('city')
  const state = document.getElementById('state')
  const zip = document.getElementById('zip')

  if (!houseNoReg.test(house.value)) {
    house.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    house.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (!landmarkReg.test(landmark.value)) {
    landmark.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    landmark.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (!addressReg.test(address.value)) {
    address.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    address.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (!areaReg.test(area.value)) {
    area.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    area.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (!areaReg.test(city.value)) {
    city.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    city.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (!cityStateReg.test(state.value)) {
    state.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    state.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (!zipCodereg.test(zip.value)) {
    zip.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    zip.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (isValid) {
    await submitFromData(data.toString())
  }
})
const submitFromData = async (data) => {
  try {
    const response = await fetch('/kartezy/submitCheckoutAddressform', {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    })
    const jsonResp = await response.json()
    if (response.status === 200) {
      window.location.href = document.referrer
    } else {
      Swal.fire({
        title: jsonResp.msg,
        icon: "error"
      });
    }
  } catch (error) {
    console.log(error);
  }
}
