const isValidEvent = () => {
  let isValid = true;
  if(eventNote.value.trim() == ""){
    eventNote.outerHTML += `<div class='primary-text text-start'>Enter note...</div>`
    eventNote.focus()
    isValid = false;
  }
  if(eventColor.value.trim() == ""){
    eventColor.outerHTML += `<div class='primary-text text-start'>Enter color...</div>`
    isValid = false;
    eventColor.focus()
  }
  if(eventDate.value.trim() == ""){
    isValid = false;
    eventDate.outerHTML += `<div class='primary-text text-start'>Enter event date...</div>`
    eventDate.focus()
  }
  if(eventName.value.trim() == ""){
    eventName.outerHTML += `<div class='primary-text text-start'>Enter event name...</div>`
    isValid = false;
    eventName.focus()
  }
  return isValid; 
}

const addEvent = async () => {
  if(!isValidEvent()){
    return;
  }
  const formData = new URLSearchParams(new FormData(document.getElementById("eventform")))
  const response = await fetch("/kartezy/event/add", {
    method: "POST",
    body: formData
  })
  const result = await response.json();
  console.log(response, result)
  if (response.status === 200 || result.flag == true) {
    Swal.fire({
      title: result.message,
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
    displayNotificationCalenderView();
  } else {
    Swal.fire({
      title: result.message,
      icon: "error",
      showConfirmButton: false,
      timer: 2000,
    });
  }
}

const updateEvent = async (eventId) => {
  if(!isValidEvent()){
    return;
  }
  const formData = new URLSearchParams(new FormData(document.getElementById("updateeventform")))
  Swal.fire({
    title: "Are you sure to saved event?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3498DB",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Saved it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await fetch(`/kartezy/event/update/${eventId}`, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(response, result)
      if (response.status == 200 || result.flag == 1) {
        Swal.fire({
          title: "Saved!",
          text: result.message,
          icon: "success",
          showCancelButton: false,
          timer: 2000,
        });
        displayNotificationCalenderView();
      }
      else {
        Swal.fire({
          title: "Saved!",
          text: result.message || 'Something is wrong...',
          icon: "error",
          showCancelButton: false,
          timer: 2000,
        });
      }
    }
  });
}

const deleteEvent = async (eventId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await fetch(`/kartezy/event/delete/${eventId}`);
      const result = await response.json();
      if (response.status == 200 || result.flag == 1) {
        Swal.fire({
          title: "Deleted!",
          text: result.message,
          icon: "success",
          showCancelButton: false,
          timer: 2000,
        });
        displayNotificationCalenderView();
      }
      else {
        Swal.fire({
          title: "Deleted!",
          text: result.message || 'Something is wrong...',
          icon: "error",
          showCancelButton: false,
          timer: 2000,
        });
      }
    }
  });
}

const createEventForm = (eventDate) => {
  eventDate = eventDate.replaceAll("/32", "/31")
  Swal.fire({
    position: "middle",
    title: `<h1 class='primary-text'><i class="bi bi-calendar-plus primary-text fs-2"></i>&nbsp;Event</h1>`,
    html: `
    <form id='eventform'>
      <div class='form-group mb-3'>
        <label class='primary-text text-start fs-5' style='width: 100%;'>Event Title : </label><br>
        <input type='text' value='Event 1' name='eventName' id='eventName' placeholder='Enter event title...' class='form-control'>  
      </div>
      <div class='form-group mb-3'>
        <label class='primary-text text-start fs-5' style='width: 100%;'>Event Date : </label><br>
        <input type='date' name='eventDate' id='eventDate' value="${new Date(eventDate).toISOString().substring(0, 10)}" class='form-control' min='${new Date().toISOString().substring(0, 10)}'>  
      </div>
      <div class='form-group mb-3 d-flex'>
        <label class='primary-text text-start fs-5 me-4'>Event Color : </label><input type='color' name='eventColor' id="eventColor" value="#7040f2" class='form-control' style='width: 60px'>  
      </div>
      <div class='form-group mb-3'>
        <label class='primary-text text-start fs-5' style='width: 100%;'>Event Note : </label><br>
        <textarea value='Event 1' id='eventNote' name='eventNote' rows='3' id='eventNote' placeholder='Enter event note...' class='form-control' style='resize: none'></textarea>  
      </div>
      <div class='form-group mb-3'>
        <span class='admin-btn' onclick='addEvent()'>Add Event</span>
      </div>
      </form>
    `,
    showConfirmButton: false,
  });
}

