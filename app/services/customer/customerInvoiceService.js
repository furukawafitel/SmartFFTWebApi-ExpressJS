// ** Services

const CustomerInvoiceSQL = require("../../sql/customer/customerInvoiceSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class CustomerInvoiceService {
  static async getCustomerInvoice(dataItem, result) {
    let query = await CustomerInvoiceSQL.getCustomerInvoice(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchCustomerInvoice(dataItem, result) {
    let resultData = [];
    let query;
    query = await CustomerInvoiceSQL.searchCustomerInvoice(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createCustomerInvoice(dataItem, result) {
    let query = await CustomerInvoiceSQL.createCustomerInvoice(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateCustomerInvoice(dataItem, result) {
    let query = await CustomerInvoiceSQL.updateCustomerInvoice(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteCustomerInvoice(dataItem, result) {
    let query = await CustomerInvoiceSQL.deleteCustomerInvoice(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeCustomerInvoiceToName(dataItem, result) {
    let query = await CustomerInvoiceSQL.GetByLikeCustomerInvoiceToName(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeCustomerInvoiceToAlphabetAndInuse(dataItem, result) {
    let query =
      await CustomerInvoiceSQL.GetByLikeCustomerInvoiceToAlphabetAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse(
    dataItem,
    result
  ) {
    let query =
      await CustomerInvoiceSQL.GetCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = CustomerInvoiceService;
