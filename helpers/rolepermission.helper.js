const logger = require('../configs/pino.config');
const database = require('./database.helper');

class RolePermission {
  constructor() {
    this.db = new database();
  }

  getRolePermission = async (roleName) => {
    try {
      const role = await this.db.executeQuery("select * from roles where role_name = ? and is_delete = 0", [roleName]);
      if (typeof role == 'string') {
        logger.error(role);
        return { flag: false, message: "Role is invalid" }
      }
      else if (role.length == 0) {
        logger.error("Role is not exist")
        return { flag: false, message: "Role is not exist" }
      }
      const permissions = await this.db.executeQuery("select * from permissions left join role_permissions on permissions.id = role_permissions.permission_id where role_id = ? and permissions.is_delete = 0;", [role[0].id]);
      if (typeof permissions == 'string') {
        logger.error(permissions)
        return { flag: false, message: "Role is invalid" }
      }
      else if (permissions.length == 0) {
        logger.error('Permission is not exist')
        return { flag: false, message: "Permission is not exist" }
      }
      else {
        return { flag: true, message: permissions }
      }
    }
    catch (error) {
      logger.error(error);
      return { flag: false, message: "Server side error, Restart application..." }
    }
  }

  updateRolePermission = async (rolePermissionId) => {
    try {
      const rolePermission = await this.db.executeQuery("select * from role_permissions where id = ?", [rolePermissionId]);
      if (typeof rolePermission == 'string' || (Array.isArray(rolePermission) == true && rolePermission.length <= 0)) {
        logger.error(rolePermission);
        return {
          flag: false,
          message: 'Role permission is not found'
        }
      }
      const isActive = rolePermission[0].is_delete == 0 ? 1 : 0;
      const result = await this.db.updateData('role_permissions', { is_delete: isActive }, { id: rolePermissionId });
      if (typeof result == 'string' || (Array.isArray(result) == true && result.affetctedRows <= 0)) {
        logger.error(result);
        return {
          flag: false,
          message: 'Role permission is not updated'
        }
      }
      return {
        flag: true,
        message: `Role permission is updated`
      }
    }
    catch (error) {
      logger.error(error);
      return {
        flag: false,
        message: 'Somethig is wrong...'
      }
    }
  }

  getPermissions = async () => {
    try {
      const permissions = await this.db.executeQuery("select * from permissions where is_delete = 0");
      if (Array.isArray(permissions) == true) {
        if (permissions.length <= 0) {
          return { flag: false, message: 'Permission is not exist...' };
        }
        else {
          return { flag: true, message: permissions };
        }
      }
      else {
        logger.error(permissions);
        return { flag: false, message: "Permission is not exist..." }
      }
    }
    catch (error) {
      logger.error(error);
      return { flag: false, message: 'Somethig is wrong...' }
    }
  }

  addRolePermission = async (roleName, permissions) => {
    try {
      const role = await this.db.executeQuery("select * from roles where role_name = ?", [roleName]);
      if (typeof role == 'string' || (Array.isArray(role) && role.length <= 0)) {
        logger.error(role);
        return {
          flag: false,
          message: `${roleName} is invalid...`
        }
      }
      let error = {};
      for (let i = 0; i < permissions.length; i++) {
        const permission = permissions[i];
        try {
          let result = await this.db.updateData("role_permissions", { is_delete: 0 }, { role_id: role[0].id, permission_id: permission })
          if (typeof result == 'string') {
            logger.error(result);
            return { flag: false, message: `Permission is invalid...` }
          }
          else if (result.affectedRows == 0) {
            result = await this.db.insertData("role_permissions", { role_id: role[0].id, permission_id: permission })
            if (typeof result == 'string' || result.affectedRows == 0) {
              logger.error(result);
              return { flag: false, message: `Permission is invalid...` }
            }
          }
          error = { flag: true, message: 'Permission is added...' }
        }
        catch (error) {
          logger.error(error);
          return { flag: false, message: 'Somethig is wrong...' }
        }
      }
      return error;
    }
    catch (error) {
      logger.error(error)
      return {
        flag: false,
        message: 'Somethig is wrong...'
      }
    }
  }
}
module.exports = RolePermission;