const updateEventForm = async (eventId, data) => {
  data = JSON.parse(data.replaceAll("&dbq;", `"`));

  Swal.fire({
    position: "middle",
    title: `<h1 class='primary-text'><i class="bi bi-calendar3-event primary-text fs-2"></i>&nbsp;Event</h1>`,
    html: `
    <form id='updateeventform'>
      <div class='form-group mb-3'>
        <label class='primary-text text-start fs-5' style='width: 100%;'>Event Title : </label><br>
        <input type='text' value='Event 1' name='eventName' id='eventName' placeholder='Enter event title...' class='form-control' value='${data.title}'>  
      </div>
      <div class='form-group mb-3'>
        <label class='primary-text text-start fs-5' style='width: 100%;'>Event Date : </label><br>
        <input type='text' name='eventDate' id='eventDate' value="${data.event_date}" class='form-control' min='${new Date().toISOString().substring(0, 10)}' disabled>  
      </div>
      <div class='form-group mb-3 d-flex'>
        <label class='primary-text text-start fs-5 me-4'>Event Color : </label><input name='eventColor' id='eventColor' type='color' value="${data.color}" class='form-control' style='width: 60px'>  
      </div>
      <div class='form-group mb-3'>
        <label class='primary-text text-start fs-5' style='width: 100%;'>Event Note : </label><br>
        <textarea value='Event 1' name='eventNote' rows='3' id='eventNote' placeholder='Enter event note...' class='form-control' style='resize: none'>${data.note}</textarea>  
      </div>
      <div class='form-group mb-3'>
        <span class='admin-btn' onclick='updateEvent(${data.id})'>Save</span>
      </div>
      </form>
    `,
    showConfirmButton: false,
  });
}

const getTitleInNotification = (arr, serach, key) => {
  let titles = [];
  for (let i = 0; i < arr.length; i++) {
    const diff = Math.abs(Math.floor((new Date(arr[i][key]) - new Date(serach)) / (1000 * 60 * 60 * 24)))
    if (diff == 0) {
      titles.push(arr[i])
    }
  }
  return titles;
}

const notificationsDisplay = (arr) => {
  arr = JSON.parse(arr.replaceAll("&dbq;", `"`));
  let res = '<div class="container" style="height: 50dvh; overflow-y; auto">'
  for (let i = 0; i < arr.length; i++) {
    res += `
      <div class='row my-3 pr-2 py-2 bg-label-primary' style='border-radius: 50px; width: 100%'>
        <div class='col d-flex' style='align-items: center; width: 100%'>
          <i class="bi bi-bell rounded-full fs-1 bg-purple text-light me-3 rounded-full p-3"></i>
          <div>
            <div class='bg-label-primary text-start'><b>${arr[i].title}</b></div>
            <div class='text-dark text-start'>${arr[i].note}</div>
          </div>
        </div>
      </div>
    `
  }
  res += "</div>"
  Swal.fire({
    position: "middle",
    title: `<h1>Notifications - ${arr.length}</h1>`,
    html: res,
    showConfirmButton: false,
  });
}

