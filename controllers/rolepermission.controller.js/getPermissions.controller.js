const RolePermission = require("../../helpers/rolepermission.helper")

const getPermissions = async (request, response) => {
    const rolePermission = new RolePermission();
    const result = await rolePermission.getPermissions();
    response.status(result.flag == false?500:200).send(result);
}

module.exports = {
    getPermissions,
}