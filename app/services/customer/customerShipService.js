// ** Services

const CustomerShipToSQL = require("../../sql/customer/customerShipSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class CustomerShipToService {
  static async getCustomerShipTo(dataItem, result) {
    let query = await CustomerShipToSQL.getCustomerShipTo(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchCustomerShipTo(dataItem, result) {
    let resultData = [];
    let query;
    query = await CustomerShipToSQL.searchCustomerShipTo(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createCustomerShipTo(dataItem, result) {
    let query = await CustomerShipToSQL.createCustomerShipTo(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateCustomerShipTo(dataItem, result) {
    let query = await CustomerShipToSQL.updateCustomerShipTo(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteCustomerShipTo(dataItem, result) {
    let query = await CustomerShipToSQL.deleteCustomerShipTo(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeCustomerShipToName(dataItem, result) {
    let query = await CustomerShipToSQL.GetByLikeCustomerShipToName(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeCustomerShipToAlphabetAndInuse(dataItem, result) {
    let query = await CustomerShipToSQL.GetByLikeCustomerShipToAlphabetAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = CustomerShipToService;
