// ** Services

const CustomerOrderFromSQL = require("../../sql/customer/customerOrderFromSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class CustomerOrderFromService {
  static async getCustomerOrderFrom(dataItem, result) {
    let query = await CustomerOrderFromSQL.getCustomerOrderFrom(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchCustomerOrderFrom(dataItem, result) {
    let resultData = [];
    let query;
    query = await CustomerOrderFromSQL.searchCustomerOrderFrom(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createCustomerOrderFrom(dataItem, result) {
    let query = await CustomerOrderFromSQL.createCustomerOrderFrom(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateCustomerOrderFrom(dataItem, result) {
    let query = await CustomerOrderFromSQL.updateCustomerOrderFrom(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteCustomerOrderFrom(dataItem, result) {
    let query = await CustomerOrderFromSQL.deleteCustomerOrderFrom(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeCustomerOrderFromName(dataItem, result) {
    let query = await CustomerOrderFromSQL.GetByLikeCustomerOrderFromName(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeCustomerOrderFromAlphabetAndInuse(dataItem, result) {
    let query =
      await CustomerOrderFromSQL.GetByLikeCustomerOrderFromAlphabetAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = CustomerOrderFromService;
