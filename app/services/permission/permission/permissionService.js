// ** Services
const PermissionSQL = require("../../../sql/permission/permission/permssionSQL");
const MySQLExecute = require("../../../businessData/dbExecute.js");

// ** get connect permisision Database
const configDb = "Permission";

class PermissionService {
  static async getPermissionCheck(dataItem, result) {
    let query = await PermissionSQL.getPermissionCheck(dataItem);
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }

  static async signin(dataItem, result) {
    let query = await PermissionSQL.signin(dataItem);
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }

  static async getUserGroup(dataItem, result) {
    let query = await PermissionSQL.getUserGroup(dataItem);
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }
  static async getLoginMenu(dataItem, result) {
    let query = await PermissionSQL.getLoginMenu(dataItem);
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }
}

module.exports = PermissionService;
