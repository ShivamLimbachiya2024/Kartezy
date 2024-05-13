const RolePermission = require("../../helpers/rolepermission.helper");

const modifyPermissionGet = (request, response) => {
  response.render("pages/rolePermission/modifyrole.view.ejs")
}

const modifyPermissionPost = async(request, response) => {
  let rolePermissionId = request.body.rolePermissionId;
  const rolePermission = new RolePermission();
  const result = await rolePermission.updateRolePermission(rolePermissionId);
  response.send(result).status(result.flag == false?500:200);
}

module.exports = {
  modifyPermissionGet,
  modifyPermissionPost,
};