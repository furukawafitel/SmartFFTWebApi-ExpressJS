// ** Services
const EmployeeSQL = require("../../../sql/permission/employee/employeeSQL");
const MySQLExecute = require("../../../businessData/dbExecute.js");

// ** get connect permisision Database
const configDb = "Permission";

class EmployeeService {
  static async getEmployeeAll(dataItem, result) {
    let query = await EmployeeSQL.getEmployeeAll(dataItem);
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }

  static async getEmployeeByEmpCode(dataItem, result) {
    let query = await EmployeeSQL.getEmployeeByEmpCode(dataItem);
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }
}

module.exports = EmployeeService;
