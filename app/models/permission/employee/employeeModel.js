// ** SERVICES PERMISSION

const EmployeeService = require("../../../services/permission/employee/employeeService");

class EmployeeModel {
  static async getEmployeeAll(dataItem, result) {
    let resultData = await EmployeeService.getEmployeeAll(dataItem, result);
    return resultData;
  }

  static async getEmployeeByEmpCode(dataItem, result) {
    let resultData = await EmployeeService.getEmployeeByEmpCode(
      dataItem,
      result
    );
    return resultData;
  }
}

module.exports = EmployeeModel;
