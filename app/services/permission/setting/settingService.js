// ** Services
const SettingSQL = require("../../../sql/permission/setting/settingSQL");
const MySQLExecute = require("../../../businessData/dbExecute.js");

// ** get connect permisision Database
const configDb = "Permission";

class SettingService {
  static async getPermissionAll(dataItem, result) {
    let query = await SettingSQL.getPermissionAll(dataItem);
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }

  static async getPermissionMenu(dataItem, result) {
    let query = await SettingSQL.getPermissionMenu(dataItem);
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }

  static async getPermissionCheck(dataItem, result) {
    let query = await SettingSQL.getPermissionCheck(dataItem);
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }
  static async search(dataItem, result) {
    let query = await SettingSQL.search(dataItem);
    let resultData = await MySQLExecute.searchList(query, result, configDb);
    return resultData;
  }

  static async create(dataItem, result) {
    let query = await SettingSQL.create(dataItem);
    let resultData = await MySQLExecute.create(query, result, configDb);
    return resultData;
  }

  static async update(dataItem, result) {
    let query = await SettingSQL.update(dataItem);
    let resultData = await MySQLExecute.update(query, result, configDb);
    return resultData;
  }

  static async delete(dataItem, result) {
    let query = await SettingSQL.delete(dataItem);
    let resultData = await MySQLExecute.delete(query, result, configDb);
    return resultData;
  }
}

module.exports = SettingService;
