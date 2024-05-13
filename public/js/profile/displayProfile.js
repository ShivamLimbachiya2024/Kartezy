const displayProfile = async() => {
  const response = await fetch("/kartezy/user", {method: "POST"});
  const user = await response.json();
  if(response.status == 200){
    Swal.fire({
      position: "middle",
      html: `
        <table align='center' cellpadding='10px'>
          <tr>
            <td colspan='2' style='font-size: 100px; font-weight: bold' class='primary-text'>${user.first_name[0].toLocaleUpperCase()}</td>
          </tr>
          <tr>
            <td class='text-start'><i class="bi bi-person-fill primary-text"></i>&nbsp;First name : </td>
            <td class='text-start'>${user.first_name}</td>
          </tr>
          <tr>
            <td class='text-start'><i class="bi bi-person primary-text"></i>&nbsp;Last name : </td>
            <td class='text-start'>${user.last_name}</td>
          </tr>
          <tr>
            <td class='text-start'><i class="bi bi-envelope-open-fill primary-text"></i>&nbsp;Email ID : </td>
            <td class='text-start'>${user.email}</td>
          </tr>
          <tr>
            <td class='text-start'><i class="bi bi-phone primary-text"></i>&nbsp;Mobile number : </td>
            <td class='text-start'>${user.mobile_no}</td>
          </tr>
          <tr>
            <td class='text-start'><i class="bi bi-calendar-minus primary-text"></i>&nbsp;Date Of Birth : </td>
            <td class='text-start'>${user.dob}</td>
          </tr>
          <tr>
            <td colspan='2'><span class='admin-btn' onclick='editProfilePage()'><i class="bi bi-person-gear"></i>&nbsp;Edit Profile<span></td>
          </tr>
        </table>
      `,
      showConfirmButton: false,

    });
  }
  else{
    Swal.fire({
      position: "middle",
      icon: "error",
      title: user.message || 'User not found...',
      showConfirmButton: false,
      timer: 1500
    });
  }
}