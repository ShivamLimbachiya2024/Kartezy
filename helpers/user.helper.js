const randomString = require("../services/randomString.service");
const database = require("./database.helper");
const logger = require("../configs/pino.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const addNotification = require("../services/notification.service");
class User {
  constructor() {
    this.db = new database();
  }

  insertUser = async (roleName, user) => {
    try {
      let result = await this.db.executeQuery("select id from roles where role_name = ? and is_delete = 0", [roleName]);
      if (typeof result == 'string') {
        logger.error(result);
        return {
          flag: false,
          message: `Somethig is wrong, ${user.firstname} is not registered...`,
        }
      }
      const roleId = result[0].id;

      result = await this.db.executeQuery("select * from users where email = ? or mobile_no = ? and role_id = ?", [user.email, user.mobileno, roleId]);
      if (typeof result == 'string') {
        logger.error(result);
        return {
          flag: false,
          message: `Somethig is wrong, ${user.firstname} is not registered...`,
        }
      }
      else if (result.length <= 0) {
        let activationCode = randomString(process.env.ACTIVATION_CODE_LENGTH);
        result = await this.db.insertData("users", {
          first_name: user.firstname,
          last_name: user.lastname,
          email: user.email,
          mobile_no: user.phoneno,
          dob: user.date,
          role_id: roleId,
          activation_code: activationCode,
        })
        if (typeof result == 'string' || result.affectedRows <= 0) {
          logger.error(result);
          return {
            flag: false,
            message: `Somethig is wrong, ${user.firstname} is not registered...`,
          }
        }
        addNotification(result.insertId, "Register", "User successfully registered...")
        return {
          flag: true,
          message: `${user.firstname} is successfully registered...`,
          activationCode: activationCode,
        }
      }
      else if (result.length > 0 && result[0].status == 0) {
        let activationCode = randomString(process.env.ACTIVATION_CODE_LENGTH);
        result = result[0];
        result = await this.db.updateData("users", {
          first_name: user.firstname,
          last_name: user.lastname,
          email: user.email,
          mobile_no: user.phoneno,
          dob: user.date,
          activation_code: activationCode,
          is_delete: 0,
        }, {
          id: result.id,
        })
        if (typeof result == 'string' || result.affectedRows <= 0) {
          logger.error(result);
          return {
            flag: false,
            message: `Somethig is wrong, ${user.firstname} is not registered...`,
          }
        }
        logger.error(result);
        return {
          flag: true,
          message: `${user.firstname} is not active, If active at that time click below link...`,
          activationCode: activationCode,
        }
      }
      else {
        logger.error(result);
        return {
          flag: false,
          message: `${user.firstname} is already exist...`,
        }
      }
    }
    catch (error) {
      logger.error(error);
      return {
        flag: false,
        message: `Somethig is wrong, ${user.firstname} is not registered...`,
      }
    }
  }

  activateUser = async (activationCode, newPassword) => {
    try {
      let user = await this.db.executeQuery("select * from users where activation_code = ? and is_delete = 0", [activationCode]);
      if (typeof user == 'string') {
        return {
          flag: false,
          message: "Something is wrong, Account not activate..."
        };
      }
      else if (user.length == 0) {
        return {
          flag: false,
          message: "Something is wrong, Account not activate...",
        };
      }

      user = user[0];
      // password is avilable or not
      let result = await this.db.executeQuery("select old_password from user_old_passwords where user_id = ? and is_delete = 0", [user.id]);
      if (typeof result == 'string') {
        return {
          flag: false,
          message: "Something is wrong, Account not activate..."
        };
      }
      else if (result.length > 0) {
        result = result.map(item => bcrypt.compareSync(newPassword, item.old_password));
        await addNotification(user.id, "Active Account", "Account is successfully activate...")
        if (result.indexOf(true) >= 0) {
          return {
            flag: false,
            message: "Password is already genrated so, change password...",
          };
        }
      }

      const diff = (new Date() - new Date(user.update_at)) / 1000;
      if (diff < process.env.ACTIVATION_TIME_TO_ACTIVE_USER) {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUND));
        newPassword = bcrypt.hashSync(newPassword, salt)
        let result = await this.db.updateData("users", { status: 1, password: newPassword }, { id: user.id, is_delete: 0 });
        if (typeof result == 'string' || result.affectedRows < 0) {
          return {
            flag: false,
            message: "Something is wrong, Accont not activate...",
          };
        }
        addNotification(user.id, "Activate user", "User is suceesfully activate...")
        return {
          flag: true,
          message: "Account is activation successfully...",
        }
      }
      else {
        return {
          flag: false,
          message: "Account activation time is expired....",
        };
      }
    }
    catch (error) {
      logger.error(error);
      return {
        flag: false,
        message: "Something is wrong, Account not activate...",
      };
    }
  }

  isLoginUSer = async (userName, password) => {
    try {
      let user = await this.db.executeQuery("select users.id, first_name, last_name, email, mobile_no, dob, activation_code, password, status, users.is_delete, role_name from users left join roles on users.role_id = roles.id where (email = ? or mobile_no = ?) and users.is_delete = 0", [userName, userName]);
      if (typeof user == 'string') {
        return {
          flag: false,
          message: "Somethig is wrong...",
        }
      }
      else if (user.length == 0) {
        return {
          flag: false,
          message: "Username and Password invalid...",
        }
      }

      user = user[0];
      let result = (await this.db.executeQuery("SELECT count(*) as 'no_of_user' FROM user_login_logs where timestampdiff(MINUTE, create_at, current_timestamp())<? and is_success = 0 and user_id = ?;", [process.env.LOGIN_INVALID_PASS_TIME, user.id]))
      if (typeof result == 'string') {
        return {
          flag: false,
          message: `Somethig is wrong....` + result,
        }
      }
      result = result[0].no_of_user;
      if (result >= process.env.LOGIN_INVALID_PASS) {
        return {
          flag: false,
          block_time: process.env.LOGIN_INVALID_PASS_TIME,
          message: `Password is wrong in ${process.env.LOGIN_INVALID_PASS}, so acount is block ${process.env.LOGIN_INVALID_PASS_TIME} minutes...`,
        }
      }

      const is_pass = bcrypt.compareSync(password, user.password);
      result = await this.db.insertData("user_login_logs", {
        user_id: user.id,
        is_success: is_pass,
      })
      if (typeof result == 'string' || result.affectedRows <= 0) {
        return {
          flag: false,
          message: `Somethig is wrong....` + result,
        }
      }

      if (is_pass) {
        logger.info("user is valid....")
        return {
          flag: true,
          userId: user.id,
          roleName: user.role_name,
          message: "Welcome " + user.first_name
        }
      }
      else {
        return {
          flag: false,
          message: "Username and Password invalid..."
        }
      }
    }
    catch (error) {
      logger.error(error);
      return {
        flag: false,
        message: "Something is wrong...",
      }
    }
  }

  isAccessPermission = async (url, method, user) => {
    try {
      let result = await this.db.executeQuery("select * from role_permissions left join permissions on role_permissions.permission_id = permissions.id where role_id = ? and lower(api_url) in (lower('" +url+ "'), lower('" +url+ "/')) and method=? and role_permissions.is_delete=0 and permissions.is_delete = 0;", [user.role_id, method])
      if (typeof result == 'string') {
        logger.error(result);
        return {
          flag: false,
          message: "Something is wrong..."
        }
      }
      else if (result.length <= 0) {
        return {
          flag: false,
          message: "Access denided...."
        }
      }
      else {
        return {
          flag: true,
          message: "Access allowed....",
        }
      }
    }
    catch (error) {
      logger.error(error);
      return {
        flag: false,
        message: "Something is wrong..."
      }
    }
  }

  forgetPassword = async (userName) => {
    try {
      let user = await this.db.executeQuery(`select * from users where (email = ? or mobile_no = ?) and status = '1' and is_delete = 0`, [userName, userName])
      if (typeof user == 'string') {
        logger.log(user)
        return ({
          flag: false,
          message: "Somethig is wrong, Please restart application....",
        })
      }
      if (user.length == 0) {
        logger.error("Account is already exist")
        return ({
          flag: false,
          message: "Sorry, Account is not exist....",
        })
      }
      else {
        let activationCode = randomString(process.env.ACTIVATION_CODE_LENGTH);
        let curtime = new Date();

        let result = await this.db.executeQuery(`update users set activation_code = ?, update_at = CURRENT_TIMESTAMP where email = ? or mobile_no = ?`, [activationCode, userName, userName]);

        if (typeof result == 'string') {
          logger.error(result)
          return ({
            flag: false,
            message: "Somethig is wrong, Please restart application....",
          })
        }
        else {
          user = user[0];
          result = await this.db.executeQuery("select * from user_old_passwords where user_id = ? and old_password = ? and is_delete = 0", [user.id, user.password]);
          if (result.length < 1) {
            result = await this.db.insertData("user_old_passwords", { user_id: user.id, old_password: user.password })
          }
          addNotification(user.id, "Forget Password", "User is forget password, So genrate new activation code...")
          return {
            flag: true,
            message: `${user.first_name} plese click below link...`,
            activationCode: activationCode,
          }
        }
      }
    }
    catch (error) {
      logger.error(error);
      return ({
        flag: false,
        message: 'ERROR : Somethig is wrong....',
      })
    }
  }

  changePassword = async (user, oldPassword, newPassword) => {
    try {
      if (bcrypt.compareSync(oldPassword, user.password) == false) {
        return {
          flag: false,
          message: "Password is incorrect...",
        }
      }

      let result = await this.db.insertData("user_old_passwords", { user_id: user.id, old_password: user.password })
      if (typeof result == 'string') {
        return {
          flag: false,
          message: "Something is wrong, Password not change..."
        };
      }

      result = await this.db.executeQuery("select old_password from user_old_passwords where user_id = ? and is_delete = 0", [user.id]);
      if (typeof result == 'string') {
        return {
          flag: false,
          message: "Something is wrong, Password not change..."
        };
      }
      else if (result.length > 0) {
        result = result.map(item => bcrypt.compareSync(newPassword, item.old_password));
        if (result.indexOf(true) >= 0) {
          return {
            flag: false,
            message: "Password is already genrated so, change password...",
          };
        }
      }
      const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUND));
      newPassword = bcrypt.hashSync(newPassword, salt)
      result = await this.db.updateData("users", { password: newPassword }, { id: user.id });
      if (typeof result == 'string' || result.affectedRows < 0) {
        return {
          flag: false,
          message: "Something is wrong, Password not change...",
        };
      }
      addNotification(user.id, "Password", "Password is reset...")
      return {
        flag: true,
        message: "Password change successfully updated....",
      }
    }
    catch (error) {
      logger.error(error);
      return {
        flag: false,
        message: "Somethig is wrong....",
      }
    }
  }

  updateUser = async (user, updateData) => {
    try{
      let result = await this.db.updateData("users", {
        first_name: updateData.firstName,
        last_name: updateData.lastName,
        dob: updateData.dob
      }, {id: user.id});

      if(result.affectedRows > 0){
        addNotification(user.id, "User", "User data is updated..")
        return {
          return: true,
          message: `${updateData.firstName} is updated...`
        }
      }
      return {
        return: false,
        message: `${updateData.firstName} is not updated...`
      }
    }
    catch(error){
      logger.error(error);
      return {
        flag: false,
        message: "Someting is wrong...."
      }
    }
  }
}
module.exports = User;