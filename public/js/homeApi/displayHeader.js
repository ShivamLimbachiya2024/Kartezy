const displayHeader = async () => {
  await displaycategory();
  const userInfo = document.getElementById("userinfo")
  try{
    if (document.cookie) {
      let response = await fetch("/kartezy/user", { method: 'POST' })
      if (response.status == 200) {
        const user = await response.json();
        userInfo.innerHTML = `
         
          <li class="nav-item" style="border-radius: 18px;">
            <a class="nav-link fs-19 active text-uppercase" style="padding-right:font-size: 30px; 0; padding-left: 0;" href="/kartezy/userCartRender"><i class="bi bi-cart3 fs-5
            "></i> </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active fs-19" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              ${user.first_name} ${user.last_name}
            </a>

            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" onclick='displayProfile()'>Profile</a></li>
              <li><a class="dropdown-item" href="/kartezy/savedProduct">Saved Product</a></li>
              <li><a class="dropdown-item" href="/kartezy/orders">Orders</a></li>
              <li><a class="dropdown-item" onclick='displayResetPassword()'>Reset Password</a></li>
              <li><a class="dropdown-item" href="/kartezy/calendar">Calendar</a></li>
              <li><a class="dropdown-item" href="/kartezy/logout">Logout</a></li>
            </ul>
          </li>

           <li class="nav-item" style="border-radius: 18px;">
            <span onclick='notification(false)' class="nav-link fs-19 active text-uppercase" style="padding-right: 0; padding-left: 0; "><i class="bi bi-bell"></i></span>
          </li>
          <li><a class="nav-link fs-19" href="/kartezy/displayQueryCustomer" ><i class="bi bi-question fs-4"></i></a></li>
        `
      }
      else {
        userInfo.innerHTML = `
        <li><a class="nav-link fs-19 active text-uppercase" style="padding-right: 20; padding-left: 0;" href="/kartezy/register">Sigin Up</a></li>
        <li><a class="nav-link fs-19 active text-uppercase" style="padding-right: 0; padding-left: 0;" href="/kartezy/login">Sigin In</a></li>
        <li><a class="nav-link fs-19" href="/kartezy/displayQueryCustomer" ><i class="bi bi-question fs-4"></i></a></li>
        `
      }
    }
    else {
      userInfo.innerHTML = `
      <li><a class="nav-link fs-19 active text-uppercase" style="padding-right: 20; padding-left: 0;" href="/kartezy/register">Sigin Up</a></li>
      <li><a class="nav-link fs-19 active text-uppercase" style="padding-right: 0; padding-left: 0;" href="/kartezy/login">Sigin In</a></li>
      <li><a class="nav-link fs-19" href="/kartezy/displayQueryCustomer" ><i class="bi bi-question fs-4"></i></a></li>
        `
    }
  }
  catch{
    userInfo.innerHTML = `
    <li><a class="nav-link fs-19 active text-uppercase" style="padding-right: 20; padding-left: 0;" href="/kartezy/register">Sigin Up</a></li>
    <li><a class="nav-link fs-19 active text-uppercase" style="padding-right: 0; padding-left: 0;" href="/kartezy/login">Sigin In</a></li>
    <li><a class="nav-link fs-19" href="/kartezy/displayQueryCustomer" ><i class="bi bi-question fs-4"></i></a></li>
    `
  }
}

const displaycategory = async() => {
  const response = await fetch("/kartezy/categories");
  if(response.status == 200){
    const categories = Object.keys((await response.json()).message);
    const categoryinfo = document.getElementById("categoryinfo");
    categories.forEach(category=>{
      categoryinfo.innerHTML += `<li class="nav-item"><a class="nav-link text-nowrap fs-19" href="/KartEzy/home/filterPage?category=${category}">${category}</a></li>`     
    })
  }
}

//notification panel



const displayNotification = (arr) => {
  let notifications = document.createElement("notifications");
  // notifications.style = "width: 500px; height: 500px;"
  // notifications.className = "container pt-4"

  arr.forEach(element => {
    notifications.innerHTML += `
      <div class="card m-2">
          <div class="card-header d-flex">
              <i class="bi bi-bell-fill text-start pe-1"></i>
              <big class='text-start'>${element.title}</big>
              <small style="position: absolute; right: 10px; margin-top: 10px;">${element.create_at}</small>
          </div>
          <div class="card-body text-start text-wrap">
              ${element.note}
          </div>
      </div>
      `
  });

  Swal.fire({
    position: "middle",
    title: `Notifications - ${arr.length}`,
    html: `
    <div style='height: 300px; overflow-y: auto; overflow-x: hidden;'>
    ${notifications.outerHTML}
    </div>
    <span class='admin-btn mt-3' onclick='notification(true)'><i class="bi bi-card-checklist primary-text"></i>&nbsp;View All</span>
    `,
    showConfirmButton: false,
  })
}

const timeDifference = (date) => {
  let diff = Math.floor((new Date() - new Date(date))/1000);
  let result;
  
  if(Math.floor(diff / (60*60*24*30*12)) >= 1){
    result = `${Math.floor(diff / (60*60*24*30*12))} year ago`
  }
  if(Math.floor(diff / (60*60*24*30*12)) < 1){
    result = `${Math.floor(diff / (60*60*24*30))} month ago`
  }
  if(Math.floor(diff / (60*60*24*30)) < 1){
    result = `${Math.floor(diff / (60*60*24))} Day ago`
  }
  if(Math.floor(diff / (60*60*24)) < 1){
    result = `${Math.floor(diff / (60*60))} hours ago`
  }
  if(Math.floor(diff / (60*60)) < 1){
    result = `${Math.floor(diff / (60))} minutes ago`
  }
  if (Math.floor(diff / 60) < 1) {
    result = `Just now`
  }
  return result;
}

const notification = async (isViewAll) => {
  const response = await fetch("/kartezy/notifications", { method: "POST" });
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
  let notifications = (await response.json()).message;
  if (response.status == 200 || notifications.length > 0) {
    notifications = notifications.map(item => {
      item.create_at = timeDifference(item.create_at)
      return item;
    })
    if(isViewAll == false){
      notifications = notifications.filter(item => {
        if (item.is_read == 0) {
          return item;
        }
      })
    }
    if (notifications.length > 0) {
      displayNotification(notifications)
    }
    else {
      Swal.fire({
        title: "Notification not avilable...",
        html: `<span class='admin-btn mt-3' onclick='notification(true)'><i class="bi bi-card-checklist primary-text"></i>&nbsp;View All</span>`,
        icon: "question",
        showConfirmButton: false
      });
    }
  }
  else {
    Swal.fire({
      position: "middle",
      title: "Notifications",
      html: `
      <div>Notification is not avilable</div>
      <br>
      <span class='admin-btn mt-3' style='width: 100px' onclick='notification(true)'><i class="bi bi-card-checklist primary-text"></i>&nbsp;View All</span>`,
      showConfirmButton: false,
    })
  }
  }
}
const fetchUserName = async () => {
  try {
    const response = await fetch('/kartezy/user', { method: 'POST' })
    const userJson = await response.json()
    const username = document.createTextNode(userJson.first_name + " " + userJson.last_name);
    const navBar = document.getElementById('navbarDropdown')
    if (!(navBar.lastChild.nodeType === 3)) {
      navBar.appendChild(username)
    }
  } catch (error) {
    console.log(error);
  }
}
fetchUserName() 