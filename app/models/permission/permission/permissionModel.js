// ** SERVICES PERMISSION

const PermissionService = require("../../../services/permission/permission/permissionService");

class PermissionModel {
  // ** Get PermissionCheck
  static async getPermissionCheck(dataItem, result) {
    let resultData = await PermissionService.getPermissionCheck(
      dataItem,
      result
    );
    return resultData;
  }

  // ** Get Signin
  static async signin(dataItem, result) {
    let resultData = await PermissionService.signin(dataItem, result);
    return resultData;
  }

  // ** Get Usergroup
  static async getUserGroup(dataItem, result) {
    let resultData = await PermissionService.getUserGroup(dataItem, result);
    return resultData;
  }

  // ** Get MenuLogin
  static async getLoginMenu(dataItem, result) {
    let resultData = await PermissionService.getLoginMenu(dataItem, result);
    return resultData;
  }
}

module.exports = PermissionModel;