const eventDisplay = (arr) => {
  arr = JSON.parse(arr.replaceAll("&dbq;", `"`));
  let res = '<div class="container" style="height: 50dvh; overflow-y; auto">'
  for (let i = 0; i < arr.length; i++) {
    res += `
      <div class='row my-3 pr-2 py-2' style='border-radius: 50px; width: 100%; background-color: ${arr[i].color}1a;'>
        <div class='col d-flex' style='position: relative; align-items: center; width: 100%;'>
          <i class="bi bi-bell rounded-full fs-1 text-light me-3 rounded-full p-3" style='background-color: ${arr[i].color}'></i>
          <div>
            <div class='text-start' style='color: ${arr[i].color}'><b>${arr[i].title}</b></div>
            <div class='text-dark text-start'>${arr[i].note}</div>
          </div>
          <div class='d-flex' style='position: absolute; right: 25px; top: -10px; padding: 10px; border-radius: 50%;'>
            <i class="bi bi-pencil-square fs-4 me-3" style='color: ${arr[i].color}' onclick="updateEventForm(${arr[i].id}, '${JSON.stringify(arr[i]).replaceAll(`"`, "&dbq;")}')"></i>
            <i class="bi bi-trash-fill fs-4" style='color: ${arr[i].color}' onclick='deleteEvent(${arr[i].id})'></i>
          </div>
        </div>
      </div>
    `
  }
  res += "</div>"
  Swal.fire({
    position: "middle",
    title: `<h1>Events - ${arr.length}</h1>`,
    html: res,
    showConfirmButton: false,
  });
}

const createCalendarBodyOneMonth = (year, month, arr, events) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const calendarHeader = document.querySelector("#calendar #header #printTime");
  const calendarBody = document.querySelector("#calendar #body");

  const startDate = new Date(`${year}/${month}/01`);
  const endDate = new Date(`${year}/${month}/${new Date(year, month, 0).getDate()}`);

  calendarHeader.innerHTML = `<span id='month' style='display: none'>${startDate.getMonth() + 1}</span><span id='year' style='display: none'>${startDate.getFullYear()}</span>${year} - ${months[startDate.getMonth()]}`;
  calendarBody.innerHTML = "";

  let isCheck = false;
  let currentDay = 0;

  const tr = document.createElement("tr");
  days.forEach(day => {
    tr.innerHTML += `<th class='bg-red text-light fs-3'>${day}</th>`;
  })
  calendarBody.appendChild(tr);

  for (let i = 1; i <= 6; i++) {
    const tr = document.createElement("tr")
    for (let j = 1; j <= 7; j++) {
      const td = document.createElement("td")
      if (startDate.getDay() < i * j && !isCheck) {
        isCheck = true;
      }
      if (isCheck == true && currentDay < endDate.getDate()) {
        currentDay++;
        let notifications = getTitleInNotification(arr, `${year}/${month}/${currentDay}`, 'create_at');
        let eventsResult = getTitleInNotification(events, `${year}/${month}/${currentDay}`, 'event_date');

        let res = "<div style='position: relative'>"

        if (notifications.length > 0) {
          const str = JSON.stringify(notifications).replaceAll(`"`, "&dbq;")
          res += `<div style='position: absolute; right: -15px; top: -15px; padding: 10px; border-radius: 50%;' class='bg-purple' onmouseover="notificationsDisplay('${str}')"></div>`
        }
        if (eventsResult.length > 0) {
          const str = JSON.stringify(eventsResult).replaceAll(`"`, "&dbq;")
          res += `<div style='position: absolute; right: -15px; bottom: -15px; padding: 10px; border-radius: 50%; background-color:${eventsResult[0].color}' onmouseover="eventDisplay('${str}')"></div>`
        }
        res += `<div class='primary-text fs-4'>${currentDay}</div></div>`;

        td.innerHTML = res;
        td.setAttribute("onclick", `createEventForm('${year}/${month}/${currentDay + 1}')`)
      }
      td.className = 'fs-4 primary-text'
      tr.appendChild(td)
    }
    calendarBody.appendChild(tr);
    if (currentDay == endDate.getDate()) {
      break;
    }
  }
}


const createCalendar = (startDate, endDate, arr, events) => {
  try {
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    createCalendarBodyOneMonth(startDate.getFullYear(), startDate.getMonth() + 1, arr, events);
  }
  catch (error) {
    console.log(error);
  }

  document.getElementById("nextMonthCalendar").addEventListener("click", () => {
    let currentMonth = Number(document.querySelector("#calendar #header #month").innerHTML)
    let currentYear = Number(document.querySelector("#calendar #header #year").innerHTML)
    if (currentMonth == 12) {
      currentYear++;
      currentMonth = 1
    }
    else {
      currentMonth++;
    }
    createCalendarBodyOneMonth(currentYear, currentMonth, arr, events)
  })

  document.getElementById("showCurrentEvent").addEventListener("click", () => {
    let result = getTitleInNotification(events, `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`, 'event_date');
    eventDisplay(JSON.stringify(result))
  })

  document.getElementById("previousMonthCalendar").addEventListener("click", () => {
    let currentMonth = Number(document.querySelector("#calendar #header #month").innerHTML)
    let currentYear = Number(document.querySelector("#calendar #header #year").innerHTML)

    if (new Date(currentYear, currentMonth) > new Date(startDate.getFullYear(), startDate.getMonth() + 1)) {
      if (currentMonth == 1) {
        currentYear--;
        currentMonth = 12
      }
      else {
        currentMonth--;
      }
      createCalendarBodyOneMonth(currentYear, currentMonth, arr, events)
    }
  })
}

const displayNotificationCalenderView = async () => {
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

    const events = (await (await fetch("/kartezy/events")).json()).message;

    if (response.status == 200 || notifications.length > 0) {
      if (notifications.length > 0) {
        createCalendar(notifications[notifications.length - 1].create_at, notifications[0].create_at, notifications, events)
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
displayNotificationCalenderView();