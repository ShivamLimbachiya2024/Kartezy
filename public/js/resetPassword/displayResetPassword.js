const displayResetPassword = () => {
  Swal.fire({
    position: "middle",
    html: `
      <form id='resetpasswordform'>
      <table align='center' cellpadding='10px'>
        <tr>
          <td colspan='2' class='text-center'><i class="bi bi-person-bounding-box primary-text" style='font-size: 100px'></i></td>
        </tr>
        <tr>
          <td colspan='2' style='font-size: 100px; font-weight: bold' class='primary-text text-center'><h3>Reset Password</h3></td>
        </tr>
        <tr>
          <td class='text-start'><i class="bi bi-key primary-text"></i>&nbsp;Old Password : </td>
          <td class='text-start'><input type='password' tabindex='1' class ='form-control primary-text' id='oldPassword' name='oldPassword' placeholder='Enter Old Password...'></td>
        </tr>
        <tr><td colspan='2'><span class='primary-text' id='oldpassworderror'></span></td></tr>
        <tr>
          <td class='text-start'><i class="bi bi-file-lock primary-text"></i>&nbsp;New Password : </td>
          <td class='text-start'><input type='password' tabindex='2' class ='form-control primary-text' id='newPassword' name='newPassword' placeholder='Enter New Password...'></td>
          </tr>
        <tr><td colspan='2'><span class='primary-text' id='newpassworderror'></span></td></tr>
        <tr>
          <td class='text-start'><i class="bi bi-file-lock-fill primary-text"></i>&nbsp;Re-Password : </td>
          <td class='text-start'><input type='password' tabindex='3' class ='form-control primary-text' id='rePassword' name='rePassword' placeholder='Enter Re-Password...'></td>
          </tr>
        <tr><td colspan='2'><span class='primary-text' id='repassworderror'></span></td></tr>
        <tr>
          <td colspan='2'><span class='admin-btn' tabindex='4' onclick='resetPassword()'><i class="bi bi-person-gear"></i>&nbsp;Change Password<span></td>
        </tr>
      </table>
      </form>
    `,
    showConfirmButton: false,
    
  })

  // reset password
}