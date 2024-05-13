const pdfGenrate = async (url, title) => {
  const response = await fetch(url);
  let result = await response.json();
  try {
    const obj = {
      header: {
        'Company': 'KartEzy',
        'Title': title
      },
      data: [result]
    }
    const formData = new FormData();
    formData.append("pdf", JSON.stringify(obj));
    let data = new URLSearchParams(formData);

    let response = await fetch("/kartezy/pdf", {
      method: "POST",
      body: data,
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
      }
    })
    const pdfGenrate = await response.json();
    if (response.status == 200) {
      await Swal.fire({
        position: "middle",
        icon: "success",
        title: pdfGenrate.message,
        showConfirmButton: false,
        timer: 1000,
      })
      window.open(pdfGenrate.url.replace("./public", ""), "_blank");
    }
    else {
      Swal.fire({
        title: 'Opps...',
        text: pdfGenrate.message,
        icon: 'error',
      });
    }
  }
  catch (error) {
    Swal.fire({
      title: 'ERROR',
      text: error,
      icon: 'error',
    });
  }
}

const invoiceGenrate = async(data) => {
  try {
    const obj = {
      header: {
        'Company': 'KartEzy',
        'Title': 'Invoice'
      },
      data: [data.information, data.items]
    }
    const formData = new FormData();
    formData.append("pdf", JSON.stringify(obj));
    data = new URLSearchParams(formData);
    let response = await fetch("/kartezy/pdf", {
      method: "POST",
      body: data,
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
      }
    })
    const pdfGenrate = await response.json();
    if (response.status == 200) {
      await Swal.fire({
        position: "middle",
        icon: "success",
        title: pdfGenrate.message,
        showConfirmButton: false,
        timer: 1000,
      })
      window.open(pdfGenrate.url.replace("./public", ""), "_blank");
    }
    else {
      Swal.fire({
        title: 'Opps...',
        text: pdfGenrate.message,
        icon: 'error',
      });
    }
  }
  catch (error) {
    Swal.fire({
      title: 'ERROR',
      text: error,
      icon: 'error',
    });
  }
}