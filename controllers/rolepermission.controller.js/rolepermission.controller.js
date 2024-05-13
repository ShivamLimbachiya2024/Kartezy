const RolePermission = require("../../helpers/rolepermission.helper");

const getRolePermission = async(request, response) => {
  let roleName = request.params.roleName;
  let rolePermissions = new RolePermission();
  const result = await rolePermissions.getRolePermission(roleName);
  response.status(result.flag == false?500:200).send(result)
}


module.exports = {
  getRolePermission,
};