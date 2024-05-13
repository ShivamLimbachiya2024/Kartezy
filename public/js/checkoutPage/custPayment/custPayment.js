
document.getElementById('paymentForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const formdata = new FormData(document.getElementById('paymentForm'))
  const data = new URLSearchParams(formdata);
  let isValid = true;

  const cardHolderNameReg = /^[a-zA-Z]+[a-zA-Z\s]*\.?$/
  const cardNumberReg = /^\d{4}-\d{4}-\d{4}-\d{4}$/
  const cardExpReg = /^(0[1-9]|1[0-2])\/\d{2}$/
  const cardCVVReg = /^\d{3}$/

  const credit = document.getElementById('credit')
  const debit = document.getElementById('debit')
  const cardHolderName = document.getElementById('card_holder_name')
  const cardNumber = document.getElementById('card_number')
  const expiry = document.getElementById('expiry')
  const cvv = document.getElementById('cvv')

  if (!cardHolderNameReg.test(cardHolderName.value)) {
    cardHolderName.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    cardHolderName.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (!cardNumberReg.test(cardNumber.value)) {
    cardNumber.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    cardNumber.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (!cardExpReg.test(expiry.value)) {
    expiry.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    expiry.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (!cardCVVReg.test(cvv.value)) {
    cvv.nextElementSibling.setAttribute('class', 'text-danger')
    isValid = false
  } else {
    cvv.nextElementSibling.setAttribute('class', 'invalid-feedback')
  }
  if (credit.checked === false && debit.checked === false) {
    document.getElementById('typeRadio').setAttribute('class', 'text-danger')
    isValid = false
  } else {
    document.getElementById('typeRadio').setAttribute('class', 'invalid-feedback')
  }
  if (true) {
    await submitPaymentData(data.toString())
  }
})
const submitPaymentData = async (data) => {
  try {
    const response = await fetch('/kartezy/submitCheckoutPaymentform', {
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
