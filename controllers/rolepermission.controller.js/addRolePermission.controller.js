const RolePermission = require("../../helpers/rolepermission.helper");

const addRolePermissionGet = (request, response) => {
  response.render("pages/rolePermission/addrole.view.ejs")
}

const addRolePermissionPost = async(request, response) => {
  const permissions = typeof request.body.permissions == 'string'?[request.body.permissions]:request.body.permissions;
  const rolePermission = new RolePermission();
  const result = await rolePermission.addRolePermission(request.body.roleName, permissions);
  response.status(result.flag == false?500:200).send(result);
}

module.exports = {
  addRolePermissionGet,
  addRolePermissionPost,
}